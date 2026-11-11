(() => {
  // Pin every relative link/image to the site root, even after switching pages without reloading
  const ROOT = new URL('./', document.baseURI);
  (document.querySelector('base') || document.head.appendChild(document.createElement('base'))).href = ROOT.href;

  /* ---------- TEXT: English (with Lebanese) + Arabic ---------- */
  const tick = (a) => a.concat(a).map(x => `<span>${x}</span>`).join('');
  const L = {
    en: {
      nShow:'El Show', nMenu:'Menu', nBr:'Fro3na', order:'Order now', orderArrow:'Order now →', seeMenu:'Shouf el menu',
      heroP:'A2wa tray of happiness bi kel Lebnen.',
      heroSub:'Burgers, wings w shrimps · 3 fro3a · fet7in 24/24',
      replay:'↺ 3idha ma3 el sot', soundOn:'3alli el sot', soundAgain:'3idha ma3 el sot', mute:'Mute',
      ticker: tick(['Tray of happiness','Fet7in 24/24','Monot','Batroun','Saida','1KG wings + 1KG shrimps','Burgers','Shrimps']),
      showH:'Mesh bas ma7al burger.<br><em>It\u2019s a show.</em>',
      showP:'Kel tray btenzal 3al counter ma3 jaras w sarkha, w kel el mat3am 3am yetfarraj. 3and Boo ma btekol w bas, bet3ish l lahza.',
      quote:'\u201CTRAY OF HAPPINESS!\u201D Bas tesma3a marra, btdall b rasak.',
      s1:'followers', s2:'fro3a', s3:'fet7in', live:'Jaw Boo 🔥', nStory:'Story', stE:'The Story', stH:'Mn Beirut la Saida.<br><em>3a ejro.</em>', stP:'Lamma fatah fere3 Saida, Ibrahim Farchoukh 2arar yemshe mn Beirut la Saida 3a ejro. W kel ma yemshe, el 3alam tzid. Wosel 3a Saida w le2a kel l balad natir.', stWho:'CEO w sa7eb el sarkha', stBtn:'▶ Shouf el 2esse kella', dine:'Dine in', deliv:'Delivery', offer:'Kel offer: burger + fries + Pepsi', bTag:'Mn el grill la idak',
      menuE:'El Menu', menuH:'Na2e<br><em>sa3adtak.</em>', tAll:'Kelshi', chipLegend:'El ostoura',
      m_tray:'Kilo wings w kilo shrimps, ma3 fries w soft drink. W btousal ma3 el sarkha.', cKg:'By Kg', cBurg:'Burgers', cApps:'Appetizers', cDrinks:'Drinks', cKgH:'By the Kilo', cBurgH:'Burgers', cAppsH:'Appetizers', cDrinksH:'Drinks & Shisha', lbp:'LBP',
      m_stray:'Kilo shrimps ma3 fries, cocktail sauce w Pepsi. Lal jamee3.',
      m_leb:'Coleslaw, batata w ketchup', m_cheese:'Jebneh. Classic.', m_bbq:'BBQ sauce', m_amer:'Banadoura w mayo',
      m_juce:'Jalapeño w BBQ', m_messy:'Basal mkarmal', m_spicy:'Hot w spicy, 3al akid', m_mozz:'Lahmeh ma3 mozzarella',
      m_swiss:'Lahmeh, basal, mayo w khas', m_chick:'Djej ma3 mozzarella',
      note:'As3ar bel dollar w bel lira · $1 = 90,000 LBP', go:'Order →',
      brE:'Wen ne7na?', brH:'3 fro3a.<br><em>Sarkha wa7de.</em>',
      b1:'Monot', b1m:'Sheri3 Monot, Beirut', b2:'Batroun', b2m:'Sheri3 el Batroun', b3:'Saida', b3m:'Sheri3 Saida',
      call:'Call', dir:'Take me there',
      openNow:'Fet7in 24/24 · aya se3a', closedNow:'',
      ctaE:'Jou3an?', ctaH:'De2 el <em>jaras.</em>', orderOnline:'Order online →', callMonot:'Call Monot branch',
      fine:'Monot · Batroun · Saida — fet7in 24/24 · Sahtennn ya asliwww 🍔', callBr:'Call a branch', langBtn:'عربي', sc1:'11 burgers, kel wa7ed a2wa mn el tene.', sc2:'Kilo wings w kilo shrimps. W el sarkha majjanan.', sc3:'Crispy, golden w bikhlaso bi da2ee2a.', scCta:'Shouf el menu kello →', waMsg:'Marhaba Boo Burger! Badde otlob 🍔'
    },
    ar: {
      nShow:'الشو', nMenu:'المنيو', nBr:'الفروع', order:'اطلب هلّق', orderArrow:'اطلب هلّق ←', seeMenu:'شوف المنيو',
      heroP:'أقوى <span class="en">tray of happiness</span> بكل لبنان.',
      heroSub:'برغر، <span class="en">wings</span> وقريدس · 3 فروع · فاتحين 24/24',
      replay:'↺ عيدها مع الصوت', soundOn:'علّي الصوت', soundAgain:'عيدها مع الصوت', mute:'سكّت',
      ticker: tick(['Tray of happiness','فاتحين 24/24','مونو','البترون','صيدا','كيلو wings','Burgers','Shrimps']),
      showH:'مش بس محل برغر.<br><em>هيدا <span class="en">show.</span></em>',
      showP:'كل صينية بتنزل عالكونتوار مع جرس وصرخة، والمطعم كلّو عم يتفرّج. بـ Boo ما بتاكل وبس، بتعيش اللحظة.',
      quote:'«<span class="en">TRAY OF HAPPINESS!</span>» بس تسمعها مرّة، بتضلّ براسك.',
      s1:'متابع', s2:'فروع', s3:'فاتحين', live:'جوّ Boo 🔥', nStory:'القصة', stE:'القصة', stH:'من بيروت لصيدا.<br><em>عإجريه.</em>', stP:'لمّا فتح فرع صيدا، إبراهيم فرشوخ قرّر يمشي من بيروت لصيدا عإجريه. وكل ما يمشي، العالم تزيد. ووصل عصيدا ولاقى البلد كلها ناطرتو.', stWho:'<span class="en">CEO</span> وصاحب الصرخة', stBtn:'▶ شوف القصة كلها', dine:'بالمطعم', deliv:'ديليفري', offer:'كل <span class="en">offer</span>: برغر + بطاطا + بيبسي', bTag:'من الغريل لإيدك',
      menuE:'المنيو', menuH:'نقّي<br><em>سعادتك.</em>', tAll:'الكل', chipLegend:'الأسطورة',
      m_tray:'كيلو جوانح وكيلو قريدس، مع بطاطا ومشروب. وبتوصل مع الصرخة.', cKg:'بالكيلو', cBurg:'برغر', cApps:'مقبّلات', cDrinks:'مشروبات', cKgH:'بالكيلو', cBurgH:'برغر', cAppsH:'مقبّلات', cDrinksH:'مشروبات وأراكيل', lbp:'ل.ل',
      m_stray:'كيلو قريدس مع بطاطا، كوكتيل صوص وبيبسي. للجمعة.',
      m_leb:'كول سلو، بطاطا وكاتشب', m_cheese:'جبنة. كلاسيك.', m_bbq:'صوص BBQ', m_amer:'بندورة ومايونيز',
      m_juce:'هالابينو و BBQ', m_messy:'بصل مكرمل', m_spicy:'حار وسبايسي، عالأكيد', m_mozz:'لحمة مع موزاريلا',
      m_swiss:'لحمة، بصل، مايونيز وخس', m_chick:'دجاج مع موزاريلا',
      note:'الأسعار بالدولار وبالليرة · $1 = 90,000 ل.ل', go:'اطلب ←',
      brE:'وين نحنا؟', brH:'3 فروع.<br><em>صرخة وحدة.</em>',
      b1:'مونو', b1m:'شارع مونو، بيروت', b2:'البترون', b2m:'شارع البترون', b3:'صيدا', b3m:'شارع صيدا',
      call:'اتصل', dir:'خدني لهونيك',
      openNow:'فاتحين 24/24 · أي ساعة', closedNow:'',
      ctaE:'جوعان؟', ctaH:'دقّ <em>الجرس.</em>', orderOnline:'اطلب أونلاين ←', callMonot:'اتصل بمونو',
      fine:'مونو · البترون · صيدا — فاتحين 24/24 · صحتين يا أصلي 🍔', callBr:'اتصل بفرع', langBtn:'EN', sc1:'11 برغر، كل واحد أقوى من التاني.', sc2:'كيلو جوانح وكيلو قريدس. والصرخة مجّاناً.', sc3:'مقرمشة، دهبيّة وبتخلص بدقيقة.', scCta:'شوف المنيو كلّو ←', waMsg:'مرحبا Boo Burger! بدّي اطلب 🍔'
    }
  };
  let lang = 'en';
  try { lang = localStorage.getItem('boo-lang') || 'en'; } catch (e) {}

  /* ---------- MENU (prices in LBP, USD at 90,000) ---------- */
  const RATE = 90000;
  const PH = {"american": "assets/img/menu/american.jpg", "bbq": "assets/img/menu/bbq.jpg", "bbqwings": "assets/img/menu/bbqwings.jpg", "cheese": "assets/img/menu/cheese.jpg", "chpatty": "assets/img/menu/chpatty.jpg", "fries": "assets/img/menu/fries.jpg", "grilled": "assets/img/menu/grilled.jpg", "juice": "assets/img/menu/juice.jpg", "lebanese": "assets/img/menu/lebanese.jpg", "messy": "assets/img/menu/messy.jpg", "nashville": "assets/img/menu/nashville.jpg", "platter": "assets/img/menu/platter.jpg", "riyash": "assets/img/menu/riyash.jpg", "shrimp": "assets/img/menu/shrimp.jpg", "spicy": "assets/img/menu/spicy.jpg", "swiss": "assets/img/menu/swiss.jpg", "wings": "assets/img/menu/wings.jpg"};
  const MENU = {
    kg: [
      ['Wings 1kg', 'Secret sauce, garlic, BBQ, fries & soft drink', 1260000, 'wings'],
      ['Wings 1.5kg', 'Fries, garlic, BBQ sauce & soft drink', 1880000, 'wings'],
      ['Spicy Wings 1kg', '', 1260000, 'wings'],
      ['BBQ Wings 1kg', '', 1260000, 'bbqwings'],
      ['Buffalo Wings 1kg', '', 1260000, '🍗'],
      ['Shrimp ½kg', 'Cocktail sauce & soft drink', 1080000, 'shrimp'],
      ['Shrimp 1kg', 'Fries, cocktail sauce & soft drink', 2160000, 'shrimp'],
      ['Spicy Shrimp 1kg', '', 2160000, '🌶️'],
      ['Makanek ½kg', 'Iceberg & mayo sauce', 1530000, '🌭'],
      ['Riyash', '', 2700000, 'riyash'],
      ['Seafood', '', 2700000, '🦐']
    ],
    burgers: [
      ['Swiss Mushroom', 'Mayo, mushroom, onion, mozzarella, beef', 810000, 'swiss'],
      ['Lebanese', 'Coleslaw, fries, ketchup, beef', 585000, 'lebanese'],
      ['Cheese', '', 675000, 'cheese'],
      ['BBQ', 'Mayo, lettuce, tomato, BBQ, mozzarella, beef', 675000, 'bbq'],
      ['American', 'Mayo, lettuce, tomato, cheddar slice, onion, beef', 675000, 'american'],
      ['Grilled Chicken', 'Mayo, lettuce, cocktail, grilled chicken', 630000, 'grilled'],
      ['Chicken Patty', 'Mayo, lettuce, cocktail, chicken patty', 765000, 'chpatty'],
      ['Spicy', '', 720000, 'spicy'],
      ['Juice', 'Mayo, lettuce, tomato, cocktail, BBQ, mozzarella, jalapeño, beef', 720000, 'juice'],
      ['Messy', 'Mayo, lettuce, cocktail, cheddar slice, caramelized onion, beef', 720000, 'messy'],
      ['Nashville Hot Chicken', '', 900000, 'nashville']
    ],
    apps: [
      ['Fries Box', '', 270000, 'fries'], ['Curly Fries', '', 450000, 'platter'], ['Wedges', '', 450000, '🥔'], ['Onion Rings', '', 450000, 'platter'],
      ['Mozzarella Sticks', '', 540000, 'platter'], ['Cheddar Balls', '', 540000, 'platter'], ['Mini Potato', '', 540000, '🥔'], ['Batata Harra', '', 540000, '🌶️'],
      ['Mix Appetizers', '', 1080000, 'platter'], ['Rocca Salad', '', 540000, '🥗'], ['Arabic Salad', '', 450000, '🥗'], ['Tabbouleh', '', 540000, '🥗'], ['Fattoush', '', 540000, '🥗']
    ],
    drinks: [
      ['Soft Drink', '', 135000, '🥤'], ['Water', '', 90000, '💧'], ['Sparkling Water', '', 180000, '🫧'], ['Iced Tea', '', 180000, '🧊'], ['Iced Coffee', '', 180000, '☕'],
      ['Shisha', '', 1080000, '💨']
    ]
  };
  const usd = l => { const v = l / RATE; return '$' + (Number.isInteger(v) ? v : (Math.round(v * 10) / 10)); };
  const lbpFmt = (l, sfx) => l.toLocaleString('en-US') + ' ' + sfx;
  const oid = (k, n) => k + '-' + n.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const ORDER_ITEMS = [{ id: 'tray', n: 'Tray of Happiness', p: 2970000, img: 'assets/img/tray.jpg', kg: true }];
  for (const k in MENU) MENU[k].forEach(([n, d, l, p]) => ORDER_ITEMS.push({ id: oid(k, n), n, p: l, img: PH[p] || null, emo: PH[p] ? null : p, kg: k === 'kg' }));
  function renderMenu(sfx) {
    for (const k in MENU) {
      const el = document.getElementById('l_' + k); if (!el) continue;
      el.innerHTML = MENU[k].map(([n, d, l, p]) =>
        `<div class="item" data-oimg>${PH[p] ? `<img class="th" src="${PH[p]}" alt="${n}" loading="lazy">` : `<span class="th emo">${p || '🍔'}</span>`}<div class="it"><h4>${n}</h4>${d ? `<p>${d}</p>` : ''}</div><div class="pr"><b>${usd(l)}</b><small>${lbpFmt(l, sfx)}</small><div class="o-step" data-oid="${oid(k, n)}"></div></div></div>`).join('');
    }
    document.querySelectorAll('[data-lbp]').forEach(e => e.textContent = lbpFmt(+e.dataset.lbp, sfx));
  }

  /* ---------- HERO ---------- */
  // Moments in the hero clip (seconds). The blur is baked into the video from 2.6s.
  const T = { tray: 0.50, of: 1.66, happi: 1.95, ness: 2.82, after: 3.5, loopFrom: 4.5 };
  const hero = document.getElementById('top'), v = document.getElementById('hv');
  const words = [...document.querySelectorAll('#tray .w1, #tray .of, #tray .hp1, #tray .hp2')];
  let userMuted = false;
  const flash = document.getElementById('flash'), snd = document.getElementById('snd');
  const bgc = document.getElementById('bgc'), ctx = bgc.getContext('2d');
  const wide = matchMedia('(min-width:900px)');
  let fired = {}, raf = 0, intro = false, ended = false, frame = 0;

  const ICON_ON  = '<path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>';
  const ICON_OFF = '<path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="m23 9-6 6M17 9l6 6"/>';
  const ICON_RE  = '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>';
  function setChip() {
    const lbl = snd.querySelector('.lbl'), ic = document.getElementById('sndIcon');
    if (v.muted) { snd.className = (ended && !userMuted) ? 'snd icon' : 'snd call'; ic.innerHTML = (ended && !userMuted) ? ICON_RE : ICON_ON; lbl.textContent = L[lang][(ended && !userMuted) ? 'soundAgain' : 'soundOn']; }
    else { snd.className = 'snd'; ic.innerHTML = ICON_OFF; lbl.textContent = L[lang].mute; }
  }

  const hit = (el, big) => {
    el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit');
    if (big) { flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go'); }
  };

  function loop() {
    const t = v.currentTime;
    if (intro) {
      if (!fired.a && t >= T.tray)  { fired.a = 1; hit(words[0], true); }
      if (!fired.b && t >= T.of)    { fired.b = 1; hit(words[1]); }
      if (!fired.c && t >= T.happi) { fired.c = 1; hit(words[2]); }
      if (!fired.e && t >= T.ness)  { fired.e = 1; hit(words[3], true); }
      if (!fired.d && t >= T.after) { fired.d = 1; hero.classList.add('blurred'); }
    }
    // ambient glow behind the video card (desktop only, every 4th frame)
    if (wide.matches && (frame++ & 3) === 0) { try { ctx.drawImage(v, 0, 0, bgc.width, bgc.height); } catch (e) {} }
    raf = requestAnimationFrame(loop);
  }

  async function start(withSound) {
    fired = {}; ended = false; intro = true; if (withSound) userMuted = false;
    words.forEach(w => w.classList.remove('hit')); hero.classList.remove('blurred');
    v.currentTime = 0; v.muted = !withSound;
    try { await v.play(); } catch (e) {
      v.muted = true; try { await v.play(); } catch (_) { return showFinal(); }
    }
    setChip(); cancelAnimationFrame(raf); loop();
  }
  function showFinal() {
    intro = false; ended = true;
    words.forEach(w => w.classList.add('hit')); hero.classList.add('blurred');
    v.muted = true; v.currentTime = T.loopFrom; setChip();
    cancelAnimationFrame(raf); loop();
  }
  v.addEventListener('ended', () => {
    intro = false; ended = true; v.muted = true; userMuted = false; setChip();
    v.currentTime = T.loopFrom; v.play().catch(()=>{});
  });
  // Sound button: mute / unmute. If he never heard the shout, unmuting replays it from the start.
  snd.addEventListener('click', () => {
    if (!v.muted) { v.muted = true; userMuted = true; }
    else if (userMuted && !ended) { v.muted = false; userMuted = false; }
    else { start(true); return; }
    setChip();
  });
  // Phones block sound until the first touch: on that first touch, replay the intro with sound.
  let primed = false;
  const prime = e => {
    if (primed) return; primed = true;
    ['pointerup','touchend','keydown'].forEach(n => removeEventListener(n, prime, true));
    if (e.target.closest && e.target.closest('#snd,#replay,#lang,#playStory,#modal')) return;
    if (page === 'home' && v.muted && !userMuted && scrollY < innerHeight * .6) start(true);
  };
  ['pointerup','touchend','keydown'].forEach(n => addEventListener(n, prime, true));
  document.getElementById('replay').addEventListener('click', () => start(true));

  /* ---------- Headline fit ---------- */
  const trayEl = document.getElementById('tray');
  function fit() {
    const w = trayEl.clientWidth; if (!w) return;
    const m = document.createElement('canvas').getContext('2d');
    m.font = '900 100px BooDisplay, "Arial Black", sans-serif';
    const px = 100 * w / (m.measureText('HAPPINESS').width * 0.955) * 0.98;
    trayEl.style.fontSize = Math.min(px, innerWidth < 900 ? 150 : 180) + 'px';
  }

  /* ---------- Language ---------- */
  let openState = true;
  function apply(l) {
    lang = l; const d = L[l];
    document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-k]').forEach(el => { const k = el.dataset.k; if (d[k] != null) el.innerHTML = d[k]; });
    document.getElementById('lang').textContent = d.langBtn;
    renderMenu(d.lbp); if (window.Order && Order.relabel) Order.relabel();
    document.querySelectorAll('[data-wa]').forEach(a => a.href = 'https://wa.me/' + a.dataset.wa + '?text=' + encodeURIComponent(d.waMsg));
    document.querySelector('#open > span:last-child').textContent = openState ? d.openNow : d.closedNow;
    setChip(); fit();
    try { localStorage.setItem('boo-lang', l); } catch (e) {}
  }
  document.getElementById('lang').addEventListener('click', () => apply(lang === 'en' ? 'ar' : 'en'));

  try {
    const hr = +new Intl.DateTimeFormat('en-GB', { hour: 'numeric', hour12: false, timeZone: 'Asia/Beirut' }).format(new Date());
    openState = true; // open 24/24
    document.getElementById('open').classList.toggle('closed', !openState);
  } catch (e) {}

  apply(lang);

  /* ---------- Pages: / , /menu , /thestory  (hash routes in this demo) ---------- */
  var page = 'home', heroStarted = false;
  const TITLES = { home: 'Boo Burger | Tray of Happiness', menu: 'Menu | Boo Burger', story: 'The Story | Boo Burger' };
  function where() {
    const h = location.hash.replace(/^#\/?/, '').toLowerCase();
    if (h.startsWith('menu')) return ['menu', ''];
    if (h.startsWith('thestory') || h.startsWith('story')) return ['story', ''];
    const rel = location.pathname.toLowerCase().slice(ROOT.pathname.length).split('/').filter(Boolean);
    if (rel[0] === 'menu') return ['menu', ''];
    if (rel[0] === 'thestory') return ['story', ''];
    return ['home', h === 'branches' ? 'branches' : ''];
  }
  function route(keepScroll) {
    const [next, anchor] = where();
    page = next;
    document.querySelectorAll('.page').forEach(p => p.hidden = p.dataset.page !== next);
    document.querySelectorAll('[data-route]').forEach(a => a.classList.toggle('act', a.dataset.route === (anchor || next)));
    document.body.dataset.page = next; document.title = TITLES[next];
    if (next === 'home') {
      if (!heroStarted) { heroStarted = true; start(true); } else if (!modal.classList.contains('on')) v.play().catch(() => {});
    } else { v.pause(); }
    if (anchor === 'branches') {
      const go = () => { const b = document.getElementById('branches'); scrollTo({ top: b.getBoundingClientRect().top + scrollY - (innerWidth <= 820 ? 110 : 70), behavior: 'instant' }); };
      requestAnimationFrame(go); setTimeout(go, 400);
    }
    else if (!keepScroll) scrollTo({ top: 0, behavior: 'instant' });
    document.querySelectorAll('.page:not([hidden]) .rv').forEach(el => io.observe(el));
    fit(); onScroll(); showcase(); syncChips();
  }
  // in-site links switch pages without reloading
  document.addEventListener('click', e => {
    const a = e.target.closest('a[data-nav]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const url = new URL(a.getAttribute('href'), ROOT);
    e.preventDefault();
    try { history.pushState({}, '', url); route(); } catch (_) { location.href = url; }
  });
  addEventListener('popstate', () => route(true));
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(fit);
  addEventListener('resize', fit);

  /* ---------- Full story player ---------- */
  const modal = document.getElementById('modal'), fullv = document.getElementById('fullv');
  let heroWasPlaying = false;
  function openStory() {
    heroWasPlaying = !v.paused; v.pause();
    modal.classList.add('on'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    fullv.currentTime = 0; fullv.muted = false; fullv.play().catch(() => {});
  }
  function closeStory() {
    fullv.pause(); modal.classList.remove('on'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = '';
    if (heroWasPlaying) v.play().catch(() => {});
  }
  document.getElementById('playStory').addEventListener('click', openStory);
  document.getElementById('mclose').addEventListener('click', closeStory);
  modal.addEventListener('click', e => { if (e.target === modal) closeStory(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('on')) closeStory(); });
  fullv.addEventListener('ended', closeStory);

  /* ---------- Page bits ---------- */
  const nav = document.getElementById('nav'), dock = document.getElementById('dock');
  const onScroll = () => { nav.classList.toggle('solid', scrollY > 40 || document.body.dataset.page !== 'home'); dock.classList.toggle('up', scrollY > innerHeight * .8); };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.rv').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); });

  document.getElementById('tabs').addEventListener('click', e => {
    const b = e.target.closest('.tab'); if (!b) return;
    const g = document.getElementById('g_' + b.dataset.f);
    if (g) scrollTo({ top: g.getBoundingClientRect().top + scrollY - (innerWidth <= 820 ? 170 : 140), behavior: 'smooth' });
  });
  // highlight the chip of the section you're reading
  const chips = [...document.querySelectorAll('#tabs .tab')];
  function syncChips() {
    if (page !== 'menu') return;
    let cur = chips[0];
    chips.forEach(c => { const g = document.getElementById('g_' + c.dataset.f); if (g && g.getBoundingClientRect().top < 230) cur = c; });
    chips.forEach(c => c.classList.toggle('on', c === cur));
  }
  addEventListener('scroll', syncChips, { passive: true });

  /* ---------- Scroll showcase (FriesLab-style) ---------- */
  const sc = document.getElementById('showcase');
  const chs = [...sc.querySelectorAll('.ch')], dots = [...sc.querySelectorAll('.sc-dots i')];
  const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  let scTick = false;
  function showcase() {
    scTick = false;
    if (page !== 'home') return;
    const r = sc.getBoundingClientRect(), span = sc.offsetHeight - innerHeight;
    if (r.bottom < 0 || r.top > innerHeight) return;
    const P = Math.min(1, Math.max(0, -r.top / span)) * chs.length;
    chs.forEach((ch, c) => {
      const t = P - c, last = c === chs.length - 1;
      const enter = ss(0, .42, t), exit = last ? 0 : ss(.72, 1, t);
      const vis = Math.min(ss(-.05, .12, t), 1 - exit);
      ch.style.opacity = vis; ch.style.visibility = vis > .01 ? 'visible' : 'hidden';
      const ttl = ch.querySelector('.ttl');
      ttl.style.transform = `scale(${(innerWidth < 900 ? 1.3 : 1.15) - (innerWidth < 900 ? .3 : .15) * ss(0, .3, t) + .12 * exit})`;
      ttl.style.opacity = 1 - .5 * ss(.2, .5, t);
      ch.querySelectorAll('.f').forEach(f => {
        const k = 1 - enter, fx = +f.dataset.fx, fy = +f.dataset.fy, fr = +f.dataset.fr;
        const sc2 = .5 + .5 * enter + .35 * exit;
        f.style.transform = `translate(${fx * k}vw, ${fy * k}vh) rotate(${fr * k}deg) scale(${sc2})`;
      });
      const sub = ch.querySelector('.scsub'); sub.style.opacity = ss(.35, .55, t); sub.style.transform = `translateY(${20 * (1 - ss(.35, .55, t))}px)`;
    });
    const active = Math.min(chs.length - 1, Math.floor(P - .001 < 0 ? 0 : P));
    dots.forEach((d, i) => d.classList.toggle('on', i === active));
  }
  addEventListener('scroll', () => { if (!scTick) { scTick = true; requestAnimationFrame(showcase); } }, { passive: true });
  addEventListener('resize', showcase);
  addEventListener('hashchange', () => route());
  route();

  /* ---------- ORDERING (demo) + Tray of Happiness ---------- */
  const goMenu = () => { if (page !== 'menu') { try { history.pushState({}, '', new URL('menu/', ROOT)); route(); } catch (_) { location.href = new URL('menu/', ROOT); } } };
  document.querySelectorAll('a[href*="fmcshops"]').forEach(a => { a.setAttribute('href', 'menu/'); a.setAttribute('data-nav', ''); a.removeAttribute('target'); });
  let audio;
  function bell() {
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)(); const t = audio.currentTime;
      [1318, 1975, 2637].forEach((f, i) => { const o = audio.createOscillator(), g = audio.createGain(); o.type = 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t + i * .09); g.gain.exponentialRampToValueAtTime(.18 / (i + 1), t + i * .09 + .01); g.gain.exponentialRampToValueAtTime(.0001, t + i * .09 + 1.2);
        o.connect(g).connect(audio.destination); o.start(t + i * .09); o.stop(t + i * .09 + 1.3); });
    } catch (e) {}
  }
  const IBRAHIM = `<svg viewBox="0 0 220 240" aria-hidden="true">
    <ellipse cx="110" cy="232" rx="70" ry="8" fill="rgba(0,0,0,.35)"/>
    <path d="M40 240c4-46 30-66 70-66s66 20 70 66z" fill="#111"/><path d="M92 176l18 26 18-26" fill="#ff5a1f"/>
    <text x="110" y="226" text-anchor="middle" font-family="Arial Black,sans-serif" font-weight="900" font-size="20" fill="#ffb000">BOO</text>
    <circle cx="110" cy="112" r="62" fill="#e8b48a"/>
    <path d="M52 118c2 44 26 70 58 70s56-26 58-70c-8 10-16 14-24 14 0 0-6-6-34-6s-34 6-34 6c-8 0-16-4-24-14z" fill="#2a1a12"/>
    <ellipse class="ib-mouth" cx="110" cy="146" rx="20" ry="22" fill="#5a0f0a"/><ellipse cx="110" cy="158" rx="12" ry="7" fill="#e0525a"/>
    <path d="M92 132c6-4 30-4 36 0" stroke="#2a1a12" stroke-width="6" stroke-linecap="round" fill="none"/>
    <g class="ib-eyes"><ellipse cx="86" cy="100" rx="11" ry="13" fill="#fff"/><ellipse cx="134" cy="100" rx="11" ry="13" fill="#fff"/><circle cx="88" cy="102" r="6" fill="#111"/><circle cx="132" cy="102" r="6" fill="#111"/></g>
    <path d="M72 82l26 8M148 82l-26 8" stroke="#2a1a12" stroke-width="7" stroke-linecap="round"/>
    <path d="M46 92c0-44 28-64 64-64s64 20 64 64c-20-8-42-12-64-12s-44 4-64 12z" fill="#111"/>
    <path d="M168 86c18 2 30 8 34 16-16 2-30 0-40-6z" fill="#111"/>
    <text x="110" y="66" text-anchor="middle" font-family="Arial Black,sans-serif" font-weight="900" font-size="18" fill="#ff5a1f">BOO</text>
    <g class="ib-hand"><path d="M40 150c-14-10-16-30-2-34 10-3 18 8 22 20" fill="#e8b48a" stroke="#c98d63" stroke-width="2"/></g>
    <g class="ib-hand r"><path d="M180 150c14-10 16-30 2-34-10-3-18 8-22 20" fill="#e8b48a" stroke="#c98d63" stroke-width="2"/></g>
  </svg>`;
  const pop = document.createElement('div'); pop.className = 'toh'; pop.setAttribute('aria-live', 'polite');
  pop.innerHTML = `<div class="toh-bub"><b>TRAY OF</b><b>HAPPINESS!!!</b></div><div class="toh-guy">${IBRAHIM}</div>`;
  document.body.appendChild(pop);
  let tohT;
  function trayOfHappiness() {
    clearTimeout(tohT); pop.classList.remove('on'); void pop.offsetWidth; pop.classList.add('on'); bell();
    const em = ['🍗', '🦐', '🍟', '🔥', '🎉'];
    for (let i = 0; i < 26; i++) {
      const c = document.createElement('span'); c.className = 'toh-c'; c.textContent = em[i % em.length];
      const x = (Math.random() - .5) * innerWidth * .9, y = -(200 + Math.random() * innerHeight * .6), r = (Math.random() - .5) * 720;
      c.style.left = (innerWidth / 2) + 'px'; c.style.top = (innerHeight - 40) + 'px'; document.body.appendChild(c);
      c.animate([{ transform: 'translate(-50%,0) scale(.4)', opacity: 1 }, { transform: `translate(calc(-50% + ${x}px),${y}px) rotate(${r}deg) scale(1.1)`, opacity: 1, offset: .55 },
        { transform: `translate(calc(-50% + ${x * 1.1}px),${y + 260}px) rotate(${r * 1.4}deg) scale(1)`, opacity: 0 }], { duration: 1500 + Math.random() * 600, easing: 'cubic-bezier(.2,.7,.4,1)' }).onfinish = () => c.remove();
    }
    tohT = setTimeout(() => pop.classList.remove('on'), 3200);
  }
  Order.init({
    key: 'boo-cart', base: 'lbp', rate: RATE, delivery: 180000,
    branches: ['Monot', 'Batroun', 'Saida'],
    lang: () => lang,
    onAdd: it => { if (it && it.kg) trayOfHappiness(); },
    onBrowse: goMenu,
    t: { en: { add: 'Add', placed: 'Order in!', thanks: 'Sahtein', s2: 'On the grill 🔥', deliveryNote: 'Delivery 3a kel Lebnen.' },
         ar: { placed: 'وصل طلبك!', thanks: 'صحتين', s2: 'عالنار 🔥' } }
  });
  Order.register(ORDER_ITEMS);
})();
