/**
 * FALLBACK CONTENT + SHAPE for the company website.
 *
 * The live site fetches this same shape from the ERP backend
 * (GET {NEXT_PUBLIC_API_BASE_URL}/public/site). This file is:
 *   1. the TypeScript contract for that response (see `SiteContent`), and
 *   2. the fallback used when the API is unavailable or a field is empty.
 *
 * Everything here is placeholder copy managed via the Website CMS.
 */

export interface NavItem {
  label: string;
  href: string;
}
export interface SocialLink {
  label: string;
  href: string;
}
export interface Company {
  name: string;
  shortName: string;
  tagline: string;
  established: string;
  email: string;
  phone: string;
  address: string;
  mapQuery: string;
  socials: SocialLink[];
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
  icon: string;
  title: string;
  description: string;
}
export interface ProcessStep {
  step: string;
  title: string;
  text: string;
}
export interface Stat {
  value: string;
  label: string;
}
export interface Product {
  name: string;
  category: string;
  form: string;
  description: string;
  image?: string | null;
}
export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
}
export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
}
export interface HistoryItem {
  year: string;
  title: string;
  text: string;
}
export interface Chairman {
  name: string;
  role: string;
  image: string;
  message: string;
}
export interface Head {
  eyebrow?: string;
  title: string;
  lead?: string;
}
export interface SitePages {
  global: { footerAbout: string };
  home: {
    whyChooseUs: Head;
    chairman: Head;
    featuredProducts: Head & { ctaLabel: string };
    cta: { title: string; lead: string; buttonLabel: string };
  };
  services: { hero: Head; capabilities: Head; process: Head };
  products: { hero: Head };
  careers: { hero: Head; whyJoin: Head; openings: Head; spontaneous: { note: string } };
  about: {
    hero: Head;
    overview: Head & { body: string[]; image: string };
    valuesSection: Head;
    historySection: Head;
    leadershipSection: Head;
    location: Head;
  };
  contact: {
    hero: Head;
    intro: Head;
    hours: string;
    subjects: { value: string; label: string }[];
  };
}

export interface SiteContent {
  company: Company;
  logoUrl: string | null;
  nav: NavItem[];
  hero: HeroSlide[];
  highlights: Feature[];
  values: Feature[];
  services: Feature[];
  perks: Feature[];
  process: ProcessStep[];
  stats: Stat[];
  vision: string;
  mission: string;
  chairman: Chairman;
  history: HistoryItem[];
  productCategories: string[];
  products: Product[];
  jobs: JobOpening[];
  leadership: Leader[];
  pages: SitePages;
}

