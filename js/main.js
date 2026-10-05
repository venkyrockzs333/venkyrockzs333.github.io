/* Venkateshwarlu Boda portfolio
 * Scroll-driven 3D scene: Three.js (procedural model) + GSAP ScrollTrigger + Lenis.
 * Query flags: ?record (deterministic frame stepping for video capture), ?low (force low-quality mode)
 */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const { gsap, ScrollTrigger, Lenis } = window;
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const params = new URLSearchParams(location.search);
const RECORD = params.has('record');
const REDUCED = !RECORD && matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = () => innerWidth <= 760;
const LOW = params.has('low') || isMobile() || matchMedia('(pointer: coarse)').matches;
const TAU = Math.PI * 2;
const PURPLE = new THREE.Color('#B250FF');
const VIOLET = new THREE.Color('#8B5CF6');

/* ------------------------------------------------------------------ renderer */
const canvas = document.getElementById('gl');
const renderer = new THREE.WebGLRenderer({
  canvas, antialias: LOW, alpha: false, powerPreference: 'high-performance',
  preserveDrawingBuffer: RECORD,
});
let pixelRatio = RECORD ? 1 : Math.min(devicePixelRatio, LOW ? 1.5 : 2);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(innerWidth, innerHeight, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 0.1, 100);
camera.position.set(0, 0.6, 10);
camera.lookAt(0, 0.1, 0);

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 1.0;

/* post-processing (desktop only) */
let composer = null, bloom = null;
function setupComposer() {
  const rt = new THREE.WebGLRenderTarget(innerWidth * pixelRatio, innerHeight * pixelRatio, {
    type: THREE.HalfFloatType, samples: 4,
  });
  composer = new EffectComposer(renderer, rt);
  composer.setPixelRatio(pixelRatio);
  composer.setSize(innerWidth, innerHeight);
  composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.3, 0.5, 0.9);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
}
if (!LOW) setupComposer();

/* ------------------------------------------------------------------ helpers */
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const glowTex = canvasTex(256, 256, (g, w) => {
  const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
  r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.25, 'rgba(255,255,255,.45)');
  r.addColorStop(0.6, 'rgba(255,255,255,.08)'); r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r; g.fillRect(0, 0, w, w);
});
const hdr = (c, k) => c.clone().multiplyScalar(k);
const additive = (opts) => new THREE.MeshBasicMaterial({
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, ...opts,
});
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeOut = (v) => 1 - Math.pow(1 - clamp01(v), 3);
const smooth = (a, b, v) => { const x = clamp01((v - a) / (b - a)); return x * x * (3 - 2 * x); };

/* ------------------------------------------------------------------ background */
const bgMat = new THREE.ShaderMaterial({
  uniforms: {
    uBeige: { value: new THREE.Color('#EAE6E1') }, uDark: { value: new THREE.Color('#151515') },
    uViolet: { value: new THREE.Color('#1A1025') }, uDarkMix: { value: 0 }, uVioletMix: { value: 0 },
    uBeamX: { value: 0.65 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,
  fragmentShader: `
    uniform vec3 uBeige, uDark, uViolet; uniform float uDarkMix, uVioletMix, uBeamX; varying vec2 vUv;
    void main(){
      vec2 p = vUv - 0.5;
      vec3 light = uBeige * (1.0 + 0.035 * smoothstep(0.8, 0.0, length(p * vec2(1.2, 1.6))));
      vec3 dark = uDark * mix(0.55, 1.08, smoothstep(0.95, 0.15, length(p)));
      vec3 c = mix(light, dark, uDarkMix);
      vec3 vg = mix(uDark, uViolet * 1.6, smoothstep(0.0, 1.0, vUv.y));
      float g = exp(-pow(length((vUv - vec2(uBeamX, 1.02)) * vec2(1.4, 0.9)) * 2.4, 2.0));
      vg += vec3(0.16, 0.03, 0.34) * g * 0.6;
      c = mix(c, vg, uVioletMix);
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
    }`,
  depthWrite: false, depthTest: false,
});
const bg = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMat);
bg.frustumCulled = false; bg.renderOrder = -10; scene.add(bg);

/* ------------------------------------------------------------------ lights */
const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(3, 6, 5); scene.add(key);
const rim = new THREE.DirectionalLight(PURPLE, 0); rim.position.set(-5, 3, -4); scene.add(rim);
const rim2 = new THREE.DirectionalLight(VIOLET, 0); rim2.position.set(5, -1, -3); scene.add(rim2);

/* ------------------------------------------------------------------ materials */
const matBody = new THREE.MeshPhysicalMaterial({
  color: 0x060608, metalness: 0.25, roughness: 0.24, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 0.9,
});
const matDeep = new THREE.MeshStandardMaterial({ color: 0x050507, metalness: 0.2, roughness: 0.6 });
const matKey = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.35, roughness: 0.42 });
const matPad = new THREE.MeshPhysicalMaterial({ color: 0x16161b, metalness: 0.4, roughness: 0.18, clearcoat: 1 });
const matGlow = new THREE.MeshBasicMaterial({ color: hdr(PURPLE, 3.2), toneMapped: false });
const matChrome = new THREE.MeshPhysicalMaterial({ color: 0xdedbe6, metalness: 1, roughness: 0.12, clearcoat: 1 });

