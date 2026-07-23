// ========== تضمين كود Stockfish.js ==========
const STOCKFISH_JS_CODE = `!function(){var i,s,u,c,e,r,a,t;function f(){function e(e){function i(){return g.buffer!=_&&v(g.buffer),$}function l(){return g.buffer!=_&&v(g.buffer),ee}function h(){return g.buffer!=_&&v(g.buffer),te}function P(){return g.buffer!=_&&v(g.buffer),ne}e=e||{},(c=c||(void 0!==e?e:{})).ready=new Promise(function(e,t){F=e,W=t}),"undefined"!=typeof global&&"[object process]"===Object.prototype.toString.call(global.process)&&"undefined"!=typeof fetch&&("undefined"==typeof XMLHttpRequest&&(global.XMLHttpRequest=function(){var n,r={open:function(e,t){n=t},send:function(){require("fs").readFile(n,function(e,t){r.readyState=4,e?(console.error(e),r.status=404,r.onerror(e)):(r.status=200,r.response=t,r.onreadystatechange(),r.onload())})}};return r}),fetch=null),c.print=function(e){c.listener?c.listener(e):console.log(e)},c.printErr=function(e){c.listener?c.listener(e):console.error(e)},c.terminate=function(){void 0!==E&&E.ua()};var c,F,W,L,t,n,B,U,Y=Object.assign({},c),H=[],s="./this.program",r=(e,t)=>{throw t},N="object"==typeof window,o="function"==typeof importScripts,u="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,d=c.ENVIRONMENT_IS_PTHREAD||!1,a="";function V(e){return c.locateFile?c.locateFile(e,a):a+e}if(u){a=o?require("path").dirname(a)+"/":__dirname+"/",U=()=>{B||(n=require("fs"),B=require("path"))},L=function(e,t){return U(),e=B.normalize(e),n.readFileSync(e,t?void 0:"utf8")},t=e=>e=(e=L(e,!0)).buffer?e:new Uint8Array(e),1<process.argv.length&&(s=process.argv[1].replace(/\\/g,"/")),H=process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof q))throw e}),process.on("unhandledRejection",function(e){throw e}),r=(e,t)=>{if(b())throw process.exitCode=e,t;t instanceof q||m("exiting due to exception: "+t),process.exit(e)},c.inspect=function(){return"[Emscripten Module object]"};let e;try{e=require("worker_threads")}catch(e){throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),e}global.Worker=e.Worker}else(N||o)&&(o?a=self.location.href:"undefined"!=typeof document&&document.currentScript&&(a=document.currentScript.src),a=0!==(a=gt?gt:a).indexOf("blob:")?a.substr(0,a.replace(/[?#].*/,"").lastIndexOf("/")+1):"",u||(L=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},o&&(t=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)})));u&&"undefined"==typeof performance&&(global.performance=require("perf_hooks").performance);var G,f,p=console.log.bind(console),z=console.warn.bind(console),Q=(u&&(U(),p=e=>n.writeSync(1,e+"\n"),z=e=>n.writeSync(2,e+"\n")),c.print||p),m=c.printErr||z,X=(Object.assign(c,Y),c.arguments&&(H=c.arguments),c.thisProgram&&(s=c.thisProgram),c.quit&&(r=c.quit),c.wasmBinary&&(f=c.wasmBinary),c.noExitRuntime||!0);"object"!=typeof WebAssembly&&A("no native wasm support detected");var g,J,K=!1;function Z(e){var t=new TextDecoder(e);this.decode=e=>(e.buffer instanceof SharedArrayBuffer&&(e=new Uint8Array(e)),t.decode.call(t,e))}var _,$,ee,te,ne,re="undefined"!=typeof TextDecoder?new Z("utf8"):void 0;function ae(e,t,n){var r=t+n;for(n=t;e[n]&&!(r<=n);)++n;if(16<n-t&&e.subarray&&re)return re.decode(e.subarray(t,n));for(r="";t<n;){var a,o,i=e[t++];128&i?(a=63&e[t++],192==(224&i)?r+=String.fromCharCode((31&i)<<6|a):(o=63&e[t++],(i=224==(240&i)?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])<65536?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i)))):r+=String.fromCharCode(i)}return r}function y(e){return e?ae(l(),e,void 0):""}function w(e,t,n,r){if(0<r){r=n+r-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if((o=55296<=o&&o<=57343?65536+((1023&o)<<10)|1023&e.charCodeAt(++a):o)<=127){if(r<=n)break;t[n++]=o}else{if(o<=2047){if(r<=n+1)break;t[n++]=192|o>>6}else{if(o<=65535){if(r<=n+2)break;t[n++]=224|o>>12}else{if(r<=n+3)break;t[n++]=240|o>>18,t[n++]=128|o>>12&63}t[n++]=128|o>>6&63}t[n++]=128|63&o}}t[n]=0}}function oe(e){for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);(r=55296<=r&&r<=57343?65536+((1023&r)<<10)|1023&e.charCodeAt(++n):r)<=127?++t:t=r<=2047?t+2:r<=65535?t+3:t+4}return t}function ie(e){var t=oe(e)+1,n=j(t);return w(e,i(),n,t),n}function se(e,t){i().set(e,t)}function v(e){_=e,c.HEAP8=$=new Int8Array(e),c.HEAP16=new Int16Array(e),c.HEAP32=te=new Int32Array(e),c.HEAPU8=ee=new Uint8Array(e),c.HEAPU16=new Uint16Array(e),c.HEAPU32=new Uint32Array(e),c.HEAPF32=new Float32Array(e),c.HEAPF64=ne=new Float64Array(e)}if("undefined"!=typeof TextDecoder&&new Z("utf-16le"),d&&(_=c.buffer),p=c.INITIAL_MEMORY||134217728,d)g=c.wasmMemory,_=c.buffer;else if(c.wasmMemory)g=c.wasmMemory;else if(!((g=new WebAssembly.Memory({initial:p/65536,maximum:32768,shared:!0})).buffer instanceof SharedArrayBuffer))throw m("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),u&&console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"),Error("bad memory");(_=g?g.buffer:_).byteLength,v(_);var ue,ce=[],fe=[],le=[],de=[],pe=0;function b(){return X||0<pe}var S,x=0,me=null,M=null;function A(e){throw d?postMessage({cmd:"onAbort",arg:e}):c.onAbort&&c.onAbort(e),m(e="Aborted("+e+")"),K=!0,e=new WebAssembly.RuntimeError(e+". Build with -s ASSERTIONS=1 for more info."),W(e),e}function he(){return S.startsWith("data:application/octet-stream;base64,")}function ge(){var e=S;try{if(e==S&&f)return new Uint8Array(f);if(t)return t(e);throw"both async and sync fetching of the wasm failed"}catch(e){A(e)}}c.preloadedImages={},c.preloadedAudios={},S="stockfish.wasm",he()||(S=V(S));var _e={6678816:function(){try{c.onDoneSearching()}catch(e){}}};function k(e){for(;0<e.length;){var t,n=e.shift();"function"==typeof n?n(c):"number"==typeof(t=n.Xa)?void 0===n.ia?be(t)():be(t)(n.ia):t(void 0===n.ia?null:n.ia)}}function ye(e){var t=ft();return e=e(),lt(t),e}function we(e){var t=E.ea[e];t&&(h()[e>>2]=0,E.za(t.worker))}var E={fa:[],ka:[],pa:[],Fa:function(){d&&E.Ha()},$a:function(){},Ha:function(){E.receiveObjectTransfer=E.Ka,E.threadInit=E.Aa,E.setExitStatus=E.Ma,X=!1},ea:{},Ma:function(){},ua:function(){for(var e in E.ea){var t=E.ea[e];t&&t.worker&&E.za(t.worker)}for(e=0;e<E.fa.length;++e)E.fa[e].terminate();E.fa=[]},za:function(e){E.La(function(){delete E.ea[e.ga.va],E.fa.push(e),E.ka.splice(E.ka.indexOf(e),1),it(e.ga.va),e.ga=void 0})},La:function(e){h()[dt>>2]=0;try{e()}finally{h()[dt>>2]=1}},Ka:function(){},Aa:function(){for(var e in E.pa)E.pa.hasOwnProperty(e)&&E.pa[e]()},Ia:function(r,a){r.onmessage=e=>{var t,n=(e=e.data).cmd;r.ga&&(E.Ca=r.ga.va),e.targetThread&&e.targetThread!=st()?(t=E.ea[e.fb])?t.worker.postMessage(e,e.transferList):m('Internal error! Worker sent a message "'+n+'" to target pthread '+e.targetThread+", but that thread no longer exists!"):"processQueuedMainThreadWork"===n?rt():"spawnThread"===n?Se(e):"cleanupThread"===n?we(e.thread):"killThread"===n?(e=e.thread,h()[e>>2]=0,n=E.ea[e],delete E.ea[e],n.worker.terminate(),it(e),E.ka.splice(E.ka.indexOf(n.worker),1),n.worker.ga=void 0):"cancelThread"===n?E.ea[e.thread].worker.postMessage({cmd:"cancel"}):"loaded"===n?(r.loaded=!0,a&&a(r),r.ja&&(r.ja(),delete r.ja)):"print"===n?Q("Thread "+e.threadId+": "+e.text):"printErr"===n?m("Thread "+e.threadId+": "+e.text):"alert"===n?alert("Thread "+e.threadId+": "+e.text):"setimmediate"===e.target?r.postMessage(e):"onAbort"===n?c.onAbort&&c.onAbort(e.arg):m("worker sent an unknown command "+n),E.Ca=void 0},r.onerror=e=>{throw m("worker sent an error! "+e.filename+":"+e.lineno+": "+e.message),e},u&&(r.on("message",function(e){r.onmessage({data:e})}),r.on("error",function(e){r.onerror(e)}),r.on("detachedExit",function(){})),r.postMessage({cmd:"load",urlOrBlob:c.mainScriptUrlOrBlob||gt,wasmMemory:g,wasmModule:J})},Ba:function(){var e=V("stockfish.worker.js");E.fa.push(new Worker(e))},Ea:function(){return 0==E.fa.length&&(E.Ba(),E.Ia(E.fa[0])),E.fa.pop()}};function ve(e){if(d)return O(1,0,e);try{mt(e)}catch(e){e instanceof q||"unwind"==e||r(1,e)}}c.establishStackSpace=function(){var e=st(),t=h()[e+44>>2],e=h()[e+48>>2];ct(t,t-e),lt(t)};var D=[];function be(e){var t=D[e];return t||(e>=D.length&&(D.length=e+1),D[e]=t=ue.get(e)),t}function Se(e){var t=E.Ea();if(!t)return 6;E.ka.push(t);var n=E.ea[e.ta]={worker:t,va:e.ta},r=(t.ga=n,{cmd:"run",start_routine:e.Na,arg:e.ia,threadInfoStruct:e.ta});return t.ja=()=>{r.time=performance.now(),t.postMessage(r,e.Sa)},t.loaded&&(t.ja(),delete t.ja),0}c.invokeEntryPoint=function(e,t){return be(e)(t)};var xe=u?()=>{var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}:d?()=>performance.now()-c.__performance_now_clock_drift:()=>performance.now(),Me=[null,[],[]],Ae={};function ke(e,t,n){return d?O(2,1,e,t,n):0}function Ee(e,t){if(d)return O(3,1,e,t)}function De(e,t,n){return d?O(4,1,e,t,n):0}function Ie(e,t,n){if(d)return O(5,1,e,t,n)}var I=[];function O(a,o){var i=arguments.length-2,s=arguments;return ye(function(){for(var e=j(8*i),t=e>>3,n=0;n<i;n++){var r=s[2+n];P()[t+n]=r}return at(a,i,e,o)})}var Oe=[],Re=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function Te(e){return e=2<e?y(e):e,Re[e]||("undefined"!=typeof document?document.querySelector(e):void 0)}function Ce(e,t,n){var r,a,o,i,s=Te(e);return s?(s.oa&&(h()[s.oa>>2]=t,h()[s.oa+4>>2]=n),!s.ya&&s.Ua?s.oa?(s=h()[s.oa+8>>2],e=e?y(e):"",r=s,a=e,o=t,i=n,ye(function(){var e,t=j(12),n=0;a&&(n=oe(a)+1,e=ut(n),w(a,l(),e,n),n=e),h()[t>>2]=n,h()[t+4>>2]=o,h()[t+8>>2]=i,ot(r,657457152,0,n,t)}),1):-4:(e=!1,(s=s.ya?s.ya:s).na&&s.na.ma&&(e=0===(e=s.na.ma.getParameter(2978))[0]&&0===e[1]&&e[2]===s.width&&e[3]===s.height),s.width=t,s.height=n,e&&s.na.ma.viewport(0,0,t,n),0)):-4}function je(e,t,n){return d?O(6,1,e,t,n):Ce(e,t,n)}function qe(n,e){n.wa||(n.wa=n.getContext,n.getContext=function(e,t){return"webgl"==e==(t=n.wa(e,t))instanceof WebGLRenderingContext?t:null});var t,r,a,o=n.getContext("webgl",e);{if(o){if(o=o,e=e,r=ut(8),h()[r+4>>2]=st(),a={Za:r,attributes:e,version:e.Ja,ma:o},o.canvas&&(o.canvas.na=a),(void 0===e.xa||e.xa)&&!(o=(o=a)||Pe).Ga){o.Ga=!0;var i=t=o.ma,s=i.getExtension("ANGLE_instanced_arrays"),u=(s&&(i.vertexAttribDivisor=function(e,t){s.vertexAttribDivisorANGLE(e,t)},i.drawArraysInstanced=function(e,t,n,r){s.drawArraysInstancedANGLE(e,t,n,r)},i.drawElementsInstanced=function(e,t,n,r,a){s.drawElementsInstancedANGLE(e,t,n,r,a)}),t),c=u.getExtension("OES_vertex_array_object"),f=(c&&(u.createVertexArray=function(){return c.createVertexArrayOES()},u.deleteVertexArray=function(e){c.deleteVertexArrayOES(e)},u.bindVertexArray=function(e){c.bindVertexArrayOES(e)},u.isVertexArray=function(e){return c.isVertexArrayOES(e)}),t),l=f.getExtension("WEBGL_draw_buffers");l&&(f.drawBuffers=function(e,t){l.drawBuffersWEBGL(e,t)}),t.Va=t.getExtension("EXT_disjoint_timer_query"),t.bb=t.getExtension("WEBGL_multi_draw"),(t.getSupportedExtensions()||[]).forEach(function(e){e.includes("lose_context")||e.includes("debug")||t.getExtension(e)})}return r}return 0}}var Pe,Fe,We=["default","low-power","high-performance"],Le={};function Be(){if(!Fe){var e,t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:s||"./this.program"};for(e in Le)void 0===Le[e]?delete t[e]:t[e]=Le[e];var n=[];for(e in t)n.push(e+"="+t[e]);Fe=n}return Fe}function Ue(r,a){var o;return d?O(7,1,r,a):(o=0,Be().forEach(function(e,t){var n=a+o;for(t=h()[r+4*t>>2]=n,n=0;n<e.length;++n)i()[t++>>0]=e.charCodeAt(n);i()[t>>0]=0,o+=e.length+1}),0)}function Ye(e,t){var n,r;return d?O(8,1,e,t):(n=Be(),h()[e>>2]=n.length,r=0,n.forEach(function(e){r+=e.length+1}),h()[t>>2]=r,0)}function He(e){return d?O(9,1,e):0}function Ne(e,t,n,r){return d?O(10,1,e,t,n,r):(e=Ae.Ya(e),t=Ae.Wa(e,t,n),h()[r>>2]=t,0)}function Ve(e,t,n,r,a){if(d)return O(11,1,e,t,n,r,a)}function Ge(e,t,n,r){if(d)return O(12,1,e,t,n,r);for(var a=0,o=0;o<n;o++){var i=h()[t>>2],s=h()[t+4>>2];t+=8;for(var u=0;u<s;u++){var c=l()[i+u],f=Me[e];0===c||10===c?((1===e?Q:m)(ae(f,0)),f.length=0):f.push(c)}a+=s}return h()[r>>2]=a,0}function R(e){return 0==e%4&&(0!=e%100||0==e%400)}function ze(e,t){for(var n=0,r=0;r<=t;n+=e[r++]);return n}var T=[31,29,31,30,31,30,31,31,30,31,30,31],C=[31,28,31,30,31,30,31,31,30,31,30,31];function Qe(e,t){for(e=new Date(e.getTime());0<t;){var n=e.getMonth(),r=(R(e.getFullYear())?T:C)[n];if(!(t>r-e.getDate())){e.setDate(e.getDate()+t);break}t-=r-e.getDate()+1,e.setDate(1),n<11?e.setMonth(n+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1))}return e}function Xe(e,t,n,r){function a(e,t,n){for(e="number"==typeof e?e.toString():e||"";e.length<t;)e=n[0]+e;return e}function o(e,t){return a(e,t,"0")}function i(e,t){function n(e){return e<0?-1:0<e?1:0}var r;return r=0===(r=n(e.getFullYear()-t.getFullYear()))&&0===(r=n(e.getMonth()-t.getMonth()))?n(e.getDate()-t.getDate()):r}function s(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function u(e){e=Qe(new Date(e.da+1900,0,1),e.sa);var t=new Date(e.getFullYear()+1,0,4),n=s(new Date(e.getFullYear(),0,4)),t=s(t);return i(n,e)<=0?i(t,e)<=0?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var c,f=h()[r+40>>2];for(c in r={Qa:h()[r>>2],Pa:h()[r+4>>2],qa:h()[r+8>>2],la:h()[r+12>>2],ha:h()[r+16>>2],da:h()[r+20>>2],ra:h()[r+24>>2],sa:h()[r+28>>2],gb:h()[r+32>>2],Oa:h()[r+36>>2],Ra:f?y(f):""},n=y(n),f={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})n=n.replace(new RegExp(c,"g"),f[c]);var l,d,p="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),m="January February March April May June July August September October November December".split(" "),f={"%a":function(e){return p[e.ra].substring(0,3)},"%A":function(e){return p[e.ra]},"%b":function(e){return m[e.ha].substring(0,3)},"%B":function(e){return m[e.ha]},"%C":function(e){return o((e.da+1900)/100|0,2)},"%d":function(e){return o(e.la,2)},"%e":function(e){return a(e.la,2," ")},"%g":function(e){return u(e).toString().substring(2)},"%G":u,"%H":function(e){return o(e.qa,2)},"%I":function(e){return 0==(e=e.qa)?e=12:12<e&&(e-=12),o(e,2)},"%j":function(e){return o(e.la+ze(R(e.da+1900)?T:C,e.ha-1),3)},"%m":function(e){return o(e.ha+1,2)},"%M":function(e){return o(e.Pa,2)},"%n":function(){return"\n"},"%p":function(e){return 0<=e.qa&&e.qa<12?"AM":"PM"},"%S":function(e){return o(e.Qa,2)},"%t":function(){return"\t"},"%u":function(e){return e.ra||7},"%U":function(e){var t=new Date(e.da+1900,0,1),n=0===t.getDay()?t:Qe(t,7-t.getDay());return i(n,e=new Date(e.da+1900,e.ha,e.la))<0?o(Math.ceil((31-n.getDate()+(ze(R(e.getFullYear())?T:C,e.getMonth()-1)-31)+e.getDate())/7),2):0===i(n,t)?"01":"00"},"%V":function(e){var t=new Date(e.da+1901,0,4),n=s(new Date(e.da+1900,0,4)),t=s(t),r=Qe(new Date(e.da+1900,0,1),e.sa);return i(r,n)<0?"53":i(t,r)<=0?"01":o(Math.ceil((n.getFullYear()<e.da+1900?e.sa+32-n.getDate():e.sa+1-n.getDate())/7),2)},"%w":function(e){return e.ra},"%W":function(e){var t=new Date(e.da,0,1),n=1===t.getDay()?t:Qe(t,0===t.getDay()?1:7-t.getDay()+1);return i(n,e=new Date(e.da+1900,e.ha,e.la))<0?o(Math.ceil((31-n.getDate()+(ze(R(e.getFullYear())?T:C,e.getMonth()-1)-31)+e.getDate())/7),2):0===i(n,t)?"01":"00"},"%y":function(e){return(e.da+1900).toString().substring(2)},"%Y":function(e){return e.da+1900},"%z":function(e){var t=0<=(e=e.Oa);return e=Math.abs(e)/60,(t?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":function(e){return e.Ra},"%%":function(){return"%"}};for(c in n=n.replace(/%%/g,"\0\0"),f)n.includes(c)&&(n=n.replace(new RegExp(c,"g"),f[c](r)));return n=n.replace(/\0\0/g,"%"),l=n,d=Array(oe(l)+1),w(l,d,0,d.length),(c=d).length>t?0:(se(c,e),c.length-1)}E.Fa();var Je,Ke=[null,ve,ke,Ee,De,Ie,je,Ue,Ye,He,Ne,Ve,Ge],Ze={p:function(e,t){$e(e,t)},k:function(e){tt(e,!o,1,!N),E.Aa()},i:function(e){d?postMessage({cmd:"cleanupThread",thread:e}):we(e)},e:function(e,t,n,r){var a;return"undefined"==typeof SharedArrayBuffer?(m("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6):(a=[],d&&0===a.length?nt(687865856,e,t,n,r):(e={Na:n,ta:e,ia:r,Sa:a},d?(e.Ta="spawnThread",postMessage(e,a),0):Se(e)))},g:ke,o:Ee,v:De,x:Ie,C:function(){return 2097152},l:function(e,t){if(e==t)postMessage({cmd:"processQueuedMainThreadWork"});else if(d)postMessage({targetThread:e,cmd:"processThreadQueue"});else{if(!(e=(e=E.ea[e])&&e.worker))return;e.postMessage({cmd:"processThreadQueue"})}return 1},b:function(){A("")},y:function(e,t){if(0===e)e=Date.now();else{if(1!==e&&4!==e)return h()[et()>>2]=28,-1;e=xe()}return h()[t>>2]=e/1e3|0,h()[t+4>>2]=e%1e3*1e6|0,0},w:function(e,t,n){var r;for(I.length=0,n>>=2;r=l()[t++];)(r=r<105)&&1&n&&n++,I.push(r?P()[n++>>1]:h()[n]),++n;return d?O.apply(null,[-1-e,0].concat(I)):_e[e].apply(null,I)},h:function(){u||o||(G=G||{})["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]||(G["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]=1,m("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"))},c:xe,B:function(e,t,n){l().copyWithin(e,t,t+n)},q:function(){return u?require("os").cpus().length:navigator.hardwareConcurrency},D:function(e,t,n){Oe.length=t,n>>=3;for(var r=0;r<t;r++)Oe[r]=P()[n+r];return(e<0?_e[-e-1]:Ke[e]).apply(null,Oe)},A:function(e){var t=l().length;if(!((e>>>=0)<=t||2147483648<e))for(var n=1;n<=4;n*=2){var r=t*(1+.2/n),a=Math;r=Math.max(e,r),a=a.min.call(a,2147483648,r+(65536-r%65536)%65536);e:{try{g.grow(a-_.byteLength+65535>>>16),v(g.buffer);var o=1;break e}catch(e){}o=void 0}if(o)return!0}return!1},E:function(e,t,n){return(Te(e)?Ce:je)(e,t,n)},m:function(){throw"unwind"},j:function(e,t){t>>=2;var n=h()[t+6];return t={alpha:!!h()[t],depth:!!h()[t+1],stencil:!!h()[t+2],antialias:!!h()[t+3],premultipliedAlpha:!!h()[t+4],preserveDrawingBuffer:!!h()[t+5],powerPreference:We[n],failIfMajorPerformanceCaveat:!!h()[t+7],Ja:h()[t+8],ab:h()[t+9],xa:h()[t+10],Da:h()[t+11],cb:h()[t+12],eb:h()[t+13]},!(e=Te(e))||t.Da?0:qe(e,t)},s:Ue,t:Ye,d:function(e){mt(e)},f:He,u:Ne,n:Ve,z:Ge,a:g||c.wasmMemory,r:Xe},$e=(!function(){function t(e,t){c.asm=e.exports,E.pa.push(c.asm.L),ue=c.asm.Z,fe.unshift(c.asm.F),J=t,d||(x--,c.monitorRunDependencies&&c.monitorRunDependencies(x),0==x&&(null!==me&&(clearInterval(me),me=null),M)&&(e=M,M=null,e()))}function n(e){t(e.instance,e.module)}function r(e){return(f||!N&&!o||"function"!=typeof fetch?Promise.resolve().then(ge):fetch(S,{credentials:"same-origin"}).then(function(e){if(e.ok)return e.arrayBuffer();throw"failed to load wasm binary file at '"+S+"'"}).catch(ge)).then(function(e){return WebAssembly.instantiate(e,a)}).then(function(e){return e}).then(e,function(e){m("failed to asynchronously prepare wasm: "+e),A(e)})}var a={a:Ze};if(d||(x++,c.monitorRunDependencies&&c.monitorRunDependencies(x)),c.instantiateWasm)try{return c.instantiateWasm(a,t)}catch(e){return m("Module.instantiateWasm callback failed with error: "+e)}(f||"function"!=typeof WebAssembly.instantiateStreaming||he()||"function"!=typeof fetch?r(n):fetch(S,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,a).then(n,function(e){return m("wasm streaming compile failed: "+e),m("falling back to ArrayBuffer instantiation"),r(n)})})).catch(W)}(),c.___wasm_call_ctors=function(){return(c.___wasm_call_ctors=c.asm.F).apply(null,arguments)},c._main=function(){return($e=c._main=c.asm.G).apply(null,arguments)}),et=(c._command=function(){return(c._command=c.asm.H).apply(null,arguments)},c._isReady=function(){return(c._isReady=c.asm.I).apply(null,arguments)},c._isSearching=function(){return(c._isSearching=c.asm.J).apply(null,arguments)},c._free=function(){return(c._free=c.asm.K).apply(null,arguments)},c._emscripten_tls_init=function(){return(c._emscripten_tls_init=c.asm.L).apply(null,arguments)},c.___errno_location=function(){return(et=c.___errno_location=c.asm.M).apply(null,arguments)}),tt=(c.__emscripten_thread_crashed=function(){return(c.__emscripten_thread_crashed=c.asm.N).apply(null,arguments)},c._emscripten_proxy_main=function(){return(c._emscripten_proxy_main=c.asm.O).apply(null,arguments)},c.__emscripten_thread_init=function(){return(tt=c.__emscripten_thread_init=c.asm.P).apply(null,arguments)}),nt=(c._emscripten_current_thread_process_queued_calls=function(){return(c._emscripten_current_thread_process_queued_calls=c.asm.Q).apply(null,arguments)},c._emscripten_sync_run_in_main_thread_4=function(){return(nt=c._emscripten_sync_run_in_main_thread_4=c.asm.R).apply(null,arguments)}),rt=c._emscripten_main_thread_process_queued_calls=function(){return(rt=c._emscripten_main_thread_process_queued_calls=c.asm.S).apply(null,arguments)},at=c._emscripten_run_in_main_runtime_thread_js=function(){return(at=c._emscripten_run_in_main_runtime_thread_js=c.asm.T).apply(null,arguments)},ot=c._emscripten_dispatch_to_thread_=function(){return(ot=c._emscripten_dispatch_to_thread_=c.asm.U).apply(null,arguments)},it=c.__emscripten_thread_free_data=function(){return(it=c.__emscripten_thread_free_data=c.asm.V).apply(null,arguments)},st=(c.__emscripten_thread_exit=function(){return(c.__emscripten_thread_exit=c.asm.W).apply(null,arguments)},c._pthread_self=function(){return(st=c._pthread_self=c.asm.X).apply(null,arguments)}),ut=c._malloc=function(){return(ut=c._malloc=c.asm.Y).apply(null,arguments)},ct=c._emscripten_stack_set_limits=function(){return(ct=c._emscripten_stack_set_limits=c.asm._).apply(null,arguments)},ft=c.stackSave=function(){return(ft=c.stackSave=c.asm.$).apply(null,arguments)},lt=c.stackRestore=function(){return(lt=c.stackRestore=c.asm.aa).apply(null,arguments)},j=c.stackAlloc=function(){return(j=c.stackAlloc=c.asm.ba).apply(null,arguments)},dt=c.__emscripten_allow_main_runtime_queued_calls=6678352;function q(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function pt(o){function e(){if(!Je&&(Je=!0,c.calledRun=!0,!K)){if(d||k(fe),d||k(le),F(c),c.onRuntimeInitialized&&c.onRuntimeInitialized(),ht){var e=o,t=c._emscripten_proxy_main,n=(e=e||[]).length+1,r=j(4*(n+1));h()[r>>2]=ie(s);for(var a=1;a<n;a++)h()[(r>>2)+a]=ie(e[a-1]);h()[(r>>2)+n]=0,t(n,r)}if(!d){if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;)e=c.postRun.shift(),de.unshift(e);k(de)}}}if(o=o||H,!(0<x))if(d)F(c),d||k(fe),postMessage({cmd:"loaded"});else{if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)t=void 0,t=c.preRun.shift(),ce.unshift(t);k(ce),0<x||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1),e()},1)):e())}var t}function mt(e){if(d)throw ve(e),"unwind";b()||d||E.ua(),b()||(E.ua(),c.onExit&&c.onExit(e),K=!0),r(e,new q(e))}if(c.ccall=function(e,t,n,r){var a={string:function(e){var t,n,r=0;return null!=e&&0!==e&&(t=1+(e.length<<2),n=r=j(t),w(e,l(),n,t)),r},array:function(e){var t=j(e.length);return se(e,t),t}},o=(e=c["_"+e],[]),i=0;if(r)for(var s=0;s<r.length;s++){var u=a[n[s]];u?(0===i&&(i=ft()),o[s]=u(r[s])):o[s]=r[s]}return n=e.apply(null,o),e=n,0!==i&&lt(i),"string"===t?y(e):"boolean"===t?!!e:e},c.keepRuntimeAlive=b,c.PThread=E,c.PThread=E,c.wasmMemory=g,c.ExitStatus=q,M=function e(){Je||pt(),Je||(M=e)},c.run=pt,c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();var ht=!0;return c.noInitialRun&&(ht=!1),pt(),e.ready}var gt;gt="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(gt=gt||__filename);return"object"==typeof exports&&"object"==typeof module?module.exports=e:"function"==typeof define&&define.amd?define([],function(){return e}):"object"==typeof exports&&(exports.Stockfish=e),e}function n(e){if(r.ccall("command",null,["string"],[e],{async:"undefined"!=typeof IS_ASYNCIFY&&/^go\b/.test(e)}),"quit"===e){try{r.terminate()}catch(e){}try{self.close()}catch(e){}try{process.exit()}catch(e){}}}function o(){for(;t.length&&(!r._isSearching||!r._isSearching());)n(t.shift())}function l(e){"go"===(e=e.trim()).substring(0,2)||"setoption"===e.substring(0,9)?t.push(e):n(e),o()}function d(){if(r._isReady&&!r._isReady())return setTimeout(d,10);var n;"undefined"==typeof IS_ASYNCIFY?r.onDoneSearching=o:r.onDoneSearching=function(){setTimeout(o,1)},r.processCommand=l,a.length&&(n=0,function e(){for(var t;n<a.length;){if((t=a[n++]).startsWith("sleep "))return setTimeout(e,t.slice(6));l(t)}}())}function p(n){var e,r=0,a=[],t=s.slice(1+(s.lastIndexOf(".")-1>>>0)),o=s.slice(0,-t.length);for(e=0;e<n;++e)!function(e,t){fetch(new Request(e)).then(function(e){return e.blob()}).then(function(e){t(e)})}(o+"-part-"+e+t,function(t){return function(e){++r,a[t]=e,r===n&&(e=URL.createObjectURL(new Blob(a,{type:"application/wasm"})),u(e))}}(e))}"undefined"!=typeof self&&"worker"===self.location.hash.split(",")[1]||"undefined"!=typeof global&&"[object process]"===Object.prototype.toString.call(global.process)&&!require("worker_threads").isMainThread?function(){"use strict";var e,t,n,r={},a="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node;a&&(e=require("worker_threads"),(t=e.parentPort).on("message",function(e){onmessage({data:e})}),n=require("fs"),Object.assign(global,{self:global,require:require,Module:r,location:{href:__filename},Worker:e.Worker,importScripts:function(e){(0,eval)(n.readFileSync(e,"utf8"))},postMessage:function(e){t.postMessage(e)},performance:global.performance||{now:function(){return Date.now()}}}));var o=function(){var e=Array.prototype.slice.call(arguments).join(" ");a?n.writeSync(2,e+"\n"):console.error(e)};self.alert=function(){var e=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:e,threadId:r._pthread_self()})},r.instantiateWasm=(e,t)=>{e=new WebAssembly.Instance(r.wasmModule,e);return t(e),r.wasmModule=null,e.exports},self.onmessage=e=>{try{var t;if("load"===e.data.cmd)r.wasmModule=e.data.wasmModule,r.wasmMemory=e.data.wasmMemory,r.buffer=r.wasmMemory.buffer,r.ENVIRONMENT_IS_PTHREAD=!0,"string"==typeof e.data.urlOrBlob?importScripts(e.data.urlOrBlob):(t=URL.createObjectURL(e.data.urlOrBlob),importScripts(t),URL.revokeObjectURL(t)),i(r).then(function(e){r=e});else if("run"===e.data.cmd){r.__performance_now_clock_drift=performance.now()-e.data.time,r.__emscripten_thread_init(e.data.threadInfoStruct,0,0,1),r.establishStackSpace(),r.PThread.receiveObjectTransfer(e.data),r.PThread.threadInit();try{var n=r.invokeEntryPoint(e.data.start_routine,e.data.arg);r.keepRuntimeAlive()?r.PThread.setExitStatus(n):r.__emscripten_thread_exit(n)}catch(e){if("unwind"!=e){if(!(e instanceof r.ExitStatus))throw e;r.keepRuntimeAlive()||r.__emscripten_thread_exit(e.status)}}}else"cancel"===e.data.cmd?r._pthread_self()&&r.__emscripten_thread_exit(-1):"setimmediate"!==e.data.target&&("processThreadQueue"===e.data.cmd?r._pthread_self()&&r._emscripten_current_thread_process_queued_calls():"processProxyingQueue"===e.data.cmd?r._pthread_self()&&r._emscripten_proxy_execute_queue(e.data.queue):(o("worker.js received unknown command "+e.data.cmd),o(e.data)))}catch(e){throw o("worker.js onmessage() captured an uncaught exception: "+e),e&&e.stack&&o(e.stack),r.__emscripten_thread_crashed&&r.__emscripten_thread_crashed(),e}},self._origOnmessage=self.onmessage,self.onmessage=function(e){"load"===e.data.cmd?(r.wasmModule=e.data.wasmModule,r.wasmMemory=e.data.wasmMemory,r.buffer=r.wasmMemory.buffer,r.ENVIRONMENT_IS_PTHREAD=!0,e.data.workerID&&(r.workerID=e.data.workerID),e.data.wasmSourceMap&&(r.wasmSourceMapData=e.data.wasmSourceMap),e.data.wasmOffsetConverter&&(r.wasmOffsetData=e.data.wasmOffsetConverter),(i=f())(r).then(function(e){r=e})):self._origOnmessage(e)}}():"undefined"!=typeof onmessage&&("undefined"==typeof window||void 0===window.document)||"undefined"!=typeof global&&"[object process]"===Object.prototype.toString.call(global.process)?(e="undefined"!=typeof global&&"[object process]"===Object.prototype.toString.call(global.process),r={},a=[],t=[],e?require.main===module?(c=require("path"),s=c.join(__dirname,c.basename(__filename,c.extname(__filename))+".wasm"),r={locateFile:function(e){return-1<e.indexOf(".wasm")?-1<e.indexOf(".wasm.map")?s+".map":s:__filename},listener:function(e){process.stdout.write(e+"\n")}},"number"==typeof enginePartsCount&&(r.wasmBinary=function(e){for(var t=require("fs"),n=c.extname(s),r=s.slice(0,-n.length),a=[],o=0;o<e;++o)a.push(t.readFileSync(r+"-part-"+o+".wasm"));return Buffer.concat(a)}(enginePartsCount)),a=process.argv.slice(2),(i=f())(r).then(d),require("readline").createInterface({input:process.stdin,output:process.stdout,completer:function(t){var e=["binc ","btime ","confidence ","depth ","infinite ","mate ","maxdepth ","maxtime ","mindepth ","mintime ","moves ","movestogo ","movetime ","ponder ","searchmoves ","shallow ","winc ","wtime "];function n(e){return 0===e.toLowerCase().indexOf(t.toLowerCase())}var r=["compiler","d","eval","flip","go ","isready","ponderhit","position fen ","position startpos","position startpos moves ","quit","setoption name Clear Hash value true","setoption name Hash value ","setoption name Minimum Thinking Time value ","setoption name Move Overhead value ","setoption name MultiPV value ","setoption name Ponder value ","setoption name Skill Level value ","setoption name Slow Mover value ","setoption name Threads value ","setoption name UCI_Chess960 value false","setoption name UCI_Chess960 value true","setoption name UCI_LimitStrength value true","setoption name UCI_LimitStrength value false","setoption name UCI_Elo value ","setoption name UCI_ShowWDL value true","setoption name UCI_ShowWDL value false","setoption name nodestime value ","stop","uci","ucinewgame"].filter(n);return[r=r.length?r:(t=t.replace(/^.*\s/,""))?e.filter(n):e,t]},historySize:100}).on("line",function(e){e&&(r.processCommand?r.processCommand(e):a.push(e),"quit"===e)&&process.exit()}).on("close",function(){process.exit()}).setPrompt("")):module.exports=f:(e=self.location.hash.substr(1).split(","),s=decodeURIComponent(e[0]||location.origin+location.pathname.replace(/\.js$/i,".wasm")),u=function(t){r={locateFile:function(e){return-1<e.indexOf(".wasm")?-1<e.indexOf(".wasm.map")?s+".map":t||s:self.location.origin+self.location.pathname+"#"+s+",worker"},listener:function(e){postMessage(e)}},(i=f())(r).then(d).catch(function(e){setTimeout(function(){throw e},1)})},"number"==typeof enginePartsCount?p(enginePartsCount):u(),onmessage=onmessage||function(e){if(r.processCommand?r.processCommand(e.data):a.push(e.data),"quit"===e.data)try{self.close()}catch(e){}})):"object"==typeof document&&document.currentScript?document.currentScript._exports=f():i=f()}();`;

