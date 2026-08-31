/* Service worker кабинета IZI TOUR.
   Задача одна: чтобы в аэропорту без сети человек увидел свою поездку.
   Стратегия: страницы — сеть, при отказе кэш; стили, скрипты и картинки —
   кэш, обновляются в фоне. Индекс сайта намеренно не кэшируем жёстко,
   иначе витрина застынет после правок в редакторе. */
var V = 'izi-cab-v2';
var SHELL = [
  'kabinet.html',
  'assets/css/site.css',
  'assets/css/pages.css',
  'assets/img/icon-192.png',
  'assets/img/icon-512.png'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(V).then(function(c){
      return Promise.all(SHELL.map(function(u){
        return c.add(new Request(u, {cache:'reload'})).catch(function(){});
      }));
    }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(ks){
      return Promise.all(ks.map(function(k){ return k===V? null : caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if(req.method !== 'GET') return;
  var url = new URL(req.url);
  if(url.origin !== self.location.origin) return;

  var isDoc = req.mode === 'navigate' || (req.headers.get('accept')||'').indexOf('text/html') >= 0;
  /* Данные сайта (их правит редактор) — всегда сначала из сети, иначе после
     публикации люди с установленным приложением видели бы вчерашние цены. */
  var isData = url.pathname.indexOf('/data/') >= 0 || /\.json($|\?)/.test(url.pathname);

  if(isDoc || isData){
    e.respondWith(
      fetch(req).then(function(r){
        var copy = r.clone();
        caches.open(V).then(function(c){ c.put(req, copy); });
        return r;
      }).catch(function(){
        return caches.match(req).then(function(m){
          return m || caches.match('kabinet.html');
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function(m){
      var net = fetch(req).then(function(r){
        if(r && r.status === 200){
          var copy = r.clone();
          caches.open(V).then(function(c){ c.put(req, copy); });
        }
        return r;
      }).catch(function(){ return m; });
      return m || net;
    })
  );
});

/* Заготовка под уведомления: заработает, когда появится сервер,
   который их отправляет. Статический хостинг это делать не умеет. */
self.addEventListener('push', function(e){
  var d = {title:'IZI TOUR', body:'Обновление по вашей поездке'};
  try{ if(e.data) d = e.data.json(); }catch(err){}
  e.waitUntil(self.registration.showNotification(d.title, {
    body: d.body, icon: 'assets/img/icon-192.png', badge: 'assets/img/icon-192.png',
    data: {url: d.url || 'kabinet.html'}
  }));
});
self.addEventListener('notificationclick', function(e){
  e.notification.close();
  var u = (e.notification.data && e.notification.data.url) || 'kabinet.html';
  e.waitUntil(clients.matchAll({type:'window'}).then(function(ws){
    for(var i=0;i<ws.length;i++){ if(ws[i].url.indexOf(u)>=0 && 'focus' in ws[i]) return ws[i].focus(); }
    return clients.openWindow(u);
  }));
});
