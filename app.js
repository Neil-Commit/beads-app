/*tbh idk anything about js*/

/* mysteriess data */
const MYSTERIES = {
  Joyful: [
    { n: 'The <em>Annunciation</em><br>to Our Lady', f: 'Humility' },
    { n: 'The <em>Visitation</em><br>of Mary to Elizabeth', f: 'Love of Neighbor' },
    { n: 'The <em>Nativity</em><br>of Our Lord', f: 'Poverty of Spirit' },
    { n: 'The <em>Presentation</em><br>in the Temple', f: 'Obedience' },
    { n: 'Finding in the<br><em>Temple</em>', f: 'Piety' }
  ],
  Sorrowful: [
    { n: 'The <em>Agony</em><br>in the Garden', f: 'Contrition' },
    { n: 'The <em>Scourging</em><br>at the Pillar', f: 'Mortification' },
    { n: 'The <em>Crowning</em><br>with Thorns', f: 'Moral Courage' },
    { n: 'Carrying the<br><em>Holy Cross</em>', f: 'Patience' },
    { n: 'The <em>Crucifixion</em><br>and Death', f: 'Salvation' }
  ],
  Glorious: [
    { n: 'The <em>Resurrection</em><br>of Our Lord', f: 'Faith' },
    { n: 'The <em>Ascension</em><br>of Our Lord', f: 'Hope' },
    { n: 'Descent of the<br><em>Holy Spirit</em>', f: 'Love of God' },
    { n: 'The <em>Assumption</em><br>of Mary', f: 'Grace of a Holy Death' },
    { n: 'Coronation of<br><em>Our Lady</em>', f: "Trust in Mary's Intercession" }
  ],
  Luminous: [
    { n: 'Baptism in the<br><em>Jordan</em>', f: 'Openness to the Holy Spirit' },
    { n: 'Wedding at<br><em>Cana</em>', f: 'To Jesus through Mary' },
    { n: 'Proclamation of the<br><em>Kingdom</em>', f: 'Repentance & Trust' },
    { n: 'The <em>Transfiguration</em>', f: 'Desire for Holiness' },
    { n: 'Institution of the<br><em>Eucharist</em>', f: 'Eucharistic Adoration' }
  ]
};

/* weekly mystery sunday-->saturday */
const DAY_MYSTERY = {
  0: 'Glorious',
  1: 'Joyful',
  2: 'Sorrowful',
  3: 'Glorious',
  4: 'Luminous',
  5: 'Sorrowful',
  6: 'Glorious'
};
const DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const ROMAN = ['I','II','III','IV','V'];

/* prayers bank */
const PRAYERS = {
  "Apostles' Creed": `I believe in God, the Father Almighty,<br>Creator of Heaven and earth;<br>and in Jesus Christ, His only Son, Our Lord,<br>Who was conceived by the Holy Spirit,<br>born of the Virgin Mary,<br>suffered under Pontius Pilate,<br>was crucified, died, and was buried.<br><br><strong>He descended into Hell; the third day<br>He rose again from the dead;<br>He ascended into Heaven,<br>and sitteth at the right hand of God,<br>the Father Almighty; from thence He shall come<br>to judge the living and the dead.<br>I believe in the Holy Ghost,<br>the holy Catholic Church,<br>the communion of saints,<br>the forgiveness of sins,<br>the resurrection of the body<br>and life everlasting. Amen.</strong>`,

  'Our Father': `Our Father, Who art in heaven,<br>hallowed be Thy name;<br>Thy kingdom come; Thy will be done<br>on earth as it is in heaven.<br><br><strong>Give us this day our daily bread;<br>and forgive us our trespasses<br>as we forgive those who trespass against us;<br>and lead us not into temptation,<br>but deliver us from evil. Amen.</strong>`,

  'Hail Mary': `Hail Mary, full of grace,<br>the Lord is with thee.<br>Blessed art thou among women,<br>and blessed is the fruit of thy womb, Jesus.<br><br><strong>Holy Mary, Mother of God,<br>pray for us sinners,<br>now and at the hour of our death. Amen.</strong>`,

  'Glory Be': `Glory be to the Father,<br>and to the Son,<br>and to the Holy Spirit.<br><br><strong>As it was in the beginning,<br>is now, and ever shall be,<br>world without end. Amen.</strong>`,

  'Fátima Prayer': `O my Jesus, forgive us our sins,<br>save us from the fires of hell,<br>lead all souls to Heaven,<br>especially those most in need<br>of Thy mercy. Amen.`,

  'Hail Holy Queen': `Hail, Holy Queen, Mother of Mercy,<br>our life, our sweetness and our hope.<br>To thee do we cry,<br>poor banished children of Eve.<br>To thee do we send up our sighs,<br>mourning and weeping in this valley of tears.<br><br><strong>Turn then, most gracious Advocate,<br>thine eyes of mercy toward us;<br>and after this our exile,<br>show unto us the blessed fruit of thy womb, Jesus.<br>O clement, O loving, O sweet Virgin Mary. Amen.</strong>`,

  'Memorare': `Remember, O most gracious Virgin Mary,<br>that never was it known that anyone<br>who fled to thy protection,<br>implored thy help, or sought thy intercession<br>was left unaided.<br><br><strong>Inspired by this confidence,<br>I fly unto thee, O Virgin of virgins, my mother;<br>to thee do I come, before thee I stand,<br>sinful and sorrowful.<br>O Mother of the Word Incarnate,<br>despise not my petitions,<br>but in thy mercy hear and answer me. Amen.</strong>`,

  'Angel of God': `Angel of God, my guardian dear,<br>to whom God's love commits me here,<br><br><strong>ever this day be at my side,<br>to light and guard, to rule and guide. Amen.</strong>`
};

