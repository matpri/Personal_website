/* =====================================================================
   SITE CONTENT — edit this file to add / change cards.
   ---------------------------------------------------------------------
   Each card is one object { ... } inside the list. To add a new one,
   copy an existing block, paste it, and change the text.

   Fields:
     title        (required) card title
     description  (required) 1–3 sentences
     video        (optional) path to an .mp4 shown as an autoplaying, muted
                  loop on the card; "image" is then used as its poster
     fit          (optional) "contain" to show the whole image/video
                  instead of cropping it to the 16:9 cover
     image        (optional) path to an image, e.g. "images/eplanopt.png"
                  (put the file in the /images folder). If omitted, a
                  coloured cover with the `icon` is shown instead.
     icon         (optional) emoji used on the cover when there is no image
     tags         (optional) list of short labels, e.g. ["Python", "Dash"]
     keywords     (blog only) SEO keywords, shown as tags and used for search
     period       (projects only) e.g. "2025–2028"
     role         (projects only) e.g. "Coordinator"
     status       (projects only) "ongoing" or "completed"
     date         (blog only) e.g. "2026-11-08"
     links        (optional) list of buttons: { label: "...", url: "..." }
                  External links (https://...) open in a new tab, internal
                  links (e.g. "blog/my-post.html") in the same tab.
   ===================================================================== */

const PORTFOLIO = [
  {
    title: "EPLANopt",
    description:
      "Multi-objective optimisation model coupled to the EnergyPLAN software. Identifies the best future energy mixes and transition pathways at regional and national level.",
    icon: "⚡",
    tags: ["Python", "EnergyPLAN", "Optimisation", "DEAP"],
    links: [
      { label: "Code", url: "https://github.com/matpri/EPLANopt" },
      { label: "Paper", url: "https://doi.org/10.1016/j.energy.2018.02.050" },
      { label: "Story of the model", url: "blog/eplanopt-energy-system-model-history.html" },
    ],
  },
  {
    title: "EPLANoptML",
    description:
      "Machine learning surrogate model for EnergyPLAN / EPLANopt that dramatically speeds up country-level energy system optimisation.",
    icon: "🧠",
    tags: ["Python", "Machine learning", "Surrogate model"],
    links: [
      { label: "Code", url: "https://github.com/matpri/EPLANoptML" },
      { label: "Paper", url: "https://doi.org/10.1016/j.energy.2024.132735" },
      { label: "Blog post", url: "blog/machine-learning-surrogate-energyplan.html" },
    ],
  },
  {
    title: "EPLANoptMAC",
    description:
      "Builds Marginal Abatement Cost (MAC) curves through an optimisation process on top of EnergyPLAN. Best presentation award, SES 2020.",
    icon: "📉",
    tags: ["Python", "EnergyPLAN", "MAC curve"],
    links: [
      { label: "Code", url: "https://github.com/matpri/EPLANoptMAC" },
      { label: "Paper", url: "https://doi.org/10.1016/j.segy.2021.100002" },
    ],
  },
  {
    title: "oemof-moea",
    description:
      "Couples the oemof energy modelling framework to a multi-objective evolutionary algorithm for investment optimisation in high temporal and spatial resolution.",
    icon: "🧬",
    tags: ["Python", "oemof", "Evolutionary algorithms"],
    links: [
      { label: "Code", url: "https://github.com/matpri/oemof-moea" },
      { label: "Paper", url: "https://doi.org/10.1016/j.apenergy.2020.114728" },
    ],
  },
  {
    title: "IDEA dashboard — Italy",
    description:
      "Integrated Dashboard for Energy Transition Analysis: an interactive Dash web app to compare and explore energy system modelling scenarios.",
    icon: "📊",
    tags: ["Web app", "Dash", "Docker"],
    links: [
      { label: "Web app", url: "https://idea-dash-italy.onrender.com/" },
      { label: "Code", url: "https://github.com/matpri/idea-dash-italy" },
    ],
  },
  {
    title: "Simple Charts",
    description:
      "Social channel sharing clear, simple charts that make data on energy, climate and society easy to understand.",
    image: "images/simple-charts.png",
    tags: ["Data visualisation", "Social media"],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/company/145326665/" },
      { label: "YouTube", url: "https://www.youtube.com/@Simple.charts.studio" },
      { label: "Instagram", url: "https://www.instagram.com/_simple.charts_/" },
    ],
  },
  {
    title: "AI for Research",
    description:
      "LinkedIn page sharing tools, tips and examples on how artificial intelligence can support scientific research.",
    icon: "🤖",
    tags: ["AI", "Research", "Social media"],
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/company/101353359/" }],
  },
];

