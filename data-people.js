/* The Grain Index v2: modern People function roles, grounded in real advertised jobs.
   Sources: 20 advertised roles at VC and PE-backed companies (UK and US), September 2026.
   See window.GRAIN_INDEX.sources at the bottom of this file. */
(function () {
  var G = window.GRAIN_INDEX;

  var newRoles = [
    {
      "slug": "people-partner",
      "soc": null,
      "cluster": "people",
      "label": "People Partner",
      "onetTitle": "No direct O*NET equivalent (nearest: HR Specialists 13-1071)",
      "basis": "Task list built from advertised People Partner roles: LangChain (Series B), TrustedHousesitters (UK) and Zen Educate (Series B, UK). O*NET has no People Partner occupation; the nearest is HR Specialist, which describes a different job.",
      "src": "ads",
      "counts": { "u": 4, "a": 9, "x": 3, "n": 5 },
      "tasks": [
        { "id": "pp1", "text": "Embed with engineering, product and go-to-market leaders to understand their roadmaps and anticipate organisational friction before it surfaces.", "b": "u", "r": "Reading a leadership team and earning the right to challenge it is trust work. AI can brief the partner; it cannot be the partner.", "bl": false },
        { "id": "pp2", "text": "Use engagement, attrition and pulse data to diagnose problems early and act as an early warning system for burnout and flight risk.", "b": "a", "r": "AI surfaces the signals and drafts the read. Deciding what is noise, what is real and who to tell first is the job.", "bl": false },
        { "id": "pp3", "text": "Coach managers on performance, leadership and team dynamics, including first-time managers in over their heads.", "b": "u", "r": "Coaching that changes behaviour runs on relationship and timing. The ads ask for a truth-teller, not a chatbot.", "bl": false },
        { "id": "pp4", "text": "Push back on senior leaders on org design, talent density and hiring bar decisions, and hold the line when it is uncomfortable.", "b": "u", "r": "LangChain asks for someone who will say the hard thing to industry veterans. That is presence and nerve, not analysis.", "bl": false },
        { "id": "pp5", "text": "Own the people dashboard for your business units and turn attrition trends, comp parity and span data into one-pagers that move decisions.", "b": "a", "r": "AI assembles the dashboard and drafts the narrative. Choosing the three numbers that matter and defending them in the room stays human.", "bl": true },
        { "id": "pp6", "text": "Tailor the rollout of compensation cycles, levelling and performance frameworks to the specific needs of each business unit.", "b": "a", "r": "AI models the options and drafts calibration notes. The tailoring is organisational judgement: what this team, this quarter, can absorb.", "bl": false },
        { "id": "pp7", "text": "Manage sensitive employee relations cases in your units with empathy and legal rigour.", "b": "u", "r": "Live ER cases carry legal exposure and human fallout. Every ad keeps this with the person.", "bl": false },
        { "id": "pp8", "text": "Run headcount forecasting and workforce planning with finance for the next two funding horizons.", "b": "a", "r": "AI builds the scenarios and the model. Agreeing the plan with a CFO who wants half the heads is negotiation.", "bl": false },
        { "id": "pp9", "text": "Draft high-stakes communications: the Slack post, the reorg one-pager, the board slide.", "b": "a", "r": "AI writes the first draft at speed. Knowing which word will detonate in a 200-person Slack is contextual judgement.", "bl": false },
        { "id": "pp10", "text": "Design and implement people solutions that fix specific business problems: velocity, quality, retention.", "b": "a", "r": "AI generates options and benchmarks. Picking the intervention that fits this culture is the expertise.", "bl": false },
        { "id": "pp11", "text": "Automate the routine layer of the people processes you own so your time goes to coaching and strategy.", "b": "a", "r": "The ads now list this as a core duty: the partner is expected to build their own automations, not wait for IT.", "bl": false },
        { "id": "pp12", "text": "Flex into the hiring machine at peak: calibrate profiles, run debriefs and keep the bar consistent across your units.", "b": "a", "r": "AI screens and schedules. Calibrating what good looks like for this team is judgement built over years.", "bl": false },
        { "id": "pp13", "text": "Run pulse surveys and engagement listening cycles across your business units.", "b": "x", "r": "Survey tooling plus AI now runs the instrument, the reminders and the first-pass sentiment read end to end.", "bl": false },
        { "id": "pp14", "text": "Coordinate onboarding for senior hires: 30-60-90 plans, intro schedules, stakeholder mapping.", "b": "x", "r": "Logistics, scheduling and template documents. Machines run this; the welcome lunch stays human but is not the task.", "bl": false },
        { "id": "pp15", "text": "Keep people data, org charts and records current for your business units.", "b": "x", "r": "Systems of record plus sync automation handle updates. The partner reviews exceptions.", "bl": false },
        { "id": "pp16", "text": "Run exit interviews and feed the patterns back to leaders.", "b": "a", "r": "AI transcribes, themes and trends the interviews. The conversation that gets a leaver to be honest is human.", "bl": true }
      ],
      "new": [
        { "t": "Audit AI-drafted people documents (policies, letters, performance summaries) for legal and tone failures before they reach an employee.", "r": "The drafts are now machine-made. Someone accountable has to catch the confident error before it becomes a grievance." },
        { "t": "Design the AI tooling and workflows your own People team runs on, and retire the ones that stop earning their place.", "r": "The ads now expect the partner to be the builder of their own stack, not a consumer of whatever IT bought." },
        { "t": "Defend AI-influenced people decisions (calibration suggestions, attrition flags) to employees who challenge how the machine scored them.", "r": "Once AI touches a rating or a flag, someone must explain and own it. That conversation cannot be delegated to the tool." },
        { "t": "Coach managers on leading teams where agents do real work: new span-of-control maths, new performance questions.", "r": "Managers are being asked to run hybrid human-agent teams and have no playbook. The partner writes it." },
        { "t": "Watch for AI-driven bias and drift in hiring and performance tooling and escalate before it becomes systemic.", "r": "The tools embed judgement at scale. Somebody has to audit the judgement. Regulators are starting to ask who." }
      ],
      "moves": {
        "u": "Protect it. Coaching, challenge and live ER work are why this role exists; do not route them through a tool.",
        "a": "Build the data and drafting layer once, properly: dashboards, scenario models, first drafts. Then spend the hours it returns on the human work.",
        "x": "Automate and stop revisiting. Surveys, scheduling and record-keeping should run without the partner touching them.",
        "n": "Make one person accountable for AI output quality and bias review across the partner team, or the risk lands on no one."
      },
      "take": "This is the job the old HRBP was supposed to be: embedded in the business, fluent in the data, paid to tell leaders the truth. AI strips the admin out from under it. What is left is judgement, coaching and nerve."
    },
    {
      "slug": "head-of-people",
      "soc": null,
      "cluster": "people",
      "label": "Head / Director of People",
      "onetTitle": "No direct O*NET equivalent (nearest: HR Managers 11-3121)",
      "basis": "Task list built from advertised Head of People roles and specifications: Lumos (Series C, scaling 130 to 300+), JRG Partners' founding Head of People spec, and Zen Educate's People Lead structure. O*NET's HR Manager describes a maintenance role in an established function, not a builder role in a scale-up.",
      "src": "ads",
      "counts": { "u": 4, "a": 10, "x": 1, "n": 4 },
      "tasks": [
        { "id": "hp1", "text": "Advise the CEO and executive team on org design, succession and the highest-stakes people decisions in the company.", "b": "u", "r": "This is trusted-counsel work at the top of the house. The credibility that makes the advice land cannot be automated.", "bl": false },
        { "id": "hp2", "text": "Design and deploy the scalable people programmes: career frameworks, performance management, compensation, onboarding, run on documented cadence rather than heroics.", "b": "a", "r": "AI drafts the frameworks and benchmarks against the market in hours. Deciding what fits this company, and sequencing it, is the leadership call.", "bl": false },
        { "id": "hp3", "text": "Build and lead the People team itself: hiring, structure and development as the company scales.", "b": "u", "r": "Building a team is selection, coaching and accountability. All three are human work.", "bl": false },
        { "id": "hp4", "text": "Own the hiring plan tied to the operating model and burn: what gets hired, when, and at what cost to runway.", "b": "a", "r": "AI models the plan against burn scenarios. Committing the company's runway to a headcount shape is an exec decision.", "bl": false },
        { "id": "hp5", "text": "Codify values into a culture operating system: rituals, decision principles, feedback cadences.", "b": "u", "r": "Culture codification is observation plus authorship. A model can transcribe the offsite; it cannot decide what the company stands for.", "bl": true },
        { "id": "hp6", "text": "Establish the compensation philosophy: bands, equity strategy, pay parity position, and defend it under hiring pressure.", "b": "a", "r": "AI pulls the market data and drafts the bands. The philosophy, and holding it when a candidate demands double, is leadership.", "bl": false },
        { "id": "hp7", "text": "Define and instrument the people KPIs: hiring velocity and quality, time-to-productivity, engagement, regrettable attrition.", "b": "a", "r": "AI wires the instrumentation and reporting. Choosing the measures that tell the truth about the organisation is judgement.", "bl": false },
        { "id": "hp8", "text": "Roll out manager development: repeatable training that turns managers into developers of people.", "b": "a", "r": "AI builds the curriculum and practice scenarios. The credibility to teach managers comes from having led.", "bl": false },
        { "id": "hp9", "text": "Partner with finance on workforce planning for the next funding horizon, including scenario and sensitivity modelling.", "b": "a", "r": "The modelling is machine work now. The negotiation about which scenario the company bets on is not.", "bl": false },
        { "id": "hp10", "text": "Select and govern the people technology stack: HRIS, ATS, performance and survey tooling.", "b": "a", "r": "AI compares vendors and drafts the business case. Owning the bet on infrastructure is a leadership decision.", "bl": false },
        { "id": "hp11", "text": "Oversee employment compliance across jurisdictions as the company multiplies states and countries.", "b": "a", "r": "AI tracks regulatory change and flags exposure. Accountability for the risk posture stays with the exec.", "bl": false },
        { "id": "hp12", "text": "Audit current practice across talent acquisition, onboarding, performance and rewards in the first 90 days, and map the org design risks.", "b": "a", "r": "AI accelerates the document and data audit. Seeing what is missing, and what the founders are avoiding, is experienced pattern recognition.", "bl": false },
        { "id": "hp13", "text": "Steward the culture through rapid growth: protect what makes the company distinctive while building what comes next.", "b": "u", "r": "Every ad phrases this as stewardship, a human mandate. It is the least delegable task in the bundle.", "bl": false },
        { "id": "hp14", "text": "Stand up the structured, fair interview process and train hiring managers to run it.", "b": "a", "r": "AI generates scorecards, question banks and training material. Enforcement in live debriefs is leadership.", "bl": false },
        { "id": "hp15", "text": "Report people metrics and programme status to the board and investors.", "b": "x", "r": "AI assembles board-ready packs from live data. The exec reviews and presents; the production work is gone.", "bl": true }
      ],
      "new": [
        { "t": "Set the company policy on AI use in hiring, performance and monitoring, and own the consequences.", "r": "Someone at the top has to decide what the company will and will not automate about people decisions. That policy role did not exist two years ago." },
        { "t": "Design the people function itself to run on agents: decide which roles you hire and which you never hire because the work is now machine-shaped.", "r": "The new Head of People is sizing a function where half the old junior tasks are automated. The org chart is a new design problem." },
        { "t": "Answer to the board and to employees for how AI is used on people data.", "r": "Works councils, boards and regulators increasingly ask. The accountability sits at this level." },
        { "t": "Redesign roles and career paths as AI reshapes them, so the company is not hiring for jobs that will not exist in 18 months.", "r": "This index is the evidence that the task bundles are moving. Re-cutting roles around that is new work." }
      ],
      "moves": {
        "u": "This is the job. Guard the calendar for counsel, culture and team building; everything else should be shrinking.",
        "a": "Systematise it. Frameworks, bands, KPIs and planning should run on cadence with AI doing the heavy production, freeing the exec for decisions.",
        "x": "Board pack production should be one click. If the team is still building decks by hand, the stack is wrong.",
        "n": "Write the AI policy early, before a hiring or monitoring incident writes it for you."
      },
      "take": "A builder role, not a maintenance role: the ads ask for someone who designs the function from scratch and runs it on cadence, not heroics. AI takes the production layer; the counsel, the culture and the calls stay human."
    },
    {
      "slug": "people-ops-manager",
      "soc": null,
      "cluster": "people",
      "label": "People Operations Manager",
      "onetTitle": "No direct O*NET equivalent (nearest: HR Specialists 13-1071)",
      "basis": "Task list built from advertised People Operations Manager roles: Rebar (Series A, backed by construction-tech investors), Pegacorn Group's first-HR-hire guidance, and Workable's People Operations specification. O*NET has no People Operations occupation.",
      "src": "ads",
      "counts": { "u": 1, "a": 6, "x": 7, "n": 4 },
      "tasks": [
        { "id": "pm1", "text": "Own end-to-end onboarding and offboarding: provisioning accounts, equipment, paperwork, intro meetings and the welcome experience.", "b": "x", "r": "Provisioning, scheduling and document generation are rule-based at volume. This is exactly what onboarding automation and agents now run end to end.", "bl": false },
        { "id": "pm2", "text": "Administer benefits, pensions and payroll: enrolment, open enrolment, life events and vendor coordination.", "b": "x", "r": "Benefits administration is form-filling against rules. Modern platforms plus AI handle enrolment and answer the routine questions.", "bl": false },
        { "id": "pm3", "text": "Maintain employee records, org charts and personnel files with care and accuracy.", "b": "x", "r": "Data maintenance in a system of record. Sync and validation automation does this better than a person.", "bl": false },
        { "id": "pm4", "text": "Design and run lightweight performance review processes that give clarity without bureaucracy.", "b": "a", "r": "AI drafts the forms, timelines and reminder flows. Judging how much process this company can absorb is the expertise.", "bl": false },
        { "id": "pm5", "text": "Manage relationships with HR, benefits and payroll vendors, and hold them to service levels.", "b": "a", "r": "AI drafts RFPs and compares proposals. Vendor trust and escalation management are relationship work.", "bl": false },
        { "id": "pm6", "text": "Source and engage candidates through proactive outreach to keep pipelines warm for open roles.", "b": "a", "r": "AI finds and sequences candidates at volume; at Series A the personal note still converts. Machine reach, human close.", "bl": true },
        { "id": "pm7", "text": "Own and configure the ATS: job posts, interview steps, permissions and hiring workflows.", "b": "x", "r": "System configuration against a documented process. Increasingly the ATS configures itself from a prompt.", "bl": false },
        { "id": "pm8", "text": "Build and maintain internal policies and procedures that keep the company compliant with employment law.", "b": "a", "r": "AI drafts policies against current regulation. Deciding what the company actually commits to is a leadership call.", "bl": false },
        { "id": "pm9", "text": "Coordinate with recruiters and hiring managers: scheduling, on-sites, feedback collection and offer letters.", "b": "x", "r": "Scheduling and document generation. Agents already run this loop in most ATS platforms.", "bl": false },
        { "id": "pm10", "text": "Handle first-line employee relations issues and know when to escalate.", "b": "u", "r": "The first conversation with an upset employee sets the tone and the legal trail. Escalation judgement is the experienced part of the role.", "bl": false },
        { "id": "pm11", "text": "Improve internal systems and processes as the company scales: Slack hygiene, expense workflows, access reviews.", "b": "a", "r": "AI audits and proposes the improvements. Deciding what the team will actually adopt is operational judgement.", "bl": false },
        { "id": "pm12", "text": "Bring the employer brand to life with marketing: storytelling, events and creative outreach.", "b": "a", "r": "AI drafts the content. The judgement about what is true and worth saying about the company stays human.", "bl": false },
        { "id": "pm13", "text": "Answer the daily queue of employee questions on leave, pay, policy and process.", "b": "x", "r": "A documented policy base plus an AI assistant answers 80% of this queue today. The person handles the exceptions.", "bl": false },
        { "id": "pm14", "text": "Keep the hiring metrics clean and visible: pipeline health, time-to-hire, source quality.", "b": "x", "r": "ATS reporting plus AI commentary produces this continuously. The manager reviews, not compiles.", "bl": false }
      ],
      "new": [
        { "t": "Design and run the automation layer for people operations: the agents and workflows that replace the manual queue.", "r": "The role shifts from doing the operations to owning the machines that do them. That design work is new." },
        { "t": "Quality-check automated employee communications before they send: tone, accuracy, legal safety.", "r": "Generated answers about pay and leave carry real risk. Someone accountable reviews the edge cases." },
        { "t": "Manage the exceptions the automation cannot: the broken payroll edge case, the visa problem, the employee in crisis.", "r": "Automation creates a new queue of genuinely hard cases. This role becomes the exception handler by design." },
        { "t": "Report to leadership on what the automation is doing: deflection rates, error rates, employee sentiment about machine-run processes.", "r": "Someone has to prove the automated function is working and catch it drifting. That accountability is new." }
      ],
      "moves": {
        "u": "Keep first-line ER human and train the escalation instinct. It is the part of the role that protects the company.",
        "a": "Use AI for the design and drafting layer: policies, processes, content. The role gets faster, not smaller.",
        "x": "Automate the operations core aggressively: onboarding, benefits admin, records, scheduling, the question queue. That is most of the old job, and it should go.",
        "n": "Promote the role into owning the automation itself. The People Ops Manager who builds the machine is the one who survives it."
      },
      "take": "The classic first People hire, and the most exposed role in the function: over half its traditional bundle is exactly what agents now run. The role does not disappear; it inverts. The job becomes owning the automation and handling the exceptions."
    },
    {
      "slug": "people-ops-generalist",
      "soc": null,
      "cluster": "people",
      "label": "People Operations Generalist",
      "onetTitle": "No direct O*NET equivalent (nearest: HR Assistants 43-4161)",
      "basis": "Task list built from advertised People Operations Specialist and Coordinator specifications (Workable's template used by thousands of SMEs, AIHR's function guide) and current startup coordinator postings. O*NET's nearest row, HR Assistant, describes clerical support, not the employee-experience generalist the ads ask for.",
      "src": "ads",
      "counts": { "u": 1, "a": 5, "x": 6, "n": 4 },
      "tasks": [
        { "id": "pg1", "text": "Answer employee questions on leave, compensation, benefits and policy as the first point of contact.", "b": "x", "r": "A policy knowledge base plus an AI assistant resolves the standard queue. The generalist sees only the exceptions now.", "bl": false },
        { "id": "pg2", "text": "Run onboarding logistics: contracts, right-to-work checks, equipment, first-week schedules.", "b": "x", "r": "Document generation, checks and scheduling are rule-based and high volume. Machines run the checklist.", "bl": false },
        { "id": "pg3", "text": "Compile and update employee records and keep the HRIS data clean.", "b": "x", "r": "Data entry and maintenance against a schema. Sync and validation tooling does it continuously.", "bl": false },
        { "id": "pg4", "text": "Prepare payroll inputs: changes, adjustments, absence data, on cycle, every month.", "b": "x", "r": "Structured data preparation against a calendar. Payroll tooling ingests most of it automatically.", "bl": false },
        { "id": "pg5", "text": "Schedule interviews and coordinate candidate logistics.", "b": "x", "r": "Calendar coordination at volume. Scheduling agents handle it end to end.", "bl": false },
        { "id": "pg6", "text": "Support engagement surveys and people data collection, then help prepare the reports.", "b": "a", "r": "AI runs the instrument and drafts the report. The generalist's value is knowing which finding matters for this team.", "bl": false },
        { "id": "pg7", "text": "Spot employee issues early through day-to-day contact and escalate before they become cases.", "b": "u", "r": "Being the person employees actually talk to is presence and trust. It is why the role still exists at all.", "bl": false },
        { "id": "pg8", "text": "Assist in developing and implementing HR policies and keeping them current.", "b": "a", "r": "AI drafts policy against regulation fast. Judging what fits the company's actual practice is human work.", "bl": false },
        { "id": "pg9", "text": "Maintain the internal knowledge base: FAQs, process guides, the employee handbook in practice.", "b": "a", "r": "AI drafts and updates documentation. Verifying it reflects how things really work here requires being in the building.", "bl": false },
        { "id": "pg10", "text": "Organise the rituals and events that carry the culture: onboarding welcomes, team moments, off-sites.", "b": "a", "r": "AI handles logistics and options. Reading what the team needs and making it feel genuine is human.", "bl": true },
        { "id": "pg11", "text": "Support People team projects: process rollouts, system migrations, programme administration.", "b": "a", "r": "AI drafts the plan and tracks the tasks. Coordinating humans through a change is people work.", "bl": false },
        { "id": "pg12", "text": "Prepare personnel reports and documentation for audits and reviews.", "b": "x", "r": "Report generation from structured records. Machines produce; the generalist verifies.", "bl": false }
      ],
      "new": [
        { "t": "Train and tune the AI assistant that answers the employee question queue, and correct its mistakes.", "r": "The queue moved into a machine. Someone who knows the answers has to teach it and watch it." },
        { "t": "Handle the exception queue the automation escalates: the non-standard leave, the payroll anomaly, the awkward case.", "r": "Automation concentrates the hard cases. Exception handling becomes the visible job." },
        { "t": "Verify automated document and record changes against source, catching the sync errors before payroll runs on them.", "r": "When machines maintain the records, a person audits them. Errors in people data are expensive." },
        { "t": "Gather employee feedback on machine-run processes and feed it back to the People team.", "r": "Someone has to notice that the automated onboarding feels cold. The sensors are human." }
      ],
      "moves": {
        "u": "Protect the human contact. The generalist employees actually talk to is an early warning system no dashboard replaces.",
        "a": "Push the knowledge work up: policy, surveys, projects. This is the development path into People Partner work.",
        "x": "Automate the clerical core fully. Records, scheduling, payroll inputs and the question queue should not consume a salary.",
        "n": "Make the exception queue and the AI assistant's training data an owned responsibility, or errors compound silently."
      },
      "take": "Half the old bundle was clerical, and that half is going. What survives is valuable: the human front door of the function, plus the new work of training and correcting the machines that took the clerical half."
    }
  ];

  G.roles.push.apply(G.roles, newRoles);

  var moreRoles = [
    {
      "slug": "talent-acquisition-partner",
      "soc": "13-1071.00",
      "cluster": "people",
      "label": "Talent Acquisition Partner / Recruiter",
      "onetTitle": "Human Resources Specialists (recruitment tasks) plus advertised roles",
      "basis": "Hybrid grounding: the recruitment core of O*NET 13-1071 (Human Resources Specialists) plus four current ads: Neuralk AI (Talent Acquisition Partner), an Index Ventures-backed AI scale-up (Founding Recruiter, London), Abode Money (Founding Recruiter / Head of Talent, Sequoia-backed) and Rogo (GTM Recruiter, London). O*NET covers the tasks; only the ads carry the founder-partnership and bar-holding work.",
      "src": "onet+ads",
      "counts": { "u": 4, "a": 7, "x": 4, "n": 4 },
      "tasks": [
        { "id": "ta1", "text": "Partner directly with founders and hiring managers on hiring strategy, prioritisation and trade-offs.", "b": "u", "r": "All four ads put founder partnership first. Advising on what to hire, in what order, against runway, is counsel work.", "bl": false },
        { "id": "ta2", "text": "Source passive candidates through personalised outreach across LinkedIn, networks and communities.", "b": "a", "r": "AI finds and sequences prospects at volume; the note that gets a top candidate to reply is still written by someone who knows the market.", "bl": true },
        { "id": "ta3", "text": "Screen inbound applications against the role's scorecard.", "b": "x", "r": "Structured screening against criteria is matching at volume. Modern ATS platforms already do this well.", "bl": false },
        { "id": "ta4", "text": "Run structured interviews and assess motivation, judgement and growth potential.", "b": "u", "r": "Reading a person in a live conversation, and knowing when a polished answer is hollow, is the recruiter's craft.", "bl": false },
        { "id": "ta5", "text": "Design interview loops, scorecards, evaluation frameworks and feedback rituals.", "b": "a", "r": "AI drafts the scorecards and question banks in minutes. Calibrating what good looks like for this company is judgement.", "bl": false },
        { "id": "ta6", "text": "Own the hiring metrics: time-to-hire, conversion rates, source quality, offer acceptance.", "b": "a", "r": "The ATS plus AI produces the numbers continuously. Deciding which metric is lying to you is the expertise.", "bl": false },
        { "id": "ta7", "text": "Manage pipeline hygiene: clean ATS data, on-time feedback, processes without bottlenecks.", "b": "x", "r": "Data hygiene and chasing feedback are exactly what automation and agents now enforce.", "bl": false },
        { "id": "ta8", "text": "Coordinate interview logistics across candidates, panels and time zones.", "b": "x", "r": "Calendar orchestration at volume. Scheduling agents run this loop.", "bl": false },
        { "id": "ta9", "text": "Write job posts and candidate messaging that sell the mission honestly.", "b": "a", "r": "AI drafts quickly and well. The judgement is what to promise and what to leave out.", "bl": false },
        { "id": "ta10", "text": "Close candidates: run the offer conversation, negotiate, and get the signature.", "b": "u", "r": "Closing is reading hesitation, counter-offers and life circumstances in real time. The ads pay for people who can do it.", "bl": false },
        { "id": "ta11", "text": "Build long-term talent pipelines ahead of future demand.", "b": "a", "r": "AI maintains the pipeline and the nurture touches. Knowing which relationships to invest in is market knowledge.", "bl": false },
        { "id": "ta12", "text": "Run reference checks and synthesise the signal for the hiring team.", "b": "x", "r": "Structured collection and synthesis against a template. Increasingly automated; the rare red-flag call stays human but is not the task.", "bl": true },
        { "id": "ta13", "text": "Hold the talent bar across the organisation: push back in debriefs when the room wants to lower it.", "b": "u", "r": "Bar-holding against a room that wants to say yes is nerve and credibility. No tool does this.", "bl": false },
        { "id": "ta14", "text": "Keep candidates warm with fast, personal, high-touch communication through the process.", "b": "a", "r": "AI drafts and sequences the communication. The personal signal that keeps a top candidate engaged is deliberate and human.", "bl": false },
        { "id": "ta15", "text": "Build the employer brand in the candidate market: events, content, referral campaigns.", "b": "a", "r": "AI produces the collateral. Choosing what the company should be known for is positioning judgement.", "bl": false }
      ],
      "new": [
        { "t": "Audit AI screening for adverse patterns: which candidates the machine keeps rejecting, and whether it is right.", "r": "Once a model screens, someone accountable has to check its judgement. Regulators in New York and the EU already ask." },
        { "t": "Detect AI-generated applications and interview answers, and design assessments that still measure the person.", "r": "Candidates use the same tools recruiters do. Sorting genuine capability from generated polish is new craft." },
        { "t": "Run agent-assisted sourcing at scale while keeping the outreach human where it counts.", "r": "The split between machine reach and human close has to be designed and defended, not improvised." },
        { "t": "Advise founders on which roles to hire at all, as AI reshapes the roles they thought they needed.", "r": "Recruiters are now asked whether the req itself still makes sense. That upstream judgement is new." }
      ],
      "moves": {
        "u": "Spend the freed hours on the three human thirds: founder counsel, live assessment, closing. That is what the fee was always for.",
        "a": "Build the machine-assisted layer properly: sourcing, drafting, metrics, nurture. Then never do it by hand again.",
        "x": "Let the ATS and agents run screening, scheduling and hygiene. Stop reviewing what the machine does reliably.",
        "n": "Write the AI-screening audit into the process now, before a regulator or a rejected candidate forces it."
      },
      "take": "The ads tell the story: founders want a partner on strategy and bar-holding, not a CV-pusher. AI takes the pipeline machinery. What a company is really buying is the judgement about people, and the nerve to defend it."
    },
    {
      "slug": "people-analytics-lead",
      "soc": null,
      "cluster": "people",
      "label": "People Analytics Lead",
      "onetTitle": "No direct O*NET equivalent (nearest: Data Scientists 15-2051)",
      "basis": "Task list built from advertised People Analytics roles: X / Alphabet (People Analytics and Technology Lead) and the Lead People Analytics blueprint, cross-checked against current postings. O*NET has no People Analytics occupation; the nearest is Data Scientist, which misses the people-domain judgement.",
      "src": "ads",
      "counts": { "u": 1, "a": 9, "x": 2, "n": 4 },
      "tasks": [
        { "id": "pa1", "text": "Define and govern the people metrics framework: headcount, attrition, hiring funnel, mobility, performance, engagement, with standard definitions the whole company uses.", "b": "a", "r": "AI helps draft definitions and flag inconsistencies. Getting finance, People and the exec to agree one version of the truth is political work.", "bl": false },
        { "id": "pa2", "text": "Build and maintain the dashboards and reporting layer leaders actually use.", "b": "x", "r": "Dashboard production is now machine work: AI writes the queries, builds the charts, keeps them fresh.", "bl": false },
        { "id": "pa3", "text": "Write complex SQL across HRIS, ATS, survey and finance data to answer workforce questions.", "b": "x", "r": "AI writes solid SQL from a well-phrased question. The craft has moved to asking the question and checking the answer.", "bl": true },
        { "id": "pa4", "text": "Turn talent signals into decision-ready narratives for executives: the story, not the spreadsheet.", "b": "u", "r": "Data storytelling that moves a sceptical exec is persuasion built on credibility. X's ad makes this the core of the role.", "bl": false },
        { "id": "pa5", "text": "Forecast headcount, attrition and workforce costs for planning cycles.", "b": "a", "r": "AI builds and runs the models. Deciding which assumptions to defend in front of the CFO is judgement.", "bl": false },
        { "id": "pa6", "text": "Audit people data quality and fix the pipelines when the numbers do not reconcile.", "b": "a", "r": "AI finds the anomalies. Tracing them through four systems to the root cause is detective work.", "bl": false },
        { "id": "pa7", "text": "Translate ambiguous business challenges into clear technical requirements and PRDs for engineering.", "b": "a", "r": "AI drafts the documents. The translation from a vague executive worry to a precise question is the expertise.", "bl": false },
        { "id": "pa8", "text": "Govern privacy and ethics on people data: what is measured, who sees it, what is off-limits.", "b": "a", "r": "AI monitors access and flags risks. Setting the ethical line for what the company should know about its people is a values call.", "bl": false },
        { "id": "pa9", "text": "Run engagement and survey analysis, from instrument design to findings.", "b": "a", "r": "AI analyses and themes at scale. Designing a survey people answer honestly requires understanding the audience.", "bl": false },
        { "id": "pa10", "text": "Build self-serve analytics so leaders answer their own routine questions.", "b": "a", "r": "AI powers the self-serve layer. Choosing what to make self-serve and what to keep interpreted is design judgement.", "bl": false },
        { "id": "pa11", "text": "Evaluate people programmes with experiments and pre/post analysis: did the intervention work.", "b": "a", "r": "AI runs the statistics. Deciding what evidence would actually change a programme decision is judgement.", "bl": false },
        { "id": "pa12", "text": "Coach People team members and managers on reading data without abusing it.", "b": "a", "r": "AI personalises the teaching material. Building data literacy in sceptical humans is people work.", "bl": false }
      ],
      "new": [
        { "t": "Validate AI-generated workforce insights before they reach a decision-maker: the numbers are fast now, and sometimes confidently wrong.", "r": "When the machine does the analysis, someone who understands both the data and the organisation has to vouch for it." },
        { "t": "Design what the company measures about AI itself: adoption, workflow change, where automation is failing employees.", "r": "The metrics for an AI-augmented workforce do not exist in any framework yet. Someone has to invent them." },
        { "t": "Defend metric methodology when a number embarrasses a leader: why regrettable attrition is defined this way, why the survey question changed.", "r": "Fast AI numbers get challenged. The person who can defend the method keeps the whole function credible." },
        { "t": "Monitor people-data AI systems for drift and bias, and certify them fit for decisions.", "r": "Models scoring people need the same audit discipline as models screening candidates. This review work is new." }
      ],
      "moves": {
        "u": "Invest everything in the narrative craft. The analyst who can move a room is worth ten who can only build a dashboard.",
        "a": "Systematise definitions, forecasts and programme evaluation. The judgement layer grows as the production layer shrinks.",
        "x": "Stop hand-building dashboards and hand-writing SQL. Point AI at the schema and review its work instead.",
        "n": "Publish the validation standard for AI-generated people numbers, or one confident wrong number will poison executive trust."
      },
      "take": "The data work is automating underneath this role, which makes the role more valuable, not less. When anyone can produce a number in thirty seconds, the person who knows which number is true, and can make a board believe it, owns the room."
    },
    {
      "slug": "people-systems-analyst",
      "soc": null,
      "cluster": "people",
      "label": "HRIS / People Systems Analyst",
      "onetTitle": "No direct O*NET equivalent (nearest: none in the HR family)",
      "basis": "Task list built from advertised People Systems roles: OpenAI (People Systems Workday Analyst) and a UK People Systems Analyst posting (Workday HCM, via IT Job Board), plus the systems content in the X / Alphabet People Analytics and Technology ad. O*NET has no HRIS occupation at all; its HR family does not mention the systems the function now runs on.",
      "src": "ads",
      "counts": { "u": 0, "a": 8, "x": 4, "n": 4 },
      "tasks": [
        { "id": "ps1", "text": "Configure and maintain the core HRIS: modules, business processes, calculated fields, condition rules.", "b": "a", "r": "AI drafts configuration against intent, but one wrong condition rule misfires on 500 pay records. The analyst owns the blast radius.", "bl": false },
        { "id": "ps2", "text": "Manage security roles, access audits and compliance across people systems.", "b": "a", "r": "AI runs the audit and flags exposure. Deciding who should see salary data is a governance call.", "bl": false },
        { "id": "ps3", "text": "Build reports, dashboards and mass data changes for the People team and the business.", "b": "x", "r": "Report building against a known schema is machine work. The analyst reviews output and handles the odd request.", "bl": false },
        { "id": "ps4", "text": "Test and deploy bi-annual vendor releases: regression testing, documentation, stakeholder comms.", "b": "x", "r": "Release testing follows scripts and diffs. AI agents now run the regression pass and draft the release notes.", "bl": true },
        { "id": "ps5", "text": "Manage integrations between HRIS, payroll, ATS, finance and identity systems.", "b": "a", "r": "AI maps and monitors the flows. When payroll and the HRIS disagree at 4pm on pay day, a person owns the incident.", "bl": false },
        { "id": "ps6", "text": "Troubleshoot user queries and system escalations as the primary point of contact.", "b": "x", "r": "Most queries are how-tos with known answers; the AI assistant resolves them. The analyst keeps the genuinely broken cases.", "bl": false },
        { "id": "ps7", "text": "Deliver training, user guides and documentation for People system users.", "b": "a", "r": "AI writes the guides from the actual configuration. Teaching a sceptical manager to trust the system is human.", "bl": false },
        { "id": "ps8", "text": "Run data integrity audits and implement data quality controls.", "b": "x", "r": "Continuous automated validation against rules. Machines find the mismatches; the analyst decides which matter.", "bl": false },
        { "id": "ps9", "text": "Run governance and change control: special projects, M&A additions, new country entities.", "b": "a", "r": "AI drafts the change plans and risk lists. Judging what a new entity breaks in the existing setup is systems wisdom.", "bl": false },
        { "id": "ps10", "text": "Evaluate new HR technology: vendor assessments, security reviews, build-vs-buy calls.", "b": "a", "r": "AI does the feature comparison and drafts the business case. The bet on a vendor's roadmap is a judgement.", "bl": false },
        { "id": "ps11", "text": "Lead new module and system implementations end to end.", "b": "a", "r": "AI accelerates documentation, testing and migration. Coordinating humans through a system change is the hard part.", "bl": false },
        { "id": "ps12", "text": "Find and build automation opportunities inside the systems landscape: workflows, agents, self-service.", "b": "a", "r": "OpenAI's ad lists optimisation as a core duty. The analyst is now the internal builder, with AI as the construction crew.", "bl": false }
      ],
      "new": [
        { "t": "Design the agent layer on top of the HRIS: which employee requests an agent handles, which it escalates, and with what guardrails.", "r": "The systems analyst is becoming the architect of the machine front door. That architecture is new work." },
        { "t": "Audit automated system actions: the approvals, updates and notifications the agents fired this week.", "r": "When systems act on their own, someone accountable reviews the action log. People data errors are unforgiving." },
        { "t": "Keep the company's people-data model coherent as AI tools each invent their own version of an employee.", "r": "Every new AI tool brings its own schema. Somebody has to stop the truth fragmenting across twelve systems." },
        { "t": "Certify new AI features the vendors ship into the HRIS before they touch live employee data.", "r": "Vendors are shipping AI into every module. Somebody has to test what it does before payroll learns the hard way." }
      ],
      "moves": {
        "u": "",
        "a": "Own the judgement layer: configuration intent, security, integrations, vendor bets. This is the whole job now, and it is growing.",
        "x": "Reports, release regression, routine queries: automate and monitor. Keep only the exceptions.",
        "n": "Become the person who designs and certifies the agents. The systems analyst who builds the machine layer runs the function in three years."
      },
      "take": "Nothing here stays untouched, but almost nothing disappears either: the role slides from doing the configuration to owning what the machines configure. The most technical job in the People function, and the one quietly running it."
    },
    {
      "slug": "employee-relations-partner",
      "soc": "13-1075.00",
      "cluster": "people",
      "label": "Employee Relations Partner",
      "onetTitle": "Labor Relations Specialists (nearest: 13-1075) plus advertised roles",
      "basis": "Hybrid grounding: O*NET 13-1075 covers the labour-relations core, and Stripe's advertised Employee Relations Partner role supplies the modern tech-company version: investigations, performance casework and cross-functional counsel. The ads show ER widening beyond unions into all high-stakes employee conflict.",
      "src": "onet+ads",
      "counts": { "u": 4, "a": 7, "x": 1, "n": 4 },
      "tasks": [
        { "id": "er1", "text": "Lead medium to high complexity employee relations investigations: strategy, interviews, evidence, recommendations.", "b": "u", "r": "Investigations turn on credibility, tone and what is not said. Every judgement call carries legal and human weight.", "bl": false },
        { "id": "er2", "text": "Guide escalated performance management cases, supporting People Partners and managers.", "b": "u", "r": "Telling a manager how to exit someone fairly is counsel built on scar tissue. The room is human; so is the risk.", "bl": false },
        { "id": "er3", "text": "Counsel People Partners, specialists and business leaders on ER issues, trends and risks.", "b": "u", "r": "Stripe's ad is explicit: the ER partner influences so that optimal decisions get made. Influence is a human channel.", "bl": false },
        { "id": "er4", "text": "Analyse ER case data for trends, hotspots and systemic issues, and make recommendations.", "b": "a", "r": "AI themes and trends the casework. Deciding what pattern demands a policy change versus a difficult conversation is judgement.", "bl": false },
        { "id": "er5", "text": "Draft investigation reports, outcome letters and case documentation.", "b": "a", "r": "AI drafts from the evidence file fast. Every word in an outcome letter is discoverable; a person owns the final text.", "bl": true },
        { "id": "er6", "text": "Ensure cases are handled fairly, consistently, on time, in line with policy and local law across jurisdictions.", "b": "a", "r": "AI tracks consistency against precedent and flags drift. The fairness call in a specific case is human judgement.", "bl": false },
        { "id": "er7", "text": "Mediate conflicts between employees, managers and teams before they become formal cases.", "b": "u", "r": "Mediation is pure presence work: reading both sides, holding the room, finding the exit everyone can take.", "bl": false },
        { "id": "er8", "text": "Run case management: logging, timelines, confidentiality controls, audit trail.", "b": "x", "r": "Case administration is structured workflow. Case management tooling plus AI runs it.", "bl": false },
        { "id": "er9", "text": "Build and deliver ER training for leaders, managers and People team members.", "b": "a", "r": "AI builds the materials and practice scenarios. The credibility to teach hard conversations comes from having had them.", "bl": false },
        { "id": "er10", "text": "Maintain the ER frameworks, guidelines and playbooks the whole People team works from.", "b": "a", "r": "AI drafts and benchmarks the frameworks. Encoding the company's actual risk appetite is a leadership decision.", "bl": false },
        { "id": "er11", "text": "Work with employment counsel on cases that carry litigation risk.", "b": "a", "r": "AI summarises the file and prepares the brief. Knowing when a case needs a lawyer is the experienced call.", "bl": false },
        { "id": "er12", "text": "Triage whistleblowing and speak-up reports, matching response to severity and sensitivity.", "b": "a", "r": "AI can triage on category, but a mishandled whistleblowing report is an existential risk. A person owns the call.", "bl": true }
      ],
      "new": [
        { "t": "Handle cases created by AI itself: the employee disputing an AI-influenced rating, the grievance about algorithmic management.", "r": "A new category of case is arriving: person versus machine decision. Someone has to invent how to hear it fairly." },
        { "t": "Audit AI-drafted ER documents for the confident error: wrong policy version, invented precedent, off-key tone.", "r": "In ER paperwork, one wrong sentence is a tribunal exhibit. Review of machine drafts is now core diligence." },
        { "t": "Set the boundary on AI use in investigations: what may be transcribed, summarised or analysed by machine, and what stays person to person.", "r": "Investigations involve the most sensitive data in the company. The tooling boundary is a new policy someone must own." },
        { "t": "Monitor AI surveillance and monitoring tools for the ER risk they create, and counsel leadership on proportionality.", "r": "Monitoring tech generates its own grievances. ER now includes pushing back on the tools." }
      ],
      "moves": {
        "u": "Investigations, counsel and mediation are the role. Protect them from any automation push; the downside of a botched case dwarfs any efficiency gain.",
        "a": "Use AI hard on the support layer: drafting, precedent checks, trend analysis. Speed matters; the judgement stays.",
        "x": "Case administration should run itself. If the team is logging cases by hand, the tooling is wrong.",
        "n": "Write the playbook for AI-related cases now. The first algorithmic-management grievance will not wait for you to be ready."
      },
      "take": "The most human role in the function, and the data agrees: nearly nothing here automates. But the job is changing shape: AI drafts the paperwork, and AI itself is starting to appear in the cases. The partner now investigates the machines too."
    },
    {
      "slug": "chief-people-officer",
      "soc": null,
      "cluster": "people",
      "label": "Chief People Officer",
      "onetTitle": "No direct O*NET equivalent (nearest: HR Managers 11-3121)",
      "basis": "Task list built from two advertised CPO roles: SSA Group (acquisitive growth, multi-entity) and a global SaaS scale-up (500+ staff, M&A and IPO exposure), plus the executive layer of the Lumos Head of People ad. O*NET tops out at HR Manager; it has no executive People occupation.",
      "src": "ads",
      "counts": { "u": 5, "a": 8, "x": 0, "n": 5 },
      "tasks": [
        { "id": "cp1", "text": "Set the people strategy tied to enterprise value: talent density, leadership capability, organisational design, sequenced against the growth plan.", "b": "u", "r": "Strategy at this level is conviction defended to a board. Both CPO ads frame the role as building competitive advantage through people.", "bl": false },
        { "id": "cp2", "text": "Advise the CEO and board on executive succession, leadership assessment and the hardest people calls in the company.", "b": "u", "r": "Boardroom counsel on who leads the company is the pinnacle of trust work.", "bl": false },
        { "id": "cp3", "text": "Own executive hiring: the search strategy, the assessment, the close.", "b": "u", "r": "Mis-hiring an executive costs years. Judgement about leaders is the skill the salary buys.", "bl": false },
        { "id": "cp4", "text": "Design the performance and reward architecture: how goals, accountability, pay and equity connect to value creation.", "b": "a", "r": "AI models the architectures and benchmarks them. Choosing the incentive shape of the company is a values and strategy call.", "bl": false },
        { "id": "cp5", "text": "Lead people integration across acquisitions: onboarding, comp harmonisation, benefits alignment, cultural integration.", "b": "a", "r": "AI runs the checklists and comparison analysis. Preserving entrepreneurial energy while standardising the plumbing is leadership judgement.", "bl": false },
        { "id": "cp6", "text": "Own people compliance, governance and risk across a multi-entity, multi-jurisdiction footprint.", "b": "a", "r": "AI monitors the regulatory landscape across jurisdictions. The risk posture, and what the board is told, is owned by the CPO.", "bl": false },
        { "id": "cp7", "text": "Build the leadership development engine: manager capability, high-potential programmes, internal mobility.", "b": "a", "r": "AI personalises curriculum at scale. Setting the leadership bar and living it is human.", "bl": false },
        { "id": "cp8", "text": "Set compensation and equity frameworks: bands, incentive design, ownership mindset, pay parity position.", "b": "a", "r": "AI handles the market data and scenario modelling. The philosophy, and defending it to the board and the workforce, is the CPO's.", "bl": false },
        { "id": "cp9", "text": "Steward the culture: what the company stands for, how it shows up under pressure, what it will not tolerate.", "b": "u", "r": "Culture stewardship is authorship and daily example. It cannot be delegated to a person below this role, let alone a machine.", "bl": false },
        { "id": "cp10", "text": "Report to the board on people metrics, talent risk and organisational health.", "b": "a", "r": "AI assembles the reporting. The narrative, and answering the hard question in the room, is the job.", "bl": false },
        { "id": "cp11", "text": "Model workforce economics with the CFO: cost per hire, revenue per head, the people line in the operating model.", "b": "a", "r": "AI builds the model. The argument about what the numbers should drive is executive judgement.", "bl": false },
        { "id": "cp12", "text": "Design the organisation itself: structures, layers, decision rights, as the company scales and integrates.", "b": "a", "r": "AI tests structural options against constraints. Choosing how power flows through the company is deeply political judgement.", "bl": true },
        { "id": "cp13", "text": "Represent the company's talent story externally: to candidates, investors and acquirers.", "b": "u", "r": "The CPO is a walking proof of the employer brand. Presence and conviction, in person.", "bl": false }
      ],
      "new": [
        { "t": "Set the company's position on AI and jobs: what gets automated, what never does, and how the workforce is told.", "r": "Every workforce is asking. The answer, and the honesty of it, is now a board-level people decision." },
        { "t": "Redesign the workforce plan for a human-agent mix: which roles to hire, which to redesign, which to retire.", "r": "Workforce planning used to mean headcount. Now it means choosing the shape of human and machine labour together." },
        { "t": "Own the people risks of AI: bias in people decisions, monitoring overreach, skills obsolescence, and answer for them to the board.", "r": "These risks sit exactly between technology and people. The CPO is where they land." },
        { "t": "Build the reskilling strategy for roles AI is reshaping, before the reshaping arrives.", "r": "Waiting for the role to break is the expensive path. Anticipatory reskilling is new executive work." },
        { "t": "Negotiate the AI transition with the workforce: works councils, employee sentiment, the social contract of the company.", "r": "Automation is a trust event. How it is negotiated determines whether the best people stay." }
      ],
      "moves": {
        "u": "This is the role. Nothing at this level automates; the whole bundle is judgement, counsel and presence.",
        "a": "Arm the exec office with machine-built models, benchmarks and drafts. The CPO who walks in with better analysis wins the argument.",
        "x": "",
        "n": "Own the AI-and-jobs narrative before the rumour mill owns it. The workforce is already asking."
      },
      "take": "Zero tasks automate at this level, and that is the point: the CPO bundle is strategy, counsel and presence. What changes is the subject matter. The people strategy now includes deciding which jobs exist at all."
    }
  ];

  G.roles.push.apply(G.roles, moreRoles);


  var aiRole = {
      "slug": "ai-enablement-lead",
      "soc": null,
      "cluster": "people",
      "label": "AI Enablement Lead",
      "onetTitle": "No O*NET equivalent (the role postdates the taxonomy)",
      "basis": "Task list built from advertised and specified AI Enablement roles: Betts Recruiting's Head of AI Enablement specification, the CTAIO role definition (2026), and the enablement content in Leapsome's GTM Enablement Manager ad. O*NET has nothing close: this role did not exist when its categories were written.",
      "src": "ads",
      "counts": { "u": 2, "a": 8, "x": 2, "n": 5 },
      "tasks": [
        { "id": "ae1", "text": "Choose and roll out the AI tool stack: what the company buys, who gets it, how it lands.", "b": "a", "r": "AI compares tools and drafts the rollout plan. The bet on which tools fit this company's work is judgement.", "bl": false },
        { "id": "ae2", "text": "Build AI literacy training that gets non-technical teams genuinely productive, not just compliant.", "b": "a", "r": "AI drafts the curriculum and exercises. Knowing what will land with a sceptical finance team is audience craft.", "bl": false },
        { "id": "ae3", "text": "Write the internal playbooks: what good AI use looks like in each function, with real examples.", "b": "a", "r": "AI drafts fast. The examples that persuade come from watching how this company actually works.", "bl": false },
        { "id": "ae4", "text": "Track adoption honestly: which teams rebuilt a workflow around AI, which are copy-pasting into a chatbot once a week.", "b": "x", "r": "Usage telemetry plus AI commentary produces this continuously. Vanity metrics (seats, sessions) are exactly what the role exists to move past.", "bl": false },
        { "id": "ae5", "text": "Coach sceptical teams and leaders into changed workflows, one team at a time.", "b": "u", "r": "The CTAIO definition is blunt: the hard, rare skill is getting sceptical humans to change how they work. That is presence work.", "bl": false },
        { "id": "ae6", "text": "Run workflow redesign workshops: take a real process, rebuild it around AI, measure the before and after.", "b": "a", "r": "AI maps the process and proposes the redesign. Facilitating the room and owning the change is human.", "bl": false },
        { "id": "ae7", "text": "Manage AI vendor relationships, security reviews and procurement alongside IT and legal.", "b": "a", "r": "AI drafts the assessments. The judgement about what data a vendor can touch is risk ownership.", "bl": false },
        { "id": "ae8", "text": "Measure whether any of it worked: usage trends after the novelty, cycle time, output quality, cost per workflow.", "b": "a", "r": "AI runs the measurement. Deciding what counts as proof, and saying so when the answer is nothing, is integrity.", "bl": true },
        { "id": "ae9", "text": "Curate the prompt libraries, use-case catalogues and internal examples people actually reuse.", "b": "x", "r": "Collection, tagging and freshness of reusable material. Machines maintain libraries better than people.", "bl": false },
        { "id": "ae10", "text": "Partner with IT, legal and security on guardrails: what data goes into which tools, what is banned.", "b": "a", "r": "AI monitors policy compliance. Drawing the line between speed and safety is a company-specific call.", "bl": false },
        { "id": "ae11", "text": "Run the champions network: find the natural experimenters, make them visible, spread what works.", "b": "u", "r": "Champions networks run on enthusiasm and social proof, person to person. The lead convenes; no tool convenes for them.", "bl": false },
        { "id": "ae12", "text": "Report adoption and impact to the exec: the honest picture, not the licence count.", "b": "a", "r": "AI assembles the reporting. The courage to tell the exec the £200k licence spend is idle is the job.", "bl": false }
      ],
      "new": [
        { "t": "Kill the tool theatre: find the licences nobody uses and cancel them, publicly.", "r": "Most AI budgets buy seats that sit unused. Someone with the mandate to switch them off is a new kind of role." },
        { "t": "Audit shadow AI use: the tools employees already run on company data without approval.", "r": "The real AI stack is the one employees chose themselves. Finding it and governing it is new work." },
        { "t": "Defend the measurement: when the exec asks what the AI spend returned, produce the workflow evidence, not the vendor slide.", "r": "Proving ROI on AI spend is an unsolved problem. Owning the honest answer is new." },
        { "t": "Design the human-agent handoffs: which steps stay with a person, which go to the agent, and who checks the agent's work.", "r": "Nobody's job description covered this two years ago. It is the core design problem of the next five." },
        { "t": "Catch the failure modes early: the team quietly drowning in bad AI output, the process that got slower.", "r": "Adoption failures are silent. The enablement lead is the early warning system for AI making work worse." }
      ],
      "moves": {
        "u": "Coaching and convening are the engine. Budget the calendar for them; adoption is won in rooms, not in portals.",
        "a": "Use AI to build the training, playbooks and measurement. The enablement lead should be the company's best advertisement for the tools.",
        "x": "Usage tracking and content libraries should run themselves. Spend no human hours there.",
        "n": "Get the mandate to cancel unused licences in writing on day one. It is the fastest credibility the role can earn."
      },
      "take": "The only role in the index that exists because AI does: its job is closing the gap between licences bought and work changed. Success is measured in rebuilt workflows, not seats. Fittingly, almost nothing in it automates."
    };
  G.roles.push(aiRole);

  /* Skills layer: what the post-AI bundle pays more for, and what it stops paying for. Opinionated, by design. */
  G.skills = {
    "accountants-auditors": { "more": ["Judgement on which anomalies matter", "Advisory conversations with management", "Defending an opinion under challenge"], "less": ["Transaction matching and reconciliations", "Standard adjusting entries", "First-draft report writing"] },
    "comp-benefits-analysts": { "more": ["Pay philosophy judgement", "Reading market data in context", "Explaining comp decisions to sceptical employees"], "less": ["Survey data compilation", "Benchmark table production", "Routine pay modelling"] },
    "compensation-benefits-managers": { "more": ["Total rewards strategy", "Negotiating with executives on pay", "Reading workforce sentiment on reward"], "less": ["Market pricing mechanics", "Benefits administration", "Compliance reporting"] },
    "customer-service-reps": { "more": ["De-escalating angry customers", "Handling the cases the bot cannot", "Feeding product insight back"], "less": ["Answering known questions", "Ticket triage and logging", "Following scripts"] },
    "data-scientists": { "more": ["Framing the right question", "Judging model output quality", "Storytelling to decision-makers"], "less": ["Boilerplate modelling code", "Data cleaning by hand", "Standard chart production"] },
    "executive-assistants": { "more": ["Gatekeeping and priority judgement", "Reading the room for the exec", "Handling sensitive matters discreetly"], "less": ["Calendar Tetris", "Travel booking", "Expense admin"] },
    "financial-analysts": { "more": ["Assumption judgement", "Investment narrative", "Challenging the numbers in the room"], "less": ["Model scaffolding", "Data gathering", "Standard valuation mechanics"] },
    "graphic-designers": { "more": ["Taste and art direction", "Client brief interrogation", "Brand judgement"], "less": ["Asset production at volume", "Resize and variant work", "Stock-hunting"] },
    "hr-assistants": { "more": ["Being the human front door", "Exception handling", "Escalation instinct"], "less": ["Record keeping", "Document processing", "Scheduling"] },
    "hr-business-partner": { "more": ["Organisational diagnosis", "Leader coaching", "Commercial fluency"], "less": ["HR metrics compilation", "Case documentation", "Policy drafting"] },
    "hr-managers": { "more": ["Function leadership", "The hard calls on people", "Board-level credibility"], "less": ["Programme administration", "Compliance tracking", "Report production"] },
    "hr-specialists": { "more": ["Candidate judgement", "Employee conversation quality", "Domain depth"], "less": ["Application screening", "Interview scheduling", "Record updates"] },
    "labor-relations-specialists": { "more": ["Negotiation nerve", "Reading union dynamics", "Dispute mediation"], "less": ["Contract clause research", "Grievance logging", "Precedent lookup"] },
    "lawyers": { "more": ["Judgement under ambiguity", "Client counsel and trust", "Courtroom and negotiation presence"], "less": ["Document review at volume", "First-draft contracts", "Legal research"] },
    "management-analysts": { "more": ["Problem framing", "Client politics", "Recommendation that survives contact"], "less": ["Data collection", "Benchmark decks", "Process mapping"] },
    "market-research-analysts": { "more": ["Asking the right question", "Interpreting weak signals", "Advising on the decision, not the data"], "less": ["Survey mechanics", "Data tabulation", "Standard reporting"] },
    "marketing-managers": { "more": ["Brand judgement", "Budget conviction", "Creative direction"], "less": ["Campaign reporting", "A/B test mechanics", "Copy variants"] },
    "operations-managers": { "more": ["Cross-functional judgement", "Crisis leadership", "People management"], "less": ["Status reporting", "Process documentation", "Routine coordination"] },
    "paralegals": { "more": ["Case judgement", "Client handling", "Knowing what the lawyer needs"], "less": ["Citation checking", "Document assembly", "Filing mechanics"] },
    "project-managers": { "more": ["Stakeholder politics", "Unblocking humans", "Judgement on what to sacrifice"], "less": ["Status collection", "Gantt maintenance", "Meeting notes"] },
    "registered-nurses": { "more": ["Clinical judgement", "Patient trust and advocacy", "Team coordination under pressure"], "less": ["Documentation", "Routine monitoring", "Chart admin"] },
    "sales-managers": { "more": ["Coaching sellers", "Deal judgement", "Hiring and firing well"], "less": ["Pipeline reporting", "Forecast mechanics", "CRM hygiene enforcement"] },
    "secondary-teachers": { "more": ["Classroom presence", "Reading individual students", "Motivation and mentorship"], "less": ["Worksheet creation", "Marking mechanics", "Admin returns"] },
    "software-developers": { "more": ["System design judgement", "Reviewing machine code critically", "Understanding the business problem"], "less": ["Boilerplate coding", "Test scaffolding", "Documentation writing"] },
    "technical-writers": { "more": ["Explaining genuinely hard things", "Information architecture", "Editorial judgement"], "less": ["Formatting and consistency passes", "API reference boilerplate", "Screenshot upkeep"] },
    "training-development-managers": { "more": ["Capability strategy", "Vendor and programme judgement", "Proving learning ROI"], "less": ["Course administration", "LMS mechanics", "Training logistics"] },
    "training-development-specialists": { "more": ["Facilitation presence", "Designing for behaviour change", "Reading a cohort"], "less": ["Slide production", "Quiz generation", "Content formatting"] },
    "people-partner": { "more": ["Leader coaching and challenge", "Organisational diagnosis", "AI-output quality judgement"], "less": ["Survey administration", "Dashboard assembly", "Onboarding logistics"] },
    "head-of-people": { "more": ["Function design", "Executive counsel", "Culture authorship"], "less": ["Programme production work", "Board pack assembly", "Market benchmarking mechanics"] },
    "people-ops-manager": { "more": ["Automation design", "Exception judgement", "First-line ER instinct"], "less": ["Onboarding administration", "Benefits and payroll admin", "The routine question queue"] },
    "people-ops-generalist": { "more": ["Being the person employees talk to", "Exception handling", "Training the AI assistant"], "less": ["Records and payroll inputs", "Scheduling", "Standard question answering"] },
    "talent-acquisition-partner": { "more": ["Candidate judgement", "Founder counsel on hiring", "Closing"], "less": ["Application screening", "Interview logistics", "Pipeline hygiene"] },
    "people-analytics-lead": { "more": ["Metric methodology defence", "Executive storytelling", "Knowing which number is true"], "less": ["SQL and dashboard production", "Report compilation", "Survey mechanics"] },
    "people-systems-analyst": { "more": ["Configuration consequence judgement", "Agent architecture on the HRIS", "Vendor and security calls"], "less": ["Report building", "Release regression testing", "How-to query handling"] },
    "employee-relations-partner": { "more": ["Investigation craft", "Mediation presence", "Judgement on AI-related cases"], "less": ["Case administration", "Document first drafts", "Precedent research"] },
    "chief-people-officer": { "more": ["Board counsel", "Workforce design for a human-agent mix", "The AI-and-jobs narrative"], "less": ["Nothing: but the analysis layer arrives pre-built", "Benchmark production", "Reporting assembly"] },
    "ai-enablement-lead": { "more": ["Getting sceptical teams to change", "Workflow redesign facilitation", "Saying the spend is not working"], "less": ["Usage reporting", "Content library upkeep", "Training material production"] }
  };

  /* VC/PE sizing lens: how the same function's bundle shifts with scale. Pattern-level analysis, not survey data. */
  G.segments = [
    {
      "id": "seed",
      "label": "Seed",
      "range": "Roughly 1 to 25 people",
      "who": "No People hire. The founders carry the whole bundle, usually with an office manager or ops generalist holding the admin. Payroll comes from a bureau, hiring comes from the founders' networks, culture is osmosis in one room.",
      "shifts": ["The bundle is whole but tiny: hiring, onboarding, payroll admin, first policies, and every hard conversation lands on a founder.", "Nothing is specialised. The same person who negotiates the offer also orders the laptop.", "Compliance is mostly outsourced or ignored until it hurts."],
      "ai": "The biggest return in the index. One generalist plus agents can now run what took a small team: AI screens, schedules, drafts policies, runs onboarding checklists, answers the policy questions. The risk is not headcount cost, it is founders doing HR at midnight. AI removes the midnight work first.",
      "roles": ["people-ops-generalist", "talent-acquisition-partner"]
    },
    {
      "id": "series-ab",
      "label": "Series A to B",
      "range": "Roughly 25 to 100 people",
      "who": "The first People hire lands, and the guidance is consistent: a People Operations Manager, 4 to 8 years in, an operator not a strategist. A founding recruiter follows when hiring bottlenecks. Two people carry the entire function.",
      "shifts": ["One generalist still carries the whole bundle, but it is cracking: multi-state compliance, performance consistency, comp decisions made ad hoc start costing real money.", "Recruiting professionalises first because hiring velocity is the board metric.", "The strategic work (org design, comp philosophy, succession) stays with founders, surfacing as projects the operator executes."],
      "ai": "The automation case is existential for the team of two. The ops core (onboarding, benefits admin, scheduling, the question queue) goes to agents, and the operator moves up to exceptions, ER and programme work. A two-person People team with a good agent layer now covers what needed five in 2021.",
      "roles": ["people-ops-manager", "talent-acquisition-partner", "people-ops-generalist"]
    },
    {
      "id": "series-cd",
      "label": "Series C to D",
      "range": "Roughly 100 to 400 people",
      "who": "Head of People arrives, and the function specialises: a talent acquisition pod, one or more People Partners, People Ops, and the first People Analytics and Systems capability. Comp, performance and levelling formalise on cadence.",
      "shifts": ["The bundle splits into specialist hands: partnering, hiring, operations, analytics, systems. Nobody carries the whole thing any more.", "Coordination cost appears: the function now needs its own operating rhythm, or the specialists contradict each other.", "The first COE-shaped roles appear (Total Rewards, ER) usually as single senior hires, not teams."],
      "ai": "Exposure concentrates in the analytics and ops layers, where AI takes the production work outright. Judgement work concentrates in the partners and the Head of People. The interesting question at this stage is ratios: how many employees per partner, when the partner's admin is automated. The old 1:100 heuristics are breaking upward.",
      "roles": ["head-of-people", "people-partner", "people-analytics-lead", "people-systems-analyst", "employee-relations-partner"]
    },
    {
      "id": "pe-growth",
      "label": "PE growth and late stage",
      "range": "400+ people, often multi-entity",
      "who": "Chief People Officer on the exec team, centres of expertise (Total Rewards, ER, People Analytics, HRIS), M&A integration as a standing capability, and governance the board actually reads.",
      "shifts": ["The bundle industrialises: shared services for transactions, COEs for depth, partners for the business, and a CPO accountable for people risk like any other enterprise risk.", "M&A adds a repeatable integration bundle: harmonisation, onboarding, culture stitching, entity compliance.", "Reporting lines and decision rights are documented because they have to be; the informal era is over."],
      "ai": "The transaction layer is the first to go: shared services work is exactly the high-volume, rule-based profile AI eats. What survives is governance, integration judgement and the COEs' expertise. The CPO's new problem is owning the people risk of the AI itself: bias in decisions, monitoring overreach, and which roles exist at all.",
      "roles": ["chief-people-officer", "people-systems-analyst", "employee-relations-partner", "people-analytics-lead"]
    }
  ];

  /* Source register: the advertised roles and analysis the v2 grounding rests on. */
  G.sources = {
    "adsCount": 20,
    "analysisCount": 6,
    "collected": "September 2026",
    "ads": [
      { "name": "LangChain, People Partner (Series B, US)", "url": "https://jobs.ashbyhq.com/LangChain/72eefb77-605d-4616-adda-820eb5208ac8" },
      { "name": "TrustedHousesitters, People Partner (UK)", "url": "https://jobs.lever.co/trustedhousesitters.com/149cd6e9-a6b9-4644-8c0e-8794041f49c2" },
      { "name": "Zen Educate, People and Talent Partner (Series B, UK)", "url": "https://jobs.lever.co/zeneducate/e6ba37f3-1779-4984-a247-72ca6ddf2649" },
      { "name": "Rebar, People Operations Manager (Series A, US)", "url": "https://builtin.com/job/people-operations-manager/10088797" },
      { "name": "Workable, People Operations Specialist template", "url": "https://resources.workable.com/people-operations-specialist-job-description" },
      { "name": "Neuralk AI, Talent Acquisition Partner (France)", "url": "https://www.neuralk.ai/job-posting/talent-acquisition-partner" },
      { "name": "Index Ventures-backed AI scale-up, Founding Recruiter (London, via Hawkwood)", "url": "https://talents.studysmarter.co.uk/companies/hawkwood/london/founding-recruiter-series-a-ai-scale-up-38462380/" },
      { "name": "Abode Money, Founding Recruiter / Head of Talent (Sequoia-backed, US)", "url": "https://jobs.ashbyhq.com/Abode%20Money/f190a736-12c3-4eae-a529-d7fc2fd2dd5f" },
      { "name": "Rogo, Talent Acquisition / Recruiter, GTM (London)", "url": "https://jobs.ashbyhq.com/rogo/3416f8b8-2113-4aea-b8f0-eefa0a8d4f52" },
      { "name": "Stripe, Employee Relations Partner", "url": "https://stripe.com/jobs/listing/employee-relations-partner/7175216" },
      { "name": "OpenAI, People Systems Workday Analyst (US)", "url": "https://builtin.com/job/people-systems-workday-analyst/4498589" },
      { "name": "X (Alphabet), People Analytics and Technology Lead (US)", "url": "https://x.company/careers/8580388002/" },
      { "name": "Lumos, Head of People (Series C, US)", "url": "https://jaabz.com/jobs/238313-head-of-people" },
      { "name": "SSA Group, Chief People Officer (acquisitive growth, US)", "url": "https://talentpulse.66ghz.com/remote-jobs/chief-people-officer" },
      { "name": "Global SaaS scale-up, Chief People Officer (500+ staff)", "url": "https://talentpulse.66ghz.com/remote-jobs/chief-people-officer-3" },
      { "name": "Leapsome, GTM Enablement Manager (AI-powered HR tech, EU)", "url": "https://haystackapp.io/jobs/343e260a-8bb0-49d9-a135-81c606cc3134" },
      { "name": "People Systems Analyst, Workday HCM (UK, via IT Job Board)", "url": "https://www.itjobboard.co.uk/job/16699660/people-systems-analyst/" },
      { "name": "Betts Recruiting, Head of AI Enablement (role specification, US)", "url": "https://bettsrecruiting.com/blog/what-is-a-head-of-ai-enablement/" },
      { "name": "CTAIO, AI Enablement Lead (role definition, 2026)", "url": "https://ctaio.dev/en/ai-careers/ai-enablement-lead/" },
      { "name": "JRG Partners, founding Head of People specification", "url": "https://www.jrgpartners.com/write-head-people-job-description/" }
    ],
    "analysis": [
      { "name": "Pegacorn Group, when to hire your first HR person", "url": "https://www.pegacorngroup.com/insights/first-hr-hire" },
      { "name": "Jennifer Azapian, strategic HR planning across startup growth stages", "url": "https://www.jenniferazapian.com/post/the-key-inflection-points-strategic-hr-planning-across-startup-growth-stages" },
      { "name": "Frimelle et al, Old Maps, New Terrain: updating labour taxonomies for the AI era (Hugging Face)", "url": "https://huggingface.co/blog/frimelle/ai-labour-taxonomies" },
      { "name": "Handel, The O*NET content model: strengths and limitations (Journal for Labour Market Research)", "url": "https://link.springer.com/article/10.1007/s12651-016-0199-8" },
      { "name": "AIHR, People Operations: 9 key responsibilities", "url": "https://www.aihr.com/blog/people-operations/" },
      { "name": "DevOpsSchool, Lead People Analytics Analyst role blueprint", "url": "https://www.devopsschool.com/blog/lead-people-analytics-analyst-role-blueprint-responsibilities-skills-kpis-and-career-path/" }
    ]
  };

})();