/* prayer sequence*/
function buildSequence(type) {
  const seq = [];

  seq.push({ l: "Apostles' Creed", p: "Apostles' Creed", b: 'crucifix', c: '', m: -1 });
  seq.push({ l: 'Our Father', p: 'Our Father', b: 'of0', c: '', m: -1 });
  for (let i = 0; i < 3; i++) {
    seq.push({ l: 'Hail Mary', p: 'Hail Mary', b: 'hm' + i, c: (i + 1) + ' of 3', m: -1 });
  }
  seq.push({ l: 'Glory Be', p: 'Glory Be', b: 'hm2', c: '', m: -1 });

  for (let d = 0; d < 5; d++) {
    seq.push({ l: 'Our Father', p: 'Our Father', b: 'of' + (d + 1), c: 'Mystery ' + ROMAN[d], m: d });
    for (let h = 0; h < 10; h++) {
      seq.push({ l: 'Hail Mary', p: 'Hail Mary', b: 'd' + d + 'h' + h, c: (h + 1) + ' of 10', m: d });
    }
    seq.push({ l: 'Glory Be', p: 'Glory Be', b: 'd' + d + 'h9', c: '', m: d });
    seq.push({ l: 'Fátima Prayer', p: 'Fátima Prayer', b: 'd' + d + 'h9', c: '', m: d });
  }

  seq.push({ l: 'Hail Holy Queen', p: 'Hail Holy Queen', b: 'crucifix', c: '', m: -1 });
  return seq;
}

/* app sate */
let mystType = DAY_MYSTERY[new Date().getDay()];
let sequence = buildSequence(mystType);
let step = 0;
let isDark = false;
let currentView = 'pray';

/* gamer dark mode */
function toggleDark() {
  isDark = !isDark;
  document.getElementById('ph').className = 'phone ' + (isDark ? 'D' : 'L');
  document.body.className = isDark ? 'dark' : '';
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#0F0B06' : '#FDFBF7';
  drawRosary();
}

/* viewer */
function showV(v) {
  currentView = v;

  const views = { pray: 'vPray', lib: 'vLib', cal: 'vCal', news: 'vNews', done: 'vDone' };
  Object.values(views).forEach(id => document.getElementById(id).style.display = 'none');

  const target = views[v] || 'vPray';
  document.getElementById(target).style.display = 'block';

  const navMap = { pray: 'nPray', lib: 'nLib', cal: 'nCal', news: 'nNews' };
  ['nPray','nLib','nCal','nNews'].forEach(id => document.getElementById(id).classList.remove('on'));
  if (navMap[v]) document.getElementById(navMap[v]).classList.add('on');

  const isPray = (v === 'pray');
  const isDoneView = (v === 'done');
  document.getElementById('nLbl').textContent = isPray ? (step < sequence.length - 1 ? 'Next' : 'Done') : '';
  document.getElementById('nArr').textContent = isPray ? (step < sequence.length - 1 ? '\u203a' : '\u2713') : '';

  document.getElementById('scr').scrollTo({ top: 0, behavior: 'smooth' });
}