const PROJECTS = [
  {
    title: "LIFE PLANtoACT",
    description:
      "Bridging the gap from planning to action: capacity building for regions and municipalities implementing clean energy transition strategies. 9 international partners.",
    icon: "🏛️",
    period: "2025–2028",
    role: "Coordinator & PI",
    status: "ongoing",
    tags: ["LIFE-CET", "1.75 M€"],
    links: [
      {
        label: "Project page",
        url: "https://webgate.ec.europa.eu/life/publicWebsite/project/LIFE24-CET-PLANtoACT-101214506/bridging-the-gap-from-planning-to-action-capacity-building-for-regions-and-municipalities-in-implementing-clean-energy-transition-strategies",
      },
    ],
  },
  {
    title: "uPOWERED",
    description:
      "Urban Powered-Efficient Renewable Energy Districts with surplus. Horizon Europe project.",
    icon: "🏙️",
    period: "2027–2030",
    role: "WP leader",
    status: "ongoing",
    tags: ["Horizon Europe", "4.7 M€"],
    links: [],
  },
  {
    title: "SURE-RES",
    description:
      "Spatially-resolved uncertainty analysis for future renewable-based energy systems. Joint programme South Tyrol – Switzerland.",
    icon: "🗺️",
    period: "2027–2029",
    role: "Lead proposal writer, partner",
    status: "ongoing",
    tags: ["South Tyrol – Switzerland", "680 k€"],
    links: [],
  },
  {
    title: "SMART-HUB",
    description: "Design of smart charging hubs for electric vehicles.",
    icon: "🔌",
    period: "2025–2026",
    role: "Lead proposal writer, partner",
    status: "ongoing",
    tags: ["EFRE", "700 k€"],
    links: [],
  },
  {
    title: "V2G-BOOST",
    description:
      "Bidirectional charging in South Tyrol with Alpitronic, NEOGY and Leitner Energy: a 50 kW V2G charger, energy management software, control strategies and business models.",
    icon: "🚗",
    period: "2023–2026",
    role: "Coordinator & PI",
    status: "completed",
    tags: ["ERDF", "650 k€", "V2G"],
    links: [
      { label: "Project page", url: "https://www.eurac.edu/en/projects/v2g-boost" },
      { label: "Blog post", url: "blog/v2g-boost-bidirectional-charging-south-tyrol.html" },
    ],
  },
  {
    title: "AIchargeMAP",
    description: "AI-supported planning of charging station expansion.",
    icon: "📍",
    role: "PI",
    status: "completed",
    tags: ["FUSION grant", "AI"],
    links: [{ label: "Project page", url: "https://www.eurac.edu/it/projects/aichargemap" }],
  },
  {
    title: "IOMSES",
    description: "Integrated Optimization and Management of Sustainable Mobility and Energy Systems: a multi-node PyPSA model of Italy to study large-scale EV integration, smart charging and vehicle-to-grid.",
    icon: "🔄",
    period: "2024–2025",
    role: "Project manager",
    status: "completed",
    tags: ["PNRR", "E-mobility", "V2G"],
    links: [
      { label: "Project page", url: "https://www.eurac.edu/en/projects/iomses" },
      { label: "Blog post", url: "blog/iomses-electric-vehicles-power-system-italy.html" },
    ],
  },
  {
    title: "European Climate Risk Assessment (EUCRA)",
    description:
      "Co-author of the EEA European climate risk assessment and lead author of Chapter 8 — Energy.",
    icon: "🌡️",
    period: "2024",
    role: "Chapter author",
    status: "completed",
    tags: ["EEA", "Climate risk"],
    links: [
      { label: "Report", url: "https://doi.org/10.2800/204249" },
      { label: "Blog post", url: "blog/climate-change-risks-european-energy-system.html" },
    ],
  },
];

