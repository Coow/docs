"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1712],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8888:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"nodecg",title:"NodeCG",sidebar_label:"NodeCG"},s=void 0,d={unversionedId:"classes/nodecg",id:"classes/nodecg",title:"NodeCG",description:"new NodeCG(bundle, socket)",source:"@site/docs/classes/nodecg.md",sourceDirName:"classes",slug:"/classes/nodecg",permalink:"/ja/docs/classes/nodecg",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/classes/nodecg.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1679664072,formattedLastUpdatedAt:"2023\u5e743\u670824\u65e5",frontMatter:{id:"nodecg",title:"NodeCG",sidebar_label:"NodeCG"},sidebar:"mainSidebar",previous:{title:"1.x \u2192 2.x",permalink:"/ja/docs/migrating/migrating-1.x-to-2.x"},next:{title:"Replicant",permalink:"/ja/docs/classes/replicant"}},u={},c=[{value:"Members",id:"members",level:2},{value:"<em>(static)</em> declaredReplicants",id:"declared-replicants",level:3},{value:"bundleConfig",id:"bundle-config",level:3},{value:"<em>(readonly)</em> bundleGit",id:"bundle-git",level:3},{value:"Properties",id:"properties",level:4},{value:"bundleName",id:"bundle-name",level:3},{value:"bundleVersion",id:"bundle-version",level:3},{value:"extensions",id:"extensions",level:3},{value:"Logger <em>:Object</em>",id:"logger",level:3},{value:"Events",id:"events",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"new NodeCG(bundle, socket)")),(0,l.kt)("p",null,"Creates a new NodeCG API instance. It should never be necessary to use this constructor in a bundle, as NodeCG automatically injects a pre-made API instance."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bundle"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The bundle object to build an API instance from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"socket"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"The Socket.IO socket instance to communicate with.")))),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("h3",{id:"declared-replicants"},(0,l.kt)("em",{parentName:"h3"},"(static)")," declaredReplicants"),(0,l.kt)("p",null,"An object containing references to all Replicants that have been declared in this ",(0,l.kt)("inlineCode",{parentName:"p"},"window"),", sorted by bundle. E.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"NodeCG.declaredReplicants.myBundle.myRep")),(0,l.kt)("h3",{id:"bundle-config"},"bundleConfig"),(0,l.kt)("p",null,"An object containing the parsed content of cfg/","<","bundle-name>.json, the contents of which are read once when NodeCG starts up. Used to quickly access per-bundle configuration properties."),(0,l.kt)("h3",{id:"bundle-git"},(0,l.kt)("em",{parentName:"h3"},"(readonly)")," bundleGit"),(0,l.kt)("p",null,"Provides information about the current git status of this bundle, if found."),(0,l.kt)("h4",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribues"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branch"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"What branch this bundle is on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hash"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The full hash of the commit this bundle is on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shortHash"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The short hash of the commit this bundle is on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,l.kt)("td",{parentName:"tr",align:null},"The date of the commit this bundle is on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"<","optional>"),(0,l.kt)("td",{parentName:"tr",align:null},"The message of the commit this bundle is on.")))),(0,l.kt)("h3",{id:"bundle-name"},"bundleName"),(0,l.kt)("p",null,"The name of the bundle which this NodeCG API instance is for."),(0,l.kt)("h3",{id:"bundle-version"},"bundleVersion"),(0,l.kt)("p",null,"The version (from package.json) of the bundle which this NodeCG API instance is for."),(0,l.kt)("h3",{id:"extensions"},"extensions"),(0,l.kt)("admonition",{title:"Extension Only",type:"important"},(0,l.kt)("p",{parentName:"admonition"},"This can only be used in code which runs on the server.")),(0,l.kt)("p",null,"Object containing references to all other loaded extensions. To access another bundle's extension, it must be declared as a bundleDependency in your bundle's manifest."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// bundles/my-bundle/package.json\n{\n    "name": "my-bundle"\n    ...\n    "bundleDependencies": {\n        "other-bundle": "^1.0.0"\n    }\n}\n\n// bundles/my-bundle/extension.js\nmodule.exports = function (nodecg) {\n    const otherBundle = nodecg.extensions[\'other-bundle\'];\n    // Now I can use `otherBundle`!\n}\n')),(0,l.kt)("h3",{id:"logger"},"Logger ",(0,l.kt)("em",{parentName:"h3"},":Object")),(0,l.kt)("p",null,"Provides easy access to the Logger class. Useful in cases where you want to create your own custom logger."),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("admonition",{title:"Extension Only",type:"important"},(0,l.kt)("p",{parentName:"admonition"},"This can only be used in code which runs on the server.")),(0,l.kt)("p",null,"In your extension code, there are several events emitted on the ",(0,l.kt)("inlineCode",{parentName:"p"},"nodecg")," object that are available to listen to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"module.exports = function (nodecg) {\n    nodecg.on('extensionsLoaded', () => {\n        // all bundle extensions have finished loading\n        // this event is probably not that necessary because serverStarted is emitted shortly after\n    })\n\n    nodecg.on('serverStarted', () => {\n        // the web and socket.io servers have started and will accept connections\n    })\n\n    nodecg.on('serverStopping', () => {\n        // the server is shutting down and you can perform cleanup operations here\n    })\n\n    nodecg.on('login', (user) => {\n        // a user has logged in\n        // use Intellisense (autocomplete) to explore the other properties available on the `user` object\n        console.log(user.id, user.name);\n    });\n    \n    nodecg.on('logout', (user) => {\n        // a user has logged out\n        // use Intellisense (autocomplete) to explore the other properties available on the `user` object\n        console.log(user.id, user.name);\n    });\n}\n")))}m.isMDXComponent=!0}}]);