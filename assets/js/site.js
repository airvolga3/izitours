var IMAGES_SM={ac321:'assets/img/ac321-sm.webp',ac777:'assets/img/ac777-sm.webp',acssj:'assets/img/acssj-sm.webp',antalya:'assets/img/antalya-sm.webp',antalya_city:'assets/img/antalya_city-sm.webp',antalya_eve:'assets/img/antalya_eve-sm.webp',antalya_sea:'assets/img/antalya_sea-sm.webp',antalya_who:'assets/img/antalya_who-sm.webp',avatar:'assets/img/avatar-sm.webp',avatar_mtn:'assets/img/avatar_mtn-sm.webp',avatar_who:'assets/img/avatar_who-sm.webp',bodrum:'assets/img/bodrum-sm.webp',bodrum_city:'assets/img/bodrum_city-sm.webp',bodrum_eve:'assets/img/bodrum_eve-sm.webp',bodrum_sea:'assets/img/bodrum_sea-sm.webp',bodrum_who:'assets/img/bodrum_who-sm.webp',hainan:'assets/img/hainan-sm.webp',hainan_city:'assets/img/hainan_city-sm.webp',hainan_eve:'assets/img/hainan_eve-sm.webp',hainan_sea:'assets/img/hainan_sea-sm.webp',hainan_who:'assets/img/hainan_who-sm.webp',h_aqua:'assets/img/h_aqua-sm.webp',h_beach:'assets/img/h_beach-sm.webp',h_dine:'assets/img/h_dine-sm.webp',h_lobby:'assets/img/h_lobby-sm.webp',h_pool:'assets/img/h_pool-sm.webp',h_room:'assets/img/h_room-sm.webp',route:'assets/img/route-sm.webp',sharm:'assets/img/sharm-sm.webp',sharm_city:'assets/img/sharm_city-sm.webp',sharm_eve:'assets/img/sharm_eve-sm.webp',sharm_sea:'assets/img/sharm_sea-sm.webp',sharm_who:'assets/img/sharm_who-sm.webp'};
var IMAGES={route:'assets/img/route.webp',ac777:'assets/img/ac777.webp',ac321:'assets/img/ac321.webp',acssj:'assets/img/acssj.webp',h_pool:'assets/img/h_pool.webp',h_room:'assets/img/h_room.webp',h_beach:'assets/img/h_beach.webp',h_dine:'assets/img/h_dine.webp',h_lobby:'assets/img/h_lobby.webp',h_aqua:'assets/img/h_aqua.webp',bodrum_sea:'assets/img/bodrum_sea.webp',bodrum_city:'assets/img/bodrum_city.webp',bodrum_eve:'assets/img/bodrum_eve.webp',bodrum_who:'assets/img/bodrum_who.webp',antalya_sea:'assets/img/antalya_sea.webp',antalya_city:'assets/img/antalya_city.webp',antalya_eve:'assets/img/antalya_eve.webp',antalya_who:'assets/img/antalya_who.webp',sharm_sea:'assets/img/sharm_sea.webp',sharm_city:'assets/img/sharm_city.webp',sharm_eve:'assets/img/sharm_eve.webp',sharm_who:'assets/img/sharm_who.webp',hainan_sea:'assets/img/hainan_sea.webp',hainan_city:'assets/img/hainan_city.webp',hainan_eve:'assets/img/hainan_eve.webp',hainan_who:'assets/img/hainan_who.webp',avatar_mtn:'assets/img/avatar_mtn.webp',avatar_city:'',avatar_eve:'',avatar_who:'assets/img/avatar_who.webp',bodrum:'assets/img/bodrum.webp',
            antalya:'assets/img/antalya.webp',
            sharm:'assets/img/sharm.webp',
            hainan:'assets/img/hainan.webp',
            avatar:'assets/img/avatar.webp'};

/* ==========================================================
   ДАННЫЕ САЙТА — правится здесь, вёрстку трогать не нужно
   IMAGES     картинки: ключ = имя файла в assets/img
   RESORTS_DATA курорты и тексты вкладок
   DATA       города вылета, направления, цены, календарь
   STAY       отели по курортам (kf:true — детское место бесплатно)
   FLEET      компоновки салонов
   ROUTES     геометрия маршрута
   PROG       полётная программа сезона
   SOON       ближайшие вылеты с остатком мест
   ADDONS     дополнительные услуги и цены
   PAX_K      коэффициенты размещения
   EB         раннее бронирование: этапы и скидки
   CLUB       уровни постоянного туриста
   FAQ        вопросы про чартер
   Все цифры демонстрационные — см. DATA-REVISION.md
   ========================================================== */
/* ---------- resorts ---------- */
var RESORTS_DATA=[
 {k:'bodrum',n:'Бодрум',acc:'Бодрум',prep:'Бодруме',gen:'Бодрума',c:'Турция · Эгейское побережье',
  chips:['Море 27°','До аэропорта 35 км','Пляж песчано-галечный'],
  tabs:[
   ['Море','Эгейское море держит 26–27 градусов до конца сентября. Вода прозрачная настолько, что с пирса видно дно на четыре метра, а к вечеру она становится теплее воздуха — и выходить из неё уже не хочется.','bodrum_sea'],
   ['Город','Белые дома спускаются к бухте уступами, на мысу стоит крепость Святого Петра, а в марине по вечерам зажигаются мачты. Из Гюмбета до старого города — десять минут на долмуше за копейки.','bodrum_city'],
   ['Вечер','Солнце садится прямо в море около восьми. Набережная просыпается: рыбные таверны выставляют столы к самой воде, где-то играют вживую, и до полуночи здесь гуляют семьями, а не толпой.','bodrum_eve'],
   ['Для кого','Тем, кому мало просто лежать: бухты для лодочных прогулок, дайвинг, живые вечера. С детьми лучше в Гюмбет или Битез — там пологий вход и спокойная вода без волны.','bodrum_who']
  ]},
 {k:'antalya',n:'Анталия',acc:'Анталию',prep:'Анталии',gen:'Анталии',c:'Турция · Средиземноморье',
  chips:['Море 28°','До аэропорта 20 км','Пляж песчаный'],
  tabs:[
   ['Море','Средиземное дольше всех держит тепло: 28 градусов в сентябре и 25 даже в конце октября. Лара и Коньяалты — это километры песка, а с воды видны заснеженные вершины Таврских гор.','antalya_sea'],
   ['Город','Калеичи — старый город внутри крепостных стен: узкие улицы, османские дома, апельсиновые деревья во дворах. Водопад Дюден падает с обрыва прямо в море, и это видно с прогулочного катера.','antalya_city'],
   ['Вечер','Здесь вечер длинный и тёплый. Отели зажигают подсветку, на набережной работают чайные, а с холма над старым портом видно, как огни бухты уходят к горизонту.','antalya_eve'],
   ['Для кого','Классика «всё включено» для семей: большие отели, аквапарки, анимация, короткий трансфер из аэропорта. Тем, кто едет впервые, лучше начинать отсюда.','antalya_who']
  ]},
 {k:'sharm',n:'Шарм-эль-Шейх',acc:'Шарм-эль-Шейх',prep:'Шарм-эль-Шейхе',gen:'Шарм-эль-Шейха',c:'Египет · Красное море',
  chips:['Море 28°','До аэропорта 18 км','Коралловый риф'],
  tabs:[
   ['Море','Красное море держит 28 градусов даже в декабре. Коралловый риф начинается в двадцати метрах от берега: маска и трубка — и вы среди рыб-бабочек, без всякого сертификата и без лодки.','sharm_sea'],
   ['Город','Наама-Бей — набережная с лавками, кальянными и рыбными ресторанами, где к столу приносят улов и вы выбираете сами. За городом начинается Синайская пустыня и дорога к монастырю Святой Екатерины.','sharm_city'],
   ['Вечер','После заката жара уходит мгновенно, и становится тем самым тёплым вечером, ради которого сюда едут зимой. Небо над пустыней без городской засветки — Млечный Путь видно невооружённым глазом.','sharm_eve'],
   ['Для кого','Тем, кто хочет к морю не летом: с ноября по март это единственное по-настоящему тёплое море в пределах прямого рейса. И тем, кто влюбляется в снорклинг с первого раза.','sharm_who']
  ]},
 {k:'hainan',n:'Хайнань',acc:'Хайнань',prep:'Хайнане',gen:'Хайнаня',c:'Китай · тропический остров',
  chips:['Море 29°','До аэропорта 30 км','Пляж белый песок'],
  tabs:[
   ['Море','Южно-Китайское море в бухте Ялунвань — 29 градусов и вода цвета бутылочного стекла. Полоса белого песка тянется на семь километров, и даже в сезон на ней есть куда уйти от людей.','hainan_sea'],
   ['Город','Санья — это пальмовые проспекты, круглосуточные рынки с фруктами, которых вы не пробовали, и огромный парк Наньшань со статуей Гуаньинь, стоящей прямо в море.','hainan_city'],
   ['Вечер','Вечером остров пахнет франжипани и уличной едой. Набережная Дадунхай светится неоном, а через дорогу — тихие переулки с чайными, где никто никуда не спешит.','hainan_eve'],
   ['Для кого','Тем, кто уже был в Турции и Египте и хочет по-настоящему далеко. Тропики, другая культура, другая еда — и при этом отель, трансфер и виза одним пакетом.','hainan_who']
  ]},
 {k:'avatar',n:'Горы Аватара',acc:'Горы Аватара',prep:'Горах Аватара',gen:'гор Аватара',c:'Китай · экскурсионный тур',
  chips:['11 дней','Русский гид','Группа до 20 человек'],
  tabs:[
   ['Горы','Чжанцзяцзе — тысячи каменных столбов, вырастающих из тумана. Именно отсюда взяты парящие скалы «Аватара». Со стеклянной смотровой площадки видно, как облака идут ниже ваших ног.','avatar_mtn'],
   ['Города','Чунцин — город-муравейник на слиянии двух рек, где дороги идут сквозь жилые дома, а вечером набережная Хунъядун светится как декорация. Рядом — древний Фэнхуан на сваях над водой.','avatar_city'],
   ['Вечер','Вечера в этом туре — про еду. Сычуаньский хого, уличный рынок Цзефанбэй, чай на террасе с видом на реку. Гид переводит меню и говорит, что заказывать, а что точно нет.','avatar_eve'],
   ['Для кого','Тем, кому пляж уже не интересен. Это поездка, из которой привозят не загар, а фотографии, которым не верят. Нужна нормальная физическая форма: много ходьбы и подъёмов.','avatar_who']
  ]}
];

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