/* Blog posts, newest first. Each post is an HTML page in the /blog folder
   (copy blog/_template.html), then add an entry here and in sitemap.xml.
   "keywords" are shown as tags and used by the search on blog.html. Reuse
   existing keywords where they fit, so the filters group related posts. */
const BLOG = [
  {
    title: "EPLANopt: the story of an open-source energy system optimisation model",
    description:
      "From one EnergyPLAN study in 2014 to machine learning and explainable AI: twelve years of methods, applications and papers, and what comes next with PLANtoACT.",
    image: "images/blog/eplanopt-history-og.jpg",
    date: "2026-11-09",
    keywords: ["EnergyPLAN", "multi-objective optimisation", "energy system modelling", "open-source", "regional energy planning", "machine learning"],
    links: [{ label: "Read article", url: "blog/eplanopt-energy-system-model-history.html" }],
  },
  {
    title: "How much does nuclear power cost? 70 years of European reactors in one chart",
    description:
      "Cost of electricity and construction time of 288 European nuclear reactors. Since 1995, none has come in below the roughly 50 €/MWh of today's solar and wind.",
    image: "images/blog/nuclear-cost-europe-poster.jpg",
    video: "images/blog/nuclear-cost-europe.mp4",
    fit: "contain",
    date: "2026-11-08",
    keywords: ["nuclear power", "levelised cost of electricity", "renewable energy", "energy policy", "Italy"],
    links: [{ label: "Read article", url: "blog/nuclear-power-cost-europe.html" }],
  },
  {
    title: "Bidirectional charging in practice: results of the V2G-BOOST project in South Tyrol",
    description:
      "A 50 kW bidirectional charger, an energy management app, business models for fleets and real savings: three years of vehicle-to-grid work in South Tyrol.",
    image: "images/blog/v2g-boost-project-results.png",
    date: "2026-11-08",
    keywords: ["vehicle-to-grid", "smart charging", "electric vehicles", "energy communities", "life cycle assessment", "South Tyrol"],
    links: [{ label: "Read article", url: "blog/v2g-boost-bidirectional-charging-south-tyrol.html" }],
  },
  {
    title: "Is vehicle-to-grid worth it? Results of the IOMSES project on electric vehicles and Italy's power grid",
    description:
      "Smart charging and V2G cut costs and CO2 for EV owners and for Italy's power system, but V2G also raises land use and mineral depletion.",
    image: "images/blog/iomses-project-diagram.png",
    date: "2026-11-08",
    keywords: ["vehicle-to-grid", "smart charging", "electric vehicles", "life cycle assessment", "PyPSA", "Italy"],
    links: [{ label: "Read article", url: "blog/iomses-electric-vehicles-power-system-italy.html" }],
  },
  {
    title: "Smart charging and vehicle-to-grid (V2G): what electric cars can do for Italy's power system",
    description:
      "Smart charging and V2G cut the cost of a net-zero Italian power system by 1.3% and 3.3% and replace part of the stationary batteries.",
    image: "images/blog/smart-charging-v2g-og.jpg",
    date: "2026-11-08",
    keywords: ["electric vehicles", "smart charging", "vehicle-to-grid", "battery storage", "PyPSA", "energy system modelling", "Italy"],
    links: [{ label: "Read article", url: "blog/smart-charging-vehicle-to-grid-italy.html" }],
  },
  {
    title: "Climate change risks for Europe's energy system: what the European Climate Risk Assessment found",
    description:
      "Heatwaves, droughts and floods already disrupt energy supply in Europe, and southern Europe faces the highest risk. Findings of the EUCRA energy chapter.",
    image: "images/blog/european-climate-risk-assessment-energy-og.jpg",
    date: "2026-11-08",
    keywords: ["climate change", "climate risk", "energy security", "climate adaptation", "hydropower", "EU policy"],
    links: [{ label: "Read article", url: "blog/climate-change-risks-european-energy-system.html" }],
  },
  {
    title: "A machine learning surrogate model makes EnergyPLAN optimisation 64% faster",
    description:
      "A neural network learns to imitate EnergyPLAN and cuts the computing time of a national energy system optimisation by 64%, with the same accuracy.",
    image: "images/blog/machine-learning-surrogate-energyplan.png",
    date: "2026-11-08",
    keywords: ["machine learning", "surrogate model", "EnergyPLAN", "multi-objective optimisation", "energy system modelling", "Italy"],
    links: [{ label: "Read article", url: "blog/machine-learning-surrogate-energyplan.html" }],
  },
  {
    title: "Heat pumps first, Power-to-X later: what a deep learning surrogate model shows",
    description:
      "Heat pumps cut CO2 right away. Hydrogen and synthetic gas only help once renewables cover about half of electricity demand.",
    image: "images/blog/deep-learning-surrogate-energy-system-synergies.png",
    date: "2026-11-08",
    keywords: ["explainable AI", "surrogate model", "machine learning", "heat pumps", "Power-to-X", "green hydrogen", "energy system modelling"],
    links: [{ label: "Read article", url: "blog/deep-learning-surrogate-energy-system-synergies.html" }],
  },
  {
    title: "The challenges of energy system models: accuracy, robustness and comprehensibility",
    description:
      "Twelve challenges of bottom-up energy system models, grouped into three pillars, and why they matter for energy policy.",
    image: "images/blog/challenges-bottom-up-energy-system-models.png",
    date: "2026-11-08",
    keywords: ["energy system modelling", "energy transition", "uncertainty", "sector coupling", "energy policy"],
    links: [{ label: "Read article", url: "blog/challenges-bottom-up-energy-system-models.html" }],
  },
];

