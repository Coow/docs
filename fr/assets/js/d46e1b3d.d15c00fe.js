"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2956],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5608:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],p={id:"using-npm",title:"Using npm Dependencies",sidebar_label:"Node Dependencies"},s=void 0,c={unversionedId:"using-npm",id:"using-npm",title:"Using npm Dependencies",description:"As of NodeCG v0.9, per-bundle bower and npm dependencies are no longer automatically installed. It is up to the user to run whatever installation commands are necessary in each bundle.",source:"@site/docs/using-npm.md",sourceDirName:".",slug:"/using-npm",permalink:"/fr/docs/using-npm",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/using-npm.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1679664072,formattedLastUpdatedAt:"24 mars 2023",frontMatter:{id:"using-npm",title:"Using npm Dependencies",sidebar_label:"Node Dependencies"},sidebar:"mainSidebar",previous:{title:"Configuration",permalink:"/fr/docs/nodecg-configuration"},next:{title:"Bundle Configuration",permalink:"/fr/docs/bundle-configuration"}},l={},u=[],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"As of NodeCG v0.9, per-bundle ",(0,a.kt)("inlineCode",{parentName:"p"},"bower")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," dependencies are no longer automatically installed. It is up to the user to run whatever installation commands are necessary in each bundle.")),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," dependencies as you would in any other Node.js project. Extensions can then access these dependencies directly, via normal ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," statements:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bundles/my-bundle/package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-bundle",\n  ...\n  "dependencies": {\n    "some-dep": "^1.0.0"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bundles/my-bundle/extension.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const someDep = require('some-dep');\n\nmodule.exports = function(nodecg) {\n  // I can use someDep whenever I want!\n};\n")))}m.isMDXComponent=!0}}]);