/* ---------- отели: данные ---------- */
/* k — коэффициент к цене направления на выбранную дату, поэтому цены живые */
var STAY={
 bodrum:[
  {id:'b1',n:'Aegea Bay Resort',s:5,meal:'всё включено',line:1,dist:50,r:4.7,rn:412,k:1.24,kids:true,kf:true,
   img:'h_pool',gal:['h_pool','h_room','h_beach','h_dine'],
   about:'Большой курортный комплекс на первой линии в бухте Гюмбет. Три бассейна, свой песчано-галечный пляж с пирсом, вечерние программы у воды.',
   near:[['🏖','Свой пляж, 50 м'],['✈','Аэропорт 35 км'],['🏛','Старый город 6 км'],['🛒','Магазины через дорогу']],
   rooms:[['Стандарт с видом на сад','2 взрослых · 24 м²',1.0],['Стандарт с видом на море','2 взрослых · 26 м²',1.12],['Семейный номер','2+2 · 38 м²',1.34]]},
  {id:'b2',n:'Palmira Coast Club',s:4,meal:'полупансион',line:1,dist:80,r:4.4,rn:286,k:1.0,kids:true,kf:true,
   img:'h_beach',gal:['h_beach','h_pool','h_room','h_lobby'],
   about:'Камерный клубный отель на склоне с террасами к морю. Тихий, зелёный, с прямым спуском к воде по лестнице.',
   near:[['🏖','Пляж 80 м'],['✈','Аэропорт 32 км'],['🍽','Таверны 200 м'],['🚌','Долмуш у ворот']],
   rooms:[['Стандарт','2 взрослых · 22 м²',1.0],['Номер с террасой','2 взрослых · 28 м²',1.15]]},
  {id:'b3',n:'Mandarin Cove Hotel',s:4,meal:'завтрак',line:2,dist:250,r:4.2,rn:174,k:0.84,kids:false,
   img:'h_lobby',gal:['h_lobby','h_room','h_dine','h_beach'],
   about:'Небольшой городской отель в десяти минутах от марины. Подходит тем, кто едет не лежать, а ходить, есть и смотреть.',
   near:[['🏖','Пляж 250 м'],['⚓','Марина 900 м'],['🏛','Крепость 1,2 км'],['🌙','Ночная жизнь рядом']],
   rooms:[['Стандарт','2 взрослых · 20 м²',1.0],['Люкс с балконом','2 взрослых · 30 м²',1.22]]},
  {id:'b4',n:'Blue Cape Suites',s:5,meal:'всё включено',line:1,dist:0,r:4.8,rn:198,k:1.55,kids:false,
   img:'h_dine',gal:['h_dine','h_pool','h_room','h_beach'],
   about:'Взрослый отель на мысу: бассейн-инфинити над водой, ресторан на скале, никаких анимаций и детских клубов.',
   near:[['🏖','Выход к морю с территории'],['✈','Аэропорт 38 км'],['🍷','Винный бар на террасе'],['🧘','Спа и хаммам']],
   rooms:[['Делюкс с видом на море','2 взрослых · 32 м²',1.0],['Сюит с бассейном','2 взрослых · 46 м²',1.48]]}
 ],
 antalya:[
  {id:'a1',n:'Lara Sunrise Resort',s:5,meal:'всё включено',line:1,dist:0,r:4.6,rn:1240,k:1.3,kids:true,kf:true,
   img:'h_aqua',gal:['h_aqua','h_pool','h_room','h_dine'],
   about:'Классический большой «всё включено» на песчаном пляже Лары. Аквапарк с семью горками, детский клуб, анимация весь день.',
   near:[['🏖','Песчаный пляж на территории'],['✈','Аэропорт 14 км'],['🎢','Аквапарк свой'],['🛍','ТЦ 3 км']],
   rooms:[['Стандарт','2 взрослых · 26 м²',1.0],['Семейный','2+2 · 40 м²',1.3],['Свит с видом на море','2 взрослых · 44 м²',1.42]]},
  {id:'a2',n:'Konyaalti Garden Hotel',s:4,meal:'полупансион',line:1,dist:120,r:4.3,rn:530,k:0.96,kids:true,kf:true,
   img:'h_pool',gal:['h_pool','h_beach','h_room','h_lobby'],
   about:'Отель на Коньяалты с видом на Таврские горы. Просторный сад, два бассейна, до галечного пляжа — через набережную.',
   near:[['🏖','Пляж 120 м'],['🏔','Вид на горы'],['✈','Аэропорт 18 км'],['🚋','Трамвай 300 м']],
   rooms:[['Стандарт','2 взрослых · 24 м²',1.0],['Номер с видом на горы','2 взрослых · 26 м²',1.1]]},
  {id:'a3',n:'Kaleici Old Town House',s:4,meal:'завтрак',line:2,dist:400,r:4.5,rn:207,k:0.88,kids:false,
   img:'h_lobby',gal:['h_lobby','h_room','h_dine','h_beach'],
   about:'Отреставрированный османский дом в старом городе: двенадцать номеров, апельсиновый двор, завтрак под деревьями.',
   near:[['🏛','Ворота Адриана 300 м'],['⚓','Старый порт 400 м'],['🌊','Водопад Дюден 8 км'],['🍽','Рестораны вокруг']],
   rooms:[['Двухместный','2 взрослых · 18 м²',1.0],['Номер во дворе','2 взрослых · 24 м²',1.18]]},
  {id:'a4',n:'Belek Pines Resort',s:5,meal:'всё включено',line:1,dist:60,r:4.7,rn:880,k:1.46,kids:true,kf:true,
   img:'h_beach',gal:['h_beach','h_aqua','h_pool','h_dine'],
   about:'В сосновом лесу под Белеком. Собственный участок пляжа, поле для гольфа рядом, тихо и просторно даже в сезон.',
   near:[['🏖','Пляж 60 м, сосны'],['⛳','Гольф-поля 2 км'],['✈','Аэропорт 32 км'],['👶','Детский клуб']],
   rooms:[['Стандарт в парке','2 взрослых · 28 м²',1.0],['Семейный дуплекс','2+2 · 52 м²',1.36]]}
 ],
 sharm:[
  {id:'s1',n:'Naama Reef Resort',s:5,meal:'всё включено',line:1,dist:0,r:4.6,rn:940,k:1.22,kids:true,kf:true,
   img:'h_pool',gal:['h_pool','h_beach','h_room','h_dine'],
   about:'Свой понтон над рифом — маска и трубка в двадцати метрах от лежака. Три бассейна, дайв-центр на территории.',
   near:[['🐠','Риф у понтона'],['🤿','Дайв-центр свой'],['✈','Аэропорт 12 км'],['🌃','Наама-Бей 1,5 км']],
   rooms:[['Стандарт','2 взрослых · 26 м²',1.0],['Номер с видом на море','2 взрослых · 28 м²',1.14],['Семейный','2+2 · 42 м²',1.32]]},
  {id:'s2',n:'Sinai Bay Village',s:4,meal:'всё включено',line:1,dist:100,r:4.3,rn:612,k:0.98,kids:true,
   img:'h_aqua',gal:['h_aqua','h_pool','h_room','h_lobby'],
   about:'Отель-деревня на склоне: домики по две-три единицы, лифт к пляжу, аквапарк с шестью горками.',
   near:[['🏖','Пляж 100 м, лифт'],['🎢','Аквапарк свой'],['👶','Мини-клуб'],['✈','Аэропорт 18 км']],
   rooms:[['Стандарт','2 взрослых · 24 м²',1.0],['Семейный','2+2 · 36 м²',1.28]]},
  {id:'s3',n:'Desert Pearl Boutique',s:4,meal:'завтрак',line:2,dist:350,r:4.4,rn:188,k:0.86,kids:false,
   img:'h_lobby',gal:['h_lobby','h_room','h_dine','h_beach'],
   about:'Небольшой отель в тихом районе, для тех, кто едет нырять и ездить в пустыню, а не сидеть на территории.',
   near:[['🏖','Пляж 350 м'],['🏜','Экскурсии в Синай'],['🤿','Дайв-школы рядом'],['🍽','Кафе 200 м']],
   rooms:[['Стандарт','2 взрослых · 22 м²',1.0],['Номер с террасой','2 взрослых · 30 м²',1.2]]}
 ],
 hainan:[
  {id:'x1',n:'Yalong Pearl Resort',s:5,meal:'завтрак',line:1,dist:0,r:4.7,rn:326,k:1.28,kids:true,
   img:'h_beach',gal:['h_beach','h_pool','h_room','h_dine'],
   about:'На первой линии бухты Ялунвань — семь километров белого песка. Тропический сад, бассейн-лагуна, спа.',
   near:[['🏖','Белый песок на территории'],['🌴','Сад 4 га'],['✈','Аэропорт 28 км'],['🛕','Парк Наньшань 40 км']],
   rooms:[['Номер в саду','2 взрослых · 32 м²',1.0],['Номер с видом на море','2 взрослых · 36 м²',1.18]]},
  {id:'x2',n:'Dadonghai Bay Hotel',s:4,meal:'завтрак',line:1,dist:150,r:4.4,rn:241,k:0.94,kids:false,
   img:'h_lobby',gal:['h_lobby','h_room','h_dine','h_beach'],
   about:'В шаге от набережной Дадунхай: вечерний неон, рынки с фруктами и морепродуктами прямо за отелем.',
   near:[['🏖','Пляж 150 м'],['🌃','Набережная рядом'],['🍜','Ночной рынок 400 м'],['✈','Аэропорт 22 км']],
   rooms:[['Стандарт','2 взрослых · 26 м²',1.0],['Номер с видом на бухту','2 взрослых · 30 м²',1.16]]},
  {id:'x3',n:'Sanya Palm Grand',s:5,meal:'полупансион',line:2,dist:300,r:4.6,rn:158,k:1.12,kids:true,
   img:'h_pool',gal:['h_pool','h_aqua','h_room','h_dine'],
   about:'Городской курортный отель с большим бассейном и детской зоной. До пляжа — бесплатный шаттл каждые полчаса.',
   near:[['🚌','Шаттл до пляжа'],['👶','Детская зона'],['🛍','Молл 800 м'],['✈','Аэропорт 18 км']],
   rooms:[['Стандарт','2 взрослых · 28 м²',1.0],['Семейный','2+2 · 44 м²',1.3]]}
 ]
};

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

var PROG={
 mrv:[
  {to:'Анталия',       k:'antalya',days:'ср · вс',   per:'25 апреля — 25 октября', plane:'Airbus A321neo',        n:'7 · 10 · 14 ночей', p:121400},
  {to:'Бодрум',        k:'bodrum', days:'вт · сб',   per:'2 мая — 11 октября',     plane:'Airbus A321neo',        n:'7 · 10 ночей',      p:130705},
  {to:'Шарм-эль-Шейх', k:'sharm',  days:'пн · пт',   per:'круглый год',            plane:'Boeing 777-200ER',      n:'7 · 10 · 14 ночей', p:138900},
  {to:'Хайнань',       k:'hainan', days:'сб',        per:'1 ноября — 31 марта',    plane:'рейс GDS с пересадкой', n:'10 · 14 ночей',     p:289000}
 ],
 krr:[
  {to:'Анталия',       k:'antalya',days:'вт · сб',   per:'18 апреля — 1 ноября',   plane:'Airbus A321neo',        n:'7 · 10 · 14 ночей', p:116800},
  {to:'Бодрум',        k:'bodrum', days:'пн · чт',   per:'2 мая — 11 октября',     plane:'Airbus A321neo',        n:'7 · 10 ночей',      p:127300},
  {to:'Чунцин и горы Аватара',k:'avatar',days:'1 сентября',per:'разовая группа',   plane:'Boeing 777-200ER',      n:'11 дней',           p:300000},
  {to:'Хайнань',       k:'hainan', days:'сб',        per:'1 ноября — 31 марта',    plane:'рейс GDS с пересадкой', n:'10 · 14 ночей',     p:284500}
 ],
 skx:[
  {to:'Анталия',       k:'antalya',days:'вт · сб',   per:'2 мая — 4 октября',      plane:'Airbus A321neo',        n:'7 · 10 · 14 ночей', p:124900},
  {to:'Бодрум',        k:'bodrum', days:'чт',        per:'14 мая — 25 сентября',   plane:'Superjet 100',          n:'7 · 10 ночей',      p:133200}
 ]
};

/* Ближайшие вылеты: то, что осталось в уже собранных бортах. */
var SOON={
 mrv:[
  {to:'Бодрум', k:'bodrum', date:'2 сентября', wd:'вт', n:7,  seats:6,  p:118400, was:130705, plane:'A321neo'},
  {to:'Анталия',k:'antalya',date:'3 сентября', wd:'ср', n:10, seats:11, p:109900, was:121400, plane:'A321neo'},
  {to:'Шарм-эль-Шейх',k:'sharm',date:'5 сентября',wd:'пт',n:7,seats:3,  p:126400, was:138900, plane:'Boeing 777'},
  {to:'Бодрум', k:'bodrum', date:'6 сентября', wd:'сб', n:10, seats:18, p:124200, was:130705, plane:'A321neo'}
 ],
 krr:[
  {to:'Анталия',k:'antalya',date:'1 сентября', wd:'пн', n:7,  seats:4,  p:104900, was:116800, plane:'A321neo'},
  {to:'Бодрум', k:'bodrum', date:'4 сентября', wd:'чт', n:7,  seats:9,  p:115600, was:127300, plane:'A321neo'},
  {to:'Анталия',k:'antalya',date:'6 сентября', wd:'сб', n:10, seats:16, p:112300, was:116800, plane:'A321neo'},
  {to:'Чунцин и горы Аватара',k:'avatar',date:'1 сентября',wd:'пн',n:11,seats:4,p:300000,was:0,plane:'Boeing 777'}
 ],
 skx:[
  {to:'Анталия',k:'antalya',date:'2 сентября', wd:'вт', n:7,  seats:7,  p:113900, was:124900, plane:'A321neo'},
  {to:'Бодрум', k:'bodrum', date:'4 сентября', wd:'чт', n:7,  seats:12, p:126700, was:133200, plane:'Superjet 100'},
  {to:'Анталия',k:'antalya',date:'6 сентября', wd:'сб', n:10, seats:19, p:118400, was:124900, plane:'A321neo'}
 ]
};

/* Что можно докупить. Состав и цены — демонстрационные. */
var ADDONS=[
 {id:'ins',  n:'Страховка от невыезда',   p:2400, per:'чел',  hot:'Берут чаще всего',
  d:'Вернёт всю стоимость тура, если заболели, не пустили на рейс или вызвали на работу.'},
 {id:'exc',  n:'Экскурсионный пакет',     p:11900,per:'чел',
  d:'Три поездки с русскоговорящим гидом, входные билеты и трансфер. На месте те же экскурсии дороже.'},
 {id:'seat', n:'Выбор мест в салоне',     p:1490, per:'чел',
  d:'Сесть у окна или всей семьёй рядом. Без этого места назначит система при регистрации.'},
 {id:'bag',  n:'Ещё 10 кг багажа',        p:3900, per:'чел',
  d:'Второе место багажа туда и обратно. У стойки в аэропорту перевес обойдётся дороже.'},
 {id:'early',n:'Ранний заезд в отель',    p:5600, per:'бронь',
  d:'Номер с 8 утра в день прилёта — вместо ожидания до двух часов дня.'},
 {id:'vip',  n:'Индивидуальный трансфер', p:6800, per:'бронь',
  d:'Своя машина вместо группового автобуса: из аэропорта сразу в отель, без объезда.'}
];

var PAX_K={single:1.35, extraAdult:0.82, child:0.45, infant:4900};

/* ---------- раннее бронирование ---------- */
/* Этапы, скидки и цены на будущее лето — демонстрационные. */
var EB={
  base:{mrv:{to:'Анталия',k:'antalya',p:134000},krr:{to:'Анталия',k:'antalya',p:129000},skx:{to:'Анталия',k:'antalya',p:136000}},
  tiers:[
    {till:'2026-10-01', label:'до 30 сентября', d:12},
    {till:'2026-11-01', label:'до 31 октября', d:8},
    {till:'2026-12-01', label:'до 30 ноября',  d:5},
    {till:null,         label:'с 1 декабря',   d:0}
  ]
};

/* ---------- постоянные туристы ---------- */
var CLUB=[
 {n:'После первой поездки', d:'3%', t:['скидка на следующий тур','ранний доступ к раннему бронированию за сутки до всех']},
 {n:'После третьей',        d:'5%', t:['скидка на тур','выбор мест в самолёте бесплатно','приоритет в листе ожидания на забитый борт']},
 {n:'После пятой',          d:'7%', t:['скидка на тур','выбор мест и ранний заезд бесплатно','личный менеджер, а не общая линия']}
];