/* ------------------------------------------------------------------ the device */
// device (pose) > inner (idle float) > base / lid pivot / core
const device = new THREE.Group(); scene.add(device);
const inner = new THREE.Group(); device.add(inner);

// base
const baseGroup = new THREE.Group(); inner.add(baseGroup);
const base = new THREE.Mesh(new RoundedBoxGeometry(3.2, 0.16, 2.2, 4, 0.07), matBody); baseGroup.add(base);
const well = new THREE.Mesh(new THREE.BoxGeometry(2.94, 0.01, 1.12), matDeep); well.position.set(0, 0.078, -0.37); baseGroup.add(well);
const pad = new THREE.Mesh(new RoundedBoxGeometry(1.15, 0.014, 0.62, 2, 0.006), matPad); pad.position.set(0, 0.083, 0.6); baseGroup.add(pad);
const strip = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.014, 0.01), matGlow); strip.position.set(0, -0.015, 1.101); baseGroup.add(strip);

// keys (instanced, can float apart)
const KC = 14, KR = 5, KS = 0.2;
const keyGeo = new RoundedBoxGeometry(0.168, 0.05, 0.168, 2, 0.022);
const keys = new THREE.InstancedMesh(keyGeo, matKey, KC * KR);
const keyData = [];
const dummy = new THREE.Object3D();
for (let r = 0; r < KR; r++) for (let c = 0; c < KC; c++) {
  const i = r * KC + c;
  const accent = (r === 0 && c === KC - 1) || (r === 2 && c === 0) || (r === 4 && (c === 6 || c === 7));
  keys.setColorAt(i, new THREE.Color(accent ? 0x6d2bd9 : 0x15151a));
  const rnd = (s) => { const x = Math.sin(i * 12.9898 + s * 78.233) * 43758.5453; return x - Math.floor(x); };
  keyData.push({
    x: (c - (KC - 1) / 2) * KS, z: -0.79 + r * KS,
    h: 0.35 + rnd(1) * 1.25, rx: (rnd(2) - 0.5) * 2.2, rz: (rnd(3) - 0.5) * 2.2, sx: (rnd(4) - 0.5) * 0.5,
  });
}
baseGroup.add(keys);
let lastKeys = -1;
function updateKeys(k) {
  if (Math.abs(k - lastKeys) < 1e-4) return; lastKeys = k;
  keyData.forEach((d, i) => {
    dummy.position.set(d.x + d.sx * k, 0.088 + d.h * k, d.z);
    dummy.rotation.set(d.rx * k, 0, d.rz * k);
    dummy.updateMatrix(); keys.setMatrixAt(i, dummy.matrix);
  });
  keys.instanceMatrix.needsUpdate = true;
}
updateKeys(0);

// lid (hinged at the back edge)
const lidPivot = new THREE.Group(); lidPivot.position.set(0, 0.11, -1.08); inner.add(lidPivot);
const lidShell = new THREE.Mesh(new RoundedBoxGeometry(3.2, 0.09, 2.2, 4, 0.044), matBody); lidShell.position.set(0, 0.046, 1.08); lidPivot.add(lidShell);