/* Media coverage. Order does not matter: the page sorts by date, newest first.
   Fields: date (YYYY-MM-DD), outlet, title (original headline), url,
   lang ("EN", "IT", "DE"...), type ("Quoted", "Interview", "Award", "Feature"...),
   summary (one sentence in English on what the piece is about / your role). */
const MEDIA = [
  {
    date: "2026-11-05",
    outlet: "Euronews",
    title: "Oil giants cash in on the US-Iran conflict. Can an EU-wide tax on oil profits ease the energy crisis?",
    url: "https://www.euronews.com/2026/11/05/oil-giants-cash-in-on-the-us-iran-conflict-can-an-eu-wide-tax-on-oil-profits-ease-the-ener",
    lang: "EN",
    type: "Quoted",
    summary: "On fuel price caps, refining and trading margins, and how an EU levy on oil-company windfall profits could be designed.",
  },
  {
    date: "2026-11-03",
    outlet: "Euronews",
    title: "How can the EU support 50 million Europeans who can't heat their homes?",
    url: "https://www.euronews.com/2026/11/03/how-can-the-eu-support-50-million-europeans-who-cant-heat-their-homes",
    lang: "EN",
    type: "Quoted",
    summary: "On short-term relief for energy-poor households and how renewables, grids, storage and efficiency bring down bills over time.",
  },
  {
    date: "2025-12-05",
    outlet: "Provincia autonoma di Bolzano – Alto Adige",
    title: "Junior Research Award 2025 a Matteo Prina",
    url: "https://news.provincia.bz.it/it/news/junior-research-award-2025-a-matteo-prina",
    lang: "IT",
    type: "Award",
    summary: "Junior Research Award Südtirol/Alto Adige 2025 for research on energy system modelling that informs South Tyrol's Klimaplan 2040.",
  },
  {
    date: "2024-08-03",
    outlet: "salto.bz",
    title: "E-Autos als Speicher für Erneuerbare",
    url: "https://salto.bz/de/article/03082024/e-autos-als-speicher-fur-erneuerbare",
    lang: "DE",
    type: "Quoted",
    summary: "On the V2G-BOOST project, which uses electric-car batteries as storage for renewable power through bidirectional charging.",
  },
  {
    date: "2021-08-22",
    outlet: "Euregio Tirol – Südtirol – Trentino",
    title: "Premio giovani ricercatori Euregio",
    url: "https://www.europaregion.info/it/euregio/archivio/progetti-archivio/2021/istruzione-ricerca/premio-giovani-ricercatori-euregio/",
    lang: "IT",
    type: "Award",
    summary: "Second prize in the Euregio Young Researchers Award 2021 on \"Europe's Green Transition – The Climate Opportunity\", for work on high-renewable scenarios for the Euregio energy transition.",
  },
];
