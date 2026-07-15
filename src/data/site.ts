/**
 * SINGLE SOURCE OF PLACEHOLDER CONTENT.
 *
 * The shape of this file intentionally mirrors what the Website CMS (built into
 * the ERP admin) will return. When the CMS endpoints exist, replace the imports
 * in each page with a fetch to the ERP backend that returns this same shape —
 * the components should not need to change.
 *
 * Everything here is placeholder copy. Nothing is real client data.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface Feature {
  icon: string; // ant-design icon name, resolved in components
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Product {
  name: string;
  category: string;
  form: string; // Tablet / Capsule / Syrup ...
  description: string;
}

export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string; // Full-time / Contract
  summary: string;
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const site = {
  company: {
    name: "Valor Pharmaceuticals",
    shortName: "Valor",
    tagline: "Advancing Health Through Quality Medicine",
    established: "2005",
    email: "info@valorpharma.example",
    phone: "+92 000 0000000",
    address: "Plot 00, Industrial Estate, Multan, Punjab, Pakistan",
    mapQuery: "Industrial Estate Multan Pakistan",
    socials: [
      { label: "LinkedIn", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Careers", href: "/careers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],

  hero: [
    {
      eyebrow: "Trusted since 2005",
      title: "Quality medicine, engineered for life",
      subtitle:
        "A WHO-GMP aligned pharmaceutical manufacturer delivering safe, effective and affordable healthcare products across the region.",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1920&q=80",
      ctaLabel: "Explore our products",
      ctaHref: "/products",
    },
    {
      eyebrow: "Research & Development",
      title: "Science that puts patients first",
      subtitle:
        "From molecule to medicine, our formulation and quality teams uphold the highest standards at every step.",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1920&q=80",
      ctaLabel: "About our company",
      ctaHref: "/about",
    },
    {
      eyebrow: "Nationwide reach",
      title: "A partner your patients can rely on",
      subtitle:
        "An extensive distribution network ensures our products reach pharmacies and hospitals reliably and on time.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
      ctaLabel: "Partner with us",
      ctaHref: "/contact",
    },
  ] as HeroSlide[],

  highlights: [
    {
      icon: "SafetyCertificateOutlined",
      title: "GMP-Certified Manufacturing",
      description:
        "Production facilities operated to Good Manufacturing Practice standards with rigorous in-process quality control.",
    },
    {
      icon: "ExperimentOutlined",
      title: "Research-Driven Formulation",
      description:
        "A dedicated R&D team developing stable, bioavailable and patient-friendly dosage forms.",
    },
    {
      icon: "MedicineBoxOutlined",
      title: "Broad Therapeutic Range",
      description:
        "A growing portfolio spanning antibiotics, cardiovascular, gastro, analgesics and nutraceuticals.",
    },
    {
      icon: "GlobalOutlined",
      title: "Reliable Distribution",
      description:
        "A responsive supply chain and distribution network ensuring consistent availability nationwide.",
    },
  ] as Feature[],

  stats: [
    { value: "20+", label: "Years of experience" },
    { value: "250+", label: "Registered products" },
    { value: "1,500+", label: "Distribution partners" },
    { value: "99.5%", label: "Batch quality pass rate" },
  ] as Stat[],

  vision:
    "To be a leading and respected pharmaceutical company recognised for quality, innovation and its contribution to healthier communities.",
  mission:
    "To improve quality of life by developing, manufacturing and delivering safe, effective and affordable medicines, upheld by uncompromising quality and ethical conduct.",

  values: [
    { icon: "HeartOutlined", title: "Patient First", description: "Every decision is measured against patient safety and wellbeing." },
    { icon: "CheckCircleOutlined", title: "Quality", description: "Uncompromising standards from raw material to finished product." },
    { icon: "BulbOutlined", title: "Innovation", description: "Continuous improvement in formulation, process and service." },
    { icon: "TeamOutlined", title: "Integrity", description: "Ethical, transparent and accountable in all that we do." },
  ] as Feature[],

  chairman: {
    name: "Mr. Placeholder Name",
    role: "Chairman & Chief Executive",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    message:
      "For nearly two decades, our purpose has remained unchanged: to make quality healthcare accessible to every community we serve. What began as a modest endeavour has grown into a trusted name, built on the dedication of our people and an unwavering commitment to quality. As we look ahead, we remain focused on innovation, ethical practice and the responsibility that comes with caring for people's health. Thank you for placing your trust in us.",
  },

  history: [
    { year: "2005", title: "Founded", text: "The company is established with a single production line and a clear commitment to quality." },
    { year: "2010", title: "Facility expansion", text: "A new GMP-compliant manufacturing block is commissioned, expanding capacity across dosage forms." },
    { year: "2015", title: "Portfolio growth", text: "The registered product range surpasses 100 SKUs across multiple therapeutic segments." },
    { year: "2020", title: "Quality accreditation", text: "Systems strengthened to WHO-GMP alignment with an upgraded quality-control laboratory." },
    { year: "2024", title: "Digital transformation", text: "End-to-end ERP adoption modernises manufacturing, supply chain and distribution." },
  ],

  services: [
    {
      icon: "ExperimentOutlined",
      title: "Pharmaceutical Manufacturing",
      description:
        "Manufacturing of tablets, capsules, syrups, suspensions and topical preparations under strict GMP controls.",
    },
    {
      icon: "ExperimentOutlined",
      title: "Formulation & R&D",
      description:
        "Development of new formulations, line extensions and stability studies backed by an experienced R&D team.",
    },
    {
      icon: "SafetyCertificateOutlined",
      title: "Quality Assurance & Control",
      description:
        "Comprehensive QA/QC covering raw materials, in-process checks and finished-product release testing.",
    },
    {
      icon: "InboxOutlined",
      title: "Contract Manufacturing",
      description:
        "Reliable toll and contract manufacturing services for partners, with full documentation and traceability.",
    },
    {
      icon: "GlobalOutlined",
      title: "Distribution & Logistics",
      description:
        "Temperature-aware warehousing and a nationwide distribution network ensuring product integrity.",
    },
    {
      icon: "SolutionOutlined",
      title: "Regulatory Support",
      description:
        "Product registration, dossier preparation and pharmacovigilance support in line with regulatory requirements.",
    },
  ] as Feature[],

  productCategories: [
    "All",
    "Antibiotics",
    "Cardiovascular",
    "Gastroenterology",
    "Analgesics",
    "Nutraceuticals",
  ],

  products: [
    { name: "Amoxicillin 500mg", category: "Antibiotics", form: "Capsule", description: "Broad-spectrum antibiotic for common bacterial infections." },
    { name: "Azithromycin 250mg", category: "Antibiotics", form: "Tablet", description: "Macrolide antibiotic with convenient short-course dosing." },
    { name: "Cefixime 400mg", category: "Antibiotics", form: "Tablet", description: "Third-generation cephalosporin for respiratory and urinary infections." },
    { name: "Amlodipine 5mg", category: "Cardiovascular", form: "Tablet", description: "Calcium channel blocker for hypertension and angina." },
    { name: "Atorvastatin 20mg", category: "Cardiovascular", form: "Tablet", description: "Lipid-lowering therapy to manage cholesterol levels." },
    { name: "Bisoprolol 5mg", category: "Cardiovascular", form: "Tablet", description: "Selective beta-blocker for hypertension and heart failure." },
    { name: "Omeprazole 20mg", category: "Gastroenterology", form: "Capsule", description: "Proton-pump inhibitor for acid-related disorders." },
    { name: "Domperidone 10mg", category: "Gastroenterology", form: "Tablet", description: "Prokinetic agent for nausea and dyspepsia." },
    { name: "Paracetamol 500mg", category: "Analgesics", form: "Tablet", description: "Trusted analgesic and antipyretic for everyday relief." },
    { name: "Ibuprofen 400mg", category: "Analgesics", form: "Tablet", description: "NSAID for pain and inflammation management." },
    { name: "Multivitamin Complex", category: "Nutraceuticals", form: "Softgel", description: "Daily micronutrient support for general wellbeing." },
    { name: "Vitamin D3 Syrup", category: "Nutraceuticals", form: "Syrup", description: "Paediatric-friendly vitamin D supplementation." },
  ] as Product[],

  jobs: [
    { title: "Production Pharmacist", department: "Manufacturing", location: "Multan", type: "Full-time", summary: "Oversee production batches and ensure GMP compliance across shifts." },
    { title: "QC Analyst", department: "Quality Control", location: "Multan", type: "Full-time", summary: "Perform analytical testing of raw materials and finished products." },
    { title: "Regulatory Affairs Officer", department: "Regulatory", location: "Head Office", type: "Full-time", summary: "Manage product registrations and regulatory documentation." },
    { title: "Area Sales Manager", department: "Sales & Marketing", location: "Lahore", type: "Full-time", summary: "Drive regional sales growth and manage distributor relationships." },
    { title: "R&D Formulation Scientist", department: "Research & Development", location: "Multan", type: "Full-time", summary: "Develop and optimise new pharmaceutical formulations." },
  ] as JobOpening[],

  leadership: [
    { name: "Placeholder Name", role: "Chairman & CEO", bio: "Provides strategic direction and champions the company's quality-first culture.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
    { name: "Placeholder Name", role: "Director of Operations", bio: "Leads manufacturing, supply chain and continuous improvement initiatives.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
    { name: "Placeholder Name", role: "Head of Quality", bio: "Responsible for quality assurance, control and regulatory compliance.", image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=80" },
  ] as Leader[],
} as const;

export type Site = typeof site;
