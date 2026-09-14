(function () {
  var DATA = window.GRAIN_INDEX;
  var app = document.getElementById('app');
  (function computeStats() {
    var st = { roles: DATA.roles.length, tasks: 0, new: 0, agg: { u: 0, a: 0, x: 0 } };
    DATA.roles.forEach(function (r) {
      st.tasks += r.tasks.length;
      st.new += r.new.length;
      st.agg.u += r.counts.u; st.agg.a += r.counts.a; st.agg.x += r.counts.x;
    });
    DATA.stats = st;
  })();
  var DEFAULT_SHARE = {
    title: 'The Grain Index',
    description: 'Every job is a bundle of tasks. AI re-deals the bundle. 20 People roles, 299 tasks, each one called.'
  };
  function setShare(title, description) {
    var pairs = [
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', description]
    ];
    pairs.forEach(function (pair) {
      var el = document.querySelector(pair[0]);
      if (el) el.setAttribute('content', pair[1]);
    });
  }
  var SRC_LABELS = {
    'onet': 'Grounded in O*NET task data',
    'onet+ads': 'Hybrid: O*NET core plus advertised roles',
    'ads': 'Built from advertised roles (no O*NET equivalent)'
  };
  var CAL = 'https://calendar.app.google/GVXsCdVFiLW2yTAw5';

  var BUCKETS = {
    u: { label: 'Stays with the person', short: 'unchanged', numClass: 'human' },
    a: { label: 'Augmented', short: 'augmented', numClass: 'aug' },
    x: { label: 'Automated', short: 'automated', numClass: 'auto' },
    n: { label: 'New tasks', short: 'new', numClass: 'new' }
  };
  var CLUSTER_NAMES = { people: 'People and HR', knowledge: 'Wider knowledge work' };

  var ALIASES = {
    'hr-specialists': ['recruiter', 'recruitment', 'talent acquisition', 'hr advisor', 'hr generalist'],
    'hr-business-partner': ['hrbp'],
    'hr-managers': ['head of hr', 'hr director'],
    'hr-assistants': ['hr admin', 'hr coordinator'],
    'training-development-managers': ['l&d', 'learning and development'],
    'training-development-specialists': ['l&d', 'learning', 'trainer'],
    'comp-benefits-analysts': ['reward'],
    'compensation-benefits-managers': ['reward', 'head of reward'],
    'labor-relations-specialists': ['union', 'industrial relations', 'employee relations'],
    'software-developers': ['engineer', 'engineering', 'programmer'],
    'customer-service-reps': ['support', 'helpdesk', 'call centre'],
    'executive-assistants': ['pa', 'ea', 'personal assistant'],
    'project-managers': ['pm'],
    'data-scientists': ['machine learning', 'ml'],
    'management-analysts': ['consultant'],
    'market-research-analysts': ['insight'],
    'accountants-auditors': ['accountant', 'auditor', 'finance'],
    'financial-analysts': ['fp&a'],
    'lawyers': ['legal', 'counsel'],
    'paralegals': ['legal'],
    'marketing-managers': ['brand'],
    'operations-managers': ['ops'],
    'technical-writers': ['documentation'],
    'people-partner': ['people business partner', 'strategic people partner', 'hrbp'],
    'head-of-people': ['people director', 'director of people', 'vp people', 'head of hr'],
    'people-ops-manager': ['people operations', 'people ops', 'hr operations'],
    'people-ops-generalist': ['people generalist', 'hr generalist', 'first people hire'],
    'talent-acquisition-partner': ['recruiter', 'recruitment', 'talent partner', 'talent acquisition', 'sourcer'],
    'people-analytics-lead': ['people analyst', 'workforce analytics', 'hr analytics'],
    'people-systems-analyst': ['hris', 'workday', 'people technology', 'people tech'],
    'employee-relations-partner': ['employee relations', 'er partner', 'industrial relations'],
    'chief-people-officer': ['cpo', 'chief human resources officer', 'chro', 'people executive'],
    'ai-enablement-lead': ['ai adoption', 'ai transformation', 'ai training', 'enablement']
  };

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function pct(part, whole) { return whole ? Math.round((part / whole) * 100) : 0; }

  function bar(counts, total, cls, includeN) {
    if (includeN === undefined) includeN = true;
    var t = total || (counts.u + counts.a + counts.x + (includeN ? counts.n : 0));
    return '<div class="' + (cls || 'bar') + '" role="img" aria-label="' +
      counts.u + ' unchanged, ' + counts.a + ' augmented, ' + counts.x + ' automated, ' + counts.n + ' new">' +
      ['u', 'a', 'x', 'n'].map(function (k) {
        if (k === 'n' && !includeN) return '';
        var w = (counts[k] / t) * 100;
        return w > 0 ? '<i class="' + k + '" style="width:' + w.toFixed(2) + '%"></i>' : '';
      }).join('') + '</div>';
  }

  function legend() {
    return '<div class="legend">' +
      '<span><i class="chip u"></i>Stays with the person</span>' +
      '<span><i class="chip a"></i>Augmented by AI</span>' +
      '<span><i class="chip x"></i>Automated by AI</span>' +
      '<span><i class="chip n"></i>New task created by AI</span>' +
      '</div>';
  }

  function ctaBlock() {
    return '<section class="cta block"><div class="wrap">' +
      '<p class="kicker" style="color:var(--accent)">Want this for your own roles?</p>' +
      '<h2>Your organisation has a task bundle too.</h2>' +
      '<p>A Grain Audit maps your actual roles task by task: what stays human, what AI accelerates, what it takes over, and what new work appears. Then we redesign the work around it.</p>' +
      '<a class="btn" href="' + CAL + '">Book a Grain Audit</a>' +
      '<a class="btn btn-ghost" href="https://deepgrain.ai">deepgrain.ai</a>' +
      '</div></section>';
  }

  function methodBlock() {
    return '<section class="block sweep"><div class="wrap">' +
      '<p class="kicker">How to read this</p>' +
      '<h2 class="section-title">The method, stated plainly</h2>' +
      '<ul class="rubric">' +
      '<li><i class="chip u"></i><span><b>Stays with the person</b><span class="desc">The value is presence, trust, legal accountability or physical work. AI can brief and draft, but a person does the task.</span></span></li>' +
      '<li><i class="chip a"></i><span><b>Augmented</b><span class="desc">The judgement and the accountability stay human. AI does the first draft, the analysis, the shortlist. The person reviews and decides.</span></span></li>' +
      '<li><i class="chip x"></i><span><b>Automated</b><span class="desc">High volume, rule based, digital in and out, no case by case judgement. AI runs it end to end; people handle exceptions.</span></span></li>' +
      '<li><i class="chip n"></i><span><b>New task</b><span class="desc">Exists only because AI output now exists and needs checking, tuning or defending.</span></span></li>' +
      '</ul>' +
      '<div class="method-list">' +
      '<div class="method-item"><h3>The data</h3><p>Two layers. The floor is O*NET Database 30.0, the US Department of Labor\'s occupation taxonomy, verbatim. On top sit the modern People roles O*NET does not know exist, built from ' + DATA.sources.adsCount + ' advertised roles at VC and PE-backed companies, UK and US, collected ' + DATA.sources.collected + '. Provenance is marked on every role.</p></div>' +
      '<div class="method-item"><h3>The calls</h3><p>Anthropic\'s economics team treats jobs as bundles of tasks but publishes no rule for sorting them. These classifications are Deepgrain\'s reasoned judgement, one per task, each with its reason written next to it.</p></div>' +
      '<div class="method-item"><h3>The close calls</h3><p>Some tasks genuinely sit between buckets. They are flagged as close calls on every role page, because an index you cannot argue with is marketing, not analysis.</p></div>' +
      '<div class="method-item"><h3>The credit</h3><p>The task bundle framing is Anthropic\'s, illustrated in their economic scenarios work. A one-role walkthrough by TQSolutions showed the shape. This index extends the idea to every role a People team actually hires for.</p></div>' +
      '</div>' +
      '<p class="method-more"><a href="#/method">The full method: what O*NET gets right, where it fails, and how the job-ad grounding works</a></p>' +
      '</div></section>';
  }

  function renderHome() {
    var s = DATA.stats;
    var aggPct = pct(s.agg.a, s.tasks);
    var rows = DATA.roles.slice().sort(function (a, b) {
      return (b.counts.x / (b.counts.u + b.counts.a + b.counts.x)) - (a.counts.x / (a.counts.u + a.counts.a + a.counts.x));
    }).map(function (r) {
      var base = r.counts.u + r.counts.a + r.counts.x;
      return '<div class="shift-row">' +
        '<a class="role-name" href="#/role/' + r.slug + '">' + esc(r.label) + '</a>' +
        bar(r.counts, null, 'bar', false) +
        '<span class="shift-pct">' + pct(r.counts.x, base) + '% auto</span>' +
        '</div>';
    }).join('');

    app.innerHTML =
      '<section class="hero"><div class="wrap">' +
      '<p class="eyebrow">The Grain Index</p>' +
      '<h1>Every job is a bundle of tasks. AI re-deals the bundle.</h1>' +
      '<p class="lede"><strong>' + s.tasks + ' real tasks across ' + s.roles + ' roles</strong>, each one called: stays with the person, augmented, automated, or created by AI itself. Built on O*NET, the US Department of Labor\'s task database, plus ' + DATA.sources.adsCount + ' advertised roles at VC and PE-backed companies for the jobs O*NET does not know exist. The classifications are ours, stated plainly, with the close calls flagged.</p>' +
      legend() +
      '</div></section>' +
      '<div class="stat-strip">' +
      '<div class="stat"><span class="n" data-count="' + s.roles + '">0</span><span class="l">roles analysed</span></div>' +
      '<div class="stat"><span class="n" data-count="' + s.tasks + '">0</span><span class="l">real tasks classified</span></div>' +
      '<div class="stat"><span class="n" data-count="' + s.new + '">0</span><span class="l">new tasks identified</span></div>' +
      '<div class="stat"><span class="n" data-count="' + aggPct + '" data-suffix="%">0</span><span class="l">of tasks get augmented, not replaced</span></div>' +
      '</div>' +
      '<section class="block"><div class="wrap">' +
      '<p class="kicker">The shape of the shift</p>' +
      '<h2 class="section-title">Most jobs bend. Few break.</h2>' +
      '<p class="section-lede">Sorted by share of today\'s tasks that are candidates for full automation. Across the People function, the story is transformation, not deletion. The green is what stays human. The brass is where the hours come back.</p>' +
      rows +
      '</div></section>' +
      '<section class="block sweep" id="roles"><div class="wrap">' +
      '<p class="kicker">Pick a role</p>' +
      '<h2 class="section-title">Every role, every task, every call.</h2>' +
      '<p class="section-lede">Open any role for the full task bundle: the O*NET wording, the bucket, the reason, and what to do about it. Twenty roles across the modern People function, from operations and recruiting to systems, analytics and the C-suite.</p>' +
      '<div class="picker-controls">' +
      '<input class="search" type="search" placeholder="Search roles, for example recruiter, HRIS, reward" aria-label="Search roles">' +
      '<div class="chips" role="group" aria-label="Filter by cluster">' +
      '<button class="chip-btn" data-cluster="all" aria-pressed="true">All People roles</button>' +
      '</div></div>' +
      '<div class="role-grid" id="roleGrid"></div>' +
      '<p class="no-results" id="noResults" hidden>No roles match that search. Try a shorter word.</p>' +
      '</div></section>' +
      '<section class="block"><div class="wrap">' +
      '<p class="kicker">The scale lens</p>' +
      '<h2 class="section-title">The same function, four different jobs.</h2>' +
      '<p class="section-lede">A People team at seed stage is a founder at midnight. At Series C it is a Head of People and four specialisms. At PE scale it is a CPO and centres of expertise. The task bundle shifts with every stage, and so does what AI takes first.</p>' +
      '<a class="btn btn-ghost-dark" href="#/scale">See the bundle by funding stage</a>' +
      '</div></section>' +
      methodBlock() +
      ctaBlock();

    var grid = document.getElementById('roleGrid');
    var noRes = document.getElementById('noResults');
    var state = { q: '', cluster: 'all' };

    function card(r) {
      return '<a class="role-card" href="#/role/' + r.slug + '">' +
        '<span class="rc-cluster">' + CLUSTER_NAMES[r.cluster] + (r.src === 'ads' ? ' · market-grounded' : (r.src === 'onet+ads' ? ' · hybrid' : '')) + '</span>' +
        '<h3>' + esc(r.label) + '</h3>' +
        bar(r.counts, null, 'bar', false) +
        '<span class="rc-counts"><b>' + r.counts.u + '</b> unchanged · <b>' + r.counts.a + '</b> augmented · <b>' + r.counts.x + '</b> automated · <b>' + r.counts.n + '</b> new</span>' +
        '</a>';
    }
    function applyFilter() {
      var q = state.q.toLowerCase();
      var order = { people: 0, knowledge: 1 };
      var hits = DATA.roles.slice().sort(function (a, b) {
        return (order[a.cluster] - order[b.cluster]) || a.label.localeCompare(b.label);
      }).filter(function (r) {
        if (state.cluster !== 'all' && r.cluster !== state.cluster) return false;
        if (!q) return true;
        var hay = (r.label + ' ' + r.onetTitle + ' ' + (ALIASES[r.slug] || []).join(' ')).toLowerCase();
        return hay.indexOf(q) !== -1;
      });
      grid.innerHTML = hits.map(card).join('');
      noRes.hidden = hits.length > 0;
    }
    document.querySelector('.search').addEventListener('input', function (e) { state.q = e.target.value; applyFilter(); });
    Array.prototype.forEach.call(document.querySelectorAll('.chip-btn'), function (btn) {
      btn.addEventListener('click', function () {
        state.cluster = btn.dataset.cluster;
        Array.prototype.forEach.call(document.querySelectorAll('.chip-btn'), function (b) {
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        applyFilter();
      });
    });
    applyFilter();
    animateCounts();
  }

  function taskCard(t, bucket) {
    return '<div class="task ' + bucket + '">' +
      '<p class="t-text">' + esc(t.text || t.t) + (t.bl ? '<span class="close-call">close call</span>' : '') + '</p>' +
      '<p class="t-reason">' + esc(t.r) + '</p>' +
      '</div>';
  }

  function renderRole(slug) {
    var r = DATA.roles.find(function (x) { return x.slug === slug; });
    if (!r) { renderHome(); return; }
    var c = r.counts;
    var total = c.u + c.a + c.x + c.n;
    var base = c.u + c.a + c.x;
    var onetSoc = r.soc && r.soc.indexOf('+') === -1 ? r.soc : null;
    var onetUrl = onetSoc ? 'https://www.onetonline.org/link/summary/' + onetSoc : null;

    var sectionNumbers = {};
    var nextSection = 2;
    ['u', 'a', 'x', 'n'].forEach(function (key) {
      var count = key === 'n' ? r.new.length : r.tasks.filter(function (t) { return t.b === key; }).length;
      if (count) sectionNumbers[key] = nextSection++;
    });

    function bucketSection(key, title, lede, tasks) {
      if (!tasks.length) return '';
      return '<section class="block sweep"><div class="wrap">' +
        '<p class="kicker">' + sectionNumbers[key] + '.0 ' + title + '</p>' +
        '<h2 class="section-title">' + tasks.length + ' task' + (tasks.length === 1 ? '' : 's') + '</h2>' +
        '<p class="section-lede">' + lede + '</p>' +
        '<div class="task-list">' + tasks.map(function (t) { return taskCard(t, key); }).join('') + '</div>' +
        '<div class="move"><span class="m-label">What to do about it</span><p>' + esc(r.moves[key]) + '</p></div>' +
        '</div></section>';
    }

    var skillsNum = nextSection++;
    var sk = (DATA.skills || {})[r.slug];
    var skillsHtml = sk ?
      '<section class="block sweep"><div class="wrap">' +
      '<p class="kicker">' + skillsNum + '.0 The skills it pays for now</p>' +
      '<h2 class="section-title">What gets more valuable. What stops paying.</h2>' +
      '<p class="section-lede">Short and opinionated, by design. The bundle shows which tasks move; this is what the movement means for the skills worth building.</p>' +
      '<div class="skills-grid">' +
      '<div class="skills-col up"><h3>Gets more valuable</h3><ul>' + sk.more.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="skills-col down"><h3>Gets commoditised</h3><ul>' + sk.less.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
      '</div></div></section>' : '';
    var closeCalls = r.tasks.filter(function (t) { return t.bl; });
    var closeHtml = closeCalls.length ?
      '<section class="block sweep"><div class="wrap">' +
      '<p class="kicker">' + nextSection + '.0 Close calls</p>' +
      '<h2 class="section-title">Argue with these.</h2>' +
      '<p class="section-lede">These tasks genuinely sit between buckets. We made the call and wrote the reason, but a good operator could land the other way. That is the point of showing them.</p>' +
      '<div class="task-list">' + closeCalls.map(function (t) { return taskCard(t, t.b); }).join('') + '</div>' +
      '</div></section>' : '';

    var shareUrl = location.origin + location.pathname + '#/role/' + r.slug;

    app.innerHTML =
      '<section class="role-hero"><div class="wrap">' +
      '<a class="back-link" href="#/">Back to all roles</a>' +
      '<p class="kicker">' + CLUSTER_NAMES[r.cluster] + '</p>' +
      '<h1>' + esc(r.label) + '</h1>' +
      '<p class="basis">' + esc(r.basis || ('Task list: O*NET occupation "' + esc(r.onetTitle) + '", core tasks ranked by importance. Wording verbatim from the US Department of Labor.')) + '</p>' +
      '<p class="src-badge ' + esc(r.src || 'onet') + '">' + esc(SRC_LABELS[r.src || 'onet'] || SRC_LABELS.onet) + '</p>' +
      (onetUrl ? '<p class="onet-link"><a href="' + onetUrl + '">Source occupation on O*NET OnLine</a></p>' : '') +
      '<div class="big-nums">' +
      '<div class="big-num human"><span class="n" data-count="' + c.u + '">0</span><span class="l">stay with the person</span></div>' +
      '<div class="big-num aug"><span class="n" data-count="' + c.a + '">0</span><span class="l">augmented</span></div>' +
      '<div class="big-num auto"><span class="n" data-count="' + c.x + '">0</span><span class="l">automated</span></div>' +
      '<div class="big-num new"><span class="n" data-count="' + c.n + '">0</span><span class="l">new tasks created</span></div>' +
      '</div>' +
      bar(c, total, 'role-bar') +
      '</div></section>' +
      '<section class="block"><div class="wrap">' +
      '<p class="kicker">1.0 The read</p>' +
      '<blockquote class="take">' + esc(r.take) + '</blockquote>' +
      '<p style="margin-top:1.5rem"><button class="copy-link" id="copyLink">Copy link to this role</button></p>' +
      '</div></section>' +
      bucketSection('u', 'Stays with the person', 'Presence, trust, legal accountability or physical work. AI can brief and draft around these tasks, but a person does them.', r.tasks.filter(function (t) { return t.b === 'u'; })) +
      bucketSection('a', 'Augmented', 'The judgement and the accountability stay human. AI does the first draft, the analysis, the shortlist. The person reviews and decides.', r.tasks.filter(function (t) { return t.b === 'a'; })) +
      bucketSection('x', 'Automated', 'High volume, rule based, digital in and out. AI can run these end to end; people handle the exceptions and check the quality.', r.tasks.filter(function (t) { return t.b === 'x'; })) +
      bucketSection('n', 'New tasks created by AI', 'None of these has an O*NET row yet. They exist because the tool now exists, and its output needs checking, tuning and defending.', r.new.map(function (t) { return { text: t.t, r: t.r }; })) +
      skillsHtml +
      closeHtml +
      methodBlock() +
      ctaBlock();

    document.getElementById('copyLink').addEventListener('click', function () {
      var btn = this;
      var done = function () { btn.textContent = 'Link copied'; setTimeout(function () { btn.textContent = 'Copy link to this role'; }, 1800); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(done, done);
      } else { done(); }
    });
    document.title = r.label + ' - The Grain Index';
    setShare(r.label + ' - The Grain Index', r.label + ': ' + base + ' real tasks, each one called. ' + c.u + ' stay with the person, ' + c.a + ' augmented, ' + c.x + ' automated, plus ' + c.n + ' new tasks created.');
    animateCounts();
    window.scrollTo(0, 0);
  }

  function renderScale() {
    var segs = DATA.segments.map(function (g, i) {
      return '<section class="block' + (i % 2 === 0 ? ' sweep' : '') + '"><div class="wrap">' +
        '<p class="kicker">' + (i + 1) + '.0 ' + esc(g.label) + '</p>' +
        '<h2 class="section-title">' + esc(g.range) + '</h2>' +
        '<p class="seg-who">' + esc(g.who) + '</p>' +
        '<div class="seg-grid">' +
        '<div class="seg-col"><h3>How the bundle shifts</h3><ul>' + g.shifts.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
        '<div class="seg-col seg-ai"><h3>What it means for AI exposure</h3><p>' + esc(g.ai) + '</p></div>' +
        '</div>' +
        '<p class="seg-roles">Roles at this stage: ' + g.roles.map(function (slug) {
          var r = DATA.roles.find(function (x) { return x.slug === slug; });
          return r ? '<a href="#/role/' + r.slug + '">' + esc(r.label) + '</a>' : '';
        }).filter(Boolean).join(' · ') + '</p>' +
        '</div></section>';
    }).join('');

    app.innerHTML =
      '<section class="hero"><div class="wrap">' +
      '<p class="eyebrow">The scale lens</p>' +
      '<h1>The same function, four different jobs.</h1>' +
      '<p class="lede">How the People function\'s task bundle shifts from seed to PE scale, and what each stage means for AI exposure. This is <strong>pattern-level analysis</strong> from the advertised roles in the index and two practitioner references, not survey data. Treat it as a map to argue with, not a measurement.</p>' +
      '</div></section>' +
      segs +
      '<section class="block sweep"><div class="wrap">' +
      '<p class="kicker">The honest caveat</p>' +
      '<h2 class="section-title">Stages are real, edges are not.</h2>' +
      '<p class="section-lede">Headcounts and round names are proxies, not physics. A profitable 60-person company can look like our Series C column; a chaotic 300-person one can look like seed. The consistent finding across the sources is direction, not boundary: specialisation arrives with scale, the transaction layer automates first everywhere, and judgement work concentrates as it does.</p>' +
      '</div></section>' +
      methodBlock() +
      ctaBlock();
    document.title = 'The scale lens - The Grain Index';
    setShare('The scale lens - The Grain Index', 'How the People function\'s task bundle shifts from seed to PE scale, and what each stage means for AI exposure.');
    window.scrollTo(0, 0);
  }

  function renderMethod() {
    var src = DATA.sources;
    var adList = src.ads.map(function (a) { return '<li><a href="' + a.url + '">' + esc(a.name) + '</a></li>'; }).join('');
    var anList = src.analysis.map(function (a) { return '<li><a href="' + a.url + '">' + esc(a.name) + '</a></li>'; }).join('');

    app.innerHTML =
      '<section class="hero"><div class="wrap">' +
      '<p class="eyebrow">The method, in the open</p>' +
      '<h1>An index you can argue with beats one you have to trust.</h1>' +
      '<p class="lede">Every choice in this index is stated here: where the tasks come from, what the source data gets wrong, how the market layer works, and what we still cannot tell you. The transparency is not a disclaimer. It is the product.</p>' +
      '</div></section>' +

      '<section class="block sweep"><div class="wrap">' +
      '<p class="kicker">1.0 The two data layers</p>' +
      '<h2 class="section-title">A government floor, and a market layer on top of it.</h2>' +
      '<p class="method-p">The floor is O*NET Database 30.0, the US Department of Labor\'s occupation taxonomy: real task statements, collected from job incumbents, verbatim in this index. It is the most credible task-level source that exists, and it is free.</p>' +
      '<p class="method-p">The floor is also stale. O*NET\'s structure predates digital-first work, and its People family has never heard of a People Partner, a People Operations Manager, an HRIS analyst or an AI Enablement Lead. So v2 adds a market layer: ' + src.adsCount + ' advertised roles at VC and PE-backed companies, UK and US, collected ' + src.collected + '. Companies advertising these jobs publish exactly what they are hiring for: the title, the tasks, the skills, and signals about org size in the ad itself. Where a role rests on O*NET, a hybrid, or the ads alone, the role page says so.</p>' +
      '</div></section>' +

      '<section class="block"><div class="wrap">' +
      '<p class="kicker">2.0 What O*NET gets right</p>' +
      '<h2 class="section-title">Credit where it is due.</h2>' +
      '<ul class="method-list-plain">' +
      '<li>Task-level granularity. Occupations broken into actual task statements, not vibes about job families. That is exactly the unit AI exposure analysis needs.</li>' +
      '<li>Incumbent-sourced. The task lists come from people doing the jobs, ranked by importance, not from consultants imagining them.</li>' +
      '<li>Comparable and public. One taxonomy, continuously resurveyed, free to use. It is why half the academic AI-and-jobs literature stands on it.</li>' +
      '<li>Honest wording. The task statements are dry, specific and checkable. You can argue with them one by one, which is the whole design of this index.</li>' +
      '</ul>' +
      '</div></section>' +

      '<section class="block sweep"><div class="wrap">' +
      '<p class="kicker">3.0 Where O*NET fails</p>' +
      '<h2 class="section-title">A map of a country that has moved.</h2>' +
      '<p class="method-p">The academic critique is older than the AI wave. Handel\'s review in the Journal for Labour Market Research found O*NET\'s coverage of information technology and new workplace structures sparse, and its tools-and-technology module unable to say how many workers use a technology or how deeply. The taxonomy describes established occupations carefully, but it does not map neatly onto newer People-function roles.</p>' +
      '<p class="method-p">The AI era makes it worse. A 2026 Hugging Face analysis of labour taxonomies puts it plainly: the frameworks were designed before work became digital-first, they assume human-centric performance, and they have no category for hybrid human-AI workflows at all. Existing taxonomies do not represent hybrid human-AI workflows cleanly.</p>' +
      '<p class="method-p">For the People function specifically, the gap is concrete. There is no People Partner. No People Operations. No HRIS or People Systems occupation, though the function now runs on those systems. No People Analytics. No AI Enablement anything. The occupations that exist, HR Specialist and HR Manager, describe the established-company versions of jobs that startups have rewritten. And the whole thing is US-shaped and stage-blind: it cannot tell a seed-stage generalist from a PE-scale specialist, because to O*NET they are the same occupation.</p>' +
      '</div></section>' +

      '<section class="block"><div class="wrap">' +
      '<p class="kicker">4.0 How the job-ad grounding works</p>' +
      '<h2 class="section-title">The market publishes its own taxonomy, one ad at a time.</h2>' +
      '<p class="method-p">For each modern role we searched current advertised positions at venture and PE-backed companies, UK and US, read the actual responsibility lists, and built the task bundle from what employers say they are hiring for. Each task was then classified with the same published rubric as the O*NET-grounded roles: unchanged, augmented, automated, or new. The source ads are listed in full below.</p>' +
      '<p class="method-p">Job ads have a second use the taxonomy cannot match: they carry scale signals. A Series A People Ops Manager ad and a Series C Head of People ad describe visibly different bundles, which is what powers the scale lens.</p>' +
      '<h3 class="method-h3">The ' + src.adsCount + ' advertised roles</h3>' +
      '<ul class="src-list">' + adList + '</ul>' +
      '<h3 class="method-h3">Analysis and critique references</h3>' +
      '<ul class="src-list">' + anList + '</ul>' +
      '</div></section>' +

      '<section class="block sweep"><div class="wrap">' +
      '<p class="kicker">5.0 The limits, stated plainly</p>' +
      '<h2 class="section-title">What this index cannot tell you.</h2>' +
      '<ul class="method-list-plain">' +
      '<li>Job ads are aspirational. They describe the role the company wishes it were hiring, sometimes two or three roles stapled together. We read for the recurring core, but the bias is real.</li>' +
      '<li>Ads skew to companies hiring right now, and to the kind of company that posts on Ashby and Lever: tech-heavy, venture-backed, English-speaking. The People function in a 40-person manufacturer is not in this data.</li>' +
      '<li>The classifications are Deepgrain\'s reasoned judgement, not measurement. The rubric is published and the close calls are flagged precisely so you can disagree with evidence in hand.</li>' +
      '<li>The scale lens is pattern-level analysis, not survey data. Direction is reliable; boundaries are not.</li>' +
      '<li>Everything here is a snapshot from ' + src.collected + '. The task bundles are moving, and so is this index.</li>' +
      '</ul>' +
      '</div></section>' +

      '<section class="block"><div class="wrap">' +
      '<p class="kicker">6.0 The rubric, restated</p>' +
      '<h2 class="section-title">Four buckets, one rule each.</h2>' +
      '<ul class="rubric">' +
      '<li><i class="chip u"></i><span><b>Stays with the person</b><span class="desc">The value is presence, trust, legal accountability or physical work. AI can brief and draft, but a person does the task.</span></span></li>' +
      '<li><i class="chip a"></i><span><b>Augmented</b><span class="desc">The judgement and the accountability stay human. AI does the first draft, the analysis, the shortlist. The person reviews and decides.</span></span></li>' +
      '<li><i class="chip x"></i><span><b>Automated</b><span class="desc">High volume, rule based, digital in and out, no case by case judgement. AI runs it end to end; people handle exceptions.</span></span></li>' +
      '<li><i class="chip n"></i><span><b>New task</b><span class="desc">Exists only because AI output now exists and needs checking, tuning or defending.</span></span></li>' +
      '</ul>' +
      '<p class="method-p">Anthropic\'s economics team treats jobs as bundles of tasks but publishes no rule for sorting them. These calls are ours. Every one carries its written reason on the role page, and the borderline ones are flagged as close calls, because an index you cannot argue with is marketing, not analysis.</p>' +
      '</div></section>' +
      ctaBlock();
    document.title = 'The method - The Grain Index';
    setShare('The method - The Grain Index', 'Every choice in this index, stated in the open: where the tasks come from, how the market layer works, and what we still cannot tell you.');
    window.scrollTo(0, 0);
  }

  function animateCounts() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    Array.prototype.forEach.call(document.querySelectorAll('[data-count]'), function (el) {
      var target = parseInt(el.dataset.count, 10);
      var suffix = el.dataset.suffix || '';
      if (reduce) { el.textContent = target + suffix; return; }
      var start = null, dur = 900;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  function route() {
    var h = location.hash || '#/';
    var m = h.match(/^#\/role\/([a-z0-9-]+)/);
    if (m) { renderRole(m[1]); }
    else if (h.indexOf('#/scale') === 0) { renderScale(); }
    else if (h.indexOf('#/method') === 0) { renderMethod(); }
    else { document.title = 'The Grain Index - AI and the task bundle, role by role'; setShare(DEFAULT_SHARE.title, DEFAULT_SHARE.description); renderHome(); }
  }
  window.addEventListener('hashchange', route);
  route();
})();
