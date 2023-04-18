var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let n;const s=new Uint8Array(16);function i(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(s)}const r=[];for(let t=0;t<256;++t)r.push((t+256).toString(16).slice(1));function o(t,e=0){return(r[t[e+0]]+r[t[e+1]]+r[t[e+2]]+r[t[e+3]]+"-"+r[t[e+4]]+r[t[e+5]]+"-"+r[t[e+6]]+r[t[e+7]]+"-"+r[t[e+8]]+r[t[e+9]]+"-"+r[t[e+10]]+r[t[e+11]]+r[t[e+12]]+r[t[e+13]]+r[t[e+14]]+r[t[e+15]]).toLowerCase()}var a=function(t,n,s){if(e.randomUUID&&!n&&!t)return e.randomUUID();const r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){s=s||0;for(let t=0;t<16;++t)n[s+t]=r[t];return n}return o(r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var c,u,h,l=c={};function d(){throw new Error("setTimeout has not been defined")}function f(){throw new Error("clearTimeout has not been defined")}function p(t){if(u===setTimeout)return setTimeout(t,0);if((u===d||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}!function(){try{u="function"==typeof setTimeout?setTimeout:d}catch(t){u=d}try{h="function"==typeof clearTimeout?clearTimeout:f}catch(t){h=f}}();var g,m=[],y=!1,v=-1;function w(){y&&g&&(y=!1,g.length?m=g.concat(m):v=-1,m.length&&E())}function E(){if(!y){var t=p(w);y=!0;for(var e=m.length;e;){for(g=m,m=[];++v<e;)g&&g[v].run();v=-1,e=m.length}g=null,y=!1,function(t){if(h===clearTimeout)return clearTimeout(t);if((h===f||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}(t)}}function b(t,e){this.fun=t,this.array=e}function T(){}l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new b(t,e)),1!==m.length||y||p(E)},b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=T,l.addListener=T,l.once=T,l.off=T,l.removeListener=T,l.removeAllListeners=T,l.emit=T,l.prependListener=T,l.prependOnceListener=T,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};const I=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},C={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw new S;const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _=function(t){return function(t){const e=I(t);return C.encodeByteArray(e,!0)}(t).replace(/\./g,"")},A=function(t){try{return C.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,N=()=>{try{return D()||(()=>{if(void 0===c||void 0===c.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&A(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},k=t=>{const e=(t=>{var e,n;return null===(n=null===(e=N())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},R=()=>{var t;return null===(t=N())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_(JSON.stringify({alg:"none",type:"JWT"})),_(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){try{return"object"==typeof indexedDB}catch(t){return!1}}class M extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(F,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new M(s,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(U(n)&&U(r)){if(!P(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function U(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(t){return t&&t._delegate?t._delegate:t}class q{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new L;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:j})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=j){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=j){return this.instances.has(t)}getOptions(t=j){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===j?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t=j){return this.component?this.component.multipleInstances?t:j:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class G{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new z(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=[];var H,Q;(Q=H||(H={}))[Q.DEBUG=0]="DEBUG",Q[Q.VERBOSE=1]="VERBOSE",Q[Q.INFO=2]="INFO",Q[Q.WARN=3]="WARN",Q[Q.ERROR=4]="ERROR",Q[Q.SILENT=5]="SILENT";const W={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},X=H.INFO,Y={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},J=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=Y[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class Z{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?W[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}constructor(t){this.name=t,this._logLevel=X,this._logHandler=J,this._userLogHandler=null,K.push(this)}}const tt=(t,e)=>e.some((e=>t instanceof e));let et,nt;const st=new WeakMap,it=new WeakMap,rt=new WeakMap,ot=new WeakMap,at=new WeakMap;let ct={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return it.get(t);if("objectStoreNames"===e)return t.objectStoreNames||rt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function ut(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(nt||(nt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(dt(this),e),lt(st.get(this))}:function(...e){return lt(t.apply(dt(this),e))}:function(e,...n){const s=t.call(dt(this),e,...n);return rt.set(s,e.sort?e.sort():[e]),lt(s)}}function ht(t){return"function"==typeof t?ut(t):(t instanceof IDBTransaction&&function(t){if(it.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));it.set(t,e)}(t),tt(t,et||(et=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,ct):t)}function lt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(lt(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&st.set(e,t)})).catch((()=>{})),at.set(e,t),e}(t);if(ot.has(t))return ot.get(t);const e=ht(t);return e!==t&&(ot.set(t,e),at.set(e,t)),e}const dt=t=>at.get(t);function ft(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=lt(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(lt(o.result),t.oldVersion,t.newVersion,lt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const pt=["get","getKey","getAll","getAllKeys","count"],gt=["put","add","delete","clear"],mt=new Map;function yt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(mt.get(e))return mt.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=gt.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!pt.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return mt.set(e,r),r}ct=(t=>({...t,get:(e,n,s)=>yt(e,n)||t.get(e,n,s),has:(e,n)=>!!yt(e,n)||t.has(e,n)}))(ct);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const wt="@firebase/app",Et="0.9.7",bt=new Z("@firebase/app"),Tt="[DEFAULT]",It={[wt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ct=new Map,St=new Map;function _t(t,e){try{t.container.addComponent(e)}catch(n){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function At(t){const e=t.name;if(St.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;St.set(e,t);for(const e of Ct.values())_t(e,t);return!0}function Dt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nt=new V("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new q("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:Tt,automaticDataCollectionEnabled:!1},e),i=s.name;if("string"!=typeof i||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(n||(n=R()),!n)throw Nt.create("no-options");const r=Ct.get(i);if(r){if(P(n,r.options)&&P(s,r.config))return r;throw Nt.create("duplicate-app",{appName:i})}const o=new G(i);for(const t of St.values())o.addComponent(t);const a=new kt(n,s,o);return Ct.set(i,a),a}function Lt(t=Tt){const e=Ct.get(t);if(!e&&t===Tt)return Rt();if(!e)throw Nt.create("no-app",{appName:t});return e}function xt(t,e,n){var s;let i=null!==(s=It[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void bt.warn(t.join(" "))}At(new q(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ot="firebase-heartbeat-database",Mt=1,Vt="firebase-heartbeat-store";let Ft=null;function Pt(){return Ft||(Ft=ft(Ot,Mt,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Vt)}}).catch((t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})}))),Ft}async function Ut(t,e){try{const n=(await Pt()).transaction(Vt,"readwrite"),s=n.objectStore(Vt);return await s.put(e,Bt(t)),n.done}catch(t){if(t instanceof M)bt.warn(t.message);else{const e=Nt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});bt.warn(e.message)}}}function Bt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=1024;class $t{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=jt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=jt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=qt){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Gt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=_(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new zt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function jt(){return(new Date).toISOString().substring(0,10)}class zt{async runIndexedDBEnvironmentCheck(){return!!O()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await Pt()).transaction(Vt).objectStore(Vt).get(Bt(t))}catch(t){if(t instanceof M)bt.warn(t.message);else{const e=Nt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});bt.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ut(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ut(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Gt(t){return _(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt;Kt="",At(new q("platform-logger",(t=>new vt(t)),"PRIVATE")),At(new q("heartbeat",(t=>new $t(t)),"PRIVATE")),xt(wt,Et,Kt),xt(wt,Et,"esm2017"),xt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xt("firebase","9.19.1","app");var Ht,Qt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Wt={},Xt=Xt||{},Yt=Qt||self;function Jt(){}function Zt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function te(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ee="closure_uid_"+(1e9*Math.random()>>>0),ne=0;function se(t,e,n){return t.call.apply(t.bind,arguments)}function ie(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function re(t,e,n){return(re=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?se:ie).apply(null,arguments)}function oe(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ae(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function ce(){this.s=this.s,this.o=this.o}ce.prototype.s=!1,ce.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,ee)&&t[ee]||(t[ee]=++ne))},ce.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ue=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function he(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function le(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Zt(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let i=0;i<s;i++)t[e+i]=n[i]}else t.push(n)}}function de(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!Yt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Yt.addEventListener("test",Jt,e),Yt.removeEventListener("test",Jt,e)}catch(t){}return t}();function pe(t){return/^[\s\xa0]*$/.test(t)}var ge=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function me(t,e){return t<e?-1:t>e?1:0}function ye(){var t=Yt.navigator;return t&&(t=t.userAgent)?t:""}function ve(t){return-1!=ye().indexOf(t)}function we(t){return we[" "](t),t}we[" "]=Jt;var Ee,be,Te=ve("Opera"),Ie=ve("Trident")||ve("MSIE"),Ce=ve("Edge"),Se=Ce||Ie,_e=ve("Gecko")&&!(-1!=ye().toLowerCase().indexOf("webkit")&&!ve("Edge"))&&!(ve("Trident")||ve("MSIE"))&&!ve("Edge"),Ae=-1!=ye().toLowerCase().indexOf("webkit")&&!ve("Edge");function De(){var t=Yt.document;return t?t.documentMode:void 0}t:{var Ne="",ke=(be=ye(),_e?/rv:([^\);]+)(\)|;)/.exec(be):Ce?/Edge\/([\d\.]+)/.exec(be):Ie?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(be):Ae?/WebKit\/(\S+)/.exec(be):Te?/(?:Version)[ \/]?(\S+)/.exec(be):void 0);if(ke&&(Ne=ke?ke[1]:""),Ie){var Re=De();if(null!=Re&&Re>parseFloat(Ne)){Ee=String(Re);break t}}Ee=Ne}var Le,xe={};function Oe(){return function(t){var e=xe;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=ge(String(Ee)).split("."),n=ge("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=me(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||me(0==i[2].length,0==r[2].length)||me(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(Yt.document&&Ie){var Me=De();Le=Me||(parseInt(Ee,10)||void 0)}else Le=void 0;var Ve=Le;function Fe(t,e){if(de.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_e){t:{try{we(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Pe[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fe.X.h.call(this)}}ae(Fe,de);var Pe={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),Be=0;function qe(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Be,this.ba=this.ea=!1}function $e(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function je(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ze(t){const e={};for(const n in t)e[n]=t[n];return e}const Ge="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ke(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Ge.length;e++)n=Ge[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function He(t){this.src=t,this.g={},this.h=0}function Qe(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=ue(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&($e(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function We(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}He.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=We(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new qe(e,this.src,r,!!s,i)).ea=n,t.push(e)),e};var Xe="closure_lm_"+(1e6*Math.random()|0),Ye={};function Je(t,e,n,s,i){if(s&&s.once)return tn(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Je(t,e[r],n,s,i);return null}return n=cn(n),t&&t[Ue]?t.N(e,n,te(s)?!!s.capture:!!s,i):Ze(t,e,n,!1,s,i)}function Ze(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=te(i)?!!i.capture:!!i,a=on(t);if(a||(t[Xe]=a=new He(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=rn;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)fe||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(sn(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function tn(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)tn(t,e[r],n,s,i);return null}return n=cn(n),t&&t[Ue]?t.O(e,n,te(s)?!!s.capture:!!s,i):Ze(t,e,n,!0,s,i)}function en(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)en(t,e[r],n,s,i);else s=te(s)?!!s.capture:!!s,n=cn(n),t&&t[Ue]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=We(r=t.g[e],n,s,i))&&($e(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=on(t))&&(e=t.g[e.toString()],t=-1,e&&(t=We(e,n,s,i)),(n=-1<t?e[t]:null)&&nn(n))}function nn(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Ue])Qe(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(sn(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=on(e))?(Qe(n,t),0==n.h&&(n.src=null,e[Xe]=null)):$e(t)}}}function sn(t){return t in Ye?Ye[t]:Ye[t]="on"+t}function rn(t,e){if(t.ba)t=!0;else{e=new Fe(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&nn(t),t=n.call(s,e)}return t}function on(t){return(t=t[Xe])instanceof He?t:null}var an="__closure_events_fn_"+(1e9*Math.random()>>>0);function cn(t){return"function"==typeof t?t:(t[an]||(t[an]=function(e){return t.handleEvent(e)}),t[an])}function un(){ce.call(this),this.i=new He(this),this.P=this,this.I=null}function hn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new de(e,t);else if(e instanceof de)e.target=e.target||t;else{var i=e;Ke(e=new de(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ln(o,s,!0,e)&&i}if(i=ln(o=e.g=t,s,!0,e)&&i,i=ln(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=ln(o=e.g=n[r],s,!1,e)&&i}function ln(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Qe(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}ae(un,ce),un.prototype[Ue]=!0,un.prototype.removeEventListener=function(t,e,n,s){en(this,t,e,n,s)},un.prototype.M=function(){if(un.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)$e(n[s]);delete e.g[t],e.h--}}this.I=null},un.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},un.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var dn=Yt.JSON.stringify;function fn(){var t=En;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var pn,gn=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new mn),(t=>t.reset()));class mn{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function yn(t){Yt.setTimeout((()=>{throw t}),0)}function vn(t,e){pn||function(){var t=Yt.Promise.resolve(void 0);pn=function(){t.then(bn)}}(),wn||(pn(),wn=!0),En.add(t,e)}var wn=!1,En=new class{add(t,e){const n=gn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function bn(){for(var t;t=fn();){try{t.h.call(t.g)}catch(t){yn(t)}var e=gn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wn=!1}function Tn(t,e){un.call(this),this.h=t||1,this.g=e||Yt,this.j=re(this.lb,this),this.l=Date.now()}function In(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Cn(t,e,n){if("function"==typeof t)n&&(t=re(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=re(t.handleEvent,t)}return 2147483647<Number(e)?-1:Yt.setTimeout(t,e||0)}function Sn(t){t.g=Cn((()=>{t.g=null,t.i&&(t.i=!1,Sn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ae(Tn,un),(Ht=Tn.prototype).ca=!1,Ht.R=null,Ht.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),hn(this,"tick"),this.ca&&(In(this),this.start()))}},Ht.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ht.M=function(){Tn.X.M.call(this),In(this),delete this.g};class _n extends ce{l(t){this.h=arguments,this.g?this.i=!0:Sn(this)}M(){super.M(),this.g&&(Yt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function An(t){ce.call(this),this.h=t,this.g={}}ae(An,ce);var Dn=[];function Nn(t,e,n,s){Array.isArray(n)||(n&&(Dn[0]=n.toString()),n=Dn);for(var i=0;i<n.length;i++){var r=Je(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function kn(t){je(t.g,(function(t,e){this.g.hasOwnProperty(e)&&nn(t)}),t),t.g={}}function Rn(){this.g=!0}function Ln(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return dn(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}An.prototype.M=function(){An.X.M.call(this),kn(this)},An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Rn.prototype.Aa=function(){this.g=!1},Rn.prototype.info=function(){};var xn={},On=null;function Mn(){return On=On||new un}function Vn(t){de.call(this,xn.Pa,t)}function Fn(t){const e=Mn();hn(e,new Vn(e))}function Pn(t,e){de.call(this,xn.STAT_EVENT,t),this.stat=e}function Un(t){const e=Mn();hn(e,new Pn(e,t))}function Bn(t,e){de.call(this,xn.Qa,t),this.size=e}function qn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Yt.setTimeout((function(){t()}),e)}xn.Pa="serverreachability",ae(Vn,de),xn.STAT_EVENT="statevent",ae(Pn,de),xn.Qa="timingevent",ae(Bn,de);var $n={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},jn={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function zn(){}function Gn(t){return t.h||(t.h=t.i())}function Kn(){}zn.prototype.h=null;var Hn,Qn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Wn(){de.call(this,"d")}function Xn(){de.call(this,"c")}function Yn(){}function Jn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new An(this),this.O=ts,t=Se?125:void 0,this.T=new Tn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Zn}function Zn(){this.i=null,this.g="",this.h=!1}ae(Wn,de),ae(Xn,de),ae(Yn,zn),Yn.prototype.g=function(){return new XMLHttpRequest},Yn.prototype.i=function(){return{}},Hn=new Yn;var ts=45e3,es={},ns={};function ss(t,e,n){t.K=1,t.v=Ts(ys(e)),t.s=n,t.P=!0,is(t,null)}function is(t,e){t.F=Date.now(),cs(t),t.A=ys(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ms(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Zn,t.g=Oi(t.l,n?e:null,!t.s),0<t.N&&(t.L=new _n(re(t.La,t,t.g),t.N)),Nn(t.S,t.g,"readystatechange",t.ib),e=t.H?ze(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Fn(),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function rs(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function os(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=as(t,n),s==ns){4==e&&(t.o=4,Un(14),i=!1),Ln(t.j,t.m,null,"[Incomplete Response]");break}if(s==es){t.o=4,Un(15),Ln(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Ln(t.j,t.m,s,null),fs(t,s)}rs(t)&&s!=ns&&s!=es&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Un(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),_i(e),e.K=!0,Un(11))):(Ln(t.j,t.m,n,"[Invalid Chunked Response]"),ds(t),ls(t))}function as(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?ns:(n=Number(e.substring(n,s)),isNaN(n)?es:(s+=1)+n>e.length?ns:(e=e.substr(s,n),t.C=s+n,e))}function cs(t){t.V=Date.now()+t.O,us(t,t.O)}function us(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=qn(re(t.gb,t),e)}function hs(t){t.B&&(Yt.clearTimeout(t.B),t.B=null)}function ls(t){0==t.l.G||t.I||Ni(t.l,t)}function ds(t){hs(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,In(t.T),kn(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function fs(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||qs(n.h,t)))if(!t.J&&qs(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Di(n),vi(n)}Si(n),Un(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=qn(re(n.cb,n),6e3));if(1>=Bs(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Ri(n,11)}else if((t.J||n.g==t)&&Di(n),!pe(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&($s(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,bs(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((s=n).sa=xi(s,s.H?s.ka:null,s.V),o.J){js(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(hs(a),cs(a)),s.g=o}else Ci(s);0<n.i.length&&Ei(n)}else"stop"!=u[0]&&"close"!=u[0]||Ri(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ri(n,7):yi(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Fn()}catch(t){}}function ps(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Zt(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Zt(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Zt(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}(Ht=Jn.prototype).setTimeout=function(t){this.O=t},Ht.ib=function(t){t=t.target;const e=this.L;e&&3==li(t)?e.l():this.La(t)},Ht.La=function(t){try{if(t==this.g)t:{const h=li(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||Se||this.g&&(this.h.h||this.g.fa()||di(this.g)))){this.I||4!=h||7==e||Fn(),hs(this);var n=this.g.aa();this.Y=n;e:if(rs(this)){var s=di(this.g);t="";var i=s.length,r=4==li(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ds(this),ls(this);var o="";break e}this.h.i=new Yt.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pe(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Un(12),ds(this),ls(this);break t}Ln(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fs(this,n)}this.P?(os(this,h,o),Se&&this.i&&3==h&&(Nn(this.S,this.T,"tick",this.hb),this.T.start())):(Ln(this.j,this.m,o,null),fs(this,o)),4==h&&ds(this),this.i&&!this.I&&(4==h?Ni(this.l,this):(this.i=!1,cs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Un(12)):(this.o=0,Un(13)),ds(this),ls(this)}}}catch(t){}},Ht.hb=function(){if(this.g){var t=li(this.g),e=this.g.fa();this.C<e.length&&(hs(this),os(this,t,e),this.i&&4!=t&&cs(this))}},Ht.cancel=function(){this.I=!0,ds(this)},Ht.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Fn(),Un(17)),ds(this),this.o=2,ls(this)):us(this,this.V-t)};var gs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ms(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ms){this.h=void 0!==e?e:t.h,vs(this,t.j),this.s=t.s,this.g=t.g,ws(this,t.m),this.l=t.l,e=t.i;var n=new Rs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Es(this,n),this.o=t.o}else t&&(n=String(t).match(gs))?(this.h=!!e,vs(this,n[1]||"",!0),this.s=Is(n[2]||""),this.g=Is(n[3]||"",!0),ws(this,n[4]),this.l=Is(n[5]||"",!0),Es(this,n[6]||"",!0),this.o=Is(n[7]||"")):(this.h=!!e,this.i=new Rs(null,this.h))}function ys(t){return new ms(t)}function vs(t,e,n){t.j=n?Is(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ws(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Es(t,e,n){e instanceof Rs?(t.i=e,function(t,e){e&&!t.j&&(Ls(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(xs(this,e),Ms(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Cs(e,Ns)),t.i=new Rs(e,t.h))}function bs(t,e,n){t.i.set(e,n)}function Ts(t){return bs(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Is(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cs(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ss),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ss(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ms.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Cs(e,_s,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Cs(e,_s,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Cs(n,"/"==n.charAt(0)?Ds:As,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Cs(n,ks)),t.join("")};var _s=/[#\/\?@]/g,As=/[#\?:]/g,Ds=/[#\?]/g,Ns=/[#\?@]/g,ks=/#/g;function Rs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ls(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function xs(t,e){Ls(t),e=Vs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Os(t,e){return Ls(t),e=Vs(t,e),t.g.has(e)}function Ms(t,e,n){xs(t,e),0<n.length&&(t.i=null,t.g.set(Vs(t,e),he(n)),t.h+=n.length)}function Vs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ht=Rs.prototype).add=function(t,e){Ls(this),this.i=null,t=Vs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ht.forEach=function(t,e){Ls(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},Ht.oa=function(){Ls(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},Ht.W=function(t){Ls(this);let e=[];if("string"==typeof t)Os(this,t)&&(e=e.concat(this.g.get(Vs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Ht.set=function(t,e){return Ls(this),this.i=null,Os(this,t=Vs(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ht.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Ht.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Fs(t){this.l=t||Ps,Yt.PerformanceNavigationTiming?t=0<(t=Yt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Yt.g&&Yt.g.Ga&&Yt.g.Ga()&&Yt.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ps=10;function Us(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Bs(t){return t.h?1:t.g?t.g.size:0}function qs(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function $s(t,e){t.g?t.g.add(e):t.h=e}function js(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function zs(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return he(t.i)}function Gs(){}function Ks(){this.g=new Gs}function Hs(t,e,n){const s=n||"";try{ps(t,(function(t,n){let i=t;te(t)&&(i=dn(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function Qs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function Ws(t){this.l=t.ac||null,this.j=t.jb||!1}function Xs(t,e){un.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ys,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fs.prototype.cancel=function(){if(this.i=zs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Gs.prototype.stringify=function(t){return Yt.JSON.stringify(t,void 0)},Gs.prototype.parse=function(t){return Yt.JSON.parse(t,void 0)},ae(Ws,zn),Ws.prototype.g=function(){return new Xs(this.l,this.j)},Ws.prototype.i=function(t){return function(){return t}}({}),ae(Xs,un);var Ys=0;function Js(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Zs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ti(t)}function ti(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ht=Xs.prototype).open=function(t,e){if(this.readyState!=Ys)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ti(this)},Ht.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Yt).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Ht.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Zs(this)),this.readyState=Ys},Ht.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Yt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Js(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Ht.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zs(this):ti(this),3==this.readyState&&Js(this)}},Ht.Va=function(t){this.g&&(this.response=this.responseText=t,Zs(this))},Ht.Ua=function(t){this.g&&(this.response=t,Zs(this))},Ht.ga=function(){this.g&&Zs(this)},Ht.setRequestHeader=function(t,e){this.v.append(t,e)},Ht.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ht.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Xs.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ei=Yt.JSON.parse;function ni(t){un.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=si,this.K=this.L=!1}ae(ni,un);var si="",ii=/^https?$/i,ri=["POST","PUT"];function oi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ai(t),ui(t)}function ai(t){t.D||(t.D=!0,hn(t,"complete"),hn(t,"error"))}function ci(t){if(t.h&&void 0!==Xt&&(!t.C[1]||4!=li(t)||2!=t.aa()))if(t.v&&4==li(t))Cn(t.Ha,0,t);else if(hn(t,"readystatechange"),4==li(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(gs)[1]||null;if(!i&&Yt.self&&Yt.self.location){var r=Yt.self.location.protocol;i=r.substr(0,r.length-1)}s=!ii.test(i?i.toLowerCase():"")}n=s}if(n)hn(t,"complete"),hn(t,"success");else{t.m=6;try{var o=2<li(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",ai(t)}}finally{ui(t)}}}function ui(t,e){if(t.g){hi(t);const n=t.g,s=t.C[0]?Jt:null;t.g=null,t.C=null,e||hn(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function hi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Yt.clearTimeout(t.A),t.A=null)}function li(t){return t.g?t.g.readyState:0}function di(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case si:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function fi(t){let e="";return je(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function pi(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=fi(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):bs(t,e,n))}function gi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mi(t){this.Ca=0,this.i=[],this.j=new Rn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=gi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=gi("baseRetryDelayMs",5e3,t),this.bb=gi("retryDelaySeedMs",1e4,t),this.$a=gi("forwardChannelMaxRetries",2,t),this.ta=gi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Fs(t&&t.concurrentRequestLimit),this.Fa=new Ks,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function yi(t){if(wi(t),3==t.G){var e=t.U++,n=ys(t.F);bs(n,"SID",t.I),bs(n,"RID",e),bs(n,"TYPE","terminate"),Ti(t,n),(e=new Jn(t,t.j,e,void 0)).K=2,e.v=Ts(ys(n)),n=!1,Yt.navigator&&Yt.navigator.sendBeacon&&(n=Yt.navigator.sendBeacon(e.v.toString(),"")),!n&&Yt.Image&&((new Image).src=e.v,n=!0),n||(e.g=Oi(e.l,null),e.g.da(e.v)),e.F=Date.now(),cs(e)}Li(t)}function vi(t){t.g&&(_i(t),t.g.cancel(),t.g=null)}function wi(t){vi(t),t.u&&(Yt.clearTimeout(t.u),t.u=null),Di(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Yt.clearTimeout(t.m),t.m=null)}function Ei(t){Us(t.h)||t.m||(t.m=!0,vn(t.Ja,t),t.C=0)}function bi(t,e){var n;n=e?e.m:t.U++;const s=ys(t.F);bs(s,"SID",t.I),bs(s,"RID",n),bs(s,"AID",t.T),Ti(t,s),t.o&&t.s&&pi(s,t.o,t.s),n=new Jn(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ii(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),$s(t.h,n),ss(n,s,e)}function Ti(t,e){t.ia&&je(t.ia,(function(t,n){bs(e,n,t)})),t.l&&ps({},(function(t,n){bs(e,n,t)}))}function Ii(t,e,n){n=Math.min(t.i.length,n);var s=t.l?re(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Hs(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function Ci(t){t.g||t.u||(t.Z=1,vn(t.Ia,t),t.A=0)}function Si(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=qn(re(t.Ia,t),ki(t,t.A)),t.A++,!0)}function _i(t){null!=t.B&&(Yt.clearTimeout(t.B),t.B=null)}function Ai(t){t.g=new Jn(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=ys(t.sa);bs(e,"RID","rpc"),bs(e,"SID",t.I),bs(e,"CI",t.L?"0":"1"),bs(e,"AID",t.T),bs(e,"TYPE","xmlhttp"),Ti(t,e),t.o&&t.s&&pi(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ts(ys(e)),n.s=null,n.P=!0,is(n,t)}function Di(t){null!=t.v&&(Yt.clearTimeout(t.v),t.v=null)}function Ni(t,e){var n=null;if(t.g==e){Di(t),_i(t),t.g=null;var s=2}else{if(!qs(t.h,e))return;n=e.D,js(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;hn(s=Mn(),new Bn(s,n)),Ei(t)}else Ci(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==s&&function(t,e){return!(Bs(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=qn(re(t.Ja,t,e),ki(t,t.C)),t.C++,0)))}(t,e)||2==s&&Si(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ri(t,5);break;case 4:Ri(t,10);break;case 3:Ri(t,6);break;default:Ri(t,2)}}function ki(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ri(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=re(t.kb,t);n||(n=new ms("//www.google.com/images/cleardot.gif"),Yt.location&&"http"==Yt.location.protocol||vs(n,"https"),Ts(n)),function(t,e){const n=new Rn;if(Yt.Image){const s=new Image;s.onload=oe(Qs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=oe(Qs,n,s,"TestLoadImage: error",!1,e),s.onabort=oe(Qs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=oe(Qs,n,s,"TestLoadImage: timeout",!1,e),Yt.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Un(2);t.G=0,t.l&&t.l.va(e),Li(t),wi(t)}function Li(t){if(t.G=0,t.la=[],t.l){const e=zs(t.h);0==e.length&&0==t.i.length||(le(t.la,e),le(t.la,t.i),t.h.i.length=0,he(t.i),t.i.length=0),t.l.ua()}}function xi(t,e,n){var s=n instanceof ms?ys(n):new ms(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),ws(s,s.m);else{var i=Yt.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ms(null,void 0);s&&vs(r,s),e&&(r.g=e),i&&ws(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&bs(s,n,e),bs(s,"VER",t.ma),Ti(t,s),s}function Oi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new ni(new Ws({jb:!0})):new ni(t.ra)).Ka(t.H),e}function Mi(){}function Vi(){if(Ie&&!(10<=Number(Ve)))throw Error("Environmental error: no available transport.")}function Fi(t,e){un.call(this),this.g=new mi(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!pe(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!pe(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Bi(this)}function Pi(t){Wn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ui(){Xn.call(this),this.status=1}function Bi(t){this.g=t}(Ht=ni.prototype).Ka=function(t){this.L=t},Ht.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Hn.g(),this.C=this.u?Gn(this.u):Gn(Hn),this.g.onreadystatechange=re(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void oi(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=Yt.FormData&&t instanceof Yt.FormData,!(0<=ue(ri,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hi(this),0<this.B&&((this.K=function(t){return Ie&&Oe()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=re(this.qa,this)):this.A=Cn(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){oi(this,t)}},Ht.qa=function(){void 0!==Xt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,hn(this,"timeout"),this.abort(8))},Ht.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,hn(this,"complete"),hn(this,"abort"),ui(this))},Ht.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ui(this,!0)),ni.X.M.call(this)},Ht.Ha=function(){this.s||(this.F||this.v||this.l?ci(this):this.fb())},Ht.fb=function(){ci(this)},Ht.aa=function(){try{return 2<li(this)?this.g.status:-1}catch(t){return-1}},Ht.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ht.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ei(e)}},Ht.Ea=function(){return this.m},Ht.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ht=mi.prototype).ma=8,Ht.G=1,Ht.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Jn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ze(r),Ke(r,this.S)):r=this.S),null!==this.o||this.N||(i.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ii(this,i,e),bs(n=ys(this.F),"RID",t),bs(n,"CVER",22),this.D&&bs(n,"X-HTTP-Session-Id",this.D),Ti(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(fi(r)))+"&"+e:this.o&&pi(n,this.o,r)),$s(this.h,i),this.Ya&&bs(n,"TYPE","init"),this.O?(bs(n,"$req",e),bs(n,"SID","null"),i.Z=!0,ss(i,n,null)):ss(i,n,e),this.G=2}}else 3==this.G&&(t?bi(this,t):0==this.i.length||Us(this.h)||bi(this))},Ht.Ia=function(){if(this.u=null,Ai(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=qn(re(this.eb,this),t)}},Ht.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Un(10),vi(this),Ai(this))},Ht.cb=function(){null!=this.v&&(this.v=null,vi(this),Si(this),Un(19))},Ht.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Un(2)):(this.j.info("Failed to ping google.com"),Un(1))},(Ht=Mi.prototype).xa=function(){},Ht.wa=function(){},Ht.va=function(){},Ht.ua=function(){},Ht.Ra=function(){},Vi.prototype.g=function(t,e){return new Fi(t,e)},ae(Fi,un),Fi.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Un(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=xi(t,null,t.V),Ei(t)},Fi.prototype.close=function(){yi(this.g)},Fi.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=dn(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Ei(e)},Fi.prototype.M=function(){this.g.l=null,delete this.j,yi(this.g),delete this.g,Fi.X.M.call(this)},ae(Pi,Wn),ae(Ui,Xn),ae(Bi,Mi),Bi.prototype.xa=function(){hn(this.g,"a")},Bi.prototype.wa=function(t){hn(this.g,new Pi(t))},Bi.prototype.va=function(t){hn(this.g,new Ui)},Bi.prototype.ua=function(){hn(this.g,"b")},Vi.prototype.createWebChannel=Vi.prototype.g,Fi.prototype.send=Fi.prototype.u,Fi.prototype.open=Fi.prototype.m,Fi.prototype.close=Fi.prototype.close,$n.NO_ERROR=0,$n.TIMEOUT=8,$n.HTTP_ERROR=6,jn.COMPLETE="complete",Kn.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",un.prototype.listen=un.prototype.N,ni.prototype.listenOnce=ni.prototype.O,ni.prototype.getLastError=ni.prototype.Oa,ni.prototype.getLastErrorCode=ni.prototype.Ea,ni.prototype.getStatus=ni.prototype.aa,ni.prototype.getResponseJson=ni.prototype.Sa,ni.prototype.getResponseText=ni.prototype.fa,ni.prototype.send=ni.prototype.da,ni.prototype.setWithCredentials=ni.prototype.Ka;var qi=Wt.createWebChannelTransport=function(){return new Vi},$i=Wt.getStatEventTarget=function(){return Mn()},ji=Wt.ErrorCode=$n,zi=Wt.EventType=jn,Gi=Wt.Event=xn,Ki=Wt.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Hi=Wt.FetchXmlHttpFactory=Ws,Qi=Wt.WebChannel=Kn,Wi=Wt.XhrIo=ni;const Xi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}Yi.UNAUTHENTICATED=new Yi(null),Yi.GOOGLE_CREDENTIALS=new Yi("google-credentials-uid"),Yi.FIRST_PARTY=new Yi("first-party-uid"),Yi.MOCK_USER=new Yi("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ji="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Z("@firebase/firestore");function tr(){return Zi.logLevel}function er(t,...e){if(Zi.logLevel<=H.DEBUG){const n=e.map(ir);Zi.debug(`Firestore (${Ji}): ${t}`,...n)}}function nr(t,...e){if(Zi.logLevel<=H.ERROR){const n=e.map(ir);Zi.error(`Firestore (${Ji}): ${t}`,...n)}}function sr(t,...e){if(Zi.logLevel<=H.WARN){const n=e.map(ir);Zi.warn(`Firestore (${Ji}): ${t}`,...n)}}function ir(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t="Unexpected state"){const e=`FIRESTORE (${Ji}) INTERNAL ASSERTION FAILED: `+t;throw nr(e),new Error(e)}function or(t,e){t||rr()}function ar(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ur extends M{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Yi.UNAUTHENTICATED)))}shutdown(){}}class fr{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class pr{start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hr,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{er("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(er("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(er("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(or("string"==typeof e.accessToken),new lr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return or(null===t||"string"==typeof t),new Yi(t)}constructor(t){this.t=t,this.currentUser=Yi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class gr{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Yi.FIRST_PARTY,this.g=new Map}}class mr{getToken(){return Promise.resolve(new gr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Yi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class yr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vr{start(t,e){const n=t=>{null!=t.error&&er("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,er("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{er("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?s(t):er("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(or("string"==typeof t.token),this.T=t.token,new yr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=wr(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function br(t,e){return t<e?-1:t>e?1:0}function Tr(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir{static now(){return Ir.fromMillis(Date.now())}static fromDate(t){return Ir.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ir(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?br(this.nanoseconds,t.nanoseconds):br(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ur(cr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ur(cr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ur(cr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ur(cr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{static fromTimestamp(t){return new Cr(t)}static min(){return new Cr(new Ir(0,0))}static max(){return new Cr(new Ir(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{get length(){return this.len}isEqual(t){return 0===Sr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Sr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&rr(),void 0===n?n=t.length-e:n>t.length-e&&rr(),this.segments=t,this.offset=e,this.len=n}}class _r extends Sr{construct(t,e,n){return new _r(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ur(cr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new _r(e)}static emptyPath(){return new _r([])}}const Ar=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dr extends Sr{construct(t,e,n){return new Dr(t,e,n)}static isValidIdentifier(t){return Ar.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Dr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new ur(cr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new ur(cr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ur(cr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new ur(cr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Dr(e)}static emptyPath(){return new Dr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{static fromPath(t){return new Nr(_r.fromString(t))}static fromName(t){return new Nr(_r.fromString(t).popFirst(5))}static empty(){return new Nr(_r.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===_r.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return _r.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Nr(new _r(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}kr.UNKNOWN_ID=-1;function Rr(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Cr.fromTimestamp(1e9===s?new Ir(n+1,0):new Ir(n,s));return new xr(i,Nr.empty(),e)}function Lr(t){return new xr(t.readTime,t.key,-1)}class xr{static min(){return new xr(Cr.min(),Nr.empty(),-1)}static max(){return new xr(Cr.max(),Nr.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function Or(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Nr.comparator(t.documentKey,e.documentKey),0!==n?n:br(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vr{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t){if(t.code!==cr.FAILED_PRECONDITION||t.message!==Mr)throw t;er("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&rr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Pr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Pr?e:Pr.resolve(e)}catch(t){return Pr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Pr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Pr.reject(e)}static resolve(t){return new Pr(((e,n)=>{e(t)}))}static reject(t){return new Pr(((e,n)=>{n(t)}))}static waitFor(t){return new Pr(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Pr.resolve(!1);for(const n of t)e=e.next((t=>t?Pr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Pr(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new Pr(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Br{ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}}function qr(t){return null==t}function $r(t){return 0===t&&1/t==-1/0}function jr(t){return"number"==typeof t&&Number.isInteger(t)&&!$r(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Br.ct=-1;const zr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Gr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Kr=Gr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{insert(t,e){return new Xr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Jr.BLACK,null,null))}remove(t){return new Xr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Jr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yr(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||Jr.EMPTY}}class Yr{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class Jr{copy(t,e,n,s,i){return new Jr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Jr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Jr.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Jr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Jr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw rr();if(this.right.isRed())throw rr();const t=this.left.check();if(t!==this.right.check())throw rr();return t+(this.isRed()?0:1)}constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Jr.RED,this.left=null!=s?s:Jr.EMPTY,this.right=null!=i?i:Jr.EMPTY,this.size=this.left.size+1+this.right.size}}Jr.EMPTY=null,Jr.RED=!0,Jr.BLACK=!1,Jr.EMPTY=new class{get key(){throw rr()}get value(){throw rr()}get color(){throw rr()}get left(){throw rr()}get right(){throw rr()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Jr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zr{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new to(this.data.getIterator())}getIteratorFrom(t){return new to(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Zr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Zr(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new Xr(this.comparator)}}class to{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{static empty(){return new eo([])}unionWith(t){let e=new Zr(Dr.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new eo(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Tr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(Dr.comparator)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so{static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new no("Invalid base64 string: "+t):t}}(t);return new so(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new so(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return br(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}so.EMPTY_BYTE_STRING=new so("");const io=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ro(t){if(or(!!t),"string"==typeof t){let e=0;const n=io.exec(t);if(or(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:oo(t.seconds),nanos:oo(t.nanos)}}function oo(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ao(t){return"string"==typeof t?so.fromBase64String(t):so.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function uo(t){const e=t.mapValue.fields.__previous_value__;return co(e)?uo(e):e}function ho(t){const e=ro(t.mapValue.fields.__local_write_time__.timestampValue);return new Ir(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class fo{static empty(){return new fo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof fo&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function go(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?co(t)?4:No(t)?9007199254740991:10:rr()}function mo(t,e){if(t===e)return!0;const n=go(t);if(n!==go(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ho(t).isEqual(ho(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ro(t.timestampValue),s=ro(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ao(t.bytesValue).isEqual(ao(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return oo(t.geoPointValue.latitude)===oo(e.geoPointValue.latitude)&&oo(t.geoPointValue.longitude)===oo(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return oo(t.integerValue)===oo(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=oo(t.doubleValue),s=oo(e.doubleValue);return n===s?$r(n)===$r(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Tr(t.arrayValue.values||[],e.arrayValue.values||[],mo);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Hr(n)!==Hr(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!mo(n[t],s[t])))return!1;return!0}(t,e);default:return rr()}}function yo(t,e){return void 0!==(t.values||[]).find((t=>mo(t,e)))}function vo(t,e){if(t===e)return 0;const n=go(t),s=go(e);if(n!==s)return br(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return br(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=oo(t.integerValue||t.doubleValue),s=oo(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return wo(t.timestampValue,e.timestampValue);case 4:return wo(ho(t),ho(e));case 5:return br(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ao(t),s=ao(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=br(n[t],s[t]);if(0!==e)return e}return br(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=br(oo(t.latitude),oo(e.latitude));return 0!==n?n:br(oo(t.longitude),oo(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=vo(n[t],s[t]);if(e)return e}return br(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===po.mapValue&&e===po.mapValue)return 0;if(t===po.mapValue)return 1;if(e===po.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=br(s[t],r[t]);if(0!==e)return e;const o=vo(n[s[t]],i[r[t]]);if(0!==o)return o}return br(s.length,r.length)}(t.mapValue,e.mapValue);default:throw rr()}}function wo(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return br(t,e);const n=ro(t),s=ro(e),i=br(n.seconds,s.seconds);return 0!==i?i:br(n.nanos,s.nanos)}function Eo(t){return bo(t)}function bo(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ro(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ao(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Nr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=bo(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${bo(t.fields[i])}`;return n+"}"}(t.mapValue):rr()}function To(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Io(t){return!!t&&"integerValue"in t}function Co(t){return!!t&&"arrayValue"in t}function So(t){return!!t&&"nullValue"in t}function _o(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ao(t){return!!t&&"mapValue"in t}function Do(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Do(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Do(t.arrayValue.values[n]);return e}return Object.assign({},t)}function No(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ko{static empty(){return new ko({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ao(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Do(e)}setAll(t){let e=Dr.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Do(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Ao(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return mo(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Ao(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Qr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new ko(Do(this.value))}constructor(t){this.value=t}}function Ro(t){const e=[];return Qr(t.fields,((t,n)=>{const s=new Dr([t]);if(Ao(n)){const t=Ro(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new eo(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Lo{static newInvalidDocument(t){return new Lo(t,0,Cr.min(),Cr.min(),Cr.min(),ko.empty(),0)}static newFoundDocument(t,e,n,s){return new Lo(t,1,e,Cr.min(),n,s,0)}static newNoDocument(t,e){return new Lo(t,2,e,Cr.min(),Cr.min(),ko.empty(),0)}static newUnknownDocument(t,e){return new Lo(t,3,e,Cr.min(),Cr.min(),ko.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Cr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ko.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ko.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Cr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Lo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Lo(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e){this.position=t,this.inclusive=e}}function Oo(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Nr.comparator(Nr.fromName(o.referenceValue),n.key):vo(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Mo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mo(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,e="asc"){this.field=t,this.dir=e}}function Fo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{}class Uo extends Po{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ho(t,e,n):"array-contains"===e?new Yo(t,n):"in"===e?new Jo(t,n):"not-in"===e?new Zo(t,n):"array-contains-any"===e?new ta(t,n):new Uo(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Qo(t,n):new Wo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(vo(e,this.value)):null!==e&&go(this.value)===go(e)&&this.matchesComparison(vo(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return rr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Bo extends Po{static create(t,e){return new Bo(t,e)}matches(t){return qo(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}}function qo(t){return"and"===t.op}function $o(t){return jo(t)&&qo(t)}function jo(t){for(const e of t.filters)if(e instanceof Bo)return!1;return!0}function zo(t){if(t instanceof Uo)return t.field.canonicalString()+t.op.toString()+Eo(t.value);if($o(t))return t.filters.map((t=>zo(t))).join(",");{const e=t.filters.map((t=>zo(t))).join(",");return`${t.op}(${e})`}}function Go(t,e){return t instanceof Uo?function(t,e){return e instanceof Uo&&t.op===e.op&&t.field.isEqual(e.field)&&mo(t.value,e.value)}(t,e):t instanceof Bo?function(t,e){return e instanceof Bo&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&Go(n,e.filters[s])),!0)}(t,e):void rr()}function Ko(t){return t instanceof Uo?function(t){return`${t.field.canonicalString()} ${t.op} ${Eo(t.value)}`}(t):t instanceof Bo?function(t){return t.op.toString()+" {"+t.getFilters().map(Ko).join(" ,")+"}"}(t):"Filter"}class Ho extends Uo{matches(t){const e=Nr.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=Nr.fromName(n.referenceValue)}}class Qo extends Uo{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Xo("in",e)}}class Wo extends Uo{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Xo("not-in",e)}}function Xo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Nr.fromName(t.referenceValue)))}class Yo extends Uo{matches(t){const e=t.data.field(this.field);return Co(e)&&yo(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Jo extends Uo{matches(t){const e=t.data.field(this.field);return null!==e&&yo(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Zo extends Uo{matches(t){if(yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!yo(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class ta extends Uo{matches(t){const e=t.data.field(this.field);return!(!Co(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>yo(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ft=null}}function na(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ea(t,e,n,s,i,r,o)}function sa(t){const e=ar(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>zo(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),qr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Eo(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Eo(t))).join(",")),e.ft=t}return e.ft}function ia(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Fo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Go(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mo(t.startAt,e.startAt)&&Mo(t.endAt,e.endAt)}function ra(t){return Nr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function aa(t,e,n,s,i,r,o,a){return new oa(t,e,n,s,i,r,o,a)}function ca(t){return new oa(t)}function ua(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ha(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function la(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function da(t){return null!==t.collectionGroup}function fa(t){const e=ar(t);if(null===e.dt){e.dt=[];const t=la(e),n=ha(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new Vo(t)),e.dt.push(new Vo(Dr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Vo(Dr.keyField(),t))}}}return e.dt}function pa(t){const e=ar(t);if(!e.wt)if("F"===e.limitType)e.wt=na(e.path,e.collectionGroup,fa(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of fa(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Vo(n.field,e))}const n=e.endAt?new xo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new xo(e.startAt.position,e.startAt.inclusive):null;e.wt=na(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function ga(t,e){e.getFirstInequalityField(),la(t);const n=t.filters.concat([e]);return new oa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ma(t,e,n){return new oa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ya(t,e){return ia(pa(t),pa(e))&&t.limitType===e.limitType}function va(t){return`${sa(pa(t))}|lt:${t.limitType}`}function wa(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Ko(t))).join(", ")}]`),qr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Eo(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Eo(t))).join(",")),`Target(${e})`}(pa(t))}; limitType=${t.limitType})`}function Ea(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Nr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of fa(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Oo(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,fa(t),e))&&!(t.endAt&&!function(t,e,n){const s=Oo(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,fa(t),e))}(t,e)}function ba(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ta(t){return(e,n)=>{let s=!1;for(const i of fa(t)){const t=Ia(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Ia(t,e,n){const s=t.field.isKeyField()?Nr.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?vo(s,i):rr()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return rr()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Qr(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Wr(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Xr(Nr.comparator);function _a(){return Sa}const Aa=new Xr(Nr.comparator);function Da(...t){let e=Aa;for(const n of t)e=e.insert(n.key,n);return e}function Na(t){let e=Aa;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ka(){return La()}function Ra(){return La()}function La(){return new Ca((t=>t.toString()),((t,e)=>t.isEqual(e)))}const xa=new Xr(Nr.comparator),Oa=new Zr(Nr.comparator);function Ma(...t){let e=Oa;for(const n of t)e=e.add(n);return e}const Va=new Zr(br);function Fa(){return Va}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$r(e)?"-0":e}}function Ua(t){return{integerValue:""+t}}function Ba(t,e){return jr(e)?Ua(e):Pa(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this._=void 0}}function $a(t,e,n){return t instanceof Ga?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ka?Ha(t,e):t instanceof Qa?Wa(t,e):function(t,e){const n=za(t,e),s=Ya(n)+Ya(t._t);return Io(n)&&Io(t._t)?Ua(s):Pa(t.serializer,s)}(t,e)}function ja(t,e,n){return t instanceof Ka?Ha(t,e):t instanceof Qa?Wa(t,e):n}function za(t,e){var n;return t instanceof Xa?Io(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class Ga extends qa{}class Ka extends qa{constructor(t){super(),this.elements=t}}function Ha(t,e){const n=Ja(e);for(const e of t.elements)n.some((t=>mo(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Qa extends qa{constructor(t){super(),this.elements=t}}function Wa(t,e){let n=Ja(e);for(const e of t.elements)n=n.filter((t=>!mo(t,e)));return{arrayValue:{values:n}}}class Xa extends qa{constructor(t,e){super(),this.serializer=t,this._t=e}}function Ya(t){return oo(t.integerValue||t.doubleValue)}function Ja(t){return Co(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e){this.field=t,this.transform=e}}class tc{constructor(t,e){this.version=t,this.transformResults=e}}class ec{static none(){return new ec}static exists(t){return new ec(void 0,t)}static updateTime(t){return new ec(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function nc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class sc{}function ic(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new pc(t.key,ec.none()):new uc(t.key,t.data,ec.none());{const n=t.data,s=ko.empty();let i=new Zr(Dr.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new hc(t.key,s,new eo(i.toArray()),ec.none())}}function rc(t,e,n){t instanceof uc?function(t,e,n){const s=t.value.clone(),i=dc(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof hc?function(t,e,n){if(!nc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=dc(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(lc(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function oc(t,e,n,s){return t instanceof uc?function(t,e,n,s){if(!nc(t.precondition,e))return n;const i=t.value.clone(),r=fc(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof hc?function(t,e,n,s){if(!nc(t.precondition,e))return n;const i=fc(t.fieldTransforms,s,e),r=e.data;return r.setAll(lc(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return nc(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ac(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=za(s.transform,t||null);null!=i&&(null===n&&(n=ko.empty()),n.set(s.field,i))}return n||null}function cc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Tr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ka&&e instanceof Ka||t instanceof Qa&&e instanceof Qa?Tr(t.elements,e.elements,mo):t instanceof Xa&&e instanceof Xa?mo(t._t,e._t):t instanceof Ga&&e instanceof Ga}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uc extends sc{getFieldMask(){return null}constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class hc extends sc{getFieldMask(){return this.fieldMask}constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function lc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function dc(t,e,n){const s=new Map;or(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,ja(o,a,n[i]))}return s}function fc(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,$a(t,r,e))}return s}class pc extends sc{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class gc extends sc{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&rc(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=oc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=oc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ra();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=ic(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(Cr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ma())}isEqual(t){return this.batchId===t.batchId&&Tr(this.mutations,t.mutations,((t,e)=>cc(t,e)))&&Tr(this.baseMutations,t.baseMutations,((t,e)=>cc(t,e)))}constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}}class yc{static from(t,e,n){or(t.mutations.length===n.length);let s=xa;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new yc(t,e,n,s)}constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wc{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ec,bc;function Tc(t){switch(t){default:return rr();case cr.CANCELLED:case cr.UNKNOWN:case cr.DEADLINE_EXCEEDED:case cr.RESOURCE_EXHAUSTED:case cr.INTERNAL:case cr.UNAVAILABLE:case cr.UNAUTHENTICATED:return!1;case cr.INVALID_ARGUMENT:case cr.NOT_FOUND:case cr.ALREADY_EXISTS:case cr.PERMISSION_DENIED:case cr.FAILED_PRECONDITION:case cr.ABORTED:case cr.OUT_OF_RANGE:case cr.UNIMPLEMENTED:case cr.DATA_LOSS:return!0}}function Ic(t){if(void 0===t)return nr("GRPC error has no .code"),cr.UNKNOWN;switch(t){case Ec.OK:return cr.OK;case Ec.CANCELLED:return cr.CANCELLED;case Ec.UNKNOWN:return cr.UNKNOWN;case Ec.DEADLINE_EXCEEDED:return cr.DEADLINE_EXCEEDED;case Ec.RESOURCE_EXHAUSTED:return cr.RESOURCE_EXHAUSTED;case Ec.INTERNAL:return cr.INTERNAL;case Ec.UNAVAILABLE:return cr.UNAVAILABLE;case Ec.UNAUTHENTICATED:return cr.UNAUTHENTICATED;case Ec.INVALID_ARGUMENT:return cr.INVALID_ARGUMENT;case Ec.NOT_FOUND:return cr.NOT_FOUND;case Ec.ALREADY_EXISTS:return cr.ALREADY_EXISTS;case Ec.PERMISSION_DENIED:return cr.PERMISSION_DENIED;case Ec.FAILED_PRECONDITION:return cr.FAILED_PRECONDITION;case Ec.ABORTED:return cr.ABORTED;case Ec.OUT_OF_RANGE:return cr.OUT_OF_RANGE;case Ec.UNIMPLEMENTED:return cr.UNIMPLEMENTED;case Ec.DATA_LOSS:return cr.DATA_LOSS;default:return rr()}}(bc=Ec||(Ec={}))[bc.OK=0]="OK",bc[bc.CANCELLED=1]="CANCELLED",bc[bc.UNKNOWN=2]="UNKNOWN",bc[bc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",bc[bc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",bc[bc.NOT_FOUND=5]="NOT_FOUND",bc[bc.ALREADY_EXISTS=6]="ALREADY_EXISTS",bc[bc.PERMISSION_DENIED=7]="PERMISSION_DENIED",bc[bc.UNAUTHENTICATED=16]="UNAUTHENTICATED",bc[bc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",bc[bc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",bc[bc.ABORTED=10]="ABORTED",bc[bc.OUT_OF_RANGE=11]="OUT_OF_RANGE",bc[bc.UNIMPLEMENTED=12]="UNIMPLEMENTED",bc[bc.INTERNAL=13]="INTERNAL",bc[bc.UNAVAILABLE=14]="UNAVAILABLE",bc[bc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{static get instance(){return Sc}static getOrCreateInstance(){return null===Sc&&(Sc=new Cc),Sc}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}constructor(){this.onExistenceFilterMismatchCallbacks=new Map}}let Sc=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Ac.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new _c(Cr.min(),s,Fa(),_a(),Ma())}constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}}class Ac{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Ac(n,e,Ma(),Ma(),Ma())}constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e,n,s){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=s}}class Nc{constructor(t,e){this.targetId=t,this.Et=e}}class kc{constructor(t,e,n=so.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Rc{get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=Ma(),e=Ma(),n=Ma();return this.Rt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:rr()}})),new Ac(this.vt,this.bt,t,e,n)}xt(){this.Pt=!1,this.Rt=Oc()}Nt(t,e){this.Pt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}constructor(){this.At=0,this.Rt=Oc(),this.vt=so.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}}class Lc{Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}zt(t){this.forEachTarget(t,(e=>{const n=this.jt(e);switch(t.state){case 0:this.Wt(e)&&n.Dt(t.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(e);break;case 3:this.Wt(e)&&(n.Mt(),n.Dt(t.resumeToken));break;case 4:this.Wt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:rr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.Wt(n)&&e(n)}))}Jt(t){var e;const n=t.targetId,s=t.Et.count,i=this.Yt(n);if(i){const r=i.target;if(ra(r))if(0===s){const t=new Nr(r.path);this.Qt(n,t,Lo.newNoDocument(t,Cr.min()))}else or(1===s);else{const i=this.Zt(n);i!==s&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(e=Cc.instance)||void 0===e||e.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:t.Et.count}))}}}Xt(t){const e=new Map;this.Bt.forEach(((n,s)=>{const i=this.Yt(s);if(i){if(n.current&&ra(i.target)){const e=new Nr(i.target.path);null!==this.Lt.get(e)||this.te(s,e)||this.Qt(s,e,Lo.newNoDocument(e,t))}n.St&&(e.set(s,n.Ct()),n.xt())}}));let n=Ma();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const s=new _c(t,e,this.Ut,this.Lt,n);return this.Lt=_a(),this.qt=xc(),this.Ut=new Zr(br),s}Gt(t,e){if(!this.Wt(t))return;const n=this.te(t,e.key)?2:0;this.jt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.Wt(t))return;const s=this.jt(t);this.te(t,e)?s.Nt(e,1):s.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Zt(t){const e=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let e=this.Bt.get(t);return e||(e=new Rc,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new Zr(br),this.qt=this.qt.insert(t,e)),e}Wt(t){const e=null!==this.Yt(t);return e||er("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new Rc),this.Ft.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.Ft.getRemoteKeysForTarget(t).has(e)}constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=_a(),this.qt=xc(),this.Ut=new Zr(br)}}function xc(){return new Xr(Nr.comparator)}function Oc(){return new Xr(Nr.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc={asc:"ASCENDING",desc:"DESCENDING"},Vc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fc={and:"AND",or:"OR"};class Pc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Uc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qc(t,e){return Uc(t,e.toTimestamp())}function $c(t){return or(!!t),Cr.fromTimestamp(function(t){const e=ro(t);return new Ir(e.seconds,e.nanos)}(t))}function jc(t,e){return function(t){return new _r(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function zc(t){const e=_r.fromString(t);return or(hu(e)),e}function Gc(t,e){return jc(t.databaseId,e.path)}function Kc(t,e){const n=zc(e);if(n.get(1)!==t.databaseId.projectId)throw new ur(cr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ur(cr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Nr(Xc(n))}function Hc(t,e){return jc(t.databaseId,e)}function Qc(t){const e=zc(t);return 4===e.length?_r.emptyPath():Xc(e)}function Wc(t){return new _r(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xc(t){return or(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Yc(t,e,n){return{name:Gc(t,e),fields:n.value.mapValue.fields}}function Jc(t,e){let n;if(e instanceof uc)n={update:Yc(t,e.key,e.value)};else if(e instanceof pc)n={delete:Gc(t,e.key)};else if(e instanceof hc)n={update:Yc(t,e.key,e.data),updateMask:uu(e.fieldMask)};else{if(!(e instanceof gc))return rr();n={verify:Gc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ga)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ka)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Qa)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Xa)return{fieldPath:e.field.canonicalString(),increment:n._t};throw rr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:qc(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:rr()}(t,e.precondition)),n}function Zc(t,e){return{documents:[Hc(t,e.path)]}}function tu(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Hc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0!==t.length)return cu(Bo.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:ou(t.field),direction:su(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.useProto3Json||qr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function eu(t){let e=Qc(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){or(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=nu(t);return e instanceof Bo&&$o(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Vo(au(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,qr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new xo(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new xo(n,e)}(n.endAt)),aa(e,i,o,r,a,"F",c,u)}function nu(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=au(t.unaryFilter.field);return Uo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=au(t.unaryFilter.field);return Uo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=au(t.unaryFilter.field);return Uo.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=au(t.unaryFilter.field);return Uo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return rr()}}(t):void 0!==t.fieldFilter?function(t){return Uo.create(au(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return rr()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Bo.create(t.compositeFilter.filters.map((t=>nu(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return rr()}}(t.compositeFilter.op))}(t):rr()}function su(t){return Mc[t]}function iu(t){return Vc[t]}function ru(t){return Fc[t]}function ou(t){return{fieldPath:t.canonicalString()}}function au(t){return Dr.fromServerFormat(t.fieldPath)}function cu(t){return t instanceof Uo?function(t){if("=="===t.op){if(_o(t.value))return{unaryFilter:{field:ou(t.field),op:"IS_NAN"}};if(So(t.value))return{unaryFilter:{field:ou(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(_o(t.value))return{unaryFilter:{field:ou(t.field),op:"IS_NOT_NAN"}};if(So(t.value))return{unaryFilter:{field:ou(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ou(t.field),op:iu(t.op),value:t.value}}}(t):t instanceof Bo?function(t){const e=t.getFilters().map((t=>cu(t)));return 1===e.length?e[0]:{compositeFilter:{op:ru(t.op),filters:e}}}(t):rr()}function uu(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function hu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{withSequenceNumber(t){return new lu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new lu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new lu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,s,i=Cr.min(),r=Cr.min(),o=so.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t){this.se=t}}function fu(t){const e=eu({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ma(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{oe(t,e){this.ue(t,e),e.ce()}ue(t,e){if("nullValue"in t)this.ae(e,5);else if("booleanValue"in t)this.ae(e,10),e.he(t.booleanValue?1:0);else if("integerValue"in t)this.ae(e,15),e.he(oo(t.integerValue));else if("doubleValue"in t){const n=oo(t.doubleValue);isNaN(n)?this.ae(e,13):(this.ae(e,15),$r(n)?e.he(0):e.he(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ae(e,20),"string"==typeof n?e.le(n):(e.le(`${n.seconds||""}`),e.he(n.nanos||0))}else if("stringValue"in t)this.fe(t.stringValue,e),this.de(e);else if("bytesValue"in t)this.ae(e,30),e.we(ao(t.bytesValue)),this.de(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ae(e,45),e.he(n.latitude||0),e.he(n.longitude||0)}else"mapValue"in t?No(t)?this.ae(e,Number.MAX_SAFE_INTEGER):(this.me(t.mapValue,e),this.de(e)):"arrayValue"in t?(this.ge(t.arrayValue,e),this.de(e)):rr()}fe(t,e){this.ae(e,25),this.ye(t,e)}ye(t,e){e.le(t)}me(t,e){const n=t.fields||{};this.ae(e,55);for(const t of Object.keys(n))this.fe(t,e),this.ue(n[t],e)}ge(t,e){const n=t.values||[];this.ae(e,50);for(const t of n)this.ue(t,e)}_e(t,e){this.ae(e,37),Nr.fromName(t).path.forEach((t=>{this.ae(e,60),this.ye(t,e)}))}ae(t,e){t.he(e)}de(t){t.he(2)}constructor(){}}pu.pe=new pu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gu{addToCollectionParentIndex(t,e){return this.He.add(e),Pr.resolve()}getCollectionParents(t,e){return Pr.resolve(this.He.getEntries(e))}addFieldIndex(t,e){return Pr.resolve()}deleteFieldIndex(t,e){return Pr.resolve()}getDocumentsMatchingTarget(t,e){return Pr.resolve(null)}getIndexType(t,e){return Pr.resolve(0)}getFieldIndexes(t,e){return Pr.resolve([])}getNextCollectionGroupToUpdate(t){return Pr.resolve(null)}getMinOffset(t,e){return Pr.resolve(xr.min())}getMinOffsetFromCollectionGroup(t,e){return Pr.resolve(xr.min())}updateCollectionGroup(t,e,n){return Pr.resolve()}updateIndexEntries(t,e){return Pr.resolve()}constructor(){this.He=new mu}}class mu{add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Zr(_r.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Zr(_r.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class yu{static withCacheSize(t){return new yu(t,yu.DEFAULT_COLLECTION_PERCENTILE,yu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yu.DEFAULT_COLLECTION_PERCENTILE=10,yu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yu.DEFAULT=new yu(41943040,yu.DEFAULT_COLLECTION_PERCENTILE,yu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yu.DISABLED=new yu(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vu{next(){return this.Rn+=2,this.Rn}static vn(){return new vu(0)}static bn(){return new vu(-1)}constructor(t){this.Rn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Lo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Pr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new Ca((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&oc(n.mutation,t,eo.empty(),Ir.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ma()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ma()){const s=ka();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Da();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ka();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ma())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=_a();const r=La(),o=La();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof hc)?i=i.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),oc(o.mutation,e,o.mutation.getFieldMask(),Ir.now())):r.set(e.key,eo.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Eu(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=La();let s=new Xr(((t,e)=>t-e)),i=Ma();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||eo.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||Ma()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=Ra();c.forEach((t=>{if(!i.has(t)){const s=ic(e.get(t),n.get(t));null!==s&&u.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Pr.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Nr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):da(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):Pr.resolve(ka());let o=-1,a=i;return r.next((e=>Pr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Pr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ma()))).next((t=>({batchId:o,changes:Na(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Nr(e)).next((t=>{let e=Da();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=Da();return this.indexManager.getCollectionParents(t,s).next((r=>Pr.forEach(r,(r=>{const o=function(t,e){return new oa(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s)))).next((t=>{s.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,Lo.newInvalidDocument(s)))}));let n=Da();return t.forEach(((t,i)=>{const r=s.get(t);void 0!==r&&oc(r.mutation,i,eo.empty(),Ir.now()),Ea(e,i)&&(n=n.insert(t,i))})),n}))}constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{getBundleMetadata(t,e){return Pr.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:$c(n.createTime)}),Pr.resolve()}getNamedQuery(t,e){return Pr.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:fu(t.bundledQuery),readTime:$c(t.readTime)}}(e)),Pr.resolve()}constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{getOverlay(t,e){return Pr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ka();return Pr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.re(t,e,s)})),Pr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.ts.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.ts.delete(n)),Pr.resolve()}getOverlaysForCollection(t,e,n){const s=ka(),i=e.length+1,r=new Nr(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Pr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Xr(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=ka(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ka(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return Pr.resolve(o)}re(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.ts.get(s.largestBatchId).delete(n.key);this.ts.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new vc(e,n));let i=this.ts.get(e);void 0===i&&(i=Ma(),this.ts.set(e,i)),this.ts.set(e,i.add(n.key))}constructor(){this.overlays=new Xr(Nr.comparator),this.ts=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{isEmpty(){return this.es.isEmpty()}addReference(t,e){const n=new Su(t,e);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.us(new Su(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}hs(t){const e=new Nr(new _r([])),n=new Su(e,t),s=new Su(e,t+1),i=[];return this.ss.forEachInRange([n,s],(t=>{this.us(t),i.push(t.key)})),i}ls(){this.es.forEach((t=>this.us(t)))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const e=new Nr(new _r([])),n=new Su(e,t),s=new Su(e,t+1);let i=Ma();return this.ss.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Su(t,0),n=this.es.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.es=new Zr(Su.ns),this.ss=new Zr(Su.rs)}}class Su{static ns(t,e){return Nr.comparator(t.key,e.key)||br(t.ds,e.ds)}static rs(t,e){return br(t.ds,e.ds)||Nr.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.ds=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{checkEmpty(t){return Pr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new mc(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this._s=this._s.add(new Su(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Pr.resolve(r)}lookupMutationBatch(t,e){return Pr.resolve(this.gs(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ys(n),i=s<0?0:s;return Pr.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Pr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Pr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Su(e,0),s=new Su(e,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,s],(t=>{const e=this.gs(t.ds);i.push(e)})),Pr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Zr(br);return e.forEach((t=>{const e=new Su(t,0),s=new Su(t,Number.POSITIVE_INFINITY);this._s.forEachInRange([e,s],(t=>{n=n.add(t.ds)}))})),Pr.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Nr.isDocumentKey(i)||(i=i.child(""));const r=new Su(new Nr(i),0);let o=new Zr(br);return this._s.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.ds)),!0)}),r),Pr.resolve(this.ps(o))}ps(t){const e=[];return t.forEach((t=>{const n=this.gs(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){or(0===this.Is(e.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return Pr.forEach(e.mutations,(s=>{const i=new Su(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this._s=n}))}En(t){}containsKey(t,e){const n=new Su(e,0),s=this._s.firstAfterOrEqual(n);return Pr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Pr.resolve()}Is(t,e){return this.ys(t)}ys(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}gs(t){const e=this.ys(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this._s=new Zr(Su.ns)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Ts(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Pr.resolve(n?n.document.mutableCopy():Lo.newInvalidDocument(e))}getEntries(t,e){let n=_a();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Lo.newInvalidDocument(t))})),Pr.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=_a();const r=e.path,o=new Nr(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||Or(Lr(o),n)<=0||(s.has(o.key)||Ea(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Pr.resolve(i)}getAllFromCollectionGroup(t,e,n,s){rr()}Es(t,e){return Pr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Du(this)}getSize(t){return Pr.resolve(this.size)}constructor(t){this.Ts=t,this.docs=new Xr(Nr.comparator),this.size=0}}class Du extends wu{applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Jn.addEntry(t,s)):this.Jn.removeEntry(n)})),Pr.waitFor(e)}getFromCache(t,e){return this.Jn.getEntry(t,e)}getAllFromCache(t,e){return this.Jn.getEntries(t,e)}constructor(t){super(),this.Jn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{forEachTarget(t,e){return this.As.forEach(((t,n)=>e(n))),Pr.resolve()}getLastRemoteSnapshotVersion(t){return Pr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Pr.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),Pr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Rs&&(this.Rs=e),Pr.resolve()}Sn(t){this.As.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new vu(e),this.highestTargetId=e),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,e){return this.Sn(e),this.targetCount+=1,Pr.resolve()}updateTargetData(t,e){return this.Sn(e),Pr.resolve()}removeTargetData(t,e){return this.As.delete(e.target),this.vs.hs(e.targetId),this.targetCount-=1,Pr.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.As.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.As.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Pr.waitFor(i).next((()=>s))}getTargetCount(t){return Pr.resolve(this.targetCount)}getTargetData(t,e){const n=this.As.get(e)||null;return Pr.resolve(n)}addMatchingKeys(t,e,n){return this.vs.os(e,n),Pr.resolve()}removeMatchingKeys(t,e,n){this.vs.cs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Pr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.vs.hs(e),Pr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.vs.fs(e);return Pr.resolve(n)}containsKey(t,e){return Pr.resolve(this.vs.containsKey(e))}constructor(t){this.persistence=t,this.As=new Ca((t=>sa(t)),ia),this.lastRemoteSnapshotVersion=Cr.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Cu,this.targetCount=0,this.bs=vu.vn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Iu,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ps[t.toKey()];return n||(n=new _u(e,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,e,n){er("MemoryPersistence","Starting transaction:",t);const s=new Ru(this.Vs.next());return this.referenceDelegate.Ns(),n(s).next((t=>this.referenceDelegate.ks(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Os(t,e){return Pr.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Ps={},this.overlays={},this.Vs=new Br(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new Nu(this),this.indexManager=new gu,this.remoteDocumentCache=function(t){return new Au(t)}((t=>this.referenceDelegate.Cs(t))),this.serializer=new du(e),this.xs=new Tu(this.serializer)}}class Ru extends Vr{constructor(t){super(),this.currentSequenceNumber=t}}class Lu{static Fs(t){return new Lu(t)}get Bs(){if(this.Ms)return this.Ms;throw rr()}addReference(t,e,n){return this.$s.addReference(n,e),this.Bs.delete(n.toString()),Pr.resolve()}removeReference(t,e,n){return this.$s.removeReference(n,e),this.Bs.add(n.toString()),Pr.resolve()}markPotentiallyOrphaned(t,e){return this.Bs.add(e.toString()),Pr.resolve()}removeTarget(t,e){this.$s.hs(e.targetId).forEach((t=>this.Bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ns(){this.Ms=new Set}ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Pr.forEach(this.Bs,(n=>{const s=Nr.fromPath(n);return this.Ls(t,s).next((t=>{t||e.removeEntry(s,Cr.min())}))})).next((()=>(this.Ms=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ls(t,e).next((t=>{t?this.Bs.delete(e.toString()):this.Bs.add(e.toString())}))}Cs(t){return 0}Ls(t,e){return Pr.or([()=>Pr.resolve(this.$s.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}constructor(t){this.persistence=t,this.$s=new Cu,this.Ms=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xu{static Di(t,e){let n=Ma(),s=Ma();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new xu(t,e.fromCache,n,s)}constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Vi=n,this.Si=s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{initialize(t,e){this.xi=t,this.indexManager=e,this.Ci=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ni(t,e).next((i=>i||this.ki(t,e,s,n))).next((n=>n||this.Oi(t,e)))}Ni(t,e){if(ua(e))return Pr.resolve(null);let n=pa(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=ma(e,null,"F"),n=pa(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=Ma(...s);return this.xi.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.$i(e,s);return this.Mi(e,r,i,n.readTime)?this.Ni(t,ma(e,null,"F")):this.Fi(t,r,e,n)}))))})))))}ki(t,e,n,s){return ua(e)||s.isEqual(Cr.min())?this.Oi(t,e):this.xi.getDocuments(t,n).next((i=>{const r=this.$i(e,i);return this.Mi(e,r,n,s)?this.Oi(t,e):(tr()<=H.DEBUG&&er("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wa(e)),this.Fi(t,r,e,Rr(s,-1)))}))}$i(t,e){let n=new Zr(Ta(t));return e.forEach(((e,s)=>{Ea(t,s)&&(n=n.add(s))})),n}Mi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Oi(t,e){return tr()<=H.DEBUG&&er("QueryEngine","Using full collection scan to execute query:",wa(e)),this.xi.getDocumentsMatchingQuery(t,e,xr.min())}Fi(t,e,n,s){return this.xi.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.Ci=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bu(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Li)))}constructor(t,e,n,s){this.persistence=t,this.Bi=e,this.serializer=s,this.Li=new Xr(br),this.qi=new Ca((t=>sa(t)),ia),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(n)}}function Vu(t,e,n,s){return new Mu(t,e,n,s)}async function Fu(t,e){const n=ar(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=Ma();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Qi:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function Pu(t){const e=ar(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ds.getLastRemoteSnapshotVersion(t)))}function Uu(t,e,n){let s=Ma(),i=Ma();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=_a();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(Cr.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):er("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{zi:s,ji:i}}))}function Bu(t,e){const n=ar(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function qu(t,e){const n=ar(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Ds.getTargetData(t,e).next((i=>i?(s=i,Pr.resolve(s)):n.Ds.allocateTargetId(t).next((i=>(s=new lu(e,i,0,t.currentSequenceNumber),n.Ds.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Li.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function $u(t,e,n){const s=ar(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Ur(t))throw t;er("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function ju(t,e,n){const s=ar(t);let i=Cr.min(),r=Ma();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=ar(t),i=s.qi.get(n);return void 0!==i?Pr.resolve(s.Li.get(i)):s.Ds.getTargetData(e,n)}(s,t,pa(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Bi.getDocumentsMatchingQuery(t,e,n?i:Cr.min(),n?r:Ma()))).next((t=>(zu(s,ba(e),t),{documents:t,Wi:r})))))}function zu(t,e,n){let s=t.Ui.get(e)||Cr.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ui.set(e,s)}class Gu{tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=Fa()}}class Ku{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,e,n){this.Lr[t]=e}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Gu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Br=new Gu,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){er("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){er("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu=null;function Xu(){return null===Wu?Wu=268435456+Math.round(2147483648*Math.random()):Wu++,"0x"+Wu.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Yu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="WebChannelConnection";class th extends class{get uo(){return!1}co(t,e,n,s,i){const r=Xu(),o=this.ao(t,e);er("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={};return this.ho(a,s,i),this.lo(t,o,a,n).then((e=>(er("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw sr("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}fo(t,e,n,s,i,r){return this.co(t,e,n,s,i)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ji,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=Yu[t];return`${this.ro}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.ro=e+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{lo(t,e,n,s){const i=Xu();return new Promise(((r,o)=>{const a=new Wi;a.setWithCredentials(!0),a.listenOnce(zi.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case ji.NO_ERROR:const e=a.getResponseJson();er(Zu,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),r(e);break;case ji.TIMEOUT:er(Zu,`RPC '${t}' ${i} timed out`),o(new ur(cr.DEADLINE_EXCEEDED,"Request time out"));break;case ji.HTTP_ERROR:const n=a.getStatus();if(er(Zu,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(cr).indexOf(e)>=0?e:cr.UNKNOWN}(e.status);o(new ur(t,e.message))}else o(new ur(cr.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ur(cr.UNAVAILABLE,"Connection failed."));break;default:rr()}}finally{er(Zu,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(s);er(Zu,`RPC '${t}' ${i} sending request:`,s),a.send(e,"POST",c,n,15)}))}wo(t,e,n){const s=Xu(),i=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=qi(),o=$i(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Hi({})),this.ho(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");er(Zu,`Creating RPC '${t}' stream ${s}: ${c}`,a);const u=r.createWebChannel(c,a);let h=!1,l=!1;const d=new Ju({Wr:e=>{l?er(Zu,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(h||(er(Zu,`Opening RPC '${t}' stream ${s} transport.`),u.open(),h=!0),er(Zu,`RPC '${t}' stream ${s} sending:`,e),u.send(e))},Hr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,Qi.EventType.OPEN,(()=>{l||er(Zu,`RPC '${t}' stream ${s} transport opened.`)})),f(u,Qi.EventType.CLOSE,(()=>{l||(l=!0,er(Zu,`RPC '${t}' stream ${s} transport closed`),d.so())})),f(u,Qi.EventType.ERROR,(e=>{l||(l=!0,sr(Zu,`RPC '${t}' stream ${s} transport errored:`,e),d.so(new ur(cr.UNAVAILABLE,"The operation could not be completed")))})),f(u,Qi.EventType.MESSAGE,(e=>{var n;if(!l){const i=e.data[0];or(!!i);const r=i,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){er(Zu,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=Ec[t];if(void 0!==e)return Ic(e)}(e),i=o.message;void 0===n&&(n=cr.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),l=!0,d.so(new ur(n,i)),u.close()}else er(Zu,`RPC '${t}' stream ${s} received:`,i),d.io(i)}})),f(o,Gi.STAT_EVENT,(e=>{e.stat===Ki.PROXY?er(Zu,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===Ki.NOPROXY&&er(Zu,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t){return new Pc(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),s=Math.max(0,e-n);s>0&&er("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}constructor(t,e,n=1e3,s=1.5,i=6e4){this.Ws=t,this.timerId=e,this._o=n,this.mo=s,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,e){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==t?this.Co.reset():e&&e.code===cr.RESOURCE_EXHAUSTED?(nr(e.toString()),nr("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):e&&e.code===cr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.Ko(t,n)}),(e=>{t((()=>{const t=new ur(cr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Go(t)}))}))}Ko(t,e){const n=this.Uo(this.Vo);this.stream=this.Qo(t,e),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((t=>{n((()=>this.Go(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(t){return er("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Ws.enqueueAndForget((()=>this.Vo===t?e():(er("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,s,i,r,o,a){this.Ws=t,this.bo=n,this.Po=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new sh(t,e)}}class rh extends ih{Qo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Co.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:rr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.useProto3Json?(or(void 0===e||"string"==typeof e),so.fromBase64String(e||"")):(or(void 0===e||e instanceof Uint8Array),so.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?cr.UNKNOWN:Ic(t.code);return new ur(e,t.message||"")}(o);n=new kc(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Kc(t,s.document.name),r=$c(s.document.updateTime),o=s.document.createTime?$c(s.document.createTime):Cr.min(),a=new ko({mapValue:{fields:s.document.fields}}),c=Lo.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Dc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Kc(t,s.document),r=s.readTime?$c(s.readTime):Cr.min(),o=Lo.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Dc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Kc(t,s.document),r=s.removedTargetIds||[];n=new Dc([],r,i,null)}else{if(!("filter"in e))return rr();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new wc(s),r=t.targetId;n=new Nc(r,i)}}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return Cr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Cr.min():e.readTime?$c(e.readTime):Cr.min()}(t);return this.listener.zo(e,n)}jo(t){const e={};e.database=Wc(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;return n=ra(s)?{documents:Zc(t,s)}:{query:tu(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Bc(t,e.resumeToken):e.snapshotVersion.compareTo(Cr.min())>0&&(n.readTime=Uc(t,e.snapshotVersion.toTimestamp())),n}(this.serializer,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return rr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=Wc(this.serializer),e.removeTarget=t,this.Fo(e)}constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i}}class oh extends ih{get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(or(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const e=function(t,e){return t&&t.length>0?(or(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?$c(t.updateTime):$c(e);return n.isEqual(Cr.min())&&(n=$c(e)),new tc(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=$c(t.commitTime);return this.listener.Zo(n,e)}return or(!t.writeResults||0===t.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=Wc(this.serializer),this.Fo(t)}Yo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Jc(this.serializer,t)))};this.Fo(e)}constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i,this.Ho=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends class{}{nu(){if(this.eu)throw new ur(cr.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.co(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===cr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ur(cr.UNKNOWN,t.toString())}))}fo(t,e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.fo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===cr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ur(cr.UNKNOWN,t.toString())}))}terminate(){this.eu=!0}constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.eu=!1}}class ch{ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,"Online"===t&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(nr(e),this.ru=!1):er("OnlineStateTracker",e)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((t=>{n.enqueueAndForget((async()=>{vh(this)&&(er("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ar(t);e.du.add(4),await lh(e),e.mu.set("Unknown"),e.du.delete(4),await hh(e)}(this))}))})),this.mu=new ch(n,s)}}async function hh(t){if(vh(t))for(const e of t.wu)await e(!0)}async function lh(t){for(const e of t.wu)await e(!1)}function dh(t,e){const n=ar(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),yh(n)?mh(n):Vh(n).No()&&ph(n,e))}function fh(t,e){const n=ar(t),s=Vh(n);n.fu.delete(e),s.No()&&gh(n,e),0===n.fu.size&&(s.No()?s.$o():vh(n)&&n.mu.set("Unknown"))}function ph(t,e){t.gu.Ot(e.targetId),Vh(t).jo(e)}function gh(t,e){t.gu.Ot(e),Vh(t).Wo(e)}function mh(t){t.gu=new Lc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Vh(t).start(),t.mu.ou()}function yh(t){return vh(t)&&!Vh(t).xo()&&t.fu.size>0}function vh(t){return 0===ar(t).du.size}function wh(t){t.gu=void 0}async function Eh(t){t.fu.forEach(((e,n)=>{ph(t,e)}))}async function bh(t,e){wh(t),yh(t)?(t.mu.au(e),mh(t)):t.mu.set("Unknown")}async function Th(t,e,n){if(t.mu.set("Online"),e instanceof kc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.fu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.fu.delete(s),t.gu.removeTarget(s))}(t,e)}catch(n){er("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ih(t,n)}else if(e instanceof Dc?t.gu.Kt(e):e instanceof Nc?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Cr.min()))try{const e=await Pu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.gu.Xt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.fu.get(s);i&&t.fu.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.fu.get(e);if(!n)return;t.fu.set(e,n.withResumeToken(so.EMPTY_BYTE_STRING,n.snapshotVersion)),gh(t,e);const s=new lu(n.target,e,1,n.sequenceNumber);ph(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){er("RemoteStore","Failed to raise snapshot:",e),await Ih(t,e)}}async function Ih(t,e,n){if(!Ur(e))throw e;t.du.add(1),await lh(t),t.mu.set("Offline"),n||(n=()=>Pu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{er("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await hh(t)}))}function Ch(t,e){return e().catch((n=>Ih(t,n,e)))}async function Sh(t){const e=ar(t),n=Fh(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;_h(e);)try{const t=await Bu(e.localStore,s);if(null===t){0===e.lu.length&&n.$o();break}s=t.batchId,Ah(e,t)}catch(t){await Ih(e,t)}Dh(e)&&Nh(e)}function _h(t){return vh(t)&&t.lu.length<10}function Ah(t,e){t.lu.push(e);const n=Fh(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Dh(t){return vh(t)&&!Fh(t).xo()&&t.lu.length>0}function Nh(t){Fh(t).start()}async function kh(t){Fh(t).tu()}async function Rh(t){const e=Fh(t);for(const n of t.lu)e.Yo(n.mutations)}async function Lh(t,e,n){const s=t.lu.shift(),i=yc.from(s,e,n);await Ch(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Sh(t)}async function xh(t,e){e&&Fh(t).Jo&&await async function(t,e){if(Tc(n=e.code)&&n!==cr.ABORTED){const n=t.lu.shift();Fh(t).Oo(),await Ch(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Sh(t)}var n}(t,e),Dh(t)&&Nh(t)}async function Oh(t,e){const n=ar(t);n.asyncQueue.verifyOperationInProgress(),er("RemoteStore","RemoteStore received new credentials");const s=vh(n);n.du.add(3),await lh(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await hh(n)}async function Mh(t,e){const n=ar(t);e?(n.du.delete(2),await hh(n)):e||(n.du.add(2),await lh(n),n.mu.set("Unknown"))}function Vh(t){return t.yu||(t.yu=function(t,e,n){const s=ar(t);return s.nu(),new rh(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Jr:Eh.bind(null,t),Zr:bh.bind(null,t),zo:Th.bind(null,t)}),t.wu.push((async e=>{e?(t.yu.Oo(),yh(t)?mh(t):t.mu.set("Unknown")):(await t.yu.stop(),wh(t))}))),t.yu}function Fh(t){return t.pu||(t.pu=function(t,e,n){const s=ar(t);return s.nu(),new oh(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Jr:kh.bind(null,t),Zr:xh.bind(null,t),Xo:Rh.bind(null,t),Zo:Lh.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),await Sh(t)):(await t.pu.stop(),t.lu.length>0&&(er("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))}))),t.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ph{static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Ph(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ur(cr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Uh(t,e){if(nr("AsyncQueue",`${e}: ${t}`),Ur(t))return new ur(cr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{static emptySet(t){return new Bh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Bh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Bh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||Nr.comparator(e.key,n.key):(t,e)=>Nr.comparator(t.key,e.key),this.keyedMap=Da(),this.sortedSet=new Xr(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{track(t){const e=t.doc.key,n=this.Iu.get(e);n?0!==t.type&&3===n.type?this.Iu=this.Iu.insert(e,t):3===t.type&&1!==n.type?this.Iu=this.Iu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Iu=this.Iu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Iu=this.Iu.remove(e):1===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):rr():this.Iu=this.Iu.insert(e,t)}Tu(){const t=[];return this.Iu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Iu=new Xr(Nr.comparator)}}class $h{static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new $h(t,e,Bh.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ya(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,s,i,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.Eu=void 0,this.listeners=[]}}class zh{constructor(){this.queries=new Ca((t=>va(t)),ya),this.onlineState="Unknown",this.Au=new Set}}async function Gh(t,e){const n=ar(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new jh),i)try{r.Eu=await n.onListen(s)}catch(t){const n=Uh(t,`Initialization of query '${wa(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Wh(n)}async function Kh(t,e){const n=ar(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Hh(t,e){const n=ar(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.vu(t)&&(s=!0);i.Eu=t}}s&&Wh(n)}function Qh(t,e,n){const s=ar(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function Wh(t){t.Au.forEach((t=>{t.next()}))}class Xh{vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new $h(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),e=!0):this.Du(t,this.onlineState)&&(this.Cu(t),e=!0),this.Vu=t,e}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let e=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),e=!0),e}Du(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.xu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Su(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Cu(t){t=$h.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}constructor(t,e,n){this.query=t,this.bu=e,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yh{constructor(t){this.key=t}}class Jh{constructor(t){this.key=t}}class Zh{get Qu(){return this.Lu}zu(t,e){const n=e?e.ju:new qh,s=e?e.Gu:this.Gu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=Ea(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Wu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Ku(h,a)>0||c&&this.Ku(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Gu:r,ju:n,Mi:o,mutatedKeys:i}}Wu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.ju.Tu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return rr()}};return n(t)-n(e)}(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const r=e?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new $h(this.query,t.Gu,s,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:r}:{Yu:r}}Ru(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new qh,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=Ma(),this.Gu.forEach((t=>{this.Zu(t.key)&&(this.Uu=this.Uu.add(t.key))}));const e=[];return t.forEach((t=>{this.Uu.has(t)||e.push(new Jh(t))})),this.Uu.forEach((n=>{t.has(n)||e.push(new Yh(n))})),e}Xu(t){this.Lu=t.Wi,this.Uu=Ma();const e=this.zu(t.documents);return this.applyChanges(e,!0)}tc(){return $h.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}constructor(t,e){this.query=t,this.Lu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=Ma(),this.mutatedKeys=Ma(),this.Ku=Ta(t),this.Gu=new Bh(this.Ku)}}class tl{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class el{constructor(t){this.key=t,this.ec=!1}}class nl{get isPrimaryClient(){return!0===this.fc}constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.nc={},this.sc=new Ca((t=>va(t)),ya),this.ic=new Map,this.rc=new Set,this.oc=new Xr(Nr.comparator),this.uc=new Map,this.cc=new Cu,this.ac={},this.hc=new Map,this.lc=vu.bn(),this.onlineState="Unknown",this.fc=void 0}}async function sl(t,e){const n=bl(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const t=await qu(n.localStore,pa(e));n.isPrimaryClient&&dh(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await il(n,e,s,"current"===r,t.resumeToken)}return i}async function il(t,e,n,s,i){t.dc=(e,n,s)=>async function(t,e,n,s){let i=e.view.zu(n);i.Mi&&(i=await ju(t.localStore,e.query,!1).then((({documents:t})=>e.view.zu(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return gl(t,e.targetId,o.Yu),o.snapshot}(t,e,n,s);const r=await ju(t.localStore,e,!0),o=new Zh(e,r.Wi),a=o.zu(r.documents),c=Ac.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);gl(t,n,u.Yu);const h=new tl(e,n,o);return t.sc.set(e,h),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function rl(t,e){const n=ar(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter((t=>!ya(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await $u(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),fh(n.remoteStore,s.targetId),fl(n,s.targetId)})).catch(Fr)):(fl(n,s.targetId),await $u(n.localStore,s.targetId,!0))}async function ol(t,e){const n=ar(t);try{const t=await function(t,e){const n=ar(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Ds.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(so.EMPTY_BYTE_STRING,Cr.min()).withLastLimboFreeSnapshotVersion(Cr.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,s)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,r)&&o.push(n.Ds.updateTargetData(t,u))}));let a=_a(),c=Ma();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Uu(t,r,e.documentUpdates).next((t=>{a=t.zi,c=t.ji}))),!s.isEqual(Cr.min())){const e=n.Ds.getLastRemoteSnapshotVersion(t).next((e=>n.Ds.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Pr.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Li=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.uc.get(e);s&&(or(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.ec=!0:t.modifiedDocuments.size>0?or(s.ec):t.removedDocuments.size>0&&(or(s.ec),s.ec=!1))})),await vl(n,t,e)}catch(t){await Fr(t)}}function al(t,e,n){const s=ar(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.sc.forEach(((n,s)=>{const i=s.view.Ru(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ar(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Ru(e)&&(s=!0)})),s&&Wh(n)}(s.eventManager,e),t.length&&s.nc.zo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function cl(t,e,n){const s=ar(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let t=new Xr(Nr.comparator);t=t.insert(r,Lo.newNoDocument(r,Cr.min()));const n=Ma().add(r),i=new _c(Cr.min(),new Map,new Zr(br),t,n);await ol(s,i),s.oc=s.oc.remove(r),s.uc.delete(e),yl(s)}else await $u(s.localStore,e,!1).then((()=>fl(s,e,n))).catch(Fr)}async function ul(t,e){const n=ar(t),s=e.batch.batchId;try{const t=await function(t,e){const n=ar(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Pr.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);or(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ma();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);dl(n,s,null),ll(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await vl(n,t)}catch(t){await Fr(t)}}async function hl(t,e,n){const s=ar(t);try{const t=await function(t,e){const n=ar(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(or(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);dl(s,e,n),ll(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await vl(s,t)}catch(n){await Fr(n)}}function ll(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function dl(t,e,n){const s=ar(t);let i=s.ac[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function fl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach((e=>{t.cc.containsKey(e)||pl(t,e)}))}function pl(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(fh(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),yl(t))}function gl(t,e,n){for(const s of n)s instanceof Yh?(t.cc.addReference(s.key,e),ml(t,s)):s instanceof Jh?(er("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||pl(t,s.key)):rr()}function ml(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(er("SyncEngine","New document in limbo: "+n),t.rc.add(s),yl(t))}function yl(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new Nr(_r.fromString(e)),s=t.lc.next();t.uc.set(s,new el(n)),t.oc=t.oc.insert(n,s),dh(t.remoteStore,new lu(pa(ca(n.path)),s,2,Br.ct))}}async function vl(t,e,n){const s=ar(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach(((t,a)=>{o.push(s.dc(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=xu.Di(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.nc.zo(i),await async function(t,e){const n=ar(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Pr.forEach(e,(e=>Pr.forEach(e.Vi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Pr.forEach(e.Si,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Ur(t))throw t;er("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Li.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.Li=n.Li.insert(e,i)}}}(s.localStore,r))}async function wl(t,e){const n=ar(t);if(!n.currentUser.isEqual(e)){er("SyncEngine","User change. New user:",e.toKey());const t=await Fu(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new ur(cr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.hc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await vl(n,t.Qi)}}function El(t,e){const n=ar(t),s=n.uc.get(e);if(s&&s.ec)return Ma().add(s.key);{let t=Ma();const s=n.ic.get(e);if(!s)return t;for(const e of s){const s=n.sc.get(e);t=t.unionWith(s.view.Qu)}return t}}function bl(t){const e=ar(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ol.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=El.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cl.bind(null,e),e.nc.zo=Hh.bind(null,e.eventManager),e.nc.wc=Qh.bind(null,e.eventManager),e}function Tl(t){const e=ar(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ul.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hl.bind(null,e),e}class Il{async initialize(t){this.serializer=nh(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Vu(this.persistence,new Ou,t.initialUser,this.serializer)}createPersistence(t){return new ku(Lu.Fs,this.serializer)}createSharedClientState(t){return new Ku}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Cl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>al(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=wl.bind(null,this.syncEngine),await Mh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new zh}createDatastore(t){const e=nh(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new th(s));var s;return function(t,e,n,s){return new ah(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,s,i,r;return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>al(this.syncEngine,t,0),r=Qu.D()?new Qu:new Hu,new uh(e,n,s,i,r)}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new nl(t,e,n,s,i,r);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ar(t);er("RemoteStore","RemoteStore shutting down."),e.du.add(5),await lh(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):nr("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _l{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ur(cr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Uh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Yi.UNAUTHENTICATED,this.clientId=Er.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{er("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(er("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function Al(t,e){t.asyncQueue.verifyOperationInProgress(),er("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Fu(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Dl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kl(t);er("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Oh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Oh(e.remoteStore,n))),t._onlineComponents=e}function Nl(t){return"FirebaseError"===t.name?t.code===cr.FAILED_PRECONDITION||t.code===cr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function kl(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){er("FirestoreClient","Using user provided OfflineComponentProvider");try{await Al(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Nl(n))throw n;sr("Error using user provided cache. Falling back to memory cache: "+n),await Al(t,new Il)}}else er("FirestoreClient","Using default OfflineComponentProvider"),await Al(t,new Il);return t._offlineComponents}async function Rl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(er("FirestoreClient","Using user provided OnlineComponentProvider"),await Dl(t,t._uninitializedComponentsProvider._online)):(er("FirestoreClient","Using default OnlineComponentProvider"),await Dl(t,new Cl))),t._onlineComponents}function Ll(t){return Rl(t).then((t=>t.syncEngine))}async function xl(t){const e=await Rl(t),n=e.eventManager;return n.onListen=sl.bind(null,e.syncEngine),n.onUnlisten=rl.bind(null,e.syncEngine),n}function Ol(t,e,n={}){const s=new hr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new Sl({next:n=>{e.enqueueAndForget((()=>Kh(t,o))),n.fromCache&&"server"===s.source?i.reject(new ur(cr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Xh(n,r,{includeMetadataChanges:!0,xu:!0});return Gh(t,o)}(await xl(t),t.asyncQueue,e,n,s))),s.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ml=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e,n){if(!n)throw new ur(cr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Fl(t){if(!Nr.isDocumentKey(t))throw new ur(cr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pl(t){if(Nr.isDocumentKey(t))throw new ur(cr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ul(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":rr()}function Bl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ur(cr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ul(t);throw new ur(cr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ql{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ur(cr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ur(cr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new ur(cr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{get app(){if(!this._app)throw new ur(cr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ur(cr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ql(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new dr;switch(t.type){case"firstParty":return new mr(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ur(cr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ml.get(t);e&&(er("ComponentProvider","Removing Datastore"),Ml.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ql({}),this._settingsFrozen=!1}}function jl(t,e,n,s={}){var i;const r=(t=Bl(t,$l))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&sr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Yi.MOCK_USER;else{e=x(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new ur(cr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Yi(r)}t._authCredentials=new fr(new lr(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zl(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Gl{withConverter(t){return new Gl(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Kl extends Gl{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zl(this.firestore,null,new Nr(t))}withConverter(t){return new Kl(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,ca(n)),this._path=n,this.type="collection"}}function Hl(t,e,...n){if(t=B(t),1===arguments.length&&(e=Er.A()),Vl("doc","path",e),t instanceof $l){const s=_r.fromString(e,...n);return Fl(s),new zl(t,null,new Nr(s))}{if(!(t instanceof zl||t instanceof Kl))throw new ur(cr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(_r.fromString(e,...n));return Fl(s),new zl(t.firestore,t instanceof Kl?t.converter:null,new Nr(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ql{get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const e=eh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise((()=>{}));const e=new hr;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.kc.push(t),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!Ur(t))throw t;er("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(t){const e=this.Nc.then((()=>(this.Fc=!0,t().catch((t=>{this.Mc=t,this.Fc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw nr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Fc=!1,t))))));return this.Nc=e,e}enqueueAfterDelay(t,e,n){this.Uc(),this.Lc.indexOf(t)>-1&&(e=0);const s=Ph.createAndSchedule(this,t,e,n,(t=>this.Qc(t)));return this.$c.push(s),s}Uc(){this.Mc&&rr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Nc,await t}while(t!==this.Nc)}jc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Wc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Hc(t){this.Lc.push(t)}Qc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new sh(this,"async_queue_retry"),this.qc=()=>{const t=eh();t&&er("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const t=eh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qc)}}class Wl extends $l{_terminate(){return this._firestoreClient||Jl(this),this._firestoreClient.terminate()}constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Ql,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}}function Xl(t,e){const n="string"==typeof t?t:e||"(default)",s=Dt("object"==typeof t?t:Lt(),"firestore").getImmediate({identifier:n});if(!s._initialized){const t=k("firestore");t&&jl(s,...t)}return s}function Yl(t){return t._firestoreClient||Jl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jl(t){var e,n,s;const i=t._freezeSettings(),r=function(t,e,n,s){return new lo(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new _l(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=i.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zl{static fromBase64String(t){try{return new Zl(so.fromBase64String(t))}catch(t){throw new ur(cr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Zl(so.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ur(cr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dr(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ed{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return br(this._lat,t._lat)||br(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ur(cr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ur(cr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=/^__.*__$/;class id{toMutation(t,e){return null!==this.fieldMask?new hc(t,this.data,this.fieldMask,e,this.fieldTransforms):new uc(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function rd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw rr()}}class od{get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new od(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Zc({path:n,ta:!1});return s.ea(t),s}na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Zc({path:n,ta:!1});return s.Jc(),s}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return wd(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(0===t.length)throw this.ia("Document fields must not be empty");if(rd(this.Yc)&&sd.test(t))throw this.ia('Document fields cannot begin and end with "__"')}constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=r||[]}}class ad{ua(t,e,n,s=!1){return new od({Yc:t,methodName:e,oa:n,path:Dr.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||nh(t)}}function cd(t){const e=t._freezeSettings(),n=nh(t._databaseId);return new ad(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ud(t,e,n,s,i,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,i);gd("Data must be an object, but it was:",o,s);const a=fd(s,o);let c,u;if(r.merge)c=new eo(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=md(e,s,n);if(!o.contains(i))throw new ur(cr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ed(t,i)||t.push(i)}c=new eo(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new id(new ko(a),c,u)}class hd extends ed{_toFieldTransform(t){return new Za(t.path,new Ga)}isEqual(t){return t instanceof hd}}function ld(t,e,n,s=!1){return dd(n,t.ua(s?4:3,e))}function dd(t,e){if(pd(t=B(t)))return gd("Unsupported field value:",e,t),fd(t,e);if(t instanceof ed)return function(t,e){if(!rd(e.Yc))throw e.ia(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ia(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&4!==e.Yc)throw e.ia("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=dd(i,e.sa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=B(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ba(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ir.fromDate(t);return{timestampValue:Uc(e.serializer,n)}}if(t instanceof Ir){const n=new Ir(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Uc(e.serializer,n)}}if(t instanceof nd)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Zl)return{bytesValue:Bc(e.serializer,t._byteString)};if(t instanceof zl){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:jc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ia(`Unsupported field value: ${Ul(t)}`)}(t,e)}function fd(t,e){const n={};return Wr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,((t,s)=>{const i=dd(s,e.Xc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function pd(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ir||t instanceof nd||t instanceof Zl||t instanceof zl||t instanceof ed)}function gd(t,e,n){if(!pd(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Ul(n);throw"an object"===s?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function md(t,e,n){if((e=B(e))instanceof td)return e._internalPath;if("string"==typeof e)return vd(t,e);throw wd("Field path arguments must be of type string or ",t,!1,void 0,n)}const yd=new RegExp("[~\\*/\\[\\]]");function vd(t,e,n){if(e.search(yd)>=0)throw wd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new td(...e.split("."))._internalPath}catch(s){throw wd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wd(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new ur(cr.INVALID_ARGUMENT,a+t+c)}function Ed(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{get id(){return this._key.path.lastSegment()}get ref(){return new zl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Td(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Id("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}}class Td extends bd{data(){return super.data()}}function Id(t,e){return"string"==typeof e?vd(t,e):e instanceof td?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ur(cr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sd{}class _d extends Sd{}class Ad extends _d{static _create(t,e,n){return new Ad(t,e,n)}_apply(t){const e=this._parse(t);return Ld(t._query,e),new Gl(t.firestore,t.converter,ga(t._query,e))}_parse(t){const e=cd(t.firestore),n=function(t,e,n,s,i,r,o){let a;if(i.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new ur(cr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Rd(o,r);const e=[];for(const n of o)e.push(kd(s,t,n));a={arrayValue:{values:e}}}else a=kd(s,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Rd(o,r),a=ld(n,"where",o,"in"===r||"not-in"===r);return Uo.create(i,r,a)}(t._query,0,e,t.firestore._databaseId,this._field,this._op,this._value);return n}constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}}class Dd extends Sd{static _create(t,e){return new Dd(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Bo.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const s=e.getFlattenedFilters();for(const t of s)Ld(n,t),n=ga(n,t)}(t._query,e),new Gl(t.firestore,t.converter,ga(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(t,e){super(),this.type=t,this._queryConstraints=e}}class Nd extends _d{static _create(t,e){return new Nd(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new ur(cr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ur(cr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new Vo(e,n);return function(t,e){if(null===ha(t)){const n=la(t);null!==n&&xd(t,n,e.field)}}(t,s),s}(t._query,this._field,this._direction);return new Gl(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new oa(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}}function kd(t,e,n){if("string"==typeof(n=B(n))){if(""===n)throw new ur(cr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!da(e)&&-1!==n.indexOf("/"))throw new ur(cr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(_r.fromString(n));if(!Nr.isDocumentKey(s))throw new ur(cr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return To(t,new Nr(s))}if(n instanceof zl)return To(t,n._key);throw new ur(cr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ul(n)}.`)}function Rd(t,e){if(!Array.isArray(t)||0===t.length)throw new ur(cr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ld(t,e){if(e.isInequality()){const n=la(t),s=e.field;if(null!==n&&!n.isEqual(s))throw new ur(cr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${s.toString()}'`);const i=ha(t);null!==i&&xd(t,s,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ur(cr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ur(cr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function xd(t,e,n){if(!n.isEqual(e))throw new ur(cr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Od{convertValue(t,e="none"){switch(go(t)){case 0:return null;case 1:return t.booleanValue;case 2:return oo(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ao(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw rr()}}convertObject(t,e){const n={};return Qr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new nd(oo(t.latitude),oo(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=uo(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ho(t));default:return null}}convertTimestamp(t){const e=ro(t);return new Ir(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=_r.fromString(t);or(hu(n));const s=new fo(n.get(1),n.get(3)),i=new Nr(n.popFirst(5));return s.isEqual(e)||nr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vd{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class Fd extends bd{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Pd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Id("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}}class Pd extends Fd{data(t={}){return super.data(t)}}class Ud{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Pd(this._firestore,this._userDataWriter,n.key,n,new Vd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ur(cr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new Pd(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Vd(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Pd(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Vd(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Bd(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Vd(s.hasPendingWrites,s.fromCache),this.query=n}}function Bd(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return rr()}}class qd extends Od{convertBytes(t){return new Zl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new zl(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function $d(t,e){return function(t,e){const n=new hr;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const s=Tl(t);try{const t=await function(t,e){const n=ar(t),s=Ir.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ma());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=_a(),c=Ma();return n.Ki.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=ac(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new hc(t.key,e,Ro(e.value.mapValue),ec.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:Na(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ac[t.currentUser.toKey()];s||(s=new Xr(br)),s=s.insert(e,n),t.ac[t.currentUser.toKey()]=s}(s,t.batchId,n),await vl(s,t.changes),await Sh(s.remoteStore)}catch(t){const e=Uh(t,"Failed to persist write");n.reject(e)}}(await Ll(t),e,n))),n.promise}(Yl(t),e)}!function(t,e=!0){Ji="9.19.1",At(new q("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new Wl(new pr(t.getProvider("auth-internal")),new vr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ur(cr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fo(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),xt(Xi,"3.10.0",t),xt(Xi,"3.10.0","esm2017")}();const jd={apiKey:"AIzaSyCZbaq5RCfCwW1P86NAPLWmreI4uB-dEAs",authDomain:"todo-8834c.firebaseapp.com",projectId:"todo-8834c",storageBucket:"todo-8834c.appspot.com",messagingSenderId:"66462566758",appId:"1:66462566758:web:efe606b69c5b408f12a0a7"};const zd={todosIds:[],todosById:{},addTodo:function({title:t,descr:e}){const n={title:t,descr:e,id:a()};return this.todosIds.push(n.id),this.todosById[n.id]=n,n},deleteTodo:function(t){delete this.todosById[t],this.todosIds=this.todosIds.filter((e=>e!==t))},setTodos:function(t){this.todosIds=[],this.todosById={},t.forEach((t=>{this.todosIds.push(t.id),this.todosById[t.id]=t}))},getTodos:function(){return{todosById:this.todosById,todosIds:this.todosIds}}},Gd=(Kd=function(t){Hd.deleteTodo(t),zd.deleteTodo(t),Gd.deleteTodo(t),zd.getTodos().todosIds.length||$(".col-left__text").show()},{node:$(".col-left__todo-container"),renderTodos:function({todosIds:t,todosById:e}){t.forEach((t=>{this.addTodo(e[t])}))},addTodo:function(t){const e=$("<div>"),n=$("<div>"),s=$("<div>"),i=$("<div>"),r=$("<p>"),o=$("<p>"),a=$("<button>");e.addClass("todo"),n.addClass("todo__top"),s.addClass("todo__bottom"),i.addClass("todo__img"),r.addClass("todo__title"),o.addClass("todo__describe"),a.addClass("todo__delete"),a.click((function(){Kd(t.id)})),n.click((function(){s.toggle(),i.toggleClass("todo__img_inactive")})),e.attr("id",t.id),r.text(t.title),o.text(t.descr),a.text("X"),n.append(r,a,i),s.append(o),e.append(n,s),this.node.append(e)},deleteTodo:function(t){$(`#${t}`).remove()}});var Kd;const Hd={key:"todos",db:Xl(Rt(jd)),pull:async function(){const t=function(t,e,...n){let s=[];e instanceof Sd&&s.push(e),s=s.concat(n),function(t){const e=t.filter((t=>t instanceof Dd)).length,n=t.filter((t=>t instanceof Ad)).length;if(e>1||e>0&&n>0)throw new ur(cr.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const e of s)t=e._apply(t);return t}(function(t,e,...n){if(t=B(t),Vl("collection","path",e),t instanceof $l){const s=_r.fromString(e,...n);return Pl(s),new Kl(t,null,s)}{if(!(t instanceof zl||t instanceof Kl))throw new ur(cr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(_r.fromString(e,...n));return Pl(s),new Kl(t.firestore,null,s)}}(this.db,this.key),function(t,e="asc"){const n=e,s=Id("orderBy",t);return Nd._create(s,n)}("createdAt")),e=await function(t){t=Bl(t,Gl);const e=Bl(t.firestore,Wl),n=Yl(e),s=new qd(e);return Cd(t._query),Ol(n,t._query).then((n=>new Ud(e,s,t,n)))}(t),n=[];return e.forEach((t=>{n.push({id:t.id,title:t.data().title,descr:t.data().descr})})),n},push:async function(t){try{await function(t,e,n){t=Bl(t,zl);const s=Bl(t.firestore,Wl),i=Md(t.converter,e,n);return $d(s,[ud(cd(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,ec.none())])}(Hl(this.db,this.key,t.id),{title:t.title,descr:t.descr,createdAt:new hd("serverTimestamp")})}catch(t){console.error("Error adding document: ",t)}},deleteTodo:async function(t){const e=Hl(this.db,this.key,t);var n;await(n=e,$d(Bl(n.firestore,Wl),[new pc(n._key,ec.none())]))}};Hd.pull().then((t=>{zd.setTodos(t),Gd.renderTodos(zd.getTodos()),t.length&&$(".col-left__text").hide()})),$((function(){$(".js-textarea").keypress((function(t){13!==t.keyCode||t.shiftKey||(t.preventDefault(),$(".js-add-btn").click())})),$(".js-add-btn").click((function(t){t.preventDefault();const e=$(".js-input").val(),n=$(".js-textarea").val();let s;e?s=zd.addTodo({title:e,descr:n}):alert("Введите название вашей задачи"),console.log(s),Gd.addTodo(s),Hd.push(s),$(".col-left__text").hide(),$(".js-input").focus().val(""),$(".js-textarea").val("")}))}));