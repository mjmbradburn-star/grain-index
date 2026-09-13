(function () {
  var DATA = window.GRAIN_INDEX;
  var app = document.getElementById('app');
  var CAL = 'https://calendar.app.google/GVXsCdVFiLW2yTAw5';

  var BUCKETS = {
    u: { label: 'Stays with the person', short: 'unchanged', numClass: 'human' },
    a: { label: 'Augmented', short: 'augmented', numClass: 'aug' },
    x: { label: 'Automated', short: 'automated', numClass: 'auto' },
    n: { label: 'New tasks', short: 'new', numClass: 'new' }
  };
  var CLUSTER_NAMES = { people: 'People and HR', knowledge: 'Wider knowledge work' };

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function pct(part, whole) { return whole ? Math.round((part / whole) * 100) : 0; }

  function bar(counts, total, cls) {
    var t = total || (counts.u + counts.a + counts.x + counts.n);
    return '<div class="' + (cls || 'bar') + '" role="img" aria-label="' +
      counts.u + ' unchanged, ' + counts.a + ' augmented, ' + counts.x + ' automated, ' + counts.n + ' new">' +
      ['u', 'a', 'x', 'n'].map(function (k) {
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
      '<div class="method-item"><h3>The data</h3><p>Task lists come verbatim from O*NET Database 30.0, the US Department of Labor\'s occupation taxonomy: ' + DATA.stats.tasks + ' real task statements across ' + DATA.stats.roles + ' roles, core tasks ranked by incumbent importance ratings.</p></div>' +
      '<div class="method-item"><h3>The calls</h3><p>Anthropic\'s economics team treats jobs as bundles of tasks but publishes no rule for sorting them. These classifications are Deepgrain\'s reasoned judgement, one per task, each with its reason written next to it.</p></div>' +
      '<div class="method-item"><h3>The close calls</h3><p>Some tasks genuinely sit between buckets. They are flagged as close calls on every role page, because an index you cannot argue with is marketing, not analysis.</p></div>' +
      '<div class="method-item"><h3>The credit</h3><p>The task bundle framing is Anthropic\'s, illustrated in their economic scenarios work. A one-role walkthrough by TQSolutions showed the shape. This index extends the idea to every role a People team actually hires for.</p></div>' +
      '</div></div></section>';
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
        bar(r.counts) +
        '<span class="shift-pct">' + pct(r.counts.x, base) + '% auto</span>' +
        '</div>';
    }).join('');

    app.innerHTML =
      '<section class="hero"><div class="wrap">' +
      '<p class="eyebrow">The Grain Index</p>' +
      '<h1>Every job is a bundle of tasks. AI is re-dealing the bundle.</h1>' +
      '<p class="lede"><strong>' + s.tasks + ' real tasks across ' + s.roles + ' roles</strong>, each one called: stays with the person, augmented, automated, or created by AI itself. Built on O*NET, the US Department of Labor\'s task database. The classifications are ours, stated plainly, with the close calls flagged.</p>' +
      legend() +
      '</div></section>' +
      '<div class="stat-strip">' +
      '<div class="stat"><span class="n" data-count="' + s.roles + '">0</span><span class="l">roles analysed</span></div>' +
      '<div class="stat"><span class="n" data-count="' + s.tasks + '">0</span><span class="l">real O*NET tasks classified</span></div>' +
      '<div class="stat"><span class="n" data-count="' + s.new + '">0</span><span class="l">new tasks identified</span></div>' +
      '<div class="stat"><span class="n" data-count="' + aggPct + '" data-suffix="%">0</span><span class="l">of tasks get augmented, not replaced</span></div>' +
      '</div>' +
      '<section class="block"><div class="wrap">' +
      '<p class="kicker">The shape of the shift</p>' +
      '<h2 class="section-title">Most jobs bend. Few break.</h2>' +
      '<p class="section-lede">Sorted by share of today\'s tasks that are candidates for full automation. Even at the top of the list, the story is transformation, not deletion. The green is what stays human. The brass is where the hours come back.</p>' +
      rows +
      '</div></section>' +
      '<section class="block sweep" id="roles"><div class="wrap">' +
      '<p class="kicker">Pick a role</p>' +
      '<h2 class="section-title">Every role, every task, every call.</h2>' +
      '<p class="section-lede">Open any role for the full task bundle: the O*NET wording, the bucket, the reason, and what to do about it. People and HR roles first, then the wider knowledge work your organisation runs on.</p>' +
      '<div class="picker-controls">' +
      '<input class="search" type="search" placeholder="Search roles, for example recruiter, lawyer, nurse" aria-label="Search roles">' +
      '<div class="chips" role="group" aria-label="Filter by cluster">' +
      '<button class="chip-btn" data-cluster="all" aria-pressed="true">All roles</button>' +
      '<button class="chip-btn" data-cluster="people" aria-pressed="false">People and HR</button>' +
      '<button class="chip-btn" data-cluster="knowledge" aria-pressed="false">Knowledge work</button>' +
      '</div></div>' +
      '<div class="role-grid" id="roleGrid"></div>' +
      '<p class="no-results" id="noResults" hidden>No roles match that search. Try a shorter word.</p>' +
      '</div></section>' +
      methodBlock() +
      ctaBlock();

    var grid = document.getElementById('roleGrid');
    var noRes = document.getElementById('noResults');
    var state = { q: '', cluster: 'all' };

    function card(r) {
      return '<a class="role-card" href="#/role/' + r.slug + '">' +
        '<span class="rc-cluster">' + CLUSTER_NAMES[r.cluster] + '</span>' +
        '<h3>' + esc(r.label) + '</h3>' +
        bar(r.counts) +
        '<span class="rc-counts"><b>' + r.counts.u + '</b> unchanged · <b>' + r.counts.a + '</b> augmented · <b>' + r.counts.x + '</b> automated · <b>' + r.counts.n + '</b> new</span>' +
        '</a>';
    }
    function applyFilter() {
      var q = state.q.toLowerCase();
      var hits = DATA.roles.filter(function (r) {
        if (state.cluster !== 'all' && r.cluster !== state.cluster) return false;
        return !q || r.label.toLowerCase().indexOf(q) !== -1 || r.onetTitle.toLowerCase().indexOf(q) !== -1;
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
    var onetSoc = r.soc.indexOf('+') === -1 ? r.soc : null;
    var onetUrl = onetSoc ? 'https://www.onetonline.org/link/summary/' + onetSoc : null;

    function bucketSection(num, key, title, lede, tasks) {
      if (!tasks.length) return '';
      return '<section class="block sweep"><div class="wrap">' +
        '<p class="kicker">' + num + ' ' + title + '</p>' +
        '<h2 class="section-title">' + tasks.length + ' task' + (tasks.length === 1 ? '' : 's') + '</h2>' +
        '<p class="section-lede">' + lede + '</p>' +
        '<div class="task-list">' + tasks.map(function (t) { return taskCard(t, key); }).join('') + '</div>' +
        '<div class="move"><span class="m-label">What to do about it</span><p>' + esc(r.moves[key]) + '</p></div>' +
        '</div></section>';
    }

    var closeCalls = r.tasks.filter(function (t) { return t.bl; });
    var closeHtml = closeCalls.length ?
      '<section class="block sweep"><div class="wrap">' +
      '<p class="kicker">6.0 Close calls</p>' +
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
      bucketSection('2.0', 'u', 'Stays with the person', 'Presence, trust, legal accountability or physical work. AI can brief and draft around these tasks, but a person does them.', r.tasks.filter(function (t) { return t.b === 'u'; })) +
      bucketSection('3.0', 'a', 'Augmented', 'The judgement and the accountability stay human. AI does the first draft, the analysis, the shortlist. The person reviews and decides.', r.tasks.filter(function (t) { return t.b === 'a'; })) +
      bucketSection('4.0', 'x', 'Automated', 'High volume, rule based, digital in and out. AI can run these end to end; people handle the exceptions and check the quality.', r.tasks.filter(function (t) { return t.b === 'x'; })) +
      bucketSection('5.0', 'n', 'New tasks created by AI', 'None of these has an O*NET row yet. They exist because the tool now exists, and its output needs checking, tuning and defending.', r.new.map(function (t) { return { text: t.t, r: t.r }; })) +
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
    document.title = esc(r.label) + ' - The Grain Index';
    animateCounts();
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
    else { document.title = 'The Grain Index - AI and the task bundle, role by role'; renderHome(); }
  }
  window.addEventListener('hashchange', route);
  route();
})();
