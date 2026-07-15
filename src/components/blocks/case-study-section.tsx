"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  FileSearch,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Workflow,
  Database,
  Target,
  BookOpen,
  Users,
  Zap,
} from "lucide-react";
import {
  Reveal,
  SectionShell,
  SectionHeader,
  Tag,
} from "@/components/blocks/primitives";

type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  contextTitle: string;
  contextItems: string[];
  challengeTitle: string;
  challengeItems: string[];
  approachTitle: string;
  approachItems: string[];
  considerationsTitle: string;
  considerationsItems: string[];
  outcomeTitle: string;
  outcomeItems: string[];
  accentGradient: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "knowledge-discovery",
    eyebrow: "Research Engineering",
    title: "Accelerating Knowledge Discovery Across Research Archives",
    description:
      "Engineering a semantic search architecture to enable researchers to efficiently locate relevant information across distributed document repositories.",
    tags: ["Document Processing", "Semantic Search", "Knowledge Organization"],
    contextTitle: "Context",
    contextItems: [
      "Research organization accumulated years of scientific papers, technical reports, and experimental documentation across multiple disconnected repositories",
      "Information volume increased significantly, making it difficult for researchers to determine whether specific work had already been conducted",
      "Researchers spent substantial time searching for existing knowledge rather than focusing on analysis and discovery",
    ],
    challengeTitle: "Challenge",
    challengeItems: [
      "Information distributed across disconnected systems with varying formats and organizational structures",
      "Keyword-based search missed conceptually related documents using different terminology",
      "Institutional knowledge resided in documents that were difficult to locate using traditional search methods",
      "New researchers required significant time to understand what work had been completed and where to find relevant documentation",
    ],
    approachTitle: "Engineering Approach",
    approachItems: [
      "Designed document processing workflows to normalize and index content from heterogeneous sources",
      "Implemented semantic retrieval architecture using embedding-based similarity matching rather than keyword search alone",
      "Developed source-aware information access ensuring every retrieval links back to originating documents",
      "Created research-focused search interface supporting both exploratory discovery and targeted queries",
    ],
    considerationsTitle: "Technical Considerations",
    considerationsItems: [
      "Processing large collections while maintaining reasonable indexing timeframes",
      "Handling multilingual documents and cross-language information retrieval",
      "Maintaining source traceability to support research reproducibility requirements",
      "Addressing data ownership policies and access control across different document types",
    ],
    outcomeTitle: "Outcome",
    outcomeItems: [
      "Researchers gained faster access to existing work, reducing time spent searching and increasing focus on analysis",
      "Improved discovery of related work across different terminology and conceptual frameworks",
      "New team members could more efficiently understand completed research and locate relevant documentation",
      "Organization improved utilization of existing institutional knowledge",
    ],
    accentGradient: "from-hl-cyan/20 to-transparent",
  },
  {
    id: "intelligent-assistance",
    eyebrow: "Operational Engineering",
    title: "Supporting Research Operations Through Intelligent Assistance",
    description:
      "Developing an AI-assisted workflow system to handle internal knowledge retrieval and automate repetitive operational processes.",
    tags: ["Workflow Automation", "Knowledge Access", "Process Integration"],
    contextTitle: "Context",
    contextItems: [
      "Technical team handled increasing volumes of internal questions, documentation requests, and repetitive administrative workflows",
      "Staff time was consumed answering repeated questions and performing routine information retrieval tasks",
      "Organizational knowledge resided in various systems, making it difficult to locate information quickly",
    ],
    challengeTitle: "Challenge",
    challengeItems: [
      "Same questions repeated across teams, requiring manual responses each time",
      "Time-consuming process to locate information scattered across documentation and systems",
      "Repetitive administrative workflows reduced capacity for higher-value technical work",
      "Difficulty connecting existing organizational knowledge with day-to-day operational questions",
    ],
    approachTitle: "Engineering Approach",
    approachItems: [
      "Designed knowledge-connected workflow system that provides contextual information for common operational questions",
      "Integrated with existing tools and documentation systems rather than requiring workflow changes",
      "Implemented assistance mechanisms for repetitive processes while maintaining appropriate human oversight",
      "Developed internal query interface that retrieves information from organizational knowledge bases",
    ],
    considerationsTitle: "Technical Considerations",
    considerationsItems: [
      "Access control ensuring users only retrieve information they are authorized to access",
      "Data privacy requirements for handling internal organizational information",
      "Reliability requirements ensuring system availability for operational use",
      "Integration points with existing workflow tools and knowledge management systems",
      "Human oversight mechanisms for sensitive or consequential operations",
    ],
    outcomeTitle: "Outcome",
    outcomeItems: [
      "Reduced time spent on repetitive information retrieval and routine administrative tasks",
      "Faster access to organizational knowledge when needed for operational decisions",
      "Staff capacity freed for higher-value technical and analytical work",
      "Improved consistency in how routine processes are executed",
    ],
    accentGradient: "from-[#6EA8FF]/20 to-transparent",
  },
  {
    id: "secure-infrastructure",
    eyebrow: "Infrastructure Engineering",
    title: "Establishing Secure AI Capabilities Within Organizational Infrastructure",
    description:
      "Architecting private AI deployment infrastructure to enable modern capabilities while maintaining strict data control and security requirements.",
    tags: ["Private Deployment", "Security Architecture", "Infrastructure"],
    contextTitle: "Context",
    contextItems: [
      "Organization required modern AI capabilities for internal operations while maintaining strict control over sensitive information",
      "External AI services posed unacceptable data privacy and security risks for the organization's use cases",
      "Compliance and regulatory frameworks required that certain data never leave organizational boundaries",
    ],
    challengeTitle: "Challenge",
    challengeItems: [
      "Data privacy requirements prohibited sending sensitive information to external AI services",
      "Security policies restricted which systems could process certain categories of information",
      "Compliance considerations required documented data handling and processing controls",
      "Organization needed AI capabilities without compromising established security boundaries",
    ],
    approachTitle: "Engineering Approach",
    approachItems: [
      "Designed private deployment architecture for AI operations within organizational infrastructure boundaries",
      "Implemented secure data handling ensuring sensitive information remains under organization control",
      "Developed infrastructure that operates without external dependencies for inference operations",
      "Created operational procedures for organization-controlled model deployment and maintenance",
    ],
    considerationsTitle: "Technical Considerations",
    considerationsItems: [
      "Data sovereignty requirements ensuring information never crosses organizational boundaries",
      "Security architecture meeting organizational policies and compliance frameworks",
      "Infrastructure resource requirements for running capable models internally",
      "Operational ownership model and ongoing maintenance responsibilities",
      "Model update and improvement procedures under organizational control",
    ],
    outcomeTitle: "Outcome",
    outcomeItems: [
      "AI capabilities became available for internal use while meeting security requirements",
      "Sensitive information processing maintained within organizational control boundaries",
      "Organization retained ownership of deployed systems and operational procedures",
      "Compliance requirements satisfied through controlled data handling architecture",
    ],
    accentGradient: "from-[#29C4F8]/20 to-transparent",
  },
  {
    id: "specialized-models",
    eyebrow: "Model Engineering",
    title: "Improving Specialized Document Understanding Through Custom AI Models",
    description:
      "Developing task-specific AI models to handle specialized classification and analysis requirements more efficiently than general-purpose systems.",
    tags: ["Custom Models", "Domain Adaptation", "Task Optimization"],
    contextTitle: "Context",
    contextItems: [
      "Organization required AI capabilities for highly specific document classification and analysis task within a specialized domain",
      "General-purpose AI models produced inconsistent results due to lack of domain-specific understanding",
      "Manual processing was accurate but too slow to handle required document volumes",
    ],
    challengeTitle: "Challenge",
    challengeItems: [
      "General AI models lacked sufficient specificity for the organization's specialized requirements",
      "Domain-specific terminology and context required understanding that broad models did not possess",
      "Manual processing ensured accuracy but could not scale to meet processing volume requirements",
      "Consistency was difficult to maintain across different human reviewers and over time",
    ],
    approachTitle: "Engineering Approach",
    approachItems: [
      "Developed task-specific model focused on the organization's narrow classification requirements",
      "Applied domain adaptation techniques to incorporate specialized knowledge and terminology",
      "Designed evaluation workflows to measure accuracy against organization's quality standards",
      "Optimized model for efficient deployment given organization's infrastructure constraints",
    ],
    considerationsTitle: "Technical Considerations",
    considerationsItems: [
      "Model efficiency to enable practical deployment on available infrastructure",
      "Accuracy evaluation methodologies aligned with organizational quality requirements",
      "Deployment constraints including latency, throughput, and resource availability",
      "Maintenance procedures for model updates as requirements evolve",
      "Quality assurance processes to catch edge cases and unexpected inputs",
    ],
    outcomeTitle: "Outcome",
    outcomeItems: [
      "More consistent processing aligned with organizational standards and requirements",
      "Better accuracy on domain-specific tasks compared to general-purpose alternatives",
      "More efficient workflow enabling higher processing volumes",
      "Organization gained understanding of where specialized models provide value versus general-purpose systems",
    ],
    accentGradient: "from-[#4AF3F8]/20 to-transparent",
  },
];

