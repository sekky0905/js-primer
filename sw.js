// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
importScripts(
    "https://unpkg.com/service-worker-updatefound-refresh-dialog@1.1.0/dist/service-worker-updatefound-refresh-dialog.umd.js"
);

workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "basic/array/index.html",
    "revision": "f272e3aadbdc49ad3e9fe8e607db47ac"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "e26f9e8ec157282aeb60810f23a52a6b"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "c45405c987bb1a739850f71be6d010f0"
  },
  {
    "url": "basic/async/index.html",
    "revision": "5ad0c5246421fd97447ac2f23ad591bf"
  },
  {
    "url": "basic/class/index.html",
    "revision": "791b7f396b91addcb569d780f6e37730"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "c9fcb07c7357598f7f30f04343f74cda"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "858598058ae453021e032041e530d8b6"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "3984cd30435b1f57486a10fedcacddc5"
  },
  {
    "url": "basic/date/index.html",
    "revision": "fe839e554e40fd902a5d1e9b17690bc0"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "034b109de6e4caec6ba8a963c430e556"
  },
  {
    "url": "basic/error-try-catch/images/error.png",
    "revision": "dff0e4322cb06d42d699119b6f89428f"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "b8032b583d1f3f787665b50eafca3f19"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "ddae50bbc2c0f73dcc328c65e6bd505f"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "6378eab3dd2fcbae94c7a0a7bc8e762a"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "378bc7ba6f5bec61f4b42e003dc4d482"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "249e75cfe1f22458bfa9fe71480a6c0d"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "7ffef0546347985f2d1b8516d14381bb"
  },
  {
    "url": "basic/index.html",
    "revision": "6eeb20f379a0c7a0779116e33830df92"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "90afbdb61ac304f9e2cc3e1b56bf236a"
  },
  {
    "url": "basic/json/index.html",
    "revision": "772afb530efcfc371583789ffbeb6e36"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "0f08cfb62b7eb7d84014a1f7afe5677b"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "1a3131a2d38b21f13a7dc29c759a1c24"
  },
  {
    "url": "basic/math/index.html",
    "revision": "55594699161ec71130e39eeb7e9d210e"
  },
  {
    "url": "basic/object/index.html",
    "revision": "a11226043bc68dc40b9d95f81a7b8480"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "e885a37d7d45ca59337cbde84f3b443d"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "16056019943280eac01e840228e834a1"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "6bbe9c151a73ec89ed45606a0b42975f"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "cec8dcb4c7074978cf2bde58bb2ebc41"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "889dfb7dec547bc8bde6fed9566d204f"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "f4589b78a0e753c44eca440e0980be0e"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "a9778a629aa8e19ebfb85063fc453ce7"
  },
  {
    "url": "basic/string/index.html",
    "revision": "0f94dcb24552eb45005ca02d023763b8"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "75e96881a99b1b29f62b3d5040156ff9"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "6a17c09e96b10cee5a1e3120cd4364eb"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "096a3a5838459d91e482dff2e1230c84"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/ebook.css",
    "revision": "fa203ae16ad9f01f4d20061fb9e7a6cc"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/website.css",
    "revision": "acce01e3e11cbd4b3882e7732d81f954"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "a6dec84857f27171c034a05c23911055"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook-plugin-sharing/buttons.js",
    "revision": "e7c1c051d685b9e7530c1a6675e6b119"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "e53bf9037b1d1c9810486ef4c5493624"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "b91df37069569bafccc6936d1b2e1352"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "e744cdec12fa24a28b40fde9b52d7695"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "e3682439a02773056ce1bd46e6085555"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "2814afaf288c99d08c584b39234d3e39"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "406eb5ae0057f1f40b2abf9b17cd12a4"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "7529c23361ebe1eaba84a6cd042a9565"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "88a3a50e3559bc577c1be0de4fcc6c6d"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "176e71ac3bf185b7f08e0f6cb919f1e8"
  },
  {
    "url": "index.html",
    "revision": "e945b3138534f1f7a3d0af0dfa11a4d7"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "c859c563ac5ea8c7724e42caac942e1c"
  },
  {
    "url": "intro/goal/index.html",
    "revision": "06ddb377c6a033ca81a0c855eba7df64"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "2b000c4e60846d2ef9d9b53ba2d9d7d7"
  },
  {
    "url": "landing/css/style.css",
    "revision": "026290c57783f482c4226e004e2279e5"
  },
  {
    "url": "landing/img/cover.png",
    "revision": "fec746cff0a8b4a9fb4193d4af3d534f"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "19d98be248101b2685bb2a74d510890f"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "4b4cd63c1bad3861502d3127c2a2d0a2"
  },
  {
    "url": "landing/index.html",
    "revision": "b25c7cbf90406ff30074a219ce196b6f"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "15072f06aa7fd4d5fbce148bc2db975f"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "d5e0ecf1930e0e60a498b3e4909fa1c8"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "e1df96c10be2693de3909e98d272fd31"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "529c6091a9875e4151bbd301a9eeaeee"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "74c3afa727125752c4245410e43d30da"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "937f44b83967231567c263b6c874461e"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "a1bbdcd0b354b0f3df7e9156a326dcf5"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "97b1897743ee44e2fd8a9315a7af15eb"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "c1cd975beec6e6f62156db1708993178"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "4e2eb4689531394ba40b6dc8932f2809"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "4e2eb4689531394ba40b6dc8932f2809"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-1.png",
    "revision": "30ae672fc36c3cf614eea13ea84dca42"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-2.png",
    "revision": "37814c55beb033fe5d7d40c0b45afe91"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "abc05e8f99b733e55533ca25d3576c65"
  },
  {
    "url": "use-case/ajaxapp/xhr/src/index.html",
    "revision": "d86dd5f8bd529e577d5ed6708204e386"
  },
  {
    "url": "use-case/index.html",
    "revision": "b6b94c567fd75788c295cfd428226c29"
  },
  {
    "url": "use-case/module/index.html",
    "revision": "e88d2b92c92367b668483bd2bb060d79"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "a4954ebe22f11d4364736475d0269765"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "dd1145191e1a0d2c6de2ecfcf4ae12aa"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "83ef05e525063716e27ecf283a69d156"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "ba0de5a5cbb8c833b6d43fbcad9bcb81"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "3db1e11a9c61b7a87ce91ef6be37afc8"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "53077345cd8f95bcc507c472bf21885e"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "ec52b9890d8354b4021e271bc7db4cf8"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "19e786e94aa02e5250e937bac6c20674"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "2ff1c70fe934bef3d24ff96b72af6987"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "80690c222f4d9951fae9873f30fade0a"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "05d2df3f89ce04ee02638e4910988282"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "83221ab72b7b2483f8aff1b9df157a42"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "d3d61ffa5bef6fbdc7ba616f01ec6520"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "cc3e1e0f45145165903c8483e016a492"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "83221ab72b7b2483f8aff1b9df157a42"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "d5c00c9e922d01a9b80f83b1411c0e0e"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "7ed72a7a7a830f768212c5db9c24acae"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "09db0bd1e92afc16ee0cd27da971e44a"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "4435adf2d09b576dd1c22aa398419d73"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "09db0bd1e92afc16ee0cd27da971e44a"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "044faab6418bb0d5c4a50d43be55a0ac"
  },
  {
    "url": "use-case/todoapp/form-event/img/form-event.png",
    "revision": "a193d8abc60dcc1f78c117af7a23a946"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "00b215792248289bd4f058142c0b70ea"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "a521f47eb8479790d90442349a5e9a09"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "44920eba3f5737a49e9cc4c0893c44dd"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "317f98cf09f05992e6c98c10fea6ac1a"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "9528b6b1e9c5c6c029843537ea4121f5"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  }
]);