// code screen texture (typed in over time)
const CODE = [
  [['import', '#c792ea'], [' pytest', '#e6e1f0']],
  [],
  [['@pytest.mark.', '#7f7a8c'], ['regression', '#B250FF']],
  [['def ', '#c792ea'], ['test_feature_edge_cases', '#82aaff'], ['(build):', '#e6e1f0']],
  [['    for ', '#c792ea'], ['case ', '#e6e1f0'], ['in ', '#c792ea'], ['build.edge_cases():', '#e6e1f0']],
  [['        result ', '#e6e1f0'], ['= ', '#89ddff'], ['build.run(case)', '#e6e1f0']],
  [['        assert ', '#c792ea'], ['result.actual ', '#e6e1f0'], ['== ', '#89ddff'], ['case.expected', '#e6e1f0']],
  [],
  [['$ ', '#B250FF'], ['pytest -m regression', '#e6e1f0']],
  [['..........................', '#7ee787'], ['F', '#ff6b8b'], ['...', '#7ee787']],
  [['FAILED ', '#ff6b8b'], ['test_feature_edge_cases', '#e6e1f0']],
  [['> defect logged with repro steps', '#B250FF']],
];
const TOTAL_CHARS = CODE.reduce((n, l) => n + l.reduce((m, s) => m + s[0].length, 0) + 1, 0);
const codeCanvas = document.createElement('canvas'); codeCanvas.width = 1024; codeCanvas.height = 672;
const cctx = codeCanvas.getContext('2d');
const codeTex = new THREE.CanvasTexture(codeCanvas); codeTex.colorSpace = THREE.SRGBColorSpace; codeTex.anisotropy = 8;
let lastCodeKey = '';
function drawCode(t) {
  const cycle = TOTAL_CHARS + 90;
  const chars = Math.floor((t * 30) % cycle);
  const blink = Math.floor(t * 2) % 2;
  const k = chars + ':' + blink; if (k === lastCodeKey) return; lastCodeKey = k;
  const g = cctx, W = 1024, H = 672;
  const grd = g.createLinearGradient(0, 0, W, H); grd.addColorStop(0, '#0e0a18'); grd.addColorStop(1, '#170c27');
  g.fillStyle = grd; g.fillRect(0, 0, W, H);
  g.fillStyle = 'rgba(255,255,255,.05)'; g.fillRect(0, 0, W, 54);
  ['#ff5f57', '#febc2e', '#28c840'].forEach((c, i) => { g.fillStyle = c; g.beginPath(); g.arc(34 + i * 26, 27, 8, 0, TAU); g.fill(); });
  g.fillStyle = '#9a93ab'; g.font = '500 22px Inter, sans-serif'; g.fillText('test_release.py', 128, 35);
  g.font = '500 27px "DejaVu Sans Mono", Menlo, Consolas, monospace';
  let left = chars, y = 104, cx = 0, cy = 104;
  CODE.forEach((line, li) => {
    g.fillStyle = '#4a4458'; g.fillText(String(li + 1).padStart(2, ' '), 26, y);
    let x = 90;
    for (const [txt, col] of line) {
      if (left <= 0) break;
      const s = txt.slice(0, left); left -= s.length;
      g.fillStyle = col; g.fillText(s, x, y); x += g.measureText(s).width;
    }
    if (left > 0) { left -= 1; cx = x; cy = y; } else if (left === 0 && cx === 0) { cx = x; cy = y; }
    y += 46;
  });
  if (blink) { g.fillStyle = '#B250FF'; g.fillRect(cx + 3, cy - 24, 14, 30); }
  // soft scanline sheen
  const sh = g.createLinearGradient(0, 0, 0, H); sh.addColorStop(0, 'rgba(178,80,255,.10)'); sh.addColorStop(.5, 'rgba(0,0,0,0)');
  g.fillStyle = sh; g.fillRect(0, 0, W, H);
  codeTex.needsUpdate = true;
}
drawCode(0);
const screenMat = new THREE.MeshBasicMaterial({ map: codeTex, color: new THREE.Color(1.25, 1.25, 1.25), toneMapped: false });
const screen = new THREE.Mesh(new THREE.PlaneGeometry(2.96, 1.94), screenMat);
screen.rotation.set(Math.PI / 2, 0, 0); screen.position.set(0, -0.002, 1.1); lidPivot.add(screen);
const screenLight = new THREE.PointLight(PURPLE, 0, 6, 2); screenLight.position.set(0, -0.6, 1.2); lidPivot.add(screenLight);
// logo on the lid back
const logoTex = canvasTex(256, 256, (g, w) => {
  g.fillStyle = '#fff'; g.font = '900 120px Inter, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('VB', w / 2, w / 2 + 6);
});
const logo = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.62), additive({ map: logoTex, color: hdr(PURPLE, 2.4) }));
logo.rotation.x = -Math.PI / 2; logo.position.set(0, 0.093, 1.08); lidPivot.add(logo);