/* ---------- честно про чартер ---------- */
var FAQ=[
 {q:'А если рейс перенесут на несколько часов?',
  a:'Такое бывает — чартер встраивают в свободные слоты аэропорта. Мы сообщаем о переносе в СМС и мессенджер сразу, как узнаём сами, а не за час до выезда. Отель при этом никуда не девается: заезд и выезд считаются по датам тура, а не по времени рейса. Если сдвиг больше шести часов, оператор оплачивает питание в аэропорту.'},
 {q:'А если рейс отменят совсем?',
  a:'Оператор обязан либо вывезти вас другим бортом, либо вернуть всю стоимость тура. Это не добрая воля, а закон: ответственность туроператора обеспечена финансовой гарантией — у нас это 50 млн ₽ в СК «ТИТ». Номер в реестре туроператоров можно проверить за минуту, ссылка внизу страницы.'},
 {q:'Почему нельзя поменять дату вылета, как на регулярном рейсе?',
  a:'Потому что борт летит по своей программе: место закреплено за конкретной ротацией. Поменять дату можно, но это перебронирование тура — с пересчётом цены на новую дату. Чем раньше вы об этом скажете, тем дешевле выходит: за 21 день и больше — без штрафа.'},
 {q:'Я заболел и не могу лететь. Деньги сгорят?',
  a:'Без страховки от невыезда вернётся только та часть, которую оператор успевает вернуть отелю и авиакомпании — ближе к вылету это почти ничего. Со страховкой от невыезда (2 400 ₽ с человека) возвращается вся стоимость тура. Это единственная допуслуга, которую мы советуем брать всегда.'},
 {q:'Багаж, еда, вода — за это тоже платить?',
  a:'Нет. 20 кг багажа и ручная кладь входят в цену тура, горячее питание на борту — тоже. Доплачивают только за второе место багажа и за выбор конкретного кресла. Никаких сюрпризов у стойки регистрации.'},
 {q:'Чартер — это старые самолёты?',
  a:'Наши рейсы выполняет Red Wings на Boeing 777-200ER, Airbus A321neo и Superjet 100. Тип борта, шаг кресел и схему салона видно на этой странице до брони — мы единственные в регионе, кто это показывает.'}
];

var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var SMALL = (window.innerWidth<=820);
function pic(key){
  if(SMALL && window.IMAGES_SM && IMAGES_SM[key]) return IMAGES_SM[key];
  return IMAGES[key]||'';
}
function setModel(imgEl,key){ var s=pic(key); if(s&&imgEl.getAttribute('src')!==s) imgEl.src=s; }
var stageCur=null,stageT=null;
function setStageArt(key){
  var src=pic(key); if(!src||stageCur===key) return;
  stageCur=key;
  var a=document.getElementById('stageImg'), b=document.getElementById('stageImg2');
  if(!a.getAttribute('src')||reduce||window.innerWidth<=760){ a.src=src; return; }
  clearTimeout(stageT);
  b.src=src;
  requestAnimationFrame(function(){ b.classList.add('on'); });
  stageT=setTimeout(function(){ a.src=src; b.classList.remove('on'); },520);
}



var RESORTS=RESORTS_DATA;
var curCity='mrv', curResort=0, curTab=0, curDate=0;

function curDir(){ var c=DATA[curCity], k=RESORTS[curResort].k;
  for(var i=0;i<c.dirs.length;i++) if(c.dirs[i].art===k) return c.dirs[i];
  return null; }
function resortByKey(k){ for(var i=0;i<RESORTS.length;i++) if(RESORTS[i].k===k) return i; return 0; }

/* --- step 1: destination cards --- */
function dealCard(d,i){
  return '<article class="deal" onclick="openResort(\''+d.art+'\')"><div class="deal-art"><img class="mini" alt="" src="'+pic(d.art)+'">'+
   '<span class="badge'+(d.bg==='mint'?' b-mint':'')+'">'+d.badge+'</span>'+
   '<span class="rating"><b class="num">'+d.r+'</b><span>'+d.rn+' отзывов</span></span>'+
   '<div class="deal-title"><h3>'+d.t+'</h3><p>'+d.c+'</p></div></div>'+
   '<div class="deal-body"><div class="chips">'+d.meta.map(function(m){return '<span class="chip">'+m+'</span>'}).join('')+
   (d.left?'<span class="chip left">'+d.left+'</span>':'')+'</div>'+
   '<div class="deal-foot"><div>'+(d.old?'<div class="price-old num">'+d.old+' ₽</div>':'')+
   '<div class="price num"><i>от</i> '+d.p+' ₽</div><div class="price-note">за двоих · бронь 3 000 ₽, дальше '+money(perMonth(priceNum(d.p)))+'/мес</div></div>'+
   '<button class="btn btn-ember btn-s quick" type="button" onclick="quickBook(\''+d.art+'\');event.stopPropagation()">Забронировать за 3 000 ₽</button>'+
   '<button class="deal-alt" type="button" onclick="openResort(\''+d.art+'\');event.stopPropagation()">Сначала посмотреть даты и отели</button></div></div></article>';
}

var BUD=0;
function renderDeals(){
  var c=DATA[curCity], list=c.dirs.filter(function(d){ return !BUD || priceNum(d.p)<=BUD; });
  var el=document.getElementById('deals'); if(!el) return;
  el.innerHTML=(list.length? list : c.dirs).map(dealCard).join('');
  var bs=document.getElementById('buds');
  var opts=[[0,'Любая цена'],[130000,'до 130 000 ₽'],[160000,'до 160 000 ₽'],[220000,'до 220 000 ₽']];
  bs.innerHTML=opts.map(function(o){
    var n=c.dirs.filter(function(d){ return !o[0] || priceNum(d.p)<=o[0]; }).length;
    return '<button type="button" class="bud'+(BUD===o[0]?' on':'')+'" aria-pressed="'+(BUD===o[0])+'" onclick="setBud('+o[0]+')">'+
      o[1]+'<i>'+n+'</i></button>';
  }).join('');
  var note=document.getElementById('budNote');
  if(BUD && !list.length){ note.hidden=false; note.textContent='В этот бюджет из '+c.name+' пока ничего не укладывается — показали всё, что есть. Подпишитесь на цену, и мы напишем, когда появится дешевле.'; }
  else note.hidden=true;
}
function setBud(v){ BUD=v; track('budget','Фильтр по бюджету', v? 'до '+v+' ₽':'любая цена'); renderDeals(); }
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
  renderDeals();
  heroPriceRender();
  document.getElementById('fTo').innerHTML=c.dirs.map(function(d){
    return '<option value="'+d.art+'">'+d.t+'</option>';}).join('');
  setModel(document.getElementById('heroImg'),c.dirs[0].art);
  renderSoon(); renderProg(); watchFill(); renderEb();
  openResort(c.dirs[0].art,true);
}
function pickFromSearch(){ openResort(document.getElementById('fTo').value); }

/* --- step 2: resort detail --- */
/* По умолчанию открываем самую дешёвую дату: иначе человек приходит с карточки
   «от 130 705 ₽», а список отелей начинается со 141 000 ₽ и выглядит обманом. */
function cheapestCalIndex(){
  var c=DATA[curCity], best=0, min=Infinity;
  for(var i=0;i<c.cals.length;i++){ var p=priceNum(c.cals[i][1]); if(p<min){min=p;best=i;} }
  return best;
}
function openResort(key,silent){
  curResort=resortByKey(key); curTab=0; curDate=cheapestCalIndex();
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
  pickedDate=null; renderTabs(); renderCal(); setRoute(curRoute); renderStay(); lpLinkText();
  var cm=document.getElementById('calMonth'); if(cm&&!cm.hidden) cmRender();
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

/* Дни вылета берём из расписания города, а цену — от выбранного направления:
   иначе Хайнань показывал бы цену Бодрума. */
function calMult(i){
  var c=DATA[curCity], min=Infinity;
  for(var j=0;j<c.cals.length;j++) min=Math.min(min, priceNum(c.cals[j][1]));
  return (min&&min<Infinity)? priceNum(c.cals[i][1])/min : 1;
}
function calPrice(i){
  var m=calMult(i);
  if(m===1) return dirPriceNum();          /* самая дешёвая дата — ровно цена «от» */
  return Math.round(dirPriceNum()*m/500)*500;
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
    if(mb2){mb2.textContent=dir.p+' ₽'; document.getElementById('mbSub').textContent='Горы Аватара · за двоих · взнос 3 000 ₽';}
    return;
  }
  document.getElementById('cal').innerHTML=c.cals.map(function(d,i){
    return '<button class="day'+(i===curDate?' sel':'')+(d[2]?' best':'')+'" type="button" onclick="setDate('+i+')">'+
      '<span class="d">'+d[0]+'</span><span class="p num">'+money(calPrice(i))+'</span>'+
      (d[2]?'<span class="tagbest">дешевле всего</span>':'')+'</button>';}).join('');
  var sel=c.cals[curDate], selP=money(calPrice(curDate));
  document.getElementById('calPick').textContent=sel[0]+' · '+selP;
  document.getElementById('rPrice').textContent=selP;
  document.getElementById('ssWhen').textContent=sel[0].replace(/^[а-я]{2}, /,'');
  var mb=document.getElementById('mbPrice'); if(mb){mb.textContent=selP;
    document.getElementById('mbSub').textContent=RESORTS[curResort].n+' · за двоих · бронь от 3 000 ₽';}
  if(window.IZI && !pickedDate){ IZI.ctx.date=sel[0]; IZI.ctx.price=selP; }
}
function setDate(i){ curDate=i; pickedDate=null;
  var _p=money(calPrice(i)); renderCal();
  if(window.IZI){ var _d=DATA[curCity].cals[i];
    IZI.ctx.date=_d[0]; IZI.ctx.price=_p; IZI.ctx.calendarUsed=true;
    iziStep('date'); track('date','Выбрал дату',_d[0]+' · '+_p); leadCtxRender(); renderStay();
    var cm2=document.getElementById('calMonth'); if(cm2&&!cm2.hidden) cmRender(); }
}

/* --- step 3: route --- */


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


/* ---------- полётная программа ---------- */
/* Расписание, остатки мест и цены — демонстрационные. В рабочей версии
   приходят из системы бронирования оператора. */


function plural(n,f){var m=n%100; if(m>=11&&m<=14) return f[2]; m=n%10; return m===1?f[0]:(m>=2&&m<=4?f[1]:f[2]);}
function seatBar(n){ var cap=n<=5?'мало':(n<=12?'средне':'ещё есть'); return {cls:n<=5?'hot':(n<=12?'warm':'ok'), cap:cap}; }
function renderSoon(){
  var g=document.getElementById('soonGrid'); if(!g) return;
  var L=SOON[curCity]||[];
  if(SMALL) L=L.slice(0,3);
  g.innerHTML=L.map(function(d,i){
    var b=seatBar(d.seats), save=d.was? d.was-d.p : 0;
    return '<article class="sc '+b.cls+'">'+
      '<div class="sc-top"><span class="sc-wd">'+d.wd+'</span><b class="sc-d">'+d.date+'</b>'+
        '<span class="sc-n">'+d.n+' '+plural(d.n,['ночь','ночи','ночей'])+'</span></div>'+
      '<h3 class="sc-to">'+d.to+'</h3>'+
      '<p class="sc-pl">'+d.plane+' · вылет из '+DATA[curCity].name+'</p>'+
      '<div class="sc-seats"><i style="--w:'+Math.min(100,d.seats*5)+'%"></i>'+
        '<span>'+plural(d.seats,['осталось','осталось','осталось'])+' <b>'+d.seats+'</b> '+plural(d.seats,['место','места','мест'])+'</span></div>'+
      '<div class="sc-foot"><div class="sc-p"><b>'+money(d.p)+'</b>'+
        (save>0? '<s>'+money(d.was)+'</s><em>−'+money(save)+'</em>':'<span>за двоих, всё включено в цену</span>')+'</div>'+
        '<button type="button" class="btn btn-ember" onclick="soonBook('+i+')">Забронировать</button></div>'+
    '</article>';
  }).join('');
  document.getElementById('soonNote').textContent=
    'Даты, остатки мест и цены показаны как пример. В рабочей версии блок собирается из системы бронирования и обновляется сам — как только место продано, оно пропадает с сайта.';
}
function soonBook(i){
  var d=(SOON[curCity]||[])[i]; if(!d) return;
  track('soon_book','Взял место в ближайшем борту', d.to+' · '+d.date+' · осталось '+d.seats);
  openResort(d.k,true);
  IZI.ctx.date=d.wd+', '+d.date;
  IZI.ctx.price=money(d.p);
  iziStep('date');
  bkOpen('soon', null);
}
function renderProg(){
  var t=document.getElementById('progTable'); if(!t) return;
  var L=PROG[curCity]||[];
  document.getElementById('progCity').textContent=DATA[curCity].name;
  t.innerHTML='<thead><tr><th>Направление</th><th>Дни вылета</th><th>Период программы</th><th>Борт</th><th>Длительность</th><th>Цена от</th><th></th></tr></thead>'+
   '<tbody>'+L.map(function(r){
    return '<tr><td class="pg-to"><b>'+r.to+'</b></td>'+
      '<td><span class="pg-days">'+r.days+'</span></td>'+
      '<td class="pg-per">'+r.per+'</td>'+
      '<td class="pg-pl">'+r.plane+'</td>'+
      '<td class="pg-n">'+r.n+'</td>'+
      '<td class="pg-p"><b>'+money(r.p)+'</b></td>'+
      '<td class="pg-a"><button type="button" onclick="progGo(\''+r.k+'\')">Даты и цены</button></td></tr>';
   }).join('')+'</tbody>';
  document.getElementById('progNote').textContent=
    'Расписание демонстрационное и требует сверки с полётной программой оператора. Дни вылета могут меняться в начале и в конце сезона — точные даты всегда в календаре направления.';
}
function progGo(k){ track('prog_open','Открыл направление из расписания',k); openResort(k); }


