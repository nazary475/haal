/**
 * Partners & Advisors data for Haal Lab.
 *
 * All entries are placeholders — replace with real partner names, logos,
 * advisor bios, and photos before going live.
 *
 * Used by:
 * - PartnersSection (homepage + /network)
 * - AdvisorsSection (homepage + /network)
 * - Person JSON-LD (advisors)
 * - /network page content
 */

export type Partner = {
  id: string;
  name: string;
  category: "Technology" | "Infrastructure" | "Research" | "Cloud";
  description: string;
  url: string;
  /** Two- or three-letter monogram shown if no logo image is available. */
  monogram: string;
  /** Real logo image URL (from image search). If set, replaces the monogram. */
  logoUrl?: string;
};

export type Advisor = {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  linkedin?: string;
  github?: string;
  /** Initials shown in the avatar placeholder. */
  initials: string;
};

/* ───────────────────────── Partners ───────────────────────── */

export const PARTNERS: Partner[] = [
  {
    id: "nvidia",
    name: "NVIDIA",
    category: "Technology",
    description:
      "GPU acceleration and CUDA ecosystem — the compute backbone for our local inference and training pipelines.",
    url: "https://www.nvidia.com",
    monogram: "NV",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/79b6bddd12d6.jpg",
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    category: "Technology",
    description:
      "Open-weight model hub and inference tooling. We integrate Transformers, tokenizers, and evaluation harnesses into our pipelines.",
    url: "https://huggingface.co",
    monogram: "HF",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/f0afb85fbbd8.jpg",
  },
  {
    id: "qdrant",
    name: "Qdrant",
    category: "Technology",
    description:
      "Vector database for production RAG systems. Powers our semantic search and knowledge intelligence deployments.",
    url: "https://qdrant.tech",
    monogram: "Qd",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/702310fe4174.png",
  },
  {
    id: "mistral",
    name: "Mistral AI",
    category: "Technology",
    description:
      "European open-weight LLM provider. We deploy Mistral models on private infrastructure for EU clients with data-sovereignty requirements.",
    url: "https://mistral.ai",
    monogram: "Mi",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/6c1e33cf310a.jpg",
  },
  {
    id: "aleph-alpha",
    name: "Aleph Alpha",
    category: "Technology",
    description:
      "German sovereign AI lab. We integrate Aleph Alpha's models for public-sector and regulated-industry deployments.",
    url: "https://aleph-alpha.com",
    monogram: "AA",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/a51dea44a5a0.png",
  },
  {
    id: "hetzner",
    name: "Hetzner",
    category: "Cloud",
    description:
      "European cloud and bare-metal GPU servers. GDPR-compliant infrastructure for our EU-hosted AI deployments.",
    url: "https://www.hetzner.com",
    monogram: "Hz",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/7ebfdac6506d.png",
  },
  {
    id: "scaleway",
    name: "Scaleway",
    category: "Cloud",
    description:
      "French sovereign cloud with GPU instances. Supports our European AI infrastructure stack.",
    url: "https://www.scaleway.com",
    monogram: "Sc",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/f2d91dad2e7e.png",
  },
  {
    id: "gaia-x",
    name: "Gaia-X",
    category: "Infrastructure",
    description:
      "European federated data infrastructure initiative. We align our deployments with Gaia-X sovereignty and interoperability standards.",
    url: "https://www.gaia-x.eu",
    monogram: "GX",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/4b0c1dfe3b8d.jpg",
  },
  {
    id: "fraunhofer",
    name: "Fraunhofer",
    category: "Research",
    description:
      "Europe's largest applied research organization. Collaborative research on applied AI, retrieval systems, and document intelligence.",
    url: "https://www.fraunhofer.de",
    monogram: "Fh",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/cfbaaff3cb7d.jpg",
  },
  {
    id: "inria",
    name: "INRIA",
    category: "Research",
    description:
      "French national research institute for digital science. Joint work on ML systems, evaluation methodology, and multilingual NLP.",
    url: "https://www.inria.fr",
    monogram: "In",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/c9848f92bf03.jpg",
  },
  {
    id: "apache",
    name: "Apache Software Foundation",
    category: "Technology",
    description:
      "Open-source infrastructure we build on — including vLLM, Kafka, and Spark for production AI systems.",
    url: "https://apache.org",
    monogram: "Ap",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/8039a664f0f5.jpg",
  },
  {
    id: "linux-foundation",
    name: "Linux Foundation",
    category: "Infrastructure",
    description:
      "Open governance for the infrastructure layer of modern AI. We contribute to and build on LF-hosted projects.",
    url: "https://www.linuxfoundation.org",
    monogram: "LF",
    logoUrl: "https://sfile.chatglm.cn/images-ppt/55b4bd9d1e93.jpg",
  },
];

