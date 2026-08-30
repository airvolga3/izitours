var IMAGES={route:'assets/img/route.webp',ac777:'assets/img/ac777.webp',ac321:'assets/img/ac321.webp',acssj:'assets/img/acssj.webp',bodrum_sea:'assets/img/bodrum_sea.webp',bodrum_city:'assets/img/bodrum_city.webp',bodrum_eve:'assets/img/bodrum_eve.webp',bodrum_who:'assets/img/bodrum_who.webp',antalya_sea:'assets/img/antalya_sea.webp',antalya_city:'assets/img/antalya_city.webp',antalya_eve:'assets/img/antalya_eve.webp',antalya_who:'assets/img/antalya_who.webp',sharm_sea:'assets/img/sharm_sea.webp',sharm_city:'assets/img/sharm_city.webp',sharm_eve:'assets/img/sharm_eve.webp',sharm_who:'assets/img/sharm_who.webp',hainan_sea:'assets/img/hainan_sea.webp',hainan_city:'assets/img/hainan_city.webp',hainan_eve:'assets/img/hainan_eve.webp',hainan_who:'assets/img/hainan_who.webp',avatar_mtn:'assets/img/avatar_mtn.webp',avatar_city:'',avatar_eve:'',avatar_who:'assets/img/avatar_who.webp',bodrum:'assets/img/bodrum.webp',
            antalya:'assets/img/antalya.webp',
            sharm:'assets/img/sharm.webp',
            hainan:'assets/img/hainan.webp',
            avatar:'assets/img/avatar.webp'};
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function setModel(imgEl,key){ var s=IMAGES[key]; if(s&&imgEl.getAttribute('src')!==s) imgEl.src=s; }
var stageCur=null,stageT=null;
function setStageArt(key){
  var src=IMAGES[key]; if(!src||stageCur===key) return;
  stageCur=key;
  var a=document.getElementById('stageImg'), b=document.getElementById('stageImg2');
  if(!a.getAttribute('src')||reduce){ a.src=src; return; }
  clearTimeout(stageT);
  b.src=src;
  requestAnimationFrame(function(){ b.classList.add('on'); });
  stageT=setTimeout(function(){ a.src=src; b.classList.remove('on'); },520);
}

/* ---------- resorts ---------- */
var RESORTS_DATA=[
 {k:'bodrum',n:'Бодрум',acc:'Бодрум',c:'Турция · Эгейское побережье',
  chips:['Море 27°','До аэропорта 35 км','Пляж песчано-галечный'],
  tabs:[
   ['Море','Эгейское море держит 26–27 градусов до конца сентября. Вода прозрачная настолько, что с пирса видно дно на четыре метра, а к вечеру она становится теплее воздуха — и выходить из неё уже не хочется.','bodrum_sea'],
   ['Город','Белые дома спускаются к бухте уступами, на мысу стоит крепость Святого Петра, а в марине по вечерам зажигаются мачты. Из Гюмбета до старого города — десять минут на долмуше за копейки.','bodrum_city'],
   ['Вечер','Солнце садится прямо в море около восьми. Набережная просыпается: рыбные таверны выставляют столы к самой воде, где-то играют вживую, и до полуночи здесь гуляют семьями, а не толпой.','bodrum_eve'],
   ['Для кого','Тем, кому мало просто лежать: бухты для лодочных прогулок, дайвинг, живые вечера. С детьми лучше в Гюмбет или Битез — там пологий вход и спокойная вода без волны.','bodrum_who']
  ]},
 {k:'antalya',n:'Анталия',acc:'Анталию',c:'Турция · Средиземноморье',
  chips:['Море 28°','До аэропорта 20 км','Пляж песчаный'],
  tabs:[
   ['Море','Средиземное дольше всех держит тепло: 28 градусов в сентябре и 25 даже в конце октября. Лара и Коньяалты — это километры песка, а с воды видны заснеженные вершины Таврских гор.','antalya_sea'],
   ['Город','Калеичи — старый город внутри крепостных стен: узкие улицы, османские дома, апельсиновые деревья во дворах. Водопад Дюден падает с обрыва прямо в море, и это видно с прогулочного катера.','antalya_city'],
   ['Вечер','Здесь вечер длинный и тёплый. Отели зажигают подсветку, на набережной работают чайные, а с холма над старым портом видно, как огни бухты уходят к горизонту.','antalya_eve'],
   ['Для кого','Классика «всё включено» для семей: большие отели, аквапарки, анимация, короткий трансфер из аэропорта. Тем, кто едет впервые, лучше начинать отсюда.','antalya_who']
  ]},
 {k:'sharm',n:'Шарм-эль-Шейх',acc:'Шарм-эль-Шейх',c:'Египет · Красное море',
  chips:['Море 28°','До аэропорта 18 км','Коралловый риф'],
  tabs:[
   ['Море','Красное море держит 28 градусов даже в декабре. Коралловый риф начинается в двадцати метрах от берега: маска и трубка — и вы среди рыб-бабочек, без всякого сертификата и без лодки.','sharm_sea'],
   ['Город','Наама-Бей — набережная с лавками, кальянными и рыбными ресторанами, где к столу приносят улов и вы выбираете сами. За городом начинается Синайская пустыня и дорога к монастырю Святой Екатерины.','sharm_city'],
   ['Вечер','После заката жара уходит мгновенно, и становится тем самым тёплым вечером, ради которого сюда едут зимой. Небо над пустыней без городской засветки — Млечный Путь видно невооружённым глазом.','sharm_eve'],
   ['Для кого','Тем, кто хочет к морю не летом: с ноября по март это единственное по-настоящему тёплое море в пределах прямого рейса. И тем, кто влюбляется в снорклинг с первого раза.','sharm_who']
  ]},
 {k:'hainan',n:'Хайнань',acc:'Хайнань',c:'Китай · тропический остров',
  chips:['Море 29°','До аэропорта 30 км','Пляж белый песок'],
  tabs:[
   ['Море','Южно-Китайское море в бухте Ялунвань — 29 градусов и вода цвета бутылочного стекла. Полоса белого песка тянется на семь километров, и даже в сезон на ней есть куда уйти от людей.','hainan_sea'],
   ['Город','Санья — это пальмовые проспекты, круглосуточные рынки с фруктами, которых вы не пробовали, и огромный парк Наньшань со статуей Гуаньинь, стоящей прямо в море.','hainan_city'],
   ['Вечер','Вечером остров пахнет франжипани и уличной едой. Набережная Дадунхай светится неоном, а через дорогу — тихие переулки с чайными, где никто никуда не спешит.','hainan_eve'],
   ['Для кого','Тем, кто уже был в Турции и Египте и хочет по-настоящему далеко. Тропики, другая культура, другая еда — и при этом отель, трансфер и виза одним пакетом.','hainan_who']
  ]},
 {k:'avatar',n:'Горы Аватара',acc:'Горы Аватара',c:'Китай · экскурсионный тур',
  chips:['11 дней','Русский гид','Группа до 20 человек'],
  tabs:[
   ['Горы','Чжанцзяцзе — тысячи каменных столбов, вырастающих из тумана. Именно отсюда взяты парящие скалы «Аватара». Со стеклянной смотровой площадки видно, как облака идут ниже ваших ног.','avatar_mtn'],
   ['Города','Чунцин — город-муравейник на слиянии двух рек, где дороги идут сквозь жилые дома, а вечером набережная Хунъядун светится как декорация. Рядом — древний Фэнхуан на сваях над водой.','avatar_city'],
   ['Вечер','Вечера в этом туре — про еду. Сычуаньский хого, уличный рынок Цзефанбэй, чай на террасе с видом на реку. Гид переводит меню и говорит, что заказывать, а что точно нет.','avatar_eve'],
   ['Для кого','Тем, кому пляж уже не интересен. Это поездка, из которой привозят не загар, а фотографии, которым не верят. Нужна нормальная физическая форма: много ходьбы и подъёмов.','avatar_who']
  ]}
];

var RESORTS=RESORTS_DATA;
var curCity='mrv', curResort=0, curTab=0, curDate=0;

function curDir(){ var c=DATA[curCity], k=RESORTS[curResort].k;
  for(var i=0;i<c.dirs.length;i++) if(c.dirs[i].art===k) return c.dirs[i];
  return null; }
function resortByKey(k){ for(var i=0;i<RESORTS.length;i++) if(RESORTS[i].k===k) return i; return 0; }
function money(v){ return v+' ₽'; }

/* --- step 1: destination cards --- */
function dealCard(d,i){
  return '<article class="deal" onclick="openResort(\''+d.art+'\')"><div class="deal-art"><img class="mini" alt="" src="'+IMAGES[d.art]+'">'+
   '<span class="badge'+(d.bg==='mint'?' b-mint':'')+'">'+d.badge+'</span>'+
   '<span class="rating"><b class="num">'+d.r+'</b><span>'+d.rn+' отзывов</span></span>'+
   '<div class="deal-title"><h3>'+d.t+'</h3><p>'+d.c+'</p></div></div>'+
   '<div class="deal-body"><div class="chips">'+d.meta.map(function(m){return '<span class="chip">'+m+'</span>'}).join('')+
   (d.left?'<span class="chip left">'+d.left+'</span>':'')+'</div>'+
   '<div class="deal-foot"><div>'+(d.old?'<div class="price-old num">'+d.old+' ₽</div>':'')+
   '<div class="price num">'+d.p+' ₽</div><div class="price-note">за двоих · бронь от 3 000 ₽</div></div>'+
   '<button class="btn btn-ember btn-s" type="button">Выбрать даты →</button></div></div></article>';
}