export function CaseStudySection() {
  return (
    <SectionShell id="case-studies" className="border-t border-hl-border bg-hl-surface/30">
      <SectionHeader
        eyebrow="Selected Engineering Case Studies"
        heading="Practical AI Systems for Complex Challenges"
        lead="Representative engagements demonstrating approaches to solving complex AI engineering problems for organizations, research groups, and technical teams."
      />

      <div className="mt-14 space-y-8">
        {CASE_STUDIES.map((study, index) => (
          <Reveal key={study.id} delay={index * 0.1}>
            <CaseStudyCard study={study} index={index} />
          </Reveal>
        ))}
      </div>

      {/* Bottom CTA */}
      <Reveal delay={0.5}>
        <div className="mt-12 rounded-2xl border border-hl-border bg-hl-surface/40 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Facing a Complex AI Engineering Challenge?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-hl-muted">
                Describe your technical requirements, constraints, and objectives. Our engineering team will evaluate potential approaches and provide a practical assessment.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_30px_-8px_rgba(96,165,250,0.5)] md:shrink-0"
            >
              Discuss Your Requirements
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const icons = [BookOpen, Workflow, ShieldCheck, Target];
  const Icon = icons[index % icons.length];

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-hl-border bg-hl-surface/60 transition-all hover:border-hl-cyan/40 hl-card-glow">
      {/* Header */}
      <div className="relative border-b border-hl-border bg-hl-surface/40 p-8 md:p-10">
        <div className={`absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${study.accentGradient} blur-3xl`} />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-hl-cyan" />
                {study.eyebrow}
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {study.title}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-hl-muted">
                {study.description}
              </p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-hl-border bg-hl-surface-2 text-hl-cyan transition-colors group-hover:border-hl-cyan/40">
              <Icon className="h-6 w-6" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Context */}
        <CaseStudyContentBlock
          title={study.contextTitle}
          items={study.contextItems}
          icon={FileSearch}
        />

        {/* Challenge */}
        <CaseStudyContentBlock
          title={study.challengeTitle}
          items={study.challengeItems}
          icon={Database}
        />

        {/* Engineering Approach */}
        <CaseStudyContentBlock
          title={study.approachTitle}
          items={study.approachItems}
          icon={Zap}
          className="md:col-span-2 lg:col-span-1"
        />

        {/* Technical Considerations */}
        <CaseStudyContentBlock
          title={study.considerationsTitle}
          items={study.considerationsItems}
          icon={Users}
          className="md:col-span-2 lg:col-span-2"
        />

        {/* Outcome */}
        <CaseStudyContentBlock
          title={study.outcomeTitle}
          items={study.outcomeItems}
          icon={CheckCircle2}
        />
      </div>
    </article>
  );
}

function CaseStudyContentBlock({
  title,
  items,
  icon: Icon,
  className = "",
}: {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <div className={`border-b border-r border-hl-border p-6 last:border-b-0 md:last:border-b lg:border-b ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-cyan">
        <Icon className="h-4 w-4" />
      </div>
      <h4 className="mt-4 text-base font-bold tracking-tight text-foreground">
        {title}
      </h4>
      <ul className="mt-3 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-hl-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-hl-cyan/60" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
