/* =========================================================
   CyphrWeb — Interactions (vanilla JS, no dependencies)
   ========================================================= */

/* ---------------------------------------------------------
   DATA
   These arrays are the site's content for the directory,
   events and careers sections. Edit them directly to add,
   remove or update entries — no build step required.
   Startup ideas are intentionally NOT stored here in detail;
   only a high-level focus area is shown publicly.
   --------------------------------------------------------- */

// Add real startups here as they join. Leave empty until then —
// no placeholder companies are shown.
const STARTUPS = [
  // Example shape (copy this to add a real entry):
  // {
  //   name: "Startup Name",
  //   founders: "Founder A, Founder B",
  //   stage: "MVP Stage",
  //   focusArea: "Campus logistics",
  //   story: "How the team started — a couple of sentences.",
  //   photo: null // optional image path, e.g. "assets/startups/name.jpg"
  // }
];

// Add real, upcoming events here. Leave empty until there's
// something on the calendar — no invented dates or numbers.
const EVENTS = [
  // Example shape (copy this to add a real entry):
  // {
  //   title: "Event Name",
  //   date: "TBA",
  //   mode: "In-person, Pune",
  //   badge: "Workshop",
  //   summary: "One line shown on the card.",
  //   details: "Full description shown when the card is tapped.",
  //   link: "https://chat.whatsapp.com/FMRIkeHuOK45pKjLTabjZZ",
  //   linkLabel: "Register interest"
  // }
];

const CAREERS = [
  {
    title: "Content & Community",
    blurb: "Help run the WhatsApp community, write updates, and keep members engaged.",
  },
  {
    title: "Tech & Product",
    blurb: "Build and improve CyphrWeb's own tools — the website, dashboards and internal systems.",
  },
  {
    title: "Design",
    blurb: "Shape how CyphrWeb looks and feels — from the site to event branding.",
  },
  {
    title: "Partnerships & Outreach",
    blurb: "Connect with colleges, mentors and potential partners across Pune's startup scene.",
  },
  {
    title: "Events & Operations",
    blurb: "Plan and run hackathons, workshops and community meetups end to end.",
  },
  {
    title: "Growth & Marketing",
    blurb: "Grow CyphrWeb's reach — social, content and campus ambassadors.",
  },
];

// Short summary + fuller details for the "Not just an idea" section —
// each card opens the same modal used elsewhere on the site.
const TRACTION = [
  {
    title: "Startups & colleges",
    summary: "10+ startups from colleges across India — 2 already generating revenue.",
    details:
      "Student teams have registered from colleges across India — including VIT Vellore, MIT and other reputed institutions. Of these, 2 startups are already generating revenue, with more building toward it.",
  },
  {
    title: "The team behind it",
    summary: "20+ expert mentors, a 10+ member developer team and a 5+ member marketing team.",
    details:
      "CyphrWeb is run with support from 20+ experienced professionals who mentor the community, including people from companies like Microsoft, BMW, Tata Motors and Capgemini. Alongside them, a 10+ member developer team and a 5+ member marketing team — students from our own college — help build and grow the startups on the platform.",
  },
  {
    title: "Backing us",
    summary: "5+ angel investors back startups registered with CyphrWeb.",
    details:
      "CyphrWeb works with 5+ angel investors who invest in the startups registered with CyphrWeb — helping founders access funding as they grow, not just mentorship and resources.",
  },
];

const OFFERS = [
  {
    title: "Strategy",
    summary: "Business models, validation, positioning and growth strategy.",
    details:
      "We help you pressure-test your business model, figure out who you're really building for, and set a realistic path from where you are to your next milestone — not a generic template, a plan shaped around your specific startup.",
    icon: "target",
  },
  {
    title: "Expert Guidance",
    summary: "Access to relevant knowledge and experienced people.",
    details:
      "You get direct access to people who've dealt with the exact problem you're facing right now — whether that's technical architecture, hiring your first team, or handling a tricky customer conversation.",
    icon: "bulb",
  },
  {
    title: "Technology",
    summary: "Product development and technical execution.",
    details:
      "From MVP to a production-ready product — CyphrWeb can plug in technical execution support so you're not blocked waiting to hire, or stuck building everything solo.",
    icon: "code",
  },
  {
    title: "Marketing",
    summary: "Branding, content, campaigns and customer acquisition.",
    details:
      "Positioning, brand identity, content and acquisition campaigns — built to get your first real users and keep them, not just look good in a deck.",
    icon: "megaphone",
  },
  {
    title: "Networking",
    summary: "Connections with founders, experts and ecosystem members.",
    details:
      "Warm introductions inside the CyphrWeb community — other founders solving adjacent problems, experts in your domain, and collaborators who can move faster with you.",
    icon: "network",
  },
  {
    title: "Investor Introductions",
    summary: "Relevant introductions to angel investors and investors where appropriate.",
    details:
      "When you're ready and it's the right fit, we make relevant introductions to angel investors in our network. This isn't guaranteed funding — it's a warmer door than a cold email.",
    icon: "handshake",
  },
  {
    title: "Growth",
    summary: "Support focused on traction, customers and scaling.",
    details:
      "Once you have something working, the focus shifts to traction — retention, repeat customers, and the operational muscle you need to scale without breaking.",
    icon: "growth",
  },
];

