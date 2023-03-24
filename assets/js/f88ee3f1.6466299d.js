"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8043],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},215:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={id:"replicant-schemas",title:"Replicant Validation",sidebar_label:"Replicant Validation"},c=void 0,s={unversionedId:"replicant-schemas",id:"replicant-schemas",title:"Replicant Validation",description:"As of 0.8.4, bundle authors may define an optional schema for the Replicants in their bundle.",source:"@site/docs/replicant-schemas.md",sourceDirName:".",slug:"/replicant-schemas",permalink:"/docs/replicant-schemas",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/replicant-schemas.md",tags:[],version:"current",lastUpdatedBy:"Alex Van Camp",lastUpdatedAt:1679664072,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"replicant-schemas",title:"Replicant Validation",sidebar_label:"Replicant Validation"},sidebar:"mainSidebar",previous:{title:"Sounds",permalink:"/docs/sounds"},next:{title:"Making Dashboard Dialogs",permalink:"/docs/making-dialogs"}},p={},d=[{value:"Example",id:"example",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As of 0.8.4, bundle authors may define an optional schema for the ",(0,o.kt)("a",{parentName:"p",href:"/docs/classes/replicant"},"Replicants")," in their bundle.\nIf present, NodeCG will validate every change made to the Replicant against this schema.\nIf any change fails validation, either on the server or on the client, an error will be synchronously thrown."),(0,o.kt)("p",null,"All schemas are in the ",(0,o.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON Schema")," format. To add a schema to a Replicant,\ncreate a ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," file with the same name as your Replicant in your bundle's ",(0,o.kt)("inlineCode",{parentName:"p"},"schemas")," folder. For example,\nif ",(0,o.kt)("inlineCode",{parentName:"p"},"my-bundle")," has a Replicant called ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),", the schema would be located at ",(0,o.kt)("inlineCode",{parentName:"p"},"nodecg/bundles/my-bundle/schemas/foo.json"),".\nNodeCG will automatically see and load this schema on startup. Changes to the schema require restarting NodeCG."),(0,o.kt)("p",null,"If a Replicant's schema has defaults defined, NodeCG will use those defaults to automatically build a ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultValue"),"\nfor the Replicant. This auto-generated ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultValue")," is overridden by any ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultValue")," that is provided during Replicant\ndeclaration."),(0,o.kt)("p",null,"If for any reason a Replicant's persisted value becomes invalid, NodeCG will discard this value on startup."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nodecg/bundles/my-bundle/schemas/foo.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-04/schema#",\n  "type": "object",\n  "additionalProperties": false,\n  "properties": {\n    "bar": {\n      "type": "string",\n      "description": "The value of bar, which is a String.",\n      "default": "hello world"\n    },\n    "baz": {\n      "type": "number",\n      "description": "The value of baz, which is a Number.",\n      "default": 0\n    }\n  },\n  "required": ["bar", "baz"]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nodecg/bundles/my-bundle/extension.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = function (nodecg) {\n  // We don\'t need to specify a `defaultValue` here, it will be automatically generated from the defaults\n  // in the schema.\n  const foo = nodecg.Replicant(\'foo\');\n\n  /* You can override this by specifying your own `defaultValue` when declaring the Replicant.\n  const foo = nodecg.Replicant(\'foo\', {\n    defaultValue: {\n      bar: "hi",\n      baz: 5\n    }\n  }); */\n\n  console.log(foo.value.bar); //=> "hello world"\n  console.log(foo.value.baz); //=> 0\n\n  foo.value.bar = "greetings planet"; // Valid change, no error will be thrown.\n  foo.value.baz = "this should be a number!"; // Invalid change, an error will be thrown.\n};\n')))}m.isMDXComponent=!0}}]);