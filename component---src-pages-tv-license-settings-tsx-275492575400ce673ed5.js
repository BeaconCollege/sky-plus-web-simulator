(self.webpackChunksky_plus_epg_simulator=self.webpackChunksky_plus_epg_simulator||[]).push([[673],{3213:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a,o,r=n(6524),i=n(3373),l=n(1766);!function(e){e[e.NO_CARD_INSERTED=1]="NO_CARD_INSERTED",e[e.CARD_READ_ERROR=2]="CARD_READ_ERROR",e[e.CARD_CHECK_FAIL=3]="CARD_CHECK_FAIL",e[e.UNAUTHORISED_CARD=6]="UNAUTHORISED_CARD",e[e.UNPAIRED_CARD=7]="UNPAIRED_CARD",e[e.ENCRYPTION_KEY_FAILURE=8]="ENCRYPTION_KEY_FAILURE",e[e.UNAUTHORISED_CARD_2=9]="UNAUTHORISED_CARD_2",e[e.NO_SATELLITE_SIGNAL=28]="NO_SATELLITE_SIGNAL",e[e.NO_SATELLITE_SIGNAL_2=29]="NO_SATELLITE_SIGNAL_2"}(o||(o={}));var c=((a={})[o.NO_CARD_INSERTED]=l.default.createElement(l.default.Fragment,null,"Insert your Sky viewing card"),a[o.NO_SATELLITE_SIGNAL]=l.default.createElement(l.default.Fragment,null,"No Satellite Signal is being received.",l.default.createElement("br",null),"Please unplug your box from the mains, then plug it back in and wait 5 minutes before trying again.",l.default.createElement("br",null),"If the fault persists, contact customer services."),a[o.NO_SATELLITE_SIGNAL_2]=l.default.createElement(l.default.Fragment,null,"No Satellite Signal is being received.",l.default.createElement("br",null),"Please unplug your box from the mains, then plug it back in and wait 5 minutes before trying again.",l.default.createElement("br",null),"If the fault persists, contact customer services."),a),s=o,u=n(1074),d=n(7399),m=n(2585),f=n(8978),g=n(4181),E=(0,d.Z)({messageBox:{width:"80%",overflow:"hidden",maxHeight:"80%"},messageBoxWider:{width:"92%"},messageBoxHorizCenter:{margin:"auto"},messageBoxHeader:{background:i.Z.yellowMain,color:i.Z.main,textTransform:"uppercase",lineHeight:"29px",fontSize:24,textAlign:"center",position:"relative",fontFamily:"Zurich",fontStretch:"expanded",fontWeight:700,letterSpacing:.4},messageBoxErrorCode:{position:"absolute",right:4},messageBoxContent:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:4,paddingBottom:1,fontFamily:"ZurichBT",fontWeight:400,background:i.Z.mainLight,color:i.Z.mainText,fontSize:25,textAlign:"center",letterSpacing:.5,lineHeight:"32px",minHeight:136},messageBoxFooter:{color:i.Z.yellowText,paddingBottom:1}}),p=function(e){var t=e.title,n=void 0===t?"For your information":t,a=e.errorCode,o=void 0===a?s.NO_SATELLITE_SIGNAL:a,i=e.children,d=void 0===i?c[s.NO_SATELLITE_SIGNAL]:i,p=e.customControlData,h=void 0===p?{text:"BACK UP",control:"backUp"}:p,b=e.controlPrompt,_=void 0!==b&&b,v=e.controlPromptAction,S=void 0===v?"return":v,A=e.onControlPressed,w=void 0===A?function(){}:A,x=e.wider,C=void 0!==x&&x,T=e.horizontallyCentered,N=void 0!==T&&T,y=e.className,L=E(),I=(0,f.Zl)(r.X8);return _&&I((0,u.Z)("backUp",!0)),(0,l.useEffect)((function(){if(_){function e(e){e.detail.control===h.control&&(e.stopImmediatePropagation(),w())}return document.addEventListener("skyControlPressed",e),function(){document.removeEventListener("skyControlPressed",e),I((0,u.Z)("backUp",!1))}}})),l.default.createElement("section",{role:"alert",className:(0,m.Z)(L.messageBox,C&&L.messageBoxWider,N&&L.messageBoxHorizCenter,y)},l.default.createElement("header",{className:L.messageBoxHeader},n,l.default.createElement("span",{className:L.messageBoxErrorCode},null!=o&&String(o).padStart(2,"0"))),l.default.createElement("article",{className:L.messageBoxContent},d,_&&l.default.createElement("footer",{className:L.messageBoxFooter},"Press ",l.default.createElement(g.Z,null,h.text)," to ",S)))}},1733:function(e,t,n){"use strict";var a=n(3373),o=n(7399),r=n(1766),i=n(3213),l=(0,o.Z)({root:{background:a.Z.accent,position:"absolute",top:0,bottom:0,right:0,left:0,display:"flex",alignItems:"center",justifyContent:"center"},messageBox:{width:"80%",overflow:"hidden",maxHeight:"80%"},messageBoxHeader:{background:a.Z.yellowMain,color:a.Z.main,textTransform:"uppercase",lineHeight:"29px",fontSize:24,textAlign:"center",position:"relative"},messageBoxErrorCode:{position:"absolute",right:4},messageBoxContent:{padding:4,paddingBottom:0,fontFamily:"ZurichBT",background:a.Z.mainLight,color:a.Z.mainText,fontSize:25,textAlign:"center",letterSpacing:.5,lineHeight:"32px"}});t.Z=function(e){var t=Object.assign({},e),n=l();return r.default.createElement("div",{className:n.root},r.default.createElement(i.Z,t))}},1074:function(e,t,n){"use strict";function a(e,t){return Array.isArray(e)?function(n){var a=Object.assign({},n);return e.forEach((function(e){if(!Object.keys(a).includes(e))throw'Invalid control provided to `controlsShownStateSetter`: "'+e+'".';a[e]="boolean"!=typeof t?!a[e]:t})),a}:function(n){var a=Object.assign({},n);if(!Object.keys(a).includes(e))throw'Invalid control provided to `controlsShownStateSetter`: "'+e+'".';return a[e]="boolean"!=typeof t?!a[e]:t,a}}n.d(t,{Z:function(){return a}})},3230:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n.p+"static/sharing-image-db5dc5b9424e9194bebb470cf9c6e978.jpg",o=n(5444),r=n(1766),i=n(2013),l=function(e){var t=e.description,n=e.meta,l=e.title,c=(0,o.useStaticQuery)("63159454").site,s=t||c.siteMetadata.description,u=l?l+" | "+c.siteMetadata.title:c.siteMetadata.title;return r.default.createElement(r.default.Fragment,null,r.default.createElement(i.Title,null,u),r.default.createElement(i.Meta,{name:"description",content:s}),r.default.createElement(i.Meta,{name:"og:locale",content:"en_GB"}),r.default.createElement(i.Meta,{name:"og:title",content:u}),r.default.createElement(i.Meta,{name:"og:description",content:s}),r.default.createElement(i.Meta,{name:"og:type",content:"website"}),r.default.createElement(i.Meta,{name:"og:image",content:a}),r.default.createElement(i.Meta,{name:"twitter:card",content:"summary_large_image"}),r.default.createElement(i.Meta,{name:"twitter:title",content:u}),r.default.createElement(i.Meta,{name:"twitter:description",content:s}),r.default.createElement(i.Meta,{name:"twitter:creator",content:"@davwheat"}),r.default.createElement(i.Meta,{name:"twitter:site",content:"@davwheat"}),r.default.createElement(i.Meta,{name:"twitter:image",content:a}),r.default.createElement(i.Meta,{name:"twitter:image:alt",content:"Screenshot of the Sky+ Web EPG."}),r.default.createElement(i.Link,{rel:"preconnect",href:"https://awk.epgsky.com/"}),n&&n.map((function(e,t){return r.default.createElement(i.Meta,{key:e.name+"--"+t,name:e.name,content:e.content})})))},c=function(e){var t=e.title,n=e.description,a=e.children;return r.default.createElement(r.default.Fragment,null,r.default.createElement(l,{title:t,description:n}),a)}},1149:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(7988),o=n(1735),r=n(3373),i=n(3230),l=n(7399),c=n(1766),s=n(8978),u=n(1733),d=(0,l.Z)({buttonContainer:{display:"flex",padding:8,gap:8,marginBottom:2},button:{padding:4,fontFamily:"ZurichBT",fontWeight:"normal",fontSize:22,flexBasis:"50%",border:"none",appearance:"none",background:r.Z.yellowMain,color:r.Z.main,cursor:"pointer","&:disabled":{background:r.Z.mainFaded,color:r.Z.mainFadedText}},smallText:{fontSize:18,lineHeight:1.25,marginTop:6,marginBottom:6}}),m=function(e){var t=e.onSelectLicenseStatus,n=d(),a=(0,c.useState)(!1),r=a[0],l=a[1],m=(0,s.Zl)(o.D);function f(e){l(!0);var n={hasOptedOutOfTvLicenseContent:!e,hasTvLicense:e,savedAt:Date.now()};m(n),"function"==typeof t&&t(n)}return c.default.createElement(i.Z,null,c.default.createElement(u.Z,{errorCode:null},c.default.createElement("p",null,"We provide access to free-to-view broadcast TV streams which require a UK TV License."),c.default.createElement("p",{className:n.smallText},"You can still access this site without a TV license, but you will not be able to view the broadcast TV streams."," ",c.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.tvlicensing.co.uk/check-if-you-need-one"},"Learn more")),c.default.createElement("div",{className:n.buttonContainer},c.default.createElement("button",{disabled:r,className:n.button,onClick:function(){return f(!1)}},"I do not have a TV license"),c.default.createElement("button",{disabled:r,className:n.button,onClick:function(){return f(!0)}},"I have a TV license"))))},f=n(1074),g=n(5444),E=function(){function e(){window.__isLastPageOnSameDomain?window.history.back():(0,g.navigate)("/")}function t(t){"backUp"===t.detail.control&&e()}return(0,s.Zl)(a.X)((0,f.Z)("backUp",!0)),(0,c.useEffect)((function(){return document.addEventListener("skyControlPressed",t),function(){return window.removeEventListener("skyControlPressed",t)}})),c.default.createElement(m,{onSelectLicenseStatus:e})}}}]);
//# sourceMappingURL=component---src-pages-tv-license-settings-tsx-275492575400ce673ed5.js.map