// core: shield + bug under a magnifier
const core = new THREE.Group(); inner.add(core);
const shieldShape = new THREE.Shape();
shieldShape.moveTo(0, 1.15);
shieldShape.bezierCurveTo(0.35, 0.98, 0.72, 0.95, 0.98, 0.98);
shieldShape.lineTo(0.98, 0.25);
shieldShape.bezierCurveTo(0.98, -0.45, 0.55, -0.9, 0, -1.2);
shieldShape.bezierCurveTo(-0.55, -0.9, -0.98, -0.45, -0.98, 0.25);
shieldShape.lineTo(-0.98, 0.98);
shieldShape.bezierCurveTo(-0.72, 0.95, -0.35, 0.98, 0, 1.15);
const shieldGeo = new THREE.ExtrudeGeometry(shieldShape, { depth: 0.24, bevelEnabled: true, bevelThickness: 0.07, bevelSize: 0.06, bevelSegments: 5, curveSegments: 40 });
shieldGeo.computeBoundingBox();
const sc = shieldGeo.boundingBox.getCenter(new THREE.Vector3());
shieldGeo.translate(-sc.x, -sc.y, -sc.z);
const shieldMat = new THREE.MeshPhysicalMaterial({
  color: 0x1a0d2e, metalness: 0.7, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.05,
  emissive: new THREE.Color('#2a0e4d'), emissiveIntensity: 0.45, envMapIntensity: 1.3,
});
const shield = new THREE.Mesh(shieldGeo, shieldMat); core.add(shield);
function rimTube(scale, z, radius, mat) {
  const pts = shieldShape.getSpacedPoints(180); pts.pop();
  const curve = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3((p.x - sc.x) * scale, (p.y - sc.y) * scale, z)), true);
  return new THREE.Mesh(new THREE.TubeGeometry(curve, 260, radius, 8, true), mat);
}
core.add(rimTube(0.84, 0.205, 0.022, matGlow));
core.add(rimTube(1.055, 0.0, 0.03, new THREE.MeshBasicMaterial({ color: hdr(VIOLET, 2.0), toneMapped: false })));
const bugMat = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: new THREE.Color('#d6a8ff'), emissiveIntensity: 1.5 });
const bug = new THREE.Group(); bug.position.set(-0.05, 0.08, 0.26); core.add(bug);
const bugBody = new THREE.Mesh(new THREE.SphereGeometry(0.2, 32, 24), bugMat); bugBody.scale.set(1, 1.3, 0.5); bug.add(bugBody);
const bugHead = new THREE.Mesh(new THREE.SphereGeometry(0.11, 24, 16), bugMat); bugHead.position.y = 0.32; bugHead.scale.z = 0.6; bug.add(bugHead);
const legGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.3, 8);
[-1, 1].forEach((s) => {
  [0.5, 0, -0.5].forEach((a, k) => {
    const leg = new THREE.Mesh(legGeo, bugMat);
    leg.position.set(s * 0.29, 0.1 - k * 0.15, 0); leg.rotation.z = s * (Math.PI / 2 - a); bug.add(leg);
  });
  const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.2, 6), bugMat);
  ant.position.set(s * 0.09, 0.47, 0); ant.rotation.z = -s * 0.5; bug.add(ant);
});
const lensRing = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.055, 24, 120), matChrome); lensRing.position.set(-0.05, 0.12, 0.34); core.add(lensRing);
const lensGlass = new THREE.Mesh(new THREE.CircleGeometry(0.58, 64), additive({ map: glowTex, color: new THREE.Color(0.22, 0.12, 0.35) }));
lensGlass.position.copy(lensRing.position); core.add(lensGlass);
const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.7, 24), matBody);
handle.position.set(-0.05 + 0.707 * 0.98, 0.12 - 0.707 * 0.98, 0.34); handle.rotation.z = Math.PI / 4; core.add(handle);
const handleCap = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.08, 24), matGlow);
handleCap.position.set(-0.05 + 0.707 * 1.36, 0.12 - 0.707 * 1.36, 0.34); handleCap.rotation.z = Math.PI / 4; core.add(handleCap);
const coreHalo = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), additive({ map: glowTex, color: hdr(PURPLE, 0.9), opacity: 0 }));
coreHalo.position.z = -0.5; core.add(coreHalo);
const coreLight = new THREE.PointLight(PURPLE, 0, 8, 2); coreLight.position.set(0, 0, -0.9); core.add(coreLight);

/* ------------------------------------------------------------------ effects */
// soft contact shadow (light sections)
const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({
  map: glowTex, color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false,
}));
scene.add(shadow);

// glowing rings that drop and loop
const rings = [];
const ringGeo = new THREE.TorusGeometry(1.7, 0.014, 8, 160);
for (let i = 0; i < 4; i++) {
  const m = new THREE.Mesh(ringGeo, additive({ color: hdr(PURPLE, 3.0), opacity: 0 }));
  scene.add(m); rings.push(m);
}