var faqOpen=-1;
function renderFaq(){
  var el=document.getElementById('qaList'); if(!el) return;
  el.innerHTML=FAQ.map(function(f,i){
    return '<div class="fq'+(faqOpen===i?' on':'')+'">'+
      '<button type="button" class="fq-q" aria-expanded="'+(faqOpen===i)+'" onclick="faqTog('+i+')">'+
        '<span>'+f.q+'</span><i aria-hidden="true"></i></button>'+
      '<div class="fq-a"'+(faqOpen===i?'':' hidden')+'><p>'+f.a+'</p></div></div>';
  }).join('');
}
function faqTog(i){
  faqOpen = (faqOpen===i? -1 : i);
  if(faqOpen===i) track('faq','Открыл вопрос', FAQ[i].q);
  renderFaq();
}




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
    ai.src=pic(AC.img); ai.alt='Внешний вид '+AC.name;
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




var HF={stars:[],meal:[],line1:false,kids:false,kf:false,sort:'price'};
var favs=[];

function dirPriceNum(){ var d=(typeof curDir==='function')?curDir():null; return d? priceNum(d.p) : 130000; }
function curPriceNum(){
  var t=(IZI.ctx.price||'').replace(/[^0-9]/g,'');
  return t? parseInt(t,10) : dirPriceNum();
}
/* Цена на карточке направления — это «от»: самый дешёвый отель на самой дешёвой
   дате должен ей равняться. Поэтому коэффициенты отелей нормируем по минимуму. */
function hotelK(h){
  for(var key in STAY){ var L=STAY[key];
    if(L.indexOf(h)>=0){ var min=Infinity;
      for(var i=0;i<L.length;i++) min=Math.min(min,L[i].k);
      return (min&&min<Infinity)? h.k/min : h.k; } }
  return h.k;
}
function hotelPrice(h){
  var k=hotelK(h);
  if(k===1) return curPriceNum();          /* самый дешёвый отель — ровно цена тура */
  return Math.round(curPriceNum()*k/500)*500;
}
function money(n){ return n.toLocaleString('ru-RU')+' ₽'; }
function hotelImg(h,key){
  var k=key||h.img;
  return (IMAGES[k]) ? pic(k) : pic(RESORTS[curResort].k);
}
function stayList(){
  var key=RESORTS[curResort].k, list=(STAY[key]||[]).slice();
  list=list.filter(function(h){
    if(HF.stars.length && HF.stars.indexOf(h.s)<0) return false;
    if(HF.meal.length && HF.meal.indexOf(h.meal)<0) return false;
    if(HF.line1 && h.line!==1) return false;
    if(HF.kids && !h.kids) return false;
    if(HF.kf && !h.kf) return false;
    return true;
  });
  list.sort(function(a,b){
    if(HF.sort==='price') return hotelPrice(a)-hotelPrice(b);
    if(HF.sort==='rate') return b.r-a.r;
    return a.dist-b.dist;
  });
  return list;
}
function hfToggle(kind,val){
  if(kind==='stars'||kind==='meal'){
    var arr=HF[kind], i=arr.indexOf(val);
    if(i<0) arr.push(val); else arr.splice(i,1);
  } else if(kind==='sort'){ HF.sort=val; }
  else { HF[kind]=!HF[kind]; }
  track('hotel_filter','Фильтр отелей', kind+': '+(kind==='sort'?val:JSON.stringify(HF[kind])));
  renderStay();
}
function hfReset(){ HF={stars:[],meal:[],line1:false,kids:false,kf:false,sort:HF.sort}; track('hotel_filter','Сбросил фильтры'); renderStay(); }
function favToggle(id,ev){
  if(ev) ev.stopPropagation();
  var i=favs.indexOf(id);
  if(i<0){ favs.push(id); track('fav_add','Добавил в избранное',id); }
  else { favs.splice(i,1); track('fav_del','Убрал из избранного',id); }
  renderStay(); favBar();
}

function renderStay(){
  var g=document.getElementById('hGrid'); if(!g) return;
  var r=RESORTS[curResort], all=(STAY[r.k]||[]), list=stayList();
  var sec=document.getElementById('stay');
  var exc=!!(curDir()&&curDir().excursion);
  if(sec) sec.style.display = (exc||!all.length)? 'none' : '';
  if(exc||!all.length) return;

  document.getElementById('stayCity').textContent=(r.prep||r.n);
  document.getElementById('stayLede').textContent='Отели с местами на '+(IZI.ctx.date||'ближайшую дату')+
    '. Цена — за двоих, за всю поездку: перелёт, трансфер, проживание и страховка.';

  var F=document.getElementById('hFilters');
  /* Сколько отелей останется, если нажать именно эту кнопку: пустые варианты
     видно сразу, и человек не тыкает в фильтр, который ничего не даст. */
  var hfCount=function(kind,val){
    if(kind==='sort') return null;
    var save=JSON.stringify(HF), n;
    if(kind==='stars'||kind==='meal'){ var a=HF[kind], i=a.indexOf(val); if(i<0) a.push(val); else a.splice(i,1); }
    else HF[kind]=!HF[kind];
    n=stayList().length;
    HF=JSON.parse(save);
    return n;
  };
  var mk=function(kind,val,label){
    var on = kind==='sort'? HF.sort===val : (kind==='stars'||kind==='meal'? HF[kind].indexOf(val)>=0 : HF[kind]);
    var n = on? null : hfCount(kind,val);
    var dis = (n===0);
    return '<button type="button" aria-pressed="'+on+'"'+(dis?' disabled title="Под это условие отелей нет"':'')+
      ' onclick="hfToggle(\''+kind+'\','+(typeof val==='number'?val:'\''+val+'\'')+')">'+label+
      (n!==null&&kind!=='sort'? '<i>'+n+'</i>':'')+'</button>';
  };
  F.innerHTML=
    '<div class="hfg"><em>Звёзды</em>'+[3,4,5].map(function(x){return mk('stars',x,x+'★');}).join('')+'</div>'+
    '<div class="hfg"><em>Питание</em>'+mk('meal','завтрак','Завтрак')+mk('meal','полупансион','Полупансион')+mk('meal','всё включено','Всё включено')+'</div>'+
    '<div class="hfg">'+mk('line1',1,'1-я линия')+mk('kids',1,'Для детей')+mk('kf',1,'Ребёнок бесплатно')+'</div>'+
    ((HF.stars.length||HF.meal.length||HF.line1||HF.kids||HF.kf)? '<button class="hreset" type="button" onclick="hfReset()">Сбросить</button>':'');

  document.getElementById('hSort').innerHTML='<em>Сортировка</em>'+
    mk('sort','price','Сначала дешевле')+mk('sort','rate','По рейтингу')+mk('sort','dist','Ближе к морю');

  document.getElementById('hCount').innerHTML= list.length
    ? 'Нашли <b>'+list.length+'</b> из '+all.length+' отелей'
    : 'По этим условиям ничего нет';

  if(!list.length){
    g.innerHTML='<div class="hempty"><b>Под такие условия отелей нет</b>Попробуйте снять один из фильтров — например, «1-я линия».<br><button class="hreset" type="button" onclick="hfReset()">Сбросить фильтры</button></div>';
    return;
  }
  g.innerHTML=list.map(hcardHtml).join('');
}
function hcardHtml(h){
    return '<article class="hcard" onclick="hpOpen(\''+h.id+'\')">'+
      '<div class="hc-art"><img loading="lazy" decoding="async" alt="'+esc(h.n)+'" src="'+hotelImg(h)+'">'+
        (h.line===1? '<span class="hc-line">1-я линия</span>':'')+
        '<button class="hc-fav'+(favs.indexOf(h.id)>=0?' on':'')+'" type="button" title="В избранное" onclick="favToggle(\''+h.id+'\',event)">'+(favs.indexOf(h.id)>=0?'★':'☆')+'</button>'+
        '<span class="hc-rate"><b>'+h.r.toString().replace('.',',')+'</b> · '+h.rn+' отзывов</span>'+
      '</div>'+
      '<div class="hc-b">'+
        '<div><span class="hc-stars">'+'★'.repeat(h.s)+'</span><h3 class="hc-n">'+esc(h.n)+'</h3></div>'+
        '<p class="hc-loc">'+(h.dist? h.dist+' м до моря':'Выход к морю с территории')+' · '+h.meal+'</p>'+
        '<div class="hc-tags">'+(h.kf?'<span class="hc-tag hc-kf">Ребёнок бесплатно</span>':'')+(h.kids?'<span class="hc-tag">Для детей</span>':'')+
          '<span class="hc-tag">'+(h.line===1?'1-я линия':'2-я линия')+'</span>'+
          '<span class="hc-tag">'+h.s+' звезды</span></div>'+
        '<div class="hc-f"><div><div class="hc-p num">'+money(hotelPrice(h))+'</div>'+
          '<div class="hc-pn">за двоих · или '+money(perMonth(hotelPrice(h)))+'/мес × 6</div></div>'+
          '<button class="hc-more" type="button" onclick="hpOpen(\''+h.id+'\');event.stopPropagation()">Подробнее</button></div>'+
      '</div></article>';
}

/* ---------- карточка отеля ---------- */
var HPcur=null;
function hpFind(id){ for(var k in STAY){ for(var i=0;i<STAY[k].length;i++) if(STAY[k][i].id===id) return STAY[k][i]; } return null; }
function hpOpen(id){
  var h=hpFind(id); if(!h) return;
  HPcur=h; document.getElementById('hpWrap').hidden=false; document.body.style.overflow='hidden';
  iziStep('detail'); if(IZI.ctx.hotels.indexOf(h.n)<0) IZI.ctx.hotels.push(h.n);
  track('hotel_view','Открыл отель',h.n);
  hpRender(h.gal[0]);
}
function hpClose(){ document.getElementById('hpWrap').hidden=true; document.body.style.overflow=''; }
function hpRender(main){
  var h=HPcur; if(!h) return;
  var b=document.getElementById('hpBody');
  b.innerHTML=
    '<p class="bk-eyebrow">'+'★'.repeat(h.s)+' · '+(h.line===1?'1-я линия':'2-я линия')+' · '+h.meal+'</p>'+
    '<h3 class="bk-h">'+esc(h.n)+'</h3>'+
    '<div class="hp-gal"><img class="hp-main" alt="'+esc(h.n)+'" src="'+hotelImg(h,main)+'">'+
      '<div class="hp-side">'+h.gal.slice(1,3).map(function(k){
        return '<img alt="" src="'+hotelImg(h,k)+'" onclick="hpRender(\''+k+'\')">';}).join('')+'</div></div>'+
    '<p class="bk-p">'+esc(h.about)+'</p>'+
    '<div class="hp-meta"><span class="hc-tag">Рейтинг '+h.r.toString().replace('.',',')+' · '+h.rn+' отзывов</span>'+
      '<span class="hc-tag">'+(h.dist? h.dist+' м до моря':'Выход к морю')+'</span>'+
      (h.kids?'<span class="hc-tag">Для детей</span>':'<span class="hc-tag">Для взрослых</span>')+'</div>'+
    '<p class="crmp-t" style="color:#7F9CB2">Что рядом</p>'+
    '<div class="hp-near">'+h.near.map(function(n){return '<div><i>'+n[0]+'</i>'+esc(n[1])+'</div>';}).join('')+'</div>'+
    '<p class="crmp-t" style="color:#7F9CB2">Номера</p>'+
    '<div class="hp-rooms">'+h.rooms.map(function(r){
      return '<div class="hp-room"><div><b>'+esc(r[0])+'</b><br><span>'+esc(r[1])+'</span></div>'+
             '<em>'+money(Math.round(hotelPrice(h)*r[2]/500)*500)+'</em></div>';}).join('')+'</div>'+
    '<div class="bk-sum" style="margin-top:18px"><div class="bk-sr tot"><span>За двоих, всё включая перелёт</span><b>'+money(hotelPrice(h))+'</b></div></div>'+
    '<div class="bk-act">'+
      '<button class="bk-ghost" type="button" onclick="favToggle(\''+h.id+'\');hpRender(\''+main+'\')">'+(favs.indexOf(h.id)>=0?'★ В избранном':'☆ В избранное')+'</button>'+
      '<button class="btn btn-ember btn-l" type="button" onclick="hpClose();bkOpen(\'hotel\',\''+h.id+'\')">Забронировать за 3 000 ₽</button></div>'+
    '<p class="bk-note">Отель, фотографии и состав номеров — демонстрационные. В рабочей версии подставляются из системы бронирования.</p>';
}

/* ---------- календарь цен на месяц ---------- */
var WD=['вс','пн','вт','ср','чт','пт','сб'], MON=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
var pickedDate=null;
function depDays(){
  var d=curDir(); if(!d) return [2,6];
  var m={'вс':0,'пн':1,'вт':2,'ср':3,'чт':4,'пт':5,'сб':6}, out=[];
  (d.meta[0]||'').split('·').forEach(function(x){ var k=x.trim().toLowerCase(); if(m[k]!==undefined) out.push(m[k]); });
  return out.length? out : [2,6];
}
/* Цена дня месяца. Нормируем так, чтобы самый дешёвый день вылета был ровно
   ценой «от» с карточки направления: календарь не может обещать меньше. */
