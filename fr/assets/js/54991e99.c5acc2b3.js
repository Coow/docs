"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7908],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),s=["components"],i={id:"unlisten",title:"unlisten",sidebar_label:"unlisten"},o=void 0,u={unversionedId:"classes/unlisten",id:"classes/unlisten",title:"unlisten",description:"unlisten(messageName, *bundleName, handlerFunc) \u2192 \\{boolean\\}",source:"@site/docs/classes/unlisten.md",sourceDirName:"classes",slug:"/classes/unlisten",permalink:"/fr/docs/classes/unlisten",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/classes/unlisten.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1679664072,formattedLastUpdatedAt:"24 mars 2023",frontMatter:{id:"unlisten",title:"unlisten",sidebar_label:"unlisten"},sidebar:"mainSidebar",previous:{title:"listenFor",permalink:"/fr/docs/classes/listenFor"},next:{title:"log()",permalink:"/fr/docs/classes/log"}},p={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"unlisten(messageName, *bundleName, handlerFunc)")," ",(0,l.kt)("em",{parentName:"p"},"\u2192 ","{","boolean","}")),(0,l.kt)("p",null,"Removes a listener for a message."),(0,l.kt)("p",null,"Messages are namespaced by bundle. To remove a listener to a message in another bundle's namespace, provide it as the second argument."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"messageName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bundleName"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,l.kt)("td",{parentName:"tr",align:null},"CURR_BNDL"),(0,l.kt)("td",{parentName:"tr",align:null},"The bundle namespace to in which to listen for this message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"handlerFunc"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A reference to a handler function added as a listener to this message via ",(0,l.kt)("a",{parentName:"td",href:"/fr/docs/classes/listenFor"},"listenFor"),".")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"nodecg.unlisten('printMessage', someFunctionName);\n")),(0,l.kt)("p",null,"Removing a listener from a message in another bundle's namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"nodecg.unlisten('printMessage', 'another-bundle', someFunctionName);\n")))}d.isMDXComponent=!0}}]);