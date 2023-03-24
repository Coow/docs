"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5565],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6891:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"migrating-0.7-to-0.8",title:"Migrating from 0.7 to 0.8",sidebar_label:"0.7 \u2192 0.8"},s=void 0,p={unversionedId:"migrating/migrating-0.7-to-0.8",id:"migrating/migrating-0.7-to-0.8",title:"Migrating from 0.7 to 0.8",description:"Breaking Changes",source:"@site/docs/migrating/migrating-0.7-to-0.8.md",sourceDirName:"migrating",slug:"/migrating/migrating-0.7-to-0.8",permalink:"/ja/docs/migrating/migrating-0.7-to-0.8",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/migrating/migrating-0.7-to-0.8.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1679664072,formattedLastUpdatedAt:"2023\u5e743\u670824\u65e5",frontMatter:{id:"migrating-0.7-to-0.8",title:"Migrating from 0.7 to 0.8",sidebar_label:"0.7 \u2192 0.8"},sidebar:"mainSidebar",previous:{title:"p5.js",permalink:"/ja/docs/frameworks/using-p5js"},next:{title:"0.8 \u2192 0.9",permalink:"/ja/docs/migrating/migrating-0.8-to-0.9"}},u={},c=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Replicant Change Event",id:"replicant-change-event",level:3},{value:"Panel Routes",id:"panel-routes",level:3},{value:"Assets &amp; Asset Categories",id:"assets--asset-categories",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#breaking-changes"},"Breaking Changes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#replicant-change-event"},"Replicant Change Event")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#panel-routes"},"Panel Routes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#assets--asset-categories"},"Assets & Asset Categories"))))),(0,o.kt)("h3",{id:"replicant-change-event"},"Replicant Change Event"),(0,o.kt)("p",null,"Prior to NodeCG v0.8, the Replicant change handler had the following signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// NodeCG v0.7 and earlier\nmyRep.on('change', function (oldVal, newVal, changes) {});\n")),(0,o.kt)("p",null,"In v0.8, ",(0,o.kt)("inlineCode",{parentName:"p"},"newVal")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"oldVal")," have been swapped, as ",(0,o.kt)("inlineCode",{parentName:"p"},"newVal")," is frequently used whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"oldVal")," is less frequently used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// NodeCG v0.8 and later\nmyRep.on('change', function(newVal, oldVal, operations) {});\n")),(0,o.kt)("h3",{id:"panel-routes"},"Panel Routes"),(0,o.kt)("p",null,"Dashboard panels are now served from ",(0,o.kt)("inlineCode",{parentName:"p"},"/panel/:bundleName/:panelFile")," routes. Prior to v0.8, they were served from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/panel/:bundleName/:panelName")," route."),(0,o.kt)("p",null,"This means that for a panel with the following declaration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "test",\n  "title": "Test Panel",\n  "width": 2,\n  "file": "panel.html"\n}\n')),(0,o.kt)("p",null,"... the route to access this panel is now ",(0,o.kt)("inlineCode",{parentName:"p"},"/panel/test-bundle/panel.html")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"/panel/test-bundle/test"),"."),(0,o.kt)("p",null,"This also affects panels served from subfolders. Previously, the following panel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "test-dialog",\n  "title": "Test Dialog",\n  "width": 2,\n  "file": "dialogs/test-dialog.html"\n}\n')),(0,o.kt)("p",null,"... would have been served from ",(0,o.kt)("inlineCode",{parentName:"p"},"/panel/test-bundle/test-dialog"),". It is now served from ",(0,o.kt)("inlineCode",{parentName:"p"},"/panel/test-bundle/dialogs/test-dialog.html"),"."),(0,o.kt)("p",null,"If your panel or dialog is in a subfolder, you will need to update any relative links in your panel's HTML, CSS, and JS accordingly.\nFor example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"test-dialog")," were importing ",(0,o.kt)("a",{parentName:"p",href:"https://elements.polymer-project.org/elements/paper-button?view=demo:demo/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"<paper-button>")),",\nthe URL it uses would have to change:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Won\'t work anymore. --\x3e\n<link rel="import" href="components/paper-button/paper-button.html" />\n\n\x3c!-- Works with the new panel routes. --\x3e\n<link rel="import" href="../components/paper-button/paper-button.html" />\n')),(0,o.kt)("h3",{id:"assets--asset-categories"},"Assets & Asset Categories"),(0,o.kt)("p",null,'NodeCG v0.7.2 introduced the Uploads system. NodeCG v0.8 has renamed this system to "Assets", and introduces\nthe concept of categories. See the ',"[Assets tutorial]","tutorial assets for more information on how to configure Assets for your bundle."))}m.isMDXComponent=!0}}]);