if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const f=e=>n(e,o),l={module:{uri:o},exports:c,require:f};i[o]=Promise.all(s.map((e=>l[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BlrhJDLw.js",revision:null},{url:"assets/index-CgUlOaEN.css",revision:null},{url:"img/apple-icon-180.png",revision:"31f78a3ef514b9ce8cef016da54991af"},{url:"img/icons/icon.png",revision:"0c98e51d2084fb467120e76f0db35a0a"},{url:"img/manifest-icon-192.maskable.png",revision:"58189c04bff81557bc84219ff3e33210"},{url:"img/manifest-icon-512.maskable.png",revision:"a9ad627280c92a264f31464e5882eb3b"},{url:"index.html",revision:"aa5585e38113ddb7dc1f9eabfaf055db"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/manifest-icon-192.maskable.png",revision:"58189c04bff81557bc84219ff3e33210"},{url:"img/manifest-icon-512.maskable.png",revision:"a9ad627280c92a264f31464e5882eb3b"},{url:"manifest.webmanifest",revision:"2674d7463a5eccce75551e2683d60c53"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
