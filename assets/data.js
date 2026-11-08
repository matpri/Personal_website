/* =====================================================================
   SITE CONTENT — edit this file to add / change cards.
   ---------------------------------------------------------------------
   Each card is one object { ... } inside the list. To add a new one,
   copy an existing block, paste it, and change the text.

   Fields:
     title        (required) card title
     description  (required) 1–3 sentences
     image        (optional) path to an image, e.g. "images/eplanopt.png"
                  (put the file in the /images folder). If omitted, a
                  coloured cover with the `icon` is shown instead.
     icon         (optional) emoji used on the cover when there is no image
     tags         (optional) list of short labels, e.g. ["Python", "Dash"]
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
      "Developing and expanding the vehicle-to-grid decarbonisation option for advanced energy innovation in South Tyrol. 4 local partners.",
    icon: "🚗",
    period: "2023–2026",
    role: "Coordinator & PI",
    status: "completed",
    tags: ["EFRE", "650 k€"],
    links: [{ label: "Project page", url: "https://www.eurac.edu/en/projects/v2g-boost" }],
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
    description: "Integrated optimisation of mobility and energy systems.",
    icon: "🔄",
    role: "PI",
    status: "completed",
    tags: ["PNRR", "Sector coupling"],
    links: [{ label: "Project page", url: "https://www.eurac.edu/en/projects/iomses" }],
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

/* Blog posts — newest first. Each post is an HTML page in the /blog folder
   (copy blog/_template.html), then add an entry here and in sitemap.xml. */
const BLOG = [
  {
    title: "Climate change risks for Europe's energy system: what the European Climate Risk Assessment found",
    description:
      "Heatwaves, droughts and floods already disrupt energy supply in Europe, and southern Europe faces the highest risk. Findings of the EUCRA energy chapter.",
    image: "images/blog/european-climate-risk-assessment-energy-og.jpg",
    date: "2026-11-08",
    tags: ["Research explained", "Climate risk", "EEA"],
    links: [{ label: "Read article", url: "blog/climate-change-risks-european-energy-system.html" }],
  },
  {
    title: "A machine learning surrogate model makes EnergyPLAN optimisation 64% faster",
    description:
      "A neural network learns to imitate EnergyPLAN and cuts the computing time of a national energy system optimisation by 64%, with the same accuracy.",
    image: "images/blog/machine-learning-surrogate-energyplan.png",
    date: "2026-11-08",
    tags: ["Research explained", "Machine learning", "Energy"],
    links: [{ label: "Read article", url: "blog/machine-learning-surrogate-energyplan.html" }],
  },
  {
    title: "Heat pumps first, Power-to-X later: what a deep learning surrogate model shows",
    description:
      "Heat pumps cut CO2 right away. Hydrogen and synthetic gas only help once renewables cover about half of electricity demand.",
    image: "images/blog/deep-learning-surrogate-energy-system-synergies.png",
    date: "2026-11-08",
    tags: ["Research explained", "AI", "Smart Energy"],
    links: [{ label: "Read article", url: "blog/deep-learning-surrogate-energy-system-synergies.html" }],
  },
  {
    title: "The challenges of energy system models: accuracy, robustness and comprehensibility",
    description:
      "Twelve challenges of bottom-up energy system models, grouped into three pillars, and why they matter for energy policy.",
    image: "images/blog/challenges-bottom-up-energy-system-models.png",
    date: "2026-11-08",
    tags: ["Research explained", "Energy system models", "PLOS Climate"],
    links: [{ label: "Read article", url: "blog/challenges-bottom-up-energy-system-models.html" }],
  },
];