const ICONS = {
  target:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.5"/></svg>',
  bulb:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11.2c.6.4 1 1.1 1 1.8h4c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z"/></svg>',
  code:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="m9 8-4 4 4 4M15 8l4 4-4 4"/></svg>',
  megaphone:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="M3 11v2a2 2 0 0 0 2 2h1l3 5V6l-3 5H5a2 2 0 0 0-2 2Z"/><path d="M13 8a4 4 0 0 1 0 8M17 5a8 8 0 0 1 0 14"/></svg>',
  network:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M7.7 7.3 10.5 16M16.3 7.3 13.5 16M8 6h8"/></svg>',
  handshake:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="M2 12h4l3-3 3 3 3-3 3 3h4"/><path d="M8 12v4M16 12v4"/></svg>',
  growth:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="M4 19h16M6 16l4-5 3 3 5-7"/></svg>',
};

/* ---------------------------------------------------------
   INIT
   --------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Each init runs independently — if one fails, the rest of the
  // page (and its content) still renders instead of going blank.
  safeRun(initNavbarScroll);
  safeRun(initMobileNav);
  safeRun(initScrollReveal);
  safeRun(initBackToTop);
  safeRun(buildNodeGraph);

  safeRun(renderTraction);
  safeRun(renderOffers);
  safeRun(renderDirectory);
  safeRun(renderEvents);
  safeRun(renderCareers);

  safeRun(initModal);
  safeRun(initFindTeam);
});

function safeRun(fn) {
  try {
    fn();
  } catch (err) {
    console.error(`CyphrWeb: ${fn.name} failed`, err);
  }
}

/* ---------- Navbar background on scroll ---------- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Mobile hamburger nav ---------- */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    });
  });
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  // Only elements that are successfully armed get the hidden
  // starting state (see .reveal-armed in style.css); anything
  // the observer can't reach simply stays visible.
  items.forEach((el) => {
    el.classList.add('reveal-armed');
    observer.observe(el);
  });
}

/* ---------- Back to top button ---------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('is-visible', window.scrollY > 480), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------- Hero node graph ---------- */
function buildNodeGraph() {
  const svg = document.querySelector('.node-graph');
  const nodesGroup = document.getElementById('nodeDots');
  const linesGroup = document.getElementById('nodeLines');
  if (!svg || !nodesGroup || !linesGroup) return;

  const nodes = Array.from(nodesGroup.querySelectorAll('.node'));
  const center = nodes.find((n) => n.classList.contains('node--center'));
  const outer = nodes.filter((n) => n !== center);

  const getXY = (el) => ({
    x: parseFloat(getComputedStyle(el).getPropertyValue('--x')) || 0,
    y: parseFloat(getComputedStyle(el).getPropertyValue('--y')) || 0,
  });

  const centerPos = getXY(center);
  outer.forEach((node, i) => {
    const pos = getXY(node);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', centerPos.x);
    line.setAttribute('y1', centerPos.y);
    line.setAttribute('x2', pos.x);
    line.setAttribute('y2', pos.y);
    line.style.opacity = '0';
    line.style.transition = `opacity .5s ease ${0.15 * i}s`;
    linesGroup.appendChild(line);
    requestAnimationFrame(() => (line.style.opacity = '1'));
  });

  nodes.forEach((node) => {
    const pos = getXY(node);
    node.setAttribute('transform', `translate(${pos.x}, ${pos.y})`);
    const label = node.getAttribute('data-label');
    if (label) {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      const isCenter = node.classList.contains('node--center');
      text.setAttribute('x', '0');
      text.setAttribute('y', isCenter ? '26' : '20');
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', 'currentColor');
      text.style.fontSize = '12px';
      text.style.fill = 'var(--text-muted)';
      text.textContent = label;
      node.appendChild(text);
    }
  });
}

/* ---------------------------------------------------------
   Traction & team cards ("Not just an idea")
   --------------------------------------------------------- */
