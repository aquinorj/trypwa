self.addEventListener("install", e => { 
    e.waitUntil(
      caches.open("offlineFiles").then(cache => {
         return cache.addAll([
             "./",
             "./index.js",
             "./style.css",
             "./index.html",
             "./gallery.html",
             "./images/192.png",
             "./images/512.png",
             "./images/1-min.jpg",
             "./images/2-min.jpg",
             "./images/6-min.jpg",
             "./images/9-min.jpg",
             "./images/4-min.jpg",
             "./images/html.png",
             "./images/csharp.png",
             "./images/java.png",
             "./images/photoshop.png",
             "./images/lr.png",
             "./images/sony.png",
             "./images/rja.png",
             "./images/r-192.png",
             "./images/r-512.png",
             "./captured/1km-min.jpg",
             "./captured/joms18-min.jpg",
             "./captured/alli-min.jpg",
             "./captured/mich-min.jpg",
             "./captured/joms-min.jpg",
             "./captured/panergalin-min.jpg",
             "./captured/sky4-min.jpg",
             "./captured/gerine-min.jpg",
             "./captured/sky2-min.jpg",
             "./captured/kuya-min.jpg",
             "./captured/rose-min.jpg",
             "./captured/joms182-min.jpg",
             "./captured/alli2-min.jpg",
             "./captured/mich2-min.jpg"
         ]);
      })
    );
});

self.addEventListener("fetch", e => {
   console.log("Intercepting request :"+ e.request.url);
   e.respondWith(
       caches.match(e.request).then(response => {
            return response || fetch(e.request);
       })
   );
});