export const site: SiteContent = {
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
  logoUrl: null,

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Careers", href: "/careers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

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
  ],

  highlights: [
    { icon: "SafetyCertificateOutlined", title: "GMP-Certified Manufacturing", description: "Production facilities operated to Good Manufacturing Practice standards with rigorous in-process quality control." },
    { icon: "ExperimentOutlined", title: "Research-Driven Formulation", description: "A dedicated R&D team developing stable, bioavailable and patient-friendly dosage forms." },
    { icon: "MedicineBoxOutlined", title: "Broad Therapeutic Range", description: "A growing portfolio spanning antibiotics, cardiovascular, gastro, analgesics and nutraceuticals." },
    { icon: "GlobalOutlined", title: "Reliable Distribution", description: "A responsive supply chain and distribution network ensuring consistent availability nationwide." },
  ],

  values: [
    { icon: "HeartOutlined", title: "Patient First", description: "Every decision is measured against patient safety and wellbeing." },
    { icon: "CheckCircleOutlined", title: "Quality", description: "Uncompromising standards from raw material to finished product." },
    { icon: "BulbOutlined", title: "Innovation", description: "Continuous improvement in formulation, process and service." },
    { icon: "TeamOutlined", title: "Integrity", description: "Ethical, transparent and accountable in all that we do." },
  ],

  services: [
    { icon: "ExperimentOutlined", title: "Pharmaceutical Manufacturing", description: "Manufacturing of tablets, capsules, syrups, suspensions and topical preparations under strict GMP controls." },
    { icon: "ExperimentOutlined", title: "Formulation & R&D", description: "Development of new formulations, line extensions and stability studies backed by an experienced R&D team." },
    { icon: "SafetyCertificateOutlined", title: "Quality Assurance & Control", description: "Comprehensive QA/QC covering raw materials, in-process checks and finished-product release testing." },
    { icon: "InboxOutlined", title: "Contract Manufacturing", description: "Reliable toll and contract manufacturing services for partners, with full documentation and traceability." },
    { icon: "GlobalOutlined", title: "Distribution & Logistics", description: "Temperature-aware warehousing and a nationwide distribution network ensuring product integrity." },
    { icon: "SolutionOutlined", title: "Regulatory Support", description: "Product registration, dossier preparation and pharmacovigilance support in line with regulatory requirements." },
  ],

  perks: [
    { icon: "HeartOutlined", title: "Meaningful work", description: "Contribute to products that improve people's health and quality of life." },
    { icon: "BulbOutlined", title: "Growth & learning", description: "Structured training and clear pathways to develop your career." },
    { icon: "TeamOutlined", title: "Supportive culture", description: "A collaborative, respectful environment where people are valued." },
    { icon: "SafetyCertificateOutlined", title: "Stability", description: "A trusted, established company with a long-term outlook." },
  ],

  process: [
    { step: "01", title: "Research & Development", text: "Formulation development, stability studies and analytical method validation." },
    { step: "02", title: "Sourcing & QC", text: "Qualified suppliers and incoming quality control of every raw material." },
    { step: "03", title: "Manufacturing", text: "GMP-controlled production across multiple dosage forms." },
    { step: "04", title: "Release & Distribution", text: "Finished-product testing, batch release and nationwide delivery." },
  ],

  stats: [
    { value: "20+", label: "Years of experience" },
    { value: "250+", label: "Registered products" },
    { value: "1,500+", label: "Distribution partners" },
    { value: "99.5%", label: "Batch quality pass rate" },
  ],

  vision:
    "To be a leading and respected pharmaceutical company recognised for quality, innovation and its contribution to healthier communities.",
  mission:
    "To improve quality of life by developing, manufacturing and delivering safe, effective and affordable medicines, upheld by uncompromising quality and ethical conduct.",

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

  productCategories: ["All", "Antibiotics", "Cardiovascular", "Gastroenterology", "Analgesics", "Nutraceuticals"],

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
  ],

  jobs: [
    { title: "Production Pharmacist", department: "Manufacturing", location: "Multan", type: "Full-time", summary: "Oversee production batches and ensure GMP compliance across shifts." },
    { title: "QC Analyst", department: "Quality Control", location: "Multan", type: "Full-time", summary: "Perform analytical testing of raw materials and finished products." },
    { title: "Regulatory Affairs Officer", department: "Regulatory", location: "Head Office", type: "Full-time", summary: "Manage product registrations and regulatory documentation." },
    { title: "Area Sales Manager", department: "Sales & Marketing", location: "Lahore", type: "Full-time", summary: "Drive regional sales growth and manage distributor relationships." },
    { title: "R&D Formulation Scientist", department: "Research & Development", location: "Multan", type: "Full-time", summary: "Develop and optimise new pharmaceutical formulations." },
  ],

  leadership: [
    { name: "Placeholder Name", role: "Chairman & CEO", bio: "Provides strategic direction and champions the company's quality-first culture.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
    { name: "Placeholder Name", role: "Director of Operations", bio: "Leads manufacturing, supply chain and continuous improvement initiatives.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
    { name: "Placeholder Name", role: "Head of Quality", bio: "Responsible for quality assurance, control and regulatory compliance.", image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=80" },
  ],

  pages: {
    global: {
      footerAbout:
        "Advancing Health Through Quality Medicine. Committed to quality medicine and healthier communities since 2005.",
    },
    home: {
      whyChooseUs: {
        eyebrow: "Why choose us",
        title: "A pharmaceutical partner built on quality",
        lead: "From formulation to distribution, every stage is governed by rigorous standards and a patient-first mindset.",
      },
      chairman: { eyebrow: "Chairman's message", title: "A word from our leadership" },
      featuredProducts: {
        eyebrow: "Our portfolio",
        title: "Featured products",
        lead: "A selection from our growing range across multiple therapeutic segments.",
        ctaLabel: "View all products",
      },
      cta: {
        title: "Interested in partnering with us?",
        lead: "Whether you are a distributor, healthcare provider or prospective partner, we would love to hear from you.",
        buttonLabel: "Contact our team",
      },
    },
    services: {
      hero: {
        eyebrow: "What we do",
        title: "End-to-end pharmaceutical services",
        lead: "From molecule to medicine cabinet, we provide the capabilities and quality systems that healthcare partners depend on.",
      },
      capabilities: { eyebrow: "Our capabilities", title: "Comprehensive services under one roof" },
      process: {
        eyebrow: "How we work",
        title: "A controlled process, every step of the way",
        lead: "Quality is not a checkpoint — it is built into each stage of how we operate.",
      },
    },
    products: {
      hero: {
        eyebrow: "Our portfolio",
        title: "Products that make a difference",
        lead: "A growing range of quality-assured medicines across multiple therapeutic categories.",
      },
    },
    careers: {
      hero: {
        eyebrow: "Careers",
        title: "Build your career with purpose",
        lead: "We are always looking for talented, driven people who want to make a real difference in healthcare.",
      },
      whyJoin: { eyebrow: "Why join us", title: "More than just a job" },
      openings: {
        eyebrow: "Open positions",
        title: "Current opportunities",
        lead: "Explore our current opportunities below.",
      },
      spontaneous: { note: "Don't see a suitable role? Send your CV to" },
    },
    about: {
      hero: {
        eyebrow: "About us",
        title: "2005 to today — a story of quality",
        lead: "Valor Pharmaceuticals has grown from a single production line into a trusted pharmaceutical manufacturer, guided throughout by an uncompromising commitment to quality.",
      },
      overview: {
        eyebrow: "Who we are",
        title: "A trusted name in healthcare",
        body: [
          "Established in 2005, we are a pharmaceutical company dedicated to developing, manufacturing and distributing high-quality medicines. Our operations are built around modern, GMP-aligned facilities and a team of experienced professionals across research, production, quality and distribution.",
          "We believe good health is fundamental to every community's progress — and that belief drives everything we do.",
        ],
        image:
          "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80",
      },
      valuesSection: { eyebrow: "What we stand for", title: "Our core values" },
      historySection: { eyebrow: "Our journey", title: "Milestones over the years" },
      leadershipSection: { eyebrow: "Our people", title: "Leadership team" },
      location: { eyebrow: "Find us", title: "Our location" },
    },
    contact: {
      hero: {
        eyebrow: "Contact",
        title: "Let's talk",
        lead: "Have a question, a partnership proposal or need support? Reach out and our team will get back to you.",
      },
      intro: {
        eyebrow: "Get in touch",
        title: "We'd love to hear from you",
        lead: "Use the form or reach us directly through the details below.",
      },
      hours: "Mon – Sat, 9:00 AM – 6:00 PM",
      subjects: [
        { value: "general", label: "General enquiry" },
        { value: "partnership", label: "Partnership / Distribution" },
        { value: "product", label: "Product information" },
        { value: "careers", label: "Careers" },
        { value: "other", label: "Other" },
      ],
    },
  },
};
