# The Grain Index

Every job is a bundle of tasks. AI is re-dealing the bundle.

299 real tasks across 20 People roles, each classified: stays with the person, augmented, automated, or newly created by AI. Two data layers: O*NET (US Department of Labor, db 30.0) as the floor, plus 20 advertised roles at VC and PE-backed companies (UK and US) for the modern People jobs O*NET does not know exist. Every call carries its reason, and the close calls are flagged.

Static site, no build step, no backend. `index.html` + `styles.css` + `app.js` + `data.js`.

## Method

- Task lists: O*NET Database 30.0, verbatim, where a close occupation exists; core tasks ranked by incumbent importance ratings, topped up with supplemental tasks where a role lists few core tasks.
- Where O*NET has no equivalent (People Partner, People Ops, HRIS, AI Enablement Lead and others), the task bundle is built from advertised roles at VC and PE-backed companies, and the role page says so.
- The scale lens (seed to PE growth) is pattern-level analysis, not survey data.
- Full method, sources and stated limits are on the site's method page.
- The HR Business Partner role is a composite: HR Specialists core tasks plus five HR Manager tasks that carry the advisory relationship.
- Classifications are Deepgrain's reasoned judgement. Anthropic publishes no decision rule for sorting tasks; the rubric is published on the site and borderline calls are flagged.

Built by [Deepgrain](https://deepgrain.ai).