// spinning glowing circle (comet arc)
const haloMat = new THREE.ShaderMaterial({
  uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 }, uColor: { value: hdr(PURPLE, 1.0) } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform float uTime, uOpacity; uniform vec3 uColor; varying vec2 vUv;
    void main(){
      vec2 p = vUv - 0.5; float r = length(p); float a = atan(p.y, p.x) / 6.28318 + 0.5;
      float arc = pow(fract(a + uTime * 0.22), 4.0);
      float arc2 = pow(fract(a + uTime * 0.22 + 0.5), 6.0);
      float line = exp(-pow((r - 0.42) * 260.0, 2.0));
      float glow = exp(-pow((r - 0.42) * 30.0, 2.0));
      float inner = exp(-pow((r - 0.36) * 400.0, 2.0)) * 0.25;
      float v = line * (0.25 + 2.6 * arc + 1.2 * arc2) + glow * (0.9 * arc + 0.4 * arc2) + inner;
      gl_FragColor = vec4(uColor * v * uOpacity * 1.8, 1.0);
      #include <colorspace_fragment>
    }`,
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
});
const halo = new THREE.Mesh(new THREE.PlaneGeometry(7, 7), haloMat); scene.add(halo);

// volumetric light beam
const beamMat = new THREE.ShaderMaterial({
  uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 } },
  vertexShader: `
    varying float vY; varying vec3 vN; varying vec3 vV; varying float vU;
    void main(){ vY = uv.y; vU = uv.x; vN = normalize(normalMatrix * normal);
      vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
  fragmentShader: `
    uniform float uTime, uOpacity; varying float vY; varying vec3 vN; varying vec3 vV; varying float vU;
    void main(){
      float f = pow(abs(dot(normalize(vN), normalize(vV))), 2.2);
      float fall = smoothstep(0.0, 0.22, vY) * (0.35 + 0.65 * vY);
      float rays = 0.75 + 0.25 * sin(vU * 62.83 + uTime * 0.7) * sin(vU * 25.13 - uTime * 0.4);
      vec3 col = mix(vec3(0.70, 0.31, 1.0), vec3(1.0, 0.9, 1.0), vY * 0.35);
      gl_FragColor = vec4(col * f * fall * rays * uOpacity * 0.85, 1.0);
      #include <colorspace_fragment>
    }`,
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
});
const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 1.9, 9, 64, 1, true), beamMat); scene.add(beam);
const floorGlow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), additive({ map: glowTex, color: hdr(PURPLE, 1.6), opacity: 0 }));
floorGlow.rotation.x = -Math.PI / 2 + 0.25; scene.add(floorGlow);

// sparkly metallic particles
const N = LOW ? 450 : 1600;
const pGeo = new THREE.BufferGeometry();
const pos = new Float32Array(N * 3), ph = new Float32Array(N), sz = new Float32Array(N);
for (let i = 0; i < N; i++) {
  pos[i * 3] = (Math.random() - 0.5) * 18; pos[i * 3 + 1] = (Math.random() - 0.5) * 12; pos[i * 3 + 2] = -7 + Math.random() * 10;
  ph[i] = Math.random(); sz[i] = Math.random();
}
pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
pGeo.setAttribute('aPhase', new THREE.BufferAttribute(ph, 1));
pGeo.setAttribute('aSize', new THREE.BufferAttribute(sz, 1));
const pMat = new THREE.ShaderMaterial({
  uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 }, uPR: { value: pixelRatio } },
  vertexShader: `
    uniform float uTime, uPR; attribute float aPhase, aSize; varying float vTw; varying float vMix;
    void main(){
      vec3 p = position; p.y = mod(p.y + uTime * (0.08 + 0.18 * aSize) + 6.0, 12.0) - 6.0;
      p.x += sin(uTime * 0.3 + aPhase * 6.28) * 0.15;
      vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
      vTw = pow(0.5 + 0.5 * sin(uTime * (1.2 + aSize * 2.5) + aPhase * 6.2831), 5.0);
      gl_PointSize = (2.5 + aSize * 6.0) * uPR * (9.0 / -mv.z) * (0.35 + vTw);
      vMix = aPhase;
    }`,
  fragmentShader: `
    uniform float uOpacity; varying float vTw; varying float vMix;
    void main(){
      vec2 c = gl_PointCoord - 0.5; float d = length(c);
      float core = pow(smoothstep(0.5, 0.0, d), 3.0);
      float cross = max(smoothstep(0.06, 0.0, abs(c.x)) * smoothstep(0.5, 0.0, abs(c.y)), smoothstep(0.06, 0.0, abs(c.y)) * smoothstep(0.5, 0.0, abs(c.x)));
      float a = (core + cross * vTw) * (0.2 + vTw) * uOpacity;
      vec3 col = mix(vec3(0.85, 0.84, 0.95), vec3(0.75, 0.38, 1.0), step(0.55, vMix));
      gl_FragColor = vec4(col * a * 1.5, 1.0);
      #include <colorspace_fragment>
    }`,
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
});
const particles = new THREE.Points(pGeo, pMat); particles.frustumCulled = false; scene.add(particles);