/* next action (button) */
function nxtAction() {
  if (currentView === 'pray') advance();
}

/* mystery selector */
function selType(type) {
  mystType = type;
  sequence = buildSequence(type);
  step = 0;

  document.querySelectorAll('.tab').forEach(tb => tb.classList.toggle('on', tb.dataset.t === type));
  document.getElementById('mtEM').textContent = type;
  updateSidebar(type);
  updatePrayUI();
}

/* advance or go back */
function advance() {
  if (step < sequence.length - 1) {
    step++;
    updatePrayUI();
    document.getElementById('scr').scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    /* done screen */
    showV('done');
  }
}

function goBack() {
  if (step > 0) {
    step--;
    updatePrayUI();
    document.getElementById('scr').scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* reset button */
function resetRosary() {
  step = 0;
  sequence = buildSequence(mystType);
  showV('pray');
  document.getElementById('nPray').classList.add('on');
  updatePrayUI();
}

/* update viewer */
function updatePrayUI() {
  const s = sequence[step];

  document.getElementById('pTit').textContent = s.l;
  document.getElementById('pCnt').textContent = s.c;
  document.getElementById('pTxt').innerHTML = PRAYERS[s.p] || '';
  document.getElementById('sCtr').textContent = 'Step ' + (step + 1) + ' of ' + sequence.length;

  const pct = step === 0 ? 0 : Math.round((step / (sequence.length - 1)) * 100);
  document.getElementById('pPill').textContent = pct + '% complete';

  const isLast = step === sequence.length - 1;
  document.getElementById('nLbl').textContent = isLast ? 'Done' : 'Next';
  document.getElementById('nArr').textContent = isLast ? '\u2713' : '\u203a';

  if (s.m >= 0) {
    const myst = MYSTERIES[mystType][s.m];
    document.getElementById('mN').textContent = 'Mystery ' + ROMAN[s.m];
    document.getElementById('mNm').innerHTML = myst.n;
    document.getElementById('mFr').textContent = myst.f;
  } else if (step < 6) {
    document.getElementById('mN').textContent = 'Introduction';
    document.getElementById('mNm').innerHTML = 'Opening Prayers<br><em>of the Rosary</em>';
    document.getElementById('mFr').textContent = 'Preparation';
  } else {
    document.getElementById('mN').textContent = 'Closing';
    document.getElementById('mNm').innerHTML = 'Closing<br><em>Prayer</em>';
    document.getElementById('mFr').textContent = 'Gratitude';
  }

  drawRosary();
}

/* rosary svg */
function drawRosary() {
  const svg = document.getElementById('rSVG');

  const CHAIN  = isDark ? 'rgba(201,169,110,0.2)'  : 'rgba(140,119,87,0.32)';
  const C_BEAD = isDark ? '#3D2B14' : '#2C1F0E';
  const C_DONE = isDark ? '#7A5C2E' : '#9A7340';
  const C_ACT  = '#C9A96E';
  const C_OF   = isDark ? 'rgba(201,169,110,0.45)' : '#C9A96E';
  const C_OFD  = isDark ? '#C9A96E' : '#9A7340';

  const cx = 162, cy = 128, r = 104;

  const beads = [];
  for (let d = 0; d < 5; d++) {
    beads.push({ id: 'of' + (d + 1), tp: 'of' });
    for (let h = 0; h < 10; h++) beads.push({ id: 'd' + d + 'h' + h, tp: 'hm' });
  }

  const total = beads.length;
  const angleOffset = -Math.PI / 2 + 0.24;
  const gapAngle = 0.35;
  const circAngle = 2 * Math.PI - gapAngle;
  const beadAngle = i => angleOffset + (i / total) * circAngle;

  const parts = [];

  /* chain connecting the beaads*/
  for (let i = 0; i < total - 1; i++) {
    const a = beadAngle(i), b = beadAngle(i + 1);
    parts.push(
      `<line x1="${(cx + r * Math.cos(a)).toFixed(1)}" y1="${(cy + r * Math.sin(a)).toFixed(1)}"` +
      ` x2="${(cx + r * Math.cos(b)).toFixed(1)}" y2="${(cy + r * Math.sin(b)).toFixed(1)}"` +
      ` stroke="${CHAIN}" stroke-width="1.2"/>`
    );
  }

  const lastAngle  = beadAngle(total - 1);
  const firstAngle = angleOffset;
  const lx = (cx + r * Math.cos(lastAngle)).toFixed(1);
  const ly = (cy + r * Math.sin(lastAngle)).toFixed(1);
  const fx = (cx + r * Math.cos(firstAngle)).toFixed(1);
  const fy = (cy + r * Math.sin(firstAngle)).toFixed(1);
  const jx = cx + (r - 16) * Math.cos(angleOffset - gapAngle / 2);
  const jy = cy + (r - 16) * Math.sin(angleOffset - gapAngle / 2) + 16;

  parts.push(`<line x1="${lx}" y1="${ly}" x2="${jx.toFixed(1)}" y2="${jy.toFixed(1)}" stroke="${CHAIN}" stroke-width="1.2"/>`);
  parts.push(`<line x1="${fx}" y1="${fy}" x2="${jx.toFixed(1)}" y2="${jy.toFixed(1)}" stroke="${CHAIN}" stroke-width="1.2"/>`);

  const pendant = [
    { id: 'of0', tp: 'of', y: jy + 17 },
    { id: 'hm0', tp: 'hm', y: jy + 32 },
    { id: 'hm1', tp: 'hm', y: jy + 47 },
    { id: 'hm2', tp: 'hm', y: jy + 62 }
  ];

  let prevY = jy;
  pendant.forEach(b => {
    const ac = isActive(b.id), dn = wasDone(b.id);
    parts.push(
      `<line x1="${jx.toFixed(1)}" y1="${prevY.toFixed(1)}"` +
      ` x2="${jx.toFixed(1)}" y2="${(b.y - 6).toFixed(1)}"` +
      ` stroke="${CHAIN}" stroke-width="1.2"/>`
    );
    const sz = ac ? 8 : (b.tp === 'of' ? 6 : 5);
    let fill = b.tp === 'of' ? C_OF : C_BEAD;
    if (dn)  fill = b.tp === 'of' ? C_OFD : C_DONE;
    if (ac)  fill = C_ACT;
    const ring = ac ? ` stroke="rgba(201,169,110,0.28)" stroke-width="4"` : '';
    parts.push(`<circle cx="${jx.toFixed(1)}" cy="${b.y}" r="${sz}" fill="${fill}"${ring}/>`);
    prevY = b.y + sz;
  });

  /* Crux */
  const crucY = pendant[3].y + 24;
  parts.push(
    `<line x1="${jx.toFixed(1)}" y1="${prevY.toFixed(1)}"` +
    ` x2="${jx.toFixed(1)}" y2="${(crucY - 13).toFixed(1)}"` +
    ` stroke="${CHAIN}" stroke-width="1.2"/>`
  );

  const cAct = isActive('crucifix');
  const cc   = cAct ? C_ACT : C_BEAD;
  const jn   = parseFloat(jx.toFixed(1));

  parts.push(`<rect x="${(jn - 4.5).toFixed(1)}" y="${(crucY - 13).toFixed(1)}" width="9" height="20" rx="2" fill="${cc}"/>`);
  parts.push(`<rect x="${(jn - 9.5).toFixed(1)}" y="${(crucY - 7).toFixed(1)}" width="19" height="5" rx="1.5" fill="${cc}"/>`);
  if (cAct) {
    parts.push(`<circle cx="${jn}" cy="${crucY - 2}" r="15" fill="none" stroke="rgba(201,169,110,0.2)" stroke-width="3"/>`);
  }

  beads.forEach((b, i) => {
    const a  = beadAngle(i);
    const bx = cx + r * Math.cos(a);
    const by = cy + r * Math.sin(a);
    const ac = isActive(b.id), dn = wasDone(b.id);

    let fill = b.tp === 'of' ? C_OF : C_BEAD;
    if (dn)  fill = b.tp === 'of' ? C_OFD : C_DONE;
    if (ac)  fill = C_ACT;

    const sz   = ac ? (b.tp === 'of' ? 9 : 7) : (b.tp === 'of' ? 6 : 4.5);
    const ring = ac ? ` stroke="rgba(201,169,110,0.25)" stroke-width="4"` : '';
    parts.push(`<circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="${sz}" fill="${fill}"${ring}/>`);
  });

  svg.innerHTML = parts.join('');
}

function isActive(id) { return sequence[step].b === id; }
function wasDone(id)  { for (let i = 0; i <= step; i++) { if (sequence[i].b === id) return true; } return false; }

/*desktop sidebar */
function updateSidebar(type) {
  const mysts = MYSTERIES[type];
  const day = new Date().getDay();

  const nameEl = document.getElementById('sbMystName');
  const dayEl  = document.getElementById('sbDayName');
  const lblEl  = document.getElementById('sbMystLabel');
  const listEl = document.getElementById('sbMystList');

  if (!nameEl) return; 

  nameEl.innerHTML = 'The <em>' + type + '</em> Mysteries';
  dayEl.textContent = DAY_NAMES[day];
  lblEl.textContent = type + ' Mysteries';

  listEl.innerHTML = mysts.map((m, i) =>
    `<div class="sb-mystery-row">` +
    `<div class="sb-mystery-num">${ROMAN[i]}</div>` +
    `<div>` +
    `<div class="sb-mystery-name">${m.n.replace(/<br>/g, ' ')}</div>` +
    `<div class="sb-mystery-fruit">${m.f}</div>` +
    `</div></div>`
  ).join('');
}


function buildLibrary() {
  const entries = [
    ["Apostles' Creed", 'Profession of Faith'],
    ['Our Father', "The Lord's Prayer"],
    ['Hail Mary', 'Prayer to Our Lady'],
    ['Glory Be', 'Doxology'],
    ['Fátima Prayer', 'Marian Apparition Prayer'],
    ['Hail Holy Queen', 'Salve Regina'],
    ['Memorare', 'Prayer of Intercession'],
    ['Angel of God', 'Guardian Angel Prayer']
  ];

  document.getElementById('libList').innerHTML =
    '<div class="stitle">All Prayers</div>' +
    entries.map(([name, sub]) =>
      `<div class="libitem" onclick="showLibPrayer('${name}')">` +
      `<div class="libname">${name}</div>` +
      `<div class="libsub">${sub}</div></div>`
    ).join('');
}

function showLibPrayer(name) {
  document.getElementById('libList').style.display = 'none';
  document.getElementById('libPray').style.display = 'block';
  document.getElementById('lpTitle').textContent = name;
  document.getElementById('lpTxt').innerHTML = PRAYERS[name] || 'Prayer text coming soon.';
}

function libBack() {
  document.getElementById('libList').style.display = 'block';
  document.getElementById('libPray').style.display = 'none';
}


/* CBCP API */
async function buildNews() {
  const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://cbcpnews.net/feed/");
  const data = await res.json();

  const articles = data.items.slice(0, 7);

  document.getElementById('newsContent').innerHTML =
    `<div class="stitle">Latest from CBCP</div>` +
    articles.map(a =>
      `<div class="nitem">
        <div class="ntag">News</div>
        <div class="ntitle">${a.title}</div>
        <div class="ndate">${new Date(a.pubDate).toDateString()}</div>
      </div>`
    ).join('');
}

function init() {
  const now = new Date();
  const day = now.getDay();
  const mtype = DAY_MYSTERY[day];

  document.getElementById('dayTxt').textContent = DAY_NAMES[day] + ' \u00b7 ' + mtype + ' Mysteries';
  document.querySelectorAll('.tab').forEach(tb => tb.classList.toggle('on', tb.dataset.t === mtype));
  document.getElementById('mtEM').textContent = mtype;

  mystType = mtype;
  sequence = buildSequence(mtype);

  buildLibrary();
  buildNews();
  updateSidebar(mtype);
  updatePrayUI();
}

document.addEventListener('DOMContentLoaded', init);
