# The Grain Index

Every job is a bundle of tasks. AI is re-dealing the bundle.

420 real tasks from the O*NET database (US Department of Labor, db 30.0) across 27 roles, each classified: stays with the person, augmented, automated, or newly created by AI. Every call carries its reason, and the close calls are flagged.

Static site, no build step, no backend. `index.html` + `styles.css` + `app.js` + `data.js`.

## Method

- Task lists: O*NET Database 30.0, verbatim; core tasks ranked by incumbent importance ratings, topped up with supplemental tasks where a role lists few core tasks.
- The HR Business Partner role is a composite: HR Specialists core tasks plus five HR Manager tasks that carry the advisory relationship.
- Classifications are Deepgrain's reasoned judgement. Anthropic publishes no decision rule for sorting tasks; the rubric is published on the site and borderline calls are flagged.

Built by [Deepgrain](https://deepgrain.ai).