function cmMult(day){ return 1+((day*37)%27)/100; }
function cmMinMult(){
  var dd=depDays(), min=Infinity;
  for(var d=1;d<=30;d++){
    if(dd.indexOf(new Date(2026,8,d).getDay())<0) continue;
    min=Math.min(min,cmMult(d));
  }
  return (min<Infinity)? min : 1;
}
function cmPrice(day){
  var base=dirPriceNum(), k=cmMult(day)/cmMinMult();
  if(k===1) return base;
  return Math.round(base*k/500)*500;
}
function cmToggle(){
  var el=document.getElementById('calMonth');
  el.hidden=!el.hidden;
  document.getElementById('calMore').textContent=el.hidden?'Календарь цен на месяц':'Свернуть календарь';
  if(!el.hidden){ track('cal_month','Открыл календарь на месяц'); cmRender(); }
}
function cmRender(){
  var Y=2026,M=8; /* сентябрь */
  var first=new Date(Y,M,1), days=new Date(Y,M+1,0).getDate(), dd=depDays();
  var cells='', shift=(first.getDay()+6)%7;
  var prices=[]; for(var d=1;d<=days;d++) if(dd.indexOf(new Date(Y,M,d).getDay())>=0) prices.push(cmPrice(d));
  var min=Math.min.apply(null,prices);
  cells+=['пн','вт','ср','чт','пт','сб','вс'].map(function(w){return '<div class="cm-wd">'+w+'</div>';}).join('');
  for(var i=0;i<shift;i++) cells+='<div></div>';
  for(var d=1;d<=days;d++){
    var dt=new Date(Y,M,d), isDep=dd.indexOf(dt.getDay())>=0;
    if(!isDep){ cells+='<div class="cm-d off"><span class="d">'+d+'</span></div>'; continue; }
    var p=cmPrice(d), lbl=WD[dt.getDay()]+', '+d+' сен';
    var sel=(pickedDate&&pickedDate.label===lbl);
    cells+='<div class="cm-d'+(sel?' sel':'')+(p===min?' best':'')+'" onclick="cmPick('+d+')" title="'+lbl+'">'+
      '<span class="d">'+d+'</span><span class="p">'+Math.round(p/1000)+'т</span></div>';
  }
  document.getElementById('cmGrid').innerHTML=cells;
  document.getElementById('cmSub').textContent='Вылеты по расписанию: '+(curDir()? curDir().meta[0]:'—');
  document.getElementById('cmNote').innerHTML='Цены за двоих на семь ночей, ориентировочные. Серым — дни без вылета по этому направлению. Зелёным — самый дешёвый вылет месяца. '+
    '<a href="#watchSec" onclick="track(\'watch_link\',\'Пошёл подписываться на цену\');jump(\'#watchSec\');return false" style="color:var(--azure);white-space:nowrap">Нет подходящей даты →</a>';
}
function cmPick(d){
  var dt=new Date(2026,8,d), lbl=WD[dt.getDay()]+', '+d+' сен', p=cmPrice(d);
  pickedDate={label:lbl,price:p};
  IZI.ctx.date=lbl; IZI.ctx.price=p.toLocaleString('ru-RU')+' ₽'; IZI.ctx.calendarUsed=true;
  iziStep('date'); track('date','Выбрал дату в календаре месяца',lbl+' · '+p);
  document.getElementById('calPick').textContent=lbl+' · '+p.toLocaleString('ru-RU')+' ₽';
  document.getElementById('rPrice').textContent=p.toLocaleString('ru-RU')+' ₽';
  document.getElementById('ssWhen').textContent=d+' сен';
  var mb=document.getElementById('mbPrice'); if(mb) mb.textContent=p.toLocaleString('ru-RU')+' ₽';
  document.querySelectorAll('#cal .day').forEach(function(b){b.classList.remove('sel')});
  cmRender(); renderStay(); leadCtxRender();
}



/* ---------- быстрый путь: три клика до брони ---------- */
function priceNum(v){ return parseInt(String(v).replace(/[^0-9]/g,''),10)||0; }
var INSTALL_M=6;
function perMonth(n){ return Math.ceil((n-BK_DEPOSIT)/INSTALL_M/100)*100; }
function heroPriceRender(){
  var el=document.getElementById('heroPrice'); if(!el) return;
  var c=DATA[curCity], min=null;
  c.dirs.forEach(function(d){ var p=priceNum(d.p); if(min===null||p<min) min=p; });
  el.innerHTML='<b class="num">от '+min.toLocaleString('ru-RU')+' ₽</b>'+
    '<span>за двоих — перелёт, отель, трансфер и страховка</span>'+
    '<em>бронь от 3 000 ₽</em>';
}
function cheapestDay(){
  var dd=depDays(), best=null, bp=null;
  for(var d=1;d<=30;d++){
    if(dd.indexOf(new Date(2026,8,d).getDay())<0) continue;
    var p=cmPrice(d); if(bp===null||p<bp){ bp=p; best=d; }
  }
  return best;
}
/* Для быстрой брони берём самый дешёвый отель: карточка обещает цену «от»,
   и открывать по ней самый дорогой вариант — обман. */
function cheapestHotel(){
  var list=STAY[RESORTS[curResort].k]||[];
  if(!list.length) return null;
  return list.slice().sort(function(a,b){ return a.k-b.k; })[0];
}
function quickBook(key){
  openResort(key,true);
  var d=cheapestDay();
  if(d) cmPick(d);
  var h=cheapestHotel();
  track('quick_book','Быстрая бронь с карточки', RESORTS[curResort].n+(h? ' · '+h.n:''));
  bkOpen('quick', h? h.id : null);
}

/* ---------- свёртка тяжёлых блоков на телефоне ---------- */
function mobCollapse(sel,label){
  var sec=document.querySelector(sel); if(!sec) return;
  var wrap=sec.querySelector('.wrap'); if(!wrap) return;
  var kids=[].slice.call(wrap.children);
  var head=kids.shift();                      /* заголовок остаётся видимым */
  if(!kids.length) return;
  var body=document.createElement('div'); body.className='mcol-body';
  kids.forEach(function(k){ body.appendChild(k); });
  var btn=document.createElement('button');
  btn.type='button'; btn.className='mcol-t'; btn.textContent=label;
  btn.onclick=function(){
    var closed=sec.classList.toggle('closed');
    btn.textContent = closed? label : 'Свернуть';
    if(!closed) track('expand','Раскрыл блок',sel);
  };
  wrap.appendChild(body); wrap.appendChild(btn);
  sec.classList.add('mcol','closed');
}

/* ---------- подборка, сравнение, ссылка ---------- */
function msgStub(name){
  track('messenger','Нажал мессенджер',name);
  toast('В рабочей версии здесь открывается '+name+' оператора. Номер для мессенджеров нужно взять у заказчика: 8 800 для них не подходит.');
}
function toast(msg){
  var t=document.getElementById('toast'); if(!t) return;
  t.textContent=msg; t.classList.add('on');
  clearTimeout(t._t); t._t=setTimeout(function(){t.classList.remove('on');},2600);
}
function favBar(){
  var b=document.getElementById('favBar'); if(!b) return;
  document.getElementById('favN').textContent=favs.length;
  b.classList.toggle('on', favs.length>0);
}
function favShare(){
  var r=RESORTS[curResort];
  var h='#p='+[curCity, r.k, encodeURIComponent(IZI.ctx.date||''), favs.join('.')].join('~');
  var url=location.origin+location.pathname+h;
  track('share','Поделился подборкой', favs.length+' отел.');
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(function(){toast('Ссылка на подборку скопирована');},
      function(){ history.replaceState(null,'',h); toast('Ссылка в адресной строке — скопируйте её'); });
  } else { history.replaceState(null,'',h); toast('Ссылка в адресной строке — скопируйте её'); }
}
function favRestore(){
  var m=(location.hash||'').match(/^#p=(.+)$/); if(!m) return false;
  var p=m[1].split('~');
  try{
    if(p[0]&&DATA[p[0]]) setCity(p[0]);
    if(p[1]) openResort(p[1],true);
    if(p[2]) { IZI.ctx.date=decodeURIComponent(p[2]); }
    if(p[3]) favs=p[3].split('.').filter(Boolean);
    renderStay(); favBar(); leadCtxRender();
    track('share_open','Открыл присланную подборку', favs.length+' отел.');
    if(favs.length){ setTimeout(function(){ var el=document.getElementById('stay'); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); },500); }
    return true;
  }catch(e){ return false; }
}
function cmpOpen(){
  if(!favs.length){ toast('Отметьте звёздочкой отели, которые сравниваем'); return; }
  document.getElementById('cmpWrap').hidden=false; document.body.style.overflow='hidden';
  track('compare_open','Открыл сравнение', favs.length+' отел.');
  cmpRender();
}
function cmpClose(){ document.getElementById('cmpWrap').hidden=true; document.body.style.overflow=''; }
function cmpRender(){
  var list=favs.map(hpFind).filter(Boolean);
  var b=document.getElementById('cmpBody');
  if(!list.length){ b.innerHTML='<h3 class="bk-h">В подборке пусто</h3><p class="bk-p">Отметьте звёздочкой отели в выдаче — они появятся здесь рядом.</p>'; return; }
  var minP=Math.min.apply(null,list.map(hotelPrice)),
      maxR=Math.max.apply(null,list.map(function(h){return h.r;})),
      minD=Math.min.apply(null,list.map(function(h){return h.dist;}));
  b.innerHTML='<p class="bk-eyebrow">Подборка · '+list.length+' отел'+(list.length===1?'ь':(list.length<5?'я':'ей'))+'</p>'+
    '<h3 class="bk-h">Сравнение</h3>'+
    '<p class="bk-p">Зелёным отмечено лучшее значение в строке. Ссылку на эту подборку можно отправить тому, с кем едете.</p>'+
    '<div class="cmp-tbl" style="grid-template-columns:repeat('+list.length+',minmax(210px,1fr));margin-top:16px">'+
    list.map(function(h){
      var p=hotelPrice(h);
      return '<div class="cmp-col"><img alt="" src="'+hotelImg(h)+'">'+
        '<div class="cmp-h"><span class="st">'+'★'.repeat(h.s)+'</span><b>'+esc(h.n)+'</b></div>'+
        '<div class="cmp-r'+(p===minP?' win':'')+'"><span>Цена</span><b>'+money(p)+'</b></div>'+
        '<div class="cmp-r'+(h.r===maxR?' win':'')+'"><span>Рейтинг</span><b>'+h.r.toString().replace('.',',')+' · '+h.rn+'</b></div>'+
        '<div class="cmp-r'+(h.dist===minD?' win':'')+'"><span>До моря</span><b>'+(h.dist? h.dist+' м':'на территории')+'</b></div>'+
        '<div class="cmp-r"><span>Питание</span><b>'+esc(h.meal)+'</b></div>'+
        '<div class="cmp-r"><span>Линия</span><b>'+(h.line===1?'первая':'вторая')+'</b></div>'+
        '<div class="cmp-r"><span>С детьми</span><b>'+(h.kids?'да':'взрослый отель')+'</b></div>'+
        '<div class="cmp-f"><button class="btn btn-ember btn-s" type="button" onclick="cmpClose();bkOpen(\'compare\',\''+h.id+'\')">Забронировать</button>'+
        '<button class="cmp-del" type="button" onclick="favToggle(\''+h.id+'\');cmpRender()">Убрать из подборки</button></div>'+
      '</div>';}).join('')+'</div>'+
    '<div class="bk-act"><button class="bk-ghost" type="button" onclick="cmpClose()">Закрыть</button>'+
    '<button class="btn btn-ember btn-l" type="button" onclick="favShare()">Скопировать ссылку на подборку</button></div>';
}