function setCity(k){
  if(window.IZI){ var _c=DATA[k]; IZI.ctx.from=k; IZI.ctx.fromName=_c.from; iziStep('city'); track('city','Город вылета',_c.from); }
  curCity=k;
  var c=DATA[k];
  document.getElementById('fFrom').value=k;
  document.getElementById('city-name').textContent=c.name;
  document.getElementById('city-note').textContent=c.note;
  document.getElementById('fromLabel').textContent=c.from;
  document.getElementById('ssFrom').textContent=c.from;
  document.getElementById('fleetLine').textContent=c.fleet;
  document.getElementById('deals').innerHTML=c.dirs.map(dealCard).join('');
  document.getElementById('fTo').innerHTML=c.dirs.map(function(d){
    return '<option value="'+d.art+'">'+d.t+'</option>';}).join('');
  setModel(document.getElementById('heroImg'),c.dirs[0].art);
  openResort(c.dirs[0].art,true);
}
function pickFromSearch(){ openResort(document.getElementById('fTo').value); }

/* --- step 2: resort detail --- */
function openResort(key,silent){
  curResort=resortByKey(key); curTab=0; curDate=0;
  var r=RESORTS[curResort], c=DATA[curCity];
  var dir=null; for(var i=0;i<c.dirs.length;i++) if(c.dirs[i].art===key) dir=c.dirs[i];
  stageCur=null; setStageArt(key);
  setModel(document.getElementById('heroImg'),key);
  document.getElementById('fTo').value=key;
  document.getElementById('stName').textContent=r.n;
  document.getElementById('stName2').textContent=r.n;
  document.getElementById('stSub').textContent=r.c;
  document.getElementById('toLabel').textContent=r.n;
  document.getElementById('ssTo').textContent=r.n;
  document.getElementById('chip1').innerHTML='<b>'+r.chips[0]+'</b>';
  document.getElementById('chip2').innerHTML=r.chips[1];
  document.getElementById('chip3').innerHTML=r.chips[2];
  var exc=!!(dir&&dir.excursion);
  document.getElementById('chip4').innerHTML=exc? dir.chip : (dir? ('В пути '+dir.meta[1]+' · '+dir.meta[0]) : '');
  document.getElementById('heroTitle').textContent = exc? dir.heroT : 'Сразу к морю';
  document.getElementById('heroDesc').textContent  = exc? dir.heroD :
    'Прямые рейсы из Минеральных Вод, Краснодара и Саранска. Без стыковок в Москве и без ночи в аэропорту.';
  document.getElementById('resortLede').textContent = exc?
    'Готовый маршрут с фиксированной датой вылета: перелёт, отели, переезды и гид уже собраны в одну цену.' :
    'Что это за место, когда лететь дешевле и сколько это стоит именно из вашего города.';
  document.getElementById('calTitle').textContent = exc? 'Ближайшая группа' : 'Когда лететь дешевле';
  document.getElementById('cal-city').textContent = exc?
    (c.from+' → Чунцин · за двоих, 11 дней') : (c.from+' → '+r.n+' · за двоих, 7 ночей');
  document.getElementById('rCta').textContent = exc? 'Пусть подберут за меня' : 'Пусть подберут за меня';
  document.getElementById('rBook').textContent = exc? 'Записаться в группу — 3 000 ₽' : 'Забронировать за 3 000 ₽';
  if(window.IZI){
    IZI.ctx.to=key; IZI.ctx.toName=r.n;
    if(IZI.ctx.resorts.indexOf(r.n)<0) IZI.ctx.resorts.push(r.n);
    iziStep('dest'); track('destination','Открыл направление',r.n); leadCtxRender();
  }
  renderTabs(); renderCal(); setRoute(curRoute);
  if(!silent){ var el=document.getElementById('resort'); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); }
}
function renderTabs(){
  var r=RESORTS[curResort];
  document.getElementById('rtabs').innerHTML=r.tabs.map(function(t,i){
    return '<button type="button" aria-pressed="'+(i===curTab)+'" onclick="setTab('+i+')">'+t[0]+'</button>';}).join('');
  var el=document.getElementById('rtext');
  el.classList.add('fade');
  setTimeout(function(){el.textContent=r.tabs[curTab][1];el.classList.remove('fade');},170);
}
function setTab(i){
  curTab=i; renderTabs();
  if(window.IZI){ var _t=RESORTS[curResort].tabs[i][0];
    if(IZI.ctx.tabs.indexOf(_t)<0) IZI.ctx.tabs.push(_t);
    iziStep('detail'); track('tab','Вкладка курорта',RESORTS[curResort].n+' · '+_t); }
  var r=RESORTS[curResort], t=r.tabs[i];
  setStageArt((t[2]&&IMAGES[t[2]]) ? t[2] : r.k);
}

function renderCal(){
  var c=DATA[curCity], dir=curDir();
  if(dir&&dir.excursion){
    document.getElementById('cal').innerHTML=
      '<div class="groupcard">'+
      '<div class="gc"><span>Вылет</span><b class="num">'+dir.depDate+'</b></div>'+
      '<div class="gc"><span>Длительность</span><b class="num">'+dir.days+'</b></div>'+
      '<div class="gc"><span>Осталось</span><b class="num">'+dir.seats+'</b></div>'+
      '<div class="gc gc-p"><span>Цена за двоих</span><b class="num">'+dir.p+' ₽</b></div>'+
      '</div>';
    document.getElementById('calPick').textContent=dir.depDate+' · '+dir.days;
    document.getElementById('rPrice').textContent=dir.p+' ₽';
    document.getElementById('ssWhen').textContent=dir.depDate;
    var mb2=document.getElementById('mbPrice');
    if(mb2){mb2.textContent=dir.p+' ₽'; document.getElementById('mbSub').textContent='Горы Аватара · за двоих';}
    return;
  }
  document.getElementById('cal').innerHTML=c.cals.map(function(d,i){
    return '<button class="day'+(i===curDate?' sel':'')+(d[2]?' best':'')+'" type="button" onclick="setDate('+i+')">'+
      '<span class="d">'+d[0]+'</span><span class="p num">'+d[1]+' ₽</span>'+
      (d[2]?'<span class="tagbest">дешевле всего</span>':'')+'</button>';}).join('');
  var sel=c.cals[curDate];
  document.getElementById('calPick').textContent=sel[0]+' · '+sel[1]+' ₽';
  document.getElementById('rPrice').textContent=sel[1]+' ₽';
  document.getElementById('ssWhen').textContent=sel[0].replace(/^[а-я]{2}, /,'');
  var mb=document.getElementById('mbPrice'); if(mb){mb.textContent=sel[1]+' ₽';
    document.getElementById('mbSub').textContent=RESORTS[curResort].n+' · за двоих';}
}
function setDate(i){ curDate=i; renderCal();
  if(window.IZI){ var _d=DATA[curCity].cals[i];
    IZI.ctx.date=_d[0]; IZI.ctx.price=_d[1]+' ₽'; IZI.ctx.calendarUsed=true;
    iziStep('date'); track('date','Выбрал дату',_d[0]+' · '+_d[1]+' ₽'); leadCtxRender(); }
}

/* --- step 3: route --- */

