if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const l=e=>s(e,d),b={module:{uri:d},exports:a,require:l};i[d]=Promise.all(r.map((e=>b[e]||l(e)))).then((e=>(c(...e),a)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/06/05/hello-world/index.html",revision:"cfbc3e0754459205d5bfb1ee37bd8f8e"},{url:"2023/06/09/MySQL/index.html",revision:"294971161d63ff1163b89c49606d0dda"},{url:"archives/2023/06/index.html",revision:"1a383bb33bc80364cff672083306375c"},{url:"archives/2023/index.html",revision:"228ce3746fe504886f2b293bbb702f18"},{url:"archives/index.html",revision:"1e466c1d4a5e44fe153dc47d48addb1b"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"css/index.css",revision:"5b418c05272554cdb3b3376e8038a5b9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/1.png",revision:"3a2fb134e5186d61b00971aa585c2a67"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"0b2b239cd4913b8bff2555ad77cb31a7"},{url:"img/background.png",revision:"b6d46d0f1d791c482334ca697a166e32"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/head.png",revision:"0b2b239cd4913b8bff2555ad77cb31a7"},{url:"img/Logo.jpg",revision:"65685d013291d796da0504394a52e0e6"},{url:"img/wechat.jpg",revision:"89dd9ec37a390d5cbcf7b8ed448f457b"},{url:"index.html",revision:"9c5c398b9f7ded6afd972fa465679c44"},{url:"js/main.js",revision:"4802a927bf0b57f3859b3be8ed0b0351"},{url:"js/search/algolia.js",revision:"76622d4438de12dd882830e8cb63d8f5"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"a0c72193c089d7ef2c3d5359379c4516"},{url:"js/weather.js",revision:"31c24b915c39578f6973327de66ba287"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