/* ---------- моя поездка ---------- */
var TRIP=null;
function tripPlane(){ var k=RESORTS[curResort].k; return (k==='hainan'||k==='avatar')?'b777':(curCity==='skx'?'ssj':'a321'); }
function seatBusy(row,L){ var h=(row*31+L.charCodeAt(0)*7)%100; return h<42; }
function trOpen(){
  if(!TRIP) return;
  document.getElementById('trWrap').hidden=false; document.body.style.overflow='hidden';
  track('trip_open','Открыл «Мою поездку»',TRIP.no);
  trRender();
}
function trClose(){ document.getElementById('trWrap').hidden=true; document.body.style.overflow=''; }
function trPick(row,L){
  var seat=row+L, i=TRIP.seats.indexOf(seat);
  if(i>=0) TRIP.seats.splice(i,1);
  else { if(TRIP.seats.length>=TRIP.pax){ toast('Мест выбрано столько, сколько туристов'); return; } TRIP.seats.push(seat); }
  track('seat_pick','Выбор места', TRIP.seats.join(', ')||'сброшено');
  trRender();
}
function trRender(){
  var t=TRIP, AC=FLEET[t.plane], b=document.getElementById('trBody');
  var grid='', rows='';
  for(var row=1;row<=AC.rows;row++){
    var seats=smSeatsFor(AC,row), cab=smCabinFor(AC,row);
    grid+='<div class="smcol">';
    for(var i=0;i<AC.letters.length;i++){
      var L=AC.letters[i];
      if(L==='|'){ grid+='<div class="smcell aisle"></div>'; continue; }
      if(seats.indexOf(L)<0){ grid+='<div class="smcell"></div>'; continue; }
      var busy=seatBusy(row,L), mine=t.seats.indexOf(row+L)>=0;
      grid+='<div class="smcell smseat '+cab.k+(busy?' busy':' pickable')+(mine?' mine':'')+'"'+
        (busy?'':' onclick="trPick('+row+',\''+L+'\')"')+' title="Ряд '+row+', место '+L+(busy?' — занято':'')+'"></div>';
    }
    grid+='</div>';
    rows+='<div class="smrn">'+((row===1||row%5===0||row===AC.rows)?row:'')+'</div>';
  }
  var d=new Date(2026,8,t.day), now=new Date(), left=Math.max(0,Math.ceil((d-now)/86400000));
  b.innerHTML=
    '<p class="bk-eyebrow">Заявка '+esc(t.no)+'</p>'+
    '<div class="trip-h"><h3 class="bk-h" style="margin:0">'+esc(t.from)+' → '+esc(t.to)+'</h3>'+
      '<span class="trip-st'+(t.paid?' ok':'')+'">'+(t.paid?'✓ Депозит получен':'● Ожидает оплаты депозита')+'</span></div>'+
    '<p class="bk-p">'+esc(t.date)+' · '+esc(t.hotel||'отель подбирается')+' · '+t.pax+' турист'+(t.pax===1?'':(t.pax<5?'а':'ов'))+'</p>'+
    '<div class="trip-cd"><div><b>'+left+'</b><span>дней до вылета</span></div>'+
      '<div><b>'+t.deposit.toLocaleString('ru-RU')+'</b><span>внесено, ₽</span></div>'+
      '<div><b>'+t.rest.toLocaleString('ru-RU')+'</b><span>остаток, ₽</span></div>'+
      '<div><b style="font-size:20px">'+(t.day-14>0? (t.day-14)+' сен' : 'сейчас')+'</b><span>оплатить остаток до</span></div></div>'+

    '<p class="crmp-t" style="color:#7F9CB2">Что дальше</p>'+
    '<div class="trip-list">'+
      '<div class="trip-i '+(t.paid?'done':'wait')+'"><i>'+(t.paid?'✓':'1')+'</i><span><b>Оплатить депозит 3 000 ₽</b><br>Фиксирует цену и место в блоке</span><em>'+(t.paid?'готово':'сейчас')+'</em></div>'+
      '<div class="trip-i wait"><i>2</i><span><b>Прислать данные туристов</b><br>Загранпаспорта всех, кто едет</span><em>за 20 дней</em></div>'+
      (t.visa? '<div class="trip-i wait"><i>3</i><span><b>Оформить визу</b><br>Готовим документы и записываем в центр</span><em>за 30 дней</em></div>':'')+
      '<div class="trip-i wait"><i>'+(t.visa?4:3)+'</i><span><b>Оплатить остаток '+t.rest.toLocaleString('ru-RU')+' ₽</b><br>Можно частями или в рассрочку 0%</span><em>за 14 дней</em></div>'+
      '<div class="trip-i wait"><i>'+(t.visa?5:4)+'</i><span><b>Получить ваучер и билеты</b><br>Придут на почту одним письмом</span><em>за 7 дней</em></div>'+
    '</div>'+

    '<p class="crmp-t" style="color:#7F9CB2">Ваш рейс и место</p>'+
    '<p class="bk-p" style="font-size:13.5px">'+esc(AC.name)+' · вылет '+esc(t.date)+' · регистрация онлайн откроется за 48 часов. Место можно выбрать уже сейчас — оно закрепится после оплаты депозита.</p>'+
    '<div class="seatpick">'+
      '<div class="sp-legend"><span><i style="background:#3E5C74"></i>свободно</span>'+
        '<span><i style="background:#24384A;opacity:.6"></i>занято</span>'+
        '<span><i style="background:#F5A93E"></i>ваше место</span></div>'+
      '<div class="smscroll"><div class="smplane"><div class="smnose"></div>'+
        '<div class="smbody"><div class="smgrid">'+grid+'</div><div class="smrows">'+rows+'</div></div>'+
        '<div class="smtail"></div></div></div>'+
      '<p class="sp-out">'+(t.seats.length? 'Ваши места: <b>'+t.seats.join(', ')+'</b>' : 'Выберите '+t.pax+' мест'+(t.pax===1?'о':'а')+' — нажмите на свободные кресла')+'</p>'+
    '</div>'+

    '<div class="bk-act"><button class="bk-ghost" type="button" onclick="trClose()">Закрыть</button>'+
      '<button class="btn btn-ember btn-l" type="button" onclick="crmToggle();trClose()">Что ушло в CRM</button></div>'+
    '<p class="bk-note">Экран после брони. Сроки и состав документов — пример и требуют подтверждения туроператором.</p>';
}