/* ------------------------------------------------------------------ poses */
// S is the single animated state; GSAP tweens it, the render loop applies it.
const BASE = { x: 0, y: 0, z: 0, rx: 0.3, ry: 0, rz: 0, s: 1, lid: 0, split: 0, keys: 0, away: 0, rings: 0, halo: 0, beam: 0, sparkle: 0, dark: 0, violet: 0, sway: 0 };
const POSES = {
  hero:       { x: 1.85, y: -0.15, rx: 0.42, ry: -0.6, rz: 0.05, s: 1.02, lid: 0.68 },
  about:      { x: 2.0, y: -0.15, rx: 0.2, ry: -0.3, rz: 0, s: 1.12, lid: 1 },
  roots:      { x: -2.0, y: -0.3, rx: 0.62, ry: 0.85, rz: -0.08, s: 1.0, lid: 1, keys: 1 },
  stats:      { x: 0.15, y: -0.45, rx: 0.16, ry: TAU - 0.3, rz: 0, s: 0.76, lid: 1, split: 1, keys: 0.3, rings: 1, sparkle: 1, dark: 1, sway: 1 },
  experience: { x: 2.55, y: -0.1, rx: 0.2, ry: TAU + 0.55, s: 0.7, lid: 1, split: 0.8, keys: 0.15, halo: 1, sparkle: 1, dark: 1, sway: 1 },
  skills:     { x: -2.5, y: -0.1, rx: 0.3, ry: TAU - 0.6, s: 0.74, lid: 1, split: 1, keys: 1, rings: 0.5, halo: 0.35, sparkle: 1, dark: 1, sway: 1 },
  learning:   { x: 2.15, y: -0.55, rx: 0.04, ry: TAU, s: 1.0, lid: 1, split: 1, away: 1, beam: 1, rings: 0.45, sparkle: 1, dark: 1, violet: 1, sway: 0.4 },
  contact:    { x: 2.35, y: -0.3, rx: 0.36, ry: TAU - 0.55, s: 0.95, lid: 1, halo: 0.55, sparkle: 0.6, dark: 1 },
};
const REDUCED_POSE = { x: 2.0, y: -0.2, rx: 0.3, ry: -0.35, s: 1.0, lid: 1 };
function pose(name) {
  let p = { ...BASE, ...POSES[name] };
  if (REDUCED) p = { ...p, ...REDUCED_POSE, split: 0, keys: 0, away: 0, rings: 0, sway: 0 };
  if (isMobile()) {
    p.x = 0; p.y = name === 'learning' ? 1.0 : 1.3; p.s *= name === 'stats' || name === 'skills' || name === 'experience' ? 0.62 : 0.56;
  }
  return p;
}
const S = { ...pose('hero') };

