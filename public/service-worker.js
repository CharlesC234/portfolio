if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const r=e=>a(e,n),f={module:{uri:n},exports:s,require:r};i[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(t(...e),s)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/LICENSE.md",revision:"4aff29fd27db07fad27c51625683dde6"},{url:"/_next/static/chunks/127.fcba1cf343e0cc9f.js",revision:"fcba1cf343e0cc9f"},{url:"/_next/static/chunks/132.ee4565cfa177c95c.js",revision:"ee4565cfa177c95c"},{url:"/_next/static/chunks/143.e88067762dfa4a77.js",revision:"e88067762dfa4a77"},{url:"/_next/static/chunks/182.9e6b171ea35465e0.js",revision:"9e6b171ea35465e0"},{url:"/_next/static/chunks/259.dc6c4ed875215af1.js",revision:"dc6c4ed875215af1"},{url:"/_next/static/chunks/317.3d15cd306635dff5.js",revision:"3d15cd306635dff5"},{url:"/_next/static/chunks/342.a6393a6327002253.js",revision:"a6393a6327002253"},{url:"/_next/static/chunks/418.2e52ca222b536ae3.js",revision:"2e52ca222b536ae3"},{url:"/_next/static/chunks/437.afe279483c7da1d8.js",revision:"afe279483c7da1d8"},{url:"/_next/static/chunks/46.042ea91bb2f3a879.js",revision:"042ea91bb2f3a879"},{url:"/_next/static/chunks/467.ad87cc04f6ff3165.js",revision:"ad87cc04f6ff3165"},{url:"/_next/static/chunks/513.e36a22bdc89a7c94.js",revision:"e36a22bdc89a7c94"},{url:"/_next/static/chunks/521.563a245465a66553.js",revision:"563a245465a66553"},{url:"/_next/static/chunks/617.356d5f3c4da0ddcd.js",revision:"356d5f3c4da0ddcd"},{url:"/_next/static/chunks/661.32301c409c79c001.js",revision:"32301c409c79c001"},{url:"/_next/static/chunks/725.5396fbbad3ef0072.js",revision:"5396fbbad3ef0072"},{url:"/_next/static/chunks/734.815aa8f88582acfa.js",revision:"815aa8f88582acfa"},{url:"/_next/static/chunks/929.dc437f9842f62b02.js",revision:"dc437f9842f62b02"},{url:"/_next/static/chunks/c16184b3.d64852a81c957adf.js",revision:"d64852a81c957adf"},{url:"/_next/static/chunks/framework-bbecb7d54330d002.js",revision:"bbecb7d54330d002"},{url:"/_next/static/chunks/main-a214950124974dcb.js",revision:"a214950124974dcb"},{url:"/_next/static/chunks/pages/404-c6b05949583b93f6.js",revision:"c6b05949583b93f6"},{url:"/_next/static/chunks/pages/500-5254ccb02802390b.js",revision:"5254ccb02802390b"},{url:"/_next/static/chunks/pages/_error-ee5b5fb91d29d86f.js",revision:"ee5b5fb91d29d86f"},{url:"/_next/static/chunks/pages/articles-9e144fd21acd2639.js",revision:"9e144fd21acd2639"},{url:"/_next/static/chunks/pages/articles/title.articles-985029b4f66578e6.js",revision:"985029b4f66578e6"},{url:"/_next/static/chunks/pages/docs-400c8789b15ab729.js",revision:"400c8789b15ab729"},{url:"/_next/static/chunks/pages/docs/title.docs-51ace6f343f830b9.js",revision:"51ace6f343f830b9"},{url:"/_next/static/chunks/pages/icons-e3eb824698a1e29a.js",revision:"e3eb824698a1e29a"},{url:"/_next/static/chunks/pages/index-43bd6ac5602c2cd6.js",revision:"43bd6ac5602c2cd6"},{url:"/_next/static/chunks/pages/projects-9cf26f098c09cd17.js",revision:"9cf26f098c09cd17"},{url:"/_next/static/chunks/pages/projects/title.projects-54034e087ad939ca.js",revision:"54034e087ad939ca"},{url:"/_next/static/chunks/pages/resume-5a2bb8b70f59f1f4.js",revision:"5a2bb8b70f59f1f4"},{url:"/_next/static/chunks/pages/title.404-eeab06d3a28146ff.js",revision:"eeab06d3a28146ff"},{url:"/_next/static/chunks/pages/title.500-a8a524c5fd502084.js",revision:"a8a524c5fd502084"},{url:"/_next/static/chunks/pages/title.index-2a32b4739cd96896.js",revision:"2a32b4739cd96896"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5d9f3c933ac5e36b.js",revision:"5d9f3c933ac5e36b"},{url:"/_next/static/css/285f437794510502.css",revision:"285f437794510502"},{url:"/_next/static/css/38f0e2aa1c0cc3db.css",revision:"38f0e2aa1c0cc3db"},{url:"/_next/static/css/549356f40072810b.css",revision:"549356f40072810b"},{url:"/_next/static/css/5f2e95b837872214.css",revision:"5f2e95b837872214"},{url:"/_next/static/css/5f8feef91937fa7e.css",revision:"5f8feef91937fa7e"},{url:"/_next/static/css/6af58001478d6ca5.css",revision:"6af58001478d6ca5"},{url:"/_next/static/css/7590d3346dde1722.css",revision:"7590d3346dde1722"},{url:"/_next/static/css/950f8eec1dacfe4d.css",revision:"950f8eec1dacfe4d"},{url:"/_next/static/css/9ec8046745234d3b.css",revision:"9ec8046745234d3b"},{url:"/_next/static/css/a73ec98fdf0b8bce.css",revision:"a73ec98fdf0b8bce"},{url:"/_next/static/css/adf7d84de9e18c4f.css",revision:"adf7d84de9e18c4f"},{url:"/_next/static/css/b9062f65929da06f.css",revision:"b9062f65929da06f"},{url:"/_next/static/css/fba8402e6c450d1b.css",revision:"fba8402e6c450d1b"},{url:"/_next/static/media/devicon.2305a813.ttf",revision:"2305a813"},{url:"/_next/static/media/devicon.79c69bc7.woff",revision:"79c69bc7"},{url:"/_next/static/media/devicon.912e12c4.eot",revision:"912e12c4"},{url:"/_next/static/media/devicon.d86112e0.svg",revision:"d86112e0"},{url:"/_next/static/media/fira-code-cyrillic-400-normal.6086e63f.woff2",revision:"6086e63f"},{url:"/_next/static/media/fira-code-cyrillic-400-normal.f71d35d9.woff",revision:"f71d35d9"},{url:"/_next/static/media/fira-code-cyrillic-600-normal.7ed7feaf.woff2",revision:"7ed7feaf"},{url:"/_next/static/media/fira-code-cyrillic-600-normal.f763b0db.woff",revision:"f763b0db"},{url:"/_next/static/media/fira-code-cyrillic-ext-400-normal.b1f07e82.woff2",revision:"b1f07e82"},{url:"/_next/static/media/fira-code-cyrillic-ext-400-normal.ef7fdcef.woff",revision:"ef7fdcef"},{url:"/_next/static/media/fira-code-cyrillic-ext-600-normal.268f7242.woff2",revision:"268f7242"},{url:"/_next/static/media/fira-code-cyrillic-ext-600-normal.c9bdaa09.woff",revision:"c9bdaa09"},{url:"/_next/static/media/fira-code-greek-400-normal.6fc14851.woff",revision:"6fc14851"},{url:"/_next/static/media/fira-code-greek-400-normal.95d4e83c.woff2",revision:"95d4e83c"},{url:"/_next/static/media/fira-code-greek-600-normal.17a4f747.woff2",revision:"17a4f747"},{url:"/_next/static/media/fira-code-greek-600-normal.bb7ea979.woff",revision:"bb7ea979"},{url:"/_next/static/media/fira-code-greek-ext-400-normal.0e1cf7e2.woff",revision:"0e1cf7e2"},{url:"/_next/static/media/fira-code-greek-ext-400-normal.707deac8.woff2",revision:"707deac8"},{url:"/_next/static/media/fira-code-greek-ext-600-normal.8abe59f1.woff2",revision:"8abe59f1"},{url:"/_next/static/media/fira-code-greek-ext-600-normal.ef2e4be3.woff",revision:"ef2e4be3"},{url:"/_next/static/media/fira-code-latin-400-normal.1f45a4c0.woff2",revision:"1f45a4c0"},{url:"/_next/static/media/fira-code-latin-400-normal.46f7536f.woff",revision:"46f7536f"},{url:"/_next/static/media/fira-code-latin-600-normal.9ed64187.woff2",revision:"9ed64187"},{url:"/_next/static/media/fira-code-latin-600-normal.c65d4f1a.woff",revision:"c65d4f1a"},{url:"/_next/static/media/fira-code-latin-ext-400-normal.544f78b8.woff2",revision:"544f78b8"},{url:"/_next/static/media/fira-code-latin-ext-400-normal.95d3893b.woff",revision:"95d3893b"},{url:"/_next/static/media/fira-code-latin-ext-600-normal.6f2021a1.woff",revision:"6f2021a1"},{url:"/_next/static/media/fira-code-latin-ext-600-normal.b836a3c5.woff2",revision:"b836a3c5"},{url:"/_next/static/media/inter-cyrillic-400-normal.5122dff0.woff2",revision:"5122dff0"},{url:"/_next/static/media/inter-cyrillic-400-normal.8cbf7092.woff",revision:"8cbf7092"},{url:"/_next/static/media/inter-cyrillic-700-normal.2de493a5.woff",revision:"2de493a5"},{url:"/_next/static/media/inter-cyrillic-700-normal.8b03fbd1.woff2",revision:"8b03fbd1"},{url:"/_next/static/media/inter-cyrillic-800-normal.c9f7c98d.woff",revision:"c9f7c98d"},{url:"/_next/static/media/inter-cyrillic-800-normal.f0070c7d.woff2",revision:"f0070c7d"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.06b6faa3.woff2",revision:"06b6faa3"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.0c785d16.woff",revision:"0c785d16"},{url:"/_next/static/media/inter-cyrillic-ext-700-normal.7c668daa.woff2",revision:"7c668daa"},{url:"/_next/static/media/inter-cyrillic-ext-700-normal.cdcfe7b2.woff",revision:"cdcfe7b2"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.4dbf28ad.woff",revision:"4dbf28ad"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.f40e584a.woff2",revision:"f40e584a"},{url:"/_next/static/media/inter-greek-400-normal.21a04137.woff",revision:"21a04137"},{url:"/_next/static/media/inter-greek-400-normal.d1deb2fe.woff2",revision:"d1deb2fe"},{url:"/_next/static/media/inter-greek-700-normal.54b722f0.woff2",revision:"54b722f0"},{url:"/_next/static/media/inter-greek-700-normal.5e91a9da.woff",revision:"5e91a9da"},{url:"/_next/static/media/inter-greek-800-normal.c17e275b.woff",revision:"c17e275b"},{url:"/_next/static/media/inter-greek-800-normal.fd6e481c.woff2",revision:"fd6e481c"},{url:"/_next/static/media/inter-greek-ext-400-normal.2271c2a1.woff2",revision:"2271c2a1"},{url:"/_next/static/media/inter-greek-ext-400-normal.9ad92a78.woff",revision:"9ad92a78"},{url:"/_next/static/media/inter-greek-ext-700-normal.2751ce59.woff",revision:"2751ce59"},{url:"/_next/static/media/inter-greek-ext-700-normal.5fb4f9ba.woff2",revision:"5fb4f9ba"},{url:"/_next/static/media/inter-greek-ext-800-normal.0344056d.woff",revision:"0344056d"},{url:"/_next/static/media/inter-greek-ext-800-normal.c7813f38.woff2",revision:"c7813f38"},{url:"/_next/static/media/inter-latin-400-normal.493934f7.woff2",revision:"493934f7"},{url:"/_next/static/media/inter-latin-400-normal.5a243e9a.woff",revision:"5a243e9a"},{url:"/_next/static/media/inter-latin-700-normal.7ddf3c11.woff2",revision:"7ddf3c11"},{url:"/_next/static/media/inter-latin-700-normal.dd56dd48.woff",revision:"dd56dd48"},{url:"/_next/static/media/inter-latin-800-normal.1c3ff413.woff2",revision:"1c3ff413"},{url:"/_next/static/media/inter-latin-800-normal.4ec1c074.woff",revision:"4ec1c074"},{url:"/_next/static/media/inter-latin-ext-400-normal.261aa6d4.woff2",revision:"261aa6d4"},{url:"/_next/static/media/inter-latin-ext-400-normal.97c153a0.woff",revision:"97c153a0"},{url:"/_next/static/media/inter-latin-ext-700-normal.07491ea2.woff2",revision:"07491ea2"},{url:"/_next/static/media/inter-latin-ext-700-normal.94e2d7d5.woff",revision:"94e2d7d5"},{url:"/_next/static/media/inter-latin-ext-800-normal.8bb395b7.woff2",revision:"8bb395b7"},{url:"/_next/static/media/inter-latin-ext-800-normal.94943489.woff",revision:"94943489"},{url:"/_next/static/media/inter-vietnamese-400-normal.668d9df6.woff",revision:"668d9df6"},{url:"/_next/static/media/inter-vietnamese-400-normal.ebde713a.woff2",revision:"ebde713a"},{url:"/_next/static/media/inter-vietnamese-700-normal.00e401a9.woff2",revision:"00e401a9"},{url:"/_next/static/media/inter-vietnamese-700-normal.f538ca8b.woff",revision:"f538ca8b"},{url:"/_next/static/media/inter-vietnamese-800-normal.1925759d.woff2",revision:"1925759d"},{url:"/_next/static/media/inter-vietnamese-800-normal.f2b1a298.woff",revision:"f2b1a298"},{url:"/_next/static/qo_mLcKS47hYBFzpZEE85/_buildManifest.js",revision:"959645bc7a8a97c30c3b1bba5286b18e"},{url:"/_next/static/qo_mLcKS47hYBFzpZEE85/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon/browserconfig.xml",revision:"882ec3bbe43efaf87e3e9d7e2eb9cdc2"},{url:"/favicon/favicon-org.ico",revision:"ff4fc7292ce1dd803c91bfe3763ef172"},{url:"/favicon/favicon.ico",revision:"cedaa9e7614d06bad32274bf453e57d7"},{url:"/favicon/favicon.jpg",revision:"4c6106c357ec5701eecb0e98a9d71fbf"},{url:"/favicon/safari-pinned-tab.svg",revision:"378a916e4ac7925c7f20e231b3162392"},{url:"/gif/hireme.gif",revision:"ba00f2c9421c481e58d0c3344862b01e"},{url:"/gif/yes.gif",revision:"d45d61516f65616a40bfdde88150a4d5"},{url:"/img/Charles_Cahill_Resume.pdf",revision:"65e9ac4879671db5f81ddde45cb3922e"},{url:"/img/Resume.html",revision:"54c07050005422c155a17da495437d15"},{url:"/img/dataism-24-black.svg",revision:"3e43f89f61ac977a22e4b529aa9ff534"},{url:"/img/dataism-24.svg",revision:"cf22b8801a9289aeb3b4ecbcabb063f5"},{url:"/img/github_icon.png",revision:"ec3a60c8c6539a07eb70b52f6737ea6e"},{url:"/img/google_icon.png",revision:"4100c1990034b377da8f7e7ce946bc11"},{url:"/img/images/image1.png",revision:"e593637d69a5aac1638b377bee560f95"},{url:"/img/img-mock.png",revision:"1de7aa94d10b793f83a49886cc700810"},{url:"/img/img-mock2.png",revision:"7b568f16efc7ebf9e5222d8777eab6a4"},{url:"/img/jobs.png",revision:"784a706919b46d338d528f7644b5934d"},{url:"/img/logo.jpg",revision:"4c6106c357ec5701eecb0e98a9d71fbf"},{url:"/img/logo_rounded.png",revision:"04148444c916aa0e474772df776689af"},{url:"/img/neurolink.png",revision:"117f0d8f76b0e9039a2474da789fde13"},{url:"/img/noimageavailable.jpg",revision:"0eecdd9b234ec23a9557de074c622979"},{url:"/img/pfp.jpg",revision:"4d9985631c7be7f049d82ed27c731cbd"},{url:"/img/portrait2.png",revision:"91b419b4c47c435ee83e76a748ac1675"},{url:"/img/portrait3.png",revision:"4a6e84271fa150c2181352872495ee74"},{url:"/img/sofwerx.png",revision:"1b0600a06f8a53fc137369fdf5f4e002"},{url:"/img/thecosmics.png",revision:"13ff2070e7b7cec8e3108da45fcd3fa3"},{url:"/img/user.jpg",revision:"9f6de95c7c2717a54608b98ac3b6dc58"},{url:"/img/user2.jpg",revision:"802f160a48ef08e445ed5527df4eba5a"},{url:"/img/vibentech.png",revision:"cd32f35f8992daddb0e2af1d86c1ea26"},{url:"/img/xpixels.png",revision:"b8cd251b26a299d9aa178c7fd4ef588d"},{url:"/lottie/boysearching.json",revision:"1ee3bb3b17d772049299cc9c9afd4b39"},{url:"/lottie/codingdev.json",revision:"ec4ddf9d89c827d54302fb68765b4cd6"},{url:"/lottie/constuction.json",revision:"dc97ef2653e2f53a89be90095f8c079b"},{url:"/lottie/ghost.json",revision:"7ff73ac129bcad6974681cdf20740f63"},{url:"/lottie/laptop.json",revision:"a78d3c24364a1710a9bfc954dc0b4aed"},{url:"/lottie/loadcode.json",revision:"e1f6af84158aec91b5d3721b1fd246f1"},{url:"/lottie/looking.json",revision:"365936cd93bf3525b57b4c90e3259476"},{url:"/lottie/serverboot.json",revision:"c9f67668d3137f02708cc4af41e71bab"},{url:"/lottie/ufo.json",revision:"eb08f3cb74bc32a2d01bf7f51e0fbc12"},{url:"/manifest.json",revision:"afc595fd20d1622c4e9d8b535c1c744f"},{url:"/portfolio.jpg",revision:"2d6c39c2586bb074d1d0fda3b50c0ed1"},{url:"/robots.txt",revision:"646eff816b97f7866920558a61dd2fa4"},{url:"/sitemap-0.xml",revision:"39858d8b0349957b608720b5bc01f514"},{url:"/sitemap.xml",revision:"d49254fe171242a0c1085e99c7eb08fc"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