// ========== تأثير حقل النجوم ==========
(function () {
    const starCanvas = document.getElementById('starfield');
    const ctx = starCanvas.getContext('2d');
    let width, height;
    const stars = [];
    const STAR_COUNT = 250;
    const SPEED = 0.05;
    const MAX_DEPTH = 50;
    const MAX_RADIUS = 2.5;

    function randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    function initStars() {
        stars.length = 0;
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: randomRange(-MAX_DEPTH, MAX_DEPTH),
                y: randomRange(-MAX_DEPTH, MAX_DEPTH),
                z: randomRange(1, MAX_DEPTH)
            });
        }
    }
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        starCanvas.width = width;
        starCanvas.height = height;
    }
    function drawStars() {
        ctx.clearRect(0, 0, width, height);
        const centerX = width / 2;
        const centerY = height / 2;
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            star.z -= SPEED;
            if (star.z <= 0) {
                star.x = randomRange(-MAX_DEPTH, MAX_DEPTH);
                star.y = randomRange(-MAX_DEPTH, MAX_DEPTH);
                star.z = MAX_DEPTH;
            }
            const scale = 1 / star.z;
            const screenX = star.x * scale * 100 + centerX;
            const screenY = star.y * scale * 100 + centerY;
            if (screenX < 0 || screenX > width || screenY < 0 || screenY > height) {
                star.x = randomRange(-MAX_DEPTH, MAX_DEPTH);
                star.y = randomRange(-MAX_DEPTH, MAX_DEPTH);
                star.z = MAX_DEPTH;
                continue;
            }
            const radius = MAX_RADIUS * (1 - star.z / MAX_DEPTH) + 0.5;
            const alpha = 1 - star.z / MAX_DEPTH;
            ctx.beginPath();
            ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'white';
            ctx.fill();
            ctx.shadowBlur = 0;
        }
        requestAnimationFrame(drawStars);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initStars();
    drawStars();
})();

