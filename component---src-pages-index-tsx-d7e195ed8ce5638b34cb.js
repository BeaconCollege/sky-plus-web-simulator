(self.webpackChunksky_plus_epg_simulator=self.webpackChunksky_plus_epg_simulator||[]).push([[691],{5658:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(e)}r["%C2"]="�";for(var c=Object.keys(r),u=0;u<c.length;u++){var l=c[u];e=e.replace(new RegExp(l,"g"),r[l])}return e}(e)}}},3297:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],c=e[i];(o?-1!==t.indexOf(i):t(i,c,e))&&(r[i]=c)}return r}},2163:function(e,t,r){"use strict";var n=r(4176),o=r(4191),a=r(1309);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=r(4159),l=r(5658),s=r(187),f=r(3297),p=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(e,t){return t.encode?t.strict?u(e):encodeURIComponent(e):e}function v(e,t){return t.decode?l(e):e}function y(e){return Array.isArray(e)?e.sort():"object"==typeof e?y(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function g(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function b(e){var t=(e=g(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function x(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function k(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&v(r,e).includes(e.arrayFormatSeparator);r=a?v(r,e):r;var i=o||a?r.split(e.arrayFormatSeparator).map((function(t){return v(t,e)})):null===r?r:v(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return v(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=r?v(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var a,c=i(e.split("&"));try{for(c.s();!(a=c.n()).done;){var u=a.value;if(""!==u){var l=s(t.decode?u.replace(/\+/g," "):u,"="),f=o(l,2),p=f[0],m=f[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?m:v(m,t),r(v(p,t),m,n)}}}catch(w){c.e(w)}finally{c.f()}for(var g=0,b=Object.keys(n);g<b.length;g++){var k=b[g],h=n[k];if("object"==typeof h&&null!==h)for(var C=0,S=Object.keys(h);C<S.length;C++){var E=S[C];h[E]=x(h[E],t)}else n[k]=x(h,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=y(r):e[t]=r,e}),Object.create(null))}t.extract=b,t.parse=k,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(t,e),"[",o,"]"].join("")]:[[m(t,e),"[",m(o,e),"]=",m(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(t,e),"[]"].join("")]:[[m(t,e),"[]=",m(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(r,e),t,m(o,e)].join("")]:[[n,m(o,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[m(t,e)]:[[m(t,e),"=",m(n,e)].join("")])}}}}(t),o={},i=0,c=Object.keys(e);i<c.length;i++){var u=c[i];r(u)||(o[u]=e[u])}var l=Object.keys(o);return!1!==t.sort&&l.sort(t.sort),l.map((function(r){var o=e[r];return void 0===o?"":null===o?m(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?m(r,t)+"[]":o.reduce(n(r),[]).join("&"):m(r,t)+"="+m(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=s(e,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:k(b(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:v(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=g(e.url).split("?")[0]||"",a=t.extract(e.url),i=t.parse(a,{sort:!1}),c=Object.assign(i,e.query),u=t.stringify(c,r);u&&(u="?".concat(u));var l=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(l="#".concat(r[p]?m(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(o).concat(u).concat(l)},t.pick=function(e,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=t.parseUrl(e,o),i=a.url,c=a.query,u=a.fragmentIdentifier;return t.stringifyUrl({url:i,query:f(c,r),fragmentIdentifier:u},o)},t.exclude=function(e,r,n){var o=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,o,n)}},187:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},4159:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},4331:function(e,t,r){"use strict";function n(e,t){return Math.ceil(Math.random()*(t-e))+e}r.d(t,{M:function(){return n}})},6918:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n=r(6524),o=r(5936),a=r(1074),i=r(7399),c=r(1766),u=r(8978),l=r(6851),s=r(2476),f=r(293),p=r(9205),d=r(3373),m=r(2585),v=(0,i.Z)({root:{width:585,margin:"auto",padding:0,display:"flex",flexDirection:"column",gap:4,position:"relative",fontFamily:"Zurich",fontStretch:"expanded",fontWeight:700,letterSpacing:.4,'&[data-more="true"]::after, &[data-less="true"]::before':{content:'""',display:"block",position:"absolute",height:24,width:32,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundImage:"url("+p.Z+")",right:0,transformOrigin:"center"},'&[data-more="true"]::after':{bottom:0,transform:"translateY(100%)"},'&[data-less="true"]::before':{top:0,transform:"translateY(-100%) rotate(0.5turn)"}}});function y(e){if(e.length<=10)return[e];for(var t=(0,f.Z)(e),r=[];t.length>0;){var n=void 0;t.length<=10?(n=t,t=[]):n=t.splice(0,9),r.push(n)}return r}var g=(0,i.Z)({uppercase:{textTransform:"uppercase"},root:{cursor:"pointer",paddingLeft:6,height:32,fontSize:26,display:"flex",alignItems:"center",background:d.Z.main,color:d.Z.mainText,counterIncrement:"menu",letterSpacing:-.15,lineHeight:"32px",outline:"none","&::before":{width:72,alignSelf:"stretch",textAlign:"center",lineHeight:"32px",marginRight:8,background:d.Z.accent,color:d.Z.accentText,content:"counter(menu)",display:"inline-block"},"&:hover, &:focus-visible":{background:d.Z.mainHover,color:d.Z.mainTextHover,"&::before":{background:d.Z.accentHover,color:d.Z.accentTextHover}},"&:nth-child(10)::before":{content:'"0"'}}}),b=function(e){var t=e.customNumber,r=e.text,n=e.onClick,o=e.noForcedUpperCase,a=void 0!==o&&o,i=g();return c.default.createElement("li",{"data-number":t,onKeyDown:function(e){"Enter"===e.key&&e.target.click()},onClick:n,tabIndex:0,className:(0,m.Z)(i.root,!a&&i.uppercase)},r)},x=function(e){var t=e.onBack,r=e.listItems,o=e.noForcedUpperCase,i=void 0!==o&&o,l=v(),s=(0,c.useRef)(null),f=(0,c.useRef)(-1),p=(0,u.Zl)(n.X8),d=(0,c.useState)(0),m=d[0],g=d[1];f.current!==m&&(f.current=m,p((0,a.Z)("backUp",!!(t||m>0))));var x=(0,c.useMemo)((function(){return y(r)}),[r,y]),k=x[m];return(0,c.useEffect)((function(){if(s.current){var e=s.current.firstElementChild;e&&e.focus()}function r(e){m>0&&"backUp"===e.detail.control?(e.stopImmediatePropagation(),g(0)):0===m&&t&&(e.stopImmediatePropagation(),t(e))}return document.addEventListener("skyControlPressed",r),function(){document.removeEventListener("skyControlPressed",r)}}),[m,s]),c.default.createElement("ol",{"data-more":String(m<x.length-1),"data-less":String(m>0),onKeyDown:function(e){if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)){var t=e.target,r=e.currentTarget;if("ArrowUp"===e.key){var n=t.previousElementSibling,o=n;n||(o=r.lastElementChild),o.focus()}else if("ArrowDown"===e.key){var a=t.nextElementSibling,i=a;a||(i=r.firstElementChild),i.focus()}}},ref:s,className:l.root},k.map((function(e){return c.default.createElement(b,Object.assign({noForcedUpperCase:i,key:e.text},e))})),x.length-1!==m&&c.default.createElement(b,{text:"More...",onClick:function(){return g((function(e){return e+1}))}}))},k=r(3383),h=r(3213),C=r(4331),S=r(3262),E=r(1717),w=r(5444),A=r(2163);function I(e){var t={start:(0,E.zB)(e),genre:e};(0,E.zB)(e),(0,w.navigate)("/epg/channel-list/?"+A.stringify(t,{skipNull:!0}))}var j=[{text:"All Channels",onClick:function(){I()}},{text:"Entertainment",onClick:function(){I(S.a.Entertainment)}},{text:"Lifestyle & Culture",onClick:function(){I(S.a.LifestyleAndCulture)}},{text:"Movies",onClick:function(){I(S.a.Movies)}},{text:"Sports",onClick:function(){I(S.a.Sports)}},{text:"News",onClick:function(){I(S.a.News)}},{text:"Documentaries",onClick:function(){I(S.a.Documentaries)}},{text:"Kids",onClick:function(){I(S.a.Kids)}},{text:"Music",onClick:function(){I(S.a.Music)}},{text:"Radio",onClick:function(){I(S.a.Radio)}},{text:"Shopping",onClick:function(){I(S.a.Shopping)}},{text:"Religion",onClick:function(){I(S.a.Religion)}},{text:"International",onClick:function(){I(S.a.International)}},{text:"Gaming & Dating",onClick:function(){I(S.a.GamingAndDating)}},{text:"Specialist",onClick:function(){I(S.a.Specialist)}},{text:"Adult",onClick:function(){I(S.a.Adult)}}],O=[{text:"Movies by start time",onClick:function(){}},{text:"Movies A–Z",onClick:function(){}},{text:"New movies",onClick:function(){}},{text:"Sports & Events",onClick:function(){}},{text:"Previews",onClick:function(){}},{text:"Adult Pay–Per–Night",onClick:function(){}},{text:"Adult movies",onClick:function(){}}],N=[{text:"Using Sky+",onClick:function(){(0,w.navigate)("/services/using-sky-plus")}},{text:"Telephone numbers",onClick:function(){(0,w.navigate)("/services/telephone-numbers")}},{text:"Parental control",onClick:function(){}},{text:"System setup",onClick:function(){}},{text:"Sky+ Setup",onClick:function(){}},{text:"Anytime Setup",onClick:function(){}},{text:"Auto Standby",onClick:function(){}},{text:"Manual Recording",onClick:function(){}},{text:"Favourite Channels",onClick:function(){}},{text:"Other Channels",onClick:function(){}}],T=[{text:"Sky Active",onClick:function(){(0,w.navigate)("/interactive/service-unavailable",{state:{serviceName:"Sky Active"}})}},{text:"QVC",onClick:function(){(0,w.navigate)("/interactive/service-unavailable",{state:{serviceName:"QVC"}})}},{text:"PlayJam Games",onClick:function(){(0,w.navigate)("/interactive/service-unavailable",{state:{serviceName:"PlayJam Games"}})}},{text:"Teletext Holidays",onClick:function(){(0,w.navigate)("/interactive/service-unavailable",{state:{serviceName:"Teletext Holidays"}})}},{text:"Sky Customer Service",onClick:function(){(0,w.navigate)("/interactive/service-unavailable",{state:{serviceName:"Sky Customer Service"}})}},{text:"Sky Games",onClick:function(){(0,w.navigate)("/interactive/service-unavailable",{state:{serviceName:"Sky Games"}})}},{text:"Ladbrokes Betting & Games",onClick:function(){(0,w.navigate)("/interactive/service-unavailable",{state:{serviceName:"Ladbrokes Betting & Games"}})}},{text:"Directgov",onClick:function(){(0,w.navigate)("/interactive/coming-next",{state:{serviceName:"Directgov",serviceDescription:"Public services all in one place",nextUrl:"/interactive/services/directgov"}})}},{text:"Sky Bet, Vegas & Sky Poker",onClick:function(){(0,w.navigate)("/interactive/service-unavailable",{state:{serviceName:"Sky Bet, Vegas & Sky Poker"}})}},{text:"GoPlayTV Games",onClick:function(){(0,w.navigate)("/interactive/service-unavailable",{state:{serviceName:"GoPlayTV Games"}})}},{text:'YO–YO"',onClick:function(){(0,w.navigate)("/interactive/service-unavailable",{state:{serviceName:'YO–YO"'}})}}],F=(0,i.Z)({centeredErrorMessage:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100%"}}),Z=function(){var e=(0,u.sJ)(k.R),t=Date.now()-e.bootTime<3e4,r=(0,c.useState)(!1),n=r[0],o=r[1],a=F();return(0,c.useEffect)((function(){if(!n){var e=setTimeout((function(){o(!0)}),(0,C.M)(2e3,t?1e4:6e3));return function(){clearTimeout(e)}}})),n?c.default.createElement(x,{noForcedUpperCase:!0,key:"interactive",listItems:T}):c.default.createElement("div",{className:a.centeredErrorMessage},c.default.createElement(h.Z,{errorCode:null,wider:!0,horizontallyCentered:!0},c.default.createElement("br",null),"Searching for listings",c.default.createElement("br",null),"Please wait"))},M={red:"Anytime",green:"Planner",yellow:"Search A–Z",blue:"Favourites"},_=["GUIDE","BOX OFFICE","SERVICES","INTERACTIVE"],U=(0,i.Z)({root:{background:"url("+o.Z+")"},content:{marginTop:38},centeredErrorMessage:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100%"}});var R=function(){var e=U(),t=(0,u.sJ)(n.wh),r=(0,u.Zl)(n.wh),o=(0,u.Zl)(n.X8),i=function(e){switch(e){default:case"GUIDE":return j;case"BOX OFFICE":return O;case"SERVICES":return N}}(t.selectedTab),f=function(e){switch(e){case"GUIDE":return M;default:return null}}(t.selectedTab);var p=_.indexOf(t.selectedTab);return(0,c.useEffect)((function(){function e(e){var t=e.detail.control;if(["leftArrow","rightArrow"].includes(t)){var n=p;"leftArrow"===t?n-=1:n+=1,n<0?n=_.length-1:n>=_.length&&(n=0),r({selectedTab:_[n]})}}return o((0,a.Z)(["leftArrow","rightArrow"],!0)),document.addEventListener("skyControlPressed",e),function(){document.removeEventListener("skyControlPressed",e),o((0,a.Z)(["leftArrow","rightArrow"],!1))}}),[r,p]),c.default.createElement("div",{className:e.root},c.default.createElement(s.Z,{logoText:"guide"},c.default.createElement(s.a,null)),c.default.createElement("div",{className:e.content},"INTERACTIVE"!==t.selectedTab&&c.default.createElement(x,{listItems:i,key:t.selectedTab}),"INTERACTIVE"===t.selectedTab&&c.default.createElement(Z,null)),f&&c.default.createElement(l.Z,{buttonPressHandler:function(e){switch(e){case"red":alert("Anytime isn't implemented yet.");break;case"green":alert("Planner isn't implemented yet.");break;case"yellow":alert("Search A-Z isn't implemented yet.");break;case"blue":alert("Favourites isn't implemented yet.")}},buttonsText:f}))},P=r(3230),D=function(e){var t,r=e.location,o=(0,u.Zl)(n.wh);return null!=r&&null!==(t=r.state)&&void 0!==t&&t.selectedTab&&o((function(e){return(0,w.navigate)("/",{replace:!0,state:{}}),Object.assign({},e,{selectedTab:r.state.selectedTab})})),c.default.createElement(P.Z,null,c.default.createElement(R,null))}},6322:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},968:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},2771:function(e,t,r){var n=r(6322);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},4176:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},1840:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},799:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},3417:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},9439:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},4191:function(e,t,r){var n=r(968),o=r(799),a=r(4866),i=r(3417);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},1309:function(e,t,r){var n=r(2771),o=r(1840),a=r(4866),i=r(9439);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},4866:function(e,t,r){var n=r(6322);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d7e195ed8ce5638b34cb.js.map