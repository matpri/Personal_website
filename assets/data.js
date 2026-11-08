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
     links        (optional) list of buttons: { label: "...", url: "..." }
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
    links: [{ label: "Code", url: "https://github.com/matpri/idea-dash-italy" }],
  },
  {
    title: "PLANtoACT Footprint Tracker",
    description:
      "Web application that tracks the travel emissions of the LIFE PLANtoACT project: multi-segment trips, automatic distances and results by event, mode and partner.",
    icon: "🌍",
    tags: ["Web app", "Python", "Emissions"],
    links: [
      { label: "Code", url: "https://github.com/matpri/PLANtoACT_project_footprint_tracker" },
    ],
  },
  {
    title: "micrOgridS",
    description:
      "LP/MILP model to size and optimise hybrid mini-grids (microgrids), built on a fork of oemof.",
    icon: "🔋",
    tags: ["Python", "oemof", "MILP"],
    links: [{ label: "Code", url: "https://github.com/matpri/migrOgridS" }],
  },
  {
    title: "AI for Research",
    description:
      "Script to chat with your own collection of PDF papers with long-term memory, using LangChain and an LLM API.",
    icon: "📚",
    tags: ["Python", "LLM", "LangChain"],
    links: [{ label: "Code", url: "https://github.com/matpri/AI-for-Research" }],
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
    status: "ongoing",
    tags: ["EFRE", "650 k€"],
    links: [{ label: "Project page", url: "https://www.eurac.edu/en/projects/v2g-boost" }],
  },
  {
    title: "AIchargeMAP",
    description: "AI-supported planning of charging station expansion.",
    icon: "📍",
    role: "PI",
    status: "ongoing",
    tags: ["FUSION grant", "AI"],
    links: [{ label: "Project page", url: "https://www.eurac.edu/it/projects/aichargemap" }],
  },
  {
    title: "IOMSES",
    description: "Integrated optimisation of mobility and energy systems.",
    icon: "🔄",
    role: "PI",
    status: "ongoing",
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
    links: [{ label: "Report", url: "https://doi.org/10.2800/204249" }],
  },
];