// ========== كود الشطرنج الكامل ==========
(function () {
    // -------- هياكل البيانات الأساسية --------
    class OpeningTrie {
        constructor() {
            this.root = {};
            this.names = {};
        }
        _parseMoves(str) {
            try {
                const tokens = str.trim().split(/\s+/);
                return tokens.filter(t => !t.endsWith('.'));
            } catch (e) {
                return [];
            }
        }
        insert(movesStr, name, eco = '') {
            const moves = this._parseMoves(movesStr);
            let node = this.root;
            for (const m of moves) {
                if (!node[m]) node[m] = {};
                node = node[m];
            }
            this.names[node] = { name, eco };
        }
        find(movesStr) {
            try {
                const moves = this._parseMoves(movesStr);
                let node = this.root,
                    lastName = null,
                    lastEco = null;
                for (const m of moves) {
                    if (m in node) {
                        node = node[m];
                        if (this.names[node]) {
                            lastName = this.names[node].name;
                            lastEco = this.names[node].eco;
                        }
                    } else break;
                }
                return { name: lastName, eco: lastEco };
            } catch (e) {
                return { name: null, eco: null };
            }
        }
    }

    const openingList = [
        ['', 'Opening Position'],
        ['1. e4', "King's Pawn"],
        ['1. d4', "Queen's Pawn"],
        ['1. e4 e5 2. Nf3 Nc6 3. Bc4', "Italian Game"],
        ['1. e4 e5 2. Nf3 Nc6 3. Bb5', "Ruy Lopez"],
        ['1. e4 e5 2. Nf3 Nc6 3. d4', 'Scotch Game'],
        ['1. e4 e5 2. Nf3 Nc6 3. Nc3', 'Three Knights'],
        ['1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6', 'Four Knights'],
        ['1. e4 e5 2. Nf3', "King's Knight"],
        ['1. e4 e5', "Open Game"],
        ['1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6', 'Two Knights Defense'],
        ['1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5', 'Giuoco Piano'],
        ['1. e4 e5 2. Nf3 d6', 'Philidor Defense'],
        ['1. e4 e5 2. Nf3 Nf6', "Petrov's Defense"],
        ['1. e4 d5', 'Scandinavian Defense'],
        ['1. e4 c5', 'Sicilian Defense'],
        ['1. e4 e6', 'French Defense'],
        ['1. e4 c6', 'Caro-Kann Defense'],
        ['1. d4 d5 2. c4', "Queen's Gambit"],
        ['1. d4 Nf6', 'Indian Game'],
        ['1. c4', 'English'],
        ['1. Nf3', 'Réti'],
        ['1. e4 c5 2. Nf3 Nc6 3. d4', 'Open Sicilian'],
        ['1. e4 c5 2. Nf3 e6', 'Sicilian: French Var.'],
        ['1. d4 d5 2. c4 dxc4', "QG Accepted"],
        ['1. d4 d5 2. c4 e6', "QG Declined"],
        ['1. e4 e5 2. f4 exf4', "KG Accepted"],
        ['1. d4 d5', "Closed Game"],
        ['1. e4 e5 2. Nc3', 'Vienna Game'],
        ['1. e4 c5 2. Nc3', 'Closed Sicilian'],
        ['1. d4 d5 2. c4 c6', 'Slav Defense'],
        ['1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5', 'Scandinavian: Main Line'],
        ['1. e4 e5 2. Bc4', "Bishop's Opening"],
        ['1. e4 e5 2. f4', "King's Gambit"],
        ['1. e3', "Van't Kruijs"],
        ['1. g3', 'Hungarian'],
        ['1. f4', 'Bird'],
        ['1. b3', 'Nimzowitsch-Larsen'],
        ['1. d3', 'Mieses'],
        ['1. b4', 'Orangutan'],
        ['1. e4 d6', 'Pirc Defense'],
        ['1. e4 g6', 'Modern Defense'],
        ['1. e4 b6', 'Owen Defense'],
        ['1. e4 Nf6', 'Alekhine Defense'],
        ['1. e4 Nc6', 'Nimzowitsch Defense'],
        ['1. d4 e6', 'Horwitz Defense'],
        ['1. d4 g6', 'Modern Defense (d4)'],
        ['1. d4 e5', 'Englund Gambit'],
        ['1. d4 c5', 'Old Benoni Defense'],
        ['1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4', 'Ruy Lopez: Morphy Defense'],
        ['1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6', 'Ruy Lopez: Exchange Var.'],
        ['1. e4 c5 2. Nf3 d6 3. d4', 'Sicilian: Najdorf'],
        ['1. d4 d5 2. c4 e6 3. Nc3 Nf6', "Queen's Gambit Declined"],
        ['1. d4 Nf6 2. c4 e6 3. Nc3 Bb4', 'Nimzo-Indian'],
        ['1. d4 Nf6 2. c4 g6 3. Nc3 d5', 'Grünfeld Defense'],
        ['1. e4 e6 2. d4 d5 3. Nc3', 'French: Classical'],
        ['1. e4 c6 2. d4 d5 3. Nc3', 'Caro-Kann: Classical'],
        ['1. e4 d5 2. exd5 Nf6', 'Scandinavian: Modern'],
        ['1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4', 'Sicilian: Open, 4.Nxd4'],
        ['1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4', 'Italian: Evans Gambit'],
        ['1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5', 'Italian: Two Knights, 4.Ng5'],
        ['1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4', 'KGA: Kieseritzky Gambit'],
        ['1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3', 'Slav: Main Line'],
        ['1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6', 'Sicilian: Najdorf, 5.Nc3'],
        ['1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O', 'Ruy Lopez: Berlin Defense, 4.O-O'],
        ['1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3', 'Nimzo-Indian: Rubinstein'],
        ['1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5', "Queen's Gambit Declined: 4.Bg5"],
    ];
    const openingTrie = new OpeningTrie();
    openingList.forEach(([moves, name]) => openingTrie.insert(moves, name));

    const DIFFICULTY_TIMES = { easy: 2000, medium: 4000, hard: 8000 };
    let currentDifficulty = 'medium';
    let SEARCH_TIME_PER_MOVE = DIFFICULTY_TIMES[currentDifficulty];
    let suggestionLoading = false;
    let trapModeActive = false;

    const pieceDisplay = { king: '♚', queen: '♛', rook: '♜', bishop: '♝', knight: '♞', pawn: '♟' };
    const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    let gameHistory = [],
        positionCount = new Map(),
        lastComputerMoveHighlight = null;
    let historyStack = [],
        redoStack = [],
        lastComputerDepth = 0;
    let moveHistoryStr = [];

    function setDifficulty(level) {
        currentDifficulty = level;
        SEARCH_TIME_PER_MOVE = DIFFICULTY_TIMES[level];
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('diff' + level.charAt(0).toUpperCase() + level.slice(1)).classList.add('active');
    }
    document.getElementById('diffEasy').addEventListener('click', () => setDifficulty('easy'));
    document.getElementById('diffMedium').addEventListener('click', () => setDifficulty('medium'));
    document.getElementById('diffHard').addEventListener('click', () => setDifficulty('hard'));

    // -------- دوال الحالة والحركات --------
    function fenToBoard(fen) {
        const parts = fen.split(' ');
        const rows = parts[0].split('/');
        const board = Array(8).fill().map(() => Array(8).fill(null));
        for (let r = 0; r < 8; r++) {
            let c = 0;
            for (const ch of rows[r]) {
                if (ch >= '1' && ch <= '8') c += +ch;
                else {
                    const color = ch === ch.toUpperCase() ? 'white' : 'black';
                    const type = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' } [ch.toLowerCase()];
                    board[r][c] = { type, color, hasMoved: false };
                    c++;
                }
            }
        }
        const turn = parts[1] === 'w' ? 'white' : 'black';
        const castling = {
            K: parts[2].includes('K'),
            Q: parts[2].includes('Q'),
            k: parts[2].includes('k'),
            q: parts[2].includes('q')
        };
        const ep = parts[3] === '-' ? null : { row: turn === 'white' ? 2 : 5, col: 'abcdefgh'.indexOf(parts[3][0]) };
        const halfMoveClock = parseInt(parts[4]) || 0;
        const fullMove = parseInt(parts[5]) || 1;
        return { board, turn, castling, enPassant: ep, halfMoveClock, fullMove };
    }

    function boardToFen(s) {
        let fen = '';
        for (let r = 0; r < 8; r++) {
            let empty = 0;
            for (let c = 0; c < 8; c++) {
                const p = s.board[r][c];
                if (!p) empty++;
                else {
                    if (empty > 0) { fen += empty;
                        empty = 0; }
                    const pieceChar = { king: 'k', queen: 'q', rook: 'r', bishop: 'b', knight: 'n', pawn: 'p' } [p.type];
                    fen += p.color === 'white' ? pieceChar.toUpperCase() : pieceChar;
                }
            }
            if (empty > 0) fen += empty;
            if (r < 7) fen += '/';
        }
        fen += ' ' + (s.turn === 'white' ? 'w' : 'b') + ' ';
        fen += (s.castling.K ? 'K' : '') + (s.castling.Q ? 'Q' : '') + (s.castling.k ? 'k' : '') + (s.castling.q ?
            'q' : '') || '-';
        fen += ' ' + (s.enPassant ? 'abcdefgh' [s.enPassant.col] + (8 - s.enPassant.row) : '-');
        fen += ' ' + (s.halfMoveClock || 0) + ' ' + (s.fullMove || 1);
        return fen;
    }

    function hashState(s) {
        return boardToFen(s).split(' ').slice(0, 4).join(' ');
    }

    let gameState = fenToBoard(START_FEN);
    let playerColor = 'white',
        selectedCell = null,
        legalMovesMap = [],
        gameOver = false,
        promotionResolve = null;
    const isWithin = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;

    const cloneState = (s) => ({
        board: s.board.map(r => r.map(c => c ? { ...c } : null)),
        turn: s.turn,
        castling: { ...s.castling },
        enPassant: s.enPassant ? { ...s.enPassant } : null,
        halfMoveClock: s.halfMoveClock,
        fullMove: s.fullMove
    });

    function clonePositionData() {
        return {
            gameHistory: [...gameHistory],
            positionCount: new Map(positionCount),
            playerColor,
            moveHistoryStr: [...moveHistoryStr]
        };
    }

    function restorePositionData(d) {
        gameHistory = [...d.gameHistory];
        positionCount = new Map(d.positionCount);
        playerColor = d.playerColor;
        moveHistoryStr = [...d.moveHistoryStr];
    }

    function createSnapshot() {
        return { state: cloneState(gameState), data: clonePositionData() };
    }

    function restoreFromSnapshot(snap) {
        gameState = cloneState(snap.state);
        restorePositionData(snap.data);
        selectedCell = null;
        legalMovesMap = [];
        gameOver = false;
        lastComputerMoveHighlight = null;
        document.getElementById('promo-overlay').style.display = 'none';
        updateOpeningDisplaySafe();
        render();
        clearAllEffects();
    }

    function pushSnapshot() {
        historyStack.push(createSnapshot());
        redoStack = [];
    }

    function moveToShortAlgebraic(move, state) {
        try {
            if (!move || !move.piece) return '';
            const piece = move.piece,
                from = move.from,
                to = move.to;
            const files = 'abcdefgh';
            const fromFile = files[from[1]],
                toFile = files[to[1]],
                toRank = 8 - to[0];
            let notation = '';
            if (move.castlingRookFrom) return to[1] > from[1] ? 'O-O' : 'O-O-O';
            if (piece.type === 'pawn') {
                if (move.capture || move.enPassant) notation = fromFile + 'x' + toFile + toRank;
                else notation = toFile + toRank;
            } else {
                const pieceLetter = { king: 'K', queen: 'Q', rook: 'R', bishop: 'B', knight: 'N' } [piece.type];
                notation = pieceLetter + toFile + toRank;
                if (move.capture) notation = pieceLetter + 'x' + toFile + toRank;
            }
            if (move.promotion) {
                const promoLetter = { queen: 'Q', rook: 'R', bishop: 'B', knight: 'N' } [move.promotion];
                notation += '=' + promoLetter;
            }
            return notation;
        } catch (e) {
            return '';
        }
    }

    function updateOpeningDisplaySafe() {
        try {
            if (moveHistoryStr.length === 0) {
                document.querySelector('.opening-name').textContent = '';
                return;
            }
            let fullStr = '';
            for (let i = 0; i < moveHistoryStr.length; i++) {
                if (i % 2 === 0) fullStr += (Math.floor(i / 2) + 1) + '. ';
                fullStr += moveHistoryStr[i] + ' ';
            }
            const result = openingTrie.find(fullStr.trim());
            document.querySelector('.opening-name').textContent = result.name ? '📖 ' + result.name : '';
        } catch (e) {
            document.querySelector('.opening-name').textContent = '';
        }
    }

    function recordMoveSafe(move) {
        try {
            const notation = moveToShortAlgebraic(move, gameState);
            if (notation) moveHistoryStr.push(notation);
            updateOpeningDisplaySafe();
        } catch (e) {}
    }

    function isSquareAttacked(board, row, col, attackerColor) {
        const opp = attackerColor === 'white' ? 'black' : 'white';
        if (attackerColor === 'white') {
            if (isWithin(row + 1, col - 1) && board[row + 1][col - 1]?.color === 'white' && board[row + 1][col - 1].type ===
                'pawn') return true;
            if (isWithin(row + 1, col + 1) && board[row + 1][col + 1]?.color === 'white' && board[row + 1][col + 1].type ===
                'pawn') return true;
        } else {
            if (isWithin(row - 1, col - 1) && board[row - 1][col - 1]?.color === 'black' && board[row - 1][col - 1].type ===
                'pawn') return true;
            if (isWithin(row - 1, col + 1) && board[row - 1][col + 1]?.color === 'black' && board[row - 1][col + 1].type ===
                'pawn') return true;
        }
        for (const [dr, dc] of [
                [-2, -1],
                [-2, 1],
                [-1, -2],
                [-1, 2],
                [1, -2],
                [1, 2],
                [2, -1],
                [2, 1]
            ]) {
            if (isWithin(row + dr, col + dc) && board[row + dr][col + dc]?.color === attackerColor && board[row + dr][col +
                    dc
                ].type === 'knight') return true;
        }
        for (let dr = -1; dr <= 1; dr++)
            for (let dc = -1; dc <= 1; dc++)
                if (dr || dc) {
                    if (isWithin(row + dr, col + dc) && board[row + dr][col + dc]?.color === attackerColor && board[row + dr][
                            col + dc
                        ].type === 'king') return true;
                }
        for (const [dr, dc] of [
                [-1, 0],
                [1, 0],
                [0, -1],
                [0, 1]
            ]) {
            let r = row + dr,
                c = col + dc;
            while (isWithin(r, c)) {
                if (board[r][c]) {
                    if (board[r][c].color === attackerColor && (board[r][c].type === 'rook' || board[r][c].type === 'queen'))
                        return true;
                    break;
                }
                r += dr;
                c += dc;
            }
        }
        for (const [dr, dc] of [
                [-1, -1],
                [-1, 1],
                [1, -1],
                [1, 1]
            ]) {
            let r = row + dr,
                c = col + dc;
            while (isWithin(r, c)) {
                if (board[r][c]) {
                    if (board[r][c].color === attackerColor && (board[r][c].type === 'bishop' || board[r][c].type ===
                            'queen')) return true;
                    break;
                }
                r += dr;
                c += dc;
            }
        }
        return false;
    }

    function isKingInCheck(state, color) {
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++) {
                if (state.board[r][c]?.type === 'king' && state.board[r][c].color === color)
                    return isSquareAttacked(state.board, r, c, color === 'white' ? 'black' : 'white');
            }
        return false;
    }

    function generatePseudoMoves(state) {
        const board = state.board,
            castling = state.castling,
            ep = state.enPassant,
            turn = state.turn;
        const opp = turn === 'white' ? 'black' : 'white',
            dir = turn === 'white' ? -1 : 1,
            startRow = turn === 'white' ? 6 : 1,
            promoRow = turn === 'white' ? 0 : 7;
        const moves = [];
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++) {
                const piece = board[r][c];
                if (!piece || piece.color !== turn) continue;
                const add = (tr, tc, extra) => {
                    if (!isWithin(tr, tc)) return;
                    const target = board[tr][tc];
                    if (target && target.color === turn) return;
                    const capture = target && target.color === opp ? { type: target.type, color: target.color } : null;
                    if (piece.type === 'pawn' && tr === promoRow) {
                        for (const p of ['queen', 'rook', 'bishop', 'knight']) moves.push({
                            from: [r, c],
                            to: [tr, tc],
                            piece,
                            capture,
                            promotion: p,
                            enPassant: extra?.enPassant || false,
                            castlingRookFrom: extra?.castlingRookFrom || null,
                            castlingRookTo: extra?.castlingRookTo || null
                        });
                    } else moves.push({
                        from: [r, c],
                        to: [tr, tc],
                        piece,
                        capture,
                        promotion: null,
                        enPassant: extra?.enPassant || false,
                        castlingRookFrom: extra?.castlingRookFrom || null,
                        castlingRookTo: extra?.castlingRookTo || null
                    });
                };
                switch (piece.type) {
                    case 'pawn':
                        const one = r + dir;
                        if (isWithin(one, c) && !board[one][c]) {
                            add(one, c);
                            if (r === startRow) {
                                const two = r + 2 * dir;
                                if (isWithin(two, c) && !board[two][c]) moves.push({ from: [r, c], to: [two, c], piece,
                                    capture: null, promotion: null });
                            }
                        }
                        for (const dc of [-1, 1]) {
                            const nc = c + dc;
                            if (isWithin(one, nc) && board[one][nc]?.color === opp) add(one, nc);
                        }
                        if (ep && ep.row === one && Math.abs(c - ep.col) === 1 && board[r][ep.col]?.color === opp && board[r][
                                ep.col
                            ].type === 'pawn')
                            moves.push({ from: [r, c], to: [ep.row, ep.col], piece, capture: { type: 'pawn', color: opp },
                                promotion: null, enPassant: true });
                        break;
                    case 'knight':
                        for (const [dr, dc] of [
                                [-2, -1],
                                [-2, 1],
                                [-1, -2],
                                [-1, 2],
                                [1, -2],
                                [1, 2],
                                [2, -1],
                                [2, 1]
                            ]) add(r + dr, c + dc);
                        break;
                    case 'bishop':
                        for (const [dr, dc] of [
                                [-1, -1],
                                [-1, 1],
                                [1, -1],
                                [1, 1]
                            ]) { let nr = r + dr,
                                nc = c + dc; while (isWithin(nr, nc)) { if (board[nr][nc]) { if (board[nr][nc].color ===
                                        opp) add(nr, nc); break; } add(nr, nc);
                                nr += dr;
                                nc += dc; } }
                        break;
                    case 'rook':
                        for (const [dr, dc] of [
                                [-1, 0],
                                [1, 0],
                                [0, -1],
                                [0, 1]
                            ]) { let nr = r + dr,
                                nc = c + dc; while (isWithin(nr, nc)) { if (board[nr][nc]) { if (board[nr][nc].color ===
                                        opp) add(nr, nc); break; } add(nr, nc);
                                nr += dr;
                                nc += dc; } }
                        break;
                    case 'queen':
                        for (const [dr, dc] of [
                                [-1, -1],
                                [-1, 0],
                                [-1, 1],
                                [0, -1],
                                [0, 1],
                                [1, -1],
                                [1, 0],
                                [1, 1]
                            ]) { let nr = r + dr,
                                nc = c + dc; while (isWithin(nr, nc)) { if (board[nr][nc]) { if (board[nr][nc].color ===
                                        opp) add(nr, nc); break; } add(nr, nc);
                                nr += dr;
                                nc += dc; } }
                        break;
                    case 'king':
                        for (let dr = -1; dr <= 1; dr++)
                            for (let dc = -1; dc <= 1; dc++)
                                if (dr || dc) add(r + dr, c + dc);
                        if (!piece.hasMoved && !isKingInCheck(state, turn)) {
                            const row = r;
                            if (castling[turn === 'white' ? 'K' : 'k']) {
                                const rook = board[row][7];
                                if (rook?.type === 'rook' && !rook.hasMoved && !board[row][5] && !board[row][6] && !
                                    isSquareAttacked(board, row, 5, opp) && !isSquareAttacked(board, row, 6, opp))
                                    moves.push({ from: [r, c], to: [row, 6], piece, capture: null, promotion: null,
                                        castlingRookFrom: [row, 7], castlingRookTo: [row, 5] });
                            }
                            if (castling[turn === 'white' ? 'Q' : 'q']) {
                                const rook = board[row][0];
                                if (rook?.type === 'rook' && !rook.hasMoved && !board[row][1] && !board[row][2] && !board[row][
                                        3
                                    ] && !isSquareAttacked(board, row, 2, opp) && !isSquareAttacked(board, row, 3, opp))
                                    moves.push({ from: [r, c], to: [row, 2], piece, capture: null, promotion: null,
                                        castlingRookFrom: [row, 0], castlingRookTo: [row, 3] });
                            }
                        }
                        break;
                }
            }
        return moves;
    }

    function makeMove(state, move) {
        const ns = cloneState(state);
        const board = ns.board,
            castling = ns.castling;
        const [fr, fc] = move.from,
            [tr, tc] = move.to;
        const piece = board[fr][fc];
        const captured = move.capture ? (move.enPassant ? board[state.turn === 'white' ? tr + 1 : tr - 1][tc] : board[tr][
            tc
        ]) : null;

        board[fr][fc] = null;
        if (move.capture) {
            if (move.enPassant) board[state.turn === 'white' ? tr + 1 : tr - 1][tc] = null;
            else board[tr][tc] = null;
        }
        board[tr][tc] = { type: move.promotion || piece.type, color: piece.color, hasMoved: true };

        if (piece.type === 'king') {
            if (piece.color === 'white') { castling.K = false;
                castling.Q = false; } else { castling.k = false;
                castling.q = false; }
        }
        if (piece.type === 'rook') {
            if (fr === 7 && fc === 0) castling.Q = false;
            if (fr === 7 && fc === 7) castling.K = false;
            if (fr === 0 && fc === 0) castling.q = false;
            if (fr === 0 && fc === 7) castling.k = false;
        }
        if (captured && captured.type === 'rook') {
            if (tr === 7 && tc === 0) castling.Q = false;
            if (tr === 7 && tc === 7) castling.K = false;
            if (tr === 0 && tc === 0) castling.q = false;
            if (tr === 0 && tc === 7) castling.k = false;
        }

        if (move.castlingRookFrom) {
            board[move.castlingRookTo[0]][move.castlingRookTo[1]] = board[move.castlingRookFrom[0]][move.castlingRookFrom[
                1]];
            board[move.castlingRookFrom[0]][move.castlingRookFrom[1]] = null;
            board[move.castlingRookTo[0]][move.castlingRookTo[1]].hasMoved = true;
        }

        if (piece.type === 'pawn' && Math.abs(tr - fr) === 2) ns.enPassant = { row: (fr + tr) / 2, col: fc };
        else ns.enPassant = null;

        if (piece.type === 'pawn' || move.capture) ns.halfMoveClock = 0;
        else ns.halfMoveClock = (state.halfMoveClock || 0) + 1;

        ns.fullMove = state.fullMove + (state.turn === 'black' ? 1 : 0);
        ns.turn = state.turn === 'white' ? 'black' : 'white';
        return ns;
    }

    function getLegalMoves(state) {
        return generatePseudoMoves(state).filter(m => !isKingInCheck(makeMove(state, m), state.turn));
    }

    // ========== SEE والمهاجمين ==========
    function pieceAttacksSquare(board, r, c, tr, tc, piece = null) {
        if (!piece) piece = board[r][c];
        if (!piece) return false;
        const dr = Math.abs(r - tr),
            dc = Math.abs(c - tc);
        switch (piece.type) {
            case 'pawn': {
                const dir = piece.color === 'white' ? -1 : 1;
                return (r + dir === tr) && Math.abs(c - tc) === 1;
            }
            case 'knight':
                return (dr === 2 && dc === 1) || (dr === 1 && dc === 2);
            case 'king':
                return dr <= 1 && dc <= 1 && (dr + dc > 0);
            case 'bishop':
                return dr === dc && dr !== 0 && isPathClear(board, r, c, tr, tc);
            case 'rook':
                return (dr === 0 || dc === 0) && (dr + dc !== 0) && isPathClear(board, r, c, tr, tc);
            case 'queen':
                return (dr === dc || dr === 0 || dc === 0) && (dr + dc !== 0) && isPathClear(board, r, c, tr, tc);
            default:
                return false;
        }
    }

    function isPathClear(board, r1, c1, r2, c2) {
        const dr = r2 > r1 ? 1 : (r2 < r1 ? -1 : 0);
        const dc = c2 > c1 ? 1 : (c2 < c1 ? -1 : 0);
        let r = r1 + dr,
            c = c1 + dc;
        while (r !== r2 || c !== c2) {
            if (board[r][c]) return false;
            r += dr;
            c += dc;
        }
        return true;
    }

    function see(move, state) {
        const [tr, tc] = move.to;
        let gain = move.capture ? pieceValues[move.capture.type] : 0;
        if (move.promotion) gain += pieceValues[move.promotion] - pieceValues.pawn;

        const board = state.board.map(row => row.map(cell => cell ? { type: cell.type, color: cell.color } : null));
        const turn = state.turn;
        const opp = turn === 'white' ? 'black' : 'white';

        const [fr, fc] = move.from;
        const movingPiece = board[fr][fc];
        board[tr][tc] = movingPiece;
        board[fr][fc] = null;
        if (move.promotion) board[tr][tc] = { type: move.promotion, color: turn };
        if (move.enPassant) {
            const capturedRow = turn === 'white' ? tr + 1 : tr - 1;
            board[capturedRow][tc] = null;
        }

        let side = opp;
        let movingPieceValue = move.promotion ? pieceValues[move.promotion] : pieceValues[movingPiece.type];
        let gainList = [gain];
        let depth = 0;

        while (true) {
            const attackers = [];
            for (let r = 0; r < 8; r++) {
                for (let c = 0; c < 8; c++) {
                    const piece = board[r][c];
                    if (piece && piece.color === side) {
                        if (pieceAttacksSquare(board, r, c, tr, tc, piece)) {
                            attackers.push({ type: piece.type, color: piece.color, fromRow: r, fromCol: c });
                        }
                    }
                }
            }
            if (attackers.length === 0) break;
            attackers.sort((a, b) => pieceValues[a.type] - pieceValues[b.type]);
            const cheapest = attackers[0];
            const attVal = pieceValues[cheapest.type];
            depth++;
            gainList[depth] = movingPieceValue - gainList[depth - 1];
            board[cheapest.fromRow][cheapest.fromCol] = null;
            board[tr][tc] = { type: cheapest.type, color: side };
            movingPieceValue = attVal;
            side = side === 'white' ? 'black' : 'white';
        }

        while (depth > 0) {
            gainList[depth - 1] = -Math.max(-gainList[depth - 1], gainList[depth]);
            depth--;
        }
        return gainList[0];
    }

    // ========== خوارزميات البحث ==========
    const INF = 999999,
        MAX_DEPTH = 24;
    let searchStartTime, searchStopped;
    let transTable = new Map();
    let killerMoves, historyTable, lastBestScore;
    const EXACT = 0,
        LOWER = 1,
        UPPER = 2;
    const MAX_QUIESCENCE_DEPTH = 8;
    const TT_MAX_SIZE = 500000;

    function ttStore(h, e) {
        const existing = transTable.get(h);
        if (existing && existing.depth >= e.depth) return;
        if (transTable.size >= TT_MAX_SIZE) {
            let oldestKey = transTable.keys().next().value;
            transTable.delete(oldestKey);
        }
        transTable.set(h, e);
    }

    const mvvLva = { pawn: 100, knight: 200, bishop: 300, rook: 400, queen: 500 };

    function scoreMove(move, ply, state, hashMove) {
        if (hashMove && move.from[0] === hashMove.from[0] && move.from[1] === hashMove.from[1] && move.to[0] === hashMove.to[
                0
            ] && move.to[1] === hashMove.to[1])
            return 1000000;
        if (move.capture) {
            const victimVal = mvvLva[move.capture.type] || 0;
            const attackerVal = mvvLva[move.piece.type] || 0;
            let sc = 10000 + (victimVal * 100 - attackerVal);
            const seeVal = see(move, state);
            if (seeVal < 0) sc = -1000 + seeVal;
            return sc;
        }
        if (move.promotion) return 9000 + pieceValues[move.promotion];
        if (killerMoves[ply][0] && move.from[0] === killerMoves[ply][0].from[0] && move.from[1] === killerMoves[ply][0].from[
                1
            ] && move.to[0] === killerMoves[ply][0].to[0] && move.to[1] === killerMoves[ply][0].to[1]) return 8500;
        if (killerMoves[ply][1] && move.from[0] === killerMoves[ply][1].from[0] && move.from[1] === killerMoves[ply][1].from[
                1
            ] && move.to[0] === killerMoves[ply][1].to[0] && move.to[1] === killerMoves[ply][1].to[1]) return 7500;
        return historyTable.get(move.from[0] + ',' + move.from[1] + '-' + move.to[0] + ',' + move.to[1]) || 0;
    }

    function fastMobility(board, color) {
        let count = 0;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++) {
                const piece = board[r][c];
                if (!piece || piece.color !== color) continue;
                switch (piece.type) {
                    case 'pawn':
                        if (color === 'white') { if (isWithin(r - 1, c)) count++; } else { if (isWithin(r + 1, c))
                            count++; }
                        break;
                    case 'knight':
                        for (const [dr, dc] of [
                                [-2, -1],
                                [-2, 1],
                                [-1, -2],
                                [-1, 2],
                                [1, -2],
                                [1, 2],
                                [2, -1],
                                [2, 1]
                            ])
                            if (isWithin(r + dr, c + dc)) count++;
                        break;
                    case 'bishop':
                        for (const [dr, dc] of [
                                [-1, -1],
                                [-1, 1],
                                [1, -1],
                                [1, 1]
                            ]) { let nr = r + dr,
                                nc = c + dc; while (isWithin(nr, nc)) { count++; if (board[nr][nc]) break;
                                nr += dr;
                                nc += dc; } }
                        break;
                    case 'rook':
                        for (const [dr, dc] of [
                                [-1, 0],
                                [1, 0],
                                [0, -1],
                                [0, 1]
                            ]) { let nr = r + dr,
                                nc = c + dc; while (isWithin(nr, nc)) { count++; if (board[nr][nc]) break;
                                nr += dr;
                                nc += dc; } }
                        break;
                    case 'queen':
                        for (const [dr, dc] of [
                                [-1, -1],
                                [-1, 0],
                                [-1, 1],
                                [0, -1],
                                [0, 1],
                                [1, -1],
                                [1, 0],
                                [1, 1]
                            ]) { let nr = r + dr,
                                nc = c + dc; while (isWithin(nr, nc)) { count++; if (board[nr][nc]) break;
                                nr += dr;
                                nc += dc; } }
                        break;
                    case 'king':
                        for (let dr = -1; dr <= 1; dr++)
                            for (let dc = -1; dc <= 1; dc++)
                                if ((dr || dc) && isWithin(r + dr, c + dc)) count++;
                        break;
                }
            }
        return count;
    }

    // -------- جداول PST المزدوجة --------
    const pstPawnMG = [0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 10, 10, 20, 30, 30, 20, 10, 10, 5, 5, 10,
        25, 25, 10, 5, 5, 0, 0, 0, 20, 20, 0, 0, 0, 5, -5, -10, 0, 0, -10, -5, 5, 5, 10, 10, -20, -20, 10, 10, 5, 0, 0, 0,
        0, 0, 0, 0, 0
    ];
    const pstPawnEG = [0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 60, 60, 60, 60, 30, 30, 40, 50, 50, 40, 30, 30, 10, 10, 20,
        35, 35, 20, 10, 10, 5, 5, 10, 25, 25, 10, 5, 5, 0, 0, 0, 20, 20, 0, 0, 0, 5, -5, -10, 0, 0, -10, -5, 5, 0, 0, 0,
        0, 0, 0, 0, 0
    ];
    const pstKnightMG = [-50, -40, -30, -30, -30, -30, -40, -50, -40, -20, 0, 0, 0, 0, -20, -40, -30, 0, 10, 15, 15, 10, 0,
        -30, -30, 5, 15, 20, 20, 15, 5, -30, -30, 0, 15, 20, 20, 15, 0, -30, -30, 5, 10, 15, 15, 10, 5, -30, -40, -20, 0,
        5, 5, 0, -20, -40, -50, -40, -30, -30, -30, -30, -40, -50
    ];
    const pstKnightEG = [-40, -30, -20, -20, -20, -20, -30, -40, -30, -10, 0, 5, 5, 0, -10, -30, -20, 0, 10, 15, 15, 10, 0,
        -20, -10, 5, 15, 20, 20, 15, 5, -10, -10, 0, 15, 20, 20, 15, 0, -10, -20, 5, 10, 15, 15, 10, 5, -20, -30, -10, 0,
        5, 5, 0, -10, -30, -40, -30, -20, -20, -20, -20, -30, -40
    ];
    const pstBishopMG = [-20, -10, -10, -10, -10, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 10, 10, 10, 10, 0, -10,
        -10, 5, 5, 10, 10, 5, 5, -10, -10, 0, 5, 10, 10, 5, 0, -10, -10, 10, 10, 10, 10, 10, 10, -10, -10, 5, 0, 0, 0, 0,
        5, -10, -20, -10, -10, -10, -10, -10, -10, -20
    ];
    const pstBishopEG = [-15, -10, -5, -5, -5, -5, -10, -15, -10, 0, 5, 5, 5, 5, 0, -10, -5, 5, 10, 10, 10, 10, 5, -5, -5,
        5, 10, 15, 15, 10, 5, -5, -5, 5, 10, 15, 15, 10, 5, -5, -5, 0, 10, 10, 10, 10, 0, -5, -10, 5, 5, 5, 5, 5, 5, -10,
        -15, -10, -5, -5, -5, -5, -10, -15
    ];
    const pstRookMG = [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 10, 10, 10, 10, 10, 5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0,
        0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0
    ];
    const pstRookEG = [0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    const pstQueenMG = [-20, -10, -10, -5, -5, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5, 5, 5, 5, 0, -10, -5, 0,
        5, 5, 5, 5, 0, -5, 0, 0, 5, 5, 5, 5, 0, -5, -10, 5, 5, 5, 5, 5, 0, -10, -10, 0, 5, 0, 0, 0, 0, -10, -20, -10, -10,
        -5, -5, -10, -10, -20
    ];
    const pstQueenEG = [-15, -5, -5, -3, -3, -5, -5, -15, -5, 0, 3, 5, 5, 3, 0, -5, -3, 3, 8, 10, 10, 8, 3, -3, -3, 5, 10,
        12, 12, 10, 5, -3, 0, 5, 10, 12, 12, 10, 5, 0, -5, 3, 8, 10, 10, 8, 3, -5, -5, 0, 3, 5, 5, 3, 0, -5, -15, -5, -5,
        -3, -3, -5, -5, -15
    ];
    const pstKingMG = [-30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50,
        -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -20, -30, -30, -40, -40, -30, -30, -20, -10, -20, -20,
        -20, -20, -20, -20, -10, 20, 20, 0, 0, 0, 0, 20, 20, 20, 30, 10, 0, 0, 10, 30, 20
    ];
    const pstKingEG = [-50, -40, -30, -20, -20, -30, -40, -50, -30, -20, -10, 0, 0, -10, -20, -30, -20, -10, 5, 15, 15, 5,
        -10, -20, -10, 0, 15, 25, 25, 15, 0, -10, -10, 0, 15, 25, 25, 15, 0, -10, -20, -10, 5, 15, 15, 5, -10, -20, -30,
        -20, -10, 0, 0, -10, -20, -30, -50, -40, -30, -20, -20, -30, -40, -50
    ];

    const pieceValues = { pawn: 100, knight: 325, bishop: 335, rook: 510, queen: 950, king: 20000 };

    function gamePhase(board) {
        let mat = 0;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]) {
                    const t = board[r][c].type;
                    if (t === 'knight' || t === 'bishop') mat += 1;
                    else if (t === 'rook') mat += 2;
                    else if (t === 'queen') mat += 4;
                }
        return Math.max(0, Math.min(1, (mat - 6) / 18));
    }

    function getPstValue(pt, color, r, c, phase) {
        const idx = r * 8 + c;
        let mg, eg;
        switch (pt) {
            case 'pawn':
                mg = pstPawnMG[idx];
                eg = pstPawnEG[idx];
                break;
            case 'knight':
                mg = pstKnightMG[idx];
                eg = pstKnightEG[idx];
                break;
            case 'bishop':
                mg = pstBishopMG[idx];
                eg = pstBishopEG[idx];
                break;
            case 'rook':
                mg = pstRookMG[idx];
                eg = pstRookEG[idx];
                break;
            case 'queen':
                mg = pstQueenMG[idx];
                eg = pstQueenEG[idx];
                break;
            case 'king':
                mg = pstKingMG[idx];
                eg = pstKingEG[idx];
                break;
            default:
                return 0;
        }
        if (color === 'black') {
            const revIdx = 63 - idx;
            switch (pt) {
                case 'pawn':
                    mg = pstPawnMG[revIdx];
                    eg = pstPawnEG[revIdx];
                    break;
                case 'knight':
                    mg = pstKnightMG[revIdx];
                    eg = pstKnightEG[revIdx];
                    break;
                case 'bishop':
                    mg = pstBishopMG[revIdx];
                    eg = pstBishopEG[revIdx];
                    break;
                case 'rook':
                    mg = pstRookMG[revIdx];
                    eg = pstRookEG[revIdx];
                    break;
                case 'queen':
                    mg = pstQueenMG[revIdx];
                    eg = pstQueenEG[revIdx];
                    break;
                case 'king':
                    mg = pstKingMG[revIdx];
                    eg = pstKingEG[revIdx];
                    break;
            }
        }
        return mg * phase + eg * (1 - phase);
    }

    function evaluate(state) {
        const phase = gamePhase(state.board);
        let b = state.board,
            score = 0;
        let pc = { white: { queen: 0, rook: 0, bishop: 0, knight: 0, pawn: 0 }, black: { queen: 0, rook: 0, bishop: 0,
                knight: 0, pawn: 0 } };
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (b[r][c]) {
                    let p = b[r][c],
                        val = pieceValues[p.type] + getPstValue(p.type, p.color, r, c, phase);
                    score += p.color === 'white' ? val : -val;
                    pc[p.color][p.type]++;
                }
        if (pc.white.bishop >= 2) score += 45 + (pc.white.bishop - 2) * 15;
        if (pc.black.bishop >= 2) score -= 45 + (pc.black.bishop - 2) * 15;
        score += evaluatePawnStructure(b, 'white') - evaluatePawnStructure(b, 'black');
        score += kingSafety(b, 'white') - kingSafety(b, 'black');
        score += (fastMobility(b, 'white') - fastMobility(b, 'black')) * 1;
        score += controlAndRookScore(b, 'white') - controlAndRookScore(b, 'black');
        score += knightOutpost(b, 'white') - knightOutpost(b, 'black');
        if (isEndgame(b)) {
            for (let r = 0; r < 8; r++)
                for (let c = 0; c < 8; c++) {
                    if (b[r][c]?.type === 'king') {
                        const centerDist = Math.max(Math.abs(3.5 - r), Math.abs(3.5 - c));
                        score += (b[r][c].color === 'white' ? -centerDist : centerDist) * 12;
                    }
                }
        }
        return state.turn === 'white' ? score : -score;
    }

    function evaluatePawnStructure(board, color) {
        let val = 0,
            pawns = [];
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]?.color === color && board[r][c].type === 'pawn') pawns.push({ r, c });
        let opp = color === 'white' ? 'black' : 'white';
        for (let p of pawns) {
            let col = p.c,
                row = p.r,
                dir = color === 'white' ? -1 : 1,
                isolated = true;
            for (let r2 = 0; r2 < 8; r2++) {
                if (col > 0 && board[r2][col - 1]?.color === color && board[r2][col - 1].type === 'pawn') isolated = false;
                if (col < 7 && board[r2][col + 1]?.color === color && board[r2][col + 1].type === 'pawn') isolated = false;
            }
            if (isolated) val -= 20;
            let doubled = false;
            for (let r2 = 0; r2 < 8; r2++)
                if (r2 !== row && board[r2][col]?.color === color && board[r2][col].type === 'pawn') doubled = true;
            if (doubled) val -= 18;
            let passed = true;
            for (let r3 = row + dir; isWithin(r3, col); r3 += dir) {
                if (board[r3][col]?.color === opp && board[r3][col].type === 'pawn') { passed = false; break; }
                if (col > 0 && board[r3][col - 1]?.color === opp && board[r3][col - 1].type === 'pawn') { passed = false;
                    break; }
                if (col < 7 && board[r3][col + 1]?.color === opp && board[r3][col + 1].type === 'pawn') { passed = false;
                    break; }
            }
            if (passed) {
                let rank = color === 'white' ? 8 - row : row + 1;
                val += 20 + rank * 5;
                if (col > 0 && board[row][col - 1]?.color === color && board[row][col - 1].type === 'pawn') val += 12;
                if (col < 7 && board[row][col + 1]?.color === color && board[row][col + 1].type === 'pawn') val += 12;
            }
            if (!passed && row >= (color === 'white' ? 4 : 3)) {
                let ahead = 0;
                for (let r3 = row + dir; isWithin(r3, col); r3 += dir)
                    if (board[r3][col]?.color === opp && board[r3][col].type === 'pawn') ahead++;
                if (ahead === 0 && !isolated) val += 8;
            }
            if (!passed && !isolated) {
                let backward = true,
                    rBehind = row - dir;
                if (isWithin(rBehind, col - 1) && board[rBehind][col - 1]?.color === color && board[rBehind][col - 1].type ===
                    'pawn') backward = false;
                if (isWithin(rBehind, col + 1) && board[rBehind][col + 1]?.color === color && board[rBehind][col + 1].type ===
                    'pawn') backward = false;
                if (backward) val -= 10;
            }
        }
        return val;
    }

    function kingSafety(board, color) {
        let pos = null;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]?.type === 'king' && board[r][c].color === color) pos = [r, c];
        if (!pos) return 0;
        let [row, col] = pos,
            safety = 0,
            dir = color === 'white' ? -1 : 1,
            pawnShield = 0;
        for (let dc = -1; dc <= 1; dc++) {
            let r2 = row + dir,
                c2 = col + dc;
            if (isWithin(r2, c2) && board[r2][c2]?.color === color && board[r2][c2].type === 'pawn') pawnShield++;
            let r3 = row + 2 * dir,
                c3 = col + dc;
            if (isWithin(r3, c3) && board[r3][c3]?.color === color && board[r3][c3].type === 'pawn') pawnShield += 0.5;
        }
        safety += pawnShield * 28;
        let opp = color === 'white' ? 'black' : 'white';
        for (let dc = -1; dc <= 1; dc++) {
            let file = col + dc;
            if (file < 0 || file > 7) continue;
            let friendly = false,
                enemy = false;
            for (let r = 0; r < 8; r++)
                if (board[r][file]?.type === 'pawn') {
                    if (board[r][file].color === color) friendly = true;
                    else enemy = true;
                }
            if (!friendly && enemy) safety -= 35;
            else if (!friendly && !enemy) safety -= 15;
        }
        let attackCount = 0;
        for (let dr = -2; dr <= 2; dr++)
            for (let dc = -2; dc <= 2; dc++) {
                let nr = row + dr,
                    nc = col + dc;
                if (isWithin(nr, nc) && board[nr][nc]?.color === opp && board[nr][nc].type !== 'king') attackCount++;
            }
        safety -= attackCount * 9;
        let closeAttack = 0;
        for (let dr = -1; dr <= 1; dr++)
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                let nr = row + dr,
                    nc = col + dc;
                if (isWithin(nr, nc) && board[nr][nc] && board[nr][nc].color === opp) {
                    if (board[nr][nc].type === 'queen') closeAttack += 40;
                    else if (board[nr][nc].type === 'rook') closeAttack += 25;
                    else if (board[nr][nc].type === 'bishop' || board[nr][nc].type === 'knight') closeAttack += 12;
                }
            }
        safety -= closeAttack;
        return safety;
    }

    function controlAndRookScore(board, color) {
        let score = 0;
        for (let [r, c] of [
                [3, 3],
                [3, 4],
                [4, 3],
                [4, 4]
            ])
            if (board[r][c]?.color === color) score += 10;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]?.color === color && board[r][c].type === 'rook') {
                    let open = true,
                        semi = true;
                    for (let r2 = 0; r2 < 8; r2++)
                        if (board[r2][c]?.type === 'pawn') { open = false; if (board[r2][c].color === color) semi =
                            false; }
                    if (open) score += 20;
                    else if (semi) score += 12;
                    if (r === (color === 'white' ? 1 : 6)) score += 30;
                }
        return score;
    }

    function knightOutpost(board, color) {
        let score = 0,
            opp = color === 'white' ? 'black' : 'white';
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]?.color === color && board[r][c].type === 'knight') {
                    let supported = false,
                        dir = color === 'white' ? -1 : 1;
                    if (isWithin(r + dir, c - 1) && board[r + dir][c - 1]?.color === color && board[r + dir][c - 1].type ===
                        'pawn') supported = true;
                    if (isWithin(r + dir, c + 1) && board[r + dir][c + 1]?.color === color && board[r + dir][c + 1].type ===
                        'pawn') supported = true;
                    if (!supported) continue;
                    let attacked = false;
                    if (opp === 'white') {
                        if (isWithin(r - 1, c - 1) && board[r - 1][c - 1]?.color === 'white' && board[r - 1][c - 1].type ===
                            'pawn') attacked = true;
                        if (isWithin(r - 1, c + 1) && board[r - 1][c + 1]?.color === 'white' && board[r - 1][c + 1].type ===
                            'pawn') attacked = true;
                    } else {
                        if (isWithin(r + 1, c - 1) && board[r + 1][c - 1]?.color === 'black' && board[r + 1][c - 1].type ===
                            'pawn') attacked = true;
                        if (isWithin(r + 1, c + 1) && board[r + 1][c + 1]?.color === 'black' && board[r + 1][c + 1].type ===
                            'pawn') attacked = true;
                    }
                    if (!attacked && supported) score += 25;
                }
        return score;
    }

    function isEndgame(board) {
        let queens = 0,
            rooks = 0,
            minors = 0;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]) {
                    if (board[r][c].type === 'queen') queens++;
                    else if (board[r][c].type === 'rook') rooks++;
                    else if (board[r][c].type === 'bishop' || board[r][c].type === 'knight') minors++;
                }
        return (queens === 0 && rooks <= 2 && minors <= 2);
    }

    function quiescence(state, alpha, beta, qDepth = 0) {
        if (searchStopped || qDepth >= MAX_QUIESCENCE_DEPTH) return evaluate(state);
        const hash = hashState(state);
        const tt = transTable.get(hash);
        if (tt && tt.depth >= 0) {
            if (tt.flag === EXACT) return tt.score;
            if (tt.flag === LOWER && tt.score > alpha) alpha = tt.score;
            if (tt.flag === UPPER && tt.score < beta) beta = tt.score;
            if (alpha >= beta) return tt.score;
        }
        const stand = evaluate(state);
        if (stand >= beta) { ttStore(hash, { score: beta, depth: 0, flag: LOWER }); return beta; }
        if (stand > alpha) alpha = stand;

        const inCheck = isKingInCheck(state, state.turn);
        const allMoves = generatePseudoMoves(state);
        const candidates = inCheck ? allMoves : allMoves.filter(m => m.capture || m.promotion);

        const scored = candidates.map(m => ({
                move: m,
                seeVal: m.capture ? see(m, state) : 0
            })).filter(item => inCheck || item.seeVal >= 0)
            .sort((a, b) => b.seeVal - a.seeVal);

        for (const { move } of scored) {
            if (!inCheck && !move.promotion && move.capture) {
                const gain = pieceValues[move.capture.type] + 200;
                if (stand + gain < alpha) continue;
            }
            const next = makeMove(state, move);
            if (isKingInCheck(next, state.turn)) continue;
            const score = -quiescence(next, -beta, -alpha, qDepth + 1);
            if (score >= beta) {
                ttStore(hash, { score: beta, depth: 0, flag: LOWER });
                return beta;
            }
            if (score > alpha) alpha = score;
        }
        ttStore(hash, { score: alpha, depth: 0, flag: EXACT });
        return alpha;
    }

    function alphaBeta(state, depth, alpha, beta, ply, nullOk, timeLimit) {
        if (searchStopped || performance.now() - searchStartTime > timeLimit) { searchStopped = true; return 0; }
        const hash = hashState(state),
            tt = transTable.get(hash);
        if (tt && tt.depth >= depth) {
            if (tt.flag === EXACT) return tt.score;
            if (tt.flag === LOWER && tt.score > alpha) alpha = tt.score;
            if (tt.flag === UPPER && tt.score < beta) beta = tt.score;
            if (alpha >= beta) return tt.score;
        }
        if (depth <= 0) return quiescence(state, alpha, beta);
        let moves = getLegalMoves(state);
        if (!moves.length) return isKingInCheck(state, state.turn) ? -INF + ply : 0;

        if (nullOk && !isKingInCheck(state, state.turn) && depth >= 3 && !isEndgame(state.board)) {
            const ns = cloneState(state);
            ns.turn = state.turn === 'white' ? 'black' : 'white';
            ns.enPassant = null;
            const R = 3 + Math.floor(depth / 4);
            if (-alphaBeta(ns, depth - 1 - R, -beta, -beta + 1, ply + 1, false, timeLimit) >= beta) return beta;
        }

        if (moves.length === 1) depth += 1;

        let hashMove = tt?.bestMove || null;
        if (!hashMove && depth >= 4) { alphaBeta(state, depth - 2, alpha, beta, ply + 1, false, timeLimit);
            hashMove = transTable.get(hashState(state))?.bestMove; }
        moves.forEach(m => m.score = scoreMove(m, ply, state, hashMove));
        moves.sort((a, b) => b.score - a.score);
        let best = null,
            origAlpha = alpha;
        for (let i = 0; i < moves.length; i++) {
            const move = moves[i],
                next = makeMove(state, move);
            const givesCheck = isKingInCheck(next, next.turn);
            let newDepth = depth - 1 + (givesCheck || (move.piece.type === 'pawn' && (move.to[0] === 0 || move.to[0] ===
                7)) ? 1 : 0);
            if (!move.capture && !move.promotion && !givesCheck && newDepth <= 3) {
                const futilityMargin = (isEndgame(state.board) ? 200 : 150) + 50 * depth;
                if (evaluate(state) + futilityMargin <= alpha) continue;
            }
            const LMR = !move.capture && !move.promotion && i >= 4 && depth >= 3 && !givesCheck;
            let score = LMR ? -alphaBeta(next, newDepth - 2, -alpha - 1, -alpha, ply + 1, true, timeLimit) : -alphaBeta(
                next, newDepth, -beta, -alpha, ply + 1, true, timeLimit);
            if (searchStopped) return 0;
            if (LMR && score > alpha && score < beta) score = -alphaBeta(next, newDepth, -beta, -alpha, ply + 1, true,
                timeLimit);
            if (score >= beta) {
                if (!move.capture && !move.promotion) { killerMoves[ply][1] = killerMoves[ply][0];
                    killerMoves[ply][0] = { from: [...move.from], to: [...move.to] }; }
                historyTable.set(move.from[0] + ',' + move.from[1] + '-' + move.to[0] + ',' + move.to[1], (historyTable.get(
                    move.from[0] + ',' + move.from[1] + '-' + move.to[0] + ',' + move.to[1]) || 0) + depth * depth);
                ttStore(hash, { score: beta, depth, flag: LOWER, bestMove: move });
                return beta;
            }
            if (score > alpha) { alpha = score;
                best = move; }
        }
        ttStore(hash, { score: alpha, depth, flag: alpha > origAlpha ? EXACT : UPPER, bestMove: best });
        return alpha;
    }

    function iterativeDeepening(state, timeLimit, maxDepth = MAX_DEPTH) {
        searchStartTime = performance.now();
        searchStopped = false;
        killerMoves = Array(maxDepth + 2).fill().map(() => [null, null]);
        historyTable = new Map();
        const moves = getLegalMoves(state);
        let bestMove = moves[0] || null,
            alpha = -INF,
            beta = INF,
            completedDepth = 0;
        for (let d = 1; d <= maxDepth; d++) {
            if (performance.now() - searchStartTime > timeLimit * 0.9) break;
            if (d >= 2 && bestMove) { alpha = lastBestScore - 25;
                beta = lastBestScore + 25; }
            let score = alphaBeta(state, d, alpha, beta, 0, true, timeLimit);
            if (searchStopped) break;
            if (score <= alpha || score >= beta) { alpha = -INF;
                beta = INF;
                score = alphaBeta(state, d, alpha, beta, 0, true, timeLimit); if (searchStopped) break; }
            lastBestScore = score;
            const entry = transTable.get(hashState(state));
            if (entry?.bestMove) bestMove = entry.bestMove;
            completedDepth = d;
            if (score > 9000 || score < -9000) break;
        }
        return { move: bestMove, score: lastBestScore, depth: completedDepth };
    }

    function isInsufficientMaterial(board) {
        const pieces = { white: [], black: [] },
            bishops = { white: [], black: [] };
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c]) {
                    const p = board[r][c];
                    pieces[p.color].push(p.type);
                    if (p.type === 'bishop') bishops[p.color].push((r + c) % 2);
                }
        const only = (color, types) => pieces[color].length > 0 && pieces[color].every(t => types.includes(t));
        if (pieces.white.length === 1 && pieces.black.length === 1) return true;
        if (only('white', ['king', 'knight']) && pieces.black.length === 1 && pieces.black[0] === 'king') return true;
        if (only('black', ['king', 'knight']) && pieces.white.length === 1 && pieces.white[0] === 'king') return true;
        if (only('white', ['king', 'bishop']) && pieces.black.length === 1 && pieces.black[0] === 'king') return true;
        if (only('black', ['king', 'bishop']) && pieces.white.length === 1 && pieces.white[0] === 'king') return true;
        if (only('white', ['king', 'bishop']) && only('black', ['king', 'bishop']) && bishops.white[0] === bishops.black[0])
            return true;
        return false;
    }

    const openingBook = new Map();
    (function buildBook() {
        const lines = [
            ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -', 'e2e4', 'e4'],
            ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -', 'd2d4', 'd4'],
            ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -', 'g1f3', 'Nf3'],
        ];
        lines.forEach(l => {
            if (!openingBook.has(l[0])) openingBook.set(l[0], []);
            openingBook.get(l[0]).push({ move: l[1], name: l[2] });
        });
    })();

    function getBookMove(state) {
        const fenKey = boardToFen(state).split(' ').slice(0, 4).join(' ');
        const entries = openingBook.get(fenKey);
        if (!entries) return null;
        const entry = entries[Math.floor(Math.random() * entries.length)];
        const fromCol = entry.move.charCodeAt(0) - 97,
            fromRow = 8 - parseInt(entry.move[1]);
        const toCol = entry.move.charCodeAt(2) - 97,
            toRow = 8 - parseInt(entry.move[3]);
        const moves = getLegalMoves(state);
        for (const m of moves)
            if (m.from[0] === fromRow && m.from[1] === fromCol && m.to[0] === toRow && m.to[1] === toCol) return { move: m,
                name: entry.name };
        return null;
    }

    function updateGameHistory(state) { const h = hashState(state);
        gameHistory.push(h);
        positionCount.set(h, (positionCount.get(h) || 0) + 1); }

    function isRepetitionDraw(state) { return positionCount.has(hashState(state)) && positionCount.get(hashState(state)) >=
        2; }

    function getDynamicStockfishTime(state) {
        const legalMoves = getLegalMoves(state).length;
        let pieceCount = 0;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (state.board[r][c]) pieceCount++;
        let baseTime = 2000;
        baseTime += legalMoves * 50;
        if (pieceCount > 20) baseTime += 300;
        if (pieceCount < 10) baseTime += 500;
        const levelFactor = currentDifficulty === 'easy' ? 1 : (currentDifficulty === 'hard' ? 2 : 1.5);
        return Math.min(baseTime * levelFactor, 30000);
    }

    function getAdaptiveTime(state) {
        let pieceCount = 0;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (state.board[r][c]) pieceCount++;
        const factor = 1 + (32 - pieceCount) * 0.03;
        return Math.floor(DIFFICULTY_TIMES[currentDifficulty] * factor);
    }

    function getBestMove(state) {
        if (isInsufficientMaterial(state.board)) return null;
        const bookResult = getBookMove(state);
        if (bookResult) { document.querySelector('.opening-name').textContent = '⚡ ' + bookResult.name; return bookResult
                .move; }
        const timeLimit = stockfish?.isReady ? SEARCH_TIME_PER_MOVE : 800;
        const res = iterativeDeepening(state, timeLimit);
        if (res.move) {
            lastComputerDepth = res.depth;
            const next = makeMove(state, res.move);
            if (isRepetitionDraw(next)) { const alt = getLegalMoves(state).find(m => !isRepetitionDraw(makeMove(state,
                    m))); if (alt) res.move = alt; }
        }
        return res.move;
    }

    function clearAllEffects() {
        document.getElementById('suggestion-arrows').innerHTML = '';
        document.querySelectorAll('.cell.player-move').forEach(c => c.classList.remove('player-move'));
    }

    function drawArrows(moves) {
        const svg = document.getElementById('suggestion-arrows');
        svg.innerHTML = '';
        const size = 66,
            offset = size / 2;
        const flipBoard = playerColor === 'black';
        for (const move of moves) {
            let fr = move.from[0],
                fc = move.from[1];
            let tr = move.to[0],
                tc = move.to[1];
            if (flipBoard) { fr = 7 - fr;
                fc = 7 - fc;
                tr = 7 - tr;
                tc = 7 - tc; }
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", fc * size + offset);
            line.setAttribute("y1", fr * size + offset);
            line.setAttribute("x2", tc * size + offset);
            line.setAttribute("y2", tr * size + offset);
            line.setAttribute("stroke", "#ffaa00");
            line.setAttribute("stroke-width", "6");
            line.setAttribute("marker-end", "url(#arrowhead)");
            line.setAttribute("filter", "url(#glow)");
            svg.appendChild(line);
        }
    }

    function highlightPlayerMove(fr, fc, tr, tc) {
        document.querySelectorAll('.cell.player-move').forEach(c => c.classList.remove('player-move'));
        const cells = document.querySelectorAll('#board .cell');
        const flipBoard = playerColor === 'black';
        let dfr = flipBoard ? 7 - fr : fr,
            dfc = flipBoard ? 7 - fc : fc;
        let dtr = flipBoard ? 7 - tr : tr,
            dtc = flipBoard ? 7 - tc : tc;
        const fromIdx = dfr * 8 + dfc,
            toIdx = dtr * 8 + dtc;
        if (cells[fromIdx]) cells[fromIdx].classList.add('player-move');
        if (cells[toIdx]) cells[toIdx].classList.add('player-move');
    }

    function getPieceShadowStyle(color, isPlayerWhite) {
        const hOffset = isPlayerWhite ? '2px' : '-2px';
        const vOffset = '4px',
            blur = '10px',
            spread = '0px';
        const shadowColor = 'rgba(0,0,0,0.5)';
        return `${hOffset} ${vOffset} ${blur} ${spread} ${shadowColor}`;
    }

    function render() {
        const boardDiv = document.getElementById('board');
        boardDiv.innerHTML = '';
        const flipBoard = playerColor === 'black';
        const files = 'abcdefgh';
        const coordsTop = document.getElementById('coords-top'),
            coordsBottom = document.getElementById('coords-bottom');
        const coordsLeft = document.getElementById('coords-left'),
            coordsRight = document.getElementById('coords-right');
        coordsTop.innerHTML = '';
        coordsBottom.innerHTML = '';
        coordsLeft.innerHTML = '';
        coordsRight.innerHTML = '';
        coordsTop.appendChild(document.createElement('div'));
        for (let c = 0; c < 8; c++) { const d = document.createElement('div');
            d.textContent = files[flipBoard ? 7 - c : c];
            coordsTop.appendChild(d); }
        coordsTop.appendChild(document.createElement('div'));
        for (let r = 0; r < 8; r++) { const d = document.createElement('div');
            d.textContent = flipBoard ? r + 1 : 8 - r;
            coordsLeft.appendChild(d);
            coordsRight.appendChild(d.cloneNode()); }
        coordsBottom.appendChild(document.createElement('div'));
        for (let c = 0; c < 8; c++) { const d = document.createElement('div');
            d.textContent = files[flipBoard ? 7 - c : c];
            coordsBottom.appendChild(d); }
        coordsBottom.appendChild(document.createElement('div'));

        const isPlayerWhite = playerColor === 'white';
        for (let dr = 0; dr < 8; dr++) {
            const r = flipBoard ? 7 - dr : dr;
            for (let c = 0; c < 8; c++) {
                const cell = document.createElement('div');
                cell.className = 'cell ' + ((r + c) % 2 === 0 ? 'light' : 'dark');
                if (selectedCell && selectedCell.row === r && selectedCell.col === c) cell.className += ' selected';
                const lm = legalMovesMap.find(m => m.row === r && m.col === c);
                if (lm) { cell.className += ' legal'; if (lm.capture) cell.className += ' capture'; }
                if (lastComputerMoveHighlight && ((r === lastComputerMoveHighlight.fromRow && c ===
                        lastComputerMoveHighlight.fromCol) || (r === lastComputerMoveHighlight.toRow && c ===
                        lastComputerMoveHighlight.toCol))) {
                    cell.className += ' computer-move';
                }
                const piece = gameState.board[r][c];
                if (piece) {
                    const span = document.createElement('span');
                    span.className = 'piece ' + (piece.color === 'white' ? 'w' : 'b');
                    span.textContent = pieceDisplay[piece.type];
                    span.style.boxShadow = getPieceShadowStyle(piece.color, isPlayerWhite);
                    cell.appendChild(span);
                }
                (function (ir, ic) { cell.addEventListener('click', () => cellClicked(ir, ic)); })(r, c);
                boardDiv.appendChild(cell);
            }
        }
    }

    function cellClicked(r, c) {
        if (gameOver || gameState.turn !== playerColor) return;
        if (selectedCell && selectedCell.row === r && selectedCell.col === c) { selectedCell = null;
            legalMovesMap = [];
            render(); return; }
        if (selectedCell) {
            const move = legalMovesMap.find(m => m.row === r && m.col === c);
            if (move) { executePlayerMove(move); return; }
            const piece = gameState.board[r][c];
            if (piece && piece.color === playerColor) setSelected(r, c);
            else { selectedCell = null;
                legalMovesMap = [];
                render(); }
        } else {
            const piece = gameState.board[r][c];
            if (piece && piece.color === playerColor) setSelected(r, c);
        }
    }

    function setSelected(r, c) {
        selectedCell = { row: r, col: c };
        legalMovesMap = getLegalMoves(gameState).filter(m => m.from[0] === r && m.from[1] === c).map(m => ({
            row: m.to[0],
            col: m.to[1],
            capture: !!(m.capture || m.enPassant),
            promotion: m.promotion,
            fullMove: m
        }));
        render();
    }

    function executePlayerMove(disp) {
        lastComputerMoveHighlight = null;
        const move = disp.fullMove;
        clearAllEffects();
        const promoRow = playerColor === 'white' ? 0 : 7;
        if (move.piece.type === 'pawn' && move.to[0] === promoRow) {
            requestPromotion().then(p => {
                const nm = { ...move, promotion: p };
                gameState = makeMove(gameState, nm);
                recordMoveSafe(nm);
                updateGameHistory(gameState);
                selectedCell = null;
                legalMovesMap = [];
                render();
                highlightPlayerMove(move.from[0], move.from[1], move.to[0], move.to[1]);
                pushSnapshot();
                if (!checkGameOver()) { gameState.turn = playerColor === 'white' ? 'black' : 'white';
                    setTimeout(computerMove, 60); }
            });
        } else {
            gameState = makeMove(gameState, move);
            recordMoveSafe(move);
            updateGameHistory(gameState);
            selectedCell = null;
            legalMovesMap = [];
            render();
            highlightPlayerMove(move.from[0], move.from[1], move.to[0], move.to[1]);
            pushSnapshot();
            if (!checkGameOver()) { gameState.turn = playerColor === 'white' ? 'black' : 'white';
                setTimeout(computerMove, 60); }
        }
    }

    function executePlayerMoveDirect(move) {
        lastComputerMoveHighlight = null;
        clearAllEffects();
        const promoRow = playerColor === 'white' ? 0 : 7;
        if (move.piece.type === 'pawn' && move.to[0] === promoRow) {
            requestPromotion().then(p => {
                const nm = { ...move, promotion: p };
                gameState = makeMove(gameState, nm);
                recordMoveSafe(nm);
                updateGameHistory(gameState);
                selectedCell = null;
                legalMovesMap = [];
                render();
                highlightPlayerMove(move.from[0], move.from[1], move.to[0], move.to[1]);
                pushSnapshot();
                if (!checkGameOver()) { gameState.turn = playerColor === 'white' ? 'black' : 'white';
                    setTimeout(computerMove, 60); }
            });
        } else {
            gameState = makeMove(gameState, move);
            recordMoveSafe(move);
            updateGameHistory(gameState);
            selectedCell = null;
            legalMovesMap = [];
            render();
            highlightPlayerMove(move.from[0], move.from[1], move.to[0], move.to[1]);
            pushSnapshot();
            if (!checkGameOver()) { gameState.turn = playerColor === 'white' ? 'black' : 'white';
                setTimeout(computerMove, 60); }
        }
    }

    function requestPromotion() {
        return new Promise(resolve => {
            promotionResolve = resolve;
            document.getElementById('promo-overlay').style.display = 'flex';
        });
    }
    document.getElementById('promo-overlay').addEventListener('click', function (e) {
        if (e.target.dataset.p && promotionResolve) {
            promotionResolve(e.target.dataset.p);
            promotionResolve = null;
            this.style.display = 'none';
        }
    });

    function checkGameOver() {
        const moves = getLegalMoves(gameState);
        if (!moves.length) {
            gameOver = true;
            document.getElementById('status').textContent = isKingInCheck(gameState, gameState.turn) ? (gameState.turn ===
                playerColor ? 'كش ملك! خسرت!' : 'كش ملك! فزت!') : 'تعادل (ردب)!';
            return true;
        }
        if (gameState.halfMoveClock >= 100) { gameOver = true;
            document.getElementById('status').textContent = 'تعادل (قاعدة 50 نقلة)'; return true; }
        if (isRepetitionDraw(gameState)) { gameOver = true;
            document.getElementById('status').textContent = 'تعادل (تكرار)'; return true; }
        if (isInsufficientMaterial(gameState.board)) { gameOver = true;
            document.getElementById('status').textContent = 'تعادل (نقص مادة)'; return true; }
        return false;
    }

    function undoMove() {
        if (historyStack.length < 3) return;
        gameOver = false;
        redoStack.push({ human: historyStack.pop(), computer: historyStack.pop() });
        restoreFromSnapshot(historyStack[historyStack.length - 1]);
        clearAllEffects();
        document.getElementById('status').innerHTML = (playerColor === 'white' ? 'دورك (أبيض)' : 'دورك (أسود)') +
            ' <span class="opening-name"></span>';
        displaySuggestions();
    }

    function redoMove() {
        if (!redoStack.length) return;
        const pair = redoStack.pop();
        historyStack.push(pair.human, pair.computer);
        restoreFromSnapshot(pair.computer);
        clearAllEffects();
        document.getElementById('status').innerHTML = (playerColor === 'white' ? 'دورك (أبيض)' : 'دورك (أسود)') +
            ' <span class="opening-name"></span>';
        displaySuggestions();
    }

    function startGame(asWhite) {
        playerColor = asWhite ? 'white' : 'black';
        gameState = fenToBoard(START_FEN);
        selectedCell = null;
        legalMovesMap = [];
        gameOver = false;
        gameHistory = [];
        positionCount.clear();
        moveHistoryStr = [];
        updateGameHistory(gameState);
        lastComputerMoveHighlight = null;
        historyStack = [];
        redoStack = [];
        lastComputerDepth = 0;
        pushSnapshot();
        clearAllEffects();
        transTable = new Map();
        document.getElementById('promo-overlay').style.display = 'none';
        updateOpeningDisplaySafe();
        render();
        if (asWhite) {
            gameState.turn = 'white';
            document.getElementById('status').innerHTML = 'دورك (أبيض) <span class="opening-name"></span>';
        } else {
            gameState.turn = 'white';
            document.getElementById('status').innerHTML = 'الحاسوب يفكر... <span class="opening-name"></span>';
            setTimeout(computerMove, 250);
        }
    }

    document.getElementById('startWhite').addEventListener('click', () => startGame(true));
    document.getElementById('startBlack').addEventListener('click', () => startGame(false));
    document.getElementById('bigStart').addEventListener('click', () => startGame(true));
    document.getElementById('reset').addEventListener('click', () => {
        playerColor = 'white';
        gameState = fenToBoard(START_FEN);
        selectedCell = null;
        legalMovesMap = [];
        gameOver = false;
        gameHistory = [];
        positionCount.clear();
        moveHistoryStr = [];
        updateGameHistory(gameState);
        lastComputerMoveHighlight = null;
        historyStack = [];
        redoStack = [];
        lastComputerDepth = 0;
        pushSnapshot();
        clearAllEffects();
        transTable = new Map();
        document.getElementById('status').innerHTML = 'اختر وضع اللعب <span class="opening-name"></span>';
        document.getElementById('suggestions-list').innerHTML =
            '<div style="color:#aaa;text-align:center;">اضغط 💡 لتحليل المحرك</div>';
        document.getElementById('computer-plan').style.display = 'none';
        updateOpeningDisplaySafe();
        render();
    });
    document.getElementById('undoBtn').addEventListener('click', undoMove);
    document.getElementById('redoBtn').addEventListener('click', redoMove);
    document.getElementById('suggestion-btn').addEventListener('click', displaySuggestions);

    document.getElementById('trapModeBtn').addEventListener('click', function () {
        trapModeActive = !trapModeActive;
        this.textContent = trapModeActive ? '🕸️ وضع الصياد: مفعّل' : '🕸️ وضع الصياد: متوقف';
        this.style.background = trapModeActive ? '#ff5500' : '';
        this.style.color = trapModeActive ? '#000' : '#ffaa00';
    });

    // ---------- Stockfish Interface ----------
    class StockfishEngine {
        constructor() {
            try {
                const blob = new Blob([STOCKFISH_JS_CODE], { type: 'application/javascript' });
                const url = URL.createObjectURL(blob);
                this.worker = new Worker(url);
                URL.revokeObjectURL(url);
            } catch(e) {
                document.getElementById('engine-status').textContent = '⚠️ لم يتم تحميل Stockfish.js (مضمن)';
                return;
            }
            this.worker.onmessage = (e) => this.handleMessage(e.data);
            this.worker.onerror = () => document.getElementById('engine-status').textContent = '❌ خطأ في المحرك.';
            this.isReady = false;
            this.pendingResolve = null;
            this.pvs = [];
            this.currentListener = null;
            this.send('uci');
            this.send('setoption name Threads value 1');
            this.send('setoption name Hash value 32');
            this.send('setoption name MultiPV value 1');
            this.send('isready');
        }
        send(cmd) { if (this.worker) this.worker.postMessage(cmd); }
        handleMessage(line) {
            if (line === 'readyok') { this.isReady = true;
                document.getElementById('engine-status').textContent = '✅ Stockfish جاهز (قوة قصوى)'; } 
            else if (line.startsWith('bestmove')) {
                if (this.pendingResolve) { this.pendingResolve(this.pvs);
                    this.pendingResolve = null;
                    this.pvs = []; }
            } else if (line.startsWith('info') && line.includes(' pv ')) {
                const sc = line.match(/score cp (-?\d+)/);
                const pv = line.match(/ pv (.+)/);
                if (sc && pv) {
                    const depth = parseInt(line.match(/depth (\d+)/)?.[1] || '0');
                    const moves = pv[1].trim().split(' ');
                    const best = moves[0];
                    const ex = this.pvs.find(p => p.bestMove === best);
                    if (ex) { if (depth >= ex.depth) { ex.depth = depth;
                            ex.score = parseInt(sc[1]);
                            ex.moves = moves; } } 
                    else this.pvs.push({ depth, score: parseInt(sc[1]), bestMove: best, moves });
                }
            }
        }
        analyze(fen, ms = 2500) {
            if (!this.worker) return Promise.resolve([]);
            this.pvs = [];
            this.send('ucinewgame');
            this.send(`position fen ${fen}`);
            this.send(`go movetime ${ms}`);
            return new Promise(res => {
                this.pendingResolve = res;
                setTimeout(() => { if (this.pendingResolve) { this.pendingResolve(this.pvs);
                        this.pendingResolve = null; } }, ms + 500);
            });
        }
        destroy() { if (this.worker) this.worker.terminate(); }
    }

    let stockfish = null;
    function initStockfish() { if (!stockfish) stockfish = new StockfishEngine(); }

    function uciToMove(uci, state) {
        const fc = uci.charCodeAt(0) - 97,
            fr = 8 - parseInt(uci[1]);
        const tc = uci.charCodeAt(2) - 97,
            tr = 8 - parseInt(uci[3]);
        const promoChar = uci[4];
        const promo = promoChar ? { q: 'queen', r: 'rook', b: 'bishop', n: 'knight' } [promoChar] : null;
        return getLegalMoves(state).find(m =>
            m.from[0] === fr && m.from[1] === fc && m.to[0] === tr && m.to[1] === tc &&
            ((!promo && !m.promotion) || (promo && m.promotion === promo))
        );
    }

    function processCandidates(candidates, doMove) {
        if (candidates.length === 0) { doMove(null); return; }
        const trapsScores = [];
        for (const cand of candidates) {
            const stateAfter = makeMove(gameState, cand.move);
            const bestOpp = iterativeDeepening(stateAfter, 250, 6);
            const bestOppScore = -bestOpp.score;
            const oppMoves = getLegalMoves(stateAfter);
            let worstPlausibleScore = -INF;
            for (const om of oppMoves.slice(0, 8)) {
                const afterOm = makeMove(stateAfter, om);
                const evalOm = evaluate(afterOm);
                if (evalOm > worstPlausibleScore && evalOm < bestOppScore + 150) worstPlausibleScore = evalOm;
            }
            if (worstPlausibleScore === -INF) worstPlausibleScore = bestOppScore;
            const trapScore = Math.max(0, worstPlausibleScore - bestOppScore);
            trapsScores.push({ move: cand.move, quality: cand.score, trapScore, finalScore: cand.score + trapScore * 0.3 });
        }
        trapsScores.sort((a, b) => b.finalScore - a.finalScore);
        doMove(trapsScores[0].move);
    }

    function computerMove() {
        if (gameOver) return;
        clearAllEffects();
        const fen = boardToFen(gameState);
        const useStockfish = stockfish && stockfish.worker && stockfish.isReady;
        const doMove = (move) => {
            if (!move) { gameOver = true;
                document.getElementById('status').textContent = 'تعادل'; return; }
            gameState = makeMove(gameState, move);
            recordMoveSafe(move);
            lastComputerMoveHighlight = { fromRow: move.from[0], fromCol: move.from[1], toRow: move.to[0], toCol: move.to[
                    1] };
            updateGameHistory(gameState);
            render();
            pushSnapshot();
            if (!checkGameOver()) {
                gameState.turn = playerColor;
                document.getElementById('status').innerHTML = (playerColor === 'white' ? 'دورك (أبيض)' : 'دورك (أسود)') +
                    ` (عمق الحاسوب: ${lastComputerDepth}) <span class="opening-name"></span>`;
                updateOpeningDisplaySafe();
            }
        };

        if (!trapModeActive) {
            if (useStockfish) {
                if (stockfish.currentListener) stockfish.worker.removeEventListener('message', stockfish.currentListener);
                const listener = (e) => {
                    if (e.data.startsWith('bestmove')) {
                        const best = e.data.split(' ')[1];
                        stockfish.worker.removeEventListener('message', listener);
                        stockfish.currentListener = null;
                        if (best && best !== '(none)') { lastComputerDepth = 'SF';
                            doMove(uciToMove(best, gameState)); } else doMove(null);
                    }
                };
                stockfish.currentListener = listener;
                stockfish.worker.addEventListener('message', listener);
                stockfish.send('ucinewgame');
                stockfish.send(`position fen ${fen}`);
                stockfish.send(`go movetime ${getDynamicStockfishTime(gameState)}`);
            } else {
                const move = getBestMove(gameState);
                doMove(move);
            }
        } else {
            const timeLimit = SEARCH_TIME_PER_MOVE * 1.5;
            if (useStockfish) {
                if (stockfish.currentListener) stockfish.worker.removeEventListener('message', stockfish.currentListener);
                const candidates = [];
                const listener = (e) => {
                    const line = e.data;
                    if (line.startsWith('bestmove')) {
                        stockfish.worker.removeEventListener('message', listener);
                        stockfish.currentListener = null;
                        processCandidates(candidates, doMove);
                    } else if (line.startsWith('info') && line.includes(' pv ')) {
                        const depth = parseInt(line.match(/depth (\d+)/)?.[1] || '0');
                        const scoreCp = line.match(/score cp (-?\d+)/);
                        const pvMatch = line.match(/ pv (.+)/);
                        if (scoreCp && pvMatch) {
                            const uci = pvMatch[1].trim().split(' ')[0];
                            const move = uciToMove(uci, gameState);
                            if (move) {
                                const ex = candidates.find(c => c.move.from[0] === move.from[0] && c.move.from[1] === move
                                    .from[1] && c.move.to[0] === move.to[0] && c.move.to[1] === move.to[1]);
                                if (!ex) candidates.push({ move, score: parseInt(scoreCp[1]), depth });
                                else if (depth > ex.depth) { ex.score = parseInt(scoreCp[1]);
                                    ex.depth = depth; }
                            }
                        }
                    }
                };
                stockfish.currentListener = listener;
                stockfish.worker.addEventListener('message', listener);
                stockfish.send('ucinewgame');
                stockfish.send(`position fen ${fen}`);
                stockfish.send('setoption name MultiPV value 15');
                stockfish.send(`go movetime ${timeLimit}`);
            } else {
                const moves = getLegalMoves(gameState);
                const scored = moves.map(m => {
                    const next = makeMove(gameState, m);
                    const res = iterativeDeepening(next, 300, 8);
                    return { move: m, score: -res.score };
                }).sort((a, b) => b.score - a.score);
                processCandidates(scored.slice(0, 12), doMove);
            }
        }
    }

    async function displaySuggestions() {
        if (gameOver || gameState.turn !== playerColor) return;
        if (suggestionLoading) return;
        const listDiv = document.getElementById('suggestions-list');
        document.getElementById('computer-plan').style.display = 'none';
        listDiv.innerHTML = '<div style="color:#ffcc00;text-align:center;">⏳ جاري التحليل...</div>';
        suggestionLoading = true;
        document.getElementById('suggestion-btn').disabled = true;
        clearAllEffects();
        try {
            if (stockfish?.worker && !stockfish.isReady) {
                let w = 0;
                while (!stockfish?.isReady && w < 10000) { await new Promise(r => setTimeout(r, 100));
                    w += 100; }
                if (!stockfish?.isReady) throw new Error('المحرك غير جاهز');
            }
            if (stockfish?.worker) {
                const fen = boardToFen(gameState);
                const res = await stockfish.analyze(fen, 2500);
                if (!res.length) throw new Error('لا توجد نتائج');
                res.sort((a, b) => b.score - a.score);
                const uniq = [];
                const seen = new Set();
                for (const r of res) { if (!seen.has(r.bestMove)) { seen.add(r.bestMove);
                        uniq.push(r); } if (uniq.length >= 3) break; }
                const movesToDraw = [];
                let html = '';
                for (const r of uniq) {
                    const uci = r.bestMove;
                    const fc = uci.charCodeAt(0) - 97,
                        fr = 8 - parseInt(uci[1]);
                    const tc = uci.charCodeAt(2) - 97,
                        tr = 8 - parseInt(uci[3]);
                    const promoChar = uci[4];
                    const promo = promoChar ? { q: 'queen', r: 'rook', b: 'bishop', n: 'knight' } [promoChar] : null;
                    const move = getLegalMoves(gameState).find(m =>
                        m.from[0] === fr && m.from[1] === fc && m.to[0] === tr && m.to[1] === tc &&
                        ((!promo && !m.promotion) || (promo && m.promotion === promo))
                    );
                    if (!move) continue;
                    movesToDraw.push(move);
                    const notation = moveToShortAlgebraic(move, gameState);
                    const evalPawn = (r.score / 100).toFixed(2);
                    const cls = evalPawn >= 0 ? 'positive' : 'negative';
                    html +=
                        `<div class="suggestion-entry" data-fr="${fr}" data-fc="${fc}" data-tr="${tr}" data-tc="${tc}" data-promo="${move.promotion||''}">
                                <span class="suggestion-move">${notation}</span>
                                <span class="suggestion-eval ${cls}">${evalPawn>0?'+':''}${evalPawn}</span>
                            </div>`;
                }
                listDiv.innerHTML = html || '<div style="color:#aaa;">لا توجد اقتراحات.</div>';
                drawArrows(movesToDraw);
                attachSuggestionEvents();
            } else {
                displayLocalSuggestions();
            }
        } catch (e) {
            console.warn(e);
            displayLocalSuggestions();
        } finally {
            suggestionLoading = false;
            document.getElementById('suggestion-btn').disabled = false;
        }
    }

    function displayLocalSuggestions() {
        const listDiv = document.getElementById('suggestions-list');
        document.getElementById('computer-plan').style.display = 'none';
        listDiv.innerHTML = '<div style="color:#ffcc00;text-align:center;">⏳ تحليل بالمحرك الداخلي...</div>';
        clearAllEffects();
        let index = 0;
        const moves = getLegalMoves(gameState).slice(0, 10);
        const results = [];

        function processNext() {
            if (index >= moves.length) {
                results.sort((a, b) => b.score - a.score);
                const top = results.slice(0, 3);
                const movesToDraw = top.map(s => s.move);
                let html = '';
                for (const s of top) {
                    const m = s.move;
                    const fromCol = 'abcdefgh' [m.from[1]],
                        fromRow = 8 - m.from[0];
                    const toCol = 'abcdefgh' [m.to[1]],
                        toRow = 8 - m.to[0];
                    const notation = fromCol + fromRow + toCol + toRow + (m.promotion ? '=' + m.promotion[0].toUpperCase() :
                        '');
                    const evalPawn = (s.score / 100).toFixed(2);
                    const cls = evalPawn >= 0 ? 'positive' : 'negative';
                    html +=
                        `<div class="suggestion-entry" data-fr="${m.from[0]}" data-fc="${m.from[1]}" data-tr="${m.to[0]}" data-tc="${m.to[1]}" data-promo="${m.promotion||''}">
                                <span class="suggestion-move">${notation}</span>
                                <span class="suggestion-eval ${cls}">${evalPawn>0?'+':''}${evalPawn}</span>
                            </div>`;
                }
                listDiv.innerHTML = html || '<div style="color:#aaa;">لا توجد اقتراحات.</div>';
                drawArrows(movesToDraw);
                attachSuggestionEvents();
                return;
            }
            const move = moves[index];
            const ns = makeMove(gameState, move);
            const res = iterativeDeepening(ns, 200, 6);
            results.push({ move, score: -res.score });
            index++;
            setTimeout(processNext, 10);
        }
        setTimeout(processNext, 10);
    }

    function attachSuggestionEvents() {
        document.querySelectorAll('.suggestion-entry').forEach(el => {
            el.addEventListener('click', function () {
                const fr = +this.dataset.fr,
                    fc = +this.dataset.fc,
                    tr = +this.dataset.tr,
                    tc = +this.dataset.tc;
                const promo = this.dataset.promo;
                const move = getLegalMoves(gameState).find(m =>
                    m.from[0] === fr && m.from[1] === fc && m.to[0] === tr && m.to[1] === tc &&
                    (!promo || m.promotion === promo)
                );
                if (move) {
                    clearAllEffects();
                    const promoRow = playerColor === 'white' ? 0 : 7;
                    if (move.piece.type === 'pawn' && move.to[0] === promoRow && !move.promotion) {
                        requestPromotion().then(p => executePlayerMoveDirect({ ...move, promotion: p }));
                    } else executePlayerMoveDirect(move);
                }
            });
        });
    }

    historyStack = [];
    redoStack = [];
    pushSnapshot();
    render();
    initStockfish();
})();
