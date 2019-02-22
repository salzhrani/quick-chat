/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "192.eebe6d9f.png",
    "revision": "9b2a0b275f804dab10138479c50ebeb8"
  },
  {
    "url": "512.abeb6a0d.png",
    "revision": "a9a18f9ed38b4b940e4ff4a74977745f"
  },
  {
    "url": "index.html",
    "revision": "bd768b114d9d1fce95a8f01558b0e791"
  },
  {
    "url": "style.d5b937fa.css",
    "revision": "5a24c4bc5853d9ac3501fd1685c80205"
  },
  {
    "url": "whatsapp-dialer.02dcc51a.js",
    "revision": "d48900c48628475986a5686f5b6f87d2"
  },
  {
    "url": "/",
    "revision": "5b29b7627274028c3d5a1040b068f764"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/quick-chat//index.html");

workbox.googleAnalytics.initialize({});