export const PARTNER_CATEGORIES = [
  "All",
  "Technology",
  "Infrastructure",
  "Cloud",
  "Research",
] as const;

/* ───────────────────────── Advisors ───────────────────────── */

export const ADVISORS: Advisor[] = [
  {
    id: "advisor-1",
    name: "Dr. Elena Vogt",
    role: "AI Research Advisor",
    expertise: ["Retrieval Systems", "Multilingual NLP", "Evaluation"],
    bio: "Former senior researcher at a European AI lab. Elena advises Haal Lab on retrieval architecture, evaluation methodology, and multilingual model selection. She holds a PhD in machine learning and has published extensively on dense and sparse retrieval.",
    linkedin: "https://www.linkedin.com/in/",
    initials: "EV",
  },
  {
    id: "advisor-2",
    name: "Marcus Reiner",
    role: "Infrastructure & DevOps Advisor",
    expertise: ["GPU Optimization", "Kubernetes", "Model Serving"],
    bio: "Twenty years building production infrastructure at scale. Marcus guides our AI infrastructure practice — model serving, GPU scheduling, observability, and the operational discipline required to run LLMs in production without firefighting.",
    linkedin: "https://www.linkedin.com/in/",
    initials: "MR",
  },
  {
    id: "advisor-3",
    name: "Sophie Laurent",
    role: "Privacy & Compliance Advisor",
    expertise: ["GDPR", "EU AI Act", "Data Sovereignty"],
    bio: "Technology lawyer specializing in EU digital regulation. Sophie helps us architect systems that meet GDPR and EU AI Act requirements by construction — not afterthought. She works at the intersection of law and engineering.",
    linkedin: "https://www.linkedin.com/in/",
    initials: "SL",
  },
  {
    id: "advisor-4",
    name: "Dr. Rafael Mendes",
    role: "Applied ML Advisor",
    expertise: ["Fine-tuning", "Agent Orchestration", "RAG"],
    bio: "Applied ML researcher with production experience at several European startups. Rafael advises on agent orchestration patterns, fine-tuning strategy, and the practical tradeoffs between retrieval, fine-tuning, and prompt engineering.",
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/",
    initials: "RM",
  },
  {
    id: "advisor-5",
    name: "Anika Chandran",
    role: "Product & Strategy Advisor",
    expertise: ["Product Strategy", "Enterprise AI", "Go-to-market"],
    bio: "Product leader who has shipped AI products to enterprise customers across Europe. Anika helps us bridge the gap between engineering depth and product clarity — making sure the systems we build solve real problems for real users.",
    linkedin: "https://www.linkedin.com/in/",
    initials: "AC",
  },
  {
    id: "advisor-6",
    name: "Dr. Tomas Bjork",
    role: "Security & Threat Modeling Advisor",
    expertise: ["AI Security", "Threat Modeling", "Air-gapped Systems"],
    bio: "Security researcher focused on AI system threats — prompt injection, model supply chain, and inference-time attacks. Tomas helps us design private AI deployments that hold up against realistic adversaries, not just compliance checklists.",
    linkedin: "https://www.linkedin.com/in/",
    initials: "TB",
  },
];