/* ---------- сбор данных: событийный слой и профиль лида ---------- */
var IZI={
  sid:'', started:Date.now(), events:[], maxScroll:0,
  src:{}, ctx:{from:'',fromName:'',to:'',toName:'',date:'',price:'',pax:'2 взрослых',
       resorts:[], tabs:[], seatmap:0, planes:[], compared:false, calendarUsed:false, hotels:[]},
  steps:{visit:0,city:0,dest:0,detail:0,date:0,intent:0,book:0,addons:0,lead:0},
  lead:{type:'',adults:2,kids:0,inf:0,deposit:0,email:'',addons:[],addonsSum:0,total:0}
};
var FUNNEL=[['visit','Зашёл на сайт'],['city','Выбрал город вылета'],['dest','Открыл направление'],
            ['detail','Изучил детали'],['date','Выбрал дату'],['intent','Нажал кнопку действия'],
            ['book','Начал бронирование'],['addons','Дошёл до допродаж'],['lead','Заявка создана']];

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
      adults:IZI.lead.adults, kids:IZI.lead.kids, infants:IZI.lead.inf||0,
      deposit:IZI.lead.deposit || 0
    },
    choice:{
      from:IZI.ctx.fromName, to:IZI.ctx.toName, date:IZI.ctx.date,
      price:IZI.ctx.price, pax:IZI.ctx.pax,
      hotel: (typeof BK!=='undefined'&&BK.hotel)? BK.hotel.n+' '+BK.hotel.s+'*, '+BK.hotel.meal : '',
      addons: (IZI.lead.addons||[]).slice(),
      addonsSum: IZI.lead.addonsSum||0,
      totalRub: IZI.lead.total||0
    },
    behaviour:{
      resortsViewed:IZI.ctx.resorts.slice(),
      tabsViewed:IZI.ctx.tabs.slice(),
      seatmapOpened:IZI.ctx.seatmap,
      planesViewed:IZI.ctx.planes.slice(),
      routeCompared:IZI.ctx.compared,
      favourites:(typeof favs!=='undefined'? favs.slice():[]),
      hotelsViewed:IZI.ctx.hotels? IZI.ctx.hotels.slice():[],
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
var BK={step:0, adults:2, kids:0, inf:0, done:false, src:'', name:'', phone:'', email:'', cons:false, hotel:null, add:{}};
var BK_DEPOSIT=3000;
var BK_STEPS=4;

/* Коэффициенты размещения. Демонстрационные: в рабочей версии приходят из
   ценовой матрицы туроператора вместе с ценой тура. */


function kidsFree(){ return (BK.hotel && BK.hotel.kf && BK.kids>0) ? 1 : 0; }
function paidKids(){ return Math.max(0, BK.kids-kidsFree()); }
function paxTotal(base){
  if(!base) return 0;
  var half=base/2, t;
  if(BK.adults<=1) t=half*PAX_K.single;
  else t=base+(BK.adults-2)*half*PAX_K.extraAdult;
  t+=paidKids()*half*PAX_K.child;
  t+=BK.inf*PAX_K.infant;
  return Math.round(t/100)*100;
}
function bkBase(){ return BK.hotel? hotelPrice(BK.hotel) : curPriceNum(); }
function paxCount(){ return BK.adults+BK.kids; }


function addonById(id){ for(var i=0;i<ADDONS.length;i++) if(ADDONS[i].id===id) return ADDONS[i]; return null; }
function addonCost(a){ return a.per==='чел' ? a.p*Math.max(1,paxCount()) : a.p; }
function addonsTotal(){ var s=0; for(var id in BK.add){ if(BK.add[id]){ var a=addonById(id); if(a) s+=addonCost(a); } } return s; }
function addonsList(){ var r=[]; for(var i=0;i<ADDONS.length;i++) if(BK.add[ADDONS[i].id]) r.push(ADDONS[i].n); return r; }
function bkToggleAdd(id){
  BK.add[id]=!BK.add[id];
  var a=addonById(id);
  track(BK.add[id]?'addon_on':'addon_off', (BK.add[id]?'Добавил: ':'Убрал: ')+(a?a.n:id), a?addonCost(a):0);
  bkRender();
}

function bkIsGroup(){ var d=(typeof curDir==='function')?curDir():null; return !!(d&&d.excursion); }
function bkPriceLine(){
  var b=bkBase();
  return b? money(paxTotal(b)) : (IZI.ctx.price||'уточняется');
}
function paxWord(){
  var p=[]; p.push(BK.adults+' взр.');
  if(BK.kids) p.push(BK.kids+' реб.');
  if(BK.inf) p.push(BK.inf+' до 2 лет');
  return p.join(' + ');
}
function bkOpen(src,hotelId){
  BK.step=1; BK.done=false; BK.src=src||'';
  BK.hotel = hotelId? hpFind(hotelId) : null;
  if(BK.hotel) track('hotel_pick','Выбрал отель для брони',BK.hotel.n);
  var w=document.getElementById('bkWrap'); w.hidden=false;
  document.body.style.overflow='hidden';
  IZI.ctx.pax=paxWord(); IZI.lead.adults=BK.adults; IZI.lead.kids=BK.kids; IZI.lead.inf=BK.inf;
  iziStep('intent'); iziStep('book');
  track('book_open','Открыл бронирование', (IZI.ctx.toName||'—')+' · '+(IZI.ctx.date||'дата не выбрана'));
  bkRender();
}
function bkClose(){
  var w=document.getElementById('bkWrap');
  if(!BK.done && BK.step) track('book_abandon','Закрыл бронирование','шаг '+BK.step+' из 4');
  w.hidden=true; document.body.style.overflow='';
  BK.step=0; crmRender();
}
function bkPaxSet(kind,delta){
  if(kind==='a') BK.adults=Math.max(1,Math.min(6,BK.adults+delta));
  else if(kind==='k') BK.kids=Math.max(0,Math.min(4,BK.kids+delta));
  else BK.inf=Math.max(0,Math.min(2,BK.inf+delta));
  IZI.lead.adults=BK.adults; IZI.lead.kids=BK.kids; IZI.lead.inf=BK.inf;
  IZI.ctx.pax=paxWord();
  track('book_pax','Изменил состав', paxWord());
  bkRender(); leadCtxRender();
}
function bkNext(){
  if(BK.step===3){
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
    BK.name=n; BK.phone=p; BK.email=e; BK.cons=true;
    IZI.lead.name=n; IZI.lead.phone=p; IZI.lead.email=e;
    track('book_contacts','Заполнил контакты',n);
  }
  BK.step++;
  if(BK.step===2){ iziStep('addons'); track('book_addons','Дошёл до допродаж'); }
  if(BK.step===4) track('book_terms','Дошёл до условий');
  bkRender();
}
function bkPay(){
  BK.done=true; BK.step=5;
  var base=bkBase(), tour=paxTotal(base), extra=addonsTotal(), total=tour+extra;
  IZI.lead.type = bkIsGroup()? 'group' : 'booking';
  IZI.lead.deposit = BK_DEPOSIT;
  IZI.lead.addons = addonsList();
  IZI.lead.addonsSum = extra;
  IZI.lead.total = total;
  iziStep('lead');
  track('lead','Создана бронь', (IZI.ctx.toName||'—')+' · '+BK_DEPOSIT+' ₽'+(extra?' + допы '+extra+' ₽':''));
  BK.no='IZI-'+new Date().toISOString().slice(2,10).replace(/-/g,'')+'-'+String(Math.floor(Math.random()*900+100));
  var day=parseInt((IZI.ctx.date||'').replace(/[^0-9]/g,''),10)||15;
  TRIP={no:BK.no, from:IZI.ctx.fromName, to:IZI.ctx.toName, date:IZI.ctx.date||'дата уточняется',
        hotel:BK.hotel? BK.hotel.n+' '+BK.hotel.s+'★' : '', pax:paxCount(), day:day,
        deposit:BK_DEPOSIT, rest:Math.max(0,total-BK_DEPOSIT), paid:false, seats:[],
        addons:addonsList(),
        plane:tripPlane(), visa:(RESORTS[curResort].k==='hainan'||RESORTS[curResort].k==='avatar')};
  bkRender();
}

function bkTotalsHtml(){
  var base=bkBase(), tour=paxTotal(base), extra=addonsTotal(), total=tour+extra;
  var h='';
  h+='<div class="bk-sr wide"><span>Тур · '+esc(paxWord())+'</span><b>'+(tour?money(tour):'уточняется')+'</b></div>';
  if(extra) h+='<div class="bk-sr wide"><span>Дополнительно · '+addonsList().length+' поз.</span><b>'+money(extra)+'</b></div>';
  if(tour) h+='<div class="bk-sr wide"><span>Итого за поездку</span><b>'+money(total)+'</b></div>';
  h+='<div class="bk-sr wide tot"><span>К оплате сейчас</span><b>'+money(BK_DEPOSIT)+'</b></div>';
  if(tour) h+='<div class="bk-sr wide"><span>Остаток за 14 дней до вылета</span><b>'+money(Math.max(0,total-BK_DEPOSIT))+'</b></div>';
  if(tour) h+='<div class="bk-sr wide"><span>Или в рассрочку без процентов</span><b>'+money(perMonth(total))+' × '+INSTALL_M+' мес</b></div>';
  return h;
}

function bkRender(){
  var st=document.getElementById('bkSteps'), b=document.getElementById('bkBody'), d=IZI.ctx, grp=bkIsGroup();
  st.innerHTML=[1,2,3,4].map(function(i){return '<i class="'+(BK.step>=i?'on':'')+'"></i>';}).join('');
  st.style.visibility = BK.step>=5 ? 'hidden' : 'visible';

  if(BK.step===1){
    var base=bkBase(), half=base/2;
    b.innerHTML=
      '<p class="bk-eyebrow">Шаг 1 из 4 · что бронируем</p>'+
      '<h3 class="bk-h">'+(grp?'Место в группе':'Бронь места и цены')+'</h3>'+
      '<p class="bk-p">'+(grp
        ? 'Группа с фиксированной датой вылета. Взнос закрепляет за вами место, остальное — после подтверждения.'
        : 'Депозит фиксирует цену и место в блоке. Остаток вы платите за 14 дней до вылета.')+'</p>'+
      '<div class="bk-sum">'+
        '<div class="bk-sr"><span>Откуда</span><b>'+esc(d.fromName||'—')+'</b></div>'+
        '<div class="bk-sr"><span>Куда</span><b>'+esc(d.toName||'не выбрано')+'</b></div>'+
        '<div class="bk-sr"><span>'+(grp?'Вылет группы':'Дата вылета')+'</span><b>'+esc(d.date||'не выбрана')+'</b></div>'+
        (BK.hotel? '<div class="bk-sr"><span>Отель</span><b>'+esc(BK.hotel.n)+' '+'★'.repeat(BK.hotel.s)+'</b></div>'+
                   '<div class="bk-sr"><span>Питание</span><b>'+esc(BK.hotel.meal)+'</b></div>' : '')+
      '</div>'+
      '<div class="bk-pax">'+
        '<div class="bk-cnt"><span>Взрослые</span><div>'+
          '<button type="button" aria-label="Меньше взрослых" onclick="bkPaxSet(\'a\',-1)"'+(BK.adults<=1?' disabled':'')+'>−</button>'+
          '<b>'+BK.adults+'</b>'+
          '<button type="button" aria-label="Больше взрослых" onclick="bkPaxSet(\'a\',1)"'+(BK.adults>=6?' disabled':'')+'>+</button></div></div>'+
        '<div class="bk-cnt"><span>Дети 2–11 лет</span><div>'+
          '<button type="button" aria-label="Меньше детей" onclick="bkPaxSet(\'k\',-1)"'+(BK.kids<=0?' disabled':'')+'>−</button>'+
          '<b>'+BK.kids+'</b>'+
          '<button type="button" aria-label="Больше детей" onclick="bkPaxSet(\'k\',1)"'+(BK.kids>=4?' disabled':'')+'>+</button></div></div>'+
        '<div class="bk-cnt"><span>Малыши до 2 лет</span><div>'+
          '<button type="button" aria-label="Меньше малышей" onclick="bkPaxSet(\'i\',-1)"'+(BK.inf<=0?' disabled':'')+'>−</button>'+
          '<b>'+BK.inf+'</b>'+
          '<button type="button" aria-label="Больше малышей" onclick="bkPaxSet(\'i\',1)"'+(BK.inf>=2?' disabled':'')+'>+</button></div></div>'+
      '</div>'+
      (base? '<div class="bk-calc">'+
        '<div class="bk-cr"><span>Двое взрослых в номере</span><b>'+money(BK.adults<=1? Math.round(half*PAX_K.single/100)*100 : base)+'</b></div>'+
        (BK.adults>2? '<div class="bk-cr"><span>Ещё '+(BK.adults-2)+' взр. · доп. место в номере</span><b>+ '+money(Math.round((BK.adults-2)*half*PAX_K.extraAdult/100)*100)+'</b></div>':'')+
        (kidsFree()? '<div class="bk-cr free"><span>Первый ребёнок в этом отеле — бесплатно</span><b>0 ₽</b></div>':'')+
        (paidKids()? '<div class="bk-cr"><span>'+(kidsFree()?'Ещё ':'')+'дети 2–11 · −'+Math.round((1-PAX_K.child)*100)+'% от взрослого</span><b>+ '+money(Math.round(paidKids()*half*PAX_K.child/100)*100)+'</b></div>':'')+
        (BK.inf? '<div class="bk-cr"><span>Малыши до 2 лет · только сбор</span><b>+ '+money(BK.inf*PAX_K.infant)+'</b></div>':'')+
        '<div class="bk-cr tot"><span>Тур целиком</span><b>'+money(paxTotal(base))+'</b></div>'+
      '</div>'
      : '')+
      (BK.kids&&BK.hotel&&!BK.hotel.kf? '<p class="bk-hint">В этом отеле детское место платное. В выдаче есть отели с бесплатным местом для первого ребёнка — фильтр «Ребёнок бесплатно».</p>':'')+
      '<p class="bk-note">'+(BK.kids? 'Ребёнок 2–11 лет на дополнительном месте стоит меньше половины взрослого — поэтому семейная цена ниже, чем «плюс ещё один взрослый». ':'')+
        'Коэффициенты размещения показаны как пример: в рабочей версии они приходят из ценовой матрицы туроператора.</p>'+
      '<div class="bk-act"><button class="btn btn-ember btn-l" type="button" onclick="bkNext()">Дальше</button></div>';
  }
  else if(BK.step===2){
    var extra=addonsTotal();
    b.innerHTML=
      '<p class="bk-eyebrow">Шаг 2 из 4 · что добавим</p>'+
      '<h3 class="bk-h">Можно добавить сейчас</h3>'+
      '<p class="bk-p">Всё это докупается и потом, но на месте дороже. Ничего обязательного — можно просто пропустить.</p>'+
      '<div class="bk-adds">'+ADDONS.map(function(a){
        var on=!!BK.add[a.id], cost=addonCost(a);
        return '<button type="button" class="bk-add'+(on?' on':'')+'" onclick="bkToggleAdd(\''+a.id+'\')" aria-pressed="'+on+'">'+
          '<i class="bk-tick" aria-hidden="true">'+(on?'✓':'+')+'</i>'+
          '<span class="bk-atx"><b>'+a.n+(a.hot?' <em class="bk-hot">'+a.hot+'</em>':'')+'</b><span>'+a.d+'</span></span>'+
          '<span class="bk-ap">'+money(cost)+'<i>'+(a.per==='чел'? money(a.p)+' × '+Math.max(1,paxCount())+' чел.' : 'за бронь')+'</i></span>'+
        '</button>';
      }).join('')+'</div>'+
      '<div class="bk-sum" style="margin-top:16px">'+bkTotalsHtml()+'</div>'+
      '<p class="bk-note">Состав и цены дополнительных услуг демонстрационные. Ничего из этого не оплачивается сейчас — только депозит.</p>'+
      '<div class="bk-act">'+
        '<button class="bk-ghost" type="button" onclick="BK.step=1;bkRender()">Назад</button>'+
        '<button class="btn btn-ember btn-l" type="button" onclick="bkNext()">'+(extra?'Дальше · '+money(extra)+' допом':'Пропустить и продолжить')+'</button></div>';
  }
  else if(BK.step===3){
    b.innerHTML=
      '<p class="bk-eyebrow">Шаг 3 из 4 · кто едет</p>'+
      '<h3 class="bk-h">Куда прислать подтверждение</h3>'+
      '<p class="bk-p">Договор и ваучер придут на почту, менеджер свяжется по телефону.</p>'+
      '<div class="bk-f">'+
        '<input id="bkName" type="text" placeholder="Имя и фамилия" value="'+esc(BK.name)+'" autocomplete="name">'+
        '<input id="bkPhone" type="tel" inputmode="tel" placeholder="+7 (___) ___-__-__" value="'+esc(BK.phone)+'" autocomplete="tel">'+
        '<input id="bkMail" type="email" inputmode="email" placeholder="Почта для договора" value="'+esc(BK.email)+'" autocomplete="email">'+
        '<label class="bk-cons"><input type="checkbox" id="bkCons"'+(BK.cons?' checked':'')+'><span>Согласен на обработку персональных данных и ознакомлен с <a href="#" onclick="return false">политикой конфиденциальности</a></span></label>'+
        '<p class="bk-err" id="bkErr"></p>'+
      '</div>'+
      '<div class="bk-act">'+
        '<button class="bk-ghost" type="button" onclick="BK.step=2;bkRender()">Назад</button>'+
        '<button class="btn btn-ember btn-l" type="button" onclick="bkNext()">Дальше</button></div>';
    setTimeout(function(){var el=document.getElementById('bkName'); if(el&&!BK.name) el.focus();},60);
  }
  else if(BK.step===4){
    b.innerHTML=
      '<p class="bk-eyebrow">Шаг 4 из 4 · условия</p>'+
      '<h3 class="bk-h">Что даёт депозит</h3>'+
      '<div class="bk-terms">'+
        '<div class="bk-term"><i>✓</i><span><b>Цена фиксируется</b> в рублях на день брони и дальше не меняется — что бы ни делал курс.</span></div>'+
        '<div class="bk-term"><i>✓</i><span><b>Место в блоке закрепляется</b> за вами. Пока депозит внесён, его никто не займёт.</span></div>'+
        '<div class="bk-term"><i>✓</i><span><b>Остаток — за 14 дней до вылета.</b> Можно частями, можно в рассрочку без процентов.</span></div>'+
        '<div class="bk-term"><i>✓</i><span><b>Передумали — вернём депозит,</b> если сообщите в течение трёх дней после брони.</span></div>'+
      '</div>'+
      '<div class="bk-sum" style="margin-top:18px">'+
        '<div class="bk-sr"><span>Направление</span><b>'+esc(d.toName||'—')+(d.date?' · '+esc(d.date):'')+'</b></div>'+
        (BK.hotel? '<div class="bk-sr"><span>Отель</span><b>'+esc(BK.hotel.n)+'</b></div>':'')+
        (addonsList().length? '<div class="bk-sr"><span>Дополнительно</span><b>'+esc(addonsList().join(', '))+'</b></div>':'')+
        '<div class="bk-sr"><span>Турист</span><b>'+esc(BK.name)+' · '+esc(BK.phone)+'</b></div>'+
        bkTotalsHtml()+
      '</div>'+
      '<div class="bk-act">'+
        '<button class="bk-ghost" type="button" onclick="BK.step=3;bkRender()">Назад</button>'+
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
      '<div class="bk-act"><button class="bk-ghost" type="button" onclick="crmToggle();bkClose()">Что ушло в CRM</button>'+
        '<button class="btn btn-ember btn-l" type="button" onclick="bkClose();trOpen()">Открыть мою поездку</button></div>'+
      '<p class="bk-note">Поездку можно сохранить на телефон: <a href="kabinet.html" style="color:var(--azure)">личный кабинет</a> '+
      'ставится как приложение и показывает документы, время вылета и телефон представителя даже без интернета.</p>';
  }
  crmRender();
}
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){ var w=document.getElementById('bkWrap'); if(w&&!w.hidden) bkClose();
    var h=document.getElementById('hpWrap'); if(h&&!h.hidden) hpClose();
    var c=document.getElementById('cmpWrap'); if(c&&!c.hidden) cmpClose();
    var tr=document.getElementById('trWrap'); if(tr&&!tr.hidden) trClose(); }
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

  var TYPES={callback:'Обратный звонок · холодный',booking:'Бронь с депозитом · горячий',group:'Место в группе · горячий',watch:'Подписка на цену · тёплый',agency:'Турагентство · B2B'};
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
    crmRow('Кто едет', typeof paxWord==='function'? paxWord() : IZI.lead.adults+' взр.')+
    (k.choice.addons&&k.choice.addons.length? crmRow('Допродажи', k.choice.addons.join(', '),'hi'):'')+
    (k.choice.addonsSum? crmRow('Сумма допродаж', k.choice.addonsSum.toLocaleString('ru-RU')+' ₽','hi'):'')+
    (k.choice.totalRub? crmRow('Итого за поездку', k.choice.totalRub.toLocaleString('ru-RU')+' ₽','hi'):'')+
    (k.choice.hotel? crmRow('Отель','—'===k.choice.hotel?'—':k.choice.hotel,'hi'):'')+
    (IZI.ctx.hotels&&IZI.ctx.hotels.length? crmRow('Смотрел отели', IZI.ctx.hotels.join(', '),'dim'):'')+
    (typeof favs!=='undefined'&&favs.length? crmRow('В избранном', favs.length+' отел'+(favs.length===1?'ь':'я'),'hi'):'')+
    crmRow('Смотрел направлений', d.resorts.length? d.resorts.length+' ('+d.resorts.join(', ')+')' : '0','dim')+
    crmRow('Вкладки курорта', d.tabs.length? d.tabs.join(', ') : '—','dim')+
    crmRow('Схема салона', d.seatmap? 'открывал '+d.seatmap+' раз'+(d.seatmap>1?'а':'') : 'нет','dim')+
    crmRow('Сравнил с Москвой', d.compared?'да':'нет','dim')+
    (IZI.lead.watch? crmRow('Следит за ценой', IZI.lead.watch,'hi'):'')+
    (IZI.lead.agency? crmRow('Агентство', IZI.lead.agency,'hi'):'')+
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
  if(el) setTimeout(function(){
    /* Страница длинная: плавно листать восемь тысяч пикселей — это несколько
       секунд, за которые человек решает, что кнопка не сработала.
       Близкие разделы прокручиваем плавно, далёкие — сразу. */
    var far=Math.abs(el.getBoundingClientRect().top)>window.innerHeight*2.5;
    el.scrollIntoView({behavior: far? 'auto':'smooth', block:'start'});
  },20);
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


