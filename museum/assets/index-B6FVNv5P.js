(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,k=1029,A=1030,j=1031,M=1033,N=33776,P=33777,F=33778,I=33779,ee=35840,te=35841,ne=35842,re=35843,ie=36196,ae=37492,oe=37496,L=37488,se=37489,ce=37490,le=37491,ue=37808,de=37809,fe=37810,pe=37811,me=37812,he=37813,ge=37814,_e=37815,ve=37816,ye=37817,be=37818,xe=37819,Se=37820,Ce=37821,we=36492,Te=36494,Ee=36495,De=36283,Oe=36284,ke=36285,Ae=36286,R=2200,je=2201,Me=2202,Ne=2300,z=2301,Pe=2302,B=2303,V=2400,Fe=2401,Ie=2402,Le=2500,Re=2501,ze=3200,Be=`srgb`,Ve=`srgb-linear`,He=`linear`,Ue=`srgb`,We=7680,Ge=35044,Ke=2e3;function qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Je(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ye(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xe(){let e=Ye(`canvas`);return e.style.display=`block`,e}var Ze={};function Qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function $e(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function U(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function et(...e){let t=e.join(` `);t in Ze||(Ze[t]=!0,H(...e))}function tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var nt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},rt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=1234567,ot=Math.PI/180,st=180/Math.PI;function ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function W(e,t,n){return Math.max(t,Math.min(n,e))}function lt(e,t){return(e%t+t)%t}function ut(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function dt(e,t,n){return e===t?0:(n-e)/(t-e)}function ft(e,t,n){return(1-n)*e+n*t}function pt(e,t,n,r){return ft(e,t,1-Math.exp(-n*r))}function mt(e,t=1){return t-Math.abs(lt(e,t*2)-t)}function ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function _t(e,t){return e+Math.floor(Math.random()*(t-e+1))}function vt(e,t){return e+Math.random()*(t-e)}function yt(e){return e*(.5-Math.random())}function bt(e){e!==void 0&&(at=e);let t=at+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xt(e){return e*ot}function St(e){return e*st}function Ct(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function wt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Tt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Et(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:H(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var kt={DEG2RAD:ot,RAD2DEG:st,generateUUID:ct,clamp:W,euclideanModulo:lt,mapLinear:ut,inverseLerp:dt,lerp:ft,damp:pt,pingpong:mt,smoothstep:ht,smootherstep:gt,randInt:_t,randFloat:vt,randFloatSpread:yt,seededRandom:bt,degToRad:xt,radToDeg:St,isPowerOfTwo:Ct,ceilPowerOfTwo:wt,floorPowerOfTwo:Tt,setQuaternionFromProperEuler:Et,normalize:Ot,denormalize:Dt},G=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jt.copy(this).projectOnVector(e),this.sub(jt)}reflect(e){return this.sub(jt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jt=new K,Mt=new At,q=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return et(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Nt.makeScale(e,t)),this}rotate(e){return et(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Nt.makeRotation(-e)),this}translate(e,t){return et(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Nt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nt=new q,Pt=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ft=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function It(){let e={enabled:!0,workingColorSpace:Ve,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Rt(e.r),e.g=Rt(e.g),e.b=Rt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?He:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return et(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return et(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ve]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),e}var Lt=It();function Rt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function zt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Bt,Vt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bt===void 0&&(Bt=Ye(`canvas`)),Bt.width=e.width,Bt.height=e.height;let t=Bt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Bt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ye(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Rt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Rt(t[e]/255)*255):t[e]=Rt(t[e]);return{data:t,width:e.width,height:e.height}}return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ht=0,Ut=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Wt(r[t].image)):e.push(Wt(r[t]))}else e=Wt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Wt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Vt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var Gt=0,Kt=new K,qt=class e extends rt{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=ct(),this.name=``,this.source=new Ut(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kt).x}get height(){return this.source.getSize(Kt).y}get depth(){return this.source.getSize(Kt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null,qt.DEFAULT_MAPPING=300,qt.DEFAULT_ANISOTROPY=1;var Jt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yt=class extends rt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];let r=new qt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ut(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Xt=class extends Yt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zt=class extends qt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Qt=class extends qt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},J=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/$t.setFromMatrixColumn(e,0).length(),i=1/$t.setFromMatrixColumn(e,1).length(),a=1/$t.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tn,e,nn)}lookAt(e,t,n){let r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),rn.crossVectors(n,on),rn.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),rn.crossVectors(n,on)),rn.normalize(),an.crossVectors(on,rn),r[0]=rn.x,r[4]=an.x,r[8]=on.x,r[1]=rn.y,r[5]=an.y,r[9]=on.y,r[2]=rn.z,r[6]=an.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=$t.set(r[0],r[1],r[2]).length(),o=$t.set(r[4],r[5],r[6]).length(),s=$t.set(r[8],r[9],r[10]).length();i<0&&(a=-a),en.copy(this);let c=1/a,l=1/o,u=1/s;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=l,en.elements[5]*=l,en.elements[6]*=l,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,t.setFromRotationMatrix(en),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},$t=new K,en=new J,tn=new K(0,0,0),nn=new K(1,1,1),rn=new K,an=new K,on=new K,sn=new J,cn=new At,ln=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(W(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-W(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(W(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-W(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(W(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-W(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cn.setFromEuler(this),this.setFromQuaternion(cn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER=`XYZ`;var un=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},dn=0,fn=new K,pn=new At,mn=new J,hn=new K,gn=new K,_n=new K,vn=new At,yn=new K(1,0,0),bn=new K(0,1,0),xn=new K(0,0,1),Sn={type:`added`},Cn={type:`removed`},wn={type:`childadded`,child:null},Tn={type:`childremoved`,child:null},En=class e extends rt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dn++}),this.uuid=ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new ln,r=new At,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new J},normalMatrix:{value:new q}}),this.matrix=new J,this.matrixWorld=new J,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new un,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.multiply(pn),this}rotateOnWorldAxis(e,t){return pn.setFromAxisAngle(e,t),this.quaternion.premultiply(pn),this}rotateX(e){return this.rotateOnAxis(yn,e)}rotateY(e){return this.rotateOnAxis(bn,e)}rotateZ(e){return this.rotateOnAxis(xn,e)}translateOnAxis(e,t){return fn.copy(e).applyQuaternion(this.quaternion),this.position.add(fn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yn,e)}translateY(e){return this.translateOnAxis(bn,e)}translateZ(e){return this.translateOnAxis(xn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hn.copy(e):hn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),gn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(gn,hn,this.up):mn.lookAt(hn,gn,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),pn.setFromRotationMatrix(mn),this.quaternion.premultiply(pn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(U(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sn),wn.child=e,this.dispatchEvent(wn),wn.child=null):U(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sn),wn.child=e,this.dispatchEvent(wn),wn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gn,e,_n),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gn,vn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};En.DEFAULT_UP=new K(0,1,0),En.DEFAULT_MATRIX_AUTO_UPDATE=!0,En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=class extends En{constructor(){super(),this.isGroup=!0,this.type=`Group`}},On={type:`move`},kn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(On)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},An={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Mn={h:0,s:0,l:0};function Nn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Lt.workingColorSpace){if(e=lt(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Nn(i,r,e+1/3),this.g=Nn(i,r,e),this.b=Nn(i,r,e-1/3)}return Lt.colorSpaceToWorking(this,r),this}setStyle(e,t=Be){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Be){let n=An[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rt(e.r),this.g=Rt(e.g),this.b=Rt(e.b),this}copyLinearToSRGB(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return Lt.workingToColorSpace(Pn.copy(this),e),Math.round(W(Pn.r*255,0,255))*65536+Math.round(W(Pn.g*255,0,255))*256+Math.round(W(Pn.b*255,0,255))}getHexString(e=Be){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Pn.copy(this),t);let n=Pn.r,r=Pn.g,i=Pn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Be){Lt.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,n=Pn.g,r=Pn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Mn);let n=ft(jn.h,Mn.h,t),r=ft(jn.s,Mn.s,t),i=ft(jn.l,Mn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new Y;Y.NAMES=An;var Fn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new Y(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},In=class extends En{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new K,Rn=new K,zn=new K,Bn=new K,Vn=new K,Hn=new K,Un=new K,Wn=new K,Gn=new K,Kn=new K,qn=new Jt,Jn=new Jt,Yn=new Jt,Xn=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Ln.subVectors(r,t),Rn.subVectors(n,t),zn.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(Rn),s=Ln.dot(zn),c=Rn.dot(Rn),l=Rn.dot(zn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn)!==null&&Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Bn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Bn.x),s.addScaledVector(a,Bn.y),s.addScaledVector(o,Bn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return qn.setScalar(0),Jn.setScalar(0),Yn.setScalar(0),qn.fromBufferAttribute(e,t),Jn.fromBufferAttribute(e,n),Yn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qn,i.x),a.addScaledVector(Jn,i.y),a.addScaledVector(Yn,i.z),a}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),Rn.subVectors(e,t),Ln.cross(Rn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),Ln.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Vn.subVectors(r,n),Hn.subVectors(i,n),Wn.subVectors(e,n);let s=Vn.dot(Wn),c=Hn.dot(Wn);if(s<=0&&c<=0)return t.copy(n);Gn.subVectors(e,r);let l=Vn.dot(Gn),u=Hn.dot(Gn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Vn,a);Kn.subVectors(e,i);let f=Vn.dot(Kn),p=Hn.dot(Kn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Hn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Un.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Un,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Vn,a).addScaledVector(Hn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zn=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,$n):$n.fromBufferAttribute(r,t),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),cr.subVectors(this.max,sr),tr.subVectors(e.a,sr),nr.subVectors(e.b,sr),rr.subVectors(e.c,sr),ir.subVectors(nr,tr),ar.subVectors(rr,nr),or.subVectors(tr,rr);let t=[0,-ir.z,ir.y,0,-ar.z,ar.y,0,-or.z,or.y,ir.z,0,-ir.x,ar.z,0,-ar.x,or.z,0,-or.x,-ir.y,ir.x,0,-ar.y,ar.x,0,-or.y,or.x,0];return!dr(t,tr,nr,rr,cr)||(t=[1,0,0,0,1,0,0,0,1],!dr(t,tr,nr,rr,cr))?!1:(lr.crossVectors(ir,ar),t=[lr.x,lr.y,lr.z],dr(t,tr,nr,rr,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new K,new K,new K,new K,new K,new K,new K,new K],$n=new K,er=new Zn,tr=new K,nr=new K,rr=new K,ir=new K,ar=new K,or=new K,sr=new K,cr=new K,lr=new K,ur=new K;function dr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ur.fromArray(e,a);let o=i.x*Math.abs(ur.x)+i.y*Math.abs(ur.y)+i.z*Math.abs(ur.z),s=t.dot(ur),c=n.dot(ur),l=r.dot(ur);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var fr=new K,pr=new G,mr=0,hr=class extends rt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ge,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix4(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyNormalMatrix(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.transformDirection(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},gr=class extends hr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},_r=class extends hr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},vr=class extends hr{constructor(e,t,n){super(new Float32Array(e),t,n)}},yr=new Zn,br=new K,xr=new K,Sr=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?yr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(br,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(xr)),this.expandByPoint(br.copy(e.center).sub(xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Cr=0,wr=new J,Tr=new En,Er=new K,Dr=new Zn,Or=new Zn,kr=new K,Ar=class e extends rt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cr++}),this.uuid=ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(qe(e)?_r:gr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wr.makeRotationFromQuaternion(e),this.applyMatrix4(wr),this}rotateX(e){return wr.makeRotationX(e),this.applyMatrix4(wr),this}rotateY(e){return wr.makeRotationY(e),this.applyMatrix4(wr),this}rotateZ(e){return wr.makeRotationZ(e),this.applyMatrix4(wr),this}translate(e,t,n){return wr.makeTranslation(e,t,n),this.applyMatrix4(wr),this}scale(e,t,n){return wr.makeScale(e,t,n),this.applyMatrix4(wr),this}lookAt(e){return Tr.lookAt(e),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new vr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dr.setFromBufferAttribute(n),this.morphTargetsRelative?(kr.addVectors(this.boundingBox.min,Dr.min),this.boundingBox.expandByPoint(kr),kr.addVectors(this.boundingBox.max,Dr.max),this.boundingBox.expandByPoint(kr)):(this.boundingBox.expandByPoint(Dr.min),this.boundingBox.expandByPoint(Dr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&U(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);else if(e){let n=this.boundingSphere.center;if(Dr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(kr.addVectors(Dr.min,Or.min),Dr.expandByPoint(kr),kr.addVectors(Dr.max,Or.max),Dr.expandByPoint(kr)):(Dr.expandByPoint(Or.min),Dr.expandByPoint(Or.max))}Dr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)kr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(kr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)kr.fromBufferAttribute(a,t),o&&(Er.fromBufferAttribute(e,t),kr.add(Er)),r=Math.max(r,n.distanceToSquared(kr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&U(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){U(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new hr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new G,f=new G,p=new G,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new hr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kr.fromBufferAttribute(e,t),kr.normalize(),e.setXYZ(t,kr.x,kr.y,kr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new hr(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},jr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ge,this.updateRanges=[],this.version=0,this.uuid=ct()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Mr=new K,Nr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix4(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyNormalMatrix(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.transformDirection(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Qe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new hr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pr=new K,Fr=new K,Ir=new q,Lr=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Pr.subVectors(n,t).cross(Fr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Pr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ir.getNormalMatrix(e),r=this.coplanarPoint(Pr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Rr=0,zr=class extends rt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rr++}),this.uuid=ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=We,this.stencilZFail=We,this.stencilZPass=We,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Y().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Lr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Br=class extends zr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vr,Hr=new K,Ur=new K,Wr=new K,Gr=new G,Kr=new G,qr=new J,Jr=new K,Yr=new K,Xr=new K,Zr=new G,Qr=new G,$r=new G,ei=class extends En{constructor(e=new Br){if(super(),this.isSprite=!0,this.type=`Sprite`,Vr===void 0){Vr=new Ar;let e=new jr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute(`position`,new Nr(e,3,0,!1)),Vr.setAttribute(`uv`,new Nr(e,2,3,!1))}this.geometry=Vr,this.material=e,this.center=new G(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&U(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Ur.setFromMatrixScale(this.matrixWorld),qr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ur.multiplyScalar(-Wr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ti(Jr.set(-.5,-.5,0),Wr,a,Ur,r,i),ti(Yr.set(.5,-.5,0),Wr,a,Ur,r,i),ti(Xr.set(.5,.5,0),Wr,a,Ur,r,i),Zr.set(0,0),Qr.set(1,0),$r.set(1,1);let o=e.ray.intersectTriangle(Jr,Yr,Xr,!1,Hr);if(o===null&&(ti(Yr.set(-.5,.5,0),Wr,a,Ur,r,i),Qr.set(0,1),o=e.ray.intersectTriangle(Jr,Xr,Yr,!1,Hr),o===null))return;let s=e.ray.origin.distanceTo(Hr);s<e.near||s>e.far||t.push({distance:s,point:Hr.clone(),uv:Xn.getInterpolation(Hr,Jr,Yr,Xr,Zr,Qr,$r,new G),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ti(e,t,n,r,i,a){Gr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Kr.copy(Gr):(Kr.x=a*Gr.x-i*Gr.y,Kr.y=i*Gr.x+a*Gr.y),e.copy(t),e.x+=Kr.x,e.y+=Kr.y,e.applyMatrix4(qr)}var ni=new K,ri=new K,ii=new K,ai=new K,oi=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ri.copy(e).add(t).multiplyScalar(.5),ii.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(ri);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ii),o=ai.dot(this.direction),s=-ai.dot(ii),c=ai.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ri).addScaledVector(ii,d),f}intersectSphere(e,t){if(e.radius<0)return null;ni.subVectors(e.center,this.origin);let n=ni.dot(this.direction),r=ni.dot(ni)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,ee=T-P*D,te=E-F*D,ne=O-P*A,re=k-F*A,ie=j-P*N,ae=M-F*N,oe=ie*re-ae*ne,L=ee*ae-te*ie,se=ne*te-re*ee;if(r){if(oe<0||L<0||se<0)return null}else if((oe<0||L<0||se<0)&&(oe>0||L>0||se>0))return null;let ce=oe+L+se;if(ce===0)return null;let le=I*(oe*D+L*A+se*N);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},si=class extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ci=new J,li=new oi,ui=new Sr,di=new K,fi=new K,pi=new K,mi=new K,hi=new K,gi=new K,_i=new K,vi=new K,X=class extends En{constructor(e=new Ar,t=new si){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){gi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(hi.fromBufferAttribute(s,e),a?gi.addScaledVector(hi,r):gi.addScaledVector(hi.sub(t),r))}t.add(gi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ui.copy(n.boundingSphere),ui.applyMatrix4(i),li.copy(e.ray).recast(e.near),!(ui.containsPoint(li.origin)===!1&&(li.intersectSphere(ui,di)===null||li.origin.distanceToSquared(di)>(e.far-e.near)**2))&&(ci.copy(i).invert(),li.copy(e.ray).applyMatrix4(ci),(n.boundingBox===null||li.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=bi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=bi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=bi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=bi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function yi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;vi.copy(s),vi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(vi);return l<n.near||l>n.far?null:{distance:l,point:vi.clone(),object:e}}function bi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,fi),e.getVertexPosition(c,pi),e.getVertexPosition(l,mi);let u=yi(e,t,n,r,fi,pi,mi,_i);if(u){let e=new K;Xn.getBarycoord(_i,fi,pi,mi,e),i&&(u.uv=Xn.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=Xn.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=Xn.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};Xn.getNormal(fi,pi,mi,t.normal),u.face=t,u.barycoord=e}return u}var xi=new Jt,Si=new Jt,Ci=new Jt,wi=new Jt,Ti=new J,Ei=new K,Di=new Sr,Oi=new J,ki=new oi,Ai=class extends X{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new J,this.bindMatrixInverse=new J,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zn),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ei),this.boundingBox.expandByPoint(Ei)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ei),this.boundingSphere.expandByPoint(Ei)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(r),e.ray.intersectsSphere(Di)!==!1&&(Oi.copy(r).invert(),ki.copy(e.ray).applyMatrix4(Oi),(this.boundingBox===null||ki.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,ki)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Jt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():H(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Si.fromBufferAttribute(r.attributes.skinIndex,e),Ci.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(xi.copy(t),t.set(0,0,0,0)):(xi.set(...t,1),t.set(0,0,0)),xi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Ci.getComponent(e);if(r!==0){let i=Si.getComponent(e);Ti.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(wi.copy(xi).applyMatrix4(Ti),r)}}return t.isVector4&&(t.w=xi.w),t.applyMatrix4(this.bindMatrixInverse)}},ji=class extends En{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Mi=class extends qt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ni=new J,Pi=new J,Fi=class e{constructor(e=[],t=[]){this.uuid=ct(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){H(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new J)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new J;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Pi;Ni.multiplyMatrices(i,t[r]),Ni.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Mi(t,e,e,T,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(H(`Skeleton: No bone found with UUID:`,r),i=new ji),this.bones.push(i),this.boneInverses.push(new J().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Ii=class extends hr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Li=new J,Ri=new J,zi=[],Bi=new Zn,Vi=new J,Hi=new X,Ui=new Sr,Wi=class extends X{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Vi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Li),Bi.copy(e.boundingBox).applyMatrix4(Li),this.boundingBox.union(Bi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Li),Ui.copy(e.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(Ui)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Hi.geometry=this.geometry,Hi.material=this.material,Hi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ui.copy(this.boundingSphere),Ui.applyMatrix4(n),e.ray.intersectsSphere(Ui)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Li),Ri.multiplyMatrices(n,Li),Hi.matrixWorld=Ri,Hi.raycast(e,zi);for(let e=0,n=zi.length;e<n;e++){let n=zi[e];n.instanceId=i,n.object=this,t.push(n)}zi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mi(new Float32Array(r*this.count),r,this.count,O,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new Sr,Ki=new G(.5,.5),qi=new K,Ji=class{constructor(e=new Lr,t=new Lr,n=new Lr,r=new Lr,i=new Lr,a=new Lr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ke,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476+Ki.distanceTo(e.center),Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(qi.x=r.normal.x>0?e.max.x:e.min.x,qi.y=r.normal.y>0?e.max.y:e.min.y,qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yi=class extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Y(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xi=new K,Zi=new K,Qi=new J,$i=new oi,ea=new Sr,ta=new K,na=new K,ra=class extends En{constructor(e=new Ar,t=new Yi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Xi.fromBufferAttribute(t,e-1),Zi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Xi.distanceTo(Zi);e.setAttribute(`lineDistance`,new vr(n,1))}else H(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),ea.radius+=i,e.ray.intersectsSphere(ea)===!1)return;Qi.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Qi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ia(this,e,$i,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ia(this,e,$i,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ia(this,e,$i,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ia(this,e,$i,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ia(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Xi.fromBufferAttribute(s,i),Zi.fromBufferAttribute(s,a),n.distanceSqToSegment(Xi,Zi,ta,na)>r)return;ta.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ta);if(!(c<t.near||c>t.far))return{distance:c,point:na.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var aa=new K,oa=new K,sa=class extends ra{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)aa.fromBufferAttribute(t,e),oa.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+aa.distanceTo(oa);e.setAttribute(`lineDistance`,new vr(n,1))}else H(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ca=class extends ra{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},la=class extends zr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ua=new J,da=new oi,fa=new Sr,pa=new K,ma=class extends En{constructor(e=new Ar,t=new la){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),fa.radius+=i,e.ray.intersectsSphere(fa)===!1)return;ua.copy(r).invert(),da.copy(e.ray).applyMatrix4(ua);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);pa.fromBufferAttribute(l,n),ha(pa,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)pa.fromBufferAttribute(l,a),ha(pa,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ha(e,t,n,r,i,a,o){let s=da.distanceSqToPoint(e);if(s<n){let n=new K;da.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ga=class extends qt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_a=class extends qt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},va=class extends qt{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ut(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ya=class extends va{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ba=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xa=class e extends Ar{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new vr(c,3)),this.setAttribute(`normal`,new vr(l,3)),this.setAttribute(`uv`,new vr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Sa=class e extends Ar{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new vr(u,3)),this.setAttribute(`normal`,new vr(d,3)),this.setAttribute(`uv`,new vr(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ca=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){H(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new G:new K);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new K,r=[],i=[],a=[],o=new K,s=new J;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}i[0]=new K,a[0]=new K;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(W(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(W(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},wa=class extends Ca{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new G){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ta=class extends wa{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ea(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Da=new K,Oa=new K,ka=new Ea,Aa=new Ea,ja=new Ea,Ma=class extends Ca{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Oa.subVectors(r[0],r[1]).add(r[0]),c=Oa);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Da.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Da),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ka.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Aa.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ja.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ka.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Aa.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ja.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ka.calc(s),Aa.calc(s),ja.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Na(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Pa(e,t){let n=1-e;return n*n*t}function Fa(e,t){return 2*(1-e)*e*t}function Ia(e,t){return e*e*t}function La(e,t,n,r){return Pa(e,t)+Fa(e,n)+Ia(e,r)}function Ra(e,t){let n=1-e;return n*n*n*t}function za(e,t){let n=1-e;return 3*n*n*e*t}function Ba(e,t){return 3*(1-e)*e*e*t}function Va(e,t){return e*e*e*t}function Ha(e,t,n,r,i){return Ra(e,t)+za(e,n)+Ba(e,r)+Va(e,i)}var Ua=class extends Ca{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ha(e,r.x,i.x,a.x,o.x),Ha(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wa=class extends Ca{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ha(e,r.x,i.x,a.x,o.x),Ha(e,r.y,i.y,a.y,o.y),Ha(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ga=class extends Ca{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends Ca{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends Ca{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(La(e,r.x,i.x,a.x),La(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Ca{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(La(e,r.x,i.x,a.x),La(e,r.y,i.y,a.y),La(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends Ca{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new G){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Na(o,s.x,c.x,l.x,u.x),Na(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this}},Xa=Object.freeze({__proto__:null,ArcCurve:Ta,CatmullRomCurve3:Ma,CubicBezierCurve:Ua,CubicBezierCurve3:Wa,EllipseCurve:wa,LineCurve:Ga,LineCurve3:Ka,QuadraticBezierCurve:qa,QuadraticBezierCurve3:Ja,SplineCurve:Ya}),Za=class extends Ca{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Xa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Xa[n.type]().fromJSON(n))}return this}},Qa=class extends Za{constructor(e){super(),this.type=`Path`,this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ga(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new qa(this.currentPoint.clone(),new G(e,t),new G(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Ua(this.currentPoint.clone(),new G(e,t),new G(n,r),new G(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ya([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new wa(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$a=class extends Qa{constructor(e){super(e),this.uuid=ct(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Qa().fromJSON(n))}return this}};function eo(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=to(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=co(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return ro(a,o,n,s,c,l,0),o}function to(e,t,n,r,i){let a;if(i===No(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Ao(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Ao(i/r|0,e[i],e[i+1],a);return a&&So(a,a.next)&&(jo(a),a=a.next),a}function no(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(So(n,n.next)||xo(n.prev,n,n.next)===0)){if(jo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ro(e,t,n,r,i,a,o){if(!e)return;!o&&a&&mo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ao(e,r,i,a):io(e))t.push(c.i,e.i,l.i),jo(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=oo(no(e),t),ro(e,t,n,r,i,a,2)):o===2&&so(e,t,n,r,i,a):ro(no(e),t,n,r,i,a,1);break}}}function io(e){let t=e.prev,n=e,r=e.next;if(xo(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&yo(i,s,a,c,o,l,m.x,m.y)&&xo(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ao(e,t,n,r){let i=e.prev,a=e,o=e.next;if(xo(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=go(p,m,t,n,r),v=go(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&yo(s,u,c,d,l,f,y.x,y.y)&&xo(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&yo(s,u,c,d,l,f,b.x,b.y)&&xo(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&yo(s,u,c,d,l,f,y.x,y.y)&&xo(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&yo(s,u,c,d,l,f,b.x,b.y)&&xo(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function oo(e,t){let n=e;do{let r=n.prev,i=n.next.next;!So(r,i)&&Co(r,n,n.next,i)&&Do(r,i)&&Do(i,r)&&(t.push(r.i,n.i,i.i),jo(n),jo(n.next),n=e=i),n=n.next}while(n!==e);return no(n)}function so(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&bo(o,e)){let s=ko(o,e);o=no(o,o.next),s=no(s,s.next),ro(o,t,n,r,i,a,0),ro(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function co(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=to(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(_o(o))}i.sort(lo);for(let e=0;e<i.length;e++)n=uo(i[e],n);return n}function lo(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function uo(e,t){let n=fo(e,t);if(!n)return t;let r=ko(n,e);return no(r,r.next),no(n,n.next)}function fo(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(So(e,n))return n;do{if(So(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&vo(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Do(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&po(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function po(e,t){return xo(e.prev,e,t.prev)<0&&xo(t.next,e,e.next)<0}function mo(e,t,n,r){let i=e;do i.z===0&&(i.z=go(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ho(i)}function ho(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function go(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function _o(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function vo(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function yo(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&vo(e,t,n,r,i,a,o,s)}function bo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Eo(e,t)&&(Do(e,t)&&Do(t,e)&&Oo(e,t)&&(xo(e.prev,e,t.prev)||xo(e,t.prev,t))||So(e,t)&&xo(e.prev,e,e.next)>0&&xo(t.prev,t,t.next)>0)}function xo(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function So(e,t){return e.x===t.x&&e.y===t.y}function Co(e,t,n,r){let i=To(xo(e,t,n)),a=To(xo(e,t,r)),o=To(xo(n,r,e)),s=To(xo(n,r,t));return!!(i!==a&&o!==s||i===0&&wo(e,n,t)||a===0&&wo(e,r,t)||o===0&&wo(n,e,r)||s===0&&wo(n,t,r))}function wo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function To(e){return e>0?1:e<0?-1:0}function Eo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Co(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Do(e,t){return xo(e.prev,e,e.next)<0?xo(e,t,e.next)>=0&&xo(e,e.prev,t)>=0:xo(e,t,e.prev)<0||xo(e,e.next,t)<0}function Oo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ko(e,t){let n=Mo(e.i,e.x,e.y),r=Mo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ao(e,t,n,r){let i=Mo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function jo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Mo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function No(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Po=class{static triangulate(e,t,n=2){return eo(e,t,n)}},Fo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Io(e),Lo(n,e);let a=e.length;t.forEach(Io);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Lo(n,t[e]);let o=Po.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Io(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Lo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ro=class e extends Ar{constructor(e=new $a([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new vr(r,3)),this.setAttribute(`uv`,new vr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?zo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new K,b=new K,x=new K}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Fo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Fo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||U(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new G(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new G(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=Fo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ie(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ie(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=Fo.triangulateShape(e,t)}let I=F.length,ee=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],ee):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ie(x.x,x.y,x.z)):ie(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],ee):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ie(x.x,x.y,x.z)):ie(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ie(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ie(i.x,i.y+g[s-1].y,g[s-1].x+n):ie(i.x,i.y,c+n)}}}te(),ne();function te(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];ae(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];ae(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];ae(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];ae(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ne(){let e=r.length/3,t=0;re(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];re(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function re(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);oe(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ie(e,t,n){a.push(e),a.push(t),a.push(n)}function ae(e,t,i){L(e),L(t),L(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);se(o[0]),se(o[1]),se(o[2])}function oe(e,t,i,a){L(e),L(t),L(a),L(t),L(i),L(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);se(s[0]),se(s[1]),se(s[3]),se(s[1]),se(s[2]),se(s[3])}function L(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function se(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Xa[i.type]().fromJSON(i)),new e(r,t.options)}},zo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new G(a,o),new G(s,c),new G(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new G(o,1-c),new G(l,1-d),new G(f,1-m),new G(h,1-_)]:[new G(s,1-c),new G(u,1-d),new G(p,1-m),new G(g,1-_)]}};function Bo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Vo=class e extends Ar{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new vr(p,3)),this.setAttribute(`normal`,new vr(m,3)),this.setAttribute(`uv`,new vr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ho=class e extends Ar{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new K,p=new G;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new vr(s,3)),this.setAttribute(`normal`,new vr(c,3)),this.setAttribute(`uv`,new vr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Uo=class e extends Ar{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new vr(p,3)),this.setAttribute(`normal`,new vr(m,3)),this.setAttribute(`uv`,new vr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Wo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ko(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ko(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Go(e){let t={};for(let n=0;n<e.length;n++){let r=Wo(e[n]);for(let e in r)t[e]=r[e]}return t}function Ko(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function qo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Jo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Lt.workingColorSpace}var Yo={clone:Wo,merge:Go},Xo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qo=class extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xo,this.fragmentShader=Zo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wo(e.uniforms),this.uniformsGroups=qo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Y().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Jt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new J().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$o=class extends Qo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},es=class extends zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Y(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ts=class extends es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return W(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Y(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Y(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Y(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ns=class extends zr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rs=class extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ze,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},is=class extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function as(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function os(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function ss(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function cs(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function ls(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var us=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ds=class extends us{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:V,endingEnd:V}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fe:i=e,o=2*t-n;break;case Ie:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Fe:a=e,s=2*n-t;break;case Ie:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},fs=class extends us{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ps=class extends us{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ms=class extends us{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=_s(n,t,g,y,r);i[p]=hs(x,o,_,b,m)}return i}};function hs(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function gs(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function _s(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=hs(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=gs(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var vs=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=as(t,this.TimeBufferType),this.values=as(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:as(e.times,Array),values:as(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),os(e.settings)&&(n.settings={inTangents:as(e.settings.inTangents,Array),outTangents:as(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ps(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ds(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ms(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ne:t=this.InterpolantFactoryMethodDiscrete;break;case z:t=this.InterpolantFactoryMethodLinear;break;case Pe:t=this.InterpolantFactoryMethodSmooth;break;case B:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ne;case this.InterpolantFactoryMethodLinear:return z;case this.InterpolantFactoryMethodSmooth:return Pe;case this.InterpolantFactoryMethodBezier:return B}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;os(this.settings)&&(ys(this.settings.inTangents,e),ys(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(U(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(U(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){U(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){U(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Je(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){U(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Pe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,os(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ys(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}vs.prototype.ValueTypeName=``,vs.prototype.TimeBufferType=Float32Array,vs.prototype.ValueBufferType=Float32Array,vs.prototype.DefaultInterpolation=z;var bs=class extends vs{constructor(e,t,n){super(e,t,n)}};bs.prototype.ValueTypeName=`bool`,bs.prototype.ValueBufferType=Array,bs.prototype.DefaultInterpolation=Ne,bs.prototype.InterpolantFactoryMethodLinear=void 0,bs.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends vs{constructor(e,t,n,r){super(e,t,n,r)}};xs.prototype.ValueTypeName=`color`;var Ss=class extends vs{constructor(e,t,n,r){super(e,t,n,r)}};Ss.prototype.ValueTypeName=`number`;var Cs=class extends us{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)At.slerpFlat(i,0,a,c-o,a,c,s);return i}},ws=class extends vs{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Cs(this.times,this.values,this.getValueSize(),e)}};ws.prototype.ValueTypeName=`quaternion`,ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends vs{constructor(e,t,n){super(e,t,n)}};Ts.prototype.ValueTypeName=`string`,Ts.prototype.ValueBufferType=Array,Ts.prototype.DefaultInterpolation=Ne,Ts.prototype.InterpolantFactoryMethodLinear=void 0,Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends vs{constructor(e,t,n,r){super(e,t,n,r)}};Es.prototype.ValueTypeName=`vector`;var Ds=class{constructor(e=``,t=-1,n=[],r=Le){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ct(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(ks(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(vs.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=ss(o);o=cs(o,1,c),s=cs(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Ss(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Os(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Ss;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Es;case`color`:return xs;case`quaternion`:return ws;case`bool`:case`boolean`:return bs;case`string`:return Ts}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function ks(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Os(e.type);if(e.times===void 0){let t=[],n=[];ls(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),os(e.settings)&&(n.settings={inTangents:as(e.settings.inTangents,Float32Array),outTangents:as(e.settings.outTangents,Float32Array)}),n}var As={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(js(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!js(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function js(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Ms=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Ns=new Ms,Ps=class{constructor(e){this.manager=e===void 0?Ns:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ps.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Fs={},Is=class extends Error{constructor(e,t){super(e),this.response=t}},Ls=class extends Ps{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=As.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(Fs[e]!==void 0){Fs[e].push({onLoad:t,onProgress:n,onError:r});return}Fs[e]=[],Fs[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&H(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Fs[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new Is(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{As.add(`file:${e}`,t);let n=Fs[e];delete Fs[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Fs[e];if(n===void 0)throw this.manager.itemError(e),t;delete Fs[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Rs=new WeakMap,zs=class extends Ps{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=As.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Rs.get(a);e===void 0&&(e=[],Rs.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Ye(`img`);function s(){l(),t&&t(this);let n=Rs.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Rs.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),As.remove(`image:${e}`);let n=Rs.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Rs.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),As.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Bs=class extends Ps{constructor(e){super(e)}load(e,t,n,r){let i=new qt,a=new zs(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Vs=class extends En{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Y(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Hs=class extends Vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Y(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Us=new J,Ws=new K,Gs=new K,Ks=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new J,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ws.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ws),Gs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Us.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Us,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Us)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qs=new K,Js=new At,Ys=new K,Xs=class extends En{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new J,this.projectionMatrix=new J,this.projectionMatrixInverse=new J,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qs,Js,Ys),Ys.x===1&&Ys.y===1&&Ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Js,Ys.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qs,Js,Ys),Ys.x===1&&Ys.y===1&&Ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Js,Ys.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zs=new K,Qs=new G,$s=new G,ec=class extends Xs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=st*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ot*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return st*2*Math.atan(Math.tan(ot*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zs.x,Zs.y).multiplyScalar(-e/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zs.x,Zs.y).multiplyScalar(-e/Zs.z)}getViewSize(e,t){return this.getViewBounds(e,Qs,$s),t.subVectors($s,Qs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ot*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tc=class extends Ks{constructor(){super(new ec(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=st*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},nc=class extends Vs{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new tc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},rc=class extends Ks{constructor(){super(new ec(90,1,.5,500)),this.isPointLightShadow=!0}},ic=class extends Vs{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new rc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ac=class extends Xs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oc=class extends Ks{constructor(){super(new ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sc=class extends Vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new oc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},cc=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},lc=new WeakMap,uc=class extends Ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&H(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&H(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=As.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{lc.has(a)===!0?(r&&r(lc.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return As.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),lc.set(s,t),As.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});As.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},dc=-90,fc=1,pc=class extends En{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ec(dc,fc,e,t);r.layers=this.layers,this.add(r);let i=new ec(dc,fc,e,t);i.layers=this.layers,this.add(i);let a=new ec(dc,fc,e,t);a.layers=this.layers,this.add(a);let o=new ec(dc,fc,e,t);o.layers=this.layers,this.add(o);let s=new ec(dc,fc,e,t);s.layers=this.layers,this.add(s);let c=new ec(dc,fc,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},mc=class extends ec{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},hc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=gc.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function gc(){this._document.hidden===!1&&this.reset()}var _c=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,i,a;switch(t){case`quaternion`:r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case`string`:case`bool`:r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,i=e*r+r,a=this.cumulativeWeight;if(a===0){for(let e=0;e!==r;++e)n[i+e]=n[e];a=t}else{a+=t;let e=t/a;this._mixBufferRegion(n,i,0,e,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){let e=t*this._origIndex;this._mixBufferRegion(n,r,e,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let e=t,i=t+t;e!==i;++e)if(n[e]!==n[e+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let e=n,i=r;e!==i;++e)t[e]=t[r+e%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,i){if(r>=.5)for(let r=0;r!==i;++r)e[t+r]=e[n+r]}_slerp(e,t,n,r){At.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,i){let a=this._workIndex*i;At.multiplyQuaternionsFlat(e,a,e,t,e,n),At.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,i){let a=1-r;for(let o=0;o!==i;++o){let i=t+o;e[i]=e[i]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,i){for(let a=0;a!==i;++a){let i=t+a;e[i]=e[i]+e[n+a]*r}}},vc=`\\[\\]\\.:\\/`,yc=RegExp(`[\\[\\]\\.:\\/]`,`g`),bc=`[^\\[\\]\\.:\\/]`,xc=`[^`+vc.replace(`\\.`,``)+`]`,Sc=`((?:WC+[\\/:])*)`.replace(`WC`,bc),Cc=`(WCOD+)?`.replace(`WCOD`,xc),wc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,bc),Tc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,bc),Ec=RegExp(`^`+Sc+Cc+wc+Tc+`$`),Dc=[`material`,`materials`,`bones`,`map`],Oc=class{constructor(e,t,n){let r=n||kc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(yc,``)}static parseTrackName(e){let t=Ec.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Dc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){U(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){U(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){U(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){U(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){U(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;U(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kc.Composite=Oc,kc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},kc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},kc.prototype.GetterByBindingType=[kc.prototype._getValue_direct,kc.prototype._getValue_array,kc.prototype._getValue_arrayElement,kc.prototype._getValue_toArray],kc.prototype.SetterByBindingTypeAndVersioning=[[kc.prototype._setValue_direct,kc.prototype._setValue_direct_setNeedsUpdate,kc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kc.prototype._setValue_array,kc.prototype._setValue_array_setNeedsUpdate,kc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kc.prototype._setValue_arrayElement,kc.prototype._setValue_arrayElement_setNeedsUpdate,kc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kc.prototype._setValue_fromArray,kc.prototype._setValue_fromArray_setNeedsUpdate,kc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ac=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let i=t.tracks,a=i.length,o=Array(a),s={endingStart:V,endingEnd:V};for(let e=0;e!==a;++e){let t=i[e].createInterpolant(null);o[e]=t,t.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=je,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let n=this._clip.duration,r=e._clip.duration,i=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,i,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,i=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let s=o.parameterPositions,c=o.sampleValues;return s[0]=i,s[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let i=this._startTime;if(i!==null){let r=(e-i)*n;r<0||n===0?t=0:(this._startTime=null,t=n*r)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let e=this._interpolants,t=this._propertyBindings;switch(this.blendMode){case Re:for(let n=0,r=e.length;n!==r;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);break;case Le:default:for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,i=this._loopCount,a=n===Me;if(e===0)return i===-1?r:a&&(i&1)==1?t-r:r;if(n===2200){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));handle_stop:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break handle_stop}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,i+=Math.abs(n);let o=this.repetitions-i;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e>0?1:-1});else{if(o===1){let t=e<0;this._setEndings(t,!t,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:`loop`,action:this,loopDelta:n})}}else this._loopCount=i,this.time=r;if(a&&(i&1)==1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Fe,r.endingEnd=Fe):(r.endingStart=e?this.zeroSlopeAtStart?Fe:V:Ie,r.endingEnd=t?this.zeroSlopeAtEnd?Fe:V:Ie)}_scheduleFading(e,t,n){let r=this._mixer,i=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,s=a.sampleValues;return o[0]=i,s[0]=t,o[1]=i+e,s[1]=n,this}},jc=new Float32Array(1),Mc=class extends rt{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,s=n.uuid,c=this._bindingsByRootAndName,l=c[s];l===void 0&&(l={},c[s]=l);for(let e=0;e!==i;++e){let i=r[e],c=i.name,u=l[c];if(u!==void 0)++u.referenceCount,a[e]=u;else{if(u=a[e],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,s,c));continue}let r=t&&t._propertyBindings[e].binding.parsedPath;u=new _c(kc.create(n,c,r),i.ValueTypeName,i.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,s,c),a[e]=u}o[e].resultBuffer=u.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let t=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,t)}let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,i=this._actionsByClip,a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{let t=a.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let i=e._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,c=s[s.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],s.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,i=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],s=t[t.length-1],c=e._cacheIndex;s._cacheIndex=c,t[c]=s,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new fs(new Float32Array(2),new Float32Array(2),1,jc),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i}clipAction(e,t,n){let r=t||this._root,i=r.uuid,a=typeof e==`string`?Ds.findByName(r,e):e,o=a===null?e:a.uuid,s=this._actionsByClip[o],c=null;if(n===void 0&&(n=a===null?Le:a.blendMode),s!==void 0){let e=s.actionByRoot[i];if(e!==void 0&&e.blendMode===n)return e;c=s.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let l=new Ac(this,a,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,i),l}existingAction(e,t){let n=t||this._root,r=n.uuid,i=typeof e==`string`?Ds.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o===void 0?null:o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let o=0;o!==n;++o)t[o]._update(r,e,i,a);let o=this._bindings,s=this._nActiveBindings;for(let e=0;e!==s;++e)o[e].apply(a);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){let e=i.knownActions;for(let n=0,r=e.length;n!==r;++n){let r=e[n];this._deactivateAction(r);let i=r._cacheIndex,a=t[t.length-1];r._cacheIndex=null,r._byClipCacheIndex=null,a._cacheIndex=i,t[i]=a,t.pop(),this._removeInactiveBindingsForAction(r)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let e in n){let r=n[e].actionByRoot[t];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}let r=this._bindingsByRootAndName[t];if(r!==void 0)for(let e in r){let t=r[e];t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Nc=new J,Pc=class{constructor(e,t,n=0,r=1/0){this.ray=new oi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new un,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):U(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Nc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nc),this}intersectObject(e,t=!0,n=[]){return Ic(e,this,n,t),n.sort(Fc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ic(e[r],this,n,t);return n.sort(Fc),n}};function Fc(e,t){return e.distance-t.distance}function Ic(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Ic(r[e],t,n,!0)}}var Lc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,H(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Rc(e,t,n,r){let i=zc(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case F:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case te:case re:return Math.max(e,16)*Math.max(t,8)/4;case ee:case ne:return Math.max(e,8)*Math.max(t,8)/2;case ie:case ae:case L:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oe:case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case we:case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*16;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function zc(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Bc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Vc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Hc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},Uc={basic:{uniforms:Go([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:Hc.meshbasic_vert,fragmentShader:Hc.meshbasic_frag},lambert:{uniforms:Go([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:Hc.meshlambert_vert,fragmentShader:Hc.meshlambert_frag},phong:{uniforms:Go([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Hc.meshphong_vert,fragmentShader:Hc.meshphong_frag},standard:{uniforms:Go([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Hc.meshphysical_vert,fragmentShader:Hc.meshphysical_frag},toon:{uniforms:Go([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new Y(0)}}]),vertexShader:Hc.meshtoon_vert,fragmentShader:Hc.meshtoon_frag},matcap:{uniforms:Go([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:Hc.meshmatcap_vert,fragmentShader:Hc.meshmatcap_frag},points:{uniforms:Go([Z.points,Z.fog]),vertexShader:Hc.points_vert,fragmentShader:Hc.points_frag},dashed:{uniforms:Go([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Hc.linedashed_vert,fragmentShader:Hc.linedashed_frag},depth:{uniforms:Go([Z.common,Z.displacementmap]),vertexShader:Hc.depth_vert,fragmentShader:Hc.depth_frag},normal:{uniforms:Go([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:Hc.meshnormal_vert,fragmentShader:Hc.meshnormal_frag},sprite:{uniforms:Go([Z.sprite,Z.fog]),vertexShader:Hc.sprite_vert,fragmentShader:Hc.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Hc.background_vert,fragmentShader:Hc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:Hc.backgroundCube_vert,fragmentShader:Hc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Hc.cube_vert,fragmentShader:Hc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Hc.equirect_vert,fragmentShader:Hc.equirect_frag},distance:{uniforms:Go([Z.common,Z.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Hc.distance_vert,fragmentShader:Hc.distance_frag},shadow:{uniforms:Go([Z.lights,Z.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:Hc.shadow_vert,fragmentShader:Hc.shadow_frag}};Uc.physical={uniforms:Go([Uc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:Hc.meshphysical_vert,fragmentShader:Hc.meshphysical_frag};var Wc={r:0,b:0,g:0},Gc=new J,Kc=new q;Kc.set(-1,0,0,0,1,0,0,0,1);function qc(e,t,n,r,i,a){let o=new Y(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new X(new xa(1,1,1),new Qo({name:`BackgroundCubeMaterial`,uniforms:Wo(Uc.backgroundCube.uniforms),vertexShader:Uc.backgroundCube.vertexShader,fragmentShader:Uc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Kc),l.material.toneMapped=Lt.getTransfer(i.colorSpace)!==Ue,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new X(new Vo(2,2),new Qo({name:`BackgroundMaterial`,uniforms:Wo(Uc.background.uniforms),vertexShader:Uc.background.vertexShader,fragmentShader:Uc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(i.colorSpace)!==Ue,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Wc,Jo(e)),n.buffers.color.setClear(Wc.r,Wc.g,Wc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Jc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Yc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Xc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Zc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Lr,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Qc=4,$c=6,el=20,tl=256,nl=new ac,rl=new Y,il=null,al=0,ol=0,sl=!1,cl=new K,ll=new K,ul=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=cl}=i;il=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(il,al,ol),this._renderer.xr.enabled=sl,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:Ve,depthBuffer:!1},r=fl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fl(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dl(r)),this._blurMaterial=hl(r,e,t),this._ggxMaterial=ml(r,e,t)}return r}_compileMaterial(e){let t=new X(new Ar,e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,n,r,i){let a=new ec(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(rl),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new X(new xa,new si({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(rl),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;pl(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gl());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;pl(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,nl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Qc?n-d+Qc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,pl(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,nl),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,pl(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,nl)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];pl(t,3*l*(r>this._lodMax-Qc?r-this._lodMax+Qc:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,nl)}};function dl(e){let t=[],n=[],r=e,i=e-Qc+1+$c;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?ll.set(1,r,n):e===1?ll.set(-n,1,-r):e===2?ll.set(-n,r,1):e===3?ll.set(-1,r,-n):e===4?ll.set(-n,-1,r):ll.set(n,r,-1),ll.toArray(l,(e*6+t)*3)}}let u=new Ar;u.setAttribute(`position`,new hr(c,3)),u.setAttribute(`outputDirection`,new hr(l,3)),n.push(new X(u,null)),r>Qc&&r--}return{lodMeshes:n,sizeLods:t}}function fl(e,t,n){let r=new Xt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function pl(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ml(e,t,n){return new Qo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:tl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function hl(e,t,n){return new Qo({name:`SphericalGaussianBlur`,defines:{SAMPLES:el,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function gl(){return new Qo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _l(){return new Qo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yl=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ga(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xa(5,5,5),i=new Qo({name:`CubemapFromEquirect`,uniforms:Wo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new X(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new pc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function bl(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new yl(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ul(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ul(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function xl(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Sl(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?_r:gr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Cl(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function wl(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:U(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Tl(e,t,n){let r=new WeakMap,i=new Jt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new Zt(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new G(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function El(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Dl={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ol(e,t,n,r,i,a){let o=new Xt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Ar;l.setAttribute(`position`,new vr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new vr([0,2,0,0,2,0],2));let u=new $o({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new X(l,u),f=new ac(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Xt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new Xt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Lt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Dl[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var kl=new qt,Al=new va(1,1),jl=new Zt,Ml=new Qt,Nl=new ga,Pl=[],Fl=[],Il=new Float32Array(16),Ll=new Float32Array(9),Rl=new Float32Array(4);function zl(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Pl[i];if(a===void 0&&(a=new Float32Array(i),Pl[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Bl(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Vl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Hl(e,t){let n=Fl[t];n===void 0&&(n=new Int32Array(t),Fl[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ul(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Wl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bl(n,t))return;e.uniform2fv(this.addr,t),Vl(n,t)}}function Gl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Bl(n,t))return;e.uniform3fv(this.addr,t),Vl(n,t)}}function Kl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bl(n,t))return;e.uniform4fv(this.addr,t),Vl(n,t)}}function ql(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Bl(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Vl(n,t)}else{if(Bl(n,r))return;Rl.set(r),e.uniformMatrix2fv(this.addr,!1,Rl),Vl(n,r)}}function Jl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Bl(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Vl(n,t)}else{if(Bl(n,r))return;Ll.set(r),e.uniformMatrix3fv(this.addr,!1,Ll),Vl(n,r)}}function Yl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Bl(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Vl(n,t)}else{if(Bl(n,r))return;Il.set(r),e.uniformMatrix4fv(this.addr,!1,Il),Vl(n,r)}}function Xl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Zl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bl(n,t))return;e.uniform2iv(this.addr,t),Vl(n,t)}}function Ql(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Bl(n,t))return;e.uniform3iv(this.addr,t),Vl(n,t)}}function $l(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bl(n,t))return;e.uniform4iv(this.addr,t),Vl(n,t)}}function eu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function tu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bl(n,t))return;e.uniform2uiv(this.addr,t),Vl(n,t)}}function nu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Bl(n,t))return;e.uniform3uiv(this.addr,t),Vl(n,t)}}function ru(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bl(n,t))return;e.uniform4uiv(this.addr,t),Vl(n,t)}}function iu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Al.compareFunction=n.isReversedDepthBuffer()?518:515,a=Al):a=kl,n.setTexture2D(t||a,i)}function au(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ml,i)}function ou(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Nl,i)}function su(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||jl,i)}function cu(e){switch(e){case 5126:return Ul;case 35664:return Wl;case 35665:return Gl;case 35666:return Kl;case 35674:return ql;case 35675:return Jl;case 35676:return Yl;case 5124:case 35670:return Xl;case 35667:case 35671:return Zl;case 35668:case 35672:return Ql;case 35669:case 35673:return $l;case 5125:return eu;case 36294:return tu;case 36295:return nu;case 36296:return ru;case 35678:case 36198:case 36298:case 36306:case 35682:return iu;case 35679:case 36299:case 36307:return au;case 35680:case 36300:case 36308:case 36293:return ou;case 36289:case 36303:case 36311:case 36292:return su}}function lu(e,t){e.uniform1fv(this.addr,t)}function uu(e,t){let n=zl(t,this.size,2);e.uniform2fv(this.addr,n)}function du(e,t){let n=zl(t,this.size,3);e.uniform3fv(this.addr,n)}function fu(e,t){let n=zl(t,this.size,4);e.uniform4fv(this.addr,n)}function pu(e,t){let n=zl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function mu(e,t){let n=zl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function hu(e,t){let n=zl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function gu(e,t){e.uniform1iv(this.addr,t)}function _u(e,t){e.uniform2iv(this.addr,t)}function vu(e,t){e.uniform3iv(this.addr,t)}function yu(e,t){e.uniform4iv(this.addr,t)}function bu(e,t){e.uniform1uiv(this.addr,t)}function xu(e,t){e.uniform2uiv(this.addr,t)}function Su(e,t){e.uniform3uiv(this.addr,t)}function Cu(e,t){e.uniform4uiv(this.addr,t)}function wu(e,t,n){let r=this.cache,i=t.length,a=Hl(n,i);Bl(r,a)||(e.uniform1iv(this.addr,a),Vl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Al:kl;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Tu(e,t,n){let r=this.cache,i=t.length,a=Hl(n,i);Bl(r,a)||(e.uniform1iv(this.addr,a),Vl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ml,a[e])}function Eu(e,t,n){let r=this.cache,i=t.length,a=Hl(n,i);Bl(r,a)||(e.uniform1iv(this.addr,a),Vl(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Nl,a[e])}function Du(e,t,n){let r=this.cache,i=t.length,a=Hl(n,i);Bl(r,a)||(e.uniform1iv(this.addr,a),Vl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||jl,a[e])}function Ou(e){switch(e){case 5126:return lu;case 35664:return uu;case 35665:return du;case 35666:return fu;case 35674:return pu;case 35675:return mu;case 35676:return hu;case 5124:case 35670:return gu;case 35667:case 35671:return _u;case 35668:case 35672:return vu;case 35669:case 35673:return yu;case 5125:return bu;case 36294:return xu;case 36295:return Su;case 36296:return Cu;case 35678:case 36198:case 36298:case 36306:case 35682:return wu;case 35679:case 36299:case 36307:return Tu;case 35680:case 36300:case 36308:case 36293:return Eu;case 36289:case 36303:case 36311:case 36292:return Du}}var ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cu(t.type)}},Au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ou(t.type)}},ju=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Mu=/(\w+)(\])?(\[|\.)?/g;function Nu(e,t){e.seq.push(t),e.map[t.id]=t}function Pu(e,t,n){let r=e.name,i=r.length;for(Mu.lastIndex=0;;){let a=Mu.exec(r),o=Mu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Nu(n,l===void 0?new ku(s,e,t):new Au(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ju(s),Nu(n,e)),n=e}}}var Fu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Pu(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Iu(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Lu=37297,Ru=0;function zu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Bu=new q;function Vu(e){Lt._getMatrix(Bu,Lt.workingColorSpace,e);let t=`mat3( ${Bu.elements.map(e=>e.toFixed(4))} )`;switch(Lt.getTransfer(e)){case He:return[t,`LinearTransferOETF`];case Ue:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Hu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+zu(e.getShaderSource(t),r)}return i}function Uu(e,t){let n=Vu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Wu={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Gu(e,t){let n=Wu[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ku=new K;function qu(){return Lt.getLuminanceCoefficients(Ku),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ku.x.toFixed(4)}, ${Ku.y.toFixed(4)}, ${Ku.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ju(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Zu).join(`
`)}function Yu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Xu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Zu(e){return e!==``}function Qu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $u(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ed=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(e){return e.replace(ed,rd)}var nd=new Map;function rd(e,t){let n=Hc[t];if(n===void 0){let e=nd.get(t);if(e!==void 0)n=Hc[e],H(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return td(n)}var id=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(e){return e.replace(id,od)}function od(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function sd(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var cd={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ld(e){return cd[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ud={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function dd(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ud[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var fd={302:`ENVMAP_MODE_REFRACTION`};function pd(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:fd[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var md={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function hd(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:md[e.combine]||`ENVMAP_BLENDING_NONE`}function gd(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function _d(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ld(n),l=dd(n),u=pd(n),d=hd(n),f=gd(n),p=Ju(n),m=Yu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Zu).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Zu).join(`
`),_.length>0&&(_+=`
`)):(g=[sd(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Zu).join(`
`),_=[sd(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Hc.tonemapping_pars_fragment,n.toneMapping===0?``:Gu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Hc.colorspace_pars_fragment,Uu(`linearToOutputTexel`,n.outputColorSpace),qu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Zu).join(`
`)),o=td(o),o=Qu(o,n),o=$u(o,n),s=td(s),s=Qu(s,n),s=$u(s,n),o=ad(o),s=ad(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Iu(i,i.VERTEX_SHADER,y),S=Iu(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Hu(i,x,`vertex`),n=Hu(i,S,`fragment`);U(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Fu(i,h),T=Xu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Lu)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ru++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var vd=0,yd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bd(e),t.set(e,n)),n}},bd=class{constructor(e){this.id=vd++,this.code=e,this.usedTimes=0}};function xd(e){return e===1030||e===37490||e===36285}function Sd(e,t,n,r,i,a){let o=new un,s=new yd,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Uc[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,ee=!!x,te=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,ae=!!i.displacementMap,oe=!!i.emissiveMap,L=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,he=ce&&!!i.anisotropyMap,ge=le&&!!i.clearcoatMap,_e=le&&!!i.clearcoatNormalMap,ve=le&&!!i.clearcoatRoughnessMap,ye=fe&&!!i.iridescenceMap,be=fe&&!!i.iridescenceThicknessMap,xe=pe&&!!i.sheenColorMap,Se=pe&&!!i.sheenRoughnessMap,Ce=!!i.specularMap,we=!!i.specularColorMap,Te=!!i.specularIntensityMap,Ee=me&&!!i.transmissionMap,De=me&&!!i.thicknessMap,Oe=!!i.gradientMap,ke=!!i.alphaMap,Ae=i.alphaTest>0,R=!!i.alphaHash,je=!!i.extensions,Me=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:ee,envMapMode:ee&&x.mapping,envMapCubeUVHeight:S,aoMap:te,lightMap:ne,bumpMap:re,normalMap:ie,displacementMap:ae,emissiveMap:oe,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&xd(i.normalMap.format),metalnessMap:L,roughnessMap:se,anisotropy:ce,anisotropyMap:he,clearcoat:le,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:ue,retroreflection:de,iridescence:fe,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:pe,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:me,transmissionMap:Ee,thicknessMap:De,gradientMap:Oe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:R,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:te&&m(i.aoMap.channel),lightMapUv:ne&&m(i.lightMap.channel),bumpMapUv:re&&m(i.bumpMap.channel),normalMapUv:ie&&m(i.normalMap.channel),displacementMapUv:ae&&m(i.displacementMap.channel),emissiveMapUv:oe&&m(i.emissiveMap.channel),metalnessMapUv:L&&m(i.metalnessMap.channel),roughnessMapUv:se&&m(i.roughnessMap.channel),anisotropyMapUv:he&&m(i.anisotropyMap.channel),clearcoatMapUv:ge&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:be&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(i.sheenRoughnessMap.channel),specularMapUv:Ce&&m(i.specularMap.channel),specularColorMapUv:we&&m(i.specularColorMap.channel),specularIntensityMapUv:Te&&m(i.specularIntensityMap.channel),transmissionMapUv:Ee&&m(i.transmissionMap.channel),thicknessMapUv:De&&m(i.thicknessMap.channel),alphaMapUv:ke&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ie||ce),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||ke),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Lt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:oe&&i.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:je&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Uc[t];n=Yo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new _d(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Cd(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function wd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Td(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ed(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||wd),r.length>1&&r.sort(t||Td),i.length>1&&i.sort(t||Td)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Dd(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ed,e.set(t,[i])):n>=r.length?(i=new Ed,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Od(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new Y};break;case`SpotLight`:n={position:new K,direction:new K,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function kd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ad=0;function jd(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Md(e){let t=new Od,n=kd(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new J,o=new J;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(jd);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ad++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Nd(e){let t=new Md(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Pd(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Nd(e),t.set(n,[a])):r>=i.length?(a=new Nd(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Fd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Id=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ld=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Rd=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],zd=new J,Bd=new K,Vd=new K;function Hd(e,t,n){let r=new Ji,a=new G,o=new G,c=new Jt,l=new rs,u=new is,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Qo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:Fd,fragmentShader:Id}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new Ar;y.setAttribute(`position`,new hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new X(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){H(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Xt(a.x,a.y,{format:A,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new va(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new yl(a.x),p.map.depthTexture=new ya(a.x,h)):(p.map=new Xt(a.x,a.y),p.map.depthTexture=new va(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Bd.setFromMatrixPosition(d.matrixWorld),e.position.copy(Bd),Vd.copy(e.position),Vd.add(Ld[t]),e.up.copy(Rd[t]),e.lookAt(Vd),e.updateMatrixWorld(),n.makeTranslation(-Bd.x,-Bd.y,-Bd.z),zd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(zd,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=p.getFrustum(t),T(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Xt(a.x,a.y,{format:A,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ud(e,t){function n(){let t=!1,n=new Jt,r=null,i=new Jt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=nt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,ee={},te=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new Jt().fromArray(te),ie=new Jt().fromArray(ne);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let oe={};oe[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),L(e.CULL_FACE),pe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(se(e.BLEND),g=!1);else if(g===!1&&(L(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:U(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:U(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:U(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:U(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?se(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?se(e.CULL_FACE):(L(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ye(t){t?L(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function xe(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=ee[r];i===void 0&&(i={type:void 0,texture:void 0},ee[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function Se(){let t=ee[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function R(){try{e.texImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function je(){try{e.texImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Me(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function z(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function Pe(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function B(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function V(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,ee={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:R,texImage3D:je,pixelStorei:Ne,getParameter:Me,updateUBOMapping:B,uniformBlockBinding:V,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:z,viewport:Pe,reset:Fe}}function Wd(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new G,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ye(`canvas`)}function T(e,t,n){let r=1,i=Me(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function k(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?He:Lt.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function j(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),F(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function P(e){let t=e.target;t.removeEventListener(`dispose`,P),ee(t)}function F(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&I(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function I(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ee(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let te=0;function ne(){te=0}function re(){return te}function ie(e){te=e}function ae(){let e=te;return e>=p.maxTextures&&H(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),te+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function L(t,n){let r=f.get(t);if(t.isVideoTexture&&R(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{_e(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function se(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?_e(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function ce(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?_e(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function le(t,n){let r=f.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version?ve(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let ue={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},de={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function pe(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,ue[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,ue[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,ue[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,de[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,de[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,fe[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function me(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,N));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=oe(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&I(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function he(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ge(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=he(r.start,n.width,4),c=he(t.start,n.width,4);r.start<=i+1&&s===c&&he(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function _e(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=me(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Lt.getPrimaries(Lt.workingColorSpace),r=n.colorSpace===``?null:Lt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=je(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=A(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);pe(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=M(n,t);if(n.isDepthTexture)u=j(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&ge(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=Rc(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=Rc(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Me(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Me(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&O(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ve(t,n,r){if(n.image.length!==6)return;let i=me(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Lt.getPrimaries(Lt.workingColorSpace),s=n.colorSpace===``?null:Lt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=je(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=A(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=M(n,h);pe(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Me(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&O(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ye(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=A(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Ae(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,ke(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=j(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ae(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ke(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ke(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=A(a.internalFormat,o,s,a.normalized,a.colorSpace);Ae(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ke(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ke(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,a.__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,N)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),pe(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else L(n.depthTexture,0);let o=a.__webglTexture,s=ke(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Ae(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Ae(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Se(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)xe(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?xe(n.__webglFramebuffer[0],t,0):xe(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),be(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),be(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){let i=f.get(t);n!==void 0&&ye(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Se(t)}function we(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,P);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Ae(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=A(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=ke(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),be(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),pe(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)ye(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else ye(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&O(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),pe(s,i),ye(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&O(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),pe(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)ye(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else ye(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&O(a),d.unbindTexture()}t.depthBuffer&&Se(t)}function Te(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let Ee=[],De=[];function Oe(t){if(t.samples>0){if(Ae(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Ee.length=0,De.length=0,Ee.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ee.push(o),De.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,De)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ee))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ke(e){return Math.min(p.maxSamples,e.samples)}function Ae(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function R(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function je(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Lt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):U(`WebGLTextures: Unsupported texture color space:`,n)),t}function Me(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ae,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=ie,this.setTexture2D=L,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Gd(e,t){function n(n,r=``){let i,a=Lt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Kd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ba(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qo({vertexShader:Kd,fragmentShader:qd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new X(new Vo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yd=class extends rt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new Jd,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new G,k=null,A=null,j=new ec;j.viewport=new Jt;let M=new ec;M.viewport=new Jt;let N=[j,M],P=new mc,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new kn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new kn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new kn,C[e]=t),t.getHandSpace()};function ee(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,ee),r.removeEventListener(`selectstart`,ee),r.removeEventListener(`selectend`,ee),r.removeEventListener(`squeeze`,ee),r.removeEventListener(`squeezestart`,ee),r.removeEventListener(`squeezeend`,ee),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}F=null,I=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ee),r.addEventListener(`selectstart`,ee),r.addEventListener(`selectend`,ee),r.addEventListener(`squeeze`,ee),r.addEventListener(`squeezestart`,ee),r.addEventListener(`squeezeend`,ee),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Xt(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new va(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Xt(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let re=new K,ie=new K;function ae(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;oe(P,i);for(let e=0;e<a.length;e++)oe(a[e],i);a.length===2?ae(P,j,M):P.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),L(e,P,i)};function L(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=st*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let se=null;function ce(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new ec,o.layers.enable(n),o.viewport=new Jt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ba,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let le=new Bc;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},Xd=new J,Zd=new q;Zd.set(-1,0,0,0,1,0,0,0,1);function Qd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Jo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Xd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Zd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function $d(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return U(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ef=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),tf=null;function nf(){return tf===null&&(tf=new Mi(ef,16,16,A,_),tf.name=`DFG_LUT`,tf.minFilter=s,tf.magFilter=s,tf.wrapS=n,tf.wrapT=n,tf.generateMipmaps=!1,tf.needsUpdate=!0),tf}var rf=class{constructor(e={}){let{canvas:t=Xe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([M,j,k]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D=new K,O=null,A=null,N=[],P=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,ee=!1,te=null,ne=null,re=null,ie=null;this._outputColorSpace=Be;let ae=0,oe=0,L=null,se=-1,ce=null,le=new Jt,ue=new Jt,de=null,fe=new Y(0),pe=0,me=t.width,he=t.height,ge=1,_e=null,ve=null,ye=new Jt(0,0,me,he),be=new Jt(0,0,me,he),xe=!1,Se=new Ji,Ce=!1,we=!1,Te=new J,Ee=new K,De=new Jt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ae(){return L===null?ge:1}let R=n;function je(e,n){return t.getContext(e,n)}let Me,Ne,z,Pe,B,V,Fe,Ie,Le,Re,ze,Ve,He,Ue,We,Ge,qe,Je,Ye,Ze,$e,et,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),R===null){let t=`webgl2`;if(R=je(t,e),R===null)throw je(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),U(`WebGLRenderer: `+e.message),e}function rt(){Me=new xl(R),Me.init(),$e=new Gd(R,Me),Ne=new Xc(R,Me,e,$e),z=new Ud(R,Me),Ne.reversedDepthBuffer&&m&&z.buffers.depth.setReversed(!0),ne=R.createFramebuffer(),re=R.createFramebuffer(),ie=R.createFramebuffer(),Pe=new wl(R),B=new Cd,V=new Wd(R,Me,z,B,Ne,$e,Pe),Fe=new bl(I),Ie=new Vc(R),et=new Jc(R,Ie),Le=new Sl(R,Ie,Pe,et),Re=new El(R,Le,Ie,et,Pe),Je=new Tl(R,Ne,V),We=new Zc(B),ze=new Sd(I,Fe,Me,Ne,et,We),Ve=new Qd(I,B),He=new Dd,Ue=new Pd(Me),qe=new qc(I,Fe,z,Re,x,s),Ge=new Hd(I,Re,Ne),nt=new $d(R,Pe,Ne,z),Ye=new Yc(R,Me,Pe),Ze=new Cl(R,Me,Pe),Pe.programs=ze.programs,I.capabilities=Ne,I.extensions=Me,I.properties=B,I.renderLists=He,I.shadowMap=Ge,I.state=z,I.info=Pe}S!==1009&&(F=new Ol(S,t.width,t.height,o,r,i));let it=new Yd(I,R);this.xr=it,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(e){e!==void 0&&(ge=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){it.isPresenting?H(`WebGLRenderer: Can't change size while VR device is presenting.`):(me=e,he=n,t.width=Math.floor(e*ge),t.height=Math.floor(n*ge),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(me*ge,he*ge).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,ge=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)U(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(le)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),z.viewport(le.copy(ye).multiplyScalar(ge).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),z.scissor(ue.copy(be).multiplyScalar(ge).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){z.setScissorTest(xe=e)},this.setOpaqueSort=function(e){_e=e},this.setTransparentSort=function(e){ve=e},this.getClearColor=function(e){return e.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=C.has(t)}if(e){let e=L.texture.type,t=w.has(e),n=qe.getClearColor(),r=qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,R.clearBufferuiv(R.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,R.clearBufferiv(R.COLOR,0,E))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),te=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),qe.dispose(),He.dispose(),Ue.dispose(),B.dispose(),Fe.dispose(),Re.dispose(),et.dispose(),nt.dispose(),ze.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,pt),it.removeEventListener(`sessionend`,mt),ht.stop()};function at(e){e.preventDefault(),Qe(`WebGLRenderer: Context Lost.`),ee=!0}function ot(){Qe(`WebGLRenderer: Context Restored.`),ee=!1;let e=Pe.autoReset,t=Ge.enabled,n=Ge.autoUpdate,r=Ge.needsUpdate,i=Ge.type;rt(),Pe.autoReset=e,Ge.enabled=t,Ge.autoUpdate=n,Ge.needsUpdate=r,Ge.type=i}function st(e){U(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),W(t)}function W(e){lt(e),B.remove(e)}function lt(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Oe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Tt(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Le.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ye;if(c!==null&&(h=Ie.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*Ae()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*Ae()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ie.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n,r){te!==null&&e.isNodeMaterial&&te.setObject(r,e),Ce===!0&&We.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,r),e.side=0,e.needsUpdate=!0,xt(e,t,r),e.side=2):xt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),te!==null&&te.renderStart(e,t,n),A=Ue.get(n),A.init(t),P.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights(),te!==null&&te.updateLights(A.state.lightsArray),we=this.localClippingEnabled,Ce=We.init(this.clippingPlanes,we),Ce===!0&&We.setGlobalState(this.clippingPlanes,t),te!==null&&Ge.render(A.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ut(o,n,t,e),r.add(o)}else ut(i,n,t,e),r.add(i)}}),A=P.pop(),te!==null&&te.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new Bc;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,it.setAnimationLoop(e),e===null?ht.stop():ht.start()},it.addEventListener(`sessionstart`,pt),it.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){U(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;te!==null&&te.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=F!==null&&(L===null||n)&&F.begin(I,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,L),A=Ue.get(e,P.length),A.init(t),A.state.textureUnits=V.getTextureUnits(),P.push(A),Te.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Se.setFromProjectionMatrix(Te,Ke,t.reversedDepth),we=this.localClippingEnabled,Ce=We.init(this.clippingPlanes,we),O=He.get(e,N.length),O.init(),N.push(O),it.enabled===!0&&it.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,I.sortObjects)}gt(e,t,0,I.sortObjects),O.finish(),te!==null&&te.updateLights(A.state.lightsArray),I.sortObjects===!0&&O.sort(_e,ve),ke=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ke&&qe.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&We.beginShadows();let i=A.state.shadowsArray;if(Ge.render(i,e,t),Ce===!0&&We.endShadows(),(r&&F.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}ke&&qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(O,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),ke&&qe.render(e),_t(O,e,t)}L!==null&&oe===0&&(V.updateMultisampleRenderTarget(L),V.updateRenderTargetMipmap(L)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),et.resetDefaultState(),se=-1,ce=null,P.pop(),P.length>0?(A=P[P.length-1],V.setTextureUnits(A.state.textureUnits),Ce===!0&&We.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,N.pop(),O=N.length>0?N[N.length-1]:null,te!==null&&te.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)A.pushLightProbeGrid(e);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Se)){r&&De.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);let i=Re.update(e),a=e.material;a.visible&&O.push(e,i,a,n,De.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Se))){let i=Re.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),De.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),De.copy(e.boundingSphere.center)),De.applyMatrix4(e.matrixWorld).applyMatrix4(Te)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,De.z,s,t)}}else a.visible&&O.push(e,i,a,n,De.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),Ce===!0&&We.setGlobalState(I.clippingPlanes,n),r&&z.viewport(le.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Me.has(`EXT_color_buffer_half_float`)||Me.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new Xt(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,Ne.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}let a=A.state.transmissionRenderTarget[r.id],o=r.viewport||le;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),c=I.getActiveCubeFace(),d=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(fe),pe=I.getClearAlpha(),pe<1&&I.setClearColor(16777215,.5),I.clear(),ke&&qe.render(n);let f=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),Ce===!0&&We.setGlobalState(I.clippingPlanes,r),yt(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),Me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}I.setRenderTarget(s,c,d),I.setClearColor(fe,pe),p!==void 0&&(r.viewport=p),I.toneMapping=f}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){te!==null&&i.isNodeMaterial&&te.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=Oe);let r=B.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Fe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ct(e,s),d}else s.uniforms=ze.getUniforms(e),te!==null&&e.isNodeMaterial&&te.build(e,n,s),e.onBeforeCompile(s,I),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=We.uniform),Ct(e,s),r.needsLights=Dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=A.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function St(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Fu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ct(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Tt(e,t,n,r,i){t.isScene!==!0&&(t=Oe),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?I.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Lt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Fe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=A.state.lights;if(Ce===!0&&(we===!0||e!==ce)){let t=e===ce&&r.id===se;We.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==We.numPlanes||v.numIntersection!==We.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=A.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=xt(r,t,i),te&&r.isNodeMaterial&&te.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(z.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==se&&(se=r.id,C=!0),v.needsLights){let e=wt(A.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ce!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(R,`projectionMatrix`,e.projectionMatrix),T.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(R,Ee.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&T.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),ce!==e&&(ce=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(R,`sunShadowMap`,y.state.sunShadowMap,V),y.state.directionalShadowMap.length>0&&T.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,V),y.state.spotShadowMap.length>0&&T.setValue(R,`spotShadowMap`,y.state.spotShadowMap,V),y.state.pointShadowMap.length>0&&T.setValue(R,`pointShadowMap`,y.state.pointShadowMap,V)),i.isSkinnedMesh){T.setOptional(R,i,`bindMatrix`),T.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(R,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(T.setOptional(R,i,`batchingTexture`),T.setValue(R,`batchingTexture`,i._matricesTexture,V),T.setOptional(R,i,`batchingIdTexture`),T.setValue(R,`batchingIdTexture`,i._indirectTexture,V),T.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(R,`batchingColorTexture`,i._colorsTexture,V));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Je.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=nf()),C){if(T.setValue(R,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&Et(E,w),a&&r.fog===!0&&Ve.refreshFogUniforms(E,a),Ve.refreshMaterialUniforms(E,r,ge,he,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Fu.upload(R,St(v),E,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Fu.upload(R,St(v),E,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(R,`center`,i.center),T.setValue(R,`modelViewMatrix`,i.modelViewMatrix),T.setValue(R,`normalMatrix`,i.normalMatrix),T.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,x),nt.bind(n,x)}}return x}function Et(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){L=e,ae=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,z.viewport(le),z.scissor(ue),z.setScissorTest(de),se=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else le.copy(ye).multiplyScalar(ge).floor(),ue.copy(be).multiplyScalar(ge).floor(),de=xe;if(n!==0&&(r=ne),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(le),z.scissor(ue),z.setScissorTest(de),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}se=-1};function Ot(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ne.textureFormatReadable(e.format),t.__typeReadable=Ne.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=Ot(o);if(u.__formatReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=L===null?null:B.get(L).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=Ot(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=L===null?null:B.get(L).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await tt(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,o,s,f,p,o,s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,re),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,ie);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,o,s,f,p,o,s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){ae=0,oe=0,L=null,z.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}};function af(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function of(e){let t=new Map,n=new Map,r=e.clone();return sf(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function sf(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)sf(e.children[r],t.children[r],n)}var cf=class extends Ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new hf(e)}),this.register(function(e){return new gf(e)}),this.register(function(e){return new Tf(e)}),this.register(function(e){return new Ef(e)}),this.register(function(e){return new Df(e)}),this.register(function(e){return new vf(e)}),this.register(function(e){return new yf(e)}),this.register(function(e){return new bf(e)}),this.register(function(e){return new xf(e)}),this.register(function(e){return new mf(e)}),this.register(function(e){return new Sf(e)}),this.register(function(e){return new _f(e)}),this.register(function(e){return new wf(e)}),this.register(function(e){return new Cf(e)}),this.register(function(e){return new ff(e)}),this.register(function(e){return new Of(e,df.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Of(e,df.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new kf(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=cc.extractUrlBase(e);a=cc.resolveURL(t,this.path)}else a=cc.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new Ls(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Af){try{a[df.KHR_BINARY_GLTF]=new Nf(e)}catch(e){r&&r(e);return}i=JSON.parse(a[df.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new ap(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case df.KHR_MATERIALS_UNLIT:a[t]=new pf;break;case df.KHR_DRACO_MESH_COMPRESSION:a[t]=new Pf(i,this.dracoLoader);break;case df.KHR_TEXTURE_TRANSFORM:a[t]=new Ff;break;case df.KHR_MESH_QUANTIZATION:a[t]=new If;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function lf(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function uf(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var df={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},ff=class{constructor(e){this.parser=e,this.name=df.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new Y(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Ve);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new sc(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new ic(s),o.distance=c;break;case`spot`:o=new nc(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),Zf(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},pf=class{constructor(){this.name=df.KHR_MATERIALS_UNLIT}getMaterialType(){return si}extendParams(e,t,n){let r=[];e.color=new Y(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Ve),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,Be))}return Promise.all(r)}},mf=class{constructor(e){this.parser=e,this.name=df.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=uf(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},hf=class{constructor(e){this.parser=e,this.name=df.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return uf(this.parser,e,this.name)===null?null:ts}extendMaterialParams(e,t){let n=uf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new G(e,e)}return Promise.all(r)}},gf=class{constructor(e){this.parser=e,this.name=df.KHR_MATERIALS_DISPERSION}getMaterialType(e){return uf(this.parser,e,this.name)===null?null:ts}extendMaterialParams(e,t){let n=uf(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},_f=class{constructor(e){this.parser=e,this.name=df.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return uf(this.parser,e,this.name)===null?null:ts}extendMaterialParams(e,t){let n=uf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},vf=class{constructor(e){this.parser=e,this.name=df.KHR_MATERIALS_SHEEN}getMaterialType(e){return uf(this.parser,e,this.name)===null?null:ts}extendMaterialParams(e,t){let n=uf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new Y(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Ve)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,Be)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},yf=class{constructor(e){this.parser=e,this.name=df.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return uf(this.parser,e,this.name)===null?null:ts}extendMaterialParams(e,t){let n=uf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},bf=class{constructor(e){this.parser=e,this.name=df.KHR_MATERIALS_VOLUME}getMaterialType(e){return uf(this.parser,e,this.name)===null?null:ts}extendMaterialParams(e,t){let n=uf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new Y().setRGB(i[0],i[1],i[2],Ve),Promise.all(r)}},xf=class{constructor(e){this.parser=e,this.name=df.KHR_MATERIALS_IOR}getMaterialType(e){return uf(this.parser,e,this.name)===null?null:ts}extendMaterialParams(e,t){let n=uf(this.parser,e,this.name);return n===null||(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Sf=class{constructor(e){this.parser=e,this.name=df.KHR_MATERIALS_SPECULAR}getMaterialType(e){return uf(this.parser,e,this.name)===null?null:ts}extendMaterialParams(e,t){let n=uf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new Y().setRGB(i[0],i[1],i[2],Ve),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,Be)),Promise.all(r)}},Cf=class{constructor(e){this.parser=e,this.name=df.EXT_MATERIALS_BUMP}getMaterialType(e){return uf(this.parser,e,this.name)===null?null:ts}extendMaterialParams(e,t){let n=uf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},wf=class{constructor(e){this.parser=e,this.name=df.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return uf(this.parser,e,this.name)===null?null:ts}extendMaterialParams(e,t){let n=uf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Tf=class{constructor(e){this.parser=e,this.name=df.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Ef=class{constructor(e){this.parser=e,this.name=df.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Df=class{constructor(e){this.parser=e,this.name=df.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Of=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},kf=class{constructor(e){this.name=df.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Bf.TRIANGLES&&e.mode!==Bf.TRIANGLE_STRIP&&e.mode!==Bf.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new J,n=new K,a=new At,s=new K(1,1,1),c=new Wi(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new Ii(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new Ar,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new Ii(t.array,t.itemSize,t.normalized))}En.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Af=`glTF`,jf=12,Mf={JSON:1313821514,BIN:5130562},Nf=class{constructor(e){this.name=df.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,jf),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Af)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-jf,i=new DataView(e,jf),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Mf.JSON){let r=new Uint8Array(e,jf+a,t);this.content=n.decode(r)}else if(r===Mf.BIN){let n=jf+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Pf=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=df.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=Gf[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=Gf[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Vf[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Ve,n)})})}},Ff=class{constructor(){this.name=df.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},If=class{constructor(){this.name=df.KHR_MESH_QUANTIZATION}},Lf=class extends us{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Rf=new At,zf=class extends Lf{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Rf.fromArray(i).normalize().toArray(i),i}},Bf={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vf={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hf={9728:i,9729:s,9984:a,9985:c,9986:o,9987:l},Uf={33071:n,33648:r,10497:t},Wf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gf={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Kf={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},qf={CUBICSPLINE:void 0,LINEAR:z,STEP:Ne},Jf={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Yf(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new es({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function Xf(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function Zf(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Qf(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function $f(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function ep(e){let t,n=e.extensions&&e.extensions[df.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+tp(n.attributes):e.indices+`:`+tp(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+tp(e.targets[n]);return t}function tp(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function np(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function rp(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var ip=new J,ap=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lf,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new Bs(this.options.manager):new uc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ls(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return Xf(i,a,r),Zf(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[df.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(cc.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=Wf[r.type],t=Vf[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new hr(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=Wf[r.type],o=Vf[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new jr(f,u/s),t.cache.add(n,c)),p=new Nr(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new hr(f,a,d);if(r.sparse!==void 0){let t=Wf.SCALAR,n=Vf[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new hr(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Hf[n.magFilter]||1006,t.minFilter=Hf[n.minFilter]||1008,t.wrapS=Uf[n.wrapS]||1e3,t.wrapT=Uf[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new qt(e);t.needsUpdate=!0,n(t)}),t.load(cc.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),Zf(e,a),e.userData.mimeType=a.mimeType||rp(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[df.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[df.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[df.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new la,zr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Yi,zr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return es}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[df.KHR_MATERIALS_UNLIT]){let e=r[df.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new Y(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Ve),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,Be)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||Jf.OPAQUE;if(l===Jf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Jf.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==si&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new G(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==si&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==si){let e=i.emissiveFactor;o.emissive=new Y().setRGB(e[0],e[1],e[2],Ve)}return i.emissiveTexture!==void 0&&a!==si&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,Be)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),Zf(n,i),t.associations.set(n,{materials:e}),i.extensions&&Xf(r,n,i),n})}createUniqueName(e){let t=kc.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[df.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return sp(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=ep(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[df.KHR_DRACO_MESH_COMPRESSION]?i(o):sp(new Ar,o,t),o.mode===Bf.TRIANGLE_STRIP?e=e.then(e=>af(e,1)):o.mode===Bf.TRIANGLE_FAN&&(e=e.then(e=>af(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Yf(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===Bf.TRIANGLES||u.mode===Bf.TRIANGLE_STRIP||u.mode===Bf.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new Ai(l,f):new X(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===Bf.LINES)d=new sa(l,f);else if(u.mode===Bf.LINE_STRIP)d=new ra(l,f);else if(u.mode===Bf.LINE_LOOP)d=new ca(l,f);else if(u.mode===Bf.POINTS)d=new ma(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&$f(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),Zf(d,i),u.extensions&&Xf(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&Xf(r,c[0],i),c[0];let l=new Dn;i.extensions&&Xf(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new ec(kt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new ac(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zf(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new J;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Fi(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new Ds(i,void 0,l);return Zf(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,ip)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new K().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new ji:t.length>1?new Dn:t.length===1?t[0]:new En,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),Zf(o,i),i.extensions&&Xf(n,o,i),i.matrix!==void 0){let e=new J;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new Dn;n.name&&(i.name=r.createUniqueName(n.name)),Zf(i,n),n.extensions&&Xf(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(of(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof zr||e instanceof qt)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Kf[i.path]===Kf.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Kf[i.path]){case Kf.weights:l=Ss;break;case Kf.rotation:l=ws;break;case Kf.translation:case Kf.scale:l=Es;break;default:switch(n.itemSize){case 1:l=Ss;break;default:l=Es}}let u=r.interpolation===void 0?z:qf[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Kf[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=np(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof ws?zf:Lf)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function op(e,t,n){let r=t.attributes,i=new Zn;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new K(t[0],t[1],t[2]),new K(a[0],a[1],a[2])),e.normalized){let t=np(Vf[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new K,t=new K;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=np(Vf[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new Sr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function sp(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=Gf[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Lt.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Lt.workingColorSpace}" not supported.`),Zf(e,t),op(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Qf(e,t.targets,n)})}var cp={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},lp=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},up=new ac(-1,1,1,-1,0,1),dp=new class extends Ar{constructor(){super(),this.setAttribute(`position`,new vr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new vr([0,2,0,0,2,0],2))}},fp=class{constructor(e){this._mesh=new X(dp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,up)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},pp=class extends lp{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Qo?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yo.clone(e.uniforms),this.material=new Qo({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new fp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},mp=class extends lp{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},hp=class extends lp{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},gp=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new G);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pp(cp),this.copyPass.material.blending=0,this.timer=new hc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}mp!==void 0&&(r instanceof mp?n=!0:r instanceof hp&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new G);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},_p=class extends lp{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Y}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},vp={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Y(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},yp=class e extends lp{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new G(256,256):new G(e.x,e.y),this.clearColor=new Y(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(i,a,{type:_,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Xt(i,a,{type:_,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Xt(i,a,{type:_,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=vp;this.highPassUniforms=Yo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qo({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new G(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Yo.clone(cp.uniforms),this.blendMaterial=new Qo({uniforms:this.copyUniforms,vertexShader:cp.vertexShader,fragmentShader:cp.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Y,this._oldClearAlpha=1,this._basic=new si,this._fsQuad=new fp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new G(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Qo({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new G(.5,.5)},direction:{value:new G(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Qo({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};yp.BlurDirectionX=new G(1,0),yp.BlurDirectionY=new G(0,1);var bp={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},xp=class extends lp{constructor(){super(),this.isOutputPass=!0,this.uniforms=Yo.clone(bp.uniforms),this.material=new $o({name:bp.name,uniforms:this.uniforms,vertexShader:bp.vertexShader,fragmentShader:bp.fragmentShader}),this._fsQuad=new fp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Lt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Sp(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Cp(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var wp={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},Tp={duration:.5,overwrite:!1,delay:0},Ep,Dp,Op,kp=1e8,Ap=1/kp,jp=Math.PI*2,Mp=jp/4,Np=0,Pp=Math.sqrt,Fp=Math.cos,Ip=Math.sin,Lp=function(e){return typeof e==`string`},Rp=function(e){return typeof e==`function`},zp=function(e){return typeof e==`number`},Bp=function(e){return e===void 0},Vp=function(e){return typeof e==`object`},Hp=function(e){return e!==!1},Up=function(){return typeof window<`u`},Wp=function(e){return Rp(e)||Lp(e)},Gp=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},Kp=Array.isArray,qp=/random\([^)]+\)/g,Jp=/,\s*/g,Yp=/(?:-?\.?\d|\.)+/gi,Xp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zp=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Qp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$p=/[+-]=-?[.\d]+/,em=/[^,'"\[\]\s]+/gi,tm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,nm,rm,im,am,om={},sm={},cm,lm=function(e){return(sm=Vm(e,om))&&o_},um=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},dm=function(e,t){return!t&&console.warn(e)},fm=function(e,t){return e&&(om[e]=t)&&sm&&(sm[e]=t)||om},pm=function(){return 0},mm={suppressEvents:!0,isStart:!0,kill:!1},hm={suppressEvents:!0,kill:!1},gm={suppressEvents:!0},_m={},vm=[],ym={},bm,xm={},Sm={},Cm=30,wm=[],Tm=``,Em=function(e){var t=e[0],n,r;if(Vp(t)||Rp(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=wm.length;r--&&!wm[r].targetTest(t););n=wm[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new gg(e[r],n)))||e.splice(r,1);return e},Dm=function(e){return e._gsap||Em(wh(e))[0]._gsap},Om=function(e,t,n){return(n=e[t])&&Rp(n)?e[t]():Bp(n)&&e.getAttribute&&e.getAttribute(t)||n},km=function(e,t){return(e=e.split(`,`)).forEach(t)||e},Am=function(e){return Math.round(e*1e5)/1e5||0},jm=function(e){return Math.round(e*1e7)/1e7||0},Mm=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},Nm=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Pm=function(){var e=vm.length,t=vm.slice(0),n,r;for(ym={},vm.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Fm=function(e){return!!(e._initted||e._startAt||e.add)},Im=function(e,t,n,r){vm.length&&!Dp&&Pm(),e.render(t,n,r||!!(Dp&&t<0&&Fm(e))),vm.length&&!Dp&&Pm()},Lm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(em).length<2?t:Lp(e)?e.trim():e},Rm=function(e){return e},zm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Bm=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Vm=function(e,t){for(var n in t)e[n]=t[n];return e},Hm=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=Vp(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},Um=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Wm=function(e){var t=e.parent||nm,n=e.keyframes?Bm(Kp(e.keyframes)):zm;if(Hp(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Gm=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Km=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},qm=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Jm=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ym=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Xm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zm=function(e,t,n,r){return e._startAt&&(Dp?e._startAt.revert(hm):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Qm=function e(t){return!t||t._ts&&e(t.parent)},$m=function(e){return e._repeat?eh(e._tTime,e=e.duration()+e._rDelay)*e:0},eh=function(e,t){var n=Math.floor(e=jm(e/t));return e&&n===e?n-1:n},th=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},nh=function(e){return e._end=jm(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ap)||0))},rh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=jm(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),nh(e),n._dirty||Ym(n,e)),e},ih=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=th(e.rawTime(),t),(!t._dur||vh(0,t.totalDuration(),n)-t._tTime>Ap)&&t.render(n,!0)),Ym(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ap}},ah=function(e,t,n,r){return t.parent&&Jm(t),t._start=jm((zp(n)?n:n||e!==nm?hh(e,n,t):e._time)+t._delay),t._end=jm(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Km(e,t,`_first`,`_last`,e._sort?`_start`:0),lh(t)||(e._recent=t),r||ih(e,t),e._ts<0&&rh(e,e._tTime),e},oh=function(e,t){return(om.ScrollTrigger||um(`scrollTrigger`,t))&&om.ScrollTrigger.create(t,e)},sh=function(e,t,n,r,i){if(Tg(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!Dp&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&bm!==ng.frame)return vm.push(e),e._lazy=[i,r],1},ch=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},lh=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},uh=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&ch(e)&&(e._initted||!lh(e))||(e._ts<0||e._dp._ts<0)&&!lh(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=vh(0,e._tDur,t),l=eh(s,o),e._yoyo&&l&1&&(a=1-a),l!==eh(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||Dp||r||e._zTime===Ap||!t&&e._zTime){if(!e._initted&&sh(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?Ap:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Zm(e,t,n,!0),e._onUpdate&&!n&&Vh(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&Vh(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Jm(e,1),!n&&!Dp&&(Vh(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},dh=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},fh=function(e,t,n,r){var i=e._repeat,a=jm(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:jm(a*(i+1)+e._rDelay*i):a,o>0&&!r&&rh(e,e._tTime=e._tDur*o),e.parent&&nh(e),n||Ym(e.parent,e),e},ph=function(e){return e instanceof vg?Ym(e):fh(e,e._dur)},mh={_start:0,endTime:pm,totalDuration:pm},hh=function e(t,n,r){var i=t.labels,a=t._recent||mh,o=t.duration()>=kp?a.endTime(!1):t._dur,s,c,l;return Lp(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(Kp(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},gh=function(e,t,n){var r=zp(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=Hp(s.vars.inherit)&&s.parent;a.immediateRender=Hp(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new Mg(t[0],a,t[i+1])},_h=function(e,t){return e||e===0?t(e):t},vh=function(e,t,n){return n<e?e:n>t?t:n},yh=function(e,t){return!Lp(e)||!(t=tm.exec(e))?``:t[1]},bh=function(e,t,n){return _h(n,function(n){return vh(e,t,n)})},xh=[].slice,Sh=function(e,t){return e&&Vp(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&Vp(e[0]))&&!e.nodeType&&e!==rm},Ch=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return Lp(e)&&!t||Sh(e,1)?(r=n).push.apply(r,wh(e)):n.push(e)})||n},wh=function(e,t,n){return Op&&!t&&Op.selector?Op.selector(e):Lp(e)&&!n&&(im||!rg())?xh.call((t||am).querySelectorAll(e),0):Kp(e)?Ch(e,n):Sh(e)?xh.call(e,0):e?[e]:[]},Th=function(e){return e=wh(e)[0]||dm(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return wh(t,n.querySelectorAll?n:n===e?dm(`Invalid scope`)||am.createElement(`div`):e)}},Eh=function(e){return e.sort(function(){return .5-Math.random()})},Dh=function(e){if(Rp(e))return e;var t=Vp(e)?e:{each:e},n=dg(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return Lp(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,kp])[1],!S){for(b=-kp;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===kp?0:s?f*u/S-.5:r/S|0,b=0,x=kp,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):Pp(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&Eh(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=yh(t.amount||t.each)||0,n=n&&f<0?ug(n):n}return f=(p[e]-p.min)/p.max||0,jm(p.b+(n?n(f):f)*p.v)+p.u}},Oh=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=jm(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(zp(n)?0:yh(n))}},kh=function(e,t){var n=Kp(e),r,i;return!n&&Vp(e)&&(r=n=e.radius||kp,e.values?(e=wh(e.values),(i=!zp(e[0]))&&(r*=r)):e=Oh(e.increment)),_h(t,n?Rp(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=kp,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||zp(t)?s:s+yh(t)}:Oh(e))},Ah=function(e,t,n,r){return _h(Kp(e)?!t:n===!0?!!(n=0):!r,function(){return Kp(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},jh=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},Mh=function(e,t){return function(n){return e(parseFloat(n))+(t||yh(n))}},Nh=function(e,t,n){return Rh(e,t,0,1,n)},Ph=function(e,t,n){return _h(n,function(n){return e[~~t(n)]})},Fh=function e(t,n,r){var i=n-t;return Kp(t)?Ph(t,e(0,t.length),n):_h(r,function(e){return(i+(e-t)%i)%i+t})},Ih=function e(t,n,r){var i=n-t,a=i*2;return Kp(t)?Ph(t,e(0,t.length-1),n):_h(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Lh=function(e){return e.replace(qp,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(Jp);return Ah(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Rh=function(e,t,n,r,i){var a=t-e,o=r-n;return _h(i,function(t){return n+((t-e)/a*o||0)})},zh=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=Lp(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(Kp(t)&&!Kp(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Vm(Kp(t)?[]:{},t));if(!u){for(c in n)bg.call(s,t,c,`get`,n[c]);a=function(e){return Vg(e,s)||(o?t.p:t)}}}return _h(r,a)},Bh=function(e,t,n){var r=e.labels,i=kp,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Vh=function(e,t,n){var r=e.vars,i=r[t],a=Op,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&vm.length&&Pm(),o&&(Op=o),l=s?i.apply(c,s):i.call(c),Op=a,l},Hh=function(e){return Jm(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dp),e.progress()<1&&Vh(e,`onInterrupt`),e},Uh,Wh=[],Gh=function(e){if(e){if(e=!e.name&&e.default||e,Up()||e.headless){var t=e.name,n=Rp(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:pm,render:Vg,add:bg,kill:Ug,modifier:Hg,rawVars:0},a={targetTest:0,get:0,getSetter:Lg,aliases:{},register:0};if(rg(),e!==r){if(xm[t])return;zm(r,zm(Um(e,i),a)),Vm(r.prototype,Vm(i,Um(e,a))),xm[r.prop=t]=r,e.targetTest&&(wm.push(r),_m[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}fm(t,r),e.register&&e.register(o_,r,Kg)}else Wh.push(e)}},Kh=255,qh={aqua:[0,Kh,Kh],lime:[0,Kh,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Kh],navy:[0,0,128],white:[Kh,Kh,Kh],olive:[128,128,0],yellow:[Kh,Kh,0],orange:[Kh,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Kh,0,0],pink:[Kh,192,203],cyan:[0,Kh,Kh],transparent:[Kh,Kh,Kh,0]},Jh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Kh+.5|0},Yh=function(e,t,n){var r=e?zp(e)?[e>>16,e>>8&Kh,e&Kh]:0:qh.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),qh[e])r=qh[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Kh,r&Kh,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Kh,e&Kh]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(Yp),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Jh(s+1/3,i,a),r[1]=Jh(s,i,a),r[2]=Jh(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Xp),n&&r.length<4&&(r[3]=1),r}else r=e.match(Yp)||qh.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Kh,a=r[1]/Kh,o=r[2]/Kh,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Xh=function(e){var t=[],n=[],r=-1;return e.split(Qh).forEach(function(e){var i=e.match(Zp)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Zh=function(e,t,n){var r=``,i=(e+r).match(Qh),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Yh(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Xh(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Qh,`1`).split(Zp),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Qh),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Qh=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in qh)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),$h=/hsl[a]?\(/,eg=function(e){var t=e.join(` `),n;if(Qh.lastIndex=0,Qh.test(t))return n=$h.test(t),e[1]=Zh(e[1],n),e[0]=Zh(e[0],n,Xh(e[1])),!0},tg,ng=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){cm&&(!im&&Up()&&(rm=im=window,am=rm.document||{},om.gsap=o_,(rm.gsapVersions||(rm.gsapVersions=[])).push(o_.version),lm(sm||rm.GreenSockGlobals||!rm.gsap&&rm||{}),Wh.forEach(Gh)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},tg=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),tg=0,l=pm},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),rg(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),rg=function(){return!tg&&ng.wake()},ig={},ag=/^[\d.\-M][\d.\-,\s]/,og=/["']/g,sg=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(og,``).trim():+c,r=s.substr(o+1).trim();return t},cg=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},lg=function(e){var t=(e+``).split(`(`),n=ig[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[sg(t[1])]:cg(e).split(`,`).map(Lm)):ig._CE&&ag.test(e)?ig._CE(``,e):n},ug=function(e){return function(t){return 1-e(1-t)}},dg=function(e,t){return e&&(Rp(e)?e:ig[e]||lg(e))||t},fg=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return km(e,function(e){for(var t in ig[e]=om[e]=i,ig[a=e.toLowerCase()]=n,i)ig[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=ig[e+`.`+t]=i[t]}),i},pg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mg=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/jp*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*Ip((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:pg(s);return a=jp/a,c.config=function(n,r){return e(t,n,r)},c},hg=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:pg(r);return i.config=function(n){return e(t,n)},i};km(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;fg(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),ig.Linear.easeNone=ig.none=ig.Linear.easeIn,fg(`Elastic`,mg(`in`),mg(`out`),mg()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};fg(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),fg(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),fg(`Circ`,function(e){return-(Pp(1-e*e)-1)}),fg(`Sine`,function(e){return e===1?1:-Fp(e*Mp)+1}),fg(`Back`,hg(`in`),hg(`out`),hg()),ig.SteppedEase=ig.steps=om.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-Ap;return function(e){return((r*vh(0,a,e)|0)+i)*n}}},Tp.ease=ig[`quad.out`],km(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return Tm+=e+`,`+e+`Params,`});var gg=function(e,t){this.id=Np++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Om,this.set=t?t.getSetter:Lg},_g=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,fh(this,+e.duration,1,1),this.data=e.data,Op&&(this._ctx=Op,Op.data.push(this)),tg||ng.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,fh(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(rg(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(rh(this,e),!n._dp||n.parent||ih(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&ah(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===Ap||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Im(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+$m(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+$m(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?eh(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-Ap?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?th(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-Ap?0:this._rts,this.totalTime(vh(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),nh(this),Xm(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(rg(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ap&&(this._tTime-=Ap)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=jm(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&ah(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(Hp(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?th(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=gm);var t=Dp;return Dp=e,Fm(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),Dp=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,ph(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,ph(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(hh(this,e),Hp(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,Hp(t)),this._dur||(this._zTime=-Ap),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-Ap:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ap,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-Ap)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=Rp(e)?e:Rm,a=function(){var e=t.then;t.then=null,n&&n(),Rp(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Hh(this)},e}();zm(_g.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ap,_prom:0,_ps:!1,_rts:1});var vg=function(e){Cp(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=Hp(t.sortChildren),nm&&ah(t.parent||nm,Sp(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&oh(Sp(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return gh(0,arguments,this),this},n.from=function(e,t,n){return gh(1,arguments,this),this},n.fromTo=function(e,t,n,r){return gh(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Wm(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new Mg(e,t,hh(this,n),1),this},n.call=function(e,t,n){return ah(this,Mg.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new Mg(e,n,hh(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Wm(n).immediateRender=Hp(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Wm(r).immediateRender=Hp(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:jm(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==nm&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=jm(o%f),o===i?(d=this._repeat,c=a):(_=jm(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=eh(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:jm(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Vh(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=dh(this,jm(r),jm(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(Vh(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-Ap);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||Dp&&Fm(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-Ap:Ap);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-Ap)._zTime=c>=r?1:-1,this._ts))return this._start=g,nh(this),this.render(e,t,n);this._onUpdate&&!t&&Vh(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g!==this._start&&Math.abs(h)===Math.abs(this._ts)||this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Jm(this,1),t||e<0&&!r||!o&&!r&&i||(Vh(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(zp(t)||(t=hh(this,t,e)),!(e instanceof _g)){if(Kp(e))return e.forEach(function(e){return n.add(e,t)}),this;if(Lp(e))return this.addLabel(e,t);if(Rp(e))e=Mg.delayedCall(0,e);else return this}return this===e?this:ah(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-kp);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof Mg?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return Lp(e)?this.removeLabel(e):Rp(e)?this.killTweensOf(e):(e.parent===this&&qm(this,e),e===this._recent&&(this._recent=this._last),Ym(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jm(ng.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=hh(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=Mg.delayedCall(0,t||pm,n);return r.data=`isPause`,this._hasPause=1,ah(this,r,hh(this,e))},n.removePause=function(e){var t=this._first;for(e=hh(this,e);t;)t._start===e&&t.data===`isPause`&&Jm(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)Cg!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=wh(e),i=this._first,a=zp(t),o;i;)i instanceof Mg?Nm(i._targets,r)&&(a?(!Cg||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=hh(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=Mg.to(n,zm({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||Ap,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&fh(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,zm({startAt:{time:hh(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Bh(this,hh(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Bh(this,hh(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Ap)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=jm(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Ym(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Ym(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=kp,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,ah(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=jm(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;fh(n,n===nm&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(nm._ts&&(Im(nm,th(e,nm)),bm=ng.frame),ng.frame>=Cm){Cm+=wp.autoSleep||120;var t=nm._first;if((!t||!t._ts)&&wp.autoSleep&&ng._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||ng.sleep()}}},t}(_g);zm(vg.prototype,{_lock:0,_hasPause:0,_forcing:0});var yg=function(e,t,n,r,i,a,o){var s=new Kg(this._pt,e,t,0,1,Bg,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Lh(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(Qp)||[];u=Qp.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?Mm(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=Qp.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,($p.test(r)||g)&&(s.e=0),this._pt=s,s},bg=function(e,t,n,r,i,a,o,s,c,l){Rp(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?Rp(u)?c?e[t.indexOf(`set`)||!Rp(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=Rp(u)?c?Fg:Pg:Ng,p;if(Lp(r)&&(~r.indexOf(`random(`)&&(r=Lh(r)),r.charAt(1)===`=`&&(p=Mm(d,r)+(yh(d)||0),(p||p===0)&&(r=p))),!l||d!==r||wg)return!isNaN(d*r)&&r!==``?(p=new Kg(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?zg:Rg,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&um(t,r),yg.call(this,e,t,d,r,f,s||wp.stringFilter,c))},xg=function(e,t,n,r,i){if(Rp(e)&&(e=kg(e,i,t,n,r)),!Vp(e)||e.style&&e.nodeType||Kp(e)||Gp(e))return Lp(e)?kg(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=kg(e[o],i,t,n,r);return a},Sg=function(e,t,n,r,i,a){var o,s,c,l;if(xm[e]&&(o=new xm[e]).init(i,o.rawVars?t[e]:xg(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Kg(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Uh))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},Cg,wg,Tg=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!Ep,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,N,P;if(!b||f&&a||(a=`none`),t._ease=dg(a,Tp.ease),t._rEase=x&&(dg(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?Dm(g[0]).harness:0,N=k&&i[k.prop],S=Um(i,_m),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?hm:mm),h._lazy=0),o){if(Jm(t._startAt=Mg.set(g,zm({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&Hp(c),startAt:null,delay:0,onUpdate:l&&function(){return Vh(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Dp||!s&&!p)&&t._startAt.revert(hm),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=zm({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&Hp(c),immediateRender:s,stagger:0,parent:_},S),N&&(w[k.prop]=N),Jm(t._startAt=Mg.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Dp?t._startAt.revert(hm):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,Ap,Ap);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&Hp(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||Em(g)[C]._gsap,t._ptLookup[C]=j={},ym[O.id]&&vm.length&&Pm(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,N||S,t,M,v)!==!1&&(t._pt=T=new Kg(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||N)for(w in S)xm[w]&&(A=Sg(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=bg.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(Cg=t,nm.killTweensOf(E,j,t.globalTime(n)),P=!t.parent,Cg=0),t._pt&&c&&(ym[O.id]=1)}D&&Gg(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!P,f&&n<=0&&b.render(kp,!0,!0)},Eg=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return wg=1,e.vars[t]=`+=0`,Tg(e,o),wg=0,s?dm(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=Am(n)+yh(u.e)),u.b&&(u.b=l.s+yh(u.b))},Dg=function(e,t){var n=e[0]?Dm(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Vm({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},Og=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(Kp(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},kg=function(e,t,n,r,i){return Rp(e)?e.call(t,n,r,i):Lp(e)&&~e.indexOf(`random(`)?Lh(e):e},Ag=Tm+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,jg={};km(Ag+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return jg[e]=1});var Mg=function(e){Cp(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Wm(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||nm,g=(Kp(t)||Gp(t)?zp(t[0]):`length`in n)?[t]:wh(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?Em(g):dm(`GSAP target `+t+` not found. https://gsap.com`,!wp.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||Wp(s)||Wp(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new vg({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=Sp(a),_._start=0,u||Wp(s)||Wp(c)){if(b=g.length,C=u&&Dh(u),Vp(u))for(x in u)~Ag.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=Um(n,jg),y.stagger=0,T&&(y.easeReverse=T),w&&Vm(y,w),S=g[v],y.duration=+kg(s,Sp(a),v,S,g),y.delay=(+kg(c,Sp(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=ig.none;_.duration()?s=c=0:a.timeline=0}else if(f){Wm(zm(_.vars.defaults,{ease:`none`})),_._ease=dg(f.ease||n.ease||`none`);var E=0,D,O,k;if(Kp(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||Og(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!Ep&&(Cg=Sp(a),nm.killTweensOf(g),Cg=0),ah(h,Sp(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===jm(h._time)&&Hp(l)&&Qm(Sp(a))&&h.data!==`nested`)&&(a._tTime=-Ap,a.render(Math.max(0,-c)||0)),m&&oh(Sp(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-Ap&&!o?i:e<Ap?0:e,c,l,u,d,f,p,m,h;if(!a)uh(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=jm(s%d),s===i?(u=this._repeat,c=a):(f=jm(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=eh(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(jm(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(sh(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(Vh(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Zm(this,e,t,n),Vh(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&Vh(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&Zm(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Jm(this,1),!t&&(!o||r)&&(s||r||p)&&(Vh(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){tg||ng.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||Tg(this,a),o=this._ease(a/this._dur),Eg(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(rh(this,0),this.parent||Km(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Hh(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Dp),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,Cg&&Cg.vars.overwrite!==!0)._first||Hh(this),this.parent&&n!==this.timeline.totalDuration()&&fh(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?wh(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Gm(r,i))return t===`all`&&(this._pt=0),Hh(this);for(s=this._op=this._op||[],t!==`all`&&(Lp(t)&&(d={},km(t,function(e){return d[e]=1}),t=d),t=Dg(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&(`kill`in f.d&&f.d.kill(d)!==!0||qm(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Hh(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return gh(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return gh(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return nm.killTweensOf(e,t,n)},t}(_g);zm(Mg.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),km(`staggerTo,staggerFrom,staggerFromTo`,function(e){Mg[e]=function(){var t=new vg,n=xh.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var Ng=function(e,t,n){return e[t]=n},Pg=function(e,t,n){return e[t](n)},Fg=function(e,t,n,r){return e[t](r.fp,n)},Ig=function(e,t,n){return e.setAttribute(t,n)},Lg=function(e,t){return Rp(e[t])?Pg:Bp(e[t])&&e.setAttribute?Ig:Ng},Rg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},zg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Bg=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Vg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Hg=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Ug=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?qm(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Wg=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Gg=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Kg=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Rg,this.d=o||this,this.set=s||Ng,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Wg,this.m=e,this.mt=n,this.tween=t},e}();km(Tm+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return _m[e]=1}),om.TweenMax=om.TweenLite=Mg,om.TimelineLite=om.TimelineMax=vg,nm=new vg({sortChildren:!1,defaults:Tp,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),wp.stringFilter=eg;var qg=[],Jg={},Yg=[],Xg=0,Zg=0,Qg=function(e){return(Jg[e]||Yg).map(function(e){return e()})},$g=function(){var e=Date.now(),t=[];e-Xg>2&&(Qg(`matchMediaInit`),qg.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=rm.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Qg(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Xg=e,Qg(`matchMedia`))},e_=function(){function e(e,t){this.selector=t&&Th(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Zg++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){Rp(e)&&(n=t,t=e,e=Rp);var r=this,i=function(){var e=Op,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=Th(n)),Op=r,a=t.apply(r,arguments),Rp(a)&&r._r.push(a),Op=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===Rp?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=Op;Op=null,e(this),Op=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof Mg&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof vg?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof Mg)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=qg.length;r--;)qg[r].id===this.id&&qg.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),t_=function(){function e(e){this.contexts=[],this.scope=e,Op&&Op.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){Vp(e)||(e={matches:e});var r=new e_(0,n||this.scope),i=r.conditions={},a,o,s;for(o in Op&&!r.selector&&(r.selector=Op.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=rm.matchMedia(e[o]),a&&(qg.indexOf(r)<0&&qg.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener($g):a.addEventListener(`change`,$g)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),n_={registerPlugin:function(){[...arguments].forEach(function(e){return Gh(e)})},timeline:function(e){return new vg(e)},getTweensOf:function(e,t){return nm.getTweensOf(e,t)},getProperty:function(e,t,n,r){Lp(e)&&(e=wh(e)[0]);var i=Dm(e||{}).get,a=n?Rm:Lm;return n===`native`&&(n=``),e&&(t?a((xm[t]&&xm[t].get||i)(e,t,n,r)):function(t,n,r){return a((xm[t]&&xm[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=wh(e),e.length>1){var r=e.map(function(e){return o_.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=xm[t],o=Dm(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Uh._pt=0,r.init(e,n?t+n:t,Uh,0,[e]),r.render(1,r),Uh._pt&&Vg(1,Uh)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=o_.to(e,zm((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return nm.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=dg(e.ease,Tp.ease)),Hm(Tp,e||{})},config:function(e){return Hm(wp,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!xm[e]&&!om[e]&&dm(t+` effect requires `+e+` plugin.`)}),Sm[t]=function(e,t,r){return n(wh(e),zm(t||{},i),r)},a&&(vg.prototype[t]=function(e,n,r){return this.add(Sm[t](e,Vp(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){ig[e]=dg(t)},parseEase:function(e,t){return arguments.length?dg(e,t):ig},getById:function(e){return nm.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vg(e),r,i;for(n.smoothChildTiming=Hp(e.smoothChildTiming),nm.remove(n),n._dp=0,n._time=n._tTime=nm._time,r=nm._first;r;)i=r._next,(t||!(!r._dur&&r instanceof Mg&&r.vars.onComplete===r._targets[0]))&&ah(n,r,r._start-r._delay),r=i;return ah(nm,n,0),n},context:function(e,t){return e?new e_(e,t):Op},matchMedia:function(e){return new t_(e)},matchMediaRefresh:function(){return qg.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||$g()},addEventListener:function(e,t){var n=Jg[e]||(Jg[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Jg[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Fh,wrapYoyo:Ih,distribute:Dh,random:Ah,snap:kh,normalize:Nh,getUnit:yh,clamp:bh,splitColor:Yh,toArray:wh,selector:Th,mapRange:Rh,pipe:jh,unitize:Mh,interpolate:zh,shuffle:Eh},install:lm,effects:Sm,ticker:ng,updateRoot:vg.updateRoot,plugins:xm,globalTimeline:nm,core:{PropTween:Kg,globals:fm,Tween:Mg,Timeline:vg,Animation:_g,getCache:Dm,_removeLinkedListItem:qm,reverting:function(){return Dp},context:function(e){return e&&Op&&(Op.data.push(e),e._ctx=Op),Op},suppressOverwrites:function(e){return Ep=e}}};km(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return n_[e]=Mg[e]}),ng.add(vg.updateRoot),Uh=n_.to({},{duration:0});var r_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},i_=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=r_(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},a_=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(Lp(n)&&(r={},km(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}i_(e,n)}}}},o_=n_.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Dp?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},a_(`roundProps`,Oh),a_(`modifiers`),a_(`snap`,kh))||n_;Mg.version=vg.version=o_.version=`3.15.0`,cm=1,Up()&&rg(),ig.Power0,ig.Power1,ig.Power2,ig.Power3,ig.Power4,ig.Linear,ig.Quad,ig.Cubic,ig.Quart,ig.Quint,ig.Strong,ig.Elastic,ig.Back,ig.SteppedEase,ig.Bounce,ig.Sine,ig.Expo,ig.Circ;var s_,c_,l_,u_,d_,f_,p_,m_=function(){return typeof window<`u`},h_={},g_=180/Math.PI,__=Math.PI/180,v_=Math.atan2,y_=1e8,b_=/([A-Z])/g,x_=/(left|right|width|margin|padding|x)/i,S_=/[\s,\(]\S/,C_={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},w_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},T_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},E_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},D_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},O_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},k_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},A_=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},j_=function(e,t,n){return e.style[t]=n},M_=function(e,t,n){return e.style.setProperty(t,n)},N_=function(e,t,n){return e._gsap[t]=n},P_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},F_=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},I_=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},L_=`transform`,R_=L_+`Origin`,z_=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in h_&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=C_[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=iv(i,e)}):this.tfm[t]=o.x?o[t]:iv(i,t),t===R_&&(this.tfm.zOrigin=o.zOrigin);else return C_.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(L_)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(R_,n,``)),t=L_}(a||n)&&this.props.push(t,n,a[t])},B_=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},V_=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(b_,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=p_(),i&&i.isStart||n[L_]||(B_(n),r.zOrigin&&n[R_]&&(n[R_]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},H_=function(e,t){var n={target:e,props:[],revert:V_,save:z_};return e._gsap||o_.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},U_,W_=function(e,t){var n=c_.createElementNS?c_.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):c_.createElement(e);return n&&n.style?n:c_.createElement(e)},G_=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(b_,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,q_(n)||n,1)||``},K_=`O,Moz,ms,Ms,Webkit`.split(`,`),q_=function(e,t,n){var r=(t||d_).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(K_[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?K_[i]:``)+e},J_=function(){m_()&&window.document&&(s_=window,c_=s_.document,l_=c_.documentElement,d_=W_(`div`)||{style:{}},W_(`div`),L_=q_(L_),R_=L_+`Origin`,d_.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,U_=!!q_(`perspective`),p_=o_.core.reverting,u_=1)},Y_=function(e){var t=e.ownerSVGElement,n=W_(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),l_.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),l_.removeChild(n),i},X_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Z_=function(e){var t,n;try{t=e.getBBox()}catch{t=Y_(e),n=1}return t&&(t.width||t.height)||n||(t=Y_(e)),t&&!t.width&&!t.x&&!t.y?{x:+X_(e,[`x`,`cx`,`x1`])||0,y:+X_(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Q_=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Z_(e))},$_=function(e,t){if(t){var n=e.style,r;t in h_&&t!==R_&&(t=L_),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(b_,`-$1`).toLowerCase())):n.removeAttribute(t)}},ev=function(e,t,n,r,i,a){var o=new Kg(e._pt,t,n,0,1,a?A_:k_);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},tv={deg:1,rad:1,turn:1},nv={grid:1,flex:1},rv=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=d_.style,c=x_.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||tv[i]||tv[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Q_(t),(p||o===`%`)&&(h_[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],Am(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==c_&&h.appendChild||(h=c_.body),g=h._gsap,g&&p&&g.width&&c&&g.time===ng.time&&!g.uncache)return Am(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:$_(t,n)}else(p||o===`%`)&&!nv[G_(h,`display`)]&&(s.position=G_(t,`position`)),h===t&&(s.position=`static`),h.appendChild(d_),m=d_[u],h.removeChild(d_),s.position=`absolute`;return c&&p&&(g=Dm(h),g.time=ng.time,g.width=h[u]),Am(f?m*a/d:m&&a?d/m*a:0)},iv=function(e,t,n,r){var i;return u_||J_(),t in C_&&t!==`transform`&&(t=C_[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),h_[t]&&t!==`transform`?(i=gv(e,r),i=t===`transformOrigin`?i.svg?i.origin:_v(G_(e,R_))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=lv[t]&&lv[t](e,t,n)||G_(e,t)||Om(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?rv(e,t,i,n)+n:i},av=function(e,t,n,r){if(!n||n===`none`){var i=q_(t,e,1),a=i&&G_(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=G_(e,`borderTopColor`))}var o=new Kg(this._pt,e.style,t,0,1,Bg),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=G_(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=G_(e,t)||r,m?e.style[t]=m:$_(e,t)),l=[n,r],eg(l),n=l[0],r=l[1],d=n.match(Zp)||[],b=r.match(Zp)||[],b.length){for(;u=Zp.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=Mm(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=Zp.lastIndex-v.length,v||(v=v||wp.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=rv(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?A_:k_;return $p.test(r)&&(o.e=0),this._pt=o,o},ov={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},sv=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=ov[n]||n,t[1]=ov[r]||r,t.join(` `)},cv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],h_[o]&&(s=1,o=o===`transformOrigin`?R_:L_),$_(n,o);s&&($_(n,L_),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,gv(n,1),a.uncache=1,B_(r)))}},lv={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Kg(e._pt,t,n,0,0,cv);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},uv=[1,0,0,1,0,0],dv={},fv=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},pv=function(e){var t=G_(e,L_);return fv(t)?uv:t.substr(7).match(Xp).map(Am)},mv=function(e,t){var n=e._gsap||Dm(e),r=e.style,i=pv(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?uv:i):(i===uv&&!e.offsetParent&&e!==l_&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,l_.appendChild(e)),i=pv(e),s?r.display=s:$_(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):l_.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},hv=function(e,t,n,r,i,a){var o=e._gsap,s=i||mv(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==uv&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Z_(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[R_]=`0px 0px`,a&&(ev(a,o,`xOrigin`,c,y),ev(a,o,`yOrigin`,l,b),ev(a,o,`xOffset`,u,o.xOffset),ev(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},gv=function(e,t){var n=e._gsap||new gg(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=G_(e,R_)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,ee,te,ne,re;return n.svg=!!(e.getCTM&&Q_(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[L_]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[L_]===`none`?``:s[L_])),r.scale=r.rotate=r.translate=`none`),S=mv(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),hv(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==uv&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?v_(D,E)*g_:0,_=O||k?v_(O,k)*g_+m:0,_&&(p*=Math.abs(Math.cos(_*__))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(re=S[6],te=S[7],F=S[8],I=S[9],ee=S[10],ne=S[11],l=S[12],u=S[13],d=S[14],C=v_(re,ee),h=C*g_,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+F*T,N=j*w+I*T,P=re*w+ee*T,F=A*-T+F*w,I=j*-T+I*w,ee=re*-T+ee*w,ne=te*-T+ne*w,A=M,j=N,re=P),C=v_(-O,ee),g=C*g_,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-F*T,N=D*w-I*T,P=O*w-ee*T,ne=k*T+ne*w,E=M,D=N,O=P),C=v_(D,E),m=C*g_,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=Am(Math.sqrt(E*E+D*D+O*O)),p=Am(Math.sqrt(j*j+re*re)),C=v_(A,j),_=Math.abs(C)>2e-4?C*g_:0,y=ne?1/(ne<0?-ne:ne):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!fv(G_(e,L_)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Am(f),n.scaleY=Am(p),n.rotation=Am(m)+o,n.rotationX=Am(h)+o,n.rotationY=Am(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[R_]=_v(c)),n.xOffset=n.yOffset=0,n.force3D=wp.force3D,n.renderTransform=n.svg?wv:U_?Cv:yv,n.uncache=0,n},_v=function(e){return(e=e.split(` `))[0]+` `+e[1]},vv=function(e,t,n){var r=yh(t);return Am(parseFloat(t)+parseFloat(rv(e,`x`,n+`px`,r)))+r},yv=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,Cv(e,t)},bv=`0deg`,xv=`0px`,Sv=`) `,Cv=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==bv||l!==bv)){var x=parseFloat(l)*__,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*__,w=Math.cos(x),a=vv(_,a,S*w*-v),o=vv(_,o,-Math.sin(x)*-v),s=vv(_,s,C*w*-v+v)}h!==xv&&(y+=`perspective(`+h+Sv),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==xv||o!==xv||s!==xv)&&(y+=s!==xv||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+Sv),c!==bv&&(y+=`rotate(`+c+Sv),l!==bv&&(y+=`rotateY(`+l+Sv),u!==bv&&(y+=`rotateX(`+u+Sv),(d!==bv||f!==bv)&&(y+=`skew(`+d+`, `+f+Sv),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+Sv),_.style[L_]=y||`translate(0, 0)`},wv=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=__,c*=__,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=__,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=Am(b),x=Am(x),S=Am(S),C=Am(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=rv(f,`x`,a,`px`),y=rv(f,`y`,o,`px`)),(p||m||h||g)&&(v=Am(v+p-(p*b+m*S)+h),y=Am(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=Am(v+r/100*w.width),y=Am(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[L_]=w)},Tv=function(e,t,n,r,i){var a=360,o=Lp(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?g_:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*y_)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*y_)%a-~~(s/a)*a)),e._pt=u=new Kg(e._pt,t,n,r,s,T_),u.e=c,u.u=`deg`,e._props.push(n),u},Ev=function(e,t){for(var n in t)e[n]=t[n];return e},Dv=function(e,t,n){var r=Ev({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[L_]=t,o=gv(n,1),$_(n,L_),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[L_],a[L_]=t,o=gv(n,1),a[L_]=c),h_)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=yh(c),p=yh(l),u=f===p?parseFloat(c):rv(n,s,c,p),d=parseFloat(l),e._pt=new Kg(e._pt,o,s,u,d-u,w_),e._pt.u=p||0,e._props.push(s));Ev(o,r)};km(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});lv[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return iv(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var Ov={name:`css`,register:J_,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in u_||J_(),this.styles=this.styles||H_(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(xm[m]&&Sg(m,t,n,r,e,i)))){if(f=typeof l,p=lv[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Lh(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Qh.lastIndex=0,Qh.test(c)||(h=yh(c),g=yh(l),g?h!==g&&(c=rv(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],Lp(c)&&~c.indexOf(`random(`)&&(c=Lh(c)),yh(c+``)||c===`auto`||(c+=wp.units[m]||yh(iv(e,m))||``),(c+``).charAt(1)===`=`&&(c=iv(e,m))):c=iv(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in C_&&(m===`autoAlpha`&&(d===1&&iv(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),ev(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=C_[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in h_,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=G_(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=G_(e,`perspective`),T?e.style.perspective=T:$_(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||gv(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Kg(this._pt,o,L_,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new Kg(this._pt,b,`scaleY`,b.scaleY,(_?Mm(b.scaleY,_+u):u)-b.scaleY||0,w_),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(R_,0,o[R_]),l=sv(l),b.svg?hv(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&ev(this,b,`zOrigin`,b.zOrigin,g),ev(this,o,m,_v(c),_v(l)));continue}else if(m===`svgOrigin`){hv(e,l,1,x,0,this);continue}else if(m in dv){Tv(this,b,m,d,_?Mm(d,_+l):l);continue}else if(m===`smoothOrigin`){ev(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){Dv(this,l,e);continue}}else m in o||(m=q_(m)||m);if(v||(u||u===0)&&(d||d===0)&&!S_.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=yh(l)||(m in wp.units?wp.units[m]:h),h!==g&&(d=rv(e,m,c,g)),this._pt=new Kg(this._pt,v?b:o,m,d,(_?Mm(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?O_:w_),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=D_):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=E_);else if(m in o)av.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){um(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&Gg(this)},render:function(e,t){if(t.tween._time||!p_())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:iv,aliases:C_,getSetter:function(e,t,n){var r=C_[t];return r&&r.indexOf(`,`)<0&&(t=r),t in h_&&t!==R_&&(e._gsap.x||iv(e,`x`))?n&&f_===n?t===`scale`?P_:N_:(f_=n||{})&&(t===`scale`?F_:I_):e.style&&!Bp(e.style[t])?j_:~t.indexOf(`-`)?M_:Lg(e,t)},core:{_removeProperty:$_,_getMatrix:mv}};o_.utils.checkPrefix=q_,o_.core.getStyleSaver=H_,(function(e,t,n,r){var i=km(e+`,`+t+`,`+n,function(e){h_[e]=1});km(t,function(e){wp.units[e]=`deg`,dv[e]=1}),C_[i[13]]=e+`,`+t,km(r,function(e){var t=e.split(`:`);C_[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),km(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){wp.units[e]=`px`}),o_.registerPlugin(Ov);var kv=o_.registerPlugin(Ov)||o_;kv.core.Tween;var Av={fromName:`Venky`,toName:`Your Love`,title:`Our Museum`,passcode:`1234`,hint:`Hint: the day I proposed (DDMM)`,placard:{heading:`A PERMANENT COLLECTION`,to:`For Your Love`,body:[`Every frame on these walls is a moment I never want to forget.`,`Walk slowly. Every one of them is ours.`],signoff:`Love, Venky`},photos:[{src:`photos/car1.webp`,caption:`Ferrari Roma — PLACEHOLDER`},{src:`photos/car2.webp`,caption:`Aston Martin DBS — PLACEHOLDER`},{src:`photos/car3.webp`,caption:`Lotus Elise — PLACEHOLDER`},{src:`photos/car4.webp`,caption:`Mercedes-AMG GT R — PLACEHOLDER`},{src:`photos/car5.webp`,caption:`Porsche 914 — PLACEHOLDER`},{src:`photos/car6.webp`,caption:`McLaren MP4-12C — PLACEHOLDER`},{src:`photos/car7.webp`,caption:`Mazda Roadster — PLACEHOLDER`},{src:`photos/car8.webp`,caption:`Silver Ferrari — PLACEHOLDER`}],bubbles:[`our whole story is on those walls`,`remember this one? 🥹`,`I love you ❤️`,`Dance with me`],music:null},Q=e=>document.getElementById(e),jv=`./`,Mv=matchMedia(`(prefers-reduced-motion: reduce)`).matches,Nv=matchMedia(`(pointer: coarse)`).matches||`ontouchstart`in window,Pv=Mv?.25:1,Fv=new URLSearchParams(location.search),Iv=(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=3||Fv.has(`low`),Lv={tier:+!Iv,dprCap:1.5,bloom:!Iv&&!Fv.has(`nobloom`),petals:Iv?50:140};Mv&&(Lv.petals=30),document.title=`${Av.title} — ${Av.fromName} & ${Av.toName}`,Q(`title`).textContent=Av.title,Q(`fromto`).textContent=`From ${Av.fromName} To ${Av.toName}`;var Rv=Q(`c`),zv;try{zv=new rf({canvas:Rv,antialias:!Iv,powerPreference:`high-performance`,alpha:!1})}catch(e){throw Q(`glerr`).classList.remove(`hidden`),Q(`glerr`).querySelector(`p`).textContent=`This browser could not start 3D graphics. Try Chrome or Safari.`,e}var Bv=Math.min(window.devicePixelRatio||1,Lv.dprCap);zv.setPixelRatio(Bv),zv.setSize(innerWidth,innerHeight,!1),zv.outputColorSpace=Be,zv.toneMapping=4,zv.toneMappingExposure=1.05;var Vv=!0;Rv.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),Vv=!1,Q(`glerr`).classList.remove(`hidden`)},!1),Rv.addEventListener(`webglcontextrestored`,()=>location.reload(),!1);var Hv=new In;Hv.background=new Y(460557),Hv.fog=new Fn(460557,18,42);var Uv=new ec(Nv?62:55,innerWidth/innerHeight,.1,80),Wv=new gp(zv);Wv.addPass(new _p(Hv,Uv));var Gv=new yp(new G(innerWidth/2,innerHeight/2),.55,.6,.82);Wv.addPass(Gv),Wv.addPass(new xp);function Kv(){(Q(`lock`).classList.contains(`hidden`)||!Nv)&&(Uv.aspect=innerWidth/innerHeight,Uv.fov=(Nv?62:55)+(Uv.aspect<.7?10:0),Uv.updateProjectionMatrix(),zv.setSize(innerWidth,innerHeight,!1),Wv.setPixelRatio(Bv),Wv.setSize(innerWidth,innerHeight),Gv.setSize(innerWidth/2,innerHeight/2))}addEventListener(`resize`,Kv);function qv(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`),e,t);let i=new _a(r);return i.colorSpace=Be,i.anisotropy=4,i}var Jv=qv(128,128,(e,t,n)=>{let r=e.createRadialGradient(t/2,n/2,0,t/2,n/2,t/2);r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=r,e.fillRect(0,0,t,n)}),Yv=new Hs(16774374,3158074,.55);Hv.add(Yv);var Xv=new sc(10466559,.6);Xv.position.set(-6,12,10),Hv.add(Xv);var Zv=new ic(16761466,18,12,1.6);Zv.position.set(-3.2,4.2,1.6),Hv.add(Zv);var Qv=Zv.clone();Qv.position.x=3.2,Hv.add(Qv);var $v=[];for(let e of[-6,-16,-26]){let t=new ic(16773596,0,16,1.2);t.position.set(0,4.4,e),Hv.add(t),$v.push(t)}var ey=new ns({color:15328474}),ty=new X(new Vo(40,30),new ns({map:qv(512,512,(e,t,n)=>{e.fillStyle=`#2a2a30`,e.fillRect(0,0,t,n),e.strokeStyle=`rgba(0,0,0,.35)`,e.lineWidth=3;for(let r=0;r<=8;r++)e.beginPath(),e.moveTo(r*t/8,0),e.lineTo(r*t/8,n),e.stroke(),e.beginPath(),e.moveTo(0,r*n/8),e.lineTo(t,r*n/8),e.stroke()})}));ty.material.map.wrapS=ty.material.map.wrapT=t,ty.material.map.repeat.set(6,4.5),ty.rotation.x=-Math.PI/2,ty.position.set(0,-.001,15),Hv.add(ty);var ny=new X(new Vo(2.4,12),new ns({color:6951974}));ny.rotation.x=-Math.PI/2,ny.position.set(0,.005,6.2),Hv.add(ny);var ry=new Dn;Hv.add(ry);function iy(e,t,n,r,i,a,o){let s=new X(new xa(e,t,n),r);return s.position.set(i,a,o),ry.add(s),s}iy(9.4,8,.6,ey,-6.3,4,-.3),iy(9.4,8,.6,ey,6.3,4,-.3),iy(3.2,3.4,.6,ey,0,6.3,-.3),iy(22,.5,2.2,ey,0,.25,.8),iy(20,.25,1.4,ey,0,.62,.4);for(let e of[-5.6,-3,3,5.6]){let t=new X(new Sa(.32,.36,6.6,16),ey);t.position.set(e,3.9,.55),ry.add(t)}iy(14,.7,1.4,ey,0,7.5,.35);var ay=new X(new Sa(7.6,7.6,1.2,3,1),ey);ay.rotation.set(Math.PI/2,0,Math.PI/2),ay.scale.set(1,1,.28),ay.position.set(0,8.6,.35),ry.add(ay);var oy=qv(1024,128,(e,t,n)=>{e.fillStyle=`#e9e4da`,e.fillRect(0,0,t,n),e.fillStyle=`#5b4a2e`,e.textAlign=`center`,e.textBaseline=`middle`,e.font=`64px Georgia, serif`,e.fillText(Av.title.toUpperCase().split(``).join(` `),t/2,n/2+4)}),sy=new X(new Vo(10,1.25),new ns({map:oy}));sy.position.set(0,7.5,1.06),ry.add(sy);for(let e of[-3.2,3.2]){let t=new X(new Uo(.18,12,8),new si({color:16767392}));t.position.set(e,4.2,1.15),ry.add(t);let n=new ei(new Br({map:Jv,color:16758880,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));n.scale.set(2.2,2.2,1),n.position.copy(t.position),ry.add(n)}var cy=1.6,ly=4.6,uy=new ns({map:qv(256,512,(e,t,n)=>{let r=e.createLinearGradient(0,0,t,0);r.addColorStop(0,`#2b1710`),r.addColorStop(.5,`#3d2216`),r.addColorStop(1,`#2b1710`),e.fillStyle=r,e.fillRect(0,0,t,n),e.strokeStyle=`#c9993f`,e.lineWidth=6,e.strokeRect(22,22,t-44,n*.42),e.strokeRect(22,n*.5,t-44,n*.46),e.lineWidth=2,e.strokeRect(34,34,t-68,n*.42-24),e.strokeRect(34,n*.5+12,t-68,n*.46-24)})});function dy(e){let t=new Dn;t.position.set(e*cy,0,-.05);let n=new X(new xa(cy,ly,.14),uy);n.position.set(-e*cy/2,ly/2,0),n.userData.type=`door`,t.add(n);let r=new X(new Uo(.07,10,8),new si({color:15123066}));return r.position.set(-e*1.35,2.1,.1),t.add(r),Hv.add(t),t}var fy=dy(-1),py=dy(1),my=new si({color:13211967});iy(.18,4.699999999999999,.3,my,-1.6-.09,ly/2,.02),iy(.18,4.699999999999999,.3,my,1.6900000000000002,ly/2,.02),iy(3.56,.18,.3,my,0,4.6499999999999995,.02);var hy=new $a;hy.moveTo(0,-.35),hy.bezierCurveTo(-.05,-.28,-.42,-.05,-.42,.14),hy.bezierCurveTo(-.42,.36,-.12,.42,0,.22),hy.bezierCurveTo(.12,.42,.42,.36,.42,.14),hy.bezierCurveTo(.42,-.05,.05,-.28,0,-.35);var gy=new si({color:15120486}),_y=new X(new Ro(hy,{depth:.08,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2}),gy);_y.position.set(0,2.3,.1),_y.userData.type=`door`,Hv.add(_y);var vy=new ei(new Br({map:Jv,color:16760944,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));vy.scale.set(1.6,1.6,1),vy.position.set(0,2.3,.2),Hv.add(vy);var yy=new X(new Vo(3.2,9),new si({map:qv(64,256,(e,t,n)=>{let r=e.createLinearGradient(0,0,0,n);r.addColorStop(0,`rgba(255,225,170,0.9)`),r.addColorStop(1,`rgba(255,225,170,0)`),e.fillStyle=r,e.fillRect(0,0,t,n)}),transparent:!0,opacity:0,depthWrite:!1,blending:2}));yy.rotation.x=-Math.PI/2,yy.position.set(0,.02,4.4),Hv.add(yy);var by=new X(new Vo(3.2,4.6),new si({color:16773328,transparent:!0,opacity:0,depthWrite:!1,blending:2}));by.position.set(0,2.3,-.3),Hv.add(by);var xy=10,Sy=32,Cy=5,wy=new ns({map:qv(8,256,(e,t,n)=>{let r=e.createLinearGradient(0,0,0,n);r.addColorStop(0,`#d8d4cd`),r.addColorStop(.25,`#f6f4f0`),r.addColorStop(.85,`#efece6`),r.addColorStop(1,`#bdb8b0`),e.fillStyle=r,e.fillRect(0,0,t,n)}),color:16777215}),Ty=qv(256,8,(e,t,n)=>{let r=e.createLinearGradient(0,0,t,0);r.addColorStop(0,`#b9b5ae`),r.addColorStop(.12,`#efede9`),r.addColorStop(.88,`#efede9`),r.addColorStop(1,`#b9b5ae`),e.fillStyle=r,e.fillRect(0,0,t,n)}),Ey=new Dn;Hv.add(Ey);var Dy=new X(new Vo(xy,Sy),new ns({map:Ty}));Dy.rotation.x=-Math.PI/2,Dy.position.set(0,.001,-16),Ey.add(Dy);var Oy=new X(new Vo(xy,Sy),new si({color:723725}));Oy.rotation.x=Math.PI/2,Oy.position.set(0,Cy,-16),Ey.add(Oy);for(let e of[-1,1]){let t=new X(new Vo(Sy,Cy),wy);t.rotation.y=-e*Math.PI/2,t.position.set(e*xy/2,Cy/2,-16),Ey.add(t)}var ky=new X(new Vo(xy,Cy),wy);ky.position.set(0,Cy/2,-32),Ey.add(ky);var Ay=new X(new Vo(xy,Cy),wy);Ay.rotation.y=Math.PI,Ay.position.set(0,Cy/2,-.62);for(let e of[-1,1]){let t=new X(new Vo(6.8/2,Cy),wy);t.rotation.y=Math.PI,t.position.set(e*3.3,Cy/2,-.62),Ey.add(t)}var jy=new Wi(new Sa(.07,.1,.28,8),new si({color:16777215}),22),My=new J,Ny=0;for(let e=-2;e>-32;e-=3)for(let t of[-3.2,3.2])Ny<22&&(My.makeRotationZ(t>0?-.5:.5),My.setPosition(t,4.8,e),jy.setMatrixAt(Ny++,My));jy.count=Ny,Ey.add(jy);for(let e of[-3.2,3.2]){let t=new X(new xa(.06,.06,31),new si({color:2236962}));t.position.set(e,4.95,-16),Ey.add(t)}var Py=[],Fy=new Ms,Iy=new Bs(Fy),Ly=new ns({color:1446930}),Ry=new ns({color:16315887});function zy(e,t){return qv(512,384,(n,r,i)=>{let a=[340,20,280,200,320,10,260,180],o=n.createLinearGradient(0,0,r,i);o.addColorStop(0,`hsl(${a[e%8]},60%,72%)`),o.addColorStop(1,`hsl(${a[e%8]+40},55%,45%)`),n.fillStyle=o,n.fillRect(0,0,r,i);for(let t=0;t<6;t++)n.fillStyle=`rgba(255,255,255,${.08+t*.02})`,n.beginPath(),n.arc((t*97+e*53)%r,(t*61+e*31)%i,40+t*18,0,7),n.fill();n.fillStyle=`rgba(255,255,255,.92)`,n.textAlign=`center`,n.font=`italic 34px Georgia, serif`,n.fillText(`Your photo here`,r/2,i/2),n.font=`18px Georgia, serif`,n.fillText(t,r/2,i/2+34)})}var By=new si({map:Jv,color:16770752,transparent:!0,opacity:.35,depthWrite:!1,blending:2}),Vy=2,Hy=1.5;Av.photos.slice(0,10).forEach((e,t)=>{let n=t%2==0?-1:1,r=-4-Math.floor(t/2)*6,i=new Dn;i.position.set(n*(xy/2-.04),2.2,r),i.rotation.y=n*-Math.PI/2,Ey.add(i);let a=new X(new xa(2.2800000000000002,1.78,.06),Ly);i.add(a);let o=new X(new Vo(2.12,1.62),Ry);o.position.z=.032,i.add(o);let s=new si({map:zy(t,e.caption.replace(/ — PLACEHOLDER/,``)),toneMapped:!1}),c=new X(new Vo(Vy,Hy),s);c.position.z=.035,i.add(c),c.userData={type:`photo`,i:t},a.userData={type:`photo`,i:t};let l=new X(new Vo(4,4),By);l.position.set(0,.5,.01),i.add(l),e.src&&Iy.load(jv+e.src,e=>{e.colorSpace=Be,e.anisotropy=4;let t=e.image.width/e.image.height,n=Vy/Hy;t>n?(e.repeat.set(n/t,1),e.offset.set((1-n/t)/2,0)):(e.repeat.set(1,t/n),e.offset.set(0,(1-t/n)/2)),s.map.dispose(),s.map=e,s.color.setScalar(.92),s.needsUpdate=!0},void 0,()=>{}),Py.push({group:i,pos:new K(n*(xy/2-1.6),0,r),i:t})});var Uy=qv(512,640,(e,t,n)=>{e.fillStyle=`#111`,e.fillRect(0,0,t,n),e.strokeStyle=`#c9993f`,e.lineWidth=4,e.strokeRect(18,18,t-36,n-36),e.fillStyle=`#e6c27a`,e.textAlign=`center`,e.font=`22px Georgia, serif`,e.fillText(Av.placard.heading.split(``).join(` `),t/2,110),e.fillStyle=`#fff`,e.font=`italic 54px Georgia, serif`,e.fillText(Av.placard.to,t/2,220),e.font=`24px Georgia, serif`,e.fillStyle=`#ccc`,e.fillText(`tap to read`,t/2,540),e.fillStyle=`#e6c27a`,e.font=`italic 30px Georgia, serif`,e.fillText(Av.placard.signoff,t/2,420)}),Wy=new X(new Vo(1.6,2),new si({map:Uy,toneMapped:!1}));Wy.position.set(0,2.3,-31.97),Wy.userData.type=`placard`,Ey.add(Wy);var Gy=new X(new Vo(5,5),By);Gy.position.set(0,2.8,-31.98),Ey.add(Gy);var Ky=new Dn;Ky.position.set(0,0,-25),Ey.add(Ky);var qy=new ns({color:2761760}),Jy=new X(new xa(2.4,.12,.7),new ns({color:9071178}));Jy.position.y=.48,Ky.add(Jy),Jy.userData.type=`bench`;for(let e of[-1,1]){let t=new X(new xa(.1,.46,.6),qy);t.position.set(e,.23,0),Ky.add(t)}var Yy=new si({map:Jv,color:0,transparent:!0,opacity:.35,depthWrite:!1}),Xy=new X(new Vo(3.2,1.4),Yy);Xy.rotation.x=-Math.PI/2,Xy.position.y=.004,Ky.add(Xy),Ey.visible=!0;var Zy=[];Hv.traverse(e=>{e.userData&&e.userData.type&&Zy.push(e)});var Qy=qv(64,64,e=>{e.fillStyle=`#fff`,e.beginPath(),e.moveTo(32,58),e.bezierCurveTo(4,40,4,12,20,8),e.bezierCurveTo(28,6,32,14,32,18),e.bezierCurveTo(32,14,36,6,44,8),e.bezierCurveTo(60,12,60,40,32,58),e.fill()}),$y=160,eb=new Wi(new Vo(.16,.16),new si({map:Qy,transparent:!0,depthWrite:!1,side:2,alphaTest:.05}),$y);eb.frustumCulled=!1,Hv.add(eb);var tb=[],nb=new Y;for(let e=0;e<$y;e++)tb.push({x:(Math.random()-.5)*12,y:Math.random()*5,z:(Math.random()-.5)*12,s:.25+Math.random()*.5,r:Math.random()*6,rs:(Math.random()-.5)*2,ph:Math.random()*6}),eb.setColorAt(e,nb.setHSL(.95+Math.random()*.06,.75,.62+Math.random()*.15));eb.count=Lv.petals;var rb=0;Fy.onProgress=(e,t,n)=>ib(t/n),Fy.onLoad=()=>ib(1);function ib(e){let t=Math.round(e*100);Q(`loadfill`).style.width=t+`%`,Q(`loadtxt`).textContent=t>=100?`Ready 100%`:`Loading ${t}%`,t>=100&&(Q(`startBtn`).disabled=!1)}var ab=class{constructor(e,t){this.root=t?of(e.scene):e.scene;let n=new Zn().setFromObject(this.root),r=1.55/(n.max.y-n.min.y);this.root.scale.multiplyScalar(r),this.root.traverse(e=>{e.isMesh&&(e.frustumCulled=!1,t&&(e.material=e.material.clone(),e.material.color.lerp(new Y(t),.6)))}),this.mixer=new Mc(this.root),this.actions={};for(let t of e.animations){let e=this.mixer.clipAction(t);this.actions[t.name]=e}for(let e of[`Sitting`,`Wave`,`Yes`,`ThumbsUp`])this.actions[e]&&(this.actions[e].setLoop(R),this.actions[e].clampWhenFinished=!0);this.cur=null,this.play(`Idle`);let i=new X(new Vo(1,1),Yy);i.rotation.x=-Math.PI/2,i.position.y=.006,this.shadow=i,Hv.add(i),Hv.add(this.root),this.yaw=0,this.mode=`free`}play(e,t=.3){let n=this.actions[e];n&&this.cur!==n&&(n.reset().setEffectiveWeight(1).fadeIn(t).play(),this.cur&&this.cur.fadeOut(t),this.cur=n)}face(e,t,n=10){let r=e-this.yaw;r=Math.atan2(Math.sin(r),Math.cos(r)),this.yaw+=r*Math.min(1,t*n),this.root.rotation.y=this.yaw}update(e){this.mixer.update(e),this.shadow.position.x=this.root.position.x,this.shadow.position.z=this.root.position.z}},$,ob;new cf(Fy).load(`./models/RobotExpressive.glb`,e=>{$=new ab(e,null),ob=new ab(e,16748464),$.root.position.set(0,0,9),ob.root.position.set(1.3,0,9.6),$.yaw=ob.yaw=Math.PI,$.root.rotation.y=ob.root.rotation.y=Math.PI});var sb=`start`,cb=!1,lb=0,ub=.22,db=Nv?5.2:4.6,fb={},pb={x:0,y:0,id:null},mb=new K,hb=new K,gb=null,_b=!1,vb=new K(0,3,14),yb=new K(0,2,0);addEventListener(`keydown`,e=>{document.activeElement!==Q(`code`)&&(fb[e.code]=!0)}),addEventListener(`keyup`,e=>{fb[e.code]=!1});var bb=Q(`joy`),xb=Q(`joyKnob`);bb.addEventListener(`pointerdown`,e=>{pb.id=e.pointerId,bb.classList.add(`active`),bb.setPointerCapture(e.pointerId),Cb(e),e.preventDefault()}),bb.addEventListener(`pointermove`,e=>{e.pointerId===pb.id&&Cb(e)});var Sb=e=>{e.pointerId===pb.id&&(pb.id=null,pb.x=pb.y=0,bb.classList.remove(`active`),kv.to(xb,{x:0,y:0,duration:.18,ease:`power2.out`}))};bb.addEventListener(`pointerup`,Sb),bb.addEventListener(`pointercancel`,Sb),bb.addEventListener(`lostpointercapture`,Sb),bb.addEventListener(`contextmenu`,e=>e.preventDefault());function Cb(e){let t=bb.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.max(1,t.width/2-14),a=Math.hypot(n,r);a>i&&(n*=i/a,r*=i/a);let o=Math.min(1,Math.hypot(n,r)/i),s=.08,c=o<=s?0:(o-s)/.92,l=a>0?n/a:0,u=a>0?r/a:0;pb.x=l*c,pb.y=u*c,kv.set(xb,{x:n,y:r}),c>0&&(gb=null)}var wb=new Map;Rv.addEventListener(`pointerdown`,e=>{wb.set(e.pointerId,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,t:performance.now(),moved:!1}),Rv.setPointerCapture(e.pointerId)}),Rv.addEventListener(`pointermove`,e=>{let t=wb.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;t.x=e.clientX,t.y=e.clientY,Math.hypot(e.clientX-t.sx,e.clientY-t.sy)>8&&(t.moved=!0),t.moved&&!_b&&(lb-=n*.006,ub=kt.clamp(ub+r*.004,-.15,.9))}),Rv.addEventListener(`pointerup`,e=>{let t=wb.get(e.pointerId);wb.delete(e.pointerId),t&&!t.moved&&performance.now()-t.t<450&&Ob(e.clientX,e.clientY)}),Rv.addEventListener(`pointercancel`,e=>wb.delete(e.pointerId));var Tb=new Pc,Eb=new G,Db=new X(new Ho(.18,.26,24),new si({color:15123066,transparent:!0,opacity:0,depthWrite:!1}));Db.rotation.x=-Math.PI/2,Db.position.y=.02,Hv.add(Db);function Ob(e,t){if(sb!==`outside`&&sb!==`inside`)return;Eb.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),Tb.setFromCamera(Eb,Uv);let n=Tb.intersectObjects(Zy,!1)[0];if(n&&n.distance<14){let e=n.object.userData.type;if(e===`door`&&!cb)return Nb();if(e===`photo`)return Rb(n.object.userData.i);if(e===`placard`)return zb();if(e===`bench`)return Kb()}let r=Tb.intersectObjects([ty,Dy,ny],!1)[0];r&&(gb=r.point.clone(),gb.y=0,Db.position.set(gb.x,.02,gb.z),kv.fromTo(Db.material,{opacity:.9},{opacity:0,duration:1.2}),kv.fromTo(Db.scale,{x:.5,y:.5},{x:1.4,y:1.4,duration:1.2}))}var kb=null;Q(`startBtn`).addEventListener(`click`,()=>{if(Av.music)try{kb=new Audio(jv+Av.music),kb.loop=!0,kb.volume=.6,kb.play().catch(()=>{}),Q(`musicBtn`).classList.remove(`hidden`)}catch{}Q(`start`).classList.add(`fade`),setTimeout(()=>Q(`start`).classList.add(`hidden`),950),Q(`hud`).classList.remove(`hidden`),sb=`outside`,Nv||Q(`joy`).classList.add(`hidden`),jb(Nv?`Walk to the door · drag to look`:`WASD / arrows to walk · drag to look`,4200),vb.set(0,6,20)}),Q(`musicBtn`).addEventListener(`click`,()=>{kb&&(kb.paused?(kb.play(),Q(`musicBtn`).style.opacity=1):(kb.pause(),Q(`musicBtn`).style.opacity=.5))});var Ab;function jb(e,t=3e3){let n=Q(`hint-top`);n.textContent=e,n.classList.add(`on`),clearTimeout(Ab),Ab=setTimeout(()=>n.classList.remove(`on`),t)}var Mb=0;function Nb(){sb===`outside`&&Q(`lock`).classList.contains(`hidden`)&&(Q(`lock`).classList.remove(`hidden`),Q(`lockCard`).className=`card`,Q(`code`).value=``,setTimeout(()=>Q(`code`).focus({preventScroll:!0}),Nv?250:50))}function Pb(){Q(`code`).blur(),Q(`lock`).classList.add(`hidden`),Mb=performance.now(),setTimeout(Kv,300)}Q(`lockCancel`).addEventListener(`click`,Pb),Q(`lockCard`).addEventListener(`submit`,e=>{if(e.preventDefault(),Q(`code`).value.trim().toLowerCase()===String(Av.passcode).toLowerCase())Q(`code`).blur(),Q(`lockCard`).className=`card ok`,Q(`hintTxt`).textContent=``,navigator.vibrate&&navigator.vibrate([20,40,60]),setTimeout(()=>{Q(`lock`).classList.add(`hidden`),Kv(),Fb()},900*Pv+100);else{let e=Q(`lockCard`);e.className=`card`,e.offsetWidth,e.className=`card shake`,navigator.vibrate&&navigator.vibrate(120),Q(`hintTxt`).textContent=Av.hint,Q(`code`).value=``,Q(`code`).focus({preventScroll:!0})}});function Fb(){sb=`unlocking`,_b=!0,gb=null;let e=kv.timeline({defaults:{ease:`power2.inOut`}}),t={x:vb.x,y:vb.y,z:vb.z,lx:yb.x,ly:yb.y,lz:yb.z};e.to(_y.scale,{x:1.25,y:1.25,z:1.25,duration:.35*Pv,ease:`back.out(3)`}).to(vy.material,{opacity:1,duration:.35*Pv},`<`).to(vy.scale,{x:4,y:4,duration:.6*Pv,ease:`expo.out`}).to(Q(`flash`),{opacity:.55,duration:.15*Pv,yoyo:!0,repeat:1},`<`).to(_y.scale,{x:0,y:0,z:0,duration:.45*Pv,ease:`back.in(2)`},`<0.1`).to(vy.material,{opacity:0,duration:.6*Pv},`<`).add(()=>{rb=1}).to(t,{x:0,y:2.6,z:8.5,lx:0,ly:2.3,lz:0,duration:1.2*Pv,onUpdate:()=>{vb.set(t.x,t.y,t.z),yb.set(t.lx,t.ly,t.lz)}},0).to(fy.rotation,{y:1.85,duration:2.6*Pv,ease:`power3.inOut`},`-=0.1`).to(py.rotation,{y:-1.85,duration:2.6*Pv,ease:`power3.inOut`},`<0.08`).to(by.material,{opacity:.9,duration:.8*Pv,ease:`power2.out`},`<0.2`).to(yy.material,{opacity:.75,duration:1.6*Pv},`<`).to(Gv,{strength:1.1,duration:1.2*Pv},`<`).add(()=>$v.forEach((e,t)=>kv.to(e,{intensity:40,duration:1.2*Pv,delay:t*.25*Pv})),`<0.4`).to(by.material,{opacity:0,duration:1.4*Pv},`>-0.6`).to(Gv,{strength:.55,duration:1.6*Pv},`<`).add(()=>{$&&(gb=new K(0,0,-3.5),$.root.position.x=0),cb=!0}).to(t,{x:0,y:2.4,z:1.5,lx:0,ly:1.8,lz:-8,duration:2.6*Pv,ease:`power2.inOut`,onUpdate:()=>{vb.set(t.x,t.y,t.z),yb.set(t.lx,t.ly,t.lz)}},`<-0.4`).add(()=>{_b=!1,lb=0,ub=.2,sb=`inside`,Hv.fog.near=30,Hv.fog.far=60,Q(`danceBtn`).classList.remove(`hidden`),jb(`Tap a photo or the placard to view it`,4e3),setTimeout(()=>Wb(Av.bubbles[0]),1200)})}function Ib(e){Q(`viewerBody`).innerHTML=e,Q(`viewer`).classList.remove(`hidden`)}Q(`viewerClose`).addEventListener(`click`,()=>Q(`viewer`).classList.add(`hidden`)),Q(`viewer`).addEventListener(`click`,e=>{e.target.id===`viewer`&&Q(`viewer`).classList.add(`hidden`)});var Lb=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function Rb(e){let t=Av.photos[e];Ib(`${t.src?`<img src="${jv+t.src}" alt="">`:`<img src="${Py[e].group.children[2].material.map.image.toDataURL()}" alt="">`}<p class="cap">${Lb(t.caption)}</p>`)}function zb(){let e=Av.placard;Ib(`<div class="pl"><div class="eb">${Lb(e.heading)}</div><h3>${Lb(e.to)}</h3>${e.body.map(e=>`<p>${Lb(e)}</p>`).join(``)}<p class="sig">${Lb(e.signoff)}</p></div>`)}var Bb=null,Vb=0,Hb=0,Ub=1;function Wb(e,t=3800){ob&&(Bb&&Bb.remove(),Bb=document.createElement(`div`),Bb.className=`bubble`,Bb.textContent=e,Q(`bubbles`).appendChild(Bb),Vb=performance.now()+t,Hb=performance.now())}var Gb=null;function Kb(){if(!$||sb!==`inside`)return;Gb=`sit`,gb=null;let e=Ky.position;for(let[t,n]of[[$,-.45],[ob,.45]])kv.to(t.root.position,{x:e.x+n,z:e.z+.42,duration:.8*Pv,ease:`power2.inOut`}),t.yaw=0,t.root.rotation.y=0,t.play(`Sitting`,.4);setTimeout(()=>Wb(`stay here with me a while ❤️`),900),Q(`sitBtn`).classList.add(`hidden`)}Q(`sitBtn`).addEventListener(`click`,Kb),Q(`danceBtn`).addEventListener(`click`,()=>{if(!$)return;Gb=`dance`,gb=null;let e=Math.cos(lb),t=-Math.sin(lb),n=$.root.position.x+e*1.3,r=$.root.position.z+t*1.3,i=$b($.root.position.x,$.root.position.z,n,r);kv.to(ob.root.position,{x:i[0],z:i[1],duration:.6*Pv,ease:`power2.out`}),$.yaw=Math.atan2(e,t)+lb*0,$.yaw=Math.atan2(e,t)-.6,$.root.rotation.y=$.yaw,ob.yaw=Math.atan2(-e,-t)+.6,ob.root.rotation.y=ob.yaw,$.play(`Dance`),ob.play(`Dance`),rb=1,Wb(`I love you ❤️`)});var qb=new K,Jb=11.5,Yb=15.5,Xb=2.05,Zb=3.15;function Qb(e){if(!$)return;let t=0,n=0;!_b&&sb!==`start`&&sb!==`unlocking`&&Q(`lock`).classList.contains(`hidden`)&&(t=pb.x+(fb.KeyD||fb.ArrowRight?1:0)-(fb.KeyA||fb.ArrowLeft?1:0),n=pb.y+(fb.KeyS||fb.ArrowDown?1:0)-(fb.KeyW||fb.ArrowUp?1:0));let r=Math.hypot(t,n);r>1&&(t/=r,n/=r);let i=0,a=0,o=Math.min(1,r),s=!1;if(o>.025){let e=Math.sin(lb),r=Math.cos(lb);i=(t*r+n*e)*o,a=(-t*e+n*r)*o,gb=null}else if(gb&&!_b){qb.subVectors(gb,$.root.position),qb.y=0;let e=qb.length();e<.12?gb=null:(i=qb.x/e,a=qb.z/e,o=Math.min(1,e/1.25),s=!0)}let c=!s&&o>.88,l=s?Math.min(2,.75+qb.length()*.8):c?Zb:Xb;hb.set(i*l,0,a*l);let u=1-Math.exp(-(o>.025?Jb:Yb)*e);if(mb.lerp(hb,u),o<=.025&&!gb&&mb.multiplyScalar(Math.exp(-15.5*e)),mb.lengthSq()>.0025){Gb&&=null;let t=$.root.position,n=t.x+mb.x*e,r=t.z+mb.z*e,i=$b(t.x,t.z,n,r);t.x=i[0],t.z=i[1],i[0]===t.x&&Math.abs(n-i[0])>1e-4&&(mb.x=0),i[1]===t.z&&Math.abs(r-i[1])>1e-4&&(mb.z=0);let a=Math.hypot(mb.x,mb.z);a>.08&&$.face(Math.atan2(mb.x,mb.z),e,8.5);let o=c&&a>2.2?`Running`:`Walking`;$.play(o,.22),$.mixer.timeScale=o===`Running`?1:kt.clamp(a/1.7,.72,1.12)}else Gb||(mb.set(0,0,0),$.play(`Idle`,.28),$.mixer.timeScale=1)}function $b(e,t,n,r){let i=(e,t)=>t<-.7&&t>-31.4&&Math.abs(e)<xy/2-.4,a=(e,t)=>t>(cb?.9:1.15)&&t<14&&Math.abs(e)<10,o=(e,t)=>cb&&Math.abs(e)<1.25&&t<=1.2&&t>=-.9,s=(e,t)=>i(e,t)||a(e,t)||o(e,t);return s(n,r)?[n,r]:s(n,t)?[n,t]:s(e,r)?[e,r]:[e,t]}function ex(e){if(!ob||!$)return;if(Gb){Gb===`sit`&&ob.face(0,e);return}let t=new K(Math.sin($.yaw),0,Math.cos($.yaw)),n=new K(t.z,0,-t.x),r=$.root.position.clone().addScaledVector(t,-.9).addScaledVector(n,1),i=ob.root.position;qb.subVectors(r,i),qb.y=0;let a=qb.length();if(a>.35){let t=Math.min(2.55,a*1.65),n=Math.min(a,t*e),r=$b(i.x,i.z,i.x+qb.x/a*n,i.z+qb.z/a*n);i.x=r[0],i.z=r[1],ob.face(Math.atan2(qb.x,qb.z),e,5.5),ob.play(t>2?`Running`:`Walking`,.28),ob.mixer.timeScale=t>2?.95:.82}else ob.face($.yaw,e,3),ob.play(`Idle`,.35),ob.mixer.timeScale=1}var tx=new K,nx=new K;function rx(e){if(!$||_b||sb===`start`){if(sb===`start`&&$){let e=performance.now()*12e-5;vb.set(Math.sin(e)*3,3.2,15),yb.set(0,3.2,0)}Uv.position.lerp(vb,_b?1:Math.min(1,e*2)),Uv.lookAt(yb);return}let t=$.root.position,n=Gb===`sit`?db*.9:db,r=Gb===`sit`?lb+Math.PI*0:lb;tx.set(t.x+Math.sin(r)*Math.cos(ub)*n,t.y+1.25+Math.sin(ub)*n,t.z+Math.cos(r)*Math.cos(ub)*n),(sb===`inside`||t.z<.6)&&(tx.x=kt.clamp(tx.x,-4.65,xy/2-.35),tx.z=Math.max(tx.z,-31.6),tx.y=Math.min(tx.y,4.7),t.z<-.5&&tx.z>-.75&&Math.abs(tx.x)>1.4&&(tx.z=-.75)),vb.lerp(tx,1-Math.exp(-7.5*e)),nx.set(t.x,t.y+1.1,t.z),yb.lerp(nx,1-Math.exp(-9.5*e)),Uv.position.copy(vb),Uv.lookAt(yb)}var ix=0,ax=0,ox=performance.now()+2500;function sx(e){ix+=e,ax++;let t=performance.now();if(t<ox)return;let n=ix/ax;ix=0,ax=0,ox=t+2e3,n>24&&(Lv.bloom?Lv.bloom=!1:Bv>1?(Bv=Math.max(1,Bv-.25),zv.setPixelRatio(Bv),Kv()):eb.count>30&&(eb.count=30))}var cx=new Lc,lx=new K,ux=new J,dx=new At,fx=new ln,px=new K,mx=new K;function hx(){if(!Vv||(requestAnimationFrame(hx),document.hidden))return;let e=Math.min(cx.getDelta(),1/30),t=cx.elapsedTime;if(sx(e*1e3),Qb(e),ex(e),$&&$.update(e),ob&&ob.update(e),rx(e),!cb&&sb!==`unlocking`){let e=1+Math.sin(t*2.2)*.04;_y.scale.setScalar(e),vy.material.opacity=.4+Math.sin(t*2.2)*.15}if($&&sb===`outside`){let e=$.root.position;Math.abs(e.x)<2.6&&e.z<2.6&&performance.now()-Mb>2500&&Nb()}if($&&sb===`inside`&&!Gb){let e=$.root.position;if(Q(`sitBtn`).classList.toggle(`hidden`,e.distanceTo(Ky.position)>2.6),performance.now()-Hb>9e3){for(let t of Py)if(Math.hypot(e.x-t.pos.x,e.z-t.pos.z)<2.2){Wb(Av.bubbles[Ub++%Av.bubbles.length]);break}}}rb=Math.max(0,rb-e*.15);let n=$?$.root.position.x:0,r=$?$.root.position.z:6,i=Mv?.3:1;for(let a=0;a<eb.count;a++){let o=tb[a];o.y-=e*(.25+o.s*.3+rb*.6)*i,o.r+=e*o.rs*i,o.y<.05&&(o.y=4.6+Math.random(),o.x=n+(Math.random()-.5)*10,o.z=r+(Math.random()-.5)*10),Math.abs(o.x-n)>7&&(o.x=n+(Math.random()-.5)*10),Math.abs(o.z-r)>7&&(o.z=r+(Math.random()-.5)*10),mx.set(o.x+Math.sin(t*.8+o.ph)*.4,o.y,o.z+Math.cos(t*.6+o.ph)*.3),fx.set(o.r,o.r*.7,o.ph),dx.setFromEuler(fx),px.setScalar(.6+o.s+rb*.4),ux.compose(mx,dx,px),eb.setMatrixAt(a,ux)}eb.instanceMatrix.needsUpdate=!0,Bb&&(performance.now()>Vb?(Bb.remove(),Bb=null):(lx.copy(ob.root.position),lx.y+=1.9,lx.project(Uv),Bb.style.left=kt.clamp((lx.x+1)/2*innerWidth,110,innerWidth-110)+`px`,Bb.style.top=(1-lx.y)/2*innerHeight+`px`,Bb.style.display=lx.z<1?``:`none`)),Lv.bloom?Wv.render():zv.render(Hv,Uv)}Kv(),hx(),window.__museum={get state(){return sb},Q:Lv,go(e,t){$&&($.root.position.set(e,0,t),ob.root.position.set(e+1,0,t+.8))},setYaw(e,t){lb=e,t!==void 0&&(ub=t)},photo:e=>Rb(e),sit:Kb};