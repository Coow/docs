"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6653],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={id:"security",title:"Security & Authentication",sidebar_label:"Security & Authentication"},s=void 0,u={unversionedId:"security",id:"security",title:"Security & Authentication",description:"Is NodeCG secure by default?",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/docs/security",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/security.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1679499146,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{id:"security",title:"Security & Authentication",sidebar_label:"Security & Authentication"},sidebar:"mainSidebar",previous:{title:"Mount folders as endpoints",permalink:"/docs/mounts"},next:{title:"Testing Graphics",permalink:"/docs/screenshot-testing"}},c={},d=[{value:"Is NodeCG secure by default?",id:"is-nodecg-secure-by-default",level:2},{value:"What levels of authorization does NodeCG have?",id:"what-levels-of-authorization-does-nodecg-have",level:2},{value:"How are users authorized?",id:"how-are-users-authorized",level:2},{value:"What do I do if one of my keys got leaked?",id:"what-do-i-do-if-one-of-my-keys-got-leaked",level:2},{value:"How do I enable login security?",id:"how-do-i-enable-login-security",level:2},{value:"Local Auth",id:"local-auth",level:3},{value:"Twitch Auth",id:"twitch-auth",level:3},{value:"Discord Auth",id:"discord-auth",level:3},{value:"By user",id:"by-user",level:4},{value:"By Server (Guild)",id:"by-server-guild",level:4},{value:"Steam Auth",id:"steam-auth",level:3},{value:"How do I enable HTTPS/SSL encryption?",id:"how-do-i-enable-httpsssl-encryption",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"is-nodecg-secure-by-default"},"Is NodeCG secure by default?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No.")," By default, NodeCG has no authorization or authentication of any kind. To enable basic authentication, see the ",(0,r.kt)("a",{parentName:"p",href:"#how-do-i-enable-login-security"},"How do I enable login security?")," section."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do not")," put an unsecured NodeCG instance on the internet or a public network. Unsecured instances should only be used for local development and on trusted LANs."),(0,r.kt)("h2",{id:"what-levels-of-authorization-does-nodecg-have"},"What levels of authorization does NodeCG have?"),(0,r.kt)("p",null,"NodeCG has a fairly naive permissions model. There are only two permission levels:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Completely unauthorized, with no access to anything"),(0,r.kt)("li",{parentName:"ol"},"Completely authorized, with full access to everything")),(0,r.kt)("p",null,"This is something we want to improve in the future, but right now this is how things are in NodeCG."),(0,r.kt)("p",null,'"Full access to everything" includes:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read/write access to every Replicant in every bundle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read/write access to every message in every bundle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read access to the full config of every bundle"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your bundle configs may include sensitive API keys and passwords. Every user of your NodeCG deployment will have full access to these config values.")))),(0,r.kt)("p",null,"Therefore, untrusted users must never be given any degree of authorization in your NodeCG instance. They must never be allowed to successfully authenticate with the socket server. If they do, they will have full control over your entire NodeCG instance."),(0,r.kt)("h2",{id:"how-are-users-authorized"},"How are users authorized?"),(0,r.kt)("p",null,"NodeCG has two ways of authorizing a user:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Reading the value of their ",(0,r.kt)("inlineCode",{parentName:"li"},"socketToken")," cookie."),(0,r.kt)("li",{parentName:"ol"},"Reading the value of their ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," URL query parameter.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'This is why the "COPY URL" buttons on the "Graphics" tab of the dashboard include a ',(0,r.kt)("inlineCode",{parentName:"li"},"?key=YOUR_KEY")," at the end of them. It is necessary for the pages to load successfully in OBS.")))),(0,r.kt)("p",null,"Anyone who gets sent a link which includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," will have full authorization and access to your NodeCG instance. Treat these links with the same secrecy as you would a password, because that's essentially what they are."),(0,r.kt)("h2",{id:"what-do-i-do-if-one-of-my-keys-got-leaked"},"What do I do if one of my keys got leaked?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Have the owner of the leaked key navigate to the "Settings" tab on the Dashboard.'),(0,r.kt)("li",{parentName:"ol"},'Click "RESET KEY", and accept the confirmation dialog.')),(0,r.kt)("p",null,"If you are unable to reach the owner of the leaked key:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Shut down your NodeCG instance.")),(0,r.kt)("li",{parentName:"ol"},"Locate the ",(0,r.kt)("inlineCode",{parentName:"li"},"nodecg/db/nodecg.sqlite3")," file."),(0,r.kt)("li",{parentName:"ol"},"Open this file using any tool that can open an edit SQLite3 databases, such as ",(0,r.kt)("a",{parentName:"li",href:"https://sqlitebrowser.org/"},"DB Browser"),"."),(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"api_key")," table and delete the row which contains the leaked key."),(0,r.kt)("li",{parentName:"ol"},"Restart your NodeCG instance.")),(0,r.kt)("p",null,"In an emergency, you may want to completely delete your database file. The consequences of doing this are that all users will need to log in again and all persisted Replicant values will be lost."),(0,r.kt)("h2",{id:"how-do-i-enable-login-security"},"How do I enable login security?"),(0,r.kt)("p",null,"NodeCG has support for four authentication providers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#local-auth"},"Local Username/Password Auth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#twitch-auth"},"Twitch Auth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#discord-auth"},"Discord Auth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#steam-auth"},"Steam Auth"))),(0,r.kt)("p",null,"You may have multiple authentication providers enabled simultaneously."),(0,r.kt)("h3",{id:"local-auth"},"Local Auth"),(0,r.kt)("p",null,"Configure your ",(0,r.kt)("inlineCode",{parentName:"p"},"nodecg/cfg/nodecg.json")," as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "login": {\n    "enabled": true,\n    "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n    "local": {\n      "enabled": true,\n      "allowedUsers": [\n        {\n          "username": "example1",\n          "password": "password_example"\n        },\n        {\n          "username": "example2",\n          "password": "anotherExample-password1234"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Local authentication also support password hashing by using HMAC. In order to use a password hash, fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," property with the format ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>:<hash>")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>")," is the type (SHA-256, RIPEMD, Whirlpool, ...) and ",(0,r.kt)("inlineCode",{parentName:"p"},"<hash>")," a valid password hash."),(0,r.kt)("p",null,"For generating a valid password hash, you must use ",(0,r.kt)("inlineCode",{parentName:"p"},"sessionSecret")," as secret key.\nIf you're looking for a HMAC hash generator, you can use tools like ",(0,r.kt)("a",{parentName:"p",href:"https://wtools.io/generate-hmac-hash"},"wtools.io")," for example."),(0,r.kt)("p",null,"Currently, only native Node.js algorithms are supported."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "login": {\n    "enabled": true,\n    "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n    "local": {\n      "enabled": true,\n      "allowedUsers": [\n        {\n          "username": "admin",\n          "password": "sha256:ac679e332d4eee340b74eb0581225686f2736d58df7ea30c87a0d2cd5bfd1329"\n        },\n        {\n          "username": "other_admin",\n          "password": "ripemd:6f00f0c4c18fb563921b689876e98b61"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"twitch-auth"},"Twitch Auth"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://glass.twitch.tv/console/apps/create"},"Create a new application on your Twitch Developer Dashboard")),(0,r.kt)("li",{parentName:"ol"},"Give it whatever values you want for Name, Category, and Other Details"),(0,r.kt)("li",{parentName:"ol"},"Set the OAuth Redirect URL to ",(0,r.kt)("inlineCode",{parentName:"li"},"https://YOUR_DEPLOYMENT_URL/login/auth/twitch"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you're testing locally, use ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:9090/login/auth/twitch")))),(0,r.kt)("li",{parentName:"ol"},"Save your Client ID for the next step"),(0,r.kt)("li",{parentName:"ol"},'Click "New Secret", and save your client secret for the next step'),(0,r.kt)("li",{parentName:"ol"},"Configure your ",(0,r.kt)("inlineCode",{parentName:"li"},"nodecg/cfg/nodecg.json")," as such:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://dev.twitch.tv/docs/authentication/#scopes"},"Twitch Dev docs for the list of available scopes"),".")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "login": {\n    "enabled": true,\n    "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n    "twitch": {\n      "enabled": true,\n      "clientID": "YOUR_TWITCH_APP_CLIENT_ID",\n      "clientSecret": "YOUR_TWITCH_APP_CLIENT_SECRET",\n      "scope": "user:read:email",\n      "allowedUsernames": [\n        "your_twitch_username",\n        "other_twitch_username",\n        "can_have_as_many_as_you_want"\n      ],\n      "allowedIds": [\n        "your_twitch_id",\n        "other_twitch_id",\n        "can_have_as_many_as_you_want"\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"discord-auth"},"Discord Auth"),(0,r.kt)("p",null,"You can use two different kinds of authentication, by user or by server.\nYou can use one of them or both (in which case matching one of them will grant access)."),(0,r.kt)("h4",{id:"by-user"},"By user"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications"},"Create a new application on your Discord Developer Dashboard")),(0,r.kt)("li",{parentName:"ol"},"Give it whatever value you want for the Name"),(0,r.kt)("li",{parentName:"ol"},"Click on OAuth2 on the left and Set the OAuth Redirect URL to ",(0,r.kt)("inlineCode",{parentName:"li"},"https://YOUR_DEPLOYMENT_URL/login/auth/discord"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you're testing locally, use ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:9090/login/auth/discord"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Use the Client ID and Client Secret from general information for your configuration"),(0,r.kt)("li",{parentName:"ol"},"Configure your ",(0,r.kt)("inlineCode",{parentName:"li"},"nodecg/cfg/nodecg.json")," like below")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes"},"Discord docs for the list of available scopes"),".")),(0,r.kt)("p",null,"To get a Discord user ID, enable Discord developer mode and then right click on a user to copy it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "login": {\n    "enabled": true,\n    "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n    "discord": {\n      "enabled": true,\n      "clientID": "YOUR_DISCORD_APP_CLIENT_ID",\n      "clientSecret": "YOUR_DISCORD_APP_CLIENT_SECRET",\n      "scope": "identify",\n      "allowedUserIDs": [\n        "paste discord user ids you want to allow here",\n        "they look like this",\n        "159600065017675778",\n        "54561421005950976"\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"by-server-guild"},"By Server (Guild)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications"},"Create a new application on your Discord Developer Dashboard")),(0,r.kt)("li",{parentName:"ol"},"Give it whatever value you want for the Name"),(0,r.kt)("li",{parentName:"ol"},"Use the Client ID and Client Secret from general information for your configuration"),(0,r.kt)("li",{parentName:"ol"},"Click on OAuth2 on the left and Set the OAuth Redirect URL to ",(0,r.kt)("inlineCode",{parentName:"li"},"https://YOUR_DEPLOYMENT_URL/login/auth/discord"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you're testing locally, use ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:9090/login/auth/discord"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Configure your ",(0,r.kt)("inlineCode",{parentName:"li"},"nodecg/cfg/nodecg.json")," like below")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes"},"Discord docs for the list of available scopes"),".")),(0,r.kt)("p",null,"Any user in the server will be allowed to use nodecg."),(0,r.kt)("p",null,"If you want to check for roles and not just server membership, you also need to do the following:\n5. Click on Bot on the left, add a bot, then use the token for your configuration\n6. Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://discord.com/oauth2/authorize?client_id={YOUR_CLIENT_ID_HERE}&scope=bot&permissions=0")," (insert your Client ID)\nand invite the Bot to servers that you want to use for authentication (the bot will always display as offline, this is normal)"),(0,r.kt)("p",null,"To get a Discord server ID, enable Discord developer mode and then right click on a server to copy it.\nTo get a Discord role ID, enable Discord developer mode and then right click on a role to copy it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "login": {\n    "enabled": true,\n    "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n    "discord": {\n      "enabled": true,\n      "clientID": "YOUR_DISCORD_APP_CLIENT_ID",\n      "clientSecret": "YOUR_DISCORD_APP_CLIENT_SECRET",\n      "scope": "identify guilds",\n      "allowedGuilds": [\n        // Use this to allow all members to log in\n        {\n          "guildID": "paste a server id here to allow all members to log in",\n        },\n        // Use this to restrict log in for certain roles\n        {\n          "guildID": "paste a server id here to allow members with one of the roles to log in",\n          "allowedRoleIDs": [\n            "paste role ids you want to allow here",\n            "754751725457637546",\n            "755012946400378910"\n          ],\n          "guildBotToken": "paste your Discord BOT token here"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"steam-auth"},"Steam Auth"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://steamcommunity.com/dev/apikey"},"Create/copy your Steam Web API Key")),(0,r.kt)("li",{parentName:"ol"},"Obtain the SteamID64 string for each of the accounts you wish to allow.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://steamid.io/"},"https://steamid.io/")," is one tool for looking these up."))),(0,r.kt)("li",{parentName:"ol"},"Configure your ",(0,r.kt)("inlineCode",{parentName:"li"},"nodecg/cfg/nodecg.json")," as such:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "login": {\n    "enabled": true,\n    "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n    "steam": {\n      "enabled": true,\n      "apiKey": "YOUR_STEAM_WEB_API_KEY",\n      "allowedIds": [\n        "paste the SteamId64s you want to allow here",\n        "they look like this",\n        "76561197974943998"\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"how-do-i-enable-httpsssl-encryption"},"How do I enable HTTPS/SSL encryption?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an SSL certificate if you don't already have one."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creating an SSL cert is out of the scope of this tutorial. You may need to do some Googling if you are unfamiliar with this process."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your ",(0,r.kt)("inlineCode",{parentName:"p"},"nodecg/cfg/nodecg.json")," as such (passphrase is only required if you created your key with one):")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart NodeCG, and confirm that your instance is accessible via HTTPS."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ssl": {\n    "enabled": true,\n    "keyPath": "C:\\\\example\\\\path\\\\your-cert-key.key",\n    "certificatePath": "C:\\\\example\\\\path\\\\your-cert.crt",\n    "passphrase": "this is my example passphrase"\n  }\n}\n')))}h.isMDXComponent=!0}}]);