/* ---------- route ---------- */
var ROUTES={
 direct:{path:'pDirect',
  stats:function(d){return [['В пути',(d&&d.meta?d.meta[1]:'3 ч 15 мин'),'good'],
                            ['Пересадок','0','good'],
                            ['За двоих',(d?d.p:'130 705')+' ₽','good'],
                            ['На пляже','в тот же день','good']];}},
 moscow:{path:'pMoscow',
  stats:function(){return [['В пути','от 14 часов','bad'],
                           ['Пересадок','1, со сменой аэропорта','bad'],
                           ['За двоих','дороже на 20–30 %','bad'],
                           ['На пляже','на следующий день','bad']];}}
};
var curRoute='direct',planeT=0;
function setRoute(k){
  curRoute=k;
  document.querySelectorAll('.routetabs button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.r===k))});
  document.getElementById('pDirect').style.opacity=k==='direct'?'.95':'.12';
  document.getElementById('pMoscow').style.opacity=k==='moscow'?'.95':'0';
  document.getElementById('stopDot').style.opacity=k==='moscow'?'1':'0';
  var r=ROUTES[k], st=r.stats(curDir());
  document.getElementById('rstats').innerHTML=st.map(function(s){
    return '<div class="rs '+s[2]+'"><span>'+s[0]+'</span><b class="num">'+s[1]+'</b></div>';}).join('');
  var nt=document.getElementById('rtNote');
  if(nt) nt.textContent = k==='direct'
    ? 'Время в пути и цена — по выбранному направлению и городу вылета.'
    : 'Оценка самостоятельного перелёта через Москву по типичным стыковкам: это ориентир для сравнения, а не предложение.';
  planeT=0;
  if(window.IZI && k==='moscow'){ IZI.ctx.compared=true; iziStep('detail'); track('compare','Сравнил с перелётом через Москву'); }
}
function animPlane(){
  var p=document.getElementById(ROUTES[curRoute].path), g=document.getElementById('plane'),
      tr=document.getElementById('pTrail');
  if(p&&g&&p.getTotalLength){
    var L=p.getTotalLength();
    planeT=(planeT+(curRoute==='direct'?0.0040:0.0022))%1.14;
    var t=Math.min(planeT,1), pt=p.getPointAtLength(L*t), pt2=p.getPointAtLength(Math.min(L,L*t+2));
    var ang=Math.atan2(pt2.y-pt.y,pt2.x-pt.x)*180/Math.PI;
    g.setAttribute('transform','translate('+pt.x+','+pt.y+') rotate('+ang+')');
    g.style.opacity=planeT>1?'0':'1';
    if(tr){
      if(tr.getAttribute('d')!==p.getAttribute('d')){
        tr.setAttribute('d',p.getAttribute('d'));
        tr.setAttribute('stroke-dasharray',p.getTotalLength());
      }
      tr.setAttribute('stroke-dashoffset', L*(1-t));
      tr.style.opacity = planeT>1 ? String(Math.max(0,1-(planeT-1)*8)) : '.85';
    }
  }
  requestAnimationFrame(animPlane);
}

/* ---------- cities ---------- */
var DATA={
 mrv:{name:'Минеральных Вод',from:'Минеральные Воды',fleet:'Летите на Boeing 777-200ER или Airbus A321neo',
  note:'Собственные чартеры Red Wings и рейсы на базе GDS. Цена — за двоих, с перелётом, багажом, трансфером и страховкой.',
  cals:[['вт, 2 сен','128 400',0],['чт, 4 сен','134 900',0],['сб, 6 сен','130 705',0],['вт, 9 сен','119 200',1],['чт, 11 сен','124 600',0],['сб, 13 сен','132 100',0],['вт, 16 сен','121 800',0]],
  dirs:[
   {t:'Бодрум',c:'Турция · Эгейское побережье',art:'bodrum',badge:'Хит сезона',meta:['вт · сб','3 ч 15 мин','7 и 10 ночей'],left:'Осталось 14 мест',r:'4,7',rn:'842',p:'130 705',old:'148 900'},
   {t:'Анталия',c:'Турция · Средиземноморье',art:'antalya',badge:'−18%',bg:'mint',meta:['ср · вс','3 ч 05 мин','7–14 ночей'],left:'Осталось 9 мест',r:'4,6',rn:'1 130',p:'121 400',old:'148 100'},
   {t:'Шарм-эль-Шейх',c:'Египет · Красное море',art:'sharm',badge:'Круглый год',meta:['пн · пт','3 ч 40 мин','всё включено'],left:'',r:'4,8',rn:'617',p:'138 900',old:''},
   {t:'Хайнань',c:'Китай · тропический остров',art:'hainan',badge:'Рейс GDS',meta:['сб','с пересадкой','10–14 ночей'],left:'',r:'4,5',rn:'208',p:'289 000',old:''}
 ]},
 krr:{name:'Краснодара',from:'Краснодар',fleet:'Летите на Airbus A321neo или Boeing 777-200ER',
  note:'Самая широкая программа сезона: Эгейское побережье, Средиземноморье и китайское направление.',
  cals:[['пн, 1 сен','124 900',0],['чт, 4 сен','127 300',0],['пн, 8 сен','115 600',1],['чт, 11 сен','122 400',0],['пн, 15 сен','118 900',0],['чт, 18 сен','126 200',0],['пн, 22 сен','120 100',0]],
  dirs:[
   {t:'Анталия',c:'Турция · Средиземноморье',art:'antalya',badge:'Лучшая цена',bg:'mint',meta:['вт · сб','2 ч 55 мин','7–14 ночей'],left:'Осталось 6 мест',r:'4,6',rn:'1 130',p:'116 800',old:'139 400'},
   {t:'Бодрум',c:'Турция · Эгейское побережье',art:'bodrum',badge:'Хит сезона',meta:['пн · чт','3 ч 05 мин','7 и 10 ночей'],left:'Осталось 21 место',r:'4,7',rn:'842',p:'127 300',old:'145 000'},
   {t:'Чунцин и горы Аватара',c:'Китай · экскурсионный тур',art:'avatar',badge:'1 сентября',meta:['1 сентября','11 дней','с русским гидом'],left:'Осталось 4 места',r:'4,9',rn:'96',p:'300 000',old:'',
    excursion:true,depDate:'1 сентября',days:'11 дней',seats:'4 места',
    chip:'Маршрут: Чунцин — Чжанцзяцзе — Фэнхуан',
    heroT:'Не только море',
    heroD:'Авторский тур по Китаю: небоскрёбы Чунцина, парящие скалы Чжанцзяцзе и древний Фэнхуан. Группа с русским гидом, вылет 1 сентября.'},
   {t:'Хайнань',c:'Китай · тропический остров',art:'hainan',badge:'Рейс GDS',meta:['сб','с пересадкой','10–14 ночей'],left:'',r:'4,5',rn:'208',p:'284 500',old:''}
 ]},
 skx:{name:'Саранска',from:'Саранск',fleet:'Летите на Airbus A321neo или Superjet 100',
  note:'Единственная прямая программа к морю из Саранска — без стыковок и ночёвок в Москве.',
  cals:[['вт, 2 сен','126 700',0],['сб, 6 сен','124 900',0],['вт, 9 сен','118 400',1],['сб, 13 сен','129 300',0],['вт, 16 сен','122 600',0],['сб, 20 сен','127 800',0]],
  dirs:[
   {t:'Анталия',c:'Турция · Средиземноморье',art:'antalya',badge:'Дважды в неделю',meta:['вт · сб','3 ч 40 мин','7–14 ночей'],left:'Осталось 11 мест',r:'4,6',rn:'1 130',p:'124 900',old:'141 200'},
   {t:'Бодрум',c:'Турция · Эгейское побережье',art:'bodrum',badge:'Новинка сезона',bg:'mint',meta:['чт','3 ч 50 мин','7 и 10 ночей'],left:'Осталось 8 мест',r:'4,7',rn:'842',p:'133 200',old:''}
 ]}
};
var HOTELS=[
 {n:'Scala Nuova Beach Hotel',s:4,loc:'Кушадасы · 30 м до моря',d:'Реновация 2025, собственный песчано-галечный пляж, открытый бассейн.',art:'bodrum',r:'4,6',rn:'318',p:'158 243',meal:'всё включено',urg:'Последние 3 номера'},
 {n:'Bodrum Beach Resort',s:4,loc:'Гюмбет, Бодрум · 100 м до моря',d:'18 000 м² ухоженной территории, реновация 2024, кафе и магазины рядом.',art:'antalya',r:'4,4',rn:'512',p:'167 011',meal:'завтрак и ужин',urg:''},
 {n:'Siesta Beach Apart',s:3,loc:'Гюмбет, Бодрум · 250 м до моря',d:'Апарт-отель рядом с песчаным пляжем, до ворот Мундус около километра.',art:'hainan',r:'4,0',rn:'164',p:'139 693',meal:'без питания',urg:'Смотрят 12 человек'}
];
function hotelCard(h){
  return '<article class="hotel"><div class="hotel-art"><img class="mini" alt="" src="'+IMAGES[h.art]+'"></div>'+
   '<div><h3>'+h.n+' '+h.s+'* <span class="stars">'+'★'.repeat(h.s)+'</span></h3>'+
   '<p class="loc">'+h.loc+'</p><p class="desc">'+h.d+'</p>'+
   '<div class="chips" style="margin-top:12px"><span class="chip">Рейтинг '+h.r+' · '+h.rn+' отзывов</span><span class="chip">'+h.meal+'</span>'+
   (h.urg?'<span class="chip left">'+h.urg+'</span>':'')+'</div></div>'+
   '<div class="hotel-buy"><div><div class="price num">'+h.p+' ₽</div><div class="price-note">за двоих, 7 ночей</div></div>'+
   '<button class="btn btn-ember btn-s" type="button">Забронировать</button>'+
   '<div class="price-note">Бронь от 3 000 ₽</div></div></article>';
}

/* ---------- seat map ---------- */
var FLEET={
 b777:{
  tab:'Boeing 777-200ER', sub:'Китай',
  name:'Boeing 777-200ER',
  img:'ac777', spec:'Широкофюзеляжный · два прохода · 427 кресел в трёх салонах',
  lede:'Широкофюзеляжный борт китайской программы: три салона, два прохода, в экономе 3-4-3. Наведите на кресло — покажем ряд, место и что в нём есть. Кнопками ниже подсветите то, что вам важно.',
  letters:['A','B','C','|','D','E','F','G','|','H','J','K'],
  rows:51,
  totals:[['Бизнес','28','biz','ряды 1–7 · 1-2-1'],
          ['Комфорт','24','cmf','ряды 8–10 · 2-4-2'],
          ['Эконом','375','eco','ряды 11–51 · 3-4-3']],
  cabins:[{k:'biz',n:'Бизнес',from:1,to:7,seats:'ADGK'},
          {k:'cmf',n:'Комфорт',from:8,to:10,seats:'ACDEFGHK'},
          {k:'eco',n:'Эконом',from:11,to:51,seats:'ABCDEFGHJK'}],
  tail:[{from:48,to:49,seats:'ACDEFGHK'},{from:50,to:51,seats:'DEFG'}],
  feat:{
   sp:{n:'Места Space+',d:'больше пространства для ног',per:{23:'ABCHJK',37:'ABCHJK'}},
   bs:{n:'Крепления для люлек',d:'для путешествия с младенцем',per:{1:'AK',8:'ACDEFGHK',11:'ABCDEFGHJK',22:'DEFG',38:'DEFG'}},
   ar:{n:'Мобильные подлокотники',d:'поднимаются между креслами',
       per:{21:'DEFG',23:'DEFG',36:'DEFG',38:'ABCHJK','1-7':'ADGK','8-10':'CDGH','12-20':'ABCDEFGHJK',
            '24-35':'ABCDEFGHJK','39-47':'ABCDEFGHJK','48-49':'ACDEFGHK','50-51':'DEFG'}}
  },
  note:'На схеме прорисована полная сетка рядов — 446 позиций. В реальной компоновке 427 кресел: 28 в бизнесе, 24 в комфорте и 375 в экономе, часть мест снята у аварийных выходов и технических зон. Точная компоновка на вашу дату подтверждается при бронировании. Снимок борта — макетный, в нейтральной ливрее; в рабочей версии сюда встанет фотография вашего самолёта.'
 },
 a321:{
  tab:'Airbus A321neo', sub:'Турция и Египет',
  name:'Airbus A321neo',
  img:'ac321', spec:'Узкофюзеляжный · один проход · 234 кресла, единый эконом',
  lede:'Узкофюзеляжный борт турецкой и египетской программы: один салон, один проход, схема 3-3 по всей длине. Наведите на кресло — покажем ряд, место и что в нём есть.',
  letters:['A','B','C','|','D','E','F'],
  rows:39,
  totals:[['Эконом','234','eco','единый класс · 3-3'],
          ['Больше места','30','sp','ряд 1 и ряды у аварийных выходов'],
          ['У иллюминатора','78','wn','места A и F в каждом ряду']],
  cabins:[{k:'eco',n:'Эконом',from:1,to:39,seats:'ABCDEF'}],
  tail:[],
  feat:{
   sp:{n:'Больше места для ног',d:'первый ряд и ряды у аварийных выходов — шаг до 91 см',
       per:{1:'ABCDEF',12:'ABCDEF',13:'ABCDEF',26:'ABCDEF',27:'ABCDEF'}},
   wn:{n:'Места у иллюминатора',d:'кресла A и F, вид в окно',per:{'1-39':'AF'}},
   nr:{n:'Спинка не откидывается',d:'ряды перед аварийным выходом и последний ряд',
       per:{11:'ABCDEF',25:'ABCDEF',39:'ABCDEF'}},
   bs:{n:'Крепления для люлек',d:'первый ряд, у перегородки',per:{1:'ACDF'}}
  },
  note:'Схема построена по типовой компоновке A321neo в конфигурации «весь эконом»: 234 кресла, 3-3, шаг 76 см и до 91 см в рядах 1, 12–13 и 26–27. У конкретного борта кухни и туалеты могут смещаться на ряд-другой — точная схема подтверждается при бронировании.'
 },
 ssj:{
  tab:'Superjet 100', sub:'Ближние рейсы',
  name:'Sukhoi Superjet 100',
  img:'acssj', spec:'Региональный · один проход · 100 кресел, единый эконом',
  lede:'Региональный борт на коротких плечах: один салон, один проход, схема 2-3 — в каждом ряду всего пять кресел, поэтому «среднее» место здесь только одно из пяти.',
  letters:['A','C','|','D','E','F'],
  rows:20,
  totals:[['Эконом','100','eco','единый класс · 2-3'],
          ['Больше места','15','sp','ряд 1 и ряды у аварийного выхода'],
          ['У иллюминатора','40','wn','места A и F в каждом ряду']],
  cabins:[{k:'eco',n:'Эконом',from:1,to:20,seats:'ACDEF'}],
  tail:[],
  feat:{
   sp:{n:'Больше места для ног',d:'первый ряд и ряды у аварийного выхода над крылом',
       per:{1:'ACDEF',11:'ACDEF',12:'ACDEF'}},
   wn:{n:'Места у иллюминатора',d:'кресла A и F, вид в окно',per:{'1-20':'AF'}},
   nr:{n:'Спинка не откидывается',d:'ряд перед аварийным выходом и последний ряд',
       per:{10:'ACDEF',20:'ACDEF'}},
   bs:{n:'Крепления для люлек',d:'первый ряд, у перегородки',per:{1:'ACDF'}}
  },
  note:'Схема построена по типовой компоновке Superjet 100 в конфигурации «весь эконом»: 100 кресел, 20 рядов по схеме 2-3, шаг 78 см. Главное отличие от узкофюзеляжных собратьев — в ряду пять кресел, а не шесть: среднее место здесь одно, а не два. Точная компоновка и расположение аварийных выходов у конкретного борта подтверждаются при бронировании.'
 }
};
var smType='b777', smFilter=null;

function smFeatSeats(f,row){
  var m=f.per;
  for(var k in m){ if(!Object.prototype.hasOwnProperty.call(m,k)) continue;
    if(k.indexOf('-')>0){ var p=k.split('-'); if(row>=+p[0]&&row<=+p[1]) return m[k]; }
    else if(+k===row) return m[k];
  }
  return '';
}
function smSeatsFor(AC,row){
  for(var i=0;i<AC.tail.length;i++){var t=AC.tail[i]; if(row>=t.from&&row<=t.to) return t.seats;}
  for(var j=0;j<AC.cabins.length;j++){var c=AC.cabins[j]; if(row>=c.from&&row<=c.to) return c.seats;}
  return '';
}
function smCabinFor(AC,row){
  for(var j=0;j<AC.cabins.length;j++){var c=AC.cabins[j]; if(row>=c.from&&row<=c.to) return c;}
  return AC.cabins[AC.cabins.length-1];
}

function setPlane(k){
  smType=k; smFilter=null;
  if(window.IZI){ IZI.ctx.seatmap++; if(IZI.ctx.planes.indexOf(FLEET[k].name)<0) IZI.ctx.planes.push(FLEET[k].name);
    iziStep('detail'); track('seatmap','Схема салона',FLEET[k].name); }
  document.getElementById('smTypes').querySelectorAll('button').forEach(function(b){
    b.setAttribute('aria-pressed',String(b.dataset.t===k));});
  buildSeatMap();
}

function buildSeatMap(){
  var AC=FLEET[smType], keys=Object.keys(AC.feat);

  var types=document.getElementById('smTypes');
  if(!types.childNodes.length){
    types.innerHTML=Object.keys(FLEET).map(function(k){
      return '<button type="button" data-t="'+k+'" aria-pressed="'+(k===smType)+'" onclick="setPlane(\''+k+'\')">'+
             FLEET[k].tab+' <em>· '+FLEET[k].sub+'</em></button>';}).join('');
  }

  var shot=document.getElementById('acShot');
  if(AC.img && window.IMAGES && IMAGES[AC.img]){
    var ai=document.getElementById('acImg');
    ai.src=IMAGES[AC.img]; ai.alt='Внешний вид '+AC.name;
    document.getElementById('acName').textContent=AC.name;
    document.getElementById('acSpec').textContent=AC.spec;
    shot.hidden=false;
  } else { shot.hidden=true; }

  document.getElementById('smName').textContent=AC.name;
  document.getElementById('smLede').textContent=AC.lede;
  document.getElementById('smNote').textContent=AC.note;
  document.getElementById('smGrid').setAttribute('aria-label','Схема расположения кресел '+AC.name);

  document.getElementById('smTotals').innerHTML=AC.totals.map(function(t){
    return '<div class="smt '+t[2]+'"><i class="smsw"></i><b class="num">'+t[1]+'</b><span>'+t[0]+'</span><em>'+t[3]+'</em></div>';}).join('');

  document.getElementById('smLegend').innerHTML=
    '<button type="button" data-f="" aria-pressed="true" onclick="smSet(\'\')"><span class="sw eco"></span>Все места</button>'+
    keys.map(function(k){
      return '<button type="button" data-f="'+k+'" aria-pressed="false" onclick="smSet(\''+k+'\')">'+
             '<span class="sw '+k+'"></span>'+AC.feat[k].n+'</button>';}).join('');

  var grid=document.getElementById('smGrid'), rows=document.getElementById('smRows'), bands=document.getElementById('smBands');
  var gh='', rh='';
  for(var row=1;row<=AC.rows;row++){
    var seats=smSeatsFor(AC,row), cab=smCabinFor(AC,row);
    gh+='<div class="smcol">';
    for(var i=0;i<AC.letters.length;i++){
      var L=AC.letters[i];
      if(L==='|'){ gh+='<div class="smcell aisle"></div>'; continue; }
      if(seats.indexOf(L)<0){ gh+='<div class="smcell"></div>'; continue; }
      var f=[];
      for(var q=0;q<keys.length;q++){ if(smFeatSeats(AC.feat[keys[q]],row).indexOf(L)>=0) f.push(keys[q]); }
      gh+='<div class="smcell smseat '+cab.k+'" data-r="'+row+'" data-l="'+L+'" data-c="'+cab.n+'" data-f="'+f.join(' ')+'"></div>';
    }
    gh+='</div>';
    rh+='<div class="smrn">'+((row===1||row%5===0||row===AC.rows)?row:'')+'</div>';
  }
  grid.innerHTML=gh; rows.innerHTML=rh;
  grid.classList.remove('dim');
  bands.innerHTML=AC.cabins.map(function(c){
    var w=(c.to-c.from+1)*14;
    return '<div class="smband '+c.k+'" style="width:'+(w-2)+'px" title="'+c.n+' · ряды '+c.from+'–'+c.to+'"></div>';}).join('');

  var tip=document.getElementById('smTip');
  tip.textContent='Наведите на кресло';
  if(!grid.dataset.bound){
    grid.dataset.bound='1';
    grid.addEventListener('mouseover',function(e){
      var t=e.target; if(!t.classList||!t.classList.contains('smseat')) return;
      var A=FLEET[smType];
      var f=(t.dataset.f||'').split(' ').filter(Boolean).map(function(k){return A.feat[k].n;});
      tip.innerHTML='<b>Ряд '+t.dataset.r+', место '+t.dataset.l+'</b> · '+t.dataset.c+(f.length? ' · '+f.join(' · ') : '');
    });
    grid.addEventListener('mouseleave',function(){
      var A=FLEET[smType];
      tip.textContent=smFilter? A.feat[smFilter].n+' — '+A.feat[smFilter].d : 'Наведите на кресло';
    });
  }
}
function smSet(f){
  var AC=FLEET[smType];
  smFilter=f||null;
  document.querySelectorAll('.smlegend button').forEach(function(b){b.setAttribute('aria-pressed',String((b.dataset.f||'')===(f||'')));});
  var grid=document.getElementById('smGrid');
  grid.classList.toggle('dim',!!f);
  grid.querySelectorAll('.smseat').forEach(function(s){
    s.className=s.className.replace(/\s*\bon\b|\s*\bf-[a-z]+\b/g,'');
    if(f && (s.dataset.f||'').split(' ').indexOf(f)>=0){ s.classList.add('on','f-'+f); }
  });
  document.getElementById('smTip').textContent = f? AC.feat[f].n+' — '+AC.feat[f].d : 'Наведите на кресло';
}


/* ---------- объёмный знак ---------- */
/* Контуры сняты с фирменного логотипа izi.tours (izi.png) и переведены в вектор */
var MK_SIL="M27.71 0.00C25.33 -0.41 21.56 -0.07 20.24 0.00C18.93 0.07 20.33 0.25 19.80 0.39C19.28 0.53 18.07 0.55 17.07 0.83C16.07 1.11 15.02 1.44 13.80 2.05C12.59 2.66 11.11 3.46 9.76 4.49C8.40 5.51 6.81 6.90 5.66 8.20C4.50 9.49 3.56 10.98 2.83 12.24C2.10 13.50 1.67 14.50 1.27 15.76C0.86 17.02 0.60 19.07 0.39 19.80C0.18 20.54 0.07 19.00 0.00 20.20C-0.07 21.39 -0.07 25.78 0.00 26.98C0.07 28.17 0.19 26.59 0.39 27.37C0.59 28.15 0.68 29.88 1.22 31.66C1.76 33.44 2.69 35.94 3.61 38.05C4.53 40.15 4.89 41.21 6.73 44.29C8.57 47.37 12.15 53.00 14.63 56.54C17.12 60.07 20.15 63.71 21.66 65.51C23.16 67.32 23.15 67.17 23.66 67.37C24.17 67.56 23.25 68.42 24.73 66.68C26.21 64.94 29.92 60.59 32.54 56.93C35.15 53.26 38.54 47.89 40.44 44.68C42.34 41.47 43.04 39.67 43.95 37.66C44.86 35.64 45.30 34.74 45.90 32.59C46.50 30.43 47.35 26.89 47.56 24.73C47.77 22.57 47.51 21.37 47.17 19.61C46.83 17.85 45.98 15.49 45.51 14.20C45.04 12.90 45.07 12.98 44.34 11.85C43.61 10.72 42.21 8.64 41.12 7.41C40.03 6.19 38.90 5.32 37.80 4.49C36.71 3.66 36.22 3.19 34.54 2.44C32.85 1.69 30.09 0.41 27.71 0.00Z";
var MK_LO="M27.71 0.00C25.33 -0.41 23.24 -0.75 20.24 0.00C17.25 0.75 12.66 2.45 9.76 4.49C6.85 6.53 4.46 9.63 2.83 12.24C1.20 14.86 0.27 16.96 0.00 20.20C-0.27 23.43 0.10 27.64 1.22 31.66C2.34 35.67 4.50 40.15 6.73 44.29C8.97 48.44 11.81 52.69 14.63 56.54C17.46 60.38 20.67 67.30 23.66 67.37C26.64 67.43 29.74 60.71 32.54 56.93C35.33 53.15 38.21 48.74 40.44 44.68C42.67 40.63 44.72 35.91 45.90 32.59C47.09 29.26 47.63 27.80 47.56 24.73C47.50 21.67 46.59 17.08 45.51 14.20C44.44 11.31 42.95 9.37 41.12 7.41C39.29 5.46 36.77 3.67 34.54 2.44C32.30 1.20 30.09 0.41 27.71 0.00Z";
var MK_DARK="M7.22 36.88C7.28 36.65 7.79 36.61 8.10 36.63C8.41 36.66 8.62 36.96 9.07 37.02C9.53 37.09 9.85 36.82 10.83 37.02C11.80 37.23 13.43 37.57 14.93 38.24C16.42 38.92 18.30 40.01 19.80 41.07C21.31 42.14 23.86 44.00 23.95 44.63C24.04 45.27 21.69 45.04 20.34 44.88C18.99 44.72 17.15 44.14 15.85 43.66C14.55 43.18 13.54 42.60 12.54 42.00C11.53 41.40 10.61 40.72 9.80 40.05C9.00 39.38 8.14 38.53 7.71 38.00C7.28 37.47 7.15 37.11 7.22 36.88ZM3.17 29.51C2.98 28.77 2.48 29.27 3.56 29.22C4.64 29.17 7.70 28.95 9.66 29.22C11.62 29.49 13.50 30.09 15.32 30.83C17.14 31.57 18.38 32.20 20.59 33.66C22.79 35.12 26.22 38.20 28.54 39.61C30.85 41.02 33.96 41.42 34.49 42.10C35.02 42.77 32.73 43.27 31.71 43.66C30.68 44.05 29.39 44.59 28.34 44.44C27.29 44.29 26.58 43.59 25.41 42.78C24.25 41.97 22.79 40.57 21.37 39.56C19.94 38.55 18.71 37.54 16.88 36.73C15.05 35.93 12.28 35.09 10.39 34.73C8.50 34.37 6.46 34.76 5.51 34.59C4.56 34.41 5.07 34.50 4.68 33.66C4.29 32.81 3.36 30.25 3.17 29.51ZM2.34 21.71C2.49 20.86 2.15 21.14 3.17 21.02C4.20 20.91 6.59 20.82 8.49 21.02C10.38 21.23 12.65 21.63 14.54 22.24C16.42 22.85 17.21 23.02 19.80 24.68C22.40 26.34 27.70 30.60 30.10 32.20C32.50 33.79 32.86 33.71 34.20 34.24C35.53 34.78 37.08 35.20 38.10 35.41C39.11 35.63 39.79 35.37 40.29 35.51C40.80 35.65 41.25 35.77 41.12 36.24C40.99 36.72 40.07 37.75 39.51 38.34C38.95 38.93 38.48 39.56 37.76 39.80C37.03 40.05 36.22 40.01 35.17 39.80C34.12 39.60 32.89 39.26 31.46 38.59C30.03 37.91 27.94 36.70 26.59 35.76C25.23 34.81 24.45 33.79 23.32 32.93C22.19 32.07 20.94 31.25 19.80 30.59C18.67 29.92 17.63 29.40 16.49 28.93C15.35 28.46 14.25 28.09 12.98 27.76C11.70 27.42 10.53 27.09 8.83 26.93C7.13 26.76 3.87 26.92 2.78 26.78C1.69 26.64 2.37 26.94 2.29 26.10C2.22 25.25 2.20 22.55 2.34 21.71ZM7.85 6.05C7.21 6.16 6.44 7.23 5.61 8.24C4.78 9.26 3.68 10.66 2.88 12.15C2.07 13.63 1.20 15.89 0.78 17.17C0.37 18.46 0.52 19.34 0.39 19.85C0.26 20.37 0.07 19.07 0.00 20.24C-0.07 21.42 -0.07 25.75 0.00 26.93C0.07 28.11 0.19 26.52 0.39 27.32C0.59 28.11 0.69 29.93 1.22 31.71C1.75 33.48 2.24 35.19 3.56 37.95C4.88 40.72 6.89 44.68 9.12 48.29C11.35 51.90 14.85 56.75 16.93 59.61C19.01 62.47 20.53 64.19 21.61 65.46C22.69 66.74 23.02 66.95 23.41 67.27C23.80 67.59 22.42 69.10 23.95 67.37C25.48 65.63 29.85 60.64 32.59 56.88C35.33 53.11 38.49 48.00 40.39 44.78C42.29 41.56 43.07 39.61 44.00 37.56C44.93 35.51 45.42 34.15 45.95 32.49C46.48 30.83 46.91 29.00 47.17 27.61C47.43 26.22 47.53 24.78 47.51 24.15C47.50 23.51 47.42 23.84 47.07 23.80C46.72 23.77 45.78 23.31 45.41 23.95C45.05 24.59 45.18 26.34 44.88 27.66C44.58 28.98 43.98 30.89 43.61 31.85C43.24 32.82 43.18 33.18 42.68 33.46C42.19 33.75 41.85 33.75 40.63 33.56C39.41 33.37 37.06 32.95 35.37 32.34C33.67 31.73 32.69 31.37 30.49 29.90C28.28 28.44 24.48 25.09 22.15 23.56C19.81 22.03 18.38 21.47 16.49 20.73C14.59 19.99 12.15 19.39 10.78 19.12C9.41 18.85 8.83 19.19 8.24 19.12C7.66 19.06 8.08 18.75 7.27 18.73C6.46 18.72 4.07 19.22 3.37 19.02C2.67 18.83 2.72 18.68 3.07 17.56C3.42 16.44 4.63 13.75 5.46 12.29C6.29 10.84 7.38 9.62 8.05 8.83C8.72 8.04 9.50 8.02 9.46 7.56C9.43 7.10 8.50 5.93 7.85 6.05Z";
var MK_LIGHT="M8.29 5.71C7.54 6.57 9.10 6.91 9.37 7.17C9.63 7.43 9.17 7.67 9.90 7.27C10.63 6.86 12.93 4.24 13.76 4.73C14.59 5.23 14.35 8.64 14.88 10.24C15.41 11.85 15.95 13.02 16.93 14.34C17.90 15.66 19.48 17.17 20.73 18.15C21.98 19.12 23.00 19.65 24.44 20.20C25.88 20.74 27.76 21.28 29.37 21.41C30.97 21.54 32.52 21.33 34.05 20.98C35.58 20.63 36.98 20.20 38.54 19.32C40.10 18.43 42.50 16.13 43.41 15.66C44.33 15.19 43.76 15.85 44.00 16.49C44.24 17.13 44.66 18.35 44.88 19.51C45.10 20.67 44.95 22.76 45.32 23.46C45.68 24.17 46.71 23.76 47.07 23.76C47.44 23.75 47.50 24.11 47.51 23.41C47.53 22.72 47.50 21.08 47.17 19.56C46.85 18.04 46.30 15.98 45.56 14.29C44.82 12.60 43.46 10.55 42.73 9.41C42.00 8.28 42.00 8.29 41.17 7.46C40.34 6.63 39.14 5.41 37.76 4.44C36.37 3.46 34.28 2.28 32.88 1.61C31.47 0.94 30.11 0.64 29.32 0.44C28.52 0.24 28.37 0.46 28.10 0.39C27.83 0.32 29.02 0.07 27.71 0.00C26.40 -0.07 21.55 -0.07 20.24 0.00C18.93 0.07 20.39 0.25 19.85 0.39C19.32 0.53 18.02 0.56 17.02 0.83C16.03 1.10 15.36 1.19 13.90 2.00C12.45 2.81 9.05 4.85 8.29 5.71Z";
var MK_VB='0 0 48 68.3';
var markN=0;
function buildMark(host){
  var u='k'+(markN++), N=14, h='<div class="m3d">';
  var size=host.clientHeight||37, depth=size*0.17;
  for(var i=N;i>=1;i--){
    var t=i/N,
        r=Math.round(1+5*(1-t)), g=Math.round(22+38*(1-t)), bl=Math.round(46+80*(1-t));
    h+='<svg class="m3d-l" viewBox="'+MK_VB+'" style="transform:translateZ(-'+(i*depth/N).toFixed(2)+'px)">'+
       '<path d="'+MK_LO+'" fill="rgb('+r+','+g+','+bl+')"/></svg>';
  }
  h+='<svg class="m3d-f" viewBox="'+MK_VB+'">'+
      '<defs>'+
       '<clipPath id="c'+u+'"><path d="'+MK_SIL+'"/></clipPath>'+
       '<linearGradient id="w'+u+'" x1=".1" y1="0" x2=".8" y2="1">'+
        '<stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#DCEEF8"/></linearGradient>'+
       '<linearGradient id="r'+u+'" x1=".1" y1="0" x2=".85" y2="1">'+
        '<stop offset="0" stop-color="#FFFFFF" stop-opacity=".95"/><stop offset=".45" stop-color="#BFE8FB" stop-opacity=".3"/>'+
        '<stop offset="1" stop-color="#023A6E" stop-opacity=".6"/></linearGradient>'+
       '<linearGradient id="s'+u+'" x1="0" y1="0" x2="1" y2="0">'+
        '<stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".7"/>'+
        '<stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
      '</defs>'+
      '<path d="'+MK_SIL+'" fill="url(#w'+u+')"/>'+
      '<path d="'+MK_LIGHT+'" fill="#00A8E0" fill-rule="evenodd"/>'+
      '<path d="'+MK_DARK+'" fill="#0058B0" fill-rule="evenodd"/>'+
      '<g clip-path="url(#c'+u+')" transform="rotate(16 24 34)">'+
        '<rect y="-24" width="13" height="120" fill="url(#s'+u+')" opacity=".85">'+
          (reduce?'<animate attributeName="x" values="-26;-26" dur="1s"/>':
           '<animate attributeName="x" values="-26;-26;62;62" keyTimes="0;.45;.78;1" dur="7s" repeatCount="indefinite"/>')+
        '</rect>'+
      '</g>'+
      '<path d="'+MK_SIL+'" fill="none" stroke="url(#r'+u+')" stroke-width=".9"/>'+
     '</svg></div>';
  host.innerHTML=h;
}

/* ---------- сбор данных: событийный слой и профиль лида ---------- */
var IZI={
  sid:'', started:Date.now(), events:[], maxScroll:0,
  src:{}, ctx:{from:'',fromName:'',to:'',toName:'',date:'',price:'',pax:'2 взрослых',
       resorts:[], tabs:[], seatmap:0, planes:[], compared:false, calendarUsed:false},
  steps:{visit:0,city:0,dest:0,detail:0,date:0,intent:0,book:0,lead:0},
  lead:{type:'',adults:2,kids:0,deposit:0,email:''}
};
var FUNNEL=[['visit','Зашёл на сайт'],['city','Выбрал город вылета'],['dest','Открыл направление'],
            ['detail','Изучил детали'],['date','Выбрал дату'],['intent','Нажал кнопку действия'],
            ['book','Начал бронирование'],['lead','Заявка создана']];

function iziInit(){
  IZI.sid='S-'+Date.now().toString(36).toUpperCase()+'-'+Math.random().toString(36).slice(2,6).toUpperCase();
  var q=new URLSearchParams(location.search), u={};
  ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(function(k){ if(q.get(k)) u[k]=q.get(k); });
  IZI.src={
    utm:u,
    referrer: document.referrer || '',
    landing: location.pathname,
    device: (window.innerWidth<760?'смартфон':(window.innerWidth<1100?'планшет':'десктоп')),
    screen: window.innerWidth+'×'+window.innerHeight,
    firstVisit: new Date().toLocaleString('ru-RU')
  };
  IZI.steps.visit=Date.now();
  track('visit','Открыл сайт', IZI.src.device);
}

function track(type,label,value){
  var t=Math.round((Date.now()-IZI.started)/1000);
  IZI.events.push({t:t,type:type,label:label,value:value||''});
  if(IZI.events.length>200) IZI.events.shift();
  /* готовность к Яндекс.Метрике / GTM — в рабочей версии здесь ym(id,'reachGoal',type) */
  window.dataLayer=window.dataLayer||[];
  window.dataLayer.push({event:'izi_'+type,label:label,value:value||'',sid:IZI.sid});
  crmRender();
}

function iziStep(k){ if(!IZI.steps[k]) IZI.steps[k]=Date.now(); }

function iziPacket(){
  var p={
    lead:{
      type: IZI.lead.type || 'callback',
      name: IZI.lead.name || (document.getElementById('leadName')||{}).value || '',
      phone:IZI.lead.phone || (document.getElementById('leadPhone')||{}).value || '',
      email:IZI.lead.email || '',
      adults:IZI.lead.adults, kids:IZI.lead.kids,
      deposit:IZI.lead.deposit || 0
    },
    choice:{
      from:IZI.ctx.fromName, to:IZI.ctx.toName, date:IZI.ctx.date,
      price:IZI.ctx.price, pax:IZI.ctx.pax
    },
    behaviour:{
      resortsViewed:IZI.ctx.resorts.slice(),
      tabsViewed:IZI.ctx.tabs.slice(),
      seatmapOpened:IZI.ctx.seatmap,
      planesViewed:IZI.ctx.planes.slice(),
      routeCompared:IZI.ctx.compared,
      calendarUsed:IZI.ctx.calendarUsed,
      secondsOnSite:Math.round((Date.now()-IZI.started)/1000),
      scrollDepth:IZI.maxScroll+'%',
      events:IZI.events.length
    },
    source:IZI.src,
    meta:{sessionId:IZI.sid, ym_client_id:'(подставляется Метрикой)', page:location.href}
  };
  return p;
}


/* ---------- бронирование за 3 000 ₽ ---------- */
var BK={step:0, adults:2, kids:0, done:false, src:'', name:'', phone:'', email:''};
var BK_DEPOSIT=3000;

function bkIsGroup(){ var d=(typeof curDir==='function')?curDir():null; return !!(d&&d.excursion); }
function bkPriceLine(){
  var d=IZI.ctx;
  if(BK.adults===2 && BK.kids===0) return d.price||'уточняется';
  return 'пересчитается при подтверждении';
}
function bkOpen(src){
  BK.step=1; BK.done=false; BK.src=src||'';
  var w=document.getElementById('bkWrap'); w.hidden=false;
  document.body.style.overflow='hidden';
  iziStep('intent'); iziStep('book');
  track('book_open','Открыл бронирование', (IZI.ctx.toName||'—')+' · '+(IZI.ctx.date||'дата не выбрана'));
  bkRender();
}
function bkClose(){
  var w=document.getElementById('bkWrap');
  if(!BK.done && BK.step) track('book_abandon','Закрыл бронирование','шаг '+BK.step+' из 3');
  w.hidden=true; document.body.style.overflow='';
  BK.step=0; crmRender();
}
function bkPax(kind,delta){
  if(kind==='a') BK.adults=Math.max(1,Math.min(4,BK.adults+delta));
  else BK.kids=Math.max(0,Math.min(3,BK.kids+delta));
  IZI.lead.adults=BK.adults; IZI.lead.kids=BK.kids;
  IZI.ctx.pax=BK.adults+' взрослых'+(BK.kids?' + '+BK.kids+' детей':'');
  track('book_pax','Изменил состав', BK.adults+' взр. / '+BK.kids+' реб.');
  bkRender(); leadCtxRender();
}
function bkNext(){
  if(BK.step===2){
    var n=document.getElementById('bkName').value.trim(),
        p=document.getElementById('bkPhone').value.trim(),
        e=document.getElementById('bkMail').value.trim(),
        c=document.getElementById('bkCons').checked,
        err=document.getElementById('bkErr');
    if(!n||p.replace(/\D/g,'').length<10||!/.+@.+\..+/.test(e)||!c){
      err.style.display='block';
      err.textContent = !c ? 'Отметьте согласие на обработку данных'
        : (!n ? 'Напишите имя' : (p.replace(/\D/g,'').length<10 ? 'Проверьте номер телефона' : 'Проверьте адрес почты'));
      return;
    }
    BK.name=n; BK.phone=p; BK.email=e;
    IZI.lead.name=n; IZI.lead.phone=p; IZI.lead.email=e;
    track('book_contacts','Заполнил контакты',n);
  }
  BK.step++;
  if(BK.step===3) track('book_terms','Дошёл до условий');
  bkRender();
}
function bkPay(){
  BK.done=true; BK.step=4;
  IZI.lead.type = bkIsGroup()? 'group' : 'booking';
  IZI.lead.deposit = BK_DEPOSIT;
  iziStep('lead');
  track('lead','Создана бронь', (IZI.ctx.toName||'—')+' · '+BK_DEPOSIT+' ₽');
  BK.no='IZI-'+new Date().toISOString().slice(2,10).replace(/-/g,'')+'-'+String(Math.floor(Math.random()*900+100));
  bkRender();
}

function bkRender(){
  var st=document.getElementById('bkSteps'), b=document.getElementById('bkBody'), d=IZI.ctx, grp=bkIsGroup();
  st.innerHTML=[1,2,3].map(function(i){return '<i class="'+(BK.step>=i?'on':'')+'"></i>';}).join('');
  st.style.visibility = BK.step>=4 ? 'hidden' : 'visible';

  if(BK.step===1){
    b.innerHTML=
      '<p class="bk-eyebrow">Шаг 1 из 3 · что бронируем</p>'+
      '<h3 class="bk-h">'+(grp?'Место в группе':'Бронь места и цены')+'</h3>'+
      '<p class="bk-p">'+(grp
        ? 'Группа с фиксированной датой вылета. Взнос закрепляет за вами место, остальное — после подтверждения.'
        : 'Депозит фиксирует цену и место в блоке. Остаток вы платите за 14 дней до вылета.')+'</p>'+
      '<div class="bk-sum">'+
        '<div class="bk-sr"><span>Откуда</span><b>'+esc(d.fromName||'—')+'</b></div>'+
        '<div class="bk-sr"><span>Куда</span><b>'+esc(d.toName||'не выбрано')+'</b></div>'+
        '<div class="bk-sr"><span>'+(grp?'Вылет группы':'Дата вылета')+'</span><b>'+esc(d.date||'не выбрана')+'</b></div>'+
        '<div class="bk-sr"><span>Стоимость тура</span><b>'+esc(bkPriceLine())+'</b></div>'+
        '<div class="bk-sr tot"><span>К оплате сейчас</span><b>'+BK_DEPOSIT.toLocaleString('ru-RU')+' ₽</b></div>'+
      '</div>'+
      '<div class="bk-pax">'+
        '<div class="bk-cnt"><span>Взрослые</span><div>'+
          '<button type="button" onclick="bkPax(\'a\',-1)"'+(BK.adults<=1?' disabled':'')+'>−</button>'+
          '<b>'+BK.adults+'</b>'+
          '<button type="button" onclick="bkPax(\'a\',1)"'+(BK.adults>=4?' disabled':'')+'>+</button></div></div>'+
        '<div class="bk-cnt"><span>Дети до 12 лет</span><div>'+
          '<button type="button" onclick="bkPax(\'k\',-1)"'+(BK.kids<=0?' disabled':'')+'>−</button>'+
          '<b>'+BK.kids+'</b>'+
          '<button type="button" onclick="bkPax(\'k\',1)"'+(BK.kids>=3?' disabled':'')+'>+</button></div></div>'+
      '</div>'+
      (BK.adults!==2||BK.kids? '<p class="bk-note">Цены на сайте показаны за двоих взрослых. Для другого состава менеджер пересчитает стоимость и пришлёт её до оплаты остатка.</p>':'')+
      '<div class="bk-act"><button class="btn btn-ember btn-l" type="button" onclick="bkNext()">Дальше</button></div>';
  }
  else if(BK.step===2){
    b.innerHTML=
      '<p class="bk-eyebrow">Шаг 2 из 3 · кто едет</p>'+
      '<h3 class="bk-h">Куда прислать подтверждение</h3>'+
      '<p class="bk-p">Договор и ваучер придут на почту, менеджер свяжется по телефону.</p>'+
      '<div class="bk-f">'+
        '<input id="bkName" type="text" placeholder="Имя и фамилия" value="'+esc(BK.name)+'" autocomplete="name">'+
        '<input id="bkPhone" type="tel" inputmode="tel" placeholder="+7 (___) ___-__-__" value="'+esc(BK.phone)+'" autocomplete="tel">'+
        '<input id="bkMail" type="email" inputmode="email" placeholder="Почта для договора" value="'+esc(BK.email)+'" autocomplete="email">'+
        '<label class="bk-cons"><input type="checkbox" id="bkCons"><span>Согласен на обработку персональных данных и ознакомлен с <a href="#" onclick="return false">политикой конфиденциальности</a></span></label>'+
        '<p class="bk-err" id="bkErr"></p>'+
      '</div>'+
      '<div class="bk-act">'+
        '<button class="bk-ghost" type="button" onclick="BK.step=1;bkRender()">Назад</button>'+
        '<button class="btn btn-ember btn-l" type="button" onclick="bkNext()">Дальше</button></div>';
    setTimeout(function(){var el=document.getElementById('bkName'); if(el&&!BK.name) el.focus();},60);
  }
  else if(BK.step===3){
    b.innerHTML=
      '<p class="bk-eyebrow">Шаг 3 из 3 · условия</p>'+
      '<h3 class="bk-h">Что даёт депозит</h3>'+
      '<div class="bk-terms">'+
        '<div class="bk-term"><i>✓</i><span><b>Цена фиксируется</b> в рублях на день брони и дальше не меняется — что бы ни делал курс.</span></div>'+
        '<div class="bk-term"><i>✓</i><span><b>Место в блоке закрепляется</b> за вами. Пока депозит внесён, его никто не займёт.</span></div>'+
        '<div class="bk-term"><i>✓</i><span><b>Остаток — за 14 дней до вылета.</b> Можно частями, можно в рассрочку без процентов.</span></div>'+
        '<div class="bk-term"><i>✓</i><span><b>Передумали — вернём депозит,</b> если сообщите в течение трёх дней после брони.</span></div>'+
      '</div>'+
      '<div class="bk-sum" style="margin-top:18px">'+
        '<div class="bk-sr"><span>Направление</span><b>'+esc(d.toName||'—')+(d.date?' · '+esc(d.date):'')+'</b></div>'+
        '<div class="bk-sr"><span>Турист</span><b>'+esc(BK.name)+' · '+esc(BK.phone)+'</b></div>'+
        '<div class="bk-sr tot"><span>К оплате сейчас</span><b>'+BK_DEPOSIT.toLocaleString('ru-RU')+' ₽</b></div>'+
      '</div>'+
      '<div class="bk-act">'+
        '<button class="bk-ghost" type="button" onclick="BK.step=2;bkRender()">Назад</button>'+
        '<button class="btn btn-ember btn-l" type="button" onclick="bkPay()">Перейти к оплате</button></div>'+
      '<p class="bk-note">Условия возврата и срок фиксации приведены как пример и требуют подтверждения туроператором до публикации.</p>';
  }
  else {
    b.innerHTML=
      '<div class="bk-done">'+
        '<div class="tick">✓</div>'+
        '<h3 class="bk-h">Бронь создана</h3>'+
        '<p class="bk-no">'+BK.no+'</p>'+
        '<p class="bk-p">'+esc(d.fromName||'')+' → '+esc(d.toName||'')+(d.date?' · '+esc(d.date):'')+'<br>'+
          esc(BK.name)+' · '+esc(BK.phone)+'</p>'+
      '</div>'+
      '<div class="bk-stub"><b>Здесь в рабочей версии открывается страница банка-эквайера.</b><br>'+
        'Макет платёжную форму не показывает намеренно: реквизиты карты принимает банк на своей странице, сайт их не видит и не хранит. '+
        'После оплаты банк возвращает человека сюда, а заявка в CRM переходит из «бронь создана» в «депозит получен».</div>'+
      '<div class="bk-act"><button class="bk-ghost" type="button" onclick="bkClose()">Закрыть</button>'+
        '<button class="btn btn-ember btn-l" type="button" onclick="crmToggle();bkClose()">Что ушло в CRM</button></div>';
  }
  crmRender();
}
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){ var w=document.getElementById('bkWrap'); if(w&&!w.hidden) bkClose(); }
});