/* ---------- подписка на цену ---------- */
var WATCH=[];
function watchFill(){
  var sel=document.getElementById('wDir'); if(!sel) return;
  var c=DATA[curCity];
  sel.innerHTML=c.dirs.map(function(d){ return '<option value="'+d.art+'">'+d.t+' · из '+c.name+'</option>'; }).join('');
  var k=RESORTS[curResort]&&RESORTS[curResort].k;
  if(k) sel.value=k;
}
function submitWatch(e){
  e.preventDefault();
  var v=document.getElementById('wContact').value.trim(),
      c=document.getElementById('wCons').checked,
      err=document.getElementById('wErr');
  var okPhone=v.replace(/\D/g,'').length>=10, okMail=/.+@.+\..+/.test(v);
  if(!okPhone&&!okMail){ err.style.display='block'; err.textContent='Оставьте телефон или адрес почты'; return false; }
  if(!c){ err.style.display='block'; err.textContent='Отметьте согласие на обработку данных'; return false; }
  var sel=document.getElementById('wDir'), dir=sel.options[sel.selectedIndex].text,
      when=document.getElementById('wWhen').value;
  WATCH.push({dir:dir,when:when,contact:v});
  IZI.lead.type='watch'; IZI.lead.phone=okPhone? v : IZI.lead.phone; IZI.lead.email=okMail? v : IZI.lead.email;
  IZI.lead.watch=dir+' · '+when;
  iziStep('intent');
  track('price_watch','Подписался на цену', dir+' · '+when);
  document.getElementById('watchForm').style.display='none';
  var ok=document.getElementById('watchOk');
  ok.innerHTML='<b>Следим за ценой</b>'+esc(dir)+' · '+esc(when)+'. Напишем на '+esc(v)+', как только цена станет ниже сегодняшней, и один раз — когда откроют новые даты.';
  ok.style.display='block';
  crmRender();
  return false;
}




function ebActive(){
  var now=Date.now();
  for(var i=0;i<EB.tiers.length;i++){
    var t=EB.tiers[i];
    if(!t.till || new Date(t.till+'T00:00:00').getTime()>now) return i;
  }
  return EB.tiers.length-1;
}
function ebPrice(i){
  var b=(EB.base[curCity]||EB.base.mrv).p;
  return Math.round(b*(1-EB.tiers[i].d/100)/500)*500;
}
function renderEb(){
  var el=document.getElementById('ebLadder'); if(!el) return;
  var act=ebActive(), b=(EB.base[curCity]||EB.base.mrv);
  el.innerHTML=EB.tiers.map(function(t,i){
    var p=ebPrice(i), save=b.p-p;
    return '<article class="ebt'+(i===act?' on':'')+(i<act?' past':'')+'">'+
      '<p class="ebt-k">'+(i===act?'Действует сейчас':(i<act?'Уже прошло':'Потом'))+'</p>'+
      '<b class="ebt-d">'+(t.d?'−'+t.d+'%':'0%')+'</b>'+
      '<p class="ebt-l">'+t.label+'</p>'+
      '<p class="ebt-p"><b>'+money(p)+'</b>'+(save? '<span>выгода '+money(save)+'</span>':'<span>базовая цена</span>')+'</p>'+
    '</article>';
  }).join('');
  document.getElementById('ebNote').textContent=
    b.to+', 7 ночей, июнь 2027 из '+DATA[curCity].name+' — '+money(ebPrice(act))+' за двоих вместо '+money(b.p)+'.';
  ebTick();
}
var ebT=null;
function ebTick(){
  var el=document.getElementById('ebTimer'); if(!el) return;
  var t=EB.tiers[ebActive()];
  if(!t.till){ el.innerHTML='<b>Раннее бронирование завершено</b><span>Действует базовая цена сезона</span>'; return; }
  var ms=new Date(t.till+'T00:00:00').getTime()-Date.now();
  if(ms<0) ms=0;
  var d=Math.floor(ms/86400000), h=Math.floor(ms/3600000)%24, m=Math.floor(ms/60000)%60;
  el.innerHTML='<span class="ebt-cap">До конца этапа −'+t.d+'%</span>'+
    '<div class="ebclock"><i><b>'+d+'</b>'+plural(d,['день','дня','дней'])+'</i>'+
    '<i><b>'+h+'</b>'+plural(h,['час','часа','часов'])+'</i>'+
    '<i><b>'+m+'</b>мин</i></div>';
  if(!ebT) ebT=setInterval(ebTick,30000);
}
function ebBook(){
  var act=ebActive(), b=(EB.base[curCity]||EB.base.mrv);
  track('early_book','Бронь по раннему', b.to+' · лето 2027 · −'+EB.tiers[act].d+'%');
  openResort(b.k,true);
  IZI.ctx.date='июнь 2027 · раннее бронирование';
  IZI.ctx.price=money(ebPrice(act));
  iziStep('date');
  bkOpen('early', null);
}


function renderClub(){
  var el=document.getElementById('clubTiers'); if(!el) return;
  el.innerHTML=CLUB.map(function(c,i){
    return '<article class="ct'+(i===2?' hi':'')+'"><p class="ct-n">'+c.n+'</p>'+
      '<b class="ct-d">'+c.d+'</b><span class="ct-s">скидка</span>'+
      '<ul>'+c.t.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></article>';
  }).join('');
}
function refLink(){
  var code='IZI-'+Math.random().toString(36).slice(2,7).toUpperCase();
  var url=location.origin+location.pathname+'?ref='+code;
  var out=document.getElementById('refOut');
  out.textContent=url; out.hidden=false;
  track('referral','Взял ссылку для друга',code);
  if(navigator.clipboard) navigator.clipboard.writeText(url).then(function(){ toast('Ссылка скопирована'); },function(){});
  else toast('Ссылка готова — скопируйте её');
}


/* ---------- посадочная страница под запрос ---------- */
/* Собирается из тех же данных, что и главная: город вылета, направление,
   расписание, цена. Никакой отдельной копии текстов — иначе она устареет. */
function lpCountry(){ var d=curDir(); return d? String(d.c).split(' · ')[0] : 'Турцию'; }
function lpCountryVin(){
  var c=lpCountry();
  return {'Турция':'Турцию','Египет':'Египет','Китай':'Китай'}[c] || c;
}
function lpRender(){
  var c=DATA[curCity], d=curDir(), r=RESORTS[curResort];
  if(!d) return;
  document.getElementById('lpCity').textContent='Из '+c.name;
  document.getElementById('lpCountry').textContent=lpCountry();
  document.getElementById('lpH1').innerHTML='Туры в '+esc(lpCountryVin())+' <em>из '+esc(c.name)+'</em>';
  document.getElementById('lpLede').textContent=
    (d.excursion
      ? 'Авторский тур с фиксированной датой вылета '+d.depDate+' и русскоговорящим гидом на всём маршруте. '
      : (/пересадк/i.test(d.meta[1])
          ? 'Летим с пересадкой рейсами регулярных авиакомпаний. Вылеты по дням: '+d.meta[0]+'. '
          : 'Прямой чартер Red Wings, '+d.meta[1]+' в воздухе — и вы в '+(r.prep||r.n)+'. Вылеты по дням: '+d.meta[0]+'. '))+
    'Перелёт, трансфер, отель и страховка — одним заказом, бронь от 3 000 ₽.';

  var gen=r.gen||r.n;
  var facts = d.excursion
    ? [['<b>'+esc(d.depDate)+'</b>','Дата вылета группы'],
       ['<b class="num">'+esc(d.days)+'</b>','Длительность маршрута'],
       ['<b class="num">от '+esc(d.p)+' ₽</b>','За двоих, всё включено']]
    : [['<b class="num">'+esc(d.meta[1])+'</b>',(/пересадк/i.test(d.meta[1])? 'Перелёт до '+esc(gen) : 'В пути до '+esc(gen))],
       ['<b>'+esc(d.meta[0])+'</b>','Дни вылета'],
       ['<b class="num">от '+esc(d.p)+' ₽</b>','За двоих, '+esc(d.meta[2])]];
  if(d.left) facts.push(['<b style="color:var(--warn)">'+esc(d.left.replace(/^Осталось\s*/,''))+'</b>',
    'Осталось на '+esc(d.excursion? d.depDate : (IZI.ctx.date||'ближайший вылет'))]);
  document.getElementById('lpFacts').innerHTML=facts.map(function(f){
    return '<div class="lf">'+f[0]+'<span>'+f[1]+'</span></div>'; }).join('');

  document.getElementById('lpHotelsH').innerHTML='Отели с местами <em>на '+esc(IZI.ctx.date||'ближайшую дату')+'</em>';
  var list=stayList().slice(0,3);
  document.getElementById('hotels').innerHTML = list.length
    ? list.map(hcardHtml).join('')
    : '<div class="hempty"><b>По этому направлению отели показываются в выдаче Tourvisor</b>В макете они заведены только для пляжных курортов.</div>';

  var qa=[
    [(d.excursion? 'Сколько длится маршрут?' : 'Сколько лететь из '+c.name+' до '+gen+'?'),
     d.excursion? 'Маршрут занимает '+d.days+', вылет группы '+d.depDate+'. Перелёт с пересадкой, точное время стыковки — в программе тура.'
       : (/пересадк/i.test(d.meta[1])
           ? 'Это направление мы возим на рейсах регулярных авиакомпаний — перелёт '+d.meta[1]+'. Точное время стыковки зависит от даты и подтверждается при бронировании.'
           : 'Прямой рейс Red Wings идёт '+d.meta[1]+'. Пересадок нет, багаж не перегружается — вы получаете его сразу в '+(r.prep||r.n)+'.')],
    ['По каким дням вылеты?',
     (d.excursion? 'Это разовая группа с фиксированной датой: '+d.depDate+'. Регулярной программы по этому маршруту нет.'
        : 'Вылеты: '+d.meta[0]+'. Полное расписание сезона — на главной странице в разделе «Полётная программа».')],
    ['Что входит в цену тура?',
     'Перелёт в обе стороны, багаж 20 кг, групповой трансфер аэропорт — отель — аэропорт, проживание с выбранным питанием и медицинская страховка на весь срок поездки.'],
    ['Можно ли забронировать сейчас, а доплатить позже?',
     'Да. Бронь закрепляется взносом от 3 000 ₽, остаток вносится за 14 дней до вылета. Цена в рублях фиксируется в день бронирования и потом не меняется.'],
    ['А если придётся отказаться от поездки?',
     'При отказе более чем за 21 день до вылета возвращается вся уплаченная сумма за вычетом банковской комиссии. Ближе к дате действует шкала удержаний — она есть в договоре.']
  ];
  document.getElementById('lpFaq').innerHTML=qa.map(function(q,i){
    return '<details'+(i===0?' open':'')+'><summary>'+esc(q[0])+'</summary><p>'+esc(q[1])+'</p></details>'; }).join('');
}
function lpLinkText(){
  var el=document.getElementById('lpLink'); if(!el) return;
  el.textContent='Все туры в '+lpCountryVin()+' из '+DATA[curCity].name+' — отдельной страницей →';
}
function lpOpen(){
  track('landing','Открыл посадочную', lpCountry()+' из '+DATA[curCity].name);
  lpRender(); show('lp');
}


/* ---------- внешние данные ----------
   Всё редакторское лежит в data/content.json и правится через admin.html.
   Если файла нет или он битый — сайт молча работает на данных из кода. */
function applyContent(j){
  if(!j||typeof j!=='object') return;
  if(Array.isArray(j.resorts)&&j.resorts.length){ RESORTS_DATA=j.resorts; RESORTS=RESORTS_DATA; }
  if(j.cities&&Object.keys(j.cities).length) DATA=j.cities;
  if(j.stay) STAY=j.stay;
  if(j.prog) PROG=j.prog;
  if(j.soon) SOON=j.soon;
  if(Array.isArray(j.addons)&&j.addons.length) ADDONS=j.addons;
  if(j.paxK) PAX_K=j.paxK;
  if(j.eb&&j.eb.tiers) EB=j.eb;
  if(Array.isArray(j.club)&&j.club.length) CLUB=j.club;
  if(Array.isArray(j.faq)&&j.faq.length) FAQ=j.faq;
}
function loadContent(next){
  /* Предпросмотр из редактора: index.html?draft=1 берёт черновик из браузера,
     а не опубликованный файл. Так менеджер видит правки до публикации. */
  try{
    if(/[?&]draft=1/.test(location.search)){
      var d=localStorage.getItem('izi_draft');
      if(d){ applyContent(JSON.parse(d)); document.documentElement.setAttribute('data-draft','1');
        var db=document.querySelector('.draftbar'); if(db) db.hidden=false;
        next(); return; }
    }
  }catch(e){}
  try{
    fetch('data/content.json',{cache:'no-cache'})
      .then(function(r){ return r.ok? r.json() : null; })
      .then(function(j){ try{ applyContent(j); }catch(e){} })
      .catch(function(){})
      .then(next,next);
  }catch(e){ next(); }
}

/* ---------- boot ---------- */
function bootSite(){
setCity('mrv');
buildSeatMap();
document.querySelectorAll('.mark3d').forEach(buildMark);
iziInit(); leadCtxRender(); renderStay(); favBar(); favRestore(); renderFaq(); watchFill(); renderClub();
mobCollapse('#cabin','Показать схему салона и борт');
mobCollapse('#program','Показать расписание вылетов');
mobCollapse('#club','Показать программу для постоянных туристов');
mobCollapse('.studio','Показать, как это собрано');
setRoute('direct');
if(!reduce) animPlane();
}
loadContent(bootSite);
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
  ri.src=pic('route'); ri.hidden=false; document.getElementById('rtSky').style.display='none';}
function onScroll(){
  document.body.classList.toggle('scrolled', window.scrollY>40);
  if(window.IZI){ var h=document.documentElement.scrollHeight-window.innerHeight;
    var d=h>0? Math.round((window.scrollY/h)*100):0;
    if(d>IZI.maxScroll){ IZI.maxScroll=Math.min(100,d); } }
  var lead=document.getElementById('lead');
  var past=window.scrollY>window.innerHeight*0.85;
  var atLead=lead && lead.getBoundingClientRect().top < window.innerHeight*0.95;
  var mb=document.getElementById('mbar');
  if(mb){ var on=past && !atLead; mb.classList.toggle('on', on); document.body.classList.toggle('barup', on); }
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
