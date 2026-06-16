var G0=Object.defineProperty;var Y0=(r,t,e)=>t in r?G0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Q0=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var it=(r,t,e)=>Y0(r,typeof t!="symbol"?t+"":t,e);var dx=Q0((ar,Be)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mc(r){const t=Object.create(null);for(const e of r.split(","))t[e]=1;return e=>e in t}const Qt={},wi=[],tn=()=>{},Vh=()=>!1,El=r=>r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&(r.charCodeAt(2)>122||r.charCodeAt(2)<97),Tl=r=>r.startsWith("onUpdate:"),Ne=Object.assign,Ec=(r,t)=>{const e=r.indexOf(t);e>-1&&r.splice(e,1)},X0=Object.prototype.hasOwnProperty,Ft=(r,t)=>X0.call(r,t),_t=Array.isArray,bi=r=>To(r)==="[object Map]",Zh=r=>To(r)==="[object Set]",L1=r=>To(r)==="[object Date]",Tt=r=>typeof r=="function",ne=r=>typeof r=="string",ur=r=>typeof r=="symbol",Wt=r=>r!==null&&typeof r=="object",Kh=r=>(Wt(r)||Tt(r))&&Tt(r.then)&&Tt(r.catch),Wh=Object.prototype.toString,To=r=>Wh.call(r),J0=r=>To(r).slice(8,-1),Gh=r=>To(r)==="[object Object]",Nl=r=>ne(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,to=Mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Al=r=>{const t=Object.create(null);return(e=>t[e]||(t[e]=r(e)))},tf=/-\w/g,Ke=Al(r=>r.replace(tf,t=>t.slice(1).toUpperCase())),ef=/\B([A-Z])/g,Qs=Al(r=>r.replace(ef,"-$1").toLowerCase()),Sl=Al(r=>r.charAt(0).toUpperCase()+r.slice(1)),Ql=Al(r=>r?`on${Sl(r)}`:""),Qr=(r,t)=>!Object.is(r,t),Xl=(r,...t)=>{for(let e=0;e<r.length;e++)r[e](...t)},Yh=(r,t,e,n=!1)=>{Object.defineProperty(r,t,{configurable:!0,enumerable:!1,writable:n,value:e})},rf=r=>{const t=parseFloat(r);return isNaN(t)?r:t};let M1;const Ol=()=>M1||(M1=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yn(r){if(_t(r)){const t={};for(let e=0;e<r.length;e++){const n=r[e],s=ne(n)?lf(n):Yn(n);if(s)for(const i in s)t[i]=s[i]}return t}else if(ne(r)||Wt(r))return r}const nf=/;(?![^(]*\))/g,sf=/:([^]+)/,of=/\/\*[^]*?\*\//g;function lf(r){const t={};return r.replace(of,"").split(nf).forEach(e=>{if(e){const n=e.split(sf);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function or(r){let t="";if(ne(r))t=r;else if(_t(r))for(let e=0;e<r.length;e++){const n=or(r[e]);n&&(t+=n+" ")}else if(Wt(r))for(const e in r)r[e]&&(t+=e+" ");return t.trim()}function Jl(r){if(!r)return null;let{class:t,style:e}=r;return t&&!ne(t)&&(r.class=or(t)),e&&(r.style=Yn(e)),r}const af="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cf=Mc(af);function Qh(r){return!!r||r===""}function uf(r,t){if(r.length!==t.length)return!1;let e=!0;for(let n=0;e&&n<r.length;n++)e=Tc(r[n],t[n]);return e}function Tc(r,t){if(r===t)return!0;let e=L1(r),n=L1(t);if(e||n)return e&&n?r.getTime()===t.getTime():!1;if(e=ur(r),n=ur(t),e||n)return r===t;if(e=_t(r),n=_t(t),e||n)return e&&n?uf(r,t):!1;if(e=Wt(r),n=Wt(t),e||n){if(!e||!n)return!1;const s=Object.keys(r).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in r){const a=r.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!Tc(r[o],t[o]))return!1}}return String(r)===String(t)}const Xh=r=>!!(r&&r.__v_isRef===!0),_e=r=>ne(r)?r:r==null?"":_t(r)||Wt(r)&&(r.toString===Wh||!Tt(r.toString))?Xh(r)?_e(r.value):JSON.stringify(r,Jh,2):String(r),Jh=(r,t)=>Xh(t)?Jh(r,t.value):bi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,s],i)=>(e[ta(n,i)+" =>"]=s,e),{})}:Zh(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ta(e))}:ur(t)?ta(t):Wt(t)&&!_t(t)&&!Gh(t)?String(t):t,ta=(r,t="")=>{var e;return ur(r)?`Symbol(${(e=r.description)!=null?e:t})`:r};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ke;class t2{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&ke&&(ke.active?(this.parent=ke,this.index=(ke.scopes||(ke.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=ke;try{return ke=this,t()}finally{ke=e}}}on(){++this._on===1&&(this.prevScope=ke,ke=this)}off(){if(this._on>0&&--this._on===0){if(ke===this)ke=this.prevScope;else{let t=ke;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function e2(r){return new t2(r)}function r2(){return ke}function hf(r,t=!1){ke&&ke.cleanups.push(r)}let Jt;const ea=new WeakSet;class n2{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ke&&(ke.active?ke.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ea.has(this)&&(ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||i2(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,E1(this),o2(this);const t=Jt,e=Rr;Jt=this,Rr=!0;try{return this.fn()}finally{l2(this),Jt=t,Rr=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Sc(t);this.deps=this.depsTail=void 0,E1(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ba(this)&&this.run()}get dirty(){return Ba(this)}}let s2=0,eo,ro;function i2(r,t=!1){if(r.flags|=8,t){r.next=ro,ro=r;return}r.next=eo,eo=r}function Nc(){s2++}function Ac(){if(--s2>0)return;if(ro){let t=ro;for(ro=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let r;for(;eo;){let t=eo;for(eo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){r||(r=n)}t=e}}if(r)throw r}function o2(r){for(let t=r.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function l2(r){let t,e=r.depsTail,n=e;for(;n;){const s=n.prevDep;n.version===-1?(n===e&&(e=s),Sc(n),df(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}r.deps=t,r.depsTail=e}function Ba(r){for(let t=r.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(a2(t.dep.computed)||t.dep.version!==t.version))return!0;return!!r._dirty}function a2(r){if(r.flags&4&&!(r.flags&16)||(r.flags&=-17,r.globalVersion===go)||(r.globalVersion=go,!r.isSSR&&r.flags&128&&(!r.deps&&!r._dirty||!Ba(r))))return;r.flags|=2;const t=r.dep,e=Jt,n=Rr;Jt=r,Rr=!0;try{o2(r);const s=r.fn(r._value);(t.version===0||Qr(s,r._value))&&(r.flags|=128,r._value=s,t.version++)}catch(s){throw t.version++,s}finally{Jt=e,Rr=n,l2(r),r.flags&=-3}}function Sc(r,t=!1){const{dep:e,prevSub:n,nextSub:s}=r;if(n&&(n.nextSub=s,r.prevSub=void 0),s&&(s.prevSub=n,r.nextSub=void 0),e.subs===r&&(e.subs=n,!n&&e.computed)){e.computed.flags&=-5;for(let i=e.computed.deps;i;i=i.nextDep)Sc(i,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function df(r){const{prevDep:t,nextDep:e}=r;t&&(t.nextDep=e,r.prevDep=void 0),e&&(e.prevDep=t,r.nextDep=void 0)}let Rr=!0;const c2=[];function Nn(){c2.push(Rr),Rr=!1}function An(){const r=c2.pop();Rr=r===void 0?!0:r}function E1(r){const{cleanup:t}=r;if(r.cleanup=void 0,t){const e=Jt;Jt=void 0;try{t()}finally{Jt=e}}}let go=0,ff=class{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class Oc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Jt||!Rr||Jt===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Jt)e=this.activeLink=new ff(Jt,this),Jt.deps?(e.prevDep=Jt.depsTail,Jt.depsTail.nextDep=e,Jt.depsTail=e):Jt.deps=Jt.depsTail=e,u2(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const n=e.nextDep;n.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=n),e.prevDep=Jt.depsTail,e.nextDep=void 0,Jt.depsTail.nextDep=e,Jt.depsTail=e,Jt.deps===e&&(Jt.deps=n)}return e}trigger(t){this.version++,go++,this.notify(t)}notify(t){Nc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ac()}}}function u2(r){if(r.dep.sc++,r.sub.flags&4){const t=r.dep.computed;if(t&&!r.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)u2(n)}const e=r.dep.subs;e!==r&&(r.prevSub=e,e&&(e.nextSub=r)),r.dep.subs=r}}const fl=new WeakMap,Us=Symbol(""),qa=Symbol(""),mo=Symbol("");function Se(r,t,e){if(Rr&&Jt){let n=fl.get(r);n||fl.set(r,n=new Map);let s=n.get(e);s||(n.set(e,s=new Oc),s.map=n,s.key=e),s.track()}}function Mn(r,t,e,n,s,i){const o=fl.get(r);if(!o){go++;return}const a=c=>{c&&c.trigger()};if(Nc(),t==="clear")o.forEach(a);else{const c=_t(r),u=c&&Nl(e);if(c&&e==="length"){const d=Number(n);o.forEach((p,f)=>{(f==="length"||f===mo||!ur(f)&&f>=d)&&a(p)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(mo)),t){case"add":c?u&&a(o.get("length")):(a(o.get(Us)),bi(r)&&a(o.get(qa)));break;case"delete":c||(a(o.get(Us)),bi(r)&&a(o.get(qa)));break;case"set":bi(r)&&a(o.get(Us));break}}Ac()}function pf(r,t){const e=fl.get(r);return e&&e.get(t)}function ii(r){const t=$t(r);return t===r?t:(Se(t,"iterate",mo),cr(r)?t:t.map($r))}function Il(r){return Se(r=$t(r),"iterate",mo),r}function Gr(r,t){return Sn(r)?Ti(En(r)?$r(t):t):$r(t)}const gf={__proto__:null,[Symbol.iterator](){return ra(this,Symbol.iterator,r=>Gr(this,r))},concat(...r){return ii(this).concat(...r.map(t=>_t(t)?ii(t):t))},entries(){return ra(this,"entries",r=>(r[1]=Gr(this,r[1]),r))},every(r,t){return Cn(this,"every",r,t,void 0,arguments)},filter(r,t){return Cn(this,"filter",r,t,e=>e.map(n=>Gr(this,n)),arguments)},find(r,t){return Cn(this,"find",r,t,e=>Gr(this,e),arguments)},findIndex(r,t){return Cn(this,"findIndex",r,t,void 0,arguments)},findLast(r,t){return Cn(this,"findLast",r,t,e=>Gr(this,e),arguments)},findLastIndex(r,t){return Cn(this,"findLastIndex",r,t,void 0,arguments)},forEach(r,t){return Cn(this,"forEach",r,t,void 0,arguments)},includes(...r){return na(this,"includes",r)},indexOf(...r){return na(this,"indexOf",r)},join(r){return ii(this).join(r)},lastIndexOf(...r){return na(this,"lastIndexOf",r)},map(r,t){return Cn(this,"map",r,t,void 0,arguments)},pop(){return Pi(this,"pop")},push(...r){return Pi(this,"push",r)},reduce(r,...t){return T1(this,"reduce",r,t)},reduceRight(r,...t){return T1(this,"reduceRight",r,t)},shift(){return Pi(this,"shift")},some(r,t){return Cn(this,"some",r,t,void 0,arguments)},splice(...r){return Pi(this,"splice",r)},toReversed(){return ii(this).toReversed()},toSorted(r){return ii(this).toSorted(r)},toSpliced(...r){return ii(this).toSpliced(...r)},unshift(...r){return Pi(this,"unshift",r)},values(){return ra(this,"values",r=>Gr(this,r))}};function ra(r,t,e){const n=Il(r),s=n[t]();return n!==r&&!cr(r)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=e(i.value)),i}),s}const mf=Array.prototype;function Cn(r,t,e,n,s,i){const o=Il(r),a=o!==r&&!cr(r),c=o[t];if(c!==mf[t]){const p=c.apply(r,i);return a?$r(p):p}let u=e;o!==r&&(a?u=function(p,f){return e.call(this,Gr(r,p),f,r)}:e.length>2&&(u=function(p,f){return e.call(this,p,f,r)}));const d=c.call(o,u,n);return a&&s?s(d):d}function T1(r,t,e,n){const s=Il(r),i=s!==r&&!cr(r);let o=e,a=!1;s!==r&&(i?(a=n.length===0,o=function(u,d,p){return a&&(a=!1,u=Gr(r,u)),e.call(this,u,Gr(r,d),p,r)}):e.length>3&&(o=function(u,d,p){return e.call(this,u,d,p,r)}));const c=s[t](o,...n);return a?Gr(r,c):c}function na(r,t,e){const n=$t(r);Se(n,"iterate",mo);const s=n[t](...e);return(s===-1||s===!1)&&Bl(e[0])?(e[0]=$t(e[0]),n[t](...e)):s}function Pi(r,t,e=[]){Nn(),Nc();const n=$t(r)[t].apply(r,e);return Ac(),An(),n}const vf=Mc("__proto__,__v_isRef,__isVue"),h2=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(ur));function wf(r){ur(r)||(r=String(r));const t=$t(this);return Se(t,"has",r),t.hasOwnProperty(r)}class d2{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return i;if(e==="__v_raw")return n===(s?i?Tf:m2:i?g2:p2).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=_t(t);if(!s){let c;if(o&&(c=gf[e]))return c;if(e==="hasOwnProperty")return wf}const a=Reflect.get(t,e,le(t)?t:n);if((ur(e)?h2.has(e):vf(e))||(s||Se(t,"get",e),i))return a;if(le(a)){const c=o&&Nl(e)?a:a.value;return s&&Wt(c)?Ha(c):c}return Wt(a)?s?Ha(a):jl(a):a}}class f2 extends d2{constructor(t=!1){super(!1,t)}set(t,e,n,s){let i=t[e];const o=_t(t)&&Nl(e);if(!this._isShallow){const u=Sn(i);if(!cr(n)&&!Sn(n)&&(i=$t(i),n=$t(n)),!o&&le(i)&&!le(n))return u||(i.value=n),!0}const a=o?Number(e)<t.length:Ft(t,e),c=Reflect.set(t,e,n,le(t)?t:s);return t===$t(s)&&(a?Qr(n,i)&&Mn(t,"set",e,n):Mn(t,"add",e,n)),c}deleteProperty(t,e){const n=Ft(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Mn(t,"delete",e,void 0),s}has(t,e){const n=Reflect.has(t,e);return(!ur(e)||!h2.has(e))&&Se(t,"has",e),n}ownKeys(t){return Se(t,"iterate",_t(t)?"length":Us),Reflect.ownKeys(t)}}class bf extends d2{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const yf=new f2,Cf=new bf,kf=new f2(!0),Ra=r=>r,Po=r=>Reflect.getPrototypeOf(r);function xf(r,t,e){return function(...n){const s=this.__v_raw,i=$t(s),o=bi(i),a=r==="entries"||r===Symbol.iterator&&o,c=r==="keys"&&o,u=s[r](...n),d=e?Ra:t?Ti:$r;return!t&&Se(i,"iterate",c?qa:Us),Ne(Object.create(u),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:a?[d(p[0]),d(p[1])]:d(p),done:f}}})}}function Uo(r){return function(...t){return r==="delete"?!1:r==="clear"?void 0:this}}function _f(r,t){const e={get(s){const i=this.__v_raw,o=$t(i),a=$t(s);r||(Qr(s,a)&&Se(o,"get",s),Se(o,"get",a));const{has:c}=Po(o),u=t?Ra:r?Ti:$r;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!r&&Se($t(s),"iterate",Us),s.size},has(s){const i=this.__v_raw,o=$t(i),a=$t(s);return r||(Qr(s,a)&&Se(o,"has",s),Se(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=$t(a),u=t?Ra:r?Ti:$r;return!r&&Se(c,"iterate",Us),a.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return Ne(e,r?{add:Uo("add"),set:Uo("set"),delete:Uo("delete"),clear:Uo("clear")}:{add(s){const i=$t(this),o=Po(i),a=$t(s),c=!t&&!cr(s)&&!Sn(s)?a:s;return o.has.call(i,c)||Qr(s,c)&&o.has.call(i,s)||Qr(a,c)&&o.has.call(i,a)||(i.add(c),Mn(i,"add",c,c)),this},set(s,i){!t&&!cr(i)&&!Sn(i)&&(i=$t(i));const o=$t(this),{has:a,get:c}=Po(o);let u=a.call(o,s);u||(s=$t(s),u=a.call(o,s));const d=c.call(o,s);return o.set(s,i),u?Qr(i,d)&&Mn(o,"set",s,i):Mn(o,"add",s,i),this},delete(s){const i=$t(this),{has:o,get:a}=Po(i);let c=o.call(i,s);c||(s=$t(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&Mn(i,"delete",s,void 0),u},clear(){const s=$t(this),i=s.size!==0,o=s.clear();return i&&Mn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=xf(s,r,t)}),e}function Ic(r,t){const e=_f(r,t);return(n,s,i)=>s==="__v_isReactive"?!r:s==="__v_isReadonly"?r:s==="__v_raw"?n:Reflect.get(Ft(e,s)&&s in n?e:n,s,i)}const Lf={get:Ic(!1,!1)},Mf={get:Ic(!1,!0)},Ef={get:Ic(!0,!1)},p2=new WeakMap,g2=new WeakMap,m2=new WeakMap,Tf=new WeakMap;function Nf(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jl(r){return Sn(r)?r:jc(r,!1,yf,Lf,p2)}function Af(r){return jc(r,!1,kf,Mf,g2)}function Ha(r){return jc(r,!0,Cf,Ef,m2)}function jc(r,t,e,n,s){if(!Wt(r)||r.__v_raw&&!(t&&r.__v_isReactive)||r.__v_skip||!Object.isExtensible(r))return r;const i=s.get(r);if(i)return i;const o=Nf(J0(r));if(o===0)return r;const a=new Proxy(r,o===2?n:e);return s.set(r,a),a}function En(r){return Sn(r)?En(r.__v_raw):!!(r&&r.__v_isReactive)}function Sn(r){return!!(r&&r.__v_isReadonly)}function cr(r){return!!(r&&r.__v_isShallow)}function Bl(r){return r?!!r.__v_raw:!1}function $t(r){const t=r&&r.__v_raw;return t?$t(t):r}function Bc(r){return!Ft(r,"__v_skip")&&Object.isExtensible(r)&&Yh(r,"__v_skip",!0),r}const $r=r=>Wt(r)?jl(r):r,Ti=r=>Wt(r)?Ha(r):r;function le(r){return r?r.__v_isRef===!0:!1}function Ve(r){return v2(r,!1)}function Sf(r){return v2(r,!0)}function v2(r,t){return le(r)?r:new Of(r,t)}class Of{constructor(t,e){this.dep=new Oc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:$t(t),this._value=e?t:$r(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this.__v_isShallow||cr(t)||Sn(t);t=n?t:$t(t),Qr(t,e)&&(this._rawValue=t,this._value=n?t:$r(t),this.dep.trigger())}}function te(r){return le(r)?r.value:r}const If={get:(r,t,e)=>t==="__v_raw"?r:te(Reflect.get(r,t,e)),set:(r,t,e,n)=>{const s=r[t];return le(s)&&!le(e)?(s.value=e,!0):Reflect.set(r,t,e,n)}};function w2(r){return En(r)?r:new Proxy(r,If)}function jf(r){const t=_t(r)?new Array(r.length):{};for(const e in r)t[e]=qf(r,e);return t}class Bf{constructor(t,e,n){this._object=t,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._key=ur(e)?e:String(e),this._raw=$t(t);let s=!0,i=t;if(!_t(t)||ur(this._key)||!Nl(this._key))do s=!Bl(i)||cr(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=te(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&le(this._raw[this._key])){const e=this._object[this._key];if(le(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return pf(this._raw,this._key)}}function qf(r,t,e){return new Bf(r,t,e)}class Rf{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Oc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=go-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Jt!==this)return i2(this,!0),!0}get value(){const t=this.dep.track();return a2(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Hf(r,t,e=!1){let n,s;return Tt(r)?n=r:(n=r.get,s=r.set),new Rf(n,s,e)}const zo={},pl=new WeakMap;let Ps;function $f(r,t=!1,e=Ps){if(e){let n=pl.get(e);n||pl.set(e,n=[]),n.push(r)}}function Df(r,t,e=Qt){const{immediate:n,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=e,u=q=>s?q:cr(q)||s===!1||s===0?zn(q,1):zn(q);let d,p,f,g,b=!1,C=!1;if(le(r)?(p=()=>r.value,b=cr(r)):En(r)?(p=()=>u(r),b=!0):_t(r)?(C=!0,b=r.some(q=>En(q)||cr(q)),p=()=>r.map(q=>{if(le(q))return q.value;if(En(q))return u(q);if(Tt(q))return c?c(q,2):q()})):Tt(r)?t?p=c?()=>c(r,2):r:p=()=>{if(f){Nn();try{f()}finally{An()}}const q=Ps;Ps=d;try{return c?c(r,3,[g]):r(g)}finally{Ps=q}}:p=tn,t&&s){const q=p,H=s===!0?1/0:s;p=()=>zn(q(),H)}const M=r2(),_=()=>{d.stop(),M&&M.active&&Ec(M.effects,d)};if(i&&t){const q=t;t=(...H)=>{const lt=q(...H);return _(),lt}}let S=C?new Array(r.length).fill(zo):zo;const B=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(t){const H=d.run();if(q||s||b||(C?H.some((lt,dt)=>Qr(lt,S[dt])):Qr(H,S))){f&&f();const lt=Ps;Ps=d;try{const dt=[H,S===zo?void 0:C&&S[0]===zo?[]:S,g];S=H,c?c(t,3,dt):t(...dt)}finally{Ps=lt}}}else d.run()};return a&&a(B),d=new n2(p),d.scheduler=o?()=>o(B,!1):B,g=q=>$f(q,!1,d),f=d.onStop=()=>{const q=pl.get(d);if(q){if(c)c(q,4);else for(const H of q)H();pl.delete(d)}},t?n?B(!0):S=d.run():o?o(B.bind(null,!0),!0):d.run(),_.pause=d.pause.bind(d),_.resume=d.resume.bind(d),_.stop=_,_}function zn(r,t=1/0,e){if(t<=0||!Wt(r)||r.__v_skip||(e=e||new Map,(e.get(r)||0)>=t))return r;if(e.set(r,t),t--,le(r))zn(r.value,t,e);else if(_t(r))for(let n=0;n<r.length;n++)zn(r[n],t,e);else if(Zh(r)||bi(r))r.forEach(n=>{zn(n,t,e)});else if(Gh(r)){for(const n in r)zn(r[n],t,e);for(const n of Object.getOwnPropertySymbols(r))Object.prototype.propertyIsEnumerable.call(r,n)&&zn(r[n],t,e)}return r}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function No(r,t,e,n){try{return n?r(...n):r()}catch(s){ql(s,t,e)}}function Dr(r,t,e,n){if(Tt(r)){const s=No(r,t,e,n);return s&&Kh(s)&&s.catch(i=>{ql(i,t,e)}),s}if(_t(r)){const s=[];for(let i=0;i<r.length;i++)s.push(Dr(r[i],t,e,n));return s}}function ql(r,t,e,n=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Qt;if(t){let a=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const d=a.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](r,c,u)===!1)return}a=a.parent}if(i){Nn(),No(i,null,10,[r,c,u]),An();return}}Pf(r,e,s,n,o)}function Pf(r,t,e,n=!0,s=!1){if(s)throw r;console.error(r)}const Fe=[];let Kr=-1;const yi=[];let Un=null,li=0;const b2=Promise.resolve();let gl=null;function qc(r){const t=gl||b2;return r?t.then(this?r.bind(this):r):t}function Uf(r){let t=Kr+1,e=Fe.length;for(;t<e;){const n=t+e>>>1,s=Fe[n],i=vo(s);i<r||i===r&&s.flags&2?t=n+1:e=n}return t}function Rc(r){if(!(r.flags&1)){const t=vo(r),e=Fe[Fe.length-1];!e||!(r.flags&2)&&t>=vo(e)?Fe.push(r):Fe.splice(Uf(t),0,r),r.flags|=1,y2()}}function y2(){gl||(gl=b2.then(k2))}function zf(r){_t(r)?yi.push(...r):Un&&r.id===-1?Un.splice(li+1,0,r):r.flags&1||(yi.push(r),r.flags|=1),y2()}function N1(r,t,e=Kr+1){for(;e<Fe.length;e++){const n=Fe[e];if(n&&n.flags&2){if(r&&n.id!==r.uid)continue;Fe.splice(e,1),e--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function C2(r){if(yi.length){const t=[...new Set(yi)].sort((e,n)=>vo(e)-vo(n));if(yi.length=0,Un){Un.push(...t);return}for(Un=t,li=0;li<Un.length;li++){const e=Un[li];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Un=null,li=0}}const vo=r=>r.id==null?r.flags&2?-1:1/0:r.id;function k2(r){try{for(Kr=0;Kr<Fe.length;Kr++){const t=Fe[Kr];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),No(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Kr<Fe.length;Kr++){const t=Fe[Kr];t&&(t.flags&=-2)}Kr=-1,Fe.length=0,C2(),gl=null,(Fe.length||yi.length)&&k2()}}let Ze=null,x2=null;function ml(r){const t=Ze;return Ze=r,x2=r&&r.type.__scopeId||null,t}function Pr(r,t=Ze,e){if(!t||r._n)return r;const n=(...s)=>{n._d&&P1(-1);const i=ml(t);let o;try{o=r(...s)}finally{ml(i),n._d&&P1(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function $s(r,t,e,n){const s=r.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[n];c&&(Nn(),Dr(c,e,8,[r.el,a,r,t]),An())}}function Ff(r,t){if(Ie){let e=Ie.provides;const n=Ie.parent&&Ie.parent.provides;n===e&&(e=Ie.provides=Object.create(n)),e[r]=t}}function Ci(r,t,e=!1){const n=Vc();if(n||zs){let s=zs?zs._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&r in s)return s[r];if(arguments.length>1)return e&&Tt(t)?t.call(n&&n.proxy):t}}function Vf(){return!!(Vc()||zs)}const Zf=Symbol.for("v-scx"),Kf=()=>Ci(Zf);function Tn(r,t,e){return _2(r,t,e)}function _2(r,t,e=Qt){const{immediate:n,deep:s,flush:i,once:o}=e,a=Ne({},e),c=t&&n||!t&&i!=="post";let u;if(bo){if(i==="sync"){const g=Kf();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=tn,g.resume=tn,g.pause=tn,g}}const d=Ie;a.call=(g,b,C)=>Dr(g,d,b,C);let p=!1;i==="post"?a.scheduler=g=>{Ge(g,d&&d.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(g,b)=>{b?g():Rc(g)}),a.augmentJob=g=>{t&&(g.flags|=4),p&&(g.flags|=2,d&&(g.id=d.uid,g.i=d))};const f=Df(r,t,a);return bo&&(u?u.push(f):c&&f()),f}function Wf(r,t,e){const n=this.proxy,s=ne(r)?r.includes(".")?L2(n,r):()=>n[r]:r.bind(n,n);let i;Tt(t)?i=t:(i=t.handler,e=t);const o=So(this),a=_2(s,i.bind(n),e);return o(),a}function L2(r,t){const e=t.split(".");return()=>{let n=r;for(let s=0;s<e.length&&n;s++)n=n[e[s]];return n}}const Gf=Symbol("_vte"),Yf=r=>r.__isTeleport,sa=Symbol("_leaveCb");function Hc(r,t){r.shapeFlag&6&&r.component?(r.transition=t,Hc(r.component.subTree,t)):r.shapeFlag&128?(r.ssContent.transition=t.clone(r.ssContent),r.ssFallback.transition=t.clone(r.ssFallback)):r.transition=t}function Qe(r,t){return Tt(r)?Ne({name:r.name},t,{setup:r}):r}function M2(r){r.ids=[r.ids[0]+r.ids[2]+++"-",0,0]}function ia(r){const t=Vc(),e=Sf(null);if(t){const s=t.refs===Qt?t.refs={}:t.refs;Object.defineProperty(s,r,{enumerable:!0,get:()=>e.value,set:i=>e.value=i})}return e}function A1(r,t){let e;return!!((e=Object.getOwnPropertyDescriptor(r,t))&&!e.configurable)}const vl=new WeakMap;function no(r,t,e,n,s=!1){if(_t(r)){r.forEach((C,M)=>no(C,t&&(_t(t)?t[M]:t),e,n,s));return}if(ki(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&no(r,t,e,n.component.subTree);return}const i=n.shapeFlag&4?Zc(n.component):n.el,o=s?null:i,{i:a,r:c}=r,u=t&&t.r,d=a.refs===Qt?a.refs={}:a.refs,p=a.setupState,f=$t(p),g=p===Qt?Vh:C=>A1(d,C)?!1:Ft(f,C),b=(C,M)=>!(M&&A1(d,M));if(u!=null&&u!==c){if(S1(t),ne(u))d[u]=null,g(u)&&(p[u]=null);else if(le(u)){const C=t;b(u,C.k)&&(u.value=null),C.k&&(d[C.k]=null)}}if(Tt(c))No(c,a,12,[o,d]);else{const C=ne(c),M=le(c);if(C||M){const _=()=>{if(r.f){const S=C?g(c)?p[c]:d[c]:b()||!r.k?c.value:d[r.k];if(s)_t(S)&&Ec(S,i);else if(_t(S))S.includes(i)||S.push(i);else if(C)d[c]=[i],g(c)&&(p[c]=d[c]);else{const B=[i];b(c,r.k)&&(c.value=B),r.k&&(d[r.k]=B)}}else C?(d[c]=o,g(c)&&(p[c]=o)):M&&(b(c,r.k)&&(c.value=o),r.k&&(d[r.k]=o))};if(o){const S=()=>{_(),vl.delete(r)};S.id=-1,vl.set(r,S),Ge(S,e)}else S1(r),_()}}}function S1(r){const t=vl.get(r);t&&(t.flags|=8,vl.delete(r))}Ol().requestIdleCallback;Ol().cancelIdleCallback;const ki=r=>!!r.type.__asyncLoader,E2=r=>r.type.__isKeepAlive;function Qf(r,t){T2(r,"a",t)}function Xf(r,t){T2(r,"da",t)}function T2(r,t,e=Ie){const n=r.__wdc||(r.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return r()});if(Rl(t,n,e),e){let s=e.parent;for(;s&&s.parent;)E2(s.parent.vnode)&&Jf(n,t,e,s),s=s.parent}}function Jf(r,t,e,n){const s=Rl(t,r,n,!0);$c(()=>{Ec(n[t],s)},e)}function Rl(r,t,e=Ie,n=!1){if(e){const s=e[r]||(e[r]=[]),i=t.__weh||(t.__weh=(...o)=>{Nn();const a=So(e),c=Dr(t,e,r,o);return a(),An(),c});return n?s.unshift(i):s.push(i),i}}const qn=r=>(t,e=Ie)=>{(!bo||r==="sp")&&Rl(r,(...n)=>t(...n),e)},t3=qn("bm"),Ao=qn("m"),e3=qn("bu"),r3=qn("u"),n3=qn("bum"),$c=qn("um"),s3=qn("sp"),i3=qn("rtg"),o3=qn("rtc");function l3(r,t=Ie){Rl("ec",r,t)}const a3="components",N2=Symbol.for("v-ndc");function c3(r){return ne(r)?u3(a3,r,!1)||r:r||N2}function u3(r,t,e=!0,n=!1){const s=Ze||Ie;if(s){const i=s.type;{const a=K3(i,!1);if(a&&(a===t||a===Ke(t)||a===Sl(Ke(t))))return i}const o=O1(s[r]||i[r],t)||O1(s.appContext[r],t);return!o&&n?i:o}}function O1(r,t){return r&&(r[t]||r[Ke(t)]||r[Sl(Ke(t))])}function Zs(r,t,e,n){let s;const i=e,o=_t(r);if(o||ne(r)){const a=o&&En(r);let c=!1,u=!1;a&&(c=!cr(r),u=Sn(r),r=Il(r)),s=new Array(r.length);for(let d=0,p=r.length;d<p;d++)s[d]=t(c?u?Ti($r(r[d])):$r(r[d]):r[d],d,void 0,i)}else if(typeof r=="number"){s=new Array(r);for(let a=0;a<r;a++)s[a]=t(a+1,a,void 0,i)}else if(Wt(r))if(r[Symbol.iterator])s=Array.from(r,(a,c)=>t(a,c,void 0,i));else{const a=Object.keys(r);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const d=a[c];s[c]=t(r[d],d,c,i)}}else s=[];return s}function A2(r,t,e={},n,s){if(Ze.ce||Ze.parent&&ki(Ze.parent)&&Ze.parent.ce){const u=Object.keys(e).length>0;return Dt(),Fs(ve,null,[Ut("slot",e,n)],u?-2:64)}let i=r[t];i&&i._c&&(i._d=!1),Dt();const o=i&&S2(i(e)),a=e.key||o&&o.key,c=Fs(ve,{key:(a&&!ur(a)?a:`_${t}`)+(!o&&n?"_fb":"")},o||[],o&&r._===1?64:-2);return i&&i._c&&(i._d=!0),c}function S2(r){return r.some(t=>Uc(t)?!(t.type===On||t.type===ve&&!S2(t.children)):!0)?r:null}const $a=r=>r?Q2(r)?Zc(r):$a(r.parent):null,so=Ne(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>$a(r.parent),$root:r=>$a(r.root),$host:r=>r.ce,$emit:r=>r.emit,$options:r=>I2(r),$forceUpdate:r=>r.f||(r.f=()=>{Rc(r.update)}),$nextTick:r=>r.n||(r.n=qc.bind(r.proxy)),$watch:r=>Wf.bind(r)}),oa=(r,t)=>r!==Qt&&!r.__isScriptSetup&&Ft(r,t),h3={get({_:r},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:n,data:s,props:i,accessCache:o,type:a,appContext:c}=r;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return n[t];case 2:return s[t];case 4:return e[t];case 3:return i[t]}else{if(oa(n,t))return o[t]=1,n[t];if(s!==Qt&&Ft(s,t))return o[t]=2,s[t];if(Ft(i,t))return o[t]=3,i[t];if(e!==Qt&&Ft(e,t))return o[t]=4,e[t];Da&&(o[t]=0)}}const u=so[t];let d,p;if(u)return t==="$attrs"&&Se(r.attrs,"get",""),u(r);if((d=a.__cssModules)&&(d=d[t]))return d;if(e!==Qt&&Ft(e,t))return o[t]=4,e[t];if(p=c.config.globalProperties,Ft(p,t))return p[t]},set({_:r},t,e){const{data:n,setupState:s,ctx:i}=r;return oa(s,t)?(s[t]=e,!0):n!==Qt&&Ft(n,t)?(n[t]=e,!0):Ft(r.props,t)||t[0]==="$"&&t.slice(1)in r?!1:(i[t]=e,!0)},has({_:{data:r,setupState:t,accessCache:e,ctx:n,appContext:s,props:i,type:o}},a){let c;return!!(e[a]||r!==Qt&&a[0]!=="$"&&Ft(r,a)||oa(t,a)||Ft(i,a)||Ft(n,a)||Ft(so,a)||Ft(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(r,t,e){return e.get!=null?r._.accessCache[t]=0:Ft(e,"value")&&this.set(r,t,e.value,null),Reflect.defineProperty(r,t,e)}};function I1(r){return _t(r)?r.reduce((t,e)=>(t[e]=null,t),{}):r}let Da=!0;function d3(r){const t=I2(r),e=r.proxy,n=r.ctx;Da=!1,t.beforeCreate&&j1(t.beforeCreate,r,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:d,beforeMount:p,mounted:f,beforeUpdate:g,updated:b,activated:C,deactivated:M,beforeDestroy:_,beforeUnmount:S,destroyed:B,unmounted:q,render:H,renderTracked:lt,renderTriggered:dt,errorCaptured:ot,serverPrefetch:Ct,expose:xt,inheritAttrs:v,components:T,directives:w,filters:O}=t;if(u&&f3(u,n,null),o)for(const E in o){const I=o[E];Tt(I)&&(n[E]=I.bind(e))}if(s){const E=s.call(e,e);Wt(E)&&(r.data=jl(E))}if(Da=!0,i)for(const E in i){const I=i[E],$=Tt(I)?I.bind(e,e):Tt(I.get)?I.get.bind(e,e):tn,j=!Tt(I)&&Tt(I.set)?I.set.bind(e):tn,Y=Ye({get:$,set:j});Object.defineProperty(n,E,{enumerable:!0,configurable:!0,get:()=>Y.value,set:K=>Y.value=K})}if(a)for(const E in a)O2(a[E],n,e,E);if(c){const E=Tt(c)?c.call(e):c;Reflect.ownKeys(E).forEach(I=>{Ff(I,E[I])})}d&&j1(d,r,"c");function L(E,I){_t(I)?I.forEach($=>E($.bind(e))):I&&E(I.bind(e))}if(L(t3,p),L(Ao,f),L(e3,g),L(r3,b),L(Qf,C),L(Xf,M),L(l3,ot),L(o3,lt),L(i3,dt),L(n3,S),L($c,q),L(s3,Ct),_t(xt))if(xt.length){const E=r.exposed||(r.exposed={});xt.forEach(I=>{Object.defineProperty(E,I,{get:()=>e[I],set:$=>e[I]=$,enumerable:!0})})}else r.exposed||(r.exposed={});H&&r.render===tn&&(r.render=H),v!=null&&(r.inheritAttrs=v),T&&(r.components=T),w&&(r.directives=w),Ct&&M2(r)}function f3(r,t,e=tn){_t(r)&&(r=Pa(r));for(const n in r){const s=r[n];let i;Wt(s)?"default"in s?i=Ci(s.from||n,s.default,!0):i=Ci(s.from||n):i=Ci(s),le(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[n]=i}}function j1(r,t,e){Dr(_t(r)?r.map(n=>n.bind(t.proxy)):r.bind(t.proxy),t,e)}function O2(r,t,e,n){let s=n.includes(".")?L2(e,n):()=>e[n];if(ne(r)){const i=t[r];Tt(i)&&Tn(s,i)}else if(Tt(r))Tn(s,r.bind(e));else if(Wt(r))if(_t(r))r.forEach(i=>O2(i,t,e,n));else{const i=Tt(r.handler)?r.handler.bind(e):t[r.handler];Tt(i)&&Tn(s,i,r)}}function I2(r){const t=r.type,{mixins:e,extends:n}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=r.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!e&&!n?c=t:(c={},s.length&&s.forEach(u=>wl(c,u,o,!0)),wl(c,t,o)),Wt(t)&&i.set(t,c),c}function wl(r,t,e,n=!1){const{mixins:s,extends:i}=t;i&&wl(r,i,e,!0),s&&s.forEach(o=>wl(r,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=p3[o]||e&&e[o];r[o]=a?a(r[o],t[o]):t[o]}return r}const p3={data:B1,props:q1,emits:q1,methods:Wi,computed:Wi,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:Wi,directives:Wi,watch:m3,provide:B1,inject:g3};function B1(r,t){return t?r?function(){return Ne(Tt(r)?r.call(this,this):r,Tt(t)?t.call(this,this):t)}:t:r}function g3(r,t){return Wi(Pa(r),Pa(t))}function Pa(r){if(_t(r)){const t={};for(let e=0;e<r.length;e++)t[r[e]]=r[e];return t}return r}function Ue(r,t){return r?[...new Set([].concat(r,t))]:t}function Wi(r,t){return r?Ne(Object.create(null),r,t):t}function q1(r,t){return r?_t(r)&&_t(t)?[...new Set([...r,...t])]:Ne(Object.create(null),I1(r),I1(t??{})):t}function m3(r,t){if(!r)return t;if(!t)return r;const e=Ne(Object.create(null),r);for(const n in t)e[n]=Ue(r[n],t[n]);return e}function j2(){return{app:null,config:{isNativeTag:Vh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let v3=0;function w3(r,t){return function(n,s=null){Tt(n)||(n=Ne({},n)),s!=null&&!Wt(s)&&(s=null);const i=j2(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:v3++,_component:n,_props:s,_container:null,_context:i,_instance:null,version:G3,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&Tt(d.install)?(o.add(d),d.install(u,...p)):Tt(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,f){if(!c){const g=u._ceVNode||Ut(n,s);return g.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),r(g,d,f),c=!0,u._container=d,d.__vue_app__=u,Zc(g.component)}},onUnmount(d){a.push(d)},unmount(){c&&(Dr(a,u._instance,16),r(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=zs;zs=u;try{return d()}finally{zs=p}}};return u}}let zs=null;const b3=(r,t)=>t==="modelValue"||t==="model-value"?r.modelModifiers:r[`${t}Modifiers`]||r[`${Ke(t)}Modifiers`]||r[`${Qs(t)}Modifiers`];function y3(r,t,...e){if(r.isUnmounted)return;const n=r.vnode.props||Qt;let s=e;const i=t.startsWith("update:"),o=i&&b3(n,t.slice(7));o&&(o.trim&&(s=e.map(d=>ne(d)?d.trim():d)),o.number&&(s=e.map(rf)));let a,c=n[a=Ql(t)]||n[a=Ql(Ke(t))];!c&&i&&(c=n[a=Ql(Qs(t))]),c&&Dr(c,r,6,s);const u=n[a+"Once"];if(u){if(!r.emitted)r.emitted={};else if(r.emitted[a])return;r.emitted[a]=!0,Dr(u,r,6,s)}}const C3=new WeakMap;function B2(r,t,e=!1){const n=e?C3:t.emitsCache,s=n.get(r);if(s!==void 0)return s;const i=r.emits;let o={},a=!1;if(!Tt(r)){const c=u=>{const d=B2(u,t,!0);d&&(a=!0,Ne(o,d))};!e&&t.mixins.length&&t.mixins.forEach(c),r.extends&&c(r.extends),r.mixins&&r.mixins.forEach(c)}return!i&&!a?(Wt(r)&&n.set(r,null),null):(_t(i)?i.forEach(c=>o[c]=null):Ne(o,i),Wt(r)&&n.set(r,o),o)}function Hl(r,t){return!r||!El(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ft(r,t[0].toLowerCase()+t.slice(1))||Ft(r,Qs(t))||Ft(r,t))}function R1(r){const{type:t,vnode:e,proxy:n,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:d,props:p,data:f,setupState:g,ctx:b,inheritAttrs:C}=r,M=ml(r);let _,S;try{if(e.shapeFlag&4){const q=s||n,H=q;_=Yr(u.call(H,q,d,p,g,f,b)),S=a}else{const q=t;_=Yr(q.length>1?q(p,{attrs:a,slots:o,emit:c}):q(p,null)),S=t.props?a:k3(a)}}catch(q){io.length=0,ql(q,r,1),_=Ut(On)}let B=_;if(S&&C!==!1){const q=Object.keys(S),{shapeFlag:H}=B;q.length&&H&7&&(i&&q.some(Tl)&&(S=x3(S,i)),B=Ni(B,S,!1,!0))}return e.dirs&&(B=Ni(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(e.dirs):e.dirs),e.transition&&Hc(B,e.transition),_=B,ml(M),_}const k3=r=>{let t;for(const e in r)(e==="class"||e==="style"||El(e))&&((t||(t={}))[e]=r[e]);return t},x3=(r,t)=>{const e={};for(const n in r)(!Tl(n)||!(n.slice(9)in t))&&(e[n]=r[n]);return e};function _3(r,t,e){const{props:n,children:s,component:i}=r,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&c>=0){if(c&1024)return!0;if(c&16)return n?H1(n,o,u):!!o;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const f=d[p];if(q2(o,n,f)&&!Hl(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?H1(n,o,u):!0:!!o;return!1}function H1(r,t,e){const n=Object.keys(t);if(n.length!==Object.keys(r).length)return!0;for(let s=0;s<n.length;s++){const i=n[s];if(q2(t,r,i)&&!Hl(e,i))return!0}return!1}function q2(r,t,e){const n=r[e],s=t[e];return e==="style"&&Wt(n)&&Wt(s)?!Tc(n,s):n!==s}function L3({vnode:r,parent:t,suspense:e},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===r&&(s.suspense.vnode.el=s.el=n,r=s),s===r)(r=t.vnode).el=n,t=t.parent;else break}e&&e.activeBranch===r&&(e.vnode.el=n)}const R2={},H2=()=>Object.create(R2),$2=r=>Object.getPrototypeOf(r)===R2;function M3(r,t,e,n=!1){const s={},i=H2();r.propsDefaults=Object.create(null),D2(r,t,s,i);for(const o in r.propsOptions[0])o in s||(s[o]=void 0);e?r.props=n?s:Af(s):r.type.props?r.props=s:r.props=i,r.attrs=i}function E3(r,t,e,n){const{props:s,attrs:i,vnode:{patchFlag:o}}=r,a=$t(s),[c]=r.propsOptions;let u=!1;if((n||o>0)&&!(o&16)){if(o&8){const d=r.vnode.dynamicProps;for(let p=0;p<d.length;p++){let f=d[p];if(Hl(r.emitsOptions,f))continue;const g=t[f];if(c)if(Ft(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const b=Ke(f);s[b]=Ua(c,a,b,g,r,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{D2(r,t,s,i)&&(u=!0);let d;for(const p in a)(!t||!Ft(t,p)&&((d=Qs(p))===p||!Ft(t,d)))&&(c?e&&(e[p]!==void 0||e[d]!==void 0)&&(s[p]=Ua(c,a,p,void 0,r,!0)):delete s[p]);if(i!==a)for(const p in i)(!t||!Ft(t,p))&&(delete i[p],u=!0)}u&&Mn(r.attrs,"set","")}function D2(r,t,e,n){const[s,i]=r.propsOptions;let o=!1,a;if(t)for(let c in t){if(to(c))continue;const u=t[c];let d;s&&Ft(s,d=Ke(c))?!i||!i.includes(d)?e[d]=u:(a||(a={}))[d]=u:Hl(r.emitsOptions,c)||(!(c in n)||u!==n[c])&&(n[c]=u,o=!0)}if(i){const c=$t(e),u=a||Qt;for(let d=0;d<i.length;d++){const p=i[d];e[p]=Ua(s,c,p,u[p],r,!Ft(u,p))}}return o}function Ua(r,t,e,n,s,i){const o=r[e];if(o!=null){const a=Ft(o,"default");if(a&&n===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Tt(c)){const{propsDefaults:u}=s;if(e in u)n=u[e];else{const d=So(s);n=u[e]=c.call(null,t),d()}}else n=c;s.ce&&s.ce._setProp(e,n)}o[0]&&(i&&!a?n=!1:o[1]&&(n===""||n===Qs(e))&&(n=!0))}return n}const T3=new WeakMap;function P2(r,t,e=!1){const n=e?T3:t.propsCache,s=n.get(r);if(s)return s;const i=r.props,o={},a=[];let c=!1;if(!Tt(r)){const d=p=>{c=!0;const[f,g]=P2(p,t,!0);Ne(o,f),g&&a.push(...g)};!e&&t.mixins.length&&t.mixins.forEach(d),r.extends&&d(r.extends),r.mixins&&r.mixins.forEach(d)}if(!i&&!c)return Wt(r)&&n.set(r,wi),wi;if(_t(i))for(let d=0;d<i.length;d++){const p=Ke(i[d]);$1(p)&&(o[p]=Qt)}else if(i)for(const d in i){const p=Ke(d);if($1(p)){const f=i[d],g=o[p]=_t(f)||Tt(f)?{type:f}:Ne({},f),b=g.type;let C=!1,M=!0;if(_t(b))for(let _=0;_<b.length;++_){const S=b[_],B=Tt(S)&&S.name;if(B==="Boolean"){C=!0;break}else B==="String"&&(M=!1)}else C=Tt(b)&&b.name==="Boolean";g[0]=C,g[1]=M,(C||Ft(g,"default"))&&a.push(p)}}const u=[o,a];return Wt(r)&&n.set(r,u),u}function $1(r){return r[0]!=="$"&&!to(r)}const Dc=r=>r==="_"||r==="_ctx"||r==="$stable",Pc=r=>_t(r)?r.map(Yr):[Yr(r)],N3=(r,t,e)=>{if(t._n)return t;const n=Pr((...s)=>Pc(t(...s)),e);return n._c=!1,n},U2=(r,t,e)=>{const n=r._ctx;for(const s in r){if(Dc(s))continue;const i=r[s];if(Tt(i))t[s]=N3(s,i,n);else if(i!=null){const o=Pc(i);t[s]=()=>o}}},z2=(r,t)=>{const e=Pc(t);r.slots.default=()=>e},F2=(r,t,e)=>{for(const n in t)(e||!Dc(n))&&(r[n]=t[n])},A3=(r,t,e)=>{const n=r.slots=H2();if(r.vnode.shapeFlag&32){const s=t._;s?(F2(n,t,e),e&&Yh(n,"_",s,!0)):U2(t,n)}else t&&z2(r,t)},S3=(r,t,e)=>{const{vnode:n,slots:s}=r;let i=!0,o=Qt;if(n.shapeFlag&32){const a=t._;a?e&&a===1?i=!1:F2(s,t,e):(i=!t.$stable,U2(t,s)),o=t}else t&&(z2(r,t),o={default:1});if(i)for(const a in s)!Dc(a)&&o[a]==null&&delete s[a]},Ge=q3;function O3(r){return I3(r)}function I3(r,t){const e=Ol();e.__VUE__=!0;const{insert:n,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:f,setScopeId:g=tn,insertStaticContent:b}=r,C=(y,x,A,R=null,P=null,U=null,tt=void 0,Q=null,W=!!x.dynamicChildren)=>{if(y===x)return;y&&!Ui(y,x)&&(R=kt(y),K(y,P,U,!0),y=null),x.patchFlag===-2&&(W=!1,x.dynamicChildren=null);const{type:V,ref:vt,shapeFlag:et}=x;switch(V){case $l:M(y,x,A,R);break;case On:_(y,x,A,R);break;case il:y==null&&S(x,A,R,tt);break;case ve:T(y,x,A,R,P,U,tt,Q,W);break;default:et&1?H(y,x,A,R,P,U,tt,Q,W):et&6?w(y,x,A,R,P,U,tt,Q,W):(et&64||et&128)&&V.process(y,x,A,R,P,U,tt,Q,W,at)}vt!=null&&P?no(vt,y&&y.ref,U,x||y,!x):vt==null&&y&&y.ref!=null&&no(y.ref,null,U,y,!0)},M=(y,x,A,R)=>{if(y==null)n(x.el=a(x.children),A,R);else{const P=x.el=y.el;x.children!==y.children&&u(P,x.children)}},_=(y,x,A,R)=>{y==null?n(x.el=c(x.children||""),A,R):x.el=y.el},S=(y,x,A,R)=>{[y.el,y.anchor]=b(y.children,x,A,R,y.el,y.anchor)},B=({el:y,anchor:x},A,R)=>{let P;for(;y&&y!==x;)P=f(y),n(y,A,R),y=P;n(x,A,R)},q=({el:y,anchor:x})=>{let A;for(;y&&y!==x;)A=f(y),s(y),y=A;s(x)},H=(y,x,A,R,P,U,tt,Q,W)=>{if(x.type==="svg"?tt="svg":x.type==="math"&&(tt="mathml"),y==null)lt(x,A,R,P,U,tt,Q,W);else{const V=y.el&&y.el._isVueCE?y.el:null;try{V&&V._beginPatch(),Ct(y,x,P,U,tt,Q,W)}finally{V&&V._endPatch()}}},lt=(y,x,A,R,P,U,tt,Q)=>{let W,V;const{props:vt,shapeFlag:et,transition:st,dirs:wt}=y;if(W=y.el=o(y.type,U,vt&&vt.is,vt),et&8?d(W,y.children):et&16&&ot(y.children,W,null,R,P,la(y,U),tt,Q),wt&&$s(y,null,R,"created"),dt(W,y,y.scopeId,tt,R),vt){for(const Lt in vt)Lt!=="value"&&!to(Lt)&&i(W,Lt,null,vt[Lt],U,R);"value"in vt&&i(W,"value",null,vt.value,U),(V=vt.onVnodeBeforeMount)&&Zr(V,R,y)}wt&&$s(y,null,R,"beforeMount");const Nt=j3(P,st);Nt&&st.beforeEnter(W),n(W,x,A),((V=vt&&vt.onVnodeMounted)||Nt||wt)&&Ge(()=>{try{V&&Zr(V,R,y),Nt&&st.enter(W),wt&&$s(y,null,R,"mounted")}finally{}},P)},dt=(y,x,A,R,P)=>{if(A&&g(y,A),R)for(let U=0;U<R.length;U++)g(y,R[U]);if(P){let U=P.subTree;if(x===U||W2(U.type)&&(U.ssContent===x||U.ssFallback===x)){const tt=P.vnode;dt(y,tt,tt.scopeId,tt.slotScopeIds,P.parent)}}},ot=(y,x,A,R,P,U,tt,Q,W=0)=>{for(let V=W;V<y.length;V++){const vt=y[V]=Q?Ln(y[V]):Yr(y[V]);C(null,vt,x,A,R,P,U,tt,Q)}},Ct=(y,x,A,R,P,U,tt)=>{const Q=x.el=y.el;let{patchFlag:W,dynamicChildren:V,dirs:vt}=x;W|=y.patchFlag&16;const et=y.props||Qt,st=x.props||Qt;let wt;if(A&&Ds(A,!1),(wt=st.onVnodeBeforeUpdate)&&Zr(wt,A,x,y),vt&&$s(x,y,A,"beforeUpdate"),A&&Ds(A,!0),(et.innerHTML&&st.innerHTML==null||et.textContent&&st.textContent==null)&&d(Q,""),V?xt(y.dynamicChildren,V,Q,A,R,la(x,P),U):tt||I(y,x,Q,null,A,R,la(x,P),U,!1),W>0){if(W&16)v(Q,et,st,A,P);else if(W&2&&et.class!==st.class&&i(Q,"class",null,st.class,P),W&4&&i(Q,"style",et.style,st.style,P),W&8){const Nt=x.dynamicProps;for(let Lt=0;Lt<Nt.length;Lt++){const Et=Nt[Lt],Ht=et[Et],Mt=st[Et];(Mt!==Ht||Et==="value")&&i(Q,Et,Ht,Mt,P,A)}}W&1&&y.children!==x.children&&d(Q,x.children)}else!tt&&V==null&&v(Q,et,st,A,P);((wt=st.onVnodeUpdated)||vt)&&Ge(()=>{wt&&Zr(wt,A,x,y),vt&&$s(x,y,A,"updated")},R)},xt=(y,x,A,R,P,U,tt)=>{for(let Q=0;Q<x.length;Q++){const W=y[Q],V=x[Q],vt=W.el&&(W.type===ve||!Ui(W,V)||W.shapeFlag&198)?p(W.el):A;C(W,V,vt,null,R,P,U,tt,!0)}},v=(y,x,A,R,P)=>{if(x!==A){if(x!==Qt)for(const U in x)!to(U)&&!(U in A)&&i(y,U,x[U],null,P,R);for(const U in A){if(to(U))continue;const tt=A[U],Q=x[U];tt!==Q&&U!=="value"&&i(y,U,Q,tt,P,R)}"value"in A&&i(y,"value",x.value,A.value,P)}},T=(y,x,A,R,P,U,tt,Q,W)=>{const V=x.el=y?y.el:a(""),vt=x.anchor=y?y.anchor:a("");let{patchFlag:et,dynamicChildren:st,slotScopeIds:wt}=x;wt&&(Q=Q?Q.concat(wt):wt),y==null?(n(V,A,R),n(vt,A,R),ot(x.children||[],A,vt,P,U,tt,Q,W)):et>0&&et&64&&st&&y.dynamicChildren&&y.dynamicChildren.length===st.length?(xt(y.dynamicChildren,st,A,P,U,tt,Q),(x.key!=null||P&&x===P.subTree)&&V2(y,x,!0)):I(y,x,A,vt,P,U,tt,Q,W)},w=(y,x,A,R,P,U,tt,Q,W)=>{x.slotScopeIds=Q,y==null?x.shapeFlag&512?P.ctx.activate(x,A,R,tt,W):O(x,A,R,P,U,tt,W):N(y,x,W)},O=(y,x,A,R,P,U,tt)=>{const Q=y.component=U3(y,R,P);if(E2(y)&&(Q.ctx.renderer=at),z3(Q,!1,tt),Q.asyncDep){if(P&&P.registerDep(Q,L,tt),!y.el){const W=Q.subTree=Ut(On);_(null,W,x,A),y.placeholder=W.el}}else L(Q,y,x,A,P,U,tt)},N=(y,x,A)=>{const R=x.component=y.component;if(_3(y,x,A))if(R.asyncDep&&!R.asyncResolved){E(R,x,A);return}else R.next=x,R.update();else x.el=y.el,R.vnode=x},L=(y,x,A,R,P,U,tt)=>{const Q=()=>{if(y.isMounted){let{next:et,bu:st,u:wt,parent:Nt,vnode:Lt}=y;{const ge=Z2(y);if(ge){et&&(et.el=Lt.el,E(y,et,tt)),ge.asyncDep.then(()=>{Ge(()=>{y.isUnmounted||V()},P)});return}}let Et=et,Ht;Ds(y,!1),et?(et.el=Lt.el,E(y,et,tt)):et=Lt,st&&Xl(st),(Ht=et.props&&et.props.onVnodeBeforeUpdate)&&Zr(Ht,Nt,et,Lt),Ds(y,!0);const Mt=R1(y),pe=y.subTree;y.subTree=Mt,C(pe,Mt,p(pe.el),kt(pe),y,P,U),et.el=Mt.el,Et===null&&L3(y,Mt.el),wt&&Ge(wt,P),(Ht=et.props&&et.props.onVnodeUpdated)&&Ge(()=>Zr(Ht,Nt,et,Lt),P)}else{let et;const{el:st,props:wt}=x,{bm:Nt,m:Lt,parent:Et,root:Ht,type:Mt}=y,pe=ki(x);Ds(y,!1),Nt&&Xl(Nt),!pe&&(et=wt&&wt.onVnodeBeforeMount)&&Zr(et,Et,x),Ds(y,!0);{Ht.ce&&Ht.ce._hasShadowRoot()&&Ht.ce._injectChildStyle(Mt,y.parent?y.parent.type:void 0);const ge=y.subTree=R1(y);C(null,ge,A,R,y,P,U),x.el=ge.el}if(Lt&&Ge(Lt,P),!pe&&(et=wt&&wt.onVnodeMounted)){const ge=x;Ge(()=>Zr(et,Et,ge),P)}(x.shapeFlag&256||Et&&ki(Et.vnode)&&Et.vnode.shapeFlag&256)&&y.a&&Ge(y.a,P),y.isMounted=!0,x=A=R=null}};y.scope.on();const W=y.effect=new n2(Q);y.scope.off();const V=y.update=W.run.bind(W),vt=y.job=W.runIfDirty.bind(W);vt.i=y,vt.id=y.uid,W.scheduler=()=>Rc(vt),Ds(y,!0),V()},E=(y,x,A)=>{x.component=y;const R=y.vnode.props;y.vnode=x,y.next=null,E3(y,x.props,R,A),S3(y,x.children,A),Nn(),N1(y),An()},I=(y,x,A,R,P,U,tt,Q,W=!1)=>{const V=y&&y.children,vt=y?y.shapeFlag:0,et=x.children,{patchFlag:st,shapeFlag:wt}=x;if(st>0){if(st&128){j(V,et,A,R,P,U,tt,Q,W);return}else if(st&256){$(V,et,A,R,P,U,tt,Q,W);return}}wt&8?(vt&16&&yt(V,P,U),et!==V&&d(A,et)):vt&16?wt&16?j(V,et,A,R,P,U,tt,Q,W):yt(V,P,U,!0):(vt&8&&d(A,""),wt&16&&ot(et,A,R,P,U,tt,Q,W))},$=(y,x,A,R,P,U,tt,Q,W)=>{y=y||wi,x=x||wi;const V=y.length,vt=x.length,et=Math.min(V,vt);let st;for(st=0;st<et;st++){const wt=x[st]=W?Ln(x[st]):Yr(x[st]);C(y[st],wt,A,null,P,U,tt,Q,W)}V>vt?yt(y,P,U,!0,!1,et):ot(x,A,R,P,U,tt,Q,W,et)},j=(y,x,A,R,P,U,tt,Q,W)=>{let V=0;const vt=x.length;let et=y.length-1,st=vt-1;for(;V<=et&&V<=st;){const wt=y[V],Nt=x[V]=W?Ln(x[V]):Yr(x[V]);if(Ui(wt,Nt))C(wt,Nt,A,null,P,U,tt,Q,W);else break;V++}for(;V<=et&&V<=st;){const wt=y[et],Nt=x[st]=W?Ln(x[st]):Yr(x[st]);if(Ui(wt,Nt))C(wt,Nt,A,null,P,U,tt,Q,W);else break;et--,st--}if(V>et){if(V<=st){const wt=st+1,Nt=wt<vt?x[wt].el:R;for(;V<=st;)C(null,x[V]=W?Ln(x[V]):Yr(x[V]),A,Nt,P,U,tt,Q,W),V++}}else if(V>st)for(;V<=et;)K(y[V],P,U,!0),V++;else{const wt=V,Nt=V,Lt=new Map;for(V=Nt;V<=st;V++){const Yt=x[V]=W?Ln(x[V]):Yr(x[V]);Yt.key!=null&&Lt.set(Yt.key,V)}let Et,Ht=0;const Mt=st-Nt+1;let pe=!1,ge=0;const Xe=new Array(Mt);for(V=0;V<Mt;V++)Xe[V]=0;for(V=wt;V<=et;V++){const Yt=y[V];if(Ht>=Mt){K(Yt,P,U,!0);continue}let me;if(Yt.key!=null)me=Lt.get(Yt.key);else for(Et=Nt;Et<=st;Et++)if(Xe[Et-Nt]===0&&Ui(Yt,x[Et])){me=Et;break}me===void 0?K(Yt,P,U,!0):(Xe[me-Nt]=V+1,me>=ge?ge=me:pe=!0,C(Yt,x[me],A,null,P,U,tt,Q,W),Ht++)}const We=pe?B3(Xe):wi;for(Et=We.length-1,V=Mt-1;V>=0;V--){const Yt=Nt+V,me=x[Yt],Ae=x[Yt+1],xe=Yt+1<vt?Ae.el||K2(Ae):R;Xe[V]===0?C(null,me,A,xe,P,U,tt,Q,W):pe&&(Et<0||V!==We[Et]?Y(me,A,xe,2):Et--)}}},Y=(y,x,A,R,P=null)=>{const{el:U,type:tt,transition:Q,children:W,shapeFlag:V}=y;if(V&6){Y(y.component.subTree,x,A,R);return}if(V&128){y.suspense.move(x,A,R);return}if(V&64){tt.move(y,x,A,at);return}if(tt===ve){n(U,x,A);for(let et=0;et<W.length;et++)Y(W[et],x,A,R);n(y.anchor,x,A);return}if(tt===il){B(y,x,A);return}if(R!==2&&V&1&&Q)if(R===0)Q.persisted&&!U[sa]?n(U,x,A):(Q.beforeEnter(U),n(U,x,A),Ge(()=>Q.enter(U),P));else{const{leave:et,delayLeave:st,afterLeave:wt}=Q,Nt=()=>{y.ctx.isUnmounted?s(U):n(U,x,A)},Lt=()=>{const Et=U._isLeaving||!!U[sa];U._isLeaving&&U[sa](!0),Q.persisted&&!Et?Nt():et(U,()=>{Nt(),wt&&wt()})};st?st(U,Nt,Lt):Lt()}else n(U,x,A)},K=(y,x,A,R=!1,P=!1)=>{const{type:U,props:tt,ref:Q,children:W,dynamicChildren:V,shapeFlag:vt,patchFlag:et,dirs:st,cacheIndex:wt,memo:Nt}=y;if(et===-2&&(P=!1),Q!=null&&(Nn(),no(Q,null,A,y,!0),An()),wt!=null&&(x.renderCache[wt]=void 0),vt&256){x.ctx.deactivate(y);return}const Lt=vt&1&&st,Et=!ki(y);let Ht;if(Et&&(Ht=tt&&tt.onVnodeBeforeUnmount)&&Zr(Ht,x,y),vt&6)Z(y.component,A,R);else{if(vt&128){y.suspense.unmount(A,R);return}Lt&&$s(y,null,x,"beforeUnmount"),vt&64?y.type.remove(y,x,A,at,R):V&&!V.hasOnce&&(U!==ve||et>0&&et&64)?yt(V,x,A,!1,!0):(U===ve&&et&384||!P&&vt&16)&&yt(W,x,A),R&&rt(y)}const Mt=Nt!=null&&wt==null;(Et&&(Ht=tt&&tt.onVnodeUnmounted)||Lt||Mt)&&Ge(()=>{Ht&&Zr(Ht,x,y),Lt&&$s(y,null,x,"unmounted"),Mt&&(y.el=null)},A)},rt=y=>{const{type:x,el:A,anchor:R,transition:P}=y;if(x===ve){nt(A,R);return}if(x===il){q(y);return}const U=()=>{s(A),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(y.shapeFlag&1&&P&&!P.persisted){const{leave:tt,delayLeave:Q}=P,W=()=>tt(A,U);Q?Q(y.el,U,W):W()}else U()},nt=(y,x)=>{let A;for(;y!==x;)A=f(y),s(y),y=A;s(x)},Z=(y,x,A)=>{const{bum:R,scope:P,job:U,subTree:tt,um:Q,m:W,a:V}=y;D1(W),D1(V),R&&Xl(R),P.stop(),U&&(U.flags|=8,K(tt,y,x,A)),Q&&Ge(Q,x),Ge(()=>{y.isUnmounted=!0},x)},yt=(y,x,A,R=!1,P=!1,U=0)=>{for(let tt=U;tt<y.length;tt++)K(y[tt],x,A,R,P)},kt=y=>{if(y.shapeFlag&6)return kt(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const x=f(y.anchor||y.el),A=x&&x[Gf];return A?f(A):x};let J=!1;const ft=(y,x,A)=>{let R;y==null?x._vnode&&(K(x._vnode,null,null,!0),R=x._vnode.component):C(x._vnode||null,y,x,null,null,null,A),x._vnode=y,J||(J=!0,N1(R),C2(),J=!1)},at={p:C,um:K,m:Y,r:rt,mt:O,mc:ot,pc:I,pbc:xt,n:kt,o:r};return{render:ft,hydrate:void 0,createApp:w3(ft)}}function la({type:r,props:t},e){return e==="svg"&&r==="foreignObject"||e==="mathml"&&r==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ds({effect:r,job:t},e){e?(r.flags|=32,t.flags|=4):(r.flags&=-33,t.flags&=-5)}function j3(r,t){return(!r||r&&!r.pendingBranch)&&t&&!t.persisted}function V2(r,t,e=!1){const n=r.children,s=t.children;if(_t(n)&&_t(s))for(let i=0;i<n.length;i++){const o=n[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ln(s[i]),a.el=o.el),!e&&a.patchFlag!==-2&&V2(o,a)),a.type===$l&&(a.patchFlag===-1&&(a=s[i]=Ln(a)),a.el=o.el),a.type===On&&!a.el&&(a.el=o.el)}}function B3(r){const t=r.slice(),e=[0];let n,s,i,o,a;const c=r.length;for(n=0;n<c;n++){const u=r[n];if(u!==0){if(s=e[e.length-1],r[s]<u){t[n]=s,e.push(n);continue}for(i=0,o=e.length-1;i<o;)a=i+o>>1,r[e[a]]<u?i=a+1:o=a;u<r[e[i]]&&(i>0&&(t[n]=e[i-1]),e[i]=n)}}for(i=e.length,o=e[i-1];i-- >0;)e[i]=o,o=t[o];return e}function Z2(r){const t=r.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Z2(t)}function D1(r){if(r)for(let t=0;t<r.length;t++)r[t].flags|=8}function K2(r){if(r.placeholder)return r.placeholder;const t=r.component;return t?K2(t.subTree):null}const W2=r=>r.__isSuspense;function q3(r,t){t&&t.pendingBranch?_t(r)?t.effects.push(...r):t.effects.push(r):zf(r)}const ve=Symbol.for("v-fgt"),$l=Symbol.for("v-txt"),On=Symbol.for("v-cmt"),il=Symbol.for("v-stc"),io=[];let lr=null;function Dt(r=!1){io.push(lr=r?null:[])}function R3(){io.pop(),lr=io[io.length-1]||null}let wo=1;function P1(r,t=!1){wo+=r,r<0&&lr&&t&&(lr.hasOnce=!0)}function G2(r){return r.dynamicChildren=wo>0?lr||wi:null,R3(),wo>0&&lr&&lr.push(r),r}function re(r,t,e,n,s,i){return G2(F(r,t,e,n,s,i,!0))}function Fs(r,t,e,n,s){return G2(Ut(r,t,e,n,s,!0))}function Uc(r){return r?r.__v_isVNode===!0:!1}function Ui(r,t){return r.type===t.type&&r.key===t.key}const Y2=({key:r})=>r??null,ol=({ref:r,ref_key:t,ref_for:e})=>(typeof r=="number"&&(r=""+r),r!=null?ne(r)||le(r)||Tt(r)?{i:Ze,r,k:t,f:!!e}:r:null);function F(r,t=null,e=null,n=0,s=null,i=r===ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:r,props:t,key:t&&Y2(t),ref:t&&ol(t),scopeId:x2,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return a?(Fc(c,e),i&128&&r.normalize(c)):e&&(c.shapeFlag|=ne(e)?8:16),wo>0&&!o&&lr&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&lr.push(c),c}const Ut=H3;function H3(r,t=null,e=null,n=0,s=null,i=!1){if((!r||r===N2)&&(r=On),Uc(r)){const a=Ni(r,t,!0);return e&&Fc(a,e),wo>0&&!i&&lr&&(a.shapeFlag&6?lr[lr.indexOf(r)]=a:lr.push(a)),a.patchFlag=-2,a}if(W3(r)&&(r=r.__vccOpts),t){t=$3(t);let{class:a,style:c}=t;a&&!ne(a)&&(t.class=or(a)),Wt(c)&&(Bl(c)&&!_t(c)&&(c=Ne({},c)),t.style=Yn(c))}const o=ne(r)?1:W2(r)?128:Yf(r)?64:Wt(r)?4:Tt(r)?2:0;return F(r,t,e,n,s,o,i,!0)}function $3(r){return r?Bl(r)||$2(r)?Ne({},r):r:null}function Ni(r,t,e=!1,n=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=r,u=t?oo(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:r.type,props:u,key:u&&Y2(u),ref:t&&t.ref?e&&i?_t(i)?i.concat(ol(t)):[i,ol(t)]:ol(t):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:a,target:r.target,targetStart:r.targetStart,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:t&&r.type!==ve?o===-1?16:o|16:o,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:c,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Ni(r.ssContent),ssFallback:r.ssFallback&&Ni(r.ssFallback),placeholder:r.placeholder,el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce};return c&&n&&Hc(d,c.clone(d)),d}function Oe(r=" ",t=0){return Ut($l,null,r,t)}function zc(r,t){const e=Ut(il,null,r);return e.staticCount=t,e}function U1(r="",t=!1){return t?(Dt(),Fs(On,null,r)):Ut(On,null,r)}function Yr(r){return r==null||typeof r=="boolean"?Ut(On):_t(r)?Ut(ve,null,r.slice()):Uc(r)?Ln(r):Ut($l,null,String(r))}function Ln(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Ni(r)}function Fc(r,t){let e=0;const{shapeFlag:n}=r;if(t==null)t=null;else if(_t(t))e=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),Fc(r,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!$2(t)?t._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,r.patchFlag|=1024))}else Tt(t)?(t={default:t,_ctx:Ze},e=32):(t=String(t),n&64?(e=16,t=[Oe(t)]):e=8);r.children=t,r.shapeFlag|=e}function oo(...r){const t={};for(let e=0;e<r.length;e++){const n=r[e];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=or([t.class,n.class]));else if(s==="style")t.style=Yn([t.style,n.style]);else if(El(s)){const i=t[s],o=n[s];o&&i!==o&&!(_t(i)&&i.includes(o))?t[s]=i?[].concat(i,o):o:o==null&&i==null&&!Tl(s)&&(t[s]=o)}else s!==""&&(t[s]=n[s])}return t}function Zr(r,t,e,n=null){Dr(r,t,7,[e,n])}const D3=j2();let P3=0;function U3(r,t,e){const n=r.type,s=(t?t.appContext:r.appContext)||D3,i={uid:P3++,vnode:r,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new t2(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:P2(n,s),emitsOptions:B2(n,s),emit:null,emitted:null,propsDefaults:Qt,inheritAttrs:n.inheritAttrs,ctx:Qt,data:Qt,props:Qt,attrs:Qt,slots:Qt,refs:Qt,setupState:Qt,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=y3.bind(null,i),r.ce&&r.ce(i),i}let Ie=null;const Vc=()=>Ie||Ze;let bl,za;{const r=Ol(),t=(e,n)=>{let s;return(s=r[e])||(s=r[e]=[]),s.push(n),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};bl=t("__VUE_INSTANCE_SETTERS__",e=>Ie=e),za=t("__VUE_SSR_SETTERS__",e=>bo=e)}const So=r=>{const t=Ie;return bl(r),r.scope.on(),()=>{r.scope.off(),bl(t)}},z1=()=>{Ie&&Ie.scope.off(),bl(null)};function Q2(r){return r.vnode.shapeFlag&4}let bo=!1;function z3(r,t=!1,e=!1){t&&za(t);const{props:n,children:s}=r.vnode,i=Q2(r);M3(r,n,i,t),A3(r,s,e||t);const o=i?F3(r,t):void 0;return t&&za(!1),o}function F3(r,t){const e=r.type;r.accessCache=Object.create(null),r.proxy=new Proxy(r.ctx,h3);const{setup:n}=e;if(n){Nn();const s=r.setupContext=n.length>1?Z3(r):null,i=So(r),o=No(n,r,0,[r.props,s]),a=Kh(o);if(An(),i(),(a||r.sp)&&!ki(r)&&M2(r),a){if(o.then(z1,z1),t)return o.then(c=>{F1(r,c)}).catch(c=>{ql(c,r,0)});r.asyncDep=o}else F1(r,o)}else X2(r)}function F1(r,t,e){Tt(t)?r.type.__ssrInlineRender?r.ssrRender=t:r.render=t:Wt(t)&&(r.setupState=w2(t)),X2(r)}function X2(r,t,e){const n=r.type;r.render||(r.render=n.render||tn);{const s=So(r);Nn();try{d3(r)}finally{An(),s()}}}const V3={get(r,t){return Se(r,"get",""),r[t]}};function Z3(r){const t=e=>{r.exposed=e||{}};return{attrs:new Proxy(r.attrs,V3),slots:r.slots,emit:r.emit,expose:t}}function Zc(r){return r.exposed?r.exposeProxy||(r.exposeProxy=new Proxy(w2(Bc(r.exposed)),{get(t,e){if(e in t)return t[e];if(e in so)return so[e](r)},has(t,e){return e in t||e in so}})):r.proxy}function K3(r,t=!0){return Tt(r)?r.displayName||r.name:r.name||t&&r.__name}function W3(r){return Tt(r)&&"__vccOpts"in r}const Ye=(r,t)=>Hf(r,t,bo),G3="3.5.38";/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fa;const V1=typeof window<"u"&&window.trustedTypes;if(V1)try{Fa=V1.createPolicy("vue",{createHTML:r=>r})}catch{}const J2=Fa?r=>Fa.createHTML(r):r=>r,Y3="http://www.w3.org/2000/svg",Q3="http://www.w3.org/1998/Math/MathML",_n=typeof document<"u"?document:null,Z1=_n&&_n.createElement("template"),X3={insert:(r,t,e)=>{t.insertBefore(r,e||null)},remove:r=>{const t=r.parentNode;t&&t.removeChild(r)},createElement:(r,t,e,n)=>{const s=t==="svg"?_n.createElementNS(Y3,r):t==="mathml"?_n.createElementNS(Q3,r):e?_n.createElement(r,{is:e}):_n.createElement(r);return r==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:r=>_n.createTextNode(r),createComment:r=>_n.createComment(r),setText:(r,t)=>{r.nodeValue=t},setElementText:(r,t)=>{r.textContent=t},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>_n.querySelector(r),setScopeId(r,t){r.setAttribute(t,"")},insertStaticContent(r,t,e,n,s,i){const o=e?e.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===i||!(s=s.nextSibling)););else{Z1.innerHTML=J2(n==="svg"?`<svg>${r}</svg>`:n==="mathml"?`<math>${r}</math>`:r);const a=Z1.content;if(n==="svg"||n==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},J3=Symbol("_vtc");function t6(r,t,e){const n=r[J3];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?r.removeAttribute("class"):e?r.setAttribute("class",t):r.className=t}const K1=Symbol("_vod"),e6=Symbol("_vsh"),r6=Symbol(""),n6=/(?:^|;)\s*display\s*:/;function s6(r,t,e){const n=r.style,s=ne(e);let i=!1;if(e&&!s){if(t)if(ne(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Gi(n,a,"")}else for(const o in t)e[o]==null&&Gi(n,o,"");for(const o in e){o==="display"&&(i=!0);const a=e[o];a!=null?o6(r,o,!ne(t)&&t?t[o]:void 0,a)||Gi(n,o,a):Gi(n,o,"")}}else if(s){if(t!==e){const o=n[r6];o&&(e+=";"+o),n.cssText=e,i=n6.test(e)}}else t&&r.removeAttribute("style");K1 in r&&(r[K1]=i?n.display:"",r[e6]&&(n.display="none"))}const W1=/\s*!important$/;function Gi(r,t,e){if(_t(e))e.forEach(n=>Gi(r,t,n));else if(e==null&&(e=""),t.startsWith("--"))r.setProperty(t,e);else{const n=i6(r,t);W1.test(e)?r.setProperty(Qs(n),e.replace(W1,""),"important"):r[n]=e}}const G1=["Webkit","Moz","ms"],aa={};function i6(r,t){const e=aa[t];if(e)return e;let n=Ke(t);if(n!=="filter"&&n in r)return aa[t]=n;n=Sl(n);for(let s=0;s<G1.length;s++){const i=G1[s]+n;if(i in r)return aa[t]=i}return t}function o6(r,t,e,n){return r.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ne(n)&&e===n}const Y1="http://www.w3.org/1999/xlink";function Q1(r,t,e,n,s,i=cf(t)){n&&t.startsWith("xlink:")?e==null?r.removeAttributeNS(Y1,t.slice(6,t.length)):r.setAttributeNS(Y1,t,e):e==null||i&&!Qh(e)?r.removeAttribute(t):r.setAttribute(t,i?"":ur(e)?String(e):e)}function X1(r,t,e,n,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(r[t]=t==="innerHTML"?J2(e):e);return}const i=r.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?r.getAttribute("value")||"":r.value,c=e==null?r.type==="checkbox"?"on":"":String(e);(a!==c||!("_value"in r))&&(r.value=c),e==null&&r.removeAttribute(t),r._value=e;return}let o=!1;if(e===""||e==null){const a=typeof r[t];a==="boolean"?e=Qh(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{r[t]=e}catch{}o&&r.removeAttribute(s||t)}function l6(r,t,e,n){r.addEventListener(t,e,n)}function a6(r,t,e,n){r.removeEventListener(t,e,n)}const J1=Symbol("_vei");function c6(r,t,e,n,s=null){const i=r[J1]||(r[J1]={}),o=i[t];if(n&&o)o.value=n;else{const[a,c]=u6(t);if(n){const u=i[t]=f6(n,s);l6(r,a,u,c)}else o&&(a6(r,a,o,c),i[t]=void 0)}}const tu=/(?:Once|Passive|Capture)$/;function u6(r){let t;if(tu.test(r)){t={};let n;for(;n=r.match(tu);)r=r.slice(0,r.length-n[0].length),t[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Qs(r.slice(2)),t]}let ca=0;const h6=Promise.resolve(),d6=()=>ca||(h6.then(()=>ca=0),ca=Date.now());function f6(r,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;const s=e.value;if(_t(s)){const i=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{i.call(n),n._stopped=!0};const o=s.slice(),a=[n];for(let c=0;c<o.length&&!n._stopped;c++){const u=o[c];u&&Dr(u,t,5,a)}}else Dr(s,t,5,[n])};return e.value=r,e.attached=d6(),e}const eu=r=>r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)>96&&r.charCodeAt(2)<123,p6=(r,t,e,n,s,i)=>{const o=s==="svg";t==="class"?t6(r,n,o):t==="style"?s6(r,e,n):El(t)?Tl(t)||c6(r,t,e,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):g6(r,t,n,o))?(X1(r,t,n),!r.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Q1(r,t,n,o,i,t!=="value")):r._isVueCE&&(m6(r,t)||r._def.__asyncLoader&&(/[A-Z]/.test(t)||!ne(n)))?X1(r,Ke(t),n,i,t):(t==="true-value"?r._trueValue=n:t==="false-value"&&(r._falseValue=n),Q1(r,t,n,o))};function g6(r,t,e,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in r&&eu(t)&&Tt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&r.tagName==="IFRAME"||t==="form"||t==="list"&&r.tagName==="INPUT"||t==="type"&&r.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=r.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return eu(t)&&ne(e)?!1:t in r}function m6(r,t){const e=r._def.props;if(!e)return!1;const n=Ke(t);return Array.isArray(e)?e.some(s=>Ke(s)===n):Object.keys(e).some(s=>Ke(s)===n)}const v6=Ne({patchProp:p6},X3);let ru;function w6(){return ru||(ru=O3(v6))}const b6=((...r)=>{const t=w6().createApp(...r),{mount:e}=t;return t.mount=n=>{const s=C6(n);if(!s)return;const i=t._component;!Tt(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,y6(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function y6(r){if(r instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&r instanceof MathMLElement)return"mathml"}function C6(r){return ne(r)?document.querySelector(r):r}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const k6=Symbol();var nu;(function(r){r.direct="direct",r.patchObject="patch object",r.patchFunction="patch function"})(nu||(nu={}));function x6(){const r=e2(!0),t=r.run(()=>Ve({}));let e=[],n=[];const s=Bc({install(i){s._a=i,i.provide(k6,s),i.config.globalProperties.$pinia=s,n.forEach(o=>e.push(o)),n=[]},use(i){return this._a?e.push(i):n.push(i),this},_p:e,_a:null,_e:r,_s:new Map,state:t});return s}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let td;const Kc=r=>td=r,_6=Symbol();function Va(r){return r&&typeof r=="object"&&Object.prototype.toString.call(r)==="[object Object]"&&typeof r.toJSON!="function"}var lo;(function(r){r.direct="direct",r.patchObject="patch object",r.patchFunction="patch function"})(lo||(lo={}));const ed=()=>{};function su(r,t,e,n=ed){r.push(t);const s=()=>{const i=r.indexOf(t);i>-1&&(r.splice(i,1),n())};return!e&&r2()&&hf(s),s}function oi(r,...t){r.slice().forEach(e=>{e(...t)})}const L6=r=>r(),iu=Symbol(),ua=Symbol();function Za(r,t){r instanceof Map&&t instanceof Map?t.forEach((e,n)=>r.set(n,e)):r instanceof Set&&t instanceof Set&&t.forEach(r.add,r);for(const e in t){if(!t.hasOwnProperty(e))continue;const n=t[e],s=r[e];Va(s)&&Va(n)&&r.hasOwnProperty(e)&&!le(n)&&!En(n)?r[e]=Za(s,n):r[e]=n}return r}const M6=Symbol();function E6(r){return!Va(r)||!Object.prototype.hasOwnProperty.call(r,M6)}const{assign:$n}=Object;function T6(r){return!!(le(r)&&r.effect)}function N6(r,t,e,n){const{state:s,actions:i,getters:o}=t,a=e.state.value[r];let c;function u(){a||(e.state.value[r]=s?s():{});const d=jf(e.state.value[r]);return $n(d,i,Object.keys(o||{}).reduce((p,f)=>(p[f]=Bc(Ye(()=>{Kc(e);const g=e._s.get(r);return o[f].call(g,g)})),p),{}))}return c=rd(r,u,t,e,n,!0),c}function rd(r,t,e={},n,s,i){let o;const a=$n({actions:{}},e),c={deep:!0};let u,d,p=[],f=[],g;const b=n.state.value[r];!i&&!b&&(n.state.value[r]={});let C;function M(ot){let Ct;u=d=!1,typeof ot=="function"?(ot(n.state.value[r]),Ct={type:lo.patchFunction,storeId:r,events:g}):(Za(n.state.value[r],ot),Ct={type:lo.patchObject,payload:ot,storeId:r,events:g});const xt=C=Symbol();qc().then(()=>{C===xt&&(u=!0)}),d=!0,oi(p,Ct,n.state.value[r])}const _=i?function(){const{state:Ct}=e,xt=Ct?Ct():{};this.$patch(v=>{$n(v,xt)})}:ed;function S(){o.stop(),p=[],f=[],n._s.delete(r)}const B=(ot,Ct="")=>{if(iu in ot)return ot[ua]=Ct,ot;const xt=function(){Kc(n);const v=Array.from(arguments),T=[],w=[];function O(E){T.push(E)}function N(E){w.push(E)}oi(f,{args:v,name:xt[ua],store:H,after:O,onError:N});let L;try{L=ot.apply(this&&this.$id===r?this:H,v)}catch(E){throw oi(w,E),E}return L instanceof Promise?L.then(E=>(oi(T,E),E)).catch(E=>(oi(w,E),Promise.reject(E))):(oi(T,L),L)};return xt[iu]=!0,xt[ua]=Ct,xt},q={_p:n,$id:r,$onAction:su.bind(null,f),$patch:M,$reset:_,$subscribe(ot,Ct={}){const xt=su(p,ot,Ct.detached,()=>v()),v=o.run(()=>Tn(()=>n.state.value[r],T=>{(Ct.flush==="sync"?d:u)&&ot({storeId:r,type:lo.direct,events:g},T)},$n({},c,Ct)));return xt},$dispose:S},H=jl(q);n._s.set(r,H);const dt=(n._a&&n._a.runWithContext||L6)(()=>n._e.run(()=>(o=e2()).run(()=>t({action:B}))));for(const ot in dt){const Ct=dt[ot];if(le(Ct)&&!T6(Ct)||En(Ct))i||(b&&E6(Ct)&&(le(Ct)?Ct.value=b[ot]:Za(Ct,b[ot])),n.state.value[r][ot]=Ct);else if(typeof Ct=="function"){const xt=B(Ct,ot);dt[ot]=xt,a.actions[ot]=Ct}}return $n(H,dt),$n($t(H),dt),Object.defineProperty(H,"$state",{get:()=>n.state.value[r],set:ot=>{M(Ct=>{$n(Ct,ot)})}}),n._p.forEach(ot=>{$n(H,o.run(()=>ot({store:H,app:n._a,pinia:n,options:a})))}),b&&i&&e.hydrate&&e.hydrate(H.$state,b),u=!0,d=!0,H}/*! #__NO_SIDE_EFFECTS__ */function A6(r,t,e){let n;const s=typeof t=="function";n=s?e:t;function i(o,a){const c=Vf();return o=o||(c?Ci(_6,null):null),o&&Kc(o),o=td,o._s.has(r)||(s?rd(r,t,n,o):N6(r,n,o)),o._s.get(r)}return i.$id=r,i}var nd=typeof global=="object"&&global&&global.Object===Object&&global,S6=typeof self=="object"&&self&&self.Object===Object&&self,on=nd||S6||Function("return this")(),Qn=on.Symbol,sd=Object.prototype,O6=sd.hasOwnProperty,I6=sd.toString,zi=Qn?Qn.toStringTag:void 0;function j6(r){var t=O6.call(r,zi),e=r[zi];try{r[zi]=void 0;var n=!0}catch{}var s=I6.call(r);return n&&(t?r[zi]=e:delete r[zi]),s}var B6=Object.prototype,q6=B6.toString;function R6(r){return q6.call(r)}var H6="[object Null]",$6="[object Undefined]",ou=Qn?Qn.toStringTag:void 0;function Hi(r){return r==null?r===void 0?$6:H6:ou&&ou in Object(r)?j6(r):R6(r)}function In(r){return r!=null&&typeof r=="object"}var Ks=Array.isArray;function ts(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}function id(r){return r}var D6="[object AsyncFunction]",P6="[object Function]",U6="[object GeneratorFunction]",z6="[object Proxy]";function Wc(r){if(!ts(r))return!1;var t=Hi(r);return t==P6||t==U6||t==D6||t==z6}var ha=on["__core-js_shared__"],lu=(function(){var r=/[^.]+$/.exec(ha&&ha.keys&&ha.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function F6(r){return!!lu&&lu in r}var V6=Function.prototype,Z6=V6.toString;function Xs(r){if(r!=null){try{return Z6.call(r)}catch{}try{return r+""}catch{}}return""}var K6=/[\\^$.*+?()[\]{}|]/g,W6=/^\[object .+?Constructor\]$/,G6=Function.prototype,Y6=Object.prototype,Q6=G6.toString,X6=Y6.hasOwnProperty,J6=RegExp("^"+Q6.call(X6).replace(K6,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function t4(r){if(!ts(r)||F6(r))return!1;var t=Wc(r)?J6:W6;return t.test(Xs(r))}function e4(r,t){return r==null?void 0:r[t]}function Js(r,t){var e=e4(r,t);return t4(e)?e:void 0}var Ka=Js(on,"WeakMap"),au=Object.create,r4=(function(){function r(){}return function(t){if(!ts(t))return{};if(au)return au(t);r.prototype=t;var e=new r;return r.prototype=void 0,e}})();function n4(r,t,e){switch(e.length){case 0:return r.call(t);case 1:return r.call(t,e[0]);case 2:return r.call(t,e[0],e[1]);case 3:return r.call(t,e[0],e[1],e[2])}return r.apply(t,e)}function s4(r,t){var e=-1,n=r.length;for(t||(t=Array(n));++e<n;)t[e]=r[e];return t}var i4=800,o4=16,l4=Date.now;function a4(r){var t=0,e=0;return function(){var n=l4(),s=o4-(n-e);if(e=n,s>0){if(++t>=i4)return arguments[0]}else t=0;return r.apply(void 0,arguments)}}function c4(r){return function(){return r}}var yl=(function(){try{var r=Js(Object,"defineProperty");return r({},"",{}),r}catch{}})(),u4=yl?function(r,t){return yl(r,"toString",{configurable:!0,enumerable:!1,value:c4(t),writable:!0})}:id,h4=a4(u4);function d4(r,t){for(var e=-1,n=r==null?0:r.length;++e<n&&t(r[e],e,r)!==!1;);return r}var f4=9007199254740991,p4=/^(?:0|[1-9]\d*)$/;function od(r,t){var e=typeof r;return t=t??f4,!!t&&(e=="number"||e!="symbol"&&p4.test(r))&&r>-1&&r%1==0&&r<t}function Gc(r,t,e){t=="__proto__"&&yl?yl(r,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):r[t]=e}function Oo(r,t){return r===t||r!==r&&t!==t}var g4=Object.prototype,m4=g4.hasOwnProperty;function ld(r,t,e){var n=r[t];(!(m4.call(r,t)&&Oo(n,e))||e===void 0&&!(t in r))&&Gc(r,t,e)}function v4(r,t,e,n){var s=!e;e||(e={});for(var i=-1,o=t.length;++i<o;){var a=t[i],c=void 0;c===void 0&&(c=r[a]),s?Gc(e,a,c):ld(e,a,c)}return e}var cu=Math.max;function w4(r,t,e){return t=cu(t===void 0?r.length-1:t,0),function(){for(var n=arguments,s=-1,i=cu(n.length-t,0),o=Array(i);++s<i;)o[s]=n[t+s];s=-1;for(var a=Array(t+1);++s<t;)a[s]=n[s];return a[t]=e(o),n4(r,this,a)}}function b4(r,t){return h4(w4(r,t,id),r+"")}var y4=9007199254740991;function ad(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=y4}function Dl(r){return r!=null&&ad(r.length)&&!Wc(r)}function C4(r,t,e){if(!ts(e))return!1;var n=typeof t;return(n=="number"?Dl(e)&&od(t,e.length):n=="string"&&t in e)?Oo(e[t],r):!1}function k4(r){return b4(function(t,e){var n=-1,s=e.length,i=s>1?e[s-1]:void 0,o=s>2?e[2]:void 0;for(i=r.length>3&&typeof i=="function"?(s--,i):void 0,o&&C4(e[0],e[1],o)&&(i=s<3?void 0:i,s=1),t=Object(t);++n<s;){var a=e[n];a&&r(t,a,n,i)}return t})}var x4=Object.prototype;function Yc(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||x4;return r===e}function _4(r,t){for(var e=-1,n=Array(r);++e<r;)n[e]=t(e);return n}var L4="[object Arguments]";function uu(r){return In(r)&&Hi(r)==L4}var cd=Object.prototype,M4=cd.hasOwnProperty,E4=cd.propertyIsEnumerable,Wa=uu((function(){return arguments})())?uu:function(r){return In(r)&&M4.call(r,"callee")&&!E4.call(r,"callee")};function T4(){return!1}var ud=typeof ar=="object"&&ar&&!ar.nodeType&&ar,hu=ud&&typeof Be=="object"&&Be&&!Be.nodeType&&Be,N4=hu&&hu.exports===ud,du=N4?on.Buffer:void 0,A4=du?du.isBuffer:void 0,yo=A4||T4,S4="[object Arguments]",O4="[object Array]",I4="[object Boolean]",j4="[object Date]",B4="[object Error]",q4="[object Function]",R4="[object Map]",H4="[object Number]",$4="[object Object]",D4="[object RegExp]",P4="[object Set]",U4="[object String]",z4="[object WeakMap]",F4="[object ArrayBuffer]",V4="[object DataView]",Z4="[object Float32Array]",K4="[object Float64Array]",W4="[object Int8Array]",G4="[object Int16Array]",Y4="[object Int32Array]",Q4="[object Uint8Array]",X4="[object Uint8ClampedArray]",J4="[object Uint16Array]",tp="[object Uint32Array]",ee={};ee[Z4]=ee[K4]=ee[W4]=ee[G4]=ee[Y4]=ee[Q4]=ee[X4]=ee[J4]=ee[tp]=!0;ee[S4]=ee[O4]=ee[F4]=ee[I4]=ee[V4]=ee[j4]=ee[B4]=ee[q4]=ee[R4]=ee[H4]=ee[$4]=ee[D4]=ee[P4]=ee[U4]=ee[z4]=!1;function ep(r){return In(r)&&ad(r.length)&&!!ee[Hi(r)]}function Qc(r){return function(t){return r(t)}}var hd=typeof ar=="object"&&ar&&!ar.nodeType&&ar,ao=hd&&typeof Be=="object"&&Be&&!Be.nodeType&&Be,rp=ao&&ao.exports===hd,da=rp&&nd.process,Ai=(function(){try{var r=ao&&ao.require&&ao.require("util").types;return r||da&&da.binding&&da.binding("util")}catch{}})(),fu=Ai&&Ai.isTypedArray,Xc=fu?Qc(fu):ep,np=Object.prototype,sp=np.hasOwnProperty;function dd(r,t){var e=Ks(r),n=!e&&Wa(r),s=!e&&!n&&yo(r),i=!e&&!n&&!s&&Xc(r),o=e||n||s||i,a=o?_4(r.length,String):[],c=a.length;for(var u in r)(t||sp.call(r,u))&&!(o&&(u=="length"||s&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||od(u,c)))&&a.push(u);return a}function fd(r,t){return function(e){return r(t(e))}}var ip=fd(Object.keys,Object),op=Object.prototype,lp=op.hasOwnProperty;function ap(r){if(!Yc(r))return ip(r);var t=[];for(var e in Object(r))lp.call(r,e)&&e!="constructor"&&t.push(e);return t}function cp(r){return Dl(r)?dd(r):ap(r)}function up(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var hp=Object.prototype,dp=hp.hasOwnProperty;function fp(r){if(!ts(r))return up(r);var t=Yc(r),e=[];for(var n in r)n=="constructor"&&(t||!dp.call(r,n))||e.push(n);return e}function pd(r){return Dl(r)?dd(r,!0):fp(r)}var Co=Js(Object,"create");function pp(){this.__data__=Co?Co(null):{},this.size=0}function gp(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}var mp="__lodash_hash_undefined__",vp=Object.prototype,wp=vp.hasOwnProperty;function bp(r){var t=this.__data__;if(Co){var e=t[r];return e===mp?void 0:e}return wp.call(t,r)?t[r]:void 0}var yp=Object.prototype,Cp=yp.hasOwnProperty;function kp(r){var t=this.__data__;return Co?t[r]!==void 0:Cp.call(t,r)}var xp="__lodash_hash_undefined__";function _p(r,t){var e=this.__data__;return this.size+=this.has(r)?0:1,e[r]=Co&&t===void 0?xp:t,this}function Ws(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var n=r[t];this.set(n[0],n[1])}}Ws.prototype.clear=pp;Ws.prototype.delete=gp;Ws.prototype.get=bp;Ws.prototype.has=kp;Ws.prototype.set=_p;function Lp(){this.__data__=[],this.size=0}function Pl(r,t){for(var e=r.length;e--;)if(Oo(r[e][0],t))return e;return-1}var Mp=Array.prototype,Ep=Mp.splice;function Tp(r){var t=this.__data__,e=Pl(t,r);if(e<0)return!1;var n=t.length-1;return e==n?t.pop():Ep.call(t,e,1),--this.size,!0}function Np(r){var t=this.__data__,e=Pl(t,r);return e<0?void 0:t[e][1]}function Ap(r){return Pl(this.__data__,r)>-1}function Sp(r,t){var e=this.__data__,n=Pl(e,r);return n<0?(++this.size,e.push([r,t])):e[n][1]=t,this}function Rn(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var n=r[t];this.set(n[0],n[1])}}Rn.prototype.clear=Lp;Rn.prototype.delete=Tp;Rn.prototype.get=Np;Rn.prototype.has=Ap;Rn.prototype.set=Sp;var ko=Js(on,"Map");function Op(){this.size=0,this.__data__={hash:new Ws,map:new(ko||Rn),string:new Ws}}function Ip(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}function Ul(r,t){var e=r.__data__;return Ip(t)?e[typeof t=="string"?"string":"hash"]:e.map}function jp(r){var t=Ul(this,r).delete(r);return this.size-=t?1:0,t}function Bp(r){return Ul(this,r).get(r)}function qp(r){return Ul(this,r).has(r)}function Rp(r,t){var e=Ul(this,r),n=e.size;return e.set(r,t),this.size+=e.size==n?0:1,this}function ti(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var n=r[t];this.set(n[0],n[1])}}ti.prototype.clear=Op;ti.prototype.delete=jp;ti.prototype.get=Bp;ti.prototype.has=qp;ti.prototype.set=Rp;function Hp(r,t){for(var e=-1,n=t.length,s=r.length;++e<n;)r[s+e]=t[e];return r}var gd=fd(Object.getPrototypeOf,Object),$p="[object Object]",Dp=Function.prototype,Pp=Object.prototype,md=Dp.toString,Up=Pp.hasOwnProperty,zp=md.call(Object);function Fp(r){if(!In(r)||Hi(r)!=$p)return!1;var t=gd(r);if(t===null)return!0;var e=Up.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&md.call(e)==zp}function Vp(){this.__data__=new Rn,this.size=0}function Zp(r){var t=this.__data__,e=t.delete(r);return this.size=t.size,e}function Kp(r){return this.__data__.get(r)}function Wp(r){return this.__data__.has(r)}var Gp=200;function Yp(r,t){var e=this.__data__;if(e instanceof Rn){var n=e.__data__;if(!ko||n.length<Gp-1)return n.push([r,t]),this.size=++e.size,this;e=this.__data__=new ti(n)}return e.set(r,t),this.size=e.size,this}function en(r){var t=this.__data__=new Rn(r);this.size=t.size}en.prototype.clear=Vp;en.prototype.delete=Zp;en.prototype.get=Kp;en.prototype.has=Wp;en.prototype.set=Yp;var vd=typeof ar=="object"&&ar&&!ar.nodeType&&ar,pu=vd&&typeof Be=="object"&&Be&&!Be.nodeType&&Be,Qp=pu&&pu.exports===vd,gu=Qp?on.Buffer:void 0,mu=gu?gu.allocUnsafe:void 0;function wd(r,t){if(t)return r.slice();var e=r.length,n=mu?mu(e):new r.constructor(e);return r.copy(n),n}function Xp(r,t){for(var e=-1,n=r==null?0:r.length,s=0,i=[];++e<n;){var o=r[e];t(o,e,r)&&(i[s++]=o)}return i}function Jp(){return[]}var t5=Object.prototype,e5=t5.propertyIsEnumerable,vu=Object.getOwnPropertySymbols,r5=vu?function(r){return r==null?[]:(r=Object(r),Xp(vu(r),function(t){return e5.call(r,t)}))}:Jp;function n5(r,t,e){var n=t(r);return Ks(r)?n:Hp(n,e(r))}function Ga(r){return n5(r,cp,r5)}var Ya=Js(on,"DataView"),Qa=Js(on,"Promise"),Xa=Js(on,"Set"),wu="[object Map]",s5="[object Object]",bu="[object Promise]",yu="[object Set]",Cu="[object WeakMap]",ku="[object DataView]",i5=Xs(Ya),o5=Xs(ko),l5=Xs(Qa),a5=Xs(Xa),c5=Xs(Ka),Br=Hi;(Ya&&Br(new Ya(new ArrayBuffer(1)))!=ku||ko&&Br(new ko)!=wu||Qa&&Br(Qa.resolve())!=bu||Xa&&Br(new Xa)!=yu||Ka&&Br(new Ka)!=Cu)&&(Br=function(r){var t=Hi(r),e=t==s5?r.constructor:void 0,n=e?Xs(e):"";if(n)switch(n){case i5:return ku;case o5:return wu;case l5:return bu;case a5:return yu;case c5:return Cu}return t});var u5=Object.prototype,h5=u5.hasOwnProperty;function d5(r){var t=r.length,e=new r.constructor(t);return t&&typeof r[0]=="string"&&h5.call(r,"index")&&(e.index=r.index,e.input=r.input),e}var Cl=on.Uint8Array;function Jc(r){var t=new r.constructor(r.byteLength);return new Cl(t).set(new Cl(r)),t}function f5(r,t){var e=Jc(r.buffer);return new r.constructor(e,r.byteOffset,r.byteLength)}var p5=/\w*$/;function g5(r){var t=new r.constructor(r.source,p5.exec(r));return t.lastIndex=r.lastIndex,t}var xu=Qn?Qn.prototype:void 0,_u=xu?xu.valueOf:void 0;function m5(r){return _u?Object(_u.call(r)):{}}function bd(r,t){var e=t?Jc(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}var v5="[object Boolean]",w5="[object Date]",b5="[object Map]",y5="[object Number]",C5="[object RegExp]",k5="[object Set]",x5="[object String]",_5="[object Symbol]",L5="[object ArrayBuffer]",M5="[object DataView]",E5="[object Float32Array]",T5="[object Float64Array]",N5="[object Int8Array]",A5="[object Int16Array]",S5="[object Int32Array]",O5="[object Uint8Array]",I5="[object Uint8ClampedArray]",j5="[object Uint16Array]",B5="[object Uint32Array]";function q5(r,t,e){var n=r.constructor;switch(t){case L5:return Jc(r);case v5:case w5:return new n(+r);case M5:return f5(r);case E5:case T5:case N5:case A5:case S5:case O5:case I5:case j5:case B5:return bd(r,e);case b5:return new n;case y5:case x5:return new n(r);case C5:return g5(r);case k5:return new n;case _5:return m5(r)}}function yd(r){return typeof r.constructor=="function"&&!Yc(r)?r4(gd(r)):{}}var R5="[object Map]";function H5(r){return In(r)&&Br(r)==R5}var Lu=Ai&&Ai.isMap,$5=Lu?Qc(Lu):H5,D5="[object Set]";function P5(r){return In(r)&&Br(r)==D5}var Mu=Ai&&Ai.isSet,U5=Mu?Qc(Mu):P5,z5=1,Cd="[object Arguments]",F5="[object Array]",V5="[object Boolean]",Z5="[object Date]",K5="[object Error]",kd="[object Function]",W5="[object GeneratorFunction]",G5="[object Map]",Y5="[object Number]",xd="[object Object]",Q5="[object RegExp]",X5="[object Set]",J5="[object String]",tg="[object Symbol]",eg="[object WeakMap]",rg="[object ArrayBuffer]",ng="[object DataView]",sg="[object Float32Array]",ig="[object Float64Array]",og="[object Int8Array]",lg="[object Int16Array]",ag="[object Int32Array]",cg="[object Uint8Array]",ug="[object Uint8ClampedArray]",hg="[object Uint16Array]",dg="[object Uint32Array]",Xt={};Xt[Cd]=Xt[F5]=Xt[rg]=Xt[ng]=Xt[V5]=Xt[Z5]=Xt[sg]=Xt[ig]=Xt[og]=Xt[lg]=Xt[ag]=Xt[G5]=Xt[Y5]=Xt[xd]=Xt[Q5]=Xt[X5]=Xt[J5]=Xt[tg]=Xt[cg]=Xt[ug]=Xt[hg]=Xt[dg]=!0;Xt[K5]=Xt[kd]=Xt[eg]=!1;function ll(r,t,e,n,s,i){var o,a=t&z5;if(o!==void 0)return o;if(!ts(r))return r;var c=Ks(r);if(c)o=d5(r);else{var u=Br(r),d=u==kd||u==W5;if(yo(r))return wd(r,a);if(u==xd||u==Cd||d&&!s)o=d?{}:yd(r);else{if(!Xt[u])return s?r:{};o=q5(r,u,a)}}i||(i=new en);var p=i.get(r);if(p)return p;i.set(r,o),U5(r)?r.forEach(function(b){o.add(ll(b,t,e,b,r,i))}):$5(r)&&r.forEach(function(b,C){o.set(C,ll(b,t,e,C,r,i))});var f=Ga,g=c?void 0:f(r);return d4(g||r,function(b,C){g&&(C=b,b=r[C]),ld(o,C,ll(b,t,e,C,r,i))}),o}var fg=1,pg=4;function xi(r){return ll(r,fg|pg)}var gg="__lodash_hash_undefined__";function mg(r){return this.__data__.set(r,gg),this}function vg(r){return this.__data__.has(r)}function kl(r){var t=-1,e=r==null?0:r.length;for(this.__data__=new ti;++t<e;)this.add(r[t])}kl.prototype.add=kl.prototype.push=mg;kl.prototype.has=vg;function wg(r,t){for(var e=-1,n=r==null?0:r.length;++e<n;)if(t(r[e],e,r))return!0;return!1}function bg(r,t){return r.has(t)}var yg=1,Cg=2;function _d(r,t,e,n,s,i){var o=e&yg,a=r.length,c=t.length;if(a!=c&&!(o&&c>a))return!1;var u=i.get(r),d=i.get(t);if(u&&d)return u==t&&d==r;var p=-1,f=!0,g=e&Cg?new kl:void 0;for(i.set(r,t),i.set(t,r);++p<a;){var b=r[p],C=t[p];if(n)var M=o?n(C,b,p,t,r,i):n(b,C,p,r,t,i);if(M!==void 0){if(M)continue;f=!1;break}if(g){if(!wg(t,function(_,S){if(!bg(g,S)&&(b===_||s(b,_,e,n,i)))return g.push(S)})){f=!1;break}}else if(!(b===C||s(b,C,e,n,i))){f=!1;break}}return i.delete(r),i.delete(t),f}function kg(r){var t=-1,e=Array(r.size);return r.forEach(function(n,s){e[++t]=[s,n]}),e}function xg(r){var t=-1,e=Array(r.size);return r.forEach(function(n){e[++t]=n}),e}var _g=1,Lg=2,Mg="[object Boolean]",Eg="[object Date]",Tg="[object Error]",Ng="[object Map]",Ag="[object Number]",Sg="[object RegExp]",Og="[object Set]",Ig="[object String]",jg="[object Symbol]",Bg="[object ArrayBuffer]",qg="[object DataView]",Eu=Qn?Qn.prototype:void 0,fa=Eu?Eu.valueOf:void 0;function Rg(r,t,e,n,s,i,o){switch(e){case qg:if(r.byteLength!=t.byteLength||r.byteOffset!=t.byteOffset)return!1;r=r.buffer,t=t.buffer;case Bg:return!(r.byteLength!=t.byteLength||!i(new Cl(r),new Cl(t)));case Mg:case Eg:case Ag:return Oo(+r,+t);case Tg:return r.name==t.name&&r.message==t.message;case Sg:case Ig:return r==t+"";case Ng:var a=kg;case Og:var c=n&_g;if(a||(a=xg),r.size!=t.size&&!c)return!1;var u=o.get(r);if(u)return u==t;n|=Lg,o.set(r,t);var d=_d(a(r),a(t),n,s,i,o);return o.delete(r),d;case jg:if(fa)return fa.call(r)==fa.call(t)}return!1}var Hg=1,$g=Object.prototype,Dg=$g.hasOwnProperty;function Pg(r,t,e,n,s,i){var o=e&Hg,a=Ga(r),c=a.length,u=Ga(t),d=u.length;if(c!=d&&!o)return!1;for(var p=c;p--;){var f=a[p];if(!(o?f in t:Dg.call(t,f)))return!1}var g=i.get(r),b=i.get(t);if(g&&b)return g==t&&b==r;var C=!0;i.set(r,t),i.set(t,r);for(var M=o;++p<c;){f=a[p];var _=r[f],S=t[f];if(n)var B=o?n(S,_,f,t,r,i):n(_,S,f,r,t,i);if(!(B===void 0?_===S||s(_,S,e,n,i):B)){C=!1;break}M||(M=f=="constructor")}if(C&&!M){var q=r.constructor,H=t.constructor;q!=H&&"constructor"in r&&"constructor"in t&&!(typeof q=="function"&&q instanceof q&&typeof H=="function"&&H instanceof H)&&(C=!1)}return i.delete(r),i.delete(t),C}var Ug=1,Tu="[object Arguments]",Nu="[object Array]",Fo="[object Object]",zg=Object.prototype,Au=zg.hasOwnProperty;function Fg(r,t,e,n,s,i){var o=Ks(r),a=Ks(t),c=o?Nu:Br(r),u=a?Nu:Br(t);c=c==Tu?Fo:c,u=u==Tu?Fo:u;var d=c==Fo,p=u==Fo,f=c==u;if(f&&yo(r)){if(!yo(t))return!1;o=!0,d=!1}if(f&&!d)return i||(i=new en),o||Xc(r)?_d(r,t,e,n,s,i):Rg(r,t,c,e,n,s,i);if(!(e&Ug)){var g=d&&Au.call(r,"__wrapped__"),b=p&&Au.call(t,"__wrapped__");if(g||b){var C=g?r.value():r,M=b?t.value():t;return i||(i=new en),s(C,M,e,n,i)}}return f?(i||(i=new en),Pg(r,t,e,n,s,i)):!1}function Ld(r,t,e,n,s){return r===t?!0:r==null||t==null||!In(r)&&!In(t)?r!==r&&t!==t:Fg(r,t,e,n,Ld,s)}function Vg(r){return function(t,e,n){for(var s=-1,i=Object(t),o=n(t),a=o.length;a--;){var c=o[++s];if(e(i[c],c,i)===!1)break}return t}}var Zg=Vg();function Ja(r,t,e){(e!==void 0&&!Oo(r[t],e)||e===void 0&&!(t in r))&&Gc(r,t,e)}function Kg(r){return In(r)&&Dl(r)}function tc(r,t){if(!(t==="constructor"&&typeof r[t]=="function")&&t!="__proto__")return r[t]}function Wg(r){return v4(r,pd(r))}function Gg(r,t,e,n,s,i,o){var a=tc(r,e),c=tc(t,e),u=o.get(c);if(u){Ja(r,e,u);return}var d=i?i(a,c,e+"",r,t,o):void 0,p=d===void 0;if(p){var f=Ks(c),g=!f&&yo(c),b=!f&&!g&&Xc(c);d=c,f||g||b?Ks(a)?d=a:Kg(a)?d=s4(a):g?(p=!1,d=wd(c,!0)):b?(p=!1,d=bd(c,!0)):d=[]:Fp(c)||Wa(c)?(d=a,Wa(a)?d=Wg(a):(!ts(a)||Wc(a))&&(d=yd(c))):p=!1}p&&(o.set(c,d),s(d,c,n,i,o),o.delete(c)),Ja(r,e,d)}function Md(r,t,e,n,s){r!==t&&Zg(t,function(i,o){if(s||(s=new en),ts(i))Gg(r,t,o,e,Md,n,s);else{var a=n?n(tc(r,o),i,o+"",r,t,s):void 0;a===void 0&&(a=i),Ja(r,o,a)}},pd)}function t1(r,t){return Ld(r,t)}var Gn=k4(function(r,t,e){Md(r,t,e)}),bt=(r=>(r[r.TYPE=3]="TYPE",r[r.LEVEL=12]="LEVEL",r[r.ATTRIBUTE=13]="ATTRIBUTE",r[r.BLOT=14]="BLOT",r[r.INLINE=7]="INLINE",r[r.BLOCK=11]="BLOCK",r[r.BLOCK_BLOT=10]="BLOCK_BLOT",r[r.INLINE_BLOT=6]="INLINE_BLOT",r[r.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",r[r.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",r[r.ANY=15]="ANY",r))(bt||{});class nn{constructor(t,e,n={}){this.attrName=t,this.keyName=e;const s=bt.TYPE&bt.ATTRIBUTE;this.scope=n.scope!=null?n.scope&bt.LEVEL|s:bt.ATTRIBUTE,n.whitelist!=null&&(this.whitelist=n.whitelist)}static keys(t){return Array.from(t.attributes).map(e=>e.name)}add(t,e){return this.canAdd(t,e)?(t.setAttribute(this.keyName,e),!0):!1}canAdd(t,e){return this.whitelist==null?!0:typeof e=="string"?this.whitelist.indexOf(e.replace(/["']/g,""))>-1:this.whitelist.indexOf(e)>-1}remove(t){t.removeAttribute(this.keyName)}value(t){const e=t.getAttribute(this.keyName);return this.canAdd(t,e)&&e?e:""}}class _i extends Error{constructor(t){t="[Parchment] "+t,super(t),this.message=t,this.name=this.constructor.name}}const Ed=class ec{constructor(){this.attributes={},this.classes={},this.tags={},this.types={}}static find(t,e=!1){if(t==null)return null;if(this.blots.has(t))return this.blots.get(t)||null;if(e){let n=null;try{n=t.parentNode}catch{return null}return this.find(n,e)}return null}create(t,e,n){const s=this.query(e);if(s==null)throw new _i(`Unable to create ${e} blot`);const i=s,o=e instanceof Node||e.nodeType===Node.TEXT_NODE?e:i.create(n),a=new i(t,o,n);return ec.blots.set(a.domNode,a),a}find(t,e=!1){return ec.find(t,e)}query(t,e=bt.ANY){let n;return typeof t=="string"?n=this.types[t]||this.attributes[t]:t instanceof Text||t.nodeType===Node.TEXT_NODE?n=this.types.text:typeof t=="number"?t&bt.LEVEL&bt.BLOCK?n=this.types.block:t&bt.LEVEL&bt.INLINE&&(n=this.types.inline):t instanceof Element&&((t.getAttribute("class")||"").split(/\s+/).some(s=>(n=this.classes[s],!!n)),n=n||this.tags[t.tagName]),n==null?null:"scope"in n&&e&bt.LEVEL&n.scope&&e&bt.TYPE&n.scope?n:null}register(...t){return t.map(e=>{const n="blotName"in e,s="attrName"in e;if(!n&&!s)throw new _i("Invalid definition");if(n&&e.blotName==="abstract")throw new _i("Cannot register abstract class");const i=n?e.blotName:s?e.attrName:void 0;return this.types[i]=e,s?typeof e.keyName=="string"&&(this.attributes[e.keyName]=e):n&&(e.className&&(this.classes[e.className]=e),e.tagName&&(Array.isArray(e.tagName)?e.tagName=e.tagName.map(o=>o.toUpperCase()):e.tagName=e.tagName.toUpperCase(),(Array.isArray(e.tagName)?e.tagName:[e.tagName]).forEach(o=>{(this.tags[o]==null||e.className==null)&&(this.tags[o]=e)}))),e})}};Ed.blots=new WeakMap;let Si=Ed;function Su(r,t){return(r.getAttribute("class")||"").split(/\s+/).filter(e=>e.indexOf(`${t}-`)===0)}class Yg extends nn{static keys(t){return(t.getAttribute("class")||"").split(/\s+/).map(e=>e.split("-").slice(0,-1).join("-"))}add(t,e){return this.canAdd(t,e)?(this.remove(t),t.classList.add(`${this.keyName}-${e}`),!0):!1}remove(t){Su(t,this.keyName).forEach(e=>{t.classList.remove(e)}),t.classList.length===0&&t.removeAttribute("class")}value(t){const e=(Su(t,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(t,e)?e:""}}const zr=Yg;function pa(r){const t=r.split("-"),e=t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("");return t[0]+e}class Qg extends nn{static keys(t){return(t.getAttribute("style")||"").split(";").map(e=>e.split(":")[0].trim())}add(t,e){return this.canAdd(t,e)?(t.style[pa(this.keyName)]=e,!0):!1}remove(t){t.style[pa(this.keyName)]="",t.getAttribute("style")||t.removeAttribute("style")}value(t){const e=t.style[pa(this.keyName)];return this.canAdd(t,e)?e:""}}const es=Qg;class Xg{constructor(t){this.attributes={},this.domNode=t,this.build()}attribute(t,e){e?t.add(this.domNode,e)&&(t.value(this.domNode)!=null?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),delete this.attributes[t.attrName])}build(){this.attributes={};const t=Si.find(this.domNode);if(t==null)return;const e=nn.keys(this.domNode),n=zr.keys(this.domNode),s=es.keys(this.domNode);e.concat(n).concat(s).forEach(i=>{const o=t.scroll.query(i,bt.ATTRIBUTE);o instanceof nn&&(this.attributes[o.attrName]=o)})}copy(t){Object.keys(this.attributes).forEach(e=>{const n=this.attributes[e].value(this.domNode);t.format(e,n)})}move(t){this.copy(t),Object.keys(this.attributes).forEach(e=>{this.attributes[e].remove(this.domNode)}),this.attributes={}}values(){return Object.keys(this.attributes).reduce((t,e)=>(t[e]=this.attributes[e].value(this.domNode),t),{})}}const zl=Xg,Td=class{constructor(t,e){this.scroll=t,this.domNode=e,Si.blots.set(e,this),this.prev=null,this.next=null}static create(t){if(this.tagName==null)throw new _i("Blot definition missing tagName");let e,n;return Array.isArray(this.tagName)?(typeof t=="string"?(n=t.toUpperCase(),parseInt(n,10).toString()===n&&(n=parseInt(n,10))):typeof t=="number"&&(n=t),typeof n=="number"?e=document.createElement(this.tagName[n-1]):n&&this.tagName.indexOf(n)>-1?e=document.createElement(n):e=document.createElement(this.tagName[0])):e=document.createElement(this.tagName),this.className&&e.classList.add(this.className),e}get statics(){return this.constructor}attach(){}clone(){const t=this.domNode.cloneNode(!1);return this.scroll.create(t)}detach(){this.parent!=null&&this.parent.removeChild(this),Si.blots.delete(this.domNode)}deleteAt(t,e){this.isolate(t,e).remove()}formatAt(t,e,n,s){const i=this.isolate(t,e);if(this.scroll.query(n,bt.BLOT)!=null&&s)i.wrap(n,s);else if(this.scroll.query(n,bt.ATTRIBUTE)!=null){const o=this.scroll.create(this.statics.scope);i.wrap(o),o.format(n,s)}}insertAt(t,e,n){const s=n==null?this.scroll.create("text",e):this.scroll.create(e,n),i=this.split(t);this.parent.insertBefore(s,i||void 0)}isolate(t,e){const n=this.split(t);if(n==null)throw new Error("Attempt to isolate at end");return n.split(e),n}length(){return 1}offset(t=this.parent){return this.parent==null||this===t?0:this.parent.children.offset(this)+this.parent.offset(t)}optimize(t){this.statics.requiredContainer&&!(this.parent instanceof this.statics.requiredContainer)&&this.wrap(this.statics.requiredContainer.blotName)}remove(){this.domNode.parentNode!=null&&this.domNode.parentNode.removeChild(this.domNode),this.detach()}replaceWith(t,e){const n=typeof t=="string"?this.scroll.create(t,e):t;return this.parent!=null&&(this.parent.insertBefore(n,this.next||void 0),this.remove()),n}split(t,e){return t===0?this:this.next}update(t,e){}wrap(t,e){const n=typeof t=="string"?this.scroll.create(t,e):t;if(this.parent!=null&&this.parent.insertBefore(n,this.next||void 0),typeof n.appendChild!="function")throw new _i(`Cannot wrap ${t}`);return n.appendChild(this),n}};Td.blotName="abstract";let Nd=Td;const Ad=class extends Nd{static value(t){return!0}index(t,e){return this.domNode===t||this.domNode.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(e,1):-1}position(t,e){let n=Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);return t>0&&(n+=1),[this.parent.domNode,n]}value(){return{[this.statics.blotName]:this.statics.value(this.domNode)||!0}}};Ad.scope=bt.INLINE_BLOT;let Jg=Ad;const je=Jg;class t8{constructor(){this.head=null,this.tail=null,this.length=0}append(...t){if(this.insertBefore(t[0],null),t.length>1){const e=t.slice(1);this.append(...e)}}at(t){const e=this.iterator();let n=e();for(;n&&t>0;)t-=1,n=e();return n}contains(t){const e=this.iterator();let n=e();for(;n;){if(n===t)return!0;n=e()}return!1}indexOf(t){const e=this.iterator();let n=e(),s=0;for(;n;){if(n===t)return s;s+=1,n=e()}return-1}insertBefore(t,e){t!=null&&(this.remove(t),t.next=e,e!=null?(t.prev=e.prev,e.prev!=null&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):this.tail!=null?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=null,this.head=this.tail=t),this.length+=1)}offset(t){let e=0,n=this.head;for(;n!=null;){if(n===t)return e;e+=n.length(),n=n.next}return-1}remove(t){this.contains(t)&&(t.prev!=null&&(t.prev.next=t.next),t.next!=null&&(t.next.prev=t.prev),t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)}iterator(t=this.head){return()=>{const e=t;return t!=null&&(t=t.next),e}}find(t,e=!1){const n=this.iterator();let s=n();for(;s;){const i=s.length();if(t<i||e&&t===i&&(s.next==null||s.next.length()!==0))return[s,t];t-=i,s=n()}return[null,0]}forEach(t){const e=this.iterator();let n=e();for(;n;)t(n),n=e()}forEachAt(t,e,n){if(e<=0)return;const[s,i]=this.find(t);let o=t-i;const a=this.iterator(s);let c=a();for(;c&&o<t+e;){const u=c.length();t>o?n(c,t-o,Math.min(e,o+u-t)):n(c,0,Math.min(u,t+e-o)),o+=u,c=a()}}map(t){return this.reduce((e,n)=>(e.push(t(n)),e),[])}reduce(t,e){const n=this.iterator();let s=n();for(;s;)e=t(e,s),s=n();return e}}function Ou(r,t){const e=t.find(r);if(e)return e;try{return t.create(r)}catch{const n=t.create(bt.INLINE);return Array.from(r.childNodes).forEach(s=>{n.domNode.appendChild(s)}),r.parentNode&&r.parentNode.replaceChild(n.domNode,r),n.attach(),n}}const Sd=class Dn extends Nd{constructor(t,e){super(t,e),this.uiNode=null,this.build()}appendChild(t){this.insertBefore(t)}attach(){super.attach(),this.children.forEach(t=>{t.attach()})}attachUI(t){this.uiNode!=null&&this.uiNode.remove(),this.uiNode=t,Dn.uiClass&&this.uiNode.classList.add(Dn.uiClass),this.uiNode.setAttribute("contenteditable","false"),this.domNode.insertBefore(this.uiNode,this.domNode.firstChild)}build(){this.children=new t8,Array.from(this.domNode.childNodes).filter(t=>t!==this.uiNode).reverse().forEach(t=>{try{const e=Ou(t,this.scroll);this.insertBefore(e,this.children.head||void 0)}catch(e){if(e instanceof _i)return;throw e}})}deleteAt(t,e){if(t===0&&e===this.length())return this.remove();this.children.forEachAt(t,e,(n,s,i)=>{n.deleteAt(s,i)})}descendant(t,e=0){const[n,s]=this.children.find(e);return t.blotName==null&&t(n)||t.blotName!=null&&n instanceof t?[n,s]:n instanceof Dn?n.descendant(t,s):[null,-1]}descendants(t,e=0,n=Number.MAX_VALUE){let s=[],i=n;return this.children.forEachAt(e,n,(o,a,c)=>{(t.blotName==null&&t(o)||t.blotName!=null&&o instanceof t)&&s.push(o),o instanceof Dn&&(s=s.concat(o.descendants(t,a,i))),i-=c}),s}detach(){this.children.forEach(t=>{t.detach()}),super.detach()}enforceAllowedChildren(){let t=!1;this.children.forEach(e=>{t||this.statics.allowedChildren.some(n=>e instanceof n)||(e.statics.scope===bt.BLOCK_BLOT?(e.next!=null&&this.splitAfter(e),e.prev!=null&&this.splitAfter(e.prev),e.parent.unwrap(),t=!0):e instanceof Dn?e.unwrap():e.remove())})}formatAt(t,e,n,s){this.children.forEachAt(t,e,(i,o,a)=>{i.formatAt(o,a,n,s)})}insertAt(t,e,n){const[s,i]=this.children.find(t);if(s)s.insertAt(i,e,n);else{const o=n==null?this.scroll.create("text",e):this.scroll.create(e,n);this.appendChild(o)}}insertBefore(t,e){t.parent!=null&&t.parent.children.remove(t);let n=null;this.children.insertBefore(t,e||null),t.parent=this,e!=null&&(n=e.domNode),(this.domNode.parentNode!==t.domNode||this.domNode.nextSibling!==n)&&this.domNode.insertBefore(t.domNode,n),t.attach()}length(){return this.children.reduce((t,e)=>t+e.length(),0)}moveChildren(t,e){this.children.forEach(n=>{t.insertBefore(n,e)})}optimize(t){if(super.optimize(t),this.enforceAllowedChildren(),this.uiNode!=null&&this.uiNode!==this.domNode.firstChild&&this.domNode.insertBefore(this.uiNode,this.domNode.firstChild),this.children.length===0)if(this.statics.defaultChild!=null){const e=this.scroll.create(this.statics.defaultChild.blotName);this.appendChild(e)}else this.remove()}path(t,e=!1){const[n,s]=this.children.find(t,e),i=[[this,t]];return n instanceof Dn?i.concat(n.path(s,e)):(n!=null&&i.push([n,s]),i)}removeChild(t){this.children.remove(t)}replaceWith(t,e){const n=typeof t=="string"?this.scroll.create(t,e):t;return n instanceof Dn&&this.moveChildren(n),super.replaceWith(n)}split(t,e=!1){if(!e){if(t===0)return this;if(t===this.length())return this.next}const n=this.clone();return this.parent&&this.parent.insertBefore(n,this.next||void 0),this.children.forEachAt(t,this.length(),(s,i,o)=>{const a=s.split(i,e);a!=null&&n.appendChild(a)}),n}splitAfter(t){const e=this.clone();for(;t.next!=null;)e.appendChild(t.next);return this.parent&&this.parent.insertBefore(e,this.next||void 0),e}unwrap(){this.parent&&this.moveChildren(this.parent,this.next||void 0),this.remove()}update(t,e){const n=[],s=[];t.forEach(i=>{i.target===this.domNode&&i.type==="childList"&&(n.push(...i.addedNodes),s.push(...i.removedNodes))}),s.forEach(i=>{if(i.parentNode!=null&&i.tagName!=="IFRAME"&&document.body.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY)return;const o=this.scroll.find(i);o!=null&&(o.domNode.parentNode==null||o.domNode.parentNode===this.domNode)&&o.detach()}),n.filter(i=>i.parentNode===this.domNode&&i!==this.uiNode).sort((i,o)=>i===o?0:i.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1).forEach(i=>{let o=null;i.nextSibling!=null&&(o=this.scroll.find(i.nextSibling));const a=Ou(i,this.scroll);(a.next!==o||a.next==null)&&(a.parent!=null&&a.parent.removeChild(this),this.insertBefore(a,o||void 0))}),this.enforceAllowedChildren()}};Sd.uiClass="";let e8=Sd;const Hr=e8;function r8(r,t){if(Object.keys(r).length!==Object.keys(t).length)return!1;for(const e in r)if(r[e]!==t[e])return!1;return!0}const ai=class ci extends Hr{static create(t){return super.create(t)}static formats(t,e){const n=e.query(ci.blotName);if(!(n!=null&&t.tagName===n.tagName)){if(typeof this.tagName=="string")return!0;if(Array.isArray(this.tagName))return t.tagName.toLowerCase()}}constructor(t,e){super(t,e),this.attributes=new zl(this.domNode)}format(t,e){if(t===this.statics.blotName&&!e)this.children.forEach(n=>{n instanceof ci||(n=n.wrap(ci.blotName,!0)),this.attributes.copy(n)}),this.unwrap();else{const n=this.scroll.query(t,bt.INLINE);if(n==null)return;n instanceof nn?this.attributes.attribute(n,e):e&&(t!==this.statics.blotName||this.formats()[t]!==e)&&this.replaceWith(t,e)}}formats(){const t=this.attributes.values(),e=this.statics.formats(this.domNode,this.scroll);return e!=null&&(t[this.statics.blotName]=e),t}formatAt(t,e,n,s){this.formats()[n]!=null||this.scroll.query(n,bt.ATTRIBUTE)?this.isolate(t,e).format(n,s):super.formatAt(t,e,n,s)}optimize(t){super.optimize(t);const e=this.formats();if(Object.keys(e).length===0)return this.unwrap();const n=this.next;n instanceof ci&&n.prev===this&&r8(e,n.formats())&&(n.moveChildren(this),n.remove())}replaceWith(t,e){const n=super.replaceWith(t,e);return this.attributes.copy(n),n}update(t,e){super.update(t,e),t.some(n=>n.target===this.domNode&&n.type==="attributes")&&this.attributes.build()}wrap(t,e){const n=super.wrap(t,e);return n instanceof ci&&this.attributes.move(n),n}};ai.allowedChildren=[ai,je],ai.blotName="inline",ai.scope=bt.INLINE_BLOT,ai.tagName="SPAN";let n8=ai;const e1=n8,ui=class rc extends Hr{static create(t){return super.create(t)}static formats(t,e){const n=e.query(rc.blotName);if(!(n!=null&&t.tagName===n.tagName)){if(typeof this.tagName=="string")return!0;if(Array.isArray(this.tagName))return t.tagName.toLowerCase()}}constructor(t,e){super(t,e),this.attributes=new zl(this.domNode)}format(t,e){const n=this.scroll.query(t,bt.BLOCK);n!=null&&(n instanceof nn?this.attributes.attribute(n,e):t===this.statics.blotName&&!e?this.replaceWith(rc.blotName):e&&(t!==this.statics.blotName||this.formats()[t]!==e)&&this.replaceWith(t,e))}formats(){const t=this.attributes.values(),e=this.statics.formats(this.domNode,this.scroll);return e!=null&&(t[this.statics.blotName]=e),t}formatAt(t,e,n,s){this.scroll.query(n,bt.BLOCK)!=null?this.format(n,s):super.formatAt(t,e,n,s)}insertAt(t,e,n){if(n==null||this.scroll.query(e,bt.INLINE)!=null)super.insertAt(t,e,n);else{const s=this.split(t);if(s!=null){const i=this.scroll.create(e,n);s.parent.insertBefore(i,s)}else throw new Error("Attempt to insertAt after block boundaries")}}replaceWith(t,e){const n=super.replaceWith(t,e);return this.attributes.copy(n),n}update(t,e){super.update(t,e),t.some(n=>n.target===this.domNode&&n.type==="attributes")&&this.attributes.build()}};ui.blotName="block",ui.scope=bt.BLOCK_BLOT,ui.tagName="P",ui.allowedChildren=[e1,ui,je];let s8=ui;const xo=s8,nc=class extends Hr{checkMerge(){return this.next!==null&&this.next.statics.blotName===this.statics.blotName}deleteAt(t,e){super.deleteAt(t,e),this.enforceAllowedChildren()}formatAt(t,e,n,s){super.formatAt(t,e,n,s),this.enforceAllowedChildren()}insertAt(t,e,n){super.insertAt(t,e,n),this.enforceAllowedChildren()}optimize(t){super.optimize(t),this.children.length>0&&this.next!=null&&this.checkMerge()&&(this.next.moveChildren(this),this.next.remove())}};nc.blotName="container",nc.scope=bt.BLOCK_BLOT;let i8=nc;const Fl=i8;class o8 extends je{static formats(t,e){}format(t,e){super.formatAt(0,this.length(),t,e)}formatAt(t,e,n,s){t===0&&e===this.length()?this.format(n,s):super.formatAt(t,e,n,s)}formats(){return this.statics.formats(this.domNode,this.scroll)}}const fr=o8,l8={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},a8=100,hi=class extends Hr{constructor(t,e){super(null,e),this.registry=t,this.scroll=this,this.build(),this.observer=new MutationObserver(n=>{this.update(n)}),this.observer.observe(this.domNode,l8),this.attach()}create(t,e){return this.registry.create(this,t,e)}find(t,e=!1){const n=this.registry.find(t,e);return n?n.scroll===this?n:e?this.find(n.scroll.domNode.parentNode,!0):null:null}query(t,e=bt.ANY){return this.registry.query(t,e)}register(...t){return this.registry.register(...t)}build(){this.scroll!=null&&super.build()}detach(){super.detach(),this.observer.disconnect()}deleteAt(t,e){this.update(),t===0&&e===this.length()?this.children.forEach(n=>{n.remove()}):super.deleteAt(t,e)}formatAt(t,e,n,s){this.update(),super.formatAt(t,e,n,s)}insertAt(t,e,n){this.update(),super.insertAt(t,e,n)}optimize(t=[],e={}){super.optimize(e);const n=e.mutationsMap||new WeakMap;let s=Array.from(this.observer.takeRecords());for(;s.length>0;)t.push(s.pop());const i=(c,u=!0)=>{c==null||c===this||c.domNode.parentNode!=null&&(n.has(c.domNode)||n.set(c.domNode,[]),u&&i(c.parent))},o=c=>{n.has(c.domNode)&&(c instanceof Hr&&c.children.forEach(o),n.delete(c.domNode),c.optimize(e))};let a=t;for(let c=0;a.length>0;c+=1){if(c>=a8)throw new Error("[Parchment] Maximum optimize iterations reached");for(a.forEach(u=>{const d=this.find(u.target,!0);d!=null&&(d.domNode===u.target&&(u.type==="childList"?(i(this.find(u.previousSibling,!1)),Array.from(u.addedNodes).forEach(p=>{const f=this.find(p,!1);i(f,!1),f instanceof Hr&&f.children.forEach(g=>{i(g,!1)})})):u.type==="attributes"&&i(d.prev)),i(d))}),this.children.forEach(o),a=Array.from(this.observer.takeRecords()),s=a.slice();s.length>0;)t.push(s.pop())}}update(t,e={}){t=t||this.observer.takeRecords();const n=new WeakMap;t.map(s=>{const i=this.find(s.target,!0);return i==null?null:n.has(i.domNode)?(n.get(i.domNode).push(s),null):(n.set(i.domNode,[s]),i)}).forEach(s=>{s!=null&&s!==this&&n.has(s.domNode)&&s.update(n.get(s.domNode)||[],e)}),e.mutationsMap=n,n.has(this.domNode)&&super.update(n.get(this.domNode),e),this.optimize(t,e)}};hi.blotName="scroll",hi.defaultChild=xo,hi.allowedChildren=[xo,Fl],hi.scope=bt.BLOCK_BLOT,hi.tagName="DIV";let c8=hi;const r1=c8,sc=class Od extends je{static create(t){return document.createTextNode(t)}static value(t){return t.data}constructor(t,e){super(t,e),this.text=this.statics.value(this.domNode)}deleteAt(t,e){this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)}index(t,e){return this.domNode===t?e:-1}insertAt(t,e,n){n==null?(this.text=this.text.slice(0,t)+e+this.text.slice(t),this.domNode.data=this.text):super.insertAt(t,e,n)}length(){return this.text.length}optimize(t){super.optimize(t),this.text=this.statics.value(this.domNode),this.text.length===0?this.remove():this.next instanceof Od&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())}position(t,e=!1){return[this.domNode,t]}split(t,e=!1){if(!e){if(t===0)return this;if(t===this.length())return this.next}const n=this.scroll.create(this.domNode.splitText(t));return this.parent.insertBefore(n,this.next||void 0),this.text=this.statics.value(this.domNode),n}update(t,e){t.some(n=>n.type==="characterData"&&n.target===this.domNode)&&(this.text=this.statics.value(this.domNode))}value(){return this.text}};sc.blotName="text",sc.scope=bt.INLINE_BLOT;let u8=sc;const xl=u8,h8=Object.freeze(Object.defineProperty({__proto__:null,Attributor:nn,AttributorStore:zl,BlockBlot:xo,ClassAttributor:zr,ContainerBlot:Fl,EmbedBlot:fr,InlineBlot:e1,LeafBlot:je,ParentBlot:Hr,Registry:Si,Scope:bt,ScrollBlot:r1,StyleAttributor:es,TextBlot:xl},Symbol.toStringTag,{value:"Module"}));var Fn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Id(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vo={exports:{}},ga,Iu;function d8(){if(Iu)return ga;Iu=1;var r=-1,t=1,e=0;function n(v,T,w,O,N){if(v===T)return v?[[e,v]]:[];if(w!=null){var L=Ct(v,T,w);if(L)return L}var E=a(v,T),I=v.substring(0,E);v=v.substring(E),T=T.substring(E),E=u(v,T);var $=v.substring(v.length-E);v=v.substring(0,v.length-E),T=T.substring(0,T.length-E);var j=s(v,T);return I&&j.unshift([e,I]),$&&j.push([e,$]),S(j,N),O&&p(j),j}function s(v,T){var w;if(!v)return[[t,T]];if(!T)return[[r,v]];var O=v.length>T.length?v:T,N=v.length>T.length?T:v,L=O.indexOf(N);if(L!==-1)return w=[[t,O.substring(0,L)],[e,N],[t,O.substring(L+N.length)]],v.length>T.length&&(w[0][0]=w[2][0]=r),w;if(N.length===1)return[[r,v],[t,T]];var E=d(v,T);if(E){var I=E[0],$=E[1],j=E[2],Y=E[3],K=E[4],rt=n(I,j),nt=n($,Y);return rt.concat([[e,K]],nt)}return i(v,T)}function i(v,T){for(var w=v.length,O=T.length,N=Math.ceil((w+O)/2),L=N,E=2*N,I=new Array(E),$=new Array(E),j=0;j<E;j++)I[j]=-1,$[j]=-1;I[L+1]=0,$[L+1]=0;for(var Y=w-O,K=Y%2!==0,rt=0,nt=0,Z=0,yt=0,kt=0;kt<N;kt++){for(var J=-kt+rt;J<=kt-nt;J+=2){var ft=L+J,at;J===-kt||J!==kt&&I[ft-1]<I[ft+1]?at=I[ft+1]:at=I[ft-1]+1;for(var pt=at-J;at<w&&pt<O&&v.charAt(at)===T.charAt(pt);)at++,pt++;if(I[ft]=at,at>w)nt+=2;else if(pt>O)rt+=2;else if(K){var y=L+Y-J;if(y>=0&&y<E&&$[y]!==-1){var x=w-$[y];if(at>=x)return o(v,T,at,pt)}}}for(var A=-kt+Z;A<=kt-yt;A+=2){var y=L+A,x;A===-kt||A!==kt&&$[y-1]<$[y+1]?x=$[y+1]:x=$[y-1]+1;for(var R=x-A;x<w&&R<O&&v.charAt(w-x-1)===T.charAt(O-R-1);)x++,R++;if($[y]=x,x>w)yt+=2;else if(R>O)Z+=2;else if(!K){var ft=L+Y-A;if(ft>=0&&ft<E&&I[ft]!==-1){var at=I[ft],pt=L+at-ft;if(x=w-x,at>=x)return o(v,T,at,pt)}}}}return[[r,v],[t,T]]}function o(v,T,w,O){var N=v.substring(0,w),L=T.substring(0,O),E=v.substring(w),I=T.substring(O),$=n(N,L),j=n(E,I);return $.concat(j)}function a(v,T){if(!v||!T||v.charAt(0)!==T.charAt(0))return 0;for(var w=0,O=Math.min(v.length,T.length),N=O,L=0;w<N;)v.substring(L,N)==T.substring(L,N)?(w=N,L=w):O=N,N=Math.floor((O-w)/2+w);return B(v.charCodeAt(N-1))&&N--,N}function c(v,T){var w=v.length,O=T.length;if(w==0||O==0)return 0;w>O?v=v.substring(w-O):w<O&&(T=T.substring(0,w));var N=Math.min(w,O);if(v==T)return N;for(var L=0,E=1;;){var I=v.substring(N-E),$=T.indexOf(I);if($==-1)return L;E+=$,($==0||v.substring(N-E)==T.substring(0,E))&&(L=E,E++)}}function u(v,T){if(!v||!T||v.slice(-1)!==T.slice(-1))return 0;for(var w=0,O=Math.min(v.length,T.length),N=O,L=0;w<N;)v.substring(v.length-N,v.length-L)==T.substring(T.length-N,T.length-L)?(w=N,L=w):O=N,N=Math.floor((O-w)/2+w);return q(v.charCodeAt(v.length-N))&&N--,N}function d(v,T){var w=v.length>T.length?v:T,O=v.length>T.length?T:v;if(w.length<4||O.length*2<w.length)return null;function N(nt,Z,yt){for(var kt=nt.substring(yt,yt+Math.floor(nt.length/4)),J=-1,ft="",at,pt,y,x;(J=Z.indexOf(kt,J+1))!==-1;){var A=a(nt.substring(yt),Z.substring(J)),R=u(nt.substring(0,yt),Z.substring(0,J));ft.length<R+A&&(ft=Z.substring(J-R,J)+Z.substring(J,J+A),at=nt.substring(0,yt-R),pt=nt.substring(yt+A),y=Z.substring(0,J-R),x=Z.substring(J+A))}return ft.length*2>=nt.length?[at,pt,y,x,ft]:null}var L=N(w,O,Math.ceil(w.length/4)),E=N(w,O,Math.ceil(w.length/2)),I;if(!L&&!E)return null;E?L?I=L[4].length>E[4].length?L:E:I=E:I=L;var $,j,Y,K;v.length>T.length?($=I[0],j=I[1],Y=I[2],K=I[3]):(Y=I[0],K=I[1],$=I[2],j=I[3]);var rt=I[4];return[$,j,Y,K,rt]}function p(v){for(var T=!1,w=[],O=0,N=null,L=0,E=0,I=0,$=0,j=0;L<v.length;)v[L][0]==e?(w[O++]=L,E=$,I=j,$=0,j=0,N=v[L][1]):(v[L][0]==t?$+=v[L][1].length:j+=v[L][1].length,N&&N.length<=Math.max(E,I)&&N.length<=Math.max($,j)&&(v.splice(w[O-1],0,[r,N]),v[w[O-1]+1][0]=t,O--,O--,L=O>0?w[O-1]:-1,E=0,I=0,$=0,j=0,N=null,T=!0)),L++;for(T&&S(v),_(v),L=1;L<v.length;){if(v[L-1][0]==r&&v[L][0]==t){var Y=v[L-1][1],K=v[L][1],rt=c(Y,K),nt=c(K,Y);rt>=nt?(rt>=Y.length/2||rt>=K.length/2)&&(v.splice(L,0,[e,K.substring(0,rt)]),v[L-1][1]=Y.substring(0,Y.length-rt),v[L+1][1]=K.substring(rt),L++):(nt>=Y.length/2||nt>=K.length/2)&&(v.splice(L,0,[e,Y.substring(0,nt)]),v[L-1][0]=t,v[L-1][1]=K.substring(0,K.length-nt),v[L+1][0]=r,v[L+1][1]=Y.substring(nt),L++),L++}L++}}var f=/[^a-zA-Z0-9]/,g=/\s/,b=/[\r\n]/,C=/\n\r?\n$/,M=/^\r?\n\r?\n/;function _(v){function T(nt,Z){if(!nt||!Z)return 6;var yt=nt.charAt(nt.length-1),kt=Z.charAt(0),J=yt.match(f),ft=kt.match(f),at=J&&yt.match(g),pt=ft&&kt.match(g),y=at&&yt.match(b),x=pt&&kt.match(b),A=y&&nt.match(C),R=x&&Z.match(M);return A||R?5:y||x?4:J&&!at&&pt?3:at||pt?2:J||ft?1:0}for(var w=1;w<v.length-1;){if(v[w-1][0]==e&&v[w+1][0]==e){var O=v[w-1][1],N=v[w][1],L=v[w+1][1],E=u(O,N);if(E){var I=N.substring(N.length-E);O=O.substring(0,O.length-E),N=I+N.substring(0,N.length-E),L=I+L}for(var $=O,j=N,Y=L,K=T(O,N)+T(N,L);N.charAt(0)===L.charAt(0);){O+=N.charAt(0),N=N.substring(1)+L.charAt(0),L=L.substring(1);var rt=T(O,N)+T(N,L);rt>=K&&(K=rt,$=O,j=N,Y=L)}v[w-1][1]!=$&&($?v[w-1][1]=$:(v.splice(w-1,1),w--),v[w][1]=j,Y?v[w+1][1]=Y:(v.splice(w+1,1),w--))}w++}}function S(v,T){v.push([e,""]);for(var w=0,O=0,N=0,L="",E="",I;w<v.length;){if(w<v.length-1&&!v[w][1]){v.splice(w,1);continue}switch(v[w][0]){case t:N++,E+=v[w][1],w++;break;case r:O++,L+=v[w][1],w++;break;case e:var $=w-N-O-1;if(T){if($>=0&&lt(v[$][1])){var j=v[$][1].slice(-1);if(v[$][1]=v[$][1].slice(0,-1),L=j+L,E=j+E,!v[$][1]){v.splice($,1),w--;var Y=$-1;v[Y]&&v[Y][0]===t&&(N++,E=v[Y][1]+E,Y--),v[Y]&&v[Y][0]===r&&(O++,L=v[Y][1]+L,Y--),$=Y}}if(H(v[w][1])){var j=v[w][1].charAt(0);v[w][1]=v[w][1].slice(1),L+=j,E+=j}}if(w<v.length-1&&!v[w][1]){v.splice(w,1);break}if(L.length>0||E.length>0){L.length>0&&E.length>0&&(I=a(E,L),I!==0&&($>=0?v[$][1]+=E.substring(0,I):(v.splice(0,0,[e,E.substring(0,I)]),w++),E=E.substring(I),L=L.substring(I)),I=u(E,L),I!==0&&(v[w][1]=E.substring(E.length-I)+v[w][1],E=E.substring(0,E.length-I),L=L.substring(0,L.length-I)));var K=N+O;L.length===0&&E.length===0?(v.splice(w-K,K),w=w-K):L.length===0?(v.splice(w-K,K,[t,E]),w=w-K+1):E.length===0?(v.splice(w-K,K,[r,L]),w=w-K+1):(v.splice(w-K,K,[r,L],[t,E]),w=w-K+2)}w!==0&&v[w-1][0]===e?(v[w-1][1]+=v[w][1],v.splice(w,1)):w++,N=0,O=0,L="",E="";break}}v[v.length-1][1]===""&&v.pop();var rt=!1;for(w=1;w<v.length-1;)v[w-1][0]===e&&v[w+1][0]===e&&(v[w][1].substring(v[w][1].length-v[w-1][1].length)===v[w-1][1]?(v[w][1]=v[w-1][1]+v[w][1].substring(0,v[w][1].length-v[w-1][1].length),v[w+1][1]=v[w-1][1]+v[w+1][1],v.splice(w-1,1),rt=!0):v[w][1].substring(0,v[w+1][1].length)==v[w+1][1]&&(v[w-1][1]+=v[w+1][1],v[w][1]=v[w][1].substring(v[w+1][1].length)+v[w+1][1],v.splice(w+1,1),rt=!0)),w++;rt&&S(v,T)}function B(v){return v>=55296&&v<=56319}function q(v){return v>=56320&&v<=57343}function H(v){return q(v.charCodeAt(0))}function lt(v){return B(v.charCodeAt(v.length-1))}function dt(v){for(var T=[],w=0;w<v.length;w++)v[w][1].length>0&&T.push(v[w]);return T}function ot(v,T,w,O){return lt(v)||H(O)?null:dt([[e,v],[r,T],[t,w],[e,O]])}function Ct(v,T,w){var O=typeof w=="number"?{index:w,length:0}:w.oldRange,N=typeof w=="number"?null:w.newRange,L=v.length,E=T.length;if(O.length===0&&(N===null||N.length===0)){var I=O.index,$=v.slice(0,I),j=v.slice(I),Y=N?N.index:null;t:{var K=I+E-L;if(Y!==null&&Y!==K||K<0||K>E)break t;var rt=T.slice(0,K),nt=T.slice(K);if(nt!==j)break t;var Z=Math.min(I,K),yt=$.slice(0,Z),kt=rt.slice(0,Z);if(yt!==kt)break t;var J=$.slice(Z),ft=rt.slice(Z);return ot(yt,J,ft,j)}t:{if(Y!==null&&Y!==I)break t;var at=I,rt=T.slice(0,at),nt=T.slice(at);if(rt!==$)break t;var pt=Math.min(L-at,E-at),y=j.slice(j.length-pt),x=nt.slice(nt.length-pt);if(y!==x)break t;var J=j.slice(0,j.length-pt),ft=nt.slice(0,nt.length-pt);return ot($,J,ft,y)}}if(O.length>0&&N&&N.length===0)t:{var yt=v.slice(0,O.index),y=v.slice(O.index+O.length),Z=yt.length,pt=y.length;if(E<Z+pt)break t;var kt=T.slice(0,Z),x=T.slice(E-pt);if(yt!==kt||y!==x)break t;var J=v.slice(Z,L-pt),ft=T.slice(Z,E-pt);return ot(yt,J,ft,y)}return null}function xt(v,T,w,O){return n(v,T,w,O,!0)}return xt.INSERT=t,xt.DELETE=r,xt.EQUAL=e,ga=xt,ga}var Yi={exports:{}};Yi.exports;var ju;function jd(){return ju||(ju=1,(function(r,t){var e=200,n="__lodash_hash_undefined__",s=9007199254740991,i="[object Arguments]",o="[object Array]",a="[object Boolean]",c="[object Date]",u="[object Error]",d="[object Function]",p="[object GeneratorFunction]",f="[object Map]",g="[object Number]",b="[object Object]",C="[object Promise]",M="[object RegExp]",_="[object Set]",S="[object String]",B="[object Symbol]",q="[object WeakMap]",H="[object ArrayBuffer]",lt="[object DataView]",dt="[object Float32Array]",ot="[object Float64Array]",Ct="[object Int8Array]",xt="[object Int16Array]",v="[object Int32Array]",T="[object Uint8Array]",w="[object Uint8ClampedArray]",O="[object Uint16Array]",N="[object Uint32Array]",L=/[\\^$.*+?()[\]{}|]/g,E=/\w*$/,I=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,j={};j[i]=j[o]=j[H]=j[lt]=j[a]=j[c]=j[dt]=j[ot]=j[Ct]=j[xt]=j[v]=j[f]=j[g]=j[b]=j[M]=j[_]=j[S]=j[B]=j[T]=j[w]=j[O]=j[N]=!0,j[u]=j[d]=j[q]=!1;var Y=typeof Fn=="object"&&Fn&&Fn.Object===Object&&Fn,K=typeof self=="object"&&self&&self.Object===Object&&self,rt=Y||K||Function("return this")(),nt=t&&!t.nodeType&&t,Z=nt&&!0&&r&&!r.nodeType&&r,yt=Z&&Z.exports===nt;function kt(l,h){return l.set(h[0],h[1]),l}function J(l,h){return l.add(h),l}function ft(l,h){for(var m=-1,k=l?l.length:0;++m<k&&h(l[m],m,l)!==!1;);return l}function at(l,h){for(var m=-1,k=h.length,X=l.length;++m<k;)l[X+m]=h[m];return l}function pt(l,h,m,k){for(var X=-1,z=l?l.length:0;++X<z;)m=h(m,l[X],X,l);return m}function y(l,h){for(var m=-1,k=Array(l);++m<l;)k[m]=h(m);return k}function x(l,h){return l==null?void 0:l[h]}function A(l){var h=!1;if(l!=null&&typeof l.toString!="function")try{h=!!(l+"")}catch{}return h}function R(l){var h=-1,m=Array(l.size);return l.forEach(function(k,X){m[++h]=[X,k]}),m}function P(l,h){return function(m){return l(h(m))}}function U(l){var h=-1,m=Array(l.size);return l.forEach(function(k){m[++h]=k}),m}var tt=Array.prototype,Q=Function.prototype,W=Object.prototype,V=rt["__core-js_shared__"],vt=(function(){var l=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||"");return l?"Symbol(src)_1."+l:""})(),et=Q.toString,st=W.hasOwnProperty,wt=W.toString,Nt=RegExp("^"+et.call(st).replace(L,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Lt=yt?rt.Buffer:void 0,Et=rt.Symbol,Ht=rt.Uint8Array,Mt=P(Object.getPrototypeOf,Object),pe=Object.create,ge=W.propertyIsEnumerable,Xe=tt.splice,We=Object.getOwnPropertySymbols,Yt=Lt?Lt.isBuffer:void 0,me=P(Object.keys,Object),Ae=ie(rt,"DataView"),xe=ie(rt,"Map"),se=ie(rt,"Promise"),Je=ie(rt,"Set"),Cr=ie(rt,"WeakMap"),Re=ie(Object,"create"),kr=Pt(Ae),He=Pt(xe),xr=Pt(se),_r=Pt(Je),Lr=Pt(Cr),Le=Et?Et.prototype:void 0,an=Le?Le.valueOf:void 0;function we(l){var h=-1,m=l?l.length:0;for(this.clear();++h<m;){var k=l[h];this.set(k[0],k[1])}}function rs(){this.__data__=Re?Re(null):{}}function ns(l){return this.has(l)&&delete this.__data__[l]}function ss(l){var h=this.__data__;if(Re){var m=h[l];return m===n?void 0:m}return st.call(h,l)?h[l]:void 0}function cn(l){var h=this.__data__;return Re?h[l]!==void 0:st.call(h,l)}function Mr(l,h){var m=this.__data__;return m[l]=Re&&h===void 0?n:h,this}we.prototype.clear=rs,we.prototype.delete=ns,we.prototype.get=ss,we.prototype.has=cn,we.prototype.set=Mr;function Ot(l){var h=-1,m=l?l.length:0;for(this.clear();++h<m;){var k=l[h];this.set(k[0],k[1])}}function is(){this.__data__=[]}function os(l){var h=this.__data__,m=er(h,l);if(m<0)return!1;var k=h.length-1;return m==k?h.pop():Xe.call(h,m,1),!0}function ls(l){var h=this.__data__,m=er(h,l);return m<0?void 0:h[m][1]}function as(l){return er(this.__data__,l)>-1}function cs(l,h){var m=this.__data__,k=er(m,l);return k<0?m.push([l,h]):m[k][1]=h,this}Ot.prototype.clear=is,Ot.prototype.delete=os,Ot.prototype.get=ls,Ot.prototype.has=as,Ot.prototype.set=cs;function jt(l){var h=-1,m=l?l.length:0;for(this.clear();++h<m;){var k=l[h];this.set(k[0],k[1])}}function us(){this.__data__={hash:new we,map:new(xe||Ot),string:new we}}function hs(l){return De(this,l).delete(l)}function ds(l){return De(this,l).get(l)}function fs(l){return De(this,l).has(l)}function ps(l,h){return De(this,l).set(l,h),this}jt.prototype.clear=us,jt.prototype.delete=hs,jt.prototype.get=ds,jt.prototype.has=fs,jt.prototype.set=ps;function Vt(l){this.__data__=new Ot(l)}function gs(){this.__data__=new Ot}function ms(l){return this.__data__.delete(l)}function vs(l){return this.__data__.get(l)}function ws(l){return this.__data__.has(l)}function bs(l,h){var m=this.__data__;if(m instanceof Ot){var k=m.__data__;if(!xe||k.length<e-1)return k.push([l,h]),this;m=this.__data__=new jt(k)}return m.set(l,h),this}Vt.prototype.clear=gs,Vt.prototype.delete=ms,Vt.prototype.get=vs,Vt.prototype.has=ws,Vt.prototype.set=bs;function tr(l,h){var m=Ar(l)||nr(l)?y(l.length,String):[],k=m.length,X=!!k;for(var z in l)st.call(l,z)&&!(X&&(z=="length"||Is(z,k)))&&m.push(z);return m}function un(l,h,m){var k=l[h];(!(st.call(l,h)&&gn(k,m))||m===void 0&&!(h in l))&&(l[h]=m)}function er(l,h){for(var m=l.length;m--;)if(gn(l[m][0],h))return m;return-1}function ce(l,h){return l&&Nr(h,Or(h),l)}function Er(l,h,m,k,X,z,ut){var ct;if(k&&(ct=z?k(l,X,z,ut):k(l)),ct!==void 0)return ct;if(!he(l))return l;var At=Ar(l);if(At){if(ct=Ss(l),!h)return Ts(l,ct)}else{var gt=ye(l),Bt=gt==d||gt==p;if(mn(l))return rr(l,h);if(gt==b||gt==i||Bt&&!z){if(A(l))return z?l:{};if(ct=ue(Bt?{}:l),!h)return Ns(l,ce(ct,l))}else{if(!j[gt])return z?l:{};ct=Os(l,gt,Er,h)}}ut||(ut=new Vt);var Zt=ut.get(l);if(Zt)return Zt;if(ut.set(l,ct),!At)var St=m?As(l):Or(l);return ft(St||l,function(qt,It){St&&(It=qt,qt=l[It]),un(ct,It,Er(qt,h,m,k,It,l,ut))}),ct}function ys(l){return he(l)?pe(l):{}}function Cs(l,h,m){var k=h(l);return Ar(l)?k:at(k,m(l))}function ks(l){return wt.call(l)}function xs(l){if(!he(l)||Bs(l))return!1;var h=Sr(l)||A(l)?Nt:I;return h.test(Pt(l))}function _s(l){if(!fn(l))return me(l);var h=[];for(var m in Object(l))st.call(l,m)&&m!="constructor"&&h.push(m);return h}function rr(l,h){if(h)return l.slice();var m=new l.constructor(l.length);return l.copy(m),m}function Tr(l){var h=new l.constructor(l.byteLength);return new Ht(h).set(new Ht(l)),h}function $e(l,h){var m=h?Tr(l.buffer):l.buffer;return new l.constructor(m,l.byteOffset,l.byteLength)}function hn(l,h,m){var k=h?m(R(l),!0):R(l);return pt(k,kt,new l.constructor)}function dn(l){var h=new l.constructor(l.source,E.exec(l));return h.lastIndex=l.lastIndex,h}function Ls(l,h,m){var k=h?m(U(l),!0):U(l);return pt(k,J,new l.constructor)}function Ms(l){return an?Object(an.call(l)):{}}function Es(l,h){var m=h?Tr(l.buffer):l.buffer;return new l.constructor(m,l.byteOffset,l.length)}function Ts(l,h){var m=-1,k=l.length;for(h||(h=Array(k));++m<k;)h[m]=l[m];return h}function Nr(l,h,m,k){m||(m={});for(var X=-1,z=h.length;++X<z;){var ut=h[X],ct=void 0;un(m,ut,ct===void 0?l[ut]:ct)}return m}function Ns(l,h){return Nr(l,be(l),h)}function As(l){return Cs(l,Or,be)}function De(l,h){var m=l.__data__;return js(h)?m[typeof h=="string"?"string":"hash"]:m.map}function ie(l,h){var m=x(l,h);return xs(m)?m:void 0}var be=We?P(We,Object):Rs,ye=ks;(Ae&&ye(new Ae(new ArrayBuffer(1)))!=lt||xe&&ye(new xe)!=f||se&&ye(se.resolve())!=C||Je&&ye(new Je)!=_||Cr&&ye(new Cr)!=q)&&(ye=function(l){var h=wt.call(l),m=h==b?l.constructor:void 0,k=m?Pt(m):void 0;if(k)switch(k){case kr:return lt;case He:return f;case xr:return C;case _r:return _;case Lr:return q}return h});function Ss(l){var h=l.length,m=l.constructor(h);return h&&typeof l[0]=="string"&&st.call(l,"index")&&(m.index=l.index,m.input=l.input),m}function ue(l){return typeof l.constructor=="function"&&!fn(l)?ys(Mt(l)):{}}function Os(l,h,m,k){var X=l.constructor;switch(h){case H:return Tr(l);case a:case c:return new X(+l);case lt:return $e(l,k);case dt:case ot:case Ct:case xt:case v:case T:case w:case O:case N:return Es(l,k);case f:return hn(l,k,m);case g:case S:return new X(l);case M:return dn(l);case _:return Ls(l,k,m);case B:return Ms(l)}}function Is(l,h){return h=h??s,!!h&&(typeof l=="number"||$.test(l))&&l>-1&&l%1==0&&l<h}function js(l){var h=typeof l;return h=="string"||h=="number"||h=="symbol"||h=="boolean"?l!=="__proto__":l===null}function Bs(l){return!!vt&&vt in l}function fn(l){var h=l&&l.constructor,m=typeof h=="function"&&h.prototype||W;return l===m}function Pt(l){if(l!=null){try{return et.call(l)}catch{}try{return l+""}catch{}}return""}function pn(l){return Er(l,!0,!0)}function gn(l,h){return l===h||l!==l&&h!==h}function nr(l){return qs(l)&&st.call(l,"callee")&&(!ge.call(l,"callee")||wt.call(l)==i)}var Ar=Array.isArray;function sr(l){return l!=null&&vn(l.length)&&!Sr(l)}function qs(l){return wn(l)&&sr(l)}var mn=Yt||Hs;function Sr(l){var h=he(l)?wt.call(l):"";return h==d||h==p}function vn(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=s}function he(l){var h=typeof l;return!!l&&(h=="object"||h=="function")}function wn(l){return!!l&&typeof l=="object"}function Or(l){return sr(l)?tr(l):_s(l)}function Rs(){return[]}function Hs(){return!1}r.exports=pn})(Yi,Yi.exports)),Yi.exports}var Qi={exports:{}};Qi.exports;var Bu;function Bd(){return Bu||(Bu=1,(function(r,t){var e=200,n="__lodash_hash_undefined__",s=1,i=2,o=9007199254740991,a="[object Arguments]",c="[object Array]",u="[object AsyncFunction]",d="[object Boolean]",p="[object Date]",f="[object Error]",g="[object Function]",b="[object GeneratorFunction]",C="[object Map]",M="[object Number]",_="[object Null]",S="[object Object]",B="[object Promise]",q="[object Proxy]",H="[object RegExp]",lt="[object Set]",dt="[object String]",ot="[object Symbol]",Ct="[object Undefined]",xt="[object WeakMap]",v="[object ArrayBuffer]",T="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",N="[object Int8Array]",L="[object Int16Array]",E="[object Int32Array]",I="[object Uint8Array]",$="[object Uint8ClampedArray]",j="[object Uint16Array]",Y="[object Uint32Array]",K=/[\\^$.*+?()[\]{}|]/g,rt=/^\[object .+?Constructor\]$/,nt=/^(?:0|[1-9]\d*)$/,Z={};Z[w]=Z[O]=Z[N]=Z[L]=Z[E]=Z[I]=Z[$]=Z[j]=Z[Y]=!0,Z[a]=Z[c]=Z[v]=Z[d]=Z[T]=Z[p]=Z[f]=Z[g]=Z[C]=Z[M]=Z[S]=Z[H]=Z[lt]=Z[dt]=Z[xt]=!1;var yt=typeof Fn=="object"&&Fn&&Fn.Object===Object&&Fn,kt=typeof self=="object"&&self&&self.Object===Object&&self,J=yt||kt||Function("return this")(),ft=t&&!t.nodeType&&t,at=ft&&!0&&r&&!r.nodeType&&r,pt=at&&at.exports===ft,y=pt&&yt.process,x=(function(){try{return y&&y.binding&&y.binding("util")}catch{}})(),A=x&&x.isTypedArray;function R(l,h){for(var m=-1,k=l==null?0:l.length,X=0,z=[];++m<k;){var ut=l[m];h(ut,m,l)&&(z[X++]=ut)}return z}function P(l,h){for(var m=-1,k=h.length,X=l.length;++m<k;)l[X+m]=h[m];return l}function U(l,h){for(var m=-1,k=l==null?0:l.length;++m<k;)if(h(l[m],m,l))return!0;return!1}function tt(l,h){for(var m=-1,k=Array(l);++m<l;)k[m]=h(m);return k}function Q(l){return function(h){return l(h)}}function W(l,h){return l.has(h)}function V(l,h){return l==null?void 0:l[h]}function vt(l){var h=-1,m=Array(l.size);return l.forEach(function(k,X){m[++h]=[X,k]}),m}function et(l,h){return function(m){return l(h(m))}}function st(l){var h=-1,m=Array(l.size);return l.forEach(function(k){m[++h]=k}),m}var wt=Array.prototype,Nt=Function.prototype,Lt=Object.prototype,Et=J["__core-js_shared__"],Ht=Nt.toString,Mt=Lt.hasOwnProperty,pe=(function(){var l=/[^.]+$/.exec(Et&&Et.keys&&Et.keys.IE_PROTO||"");return l?"Symbol(src)_1."+l:""})(),ge=Lt.toString,Xe=RegExp("^"+Ht.call(Mt).replace(K,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=pt?J.Buffer:void 0,Yt=J.Symbol,me=J.Uint8Array,Ae=Lt.propertyIsEnumerable,xe=wt.splice,se=Yt?Yt.toStringTag:void 0,Je=Object.getOwnPropertySymbols,Cr=We?We.isBuffer:void 0,Re=et(Object.keys,Object),kr=be(J,"DataView"),He=be(J,"Map"),xr=be(J,"Promise"),_r=be(J,"Set"),Lr=be(J,"WeakMap"),Le=be(Object,"create"),an=Pt(kr),we=Pt(He),rs=Pt(xr),ns=Pt(_r),ss=Pt(Lr),cn=Yt?Yt.prototype:void 0,Mr=cn?cn.valueOf:void 0;function Ot(l){var h=-1,m=l==null?0:l.length;for(this.clear();++h<m;){var k=l[h];this.set(k[0],k[1])}}function is(){this.__data__=Le?Le(null):{},this.size=0}function os(l){var h=this.has(l)&&delete this.__data__[l];return this.size-=h?1:0,h}function ls(l){var h=this.__data__;if(Le){var m=h[l];return m===n?void 0:m}return Mt.call(h,l)?h[l]:void 0}function as(l){var h=this.__data__;return Le?h[l]!==void 0:Mt.call(h,l)}function cs(l,h){var m=this.__data__;return this.size+=this.has(l)?0:1,m[l]=Le&&h===void 0?n:h,this}Ot.prototype.clear=is,Ot.prototype.delete=os,Ot.prototype.get=ls,Ot.prototype.has=as,Ot.prototype.set=cs;function jt(l){var h=-1,m=l==null?0:l.length;for(this.clear();++h<m;){var k=l[h];this.set(k[0],k[1])}}function us(){this.__data__=[],this.size=0}function hs(l){var h=this.__data__,m=rr(h,l);if(m<0)return!1;var k=h.length-1;return m==k?h.pop():xe.call(h,m,1),--this.size,!0}function ds(l){var h=this.__data__,m=rr(h,l);return m<0?void 0:h[m][1]}function fs(l){return rr(this.__data__,l)>-1}function ps(l,h){var m=this.__data__,k=rr(m,l);return k<0?(++this.size,m.push([l,h])):m[k][1]=h,this}jt.prototype.clear=us,jt.prototype.delete=hs,jt.prototype.get=ds,jt.prototype.has=fs,jt.prototype.set=ps;function Vt(l){var h=-1,m=l==null?0:l.length;for(this.clear();++h<m;){var k=l[h];this.set(k[0],k[1])}}function gs(){this.size=0,this.__data__={hash:new Ot,map:new(He||jt),string:new Ot}}function ms(l){var h=ie(this,l).delete(l);return this.size-=h?1:0,h}function vs(l){return ie(this,l).get(l)}function ws(l){return ie(this,l).has(l)}function bs(l,h){var m=ie(this,l),k=m.size;return m.set(l,h),this.size+=m.size==k?0:1,this}Vt.prototype.clear=gs,Vt.prototype.delete=ms,Vt.prototype.get=vs,Vt.prototype.has=ws,Vt.prototype.set=bs;function tr(l){var h=-1,m=l==null?0:l.length;for(this.__data__=new Vt;++h<m;)this.add(l[h])}function un(l){return this.__data__.set(l,n),this}function er(l){return this.__data__.has(l)}tr.prototype.add=tr.prototype.push=un,tr.prototype.has=er;function ce(l){var h=this.__data__=new jt(l);this.size=h.size}function Er(){this.__data__=new jt,this.size=0}function ys(l){var h=this.__data__,m=h.delete(l);return this.size=h.size,m}function Cs(l){return this.__data__.get(l)}function ks(l){return this.__data__.has(l)}function xs(l,h){var m=this.__data__;if(m instanceof jt){var k=m.__data__;if(!He||k.length<e-1)return k.push([l,h]),this.size=++m.size,this;m=this.__data__=new Vt(k)}return m.set(l,h),this.size=m.size,this}ce.prototype.clear=Er,ce.prototype.delete=ys,ce.prototype.get=Cs,ce.prototype.has=ks,ce.prototype.set=xs;function _s(l,h){var m=nr(l),k=!m&&gn(l),X=!m&&!k&&sr(l),z=!m&&!k&&!X&&wn(l),ut=m||k||X||z,ct=ut?tt(l.length,String):[],At=ct.length;for(var gt in l)Mt.call(l,gt)&&!(ut&&(gt=="length"||X&&(gt=="offset"||gt=="parent")||z&&(gt=="buffer"||gt=="byteLength"||gt=="byteOffset")||Os(gt,At)))&&ct.push(gt);return ct}function rr(l,h){for(var m=l.length;m--;)if(pn(l[m][0],h))return m;return-1}function Tr(l,h,m){var k=h(l);return nr(l)?k:P(k,m(l))}function $e(l){return l==null?l===void 0?Ct:_:se&&se in Object(l)?ye(l):fn(l)}function hn(l){return he(l)&&$e(l)==a}function dn(l,h,m,k,X){return l===h?!0:l==null||h==null||!he(l)&&!he(h)?l!==l&&h!==h:Ls(l,h,m,k,dn,X)}function Ls(l,h,m,k,X,z){var ut=nr(l),ct=nr(h),At=ut?c:ue(l),gt=ct?c:ue(h);At=At==a?S:At,gt=gt==a?S:gt;var Bt=At==S,Zt=gt==S,St=At==gt;if(St&&sr(l)){if(!sr(h))return!1;ut=!0,Bt=!1}if(St&&!Bt)return z||(z=new ce),ut||wn(l)?Nr(l,h,m,k,X,z):Ns(l,h,At,m,k,X,z);if(!(m&s)){var qt=Bt&&Mt.call(l,"__wrapped__"),It=Zt&&Mt.call(h,"__wrapped__");if(qt||It){var Me=qt?l.value():l,Ce=It?h.value():h;return z||(z=new ce),X(Me,Ce,m,k,z)}}return St?(z||(z=new ce),As(l,h,m,k,X,z)):!1}function Ms(l){if(!vn(l)||js(l))return!1;var h=mn(l)?Xe:rt;return h.test(Pt(l))}function Es(l){return he(l)&&Sr(l.length)&&!!Z[$e(l)]}function Ts(l){if(!Bs(l))return Re(l);var h=[];for(var m in Object(l))Mt.call(l,m)&&m!="constructor"&&h.push(m);return h}function Nr(l,h,m,k,X,z){var ut=m&s,ct=l.length,At=h.length;if(ct!=At&&!(ut&&At>ct))return!1;var gt=z.get(l);if(gt&&z.get(h))return gt==h;var Bt=-1,Zt=!0,St=m&i?new tr:void 0;for(z.set(l,h),z.set(h,l);++Bt<ct;){var qt=l[Bt],It=h[Bt];if(k)var Me=ut?k(It,qt,Bt,h,l,z):k(qt,It,Bt,l,h,z);if(Me!==void 0){if(Me)continue;Zt=!1;break}if(St){if(!U(h,function(Ce,Pe){if(!W(St,Pe)&&(qt===Ce||X(qt,Ce,m,k,z)))return St.push(Pe)})){Zt=!1;break}}else if(!(qt===It||X(qt,It,m,k,z))){Zt=!1;break}}return z.delete(l),z.delete(h),Zt}function Ns(l,h,m,k,X,z,ut){switch(m){case T:if(l.byteLength!=h.byteLength||l.byteOffset!=h.byteOffset)return!1;l=l.buffer,h=h.buffer;case v:return!(l.byteLength!=h.byteLength||!z(new me(l),new me(h)));case d:case p:case M:return pn(+l,+h);case f:return l.name==h.name&&l.message==h.message;case H:case dt:return l==h+"";case C:var ct=vt;case lt:var At=k&s;if(ct||(ct=st),l.size!=h.size&&!At)return!1;var gt=ut.get(l);if(gt)return gt==h;k|=i,ut.set(l,h);var Bt=Nr(ct(l),ct(h),k,X,z,ut);return ut.delete(l),Bt;case ot:if(Mr)return Mr.call(l)==Mr.call(h)}return!1}function As(l,h,m,k,X,z){var ut=m&s,ct=De(l),At=ct.length,gt=De(h),Bt=gt.length;if(At!=Bt&&!ut)return!1;for(var Zt=At;Zt--;){var St=ct[Zt];if(!(ut?St in h:Mt.call(h,St)))return!1}var qt=z.get(l);if(qt&&z.get(h))return qt==h;var It=!0;z.set(l,h),z.set(h,l);for(var Me=ut;++Zt<At;){St=ct[Zt];var Ce=l[St],Pe=h[St];if(k)var Di=ut?k(Pe,Ce,St,h,l,z):k(Ce,Pe,St,l,h,z);if(!(Di===void 0?Ce===Pe||X(Ce,Pe,m,k,z):Di)){It=!1;break}Me||(Me=St=="constructor")}if(It&&!Me){var bn=l.constructor,yn=h.constructor;bn!=yn&&"constructor"in l&&"constructor"in h&&!(typeof bn=="function"&&bn instanceof bn&&typeof yn=="function"&&yn instanceof yn)&&(It=!1)}return z.delete(l),z.delete(h),It}function De(l){return Tr(l,Or,Ss)}function ie(l,h){var m=l.__data__;return Is(h)?m[typeof h=="string"?"string":"hash"]:m.map}function be(l,h){var m=V(l,h);return Ms(m)?m:void 0}function ye(l){var h=Mt.call(l,se),m=l[se];try{l[se]=void 0;var k=!0}catch{}var X=ge.call(l);return k&&(h?l[se]=m:delete l[se]),X}var Ss=Je?function(l){return l==null?[]:(l=Object(l),R(Je(l),function(h){return Ae.call(l,h)}))}:Rs,ue=$e;(kr&&ue(new kr(new ArrayBuffer(1)))!=T||He&&ue(new He)!=C||xr&&ue(xr.resolve())!=B||_r&&ue(new _r)!=lt||Lr&&ue(new Lr)!=xt)&&(ue=function(l){var h=$e(l),m=h==S?l.constructor:void 0,k=m?Pt(m):"";if(k)switch(k){case an:return T;case we:return C;case rs:return B;case ns:return lt;case ss:return xt}return h});function Os(l,h){return h=h??o,!!h&&(typeof l=="number"||nt.test(l))&&l>-1&&l%1==0&&l<h}function Is(l){var h=typeof l;return h=="string"||h=="number"||h=="symbol"||h=="boolean"?l!=="__proto__":l===null}function js(l){return!!pe&&pe in l}function Bs(l){var h=l&&l.constructor,m=typeof h=="function"&&h.prototype||Lt;return l===m}function fn(l){return ge.call(l)}function Pt(l){if(l!=null){try{return Ht.call(l)}catch{}try{return l+""}catch{}}return""}function pn(l,h){return l===h||l!==l&&h!==h}var gn=hn((function(){return arguments})())?hn:function(l){return he(l)&&Mt.call(l,"callee")&&!Ae.call(l,"callee")},nr=Array.isArray;function Ar(l){return l!=null&&Sr(l.length)&&!mn(l)}var sr=Cr||Hs;function qs(l,h){return dn(l,h)}function mn(l){if(!vn(l))return!1;var h=$e(l);return h==g||h==b||h==u||h==q}function Sr(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=o}function vn(l){var h=typeof l;return l!=null&&(h=="object"||h=="function")}function he(l){return l!=null&&typeof l=="object"}var wn=A?Q(A):Es;function Or(l){return Ar(l)?_s(l):Ts(l)}function Rs(){return[]}function Hs(){return!1}r.exports=qs})(Qi,Qi.exports)),Qi.exports}var Zo={},qu;function f8(){if(qu)return Zo;qu=1,Object.defineProperty(Zo,"__esModule",{value:!0});const r=jd(),t=Bd();var e;return(function(n){function s(c={},u={},d=!1){typeof c!="object"&&(c={}),typeof u!="object"&&(u={});let p=r(u);d||(p=Object.keys(p).reduce((f,g)=>(p[g]!=null&&(f[g]=p[g]),f),{}));for(const f in c)c[f]!==void 0&&u[f]===void 0&&(p[f]=c[f]);return Object.keys(p).length>0?p:void 0}n.compose=s;function i(c={},u={}){typeof c!="object"&&(c={}),typeof u!="object"&&(u={});const d=Object.keys(c).concat(Object.keys(u)).reduce((p,f)=>(t(c[f],u[f])||(p[f]=u[f]===void 0?null:u[f]),p),{});return Object.keys(d).length>0?d:void 0}n.diff=i;function o(c={},u={}){c=c||{};const d=Object.keys(u).reduce((p,f)=>(u[f]!==c[f]&&c[f]!==void 0&&(p[f]=u[f]),p),{});return Object.keys(c).reduce((p,f)=>(c[f]!==u[f]&&u[f]===void 0&&(p[f]=null),p),d)}n.invert=o;function a(c,u,d=!1){if(typeof c!="object")return u;if(typeof u!="object")return;if(!d)return u;const p=Object.keys(u).reduce((f,g)=>(c[g]===void 0&&(f[g]=u[g]),f),{});return Object.keys(p).length>0?p:void 0}n.transform=a})(e||(e={})),Zo.default=e,Zo}var Ko={},Ru;function qd(){if(Ru)return Ko;Ru=1,Object.defineProperty(Ko,"__esModule",{value:!0});var r;return(function(t){function e(n){return typeof n.delete=="number"?n.delete:typeof n.retain=="number"?n.retain:typeof n.retain=="object"&&n.retain!==null?1:typeof n.insert=="string"?n.insert.length:1}t.length=e})(r||(r={})),Ko.default=r,Ko}var Wo={},Hu;function p8(){if(Hu)return Wo;Hu=1,Object.defineProperty(Wo,"__esModule",{value:!0});const r=qd();class t{constructor(n){this.ops=n,this.index=0,this.offset=0}hasNext(){return this.peekLength()<1/0}next(n){n||(n=1/0);const s=this.ops[this.index];if(s){const i=this.offset,o=r.default.length(s);if(n>=o-i?(n=o-i,this.index+=1,this.offset=0):this.offset+=n,typeof s.delete=="number")return{delete:n};{const a={};return s.attributes&&(a.attributes=s.attributes),typeof s.retain=="number"?a.retain=n:typeof s.retain=="object"&&s.retain!==null?a.retain=s.retain:typeof s.insert=="string"?a.insert=s.insert.substr(i,n):a.insert=s.insert,a}}else return{retain:1/0}}peek(){return this.ops[this.index]}peekLength(){return this.ops[this.index]?r.default.length(this.ops[this.index])-this.offset:1/0}peekType(){const n=this.ops[this.index];return n?typeof n.delete=="number"?"delete":typeof n.retain=="number"||typeof n.retain=="object"&&n.retain!==null?"retain":"insert":"retain"}rest(){if(this.hasNext()){if(this.offset===0)return this.ops.slice(this.index);{const n=this.offset,s=this.index,i=this.next(),o=this.ops.slice(this.index);return this.offset=n,this.index=s,[i].concat(o)}}else return[]}}return Wo.default=t,Wo}var $u;function g8(){return $u||($u=1,(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AttributeMap=t.OpIterator=t.Op=void 0;const e=d8(),n=jd(),s=Bd(),i=f8();t.AttributeMap=i.default;const o=qd();t.Op=o.default;const a=p8();t.OpIterator=a.default;const c="\0",u=(p,f)=>{if(typeof p!="object"||p===null)throw new Error(`cannot retain a ${typeof p}`);if(typeof f!="object"||f===null)throw new Error(`cannot retain a ${typeof f}`);const g=Object.keys(p)[0];if(!g||g!==Object.keys(f)[0])throw new Error(`embed types not matched: ${g} != ${Object.keys(f)[0]}`);return[g,p[g],f[g]]};class d{constructor(f){Array.isArray(f)?this.ops=f:f!=null&&Array.isArray(f.ops)?this.ops=f.ops:this.ops=[]}static registerEmbed(f,g){this.handlers[f]=g}static unregisterEmbed(f){delete this.handlers[f]}static getHandler(f){const g=this.handlers[f];if(!g)throw new Error(`no handlers for embed type "${f}"`);return g}insert(f,g){const b={};return typeof f=="string"&&f.length===0?this:(b.insert=f,g!=null&&typeof g=="object"&&Object.keys(g).length>0&&(b.attributes=g),this.push(b))}delete(f){return f<=0?this:this.push({delete:f})}retain(f,g){if(typeof f=="number"&&f<=0)return this;const b={retain:f};return g!=null&&typeof g=="object"&&Object.keys(g).length>0&&(b.attributes=g),this.push(b)}push(f){let g=this.ops.length,b=this.ops[g-1];if(f=n(f),typeof b=="object"){if(typeof f.delete=="number"&&typeof b.delete=="number")return this.ops[g-1]={delete:b.delete+f.delete},this;if(typeof b.delete=="number"&&f.insert!=null&&(g-=1,b=this.ops[g-1],typeof b!="object"))return this.ops.unshift(f),this;if(s(f.attributes,b.attributes)){if(typeof f.insert=="string"&&typeof b.insert=="string")return this.ops[g-1]={insert:b.insert+f.insert},typeof f.attributes=="object"&&(this.ops[g-1].attributes=f.attributes),this;if(typeof f.retain=="number"&&typeof b.retain=="number")return this.ops[g-1]={retain:b.retain+f.retain},typeof f.attributes=="object"&&(this.ops[g-1].attributes=f.attributes),this}}return g===this.ops.length?this.ops.push(f):this.ops.splice(g,0,f),this}chop(){const f=this.ops[this.ops.length-1];return f&&typeof f.retain=="number"&&!f.attributes&&this.ops.pop(),this}filter(f){return this.ops.filter(f)}forEach(f){this.ops.forEach(f)}map(f){return this.ops.map(f)}partition(f){const g=[],b=[];return this.forEach(C=>{(f(C)?g:b).push(C)}),[g,b]}reduce(f,g){return this.ops.reduce(f,g)}changeLength(){return this.reduce((f,g)=>g.insert?f+o.default.length(g):g.delete?f-g.delete:f,0)}length(){return this.reduce((f,g)=>f+o.default.length(g),0)}slice(f=0,g=1/0){const b=[],C=new a.default(this.ops);let M=0;for(;M<g&&C.hasNext();){let _;M<f?_=C.next(f-M):(_=C.next(g-M),b.push(_)),M+=o.default.length(_)}return new d(b)}compose(f){const g=new a.default(this.ops),b=new a.default(f.ops),C=[],M=b.peek();if(M!=null&&typeof M.retain=="number"&&M.attributes==null){let S=M.retain;for(;g.peekType()==="insert"&&g.peekLength()<=S;)S-=g.peekLength(),C.push(g.next());M.retain-S>0&&b.next(M.retain-S)}const _=new d(C);for(;g.hasNext()||b.hasNext();)if(b.peekType()==="insert")_.push(b.next());else if(g.peekType()==="delete")_.push(g.next());else{const S=Math.min(g.peekLength(),b.peekLength()),B=g.next(S),q=b.next(S);if(q.retain){const H={};if(typeof B.retain=="number")H.retain=typeof q.retain=="number"?S:q.retain;else if(typeof q.retain=="number")B.retain==null?H.insert=B.insert:H.retain=B.retain;else{const dt=B.retain==null?"insert":"retain",[ot,Ct,xt]=u(B[dt],q.retain),v=d.getHandler(ot);H[dt]={[ot]:v.compose(Ct,xt,dt==="retain")}}const lt=i.default.compose(B.attributes,q.attributes,typeof B.retain=="number");if(lt&&(H.attributes=lt),_.push(H),!b.hasNext()&&s(_.ops[_.ops.length-1],H)){const dt=new d(g.rest());return _.concat(dt).chop()}}else typeof q.delete=="number"&&(typeof B.retain=="number"||typeof B.retain=="object"&&B.retain!==null)&&_.push(q)}return _.chop()}concat(f){const g=new d(this.ops.slice());return f.ops.length>0&&(g.push(f.ops[0]),g.ops=g.ops.concat(f.ops.slice(1))),g}diff(f,g){if(this.ops===f.ops)return new d;const b=[this,f].map(B=>B.map(q=>{if(q.insert!=null)return typeof q.insert=="string"?q.insert:c;const H=B===f?"on":"with";throw new Error("diff() called "+H+" non-document")}).join("")),C=new d,M=e(b[0],b[1],g,!0),_=new a.default(this.ops),S=new a.default(f.ops);return M.forEach(B=>{let q=B[1].length;for(;q>0;){let H=0;switch(B[0]){case e.INSERT:H=Math.min(S.peekLength(),q),C.push(S.next(H));break;case e.DELETE:H=Math.min(q,_.peekLength()),_.next(H),C.delete(H);break;case e.EQUAL:H=Math.min(_.peekLength(),S.peekLength(),q);const lt=_.next(H),dt=S.next(H);s(lt.insert,dt.insert)?C.retain(H,i.default.diff(lt.attributes,dt.attributes)):C.push(dt).delete(H);break}q-=H}}),C.chop()}eachLine(f,g=`
`){const b=new a.default(this.ops);let C=new d,M=0;for(;b.hasNext();){if(b.peekType()!=="insert")return;const _=b.peek(),S=o.default.length(_)-b.peekLength(),B=typeof _.insert=="string"?_.insert.indexOf(g,S)-S:-1;if(B<0)C.push(b.next());else if(B>0)C.push(b.next(B));else{if(f(C,b.next(1).attributes||{},M)===!1)return;M+=1,C=new d}}C.length()>0&&f(C,{},M)}invert(f){const g=new d;return this.reduce((b,C)=>{if(C.insert)g.delete(o.default.length(C));else{if(typeof C.retain=="number"&&C.attributes==null)return g.retain(C.retain),b+C.retain;if(C.delete||typeof C.retain=="number"){const M=C.delete||C.retain;return f.slice(b,b+M).forEach(S=>{C.delete?g.push(S):C.retain&&C.attributes&&g.retain(o.default.length(S),i.default.invert(C.attributes,S.attributes))}),b+M}else if(typeof C.retain=="object"&&C.retain!==null){const M=f.slice(b,b+1),_=new a.default(M.ops).next(),[S,B,q]=u(C.retain,_.insert),H=d.getHandler(S);return g.retain({[S]:H.invert(B,q)},i.default.invert(C.attributes,_.attributes)),b+1}}return b},0),g.chop()}transform(f,g=!1){if(g=!!g,typeof f=="number")return this.transformPosition(f,g);const b=f,C=new a.default(this.ops),M=new a.default(b.ops),_=new d;for(;C.hasNext()||M.hasNext();)if(C.peekType()==="insert"&&(g||M.peekType()!=="insert"))_.retain(o.default.length(C.next()));else if(M.peekType()==="insert")_.push(M.next());else{const S=Math.min(C.peekLength(),M.peekLength()),B=C.next(S),q=M.next(S);if(B.delete)continue;if(q.delete)_.push(q);else{const H=B.retain,lt=q.retain;let dt=typeof lt=="object"&&lt!==null?lt:S;if(typeof H=="object"&&H!==null&&typeof lt=="object"&&lt!==null){const ot=Object.keys(H)[0];if(ot===Object.keys(lt)[0]){const Ct=d.getHandler(ot);Ct&&(dt={[ot]:Ct.transform(H[ot],lt[ot],g)})}}_.retain(dt,i.default.transform(B.attributes,q.attributes,g))}}return _.chop()}transformPosition(f,g=!1){g=!!g;const b=new a.default(this.ops);let C=0;for(;b.hasNext()&&C<=f;){const M=b.peekLength(),_=b.peekType();if(b.next(),_==="delete"){f-=Math.min(M,f-C);continue}else _==="insert"&&(C<f||!g)&&(f+=M);C+=M}return f}}d.Op=o.default,d.OpIterator=a.default,d.AttributeMap=i.default,d.handlers={},t.default=d,r.exports=d,r.exports.default=d})(Vo,Vo.exports)),Vo.exports}var wr=g8();const mt=Id(wr);class Fr extends fr{static value(){}optimize(){(this.prev||this.next)&&this.remove()}length(){return 0}value(){return""}}Fr.blotName="break";Fr.tagName="BR";let Ur=class extends xl{};const m8={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function Vl(r){return r.replace(/[&<>"']/g,t=>m8[t])}const Wr=class Wr extends e1{static compare(t,e){const n=Wr.order.indexOf(t),s=Wr.order.indexOf(e);return n>=0||s>=0?n-s:t===e?0:t<e?-1:1}formatAt(t,e,n,s){if(Wr.compare(this.statics.blotName,n)<0&&this.scroll.query(n,bt.BLOT)){const i=this.isolate(t,e);s&&i.wrap(n,s)}else super.formatAt(t,e,n,s)}optimize(t){if(super.optimize(t),this.parent instanceof Wr&&Wr.compare(this.statics.blotName,this.parent.statics.blotName)>0){const e=this.parent.isolate(this.offset(),this.length());this.moveChildren(e),e.wrap(this)}}};it(Wr,"allowedChildren",[Wr,Fr,fr,Ur]),it(Wr,"order",["cursor","inline","link","underline","strike","italic","bold","script","code"]);let sn=Wr;const Du=1;class Te extends xo{constructor(){super(...arguments);it(this,"cache",{})}delta(){return this.cache.delta==null&&(this.cache.delta=Rd(this)),this.cache.delta}deleteAt(e,n){super.deleteAt(e,n),this.cache={}}formatAt(e,n,s,i){n<=0||(this.scroll.query(s,bt.BLOCK)?e+n===this.length()&&this.format(s,i):super.formatAt(e,Math.min(n,this.length()-e-1),s,i),this.cache={})}insertAt(e,n,s){if(s!=null){super.insertAt(e,n,s),this.cache={};return}if(n.length===0)return;const i=n.split(`
`),o=i.shift();o.length>0&&(e<this.length()-1||this.children.tail==null?super.insertAt(Math.min(e,this.length()-1),o):this.children.tail.insertAt(this.children.tail.length(),o),this.cache={});let a=this;i.reduce((c,u)=>(a=a.split(c,!0),a.insertAt(0,u),u.length),e+o.length)}insertBefore(e,n){const{head:s}=this.children;super.insertBefore(e,n),s instanceof Fr&&s.remove(),this.cache={}}length(){return this.cache.length==null&&(this.cache.length=super.length()+Du),this.cache.length}moveChildren(e,n){super.moveChildren(e,n),this.cache={}}optimize(e){super.optimize(e),this.cache={}}path(e){return super.path(e,!0)}removeChild(e){super.removeChild(e),this.cache={}}split(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n&&(e===0||e>=this.length()-Du)){const i=this.clone();return e===0?(this.parent.insertBefore(i,this),this):(this.parent.insertBefore(i,this.next),i)}const s=super.split(e,n);return this.cache={},s}}Te.blotName="block";Te.tagName="P";Te.defaultChild=Fr;Te.allowedChildren=[Fr,sn,fr,Ur];class vr extends fr{attach(){super.attach(),this.attributes=new zl(this.domNode)}delta(){return new mt().insert(this.value(),{...this.formats(),...this.attributes.values()})}format(t,e){const n=this.scroll.query(t,bt.BLOCK_ATTRIBUTE);n!=null&&this.attributes.attribute(n,e)}formatAt(t,e,n,s){this.format(n,s)}insertAt(t,e,n){if(n!=null){super.insertAt(t,e,n);return}const s=e.split(`
`),i=s.pop(),o=s.map(c=>{const u=this.scroll.create(Te.blotName);return u.insertAt(0,c),u}),a=this.split(t);o.forEach(c=>{this.parent.insertBefore(c,a)}),i&&this.parent.insertBefore(this.scroll.create("text",i),a)}}vr.scope=bt.BLOCK_BLOT;function Rd(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.descendants(je).reduce((e,n)=>n.length()===0?e:e.insert(n.value(),gr(n,{},t)),new mt).insert(`
`,gr(r))}function gr(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return r==null||("formats"in r&&typeof r.formats=="function"&&(t={...t,...r.formats()},e&&delete t["code-token"]),r.parent==null||r.parent.statics.blotName==="scroll"||r.parent.statics.scope!==r.statics.scope)?t:gr(r.parent,t,e)}const pr=class pr extends fr{static value(){}constructor(t,e,n){super(t,e),this.selection=n,this.textNode=document.createTextNode(pr.CONTENTS),this.domNode.appendChild(this.textNode),this.savedLength=0}detach(){this.parent!=null&&this.parent.removeChild(this)}format(t,e){if(this.savedLength!==0){super.format(t,e);return}let n=this,s=0;for(;n!=null&&n.statics.scope!==bt.BLOCK_BLOT;)s+=n.offset(n.parent),n=n.parent;n!=null&&(this.savedLength=pr.CONTENTS.length,n.optimize(),n.formatAt(s,pr.CONTENTS.length,t,e),this.savedLength=0)}index(t,e){return t===this.textNode?0:super.index(t,e)}length(){return this.savedLength}position(){return[this.textNode,this.textNode.data.length]}remove(){super.remove(),this.parent=null}restore(){if(this.selection.composing||this.parent==null)return null;const t=this.selection.getNativeRange();for(;this.domNode.lastChild!=null&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);const e=this.prev instanceof Ur?this.prev:null,n=e?e.length():0,s=this.next instanceof Ur?this.next:null,i=s?s.text:"",{textNode:o}=this,a=o.data.split(pr.CONTENTS).join("");o.data=pr.CONTENTS;let c;if(e)c=e,(a||s)&&(e.insertAt(e.length(),a+i),s&&s.remove());else if(s)c=s,s.insertAt(0,a);else{const u=document.createTextNode(a);c=this.scroll.create(u),this.parent.insertBefore(c,this)}if(this.remove(),t){const u=(f,g)=>e&&f===e.domNode?g:f===o?n+g-1:s&&f===s.domNode?n+a.length+g:null,d=u(t.start.node,t.start.offset),p=u(t.end.node,t.end.offset);if(d!==null&&p!==null)return{startNode:c.domNode,startOffset:d,endNode:c.domNode,endOffset:p}}return null}update(t,e){if(t.some(n=>n.type==="characterData"&&n.target===this.textNode)){const n=this.restore();n&&(e.range=n)}}optimize(t){super.optimize(t);let{parent:e}=this;for(;e;){if(e.domNode.tagName==="A"){this.savedLength=pr.CONTENTS.length,e.isolate(this.offset(e),this.length()).unwrap(),this.savedLength=0;break}e=e.parent}}value(){return""}};it(pr,"blotName","cursor"),it(pr,"className","ql-cursor"),it(pr,"tagName","span"),it(pr,"CONTENTS","\uFEFF");let Oi=pr;var ma={exports:{}},Pu;function v8(){return Pu||(Pu=1,(function(r){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function s(c,u,d){this.fn=c,this.context=u,this.once=d||!1}function i(c,u,d,p,f){if(typeof d!="function")throw new TypeError("The listener must be a function");var g=new s(d,p||c,f),b=e?e+u:u;return c._events[b]?c._events[b].fn?c._events[b]=[c._events[b],g]:c._events[b].push(g):(c._events[b]=g,c._eventsCount++),c}function o(c,u){--c._eventsCount===0?c._events=new n:delete c._events[u]}function a(){this._events=new n,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],d,p;if(this._eventsCount===0)return u;for(p in d=this._events)t.call(d,p)&&u.push(e?p.slice(1):p);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(d)):u},a.prototype.listeners=function(u){var d=e?e+u:u,p=this._events[d];if(!p)return[];if(p.fn)return[p.fn];for(var f=0,g=p.length,b=new Array(g);f<g;f++)b[f]=p[f].fn;return b},a.prototype.listenerCount=function(u){var d=e?e+u:u,p=this._events[d];return p?p.fn?1:p.length:0},a.prototype.emit=function(u,d,p,f,g,b){var C=e?e+u:u;if(!this._events[C])return!1;var M=this._events[C],_=arguments.length,S,B;if(M.fn){switch(M.once&&this.removeListener(u,M.fn,void 0,!0),_){case 1:return M.fn.call(M.context),!0;case 2:return M.fn.call(M.context,d),!0;case 3:return M.fn.call(M.context,d,p),!0;case 4:return M.fn.call(M.context,d,p,f),!0;case 5:return M.fn.call(M.context,d,p,f,g),!0;case 6:return M.fn.call(M.context,d,p,f,g,b),!0}for(B=1,S=new Array(_-1);B<_;B++)S[B-1]=arguments[B];M.fn.apply(M.context,S)}else{var q=M.length,H;for(B=0;B<q;B++)switch(M[B].once&&this.removeListener(u,M[B].fn,void 0,!0),_){case 1:M[B].fn.call(M[B].context);break;case 2:M[B].fn.call(M[B].context,d);break;case 3:M[B].fn.call(M[B].context,d,p);break;case 4:M[B].fn.call(M[B].context,d,p,f);break;default:if(!S)for(H=1,S=new Array(_-1);H<_;H++)S[H-1]=arguments[H];M[B].fn.apply(M[B].context,S)}}return!0},a.prototype.on=function(u,d,p){return i(this,u,d,p,!1)},a.prototype.once=function(u,d,p){return i(this,u,d,p,!0)},a.prototype.removeListener=function(u,d,p,f){var g=e?e+u:u;if(!this._events[g])return this;if(!d)return o(this,g),this;var b=this._events[g];if(b.fn)b.fn===d&&(!f||b.once)&&(!p||b.context===p)&&o(this,g);else{for(var C=0,M=[],_=b.length;C<_;C++)(b[C].fn!==d||f&&!b[C].once||p&&b[C].context!==p)&&M.push(b[C]);M.length?this._events[g]=M.length===1?M[0]:M:o(this,g)}return this},a.prototype.removeAllListeners=function(u){var d;return u?(d=e?e+u:u,this._events[d]&&o(this,d)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=e,a.EventEmitter=a,r.exports=a})(ma)),ma.exports}var w8=v8();const b8=Id(w8),ic=new WeakMap,oc=["error","warn","log","info"];let lc="warn";function Hd(r){if(lc&&oc.indexOf(r)<=oc.indexOf(lc)){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];console[r](...e)}}function Hn(r){return oc.reduce((t,e)=>(t[e]=Hd.bind(console,e,r),t),{})}Hn.level=r=>{lc=r};Hd.level=Hn.level;const va=Hn("quill:events"),y8=["selectionchange","mousedown","mouseup","click"];y8.forEach(r=>{document.addEventListener(r,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Array.from(document.querySelectorAll(".ql-container")).forEach(s=>{const i=ic.get(s);i&&i.emitter&&i.emitter.handleDOM(...e)})})});class ht extends b8{constructor(){super(),this.domListeners={},this.on("error",va.error)}emit(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return va.log.call(va,...e),super.emit(...e)}handleDOM(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];(this.domListeners[t.type]||[]).forEach(i=>{let{node:o,handler:a}=i;(t.target===o||o.contains(t.target))&&a(t,...n)})}listenDOM(t,e,n){this.domListeners[t]||(this.domListeners[t]=[]),this.domListeners[t].push({node:e,handler:n})}}it(ht,"events",{EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_BLOT_MOUNT:"scroll-blot-mount",SCROLL_BLOT_UNMOUNT:"scroll-blot-unmount",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SCROLL_EMBED_UPDATE:"scroll-embed-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change",COMPOSITION_BEFORE_START:"composition-before-start",COMPOSITION_START:"composition-start",COMPOSITION_BEFORE_END:"composition-before-end",COMPOSITION_END:"composition-end"}),it(ht,"sources",{API:"api",SILENT:"silent",USER:"user"});const wa=Hn("quill:selection");class Gs{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this.index=t,this.length=e}}class C8{constructor(t,e){this.emitter=e,this.scroll=t,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=this.scroll.create("cursor",this),this.savedRange=new Gs(0,0),this.lastRange=this.savedRange,this.lastNative=null,this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,()=>{!this.mouseDown&&!this.composing&&setTimeout(this.update.bind(this,ht.sources.USER),1)}),this.emitter.on(ht.events.SCROLL_BEFORE_UPDATE,()=>{if(!this.hasFocus())return;const n=this.getNativeRange();n!=null&&n.start.node!==this.cursor.textNode&&this.emitter.once(ht.events.SCROLL_UPDATE,(s,i)=>{try{this.root.contains(n.start.node)&&this.root.contains(n.end.node)&&this.setNativeRange(n.start.node,n.start.offset,n.end.node,n.end.offset);const o=i.some(a=>a.type==="characterData"||a.type==="childList"||a.type==="attributes"&&a.target===this.root);this.update(o?ht.sources.SILENT:s)}catch{}})}),this.emitter.on(ht.events.SCROLL_OPTIMIZE,(n,s)=>{if(s.range){const{startNode:i,startOffset:o,endNode:a,endOffset:c}=s.range;this.setNativeRange(i,o,a,c),this.update(ht.sources.SILENT)}}),this.update(ht.sources.SILENT)}handleComposition(){this.emitter.on(ht.events.COMPOSITION_BEFORE_START,()=>{this.composing=!0}),this.emitter.on(ht.events.COMPOSITION_END,()=>{if(this.composing=!1,this.cursor.parent){const t=this.cursor.restore();if(!t)return;setTimeout(()=>{this.setNativeRange(t.startNode,t.startOffset,t.endNode,t.endOffset)},1)}})}handleDragging(){this.emitter.listenDOM("mousedown",document.body,()=>{this.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,()=>{this.mouseDown=!1,this.update(ht.sources.USER)})}focus(){this.hasFocus()||(this.root.focus({preventScroll:!0}),this.setRange(this.savedRange))}format(t,e){this.scroll.update();const n=this.getNativeRange();if(!(n==null||!n.native.collapsed||this.scroll.query(t,bt.BLOCK))){if(n.start.node!==this.cursor.textNode){const s=this.scroll.find(n.start.node,!1);if(s==null)return;if(s instanceof je){const i=s.split(n.start.offset);s.parent.insertBefore(this.cursor,i)}else s.insertBefore(this.cursor,n.start.node);this.cursor.attach()}this.cursor.format(t,e),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}getBounds(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;const n=this.scroll.length();t=Math.min(t,n-1),e=Math.min(t+e,n-1)-t;let s,[i,o]=this.scroll.leaf(t);if(i==null)return null;if(e>0&&o===i.length()){const[d]=this.scroll.leaf(t+1);if(d){const[p]=this.scroll.line(t),[f]=this.scroll.line(t+1);p===f&&(i=d,o=0)}}[s,o]=i.position(o,!0);const a=document.createRange();if(e>0)return a.setStart(s,o),[i,o]=this.scroll.leaf(t+e),i==null?null:([s,o]=i.position(o,!0),a.setEnd(s,o),a.getBoundingClientRect());let c="left",u;if(s instanceof Text){if(!s.data.length)return null;o<s.data.length?(a.setStart(s,o),a.setEnd(s,o+1)):(a.setStart(s,o-1),a.setEnd(s,o),c="right"),u=a.getBoundingClientRect()}else{if(!(i.domNode instanceof Element))return null;u=i.domNode.getBoundingClientRect(),o>0&&(c="right")}return{bottom:u.top+u.height,height:u.height,left:u[c],right:u[c],top:u.top,width:0}}getNativeRange(){const t=document.getSelection();if(t==null||t.rangeCount<=0)return null;const e=t.getRangeAt(0);if(e==null)return null;const n=this.normalizeNative(e);return wa.info("getNativeRange",n),n}getRange(){const t=this.scroll.domNode;if("isConnected"in t&&!t.isConnected)return[null,null];const e=this.getNativeRange();return e==null?[null,null]:[this.normalizedToRange(e),e]}hasFocus(){return document.activeElement===this.root||document.activeElement!=null&&ba(this.root,document.activeElement)}normalizedToRange(t){const e=[[t.start.node,t.start.offset]];t.native.collapsed||e.push([t.end.node,t.end.offset]);const n=e.map(o=>{const[a,c]=o,u=this.scroll.find(a,!0),d=u.offset(this.scroll);return c===0?d:u instanceof je?d+u.index(a,c):d+u.length()}),s=Math.min(Math.max(...n),this.scroll.length()-1),i=Math.min(s,...n);return new Gs(i,s-i)}normalizeNative(t){if(!ba(this.root,t.startContainer)||!t.collapsed&&!ba(this.root,t.endContainer))return null;const e={start:{node:t.startContainer,offset:t.startOffset},end:{node:t.endContainer,offset:t.endOffset},native:t};return[e.start,e.end].forEach(n=>{let{node:s,offset:i}=n;for(;!(s instanceof Text)&&s.childNodes.length>0;)if(s.childNodes.length>i)s=s.childNodes[i],i=0;else if(s.childNodes.length===i)s=s.lastChild,s instanceof Text?i=s.data.length:s.childNodes.length>0?i=s.childNodes.length:i=s.childNodes.length+1;else break;n.node=s,n.offset=i}),e}rangeToNative(t){const e=this.scroll.length(),n=(s,i)=>{s=Math.min(e-1,s);const[o,a]=this.scroll.leaf(s);return o?o.position(a,i):[null,-1]};return[...n(t.index,!1),...n(t.index+t.length,!0)]}setNativeRange(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(wa.info("setNativeRange",t,e,n,s),t!=null&&(this.root.parentNode==null||t.parentNode==null||n.parentNode==null))return;const o=document.getSelection();if(o!=null)if(t!=null){this.hasFocus()||this.root.focus({preventScroll:!0});const{native:a}=this.getNativeRange()||{};if(a==null||i||t!==a.startContainer||e!==a.startOffset||n!==a.endContainer||s!==a.endOffset){t instanceof Element&&t.tagName==="BR"&&(e=Array.from(t.parentNode.childNodes).indexOf(t),t=t.parentNode),n instanceof Element&&n.tagName==="BR"&&(s=Array.from(n.parentNode.childNodes).indexOf(n),n=n.parentNode);const c=document.createRange();c.setStart(t,e),c.setEnd(n,s),o.removeAllRanges(),o.addRange(c)}}else o.removeAllRanges(),this.root.blur()}setRange(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ht.sources.API;if(typeof e=="string"&&(n=e,e=!1),wa.info("setRange",t),t!=null){const s=this.rangeToNative(t);this.setNativeRange(...s,e)}else this.setNativeRange(null);this.update(n)}update(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ht.sources.USER;const e=this.lastRange,[n,s]=this.getRange();if(this.lastRange=n,this.lastNative=s,this.lastRange!=null&&(this.savedRange=this.lastRange),!t1(e,this.lastRange)){if(!this.composing&&s!=null&&s.native.collapsed&&s.start.node!==this.cursor.textNode){const o=this.cursor.restore();o&&this.setNativeRange(o.startNode,o.startOffset,o.endNode,o.endOffset)}const i=[ht.events.SELECTION_CHANGE,xi(this.lastRange),xi(e),t];this.emitter.emit(ht.events.EDITOR_CHANGE,...i),t!==ht.sources.SILENT&&this.emitter.emit(...i)}}}function ba(r,t){try{t.parentNode}catch{return!1}return r.contains(t)}const k8=/^[ -~]*$/;class x8{constructor(t){this.scroll=t,this.delta=this.getDelta()}applyDelta(t){this.scroll.update();let e=this.scroll.length();this.scroll.batchStart();const n=Uu(t),s=new mt;return L8(n.ops.slice()).reduce((o,a)=>{const c=wr.Op.length(a);let u=a.attributes||{},d=!1,p=!1;if(a.insert!=null){if(s.retain(c),typeof a.insert=="string"){const b=a.insert;p=!b.endsWith(`
`)&&(e<=o||!!this.scroll.descendant(vr,o)[0]),this.scroll.insertAt(o,b);const[C,M]=this.scroll.line(o);let _=Gn({},gr(C));if(C instanceof Te){const[S]=C.descendant(je,M);S&&(_=Gn(_,gr(S)))}u=wr.AttributeMap.diff(_,u)||{}}else if(typeof a.insert=="object"){const b=Object.keys(a.insert)[0];if(b==null)return o;const C=this.scroll.query(b,bt.INLINE)!=null;if(C)(e<=o||this.scroll.descendant(vr,o)[0])&&(p=!0);else if(o>0){const[M,_]=this.scroll.descendant(je,o-1);M instanceof Ur?M.value()[_]!==`
`&&(d=!0):M instanceof fr&&M.statics.scope===bt.INLINE_BLOT&&(d=!0)}if(this.scroll.insertAt(o,b,a.insert[b]),C){const[M]=this.scroll.descendant(je,o);if(M){const _=Gn({},gr(M));u=wr.AttributeMap.diff(_,u)||{}}}}e+=c}else if(s.push(a),a.retain!==null&&typeof a.retain=="object"){const b=Object.keys(a.retain)[0];if(b==null)return o;this.scroll.updateEmbedAt(o,b,a.retain[b])}Object.keys(u).forEach(b=>{this.scroll.formatAt(o,c,b,u[b])});const f=d?1:0,g=p?1:0;return e+=f+g,s.retain(f),s.delete(g),o+c+f+g},0),s.reduce((o,a)=>typeof a.delete=="number"?(this.scroll.deleteAt(o,a.delete),o):o+wr.Op.length(a),0),this.scroll.batchEnd(),this.scroll.optimize(),this.update(n)}deleteText(t,e){return this.scroll.deleteAt(t,e),this.update(new mt().retain(t).delete(e))}formatLine(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.scroll.update(),Object.keys(n).forEach(i=>{this.scroll.lines(t,Math.max(e,1)).forEach(o=>{o.format(i,n[i])})}),this.scroll.optimize();const s=new mt().retain(t).retain(e,xi(n));return this.update(s)}formatText(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Object.keys(n).forEach(i=>{this.scroll.formatAt(t,e,i,n[i])});const s=new mt().retain(t).retain(e,xi(n));return this.update(s)}getContents(t,e){return this.delta.slice(t,t+e)}getDelta(){return this.scroll.lines().reduce((t,e)=>t.concat(e.delta()),new mt)}getFormat(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=[],s=[];e===0?this.scroll.path(t).forEach(a=>{const[c]=a;c instanceof Te?n.push(c):c instanceof je&&s.push(c)}):(n=this.scroll.lines(t,e),s=this.scroll.descendants(je,t,e));const[i,o]=[n,s].map(a=>{const c=a.shift();if(c==null)return{};let u=gr(c);for(;Object.keys(u).length>0;){const d=a.shift();if(d==null)return u;u=_8(gr(d),u)}return u});return{...i,...o}}getHTML(t,e){const[n,s]=this.scroll.line(t);if(n){const i=n.length();return n.length()>=s+e&&!(s===0&&e===i)?_o(n,s,e,!0):_o(this.scroll,t,e,!0)}return""}getText(t,e){return this.getContents(t,e).filter(n=>typeof n.insert=="string").map(n=>n.insert).join("")}insertContents(t,e){const n=Uu(e),s=new mt().retain(t).concat(n);return this.scroll.insertContents(t,n),this.update(s)}insertEmbed(t,e,n){return this.scroll.insertAt(t,e,n),this.update(new mt().retain(t).insert({[e]:n}))}insertText(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return e=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),this.scroll.insertAt(t,e),Object.keys(n).forEach(s=>{this.scroll.formatAt(t,e.length,s,n[s])}),this.update(new mt().retain(t).insert(e,xi(n)))}isBlank(){if(this.scroll.children.length===0)return!0;if(this.scroll.children.length>1)return!1;const t=this.scroll.children.head;if((t==null?void 0:t.statics.blotName)!==Te.blotName)return!1;const e=t;return e.children.length>1?!1:e.children.head instanceof Fr}removeFormat(t,e){const n=this.getText(t,e),[s,i]=this.scroll.line(t+e);let o=0,a=new mt;s!=null&&(o=s.length()-i,a=s.delta().slice(i,i+o-1).insert(`
`));const u=this.getContents(t,e+o).diff(new mt().insert(n).concat(a)),d=new mt().retain(t).concat(u);return this.applyDelta(d)}update(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;const s=this.delta;if(e.length===1&&e[0].type==="characterData"&&e[0].target.data.match(k8)&&this.scroll.find(e[0].target)){const i=this.scroll.find(e[0].target),o=gr(i),a=i.offset(this.scroll),c=e[0].oldValue.replace(Oi.CONTENTS,""),u=new mt().insert(c),d=new mt().insert(i.value()),p=n&&{oldRange:zu(n.oldRange,-a),newRange:zu(n.newRange,-a)};t=new mt().retain(a).concat(u.diff(d,p)).reduce((g,b)=>b.insert?g.insert(b.insert,o):g.push(b),new mt),this.delta=s.compose(t)}else this.delta=this.getDelta(),(!t||!t1(s.compose(t),this.delta))&&(t=s.diff(this.delta,n));return t}}function di(r,t,e){if(r.length===0){const[g]=ya(e.pop());return t<=0?`</li></${g}>`:`</li></${g}>${di([],t-1,e)}`}const[{child:n,offset:s,length:i,indent:o,type:a},...c]=r,[u,d]=ya(a);if(o>t)return e.push(a),o===t+1?`<${u}><li${d}>${_o(n,s,i)}${di(c,o,e)}`:`<${u}><li>${di(r,t+1,e)}`;const p=e[e.length-1];if(o===t&&a===p)return`</li><li${d}>${_o(n,s,i)}${di(c,o,e)}`;const[f]=ya(e.pop());return`</li></${f}>${di(r,t-1,e)}`}function _o(r,t,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if("html"in r&&typeof r.html=="function")return r.html(t,e);if(r instanceof Ur)return Vl(r.value().slice(t,t+e)).replaceAll(" ","&nbsp;");if(r instanceof Hr){if(r.statics.blotName==="list-container"){const u=[];return r.children.forEachAt(t,e,(d,p,f)=>{const g="formats"in d&&typeof d.formats=="function"?d.formats():{};u.push({child:d,offset:p,length:f,indent:g.indent||0,type:g.list})}),di(u,-1,[])}const s=[];if(r.children.forEachAt(t,e,(u,d,p)=>{s.push(_o(u,d,p))}),n||r.statics.blotName==="list")return s.join("");const{outerHTML:i,innerHTML:o}=r.domNode,[a,c]=i.split(`>${o}<`);return a==="<table"?`<table style="border: 1px solid #000;">${s.join("")}<${c}`:`${a}>${s.join("")}<${c}`}return r.domNode instanceof Element?r.domNode.outerHTML:""}function _8(r,t){return Object.keys(t).reduce((e,n)=>{if(r[n]==null)return e;const s=t[n];return s===r[n]?e[n]=s:Array.isArray(s)?s.indexOf(r[n])<0?e[n]=s.concat([r[n]]):e[n]=s:e[n]=[s,r[n]],e},{})}function ya(r){const t=r==="ordered"?"ol":"ul";switch(r){case"checked":return[t,' data-list="checked"'];case"unchecked":return[t,' data-list="unchecked"'];default:return[t,""]}}function Uu(r){return r.reduce((t,e)=>{if(typeof e.insert=="string"){const n=e.insert.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return t.insert(n,e.attributes)}return t.push(e)},new mt)}function zu(r,t){let{index:e,length:n}=r;return new Gs(e+t,n)}function L8(r){const t=[];return r.forEach(e=>{typeof e.insert=="string"?e.insert.split(`
`).forEach((s,i)=>{i&&t.push({insert:`
`,attributes:e.attributes}),s&&t.push({insert:s,attributes:e.attributes})}):t.push(e)}),t}class Vr{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.quill=t,this.options=e}}it(Vr,"DEFAULTS",{});const Go="\uFEFF";class n1 extends fr{constructor(t,e){super(t,e),this.contentNode=document.createElement("span"),this.contentNode.setAttribute("contenteditable","false"),Array.from(this.domNode.childNodes).forEach(n=>{this.contentNode.appendChild(n)}),this.leftGuard=document.createTextNode(Go),this.rightGuard=document.createTextNode(Go),this.domNode.appendChild(this.leftGuard),this.domNode.appendChild(this.contentNode),this.domNode.appendChild(this.rightGuard)}index(t,e){return t===this.leftGuard?0:t===this.rightGuard?1:super.index(t,e)}restore(t){let e=null,n;const s=t.data.split(Go).join("");if(t===this.leftGuard)if(this.prev instanceof Ur){const i=this.prev.length();this.prev.insertAt(i,s),e={startNode:this.prev.domNode,startOffset:i+s.length}}else n=document.createTextNode(s),this.parent.insertBefore(this.scroll.create(n),this),e={startNode:n,startOffset:s.length};else t===this.rightGuard&&(this.next instanceof Ur?(this.next.insertAt(0,s),e={startNode:this.next.domNode,startOffset:s.length}):(n=document.createTextNode(s),this.parent.insertBefore(this.scroll.create(n),this.next),e={startNode:n,startOffset:s.length}));return t.data=Go,e}update(t,e){t.forEach(n=>{if(n.type==="characterData"&&(n.target===this.leftGuard||n.target===this.rightGuard)){const s=this.restore(n.target);s&&(e.range=s)}})}}class M8{constructor(t,e){it(this,"isComposing",!1);this.scroll=t,this.emitter=e,this.setupListeners()}setupListeners(){this.scroll.domNode.addEventListener("compositionstart",t=>{this.isComposing||this.handleCompositionStart(t)}),this.scroll.domNode.addEventListener("compositionend",t=>{this.isComposing&&queueMicrotask(()=>{this.handleCompositionEnd(t)})})}handleCompositionStart(t){const e=t.target instanceof Node?this.scroll.find(t.target,!0):null;e&&!(e instanceof n1)&&(this.emitter.emit(ht.events.COMPOSITION_BEFORE_START,t),this.scroll.batchStart(),this.emitter.emit(ht.events.COMPOSITION_START,t),this.isComposing=!0)}handleCompositionEnd(t){this.emitter.emit(ht.events.COMPOSITION_BEFORE_END,t),this.scroll.batchEnd(),this.emitter.emit(ht.events.COMPOSITION_END,t),this.isComposing=!1}}const fo=class fo{constructor(t,e){it(this,"modules",{});this.quill=t,this.options=e}init(){Object.keys(this.options.modules).forEach(t=>{this.modules[t]==null&&this.addModule(t)})}addModule(t){const e=this.quill.constructor.import(`modules/${t}`);return this.modules[t]=new e(this.quill,this.options.modules[t]||{}),this.modules[t]}};it(fo,"DEFAULTS",{modules:{}}),it(fo,"themes",{default:fo});let Ii=fo;const E8=r=>r.parentElement||r.getRootNode().host||null,T8=r=>{const t=r.getBoundingClientRect(),e="offsetWidth"in r&&Math.abs(t.width)/r.offsetWidth||1,n="offsetHeight"in r&&Math.abs(t.height)/r.offsetHeight||1;return{top:t.top,right:t.left+r.clientWidth*e,bottom:t.top+r.clientHeight*n,left:t.left}},Yo=r=>{const t=parseInt(r,10);return Number.isNaN(t)?0:t},Fu=(r,t,e,n,s,i)=>r<e&&t>n?0:r<e?-(e-r+s):t>n?t-r>n-e?r+s-e:t-n+i:0,N8=(r,t)=>{var i,o,a;const e=r.ownerDocument;let n=t,s=r;for(;s;){const c=s===e.body,u=c?{top:0,right:((i=window.visualViewport)==null?void 0:i.width)??e.documentElement.clientWidth,bottom:((o=window.visualViewport)==null?void 0:o.height)??e.documentElement.clientHeight,left:0}:T8(s),d=getComputedStyle(s),p=Fu(n.left,n.right,u.left,u.right,Yo(d.scrollPaddingLeft),Yo(d.scrollPaddingRight)),f=Fu(n.top,n.bottom,u.top,u.bottom,Yo(d.scrollPaddingTop),Yo(d.scrollPaddingBottom));if(p||f)if(c)(a=e.defaultView)==null||a.scrollBy(p,f);else{const{scrollLeft:g,scrollTop:b}=s;f&&(s.scrollTop+=f),p&&(s.scrollLeft+=p);const C=s.scrollLeft-g,M=s.scrollTop-b;n={left:n.left-C,top:n.top-M,right:n.right-C,bottom:n.bottom-M}}s=c||d.position==="fixed"?null:E8(s)}},A8=100,S8=["block","break","cursor","inline","scroll","text"],O8=(r,t,e)=>{const n=new Si;return S8.forEach(s=>{const i=t.query(s);i&&n.register(i)}),r.forEach(s=>{let i=t.query(s);i||e.error(`Cannot register "${s}" specified in "formats" config. Are you sure it was registered?`);let o=0;for(;i;)if(n.register(i),i="blotName"in i?i.requiredContainer??null:null,o+=1,o>A8){e.error(`Cycle detected in registering blot requiredContainer: "${s}"`);break}}),n},Li=Hn("quill"),Qo=new Si;Hr.uiClass="ql-ui";const jr=class jr{static debug(t){t===!0&&(t="log"),Hn.level(t)}static find(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return ic.get(t)||Qo.find(t,e)}static import(t){return this.imports[t]==null&&Li.error(`Cannot import ${t}. Are you sure it was registered?`),this.imports[t]}static register(){if(typeof(arguments.length<=0?void 0:arguments[0])!="string"){const t=arguments.length<=0?void 0:arguments[0],e=!!(!(arguments.length<=1)&&arguments[1]),n="attrName"in t?t.attrName:t.blotName;typeof n=="string"?this.register(`formats/${n}`,t,e):Object.keys(t).forEach(s=>{this.register(s,t[s],e)})}else{const t=arguments.length<=0?void 0:arguments[0],e=arguments.length<=1?void 0:arguments[1],n=!!(!(arguments.length<=2)&&arguments[2]);this.imports[t]!=null&&!n&&Li.warn(`Overwriting ${t} with`,e),this.imports[t]=e,(t.startsWith("blots/")||t.startsWith("formats/"))&&e&&typeof e!="boolean"&&e.blotName!=="abstract"&&Qo.register(e),typeof e.register=="function"&&e.register(Qo)}}constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.options=I8(t,e),this.container=this.options.container,this.container==null){Li.error("Invalid Quill container",t);return}this.options.debug&&jr.debug(this.options.debug);const n=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",ic.set(this.container,this),this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.emitter=new ht;const s=r1.blotName,i=this.options.registry.query(s);if(!i||!("blotName"in i))throw new Error(`Cannot initialize Quill without "${s}" blot`);if(this.scroll=new i(this.options.registry,this.root,{emitter:this.emitter}),this.editor=new x8(this.scroll),this.selection=new C8(this.scroll,this.emitter),this.composition=new M8(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.uploader=this.theme.addModule("uploader"),this.theme.addModule("input"),this.theme.addModule("uiNode"),this.theme.init(),this.emitter.on(ht.events.EDITOR_CHANGE,o=>{o===ht.events.TEXT_CHANGE&&this.root.classList.toggle("ql-blank",this.editor.isBlank())}),this.emitter.on(ht.events.SCROLL_UPDATE,(o,a)=>{const c=this.selection.lastRange,[u]=this.selection.getRange(),d=c&&u?{oldRange:c,newRange:u}:void 0;Ir.call(this,()=>this.editor.update(null,a,d),o)}),this.emitter.on(ht.events.SCROLL_EMBED_UPDATE,(o,a)=>{const c=this.selection.lastRange,[u]=this.selection.getRange(),d=c&&u?{oldRange:c,newRange:u}:void 0;Ir.call(this,()=>{const p=new mt().retain(o.offset(this)).retain({[o.statics.blotName]:a});return this.editor.update(p,[],d)},jr.sources.USER)}),n){const o=this.clipboard.convert({html:`${n}<p><br></p>`,text:`
`});this.setContents(o)}this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable(),this.allowReadOnlyEdits=!1}addContainer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(typeof t=="string"){const n=t;t=document.createElement("div"),t.classList.add(n)}return this.container.insertBefore(t,e),t}blur(){this.selection.setRange(null)}deleteText(t,e,n){return[t,e,,n]=kn(t,e,n),Ir.call(this,()=>this.editor.deleteText(t,e),n,t,-1*e)}disable(){this.enable(!1)}editReadOnly(t){this.allowReadOnlyEdits=!0;const e=t();return this.allowReadOnlyEdits=!1,e}enable(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.scroll.enable(t),this.container.classList.toggle("ql-disabled",!t)}focus(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.selection.focus(),t.preventScroll||this.scrollSelectionIntoView()}format(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ht.sources.API;return Ir.call(this,()=>{const s=this.getSelection(!0);let i=new mt;if(s==null)return i;if(this.scroll.query(t,bt.BLOCK))i=this.editor.formatLine(s.index,s.length,{[t]:e});else{if(s.length===0)return this.selection.format(t,e),i;i=this.editor.formatText(s.index,s.length,{[t]:e})}return this.setSelection(s,ht.sources.SILENT),i},n)}formatLine(t,e,n,s,i){let o;return[t,e,o,i]=kn(t,e,n,s,i),Ir.call(this,()=>this.editor.formatLine(t,e,o),i,t,0)}formatText(t,e,n,s,i){let o;return[t,e,o,i]=kn(t,e,n,s,i),Ir.call(this,()=>this.editor.formatText(t,e,o),i,t,0)}getBounds(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=null;if(typeof t=="number"?n=this.selection.getBounds(t,e):n=this.selection.getBounds(t.index,t.length),!n)return null;const s=this.container.getBoundingClientRect();return{bottom:n.bottom-s.top,height:n.height,left:n.left-s.left,right:n.right-s.left,top:n.top-s.top,width:n.width}}getContents(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-t;return[t,e]=kn(t,e),this.editor.getContents(t,e)}getFormat(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getSelection(!0),e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return typeof t=="number"?this.editor.getFormat(t,e):this.editor.getFormat(t.index,t.length)}getIndex(t){return t.offset(this.scroll)}getLength(){return this.scroll.length()}getLeaf(t){return this.scroll.leaf(t)}getLine(t){return this.scroll.line(t)}getLines(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;return typeof t!="number"?this.scroll.lines(t.index,t.length):this.scroll.lines(t,e)}getModule(t){return this.theme.modules[t]}getSelection(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)&&this.focus(),this.update(),this.selection.getRange()[0]}getSemanticHTML(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;return typeof t=="number"&&(e=e??this.getLength()-t),[t,e]=kn(t,e),this.editor.getHTML(t,e)}getText(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;return typeof t=="number"&&(e=e??this.getLength()-t),[t,e]=kn(t,e),this.editor.getText(t,e)}hasFocus(){return this.selection.hasFocus()}insertEmbed(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:jr.sources.API;return Ir.call(this,()=>this.editor.insertEmbed(t,e,n),s,t)}insertText(t,e,n,s,i){let o;return[t,,o,i]=kn(t,0,n,s,i),Ir.call(this,()=>this.editor.insertText(t,e,o),i,t,e.length)}isEnabled(){return this.scroll.isEnabled()}off(){return this.emitter.off(...arguments)}on(){return this.emitter.on(...arguments)}once(){return this.emitter.once(...arguments)}removeFormat(t,e,n){return[t,e,,n]=kn(t,e,n),Ir.call(this,()=>this.editor.removeFormat(t,e),n,t)}scrollRectIntoView(t){N8(this.root,t)}scrollIntoView(){console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."),this.scrollSelectionIntoView()}scrollSelectionIntoView(){const t=this.selection.lastRange,e=t&&this.selection.getBounds(t.index,t.length);e&&this.scrollRectIntoView(e)}setContents(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ht.sources.API;return Ir.call(this,()=>{t=new mt(t);const n=this.getLength(),s=this.editor.deleteText(0,n),i=this.editor.insertContents(0,t),o=this.editor.deleteText(this.getLength()-1,1);return s.compose(i).compose(o)},e)}setSelection(t,e,n){t==null?this.selection.setRange(null,e||jr.sources.API):([t,e,,n]=kn(t,e,n),this.selection.setRange(new Gs(Math.max(0,t),e),n),n!==ht.sources.SILENT&&this.scrollSelectionIntoView())}setText(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ht.sources.API;const n=new mt().insert(t);return this.setContents(n,e)}update(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ht.sources.USER;const e=this.scroll.update(t);return this.selection.update(t),e}updateContents(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ht.sources.API;return Ir.call(this,()=>(t=new mt(t),this.editor.applyDelta(t)),e,!0)}};it(jr,"DEFAULTS",{bounds:null,modules:{clipboard:!0,keyboard:!0,history:!0,uploader:!0},placeholder:"",readOnly:!1,registry:Qo,theme:"default"}),it(jr,"events",ht.events),it(jr,"sources",ht.sources),it(jr,"version","2.0.3"),it(jr,"imports",{delta:mt,parchment:h8,"core/module":Vr,"core/theme":Ii});let D=jr;function Vu(r){return typeof r=="string"?document.querySelector(r):r}function Ca(r){return Object.entries(r??{}).reduce((t,e)=>{let[n,s]=e;return{...t,[n]:s===!0?{}:s}},{})}function Zu(r){return Object.fromEntries(Object.entries(r).filter(t=>t[1]!==void 0))}function I8(r,t){const e=Vu(r);if(!e)throw new Error("Invalid Quill container");const s=!t.theme||t.theme===D.DEFAULTS.theme?Ii:D.import(`themes/${t.theme}`);if(!s)throw new Error(`Invalid theme ${t.theme}. Did you register it?`);const{modules:i,...o}=D.DEFAULTS,{modules:a,...c}=s.DEFAULTS;let u=Ca(t.modules);u!=null&&u.toolbar&&u.toolbar.constructor!==Object&&(u={...u,toolbar:{container:u.toolbar}});const d=Gn({},Ca(i),Ca(a),u),p={...o,...Zu(c),...Zu(t)};let f=t.registry;return f?t.formats&&Li.warn('Ignoring "formats" option because "registry" is specified'):f=t.formats?O8(t.formats,p.registry,Li):p.registry,{...p,registry:f,container:e,theme:s,modules:Object.entries(d).reduce((g,b)=>{let[C,M]=b;if(!M)return g;const _=D.import(`modules/${C}`);return _==null?(Li.error(`Cannot load ${C} module. Are you sure you registered it?`),g):{...g,[C]:Gn({},_.DEFAULTS||{},M)}},{}),bounds:Vu(p.bounds)}}function Ir(r,t,e,n){if(!this.isEnabled()&&t===ht.sources.USER&&!this.allowReadOnlyEdits)return new mt;let s=e==null?null:this.getSelection();const i=this.editor.delta,o=r();if(s!=null&&(e===!0&&(e=s.index),n==null?s=Ku(s,o,t):n!==0&&(s=Ku(s,e,n,t)),this.setSelection(s,ht.sources.SILENT)),o.length()>0){const a=[ht.events.TEXT_CHANGE,o,i,t];this.emitter.emit(ht.events.EDITOR_CHANGE,...a),t!==ht.sources.SILENT&&this.emitter.emit(...a)}return o}function kn(r,t,e,n,s){let i={};return typeof r.index=="number"&&typeof r.length=="number"?typeof t!="number"?(s=n,n=e,e=t,t=r.length,r=r.index):(t=r.length,r=r.index):typeof t!="number"&&(s=n,n=e,e=t,t=0),typeof e=="object"?(i=e,s=n):typeof e=="string"&&(n!=null?i[e]=n:s=e),s=s||ht.sources.API,[r,t,i,s]}function Ku(r,t,e,n){const s=typeof e=="number"?e:0;if(r==null)return null;let i,o;return t&&typeof t.transformPosition=="function"?[i,o]=[r.index,r.index+r.length].map(a=>t.transformPosition(a,n!==ht.sources.USER)):[i,o]=[r.index,r.index+r.length].map(a=>a<t||a===t&&n===ht.sources.USER?a:s>=0?a+s:Math.max(t,a+s)),new Gs(i,o-i)}class ei extends Fl{}function Wu(r){return r instanceof Te||r instanceof vr}function Gu(r){return typeof r.updateContent=="function"}class fi extends r1{constructor(t,e,n){let{emitter:s}=n;super(t,e),this.emitter=s,this.batch=!1,this.optimize(),this.enable(),this.domNode.addEventListener("dragstart",i=>this.handleDragStart(i))}batchStart(){Array.isArray(this.batch)||(this.batch=[])}batchEnd(){if(!this.batch)return;const t=this.batch;this.batch=!1,this.update(t)}emitMount(t){this.emitter.emit(ht.events.SCROLL_BLOT_MOUNT,t)}emitUnmount(t){this.emitter.emit(ht.events.SCROLL_BLOT_UNMOUNT,t)}emitEmbedUpdate(t,e){this.emitter.emit(ht.events.SCROLL_EMBED_UPDATE,t,e)}deleteAt(t,e){const[n,s]=this.line(t),[i]=this.line(t+e);if(super.deleteAt(t,e),i!=null&&n!==i&&s>0){if(n instanceof vr||i instanceof vr){this.optimize();return}const o=i.children.head instanceof Fr?null:i.children.head;n.moveChildren(i,o),n.remove()}this.optimize()}enable(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.domNode.setAttribute("contenteditable",t?"true":"false")}formatAt(t,e,n,s){super.formatAt(t,e,n,s),this.optimize()}insertAt(t,e,n){if(t>=this.length())if(n==null||this.scroll.query(e,bt.BLOCK)==null){const s=this.scroll.create(this.statics.defaultChild.blotName);this.appendChild(s),n==null&&e.endsWith(`
`)?s.insertAt(0,e.slice(0,-1),n):s.insertAt(0,e,n)}else{const s=this.scroll.create(e,n);this.appendChild(s)}else super.insertAt(t,e,n);this.optimize()}insertBefore(t,e){if(t.statics.scope===bt.INLINE_BLOT){const n=this.scroll.create(this.statics.defaultChild.blotName);n.appendChild(t),super.insertBefore(n,e)}else super.insertBefore(t,e)}insertContents(t,e){const n=this.deltaToRenderBlocks(e.concat(new mt().insert(`
`))),s=n.pop();if(s==null)return;this.batchStart();const i=n.shift();if(i){const c=i.type==="block"&&(i.delta.length()===0||!this.descendant(vr,t)[0]&&t<this.length()),u=i.type==="block"?i.delta:new mt().insert({[i.key]:i.value});ka(this,t,u);const d=i.type==="block"?1:0,p=t+u.length()+d;c&&this.insertAt(p-1,`
`);const f=gr(this.line(t)[0]),g=wr.AttributeMap.diff(f,i.attributes)||{};Object.keys(g).forEach(b=>{this.formatAt(p-1,1,b,g[b])}),t=p}let[o,a]=this.children.find(t);if(n.length&&(o&&(o=o.split(a),a=0),n.forEach(c=>{if(c.type==="block"){const u=this.createBlock(c.attributes,o||void 0);ka(u,0,c.delta)}else{const u=this.create(c.key,c.value);this.insertBefore(u,o||void 0),Object.keys(c.attributes).forEach(d=>{u.format(d,c.attributes[d])})}})),s.type==="block"&&s.delta.length()){const c=o?o.offset(o.scroll)+a:this.length();ka(this,c,s.delta)}this.batchEnd(),this.optimize()}isEnabled(){return this.domNode.getAttribute("contenteditable")==="true"}leaf(t){const e=this.path(t).pop();if(!e)return[null,-1];const[n,s]=e;return n instanceof je?[n,s]:[null,-1]}line(t){return t===this.length()?this.line(t-1):this.descendant(Wu,t)}lines(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;const n=(s,i,o)=>{let a=[],c=o;return s.children.forEachAt(i,o,(u,d,p)=>{Wu(u)?a.push(u):u instanceof Fl&&(a=a.concat(n(u,d,c))),c-=p}),a};return n(this,t,e)}optimize(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.batch||(super.optimize(t,e),t.length>0&&this.emitter.emit(ht.events.SCROLL_OPTIMIZE,t,e))}path(t){return super.path(t).slice(1)}remove(){}update(t){if(this.batch){Array.isArray(t)&&(this.batch=this.batch.concat(t));return}let e=ht.sources.USER;typeof t=="string"&&(e=t),Array.isArray(t)||(t=this.observer.takeRecords()),t=t.filter(n=>{let{target:s}=n;const i=this.find(s,!0);return i&&!Gu(i)}),t.length>0&&this.emitter.emit(ht.events.SCROLL_BEFORE_UPDATE,e,t),super.update(t.concat([])),t.length>0&&this.emitter.emit(ht.events.SCROLL_UPDATE,e,t)}updateEmbedAt(t,e,n){const[s]=this.descendant(i=>i instanceof vr,t);s&&s.statics.blotName===e&&Gu(s)&&s.updateContent(n)}handleDragStart(t){t.preventDefault()}deltaToRenderBlocks(t){const e=[];let n=new mt;return t.forEach(s=>{const i=s==null?void 0:s.insert;if(i)if(typeof i=="string"){const o=i.split(`
`);o.slice(0,-1).forEach(c=>{n.insert(c,s.attributes),e.push({type:"block",delta:n,attributes:s.attributes??{}}),n=new mt});const a=o[o.length-1];a&&n.insert(a,s.attributes)}else{const o=Object.keys(i)[0];if(!o)return;this.query(o,bt.INLINE)?n.push(s):(n.length()&&e.push({type:"block",delta:n,attributes:{}}),n=new mt,e.push({type:"blockEmbed",key:o,value:i[o],attributes:s.attributes??{}}))}}),n.length()&&e.push({type:"block",delta:n,attributes:{}}),e}createBlock(t,e){let n;const s={};Object.entries(t).forEach(a=>{let[c,u]=a;this.query(c,bt.BLOCK&bt.BLOT)!=null?n=c:s[c]=u});const i=this.create(n||this.statics.defaultChild.blotName,n?t[n]:void 0);this.insertBefore(i,e||void 0);const o=i.length();return Object.entries(s).forEach(a=>{let[c,u]=a;i.formatAt(0,o,c,u)}),i}}it(fi,"blotName","scroll"),it(fi,"className","ql-editor"),it(fi,"tagName","DIV"),it(fi,"defaultChild",Te),it(fi,"allowedChildren",[Te,vr,ei]);function ka(r,t,e){e.reduce((n,s)=>{const i=wr.Op.length(s);let o=s.attributes||{};if(s.insert!=null){if(typeof s.insert=="string"){const a=s.insert;r.insertAt(n,a);const[c]=r.descendant(je,n),u=gr(c);o=wr.AttributeMap.diff(u,o)||{}}else if(typeof s.insert=="object"){const a=Object.keys(s.insert)[0];if(a==null)return n;if(r.insertAt(n,a,s.insert[a]),r.scroll.query(a,bt.INLINE)!=null){const[u]=r.descendant(je,n),d=gr(u);o=wr.AttributeMap.diff(d,o)||{}}}}return Object.keys(o).forEach(a=>{r.formatAt(n,i,a,o[a])}),n+i},t)}const s1={scope:bt.BLOCK,whitelist:["right","center","justify"]},j8=new nn("align","align",s1),$d=new zr("align","ql-align",s1),Dd=new es("align","text-align",s1);class Pd extends es{value(t){let e=super.value(t);return e.startsWith("rgb(")?(e=e.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),`#${e.split(",").map(s=>`00${parseInt(s,10).toString(16)}`.slice(-2)).join("")}`):e}}const B8=new zr("color","ql-color",{scope:bt.INLINE}),i1=new Pd("color","color",{scope:bt.INLINE}),q8=new zr("background","ql-bg",{scope:bt.INLINE}),o1=new Pd("background","background-color",{scope:bt.INLINE});class ri extends ei{static create(t){const e=super.create(t);return e.setAttribute("spellcheck","false"),e}code(t,e){return this.children.map(n=>n.length()<=1?"":n.domNode.innerText).join(`
`).slice(t,t+e)}html(t,e){return`<pre>
${Vl(this.code(t,e))}
</pre>`}}class qe extends Te{static register(){D.register(ri)}}it(qe,"TAB","  ");class l1 extends sn{}l1.blotName="code";l1.tagName="CODE";qe.blotName="code-block";qe.className="ql-code-block";qe.tagName="DIV";ri.blotName="code-block-container";ri.className="ql-code-block-container";ri.tagName="DIV";ri.allowedChildren=[qe];qe.allowedChildren=[Ur,Fr,Oi];qe.requiredContainer=ri;const a1={scope:bt.BLOCK,whitelist:["rtl"]},Ud=new nn("direction","dir",a1),zd=new zr("direction","ql-direction",a1),Fd=new es("direction","direction",a1),Vd={scope:bt.INLINE,whitelist:["serif","monospace"]},Zd=new zr("font","ql-font",Vd);class R8 extends es{value(t){return super.value(t).replace(/["']/g,"")}}const Kd=new R8("font","font-family",Vd),Wd=new zr("size","ql-size",{scope:bt.INLINE,whitelist:["small","large","huge"]}),Gd=new es("size","font-size",{scope:bt.INLINE,whitelist:["10px","18px","32px"]}),H8=Hn("quill:keyboard"),$8=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey";class Zl extends Vr{static match(t,e){return["altKey","ctrlKey","metaKey","shiftKey"].some(n=>!!e[n]!==t[n]&&e[n]!==null)?!1:e.key===t.key||e.key===t.which}constructor(t,e){super(t,e),this.bindings={},Object.keys(this.options.bindings).forEach(n=>{this.options.bindings[n]&&this.addBinding(this.options.bindings[n])}),this.addBinding({key:"Enter",shiftKey:null},this.handleEnter),this.addBinding({key:"Enter",metaKey:null,ctrlKey:null,altKey:null},()=>{}),/Firefox/i.test(navigator.userAgent)?(this.addBinding({key:"Backspace"},{collapsed:!0},this.handleBackspace),this.addBinding({key:"Delete"},{collapsed:!0},this.handleDelete)):(this.addBinding({key:"Backspace"},{collapsed:!0,prefix:/^.?$/},this.handleBackspace),this.addBinding({key:"Delete"},{collapsed:!0,suffix:/^.?$/},this.handleDelete)),this.addBinding({key:"Backspace"},{collapsed:!1},this.handleDeleteRange),this.addBinding({key:"Delete"},{collapsed:!1},this.handleDeleteRange),this.addBinding({key:"Backspace",altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},this.handleBackspace),this.listen()}addBinding(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=P8(t);if(s==null){H8.warn("Attempted to add invalid keyboard binding",s);return}typeof e=="function"&&(e={handler:e}),typeof n=="function"&&(n={handler:n}),(Array.isArray(s.key)?s.key:[s.key]).forEach(o=>{const a={...s,key:o,...e,...n};this.bindings[a.key]=this.bindings[a.key]||[],this.bindings[a.key].push(a)})}listen(){this.quill.root.addEventListener("keydown",t=>{if(t.defaultPrevented||t.isComposing||t.keyCode===229&&(t.key==="Enter"||t.key==="Backspace"))return;const s=(this.bindings[t.key]||[]).concat(this.bindings[t.which]||[]).filter(_=>Zl.match(t,_));if(s.length===0)return;const i=D.find(t.target,!0);if(i&&i.scroll!==this.quill.scroll)return;const o=this.quill.getSelection();if(o==null||!this.quill.hasFocus())return;const[a,c]=this.quill.getLine(o.index),[u,d]=this.quill.getLeaf(o.index),[p,f]=o.length===0?[u,d]:this.quill.getLeaf(o.index+o.length),g=u instanceof xl?u.value().slice(0,d):"",b=p instanceof xl?p.value().slice(f):"",C={collapsed:o.length===0,empty:o.length===0&&a.length()<=1,format:this.quill.getFormat(o),line:a,offset:c,prefix:g,suffix:b,event:t};s.some(_=>{if(_.collapsed!=null&&_.collapsed!==C.collapsed||_.empty!=null&&_.empty!==C.empty||_.offset!=null&&_.offset!==C.offset)return!1;if(Array.isArray(_.format)){if(_.format.every(S=>C.format[S]==null))return!1}else if(typeof _.format=="object"&&!Object.keys(_.format).every(S=>_.format[S]===!0?C.format[S]!=null:_.format[S]===!1?C.format[S]==null:t1(_.format[S],C.format[S])))return!1;return _.prefix!=null&&!_.prefix.test(C.prefix)||_.suffix!=null&&!_.suffix.test(C.suffix)?!1:_.handler.call(this,o,C,_)!==!0})&&t.preventDefault()})}handleBackspace(t,e){const n=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)?2:1;if(t.index===0||this.quill.getLength()<=1)return;let s={};const[i]=this.quill.getLine(t.index);let o=new mt().retain(t.index-n).delete(n);if(e.offset===0){const[a]=this.quill.getLine(t.index-1);if(a&&!(a.statics.blotName==="block"&&a.length()<=1)){const u=i.formats(),d=this.quill.getFormat(t.index-1,1);if(s=wr.AttributeMap.diff(u,d)||{},Object.keys(s).length>0){const p=new mt().retain(t.index+i.length()-2).retain(1,s);o=o.compose(p)}}}this.quill.updateContents(o,D.sources.USER),this.quill.focus()}handleDelete(t,e){const n=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)?2:1;if(t.index>=this.quill.getLength()-n)return;let s={};const[i]=this.quill.getLine(t.index);let o=new mt().retain(t.index).delete(n);if(e.offset>=i.length()-1){const[a]=this.quill.getLine(t.index+1);if(a){const c=i.formats(),u=this.quill.getFormat(t.index,1);s=wr.AttributeMap.diff(c,u)||{},Object.keys(s).length>0&&(o=o.retain(a.length()-1).retain(1,s))}}this.quill.updateContents(o,D.sources.USER),this.quill.focus()}handleDeleteRange(t){c1({range:t,quill:this.quill}),this.quill.focus()}handleEnter(t,e){const n=Object.keys(e.format).reduce((i,o)=>(this.quill.scroll.query(o,bt.BLOCK)&&!Array.isArray(e.format[o])&&(i[o]=e.format[o]),i),{}),s=new mt().retain(t.index).delete(t.length).insert(`
`,n);this.quill.updateContents(s,D.sources.USER),this.quill.setSelection(t.index+1,D.sources.SILENT),this.quill.focus()}}const D8={bindings:{bold:xa("bold"),italic:xa("italic"),underline:xa("underline"),indent:{key:"Tab",format:["blockquote","indent","list"],handler(r,t){return t.collapsed&&t.offset!==0?!0:(this.quill.format("indent","+1",D.sources.USER),!1)}},outdent:{key:"Tab",shiftKey:!0,format:["blockquote","indent","list"],handler(r,t){return t.collapsed&&t.offset!==0?!0:(this.quill.format("indent","-1",D.sources.USER),!1)}},"outdent backspace":{key:"Backspace",collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler(r,t){t.format.indent!=null?this.quill.format("indent","-1",D.sources.USER):t.format.list!=null&&this.quill.format("list",!1,D.sources.USER)}},"indent code-block":Yu(!0),"outdent code-block":Yu(!1),"remove tab":{key:"Tab",shiftKey:!0,collapsed:!0,prefix:/\t$/,handler(r){this.quill.deleteText(r.index-1,1,D.sources.USER)}},tab:{key:"Tab",handler(r,t){if(t.format.table)return!0;this.quill.history.cutoff();const e=new mt().retain(r.index).delete(r.length).insert("	");return this.quill.updateContents(e,D.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(r.index+1,D.sources.SILENT),!1}},"blockquote empty enter":{key:"Enter",collapsed:!0,format:["blockquote"],empty:!0,handler(){this.quill.format("blockquote",!1,D.sources.USER)}},"list empty enter":{key:"Enter",collapsed:!0,format:["list"],empty:!0,handler(r,t){const e={list:!1};t.format.indent&&(e.indent=!1),this.quill.formatLine(r.index,r.length,e,D.sources.USER)}},"checklist enter":{key:"Enter",collapsed:!0,format:{list:"checked"},handler(r){const[t,e]=this.quill.getLine(r.index),n={...t.formats(),list:"checked"},s=new mt().retain(r.index).insert(`
`,n).retain(t.length()-e-1).retain(1,{list:"unchecked"});this.quill.updateContents(s,D.sources.USER),this.quill.setSelection(r.index+1,D.sources.SILENT),this.quill.scrollSelectionIntoView()}},"header enter":{key:"Enter",collapsed:!0,format:["header"],suffix:/^$/,handler(r,t){const[e,n]=this.quill.getLine(r.index),s=new mt().retain(r.index).insert(`
`,t.format).retain(e.length()-n-1).retain(1,{header:null});this.quill.updateContents(s,D.sources.USER),this.quill.setSelection(r.index+1,D.sources.SILENT),this.quill.scrollSelectionIntoView()}},"table backspace":{key:"Backspace",format:["table"],collapsed:!0,offset:0,handler(){}},"table delete":{key:"Delete",format:["table"],collapsed:!0,suffix:/^$/,handler(){}},"table enter":{key:"Enter",shiftKey:null,format:["table"],handler(r){const t=this.quill.getModule("table");if(t){const[e,n,s,i]=t.getTable(r),o=U8(e,n,s,i);if(o==null)return;let a=e.offset();if(o<0){const c=new mt().retain(a).insert(`
`);this.quill.updateContents(c,D.sources.USER),this.quill.setSelection(r.index+1,r.length,D.sources.SILENT)}else if(o>0){a+=e.length();const c=new mt().retain(a).insert(`
`);this.quill.updateContents(c,D.sources.USER),this.quill.setSelection(a,D.sources.USER)}}}},"table tab":{key:"Tab",shiftKey:null,format:["table"],handler(r,t){const{event:e,line:n}=t,s=n.offset(this.quill.scroll);e.shiftKey?this.quill.setSelection(s-1,D.sources.USER):this.quill.setSelection(s+n.length(),D.sources.USER)}},"list autofill":{key:" ",shiftKey:null,collapsed:!0,format:{"code-block":!1,blockquote:!1,table:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler(r,t){if(this.quill.scroll.query("list")==null)return!0;const{length:e}=t.prefix,[n,s]=this.quill.getLine(r.index);if(s>e)return!0;let i;switch(t.prefix.trim()){case"[]":case"[ ]":i="unchecked";break;case"[x]":i="checked";break;case"-":case"*":i="bullet";break;default:i="ordered"}this.quill.insertText(r.index," ",D.sources.USER),this.quill.history.cutoff();const o=new mt().retain(r.index-s).delete(e+1).retain(n.length()-2-s).retain(1,{list:i});return this.quill.updateContents(o,D.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(r.index-e,D.sources.SILENT),!1}},"code exit":{key:"Enter",collapsed:!0,format:["code-block"],prefix:/^$/,suffix:/^\s*$/,handler(r){const[t,e]=this.quill.getLine(r.index);let n=2,s=t;for(;s!=null&&s.length()<=1&&s.formats()["code-block"];)if(s=s.prev,n-=1,n<=0){const i=new mt().retain(r.index+t.length()-e-2).retain(1,{"code-block":null}).delete(1);return this.quill.updateContents(i,D.sources.USER),this.quill.setSelection(r.index-1,D.sources.SILENT),!1}return!0}},"embed left":Xo("ArrowLeft",!1),"embed left shift":Xo("ArrowLeft",!0),"embed right":Xo("ArrowRight",!1),"embed right shift":Xo("ArrowRight",!0),"table down":Qu(!1),"table up":Qu(!0)}};Zl.DEFAULTS=D8;function Yu(r){return{key:"Tab",shiftKey:!r,format:{"code-block":!0},handler(t,e){let{event:n}=e;const s=this.quill.scroll.query("code-block"),{TAB:i}=s;if(t.length===0&&!n.shiftKey){this.quill.insertText(t.index,i,D.sources.USER),this.quill.setSelection(t.index+i.length,D.sources.SILENT);return}const o=t.length===0?this.quill.getLines(t.index,1):this.quill.getLines(t);let{index:a,length:c}=t;o.forEach((u,d)=>{r?(u.insertAt(0,i),d===0?a+=i.length:c+=i.length):u.domNode.textContent.startsWith(i)&&(u.deleteAt(0,i.length),d===0?a-=i.length:c-=i.length)}),this.quill.update(D.sources.USER),this.quill.setSelection(a,c,D.sources.SILENT)}}}function Xo(r,t){return{key:r,shiftKey:t,altKey:null,[r==="ArrowLeft"?"prefix":"suffix"]:/^$/,handler(n){let{index:s}=n;r==="ArrowRight"&&(s+=n.length+1);const[i]=this.quill.getLeaf(s);return i instanceof fr?(r==="ArrowLeft"?t?this.quill.setSelection(n.index-1,n.length+1,D.sources.USER):this.quill.setSelection(n.index-1,D.sources.USER):t?this.quill.setSelection(n.index,n.length+1,D.sources.USER):this.quill.setSelection(n.index+n.length+1,D.sources.USER),!1):!0}}}function xa(r){return{key:r[0],shortKey:!0,handler(t,e){this.quill.format(r,!e.format[r],D.sources.USER)}}}function Qu(r){return{key:r?"ArrowUp":"ArrowDown",collapsed:!0,format:["table"],handler(t,e){const n=r?"prev":"next",s=e.line,i=s.parent[n];if(i!=null){if(i.statics.blotName==="table-row"){let o=i.children.head,a=s;for(;a.prev!=null;)a=a.prev,o=o.next;const c=o.offset(this.quill.scroll)+Math.min(e.offset,o.length()-1);this.quill.setSelection(c,0,D.sources.USER)}}else{const o=s.table()[n];o!=null&&(r?this.quill.setSelection(o.offset(this.quill.scroll)+o.length()-1,0,D.sources.USER):this.quill.setSelection(o.offset(this.quill.scroll),0,D.sources.USER))}return!1}}}function P8(r){if(typeof r=="string"||typeof r=="number")r={key:r};else if(typeof r=="object")r=xi(r);else return null;return r.shortKey&&(r[$8]=r.shortKey,delete r.shortKey),r}function c1(r){let{quill:t,range:e}=r;const n=t.getLines(e);let s={};if(n.length>1){const i=n[0].formats(),o=n[n.length-1].formats();s=wr.AttributeMap.diff(o,i)||{}}t.deleteText(e,D.sources.USER),Object.keys(s).length>0&&t.formatLine(e.index,1,s,D.sources.USER),t.setSelection(e.index,D.sources.SILENT)}function U8(r,t,e,n){return t.prev==null&&t.next==null?e.prev==null&&e.next==null?n===0?-1:1:e.prev==null?-1:1:t.prev==null?-1:t.next==null?1:null}const z8=/font-weight:\s*normal/,F8=["P","OL","UL"],Xu=r=>r&&F8.includes(r.tagName),V8=r=>{Array.from(r.querySelectorAll("br")).filter(t=>Xu(t.previousElementSibling)&&Xu(t.nextElementSibling)).forEach(t=>{var e;(e=t.parentNode)==null||e.removeChild(t)})},Z8=r=>{Array.from(r.querySelectorAll('b[style*="font-weight"]')).filter(t=>{var e;return(e=t.getAttribute("style"))==null?void 0:e.match(z8)}).forEach(t=>{var n;const e=r.createDocumentFragment();e.append(...t.childNodes),(n=t.parentNode)==null||n.replaceChild(e,t)})};function K8(r){r.querySelector('[id^="docs-internal-guid-"]')&&(Z8(r),V8(r))}const W8=/\bmso-list:[^;]*ignore/i,G8=/\bmso-list:[^;]*\bl(\d+)/i,Y8=/\bmso-list:[^;]*\blevel(\d+)/i,Q8=(r,t)=>{const e=r.getAttribute("style"),n=e==null?void 0:e.match(G8);if(!n)return null;const s=Number(n[1]),i=e==null?void 0:e.match(Y8),o=i?Number(i[1]):1,a=new RegExp(`@list l${s}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`,"i"),c=t.match(a),u=c&&c[1]==="bullet"?"bullet":"ordered";return{id:s,indent:o,type:u,element:r}},X8=r=>{var o,a;const t=Array.from(r.querySelectorAll("[style*=mso-list]")),e=[],n=[];t.forEach(c=>{(c.getAttribute("style")||"").match(W8)?e.push(c):n.push(c)}),e.forEach(c=>{var u;return(u=c.parentNode)==null?void 0:u.removeChild(c)});const s=r.documentElement.innerHTML,i=n.map(c=>Q8(c,s)).filter(c=>c);for(;i.length;){const c=[];let u=i.shift();for(;u;)c.push(u),u=i.length&&((o=i[0])==null?void 0:o.element)===u.element.nextElementSibling&&i[0].id===u.id?i.shift():null;const d=document.createElement("ul");c.forEach(g=>{const b=document.createElement("li");b.setAttribute("data-list",g.type),g.indent>1&&b.setAttribute("class",`ql-indent-${g.indent-1}`),b.innerHTML=g.element.innerHTML,d.appendChild(b)});const p=(a=c[0])==null?void 0:a.element,{parentNode:f}=p??{};p&&(f==null||f.replaceChild(d,p)),c.slice(1).forEach(g=>{let{element:b}=g;f==null||f.removeChild(b)})}};function J8(r){r.documentElement.getAttribute("xmlns:w")==="urn:schemas-microsoft-com:office:word"&&X8(r)}const t7=[J8,K8],e7=r=>{r.documentElement&&t7.forEach(t=>{t(r)})},r7=Hn("quill:clipboard"),n7=[[Node.TEXT_NODE,g7],[Node.TEXT_NODE,th],["br",a7],[Node.ELEMENT_NODE,th],[Node.ELEMENT_NODE,l7],[Node.ELEMENT_NODE,o7],[Node.ELEMENT_NODE,f7],["li",h7],["ol, ul",d7],["pre",c7],["tr",p7],["b",_a("bold")],["i",_a("italic")],["strike",_a("strike")],["style",u7]],s7=[j8,Ud].reduce((r,t)=>(r[t.keyName]=t,r),{}),Ju=[Dd,o1,i1,Fd,Kd,Gd].reduce((r,t)=>(r[t.keyName]=t,r),{});class Yd extends Vr{constructor(t,e){super(t,e),this.quill.root.addEventListener("copy",n=>this.onCaptureCopy(n,!1)),this.quill.root.addEventListener("cut",n=>this.onCaptureCopy(n,!0)),this.quill.root.addEventListener("paste",this.onCapturePaste.bind(this)),this.matchers=[],n7.concat(this.options.matchers??[]).forEach(n=>{let[s,i]=n;this.addMatcher(s,i)})}addMatcher(t,e){this.matchers.push([t,e])}convert(t){let{html:e,text:n}=t,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(s[qe.blotName])return new mt().insert(n||"",{[qe.blotName]:s[qe.blotName]});if(!e)return new mt().insert(n||"",s);const i=this.convertHTML(e);return Io(i,`
`)&&(i.ops[i.ops.length-1].attributes==null||s.table)?i.compose(new mt().retain(i.length()-1).delete(1)):i}normalizeHTML(t){e7(t)}convertHTML(t){const e=new DOMParser().parseFromString(t,"text/html");this.normalizeHTML(e);const n=e.body,s=new WeakMap,[i,o]=this.prepareMatching(n,s);return u1(this.quill.scroll,n,i,o,s)}dangerouslyPasteHTML(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:D.sources.API;if(typeof t=="string"){const s=this.convert({html:t,text:""});this.quill.setContents(s,e),this.quill.setSelection(0,D.sources.SILENT)}else{const s=this.convert({html:e,text:""});this.quill.updateContents(new mt().retain(t).concat(s),n),this.quill.setSelection(t+s.length(),D.sources.SILENT)}}onCaptureCopy(t){var o,a;let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(t.defaultPrevented)return;t.preventDefault();const[n]=this.quill.selection.getRange();if(n==null)return;const{html:s,text:i}=this.onCopy(n,e);(o=t.clipboardData)==null||o.setData("text/plain",i),(a=t.clipboardData)==null||a.setData("text/html",s),e&&c1({range:n,quill:this.quill})}normalizeURIList(t){return t.split(/\r?\n/).filter(e=>e[0]!=="#").join(`
`)}onCapturePaste(t){var o,a,c,u,d;if(t.defaultPrevented||!this.quill.isEnabled())return;t.preventDefault();const e=this.quill.getSelection(!0);if(e==null)return;const n=(o=t.clipboardData)==null?void 0:o.getData("text/html");let s=(a=t.clipboardData)==null?void 0:a.getData("text/plain");if(!n&&!s){const p=(c=t.clipboardData)==null?void 0:c.getData("text/uri-list");p&&(s=this.normalizeURIList(p))}const i=Array.from(((u=t.clipboardData)==null?void 0:u.files)||[]);if(!n&&i.length>0){this.quill.uploader.upload(e,i);return}if(n&&i.length>0){const p=new DOMParser().parseFromString(n,"text/html");if(p.body.childElementCount===1&&((d=p.body.firstElementChild)==null?void 0:d.tagName)==="IMG"){this.quill.uploader.upload(e,i);return}}this.onPaste(e,{html:n,text:s})}onCopy(t){const e=this.quill.getText(t);return{html:this.quill.getSemanticHTML(t),text:e}}onPaste(t,e){let{text:n,html:s}=e;const i=this.quill.getFormat(t.index),o=this.convert({text:n,html:s},i);r7.log("onPaste",o,{text:n,html:s});const a=new mt().retain(t.index).delete(t.length).concat(o);this.quill.updateContents(a,D.sources.USER),this.quill.setSelection(a.length()-t.length,D.sources.SILENT),this.quill.scrollSelectionIntoView()}prepareMatching(t,e){const n=[],s=[];return this.matchers.forEach(i=>{const[o,a]=i;switch(o){case Node.TEXT_NODE:s.push(a);break;case Node.ELEMENT_NODE:n.push(a);break;default:Array.from(t.querySelectorAll(o)).forEach(c=>{if(e.has(c)){const u=e.get(c);u==null||u.push(a)}else e.set(c,[a])});break}}),[n,s]}}it(Yd,"DEFAULTS",{matchers:[]});function ni(r,t,e,n){return n.query(t)?r.reduce((s,i)=>{if(!i.insert)return s;if(i.attributes&&i.attributes[t])return s.push(i);const o=e?{[t]:e}:{};return s.insert(i.insert,{...o,...i.attributes})},new mt):r}function Io(r,t){let e="";for(let n=r.ops.length-1;n>=0&&e.length<t.length;--n){const s=r.ops[n];if(typeof s.insert!="string")break;e=s.insert+e}return e.slice(-1*t.length)===t}function Vn(r,t){if(!(r instanceof Element))return!1;const e=t.query(r);return e&&e.prototype instanceof fr?!1:["address","article","blockquote","canvas","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","iframe","li","main","nav","ol","output","p","pre","section","table","td","tr","ul","video"].includes(r.tagName.toLowerCase())}function i7(r,t){return r.previousElementSibling&&r.nextElementSibling&&!Vn(r.previousElementSibling,t)&&!Vn(r.nextElementSibling,t)}const Jo=new WeakMap;function Qd(r){return r==null?!1:(Jo.has(r)||(r.tagName==="PRE"?Jo.set(r,!0):Jo.set(r,Qd(r.parentNode))),Jo.get(r))}function u1(r,t,e,n,s){return t.nodeType===t.TEXT_NODE?n.reduce((i,o)=>o(t,i,r),new mt):t.nodeType===t.ELEMENT_NODE?Array.from(t.childNodes||[]).reduce((i,o)=>{let a=u1(r,o,e,n,s);return o.nodeType===t.ELEMENT_NODE&&(a=e.reduce((c,u)=>u(o,c,r),a),a=(s.get(o)||[]).reduce((c,u)=>u(o,c,r),a)),i.concat(a)},new mt):new mt}function _a(r){return(t,e,n)=>ni(e,r,!0,n)}function o7(r,t,e){const n=nn.keys(r),s=zr.keys(r),i=es.keys(r),o={};return n.concat(s).concat(i).forEach(a=>{let c=e.query(a,bt.ATTRIBUTE);c!=null&&(o[c.attrName]=c.value(r),o[c.attrName])||(c=s7[a],c!=null&&(c.attrName===a||c.keyName===a)&&(o[c.attrName]=c.value(r)||void 0),c=Ju[a],c!=null&&(c.attrName===a||c.keyName===a)&&(c=Ju[a],o[c.attrName]=c.value(r)||void 0))}),Object.entries(o).reduce((a,c)=>{let[u,d]=c;return ni(a,u,d,e)},t)}function l7(r,t,e){const n=e.query(r);if(n==null)return t;if(n.prototype instanceof fr){const s={},i=n.value(r);if(i!=null)return s[n.blotName]=i,new mt().insert(s,n.formats(r,e))}else if(n.prototype instanceof xo&&!Io(t,`
`)&&t.insert(`
`),"blotName"in n&&"formats"in n&&typeof n.formats=="function")return ni(t,n.blotName,n.formats(r,e),e);return t}function a7(r,t){return Io(t,`
`)||t.insert(`
`),t}function c7(r,t,e){const n=e.query("code-block"),s=n&&"formats"in n&&typeof n.formats=="function"?n.formats(r,e):!0;return ni(t,"code-block",s,e)}function u7(){return new mt}function h7(r,t,e){const n=e.query(r);if(n==null||n.blotName!=="list"||!Io(t,`
`))return t;let s=-1,i=r.parentNode;for(;i!=null;)["OL","UL"].includes(i.tagName)&&(s+=1),i=i.parentNode;return s<=0?t:t.reduce((o,a)=>a.insert?a.attributes&&typeof a.attributes.indent=="number"?o.push(a):o.insert(a.insert,{indent:s,...a.attributes||{}}):o,new mt)}function d7(r,t,e){const n=r;let s=n.tagName==="OL"?"ordered":"bullet";const i=n.getAttribute("data-checked");return i&&(s=i==="true"?"checked":"unchecked"),ni(t,"list",s,e)}function th(r,t,e){if(!Io(t,`
`)){if(Vn(r,e)&&(r.childNodes.length>0||r instanceof HTMLParagraphElement))return t.insert(`
`);if(t.length()>0&&r.nextSibling){let n=r.nextSibling;for(;n!=null;){if(Vn(n,e))return t.insert(`
`);const s=e.query(n);if(s&&s.prototype instanceof vr)return t.insert(`
`);n=n.firstChild}}}return t}function f7(r,t,e){var i;const n={},s=r.style||{};return s.fontStyle==="italic"&&(n.italic=!0),s.textDecoration==="underline"&&(n.underline=!0),s.textDecoration==="line-through"&&(n.strike=!0),((i=s.fontWeight)!=null&&i.startsWith("bold")||parseInt(s.fontWeight,10)>=700)&&(n.bold=!0),t=Object.entries(n).reduce((o,a)=>{let[c,u]=a;return ni(o,c,u,e)},t),parseFloat(s.textIndent||0)>0?new mt().insert("	").concat(t):t}function p7(r,t,e){var s,i;const n=((s=r.parentElement)==null?void 0:s.tagName)==="TABLE"?r.parentElement:(i=r.parentElement)==null?void 0:i.parentElement;if(n!=null){const a=Array.from(n.querySelectorAll("tr")).indexOf(r)+1;return ni(t,"table",a,e)}return t}function g7(r,t,e){var s;let n=r.data;if(((s=r.parentElement)==null?void 0:s.tagName)==="O:P")return t.insert(n.trim());if(!Qd(r)){if(n.trim().length===0&&n.includes(`
`)&&!i7(r,e))return t;n=n.replace(/[^\S\u00a0]/g," "),n=n.replace(/ {2,}/g," "),(r.previousSibling==null&&r.parentElement!=null&&Vn(r.parentElement,e)||r.previousSibling instanceof Element&&Vn(r.previousSibling,e))&&(n=n.replace(/^ /,"")),(r.nextSibling==null&&r.parentElement!=null&&Vn(r.parentElement,e)||r.nextSibling instanceof Element&&Vn(r.nextSibling,e))&&(n=n.replace(/ $/,"")),n=n.replaceAll(" "," ")}return t.insert(n)}class Xd extends Vr{constructor(e,n){super(e,n);it(this,"lastRecorded",0);it(this,"ignoreChange",!1);it(this,"stack",{undo:[],redo:[]});it(this,"currentRange",null);this.quill.on(D.events.EDITOR_CHANGE,(s,i,o,a)=>{s===D.events.SELECTION_CHANGE?i&&a!==D.sources.SILENT&&(this.currentRange=i):s===D.events.TEXT_CHANGE&&(this.ignoreChange||(!this.options.userOnly||a===D.sources.USER?this.record(i,o):this.transform(i)),this.currentRange=ac(this.currentRange,i))}),this.quill.keyboard.addBinding({key:"z",shortKey:!0},this.undo.bind(this)),this.quill.keyboard.addBinding({key:["z","Z"],shortKey:!0,shiftKey:!0},this.redo.bind(this)),/Win/i.test(navigator.platform)&&this.quill.keyboard.addBinding({key:"y",shortKey:!0},this.redo.bind(this)),this.quill.root.addEventListener("beforeinput",s=>{s.inputType==="historyUndo"?(this.undo(),s.preventDefault()):s.inputType==="historyRedo"&&(this.redo(),s.preventDefault())})}change(e,n){if(this.stack[e].length===0)return;const s=this.stack[e].pop();if(!s)return;const i=this.quill.getContents(),o=s.delta.invert(i);this.stack[n].push({delta:o,range:ac(s.range,o)}),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(s.delta,D.sources.USER),this.ignoreChange=!1,this.restoreSelection(s)}clear(){this.stack={undo:[],redo:[]}}cutoff(){this.lastRecorded=0}record(e,n){if(e.ops.length===0)return;this.stack.redo=[];let s=e.invert(n),i=this.currentRange;const o=Date.now();if(this.lastRecorded+this.options.delay>o&&this.stack.undo.length>0){const a=this.stack.undo.pop();a&&(s=s.compose(a.delta),i=a.range)}else this.lastRecorded=o;s.length()!==0&&(this.stack.undo.push({delta:s,range:i}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift())}redo(){this.change("redo","undo")}transform(e){eh(this.stack.undo,e),eh(this.stack.redo,e)}undo(){this.change("undo","redo")}restoreSelection(e){if(e.range)this.quill.setSelection(e.range,D.sources.USER);else{const n=v7(this.quill.scroll,e.delta);this.quill.setSelection(n,D.sources.USER)}}}it(Xd,"DEFAULTS",{delay:1e3,maxStack:100,userOnly:!1});function eh(r,t){let e=t;for(let n=r.length-1;n>=0;n-=1){const s=r[n];r[n]={delta:e.transform(s.delta,!0),range:s.range&&ac(s.range,e)},e=s.delta.transform(e),r[n].delta.length()===0&&r.splice(n,1)}}function m7(r,t){const e=t.ops[t.ops.length-1];return e==null?!1:e.insert!=null?typeof e.insert=="string"&&e.insert.endsWith(`
`):e.attributes!=null?Object.keys(e.attributes).some(n=>r.query(n,bt.BLOCK)!=null):!1}function v7(r,t){const e=t.reduce((s,i)=>s+(i.delete||0),0);let n=t.length()-e;return m7(r,t)&&(n-=1),n}function ac(r,t){if(!r)return r;const e=t.transformPosition(r.index),n=t.transformPosition(r.index+r.length);return{index:e,length:n-e}}class Jd extends Vr{constructor(t,e){super(t,e),t.root.addEventListener("drop",n=>{var o;n.preventDefault();let s=null;if(document.caretRangeFromPoint)s=document.caretRangeFromPoint(n.clientX,n.clientY);else if(document.caretPositionFromPoint){const a=document.caretPositionFromPoint(n.clientX,n.clientY);s=document.createRange(),s.setStart(a.offsetNode,a.offset),s.setEnd(a.offsetNode,a.offset)}const i=s&&t.selection.normalizeNative(s);if(i){const a=t.selection.normalizedToRange(i);(o=n.dataTransfer)!=null&&o.files&&this.upload(a,n.dataTransfer.files)}})}upload(t,e){const n=[];Array.from(e).forEach(s=>{var i;s&&((i=this.options.mimetypes)!=null&&i.includes(s.type))&&n.push(s)}),n.length>0&&this.options.handler.call(this,t,n)}}Jd.DEFAULTS={mimetypes:["image/png","image/jpeg"],handler(r,t){if(!this.quill.scroll.query("image"))return;const e=t.map(n=>new Promise(s=>{const i=new FileReader;i.onload=()=>{s(i.result)},i.readAsDataURL(n)}));Promise.all(e).then(n=>{const s=n.reduce((i,o)=>i.insert({image:o}),new mt().retain(r.index).delete(r.length));this.quill.updateContents(s,ht.sources.USER),this.quill.setSelection(r.index+n.length,ht.sources.SILENT)})}};const w7=["insertText","insertReplacementText"];class b7 extends Vr{constructor(t,e){super(t,e),t.root.addEventListener("beforeinput",n=>{this.handleBeforeInput(n)}),/Android/i.test(navigator.userAgent)||t.on(D.events.COMPOSITION_BEFORE_START,()=>{this.handleCompositionStart()})}deleteRange(t){c1({range:t,quill:this.quill})}replaceText(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if(t.length===0)return!1;if(e){const n=this.quill.getFormat(t.index,1);this.deleteRange(t),this.quill.updateContents(new mt().retain(t.index).insert(e,n),D.sources.USER)}else this.deleteRange(t);return this.quill.setSelection(t.index+e.length,0,D.sources.SILENT),!0}handleBeforeInput(t){if(this.quill.composition.isComposing||t.defaultPrevented||!w7.includes(t.inputType))return;const e=t.getTargetRanges?t.getTargetRanges()[0]:null;if(!e||e.collapsed===!0)return;const n=y7(t);if(n==null)return;const s=this.quill.selection.normalizeNative(e),i=s?this.quill.selection.normalizedToRange(s):null;i&&this.replaceText(i,n)&&t.preventDefault()}handleCompositionStart(){const t=this.quill.getSelection();t&&this.replaceText(t)}}function y7(r){var t;return typeof r.data=="string"?r.data:(t=r.dataTransfer)!=null&&t.types.includes("text/plain")?r.dataTransfer.getData("text/plain"):null}const C7=/Mac/i.test(navigator.platform),k7=100,x7=r=>!!(r.key==="ArrowLeft"||r.key==="ArrowRight"||r.key==="ArrowUp"||r.key==="ArrowDown"||r.key==="Home"||C7&&r.key==="a"&&r.ctrlKey===!0);class _7 extends Vr{constructor(e,n){super(e,n);it(this,"isListening",!1);it(this,"selectionChangeDeadline",0);this.handleArrowKeys(),this.handleNavigationShortcuts()}handleArrowKeys(){this.quill.keyboard.addBinding({key:["ArrowLeft","ArrowRight"],offset:0,shiftKey:null,handler(e,n){let{line:s,event:i}=n;if(!(s instanceof Hr)||!s.uiNode)return!0;const o=getComputedStyle(s.domNode).direction==="rtl";return o&&i.key!=="ArrowRight"||!o&&i.key!=="ArrowLeft"?!0:(this.quill.setSelection(e.index-1,e.length+(i.shiftKey?1:0),D.sources.USER),!1)}})}handleNavigationShortcuts(){this.quill.root.addEventListener("keydown",e=>{!e.defaultPrevented&&x7(e)&&this.ensureListeningToSelectionChange()})}ensureListeningToSelectionChange(){if(this.selectionChangeDeadline=Date.now()+k7,this.isListening)return;this.isListening=!0;const e=()=>{this.isListening=!1,Date.now()<=this.selectionChangeDeadline&&this.handleSelectionChange()};document.addEventListener("selectionchange",e,{once:!0})}handleSelectionChange(){const e=document.getSelection();if(!e)return;const n=e.getRangeAt(0);if(n.collapsed!==!0||n.startOffset!==0)return;const s=this.quill.scroll.find(n.startContainer);if(!(s instanceof Hr)||!s.uiNode)return;const i=document.createRange();i.setStartAfter(s.uiNode),i.setEndAfter(s.uiNode),e.removeAllRanges(),e.addRange(i)}}D.register({"blots/block":Te,"blots/block/embed":vr,"blots/break":Fr,"blots/container":ei,"blots/cursor":Oi,"blots/embed":n1,"blots/inline":sn,"blots/scroll":fi,"blots/text":Ur,"modules/clipboard":Yd,"modules/history":Xd,"modules/keyboard":Zl,"modules/uploader":Jd,"modules/input":b7,"modules/uiNode":_7});class L7 extends zr{add(t,e){let n=0;if(e==="+1"||e==="-1"){const s=this.value(t)||0;n=e==="+1"?s+1:s-1}else typeof e=="number"&&(n=e);return n===0?(this.remove(t),!0):super.add(t,n.toString())}canAdd(t,e){return super.canAdd(t,e)||super.canAdd(t,parseInt(e,10))}value(t){return parseInt(super.value(t),10)||void 0}}const M7=new L7("indent","ql-indent",{scope:bt.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});class cc extends Te{}it(cc,"blotName","blockquote"),it(cc,"tagName","blockquote");class uc extends Te{static formats(t){return this.tagName.indexOf(t.tagName)+1}}it(uc,"blotName","header"),it(uc,"tagName",["H1","H2","H3","H4","H5","H6"]);class jo extends ei{}jo.blotName="list-container";jo.tagName="OL";class Bo extends Te{static create(t){const e=super.create();return e.setAttribute("data-list",t),e}static formats(t){return t.getAttribute("data-list")||void 0}static register(){D.register(jo)}constructor(t,e){super(t,e);const n=e.ownerDocument.createElement("span"),s=i=>{if(!t.isEnabled())return;const o=this.statics.formats(e,t);o==="checked"?(this.format("list","unchecked"),i.preventDefault()):o==="unchecked"&&(this.format("list","checked"),i.preventDefault())};n.addEventListener("mousedown",s),n.addEventListener("touchstart",s),this.attachUI(n)}format(t,e){t===this.statics.blotName&&e?this.domNode.setAttribute("data-list",e):super.format(t,e)}}Bo.blotName="list";Bo.tagName="LI";jo.allowedChildren=[Bo];Bo.requiredContainer=jo;class Lo extends sn{static create(){return super.create()}static formats(){return!0}optimize(t){super.optimize(t),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}it(Lo,"blotName","bold"),it(Lo,"tagName",["STRONG","B"]);class hc extends Lo{}it(hc,"blotName","italic"),it(hc,"tagName",["EM","I"]);class Zn extends sn{static create(t){const e=super.create(t);return e.setAttribute("href",this.sanitize(t)),e.setAttribute("rel","noopener noreferrer"),e.setAttribute("target","_blank"),e}static formats(t){return t.getAttribute("href")}static sanitize(t){return t0(t,this.PROTOCOL_WHITELIST)?t:this.SANITIZED_URL}format(t,e){t!==this.statics.blotName||!e?super.format(t,e):this.domNode.setAttribute("href",this.constructor.sanitize(e))}}it(Zn,"blotName","link"),it(Zn,"tagName","A"),it(Zn,"SANITIZED_URL","about:blank"),it(Zn,"PROTOCOL_WHITELIST",["http","https","mailto","tel","sms"]);function t0(r,t){const e=document.createElement("a");e.href=r;const n=e.href.slice(0,e.href.indexOf(":"));return t.indexOf(n)>-1}class dc extends sn{static create(t){return t==="super"?document.createElement("sup"):t==="sub"?document.createElement("sub"):super.create(t)}static formats(t){if(t.tagName==="SUB")return"sub";if(t.tagName==="SUP")return"super"}}it(dc,"blotName","script"),it(dc,"tagName",["SUB","SUP"]);class fc extends Lo{}it(fc,"blotName","strike"),it(fc,"tagName",["S","STRIKE"]);class pc extends sn{}it(pc,"blotName","underline"),it(pc,"tagName","U");class al extends n1{static create(t){if(window.katex==null)throw new Error("Formula module requires KaTeX.");const e=super.create(t);return typeof t=="string"&&(window.katex.render(t,e,{throwOnError:!1,errorColor:"#f00"}),e.setAttribute("data-value",t)),e}static value(t){return t.getAttribute("data-value")}html(){const{formula:t}=this.value();return`<span>${t}</span>`}}it(al,"blotName","formula"),it(al,"className","ql-formula"),it(al,"tagName","SPAN");const rh=["alt","height","width"];class gc extends fr{static create(t){const e=super.create(t);return typeof t=="string"&&e.setAttribute("src",this.sanitize(t)),e}static formats(t){return rh.reduce((e,n)=>(t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e),{})}static match(t){return/\.(jpe?g|gif|png)$/.test(t)||/^data:image\/.+;base64/.test(t)}static sanitize(t){return t0(t,["http","https","data"])?t:"//:0"}static value(t){return t.getAttribute("src")}format(t,e){rh.indexOf(t)>-1?e?this.domNode.setAttribute(t,e):this.domNode.removeAttribute(t):super.format(t,e)}}it(gc,"blotName","image"),it(gc,"tagName","IMG");const nh=["height","width"];class cl extends vr{static create(t){const e=super.create(t);return e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","true"),e.setAttribute("src",this.sanitize(t)),e}static formats(t){return nh.reduce((e,n)=>(t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e),{})}static sanitize(t){return Zn.sanitize(t)}static value(t){return t.getAttribute("src")}format(t,e){nh.indexOf(t)>-1?e?this.domNode.setAttribute(t,e):this.domNode.removeAttribute(t):super.format(t,e)}html(){const{video:t}=this.value();return`<a href="${t}">${t}</a>`}}it(cl,"blotName","video"),it(cl,"className","ql-video"),it(cl,"tagName","IFRAME");const Xi=new zr("code-token","hljs",{scope:bt.INLINE});class jn extends sn{static formats(t,e){for(;t!=null&&t!==e.domNode;){if(t.classList&&t.classList.contains(qe.className))return super.formats(t,e);t=t.parentNode}}constructor(t,e,n){super(t,e,n),Xi.add(this.domNode,n)}format(t,e){t!==jn.blotName?super.format(t,e):e?Xi.add(this.domNode,e):(Xi.remove(this.domNode),this.domNode.classList.remove(this.statics.className))}optimize(){super.optimize(...arguments),Xi.value(this.domNode)||this.unwrap()}}jn.blotName="code-token";jn.className="ql-token";class mr extends qe{static create(t){const e=super.create(t);return typeof t=="string"&&e.setAttribute("data-language",t),e}static formats(t){return t.getAttribute("data-language")||"plain"}static register(){}format(t,e){t===this.statics.blotName&&e?this.domNode.setAttribute("data-language",e):super.format(t,e)}replaceWith(t,e){return this.formatAt(0,this.length(),jn.blotName,!1),super.replaceWith(t,e)}}class co extends ri{attach(){super.attach(),this.forceNext=!1,this.scroll.emitMount(this)}format(t,e){t===mr.blotName&&(this.forceNext=!0,this.children.forEach(n=>{n.format(t,e)}))}formatAt(t,e,n,s){n===mr.blotName&&(this.forceNext=!0),super.formatAt(t,e,n,s)}highlight(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(this.children.head==null)return;const s=`${Array.from(this.domNode.childNodes).filter(o=>o!==this.uiNode).map(o=>o.textContent).join(`
`)}
`,i=mr.formats(this.children.head.domNode);if(e||this.forceNext||this.cachedText!==s){if(s.trim().length>0||this.cachedText==null){const o=this.children.reduce((c,u)=>c.concat(Rd(u,!1)),new mt),a=t(s,i);o.diff(a).reduce((c,u)=>{let{retain:d,attributes:p}=u;return d?(p&&Object.keys(p).forEach(f=>{[mr.blotName,jn.blotName].includes(f)&&this.formatAt(c,d,f,p[f])}),c+d):c},0)}this.cachedText=s,this.forceNext=!1}}html(t,e){const[n]=this.children.find(t);return`<pre data-language="${n?mr.formats(n.domNode):"plain"}">
${Vl(this.code(t,e))}
</pre>`}optimize(t){if(super.optimize(t),this.parent!=null&&this.children.head!=null&&this.uiNode!=null){const e=mr.formats(this.children.head.domNode);e!==this.uiNode.value&&(this.uiNode.value=e)}}}co.allowedChildren=[mr];mr.requiredContainer=co;mr.allowedChildren=[jn,Oi,Ur,Fr];const E7=(r,t,e)=>{if(typeof r.versionString=="string"){const n=r.versionString.split(".")[0];if(parseInt(n,10)>=11)return r.highlight(e,{language:t}).value}return r.highlight(t,e).value};class e0 extends Vr{static register(){D.register(jn,!0),D.register(mr,!0),D.register(co,!0)}constructor(t,e){if(super(t,e),this.options.hljs==null)throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");this.languages=this.options.languages.reduce((n,s)=>{let{key:i}=s;return n[i]=!0,n},{}),this.highlightBlot=this.highlightBlot.bind(this),this.initListener(),this.initTimer()}initListener(){this.quill.on(D.events.SCROLL_BLOT_MOUNT,t=>{if(!(t instanceof co))return;const e=this.quill.root.ownerDocument.createElement("select");this.options.languages.forEach(n=>{let{key:s,label:i}=n;const o=e.ownerDocument.createElement("option");o.textContent=i,o.setAttribute("value",s),e.appendChild(o)}),e.addEventListener("change",()=>{t.format(mr.blotName,e.value),this.quill.root.focus(),this.highlight(t,!0)}),t.uiNode==null&&(t.attachUI(e),t.children.head&&(e.value=mr.formats(t.children.head.domNode)))})}initTimer(){let t=null;this.quill.on(D.events.SCROLL_OPTIMIZE,()=>{t&&clearTimeout(t),t=setTimeout(()=>{this.highlight(),t=null},this.options.interval)})}highlight(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(this.quill.selection.composing)return;this.quill.update(D.sources.USER);const n=this.quill.getSelection();(t==null?this.quill.scroll.descendants(co):[t]).forEach(i=>{i.highlight(this.highlightBlot,e)}),this.quill.update(D.sources.SILENT),n!=null&&this.quill.setSelection(n,D.sources.SILENT)}highlightBlot(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"plain";if(e=this.languages[e]?e:"plain",e==="plain")return Vl(t).split(`
`).reduce((s,i,o)=>(o!==0&&s.insert(`
`,{[qe.blotName]:e}),s.insert(i)),new mt);const n=this.quill.root.ownerDocument.createElement("div");return n.classList.add(qe.className),n.innerHTML=E7(this.options.hljs,e,t),u1(this.quill.scroll,n,[(s,i)=>{const o=Xi.value(s);return o?i.compose(new mt().retain(i.length(),{[jn.blotName]:o})):i}],[(s,i)=>s.data.split(`
`).reduce((o,a,c)=>(c!==0&&o.insert(`
`,{[qe.blotName]:e}),o.insert(a)),i)],new WeakMap)}}e0.DEFAULTS={hljs:window.hljs,interval:1e3,languages:[{key:"plain",label:"Plain"},{key:"bash",label:"Bash"},{key:"cpp",label:"C++"},{key:"cs",label:"C#"},{key:"css",label:"CSS"},{key:"diff",label:"Diff"},{key:"xml",label:"HTML/XML"},{key:"java",label:"Java"},{key:"javascript",label:"JavaScript"},{key:"markdown",label:"Markdown"},{key:"php",label:"PHP"},{key:"python",label:"Python"},{key:"ruby",label:"Ruby"},{key:"sql",label:"SQL"}]};const po=class po extends Te{static create(t){const e=super.create();return t?e.setAttribute("data-row",t):e.setAttribute("data-row",h1()),e}static formats(t){if(t.hasAttribute("data-row"))return t.getAttribute("data-row")}cellOffset(){return this.parent?this.parent.children.indexOf(this):-1}format(t,e){t===po.blotName&&e?this.domNode.setAttribute("data-row",e):super.format(t,e)}row(){return this.parent}rowOffset(){return this.row()?this.row().rowOffset():-1}table(){return this.row()&&this.row().table()}};it(po,"blotName","table"),it(po,"tagName","TD");let qr=po;class Bn extends ei{checkMerge(){if(super.checkMerge()&&this.next.children.head!=null){const t=this.children.head.formats(),e=this.children.tail.formats(),n=this.next.children.head.formats(),s=this.next.children.tail.formats();return t.table===e.table&&t.table===n.table&&t.table===s.table}return!1}optimize(t){super.optimize(t),this.children.forEach(e=>{if(e.next==null)return;const n=e.formats(),s=e.next.formats();if(n.table!==s.table){const i=this.splitAfter(e);i&&i.optimize(),this.prev&&this.prev.optimize()}})}rowOffset(){return this.parent?this.parent.children.indexOf(this):-1}table(){return this.parent&&this.parent.parent}}it(Bn,"blotName","table-row"),it(Bn,"tagName","TR");class rn extends ei{}it(rn,"blotName","table-body"),it(rn,"tagName","TBODY");class ji extends ei{balanceCells(){const t=this.descendants(Bn),e=t.reduce((n,s)=>Math.max(s.children.length,n),0);t.forEach(n=>{new Array(e-n.children.length).fill(0).forEach(()=>{let s;n.children.head!=null&&(s=qr.formats(n.children.head.domNode));const i=this.scroll.create(qr.blotName,s);n.appendChild(i),i.optimize()})})}cells(t){return this.rows().map(e=>e.children.at(t))}deleteColumn(t){const[e]=this.descendant(rn);e==null||e.children.head==null||e.children.forEach(n=>{const s=n.children.at(t);s!=null&&s.remove()})}insertColumn(t){const[e]=this.descendant(rn);e==null||e.children.head==null||e.children.forEach(n=>{const s=n.children.at(t),i=qr.formats(n.children.head.domNode),o=this.scroll.create(qr.blotName,i);n.insertBefore(o,s)})}insertRow(t){const[e]=this.descendant(rn);if(e==null||e.children.head==null)return;const n=h1(),s=this.scroll.create(Bn.blotName);e.children.head.children.forEach(()=>{const o=this.scroll.create(qr.blotName,n);s.appendChild(o)});const i=e.children.at(t);e.insertBefore(s,i)}rows(){const t=this.children.head;return t==null?[]:t.children.map(e=>e)}}it(ji,"blotName","table-container"),it(ji,"tagName","TABLE");ji.allowedChildren=[rn];rn.requiredContainer=ji;rn.allowedChildren=[Bn];Bn.requiredContainer=rn;Bn.allowedChildren=[qr];qr.requiredContainer=Bn;function h1(){return`row-${Math.random().toString(36).slice(2,6)}`}class T7 extends Vr{static register(){D.register(qr),D.register(Bn),D.register(rn),D.register(ji)}constructor(){super(...arguments),this.listenBalanceCells()}balanceTables(){this.quill.scroll.descendants(ji).forEach(t=>{t.balanceCells()})}deleteColumn(){const[t,,e]=this.getTable();e!=null&&(t.deleteColumn(e.cellOffset()),this.quill.update(D.sources.USER))}deleteRow(){const[,t]=this.getTable();t!=null&&(t.remove(),this.quill.update(D.sources.USER))}deleteTable(){const[t]=this.getTable();if(t==null)return;const e=t.offset();t.remove(),this.quill.update(D.sources.USER),this.quill.setSelection(e,D.sources.SILENT)}getTable(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.quill.getSelection();if(t==null)return[null,null,null,-1];const[e,n]=this.quill.getLine(t.index);if(e==null||e.statics.blotName!==qr.blotName)return[null,null,null,-1];const s=e.parent;return[s.parent.parent,s,e,n]}insertColumn(t){const e=this.quill.getSelection();if(!e)return;const[n,s,i]=this.getTable(e);if(i==null)return;const o=i.cellOffset();n.insertColumn(o+t),this.quill.update(D.sources.USER);let a=s.rowOffset();t===0&&(a+=1),this.quill.setSelection(e.index+a,e.length,D.sources.SILENT)}insertColumnLeft(){this.insertColumn(0)}insertColumnRight(){this.insertColumn(1)}insertRow(t){const e=this.quill.getSelection();if(!e)return;const[n,s,i]=this.getTable(e);if(i==null)return;const o=s.rowOffset();n.insertRow(o+t),this.quill.update(D.sources.USER),t>0?this.quill.setSelection(e,D.sources.SILENT):this.quill.setSelection(e.index+s.children.length,e.length,D.sources.SILENT)}insertRowAbove(){this.insertRow(0)}insertRowBelow(){this.insertRow(1)}insertTable(t,e){const n=this.quill.getSelection();if(n==null)return;const s=new Array(t).fill(0).reduce(i=>{const o=new Array(e).fill(`
`).join("");return i.insert(o,{table:h1()})},new mt().retain(n.index));this.quill.updateContents(s,D.sources.USER),this.quill.setSelection(n.index,D.sources.SILENT),this.balanceTables()}listenBalanceCells(){this.quill.on(D.events.SCROLL_OPTIMIZE,t=>{t.some(e=>["TD","TR","TBODY","TABLE"].includes(e.target.tagName)?(this.quill.once(D.events.TEXT_CHANGE,(n,s,i)=>{i===D.sources.USER&&this.balanceTables()}),!0):!1)})}}const sh=Hn("quill:toolbar");class d1 extends Vr{constructor(t,e){var n,s;if(super(t,e),Array.isArray(this.options.container)){const i=document.createElement("div");i.setAttribute("role","toolbar"),N7(i,this.options.container),(s=(n=t.container)==null?void 0:n.parentNode)==null||s.insertBefore(i,t.container),this.container=i}else typeof this.options.container=="string"?this.container=document.querySelector(this.options.container):this.container=this.options.container;if(!(this.container instanceof HTMLElement)){sh.error("Container required for toolbar",this.options);return}this.container.classList.add("ql-toolbar"),this.controls=[],this.handlers={},this.options.handlers&&Object.keys(this.options.handlers).forEach(i=>{var a;const o=(a=this.options.handlers)==null?void 0:a[i];o&&this.addHandler(i,o)}),Array.from(this.container.querySelectorAll("button, select")).forEach(i=>{this.attach(i)}),this.quill.on(D.events.EDITOR_CHANGE,()=>{const[i]=this.quill.selection.getRange();this.update(i)})}addHandler(t,e){this.handlers[t]=e}attach(t){let e=Array.from(t.classList).find(s=>s.indexOf("ql-")===0);if(!e)return;if(e=e.slice(3),t.tagName==="BUTTON"&&t.setAttribute("type","button"),this.handlers[e]==null&&this.quill.scroll.query(e)==null){sh.warn("ignoring attaching to nonexistent format",e,t);return}const n=t.tagName==="SELECT"?"change":"click";t.addEventListener(n,s=>{let i;if(t.tagName==="SELECT"){if(t.selectedIndex<0)return;const a=t.options[t.selectedIndex];a.hasAttribute("selected")?i=!1:i=a.value||!1}else t.classList.contains("ql-active")?i=!1:i=t.value||!t.hasAttribute("value"),s.preventDefault();this.quill.focus();const[o]=this.quill.selection.getRange();if(this.handlers[e]!=null)this.handlers[e].call(this,i);else if(this.quill.scroll.query(e).prototype instanceof fr){if(i=prompt(`Enter ${e}`),!i)return;this.quill.updateContents(new mt().retain(o.index).delete(o.length).insert({[e]:i}),D.sources.USER)}else this.quill.format(e,i,D.sources.USER);this.update(o)}),this.controls.push([e,t])}update(t){const e=t==null?{}:this.quill.getFormat(t);this.controls.forEach(n=>{const[s,i]=n;if(i.tagName==="SELECT"){let o=null;if(t==null)o=null;else if(e[s]==null)o=i.querySelector("option[selected]");else if(!Array.isArray(e[s])){let a=e[s];typeof a=="string"&&(a=a.replace(/"/g,'\\"')),o=i.querySelector(`option[value="${a}"]`)}o==null?(i.value="",i.selectedIndex=-1):o.selected=!0}else if(t==null)i.classList.remove("ql-active"),i.setAttribute("aria-pressed","false");else if(i.hasAttribute("value")){const o=e[s],a=o===i.getAttribute("value")||o!=null&&o.toString()===i.getAttribute("value")||o==null&&!i.getAttribute("value");i.classList.toggle("ql-active",a),i.setAttribute("aria-pressed",a.toString())}else{const o=e[s]!=null;i.classList.toggle("ql-active",o),i.setAttribute("aria-pressed",o.toString())}})}}d1.DEFAULTS={};function ih(r,t,e){const n=document.createElement("button");n.setAttribute("type","button"),n.classList.add(`ql-${t}`),n.setAttribute("aria-pressed","false"),e!=null?(n.value=e,n.setAttribute("aria-label",`${t}: ${e}`)):n.setAttribute("aria-label",t),r.appendChild(n)}function N7(r,t){Array.isArray(t[0])||(t=[t]),t.forEach(e=>{const n=document.createElement("span");n.classList.add("ql-formats"),e.forEach(s=>{if(typeof s=="string")ih(n,s);else{const i=Object.keys(s)[0],o=s[i];Array.isArray(o)?A7(n,i,o):ih(n,i,o)}}),r.appendChild(n)})}function A7(r,t,e){const n=document.createElement("select");n.classList.add(`ql-${t}`),e.forEach(s=>{const i=document.createElement("option");s!==!1?i.setAttribute("value",String(s)):i.setAttribute("selected","selected"),n.appendChild(i)}),r.appendChild(n)}d1.DEFAULTS={container:null,handlers:{clean(){const r=this.quill.getSelection();if(r!=null)if(r.length===0){const t=this.quill.getFormat();Object.keys(t).forEach(e=>{this.quill.scroll.query(e,bt.INLINE)!=null&&this.quill.format(e,!1,D.sources.USER)})}else this.quill.removeFormat(r.index,r.length,D.sources.USER)},direction(r){const{align:t}=this.quill.getFormat();r==="rtl"&&t==null?this.quill.format("align","right",D.sources.USER):!r&&t==="right"&&this.quill.format("align",!1,D.sources.USER),this.quill.format("direction",r,D.sources.USER)},indent(r){const t=this.quill.getSelection(),e=this.quill.getFormat(t),n=parseInt(e.indent||0,10);if(r==="+1"||r==="-1"){let s=r==="+1"?1:-1;e.direction==="rtl"&&(s*=-1),this.quill.format("indent",n+s,D.sources.USER)}},link(r){r===!0&&(r=prompt("Enter link URL:")),this.quill.format("link",r,D.sources.USER)},list(r){const t=this.quill.getSelection(),e=this.quill.getFormat(t);r==="check"?e.list==="checked"||e.list==="unchecked"?this.quill.format("list",!1,D.sources.USER):this.quill.format("list","unchecked",D.sources.USER):this.quill.format("list",r,D.sources.USER)}}};const S7='<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>',O7='<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>',I7='<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>',j7='<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>',B7='<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>',q7='<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>',R7='<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>',H7='<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>',oh='<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>',$7='<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>',D7='<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>',P7='<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>',U7='<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>',z7='<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>',F7='<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',V7='<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',Z7='<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>',K7='<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',W7='<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>',G7='<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>',Y7='<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>',Q7='<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>',X7='<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>',J7='<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>',t9='<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>',e9='<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>',r9='<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>',n9='<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>',s9='<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>',i9='<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>',o9='<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>',l9='<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>',a9='<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>',Mo={align:{"":S7,center:O7,right:I7,justify:j7},background:B7,blockquote:q7,bold:R7,clean:H7,code:oh,"code-block":oh,color:$7,direction:{"":D7,rtl:P7},formula:U7,header:{1:z7,2:F7,3:V7,4:Z7,5:K7,6:W7},italic:G7,image:Y7,indent:{"+1":Q7,"-1":X7},link:J7,list:{bullet:t9,check:e9,ordered:r9},script:{sub:n9,super:s9},strike:i9,table:o9,underline:l9,video:a9},c9='<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';let lh=0;function ah(r,t){r.setAttribute(t,`${r.getAttribute(t)!=="true"}`)}class Kl{constructor(t){this.select=t,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",()=>{this.togglePicker()}),this.label.addEventListener("keydown",e=>{switch(e.key){case"Enter":this.togglePicker();break;case"Escape":this.escape(),e.preventDefault();break}}),this.select.addEventListener("change",this.update.bind(this))}togglePicker(){this.container.classList.toggle("ql-expanded"),ah(this.label,"aria-expanded"),ah(this.options,"aria-hidden")}buildItem(t){const e=document.createElement("span");e.tabIndex="0",e.setAttribute("role","button"),e.classList.add("ql-picker-item");const n=t.getAttribute("value");return n&&e.setAttribute("data-value",n),t.textContent&&e.setAttribute("data-label",t.textContent),e.addEventListener("click",()=>{this.selectItem(e,!0)}),e.addEventListener("keydown",s=>{switch(s.key){case"Enter":this.selectItem(e,!0),s.preventDefault();break;case"Escape":this.escape(),s.preventDefault();break}}),e}buildLabel(){const t=document.createElement("span");return t.classList.add("ql-picker-label"),t.innerHTML=c9,t.tabIndex="0",t.setAttribute("role","button"),t.setAttribute("aria-expanded","false"),this.container.appendChild(t),t}buildOptions(){const t=document.createElement("span");t.classList.add("ql-picker-options"),t.setAttribute("aria-hidden","true"),t.tabIndex="-1",t.id=`ql-picker-options-${lh}`,lh+=1,this.label.setAttribute("aria-controls",t.id),this.options=t,Array.from(this.select.options).forEach(e=>{const n=this.buildItem(e);t.appendChild(n),e.selected===!0&&this.selectItem(n)}),this.container.appendChild(t)}buildPicker(){Array.from(this.select.attributes).forEach(t=>{this.container.setAttribute(t.name,t.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}escape(){this.close(),setTimeout(()=>this.label.focus(),1)}close(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}selectItem(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const n=this.container.querySelector(".ql-selected");t!==n&&(n!=null&&n.classList.remove("ql-selected"),t!=null&&(t.classList.add("ql-selected"),this.select.selectedIndex=Array.from(t.parentNode.children).indexOf(t),t.hasAttribute("data-value")?this.label.setAttribute("data-value",t.getAttribute("data-value")):this.label.removeAttribute("data-value"),t.hasAttribute("data-label")?this.label.setAttribute("data-label",t.getAttribute("data-label")):this.label.removeAttribute("data-label"),e&&(this.select.dispatchEvent(new Event("change")),this.close())))}update(){let t;if(this.select.selectedIndex>-1){const n=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];t=this.select.options[this.select.selectedIndex],this.selectItem(n)}else this.selectItem(null);const e=t!=null&&t!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",e)}}class r0 extends Kl{constructor(t,e){super(t),this.label.innerHTML=e,this.container.classList.add("ql-color-picker"),Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0,7).forEach(n=>{n.classList.add("ql-primary")})}buildItem(t){const e=super.buildItem(t);return e.style.backgroundColor=t.getAttribute("value")||"",e}selectItem(t,e){super.selectItem(t,e);const n=this.label.querySelector(".ql-color-label"),s=t&&t.getAttribute("data-value")||"";n&&(n.tagName==="line"?n.style.stroke=s:n.style.fill=s)}}class n0 extends Kl{constructor(t,e){super(t),this.container.classList.add("ql-icon-picker"),Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach(n=>{n.innerHTML=e[n.getAttribute("data-value")||""]}),this.defaultItem=this.container.querySelector(".ql-selected"),this.selectItem(this.defaultItem)}selectItem(t,e){super.selectItem(t,e);const n=t||this.defaultItem;if(n!=null){if(this.label.innerHTML===n.innerHTML)return;this.label.innerHTML=n.innerHTML}}}const u9=r=>{const{overflowY:t}=getComputedStyle(r,null);return t!=="visible"&&t!=="clip"};class s0{constructor(t,e){this.quill=t,this.boundsContainer=e||document.body,this.root=t.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,u9(this.quill.root)&&this.quill.root.addEventListener("scroll",()=>{this.root.style.marginTop=`${-1*this.quill.root.scrollTop}px`}),this.hide()}hide(){this.root.classList.add("ql-hidden")}position(t){const e=t.left+t.width/2-this.root.offsetWidth/2,n=t.bottom+this.quill.root.scrollTop;this.root.style.left=`${e}px`,this.root.style.top=`${n}px`,this.root.classList.remove("ql-flip");const s=this.boundsContainer.getBoundingClientRect(),i=this.root.getBoundingClientRect();let o=0;if(i.right>s.right&&(o=s.right-i.right,this.root.style.left=`${e+o}px`),i.left<s.left&&(o=s.left-i.left,this.root.style.left=`${e+o}px`),i.bottom>s.bottom){const a=i.bottom-i.top,c=t.bottom-t.top+a;this.root.style.top=`${n-c}px`,this.root.classList.add("ql-flip")}return o}show(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}const h9=[!1,"center","right","justify"],d9=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],f9=[!1,"serif","monospace"],p9=["1","2","3",!1],g9=["small",!1,"large","huge"];class qo extends Ii{constructor(t,e){super(t,e);const n=s=>{if(!document.body.contains(t.root)){document.body.removeEventListener("click",n);return}this.tooltip!=null&&!this.tooltip.root.contains(s.target)&&document.activeElement!==this.tooltip.textbox&&!this.quill.hasFocus()&&this.tooltip.hide(),this.pickers!=null&&this.pickers.forEach(i=>{i.container.contains(s.target)||i.close()})};t.emitter.listenDOM("click",document.body,n)}addModule(t){const e=super.addModule(t);return t==="toolbar"&&this.extendToolbar(e),e}buildButtons(t,e){Array.from(t).forEach(n=>{(n.getAttribute("class")||"").split(/\s+/).forEach(i=>{if(i.startsWith("ql-")&&(i=i.slice(3),e[i]!=null))if(i==="direction")n.innerHTML=e[i][""]+e[i].rtl;else if(typeof e[i]=="string")n.innerHTML=e[i];else{const o=n.value||"";o!=null&&e[i][o]&&(n.innerHTML=e[i][o])}})})}buildPickers(t,e){this.pickers=Array.from(t).map(s=>{if(s.classList.contains("ql-align")&&(s.querySelector("option")==null&&Fi(s,h9),typeof e.align=="object"))return new n0(s,e.align);if(s.classList.contains("ql-background")||s.classList.contains("ql-color")){const i=s.classList.contains("ql-background")?"background":"color";return s.querySelector("option")==null&&Fi(s,d9,i==="background"?"#ffffff":"#000000"),new r0(s,e[i])}return s.querySelector("option")==null&&(s.classList.contains("ql-font")?Fi(s,f9):s.classList.contains("ql-header")?Fi(s,p9):s.classList.contains("ql-size")&&Fi(s,g9)),new Kl(s)});const n=()=>{this.pickers.forEach(s=>{s.update()})};this.quill.on(ht.events.EDITOR_CHANGE,n)}}qo.DEFAULTS=Gn({},Ii.DEFAULTS,{modules:{toolbar:{handlers:{formula(){this.quill.theme.tooltip.edit("formula")},image(){let r=this.container.querySelector("input.ql-image[type=file]");r==null&&(r=document.createElement("input"),r.setAttribute("type","file"),r.setAttribute("accept",this.quill.uploader.options.mimetypes.join(", ")),r.classList.add("ql-image"),r.addEventListener("change",()=>{const t=this.quill.getSelection(!0);this.quill.uploader.upload(t,r.files),r.value=""}),this.container.appendChild(r)),r.click()},video(){this.quill.theme.tooltip.edit("video")}}}}});class i0 extends s0{constructor(t,e){super(t,e),this.textbox=this.root.querySelector('input[type="text"]'),this.listen()}listen(){this.textbox.addEventListener("keydown",t=>{t.key==="Enter"?(this.save(),t.preventDefault()):t.key==="Escape"&&(this.cancel(),t.preventDefault())})}cancel(){this.hide(),this.restoreFocus()}edit(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"link",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),this.textbox==null)return;e!=null?this.textbox.value=e:t!==this.root.getAttribute("data-mode")&&(this.textbox.value="");const n=this.quill.getBounds(this.quill.selection.savedRange);n!=null&&this.position(n),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute(`data-${t}`)||""),this.root.setAttribute("data-mode",t)}restoreFocus(){this.quill.focus({preventScroll:!0})}save(){let{value:t}=this.textbox;switch(this.root.getAttribute("data-mode")){case"link":{const{scrollTop:e}=this.quill.root;this.linkRange?(this.quill.formatText(this.linkRange,"link",t,ht.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",t,ht.sources.USER)),this.quill.root.scrollTop=e;break}case"video":t=m9(t);case"formula":{if(!t)break;const e=this.quill.getSelection(!0);if(e!=null){const n=e.index+e.length;this.quill.insertEmbed(n,this.root.getAttribute("data-mode"),t,ht.sources.USER),this.root.getAttribute("data-mode")==="formula"&&this.quill.insertText(n+1," ",ht.sources.USER),this.quill.setSelection(n+2,ht.sources.USER)}break}}this.textbox.value="",this.hide()}}function m9(r){let t=r.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||r.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);return t?`${t[1]||"https"}://www.youtube.com/embed/${t[2]}?showinfo=0`:(t=r.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?`${t[1]||"https"}://player.vimeo.com/video/${t[2]}/`:r}function Fi(r,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;t.forEach(n=>{const s=document.createElement("option");n===e?s.setAttribute("selected","selected"):s.setAttribute("value",String(n)),r.appendChild(s)})}const v9=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]];class o0 extends i0{constructor(t,e){super(t,e),this.quill.on(ht.events.EDITOR_CHANGE,(n,s,i,o)=>{if(n===ht.events.SELECTION_CHANGE)if(s!=null&&s.length>0&&o===ht.sources.USER){this.show(),this.root.style.left="0px",this.root.style.width="",this.root.style.width=`${this.root.offsetWidth}px`;const a=this.quill.getLines(s.index,s.length);if(a.length===1){const c=this.quill.getBounds(s);c!=null&&this.position(c)}else{const c=a[a.length-1],u=this.quill.getIndex(c),d=Math.min(c.length()-1,s.index+s.length-u),p=this.quill.getBounds(new Gs(u,d));p!=null&&this.position(p)}}else document.activeElement!==this.textbox&&this.quill.hasFocus()&&this.hide()})}listen(){super.listen(),this.root.querySelector(".ql-close").addEventListener("click",()=>{this.root.classList.remove("ql-editing")}),this.quill.on(ht.events.SCROLL_OPTIMIZE,()=>{setTimeout(()=>{if(this.root.classList.contains("ql-hidden"))return;const t=this.quill.getSelection();if(t!=null){const e=this.quill.getBounds(t);e!=null&&this.position(e)}},1)})}cancel(){this.show()}position(t){const e=super.position(t),n=this.root.querySelector(".ql-tooltip-arrow");return n.style.marginLeft="",e!==0&&(n.style.marginLeft=`${-1*e-n.offsetWidth/2}px`),e}}it(o0,"TEMPLATE",['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""));class l0 extends qo{constructor(t,e){e.modules.toolbar!=null&&e.modules.toolbar.container==null&&(e.modules.toolbar.container=v9),super(t,e),this.quill.container.classList.add("ql-bubble")}extendToolbar(t){this.tooltip=new o0(this.quill,this.options.bounds),t.container!=null&&(this.tooltip.root.appendChild(t.container),this.buildButtons(t.container.querySelectorAll("button"),Mo),this.buildPickers(t.container.querySelectorAll("select"),Mo))}}l0.DEFAULTS=Gn({},qo.DEFAULTS,{modules:{toolbar:{handlers:{link(r){r?this.quill.theme.tooltip.edit():this.quill.format("link",!1,D.sources.USER)}}}}});const w9=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]];class a0 extends i0{constructor(){super(...arguments);it(this,"preview",this.root.querySelector("a.ql-preview"))}listen(){super.listen(),this.root.querySelector("a.ql-action").addEventListener("click",e=>{this.root.classList.contains("ql-editing")?this.save():this.edit("link",this.preview.textContent),e.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",e=>{if(this.linkRange!=null){const n=this.linkRange;this.restoreFocus(),this.quill.formatText(n,"link",!1,ht.sources.USER),delete this.linkRange}e.preventDefault(),this.hide()}),this.quill.on(ht.events.SELECTION_CHANGE,(e,n,s)=>{if(e!=null){if(e.length===0&&s===ht.sources.USER){const[i,o]=this.quill.scroll.descendant(Zn,e.index);if(i!=null){this.linkRange=new Gs(e.index-o,i.length());const a=Zn.formats(i.domNode);this.preview.textContent=a,this.preview.setAttribute("href",a),this.show();const c=this.quill.getBounds(this.linkRange);c!=null&&this.position(c);return}}else delete this.linkRange;this.hide()}})}show(){super.show(),this.root.removeAttribute("data-mode")}}it(a0,"TEMPLATE",['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""));class c0 extends qo{constructor(t,e){e.modules.toolbar!=null&&e.modules.toolbar.container==null&&(e.modules.toolbar.container=w9),super(t,e),this.quill.container.classList.add("ql-snow")}extendToolbar(t){t.container!=null&&(t.container.classList.add("ql-snow"),this.buildButtons(t.container.querySelectorAll("button"),Mo),this.buildPickers(t.container.querySelectorAll("select"),Mo),this.tooltip=new a0(this.quill,this.options.bounds),t.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"k",shortKey:!0},(e,n)=>{t.handlers.link.call(t,!n.format.link)}))}}c0.DEFAULTS=Gn({},qo.DEFAULTS,{modules:{toolbar:{handlers:{link(r){if(r){const t=this.quill.getSelection();if(t==null||t.length===0)return;let e=this.quill.getText(t);/^\S+@\S+\.\S+$/.test(e)&&e.indexOf("mailto:")!==0&&(e=`mailto:${e}`);const{tooltip:n}=this.quill.theme;n.edit("link",e)}else this.quill.format("link",!1,D.sources.USER)}}}}});D.register({"attributors/attribute/direction":Ud,"attributors/class/align":$d,"attributors/class/background":q8,"attributors/class/color":B8,"attributors/class/direction":zd,"attributors/class/font":Zd,"attributors/class/size":Wd,"attributors/style/align":Dd,"attributors/style/background":o1,"attributors/style/color":i1,"attributors/style/direction":Fd,"attributors/style/font":Kd,"attributors/style/size":Gd},!0);D.register({"formats/align":$d,"formats/direction":zd,"formats/indent":M7,"formats/background":o1,"formats/color":i1,"formats/font":Zd,"formats/size":Wd,"formats/blockquote":cc,"formats/code-block":qe,"formats/header":uc,"formats/list":Bo,"formats/bold":Lo,"formats/code":l1,"formats/italic":hc,"formats/link":Zn,"formats/script":dc,"formats/strike":fc,"formats/underline":pc,"formats/formula":al,"formats/image":gc,"formats/video":cl,"modules/syntax":e0,"modules/table":T7,"modules/toolbar":d1,"themes/bubble":l0,"themes/snow":c0,"ui/icons":Mo,"ui/picker":Kl,"ui/icon-picker":n0,"ui/color-picker":r0,"ui/tooltip":s0},!0);var b9=Object.defineProperty,y9=(r,t,e)=>t in r?b9(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,G=(r,t,e)=>y9(r,typeof t!="symbol"?t+"":t,e);const La=["none","xtiny","tiny","xxxsmall","xxsmall","xsmall","small","medium","large","xlarge","xxlarge","huge","xhuge","xxhuge"],C9=["xxsmall","xsmall","small","medium","large"],k9=["tiny","xxsmall","xsmall","small","medium","large"],u0=["navy","blue","teal","green","yellow","amber","orange","coral","red","raspberry","pink","lavender","purple","taupe","brown","black"],x9=["reserved-cream"];function f1(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let si=f1();function h0(r){si=r}const d0=/[&<>"']/,_9=new RegExp(d0.source,"g"),f0=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,L9=new RegExp(f0.source,"g"),M9={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ch=r=>M9[r];function ir(r,t){if(t){if(d0.test(r))return r.replace(_9,ch)}else if(f0.test(r))return r.replace(L9,ch);return r}const E9=/(^|[^\[])\^/g;function Gt(r,t){let e=typeof r=="string"?r:r.source;t=t||"";const n={replace:(s,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(E9,"$1"),e=e.replace(s,o),n},getRegex:()=>new RegExp(e,t)};return n}function uh(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const uo={exec:()=>null};function hh(r,t){const e=r.replace(/\|/g,(i,o,a)=>{let c=!1,u=o;for(;--u>=0&&a[u]==="\\";)c=!c;return c?"|":" |"}),n=e.split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function Vi(r,t,e){const n=r.length;if(n===0)return"";let s=0;for(;s<n&&r.charAt(n-s-1)===t;)s++;return r.slice(0,n-s)}function T9(r,t){if(r.indexOf(t[1])===-1)return-1;let e=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===t[0])e++;else if(r[n]===t[1]&&(e--,e<0))return n;return-1}function dh(r,t,e,n){const s=t.href,i=t.title?ir(t.title):null,o=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const a={type:"link",raw:e,href:s,title:i,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,a}return{type:"image",raw:e,href:s,title:i,text:ir(o)}}function N9(r,t){const e=r.match(/^(\s+)(?:```)/);if(e===null)return t;const n=e[1];return t.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[o]=i;return o.length>=n.length?s.slice(n.length):s}).join(`
`)}class _l{constructor(t){G(this,"options"),G(this,"rules"),G(this,"lexer"),this.options=t||si}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Vi(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],s=N9(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const s=Vi(n,"#");(this.options.pedantic||!s||/ $/.test(s))&&(n=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Vi(e[0],`
`)}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=Vi(e[0],`
`).split(`
`),s="",i="";const o=[];for(;n.length>0;){let a=!1;const c=[];let u;for(u=0;u<n.length;u++)if(/^ {0,3}>/.test(n[u]))c.push(n[u]),a=!0;else if(!a)c.push(n[u]);else break;n=n.slice(u);const d=c.join(`
`),p=d.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");s=s?`${s}
${d}`:d,i=i?`${i}
${p}`:p;const f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,o,!0),this.lexer.state.top=f,n.length===0)break;const g=o[o.length-1];if((g==null?void 0:g.type)==="code")break;if((g==null?void 0:g.type)==="blockquote"){const b=g,C=b.raw+`
`+n.join(`
`),M=this.blockquote(C);o[o.length-1]=M,s=s.substring(0,s.length-b.raw.length)+M.raw,i=i.substring(0,i.length-b.text.length)+M.text;break}else if((g==null?void 0:g.type)==="list"){const b=g,C=b.raw+`
`+n.join(`
`),M=this.list(C);o[o.length-1]=M,s=s.substring(0,s.length-g.raw.length)+M.raw,i=i.substring(0,i.length-b.raw.length)+M.raw,n=C.substring(o[o.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:i}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const o=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a=!1;for(;t;){let c=!1,u="",d="";if(!(e=o.exec(t))||this.rules.block.hr.test(t))break;u=e[0],t=t.substring(u.length);let p=e[2].split(`
`,1)[0].replace(/^\t+/,_=>" ".repeat(3*_.length)),f=t.split(`
`,1)[0],g=!p.trim(),b=0;if(this.options.pedantic?(b=2,d=p.trimStart()):g?b=e[1].length+1:(b=e[2].search(/[^ ]/),b=b>4?1:b,d=p.slice(b),b+=e[1].length),g&&/^[ \t]*$/.test(f)&&(u+=f+`
`,t=t.substring(f.length+1),c=!0),!c){const _=new RegExp(`^ {0,${Math.min(3,b-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),S=new RegExp(`^ {0,${Math.min(3,b-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),B=new RegExp(`^ {0,${Math.min(3,b-1)}}(?:\`\`\`|~~~)`),q=new RegExp(`^ {0,${Math.min(3,b-1)}}#`),H=new RegExp(`^ {0,${Math.min(3,b-1)}}<(?:[a-z].*>|!--)`,"i");for(;t;){const lt=t.split(`
`,1)[0];let dt;if(f=lt,this.options.pedantic?(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),dt=f):dt=f.replace(/\t/g,"    "),B.test(f)||q.test(f)||H.test(f)||_.test(f)||S.test(f))break;if(dt.search(/[^ ]/)>=b||!f.trim())d+=`
`+dt.slice(b);else{if(g||p.replace(/\t/g,"    ").search(/[^ ]/)>=4||B.test(p)||q.test(p)||S.test(p))break;d+=`
`+f}!g&&!f.trim()&&(g=!0),u+=lt+`
`,t=t.substring(lt.length+1),p=dt.slice(b)}}i.loose||(a?i.loose=!0:/\n[ \t]*\n[ \t]*$/.test(u)&&(a=!0));let C=null,M;this.options.gfm&&(C=/^\[[ xX]\] /.exec(d),C&&(M=C[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:u,task:!!C,checked:M,loose:!1,text:d,tokens:[]}),i.raw+=u}i.items[i.items.length-1].raw=i.items[i.items.length-1].raw.trimEnd(),i.items[i.items.length-1].text=i.items[i.items.length-1].text.trimEnd(),i.raw=i.raw.trimEnd();for(let c=0;c<i.items.length;c++)if(this.lexer.state.top=!1,i.items[c].tokens=this.lexer.blockTokens(i.items[c].text,[]),!i.loose){const u=i.items[c].tokens.filter(p=>p.type==="space"),d=u.length>0&&u.some(p=>/\n.*\n/.test(p.raw));i.loose=d}if(i.loose)for(let c=0;c<i.items.length;c++)i.items[c].loose=!0;return i}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(/\s+/g," "),s=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:s,title:i}}}table(t){const e=this.rules.block.table.exec(t);if(!e||!/[:|]/.test(e[2]))return;const n=hh(e[1]),s=e[2].replace(/^\||\| *$/g,"").split("|"),i=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const a of s)/^ *-+: *$/.test(a)?o.align.push("right"):/^ *:-+: *$/.test(a)?o.align.push("center"):/^ *:-+ *$/.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<n.length;a++)o.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:o.align[a]});for(const a of i)o.rows.push(hh(a,o.header.length).map((c,u)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[u]})));return o}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:ir(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const o=Vi(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=T9(e[2],"()");if(o>-1){const a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let s=e[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],i=o[3])}else i=e[3]?e[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),dh(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const s=(n[2]||n[1]).replace(/\s+/g," "),i=e[s.toLowerCase()];if(!i){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return dh(n,i,n[0],this.lexer)}}emStrong(t,e,n=""){let s=this.rules.inline.emStrongLDelim.exec(t);if(!(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){const i=[...s[0]].length-1;let o,a,c=i,u=0;const d=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,e=e.slice(-1*t.length+i);(s=d.exec(e))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(a=[...o].length,s[3]||s[4]){c+=a;continue}else if((s[5]||s[6])&&i%3&&!((i+a)%3)){u+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+u);const p=[...s[0]][0].length,f=t.slice(0,i+s.index+p+a);if(Math.min(i,a)%2){const b=f.slice(1,-1);return{type:"em",raw:f,text:b,tokens:this.lexer.inlineTokens(b)}}const g=f.slice(2,-2);return{type:"strong",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const s=/[^ ]/.test(n),i=/^ /.test(n)&&/ $/.test(n);return s&&i&&(n=n.substring(1,n.length-1)),n=ir(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,s;return e[2]==="@"?(n=ir(e[1]),s="mailto:"+n):(n=ir(e[1]),s=n),{type:"link",raw:e[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var e;let n;if(n=this.rules.inline.url.exec(t)){let s,i;if(n[2]==="@")s=ir(n[0]),i="mailto:"+s;else{let o;do o=n[0],n[0]=((e=this.rules.inline._backpedal.exec(n[0]))==null?void 0:e[0])??"";while(o!==n[0]);s=ir(n[0]),n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){let n;return this.lexer.state.inRawBlock?n=e[0]:n=ir(e[0]),{type:"text",raw:e[0],text:n}}}}const A9=/^(?:[ \t]*(?:\n|$))+/,S9=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,O9=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ro=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,I9=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,p0=/(?:[*+-]|\d{1,9}[.)])/,g0=Gt(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,p0).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),p1=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,j9=/^[^\n]+/,g1=/(?!\s*\])(?:\\.|[^\[\]\\])+/,B9=Gt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",g1).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),q9=Gt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,p0).getRegex(),Wl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",m1=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,R9=Gt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",m1).replace("tag",Wl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),m0=Gt(p1).replace("hr",Ro).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Wl).getRegex(),H9=Gt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",m0).getRegex(),v1={blockquote:H9,code:S9,def:B9,fences:O9,heading:I9,hr:Ro,html:R9,lheading:g0,list:q9,newline:A9,paragraph:m0,table:uo,text:j9},fh=Gt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ro).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Wl).getRegex(),$9={...v1,table:fh,paragraph:Gt(p1).replace("hr",Ro).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",fh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Wl).getRegex()},D9={...v1,html:Gt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",m1).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:uo,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Gt(p1).replace("hr",Ro).replace("heading",` *#{1,6} *[^
]`).replace("lheading",g0).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},v0=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,P9=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,w0=/^( {2,}|\\)\n(?!\s*$)/,U9=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ho="\\p{P}\\p{S}",z9=Gt(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ho).getRegex(),F9=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,V9=Gt(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ho).getRegex(),Z9=Gt("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ho).getRegex(),K9=Gt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ho).getRegex(),W9=Gt(/\\([punct])/,"gu").replace(/punct/g,Ho).getRegex(),G9=Gt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Y9=Gt(m1).replace("(?:-->|$)","-->").getRegex(),Q9=Gt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Y9).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ll=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,X9=Gt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ll).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),b0=Gt(/^!?\[(label)\]\[(ref)\]/).replace("label",Ll).replace("ref",g1).getRegex(),y0=Gt(/^!?\[(ref)\](?:\[\])?/).replace("ref",g1).getRegex(),J9=Gt("reflink|nolink(?!\\()","g").replace("reflink",b0).replace("nolink",y0).getRegex(),w1={_backpedal:uo,anyPunctuation:W9,autolink:G9,blockSkip:F9,br:w0,code:P9,del:uo,emStrongLDelim:V9,emStrongRDelimAst:Z9,emStrongRDelimUnd:K9,escape:v0,link:X9,nolink:y0,punctuation:z9,reflink:b0,reflinkSearch:J9,tag:Q9,text:U9,url:uo},tm={...w1,link:Gt(/^!?\[(label)\]\((.*?)\)/).replace("label",Ll).getRegex(),reflink:Gt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ll).getRegex()},mc={...w1,escape:Gt(v0).replace("])","~|])").getRegex(),url:Gt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},em={...mc,br:Gt(w0).replace("{2,}","*").getRegex(),text:Gt(mc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},tl={normal:v1,gfm:$9,pedantic:D9},Zi={normal:w1,gfm:mc,breaks:em,pedantic:tm};class br{constructor(t){G(this,"tokens"),G(this,"options"),G(this,"state"),G(this,"tokenizer"),G(this,"inlineQueue"),this.tokens=[],this.tokens.links=Object.create(null),this.options=t||si,this.options.tokenizer=this.options.tokenizer||new _l,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:tl.normal,inline:Zi.normal};this.options.pedantic?(e.block=tl.pedantic,e.inline=Zi.pedantic):this.options.gfm&&(e.block=tl.gfm,this.options.breaks?e.inline=Zi.breaks:e.inline=Zi.gfm),this.tokenizer.rules=e}static get rules(){return{block:tl,inline:Zi}}static lex(t,e){return new br(e).lex(t)}static lexInline(t,e){return new br(e).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const n=this.inlineQueue[e];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,e=[],n=!1){this.options.pedantic&&(t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""));let s,i,o;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(s=a.call({lexer:this},t,e))?(t=t.substring(s.raw.length),e.push(s),!0):!1))){if(s=this.tokenizer.space(t)){t=t.substring(s.raw.length),s.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(s);continue}if(s=this.tokenizer.code(t)){t=t.substring(s.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(s);continue}if(s=this.tokenizer.fences(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.heading(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.hr(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.blockquote(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.list(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.html(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.def(t)){t=t.substring(s.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+s.raw,i.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.lheading(t)){t=t.substring(s.raw.length),e.push(s);continue}if(o=t,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const c=t.slice(1);let u;this.options.extensions.startBlock.forEach(d=>{u=d.call({lexer:this},c),typeof u=="number"&&u>=0&&(a=Math.min(a,u))}),a<1/0&&a>=0&&(o=t.substring(0,a+1))}if(this.state.top&&(s=this.tokenizer.paragraph(o))){i=e[e.length-1],n&&(i==null?void 0:i.type)==="paragraph"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(s),n=o.length!==t.length,t=t.substring(s.raw.length);continue}if(s=this.tokenizer.text(t)){t=t.substring(s.raw.length),i=e[e.length-1],i&&i.type==="text"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(s);continue}if(t){const a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,s,i,o=t,a,c,u;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)d.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(c||(u=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(n=d.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.escape(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.tag(t)){t=t.substring(n.raw.length),s=e[e.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):e.push(n);continue}if(n=this.tokenizer.link(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(n.raw.length),s=e[e.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):e.push(n);continue}if(n=this.tokenizer.emStrong(t,o,u)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.codespan(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.br(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.del(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.autolink(t)){t=t.substring(n.raw.length),e.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(t))){t=t.substring(n.raw.length),e.push(n);continue}if(i=t,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const p=t.slice(1);let f;this.options.extensions.startInline.forEach(g=>{f=g.call({lexer:this},p),typeof f=="number"&&f>=0&&(d=Math.min(d,f))}),d<1/0&&d>=0&&(i=t.substring(0,d+1))}if(n=this.tokenizer.inlineText(i)){t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(u=n.raw.slice(-1)),c=!0,s=e[e.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):e.push(n);continue}if(t){const d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return e}}class Ml{constructor(t){G(this,"options"),G(this,"parser"),this.options=t||si}space(t){return""}code({text:t,lang:e,escaped:n}){var s;const i=(s=(e||"").match(/^\S*/))==null?void 0:s[0],o=t.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+ir(i)+'">'+(n?o:ir(o,!0))+`</code></pre>
`:"<pre><code>"+(n?o:ir(o,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){const e=t.ordered,n=t.start;let s="";for(let a=0;a<t.items.length;a++){const c=t.items[a];s+=this.listitem(c)}const i=e?"ol":"ul",o=e&&n!==1?' start="'+n+'"':"";return"<"+i+o+`>
`+s+"</"+i+`>
`}listitem(t){let e="";if(t.task){const n=this.checkbox({checked:!!t.checked});t.loose?t.tokens.length>0&&t.tokens[0].type==="paragraph"?(t.tokens[0].text=n+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=n+" "+t.tokens[0].tokens[0].text)):t.tokens.unshift({type:"text",raw:n+" ",text:n+" "}):e+=n+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let i=0;i<t.header.length;i++)n+=this.tablecell(t.header[i]);e+=this.tablerow({text:n});let s="";for(let i=0;i<t.rows.length;i++){const o=t.rows[i];n="";for(let a=0;a<o.length;a++)n+=this.tablecell(o[a]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${t}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){const s=this.parser.parseInline(n),i=uh(t);if(i===null)return s;t=i;let o='<a href="'+t+'"';return e&&(o+=' title="'+e+'"'),o+=">"+s+"</a>",o}image({href:t,title:e,text:n}){const s=uh(t);if(s===null)return n;t=s;let i=`<img src="${t}" alt="${n}"`;return e&&(i+=` title="${e}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):t.text}}class b1{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}}class yr{constructor(t){G(this,"options"),G(this,"renderer"),G(this,"textRenderer"),this.options=t||si,this.options.renderer=this.options.renderer||new Ml,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new b1}static parse(t,e){return new yr(e).parse(t)}static parseInline(t,e){return new yr(e).parseInline(t)}parse(t,e=!0){let n="";for(let s=0;s<t.length;s++){const i=t[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const a=i,c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){n+=c||"";continue}}const o=i;switch(o.type){case"space":{n+=this.renderer.space(o);continue}case"hr":{n+=this.renderer.hr(o);continue}case"heading":{n+=this.renderer.heading(o);continue}case"code":{n+=this.renderer.code(o);continue}case"table":{n+=this.renderer.table(o);continue}case"blockquote":{n+=this.renderer.blockquote(o);continue}case"list":{n+=this.renderer.list(o);continue}case"html":{n+=this.renderer.html(o);continue}case"paragraph":{n+=this.renderer.paragraph(o);continue}case"text":{let a=o,c=this.renderer.text(a);for(;s+1<t.length&&t[s+1].type==="text";)a=t[++s],c+=`
`+this.renderer.text(a);e?n+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c}]}):n+=c;continue}default:{const a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(t,e){e=e||this.renderer;let n="";for(let s=0;s<t.length;s++){const i=t[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const a=this.options.extensions.renderers[i.type].call({parser:this},i);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){n+=a||"";continue}}const o=i;switch(o.type){case"escape":{n+=e.text(o);break}case"html":{n+=e.html(o);break}case"link":{n+=e.link(o);break}case"image":{n+=e.image(o);break}case"strong":{n+=e.strong(o);break}case"em":{n+=e.em(o);break}case"codespan":{n+=e.codespan(o);break}case"br":{n+=e.br(o);break}case"del":{n+=e.del(o);break}case"text":{n+=e.text(o);break}default:{const a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}}class ho{constructor(t){G(this,"options"),G(this,"block"),this.options=t||si}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?br.lex:br.lexInline}provideParser(){return this.block?yr.parse:yr.parseInline}}G(ho,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class rm{constructor(...t){G(this,"defaults",f1()),G(this,"options",this.setOptions),G(this,"parse",this.parseMarkdown(!0)),G(this,"parseInline",this.parseMarkdown(!1)),G(this,"Parser",yr),G(this,"Renderer",Ml),G(this,"TextRenderer",b1),G(this,"Lexer",br),G(this,"Tokenizer",_l),G(this,"Hooks",ho),this.use(...t)}walkTokens(t,e){var n,s;let i=[];for(const o of t)switch(i=i.concat(e.call(this,o)),o.type){case"table":{const a=o;for(const c of a.header)i=i.concat(this.walkTokens(c.tokens,e));for(const c of a.rows)for(const u of c)i=i.concat(this.walkTokens(u.tokens,e));break}case"list":{const a=o;i=i.concat(this.walkTokens(a.items,e));break}default:{const a=o;(s=(n=this.defaults.extensions)==null?void 0:n.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(c=>{const u=a[c].flat(1/0);i=i.concat(this.walkTokens(u,e))}):a.tokens&&(i=i.concat(this.walkTokens(a.tokens,e)))}}return i}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const o=e.renderers[i.name];o?e.renderers[i.name]=function(...a){let c=i.renderer.apply(this,a);return c===!1&&(c=o.apply(this,a)),c}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=e[i.level];o?o.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),s.extensions=e),n.renderer){const i=this.defaults.renderer||new Ml(this.defaults);for(const o in n.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const a=o,c=n.renderer[a],u=i[a];i[a]=(...d)=>{let p=c.apply(i,d);return p===!1&&(p=u.apply(i,d)),p||""}}s.renderer=i}if(n.tokenizer){const i=this.defaults.tokenizer||new _l(this.defaults);for(const o in n.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,c=n.tokenizer[a],u=i[a];i[a]=(...d)=>{let p=c.apply(i,d);return p===!1&&(p=u.apply(i,d)),p}}s.tokenizer=i}if(n.hooks){const i=this.defaults.hooks||new ho;for(const o in n.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const a=o,c=n.hooks[a],u=i[a];ho.passThroughHooks.has(o)?i[a]=d=>{if(this.defaults.async)return Promise.resolve(c.call(i,d)).then(f=>u.call(i,f));const p=c.call(i,d);return u.call(i,p)}:i[a]=(...d)=>{let p=c.apply(i,d);return p===!1&&(p=u.apply(i,d)),p}}s.hooks=i}if(n.walkTokens){const i=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(a){let c=[];return c.push(o.call(this,a)),i&&(c=c.concat(i.call(this,a))),c}}this.defaults={...this.defaults,...s}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return br.lex(t,e??this.defaults)}parser(t,e){return yr.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{const s={...n},i={...this.defaults,...s},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=t);const a=i.hooks?i.hooks.provideLexer():t?br.lex:br.lexInline,c=i.hooks?i.hooks.provideParser():t?yr.parse:yr.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(e):e).then(u=>a(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>c(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(o);try{i.hooks&&(e=i.hooks.preprocess(e));let u=a(e,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let d=c(u,i);return i.hooks&&(d=i.hooks.postprocess(d)),d}catch(u){return o(u)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const s="<p>An error occurred:</p><pre>"+ir(n.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(n);throw n}}}const Ys=new rm;function Kt(r,t){return Ys.parse(r,t)}Kt.options=Kt.setOptions=function(r){return Ys.setOptions(r),Kt.defaults=Ys.defaults,h0(Kt.defaults),Kt};Kt.getDefaults=f1;Kt.defaults=si;Kt.use=function(...r){return Ys.use(...r),Kt.defaults=Ys.defaults,h0(Kt.defaults),Kt};Kt.walkTokens=function(r,t){return Ys.walkTokens(r,t)};Kt.parseInline=Ys.parseInline;Kt.Parser=yr;Kt.parser=yr.parse;Kt.Renderer=Ml;Kt.TextRenderer=b1;Kt.Lexer=br;Kt.lexer=br.lex;Kt.Tokenizer=_l;Kt.Hooks=ho;Kt.parse=Kt;Kt.options;Kt.setOptions;Kt.use;Kt.walkTokens;Kt.parseInline;yr.parse;br.lex;function C0(r){var t,e,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(t=0;t<s;t++)r[t]&&(e=C0(r[t]))&&(n&&(n+=" "),n+=e)}else for(e in r)r[e]&&(n&&(n+=" "),n+=e);return n}function nm(){for(var r,t,e=0,n="",s=arguments.length;e<s;e++)(r=arguments[e])&&(t=C0(r))&&(n&&(n+=" "),n+=t);return n}const ph=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,sm=r=>{const t=function(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return nm(n)};return{compose:function(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return i=>{const o=Object.fromEntries(Object.entries(i||{}).filter(a=>{let[c]=a;return!["class","className"].includes(c)}));return t(n.map(a=>a(o)),i==null?void 0:i.class,i==null?void 0:i.className)}},cva:e=>n=>{var s;if((e==null?void 0:e.variants)==null)return t(e==null?void 0:e.base,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=e,a=Object.keys(i).map(d=>{const p=n==null?void 0:n[d],f=o==null?void 0:o[d],g=ph(p)||ph(f);return i[d][g]}),c={...o,...n&&Object.entries(n).reduce((d,p)=>{let[f,g]=p;return typeof g>"u"?d:{...d,[f]:g}},{})},u=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((d,p)=>{let{class:f,className:g,...b}=p;return Object.entries(b).every(C=>{let[M,_]=C;const S=c[M];return Array.isArray(_)?_.includes(S):S===_})?[...d,f,g]:d},[]);return t(e==null?void 0:e.base,a,u,n==null?void 0:n.class,n==null?void 0:n.className)},cx:t}},{cva:y1,cx:k0}=sm(),im={size:{small:"button--small",medium:"button--medium",large:"button--large"},variant:{primary:"button--primary",secondary:"button--secondary",success:"button--success",danger:"button--danger",raw:"button--raw"},finish:{filled:"button--filled",outlined:"button--outlined",ghost:"button--ghost",link:"button--link"},inverted:{true:"button--inverted"},round:{true:"button--round"},fillWidth:{true:"button--fill-width"},forceState:{hover:"button--hover",focus:"button--focus",active:"button--active-pressed"},active:{true:"button--active"}},om=y1({base:"button",variants:im,defaultVariants:{size:"medium",variant:"primary"}}),lm={position:"bottom-right",elastic:!0,defaultDuration:3e3};function am(r){const t={...lm,...r};return()=>{const e=Ve([]),n=Ve(t.position),s=Ve(t.elastic),i=Ve(t.defaultDuration);function o(d){e.value=e.value.filter(p=>p.id!==d)}function a(){e.value=[]}function c(d){d.position&&(n.value=d.position),d.elastic&&(s.value=d.elastic),d.defaultDuration&&(i.value=d.defaultDuration)}function u(d){const p=crypto.randomUUID();e.value=[...e.value,{...d,id:p}],!d.closable&&!d.static&&setTimeout(()=>{o(p)},d.duration||i.value)}return{toasts:e,position:n,defaultDuration:i,elastic:s,add:u,remove:o,clear:a,updateConfig:c,toast:{success:d=>{u({type:"success",elastic:s.value,...d})},warning:d=>{u({type:"warning",elastic:s.value,...d})},info:d=>{u({type:"info",elastic:s.value,...d})},danger:d=>{u({type:"danger",elastic:s.value,...d})}}}}}am();const cm=["top","right","bottom","left"],gh=["start","end"],x0=cm.reduce((r,t)=>r.concat(t,t+"-"+gh[0],t+"-"+gh[1]),[]);typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const um="M 251 186 C 251 221.899 221.899 251 186 251 C 150.101 251 121 221.899 121 186 C 121 150.101 150.101 121 186 121 C 221.899 121 251 150.101 251 186 Z M 0 256 L 256 256 L 256 0 L 0 0 L 0 256 Z",hm="M 231 186.001 C 231 188.982 228.584 191.399 225.601 191.399 L 191.405 191.399 L 191.405 225.596 C 191.405 229.754 186.905 232.352 183.306 230.273 C 181.634 229.309 180.606 227.527 180.606 225.596 L 180.606 191.399 L 146.408 191.399 C 142.252 191.399 139.653 186.901 141.731 183.301 C 142.696 181.63 144.478 180.601 146.408 180.601 L 180.606 180.601 L 180.606 146.403 C 180.606 142.247 185.106 139.649 188.705 141.727 C 190.375 142.692 191.405 144.475 191.405 146.403 L 191.405 180.601 L 225.601 180.601 C 228.584 180.601 231 183.018 231 186.001 Z",dm="M 229.469 161.99 L 174.103 217.355 C 172.074 219.391 168.777 219.391 166.749 217.355 L 142.527 193.133 C 139.696 190.303 140.991 185.47 144.858 184.433 C 146.652 183.953 148.567 184.466 149.88 185.779 L 170.43 206.329 L 222.124 154.645 C 224.954 151.814 229.787 153.109 230.823 156.976 C 231.304 158.77 230.791 160.685 229.478 161.998 L 229.469 161.99 Z",fm="M 219.526 212.456 C 222.25 215.182 221.003 219.835 217.281 220.832 C 215.553 221.296 213.709 220.803 212.444 219.536 L 186 193.084 L 159.548 219.529 C 156.822 222.253 152.168 221.007 151.171 217.284 C 150.708 215.556 151.202 213.712 152.466 212.448 L 178.919 186.003 L 152.475 159.551 C 149.75 156.826 150.996 152.171 154.72 151.174 C 156.448 150.712 158.29 151.205 159.556 152.47 L 186 178.923 L 212.452 152.465 C 215.179 149.741 219.832 150.988 220.829 154.711 C 221.292 156.439 220.799 158.282 219.533 159.547 L 193.081 186.003 L 219.526 212.456 Z",pm="M 186.033 141.034 C 151.418 141.034 129.784 178.507 147.091 208.484 C 164.398 238.461 207.668 238.461 224.975 208.484 C 228.922 201.648 231 193.894 231 186.001 C 230.973 161.177 210.856 141.062 186.033 141.034 Z M 221.007 186.001 C 221.015 193.55 218.567 200.898 214.033 206.935 L 165.099 158.001 C 186.666 141.886 217.591 155.161 220.763 181.895 C 220.925 183.258 221.006 184.628 221.007 186.001 Z M 151.059 186.001 C 151.052 178.451 153.5 171.103 158.034 165.065 L 206.967 214.001 C 185.401 230.117 154.475 216.842 151.303 190.106 C 151.141 188.743 151.06 187.372 151.059 186.001 Z",gm="M 235.592 184.037 C 235.443 183.71 231.911 175.869 224.11 168.068 C 213.672 157.646 200.517 152.135 186.003 152.135 C 171.49 152.135 158.334 157.646 147.909 168.068 C 140.108 175.869 136.576 183.71 136.414 184.037 C 135.862 185.289 135.862 186.716 136.414 187.968 C 136.564 188.298 140.096 196.136 147.901 203.937 C 158.334 214.359 171.49 219.866 186.003 219.866 C 200.517 219.866 213.672 214.359 224.094 203.937 C 231.9 196.136 235.431 188.298 235.58 187.968 C 236.136 186.717 236.141 185.29 235.592 184.037 Z M 217.023 197.341 C 208.366 205.864 197.933 210.19 186.003 210.19 C 174.074 210.19 163.64 205.864 154.997 197.337 C 151.595 193.971 148.669 190.157 146.3 186 C 148.67 181.845 151.595 178.032 154.997 174.667 C 163.644 166.137 174.074 161.811 186.003 161.811 C 197.933 161.811 208.363 166.137 217.011 174.667 C 220.411 178.032 223.336 181.845 225.706 186 C 223.336 190.157 220.411 193.971 217.011 197.337 L 217.023 197.341 Z M 186.003 168.262 C 172.348 168.262 163.813 183.044 170.641 194.87 C 177.469 206.696 194.537 206.696 201.365 194.87 C 202.923 192.174 203.742 189.114 203.742 186 C 203.731 176.208 195.795 168.273 186.003 168.262 Z M 186.003 194.064 C 179.796 194.064 175.916 187.344 179.02 181.969 C 182.124 176.593 189.883 176.593 192.986 181.969 C 193.694 183.195 194.066 184.585 194.066 186 C 194.066 190.454 190.456 194.064 186.003 194.064 Z",mm="M 223.747 165.441 L 206.562 148.252 C 203.559 145.246 198.686 145.246 195.682 148.252 L 148.254 195.684 C 146.806 197.121 145.994 199.08 146 201.121 L 146 218.311 C 146 222.559 149.444 226.002 153.693 226.002 L 170.882 226.002 C 172.923 226.007 174.881 225.197 176.321 223.75 L 223.747 176.318 C 226.751 173.313 226.751 168.444 223.747 165.441 Z M 170.232 216.772 L 155.231 216.772 L 155.231 201.772 L 187.539 169.464 L 202.538 184.464 L 170.232 216.772 Z M 209.079 177.925 L 194.078 162.925 L 201.131 155.872 L 216.132 170.872 L 209.079 177.925 Z",vm="M 217.998 164.383 L 206.8 164.383 L 206.8 156.383 C 206.8 140.37 189.465 130.364 175.599 138.369 C 169.165 142.085 165.2 148.95 165.2 156.383 L 165.2 164.383 L 153.999 164.383 C 149.581 164.383 146 167.964 146 172.383 L 146 217.181 C 146 221.601 149.581 225.183 153.999 225.183 L 217.998 225.183 C 222.417 225.183 226 221.601 226 217.181 L 226 172.383 C 226 167.964 222.417 164.383 217.998 164.383 Z M 174.798 156.383 C 174.798 147.759 184.131 142.372 191.6 146.684 C 195.065 148.684 197.197 152.381 197.197 156.383 L 197.197 164.383 L 174.798 164.383 L 174.798 156.383 Z M 216.399 215.581 L 155.6 215.581 L 155.6 173.981 L 216.399 173.981 L 216.399 215.581 Z M 192.4 194.781 C 192.4 199.71 187.065 202.788 182.8 200.325 C 178.533 197.861 178.533 191.703 182.8 189.241 C 183.771 188.677 184.877 188.383 186 188.383 C 189.534 188.383 192.4 191.248 192.4 194.781 Z",wm="M 226 153.367 L 226 172.947 C 226 175.65 223.851 177.842 221.201 177.842 L 202.001 177.842 C 198.305 177.842 195.995 173.763 197.844 170.499 C 198.7 168.984 200.286 168.052 202.001 168.052 L 209.6 168.052 L 206.48 164.869 C 200.832 159.081 193.16 155.814 185.152 155.79 L 184.98 155.79 C 177.043 155.772 169.418 158.942 163.756 164.613 C 161.114 167.247 156.666 165.976 155.749 162.327 C 155.324 160.633 155.817 158.835 157.043 157.612 C 164.5 150.146 174.542 145.973 184.992 146 L 185.2 146 C 195.742 146.03 205.843 150.326 213.281 157.947 L 216.401 161.117 L 216.401 153.367 C 216.401 149.599 220.401 147.244 223.6 149.127 C 225.085 150.002 226 151.618 226 153.367 Z M 208.244 207.387 C 202.578 213.061 194.949 216.23 187.007 216.21 L 186.836 216.21 C 178.827 216.184 171.157 212.919 165.507 207.13 L 162.4 203.948 L 170 203.948 C 173.695 203.948 176.005 199.869 174.156 196.606 C 173.299 195.09 171.714 194.158 170 194.158 L 150.8 194.158 C 148.148 194.158 146 196.35 146 199.053 L 146 218.633 C 146 222.401 150 224.756 153.2 222.871 C 154.684 221.997 155.6 220.382 155.6 218.633 L 155.6 210.883 L 158.719 214.064 C 166.159 221.68 176.259 225.973 186.8 226 L 187.024 226 C 197.475 226.025 207.516 221.853 214.972 214.387 C 217.614 211.751 216.468 207.189 212.911 206.172 C 211.259 205.701 209.487 206.164 208.261 207.387 L 208.244 207.387 Z",mh=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-a-large-small"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16" />
  <path d="M15.697 14h5.606" />
  <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
  <path d="M3.304 13h6.392" />
</svg>`,bm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-align-center"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 5H3" />
  <path d="M17 12H7" />
  <path d="M19 19H5" />
</svg>
`,ym=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-align-justify"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 5h18" />
  <path d="M3 12h18" />
  <path d="M3 19h18" />
</svg>
`,Cm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-align-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 5H3" />
  <path d="M15 12H3" />
  <path d="M17 19H3" />
</svg>
`,km=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-align-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 5H3" />
  <path d="M21 12H9" />
  <path d="M21 19H7" />
</svg>
`,xm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-align-vertical-justify-end"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="14" height="6" x="5" y="12" rx="2" />
  <rect width="10" height="6" x="7" y="2" rx="2" />
  <path d="M2 22h20" />
</svg>
`,_m=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-align-vertical-justify-start"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="14" height="6" x="5" y="16" rx="2" />
  <rect width="10" height="6" x="7" y="6" rx="2" />
  <path d="M2 2h20" />
</svg>
`,Lm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-align-vertical-space-around"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="10" height="6" x="7" y="9" rx="2" />
  <path d="M22 20H2" />
  <path d="M22 4H2" />
</svg>
`,Mm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-archive"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="20" height="5" x="2" y="3" rx="1" />
  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
  <path d="M10 12h4" />
</svg>
`,Em=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-arrow-big-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z" />
</svg>
`,Tm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-arrow-big-up"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z" />
</svg>
`,Nm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-arrow-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 5v14" />
  <path d="m19 12-7 7-7-7" />
</svg>
`,Am=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-arrow-big-down-dash"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14 8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-6.939 6.939a1.207 1.207 0 0 1-1.708 0l-6.94-6.94a.707.707 0 0 1 .5-1.206H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1z" />
  <path d="M9 4h6" />
</svg>
`,Sm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-arrow-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m12 19-7-7 7-7" />
  <path d="M19 12H5" />
</svg>
`,Om=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-arrow-left-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 3 4 7l4 4" />
  <path d="M4 7h16" />
  <path d="m16 21 4-4-4-4" />
  <path d="M20 17H4" />
</svg>
`,Im=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-arrow-left-to-line"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 19V5" />
  <path d="m13 6-6 6 6 6" />
  <path d="M7 12h14" />
</svg>
`,jm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-arrow-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
  <path d="m12 5 7 7-7 7" />
</svg>
`,Bm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-arrow-right-to-line"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17 12H3" />
  <path d="m11 18 6-6-6-6" />
  <path d="M21 5v14" />
</svg>
`,qm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-arrow-up"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m5 12 7-7 7 7" />
  <path d="M12 19V5" />
</svg>
`,Rm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-at-sign"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="4" />
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
</svg>
`,Hm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-audio-lines"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 10v3" />
  <path d="M6 6v11" />
  <path d="M10 3v18" />
  <path d="M14 8v7" />
  <path d="M18 5v13" />
  <path d="M22 10v3" />
</svg>
`,$m=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-bold"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
</svg>
`,Dm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-book"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
</svg>
`,Pm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-book-image"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" />
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
  <circle cx="10" cy="8" r="2" />
</svg>
`,Um=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-book-open"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 7v14" />
  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
</svg>
`,zm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-book-open-text"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 7v14" />
  <path d="M16 12h2" />
  <path d="M16 8h2" />
  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
  <path d="M6 12h2" />
  <path d="M6 8h2" />
</svg>
`,Fm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-bookmark"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
</svg>
`,Vm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-brain-circuit"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
  <path d="M9 13a4.5 4.5 0 0 0 3-4" />
  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
  <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
  <path d="M6 18a4 4 0 0 1-1.967-.516" />
  <path d="M12 13h4" />
  <path d="M12 18h6a2 2 0 0 1 2 2v1" />
  <path d="M12 8h8" />
  <path d="M16 8V5a2 2 0 0 1 2-2" />
  <circle cx="16" cy="13" r=".5" />
  <circle cx="18" cy="3" r=".5" />
  <circle cx="20" cy="21" r=".5" />
  <circle cx="20" cy="8" r=".5" />
</svg>
`,Zm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-calendar"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
</svg>
`,Km=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-calendar-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
  <path d="m14 14-4 4" />
  <path d="m10 14 4 4" />
</svg>
`,Wm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 6 9 17l-5-5" />
</svg>
`,Gm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-check-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 7 17l-5-5" />
  <path d="m22 10-7.5 7.5L13 16" />
</svg>
`,vh=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-chevron-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m6 9 6 6 6-6" />
</svg>
`,Ym=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-chevron-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 18-6-6 6-6" />
</svg>
`,Qm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-chevron-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m9 18 6-6-6-6" />
</svg>
`,Xm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-chevron-up"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m18 15-6-6-6 6" />
</svg>
`,wh=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-circle"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
</svg>
`,Jm=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-circle-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <line x1="12" x2="12" y1="8" y2="12" />
  <line x1="12" x2="12.01" y1="16" y2="16" />
</svg>
`,tv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-circle-arrow-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 8v8" />
  <path d="m8 12 4 4 4-4" />
</svg>
`,bh=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-circle-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m9 12 2 2 4-4" />
</svg>
`,ev=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-circle-help"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
  <path d="M12 17h.01" />
</svg>
`,rv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-circle-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M8 12h8" />
  <path d="M12 8v8" />
</svg>
`,nv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-circle-user"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="10" r="3" />
  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
</svg>
`,sv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-circle-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m15 9-6 6" />
  <path d="m9 9 6 6" />
</svg>
`,iv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-clipboard"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
</svg>
`,ov=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-clock"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4 2" />
</svg>
`,yh=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-cloud-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 12v4" />
  <path d="M12 20h.01" />
  <path d="M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642" />
</svg>
`,Ma=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-cloud-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m17 15-5.5 5.5L9 18" />
  <path d="M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327" />
</svg>
`,Ch=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-cloud-off"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057" />
  <path d="M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78" />
  <path d="m2 2 20 20" />
</svg>
`,lv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-cloud-sync"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m17 18-1.535 1.605a5 5 0 0 1-8-1.5" />
  <path d="M17 22v-4h-4" />
  <path d="M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607" />
  <path d="M7 10v4h4" />
  <path d="m7 14 1.535-1.605a5 5 0 0 1 8 1.5" />
</svg>
`,av=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-copy"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
</svg>
`,cv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-credit-card"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="20" height="14" x="2" y="5" rx="2" />
  <line x1="2" x2="22" y1="10" y2="10" />
</svg>
`,uv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-dices"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
  <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
  <path d="M6 18h.01" />
  <path d="M10 14h.01" />
  <path d="M15 6h.01" />
  <path d="M18 9h.01" />
</svg>
`,hv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-door-open"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11 20H2" />
  <path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z" />
  <path d="M11 4H8a2 2 0 0 0-2 2v14" />
  <path d="M14 12h.01" />
  <path d="M22 20h-3" />
</svg>
`,dv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-download"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />
</svg>
`,fv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-droplet-off"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586" />
  <path d="m2 2 20 20" />
  <path d="M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" />
</svg>
`,pv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-ellipsis"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="1" />
  <circle cx="19" cy="12" r="1" />
  <circle cx="5" cy="12" r="1" />
</svg>
`,gv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-eye"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" />
</svg>
`,mv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-eye-off"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
  <path d="m2 2 20 20" />
</svg>
`,vv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-feather"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
  <path d="M16 8 2 22" />
  <path d="M17.5 15H9" />
</svg>
`,Ea=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-file"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
</svg>
`,wv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-file-search"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <circle cx="11.5" cy="14.5" r="2.5" />
  <path d="M13.3 16.3 15 18" />
</svg>
`,bv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-file-text"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" />
</svg>
`,yv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-file-up"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M12 12v6" />
  <path d="m15 15-3-3-3 3" />
</svg>
`,Cv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-filter"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
</svg>
`,kv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-flag"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
</svg>
`,xv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-folder"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
</svg>
`,kh=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-globe"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
  <path d="M2 12h20" />
</svg>
`,_v=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-graduation-cap"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
  <path d="M22 10v6" />
  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
</svg>
`,Lv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-grid-3x3"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9h18" />
  <path d="M3 15h18" />
  <path d="M9 3v18" />
  <path d="M15 3v18" />
</svg>
`,Mv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-grip-vertical"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="9" cy="12" r="1" />
  <circle cx="9" cy="5" r="1" />
  <circle cx="9" cy="19" r="1" />
  <circle cx="15" cy="12" r="1" />
  <circle cx="15" cy="5" r="1" />
  <circle cx="15" cy="19" r="1" />
</svg>
`,Ev=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-heading"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 12h12" />
  <path d="M6 20V4" />
  <path d="M18 20V4" />
</svg>
`,Tv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-heading-1"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 12h8" />
  <path d="M4 18V6" />
  <path d="M12 18V6" />
  <path d="m17 12 3-2v8" />
</svg>
`,Nv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-heading-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 12h8" />
  <path d="M4 18V6" />
  <path d="M12 18V6" />
  <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
</svg>
`,Av=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-headphones"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
</svg>
`,Sv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-highlighter"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m9 11-6 6v3h9l3-3" />
  <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
</svg>
`,Ov=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-history"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
  <path d="M12 7v5l4 2" />
</svg>
`,Iv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-hourglass"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 22h14" />
  <path d="M5 2h14" />
  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
</svg>
`,jv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-house"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
</svg>
`,Bv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-id-card"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 10h2" />
  <path d="M16 14h2" />
  <path d="M6.17 15a3 3 0 0 1 5.66 0" />
  <circle cx="9" cy="11" r="2" />
  <rect x="2" y="5" width="20" height="14" rx="2" />
</svg>
`,qv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-image"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <circle cx="9" cy="9" r="2" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
</svg>
`,Rv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-indent-decrease"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 5H11" />
  <path d="M21 12H11" />
  <path d="M21 19H11" />
  <path d="m7 8-4 4 4 4" />
</svg>
`,Hv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-indent-increase"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 5H11" />
  <path d="M21 12H11" />
  <path d="M21 19H11" />
  <path d="m3 8 4 4-4 4" />
</svg>
`,$v=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-info"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 16v-4" />
  <path d="M12 8h.01" />
</svg>
`,Dv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-italic"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="19" x2="10" y1="4" y2="4" />
  <line x1="14" x2="5" y1="20" y2="20" />
  <line x1="15" x2="9" y1="4" y2="20" />
</svg>
`,Pv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-keyboard"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 8h.01" />
  <path d="M12 12h.01" />
  <path d="M14 8h.01" />
  <path d="M16 12h.01" />
  <path d="M18 8h.01" />
  <path d="M6 8h.01" />
  <path d="M7 16h10" />
  <path d="M8 12h.01" />
  <rect width="20" height="16" x="2" y="4" rx="2" />
</svg>
`,Uv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-layout"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9h18" />
  <path d="M9 21V9" />
</svg>
`,zv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-library-big"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="8" height="18" x="3" y="3" rx="1" />
  <path d="M7 3v18" />
  <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />
</svg>
`,Fv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-link"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
</svg>
`,Vv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-list"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 5h.01" />
  <path d="M3 12h.01" />
  <path d="M3 19h.01" />
  <path d="M8 5h13" />
  <path d="M8 12h13" />
  <path d="M8 19h13" />
</svg>
`,Zv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-list-checks"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13 5h8" />
  <path d="M13 12h8" />
  <path d="M13 19h8" />
  <path d="m3 17 2 2 4-4" />
  <path d="m3 7 2 2 4-4" />
</svg>
`,Kv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-list-ordered"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11 5h10" />
  <path d="M11 12h10" />
  <path d="M11 19h10" />
  <path d="M4 4h1v5" />
  <path d="M4 9h2" />
  <path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" />
</svg>
`,Wv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-log-out"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m16 17 5-5-5-5" />
  <path d="M21 12H9" />
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
</svg>
`,Gv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-fullscreen"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  <rect width="10" height="8" x="7" y="8" rx="1" />
</svg>
`,Yv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-megaphone"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
  <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
  <path d="M8 6v8" />
</svg>
`,Qv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-menu"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />
</svg>
`,Xv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-message-square"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
</svg>
`,Jv=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-messages-square"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
</svg>
`,Ta=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-minus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
</svg>
`,tw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-notepad-text"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 2v4" />
  <path d="M12 2v4" />
  <path d="M16 2v4" />
  <rect width="16" height="18" x="4" y="4" rx="2" />
  <path d="M8 10h6" />
  <path d="M8 14h8" />
  <path d="M8 18h5" />
</svg>
`,ew=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-octagon-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 16h.01" />
  <path d="M12 8v4" />
  <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
</svg>
`,rw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-palette"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
</svg>
`,nw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-panel-bottom"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 15h18" />
</svg>
`,sw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-panel-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M9 3v18" />
</svg>
`,iw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-panel-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M15 3v18" />
</svg>
`,ow=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-panel-top"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9h18" />
</svg>
`,lw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-pause"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="14" y="3" width="5" height="18" rx="1" />
  <rect x="5" y="3" width="5" height="18" rx="1" />
</svg>
`,aw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-pencil"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" />
</svg>
`,cw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-pin"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 17v5" />
  <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
</svg>
`,uw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-play"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
</svg>
`,hw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
  <path d="M12 5v14" />
</svg>
`,dw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-quote"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
</svg>
`,fw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-repeat"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m17 2 4 4-4 4" />
  <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
  <path d="m7 22-4-4 4-4" />
  <path d="M21 13v1a4 4 0 0 1-4 4H3" />
</svg>
`,pw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-rotate-ccw"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
</svg>
`,gw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-rows-3"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M21 9H3" />
  <path d="M21 15H3" />
</svg>
`,mw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-scissors"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="6" cy="6" r="3" />
  <path d="M8.12 8.12 12 12" />
  <path d="M20 4 8.12 15.88" />
  <circle cx="6" cy="18" r="3" />
  <path d="M14.8 14.8 20 20" />
</svg>
`,vw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-search"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />
</svg>
`,ww=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-send"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
  <path d="m21.854 2.147-10.94 10.939" />
</svg>
`,bw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-settings"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />
</svg>
`,yw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-share-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
</svg>
`,Cw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-sliders-horizontal"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 5H3" />
  <path d="M12 19H3" />
  <path d="M14 3v4" />
  <path d="M16 17v4" />
  <path d="M21 12h-9" />
  <path d="M21 19h-5" />
  <path d="M21 5h-7" />
  <path d="M8 10v4" />
  <path d="M8 12H3" />
</svg>
`,kw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-square"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
</svg>
`,xh=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-square-arrow-out-up-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
  <path d="m21 3-9 9" />
  <path d="M15 3h6v6" />
</svg>
`,xw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-square-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="m9 12 2 2 4-4" />
</svg>
`,_w=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
</svg>
`,Lw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-sticky-note"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
  <path d="M15 3v5a1 1 0 0 0 1 1h5" />
</svg>
`,Mw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-strikethrough"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 4H9a3 3 0 0 0-2.83 4" />
  <path d="M14 12a4 4 0 0 1 0 8H6" />
  <line x1="4" x2="20" y1="12" y2="12" />
</svg>
`,Ew=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-text-cursor"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
  <path d="M7 22h1a4 4 0 0 0 4-4v-1" />
  <path d="M7 2h1a4 4 0 0 1 4 4v1" />
</svg>
`,Tw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-text-cursor-input"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" />
  <path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
  <path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
  <path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" />
  <path d="M9 6v12" />
</svg>
`,Nw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-text-search"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 5H3" />
  <path d="M10 12H3" />
  <path d="M10 19H3" />
  <circle cx="17" cy="15" r="3" />
  <path d="m21 19-1.9-1.9" />
</svg>
`,Aw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-text-select"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14 21h1" />
  <path d="M14 3h1" />
  <path d="M19 3a2 2 0 0 1 2 2" />
  <path d="M21 14v1" />
  <path d="M21 19a2 2 0 0 1-2 2" />
  <path d="M21 9v1" />
  <path d="M3 14v1" />
  <path d="M3 9v1" />
  <path d="M5 21a2 2 0 0 1-2-2" />
  <path d="M5 3a2 2 0 0 0-2 2" />
  <path d="M7 12h10" />
  <path d="M7 16h6" />
  <path d="M7 8h8" />
  <path d="M9 21h1" />
  <path d="M9 3h1" />
</svg>
`,Sw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-trash-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>
`,Ow=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-triangle-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
  <path d="M12 9v4" />
  <path d="M12 17h.01" />
</svg>
`,Iw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-trophy"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
  <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
  <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
  <path d="M4 22h16" />
  <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
  <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
</svg>
`,jw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-type"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 4v16" />
  <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
  <path d="M9 20h6" />
</svg>
`,Bw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-underline"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 4v6a6 6 0 0 0 12 0V4" />
  <line x1="4" x2="20" y1="20" y2="20" />
</svg>
`,qw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-undo"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 7v6h6" />
  <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
</svg>
`,Rw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-unlink"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
  <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
  <line x1="8" x2="8" y1="2" y2="5" />
  <line x1="2" x2="5" y1="8" y2="8" />
  <line x1="16" x2="16" y1="19" y2="22" />
  <line x1="19" x2="22" y1="16" y2="16" />
</svg>
`,Hw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-upload"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
</svg>
`,$w=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-user"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
  <circle cx="12" cy="7" r="4" />
</svg>
`,Dw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-user-cog"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 15H6a4 4 0 0 0-4 4v2" />
  <path d="m14.305 16.53.923-.382" />
  <path d="m15.228 13.852-.923-.383" />
  <path d="m16.852 12.228-.383-.923" />
  <path d="m16.852 17.772-.383.924" />
  <path d="m19.148 12.228.383-.923" />
  <path d="m19.53 18.696-.382-.924" />
  <path d="m20.772 13.852.924-.383" />
  <path d="m20.772 16.148.924.383" />
  <circle cx="18" cy="15" r="3" />
  <circle cx="9" cy="7" r="4" />
</svg>
`,Pw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-users"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <circle cx="9" cy="7" r="4" />
</svg>
`,Uw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-volume-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />
  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
</svg>
`,zw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-volume-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <line x1="22" x2="16" y1="9" y2="15" />
  <line x1="16" x2="22" y1="9" y2="15" />
</svg>
`,Fw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
`,Vw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-zap"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
</svg>
`,Zw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-book-type"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 13h4" />
  <path d="M12 6v7" />
  <path d="M16 8V6H8v2" />
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
</svg>
`,Kw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-spell-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m6 16 6-12 6 12" />
  <path d="M8 12h8" />
  <path d="m16 20 2 2 4-4" />
</svg>
`,Ww=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-circle-pile"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="19" r="2" />
  <circle cx="12" cy="5" r="2" />
  <circle cx="16" cy="12" r="2" />
  <circle cx="20" cy="19" r="2" />
  <circle cx="4" cy="19" r="2" />
  <circle cx="8" cy="12" r="2" />
</svg>
`,Gw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-circle-fading-arrow-up"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 2a10 10 0 0 1 7.38 16.75" />
  <path d="m16 12-4-4-4 4" />
  <path d="M12 16V8" />
  <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
  <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
  <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
  <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
</svg>
`,Yw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-whole-word"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="7" cy="12" r="3" />
  <path d="M10 9v6" />
  <circle cx="17" cy="12" r="3" />
  <path d="M14 7v8" />
  <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
</svg>
`,Qw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-regex"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17 3v10" />
  <path d="m12.67 5.5 8.66 5" />
  <path d="m12.67 10.5 8.66-5" />
  <path d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" />
</svg>
`,Xw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-replace"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14 4a1 1 0 0 1 1-1" />
  <path d="M15 10a1 1 0 0 1-1-1" />
  <path d="M21 4a1 1 0 0 0-1-1" />
  <path d="M21 9a1 1 0 0 1-1 1" />
  <path d="m3 7 3 3 3-3" />
  <path d="M6 10V5a2 2 0 0 1 2-2h2" />
  <rect x="3" y="14" width="7" height="7" rx="1" />
</svg>
`,Jw=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-replace-all"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
  <path d="M14 4a1 1 0 0 1 1-1" />
  <path d="M15 10a1 1 0 0 1-1-1" />
  <path d="M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
  <path d="M21 4a1 1 0 0 0-1-1" />
  <path d="M21 9a1 1 0 0 1-1 1" />
  <path d="m3 7 3 3 3-3" />
  <path d="M6 10V5a2 2 0 0 1 2-2h2" />
  <rect x="3" y="14" width="7" height="7" rx="1" />
</svg>
`,tb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-expand"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 15 6 6" />
  <path d="m15 9 6-6" />
  <path d="M21 16v5h-5" />
  <path d="M21 8V3h-5" />
  <path d="M3 16v5h5" />
  <path d="m3 21 6-6" />
  <path d="M3 8V3h5" />
  <path d="M9 9 3 3" />
</svg>
`,eb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-unfold-horizontal"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 12h6" />
  <path d="M8 12H2" />
  <path d="M12 2v2" />
  <path d="M12 8v2" />
  <path d="M12 14v2" />
  <path d="M12 20v2" />
  <path d="m19 15 3-3-3-3" />
  <path d="m5 9-3 3 3 3" />
</svg>
`,rb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-clock-fading"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 2a10 10 0 0 1 7.38 16.75" />
  <path d="M12 6v6l4 2" />
  <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
  <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
  <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
  <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
</svg>
`,nb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-eraser"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21" />
  <path d="m5.082 11.09 8.828 8.828" />
</svg>
`,sb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-focus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="3" />
  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
</svg>
`,ib=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-inspection-panel"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M7 7h.01" />
  <path d="M17 7h.01" />
  <path d="M7 17h.01" />
  <path d="M17 17h.01" />
</svg>
`,ob=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-ghost"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
</svg>
`,lb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-message-square-dot"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7" />
  <circle cx="19" cy="6" r="3" />
</svg>
`,ab=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-lightbulb"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
  <path d="M9 18h6" />
  <path d="M10 22h4" />
</svg>
`,cb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-redo"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 7v6h-6" />
  <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
</svg>
`,ub=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-image-off"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="2" x2="22" y1="2" y2="22" />
  <path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
  <line x1="13.5" x2="6" y1="13.5" y2="21" />
  <line x1="18" x2="21" y1="12" y2="15" />
  <path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" />
  <path d="M21 15V5a2 2 0 0 0-2-2H9" />
</svg>
`,hb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-git-graph"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="5" cy="6" r="3" />
  <path d="M5 9v6" />
  <circle cx="5" cy="18" r="3" />
  <path d="M12 3v18" />
  <circle cx="19" cy="6" r="3" />
  <path d="M16 15.7A9 9 0 0 0 19 9" />
</svg>
`,db=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-git-branch"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 6a9 9 0 0 0-9 9V3" />
  <circle cx="18" cy="6" r="3" />
  <circle cx="6" cy="18" r="3" />
</svg>
`,fb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-git-commit-vertical"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3v6" />
  <circle cx="12" cy="12" r="3" />
  <path d="M12 15v6" />
</svg>
`,pb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-git-compare-arrows"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="5" cy="6" r="3" />
  <path d="M12 6h5a2 2 0 0 1 2 2v7" />
  <path d="m15 9-3-3 3-3" />
  <circle cx="19" cy="18" r="3" />
  <path d="M12 18H7a2 2 0 0 1-2-2V9" />
  <path d="m9 15 3 3-3 3" />
</svg>
`,gb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-git-merge"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="18" cy="18" r="3" />
  <circle cx="6" cy="6" r="3" />
  <path d="M6 21V9a9 9 0 0 0 9 9" />
</svg>
`,mb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-git-branch-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 3v12" />
  <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  <path d="M15 6a9 9 0 0 0-9 9" />
  <path d="M18 15v6" />
  <path d="M21 18h-6" />
</svg>
`,vb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-glasses"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="6" cy="15" r="4" />
  <circle cx="18" cy="15" r="4" />
  <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
  <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
  <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
</svg>
`,wb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-alarm-clock-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="13" r="8" />
  <path d="M5 3 2 6" />
  <path d="m22 6-3-3" />
  <path d="M6.38 18.7 4 21" />
  <path d="M17.64 18.67 20 21" />
  <path d="m9 13 2 2 4-4" />
</svg>
`,bb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-clock-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 6v6l3.644 1.822" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
  <path d="M21.92 13.267a10 10 0 1 0-8.653 8.653" />
</svg>
`,yb=`<!-- @license lucide-static v1.7.0 - ISC -->
<svg
  class="lucide lucide-refresh-cw"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
  <path d="M8 16H3v5" />
</svg>
`,Cb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M128 74.6667V224" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M32 192C29.171 192 26.4579 190.876 24.4575 188.876C22.4571 186.875 21.3333 184.162 21.3333 181.333V42.6667C21.3333 39.8377 22.4571 37.1246 24.4575 35.1242C26.4579 33.1238 29.171 32 32 32H85.3333C96.6492 32 107.502 36.4952 115.503 44.4968C123.505 52.4983 128 63.3508 128 74.6667C128 63.3508 132.495 52.4983 140.497 44.4968C148.498 36.4952 159.351 32 170.667 32H224C226.829 32 229.542 33.1238 231.542 35.1242C233.543 37.1246 234.667 39.8377 234.667 42.6667V181.333C234.667 184.162 233.543 186.875 231.542 188.876C229.542 190.876 226.829 192 224 192H160C151.513 192 143.374 195.371 137.373 201.373C131.371 207.374 128 215.513 128 224C128 215.513 124.629 207.374 118.627 201.373C112.626 195.371 104.487 192 96 192H32Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M151.333 117H215.333" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M106 117H42" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M183.333 149L215.333 117L183.333 85" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
  <path d="M74 85L42 117L74 149" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`,kb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M234.667 90.6667V53.3333C234.667 47.6754 232.419 42.2492 228.418 38.2484C224.418 34.2476 218.991 32 213.333 32H42.6667C37.0088 32 31.5825 34.2476 27.5818 38.2484C23.581 42.2492 21.3334 47.6754 21.3334 53.3333V227.051C21.3336 228.548 21.7778 230.012 22.61 231.258C23.4422 232.503 24.6249 233.473 26.0086 234.047C27.3924 234.62 28.915 234.77 30.3839 234.478C31.8529 234.185 33.2022 233.464 34.2614 232.405L57.7494 208.917C61.7492 204.916 67.1746 202.668 72.832 202.667H106.667"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M185 146V164.563L198 173" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M185 213C212.614 213 235 190.614 235 163C235 135.386 212.614 113 185 113C157.386 113 135 135.386 135 163C135 190.614 157.386 213 185 213Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,xb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M217 43L128 43L39.0003 43" fill="currentColor" />
  <path d="M217 213.5L128 213.5L39.0002 213.5" fill="currentColor" />
  <path d="M217 43L128 43L39.0003 43M217 213.5L128 213.5L39.0002 213.5" stroke="currentColor"
    stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="73" y="75" width="106" height="106" rx="12" stroke="currentColor" stroke-width="13.333" />
</svg>`,_b=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M217 39L128 39L39.0002 39" fill="currentColor" />
  <path d="M217 171L128 171L39.0002 171" fill="currentColor" />
  <path d="M174.5 213.5L106.75 213.5L39.0002 213.5" fill="currentColor" />
  <path
    d="M217 39L128 39L39.0002 39M217 171L128 171L39.0002 171M174.5 213.5L106.75 213.5L39.0002 213.5"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="96" y="75" width="64" height="64" rx="12" stroke="currentColor" stroke-width="13.333" />
</svg>`,Lb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M185 43L128 43L70 43" fill="currentColor" />
  <path d="M185 171L128 171L69.9999 171" fill="currentColor" />
  <path d="M142 213.5L106.75 213.5L69.9999 213.5" fill="currentColor" />
  <path d="M185 43L128 43L70 43M185 171L128 171L69.9999 171M142 213.5L106.75 213.5L69.9999 213.5"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M38 87C38 80.3726 43.3726 75 50 75L205.5 75C212.127 75 217.5 80.3726 217.5 87V127C217.5 133.627 212.127 139 205.5 139L50 139C43.3726 139 38 133.627 38 127V87Z"
    stroke="currentColor" stroke-width="13.333" />
</svg>`,Mb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">

  <path d="M217 43L128 43L39.0005 43" fill="currentColor" />
  <path d="M174.5 171L128 171L39.0003 171" fill="currentColor" />
  <path d="M217 213.5L106.75 213.5L39.0003 213.5" fill="currentColor" />
  <path d="M174.5 171L128 171L39.0003 171" fill="currentColor" />
  <path d="M217 128.5L185.085 128.5L134 128.5" fill="currentColor" />
  <path d="M217 128.5L185.085 128.5L134 128.5" fill="currentColor" />
  <path d="M217 85.5L185.085 85.5L134 85.5" fill="currentColor" />
  <path d="M217 85.5L185.085 85.5L134 85.5" fill="currentColor" />
  <path
    d="M217 43L128 43L39.0005 43M174.5 171L128 171L39.0003 171M217 213.5L106.75 213.5L39.0003 213.5M217 128.5L185.085 128.5L134 128.5M217 85.5L185.085 85.5L134 85.5"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M38.5 87C38.5 80.3726 43.8726 75 50.5 75H90.5C97.1274 75 102.5 80.3726 102.5 87V127C102.5 133.627 97.1274 139 90.5 139H50.5C43.8726 139 38.5 133.627 38.5 127V87Z"
    stroke="currentColor" stroke-width="13.333" />

</svg>`,Eb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M217 43L128 43L39.0006 43" fill="currentColor" />
  <path d="M174.5 171L128 171L39.0004 171" fill="currentColor" />
  <path d="M217 213.5L106.75 213.5L39.0004 213.5" fill="currentColor" />
  <path d="M174.5 171L128 171L39.0004 171" fill="currentColor" />
  <path d="M121.915 85.5L90 85.5L38.9151 85.5" fill="currentColor" />
  <path d="M121.915 85.5L90 85.5L38.9151 85.5" fill="currentColor" />
  <path
    d="M217 43L128 43L39.0006 43M174.5 171L128 171L39.0004 171M217 213.5L106.75 213.5L39.0004 213.5M38.9151 128.5L90 128.5M121.915 85.5L90 85.5L38.9151 85.5"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M153 87C153 80.3726 158.373 75 165 75H205C211.627 75 217 80.3726 217 87V127C217 133.627 211.627 139 205 139H165C158.373 139 153 133.627 153 127V87Z"
    stroke="currentColor" stroke-width="13.333" />
</svg>`,Tb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M98 84.6665L41 142V170.667H126.5L155 142" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M222 94.1941L178.346 138.198C174.798 141.703 170.028 143.666 165.06 143.666C160.092 143.666 155.322 141.703 151.774 138.198L102.426 88.4545C98.9479 84.8782 97 80.07 97 75.0622C97 70.0544 98.9479 65.2462 102.426 61.6699L146.08 17.6665"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M33.6325 205.103C34.4491 202.653 36.742 201 39.3246 201H176.675C180.771 201 183.663 205.012 182.368 208.897L176.368 226.897C175.551 229.347 173.258 231 170.675 231H33.3246C29.2292 231 26.3374 226.988 27.6325 223.103L33.6325 205.103Z"
    fill="currentColor" />
</svg>`,Nb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M224 122.667V202.667C224 208.325 221.752 213.751 217.752 217.752C213.751 221.752 208.325 224 202.667 224H53.3333C47.6754 224 42.2492 221.752 38.2484 217.752C34.2476 213.751 32 208.325 32 202.667V53.3333C32 47.6754 34.2476 42.2492 38.2484 38.2484C42.2492 34.2476 47.6754 32 53.3333 32H133.333"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M224 160L191.083 127.083C187.082 123.083 181.657 120.837 176 120.837C170.343 120.837 164.918 123.083 160.917 127.083L64 224"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M96 117.333C107.782 117.333 117.333 107.782 117.333 96C117.333 84.2179 107.782 74.6666 96 74.6666C84.2179 74.6666 74.6666 84.2179 74.6666 96C74.6666 107.782 84.2179 117.333 96 117.333Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M192 85C209.673 85 224 70.6731 224 53C224 35.3269 209.673 21 192 21C174.327 21 160 35.3269 160 53C160 70.6731 174.327 85 192 85Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M234.667 95.6666L214.4 75.3999" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
</svg>`,Ab=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M160.667 43H95.3333C83.5513 43 74 52.5513 74 64.3333V163.667C74 175.449 83.5513 185 95.3333 185H160.667C172.449 185 182 175.449 182 163.667V64.3333C182 52.5513 172.449 43 160.667 43Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M51.5 68.0479L42.6065 70.4309C31.2259 73.4803 24.4721 85.1782 27.5215 96.5588L53.2309 192.507C56.2803 203.888 67.9782 210.642 79.3588 207.592L87.5001 205.411"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M204.752 68.0479L213.646 70.4309C225.027 73.4803 231.78 85.1782 228.731 96.5588L203.022 192.507C199.972 203.888 188.274 210.642 176.894 207.592L168.752 205.411"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,Sb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M98 222L157 222" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M86 199L169 199" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M160.667 33H95.3333C83.5513 33 74 42.5513 74 54.3333V153.667C74 165.449 83.5513 175 95.3333 175H160.667C172.449 175 182 165.449 182 153.667V54.3333C182 42.5513 172.449 33 160.667 33Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,Ob=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M39 48H111M145 48H217M39 88H111M145 88H217M39 128H111M145 128H217M39 168H111M145 168H217M39 208H111M145 208H217"
    stroke="currentColor" stroke-width="13.333" stroke-linecap="round" stroke-linejoin="round" />
</svg>
`,Ib=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="39" y="39" width="178" height="48" rx="12" stroke="currentColor" stroke-width="13.333" />
  <path
    d="M39 132H111M145 132H217M39 172H111M145 172H217M39 212H111M145 212H217"
    stroke="currentColor" stroke-width="13.333" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,jb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.3333 128H85.3333" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M234.667 128H170.667" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M128 21V235" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M202.667 96L170.667 128L202.667 160" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
  <path d="M53.3333 160L85.3333 128L53.3333 96" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
</svg>`,Bb=`<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
<path d="M224 128C224 130.122 223.157 132.157 221.657 133.657C220.157 135.157 218.122 136 216 136H104C101.878 136 99.8434 135.157 98.3431 133.657C96.8429 132.157 96 130.122 96 128C96 125.878 96.8429 123.843 98.3431 122.343C99.8434 120.843 101.878 120 104 120H216C218.122 120 220.157 120.843 221.657 122.343C223.157 123.843 224 125.878 224 128ZM104 72H216C218.122 72 220.157 71.1571 221.657 69.6569C223.157 68.1566 224 66.1217 224 64C224 61.8783 223.157 59.8434 221.657 58.3431C220.157 56.8429 218.122 56 216 56H104C101.878 56 99.8434 56.8429 98.3431 58.3431C96.8429 59.8434 96 61.8783 96 64C96 66.1217 96.8429 68.1566 98.3431 69.6569C99.8434 71.1571 101.878 72 104 72ZM216 184H104C101.878 184 99.8434 184.843 98.3431 186.343C96.8429 187.843 96 189.878 96 192C96 194.122 96.8429 196.157 98.3431 197.657C99.8434 199.157 101.878 200 104 200H216C218.122 200 220.157 199.157 221.657 197.657C223.157 196.157 224 194.122 224 192C224 189.878 223.157 187.843 221.657 186.343C220.157 184.843 218.122 184 216 184Z" fill="currentColor"/>
<path d="M44.6995 108.5C40.8328 108.5 37.5495 107.767 34.8495 106.3C32.1828 104.8 30.1495 102.817 28.7495 100.35C27.3828 97.85 26.6995 95.1 26.6995 92.1C26.6995 89.6 27.0828 87.3167 27.8495 85.25C28.6161 83.1833 29.8495 81.3667 31.5495 79.8C33.2828 78.2 35.5995 76.8667 38.4995 75.8C40.4995 75.0667 42.8828 74.4167 45.6495 73.85C48.4161 73.2833 51.5495 72.75 55.0495 72.25C58.5495 71.7167 62.3995 71.1333 66.5995 70.5L61.6995 73.2C61.6995 70 60.9328 67.65 59.3995 66.15C57.8661 64.65 55.2995 63.9 51.6995 63.9C49.6995 63.9 47.6161 64.3833 45.4495 65.35C43.2828 66.3167 41.7661 68.0333 40.8995 70.5L28.5995 66.6C29.9661 62.1333 32.5328 58.5 36.2995 55.7C40.0661 52.9 45.1995 51.5 51.6995 51.5C56.4661 51.5 60.6995 52.2333 64.3995 53.7C68.0995 55.1667 70.8995 57.7 72.7995 61.3C73.8661 63.3 74.4995 65.3 74.6995 67.3C74.8995 69.3 74.9995 71.5333 74.9995 74V107H63.0995V95.9L64.7995 98.2C62.1661 101.833 59.3161 104.467 56.2495 106.1C53.2161 107.7 49.3661 108.5 44.6995 108.5ZM47.5995 97.8C50.0995 97.8 52.1995 97.3667 53.8995 96.5C55.6328 95.6 56.9995 94.5833 57.9995 93.45C59.0328 92.3167 59.7328 91.3667 60.0995 90.6C60.7995 89.1333 61.1995 87.4333 61.2995 85.5C61.4328 83.5333 61.4995 81.9 61.4995 80.6L65.4995 81.6C61.4661 82.2667 58.1995 82.8333 55.6995 83.3C53.1995 83.7333 51.1828 84.1333 49.6495 84.5C48.1161 84.8667 46.7661 85.2667 45.5995 85.7C44.2661 86.2333 43.1828 86.8167 42.3495 87.45C41.5495 88.05 40.9495 88.7167 40.5495 89.45C40.1828 90.1833 39.9995 91 39.9995 91.9C39.9995 93.1333 40.2995 94.2 40.8995 95.1C41.5328 95.9667 42.4161 96.6333 43.5495 97.1C44.6828 97.5667 46.0328 97.8 47.5995 97.8Z" fill="currentColor"/>
<path d="M54.6487 214.33C49.282 214.33 44.7987 213.08 41.1987 210.58C37.5987 208.08 34.882 204.68 33.0487 200.38C31.2487 196.08 30.3487 191.23 30.3487 185.83C30.3487 180.43 31.2487 175.58 33.0487 171.28C34.8487 166.98 37.4987 163.58 40.9987 161.08C44.4987 158.58 48.8153 157.33 53.9487 157.33C59.1154 157.33 63.6154 158.563 67.4487 161.03C71.282 163.496 74.2487 166.88 76.3487 171.18C78.482 175.446 79.5487 180.33 79.5487 185.83C79.5487 191.23 78.4987 196.08 76.3987 200.38C74.332 204.68 71.432 208.08 67.6987 210.58C63.9654 213.08 59.6154 214.33 54.6487 214.33ZM28.0487 212.83V140.83H41.7487V175.83H40.0487V212.83H28.0487ZM52.4487 202.23C55.382 202.23 57.782 201.496 59.6487 200.03C61.5154 198.563 62.8987 196.596 63.7987 194.13C64.6987 191.63 65.1487 188.863 65.1487 185.83C65.1487 182.83 64.682 180.096 63.7487 177.63C62.8154 175.13 61.3654 173.146 59.3987 171.68C57.4653 170.18 54.982 169.43 51.9487 169.43C49.1153 169.43 46.8153 170.113 45.0487 171.48C43.3153 172.846 42.0487 174.763 41.2487 177.23C40.4487 179.696 40.0487 182.563 40.0487 185.83C40.0487 189.096 40.4487 191.963 41.2487 194.43C42.0487 196.896 43.3487 198.813 45.1487 200.18C46.982 201.546 49.4153 202.23 52.4487 202.23Z" fill="currentColor"/>
</svg>
`,qb=`<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
<path d="M224 128C224 130.122 223.157 132.157 221.657 133.657C220.157 135.157 218.122 136 216 136H104C101.878 136 99.8434 135.157 98.3431 133.657C96.8429 132.157 96 130.122 96 128C96 125.878 96.8429 123.843 98.3431 122.343C99.8434 120.843 101.878 120 104 120H216C218.122 120 220.157 120.843 221.657 122.343C223.157 123.843 224 125.878 224 128ZM104 72H216C218.122 72 220.157 71.1571 221.657 69.6569C223.157 68.1566 224 66.1217 224 64C224 61.8783 223.157 59.8434 221.657 58.3431C220.157 56.8429 218.122 56 216 56H104C101.878 56 99.8434 56.8429 98.3431 58.3431C96.8429 59.8434 96 61.8783 96 64C96 66.1217 96.8429 68.1566 98.3431 69.6569C99.8434 71.1571 101.878 72 104 72ZM216 184H104C101.878 184 99.8434 184.843 98.3431 186.343C96.8429 187.843 96 189.878 96 192C96 194.122 96.8429 196.157 98.3431 197.657C99.8434 199.157 101.878 200 104 200H216C218.122 200 220.157 199.157 221.657 197.657C223.157 196.157 224 194.122 224 192C224 189.878 223.157 187.843 221.657 186.343C220.157 184.843 218.122 184 216 184Z" fill="currentColor"/>
<path d="M19.719 107L41.719 35H62.019L84.019 107H70.019L50.419 43.5H53.019L33.719 107H19.719ZM32.919 92V79.3H70.919V92H32.919Z" fill="currentColor"/>
<path d="M27.0139 212.83V140.83H55.8139C60.9473 140.83 65.0973 141.863 68.2639 143.93C71.4306 145.963 73.7473 148.53 75.2139 151.63C76.6806 154.73 77.4139 157.863 77.4139 161.03C77.4139 165.063 76.4973 168.413 74.6639 171.08C72.8639 173.746 70.3806 175.53 67.2139 176.43V173.93C71.7139 174.863 75.0806 176.946 77.3139 180.18C79.5806 183.413 80.7139 187.03 80.7139 191.03C80.7139 195.33 79.9139 199.113 78.3139 202.38C76.7473 205.646 74.3473 208.213 71.1139 210.08C67.8806 211.913 63.8139 212.83 58.9139 212.83H27.0139ZM40.8139 200.03H57.5139C59.3473 200.03 60.9806 199.646 62.4139 198.88C63.8473 198.08 64.9639 196.98 65.7639 195.58C66.5973 194.146 67.0139 192.463 67.0139 190.53C67.0139 188.83 66.6639 187.313 65.9639 185.98C65.2639 184.646 64.1973 183.596 62.7639 182.83C61.3639 182.03 59.6139 181.63 57.5139 181.63H40.8139V200.03ZM40.8139 168.93H55.6139C57.1473 168.93 58.5139 168.663 59.7139 168.13C60.9139 167.596 61.8639 166.78 62.5639 165.68C63.2639 164.546 63.6139 163.096 63.6139 161.33C63.6139 159.13 62.9306 157.28 61.5639 155.78C60.1973 154.28 58.2139 153.53 55.6139 153.53H40.8139V168.93Z" fill="currentColor"/>
</svg>
`,Rb=`<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
<path d="M224 128C224 130.122 223.157 132.157 221.657 133.657C220.157 135.157 218.122 136 216 136H104C101.878 136 99.8434 135.157 98.3431 133.657C96.8429 132.157 96 130.122 96 128C96 125.878 96.8429 123.843 98.3431 122.343C99.8434 120.843 101.878 120 104 120H216C218.122 120 220.157 120.843 221.657 122.343C223.157 123.843 224 125.878 224 128ZM104 72H216C218.122 72 220.157 71.1571 221.657 69.6569C223.157 68.1566 224 66.1217 224 64C224 61.8783 223.157 59.8434 221.657 58.3431C220.157 56.8429 218.122 56 216 56H104C101.878 56 99.8434 56.8429 98.3431 58.3431C96.8429 59.8434 96 61.8783 96 64C96 66.1217 96.8429 68.1566 98.3431 69.6569C99.8434 71.1571 101.878 72 104 72ZM216 184H104C101.878 184 99.8434 184.843 98.3431 186.343C96.8429 187.843 96 189.878 96 192C96 194.122 96.8429 196.157 98.3431 197.657C99.8434 199.157 101.878 200 104 200H216C218.122 200 220.157 199.157 221.657 197.657C223.157 196.157 224 194.122 224 192C224 189.878 223.157 187.843 221.657 186.343C220.157 184.843 218.122 184 216 184Z" fill="currentColor"/>
<path d="M44.5549 45.5V33.5H58.1549V45.5H44.5549ZM44.5549 107V53H58.1549V107H44.5549Z" fill="currentColor"/>
<path d="M30.26 151.33V139.33H43.86V151.33H30.26ZM30.26 212.83V158.83H43.86V212.83H30.26ZM59.8499 151.33V139.33H73.4499V151.33H59.8499ZM59.8499 212.83V158.83H73.4499V212.83H59.8499Z" fill="currentColor"/>
</svg>
`,Hb=`<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
<path d="M224 128C224 130.122 223.157 132.157 221.657 133.657C220.157 135.157 218.122 136 216 136H104C101.878 136 99.8434 135.157 98.3431 133.657C96.8429 132.157 96 130.122 96 128C96 125.878 96.8429 123.843 98.3431 122.343C99.8434 120.843 101.878 120 104 120H216C218.122 120 220.157 120.843 221.657 122.343C223.157 123.843 224 125.878 224 128ZM104 72H216C218.122 72 220.157 71.1571 221.657 69.6569C223.157 68.1566 224 66.1217 224 64C224 61.8783 223.157 59.8434 221.657 58.3431C220.157 56.8429 218.122 56 216 56H104C101.878 56 99.8434 56.8429 98.3431 58.3431C96.8429 59.8434 96 61.8783 96 64C96 66.1217 96.8429 68.1566 98.3431 69.6569C99.8434 71.1571 101.878 72 104 72ZM216 184H104C101.878 184 99.8434 184.843 98.3431 186.343C96.8429 187.843 96 189.878 96 192C96 194.122 96.8429 196.157 98.3431 197.657C99.8434 199.157 101.878 200 104 200H216C218.122 200 220.157 199.157 221.657 197.657C223.157 196.157 224 194.122 224 192C224 189.878 223.157 187.843 221.657 186.343C220.157 184.843 218.122 184 216 184Z" fill="currentColor"/>
<path d="M44.5549 107V35H58.1549V107H44.5549Z" fill="currentColor"/>
<path d="M30.26 212.83V140.83H43.86V212.83H30.26ZM59.8499 212.83V140.83H73.4499V212.83H59.8499Z" fill="currentColor"/>
</svg>
`,$b=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M190.36 35C184.702 35 178.694 37.171 173.658 41.0355C168.622 44.8999 164.97 50.1413 163.505 55.6064L146.941 117.426C145.476 122.891 146.32 128.132 149.285 131.997C152.25 135.861 157.095 138.032 162.753 138.032C165.582 138.032 168.004 139.118 169.486 141.05C170.969 142.982 171.391 145.603 170.659 148.335L167.898 158.639C166.433 164.104 162.781 169.345 157.745 173.209C152.709 177.074 146.701 179.245 141.043 179.245C138.214 179.245 135.21 180.33 132.692 182.263C130.174 184.195 128.348 186.816 127.616 189.548L122.094 210.155C121.362 212.887 121.783 215.508 123.266 217.44C124.749 219.372 127.171 220.458 130 220.458C146.974 220.458 164.998 213.945 180.106 202.351C195.215 190.758 206.171 175.034 210.564 158.639L238.172 55.6064C239.636 50.1413 238.793 44.8999 235.828 41.0355C232.862 37.171 228.018 35 222.36 35H190.36Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M83.0267 35C77.3687 35 71.3608 37.171 66.3245 41.0355C61.2883 44.8999 57.6363 50.1413 56.1719 55.6064L39.6075 117.426C38.1431 122.891 38.9863 128.132 41.9516 131.997C44.9169 135.861 49.7614 138.032 55.4193 138.032C58.2483 138.032 60.6705 139.118 62.1532 141.05C63.6358 142.982 64.0575 145.603 63.3253 148.335L60.5645 158.639C59.1001 164.104 55.4481 169.345 50.4119 173.209C45.3756 177.074 39.3677 179.245 33.7097 179.245C30.8807 179.245 27.8768 180.33 25.3586 182.263C22.8405 184.195 21.0145 186.816 20.2823 189.548L14.7608 210.155C14.0286 212.887 14.4502 215.508 15.9329 217.44C17.4155 219.372 19.8378 220.458 22.6668 220.458C39.6406 220.458 57.6644 213.945 72.7732 202.351C87.882 190.758 98.838 175.034 103.231 158.639L130.839 55.6064C132.303 50.1413 131.46 44.8999 128.494 41.0355C125.529 37.171 120.685 35 115.027 35H83.0267Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,Db=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"/></svg>
`,Pb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M232,48H24A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48Zm0,144H24V64H232V192ZM128,104v48a8,8,0,0,1-16,0V123.31L93.66,141.66a8,8,0,0,1-11.32,0L64,123.31V152a8,8,0,0,1-16,0V104a8,8,0,0,1,13.66-5.66L88,124.69l26.34-26.35A8,8,0,0,1,128,104Zm77.66,18.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L168,132.69V104a8,8,0,0,1,16,0v28.69l10.34-10.35A8,8,0,0,1,205.66,122.34Z"/></svg>
`,Ub=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M200,24H72A16,16,0,0,0,56,40V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H56v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-40,80h40v48H160ZM72,40H200V88H160V80a16,16,0,0,0-16-16H72ZM40,80H144v79.83c0,.06,0,.11,0,.17s0,.11,0,.17V176H40ZM72,216V192h72a16,16,0,0,0,16-16v-8h40v48Zm-3.76-62.06-12-48a8,8,0,1,1,15.52-3.88l6.76,27,6.32-12.66a8,8,0,0,1,14.32,0l6.32,12.66,6.76-27a8,8,0,0,1,15.52,3.88l-12,48a8,8,0,0,1-6.89,6,8.46,8.46,0,0,1-.87.05,8,8,0,0,1-7.16-4.42L92,137.89l-8.84,17.69a8,8,0,0,1-14.92-1.64Z"/></svg>
`,zb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M64 234.667H192M42.6667 213.333V42.6666M213.333 85.3333V213.333" stroke="currentColor"
    stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 35" />
  <path d="M149.333 21.3334V74.6667C149.333 80.5577 154.109 85.3334 160 85.3334H213.333"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M64 234.667C52.2179 234.667 42.6667 225.115 42.6667 213.333M42.6667 42.6666C42.6667 30.8845 52.2179 21.3333 64 21.3333H87.6667M213.333 213.333C213.333 225.115 203.782 234.667 192 234.667M213.333 85.3333C213.344 78.514 210.618 71.9436 205.781 67.136L167.509 28.864C162.696 24.0333 156.153 21.3222 149.333 21.3333L126.667 21.3333"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,Fb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M149.333 105.333C152.162 105.333 154.875 106.457 156.876 108.458C158.876 110.458 160 113.171 160 116V117.333C160 120.162 161.124 122.875 163.124 124.876C165.125 126.876 167.838 128 170.667 128H205.792C207.284 128 208.742 128.442 209.983 129.27C211.223 130.099 212.19 131.277 212.761 132.655C213.332 134.033 213.481 135.55 213.19 137.013C212.899 138.476 212.18 139.82 211.125 140.875L137.109 214.891C135.914 216.088 134.494 217.038 132.931 217.686C131.368 218.334 129.692 218.667 128 218.667C126.308 218.667 124.632 218.334 123.069 217.686C121.506 217.038 120.086 216.088 118.891 214.891L44.864 140.864C43.8127 139.809 43.0974 138.466 42.8084 137.005C42.5193 135.543 42.6695 134.029 43.24 132.653C43.8105 131.277 44.7757 130.101 46.0139 129.273C47.2521 128.445 48.7078 128.002 50.1973 128H85.3333C88.1623 128 90.8754 126.876 92.8758 124.876C94.8762 122.875 96 120.162 96 117.333V116C96 113.171 97.1238 110.458 99.1242 108.458C101.125 106.457 103.838 105.333 106.667 105.333H149.333Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M96 42.6666H160" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M96 74H160" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`,Vb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M128 234.667C186.91 234.667 234.667 186.91 234.667 128C234.667 69.0895 186.91 21.3333 128 21.3333C69.0895 21.3333 21.3333 69.0895 21.3333 128C21.3333 186.91 69.0895 234.667 128 234.667Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M128 192C163.346 192 192 163.346 192 128C192 92.6538 163.346 64 128 64C92.6538 64 64 92.6538 64 128C64 163.346 92.6538 192 128 192Z"
    fill="currentColor" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`,Zb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M128 234.667C186.91 234.667 234.667 186.91 234.667 128C234.667 69.0895 186.91 21.3333 128 21.3333C69.0897 21.3333 21.3334 69.0895 21.3334 128C21.3334 186.91 69.0897 234.667 128 234.667Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M128 192C163.346 192 192 163.346 192 128C192 92.6538 163.346 64 128 64C92.6538 64 64 92.6538 64 128C64 163.346 92.6538 192 128 192Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,Kb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M114.196 179.516L100.393 231.032" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M100.514 106.942C99.4844 110.775 97.4062 114.245 94.5129 116.962C91.6195 119.678 88.0256 121.534 84.1354 122.32L63.311 126.679C59.4207 127.465 55.8269 129.321 52.9335 132.037C50.0401 134.754 47.962 138.224 46.9327 142.057L44.8346 149.888C44.1024 152.62 44.4857 155.532 45.9002 157.982C47.3146 160.432 49.6444 162.219 52.377 162.952L176.016 196.08C178.748 196.813 181.66 196.429 184.11 195.015C186.56 193.6 188.347 191.271 189.079 188.538L191.178 180.707C192.203 176.873 192.138 172.829 190.991 169.03C189.843 165.23 187.659 161.826 184.683 159.2L168.828 145.013C165.852 142.387 163.667 138.983 162.52 135.184C161.372 131.385 161.308 127.34 162.333 123.506L172.713 84.7661C173.445 82.0335 175.233 79.7037 177.683 78.2892C180.133 76.8748 183.045 76.4914 185.777 77.2236C191.242 78.688 197.065 77.9214 201.965 75.0924C206.865 72.2635 210.441 67.6039 211.905 62.1387C213.369 56.6735 212.603 50.8505 209.774 45.9506C206.945 41.0506 202.285 37.4752 196.82 36.0108L114.394 13.9249C108.929 12.4605 103.106 13.2271 98.2063 16.0561C93.3064 18.8851 89.731 23.5447 88.2666 29.0099C86.8022 34.475 87.5688 40.2981 90.3978 45.198C93.2268 50.0979 97.8864 53.6734 103.352 55.1377C106.084 55.8699 108.414 57.6577 109.828 60.1076C111.243 62.5576 111.626 65.4691 110.894 68.2017L100.514 106.942Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,Wb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M128 74.6667V128L170.667 149.333" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M224 128C224 146.987 218.37 165.548 207.821 181.335C197.273 197.122 182.279 209.426 164.738 216.692C147.196 223.958 127.894 225.86 109.271 222.155C90.6492 218.451 73.5436 209.308 60.1178 195.882C46.6919 182.456 37.5488 165.351 33.8447 146.729C30.1405 128.106 32.0416 108.804 39.3076 91.2624C46.5736 73.7207 58.8782 58.7275 74.6653 48.1789C90.4524 37.6303 109.013 32 128 32C154.88 32 180.587 42.6667 199.893 61.2267L224 85.3333"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M224 32V85.3333H170.667" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
</svg>`,Gb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 53.3333H42.6667" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M32 128H42.6667" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M32 202.667H42.6667" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M85 53H224" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M85 128H224" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M85 203H224" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`,Yb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M129.1 230C78.7316 240.533 77.0169 169.672 117.145 162.188C201.272 152.761 204.894 104.817 178.336 90.4074C134.628 63.2503 77.0169 169.672 34.9738 133.092C-7.06935 96.5127 52.7478 5.05591 92.5846 26.6706C135.46 58.539 69.5655 129.488 32.8088 35.5415"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M229.903 167.046C231.886 165.064 233 162.375 233 159.572C233 156.768 231.887 154.079 229.905 152.097C227.923 150.114 225.234 149 222.43 149C219.627 148.999 216.938 150.113 214.955 152.095L164.907 202.155C164.037 203.023 163.393 204.092 163.032 205.267L158.079 221.588C157.982 221.912 157.974 222.256 158.057 222.585C158.14 222.913 158.311 223.212 158.55 223.451C158.79 223.691 159.09 223.86 159.418 223.943C159.746 224.025 160.091 224.018 160.415 223.92L176.739 218.97C177.913 218.613 178.982 217.973 179.851 217.106L229.903 167.046Z"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,Qb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M234.667 138.667V64C234.667 58.342 232.419 52.9158 228.418 48.915C224.417 44.9142 218.991 42.6666 213.333 42.6666H42.6666C37.0086 42.6666 31.5824 44.9142 27.5816 48.915C23.5809 52.9158 21.3333 58.342 21.3333 64V192C21.3333 203.733 30.9333 213.333 42.6666 213.333H128"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M234.5 74.6666H21.3333" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
  <path d="M202.667 170.667V234.667" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
  <path d="M170.667 202.667H234.667" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
</svg>`,Xb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M117.333 42.6667C117.333 36.7756 112.558 32 106.667 32H42.6667C36.7756 32 32 36.7756 32 42.6667M117.333 213.333C117.333 219.224 112.558 224 106.667 224H42.6667C36.7756 224 32 219.224 32 213.333"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M217.6 201.6C219.733 206.933 216.533 213.333 211.2 215.467L190.933 222.933C185.6 225.067 179.2 221.867 177.067 216.533M118.4 54.4C116.267 49.0667 119.467 42.6667 124.8 40.5333L145.067 33.0667C150.4 30.9333 156.8 34.1333 158.933 39.4667"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M75 43L75 213" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" stroke-dasharray="33.67 33.67" />
  <path d="M217.6 201.6L158.933 39.4666M177.067 216.533L118.4 54.3999" stroke="currentColor"
    stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"
    stroke-dasharray="33.67 33.67" />
  <path
    d="M32 192.444C35.6819 192.444 38.6669 195.429 38.667 199.111V213.334C38.6667 217.016 35.6817 220 32 220C28.3183 220 25.3333 217.016 25.333 213.334V199.111C25.3331 195.429 28.3181 192.444 32 192.444ZM117.333 192.444C121.015 192.444 124 195.429 124 199.111V213.334C124 217.016 121.015 220 117.333 220C113.651 220 110.667 217.016 110.667 213.334V199.111C110.667 195.43 113.651 192.445 117.333 192.444ZM32 135.556C35.6819 135.556 38.667 138.541 38.667 142.223V170.667C38.6669 174.349 35.6818 177.334 32 177.334C28.3182 177.334 25.3331 174.349 25.333 170.667V142.223C25.333 138.541 28.3181 135.556 32 135.556ZM117.333 135.556C121.015 135.556 124 138.541 124 142.223V170.667C124 174.349 121.015 177.334 117.333 177.334C113.651 177.334 110.667 174.349 110.667 170.667V142.223C110.667 138.541 113.651 135.556 117.333 135.556ZM32 78.667C35.6819 78.667 38.667 81.6521 38.667 85.334V113.778C38.6667 117.46 35.6817 120.444 32 120.444C28.3183 120.444 25.3333 117.46 25.333 113.778V85.334C25.333 81.6521 28.3181 78.667 32 78.667ZM117.333 78.667C121.015 78.667 124 81.6521 124 85.334V113.778C124 117.46 121.015 120.444 117.333 120.444C113.651 120.444 110.667 117.46 110.667 113.778V85.334C110.667 81.6522 113.651 78.6672 117.333 78.667ZM32 36C35.6819 36 38.667 38.9851 38.667 42.667V56.8896C38.6666 60.5712 35.6817 63.5557 32 63.5557C28.3183 63.5557 25.3334 60.5712 25.333 56.8896V42.667C25.333 38.9851 28.3181 36 32 36ZM117.333 36C121.015 36 124 38.9851 124 42.667V51H110.667V42.667C110.667 38.9852 113.651 36.0002 117.333 36Z"
    fill="currentColor" />
</svg>`,Jb=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M154.6 154.8C156.347 146.067 160.713 139.953 167.7 132.967C176.433 125.107 180.8 113.753 180.8 102.4C180.8 88.5026 175.279 75.1745 165.452 65.3476C155.625 55.5207 142.297 50 128.4 50C114.503 50 101.175 55.5207 91.3476 65.3476C81.5207 75.1745 76 88.5026 76 102.4C76 111.133 77.7467 121.613 89.1 132.967C95.2133 139.08 100.453 146.067 102.2 154.8"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M102.2 189.733H154.6" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M110.933 224.667H145.867" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M181 31C194.897 31 208.225 36.5207 218.052 46.3476C227.879 56.1745 233.4 69.5026 233.4 83.4C233.4 92.1333 231.653 102.613 220.3 113.967C214.187 120.08 208.947 127.067 207.2 135.8"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M207.2 170.733H186.9" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M198.467 205.667L183.9 205.667" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M75.4 31C61.5026 31 48.1745 36.5207 38.3476 46.3476C28.5207 56.1745 23 69.5026 23 83.4C23 92.1333 24.7467 102.613 36.1 113.967C42.2133 120.08 47.4533 127.067 49.2 135.8"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M49.2 170.733H69.5" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M57.9333 205.667L72.5 205.667" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
</svg>`,ty=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M215 74.6667L183 106.667L151 74.6667" stroke="currentColor" stroke-width="13.3333"
    stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M183 106.667V53.3333C183 47.6754 180.752 42.2492 176.752 38.2484C172.751 34.2476 167.325 32 161.667 32H140.333"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M45.5 79C44.4667 73.8333 41.8833 70.2167 37.75 66.0833C32.5833 61.4333 30 54.7167 30 48C30 39.7783 33.2661 31.8933 39.0797 26.0797C44.8933 20.2661 52.7783 17 61 17C69.2217 17 77.1067 20.2661 82.9203 26.0797C88.7339 31.8933 92 39.7783 92 48C92 53.1667 90.9667 59.3667 84.25 66.0833C80.6333 69.7 77.5333 73.8333 76.5 79"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M76 101H45" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M72 121H50" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M149 220.375V156.625C149 153.807 150.119 151.105 152.112 149.112C154.105 147.119 156.807 146 159.625 146H212.75C213.877 146 214.958 146.448 215.755 147.245C216.552 148.042 217 149.123 217 150.25V226.75C217 227.877 216.552 228.958 215.755 229.755C214.958 230.552 213.877 231 212.75 231H159.625C156.807 231 154.105 229.881 152.112 227.888C150.119 225.895 149 223.193 149 220.375ZM149 220.375C149 217.557 150.119 214.855 152.112 212.862C154.105 210.869 156.807 209.75 159.625 209.75H217"
    stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,ey=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64 234.667C58.342 234.667 52.9158 232.419 48.915 228.418C44.9142 224.417 42.6666 218.991 42.6666 213.333V42.6666C42.6666 37.0087 44.9142 31.5824 48.915 27.5817C52.9158 23.5809 58.342 21.3333 64 21.3333H149.333C152.71 21.3278 156.054 21.9904 159.174 23.2828C162.293 24.5753 165.126 26.4721 167.509 28.864L205.781 67.136C208.18 69.52 210.082 72.3556 211.378 75.479C212.674 78.6024 213.339 81.9516 213.333 85.3333V213.333C213.333 218.991 211.086 224.417 207.085 228.418C203.084 232.419 197.658 234.667 192 234.667H64Z" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M149.333 21.3333V74.6666C149.333 77.4956 150.457 80.2087 152.458 82.2091C154.458 84.2094 157.171 85.3333 160 85.3333H213.333" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M106.667 96H85.3334" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M170.667 138.667H85.3334" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M170.667 181.333H85.3334" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,ry=`<svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M182 162V226" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150 194H214" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150 248H214" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M213.667 130L213.667 85.3333C213.672 81.9516 213.008 78.6024 211.711 75.479C210.415 72.3556 208.513 69.52 206.115 67.136L167.843 28.864C165.459 26.4721 162.626 24.5753 159.507 23.2828C156.388 21.9904 153.043 21.3278 149.667 21.3333H64.3333C58.6754 21.3333 53.2492 23.5809 49.2484 27.5817C45.2476 31.5824 43 37.0087 43 42.6666V213.333C43 218.991 45.2476 224.417 49.2484 228.418C53.2492 232.419 58.6754 234.667 64.3333 234.667H114" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M149.667 21.3333V74.6666C149.667 77.4956 150.791 80.2087 152.791 82.2091C154.791 84.2094 157.504 85.3333 160.333 85.3333H213.667" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M107 96H85.6667" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150 138.667H85.6667" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M114 181.333H85.6667" stroke="currentColor" stroke-width="13.3333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,ny={size:{xsmall:"icon--xsmall",small:"icon--small",medium:"icon--medium",large:"icon--large"}},_h=y1({base:"icon",variants:ny}),_0={add_banner:"image",archive_doc:"archive",characters_cast:"user-2",characters_character:"user",delete_item:"trash",delete_permanently:"trash",document_copy_doc:"copy",document_copy:"copy",document_paste_doc:"paste",document_paste:"paste",edit_title:"edit",empty_trash:"trash",file:"file-outline",folder:"folder-outline",image_page:"image",manuscripts_book_cover:"book-cover",manuscripts_book_scenes:"plot-line",manuscripts_book:"book",manuscripts_chapter:"chapter",manuscripts_merge_scene:"scene-merge",manuscripts_note:"note",manuscripts_part:"part",manuscripts_prologue:"chapter",manuscripts_scene:"file",notebook_folder:"folder",notebook_page:"note",ideas_idea:"lightbulb",ideas_folder:"folder",notes_image:"image",plots_plot_line:"plot-line",plots_plot_point:"plot-point",plots_plot:"plot-grid",plot:"plot-grid",remove_banner:"image",restore_from_trash:"restore",send_to_trash:"trash",add:"plus","delete-empty":"trash","delete-forever":"trash",delete:"trash","merge-scenes":"scene-merge",more:"ellipsis",word:"file-word-outline",text:"text-box-outline",html:"web",markdown:"markdown"},Vs={"align-vertical-justify-end":xm,"align-vertical-justify-start":_m,"align-vertical-space-around":Lm,"auto-fade":ib,"addon-sidebar":iw,"auto-hide-toolbar":ow,"arrow-down":Nm,"arrow-left":Sm,"arrow-right":jm,"arrow-up":qm,"book-cover":Pm,"chapter-split":Cb,"checkbox-default":kw,"checkbox-selected":xw,"checkmark-circle":bh,circle:wh,"chevron-down":vh,"chevron-left":Ym,"chevron-right":Qm,"chevron-up":Xm,"cloud-save":Ma,"cloud-check":Ma,"cloud-sync":lv,"cloud-alert":yh,"cloud-off":Ch,"collapse-left":Im,"collapse-right":Bm,"comment-history":kb,"drag-handle":Mv,"dice-cube":uv,"eye-disabled":mv,ideas:Jb,lightbulb:ab,downloaded:tv,"comment-unread":lb,"selection-all":Aw,"file-search":wv,flag:kv,feather:vv,"collection-add":Qb,"format-bold":$m,"format-center-center":xb,"format-float-center":_b,"format-float-fill":Lb,"format-float-left":Mb,"format-float-right":Eb,"format-full-bleed":tb,"format-indent-decrease":Rv,"format-indent-increase":Hv,"format-italic":Dv,"format-letter-case":mh,"format-list-bulleted":Vv,"format-list-checklist":Zv,"format-list-dashes":Gb,"format-list-numbered":Kv,"format-list-alpha-lower":Bb,"format-list-alpha-upper":qb,"format-list-roman-lower":Rb,"format-list-roman-upper":Hb,"format-strikethrough":Mw,"format-underline":Bw,"navigation-sidebar":sw,"text-align-center":bm,"text-align-justify":ym,"text-align-left":Cm,"text-align-right":km,"highlighter-markable":Tb,"image-search":Nb,"open-in-new":xh,"plot-grid":Lv,"plot-line":gw,"plot-point":bv,"plus-circle":rv,"project-fanned":Ab,"project-stacked":Sb,"property-list":Ob,"property-list-header":Ib,"radio-default":wh,"radio-selected":Vb,radio:Zb,"remove-color":fv,"scene-merge":jb,"scene-split":eb,"track-changes":Yb,checks:Gm,"search-text":Nw,"sign-out":Wv,"spell-check":Kw,star:_w,"status-bar":nw,"sync-disconnected":Ch,"sync-error":yh,"sync-success":Ma,"text-cursor":Ew,"user-2":Pw,"user-3":Ww,"user-sound":Hm,"user-switch":Dw,"quick-open":Vw,"warning-circle":Jm,ghost:ob,account:nv,archive:Mm,at:Rm,billing:cv,book:Dm,books:zv,bookmark:Fm,"brain-circuit":Vm,calendar:Zm,"calendar-x":Km,chapter:Um,check:Wm,clear:sv,clock:ov,close:Fw,comment:Xv,comments:Jv,copy:av,cut:mw,danger:ew,download:dv,"door-open":hv,dropdown:vh,edit:aw,ellipsis:pv,export:Hw,external:xh,eye:gv,file:Ea,filter:Cv,folder:xv,font:mh,fullscreen:Gv,focus:sb,globe:kh,"graduation-cap":_v,goto:yv,google:Db,headphones:Av,help:ev,highlighter:Sv,history:Ov,restored:Wb,home:jv,"hourglass-medium":Iv,hr:Ta,image:qv,info:$v,keyboard:Pv,layout:Uv,link:Fv,"link-break":Rw,markdown:Pb,megaphone:Yv,menu:Qv,minus:Ta,note:Lw,notebook:tw,page:Ea,palette:rw,part:zm,paste:iv,pause:lw,pin:Kb,pinned:cw,play:uw,plus:hw,preferences:Cw,profile:Bv,quotes:dw,"quotes-alt":$b,redo:cb,remove:Ta,rename:Tw,repeat:fw,restore:pw,search:vw,send:ww,settings:bw,share:yw,"speaker-high":Uw,"speaker-slash":zw,subscription:Tm,success:bh,swap:Om,templates:zb,text:jw,"text-h":Ev,"text-h-one":Tv,"text-h-two":Nv,"time-machine":rb,thesaurus:Zw,trash:Sw,trophy:Iw,undo:qw,upgrade:Gw,user:$w,warning:Ow,web:kh,word:Ub,"whole-word":Yw,regex:Qw,replace:Xw,"replace-all":Jw,"arrow-fat-down":Em,"arrow-fat-line-down":Am,"arrow-fat-lines-down":Fb,eraser:nb,"templates-library":Xb,"convert-idea":ty,"image-delete":ub,"track-changes-original":Ea,"track-changes-final":ey,"track-changes-difference":ry,branches:hb,branch:db,"create-branch":mb,"main-branch":fb,"compare-branch":pb,"merge-branch":gb,glasses:vb,"alarm-clock-check":wb,"clock-plus":bb,sync:yb},sy={none:void 0,add:hm,check:dm,remove:fm,cancel:pm,eye:gm,edit:mm,lock:vm,sync:wm},Lh={none:"currentColor",add:"#047854",check:"#047854",remove:"#991b1b",cancel:"#991b1b",eye:"#2354aa",edit:"#f5a503",lock:"#d99e06",sync:"currentColor"};for(const[r,t]of Object.entries(_0))t in Vs&&(Vs[r]=Vs[t]);Object.keys(Vs).filter(r=>!_0[r]);Object.keys(Vs).sort((r,t)=>r.localeCompare(t));const iy=["title"],oy=["d"],ly=["innerHTML"],ay=["fill","d"],cy=["innerHTML"],uy=Qe({__name:"Icon",props:{name:{},overlay:{},spin:{type:Boolean},size:{},filled:{type:Boolean}},setup(r){let t=0;const e=r,n=ia("svg"),s=Ve(!1),i=Ve(),o=`icon-clip-${++t}`,a=ia("iconGroup"),c=Ye(()=>!s.value),u=Ye(()=>e.overlay&&e.overlay!=="none"&&!!i.value),d=Ye(()=>({"icon--overlay-spin":e.overlay&&e.spin,"icon--spin":!e.overlay&&e.spin})),p=ia("overlayElement"),f=()=>{if(!a.value)return;const _=window.location.href.replace(/#.*$/,"");a.value.setAttribute("clip-path",`url(${_}#${o})`)},g=()=>{if(e.overlay&&p.value){const _=p.value.getBBox(),S=_.x+_.width/2,B=_.y+_.height/2,q=S/256*100,H=B/256*100;p.value.style.setProperty("--overlay-center-x",`${q}%`),p.value.style.setProperty("--overlay-center-y",`${H}%`)}},b=Ye(()=>{if(!i.value)return"";let _=i.value;return/width="[^"]*"/.test(_)&&(_=_.replace(/width="[^"]*"/,'width="256"')),/height="[^"]*"/.test(_)&&(_=_.replace(/height="[^"]*"/,'height="256"')),_}),C=_=>_.replace(/<!--[\s\S]*?-->/g,"").replace(/>\s+</g,"><").trim(),M=()=>{Vs[e.name]?i.value=C(Vs[e.name]):s.value=!0,g()};return Ao(()=>{M(),f()}),Tn(()=>e.name,()=>{M()}),Tn(()=>[e.overlay,p.value],()=>{e.overlay&&p.value&&g(),f()},{immediate:!0}),(_,S)=>c.value?u.value?(Dt(),re("svg",{key:1,class:or(te(k0)(te(_h)({size:r.size}),d.value)),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:"1em",height:"1em"},[F("defs",null,[F("clipPath",{id:o},[F("path",{d:te(um)},null,8,oy)])]),F("g",{ref_key:"iconGroup",ref:a,innerHTML:b.value},null,8,ly),F("path",{ref_key:"overlayElement",ref:p,class:"icon__overlay",fill:te(Lh)[r.overlay],d:te(sy)[r.overlay],style:Yn({stroke:te(Lh)[r.overlay],strokeWidth:"6px"})},null,12,ay)],2)):(Dt(),re("div",{key:2,ref_key:"svg",ref:n,class:or([te(_h)({size:r.size}),{"icon--filled":r.filled}]),innerHTML:i.value},null,10,cy)):(Dt(),re("div",{key:0,class:"icon icon--unknown",title:`${r.name} not supported`},null,8,iy))}}),C1=(r,t)=>{const e=r.__vccOpts||r;for(const[n,s]of t)e[n]=s;return e},Na=C1(uy,[["__scopeId","data-v-4f53634c"]]);var Kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function L0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Mh={exports:{}},Eh={exports:{}},Th;function hy(){return Th||(Th=1,(function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t={rotl:function(e,n){return e<<n|e>>>32-n},rotr:function(e,n){return e<<32-n|e>>>n},endian:function(e){if(e.constructor==Number)return t.rotl(e,8)&16711935|t.rotl(e,24)&4278255360;for(var n=0;n<e.length;n++)e[n]=t.endian(e[n]);return e},randomBytes:function(e){for(var n=[];e>0;e--)n.push(Math.floor(Math.random()*256));return n},bytesToWords:function(e){for(var n=[],s=0,i=0;s<e.length;s++,i+=8)n[i>>>5]|=e[s]<<24-i%32;return n},wordsToBytes:function(e){for(var n=[],s=0;s<e.length*32;s+=8)n.push(e[s>>>5]>>>24-s%32&255);return n},bytesToHex:function(e){for(var n=[],s=0;s<e.length;s++)n.push((e[s]>>>4).toString(16)),n.push((e[s]&15).toString(16));return n.join("")},hexToBytes:function(e){for(var n=[],s=0;s<e.length;s+=2)n.push(parseInt(e.substr(s,2),16));return n},bytesToBase64:function(e){for(var n=[],s=0;s<e.length;s+=3)for(var i=e[s]<<16|e[s+1]<<8|e[s+2],o=0;o<4;o++)s*8+o*6<=e.length*8?n.push(r.charAt(i>>>6*(3-o)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/ig,"");for(var n=[],s=0,i=0;s<e.length;i=++s%4)i!=0&&n.push((r.indexOf(e.charAt(s-1))&Math.pow(2,-2*i+8)-1)<<i*2|r.indexOf(e.charAt(s))>>>6-i*2);return n}};Eh.exports=t})()),Eh.exports}var Aa,Nh;function Ah(){if(Nh)return Aa;Nh=1;var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(t.charCodeAt(n)&255);return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};return Aa=r,Aa}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var Sa,Sh;function dy(){if(Sh)return Sa;Sh=1,Sa=function(e){return e!=null&&(r(e)||t(e)||!!e._isBuffer)};function r(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function t(e){return typeof e.readFloatLE=="function"&&typeof e.slice=="function"&&r(e.slice(0,0))}return Sa}var Oh;function fy(){return Oh||(Oh=1,(function(){var r=hy(),t=Ah().utf8,e=dy(),n=Ah().bin,s=function(i,o){i.constructor==String?o&&o.encoding==="binary"?i=n.stringToBytes(i):i=t.stringToBytes(i):e(i)?i=Array.prototype.slice.call(i,0):!Array.isArray(i)&&i.constructor!==Uint8Array&&(i=i.toString());for(var a=r.bytesToWords(i),c=i.length*8,u=1732584193,d=-271733879,p=-1732584194,f=271733878,g=0;g<a.length;g++)a[g]=(a[g]<<8|a[g]>>>24)&16711935|(a[g]<<24|a[g]>>>8)&4278255360;a[c>>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;for(var b=s._ff,C=s._gg,M=s._hh,_=s._ii,g=0;g<a.length;g+=16){var S=u,B=d,q=p,H=f;u=b(u,d,p,f,a[g+0],7,-680876936),f=b(f,u,d,p,a[g+1],12,-389564586),p=b(p,f,u,d,a[g+2],17,606105819),d=b(d,p,f,u,a[g+3],22,-1044525330),u=b(u,d,p,f,a[g+4],7,-176418897),f=b(f,u,d,p,a[g+5],12,1200080426),p=b(p,f,u,d,a[g+6],17,-1473231341),d=b(d,p,f,u,a[g+7],22,-45705983),u=b(u,d,p,f,a[g+8],7,1770035416),f=b(f,u,d,p,a[g+9],12,-1958414417),p=b(p,f,u,d,a[g+10],17,-42063),d=b(d,p,f,u,a[g+11],22,-1990404162),u=b(u,d,p,f,a[g+12],7,1804603682),f=b(f,u,d,p,a[g+13],12,-40341101),p=b(p,f,u,d,a[g+14],17,-1502002290),d=b(d,p,f,u,a[g+15],22,1236535329),u=C(u,d,p,f,a[g+1],5,-165796510),f=C(f,u,d,p,a[g+6],9,-1069501632),p=C(p,f,u,d,a[g+11],14,643717713),d=C(d,p,f,u,a[g+0],20,-373897302),u=C(u,d,p,f,a[g+5],5,-701558691),f=C(f,u,d,p,a[g+10],9,38016083),p=C(p,f,u,d,a[g+15],14,-660478335),d=C(d,p,f,u,a[g+4],20,-405537848),u=C(u,d,p,f,a[g+9],5,568446438),f=C(f,u,d,p,a[g+14],9,-1019803690),p=C(p,f,u,d,a[g+3],14,-187363961),d=C(d,p,f,u,a[g+8],20,1163531501),u=C(u,d,p,f,a[g+13],5,-1444681467),f=C(f,u,d,p,a[g+2],9,-51403784),p=C(p,f,u,d,a[g+7],14,1735328473),d=C(d,p,f,u,a[g+12],20,-1926607734),u=M(u,d,p,f,a[g+5],4,-378558),f=M(f,u,d,p,a[g+8],11,-2022574463),p=M(p,f,u,d,a[g+11],16,1839030562),d=M(d,p,f,u,a[g+14],23,-35309556),u=M(u,d,p,f,a[g+1],4,-1530992060),f=M(f,u,d,p,a[g+4],11,1272893353),p=M(p,f,u,d,a[g+7],16,-155497632),d=M(d,p,f,u,a[g+10],23,-1094730640),u=M(u,d,p,f,a[g+13],4,681279174),f=M(f,u,d,p,a[g+0],11,-358537222),p=M(p,f,u,d,a[g+3],16,-722521979),d=M(d,p,f,u,a[g+6],23,76029189),u=M(u,d,p,f,a[g+9],4,-640364487),f=M(f,u,d,p,a[g+12],11,-421815835),p=M(p,f,u,d,a[g+15],16,530742520),d=M(d,p,f,u,a[g+2],23,-995338651),u=_(u,d,p,f,a[g+0],6,-198630844),f=_(f,u,d,p,a[g+7],10,1126891415),p=_(p,f,u,d,a[g+14],15,-1416354905),d=_(d,p,f,u,a[g+5],21,-57434055),u=_(u,d,p,f,a[g+12],6,1700485571),f=_(f,u,d,p,a[g+3],10,-1894986606),p=_(p,f,u,d,a[g+10],15,-1051523),d=_(d,p,f,u,a[g+1],21,-2054922799),u=_(u,d,p,f,a[g+8],6,1873313359),f=_(f,u,d,p,a[g+15],10,-30611744),p=_(p,f,u,d,a[g+6],15,-1560198380),d=_(d,p,f,u,a[g+13],21,1309151649),u=_(u,d,p,f,a[g+4],6,-145523070),f=_(f,u,d,p,a[g+11],10,-1120210379),p=_(p,f,u,d,a[g+2],15,718787259),d=_(d,p,f,u,a[g+9],21,-343485551),u=u+S>>>0,d=d+B>>>0,p=p+q>>>0,f=f+H>>>0}return r.endian([u,d,p,f])};s._ff=function(i,o,a,c,u,d,p){var f=i+(o&a|~o&c)+(u>>>0)+p;return(f<<d|f>>>32-d)+o},s._gg=function(i,o,a,c,u,d,p){var f=i+(o&c|a&~c)+(u>>>0)+p;return(f<<d|f>>>32-d)+o},s._hh=function(i,o,a,c,u,d,p){var f=i+(o^a^c)+(u>>>0)+p;return(f<<d|f>>>32-d)+o},s._ii=function(i,o,a,c,u,d,p){var f=i+(a^(o|~c))+(u>>>0)+p;return(f<<d|f>>>32-d)+o},s._blocksize=16,s._digestsize=16,Mh.exports=function(i,o){if(i==null)throw new Error("Illegal argument "+i);var a=r.wordsToBytes(s(i,o));return o&&o.asBytes?a:o&&o.asString?n.bytesToString(a):r.bytesToHex(a)}})()),Mh.exports}fy();const py={size:{xsmall:"layout-icon--xsmall",small:"layout-icon--small",medium:"layout-icon--medium",large:"layout-icon--large",inherit:"layout-icon--inherit"},align:{top:"layout-icon--top",center:"layout-icon--center",bottom:"layout-icon--bottom"}},gy=y1({base:"layout-icon",variants:py}),my={class:"layout-icon__text"},vy=Qe({__name:"LayoutIcon",props:{iconLeft:{},iconLeftOverlay:{},iconRight:{},iconRightOverlay:{},iconOnly:{},iconOnlyOverlay:{},size:{default:"medium"},align:{default:"center"}},setup(r){const t=Ye(()=>{if(!r.iconOnly)return;const s={"layout-icon__icon":!0,"layout-icon__icon--only":!0};return typeof r.iconOnly=="string"?{class:s,name:r.iconOnly,overlay:r.iconOnlyOverlay}:{class:s,name:r.iconOnly.name,overlay:r.iconOnlyOverlay,...r.iconOnly.size&&r.iconOnly.size!=="inherit"&&{size:r.iconOnly.size}}}),e=Ye(()=>{if(!r.iconLeft)return;const s={"layout-icon__icon":!0,"layout-icon__icon--left":!0};return typeof r.iconLeft=="string"?{class:s,name:r.iconLeft,overlay:r.iconLeftOverlay}:{class:s,name:r.iconLeft.name,overlay:r.iconLeftOverlay,...r.iconLeft.size&&r.iconLeft.size!=="inherit"&&{size:r.iconLeft.size}}}),n=Ye(()=>{if(!r.iconRight)return;const s={"layout-icon__icon":!0,"layout-icon__icon--right":!0};return typeof r.iconRight=="string"?{class:s,name:r.iconRight,overlay:r.iconRightOverlay}:{class:s,name:r.iconRight.name,overlay:r.iconRightOverlay,...r.iconRight.size&&r.iconRight.size!=="inherit"&&{size:r.iconRight.size}}});return(s,i)=>{var o,a,c;return Dt(),re("span",{class:or(te(gy)({size:r.size,align:r.align}))},[r.iconOnly&&(o=t.value)!=null&&o.name?(Dt(),Fs(Na,Jl(oo({key:0},t.value)),null,16)):(Dt(),re(ve,{key:1},[r.iconLeft&&(a=e.value)!=null&&a.name?(Dt(),Fs(Na,Jl(oo({key:0},e.value)),null,16)):U1("",!0),F("span",my,[A2(s.$slots,"default",{},void 0)]),r.iconRight&&(c=n.value)!=null&&c.name?(Dt(),Fs(Na,Jl(oo({key:1},n.value)),null,16)):U1("",!0)],64))],2)}}}),wy=C1(vy,[["__scopeId","data-v-a1bd9c3e"]]);({...u0.reduce((r,t)=>(r[t]=`badge--${t}`,r),{})});function by(){const r={};return La.forEach(t=>{r[t]=`block--padding-${t}`}),La.forEach(t=>{La.forEach(e=>{r[`${t}-${e}`]=`block--padding-v-${t} block--padding-x-${e}`})}),r}by(),C9.reduce((r,t)=>(r[t]=`block--elevation-${t}`,r),{}),k9.reduce((r,t)=>(r[t]=`block--border-radius-${t}`,r),{});const yy=Qe({__name:"Button",props:{iconLeft:{},iconLeftOverlay:{},iconRight:{},iconRightOverlay:{},iconOnly:{},iconOnlyOverlay:{},size:{},variant:{},finish:{},inverted:{type:Boolean},fillWidth:{type:Boolean},disabled:{type:Boolean},round:{type:Boolean},href:{},external:{type:Boolean},to:{},tabIndex:{},ariaLabel:{},forceState:{},type:{},active:{type:Boolean}},emits:["click"],setup(r,{emit:t}){const e=r,n=t,s=Ve(null),i=Ci("buttonGroup",void 0),o=()=>e.size?e.size:i!=null&&i.inGroup?i.size||"small":"medium",a=()=>{if(i!=null&&i.inGroup){if(i.variant==="toolbar")return e.finish||"outlined";if(i.variant==="ghostbar")return e.finish||"ghost"}return e.finish||"filled"},c=Ve(o()),u=Ve(e.variant??"primary"),d=Ve(a()),p=Ye(()=>e.to?"RouterLink":e.href?"a":"button"),f=Ye(()=>e.external?"_blank":void 0),g=Ye(()=>{const _={};return p.value==="RouterLink"?_.to=e.to:p.value==="a"?(_.href=e.href,_.target=f.value):p.value==="button"&&(_.ariaLabel=e.ariaLabel,_.disabled=e.disabled,_.type=e.type||"button"),e.disabled&&p.value!=="button"&&(_["aria-disabled"]=!0),_}),b=Ye(()=>e.finish==="link"?"inherit":c.value),C=()=>{if(i!=null&&i.inGroup){const _=e.size||i.size||"small";i.variant==="toolbar"&&(c.value=_,u.value=e.variant||"primary",d.value=e.finish||"outlined"),i.variant==="ghostbar"&&(c.value=_,u.value=e.variant||"primary",d.value=e.finish||"ghost"),i.variant==="split"&&(c.value=_,u.value=e.variant||"primary",d.value=e.finish||"filled")}else c.value=e.size||"medium",u.value=e.variant||"primary",d.value=e.finish||"filled"},M=Ye(()=>({"button--icon-left":e.iconLeft,"button--icon-right":e.iconRight,"button--icon-only":e.iconOnly,[`button--group-${i==null?void 0:i.variant}`]:i==null?void 0:i.inGroup}));return Ao(()=>{C()}),Tn(()=>i,()=>{i&&C()},{deep:!0}),Tn(()=>[e.size,e.variant,e.finish],()=>{e.size&&(c.value=e.size),e.variant&&(u.value=e.variant),e.finish&&(d.value=e.finish)}),Tn(()=>e.active,async()=>{await qc();const _=s.value,S=_ instanceof HTMLElement?_:_==null?void 0:_.$el;if(!S)return;const B=S.style.display;S.style.display="none",S.offsetHeight,S.style.display=B}),(_,S)=>(Dt(),Fs(c3(p.value),oo({ref_key:"rootEl",ref:s,class:te(k0)(te(om)({size:c.value,variant:u.value,finish:d.value,inverted:e.inverted,fillWidth:e.fillWidth,round:e.round,forceState:e.forceState,active:e.active}),M.value),role:"button"},g.value,{onClick:S[0]||(S[0]=B=>{if(e.disabled){B.preventDefault(),B.stopPropagation();return}n("click",B)})}),{default:Pr(()=>[Ut(wy,{"icon-left":e.iconLeft,"icon-left-overlay":e.iconLeftOverlay,"icon-right":e.iconRight,"icon-right-overlay":e.iconRightOverlay,"icon-only":e.iconOnly,"icon-only-overlay":e.iconOnlyOverlay,size:b.value},{default:Pr(()=>[A2(_.$slots,"default",{},void 0,!0)]),_:3},8,["icon-left","icon-left-overlay","icon-right","icon-right-overlay","icon-only","icon-only-overlay","size"])]),_:3},16,["class"]))}}),Xn=C1(yy,[["__scopeId","data-v-21e89a4f"]]);var Cy=typeof global=="object"&&global&&global.Object===Object&&global,ky=typeof self=="object"&&self&&self.Object===Object&&self,xy=Cy||ky||Function("return this")(),Bi=xy.Symbol;Bi&&Bi.toStringTag;Bi&&Bi.toStringTag;var Ih=Bi?Bi.prototype:void 0;Ih&&Ih.toString;x0.reduce((r,t)=>(r[t]=`dropdown--placement-${t}`,r),{});var Rt=(r=>(r[r.TYPE=3]="TYPE",r[r.LEVEL=12]="LEVEL",r[r.ATTRIBUTE=13]="ATTRIBUTE",r[r.BLOT=14]="BLOT",r[r.INLINE=7]="INLINE",r[r.BLOCK=11]="BLOCK",r[r.BLOCK_BLOT=10]="BLOCK_BLOT",r[r.INLINE_BLOT=6]="INLINE_BLOT",r[r.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",r[r.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",r[r.ANY=15]="ANY",r))(Rt||{});class qi{constructor(t,e,n={}){this.attrName=t,this.keyName=e;const s=Rt.TYPE&Rt.ATTRIBUTE;this.scope=n.scope!=null?n.scope&Rt.LEVEL|s:Rt.ATTRIBUTE,n.whitelist!=null&&(this.whitelist=n.whitelist)}static keys(t){return Array.from(t.attributes).map(e=>e.name)}add(t,e){return this.canAdd(t,e)?(t.setAttribute(this.keyName,e),!0):!1}canAdd(t,e){return this.whitelist==null?!0:typeof e=="string"?this.whitelist.indexOf(e.replace(/["']/g,""))>-1:this.whitelist.indexOf(e)>-1}remove(t){t.removeAttribute(this.keyName)}value(t){const e=t.getAttribute(this.keyName);return this.canAdd(t,e)&&e?e:""}}class Mi extends Error{constructor(t){t="[Parchment] "+t,super(t),this.message=t,this.name=this.constructor.name}}const M0=class vc{constructor(){this.attributes={},this.classes={},this.tags={},this.types={}}static find(t,e=!1){if(t==null)return null;if(this.blots.has(t))return this.blots.get(t)||null;if(e){let n=null;try{n=t.parentNode}catch{return null}return this.find(n,e)}return null}create(t,e,n){const s=this.query(e);if(s==null)throw new Mi(`Unable to create ${e} blot`);const i=s,o=e instanceof Node||e.nodeType===Node.TEXT_NODE?e:i.create(n),a=new i(t,o,n);return vc.blots.set(a.domNode,a),a}find(t,e=!1){return vc.find(t,e)}query(t,e=Rt.ANY){let n;return typeof t=="string"?n=this.types[t]||this.attributes[t]:t instanceof Text||t.nodeType===Node.TEXT_NODE?n=this.types.text:typeof t=="number"?t&Rt.LEVEL&Rt.BLOCK?n=this.types.block:t&Rt.LEVEL&Rt.INLINE&&(n=this.types.inline):t instanceof Element&&((t.getAttribute("class")||"").split(/\s+/).some(s=>(n=this.classes[s],!!n)),n=n||this.tags[t.tagName]),n==null?null:"scope"in n&&e&Rt.LEVEL&n.scope&&e&Rt.TYPE&n.scope?n:null}register(...t){return t.map(e=>{const n="blotName"in e,s="attrName"in e;if(!n&&!s)throw new Mi("Invalid definition");if(n&&e.blotName==="abstract")throw new Mi("Cannot register abstract class");const i=n?e.blotName:s?e.attrName:void 0;return this.types[i]=e,s?typeof e.keyName=="string"&&(this.attributes[e.keyName]=e):n&&(e.className&&(this.classes[e.className]=e),e.tagName&&(Array.isArray(e.tagName)?e.tagName=e.tagName.map(o=>o.toUpperCase()):e.tagName=e.tagName.toUpperCase(),(Array.isArray(e.tagName)?e.tagName:[e.tagName]).forEach(o=>{(this.tags[o]==null||e.className==null)&&(this.tags[o]=e)}))),e})}};M0.blots=new WeakMap;let wc=M0;function jh(r,t){return(r.getAttribute("class")||"").split(/\s+/).filter(e=>e.indexOf(`${t}-`)===0)}class _y extends qi{static keys(t){return(t.getAttribute("class")||"").split(/\s+/).map(e=>e.split("-").slice(0,-1).join("-"))}add(t,e){return this.canAdd(t,e)?(this.remove(t),t.classList.add(`${this.keyName}-${e}`),!0):!1}remove(t){jh(t,this.keyName).forEach(e=>{t.classList.remove(e)}),t.classList.length===0&&t.removeAttribute("class")}value(t){const e=(jh(t,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(t,e)?e:""}}const Ly=_y;function Oa(r){const t=r.split("-"),e=t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("");return t[0]+e}class My extends qi{static keys(t){return(t.getAttribute("style")||"").split(";").map(e=>e.split(":")[0].trim())}add(t,e){return this.canAdd(t,e)?(t.style[Oa(this.keyName)]=e,!0):!1}remove(t){t.style[Oa(this.keyName)]="",t.getAttribute("style")||t.removeAttribute("style")}value(t){const e=t.style[Oa(this.keyName)];return this.canAdd(t,e)?e:""}}const Ey=My;class Ty{constructor(t){this.attributes={},this.domNode=t,this.build()}attribute(t,e){e?t.add(this.domNode,e)&&(t.value(this.domNode)!=null?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),delete this.attributes[t.attrName])}build(){this.attributes={};const t=wc.find(this.domNode);if(t==null)return;const e=qi.keys(this.domNode),n=Ly.keys(this.domNode),s=Ey.keys(this.domNode);e.concat(n).concat(s).forEach(i=>{const o=t.scroll.query(i,Rt.ATTRIBUTE);o instanceof qi&&(this.attributes[o.attrName]=o)})}copy(t){Object.keys(this.attributes).forEach(e=>{const n=this.attributes[e].value(this.domNode);t.format(e,n)})}move(t){this.copy(t),Object.keys(this.attributes).forEach(e=>{this.attributes[e].remove(this.domNode)}),this.attributes={}}values(){return Object.keys(this.attributes).reduce((t,e)=>(t[e]=this.attributes[e].value(this.domNode),t),{})}}const k1=Ty,E0=class{constructor(r,t){this.scroll=r,this.domNode=t,wc.blots.set(t,this),this.prev=null,this.next=null}static create(r){if(this.tagName==null)throw new Mi("Blot definition missing tagName");let t,e;return Array.isArray(this.tagName)?(typeof r=="string"?(e=r.toUpperCase(),parseInt(e,10).toString()===e&&(e=parseInt(e,10))):typeof r=="number"&&(e=r),typeof e=="number"?t=document.createElement(this.tagName[e-1]):e&&this.tagName.indexOf(e)>-1?t=document.createElement(e):t=document.createElement(this.tagName[0])):t=document.createElement(this.tagName),this.className&&t.classList.add(this.className),t}get statics(){return this.constructor}attach(){}clone(){const r=this.domNode.cloneNode(!1);return this.scroll.create(r)}detach(){this.parent!=null&&this.parent.removeChild(this),wc.blots.delete(this.domNode)}deleteAt(r,t){this.isolate(r,t).remove()}formatAt(r,t,e,n){const s=this.isolate(r,t);if(this.scroll.query(e,Rt.BLOT)!=null&&n)s.wrap(e,n);else if(this.scroll.query(e,Rt.ATTRIBUTE)!=null){const i=this.scroll.create(this.statics.scope);s.wrap(i),i.format(e,n)}}insertAt(r,t,e){const n=e==null?this.scroll.create("text",t):this.scroll.create(t,e),s=this.split(r);this.parent.insertBefore(n,s||void 0)}isolate(r,t){const e=this.split(r);if(e==null)throw new Error("Attempt to isolate at end");return e.split(t),e}length(){return 1}offset(r=this.parent){return this.parent==null||this===r?0:this.parent.children.offset(this)+this.parent.offset(r)}optimize(r){this.statics.requiredContainer&&!(this.parent instanceof this.statics.requiredContainer)&&this.wrap(this.statics.requiredContainer.blotName)}remove(){this.domNode.parentNode!=null&&this.domNode.parentNode.removeChild(this.domNode),this.detach()}replaceWith(r,t){const e=typeof r=="string"?this.scroll.create(r,t):r;return this.parent!=null&&(this.parent.insertBefore(e,this.next||void 0),this.remove()),e}split(r,t){return r===0?this:this.next}update(r,t){}wrap(r,t){const e=typeof r=="string"?this.scroll.create(r,t):r;if(this.parent!=null&&this.parent.insertBefore(e,this.next||void 0),typeof e.appendChild!="function")throw new Mi(`Cannot wrap ${r}`);return e.appendChild(this),e}};E0.blotName="abstract";let T0=E0;const N0=class extends T0{static value(r){return!0}index(r,t){return this.domNode===r||this.domNode.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(t,1):-1}position(r,t){let e=Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);return r>0&&(e+=1),[this.parent.domNode,e]}value(){return{[this.statics.blotName]:this.statics.value(this.domNode)||!0}}};N0.scope=Rt.INLINE_BLOT;let Ny=N0;const $o=Ny;class Ay{constructor(){this.head=null,this.tail=null,this.length=0}append(...t){if(this.insertBefore(t[0],null),t.length>1){const e=t.slice(1);this.append(...e)}}at(t){const e=this.iterator();let n=e();for(;n&&t>0;)t-=1,n=e();return n}contains(t){const e=this.iterator();let n=e();for(;n;){if(n===t)return!0;n=e()}return!1}indexOf(t){const e=this.iterator();let n=e(),s=0;for(;n;){if(n===t)return s;s+=1,n=e()}return-1}insertBefore(t,e){t!=null&&(this.remove(t),t.next=e,e!=null?(t.prev=e.prev,e.prev!=null&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):this.tail!=null?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=null,this.head=this.tail=t),this.length+=1)}offset(t){let e=0,n=this.head;for(;n!=null;){if(n===t)return e;e+=n.length(),n=n.next}return-1}remove(t){this.contains(t)&&(t.prev!=null&&(t.prev.next=t.next),t.next!=null&&(t.next.prev=t.prev),t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)}iterator(t=this.head){return()=>{const e=t;return t!=null&&(t=t.next),e}}find(t,e=!1){const n=this.iterator();let s=n();for(;s;){const i=s.length();if(t<i||e&&t===i&&(s.next==null||s.next.length()!==0))return[s,t];t-=i,s=n()}return[null,0]}forEach(t){const e=this.iterator();let n=e();for(;n;)t(n),n=e()}forEachAt(t,e,n){if(e<=0)return;const[s,i]=this.find(t);let o=t-i;const a=this.iterator(s);let c=a();for(;c&&o<t+e;){const u=c.length();t>o?n(c,t-o,Math.min(e,o+u-t)):n(c,0,Math.min(u,t+e-o)),o+=u,c=a()}}map(t){return this.reduce((e,n)=>(e.push(t(n)),e),[])}reduce(t,e){const n=this.iterator();let s=n();for(;s;)e=t(e,s),s=n();return e}}function Bh(r,t){const e=t.find(r);if(e)return e;try{return t.create(r)}catch{const n=t.create(Rt.INLINE);return Array.from(r.childNodes).forEach(s=>{n.domNode.appendChild(s)}),r.parentNode&&r.parentNode.replaceChild(n.domNode,r),n.attach(),n}}const A0=class Pn extends T0{constructor(t,e){super(t,e),this.uiNode=null,this.build()}appendChild(t){this.insertBefore(t)}attach(){super.attach(),this.children.forEach(t=>{t.attach()})}attachUI(t){this.uiNode!=null&&this.uiNode.remove(),this.uiNode=t,Pn.uiClass&&this.uiNode.classList.add(Pn.uiClass),this.uiNode.setAttribute("contenteditable","false"),this.domNode.insertBefore(this.uiNode,this.domNode.firstChild)}build(){this.children=new Ay,Array.from(this.domNode.childNodes).filter(t=>t!==this.uiNode).reverse().forEach(t=>{try{const e=Bh(t,this.scroll);this.insertBefore(e,this.children.head||void 0)}catch(e){if(e instanceof Mi)return;throw e}})}deleteAt(t,e){if(t===0&&e===this.length())return this.remove();this.children.forEachAt(t,e,(n,s,i)=>{n.deleteAt(s,i)})}descendant(t,e=0){const[n,s]=this.children.find(e);return t.blotName==null&&t(n)||t.blotName!=null&&n instanceof t?[n,s]:n instanceof Pn?n.descendant(t,s):[null,-1]}descendants(t,e=0,n=Number.MAX_VALUE){let s=[],i=n;return this.children.forEachAt(e,n,(o,a,c)=>{(t.blotName==null&&t(o)||t.blotName!=null&&o instanceof t)&&s.push(o),o instanceof Pn&&(s=s.concat(o.descendants(t,a,i))),i-=c}),s}detach(){this.children.forEach(t=>{t.detach()}),super.detach()}enforceAllowedChildren(){let t=!1;this.children.forEach(e=>{t||this.statics.allowedChildren.some(n=>e instanceof n)||(e.statics.scope===Rt.BLOCK_BLOT?(e.next!=null&&this.splitAfter(e),e.prev!=null&&this.splitAfter(e.prev),e.parent.unwrap(),t=!0):e instanceof Pn?e.unwrap():e.remove())})}formatAt(t,e,n,s){this.children.forEachAt(t,e,(i,o,a)=>{i.formatAt(o,a,n,s)})}insertAt(t,e,n){const[s,i]=this.children.find(t);if(s)s.insertAt(i,e,n);else{const o=n==null?this.scroll.create("text",e):this.scroll.create(e,n);this.appendChild(o)}}insertBefore(t,e){t.parent!=null&&t.parent.children.remove(t);let n=null;this.children.insertBefore(t,e||null),t.parent=this,e!=null&&(n=e.domNode),(this.domNode.parentNode!==t.domNode||this.domNode.nextSibling!==n)&&this.domNode.insertBefore(t.domNode,n),t.attach()}length(){return this.children.reduce((t,e)=>t+e.length(),0)}moveChildren(t,e){this.children.forEach(n=>{t.insertBefore(n,e)})}optimize(t){if(super.optimize(t),this.enforceAllowedChildren(),this.uiNode!=null&&this.uiNode!==this.domNode.firstChild&&this.domNode.insertBefore(this.uiNode,this.domNode.firstChild),this.children.length===0)if(this.statics.defaultChild!=null){const e=this.scroll.create(this.statics.defaultChild.blotName);this.appendChild(e)}else this.remove()}path(t,e=!1){const[n,s]=this.children.find(t,e),i=[[this,t]];return n instanceof Pn?i.concat(n.path(s,e)):(n!=null&&i.push([n,s]),i)}removeChild(t){this.children.remove(t)}replaceWith(t,e){const n=typeof t=="string"?this.scroll.create(t,e):t;return n instanceof Pn&&this.moveChildren(n),super.replaceWith(n)}split(t,e=!1){if(!e){if(t===0)return this;if(t===this.length())return this.next}const n=this.clone();return this.parent&&this.parent.insertBefore(n,this.next||void 0),this.children.forEachAt(t,this.length(),(s,i,o)=>{const a=s.split(i,e);a!=null&&n.appendChild(a)}),n}splitAfter(t){const e=this.clone();for(;t.next!=null;)e.appendChild(t.next);return this.parent&&this.parent.insertBefore(e,this.next||void 0),e}unwrap(){this.parent&&this.moveChildren(this.parent,this.next||void 0),this.remove()}update(t,e){const n=[],s=[];t.forEach(i=>{i.target===this.domNode&&i.type==="childList"&&(n.push(...i.addedNodes),s.push(...i.removedNodes))}),s.forEach(i=>{if(i.parentNode!=null&&i.tagName!=="IFRAME"&&document.body.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY)return;const o=this.scroll.find(i);o!=null&&(o.domNode.parentNode==null||o.domNode.parentNode===this.domNode)&&o.detach()}),n.filter(i=>i.parentNode===this.domNode&&i!==this.uiNode).sort((i,o)=>i===o?0:i.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1).forEach(i=>{let o=null;i.nextSibling!=null&&(o=this.scroll.find(i.nextSibling));const a=Bh(i,this.scroll);(a.next!==o||a.next==null)&&(a.parent!=null&&a.parent.removeChild(this),this.insertBefore(a,o||void 0))}),this.enforceAllowedChildren()}};A0.uiClass="";let Sy=A0;const Ei=Sy;function Oy(r,t){if(Object.keys(r).length!==Object.keys(t).length)return!1;for(const e in r)if(r[e]!==t[e])return!1;return!0}const pi=class gi extends Ei{static create(t){return super.create(t)}static formats(t,e){const n=e.query(gi.blotName);if(!(n!=null&&t.tagName===n.tagName)){if(typeof this.tagName=="string")return!0;if(Array.isArray(this.tagName))return t.tagName.toLowerCase()}}constructor(t,e){super(t,e),this.attributes=new k1(this.domNode)}format(t,e){if(t===this.statics.blotName&&!e)this.children.forEach(n=>{n instanceof gi||(n=n.wrap(gi.blotName,!0)),this.attributes.copy(n)}),this.unwrap();else{const n=this.scroll.query(t,Rt.INLINE);if(n==null)return;n instanceof qi?this.attributes.attribute(n,e):e&&(t!==this.statics.blotName||this.formats()[t]!==e)&&this.replaceWith(t,e)}}formats(){const t=this.attributes.values(),e=this.statics.formats(this.domNode,this.scroll);return e!=null&&(t[this.statics.blotName]=e),t}formatAt(t,e,n,s){this.formats()[n]!=null||this.scroll.query(n,Rt.ATTRIBUTE)?this.isolate(t,e).format(n,s):super.formatAt(t,e,n,s)}optimize(t){super.optimize(t);const e=this.formats();if(Object.keys(e).length===0)return this.unwrap();const n=this.next;n instanceof gi&&n.prev===this&&Oy(e,n.formats())&&(n.moveChildren(this),n.remove())}replaceWith(t,e){const n=super.replaceWith(t,e);return this.attributes.copy(n),n}update(t,e){super.update(t,e),t.some(n=>n.target===this.domNode&&n.type==="attributes")&&this.attributes.build()}wrap(t,e){const n=super.wrap(t,e);return n instanceof gi&&this.attributes.move(n),n}};pi.allowedChildren=[pi,$o],pi.blotName="inline",pi.scope=Rt.INLINE_BLOT,pi.tagName="SPAN";let Iy=pi;const S0=Iy,mi=class bc extends Ei{static create(t){return super.create(t)}static formats(t,e){const n=e.query(bc.blotName);if(!(n!=null&&t.tagName===n.tagName)){if(typeof this.tagName=="string")return!0;if(Array.isArray(this.tagName))return t.tagName.toLowerCase()}}constructor(t,e){super(t,e),this.attributes=new k1(this.domNode)}format(t,e){const n=this.scroll.query(t,Rt.BLOCK);n!=null&&(n instanceof qi?this.attributes.attribute(n,e):t===this.statics.blotName&&!e?this.replaceWith(bc.blotName):e&&(t!==this.statics.blotName||this.formats()[t]!==e)&&this.replaceWith(t,e))}formats(){const t=this.attributes.values(),e=this.statics.formats(this.domNode,this.scroll);return e!=null&&(t[this.statics.blotName]=e),t}formatAt(t,e,n,s){this.scroll.query(n,Rt.BLOCK)!=null?this.format(n,s):super.formatAt(t,e,n,s)}insertAt(t,e,n){if(n==null||this.scroll.query(e,Rt.INLINE)!=null)super.insertAt(t,e,n);else{const s=this.split(t);if(s!=null){const i=this.scroll.create(e,n);s.parent.insertBefore(i,s)}else throw new Error("Attempt to insertAt after block boundaries")}}replaceWith(t,e){const n=super.replaceWith(t,e);return this.attributes.copy(n),n}update(t,e){super.update(t,e),t.some(n=>n.target===this.domNode&&n.type==="attributes")&&this.attributes.build()}};mi.blotName="block",mi.scope=Rt.BLOCK_BLOT,mi.tagName="P",mi.allowedChildren=[S0,mi,$o];let jy=mi;const yc=jy,Cc=class extends Ei{checkMerge(){return this.next!==null&&this.next.statics.blotName===this.statics.blotName}deleteAt(r,t){super.deleteAt(r,t),this.enforceAllowedChildren()}formatAt(r,t,e,n){super.formatAt(r,t,e,n),this.enforceAllowedChildren()}insertAt(r,t,e){super.insertAt(r,t,e),this.enforceAllowedChildren()}optimize(r){super.optimize(r),this.children.length>0&&this.next!=null&&this.checkMerge()&&(this.next.moveChildren(this),this.next.remove())}};Cc.blotName="container",Cc.scope=Rt.BLOCK_BLOT;let By=Cc;const qy=By;class Ry extends $o{static formats(t,e){}format(t,e){super.formatAt(0,this.length(),t,e)}formatAt(t,e,n,s){t===0&&e===this.length()?this.format(n,s):super.formatAt(t,e,n,s)}formats(){return this.statics.formats(this.domNode,this.scroll)}}const Gl=Ry,Hy={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},$y=100,Ki=class extends Ei{constructor(r,t){super(null,t),this.registry=r,this.scroll=this,this.build(),this.observer=new MutationObserver(e=>{this.update(e)}),this.observer.observe(this.domNode,Hy),this.attach()}create(r,t){return this.registry.create(this,r,t)}find(r,t=!1){const e=this.registry.find(r,t);return e?e.scroll===this?e:t?this.find(e.scroll.domNode.parentNode,!0):null:null}query(r,t=Rt.ANY){return this.registry.query(r,t)}register(...r){return this.registry.register(...r)}build(){this.scroll!=null&&super.build()}detach(){super.detach(),this.observer.disconnect()}deleteAt(r,t){this.update(),r===0&&t===this.length()?this.children.forEach(e=>{e.remove()}):super.deleteAt(r,t)}formatAt(r,t,e,n){this.update(),super.formatAt(r,t,e,n)}insertAt(r,t,e){this.update(),super.insertAt(r,t,e)}optimize(r=[],t={}){super.optimize(t);const e=t.mutationsMap||new WeakMap;let n=Array.from(this.observer.takeRecords());for(;n.length>0;)r.push(n.pop());const s=(a,c=!0)=>{a==null||a===this||a.domNode.parentNode!=null&&(e.has(a.domNode)||e.set(a.domNode,[]),c&&s(a.parent))},i=a=>{e.has(a.domNode)&&(a instanceof Ei&&a.children.forEach(i),e.delete(a.domNode),a.optimize(t))};let o=r;for(let a=0;o.length>0;a+=1){if(a>=$y)throw new Error("[Parchment] Maximum optimize iterations reached");for(o.forEach(c=>{const u=this.find(c.target,!0);u!=null&&(u.domNode===c.target&&(c.type==="childList"?(s(this.find(c.previousSibling,!1)),Array.from(c.addedNodes).forEach(d=>{const p=this.find(d,!1);s(p,!1),p instanceof Ei&&p.children.forEach(f=>{s(f,!1)})})):c.type==="attributes"&&s(u.prev)),s(u))}),this.children.forEach(i),o=Array.from(this.observer.takeRecords()),n=o.slice();n.length>0;)r.push(n.pop())}}update(r,t={}){r=r||this.observer.takeRecords();const e=new WeakMap;r.map(n=>{const s=this.find(n.target,!0);return s==null?null:e.has(s.domNode)?(e.get(s.domNode).push(n),null):(e.set(s.domNode,[n]),s)}).forEach(n=>{n!=null&&n!==this&&e.has(n.domNode)&&n.update(e.get(n.domNode)||[],t)}),t.mutationsMap=e,e.has(this.domNode)&&super.update(e.get(this.domNode),t),this.optimize(r,t)}};Ki.blotName="scroll",Ki.defaultChild=yc,Ki.allowedChildren=[yc,qy],Ki.scope=Rt.BLOCK_BLOT,Ki.tagName="DIV";const kc=class O0 extends $o{static create(t){return document.createTextNode(t)}static value(t){return t.data}constructor(t,e){super(t,e),this.text=this.statics.value(this.domNode)}deleteAt(t,e){this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)}index(t,e){return this.domNode===t?e:-1}insertAt(t,e,n){n==null?(this.text=this.text.slice(0,t)+e+this.text.slice(t),this.domNode.data=this.text):super.insertAt(t,e,n)}length(){return this.text.length}optimize(t){super.optimize(t),this.text=this.statics.value(this.domNode),this.text.length===0?this.remove():this.next instanceof O0&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())}position(t,e=!1){return[this.domNode,t]}split(t,e=!1){if(!e){if(t===0)return this;if(t===this.length())return this.next}const n=this.scroll.create(this.domNode.splitText(t));return this.parent.insertBefore(n,this.next||void 0),this.text=this.statics.value(this.domNode),n}update(t,e){t.some(n=>n.type==="characterData"&&n.target===this.domNode)&&(this.text=this.statics.value(this.domNode))}value(){return this.text}};kc.blotName="text",kc.scope=Rt.INLINE_BLOT;let Dy=kc;const Py=Dy;var Ia={exports:{}},ja,qh;function I0(){if(qh)return ja;qh=1;var r=-1,t=1,e=0;function n(v,T,w,O,N){if(v===T)return v?[[e,v]]:[];if(w!=null){var L=Ct(v,T,w);if(L)return L}var E=a(v,T),I=v.substring(0,E);v=v.substring(E),T=T.substring(E),E=u(v,T);var $=v.substring(v.length-E);v=v.substring(0,v.length-E),T=T.substring(0,T.length-E);var j=s(v,T);return I&&j.unshift([e,I]),$&&j.push([e,$]),S(j,N),O&&p(j),j}function s(v,T){var w;if(!v)return[[t,T]];if(!T)return[[r,v]];var O=v.length>T.length?v:T,N=v.length>T.length?T:v,L=O.indexOf(N);if(L!==-1)return w=[[t,O.substring(0,L)],[e,N],[t,O.substring(L+N.length)]],v.length>T.length&&(w[0][0]=w[2][0]=r),w;if(N.length===1)return[[r,v],[t,T]];var E=d(v,T);if(E){var I=E[0],$=E[1],j=E[2],Y=E[3],K=E[4],rt=n(I,j),nt=n($,Y);return rt.concat([[e,K]],nt)}return i(v,T)}function i(v,T){for(var w=v.length,O=T.length,N=Math.ceil((w+O)/2),L=N,E=2*N,I=new Array(E),$=new Array(E),j=0;j<E;j++)I[j]=-1,$[j]=-1;I[L+1]=0,$[L+1]=0;for(var Y=w-O,K=Y%2!==0,rt=0,nt=0,Z=0,yt=0,kt=0;kt<N;kt++){for(var J=-kt+rt;J<=kt-nt;J+=2){var ft=L+J,at;J===-kt||J!==kt&&I[ft-1]<I[ft+1]?at=I[ft+1]:at=I[ft-1]+1;for(var pt=at-J;at<w&&pt<O&&v.charAt(at)===T.charAt(pt);)at++,pt++;if(I[ft]=at,at>w)nt+=2;else if(pt>O)rt+=2;else if(K){var y=L+Y-J;if(y>=0&&y<E&&$[y]!==-1){var x=w-$[y];if(at>=x)return o(v,T,at,pt)}}}for(var A=-kt+Z;A<=kt-yt;A+=2){var y=L+A,x;A===-kt||A!==kt&&$[y-1]<$[y+1]?x=$[y+1]:x=$[y-1]+1;for(var R=x-A;x<w&&R<O&&v.charAt(w-x-1)===T.charAt(O-R-1);)x++,R++;if($[y]=x,x>w)yt+=2;else if(R>O)Z+=2;else if(!K){var ft=L+Y-A;if(ft>=0&&ft<E&&I[ft]!==-1){var at=I[ft],pt=L+at-ft;if(x=w-x,at>=x)return o(v,T,at,pt)}}}}return[[r,v],[t,T]]}function o(v,T,w,O){var N=v.substring(0,w),L=T.substring(0,O),E=v.substring(w),I=T.substring(O),$=n(N,L),j=n(E,I);return $.concat(j)}function a(v,T){if(!v||!T||v.charAt(0)!==T.charAt(0))return 0;for(var w=0,O=Math.min(v.length,T.length),N=O,L=0;w<N;)v.substring(L,N)==T.substring(L,N)?(w=N,L=w):O=N,N=Math.floor((O-w)/2+w);return B(v.charCodeAt(N-1))&&N--,N}function c(v,T){var w=v.length,O=T.length;if(w==0||O==0)return 0;w>O?v=v.substring(w-O):w<O&&(T=T.substring(0,w));var N=Math.min(w,O);if(v==T)return N;for(var L=0,E=1;;){var I=v.substring(N-E),$=T.indexOf(I);if($==-1)return L;E+=$,($==0||v.substring(N-E)==T.substring(0,E))&&(L=E,E++)}}function u(v,T){if(!v||!T||v.slice(-1)!==T.slice(-1))return 0;for(var w=0,O=Math.min(v.length,T.length),N=O,L=0;w<N;)v.substring(v.length-N,v.length-L)==T.substring(T.length-N,T.length-L)?(w=N,L=w):O=N,N=Math.floor((O-w)/2+w);return q(v.charCodeAt(v.length-N))&&N--,N}function d(v,T){var w=v.length>T.length?v:T,O=v.length>T.length?T:v;if(w.length<4||O.length*2<w.length)return null;function N(nt,Z,yt){for(var kt=nt.substring(yt,yt+Math.floor(nt.length/4)),J=-1,ft="",at,pt,y,x;(J=Z.indexOf(kt,J+1))!==-1;){var A=a(nt.substring(yt),Z.substring(J)),R=u(nt.substring(0,yt),Z.substring(0,J));ft.length<R+A&&(ft=Z.substring(J-R,J)+Z.substring(J,J+A),at=nt.substring(0,yt-R),pt=nt.substring(yt+A),y=Z.substring(0,J-R),x=Z.substring(J+A))}return ft.length*2>=nt.length?[at,pt,y,x,ft]:null}var L=N(w,O,Math.ceil(w.length/4)),E=N(w,O,Math.ceil(w.length/2)),I;if(!L&&!E)return null;E?L?I=L[4].length>E[4].length?L:E:I=E:I=L;var $,j,Y,K;v.length>T.length?($=I[0],j=I[1],Y=I[2],K=I[3]):(Y=I[0],K=I[1],$=I[2],j=I[3]);var rt=I[4];return[$,j,Y,K,rt]}function p(v){for(var T=!1,w=[],O=0,N=null,L=0,E=0,I=0,$=0,j=0;L<v.length;)v[L][0]==e?(w[O++]=L,E=$,I=j,$=0,j=0,N=v[L][1]):(v[L][0]==t?$+=v[L][1].length:j+=v[L][1].length,N&&N.length<=Math.max(E,I)&&N.length<=Math.max($,j)&&(v.splice(w[O-1],0,[r,N]),v[w[O-1]+1][0]=t,O--,O--,L=O>0?w[O-1]:-1,E=0,I=0,$=0,j=0,N=null,T=!0)),L++;for(T&&S(v),_(v),L=1;L<v.length;){if(v[L-1][0]==r&&v[L][0]==t){var Y=v[L-1][1],K=v[L][1],rt=c(Y,K),nt=c(K,Y);rt>=nt?(rt>=Y.length/2||rt>=K.length/2)&&(v.splice(L,0,[e,K.substring(0,rt)]),v[L-1][1]=Y.substring(0,Y.length-rt),v[L+1][1]=K.substring(rt),L++):(nt>=Y.length/2||nt>=K.length/2)&&(v.splice(L,0,[e,Y.substring(0,nt)]),v[L-1][0]=t,v[L-1][1]=K.substring(0,K.length-nt),v[L+1][0]=r,v[L+1][1]=Y.substring(nt),L++),L++}L++}}var f=/[^a-zA-Z0-9]/,g=/\s/,b=/[\r\n]/,C=/\n\r?\n$/,M=/^\r?\n\r?\n/;function _(v){function T(nt,Z){if(!nt||!Z)return 6;var yt=nt.charAt(nt.length-1),kt=Z.charAt(0),J=yt.match(f),ft=kt.match(f),at=J&&yt.match(g),pt=ft&&kt.match(g),y=at&&yt.match(b),x=pt&&kt.match(b),A=y&&nt.match(C),R=x&&Z.match(M);return A||R?5:y||x?4:J&&!at&&pt?3:at||pt?2:J||ft?1:0}for(var w=1;w<v.length-1;){if(v[w-1][0]==e&&v[w+1][0]==e){var O=v[w-1][1],N=v[w][1],L=v[w+1][1],E=u(O,N);if(E){var I=N.substring(N.length-E);O=O.substring(0,O.length-E),N=I+N.substring(0,N.length-E),L=I+L}for(var $=O,j=N,Y=L,K=T(O,N)+T(N,L);N.charAt(0)===L.charAt(0);){O+=N.charAt(0),N=N.substring(1)+L.charAt(0),L=L.substring(1);var rt=T(O,N)+T(N,L);rt>=K&&(K=rt,$=O,j=N,Y=L)}v[w-1][1]!=$&&($?v[w-1][1]=$:(v.splice(w-1,1),w--),v[w][1]=j,Y?v[w+1][1]=Y:(v.splice(w+1,1),w--))}w++}}function S(v,T){v.push([e,""]);for(var w=0,O=0,N=0,L="",E="",I;w<v.length;){if(w<v.length-1&&!v[w][1]){v.splice(w,1);continue}switch(v[w][0]){case t:N++,E+=v[w][1],w++;break;case r:O++,L+=v[w][1],w++;break;case e:var $=w-N-O-1;if(T){if($>=0&&lt(v[$][1])){var j=v[$][1].slice(-1);if(v[$][1]=v[$][1].slice(0,-1),L=j+L,E=j+E,!v[$][1]){v.splice($,1),w--;var Y=$-1;v[Y]&&v[Y][0]===t&&(N++,E=v[Y][1]+E,Y--),v[Y]&&v[Y][0]===r&&(O++,L=v[Y][1]+L,Y--),$=Y}}if(H(v[w][1])){var j=v[w][1].charAt(0);v[w][1]=v[w][1].slice(1),L+=j,E+=j}}if(w<v.length-1&&!v[w][1]){v.splice(w,1);break}if(L.length>0||E.length>0){L.length>0&&E.length>0&&(I=a(E,L),I!==0&&($>=0?v[$][1]+=E.substring(0,I):(v.splice(0,0,[e,E.substring(0,I)]),w++),E=E.substring(I),L=L.substring(I)),I=u(E,L),I!==0&&(v[w][1]=E.substring(E.length-I)+v[w][1],E=E.substring(0,E.length-I),L=L.substring(0,L.length-I)));var K=N+O;L.length===0&&E.length===0?(v.splice(w-K,K),w=w-K):L.length===0?(v.splice(w-K,K,[t,E]),w=w-K+1):E.length===0?(v.splice(w-K,K,[r,L]),w=w-K+1):(v.splice(w-K,K,[r,L],[t,E]),w=w-K+2)}w!==0&&v[w-1][0]===e?(v[w-1][1]+=v[w][1],v.splice(w,1)):w++,N=0,O=0,L="",E="";break}}v[v.length-1][1]===""&&v.pop();var rt=!1;for(w=1;w<v.length-1;)v[w-1][0]===e&&v[w+1][0]===e&&(v[w][1].substring(v[w][1].length-v[w-1][1].length)===v[w-1][1]?(v[w][1]=v[w-1][1]+v[w][1].substring(0,v[w][1].length-v[w-1][1].length),v[w+1][1]=v[w-1][1]+v[w+1][1],v.splice(w-1,1),rt=!0):v[w][1].substring(0,v[w+1][1].length)==v[w+1][1]&&(v[w-1][1]+=v[w+1][1],v[w][1]=v[w][1].substring(v[w+1][1].length)+v[w+1][1],v.splice(w+1,1),rt=!0)),w++;rt&&S(v,T)}function B(v){return v>=55296&&v<=56319}function q(v){return v>=56320&&v<=57343}function H(v){return q(v.charCodeAt(0))}function lt(v){return B(v.charCodeAt(v.length-1))}function dt(v){for(var T=[],w=0;w<v.length;w++)v[w][1].length>0&&T.push(v[w]);return T}function ot(v,T,w,O){return lt(v)||H(O)?null:dt([[e,v],[r,T],[t,w],[e,O]])}function Ct(v,T,w){var O=typeof w=="number"?{index:w,length:0}:w.oldRange,N=typeof w=="number"?null:w.newRange,L=v.length,E=T.length;if(O.length===0&&(N===null||N.length===0)){var I=O.index,$=v.slice(0,I),j=v.slice(I),Y=N?N.index:null;t:{var K=I+E-L;if(Y!==null&&Y!==K||K<0||K>E)break t;var rt=T.slice(0,K),nt=T.slice(K);if(nt!==j)break t;var Z=Math.min(I,K),yt=$.slice(0,Z),kt=rt.slice(0,Z);if(yt!==kt)break t;var J=$.slice(Z),ft=rt.slice(Z);return ot(yt,J,ft,j)}t:{if(Y!==null&&Y!==I)break t;var at=I,rt=T.slice(0,at),nt=T.slice(at);if(rt!==$)break t;var pt=Math.min(L-at,E-at),y=j.slice(j.length-pt),x=nt.slice(nt.length-pt);if(y!==x)break t;var J=j.slice(0,j.length-pt),ft=nt.slice(0,nt.length-pt);return ot($,J,ft,y)}}if(O.length>0&&N&&N.length===0)t:{var yt=v.slice(0,O.index),y=v.slice(O.index+O.length),Z=yt.length,pt=y.length;if(E<Z+pt)break t;var kt=T.slice(0,Z),x=T.slice(E-pt);if(yt!==kt||y!==x)break t;var J=v.slice(Z,L-pt),ft=T.slice(Z,E-pt);return ot(yt,J,ft,y)}return null}function xt(v,T,w,O){return n(v,T,w,O,!0)}return xt.INSERT=t,xt.DELETE=r,xt.EQUAL=e,ja=xt,ja}var ul={exports:{}};ul.exports;var Rh;function j0(){return Rh||(Rh=1,(function(r,t){var e=200,n="__lodash_hash_undefined__",s=9007199254740991,i="[object Arguments]",o="[object Array]",a="[object Boolean]",c="[object Date]",u="[object Error]",d="[object Function]",p="[object GeneratorFunction]",f="[object Map]",g="[object Number]",b="[object Object]",C="[object Promise]",M="[object RegExp]",_="[object Set]",S="[object String]",B="[object Symbol]",q="[object WeakMap]",H="[object ArrayBuffer]",lt="[object DataView]",dt="[object Float32Array]",ot="[object Float64Array]",Ct="[object Int8Array]",xt="[object Int16Array]",v="[object Int32Array]",T="[object Uint8Array]",w="[object Uint8ClampedArray]",O="[object Uint16Array]",N="[object Uint32Array]",L=/[\\^$.*+?()[\]{}|]/g,E=/\w*$/,I=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,j={};j[i]=j[o]=j[H]=j[lt]=j[a]=j[c]=j[dt]=j[ot]=j[Ct]=j[xt]=j[v]=j[f]=j[g]=j[b]=j[M]=j[_]=j[S]=j[B]=j[T]=j[w]=j[O]=j[N]=!0,j[u]=j[d]=j[q]=!1;var Y=typeof Kn=="object"&&Kn&&Kn.Object===Object&&Kn,K=typeof self=="object"&&self&&self.Object===Object&&self,rt=Y||K||Function("return this")(),nt=t&&!t.nodeType&&t,Z=nt&&!0&&r&&!r.nodeType&&r,yt=Z&&Z.exports===nt;function kt(l,h){return l.set(h[0],h[1]),l}function J(l,h){return l.add(h),l}function ft(l,h){for(var m=-1,k=l?l.length:0;++m<k&&h(l[m],m,l)!==!1;);return l}function at(l,h){for(var m=-1,k=h.length,X=l.length;++m<k;)l[X+m]=h[m];return l}function pt(l,h,m,k){for(var X=-1,z=l?l.length:0;++X<z;)m=h(m,l[X],X,l);return m}function y(l,h){for(var m=-1,k=Array(l);++m<l;)k[m]=h(m);return k}function x(l,h){return l==null?void 0:l[h]}function A(l){var h=!1;if(l!=null&&typeof l.toString!="function")try{h=!!(l+"")}catch{}return h}function R(l){var h=-1,m=Array(l.size);return l.forEach(function(k,X){m[++h]=[X,k]}),m}function P(l,h){return function(m){return l(h(m))}}function U(l){var h=-1,m=Array(l.size);return l.forEach(function(k){m[++h]=k}),m}var tt=Array.prototype,Q=Function.prototype,W=Object.prototype,V=rt["__core-js_shared__"],vt=(function(){var l=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||"");return l?"Symbol(src)_1."+l:""})(),et=Q.toString,st=W.hasOwnProperty,wt=W.toString,Nt=RegExp("^"+et.call(st).replace(L,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Lt=yt?rt.Buffer:void 0,Et=rt.Symbol,Ht=rt.Uint8Array,Mt=P(Object.getPrototypeOf,Object),pe=Object.create,ge=W.propertyIsEnumerable,Xe=tt.splice,We=Object.getOwnPropertySymbols,Yt=Lt?Lt.isBuffer:void 0,me=P(Object.keys,Object),Ae=ie(rt,"DataView"),xe=ie(rt,"Map"),se=ie(rt,"Promise"),Je=ie(rt,"Set"),Cr=ie(rt,"WeakMap"),Re=ie(Object,"create"),kr=Pt(Ae),He=Pt(xe),xr=Pt(se),_r=Pt(Je),Lr=Pt(Cr),Le=Et?Et.prototype:void 0,an=Le?Le.valueOf:void 0;function we(l){var h=-1,m=l?l.length:0;for(this.clear();++h<m;){var k=l[h];this.set(k[0],k[1])}}function rs(){this.__data__=Re?Re(null):{}}function ns(l){return this.has(l)&&delete this.__data__[l]}function ss(l){var h=this.__data__;if(Re){var m=h[l];return m===n?void 0:m}return st.call(h,l)?h[l]:void 0}function cn(l){var h=this.__data__;return Re?h[l]!==void 0:st.call(h,l)}function Mr(l,h){var m=this.__data__;return m[l]=Re&&h===void 0?n:h,this}we.prototype.clear=rs,we.prototype.delete=ns,we.prototype.get=ss,we.prototype.has=cn,we.prototype.set=Mr;function Ot(l){var h=-1,m=l?l.length:0;for(this.clear();++h<m;){var k=l[h];this.set(k[0],k[1])}}function is(){this.__data__=[]}function os(l){var h=this.__data__,m=er(h,l);if(m<0)return!1;var k=h.length-1;return m==k?h.pop():Xe.call(h,m,1),!0}function ls(l){var h=this.__data__,m=er(h,l);return m<0?void 0:h[m][1]}function as(l){return er(this.__data__,l)>-1}function cs(l,h){var m=this.__data__,k=er(m,l);return k<0?m.push([l,h]):m[k][1]=h,this}Ot.prototype.clear=is,Ot.prototype.delete=os,Ot.prototype.get=ls,Ot.prototype.has=as,Ot.prototype.set=cs;function jt(l){var h=-1,m=l?l.length:0;for(this.clear();++h<m;){var k=l[h];this.set(k[0],k[1])}}function us(){this.__data__={hash:new we,map:new(xe||Ot),string:new we}}function hs(l){return De(this,l).delete(l)}function ds(l){return De(this,l).get(l)}function fs(l){return De(this,l).has(l)}function ps(l,h){return De(this,l).set(l,h),this}jt.prototype.clear=us,jt.prototype.delete=hs,jt.prototype.get=ds,jt.prototype.has=fs,jt.prototype.set=ps;function Vt(l){this.__data__=new Ot(l)}function gs(){this.__data__=new Ot}function ms(l){return this.__data__.delete(l)}function vs(l){return this.__data__.get(l)}function ws(l){return this.__data__.has(l)}function bs(l,h){var m=this.__data__;if(m instanceof Ot){var k=m.__data__;if(!xe||k.length<e-1)return k.push([l,h]),this;m=this.__data__=new jt(k)}return m.set(l,h),this}Vt.prototype.clear=gs,Vt.prototype.delete=ms,Vt.prototype.get=vs,Vt.prototype.has=ws,Vt.prototype.set=bs;function tr(l,h){var m=Ar(l)||nr(l)?y(l.length,String):[],k=m.length,X=!!k;for(var z in l)st.call(l,z)&&!(X&&(z=="length"||Is(z,k)))&&m.push(z);return m}function un(l,h,m){var k=l[h];(!(st.call(l,h)&&gn(k,m))||m===void 0&&!(h in l))&&(l[h]=m)}function er(l,h){for(var m=l.length;m--;)if(gn(l[m][0],h))return m;return-1}function ce(l,h){return l&&Nr(h,Or(h),l)}function Er(l,h,m,k,X,z,ut){var ct;if(k&&(ct=z?k(l,X,z,ut):k(l)),ct!==void 0)return ct;if(!he(l))return l;var At=Ar(l);if(At){if(ct=Ss(l),!h)return Ts(l,ct)}else{var gt=ye(l),Bt=gt==d||gt==p;if(mn(l))return rr(l,h);if(gt==b||gt==i||Bt&&!z){if(A(l))return z?l:{};if(ct=ue(Bt?{}:l),!h)return Ns(l,ce(ct,l))}else{if(!j[gt])return z?l:{};ct=Os(l,gt,Er,h)}}ut||(ut=new Vt);var Zt=ut.get(l);if(Zt)return Zt;if(ut.set(l,ct),!At)var St=m?As(l):Or(l);return ft(St||l,function(qt,It){St&&(It=qt,qt=l[It]),un(ct,It,Er(qt,h,m,k,It,l,ut))}),ct}function ys(l){return he(l)?pe(l):{}}function Cs(l,h,m){var k=h(l);return Ar(l)?k:at(k,m(l))}function ks(l){return wt.call(l)}function xs(l){if(!he(l)||Bs(l))return!1;var h=Sr(l)||A(l)?Nt:I;return h.test(Pt(l))}function _s(l){if(!fn(l))return me(l);var h=[];for(var m in Object(l))st.call(l,m)&&m!="constructor"&&h.push(m);return h}function rr(l,h){if(h)return l.slice();var m=new l.constructor(l.length);return l.copy(m),m}function Tr(l){var h=new l.constructor(l.byteLength);return new Ht(h).set(new Ht(l)),h}function $e(l,h){var m=h?Tr(l.buffer):l.buffer;return new l.constructor(m,l.byteOffset,l.byteLength)}function hn(l,h,m){var k=h?m(R(l),!0):R(l);return pt(k,kt,new l.constructor)}function dn(l){var h=new l.constructor(l.source,E.exec(l));return h.lastIndex=l.lastIndex,h}function Ls(l,h,m){var k=h?m(U(l),!0):U(l);return pt(k,J,new l.constructor)}function Ms(l){return an?Object(an.call(l)):{}}function Es(l,h){var m=h?Tr(l.buffer):l.buffer;return new l.constructor(m,l.byteOffset,l.length)}function Ts(l,h){var m=-1,k=l.length;for(h||(h=Array(k));++m<k;)h[m]=l[m];return h}function Nr(l,h,m,k){m||(m={});for(var X=-1,z=h.length;++X<z;){var ut=h[X],ct=void 0;un(m,ut,ct===void 0?l[ut]:ct)}return m}function Ns(l,h){return Nr(l,be(l),h)}function As(l){return Cs(l,Or,be)}function De(l,h){var m=l.__data__;return js(h)?m[typeof h=="string"?"string":"hash"]:m.map}function ie(l,h){var m=x(l,h);return xs(m)?m:void 0}var be=We?P(We,Object):Rs,ye=ks;(Ae&&ye(new Ae(new ArrayBuffer(1)))!=lt||xe&&ye(new xe)!=f||se&&ye(se.resolve())!=C||Je&&ye(new Je)!=_||Cr&&ye(new Cr)!=q)&&(ye=function(l){var h=wt.call(l),m=h==b?l.constructor:void 0,k=m?Pt(m):void 0;if(k)switch(k){case kr:return lt;case He:return f;case xr:return C;case _r:return _;case Lr:return q}return h});function Ss(l){var h=l.length,m=l.constructor(h);return h&&typeof l[0]=="string"&&st.call(l,"index")&&(m.index=l.index,m.input=l.input),m}function ue(l){return typeof l.constructor=="function"&&!fn(l)?ys(Mt(l)):{}}function Os(l,h,m,k){var X=l.constructor;switch(h){case H:return Tr(l);case a:case c:return new X(+l);case lt:return $e(l,k);case dt:case ot:case Ct:case xt:case v:case T:case w:case O:case N:return Es(l,k);case f:return hn(l,k,m);case g:case S:return new X(l);case M:return dn(l);case _:return Ls(l,k,m);case B:return Ms(l)}}function Is(l,h){return h=h??s,!!h&&(typeof l=="number"||$.test(l))&&l>-1&&l%1==0&&l<h}function js(l){var h=typeof l;return h=="string"||h=="number"||h=="symbol"||h=="boolean"?l!=="__proto__":l===null}function Bs(l){return!!vt&&vt in l}function fn(l){var h=l&&l.constructor,m=typeof h=="function"&&h.prototype||W;return l===m}function Pt(l){if(l!=null){try{return et.call(l)}catch{}try{return l+""}catch{}}return""}function pn(l){return Er(l,!0,!0)}function gn(l,h){return l===h||l!==l&&h!==h}function nr(l){return qs(l)&&st.call(l,"callee")&&(!ge.call(l,"callee")||wt.call(l)==i)}var Ar=Array.isArray;function sr(l){return l!=null&&vn(l.length)&&!Sr(l)}function qs(l){return wn(l)&&sr(l)}var mn=Yt||Hs;function Sr(l){var h=he(l)?wt.call(l):"";return h==d||h==p}function vn(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=s}function he(l){var h=typeof l;return!!l&&(h=="object"||h=="function")}function wn(l){return!!l&&typeof l=="object"}function Or(l){return sr(l)?tr(l):_s(l)}function Rs(){return[]}function Hs(){return!1}r.exports=pn})(ul,ul.exports)),ul.exports}var hl={exports:{}};hl.exports;var Hh;function B0(){return Hh||(Hh=1,(function(r,t){var e=200,n="__lodash_hash_undefined__",s=1,i=2,o=9007199254740991,a="[object Arguments]",c="[object Array]",u="[object AsyncFunction]",d="[object Boolean]",p="[object Date]",f="[object Error]",g="[object Function]",b="[object GeneratorFunction]",C="[object Map]",M="[object Number]",_="[object Null]",S="[object Object]",B="[object Promise]",q="[object Proxy]",H="[object RegExp]",lt="[object Set]",dt="[object String]",ot="[object Symbol]",Ct="[object Undefined]",xt="[object WeakMap]",v="[object ArrayBuffer]",T="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",N="[object Int8Array]",L="[object Int16Array]",E="[object Int32Array]",I="[object Uint8Array]",$="[object Uint8ClampedArray]",j="[object Uint16Array]",Y="[object Uint32Array]",K=/[\\^$.*+?()[\]{}|]/g,rt=/^\[object .+?Constructor\]$/,nt=/^(?:0|[1-9]\d*)$/,Z={};Z[w]=Z[O]=Z[N]=Z[L]=Z[E]=Z[I]=Z[$]=Z[j]=Z[Y]=!0,Z[a]=Z[c]=Z[v]=Z[d]=Z[T]=Z[p]=Z[f]=Z[g]=Z[C]=Z[M]=Z[S]=Z[H]=Z[lt]=Z[dt]=Z[xt]=!1;var yt=typeof Kn=="object"&&Kn&&Kn.Object===Object&&Kn,kt=typeof self=="object"&&self&&self.Object===Object&&self,J=yt||kt||Function("return this")(),ft=t&&!t.nodeType&&t,at=ft&&!0&&r&&!r.nodeType&&r,pt=at&&at.exports===ft,y=pt&&yt.process,x=(function(){try{return y&&y.binding&&y.binding("util")}catch{}})(),A=x&&x.isTypedArray;function R(l,h){for(var m=-1,k=l==null?0:l.length,X=0,z=[];++m<k;){var ut=l[m];h(ut,m,l)&&(z[X++]=ut)}return z}function P(l,h){for(var m=-1,k=h.length,X=l.length;++m<k;)l[X+m]=h[m];return l}function U(l,h){for(var m=-1,k=l==null?0:l.length;++m<k;)if(h(l[m],m,l))return!0;return!1}function tt(l,h){for(var m=-1,k=Array(l);++m<l;)k[m]=h(m);return k}function Q(l){return function(h){return l(h)}}function W(l,h){return l.has(h)}function V(l,h){return l==null?void 0:l[h]}function vt(l){var h=-1,m=Array(l.size);return l.forEach(function(k,X){m[++h]=[X,k]}),m}function et(l,h){return function(m){return l(h(m))}}function st(l){var h=-1,m=Array(l.size);return l.forEach(function(k){m[++h]=k}),m}var wt=Array.prototype,Nt=Function.prototype,Lt=Object.prototype,Et=J["__core-js_shared__"],Ht=Nt.toString,Mt=Lt.hasOwnProperty,pe=(function(){var l=/[^.]+$/.exec(Et&&Et.keys&&Et.keys.IE_PROTO||"");return l?"Symbol(src)_1."+l:""})(),ge=Lt.toString,Xe=RegExp("^"+Ht.call(Mt).replace(K,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=pt?J.Buffer:void 0,Yt=J.Symbol,me=J.Uint8Array,Ae=Lt.propertyIsEnumerable,xe=wt.splice,se=Yt?Yt.toStringTag:void 0,Je=Object.getOwnPropertySymbols,Cr=We?We.isBuffer:void 0,Re=et(Object.keys,Object),kr=be(J,"DataView"),He=be(J,"Map"),xr=be(J,"Promise"),_r=be(J,"Set"),Lr=be(J,"WeakMap"),Le=be(Object,"create"),an=Pt(kr),we=Pt(He),rs=Pt(xr),ns=Pt(_r),ss=Pt(Lr),cn=Yt?Yt.prototype:void 0,Mr=cn?cn.valueOf:void 0;function Ot(l){var h=-1,m=l==null?0:l.length;for(this.clear();++h<m;){var k=l[h];this.set(k[0],k[1])}}function is(){this.__data__=Le?Le(null):{},this.size=0}function os(l){var h=this.has(l)&&delete this.__data__[l];return this.size-=h?1:0,h}function ls(l){var h=this.__data__;if(Le){var m=h[l];return m===n?void 0:m}return Mt.call(h,l)?h[l]:void 0}function as(l){var h=this.__data__;return Le?h[l]!==void 0:Mt.call(h,l)}function cs(l,h){var m=this.__data__;return this.size+=this.has(l)?0:1,m[l]=Le&&h===void 0?n:h,this}Ot.prototype.clear=is,Ot.prototype.delete=os,Ot.prototype.get=ls,Ot.prototype.has=as,Ot.prototype.set=cs;function jt(l){var h=-1,m=l==null?0:l.length;for(this.clear();++h<m;){var k=l[h];this.set(k[0],k[1])}}function us(){this.__data__=[],this.size=0}function hs(l){var h=this.__data__,m=rr(h,l);if(m<0)return!1;var k=h.length-1;return m==k?h.pop():xe.call(h,m,1),--this.size,!0}function ds(l){var h=this.__data__,m=rr(h,l);return m<0?void 0:h[m][1]}function fs(l){return rr(this.__data__,l)>-1}function ps(l,h){var m=this.__data__,k=rr(m,l);return k<0?(++this.size,m.push([l,h])):m[k][1]=h,this}jt.prototype.clear=us,jt.prototype.delete=hs,jt.prototype.get=ds,jt.prototype.has=fs,jt.prototype.set=ps;function Vt(l){var h=-1,m=l==null?0:l.length;for(this.clear();++h<m;){var k=l[h];this.set(k[0],k[1])}}function gs(){this.size=0,this.__data__={hash:new Ot,map:new(He||jt),string:new Ot}}function ms(l){var h=ie(this,l).delete(l);return this.size-=h?1:0,h}function vs(l){return ie(this,l).get(l)}function ws(l){return ie(this,l).has(l)}function bs(l,h){var m=ie(this,l),k=m.size;return m.set(l,h),this.size+=m.size==k?0:1,this}Vt.prototype.clear=gs,Vt.prototype.delete=ms,Vt.prototype.get=vs,Vt.prototype.has=ws,Vt.prototype.set=bs;function tr(l){var h=-1,m=l==null?0:l.length;for(this.__data__=new Vt;++h<m;)this.add(l[h])}function un(l){return this.__data__.set(l,n),this}function er(l){return this.__data__.has(l)}tr.prototype.add=tr.prototype.push=un,tr.prototype.has=er;function ce(l){var h=this.__data__=new jt(l);this.size=h.size}function Er(){this.__data__=new jt,this.size=0}function ys(l){var h=this.__data__,m=h.delete(l);return this.size=h.size,m}function Cs(l){return this.__data__.get(l)}function ks(l){return this.__data__.has(l)}function xs(l,h){var m=this.__data__;if(m instanceof jt){var k=m.__data__;if(!He||k.length<e-1)return k.push([l,h]),this.size=++m.size,this;m=this.__data__=new Vt(k)}return m.set(l,h),this.size=m.size,this}ce.prototype.clear=Er,ce.prototype.delete=ys,ce.prototype.get=Cs,ce.prototype.has=ks,ce.prototype.set=xs;function _s(l,h){var m=nr(l),k=!m&&gn(l),X=!m&&!k&&sr(l),z=!m&&!k&&!X&&wn(l),ut=m||k||X||z,ct=ut?tt(l.length,String):[],At=ct.length;for(var gt in l)Mt.call(l,gt)&&!(ut&&(gt=="length"||X&&(gt=="offset"||gt=="parent")||z&&(gt=="buffer"||gt=="byteLength"||gt=="byteOffset")||Os(gt,At)))&&ct.push(gt);return ct}function rr(l,h){for(var m=l.length;m--;)if(pn(l[m][0],h))return m;return-1}function Tr(l,h,m){var k=h(l);return nr(l)?k:P(k,m(l))}function $e(l){return l==null?l===void 0?Ct:_:se&&se in Object(l)?ye(l):fn(l)}function hn(l){return he(l)&&$e(l)==a}function dn(l,h,m,k,X){return l===h?!0:l==null||h==null||!he(l)&&!he(h)?l!==l&&h!==h:Ls(l,h,m,k,dn,X)}function Ls(l,h,m,k,X,z){var ut=nr(l),ct=nr(h),At=ut?c:ue(l),gt=ct?c:ue(h);At=At==a?S:At,gt=gt==a?S:gt;var Bt=At==S,Zt=gt==S,St=At==gt;if(St&&sr(l)){if(!sr(h))return!1;ut=!0,Bt=!1}if(St&&!Bt)return z||(z=new ce),ut||wn(l)?Nr(l,h,m,k,X,z):Ns(l,h,At,m,k,X,z);if(!(m&s)){var qt=Bt&&Mt.call(l,"__wrapped__"),It=Zt&&Mt.call(h,"__wrapped__");if(qt||It){var Me=qt?l.value():l,Ce=It?h.value():h;return z||(z=new ce),X(Me,Ce,m,k,z)}}return St?(z||(z=new ce),As(l,h,m,k,X,z)):!1}function Ms(l){if(!vn(l)||js(l))return!1;var h=mn(l)?Xe:rt;return h.test(Pt(l))}function Es(l){return he(l)&&Sr(l.length)&&!!Z[$e(l)]}function Ts(l){if(!Bs(l))return Re(l);var h=[];for(var m in Object(l))Mt.call(l,m)&&m!="constructor"&&h.push(m);return h}function Nr(l,h,m,k,X,z){var ut=m&s,ct=l.length,At=h.length;if(ct!=At&&!(ut&&At>ct))return!1;var gt=z.get(l);if(gt&&z.get(h))return gt==h;var Bt=-1,Zt=!0,St=m&i?new tr:void 0;for(z.set(l,h),z.set(h,l);++Bt<ct;){var qt=l[Bt],It=h[Bt];if(k)var Me=ut?k(It,qt,Bt,h,l,z):k(qt,It,Bt,l,h,z);if(Me!==void 0){if(Me)continue;Zt=!1;break}if(St){if(!U(h,function(Ce,Pe){if(!W(St,Pe)&&(qt===Ce||X(qt,Ce,m,k,z)))return St.push(Pe)})){Zt=!1;break}}else if(!(qt===It||X(qt,It,m,k,z))){Zt=!1;break}}return z.delete(l),z.delete(h),Zt}function Ns(l,h,m,k,X,z,ut){switch(m){case T:if(l.byteLength!=h.byteLength||l.byteOffset!=h.byteOffset)return!1;l=l.buffer,h=h.buffer;case v:return!(l.byteLength!=h.byteLength||!z(new me(l),new me(h)));case d:case p:case M:return pn(+l,+h);case f:return l.name==h.name&&l.message==h.message;case H:case dt:return l==h+"";case C:var ct=vt;case lt:var At=k&s;if(ct||(ct=st),l.size!=h.size&&!At)return!1;var gt=ut.get(l);if(gt)return gt==h;k|=i,ut.set(l,h);var Bt=Nr(ct(l),ct(h),k,X,z,ut);return ut.delete(l),Bt;case ot:if(Mr)return Mr.call(l)==Mr.call(h)}return!1}function As(l,h,m,k,X,z){var ut=m&s,ct=De(l),At=ct.length,gt=De(h),Bt=gt.length;if(At!=Bt&&!ut)return!1;for(var Zt=At;Zt--;){var St=ct[Zt];if(!(ut?St in h:Mt.call(h,St)))return!1}var qt=z.get(l);if(qt&&z.get(h))return qt==h;var It=!0;z.set(l,h),z.set(h,l);for(var Me=ut;++Zt<At;){St=ct[Zt];var Ce=l[St],Pe=h[St];if(k)var Di=ut?k(Pe,Ce,St,h,l,z):k(Ce,Pe,St,l,h,z);if(!(Di===void 0?Ce===Pe||X(Ce,Pe,m,k,z):Di)){It=!1;break}Me||(Me=St=="constructor")}if(It&&!Me){var bn=l.constructor,yn=h.constructor;bn!=yn&&"constructor"in l&&"constructor"in h&&!(typeof bn=="function"&&bn instanceof bn&&typeof yn=="function"&&yn instanceof yn)&&(It=!1)}return z.delete(l),z.delete(h),It}function De(l){return Tr(l,Or,Ss)}function ie(l,h){var m=l.__data__;return Is(h)?m[typeof h=="string"?"string":"hash"]:m.map}function be(l,h){var m=V(l,h);return Ms(m)?m:void 0}function ye(l){var h=Mt.call(l,se),m=l[se];try{l[se]=void 0;var k=!0}catch{}var X=ge.call(l);return k&&(h?l[se]=m:delete l[se]),X}var Ss=Je?function(l){return l==null?[]:(l=Object(l),R(Je(l),function(h){return Ae.call(l,h)}))}:Rs,ue=$e;(kr&&ue(new kr(new ArrayBuffer(1)))!=T||He&&ue(new He)!=C||xr&&ue(xr.resolve())!=B||_r&&ue(new _r)!=lt||Lr&&ue(new Lr)!=xt)&&(ue=function(l){var h=$e(l),m=h==S?l.constructor:void 0,k=m?Pt(m):"";if(k)switch(k){case an:return T;case we:return C;case rs:return B;case ns:return lt;case ss:return xt}return h});function Os(l,h){return h=h??o,!!h&&(typeof l=="number"||nt.test(l))&&l>-1&&l%1==0&&l<h}function Is(l){var h=typeof l;return h=="string"||h=="number"||h=="symbol"||h=="boolean"?l!=="__proto__":l===null}function js(l){return!!pe&&pe in l}function Bs(l){var h=l&&l.constructor,m=typeof h=="function"&&h.prototype||Lt;return l===m}function fn(l){return ge.call(l)}function Pt(l){if(l!=null){try{return Ht.call(l)}catch{}try{return l+""}catch{}}return""}function pn(l,h){return l===h||l!==l&&h!==h}var gn=hn((function(){return arguments})())?hn:function(l){return he(l)&&Mt.call(l,"callee")&&!Ae.call(l,"callee")},nr=Array.isArray;function Ar(l){return l!=null&&Sr(l.length)&&!mn(l)}var sr=Cr||Hs;function qs(l,h){return dn(l,h)}function mn(l){if(!vn(l))return!1;var h=$e(l);return h==g||h==b||h==u||h==q}function Sr(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=o}function vn(l){var h=typeof l;return l!=null&&(h=="object"||h=="function")}function he(l){return l!=null&&typeof l=="object"}var wn=A?Q(A):Es;function Or(l){return Ar(l)?_s(l):Ts(l)}function Rs(){return[]}function Hs(){return!1}r.exports=qs})(hl,hl.exports)),hl.exports}var el={},$h;function Uy(){if($h)return el;$h=1,Object.defineProperty(el,"__esModule",{value:!0});const r=j0(),t=B0();var e;return(function(n){function s(c={},u={},d=!1){typeof c!="object"&&(c={}),typeof u!="object"&&(u={});let p=r(u);d||(p=Object.keys(p).reduce((f,g)=>(p[g]!=null&&(f[g]=p[g]),f),{}));for(const f in c)c[f]!==void 0&&u[f]===void 0&&(p[f]=c[f]);return Object.keys(p).length>0?p:void 0}n.compose=s;function i(c={},u={}){typeof c!="object"&&(c={}),typeof u!="object"&&(u={});const d=Object.keys(c).concat(Object.keys(u)).reduce((p,f)=>(t(c[f],u[f])||(p[f]=u[f]===void 0?null:u[f]),p),{});return Object.keys(d).length>0?d:void 0}n.diff=i;function o(c={},u={}){c=c||{};const d=Object.keys(u).reduce((p,f)=>(u[f]!==c[f]&&c[f]!==void 0&&(p[f]=u[f]),p),{});return Object.keys(c).reduce((p,f)=>(c[f]!==u[f]&&u[f]===void 0&&(p[f]=null),p),d)}n.invert=o;function a(c,u,d=!1){if(typeof c!="object")return u;if(typeof u!="object")return;if(!d)return u;const p=Object.keys(u).reduce((f,g)=>(c[g]===void 0&&(f[g]=u[g]),f),{});return Object.keys(p).length>0?p:void 0}n.transform=a})(e||(e={})),el.default=e,el}var rl={},Dh;function q0(){if(Dh)return rl;Dh=1,Object.defineProperty(rl,"__esModule",{value:!0});var r;return(function(t){function e(n){return typeof n.delete=="number"?n.delete:typeof n.retain=="number"?n.retain:typeof n.retain=="object"&&n.retain!==null?1:typeof n.insert=="string"?n.insert.length:1}t.length=e})(r||(r={})),rl.default=r,rl}var nl={},Ph;function zy(){if(Ph)return nl;Ph=1,Object.defineProperty(nl,"__esModule",{value:!0});const r=q0();class t{constructor(n){this.ops=n,this.index=0,this.offset=0}hasNext(){return this.peekLength()<1/0}next(n){n||(n=1/0);const s=this.ops[this.index];if(s){const i=this.offset,o=r.default.length(s);if(n>=o-i?(n=o-i,this.index+=1,this.offset=0):this.offset+=n,typeof s.delete=="number")return{delete:n};{const a={};return s.attributes&&(a.attributes=s.attributes),typeof s.retain=="number"?a.retain=n:typeof s.retain=="object"&&s.retain!==null?a.retain=s.retain:typeof s.insert=="string"?a.insert=s.insert.substr(i,n):a.insert=s.insert,a}}else return{retain:1/0}}peek(){return this.ops[this.index]}peekLength(){return this.ops[this.index]?r.default.length(this.ops[this.index])-this.offset:1/0}peekType(){const n=this.ops[this.index];return n?typeof n.delete=="number"?"delete":typeof n.retain=="number"||typeof n.retain=="object"&&n.retain!==null?"retain":"insert":"retain"}rest(){if(this.hasNext()){if(this.offset===0)return this.ops.slice(this.index);{const n=this.offset,s=this.index,i=this.next(),o=this.ops.slice(this.index);return this.offset=n,this.index=s,[i].concat(o)}}else return[]}}return nl.default=t,nl}var Uh;function Fy(){return Uh||(Uh=1,(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AttributeMap=t.OpIterator=t.Op=void 0;const e=I0(),n=j0(),s=B0(),i=Uy();t.AttributeMap=i.default;const o=q0();t.Op=o.default;const a=zy();t.OpIterator=a.default;const c="\0",u=(p,f)=>{if(typeof p!="object"||p===null)throw new Error(`cannot retain a ${typeof p}`);if(typeof f!="object"||f===null)throw new Error(`cannot retain a ${typeof f}`);const g=Object.keys(p)[0];if(!g||g!==Object.keys(f)[0])throw new Error(`embed types not matched: ${g} != ${Object.keys(f)[0]}`);return[g,p[g],f[g]]};class d{constructor(f){Array.isArray(f)?this.ops=f:f!=null&&Array.isArray(f.ops)?this.ops=f.ops:this.ops=[]}static registerEmbed(f,g){this.handlers[f]=g}static unregisterEmbed(f){delete this.handlers[f]}static getHandler(f){const g=this.handlers[f];if(!g)throw new Error(`no handlers for embed type "${f}"`);return g}insert(f,g){const b={};return typeof f=="string"&&f.length===0?this:(b.insert=f,g!=null&&typeof g=="object"&&Object.keys(g).length>0&&(b.attributes=g),this.push(b))}delete(f){return f<=0?this:this.push({delete:f})}retain(f,g){if(typeof f=="number"&&f<=0)return this;const b={retain:f};return g!=null&&typeof g=="object"&&Object.keys(g).length>0&&(b.attributes=g),this.push(b)}push(f){let g=this.ops.length,b=this.ops[g-1];if(f=n(f),typeof b=="object"){if(typeof f.delete=="number"&&typeof b.delete=="number")return this.ops[g-1]={delete:b.delete+f.delete},this;if(typeof b.delete=="number"&&f.insert!=null&&(g-=1,b=this.ops[g-1],typeof b!="object"))return this.ops.unshift(f),this;if(s(f.attributes,b.attributes)){if(typeof f.insert=="string"&&typeof b.insert=="string")return this.ops[g-1]={insert:b.insert+f.insert},typeof f.attributes=="object"&&(this.ops[g-1].attributes=f.attributes),this;if(typeof f.retain=="number"&&typeof b.retain=="number")return this.ops[g-1]={retain:b.retain+f.retain},typeof f.attributes=="object"&&(this.ops[g-1].attributes=f.attributes),this}}return g===this.ops.length?this.ops.push(f):this.ops.splice(g,0,f),this}chop(){const f=this.ops[this.ops.length-1];return f&&typeof f.retain=="number"&&!f.attributes&&this.ops.pop(),this}filter(f){return this.ops.filter(f)}forEach(f){this.ops.forEach(f)}map(f){return this.ops.map(f)}partition(f){const g=[],b=[];return this.forEach(C=>{(f(C)?g:b).push(C)}),[g,b]}reduce(f,g){return this.ops.reduce(f,g)}changeLength(){return this.reduce((f,g)=>g.insert?f+o.default.length(g):g.delete?f-g.delete:f,0)}length(){return this.reduce((f,g)=>f+o.default.length(g),0)}slice(f=0,g=1/0){const b=[],C=new a.default(this.ops);let M=0;for(;M<g&&C.hasNext();){let _;M<f?_=C.next(f-M):(_=C.next(g-M),b.push(_)),M+=o.default.length(_)}return new d(b)}compose(f){const g=new a.default(this.ops),b=new a.default(f.ops),C=[],M=b.peek();if(M!=null&&typeof M.retain=="number"&&M.attributes==null){let S=M.retain;for(;g.peekType()==="insert"&&g.peekLength()<=S;)S-=g.peekLength(),C.push(g.next());M.retain-S>0&&b.next(M.retain-S)}const _=new d(C);for(;g.hasNext()||b.hasNext();)if(b.peekType()==="insert")_.push(b.next());else if(g.peekType()==="delete")_.push(g.next());else{const S=Math.min(g.peekLength(),b.peekLength()),B=g.next(S),q=b.next(S);if(q.retain){const H={};if(typeof B.retain=="number")H.retain=typeof q.retain=="number"?S:q.retain;else if(typeof q.retain=="number")B.retain==null?H.insert=B.insert:H.retain=B.retain;else{const dt=B.retain==null?"insert":"retain",[ot,Ct,xt]=u(B[dt],q.retain),v=d.getHandler(ot);H[dt]={[ot]:v.compose(Ct,xt,dt==="retain")}}const lt=i.default.compose(B.attributes,q.attributes,typeof B.retain=="number");if(lt&&(H.attributes=lt),_.push(H),!b.hasNext()&&s(_.ops[_.ops.length-1],H)){const dt=new d(g.rest());return _.concat(dt).chop()}}else typeof q.delete=="number"&&(typeof B.retain=="number"||typeof B.retain=="object"&&B.retain!==null)&&_.push(q)}return _.chop()}concat(f){const g=new d(this.ops.slice());return f.ops.length>0&&(g.push(f.ops[0]),g.ops=g.ops.concat(f.ops.slice(1))),g}diff(f,g){if(this.ops===f.ops)return new d;const b=[this,f].map(B=>B.map(q=>{if(q.insert!=null)return typeof q.insert=="string"?q.insert:c;const H=B===f?"on":"with";throw new Error("diff() called "+H+" non-document")}).join("")),C=new d,M=e(b[0],b[1],g,!0),_=new a.default(this.ops),S=new a.default(f.ops);return M.forEach(B=>{let q=B[1].length;for(;q>0;){let H=0;switch(B[0]){case e.INSERT:H=Math.min(S.peekLength(),q),C.push(S.next(H));break;case e.DELETE:H=Math.min(q,_.peekLength()),_.next(H),C.delete(H);break;case e.EQUAL:H=Math.min(_.peekLength(),S.peekLength(),q);const lt=_.next(H),dt=S.next(H);s(lt.insert,dt.insert)?C.retain(H,i.default.diff(lt.attributes,dt.attributes)):C.push(dt).delete(H);break}q-=H}}),C.chop()}eachLine(f,g=`
`){const b=new a.default(this.ops);let C=new d,M=0;for(;b.hasNext();){if(b.peekType()!=="insert")return;const _=b.peek(),S=o.default.length(_)-b.peekLength(),B=typeof _.insert=="string"?_.insert.indexOf(g,S)-S:-1;if(B<0)C.push(b.next());else if(B>0)C.push(b.next(B));else{if(f(C,b.next(1).attributes||{},M)===!1)return;M+=1,C=new d}}C.length()>0&&f(C,{},M)}invert(f){const g=new d;return this.reduce((b,C)=>{if(C.insert)g.delete(o.default.length(C));else{if(typeof C.retain=="number"&&C.attributes==null)return g.retain(C.retain),b+C.retain;if(C.delete||typeof C.retain=="number"){const M=C.delete||C.retain;return f.slice(b,b+M).forEach(_=>{C.delete?g.push(_):C.retain&&C.attributes&&g.retain(o.default.length(_),i.default.invert(C.attributes,_.attributes))}),b+M}else if(typeof C.retain=="object"&&C.retain!==null){const M=f.slice(b,b+1),_=new a.default(M.ops).next(),[S,B,q]=u(C.retain,_.insert),H=d.getHandler(S);return g.retain({[S]:H.invert(B,q)},i.default.invert(C.attributes,_.attributes)),b+1}}return b},0),g.chop()}transform(f,g=!1){if(g=!!g,typeof f=="number")return this.transformPosition(f,g);const b=f,C=new a.default(this.ops),M=new a.default(b.ops),_=new d;for(;C.hasNext()||M.hasNext();)if(C.peekType()==="insert"&&(g||M.peekType()!=="insert"))_.retain(o.default.length(C.next()));else if(M.peekType()==="insert")_.push(M.next());else{const S=Math.min(C.peekLength(),M.peekLength()),B=C.next(S),q=M.next(S);if(B.delete)continue;if(q.delete)_.push(q);else{const H=B.retain,lt=q.retain;let dt=typeof lt=="object"&&lt!==null?lt:S;if(typeof H=="object"&&H!==null&&typeof lt=="object"&&lt!==null){const ot=Object.keys(H)[0];if(ot===Object.keys(lt)[0]){const Ct=d.getHandler(ot);Ct&&(dt={[ot]:Ct.transform(H[ot],lt[ot],g)})}}_.retain(dt,i.default.transform(B.attributes,q.attributes,g))}}return _.chop()}transformPosition(f,g=!1){g=!!g;const b=new a.default(this.ops);let C=0;for(;b.hasNext()&&C<=f;){const M=b.peekLength(),_=b.peekType();if(b.next(),_==="delete"){f-=Math.min(M,f-C);continue}else _==="insert"&&(C<f||!g)&&(f+=M);C+=M}return f}}d.Op=o.default,d.OpIterator=a.default,d.AttributeMap=i.default,d.handlers={},t.default=d,r.exports=d,r.exports.default=d})(Ia,Ia.exports)),Ia.exports}var Vy=Fy();const R0=L0(Vy);class $i extends Gl{static value(){}optimize(){(this.prev||this.next)&&this.remove()}length(){return 0}value(){return""}}$i.blotName="break";$i.tagName="BR";let H0=class extends Py{};const dl=class vi extends S0{static compare(t,e){const n=vi.order.indexOf(t),s=vi.order.indexOf(e);return n>=0||s>=0?n-s:t===e?0:t<e?-1:1}formatAt(t,e,n,s){if(vi.compare(this.statics.blotName,n)<0&&this.scroll.query(n,Rt.BLOT)){const i=this.isolate(t,e);s&&i.wrap(n,s)}else super.formatAt(t,e,n,s)}optimize(t){if(super.optimize(t),this.parent instanceof vi&&vi.compare(this.statics.blotName,this.parent.statics.blotName)>0){const e=this.parent.isolate(this.offset(),this.length());this.moveChildren(e),e.wrap(this)}}};G(dl,"allowedChildren",[dl,$i,Gl,H0]),G(dl,"order",["cursor","inline","link","underline","strike","italic","bold","script","code"]);let Zy=dl;const zh=1;class Do extends yc{constructor(){super(...arguments),G(this,"cache",{})}delta(){return this.cache.delta==null&&(this.cache.delta=Wy(this)),this.cache.delta}deleteAt(t,e){super.deleteAt(t,e),this.cache={}}formatAt(t,e,n,s){e<=0||(this.scroll.query(n,Rt.BLOCK)?t+e===this.length()&&this.format(n,s):super.formatAt(t,Math.min(e,this.length()-t-1),n,s),this.cache={})}insertAt(t,e,n){if(n!=null){super.insertAt(t,e,n),this.cache={};return}if(e.length===0)return;const s=e.split(`
`),i=s.shift();i.length>0&&(t<this.length()-1||this.children.tail==null?super.insertAt(Math.min(t,this.length()-1),i):this.children.tail.insertAt(this.children.tail.length(),i),this.cache={});let o=this;s.reduce((a,c)=>(o=o.split(a,!0),o.insertAt(0,c),c.length),t+i.length)}insertBefore(t,e){const{head:n}=this.children;super.insertBefore(t,e),n instanceof $i&&n.remove(),this.cache={}}length(){return this.cache.length==null&&(this.cache.length=super.length()+zh),this.cache.length}moveChildren(t,e){super.moveChildren(t,e),this.cache={}}optimize(t){super.optimize(t),this.cache={}}path(t){return super.path(t,!0)}removeChild(t){super.removeChild(t),this.cache={}}split(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e&&(t===0||t>=this.length()-zh)){const s=this.clone();return t===0?(this.parent.insertBefore(s,this),this):(this.parent.insertBefore(s,this.next),s)}const n=super.split(t,e);return this.cache={},n}}Do.blotName="block";Do.tagName="P";Do.defaultChild=$i;Do.allowedChildren=[$i,Zy,Gl,H0];class Ky extends Gl{attach(){super.attach(),this.attributes=new k1(this.domNode)}delta(){return new R0().insert(this.value(),{...this.formats(),...this.attributes.values()})}format(t,e){const n=this.scroll.query(t,Rt.BLOCK_ATTRIBUTE);n!=null&&this.attributes.attribute(n,e)}formatAt(t,e,n,s){this.format(n,s)}insertAt(t,e,n){if(n!=null){super.insertAt(t,e,n);return}const s=e.split(`
`),i=s.pop(),o=s.map(c=>{const u=this.scroll.create(Do.blotName);return u.insertAt(0,c),u}),a=this.split(t);o.forEach(c=>{this.parent.insertBefore(c,a)}),i&&this.parent.insertBefore(this.scroll.create("text",i),a)}}Ky.scope=Rt.BLOCK_BLOT;function Wy(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.descendants($o).reduce((e,n)=>n.length()===0?e:e.insert(n.value(),xc(n,{},t)),new R0).insert(`
`,xc(r))}function xc(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return r==null||("formats"in r&&typeof r.formats=="function"&&(t={...t,...r.formats()},e&&delete t["code-token"]),r.parent==null||r.parent.statics.blotName==="scroll"||r.parent.statics.scope!==r.statics.scope)?t:xc(r.parent,t,e)}x0.reduce((r,t)=>(r[t]=`popover--placement-${t}`,r),{});function _c(r){if(!r)return r;if(typeof r.toJSON=="function"&&(r=r.toJSON()),Array.isArray(r))return r.map(_c);if(typeof r=="object"){const t={};return Object.keys(r).forEach(e=>t[e]=_c(r[e])),t}return r}const Gy={};function Wn(r,t,e=Gy){if(r===t)return!0;const n=typeof r,s=typeof r;if(n==="number"&&s==="number"&&isNaN(r)&&isNaN(t))return!0;if(!r||!t||n!=="object"||s!=="object"||r.constructor!==t.constructor)return!1;if(r.valueOf()!==r)return Wn(r.valueOf(),t.valueOf(),e);const i=e.shallow?Yy:Wn;if(typeof r[Symbol.iterator]=="function"){const c=r[Symbol.iterator](),u=t[Symbol.iterator]();let d=c.next(),p=u.next();for(;!d.done&&!p.done;){if(!i(d.value,p.value,e))return!1;d=c.next(),p=u.next()}return d.done===p.done}let o=Object.keys(r),a=Object.keys(t);if(e.excludeProps){const c=Qy(e.excludeProps);o=o.filter(c),a=a.filter(c)}return(e.partial||o.length===a.length)&&a.every(c=>r.hasOwnProperty(c)&&i(t[c],r[c],e))}function Yy(r,t){return r===t}function Qy(r){return t=>!r.has(t)}function xn(r){return r===Object(r)&&!Array.isArray(r)}function $0(r){if(r==null)return!0;if(!xn(r))return!1;for(const t in r)if(!$0(r[t]))return!1;return!0}var Lc;(function(r){function t(i={},o={},a){typeof i!="object"&&(i={}),typeof o!="object"&&(o={});let c=_c(o);for(const u in i)xn(i[u])&&xn(c[u])&&(c[u]=t(i[u],c[u],a));a||(c=Object.keys(c).reduce((u,d)=>($0(c[d])||(u[d]=c[d]),u),{}));for(const u in i)i[u]!==void 0&&o[u]===void 0&&(c[u]=i[u]);return Object.keys(c).length>0?c:void 0}r.compose=t;function e(i={},o={}){typeof i!="object"&&(i={}),typeof o!="object"&&(o={});const a=Object.keys(i).concat(Object.keys(o)).reduce((c,u)=>(Wn(i[u],o[u])||(o[u]===void 0?c[u]=null:xn(i[u])&&xn(o[u])?c[u]=e(i[u],o[u]):c[u]=o[u]),c),{});return Object.keys(a).length>0?a:void 0}r.diff=e;function n(i={},o={}){i=i||{};const a=Object.keys(o).reduce((c,u)=>(!Wn(o[u],i[u])&&i[u]!==void 0&&(xn(i[u])&&xn(o[u])?c[u]=n(i[u],o[u]):c[u]=o[u]),c),{});return Object.keys(i).reduce((c,u)=>(i[u]!==o[u]&&o[u]===void 0&&(c[u]=null),c),a)}r.invert=n;function s(i,o,a=!1){if(typeof i!="object")return o;if(typeof o!="object")return;if(!a)return o;const c=Object.keys(o).reduce((u,d)=>(i[d]===void 0?u[d]=o[d]:xn(i[d])&&xn(o[d])&&(u[d]=s(i[d],o[d],!0)),u),{});return Object.keys(c).length>0?c:void 0}r.transform=s})(Lc||(Lc={}));const Ji=Lc;var Xy=I0();const sl=L0(Xy);var Eo;(function(r){function t(n){return new Jy(n)}r.iterator=t;function e(n){return typeof n.delete=="number"?n.delete:typeof n.retain=="number"?n.retain:typeof n.insert=="string"?n.insert.length:1}r.length=e})(Eo||(Eo={}));const Ee=Eo;class Jy{constructor(t){this.ops=t,this.index=0,this.offset=0}hasNext(){return!!this.peek()}next(t){t||(t=1/0);const e=this.ops[this.index];if(e){const n=this.offset,s=Eo.length(e);if(t>=s-n?(t=s-n,this.index+=1,this.offset=0):this.offset+=t,typeof e.delete=="number")return{delete:t};{if(s===t)return e;const i={};return e.attributes&&(i.attributes=e.attributes),typeof e.retain=="number"?i.retain=t:typeof e.insert=="string"?i.insert=e.insert.substr(n,t):i.insert=e.insert,i}}else return{retain:1/0}}peek(){return this.ops[this.index]}peekLength(){return this.ops[this.index]?Eo.length(this.ops[this.index])-this.offset:1/0}peekType(){const t=this.ops[this.index];return t?typeof t.delete=="number"?"delete":typeof t.retain=="number"?"retain":"insert":"retain"}rest(){if(this.hasNext()){if(this.offset===0)return this.ops.slice(this.index);{const t=this.offset,e=this.index,n=this.next(),s=this.ops.slice(this.index);return this.offset=t,this.index=e,[n].concat(s)}}else return[]}}const tC="\0";class ze{constructor(t){Array.isArray(t)?this.ops=t:t!=null&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]}insert(t,e){const n={};return typeof t=="string"&&t.length===0?this:(n.insert=t,e!=null&&typeof e=="object"&&Object.keys(e).length>0&&(n.attributes=e),this.push(n))}delete(t){return t<=0?this:this.push({delete:t})}retain(t,e){if(t<=0)return this;const n={retain:t};return e!=null&&typeof e=="object"&&Object.keys(e).length>0&&(n.attributes=e),this.push(n)}push(t){let e=this.ops.length,n=this.ops[e-1];if(typeof n=="object"){if(typeof t.delete=="number"&&typeof n.delete=="number")return this.ops[e-1]={delete:n.delete+t.delete},this;if(typeof n.delete=="number"&&t.insert!=null&&(e-=1,n=this.ops[e-1],typeof n!="object"))return this.ops.unshift(t),this;if(Wn(t.attributes,n.attributes)){if(typeof t.insert=="string"&&typeof n.insert=="string")return this.ops[e-1]={insert:n.insert+t.insert},typeof t.attributes=="object"&&(this.ops[e-1].attributes=t.attributes),this;if(typeof t.retain=="number"&&typeof n.retain=="number")return this.ops[e-1]={retain:n.retain+t.retain},typeof t.attributes=="object"&&(this.ops[e-1].attributes=t.attributes),this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this}chop(){const t=this.ops[this.ops.length-1];return t&&t.retain&&!t.attributes&&this.ops.pop(),this}filter(t){return this.ops.filter(t)}forEach(t){this.ops.forEach(t)}map(t){return this.ops.map(t)}partition(t){const e=[],n=[];return this.forEach(s=>{(t(s)?e:n).push(s)}),[e,n]}reduce(t,e){return this.ops.reduce(t,e)}changeLength(){return this.reduce((t,e)=>e.insert?t+Ee.length(e):e.delete?t-e.delete:t,0)}length(){return this.reduce((t,e)=>t+Ee.length(e),0)}slice(t=0,e=1/0){const n=[],s=Ee.iterator(this.ops);let i=0;for(;i<e&&s.hasNext();){let o;i<t?o=s.next(t-i):(o=s.next(e-i),n.push(o)),i+=Ee.length(o)}return new ze(n)}compose(t,e){const n=Ee.iterator(this.ops),s=Ee.iterator(t.ops),i=[],o=s.peek();if(o!=null&&typeof o.retain=="number"&&o.attributes==null){let c=o.retain;for(;n.peekType()==="insert"&&n.peekLength()<=c;)c-=n.peekLength(),i.push(n.next());o.retain-c>0&&s.next(o.retain-c)}const a=new ze(i);for(;n.hasNext()||s.hasNext();)if(s.peekType()==="insert")a.push(s.next());else if(n.peekType()==="delete")a.push(n.next());else{const c=Math.min(n.peekLength(),s.peekLength()),u=n.next(c),d=s.next(c);if(typeof d.retain=="number"){let p;const f=d.attributes&&Ji.compose(u.attributes,d.attributes,!e&&typeof u.retain=="number");if(d.attributes&&!Wn(f,u.attributes)?(p={},typeof u.retain=="number"?p.retain=c:p.insert=u.insert,f&&(p.attributes=f)):u.retain===1/0?p=d:p=u,a.push(p),d.retain===1/0||!s.hasNext()&&Wn(a.ops[a.ops.length-1],p)){const g=new ze(n.rest());return a.concat(g).chop()}}else typeof d.delete=="number"&&typeof u.retain=="number"&&a.push(d)}return a.chop()}concat(t){const e=new ze(this.ops.slice());return t.ops.length>0&&(e.push(t.ops[0]),e.ops=e.ops.concat(t.ops.slice(1))),e}diff(t,e){if(this.ops===t.ops)return new ze;const n=[this,t].map(c=>c.map(u=>{if(u.insert!=null)return typeof u.insert=="string"?u.insert:tC;const d=c===t?"on":"with";throw new Error("diff() called "+d+" non-document")}).join("")),s=new ze,i=sl(n[0],n[1],e),o=Ee.iterator(this.ops),a=Ee.iterator(t.ops);return i.forEach(c=>{let u=c[1].length;for(;u>0;){let d=0;switch(c[0]){case sl.INSERT:d=Math.min(a.peekLength(),u),s.push(a.next(d));break;case sl.DELETE:d=Math.min(u,o.peekLength()),o.next(d),s.delete(d);break;case sl.EQUAL:d=Math.min(o.peekLength(),a.peekLength(),u);const p=o.next(d),f=a.next(d);Wn(p.insert,f.insert)?s.retain(d,Ji.diff(p.attributes,f.attributes)):s.push(f).delete(d);break}u-=d}}),s.chop()}eachLine(t,e=`
`){const n=Ee.iterator(this.ops);let s=new ze,i=0;for(;n.hasNext();){if(n.peekType()!=="insert")return;const o=n.peek(),a=Ee.length(o)-n.peekLength(),c=typeof o.insert=="string"?o.insert.indexOf(e,a)-a:-1;if(c<0)s.push(n.next());else if(c>0)s.push(n.next(c));else{if(t(s,n.next(1).attributes||{},i)===!1)return;i+=1,s=new ze}}s.length()>0&&t(s,{},i)}invert(t){const e=new ze;return this.reduce((n,s)=>{if(s.insert)e.delete(Ee.length(s));else{if(s.retain&&s.attributes==null)return e.retain(s.retain),n+s.retain;if(s.delete||s.retain){const i=s.delete||s.retain;return t.slice(n,n+i).forEach(o=>{s.delete?e.push(o):s.retain&&s.attributes&&e.retain(Ee.length(o),Ji.invert(s.attributes,o.attributes))}),n+i}}return n},0),e.chop()}transform(t,e=!1){if(e=!!e,typeof t=="number")return this.transformPosition(t,e);const n=t,s=Ee.iterator(this.ops),i=Ee.iterator(n.ops),o=new ze;for(;s.hasNext()||i.hasNext();)if(s.peekType()==="insert"&&(e||i.peekType()!=="insert"))o.retain(Ee.length(s.next()));else if(i.peekType()==="insert")o.push(i.next());else{const a=Math.min(s.peekLength(),i.peekLength()),c=s.next(a),u=i.next(a);if(c.delete)continue;u.delete?o.push(u):o.retain(a,Ji.transform(c.attributes,u.attributes,e))}return o.chop()}transformPosition(t,e=!1){e=!!e;const n=Ee.iterator(this.ops);let s=0;for(;n.hasNext()&&s<=t;){const i=n.peekLength(),o=n.peekType();if(n.next(),o==="delete"){t-=Math.min(i,t-s);continue}else o==="insert"&&(s<t||!e)&&(t+=i);s+=i}return t}}ze.Op=Ee;ze.AttributeMap=Ji;typeof Be=="object"&&(Be.exports=ze,Be.exports.default=ze);({...u0.reduce((r,t)=>(r[t]=`project--${t}`,r),{}),...x9.reduce((r,t)=>(r[t]=`project--${t}`,r),{})});const D0=6048e5,eC=6e4,rC=36e5,nC=1e3,Fh=Symbol.for("constructDateFrom");function hr(r,t){return typeof r=="function"?r(t):r&&typeof r=="object"&&Fh in r?r[Fh](t):r instanceof Date?new r.constructor(t):new Date(t)}function dr(r,t){return hr(t||r,r)}function P0(r,t,e){const n=dr(r,e==null?void 0:e.in);return isNaN(t)?hr((e==null?void 0:e.in)||r,NaN):(t&&n.setDate(n.getDate()+t),n)}let sC={};function Yl(){return sC}function Jn(r,t){var e,n,s,i;const o=Yl(),a=(t==null?void 0:t.weekStartsOn)??((n=(e=t==null?void 0:t.locale)==null?void 0:e.options)==null?void 0:n.weekStartsOn)??o.weekStartsOn??((i=(s=o.locale)==null?void 0:s.options)==null?void 0:i.weekStartsOn)??0,c=dr(r,t==null?void 0:t.in),u=c.getDay(),d=(u<a?7:0)+u-a;return c.setDate(c.getDate()-d),c.setHours(0,0,0,0),c}function Ri(r,t){return Jn(r,{...t,weekStartsOn:1})}function iC(r,t){const e=dr(r,void 0),n=e.getFullYear(),s=hr(e,0);s.setFullYear(n+1,0,4),s.setHours(0,0,0,0);const i=Ri(s),o=hr(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const a=Ri(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=a.getTime()?n:n-1}function U0(r){const t=dr(r),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+r-+e}function oC(r,t){const e=iC(r),n=hr(r,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),Ri(n)}function lC(r,t){const e=dr(r,void 0),n=+Ri(e)-+oC(e);return Math.round(n/D0)+1}function z0(r,t){var e,n,s,i;const o=dr(r,t==null?void 0:t.in),a=o.getFullYear(),c=Yl(),u=(t==null?void 0:t.firstWeekContainsDate)??((n=(e=t==null?void 0:t.locale)==null?void 0:e.options)==null?void 0:n.firstWeekContainsDate)??c.firstWeekContainsDate??((i=(s=c.locale)==null?void 0:s.options)==null?void 0:i.firstWeekContainsDate)??1,d=hr((t==null?void 0:t.in)||r,0);d.setFullYear(a+1,0,u),d.setHours(0,0,0,0);const p=Jn(d,t),f=hr((t==null?void 0:t.in)||r,0);f.setFullYear(a,0,u),f.setHours(0,0,0,0);const g=Jn(f,t);return+o>=+p?a+1:+o>=+g?a:a-1}function aC(r,t){var e,n,s,i;const o=Yl(),a=(t==null?void 0:t.firstWeekContainsDate)??((n=(e=t==null?void 0:t.locale)==null?void 0:e.options)==null?void 0:n.firstWeekContainsDate)??o.firstWeekContainsDate??((i=(s=o.locale)==null?void 0:s.options)==null?void 0:i.firstWeekContainsDate)??1,c=z0(r,t),u=hr((t==null?void 0:t.in)||r,0);return u.setFullYear(c,0,a),u.setHours(0,0,0,0),Jn(u,t)}function cC(r,t){const e=dr(r,t==null?void 0:t.in),n=+Jn(e,t)-+aC(e,t);return Math.round(n/D0)+1}function uC(r,t){const e=dr(r,void 0).getDay();return e===0?7:e}class hC{constructor(){G(this,"subPriority",0)}validate(t,e){return!0}}class dC extends hC{constructor(t,e,n,s,i){super(),this.value=t,this.validateValue=e,this.setValue=n,this.priority=s,i&&(this.subPriority=i)}validate(t,e){return this.validateValue(t,this.value,e)}set(t,e,n){return this.setValue(t,e,this.value,n)}}class zt{run(t,e,n,s){const i=this.parse(t,e,n,s);return i?{setter:new dC(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(t,e,n){return!0}}class fC extends zt{constructor(){super(...arguments),G(this,"priority",140),G(this,"incompatibleTokens",["R","u","t","T"])}parse(t,e,n){switch(e){case"G":case"GG":case"GGG":return n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"});case"GGGGG":return n.era(t,{width:"narrow"});case"GGGG":default:return n.era(t,{width:"wide"})||n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"})}}set(t,e,n){return e.era=n,t.setFullYear(n,0,1),t.setHours(0,0,0,0),t}}const de={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Xr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function fe(r,t){return r&&{value:t(r.value),rest:r.rest}}function oe(r,t){const e=t.match(r);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function Jr(r,t){const e=t.match(r);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};const n=e[1]==="+"?1:-1,s=e[2]?parseInt(e[2],10):0,i=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:n*(s*rC+i*eC+o*nC),rest:t.slice(e[0].length)}}function F0(r){return oe(de.anyDigitsSigned,r)}function ae(r,t){switch(r){case 1:return oe(de.singleDigit,t);case 2:return oe(de.twoDigits,t);case 3:return oe(de.threeDigits,t);case 4:return oe(de.fourDigits,t);default:return oe(new RegExp("^\\d{1,"+r+"}"),t)}}function V0(r,t){switch(r){case 1:return oe(de.singleDigitSigned,t);case 2:return oe(de.twoDigitsSigned,t);case 3:return oe(de.threeDigitsSigned,t);case 4:return oe(de.fourDigitsSigned,t);default:return oe(new RegExp("^-?\\d{1,"+r+"}"),t)}}function x1(r){switch(r){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Z0(r,t){const e=t>0,n=e?t:1-t;let s;if(n<=50)s=r||100;else{const i=n+50,o=Math.trunc(i/100)*100,a=r>=i%100;s=r+o-(a?100:0)}return e?s:1-s}function K0(r){return r%400===0||r%4===0&&r%100!==0}class pC extends zt{constructor(){super(...arguments),G(this,"priority",130),G(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(t,e,n){const s=i=>({year:i,isTwoDigitYear:e==="yy"});switch(e){case"y":return fe(ae(4,t),s);case"yo":return fe(n.ordinalNumber(t,{unit:"year"}),s);default:return fe(ae(e.length,t),s)}}validate(t,e){return e.isTwoDigitYear||e.year>0}set(t,e,n){const s=t.getFullYear();if(n.isTwoDigitYear){const o=Z0(n.year,s);return t.setFullYear(o,0,1),t.setHours(0,0,0,0),t}const i=!("era"in e)||e.era===1?n.year:1-n.year;return t.setFullYear(i,0,1),t.setHours(0,0,0,0),t}}class gC extends zt{constructor(){super(...arguments),G(this,"priority",130),G(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(t,e,n){const s=i=>({year:i,isTwoDigitYear:e==="YY"});switch(e){case"Y":return fe(ae(4,t),s);case"Yo":return fe(n.ordinalNumber(t,{unit:"year"}),s);default:return fe(ae(e.length,t),s)}}validate(t,e){return e.isTwoDigitYear||e.year>0}set(t,e,n,s){const i=z0(t,s);if(n.isTwoDigitYear){const a=Z0(n.year,i);return t.setFullYear(a,0,s.firstWeekContainsDate),t.setHours(0,0,0,0),Jn(t,s)}const o=!("era"in e)||e.era===1?n.year:1-n.year;return t.setFullYear(o,0,s.firstWeekContainsDate),t.setHours(0,0,0,0),Jn(t,s)}}class mC extends zt{constructor(){super(...arguments),G(this,"priority",130),G(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(t,e){return V0(e==="R"?4:e.length,t)}set(t,e,n){const s=hr(t,0);return s.setFullYear(n,0,4),s.setHours(0,0,0,0),Ri(s)}}class vC extends zt{constructor(){super(...arguments),G(this,"priority",130),G(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(t,e){return V0(e==="u"?4:e.length,t)}set(t,e,n){return t.setFullYear(n,0,1),t.setHours(0,0,0,0),t}}class wC extends zt{constructor(){super(...arguments),G(this,"priority",120),G(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,e,n){switch(e){case"Q":case"QQ":return ae(e.length,t);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(t,{width:"wide",context:"formatting"})||n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=1&&e<=4}set(t,e,n){return t.setMonth((n-1)*3,1),t.setHours(0,0,0,0),t}}class bC extends zt{constructor(){super(...arguments),G(this,"priority",120),G(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,e,n){switch(e){case"q":case"qq":return ae(e.length,t);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(t,{width:"wide",context:"standalone"})||n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=1&&e<=4}set(t,e,n){return t.setMonth((n-1)*3,1),t.setHours(0,0,0,0),t}}class yC extends zt{constructor(){super(...arguments),G(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),G(this,"priority",110)}parse(t,e,n){const s=i=>i-1;switch(e){case"M":return fe(oe(de.month,t),s);case"MM":return fe(ae(2,t),s);case"Mo":return fe(n.ordinalNumber(t,{unit:"month"}),s);case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(t,{width:"wide",context:"formatting"})||n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=11}set(t,e,n){return t.setMonth(n,1),t.setHours(0,0,0,0),t}}class CC extends zt{constructor(){super(...arguments),G(this,"priority",110),G(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(t,e,n){const s=i=>i-1;switch(e){case"L":return fe(oe(de.month,t),s);case"LL":return fe(ae(2,t),s);case"Lo":return fe(n.ordinalNumber(t,{unit:"month"}),s);case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(t,{width:"wide",context:"standalone"})||n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=0&&e<=11}set(t,e,n){return t.setMonth(n,1),t.setHours(0,0,0,0),t}}function kC(r,t,e){const n=dr(r,e==null?void 0:e.in),s=cC(n,e)-t;return n.setDate(n.getDate()-s*7),dr(n,e==null?void 0:e.in)}class xC extends zt{constructor(){super(...arguments),G(this,"priority",100),G(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(t,e,n){switch(e){case"w":return oe(de.week,t);case"wo":return n.ordinalNumber(t,{unit:"week"});default:return ae(e.length,t)}}validate(t,e){return e>=1&&e<=53}set(t,e,n,s){return Jn(kC(t,n,s),s)}}function _C(r,t,e){const n=dr(r,void 0),s=lC(n)-t;return n.setDate(n.getDate()-s*7),n}class LC extends zt{constructor(){super(...arguments),G(this,"priority",100),G(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(t,e,n){switch(e){case"I":return oe(de.week,t);case"Io":return n.ordinalNumber(t,{unit:"week"});default:return ae(e.length,t)}}validate(t,e){return e>=1&&e<=53}set(t,e,n){return Ri(_C(t,n))}}const MC=[31,28,31,30,31,30,31,31,30,31,30,31],EC=[31,29,31,30,31,30,31,31,30,31,30,31];class TC extends zt{constructor(){super(...arguments),G(this,"priority",90),G(this,"subPriority",1),G(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(t,e,n){switch(e){case"d":return oe(de.date,t);case"do":return n.ordinalNumber(t,{unit:"date"});default:return ae(e.length,t)}}validate(t,e){const n=t.getFullYear(),s=K0(n),i=t.getMonth();return s?e>=1&&e<=EC[i]:e>=1&&e<=MC[i]}set(t,e,n){return t.setDate(n),t.setHours(0,0,0,0),t}}class NC extends zt{constructor(){super(...arguments),G(this,"priority",90),G(this,"subpriority",1),G(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(t,e,n){switch(e){case"D":case"DD":return oe(de.dayOfYear,t);case"Do":return n.ordinalNumber(t,{unit:"date"});default:return ae(e.length,t)}}validate(t,e){const n=t.getFullYear();return K0(n)?e>=1&&e<=366:e>=1&&e<=365}set(t,e,n){return t.setMonth(0,n),t.setHours(0,0,0,0),t}}function _1(r,t,e){var n,s,i,o;const a=Yl(),c=(e==null?void 0:e.weekStartsOn)??((s=(n=e==null?void 0:e.locale)==null?void 0:n.options)==null?void 0:s.weekStartsOn)??a.weekStartsOn??((o=(i=a.locale)==null?void 0:i.options)==null?void 0:o.weekStartsOn)??0,u=dr(r,e==null?void 0:e.in),d=u.getDay(),p=(t%7+7)%7,f=7-c,g=t<0||t>6?t-(d+f)%7:(p+f)%7-(d+f)%7;return P0(u,g,e)}class AC extends zt{constructor(){super(...arguments),G(this,"priority",90),G(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(t,e,n){switch(e){case"E":case"EE":case"EEE":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return n.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=6}set(t,e,n,s){return t=_1(t,n,s),t.setHours(0,0,0,0),t}}class SC extends zt{constructor(){super(...arguments),G(this,"priority",90),G(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(t,e,n,s){const i=o=>{const a=Math.floor((o-1)/7)*7;return(o+s.weekStartsOn+6)%7+a};switch(e){case"e":case"ee":return fe(ae(e.length,t),i);case"eo":return fe(n.ordinalNumber(t,{unit:"day"}),i);case"eee":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeeee":return n.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}}validate(t,e){return e>=0&&e<=6}set(t,e,n,s){return t=_1(t,n,s),t.setHours(0,0,0,0),t}}class OC extends zt{constructor(){super(...arguments),G(this,"priority",90),G(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(t,e,n,s){const i=o=>{const a=Math.floor((o-1)/7)*7;return(o+s.weekStartsOn+6)%7+a};switch(e){case"c":case"cc":return fe(ae(e.length,t),i);case"co":return fe(n.ordinalNumber(t,{unit:"day"}),i);case"ccc":return n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"ccccc":return n.day(t,{width:"narrow",context:"standalone"});case"cccccc":return n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return n.day(t,{width:"wide",context:"standalone"})||n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"})}}validate(t,e){return e>=0&&e<=6}set(t,e,n,s){return t=_1(t,n,s),t.setHours(0,0,0,0),t}}function IC(r,t,e){const n=dr(r,void 0),s=uC(n),i=t-s;return P0(n,i,e)}class jC extends zt{constructor(){super(...arguments),G(this,"priority",90),G(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(t,e,n){const s=i=>i===0?7:i;switch(e){case"i":case"ii":return ae(e.length,t);case"io":return n.ordinalNumber(t,{unit:"day"});case"iii":return fe(n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"}),s);case"iiiii":return fe(n.day(t,{width:"narrow",context:"formatting"}),s);case"iiiiii":return fe(n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"}),s);case"iiii":default:return fe(n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"}),s)}}validate(t,e){return e>=1&&e<=7}set(t,e,n){return t=IC(t,n),t.setHours(0,0,0,0),t}}class BC extends zt{constructor(){super(...arguments),G(this,"priority",80),G(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(t,e,n){switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,n){return t.setHours(x1(n),0,0,0),t}}class qC extends zt{constructor(){super(...arguments),G(this,"priority",80),G(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(t,e,n){switch(e){case"b":case"bb":case"bbb":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,n){return t.setHours(x1(n),0,0,0),t}}class RC extends zt{constructor(){super(...arguments),G(this,"priority",80),G(this,"incompatibleTokens",["a","b","t","T"])}parse(t,e,n){switch(e){case"B":case"BB":case"BBB":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,e,n){return t.setHours(x1(n),0,0,0),t}}class HC extends zt{constructor(){super(...arguments),G(this,"priority",70),G(this,"incompatibleTokens",["H","K","k","t","T"])}parse(t,e,n){switch(e){case"h":return oe(de.hour12h,t);case"ho":return n.ordinalNumber(t,{unit:"hour"});default:return ae(e.length,t)}}validate(t,e){return e>=1&&e<=12}set(t,e,n){const s=t.getHours()>=12;return s&&n<12?t.setHours(n+12,0,0,0):!s&&n===12?t.setHours(0,0,0,0):t.setHours(n,0,0,0),t}}class $C extends zt{constructor(){super(...arguments),G(this,"priority",70),G(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(t,e,n){switch(e){case"H":return oe(de.hour23h,t);case"Ho":return n.ordinalNumber(t,{unit:"hour"});default:return ae(e.length,t)}}validate(t,e){return e>=0&&e<=23}set(t,e,n){return t.setHours(n,0,0,0),t}}class DC extends zt{constructor(){super(...arguments),G(this,"priority",70),G(this,"incompatibleTokens",["h","H","k","t","T"])}parse(t,e,n){switch(e){case"K":return oe(de.hour11h,t);case"Ko":return n.ordinalNumber(t,{unit:"hour"});default:return ae(e.length,t)}}validate(t,e){return e>=0&&e<=11}set(t,e,n){return t.getHours()>=12&&n<12?t.setHours(n+12,0,0,0):t.setHours(n,0,0,0),t}}class PC extends zt{constructor(){super(...arguments),G(this,"priority",70),G(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(t,e,n){switch(e){case"k":return oe(de.hour24h,t);case"ko":return n.ordinalNumber(t,{unit:"hour"});default:return ae(e.length,t)}}validate(t,e){return e>=1&&e<=24}set(t,e,n){const s=n<=24?n%24:n;return t.setHours(s,0,0,0),t}}class UC extends zt{constructor(){super(...arguments),G(this,"priority",60),G(this,"incompatibleTokens",["t","T"])}parse(t,e,n){switch(e){case"m":return oe(de.minute,t);case"mo":return n.ordinalNumber(t,{unit:"minute"});default:return ae(e.length,t)}}validate(t,e){return e>=0&&e<=59}set(t,e,n){return t.setMinutes(n,0,0),t}}class zC extends zt{constructor(){super(...arguments),G(this,"priority",50),G(this,"incompatibleTokens",["t","T"])}parse(t,e,n){switch(e){case"s":return oe(de.second,t);case"so":return n.ordinalNumber(t,{unit:"second"});default:return ae(e.length,t)}}validate(t,e){return e>=0&&e<=59}set(t,e,n){return t.setSeconds(n,0),t}}class FC extends zt{constructor(){super(...arguments),G(this,"priority",30),G(this,"incompatibleTokens",["t","T"])}parse(t,e){const n=s=>Math.trunc(s*Math.pow(10,-e.length+3));return fe(ae(e.length,t),n)}set(t,e,n){return t.setMilliseconds(n),t}}class VC extends zt{constructor(){super(...arguments),G(this,"priority",10),G(this,"incompatibleTokens",["t","T","x"])}parse(t,e){switch(e){case"X":return Jr(Xr.basicOptionalMinutes,t);case"XX":return Jr(Xr.basic,t);case"XXXX":return Jr(Xr.basicOptionalSeconds,t);case"XXXXX":return Jr(Xr.extendedOptionalSeconds,t);case"XXX":default:return Jr(Xr.extended,t)}}set(t,e,n){return e.timestampIsSet?t:hr(t,t.getTime()-U0(t)-n)}}class ZC extends zt{constructor(){super(...arguments),G(this,"priority",10),G(this,"incompatibleTokens",["t","T","X"])}parse(t,e){switch(e){case"x":return Jr(Xr.basicOptionalMinutes,t);case"xx":return Jr(Xr.basic,t);case"xxxx":return Jr(Xr.basicOptionalSeconds,t);case"xxxxx":return Jr(Xr.extendedOptionalSeconds,t);case"xxx":default:return Jr(Xr.extended,t)}}set(t,e,n){return e.timestampIsSet?t:hr(t,t.getTime()-U0(t)-n)}}class KC extends zt{constructor(){super(...arguments),G(this,"priority",40),G(this,"incompatibleTokens","*")}parse(t){return F0(t)}set(t,e,n){return[hr(t,n*1e3),{timestampIsSet:!0}]}}class WC extends zt{constructor(){super(...arguments),G(this,"priority",20),G(this,"incompatibleTokens","*")}parse(t){return F0(t)}set(t,e,n){return[hr(t,n),{timestampIsSet:!0}]}}new fC,new pC,new gC,new mC,new vC,new wC,new bC,new yC,new CC,new xC,new LC,new TC,new NC,new AC,new SC,new OC,new jC,new BC,new qC,new RC,new HC,new $C,new DC,new PC,new UC,new zC,new FC,new VC,new ZC,new KC,new WC;const GC=`<svg viewBox="0 0 226 72" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.9767 59.291C48.199 60.2079 56.3139 61.9141 64.2091 64.386C64.2428 64.4018 64.2604 64.4393 64.2513 64.4752C64.2421 64.5112 64.2088 64.5357 64.1716 64.5335C60.3092 63.841 56.4543 63.1785 52.5742 62.7035C48.3141 62.1235 44.0466 61.666 39.7841 61.416C36.1152 61.186 32.4356 61.186 28.7667 61.416L31.1367 61.816C33.2566 62.206 35.3891 62.5835 37.5416 63.066C38.6602 63.3038 39.7617 63.6153 40.8391 63.9985C41.1568 64.118 41.4651 64.2609 41.7617 64.426C41.9646 64.5386 42.154 64.6736 42.3266 64.8285C42.6625 65.1155 42.8835 65.5141 42.9492 65.951C43.0037 66.4709 42.8199 66.9874 42.4492 67.356C42.2649 67.5381 42.0563 67.6937 41.8293 67.8185L41.5266 67.9635L41.3066 68.061L40.8442 68.231C38.6445 68.8352 36.3754 69.1503 34.0942 69.1685C31.8993 69.2735 29.7191 69.2585 27.5491 69.2035C19.2094 68.9383 10.8913 68.2038 2.63415 67.0035C2.60505 66.9976 2.58415 66.972 2.58415 66.9423C2.58415 66.9125 2.60505 66.8869 2.63415 66.881C6.63415 66.946 10.6341 67.0835 14.6341 67.0835C18.9317 67.1535 23.2392 67.1685 27.5242 67.0835C29.6617 67.0185 31.8116 66.9285 33.9116 66.7835C35.5364 66.6834 37.1517 66.4636 38.7441 66.126C38.1316 65.9635 37.5141 65.806 36.8816 65.6635C34.8366 65.221 32.7142 64.8935 30.5867 64.506C28.4592 64.1185 26.3466 63.7735 24.1466 63.241C23.5025 63.0986 22.8769 62.883 22.2817 62.5985C22.136 62.5186 21.9992 62.423 21.8741 62.3135C21.5378 62.0373 21.338 61.6286 21.3266 61.1935C21.3218 60.8937 21.4091 60.5997 21.5766 60.351C21.672 60.2091 21.7904 60.0841 21.9267 59.981C22.0692 59.8784 22.2226 59.792 22.3842 59.7235C22.7253 59.5827 23.0795 59.4764 23.4417 59.406C24.5604 59.1956 25.6907 59.0536 26.8266 58.981L26.8391 58.966C31.2192 58.6729 35.6166 58.7817 39.9767 59.291ZM69.539 1.8716C69.5545 1.8787 69.5649 1.8934 69.5668 1.9103C69.568 1.9272 69.5605 1.9437 69.5466 1.9535L67.6911 3.5439C64.4598 6.3259 57.9797 11.962 50.4974 18.7841L49.2463 19.927L48.2239 20.8647L47.1451 21.8583C43.534 25.1925 39.7763 28.7395 36.0916 32.3335C33.7141 34.6535 31.3141 37.031 28.9166 39.431L26.9464 41.4128C24.3223 44.0559 21.7486 46.665 19.3102 49.1619C19.3139 49.1603 19.3177 49.1592 19.3216 49.1585C20.9104 49.0247 22.491 48.8069 24.0568 48.506C24.078 48.5015 24.0996 48.5111 24.1105 48.53C24.1213 48.5488 24.1187 48.5724 24.1041 48.5885L10.1991 62.8235L2.58165 66.731C2.53165 66.761 2.48165 66.7035 2.50665 66.6735C3.72195 65.3771 10.5676 58.1211 18.8848 49.5907L19.2297 48.9323C20.0955 47.2945 22.4802 42.8686 25.5592 37.856C28.0651 33.7086 30.8261 29.7209 33.8266 25.916C35.2281 24.274 36.7808 22.7673 38.4641 21.416C40.7718 19.5091 43.5221 17.5183 46.4228 15.5651L47.0201 15.1649L47.5886 14.7873L48.3177 14.3079C49.027 13.844 49.7413 13.3837 50.4568 12.9287L50.934 12.6262C58.0126 8.1515 65.1099 4.2357 68.2301 2.5516L69.4916 1.876C69.5055 1.8662 69.5235 1.8645 69.539 1.8716ZM69.8387 1.7531C69.8583 1.7606 69.8707 1.7801 69.8695 1.801L69.8067 2.4766L69.7258 3.28C69.475 5.6907 68.9115 10.4862 67.9869 15.4833L67.8874 16.0141L67.8192 16.371L67.7295 16.8295L67.6395 17.2789L67.5494 17.7191C66.0614 24.9062 63.7874 31.8856 60.5191 32.3185H46.6041C45.5625 32.3185 47.5235 33.4373 49.887 34.6211L50.0383 34.6968C50.0889 34.722 50.1398 34.7473 50.1907 34.7725L50.6042 34.9766L50.9374 35.1394L51.6413 35.4793C52.3625 35.8251 53.0634 36.1538 53.6735 36.437L55.5392 37.2935C55.5528 37.3022 55.561 37.3173 55.561 37.3335C55.561 37.3457 55.5564 37.3572 55.5484 37.3659L55.5392 37.3735C52.0868 40.4235 46.3143 42.871 40.3517 44.751L39.7533 44.9333C34.5639 46.5018 29.2792 47.7788 23.9467 48.7535L31.7766 40.731L50.9366 21.1135L53.0942 18.906L69.7841 1.7685C69.7971 1.7519 69.8191 1.7456 69.8387 1.7531Z" fill="currentColor"/>
<mask id="mask0_13_127" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="68" height="69">
<path d="M39.9767 59.291C48.199 60.2079 56.3139 61.9141 64.2091 64.386C64.2428 64.4018 64.2604 64.4393 64.2513 64.4752C64.2421 64.5112 64.2088 64.5357 64.1716 64.5335C60.3092 63.841 56.4543 63.1785 52.5742 62.7035C48.3141 62.1235 44.0466 61.666 39.7841 61.416C36.1152 61.186 32.4356 61.186 28.7667 61.416L31.1367 61.816C33.2566 62.206 35.3891 62.5835 37.5416 63.066C38.6602 63.3038 39.7617 63.6153 40.8391 63.9985C41.1568 64.118 41.4651 64.2609 41.7617 64.426C41.9646 64.5386 42.154 64.6736 42.3266 64.8285C42.6625 65.1155 42.8835 65.5141 42.9492 65.951C43.0037 66.4709 42.8199 66.9874 42.4492 67.356C42.2649 67.5381 42.0563 67.6937 41.8293 67.8185L41.5266 67.9635L41.3066 68.061L40.8442 68.231C38.6445 68.8352 36.3754 69.1503 34.0942 69.1685C31.8993 69.2735 29.7191 69.2585 27.5491 69.2035C19.2094 68.9383 10.8913 68.2038 2.63415 67.0035C2.60505 66.9976 2.58415 66.972 2.58415 66.9423C2.58415 66.9125 2.60505 66.8869 2.63415 66.881C6.63415 66.946 10.6341 67.0835 14.6341 67.0835C18.9317 67.1535 23.2392 67.1685 27.5242 67.0835C29.6617 67.0185 31.8116 66.9285 33.9116 66.7835C35.5364 66.6834 37.1517 66.4636 38.7441 66.126C38.1316 65.9635 37.5141 65.806 36.8816 65.6635C34.8366 65.221 32.7142 64.8935 30.5867 64.506C28.4592 64.1185 26.3466 63.7735 24.1466 63.241C23.5025 63.0986 22.8769 62.883 22.2817 62.5985C22.136 62.5186 21.9992 62.423 21.8741 62.3135C21.5378 62.0373 21.338 61.6286 21.3266 61.1935C21.3218 60.8937 21.4091 60.5997 21.5766 60.351C21.672 60.2091 21.7904 60.0841 21.9267 59.981C22.0692 59.8784 22.2226 59.792 22.3842 59.7235C22.7253 59.5827 23.0795 59.4764 23.4417 59.406C24.5604 59.1956 25.6907 59.0536 26.8266 58.981L26.8391 58.966C31.2192 58.6729 35.6166 58.7817 39.9767 59.291ZM69.539 1.8716C69.5545 1.8787 69.5649 1.8934 69.5668 1.9103C69.568 1.9272 69.5605 1.9437 69.5466 1.9535L67.6911 3.5439C64.4598 6.3259 57.9797 11.962 50.4974 18.7841L49.2463 19.927L48.2239 20.8647L47.1451 21.8583C43.534 25.1925 39.7763 28.7395 36.0916 32.3335C33.7141 34.6535 31.3141 37.031 28.9166 39.431L26.9464 41.4128C24.3223 44.0559 21.7486 46.665 19.3102 49.1619C19.3139 49.1603 19.3177 49.1592 19.3216 49.1585C20.9104 49.0247 22.491 48.8069 24.0568 48.506C24.078 48.5015 24.0996 48.5111 24.1105 48.53C24.1213 48.5488 24.1187 48.5724 24.1041 48.5885L10.1991 62.8235L2.58165 66.731C2.53165 66.761 2.48165 66.7035 2.50665 66.6735C3.72195 65.3771 10.5676 58.1211 18.8848 49.5907L19.2297 48.9323C20.0955 47.2945 22.4802 42.8686 25.5592 37.856C28.0651 33.7086 30.8261 29.7209 33.8266 25.916C35.2281 24.274 36.7808 22.7673 38.4641 21.416C40.7718 19.5091 43.5221 17.5183 46.4228 15.5651L47.0201 15.1649L47.5886 14.7873L48.3177 14.3079C49.027 13.844 49.7413 13.3837 50.4568 12.9287L50.934 12.6262C58.0126 8.1515 65.1099 4.2357 68.2301 2.5516L69.4916 1.876C69.5055 1.8662 69.5235 1.8645 69.539 1.8716ZM69.8387 1.7531C69.8583 1.7606 69.8707 1.7801 69.8695 1.801L69.8067 2.4766L69.7258 3.28C69.475 5.6907 68.9115 10.4862 67.9869 15.4833L67.8874 16.0141L67.8192 16.371L67.7295 16.8295L67.6395 17.2789L67.5494 17.7191C66.0614 24.9062 63.7874 31.8856 60.5191 32.3185H46.6041C45.5625 32.3185 47.5235 33.4373 49.887 34.6211L50.0383 34.6968C50.0889 34.722 50.1398 34.7473 50.1907 34.7725L50.6042 34.9766L50.9374 35.1394L51.6413 35.4793C52.3625 35.8251 53.0634 36.1538 53.6735 36.437L55.5392 37.2935C55.5528 37.3022 55.561 37.3173 55.561 37.3335C55.561 37.3457 55.5564 37.3572 55.5484 37.3659L55.5392 37.3735C52.0868 40.4235 46.3143 42.871 40.3517 44.751L39.7533 44.9333C34.5639 46.5018 29.2792 47.7788 23.9467 48.7535L31.7766 40.731L50.9366 21.1135L53.0942 18.906L69.7841 1.7685C69.7971 1.7519 69.8191 1.7456 69.8387 1.7531Z" fill="#F2385A"/>
</mask>
<g mask="url(#mask0_13_127)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.1211 14.493L70.1313 1.1465L71.613 15.6806L49.7338 19.4811L46.1211 14.493Z" fill="#F2385A"/>
</g>
<mask id="mask1_13_127" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="68" height="69">
<path d="M39.9767 59.291C48.199 60.2079 56.3139 61.9141 64.2091 64.386C64.2428 64.4018 64.2604 64.4393 64.2513 64.4752C64.2421 64.5112 64.2088 64.5357 64.1716 64.5335C60.3092 63.841 56.4543 63.1785 52.5742 62.7035C48.3141 62.1235 44.0466 61.666 39.7841 61.416C36.1152 61.186 32.4356 61.186 28.7667 61.416L31.1367 61.816C33.2566 62.206 35.3891 62.5835 37.5416 63.066C38.6602 63.3038 39.7617 63.6153 40.8391 63.9985C41.1568 64.118 41.4651 64.2609 41.7617 64.426C41.9646 64.5386 42.154 64.6736 42.3266 64.8285C42.6625 65.1155 42.8835 65.5141 42.9492 65.951C43.0037 66.4709 42.8199 66.9874 42.4492 67.356C42.2649 67.5381 42.0563 67.6937 41.8293 67.8185L41.5266 67.9635L41.3066 68.061L40.8442 68.231C38.6445 68.8352 36.3754 69.1503 34.0942 69.1685C31.8993 69.2735 29.7191 69.2585 27.5491 69.2035C19.2094 68.9383 10.8913 68.2038 2.63415 67.0035C2.60505 66.9976 2.58415 66.972 2.58415 66.9423C2.58415 66.9125 2.60505 66.8869 2.63415 66.881C6.63415 66.946 10.6341 67.0835 14.6341 67.0835C18.9317 67.1535 23.2392 67.1685 27.5242 67.0835C29.6617 67.0185 31.8116 66.9285 33.9116 66.7835C35.5364 66.6834 37.1517 66.4636 38.7441 66.126C38.1316 65.9635 37.5141 65.806 36.8816 65.6635C34.8366 65.221 32.7142 64.8935 30.5867 64.506C28.4592 64.1185 26.3466 63.7735 24.1466 63.241C23.5025 63.0986 22.8769 62.883 22.2817 62.5985C22.136 62.5186 21.9992 62.423 21.8741 62.3135C21.5378 62.0373 21.338 61.6286 21.3266 61.1935C21.3218 60.8937 21.4091 60.5997 21.5766 60.351C21.672 60.2091 21.7904 60.0841 21.9267 59.981C22.0692 59.8784 22.2226 59.792 22.3842 59.7235C22.7253 59.5827 23.0795 59.4764 23.4417 59.406C24.5604 59.1956 25.6907 59.0536 26.8266 58.981L26.8391 58.966C31.2192 58.6729 35.6166 58.7817 39.9767 59.291ZM69.539 1.8716C69.5545 1.8787 69.5649 1.8934 69.5668 1.9103C69.568 1.9272 69.5605 1.9437 69.5466 1.9535L67.6911 3.5439C64.4598 6.3259 57.9797 11.962 50.4974 18.7841L49.2463 19.927L48.2239 20.8647L47.1451 21.8583C43.534 25.1925 39.7763 28.7395 36.0916 32.3335C33.7141 34.6535 31.3141 37.031 28.9166 39.431L26.9464 41.4128C24.3223 44.0559 21.7486 46.665 19.3102 49.1619C19.3139 49.1603 19.3177 49.1592 19.3216 49.1585C20.9104 49.0247 22.491 48.8069 24.0568 48.506C24.078 48.5015 24.0996 48.5111 24.1105 48.53C24.1213 48.5488 24.1187 48.5724 24.1041 48.5885L10.1991 62.8235L2.58165 66.731C2.53165 66.761 2.48165 66.7035 2.50665 66.6735C3.72195 65.3771 10.5676 58.1211 18.8848 49.5907L19.2297 48.9323C20.0955 47.2945 22.4802 42.8686 25.5592 37.856C28.0651 33.7086 30.8261 29.7209 33.8266 25.916C35.2281 24.274 36.7808 22.7673 38.4641 21.416C40.7718 19.5091 43.5221 17.5183 46.4228 15.5651L47.0201 15.1649L47.5886 14.7873L48.3177 14.3079C49.027 13.844 49.7413 13.3837 50.4568 12.9287L50.934 12.6262C58.0126 8.1515 65.1099 4.2357 68.2301 2.5516L69.4916 1.876C69.5055 1.8662 69.5235 1.8645 69.539 1.8716ZM69.8387 1.7531C69.8583 1.7606 69.8707 1.7801 69.8695 1.801L69.8067 2.4766L69.7258 3.28C69.475 5.6907 68.9115 10.4862 67.9869 15.4833L67.8874 16.0141L67.8192 16.371L67.7295 16.8295L67.6395 17.2789L67.5494 17.7191C66.0614 24.9062 63.7874 31.8856 60.5191 32.3185H46.6041C45.5625 32.3185 47.5235 33.4373 49.887 34.6211L50.0383 34.6968C50.0889 34.722 50.1398 34.7473 50.1907 34.7725L50.6042 34.9766L50.9374 35.1394L51.6413 35.4793C52.3625 35.8251 53.0634 36.1538 53.6735 36.437L55.5392 37.2935C55.5528 37.3022 55.561 37.3173 55.561 37.3335C55.561 37.3457 55.5564 37.3572 55.5484 37.3659L55.5392 37.3735C52.0868 40.4235 46.3143 42.871 40.3517 44.751L39.7533 44.9333C34.5639 46.5018 29.2792 47.7788 23.9467 48.7535L31.7766 40.731L50.9366 21.1135L53.0942 18.906L69.7841 1.7685C69.7971 1.7519 69.8191 1.7456 69.8387 1.7531Z" fill="#F5A503"/>
</mask>
<g mask="url(#mask1_13_127)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M49.7345 19.481L61.3351 35.4981L71.6136 15.6805L49.7345 19.481Z" fill="#F5A503"/>
</g>
<mask id="mask2_13_127" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="68" height="69">
<path d="M39.9767 59.291C48.199 60.2079 56.3139 61.9141 64.2091 64.386C64.2428 64.4018 64.2604 64.4393 64.2513 64.4752C64.2421 64.5112 64.2088 64.5357 64.1716 64.5335C60.3092 63.841 56.4543 63.1785 52.5742 62.7035C48.3141 62.1235 44.0466 61.666 39.7841 61.416C36.1152 61.186 32.4356 61.186 28.7667 61.416L31.1367 61.816C33.2566 62.206 35.3891 62.5835 37.5416 63.066C38.6602 63.3038 39.7617 63.6153 40.8391 63.9985C41.1568 64.118 41.4651 64.2609 41.7617 64.426C41.9646 64.5386 42.154 64.6736 42.3266 64.8285C42.6625 65.1155 42.8835 65.5141 42.9492 65.951C43.0037 66.4709 42.8199 66.9874 42.4492 67.356C42.2649 67.5381 42.0563 67.6937 41.8293 67.8185L41.5266 67.9635L41.3066 68.061L40.8442 68.231C38.6445 68.8352 36.3754 69.1503 34.0942 69.1685C31.8993 69.2735 29.7191 69.2585 27.5491 69.2035C19.2094 68.9383 10.8913 68.2038 2.63415 67.0035C2.60505 66.9976 2.58415 66.972 2.58415 66.9423C2.58415 66.9125 2.60505 66.8869 2.63415 66.881C6.63415 66.946 10.6341 67.0835 14.6341 67.0835C18.9317 67.1535 23.2392 67.1685 27.5242 67.0835C29.6617 67.0185 31.8116 66.9285 33.9116 66.7835C35.5364 66.6834 37.1517 66.4636 38.7441 66.126C38.1316 65.9635 37.5141 65.806 36.8816 65.6635C34.8366 65.221 32.7142 64.8935 30.5867 64.506C28.4592 64.1185 26.3466 63.7735 24.1466 63.241C23.5025 63.0986 22.8769 62.883 22.2817 62.5985C22.136 62.5186 21.9992 62.423 21.8741 62.3135C21.5378 62.0373 21.338 61.6286 21.3266 61.1935C21.3218 60.8937 21.4091 60.5997 21.5766 60.351C21.672 60.2091 21.7904 60.0841 21.9267 59.981C22.0692 59.8784 22.2226 59.792 22.3842 59.7235C22.7253 59.5827 23.0795 59.4764 23.4417 59.406C24.5604 59.1956 25.6907 59.0536 26.8266 58.981L26.8391 58.966C31.2192 58.6729 35.6166 58.7817 39.9767 59.291ZM69.539 1.8716C69.5545 1.8787 69.5649 1.8934 69.5668 1.9103C69.568 1.9272 69.5605 1.9437 69.5466 1.9535L67.6911 3.5439C64.4598 6.3259 57.9797 11.962 50.4974 18.7841L49.2463 19.927L48.2239 20.8647L47.1451 21.8583C43.534 25.1925 39.7763 28.7395 36.0916 32.3335C33.7141 34.6535 31.3141 37.031 28.9166 39.431L26.9464 41.4128C24.3223 44.0559 21.7486 46.665 19.3102 49.1619C19.3139 49.1603 19.3177 49.1592 19.3216 49.1585C20.9104 49.0247 22.491 48.8069 24.0568 48.506C24.078 48.5015 24.0996 48.5111 24.1105 48.53C24.1213 48.5488 24.1187 48.5724 24.1041 48.5885L10.1991 62.8235L2.58165 66.731C2.53165 66.761 2.48165 66.7035 2.50665 66.6735C3.72195 65.3771 10.5676 58.1211 18.8848 49.5907L19.2297 48.9323C20.0955 47.2945 22.4802 42.8686 25.5592 37.856C28.0651 33.7086 30.8261 29.7209 33.8266 25.916C35.2281 24.274 36.7808 22.7673 38.4641 21.416C40.7718 19.5091 43.5221 17.5183 46.4228 15.5651L47.0201 15.1649L47.5886 14.7873L48.3177 14.3079C49.027 13.844 49.7413 13.3837 50.4568 12.9287L50.934 12.6262C58.0126 8.1515 65.1099 4.2357 68.2301 2.5516L69.4916 1.876C69.5055 1.8662 69.5235 1.8645 69.539 1.8716ZM69.8387 1.7531C69.8583 1.7606 69.8707 1.7801 69.8695 1.801L69.8067 2.4766L69.7258 3.28C69.475 5.6907 68.9115 10.4862 67.9869 15.4833L67.8874 16.0141L67.8192 16.371L67.7295 16.8295L67.6395 17.2789L67.5494 17.7191C66.0614 24.9062 63.7874 31.8856 60.5191 32.3185H46.6041C45.5625 32.3185 47.5235 33.4373 49.887 34.6211L50.0383 34.6968C50.0889 34.722 50.1398 34.7473 50.1907 34.7725L50.6042 34.9766L50.9374 35.1394L51.6413 35.4793C52.3625 35.8251 53.0634 36.1538 53.6735 36.437L55.5392 37.2935C55.5528 37.3022 55.561 37.3173 55.561 37.3335C55.561 37.3457 55.5564 37.3572 55.5484 37.3659L55.5392 37.3735C52.0868 40.4235 46.3143 42.871 40.3517 44.751L39.7533 44.9333C34.5639 46.5018 29.2792 47.7788 23.9467 48.7535L31.7766 40.731L50.9366 21.1135L53.0942 18.906L69.7841 1.7685C69.7971 1.7519 69.8191 1.7456 69.8387 1.7531Z" fill="#F5A503"/>
</mask>
<g mask="url(#mask2_13_127)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M49.7345 19.481L61.3351 35.4981L71.6136 15.6805L49.7345 19.481Z" fill="#F5A503"/>
</g>
<mask id="mask3_13_127" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="68" height="69">
<path d="M39.9767 59.291C48.199 60.2079 56.3139 61.9141 64.2091 64.386C64.2428 64.4018 64.2604 64.4393 64.2513 64.4752C64.2421 64.5112 64.2088 64.5357 64.1716 64.5335C60.3092 63.841 56.4543 63.1785 52.5742 62.7035C48.3141 62.1235 44.0466 61.666 39.7841 61.416C36.1152 61.186 32.4356 61.186 28.7667 61.416L31.1367 61.816C33.2566 62.206 35.3891 62.5835 37.5416 63.066C38.6602 63.3038 39.7617 63.6153 40.8391 63.9985C41.1568 64.118 41.4651 64.2609 41.7617 64.426C41.9646 64.5386 42.154 64.6736 42.3266 64.8285C42.6625 65.1155 42.8835 65.5141 42.9492 65.951C43.0037 66.4709 42.8199 66.9874 42.4492 67.356C42.2649 67.5381 42.0563 67.6937 41.8293 67.8185L41.5266 67.9635L41.3066 68.061L40.8442 68.231C38.6445 68.8352 36.3754 69.1503 34.0942 69.1685C31.8993 69.2735 29.7191 69.2585 27.5491 69.2035C19.2094 68.9383 10.8913 68.2038 2.63415 67.0035C2.60505 66.9976 2.58415 66.972 2.58415 66.9423C2.58415 66.9125 2.60505 66.8869 2.63415 66.881C6.63415 66.946 10.6341 67.0835 14.6341 67.0835C18.9317 67.1535 23.2392 67.1685 27.5242 67.0835C29.6617 67.0185 31.8116 66.9285 33.9116 66.7835C35.5364 66.6834 37.1517 66.4636 38.7441 66.126C38.1316 65.9635 37.5141 65.806 36.8816 65.6635C34.8366 65.221 32.7142 64.8935 30.5867 64.506C28.4592 64.1185 26.3466 63.7735 24.1466 63.241C23.5025 63.0986 22.8769 62.883 22.2817 62.5985C22.136 62.5186 21.9992 62.423 21.8741 62.3135C21.5378 62.0373 21.338 61.6286 21.3266 61.1935C21.3218 60.8937 21.4091 60.5997 21.5766 60.351C21.672 60.2091 21.7904 60.0841 21.9267 59.981C22.0692 59.8784 22.2226 59.792 22.3842 59.7235C22.7253 59.5827 23.0795 59.4764 23.4417 59.406C24.5604 59.1956 25.6907 59.0536 26.8266 58.981L26.8391 58.966C31.2192 58.6729 35.6166 58.7817 39.9767 59.291ZM69.539 1.8716C69.5545 1.8787 69.5649 1.8934 69.5668 1.9103C69.568 1.9272 69.5605 1.9437 69.5466 1.9535L67.6911 3.5439C64.4598 6.3259 57.9797 11.962 50.4974 18.7841L49.2463 19.927L48.2239 20.8647L47.1451 21.8583C43.534 25.1925 39.7763 28.7395 36.0916 32.3335C33.7141 34.6535 31.3141 37.031 28.9166 39.431L26.9464 41.4128C24.3223 44.0559 21.7486 46.665 19.3102 49.1619C19.3139 49.1603 19.3177 49.1592 19.3216 49.1585C20.9104 49.0247 22.491 48.8069 24.0568 48.506C24.078 48.5015 24.0996 48.5111 24.1105 48.53C24.1213 48.5488 24.1187 48.5724 24.1041 48.5885L10.1991 62.8235L2.58165 66.731C2.53165 66.761 2.48165 66.7035 2.50665 66.6735C3.72195 65.3771 10.5676 58.1211 18.8848 49.5907L19.2297 48.9323C20.0955 47.2945 22.4802 42.8686 25.5592 37.856C28.0651 33.7086 30.8261 29.7209 33.8266 25.916C35.2281 24.274 36.7808 22.7673 38.4641 21.416C40.7718 19.5091 43.5221 17.5183 46.4228 15.5651L47.0201 15.1649L47.5886 14.7873L48.3177 14.3079C49.027 13.844 49.7413 13.3837 50.4568 12.9287L50.934 12.6262C58.0126 8.1515 65.1099 4.2357 68.2301 2.5516L69.4916 1.876C69.5055 1.8662 69.5235 1.8645 69.539 1.8716ZM69.8387 1.7531C69.8583 1.7606 69.8707 1.7801 69.8695 1.801L69.8067 2.4766L69.7258 3.28C69.475 5.6907 68.9115 10.4862 67.9869 15.4833L67.8874 16.0141L67.8192 16.371L67.7295 16.8295L67.6395 17.2789L67.5494 17.7191C66.0614 24.9062 63.7874 31.8856 60.5191 32.3185H46.6041C45.5625 32.3185 47.5235 33.4373 49.887 34.6211L50.0383 34.6968C50.0889 34.722 50.1398 34.7473 50.1907 34.7725L50.6042 34.9766L50.9374 35.1394L51.6413 35.4793C52.3625 35.8251 53.0634 36.1538 53.6735 36.437L55.5392 37.2935C55.5528 37.3022 55.561 37.3173 55.561 37.3335C55.561 37.3457 55.5564 37.3572 55.5484 37.3659L55.5392 37.3735C52.0868 40.4235 46.3143 42.871 40.3517 44.751L39.7533 44.9333C34.5639 46.5018 29.2792 47.7788 23.9467 48.7535L31.7766 40.731L50.9366 21.1135L53.0942 18.906L69.7841 1.7685C69.7971 1.7519 69.8191 1.7456 69.8387 1.7531Z" fill="#4AD9D9"/>
</mask>
<g mask="url(#mask3_13_127)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.1216 14.4929L61.4807 35.4981L42.8878 45.9727L20.9238 35.6323L46.1216 14.4929Z" fill="#4AD9D9"/>
</g>
<mask id="mask4_13_127" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="68" height="69">
<path d="M39.9767 59.291C48.199 60.2079 56.3139 61.9141 64.2091 64.386C64.2428 64.4018 64.2604 64.4393 64.2513 64.4752C64.2421 64.5112 64.2088 64.5357 64.1716 64.5335C60.3092 63.841 56.4543 63.1785 52.5742 62.7035C48.3141 62.1235 44.0466 61.666 39.7841 61.416C36.1152 61.186 32.4356 61.186 28.7667 61.416L31.1367 61.816C33.2566 62.206 35.3891 62.5835 37.5416 63.066C38.6602 63.3038 39.7617 63.6153 40.8391 63.9985C41.1568 64.118 41.4651 64.2609 41.7617 64.426C41.9646 64.5386 42.154 64.6736 42.3266 64.8285C42.6625 65.1155 42.8835 65.5141 42.9492 65.951C43.0037 66.4709 42.8199 66.9874 42.4492 67.356C42.2649 67.5381 42.0563 67.6937 41.8293 67.8185L41.5266 67.9635L41.3066 68.061L40.8442 68.231C38.6445 68.8352 36.3754 69.1503 34.0942 69.1685C31.8993 69.2735 29.7191 69.2585 27.5491 69.2035C19.2094 68.9383 10.8913 68.2038 2.63415 67.0035C2.60505 66.9976 2.58415 66.972 2.58415 66.9423C2.58415 66.9125 2.60505 66.8869 2.63415 66.881C6.63415 66.946 10.6341 67.0835 14.6341 67.0835C18.9317 67.1535 23.2392 67.1685 27.5242 67.0835C29.6617 67.0185 31.8116 66.9285 33.9116 66.7835C35.5364 66.6834 37.1517 66.4636 38.7441 66.126C38.1316 65.9635 37.5141 65.806 36.8816 65.6635C34.8366 65.221 32.7142 64.8935 30.5867 64.506C28.4592 64.1185 26.3466 63.7735 24.1466 63.241C23.5025 63.0986 22.8769 62.883 22.2817 62.5985C22.136 62.5186 21.9992 62.423 21.8741 62.3135C21.5378 62.0373 21.338 61.6286 21.3266 61.1935C21.3218 60.8937 21.4091 60.5997 21.5766 60.351C21.672 60.2091 21.7904 60.0841 21.9267 59.981C22.0692 59.8784 22.2226 59.792 22.3842 59.7235C22.7253 59.5827 23.0795 59.4764 23.4417 59.406C24.5604 59.1956 25.6907 59.0536 26.8266 58.981L26.8391 58.966C31.2192 58.6729 35.6166 58.7817 39.9767 59.291ZM69.539 1.8716C69.5545 1.8787 69.5649 1.8934 69.5668 1.9103C69.568 1.9272 69.5605 1.9437 69.5466 1.9535L67.6911 3.5439C64.4598 6.3259 57.9797 11.962 50.4974 18.7841L49.2463 19.927L48.2239 20.8647L47.1451 21.8583C43.534 25.1925 39.7763 28.7395 36.0916 32.3335C33.7141 34.6535 31.3141 37.031 28.9166 39.431L26.9464 41.4128C24.3223 44.0559 21.7486 46.665 19.3102 49.1619C19.3139 49.1603 19.3177 49.1592 19.3216 49.1585C20.9104 49.0247 22.491 48.8069 24.0568 48.506C24.078 48.5015 24.0996 48.5111 24.1105 48.53C24.1213 48.5488 24.1187 48.5724 24.1041 48.5885L10.1991 62.8235L2.58165 66.731C2.53165 66.761 2.48165 66.7035 2.50665 66.6735C3.72195 65.3771 10.5676 58.1211 18.8848 49.5907L19.2297 48.9323C20.0955 47.2945 22.4802 42.8686 25.5592 37.856C28.0651 33.7086 30.8261 29.7209 33.8266 25.916C35.2281 24.274 36.7808 22.7673 38.4641 21.416C40.7718 19.5091 43.5221 17.5183 46.4228 15.5651L47.0201 15.1649L47.5886 14.7873L48.3177 14.3079C49.027 13.844 49.7413 13.3837 50.4568 12.9287L50.934 12.6262C58.0126 8.1515 65.1099 4.2357 68.2301 2.5516L69.4916 1.876C69.5055 1.8662 69.5235 1.8645 69.539 1.8716ZM69.8387 1.7531C69.8583 1.7606 69.8707 1.7801 69.8695 1.801L69.8067 2.4766L69.7258 3.28C69.475 5.6907 68.9115 10.4862 67.9869 15.4833L67.8874 16.0141L67.8192 16.371L67.7295 16.8295L67.6395 17.2789L67.5494 17.7191C66.0614 24.9062 63.7874 31.8856 60.5191 32.3185H46.6041C45.5625 32.3185 47.5235 33.4373 49.887 34.6211L50.0383 34.6968C50.0889 34.722 50.1398 34.7473 50.1907 34.7725L50.6042 34.9766L50.9374 35.1394L51.6413 35.4793C52.3625 35.8251 53.0634 36.1538 53.6735 36.437L55.5392 37.2935C55.5528 37.3022 55.561 37.3173 55.561 37.3335C55.561 37.3457 55.5564 37.3572 55.5484 37.3659L55.5392 37.3735C52.0868 40.4235 46.3143 42.871 40.3517 44.751L39.7533 44.9333C34.5639 46.5018 29.2792 47.7788 23.9467 48.7535L31.7766 40.731L50.9366 21.1135L53.0942 18.906L69.7841 1.7685C69.7971 1.7519 69.8191 1.7456 69.8387 1.7531Z" fill="#36B1BF"/>
</mask>
<g mask="url(#mask4_13_127)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9238 35.6323L1.57031 66.8261H9.22111L42.8878 45.9728L20.9238 35.6323Z" fill="#36B1BF"/>
</g>
<path d="M70.1318 68.601V32.8335H81.8818C85.3287 32.7466 88.741 33.539 91.797 35.136C94.52 36.5939 96.774 38.794 98.297 41.481C101.358 47.2677 101.358 54.1943 98.297 59.981C96.773 62.6669 94.519 64.866 91.797 66.3235C88.7394 67.9182 85.3265 68.7089 81.8793 68.621L70.1318 68.601ZM76.2168 63.231H81.9668C84.2134 63.2717 86.4351 62.7564 88.4343 61.731C90.31 60.7389 91.862 59.2302 92.907 57.3835C95.082 53.1914 95.082 48.2031 92.907 44.011C91.855 42.178 90.304 40.6816 88.4343 39.696C86.4351 38.6706 84.2134 38.1553 81.9668 38.196H76.2368L76.2168 63.231ZM114.179 69.231C111.898 69.2894 109.653 68.6482 107.747 67.3935C105.932 66.1607 104.49 64.4538 103.577 62.4585C102.586 60.3211 102.083 57.9895 102.107 55.6335C102.069 53.2056 102.64 50.8068 103.767 48.656C104.862 46.6113 106.507 44.914 108.517 43.756C110.772 42.4977 113.325 41.8716 115.907 41.9435C118.441 41.8663 120.946 42.4938 123.144 43.756C125.104 44.9285 126.698 46.6258 127.744 48.656C128.83 50.778 129.382 53.1327 129.352 55.516V68.6035H123.489V63.731H123.392C122.856 64.7166 122.183 65.6207 121.392 66.416C120.53 67.2819 119.504 67.9677 118.374 68.4335C117.045 68.9811 115.617 69.2524 114.179 69.231ZM115.767 64.231C117.191 64.2642 118.591 63.8631 119.782 63.081C120.938 62.2992 121.865 61.223 122.467 59.9635C123.124 58.589 123.44 57.0761 123.387 55.5535C123.414 54.0461 123.099 52.5522 122.467 51.1835C121.886 49.9478 120.987 48.889 119.862 48.116C118.664 47.3268 117.253 46.9244 115.819 46.9635C112.881 46.8515 110.168 48.5324 108.959 51.2135C107.732 54.008 107.732 57.189 108.959 59.9835C109.53 61.2455 110.441 62.324 111.589 63.0985C112.837 63.893 114.296 64.2889 115.774 64.2335L115.767 64.231ZM145.439 69.216C142.982 69.2655 140.553 68.6837 138.384 67.526C136.354 66.4168 134.692 64.7379 133.604 62.696C132.416 60.4008 131.828 57.8422 131.894 55.2585V31.2835H137.774V46.481H137.822C138.377 45.5503 139.106 44.7354 139.969 44.081C140.865 43.3897 141.867 42.8493 142.937 42.481C144.056 42.1041 145.231 41.9157 146.412 41.9235C148.712 41.8738 150.982 42.4484 152.982 43.586C154.865 44.6854 156.406 46.2866 157.432 48.211C158.546 50.3568 159.101 52.7488 159.047 55.166C159.072 57.1078 158.752 59.0386 158.102 60.8685C157.509 62.5267 156.587 64.0479 155.392 65.341C154.202 66.6147 152.74 67.6027 151.114 68.231C149.303 68.9177 147.376 69.2521 145.439 69.216ZM145.439 64.2035C146.85 64.2305 148.239 63.8503 149.439 63.1085C150.606 62.3632 151.544 61.3092 152.149 60.0635C152.823 58.6607 153.159 57.1195 153.129 55.5635C153.156 54.0239 152.82 52.4995 152.149 51.1135C151.544 49.8697 150.617 48.8106 149.464 48.046C148.283 47.2858 146.903 46.8934 145.499 46.9185C144.087 46.8918 142.698 47.2747 141.499 48.021C140.336 48.7661 139.4 49.8181 138.797 51.061C137.502 53.9212 137.502 57.2008 138.797 60.061C139.402 61.3056 140.339 62.3592 141.504 63.106C142.686 63.8415 144.053 64.2224 145.444 64.2035H145.439ZM175.109 69.216C172.649 69.2671 170.217 68.6851 168.047 67.526C166.015 66.4176 164.353 64.7385 163.264 62.696C162.077 60.4004 161.489 57.8421 161.554 55.2585V31.2835H167.434V46.481H167.484C168.041 45.5508 168.771 44.736 169.634 44.081C170.531 43.3885 171.535 42.848 172.607 42.481C173.725 42.1039 174.899 41.9155 176.079 41.9235C178.379 41.8738 180.65 42.4484 182.649 43.586C184.533 44.6848 186.074 46.2862 187.099 48.211C188.212 50.3563 188.767 52.7474 188.712 55.1635C188.732 57.1049 188.412 59.0348 187.767 60.866C187.169 62.5249 186.244 64.0468 185.047 65.341C183.864 66.6095 182.411 67.597 180.797 68.231C178.981 68.9203 177.051 69.2546 175.109 69.216ZM175.109 64.2035C176.52 64.2306 177.909 63.8504 179.109 63.1085C180.268 62.36 181.198 61.3064 181.797 60.0635C182.472 58.6611 182.807 57.1196 182.777 55.5635C182.805 54.0237 182.469 52.4991 181.797 51.1135C181.192 49.8697 180.265 48.8106 179.112 48.046C177.932 47.2835 176.551 46.8909 175.147 46.9185C173.741 46.8933 172.357 47.2763 171.164 48.021C169.995 48.7608 169.057 49.8129 168.454 51.0585C167.154 53.9177 167.154 57.1993 168.454 60.0585C169.058 61.3052 169.996 62.3595 171.164 63.1035C172.343 63.8407 173.709 64.2218 175.099 64.201L175.109 64.2035ZM191.229 68.601V31.281H197.109V68.601H191.229ZM216.484 68.601C213.743 68.6381 211.019 68.1589 208.454 67.1885C206.159 66.3274 204.171 64.8048 202.742 62.8135C201.256 60.5879 200.517 57.9471 200.632 55.2735C200.577 53.1797 200.982 51.0993 201.817 49.1785C202.544 47.5606 203.615 46.1212 204.957 44.961C206.225 43.8609 207.701 43.0261 209.297 42.506C210.88 41.9939 212.533 41.7332 214.197 41.7335C216.099 41.6671 217.992 42.0374 219.729 42.816C221.072 43.4323 222.207 44.4249 222.997 45.6735C223.715 46.8415 224.09 48.1877 224.08 49.5585C224.082 50.4135 223.924 51.2615 223.614 52.0585C223.3 52.89 222.851 53.6644 222.287 54.351C221.632 55.1174 220.875 55.7904 220.037 56.351C219.038 57.0156 217.966 57.5626 216.842 57.981C215.518 58.4728 214.158 58.8598 212.774 59.1385C211.158 59.463 209.52 59.6693 207.874 59.756C208.539 60.9733 209.567 61.953 210.814 62.5585C212.469 63.301 214.275 63.6436 216.087 63.5585H221.439V68.601H216.484ZM206.614 55.616C207.781 55.516 208.878 55.3793 209.907 55.206C210.861 55.0504 211.807 54.8443 212.739 54.5885C213.522 54.3735 214.287 54.0986 215.027 53.766C215.639 53.4893 216.218 53.1437 216.752 52.736C217.199 52.397 217.567 51.9655 217.832 51.471C218.07 51.0175 218.194 50.5131 218.194 50.001C218.197 49.1142 217.799 48.2735 217.112 47.7135C216.204 47.0458 215.089 46.7208 213.964 46.796C211.356 46.8059 208.947 48.1966 207.634 50.451C206.877 51.7947 206.501 53.3195 206.547 54.861C206.549 54.9822 206.557 55.1032 206.572 55.2235C206.595 55.3533 206.609 55.4844 206.614 55.616Z" fill="currentColor"/>
</svg>
`,YC=["innerHTML"],QC=Qe({__name:"DabbleLogo",props:{height:{default:28},color:{default:"currentColor"}},setup(r){return(t,e)=>(Dt(),re("span",{class:"dabble-logo",style:Yn({height:r.height+"px",color:r.color}),innerHTML:te(GC),"aria-label":"Dabble",role:"img"},null,12,YC))}}),ln=(r,t)=>{const e=r.__vccOpts||r;for(const[n,s]of t)e[n]=s;return e},W0=ln(QC,[["__scopeId","data-v-c6eceb52"]]),XC={class:"mk-wrap nav__inner"},JC={href:"#",class:"nav__brand"},tk={class:"nav__right"},ek=Qe({__name:"TheNav",setup(r){const t=Ve(!1),e=()=>t.value=window.scrollY>20;return Ao(()=>{e(),addEventListener("scroll",e,{passive:!0})}),$c(()=>removeEventListener("scroll",e)),(n,s)=>(Dt(),re("nav",{class:or(["nav",{"nav--scrolled":t.value}])},[F("div",XC,[F("a",JC,[Ut(W0,{height:36})]),s[2]||(s[2]=zc('<div class="nav__links" data-v-b5369fd2><a href="#features" data-v-b5369fd2>Features</a><a href="#pricing" data-v-b5369fd2>Pricing</a><a href="#" data-v-b5369fd2>DabbleU</a><a href="#compare" data-v-b5369fd2>Compare</a></div>',1)),F("div",tk,[Ut(te(Xn),{variant:"secondary",finish:"outlined",href:"#"},{default:Pr(()=>[...s[0]||(s[0]=[Oe("Log in",-1)])]),_:1}),Ut(te(Xn),{variant:"primary",finish:"filled",href:"#"},{default:Pr(()=>[...s[1]||(s[1]=[Oe("Start writing free",-1)])]),_:1})])])],2))}}),rk=ln(ek,[["__scopeId","data-v-b5369fd2"]]),nk={class:"hero"},sk={class:"mk-wrap hero__grid"},ik={class:"hero__copy"},ok={class:"hero__cta"},lk={class:"hero__media"},ak={class:"mk-device"},ck=["src"],uk=Qe({__name:"HeroSection",setup(r){const t="/dabble-website-preview/";return(e,n)=>(Dt(),re("header",nk,[F("div",sk,[F("div",ik,[n[2]||(n[2]=F("h1",null,[Oe("From first idea"),F("br"),Oe("to final chapter")],-1)),n[3]||(n[3]=F("p",{class:"hero__deck"}," Dabble is the writing app that keeps your whole novel — plot, prose, and edits — in one calm, focused place. Built by authors, for the way stories actually get made. ",-1)),F("div",ok,[Ut(te(Xn),{variant:"primary",finish:"filled",size:"large",href:"#"},{default:Pr(()=>[...n[0]||(n[0]=[Oe("Start writing free",-1)])]),_:1}),Ut(te(Xn),{variant:"secondary",finish:"outlined",size:"large",href:"#pricing"},{default:Pr(()=>[...n[1]||(n[1]=[Oe("See pricing →",-1)])]),_:1})]),n[4]||(n[4]=zc('<p class="hero__reassure" data-v-3bfc9596>No credit card · 14-day free trial</p><div class="hero__trust" data-v-3bfc9596><span data-v-3bfc9596><i class="mk-dot" style="background:var(--mk-teal);" data-v-3bfc9596></i> 10,000+ authors</span><span data-v-3bfc9596><i class="mk-dot" style="background:var(--mk-gold);" data-v-3bfc9596></i> 2.6 billion words written</span><span data-v-3bfc9596><i class="mk-dot" style="background:var(--mk-red);" data-v-3bfc9596></i> Web · Desktop · Mobile</span></div>',2))]),F("div",lk,[F("div",ak,[F("img",{src:te(t)+"screenshots/app-hero.png",alt:"The Dabble editor — Chapter 1 with the plot panel open"},null,8,ck),n[5]||(n[5]=F("div",{class:"mk-float-chip",style:{top:"-16px",right:"-14px"}},[F("i",{class:"mk-dot",style:{background:"var(--mk-blue)"}}),Oe(" All changes saved & synced ")],-1)),n[6]||(n[6]=F("div",{class:"mk-float-chip",style:{bottom:"-16px",left:"-14px"}},"🔥 7-day writing streak",-1))])])])]))}}),hk=ln(uk,[["__scopeId","data-v-3bfc9596"]]),dk={class:"mk-wrap counter__inner"},fk={class:"counter__nums"},pk={class:"counter__num"},gk={class:"counter__num"},mk=Qe({__name:"WordCounter",setup(r){const t=Ve(0),e=Ve(0),n=Ve(null),s=o=>o.toLocaleString("en-US");function i(o,a){if(matchMedia("(prefers-reduced-motion: reduce)").matches){a(o);return}const u=1600,d=performance.now(),p=f=>{const g=Math.min(1,(f-d)/u),b=1-Math.pow(1-g,3);a(Math.floor(o*b)),g<1&&requestAnimationFrame(p)};requestAnimationFrame(p)}return Ao(()=>{const o=new IntersectionObserver(a=>{a.forEach(c=>{c.isIntersecting&&(i(9214300,u=>t.value=u),i(26e8,u=>e.value=u),o.disconnect())})},{threshold:.5});n.value&&o.observe(n.value)}),(o,a)=>(Dt(),re("div",{class:"counter",ref_key:"root",ref:n},[F("div",dk,[a[2]||(a[2]=F("h2",{class:"counter__kicker"},"Words written in Dabble",-1)),F("div",fk,[F("div",null,[F("div",pk,_e(s(t.value)),1),a[0]||(a[0]=F("div",{class:"counter__lbl"},"Today",-1))]),F("div",null,[F("div",gk,_e(s(e.value)),1),a[1]||(a[1]=F("div",{class:"counter__lbl"},"All time",-1))])]),a[3]||(a[3]=zc('<p class="counter__frame" data-v-c9d24c53><span class="counter__dots" data-v-c9d24c53><i style="background:var(--mk-teal);" data-v-c9d24c53></i><i style="background:#4ad9d9;" data-v-c9d24c53></i><i style="background:var(--mk-gold);" data-v-c9d24c53></i><i style="background:var(--mk-red);" data-v-c9d24c53></i></span> Every one of them by a real author with a story to finish. </p>',1))])],512))}}),vk=ln(mk,[["__scopeId","data-v-c9d24c53"]]),wk={id:"features",class:"mk-section spine"},bk={class:"mk-wrap"},yk={class:"spine__copy"},Ck={class:"mk-eyebrow spine__eyebrow"},kk={class:"mk-muted"},xk={class:"spine__list"},_k={class:"spine__media"},Lk=["src","alt"],Mk=Qe({__name:"FeatureSpine",setup(r){const t="/dabble-website-preview/",e=[{key:"plot",accent:"var(--mk-gold)",label:"Plot",title:"Outline without the overwhelm",body:"Plot grids, story notes, and a corkboard that keep your whole arc in view — so the big picture never gets lost in chapter three.",points:["Visual plot grid & corkboard","Character profiles & story bible","Notes that grow with the book"],img:"screenshots/app-plot-grid.png",alt:"Dabble plot grid — plot points across a story line"},{key:"write",accent:"var(--mk-blue)",label:"Write",title:"Just you and the page",body:"A clean, distraction-free editor with goals, word-sprints, and Focus Mode. Your draft, your pace, nothing in the way.",points:["Distraction-free Focus Mode","Daily goals & word-sprint timer","Syncs everywhere, even offline"],img:"screenshots/app-focus.png",alt:"Dabble distraction-free Focus Mode"},{key:"edit",accent:"var(--mk-teal)",label:"Edit",title:"Polish like a pro",body:"Track changes, comments, and version history built for manuscripts — revise with confidence, never lose a word.",points:["Track changes & inline comments","Full version history","Cut a darling — recover it anytime"],img:"screenshots/app-track-changes.png",alt:"Dabble track changes on the First Draft branch"}];return(n,s)=>(Dt(),re("section",wk,[F("div",bk,[s[1]||(s[1]=F("div",{class:"mk-section-head"},[F("p",{class:"mk-eyebrow",style:{"text-align":"center"}},"Plot · Write · Edit"),F("h2",null,"One desk for the whole journey"),F("p",null,"Everything a novel needs, in the order you'll reach for it — nothing in the way.")],-1)),(Dt(),re(ve,null,Zs(e,(i,o)=>F("div",{key:i.key,class:or(["spine__row",{"spine__row--flip":o%2===1}])},[F("div",yk,[F("p",Ck,[F("span",{class:"spine__dot",style:Yn({background:i.accent})},null,4),Oe(" "+_e(i.label),1)]),F("h3",null,_e(i.title),1),F("p",kk,_e(i.body),1),F("ul",xk,[(Dt(!0),re(ve,null,Zs(i.points,a=>(Dt(),re("li",{key:a},[s[0]||(s[0]=F("svg",{width:"18",height:"18",viewBox:"0 0 18 18"},[F("path",{d:"M4 9.5l3 3 7-8",stroke:"var(--mk-blue)","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Oe(" "+_e(a),1)]))),128))]),Ut(te(Xn),{variant:"primary",finish:"link",href:"#"},{default:Pr(()=>[Oe("Explore "+_e(i.label)+" →",1)]),_:2},1024)]),F("div",_k,[F("div",{class:"spine__card",style:Yn({"--ac":i.accent})},[F("img",{src:te(t)+i.img,alt:i.alt},null,8,Lk)],4)])],2)),64))])]))}}),Ek=ln(Mk,[["__scopeId","data-v-1586effa"]]),Tk={id:"compare",class:"mk-section compare"},Nk={class:"mk-wrap"},Ak={class:"cmp"},Sk={style:{"text-align":"center","margin-top":"22px"}},Ok=Qe({__name:"CompareSection",setup(r){const t=[{label:"Whole-novel organization",d:"yes",w:"no",g:"no",s:"yes"},{label:"Distraction-free writing",d:"yes",w:"no",g:"no",s:"partial"},{label:"Track changes for manuscripts",d:"yes",w:"yes",g:"partial",s:"no"},{label:"Plotting & story tools",d:"yes",w:"no",g:"no",s:"yes"},{label:"Syncs everywhere",d:"yes",w:"partial",g:"yes",s:"no"},{label:"No fiddly setup",d:"yes",w:"yes",g:"yes",s:"no"}],e=n=>n==="yes"?"✓":n==="no"?"—":"partial";return(n,s)=>(Dt(),re("section",Tk,[F("div",Nk,[s[2]||(s[2]=F("div",{class:"mk-section-head"},[F("h2",null,"A novel deserves more than a blank document"),F("p",null,[Oe("Word and Docs were built for memos. Scrivener for power users with a manual. "),F("strong",null,"Dabble was built for storytellers"),Oe(" — powerful where it counts, calm everywhere else.")])],-1)),F("div",Ak,[F("table",null,[s[0]||(s[0]=F("thead",null,[F("tr",null,[F("th"),F("th",{class:"cmp__dabble"},"Dabble"),F("th",null,"Word"),F("th",null,"Google Docs"),F("th",null,"Scrivener")])],-1)),F("tbody",null,[(Dt(),re(ve,null,Zs(t,i=>F("tr",{key:i.label},[F("td",null,_e(i.label),1),F("td",{class:or(["cmp__dabble",i.d==="yes"?"cmp__yes":"cmp__no"])},_e(e(i.d)),3),F("td",{class:or(i.w==="yes"?"cmp__yes":"cmp__no")},_e(e(i.w)),3),F("td",{class:or(i.g==="yes"?"cmp__yes":"cmp__no")},_e(e(i.g)),3),F("td",{class:or(i.s==="yes"?"cmp__yes":"cmp__no")},_e(e(i.s)),3)])),64))])])]),F("p",Sk,[Ut(te(Xn),{variant:"primary",finish:"link",href:"#"},{default:Pr(()=>[...s[1]||(s[1]=[Oe("See the full Scrivener comparison →",-1)])]),_:1})])])]))}}),Ik=ln(Ok,[["__scopeId","data-v-1e61fe03"]]),jk={class:"mk-section proof"},Bk={class:"mk-wrap"},qk={class:"proof__cards"},Rk={class:"tcard__q"},Hk={class:"tcard__who"},$k=["src","alt"],Dk={class:"tcard__nm"},Pk={class:"tcard__meta"},Uk={class:"shelf"},zk={class:"shelf__books"},Fk=["src","alt"],Vk=Qe({__name:"Testimonials",setup(r){const t="/dabble-website-preview/",e=[{q:"Dabble has provided me with the necessary support to bring the vivid landscapes of my imagination to life.",nm:"Adrian Snow",meta:"Novelist",img:"images/avatars/adrian-snow.jpeg"},{q:"I love how seamless it is. I can keep my writing notes and characters straight right in Dabble.",nm:"Victorine E. Lieske",meta:"Bestselling author",img:"images/avatars/victorine-lieske.jpeg"},{q:"The word tracking is amazing. It gives me a goal every day.",nm:"Dana Isaly",meta:"Romance author",img:"images/avatars/dana-isaly.jpeg"}],n=[{t:"The Sword of Jupiter",img:"books/the-sword-of-jupiter.jpg"},{t:"Emerald-Eyed Luna",img:"books/emerald-eyed-luna.jpg"},{t:"The House on Foster Hill",img:"books/the-house-on-foster-hill.jpg"},{t:"Accidentally Married",img:"books/accidentally-married.jpg"},{t:"As Above, So Below",img:"books/as-above-so-below.jpg"}];return(s,i)=>(Dt(),re("section",jk,[F("div",Bk,[i[2]||(i[2]=F("div",{class:"mk-section-head"},[F("h2",null,"Loved by authors who finish")],-1)),F("div",qk,[(Dt(),re(ve,null,Zs(e,o=>F("div",{key:o.nm,class:"tcard"},[F("p",Rk,'"'+_e(o.q)+'"',1),F("div",Hk,[F("img",{class:"tcard__avatar",src:te(t)+o.img,alt:o.nm},null,8,$k),F("div",null,[F("div",Dk,_e(o.nm),1),F("div",Pk,_e(o.meta),1)])])])),64))]),F("div",Uk,[i[0]||(i[0]=F("h3",null,"Written in Dabble",-1)),F("div",zk,[(Dt(),re(ve,null,Zs(n,o=>F("img",{key:o.t,class:"book",src:te(t)+o.img,alt:o.t},null,8,Fk)),64))]),i[1]||(i[1]=F("p",{class:"mk-muted",style:{"margin-top":"20px"}},"Real books. Real authors. Real word counts.",-1))])])]))}}),Zk=ln(Vk,[["__scopeId","data-v-b8e1d311"]]),Kk={class:"mk-section founder"},Wk={class:"mk-wrap"},Gk={class:"letter"},Yk={class:"letter__sign"},Qk=["src"],Xk=Qe({__name:"FounderLetter",setup(r){const t="/dabble-website-preview/";return(e,n)=>(Dt(),re("section",Kk,[F("div",Wk,[F("div",Gk,[n[1]||(n[1]=F("h3",null,"A note from a writer who got tired of fighting his tools",-1)),n[2]||(n[2]=F("p",{class:"letter__body"},` "I built Dabble because I wanted to write my novel, not wrestle my software. Every feature here exists because an author — often me — needed it at 11pm with a deadline and a half-finished chapter. This is the writing app I wish I'd had." `,-1)),F("div",Yk,[F("img",{class:"letter__photo",src:te(t)+"images/avatars/jacob-wright.png",alt:"Jacob Wright"},null,8,Qk),n[0]||(n[0]=F("div",null,[F("div",{class:"letter__sig"},"Jacob Wright"),F("div",{class:"mk-muted",style:{"font-size":"14px"}},"Founder & CEO")],-1))])])])]))}}),Jk=ln(Xk,[["__scopeId","data-v-6c525d45"]]),tx={class:"mk-section final"},ex={class:"mk-wrap"},rx={class:"cta-card"},nx={class:"cta-card__row"},sx=Qe({__name:"FinalCta",setup(r){return(t,e)=>(Dt(),re("section",tx,[F("div",ex,[F("div",rx,[e[2]||(e[2]=F("h2",null,"Your story is waiting. So is your desk.",-1)),e[3]||(e[3]=F("p",null,"Start free today — keep your plot, your draft, and your edits in one calm place.",-1)),F("div",nx,[Ut(te(Xn),{variant:"primary",finish:"filled",size:"large",href:"#"},{default:Pr(()=>[...e[0]||(e[0]=[Oe("Start writing free",-1)])]),_:1}),Ut(te(Xn),{variant:"secondary",finish:"outlined",size:"large",href:"#pricing"},{default:Pr(()=>[...e[1]||(e[1]=[Oe("Compare plans →",-1)])]),_:1})]),e[4]||(e[4]=F("p",{class:"cta-card__reassure"},"No credit card · 14-day free trial",-1))])])]))}}),ix=ln(sx,[["__scopeId","data-v-18364515"]]),ox={class:"footer"},lx={class:"mk-wrap footer__grid"},ax=Qe({__name:"TheFooter",setup(r){const t=[{h:"Product",links:["Features","Pricing","Compare","Gift cards"]},{h:"Resources",links:["DabbleU articles","Blog","Word sprints","60-day challenge","Support & FAQ"]},{h:"Company",links:["About","Reviews","Community","Affiliates","Press kit"]}];return(e,n)=>(Dt(),re("footer",ox,[F("div",lx,[F("div",null,[Ut(W0,{height:30,color:"#faf9f8"}),n[0]||(n[0]=F("p",{class:"footer__tagline"},"The writing app for people who finish. Built by authors.",-1))]),(Dt(),re(ve,null,Zs(t,s=>F("div",{key:s.h,class:"footer__col"},[F("h4",null,_e(s.h),1),(Dt(!0),re(ve,null,Zs(s.links,i=>(Dt(),re("a",{key:i,href:"#"},_e(i),1))),128))])),64))]),n[1]||(n[1]=F("div",{class:"footer__bar"},[F("div",{class:"mk-wrap footer__bar-inner"},[F("span",null,"© 2026 Dabble Writer. All rights reserved."),F("span",null,"Privacy · Terms")])],-1))]))}}),cx=ln(ax,[["__scopeId","data-v-2d205f09"]]),ux={class:"mk-shell"},hx=Qe({__name:"App",setup(r){return(t,e)=>(Dt(),re("div",ux,[Ut(rk),F("main",null,[Ut(hk),Ut(vk),Ut(Ek),Ut(Ik),Ut(Zk),Ut(Jk),Ut(ix)]),Ut(cx)]))}});b6(hx).use(x6()).mount("#app")});export default dx();