function renderTraction() {
  const grid = document.getElementById('tractionGrid');
  if (!grid) return;

  grid.innerHTML = TRACTION.map(
    (item, i) => `
    <button class="traction-card" type="button" data-traction-index="${i}">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <span class="offer-card__tap">Tap for the full picture →</span>
    </button>`
  ).join('');

  grid.querySelectorAll('[data-traction-index]').forEach((card) => {
    card.addEventListener('click', () => {
      const item = TRACTION[Number(card.getAttribute('data-traction-index'))];
      openModal(`
        <span class="modal__badge">CyphrWeb today</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.details)}</p>
      `);
    });
  });
}

/* ---------------------------------------------------------
   Offer cards ("What CyphrWeb Brings")
   --------------------------------------------------------- */
function renderOffers() {
  const grid = document.getElementById('offerGrid');
  if (!grid) return;

  grid.innerHTML = OFFERS.map(
    (offer, i) => `
    <button class="offer-card" type="button" data-offer-index="${i}">
      <span class="offer-card__photo">${ICONS[offer.icon] || ''}</span>
      <span class="offer-card__body">
        <h3>${escapeHtml(offer.title)}</h3>
        <p>${escapeHtml(offer.summary)}</p>
        <span class="offer-card__tap">Tap to see what this looks like →</span>
      </span>
    </button>`
  ).join('');

  grid.querySelectorAll('[data-offer-index]').forEach((card) => {
    card.addEventListener('click', () => {
      const offer = OFFERS[Number(card.getAttribute('data-offer-index'))];
      openModal(`
        <span class="modal__badge">What CyphrWeb brings</span>
        <h3>${escapeHtml(offer.title)}</h3>
        <p>${escapeHtml(offer.details)}</p>
      `);
    });
  });
}

/* ---------------------------------------------------------
   Startup directory
   --------------------------------------------------------- */
function renderDirectory() {
  const grid = document.getElementById('directoryGrid');
  const empty = document.getElementById('directoryEmpty');
  if (!grid || !empty) return;

  if (!STARTUPS.length) {
    grid.style.display = 'none';
    empty.style.display = '';
    return;
  }

  grid.style.display = '';
  empty.style.display = 'none';

  grid.innerHTML = STARTUPS.map(
    (s, i) => `
    <button class="tile-card" type="button" data-startup-index="${i}">
      <span class="tile-card__photo" style="${s.photo ? `background-image:url('${s.photo}');background-size:cover;background-position:center;` : ''}">
        <span class="tile-card__badge">${escapeHtml(s.stage)}</span>
      </span>
      <span class="tile-card__body">
        <h3>${escapeHtml(s.name)}</h3>
        <p>${escapeHtml(s.focusArea)}</p>
        <span class="tile-card__meta">${escapeHtml(s.founders)}</span>
      </span>
    </button>`
  ).join('');

  grid.querySelectorAll('[data-startup-index]').forEach((card) => {
    card.addEventListener('click', () => {
      const s = STARTUPS[Number(card.getAttribute('data-startup-index'))];
      openModal(`
        <span class="modal__badge">${escapeHtml(s.stage)}</span>
        <h3>${escapeHtml(s.name)}</h3>
        <ul>
          <li>Founders: ${escapeHtml(s.founders)}</li>
          <li>Focus area: ${escapeHtml(s.focusArea)}</li>
        </ul>
        <p>${escapeHtml(s.story)}</p>
        <p class="fineprint">Full product details stay private with the founding team.</p>
      `);
    });
  });
}

/* ---------------------------------------------------------
   Events
   --------------------------------------------------------- */
function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  const empty = document.getElementById('eventsEmpty');
  if (!grid || !empty) return;

  if (!EVENTS.length) {
    grid.style.display = 'none';
    empty.style.display = '';
    return;
  }

  grid.style.display = '';
  empty.style.display = 'none';

  grid.innerHTML = EVENTS.map(
    (e, i) => `
    <button class="tile-card" type="button" data-event-index="${i}">
      <span class="tile-card__photo"><span class="tile-card__badge">${escapeHtml(e.badge)}</span></span>
      <span class="tile-card__body">
        <h3>${escapeHtml(e.title)}</h3>
        <p>${escapeHtml(e.summary)}</p>
        <span class="tile-card__meta">${escapeHtml(e.date)} · ${escapeHtml(e.mode)}</span>
      </span>
    </button>`
  ).join('');

  grid.querySelectorAll('[data-event-index]').forEach((card) => {
    card.addEventListener('click', () => {
      const e = EVENTS[Number(card.getAttribute('data-event-index'))];
      openModal(`
        <span class="modal__badge">${escapeHtml(e.badge)}</span>
        <h3>${escapeHtml(e.title)}</h3>
        <ul>
          <li>${escapeHtml(e.date)}</li>
          <li>${escapeHtml(e.mode)}</li>
        </ul>
        <p>${escapeHtml(e.details)}</p>
        ${e.link ? `<a class="btn btn--primary" href="${e.link}" target="_blank" rel="noopener">${escapeHtml(e.linkLabel || 'Learn more')}</a>` : ''}
      `);
    });
  });
}