/* ---------- демо-панель ---------- */
function crmToggle(){
  var p=document.getElementById('crmPanel');
  var open=p.classList.toggle('open');
  p.setAttribute('aria-hidden', String(!open));
  if(open) crmRender();
}
function esc(v){ return String(v==null?'':v).replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}); }
function crmRow(k,v,cls){ return '<div class="crmrow '+(cls||'')+'"><span>'+k+'</span><b>'+esc(v)+'</b></div>'; }

function crmRender(){
  var c=document.getElementById('crmCount'); if(!c) return;
  c.textContent=IZI.events.length;
  var p=document.getElementById('crmPanel');
  if(!p||!p.classList.contains('open')) return;

  document.getElementById('crmFunnel').innerHTML=FUNNEL.map(function(f){
    var on=!!IZI.steps[f[0]];
    var sec=on? Math.round((IZI.steps[f[0]]-IZI.started)/1000)+' c' : '';
    return '<li class="'+(on?'on':'')+'"><span class="dot"></span>'+f[1]+'<em>'+sec+'</em></li>';
  }).join('');

  var d=IZI.ctx, k=iziPacket(), src=IZI.src;
  var utm=Object.keys(src.utm||{}).length
      ? Object.keys(src.utm).map(function(x){return x.replace('utm_','')+'='+src.utm[x];}).join(' · ')
      : (src.referrer? 'переход с '+src.referrer.replace(/^https?:\/\//,'').split('/')[0] : 'прямой заход');

  var TYPES={callback:'Обратный звонок · холодный',booking:'Бронь с депозитом · горячий',group:'Место в группе · горячий'};
  document.getElementById('crmCard').innerHTML=
    crmRow('Тип заявки', TYPES[k.lead.type]||'— не создана', k.lead.type&&k.lead.type!=='callback'?'hi':'dim')+
    (k.lead.deposit? crmRow('Депозит', k.lead.deposit.toLocaleString('ru-RU')+' ₽','hi') : '')+
    crmRow('Имя', k.lead.name||'— не заполнено', k.lead.name?'':'dim')+
    crmRow('Телефон', k.lead.phone||'— не заполнено', k.lead.phone?'hi':'dim')+
    (k.lead.email? crmRow('Почта', k.lead.email) : '')+
    crmRow('Откуда', d.fromName||'—')+
    crmRow('Куда', d.toName||'— не выбрано', d.toName?'':'dim')+
    crmRow('Дата', d.date||'— не выбрана', d.date?'':'dim')+
    crmRow('Цена на экране', d.price||'—', d.price?'hi':'dim')+
    crmRow('Кто едет', IZI.lead.adults+' взр.'+(IZI.lead.kids?' + '+IZI.lead.kids+' реб.':''))+
    crmRow('Смотрел направлений', d.resorts.length? d.resorts.length+' ('+d.resorts.join(', ')+')' : '0','dim')+
    crmRow('Вкладки курорта', d.tabs.length? d.tabs.join(', ') : '—','dim')+
    crmRow('Схема салона', d.seatmap? 'открывал '+d.seatmap+' раз'+(d.seatmap>1?'а':'') : 'нет','dim')+
    crmRow('Сравнил с Москвой', d.compared?'да':'нет','dim')+
    crmRow('Источник', utm)+
    crmRow('Устройство', src.device+' · '+src.screen,'dim')+
    crmRow('На сайте', k.behaviour.secondsOnSite+' c · прокрутил '+IZI.maxScroll+'%','dim')+
    crmRow('ID сессии', IZI.sid,'dim');

  var log=IZI.events.slice(-40).reverse().map(function(e){
    return '<div><i>'+e.t+'c</i><b>'+esc(e.type)+'</b><u>'+esc(e.label)+(e.value?' · '+esc(e.value):'')+'</u></div>';
  }).join('');
  document.getElementById('crmLog').innerHTML=log||'<div><u>событий пока нет</u></div>';
  document.getElementById('crmJson').textContent=JSON.stringify(k,null,1);
}

function leadCtxRender(){
  var el=document.getElementById('leadCtx'); if(!el) return;
  var d=IZI.ctx;
  if(!d.toName){ el.innerHTML='<b>Ещё не выбрали направление</b><span>Ничего страшного — менеджер подберёт по телефону.</span>'; return; }
  el.innerHTML='<b>Ваш выбор</b><span>'+esc(d.fromName)+' → '+esc(d.toName)+
    (d.date? ' · '+esc(d.date):'')+' · '+esc(d.pax)+'</span>'+
    (d.price? '<span>Цена на экране: <u>'+esc(d.price)+'</u></span>':'')+
    '<span style="font-size:11px;color:var(--text-3)">Эти параметры уйдут менеджеру вместе с номером — повторять их в разговоре не придётся.</span>';
}

/* ---------- nav ---------- */
function show(v){
  document.getElementById('view-home').classList.toggle('hidden',v!=='home');
  document.getElementById('view-lp').classList.toggle('hidden',v!=='lp');
  document.querySelectorAll('.pillnav button[data-view]').forEach(function(b){
    if(b.dataset.view===v){b.setAttribute('aria-current','page')}else{b.removeAttribute('aria-current')}});
  window.scrollTo({top:0,behavior:'auto'});
}
function jump(sel){
  show('home');
  if(window.IZI){ if(sel==='#lead'){ iziStep('intent'); track('cta','Нажал кнопку заявки', IZI.ctx.toName||'без направления'); }
    else track('nav','Переход к разделу',sel); }
  var el=document.querySelector(sel);
  if(el) setTimeout(function(){el.scrollIntoView({behavior:'smooth',block:'start'});},20);
  return false;
}
function submitLead(e){
  e.preventDefault();
  if(document.getElementById('leadHp').value){ return false; }   /* ловушка для ботов */
  var pk=iziPacket();
  iziStep('lead'); track('lead','Отправил заявку', pk.lead.phone||'—');
  /* в рабочей версии здесь fetch('/api/lead',{method:'POST',body:JSON.stringify(pk)}) */
  var no='IZI-'+new Date().toISOString().slice(2,10).replace(/-/g,'')+'-'+String(Math.floor(Math.random()*900+100));
  var ok=document.getElementById('leadOk');
  ok.innerHTML='<b>Заявка принята</b>Номер <span class="num">'+no+'</span>. Перезвоним за 30 секунд.'+
    '<div style="margin-top:10px;font-size:12.5px;color:var(--text-3);line-height:1.55">'+
    'Менеджер уже видит: '+(pk.choice.to? esc(pk.choice.from)+' → '+esc(pk.choice.to)+(pk.choice.date?', '+esc(pk.choice.date):'')+(pk.choice.price?', '+esc(pk.choice.price):'') : 'направление не выбрано')+
    ' · смотрел направлений: '+pk.behaviour.resortsViewed.length+' · на сайте '+pk.behaviour.secondsOnSite+' c.'+
    '<br>Полный состав пакета — в панели «Что уйдёт в CRM» слева внизу.</div>';
  document.getElementById('leadForm').style.display='none';
  ok.style.display='block';
  return false;
}

/* ---------- boot ---------- */
setCity('mrv');
buildSeatMap();
document.querySelectorAll('.mark3d').forEach(buildMark);
iziInit(); leadCtxRender();
setRoute('direct');
document.getElementById('hotels').innerHTML=HOTELS.map(hotelCard).join('');
if(!reduce) animPlane();
function tilt3d(id,amt){
  var sc=document.getElementById(id);
  if(!sc||reduce) return;
  var host=sc.parentNode, raf=null, tx=0, ty=0;
  function apply(){ raf=null; sc.style.transform='rotateY('+tx+'deg) rotateX('+ty+'deg)'; }
  host.addEventListener('pointermove',function(e){
    var r=sc.getBoundingClientRect();
    tx=((e.clientX-r.left)/r.width-.5)*amt;
    ty=-((e.clientY-r.top)/r.height-.5)*amt*.66;
    if(!raf) raf=requestAnimationFrame(apply);
  });
  host.addEventListener('pointerleave',function(){ tx=0;ty=0; if(!raf) raf=requestAnimationFrame(apply); });
}
tilt3d('heroScene',7); tilt3d('stageScene',6); tilt3d('routeScene',5);
if(window.IMAGES&&IMAGES.route){var ri=document.getElementById('routeImg');
  ri.src=IMAGES.route; ri.hidden=false; document.getElementById('rtSky').style.display='none';}
function onScroll(){
  document.body.classList.toggle('scrolled', window.scrollY>40);
  if(window.IZI){ var h=document.documentElement.scrollHeight-window.innerHeight;
    var d=h>0? Math.round((window.scrollY/h)*100):0;
    if(d>IZI.maxScroll){ IZI.maxScroll=Math.min(100,d); } }
  var lead=document.getElementById('lead');
  var past=window.scrollY>window.innerHeight*0.85;
  var atLead=lead && lead.getBoundingClientRect().top < window.innerHeight*0.95;
  var ss=document.getElementById('stickysearch');
  if(ss) ss.classList.toggle('on', past && !atLead);
  var db=document.getElementById('deskbar');
  if(db) db.classList.remove('on');
}
window.addEventListener('scroll',onScroll,{passive:true}); onScroll();


if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(en){ if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);} });
  },{rootMargin:'0px 0px -10% 0px'});
  document.querySelectorAll('.rev').forEach(function(el){io.observe(el)});
}
