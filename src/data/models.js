const galleryFromPrefix = (prefix) => [
  `/${prefix}_01.png`,
  `/${prefix}_02.png`,
  `/${prefix}_03.png`,
  `/${prefix}_04.png`,
];

export const productSeries = [
  {
    id: "city-series",
    name: "City Series",
    description:
      "Built for practical urban mobility with clean styling, everyday usability, and broad market appeal.",
    models: [
      {
        slug: "e4",
        name: "E4",
        series: "City Series",
        tagline: "Clean urban form with dependable everyday utility.",
        image: "/E4_02.png",
        heroImage: "/E4_02.png",
        gallery: galleryFromPrefix("E4"),
        overview:
          "A low-speed electric scooter designed for practical city movement, dealer demand, and adaptable market positioning.",
        specs: [
  {
    label: "Top Speed",
    value: "Up to 50 km/h",
    desc: "Speed can be customized as per business requirement (20–50 km/h variants available).",
  },
  {
    label: "Range per Charge",
    value: "Up to 120 km",
    desc: "Range depends on battery type, load conditions, and usage patterns.",
  },
  {
    label: "Battery Type",
    value: "Lithium / Acid Lead",
    desc: "Available in both Lithium-Ion and Acid Lead battery options based on requirement and pricing.",
  },
  {
    label: "Charging Time",
    value: "3–4 hours",
    desc: "Charging duration may vary depending on battery type and charger specifications.",
  },
  {
    label: "Motor Power",
    value: "1000W – 1500W",
    desc: "Motor configuration varies depending on model and intended usage.",
  },
],
        features: [
          "Urban-ready low-speed EV format",
          "Clean and approachable design language",
          "Suitable for dealer and distributor portfolios",
          "Built for practical city use",
        ],
      },
      {
        slug: "fh",
        name: "FH",
        series: "City Series",
        tagline: "Balanced design for everyday urban movement.",
        image: "/FH_02.png",
        heroImage: "/FH_02.png",
        gallery: galleryFromPrefix("FH"),
        overview:
          "A dealer-friendly electric scooter model intended for daily urban mobility with adaptable business positioning.",
        specs: [
  {
    label: "Top Speed",
    value: "Up to 50 km/h",
    desc: "Speed can be customized as per business requirement (20–50 km/h variants available).",
  },
  {
    label: "Range per Charge",
    value: "Up to 120 km",
    desc: "Range depends on battery type, load conditions, and usage patterns.",
  },
  {
    label: "Battery Type",
    value: "Lithium / Acid Lead",
    desc: "Available in both Lithium-Ion and Acid Lead battery options based on requirement and pricing.",
  },
  {
    label: "Charging Time",
    value: "3–4 hours",
    desc: "Charging duration may vary depending on battery type and charger specifications.",
  },
  {
    label: "Motor Power",
    value: "1000W – 1500W",
    desc: "Motor configuration varies depending on model and intended usage.",
  },
],
        features: [
          "Business-ready city mobility option",
          "Modern scooter body styling",
          "Low-speed practical usage profile",
          "Flexible configuration potential",
        ],
      },
      {
        slug: "lide",
        name: "Lide",
        series: "City Series",
        tagline: "Simple, efficient, and made for modern city roads.",
        image: "/LIDE_02.png",
        heroImage: "/LIDE_02.png",
        gallery: galleryFromPrefix("LIDE"),
        overview:
          "A streamlined EV scooter option suited for urban commuting demand and scalable B2B distribution.",
        specs: [
  {
    label: "Top Speed",
    value: "Up to 50 km/h",
    desc: "Speed can be customized as per business requirement (20–50 km/h variants available).",
  },
  {
    label: "Range per Charge",
    value: "Up to 120 km",
    desc: "Range depends on battery type, load conditions, and usage patterns.",
  },
  {
    label: "Battery Type",
    value: "Lithium / Acid Lead",
    desc: "Available in both Lithium-Ion and Acid Lead battery options based on requirement and pricing.",
  },
  {
    label: "Charging Time",
    value: "3–4 hours",
    desc: "Charging duration may vary depending on battery type and charger specifications.",
  },
  {
    label: "Motor Power",
    value: "1000W – 1500W",
    desc: "Motor configuration varies depending on model and intended usage.",
  },
],
        features: [
          "Compact urban positioning",
          "Everyday ride practicality",
          "Dealer-friendly product format",
          "Designed for broad city market appeal",
        ],
      },
    ],
  },
  {
    id: "classic-series",
    name: "Classic Series",
    description:
      "Styling-led models with familiar form factors, distinctive front profiles, and strong visual appeal.",
    models: [
      {
        slug: "double-light",
        name: "Double Light",
        series: "Classic Series",
        tagline: "Distinctive front styling with classic road presence.",
        image: "/DL_02.png",
        heroImage: "/DL_02.png",
        gallery: galleryFromPrefix("DL"),
        overview:
          "A visually recognizable electric scooter designed to stand out through familiar styling and practical urban usability.",
        specs: [
  {
    label: "Top Speed",
    value: "Up to 50 km/h",
    desc: "Speed can be customized as per business requirement (20–50 km/h variants available).",
  },
  {
    label: "Range per Charge",
    value: "Up to 120 km",
    desc: "Range depends on battery type, load conditions, and usage patterns.",
  },
  {
    label: "Battery Type",
    value: "Lithium / Acid Lead",
    desc: "Available in both Lithium-Ion and Acid Lead battery options based on requirement and pricing.",
  },
  {
    label: "Charging Time",
    value: "3–4 hours",
    desc: "Charging duration may vary depending on battery type and charger specifications.",
  },
  {
    label: "Motor Power",
    value: "1000W – 1500W",
    desc: "Motor configuration varies depending on model and intended usage.",
  },
],
        features: [
          "Distinctive double-light design identity",
          "Dealer showroom-friendly styling",
          "Low-speed urban practicality",
          "Built for market visibility",
        ],
      },
      {
        slug: "single-light",
        name: "Single Light",
        series: "Classic Series",
        tagline: "Minimal front profile with timeless appeal.",
        image: "/SL_02.png",
        heroImage: "/SL_02.png",
        gallery: galleryFromPrefix("SL"),
        overview:
          "A simple and familiar electric scooter silhouette built for practicality, clarity, and everyday market demand.",
        specs: [
  {
    label: "Top Speed",
    value: "Up to 50 km/h",
    desc: "Speed can be customized as per business requirement (20–50 km/h variants available).",
  },
  {
    label: "Range per Charge",
    value: "Up to 120 km",
    desc: "Range depends on battery type, load conditions, and usage patterns.",
  },
  {
    label: "Battery Type",
    value: "Lithium / Acid Lead",
    desc: "Available in both Lithium-Ion and Acid Lead battery options based on requirement and pricing.",
  },
  {
    label: "Charging Time",
    value: "3–4 hours",
    desc: "Charging duration may vary depending on battery type and charger specifications.",
  },
  {
    label: "Motor Power",
    value: "1000W – 1500W",
    desc: "Motor configuration varies depending on model and intended usage.",
  },
],
        features: [
          "Clean and recognizable styling",
          "Suitable for broad consumer segments",
          "Dealer-ready product presentation",
          "Flexible market positioning",
        ],
      },
      {
        slug: "round-light",
        name: "Round Light",
        series: "Classic Series",
        tagline: "Retro-inspired identity with practical city utility.",
        image: "/VPSR_02.png",
        heroImage: "/VPSR_02.png",
        gallery: galleryFromPrefix("VPSR"),
        overview:
          "A design-forward scooter model combining a classic visual language with low-speed city usability.",
        specs: [
  {
    label: "Top Speed",
    value: "Up to 50 km/h",
    desc: "Speed can be customized as per business requirement (20–50 km/h variants available).",
  },
  {
    label: "Range per Charge",
    value: "Up to 120 km",
    desc: "Range depends on battery type, load conditions, and usage patterns.",
  },
  {
    label: "Battery Type",
    value: "Lithium / Acid Lead",
    desc: "Available in both Lithium-Ion and Acid Lead battery options based on requirement and pricing.",
  },
  {
    label: "Charging Time",
    value: "3–4 hours",
    desc: "Charging duration may vary depending on battery type and charger specifications.",
  },
  {
    label: "Motor Power",
    value: "1000W – 1500W",
    desc: "Motor configuration varies depending on model and intended usage.",
  },
],
        features: [
          "Classic round-light front identity",
          "High visual distinctiveness",
          "Urban-friendly low-speed usability",
          "Appealing for style-led segments",
        ],
      },
      {
        slug: "vns",
        name: "VNS",
        series: "Classic Series",
        tagline: "Elegant styling designed for practical EV demand.",
        image: "/VNS_02.png",
        heroImage: "/VNS_02.png",
        gallery: galleryFromPrefix("VNS"),
        overview:
          "A style-conscious electric scooter model suited for dealers looking to offer familiar design with modern EV practicality.",
        specs: [
  {
    label: "Top Speed",
    value: "Up to 50 km/h",
    desc: "Speed can be customized as per business requirement (20–50 km/h variants available).",
  },
  {
    label: "Range per Charge",
    value: "Up to 120 km",
    desc: "Range depends on battery type, load conditions, and usage patterns.",
  },
  {
    label: "Battery Type",
    value: "Lithium / Acid Lead",
    desc: "Available in both Lithium-Ion and Acid Lead battery options based on requirement and pricing.",
  },
  {
    label: "Charging Time",
    value: "3–4 hours",
    desc: "Charging duration may vary depending on battery type and charger specifications.",
  },
  {
    label: "Motor Power",
    value: "1000W – 1500W",
    desc: "Motor configuration varies depending on model and intended usage.",
  },
],
        features: [
          "Elegant visual profile",
          "Strong showroom presence",
          "Practical low-speed EV configuration",
          "Dealer and distributor friendly",
        ],
      },
    ],
  },
  {
    id: "utility-series",
    name: "Utility Series",
    description:
      "Purposeful models designed around functional mobility, straightforward practicality, and business use cases.",
    models: [
      {
        slug: "cs2",
        name: "CS2",
        series: "Utility Series",
        tagline: "Practical mobility designed for everyday function.",
        image: "/CSB-FB_02.png",
        heroImage: "/CSB-FB_02.png",
        gallery: galleryFromPrefix("CSB-FB"),
        overview:
          "A functional electric scooter built for practical movement, dealer flexibility, and utility-focused market segments.",
        specs: [
  {
    label: "Top Speed",
    value: "Up to 50 km/h",
    desc: "Speed can be customized as per business requirement (20–50 km/h variants available).",
  },
  {
    label: "Range per Charge",
    value: "Up to 120 km",
    desc: "Range depends on battery type, load conditions, and usage patterns.",
  },
  {
    label: "Battery Type",
    value: "Lithium / Acid Lead",
    desc: "Available in both Lithium-Ion and Acid Lead battery options based on requirement and pricing.",
  },
  {
    label: "Charging Time",
    value: "3–4 hours",
    desc: "Charging duration may vary depending on battery type and charger specifications.",
  },
  {
    label: "Motor Power",
    value: "1000W – 1500W",
    desc: "Motor configuration varies depending on model and intended usage.",
  },
],
        features: [
          "Utility-first positioning",
          "Suitable for everyday practical needs",
          "Low-speed efficient mobility",
          "Adaptable for different business requirements",
        ],
      },
      {
        slug: "square-light",
        name: "Square Light",
        series: "Utility Series",
        tagline: "Functional design with a bold front identity.",
        image: "/VPSS_02.png",
        heroImage: "/VPSS_02.png",
        gallery: galleryFromPrefix("VPSS"),
        overview:
          "A utility-oriented electric scooter with a distinctive design language and practical low-speed EV application.",
        specs: [
  {
    label: "Top Speed",
    value: "Up to 50 km/h",
    desc: "Speed can be customized as per business requirement (20–50 km/h variants available).",
  },
  {
    label: "Range per Charge",
    value: "Up to 120 km",
    desc: "Range depends on battery type, load conditions, and usage patterns.",
  },
  {
    label: "Battery Type",
    value: "Lithium / Acid Lead",
    desc: "Available in both Lithium-Ion and Acid Lead battery options based on requirement and pricing.",
  },
  {
    label: "Charging Time",
    value: "3–4 hours",
    desc: "Charging duration may vary depending on battery type and charger specifications.",
  },
  {
    label: "Motor Power",
    value: "1000W – 1500W",
    desc: "Motor configuration varies depending on model and intended usage.",
  },
],
        features: [
          "Bold front-light visual identity",
          "Practical utility positioning",
          "Dealer-ready low-speed EV product",
          "Supports broad business applications",
        ],
      },
    ],
  },
];

export const allModels = productSeries.flatMap((series) => series.models);