/* ---------------------------------------------------------
   Careers
   --------------------------------------------------------- */
function renderCareers() {
  const grid = document.getElementById('careersGrid');
  if (!grid) return;

  grid.innerHTML = CAREERS.map(
    (c) => `
    <div class="card career-card">
      <h3>${escapeHtml(c.title)}</h3>
      <p>${escapeHtml(c.blurb)}</p>
      <a class="career-card__cta" href="https://chat.whatsapp.com/FMRIkeHuOK45pKjLTabjZZ" target="_blank" rel="noopener">Interested? Reach out →</a>
    </div>`
  ).join('');
}

/* ---------------------------------------------------------
   Modal
   --------------------------------------------------------- */
function initModal() {
  const modal = document.getElementById('modal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');
  if (!modal || !backdrop || !closeBtn) return;

  backdrop.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
}

function openModal(html) {
  const modal = document.getElementById('modal');
  const body = document.getElementById('modalBody');
  if (!modal || !body) return;
  body.innerHTML = html;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = '';
}

/* ---------------------------------------------------------
   Find Your Team — registration + local directory
   --------------------------------------------------------- */
const TEAM_STORAGE_KEY = 'cyphrweb_team_requests';

function initFindTeam() {
  const tabs = document.querySelectorAll('.find-team__tab');
  const lookingForLabel = document.getElementById('tf-lookingfor-label');
  const lookingForInput = document.getElementById('tf-lookingfor');
  const form = document.getElementById('teamForm');
  const note = document.getElementById('teamFormNote');
  let currentRole = 'founder';

  if (tabs.length) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
        currentRole = tab.getAttribute('data-role');
        if (lookingForLabel && lookingForInput) {
          if (currentRole === 'founder') {
            lookingForLabel.textContent = 'Looking for';
            lookingForInput.placeholder = 'e.g. Tech co-founder';
          } else {
            lookingForLabel.textContent = 'Role you want';
            lookingForInput.placeholder = 'e.g. Co-founder, Frontend dev';
          }
        }
      });
    });
  }

  renderTeamList();

  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const entry = {
      role: currentRole,
      name: (data.get('name') || '').toString().trim(),
      lookingFor: (data.get('lookingFor') || '').toString().trim(),
      skills: (data.get('skills') || '').toString().trim(),
      pitch: (data.get('pitch') || '').toString().trim(),
      contact: (data.get('contact') || '').toString().trim(),
      ts: Date.now(),
    };

    if (!entry.name || !entry.lookingFor || !entry.skills || !entry.contact) {
      if (note) note.textContent = 'Please fill in all required fields.';
      return;
    }

    const list = readTeamList();
    list.unshift(entry);
    try {
      localStorage.setItem(TEAM_STORAGE_KEY, JSON.stringify(list));
    } catch (err) {
      /* localStorage unavailable — entry still shows for this session via render below */
    }

    renderTeamList(list);
    form.reset();
    if (note) note.textContent = "You're on the list. Share it in the community so people can see it too.";

    window.open('https://chat.whatsapp.com/FMRIkeHuOK45pKjLTabjZZ', '_blank', 'noopener');
  });
}

function readTeamList() {
  try {
    const raw = localStorage.getItem(TEAM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

function renderTeamList(preloaded) {
  const listEl = document.getElementById('teamList');
  if (!listEl) return;
  const list = preloaded || readTeamList();

  if (!list.length) {
    listEl.innerHTML = `<li class="find-team__empty">No one has registered on this device yet. Be the first — your entry (and everyone else's) will show up here.</li>`;
    return;
  }

  listEl.innerHTML = list
    .map(
      (entry) => `
    <li class="find-team__entry">
      <div class="find-team__entry-top">
        <span class="find-team__entry-name">${escapeHtml(entry.name)}</span>
        <span class="find-team__entry-role">${entry.role === 'founder' ? 'Founder' : 'Looking to join'}</span>
      </div>
      <p>Looking for: ${escapeHtml(entry.lookingFor)} · Skills: ${escapeHtml(entry.skills)}</p>
      ${entry.pitch ? `<p>${escapeHtml(entry.pitch)}</p>` : ''}
      <p class="fineprint">Contact: ${escapeHtml(entry.contact)}</p>
    </li>`
    )
    .join('');
}

/* ---------------------------------------------------------
   Utility
   --------------------------------------------------------- */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}