/* ------------------------------------------------------------------ scroll */
let lenis = null;
if (!REDUCED && !RECORD) {
  lenis = new Lenis({ lerp: 0.08, smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.4 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}
document.querySelectorAll('[data-scroll]').forEach((a) => a.addEventListener('click', (e) => {
  const target = document.querySelector(a.getAttribute('href')); if (!target) return;
  e.preventDefault();
  if (lenis) lenis.scrollTo(target, { duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4) });
  else target.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' });
}));

const sections = [...document.querySelectorAll('[data-pose]')];
let master = null;
function buildTimeline() {
  if (master) { master.scrollTrigger && master.scrollTrigger.kill(); master.kill(); }
  const vh = innerHeight;
  const max = Math.max(1, document.documentElement.scrollHeight - vh);
  Object.assign(S, pose('hero'));
  master = gsap.timeline({ defaults: { ease: 'power2.inOut' }, scrollTrigger: { start: 0, end: () => max, scrub: true } });
  sections.forEach((sec, i) => {
    if (!i) return;
    const top = sec.offsetTop;
    const start = Math.max(0, top - vh * 0.95);
    const end = Math.min(max, Math.max(start + 1, top - vh * 0.12));
    master.to(S, { ...pose(sec.dataset.pose), duration: end - start }, start);
  });
  master.set({}, {}, max);
}

let reveals = [];
function buildReveals() {
  if (REDUCED) return;
  // cache absolute positions (transforms cleared) so the reveal math has no feedback loop
  const els = [...document.querySelectorAll('.reveal')];
  els.forEach((el) => gsap.set(el, { clearProps: 'transform,opacity,visibility' }));
  reveals = els.map((el) => {
    const r = el.getBoundingClientRect(); const from = el.dataset.from;
    return {
      el, top: r.top + scrollY, bottom: r.bottom + scrollY,
      dx: isMobile() ? 0 : from === 'left' ? -90 : from === 'right' ? 90 : 0, dy: from === 'up' ? 70 : 40,
      set: gsap.quickSetter(el, 'css'), last: -1,
    };
  });
  updateReveals();
}
function updateReveals() {
  if (!reveals.length) return;
  const vh = innerHeight, y = scrollY, mob = isMobile();
  for (const r of reveals) {
    const top = r.top - y, bottom = r.bottom - y;
    const inP = 1 - smooth(0.64 * vh, 0.94 * vh, top);           // 0 -> 1 as it rises into view
    const outP = mob ? smooth(0.3 * vh, 0.06 * vh, top) : smooth(0.42 * vh, 0.12 * vh, bottom);
    const e = 1 - Math.pow(1 - inP, 3);
    const o = Math.round(e * (1 - outP) * 1000) / 1000;
    const key = o + ':' + Math.round(e * 1000) + ':' + Math.round(outP * 1000);
    if (key === r.last) continue; r.last = key;
    r.set({ opacity: o, visibility: o <= 0.001 ? 'hidden' : 'visible',
      x: r.dx * (1 - e), y: r.dy * (1 - e) - 50 * outP });
  }
}
function heroIntro() {
  if (RECORD || REDUCED) return;
  gsap.from('.hero .h-stack span, .hero .label, .hero .tagline, .hero .loc, .scroll-cue', { opacity: 0, y: 40, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.15 });
}

/* ------------------------------------------------------------------ frame */
const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
if (!RECORD && !REDUCED && !LOW) addEventListener('pointermove', (e) => { mouse.tx = (e.clientX / innerWidth - 0.5); mouse.ty = (e.clientY / innerHeight - 0.5); });
const tmp = new THREE.Vector3();
let htmlDark = null;

function apply(t) {
  mouse.x += (mouse.tx - mouse.x) * 0.05; mouse.y += (mouse.ty - mouse.y) * 0.05;
  const idle = REDUCED ? 0 : 1;
  updateReveals();
  // device pose
  device.position.set(S.x + mouse.x * 0.25, S.y - mouse.y * 0.15, S.z);
  device.rotation.set(S.rx + mouse.y * 0.12, S.ry + mouse.x * 0.3, S.rz);
  device.scale.setScalar(S.s);
  inner.position.y = Math.sin(t * 0.9) * 0.06 * idle;
  inner.rotation.y = Math.sin(t * 0.45) * 0.07 * idle;
  inner.rotation.x = Math.sin(t * 0.6 + 1) * 0.025 * idle;

  const sp = easeOut(S.split);
  lidPivot.rotation.x = -S.lid * THREE.MathUtils.degToRad(106) + sp * 0.12;
  baseGroup.position.y = -sp * 1.3 - S.away * 12;
  lidPivot.position.y = 0.11 + sp * 1.3 + S.away * 12;
  lidPivot.position.z = -1.08 - sp * 0.15;
  updateKeys(S.keys);
  const cs = Math.max(0.0001, sp);
  core.scale.setScalar(cs * 0.95);
  core.position.set(0, 0.35 + sp * 0.15, 0.15 * sp);
  core.rotation.y = S.sway * Math.sin(t * 0.7) * 0.45 * idle;
  core.rotation.x = -0.12 * sp;
  core.visible = sp > 0.01;
  bug.position.y = 0.08 + Math.sin(t * 2.2) * 0.02 * idle;
  coreHalo.material.opacity = sp * (0.18 + 0.22 * S.dark);
  coreLight.intensity = sp * 7;
  screenLight.intensity = S.lid * (2 + 6 * S.dark);
  if (S.lid > 0.05) drawCode(REDUCED ? 6 : t);

  // world-space anchors
  core.getWorldPosition(tmp);
  const k = S.s;
  // shadow: only on light background
  shadow.position.set(device.position.x, device.position.y - 0.75 * k - sp * 1.4 * k, -0.6);
  shadow.scale.set(4.4 * k, 0.7 * k, 1);
  shadow.material.opacity = 0.32 * (1 - S.dark) * (1 - S.away);

  rings.forEach((r, i) => {
    const ph = ((t * 0.16 + i / rings.length) % 1);
    r.position.set(tmp.x, tmp.y + 2.6 - ph * 5.2, tmp.z);
    r.rotation.set(Math.PI / 2 - 0.32, 0, 0);
    r.scale.setScalar(k * (0.85 + ph * 0.45));
    r.material.opacity = S.rings * Math.pow(Math.sin(ph * Math.PI), 1.5) * 0.9;
    r.visible = r.material.opacity > 0.003;
  });
  halo.position.set(tmp.x, tmp.y, tmp.z - 1.4);
  halo.scale.setScalar(k * 0.92);
  haloMat.uniforms.uOpacity.value = S.halo; haloMat.uniforms.uTime.value = t; halo.visible = S.halo > 0.003;
  beam.position.set(tmp.x, tmp.y + 3.0, tmp.z - 0.3);
  beam.scale.setScalar(Math.max(k, 0.6));
  beamMat.uniforms.uOpacity.value = S.beam; beamMat.uniforms.uTime.value = t; beam.visible = S.beam > 0.003;
  floorGlow.position.set(tmp.x, tmp.y - 1.45 * k, tmp.z);
  floorGlow.scale.set(3.6 * k, 2.2 * k, 1); floorGlow.material.opacity = S.beam * 0.6;
  pMat.uniforms.uTime.value = t; pMat.uniforms.uOpacity.value = S.sparkle; particles.visible = S.sparkle > 0.003;

  // background + lighting
  bgMat.uniforms.uDarkMix.value = S.dark; bgMat.uniforms.uVioletMix.value = S.violet;
  camera.updateMatrixWorld();
  bgMat.uniforms.uBeamX.value = tmp.clone().project(camera).x * 0.5 + 0.5;
  rim.intensity = 0.6 + 3.4 * S.dark; rim2.intensity = 2.2 * S.dark;
  key.intensity = 1.6 - 0.6 * S.dark;
  scene.environmentIntensity = 0.7 - 0.25 * S.dark;
  if (bloom) bloom.strength = 0.15 + 0.55 * S.dark;
  const d = S.dark > 0.5;
  if (d !== htmlDark) { htmlDark = d; document.documentElement.style.background = d ? '#151515' : '#EAE6E1'; }
}

function render() { if (composer) composer.render(); else renderer.render(scene, camera); }

/* adaptive quality: hold ~60fps on weaker GPUs */
let frames = 0, acc = 0, lastNow = performance.now(), degrade = 0;
function adapt(now) {
  const dt = now - lastNow; lastNow = now;
  if (dt > 200) return; frames++; acc += dt;
  if (frames < 90) return;
  const avg = acc / frames; frames = 0; acc = 0;
  if (avg > 21 && degrade < 2) {
    degrade++;
    if (degrade === 1) { pixelRatio = Math.max(1, pixelRatio * 0.75); resize(); }
    else if (composer) { composer = null; bloom = null; }
  }
}

const clock = new THREE.Clock();
function tick(now) {
  const t = REDUCED ? 0 : clock.getElapsedTime();
  apply(t); render(); adapt(now);
}

function resize() {
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight;
  camera.fov = isMobile() ? 42 : 35;
  camera.updateProjectionMatrix();
  pMat.uniforms.uPR.value = pixelRatio;
  if (composer) { composer.setPixelRatio(pixelRatio); composer.setSize(innerWidth, innerHeight); }
}
let rzT; let lastW = innerWidth;
addEventListener('resize', () => {
  resize();
  clearTimeout(rzT);
  rzT = setTimeout(() => {
    if (Math.abs(innerWidth - lastW) < 2 && isMobile()) return; // ignore mobile URL-bar resizes
    lastW = innerWidth; buildTimeline(); ScrollTrigger.refresh(); buildReveals();
  }, 200);
});

/* ------------------------------------------------------------------ boot */
async function boot() {
  try { await document.fonts.ready; } catch (e) { /* ignore */ }
  resize();
  buildTimeline();
  ScrollTrigger.refresh();
  buildReveals();
  heroIntro();
  if (RECORD) {
    // deterministic stepping for capture: set scroll + time, render one frame
    window.__frame = (y, t) => {
      window.scrollTo(0, y); ScrollTrigger.update();
      apply(t); render();
      return true;
    };
    window.__maxScroll = () => document.documentElement.scrollHeight - innerHeight;
    window.__anchors = () => sections.map((s) => ({ name: s.dataset.pose, top: s.offsetTop, h: s.offsetHeight }));
    apply(0); render();
  } else if (REDUCED) {
    // no idle animation: render only when the scroll position changes
    const draw = () => { apply(0); render(); };
    ScrollTrigger.addEventListener('refresh', draw);
    addEventListener('scroll', () => requestAnimationFrame(draw), { passive: true });
    addEventListener('resize', draw);
    draw();
  } else {
    renderer.setAnimationLoop(tick);
  }
  document.documentElement.classList.add('ready');
  window.__ready = true;
}
boot();
