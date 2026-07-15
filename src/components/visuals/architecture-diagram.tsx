"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Database,
  Mail,
  Globe,
  Search,
  BarChart3,
  FileSpreadsheet,
  Lightbulb,
  ArrowRight,
  Zap,
} from "lucide-react";

export function ArchitectureDiagram() {
  return (
    <div className="relative h-full w-full">
      {/* Input Layer */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3"
      >
        <DataSourceBubble icon={FileText} label="PDFs" delay={0.2} />
        <DataSourceBubble icon={FileSpreadsheet} label="Contracts" delay={0.25} />
        <DataSourceBubble icon={FileText} label="Research" delay={0.3} />
        <DataSourceBubble icon={Mail} label="Emails" delay={0.35} />
        <DataSourceBubble icon={Database} label="Databases" delay={0.4} />
        <DataSourceBubble icon={Globe} label="APIs" delay={0.45} />
      </motion.div>

      {/* Flow arrows from inputs to platform */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute left-[140px] top-1/2 h-px w-[80px] origin-left bg-gradient-to-r from-hl-cyan to-hl-cyan/50"
      >
        <motion.div
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-hl-cyan"
        />
      </motion.div>

      {/* Central Platform */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      >
        <div className="relative rounded-2xl border-2 border-hl-cyan/60 bg-hl-surface/90 px-8 py-6 backdrop-blur">
          <div className="absolute -left-1 -right-1 -top-1 h-px bg-gradient-to-r from-transparent via-hl-cyan to-transparent" />
          <div className="absolute -bottom-1 -left-1 -right-1 h-px bg-gradient-to-r from-transparent via-hl-cyan to-transparent" />
          <Zap className="mb-2 h-8 w-8 text-hl-cyan" />
          <h4 className="whitespace-nowrap text-base font-bold tracking-tight text-foreground">
            Knowledge Platform
          </h4>
          <p className="mt-1 whitespace-nowrap font-mono text-xs uppercase tracking-wider text-hl-muted">
            AI Processing
          </p>
        </div>
      </motion.div>

      {/* Flow arrows from platform to outputs */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute right-[140px] top-1/2 h-px w-[80px] origin-right bg-gradient-to-l from-hl-cyan to-hl-cyan/50"
      >
        <motion.div
          animate={{ x: [0, -40, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-hl-cyan"
        />
      </motion.div>

      {/* Output Layer */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3"
      >
        <OutputBubble icon={Search} label="Search" delay={0.9} />
        <OutputBubble icon={BarChart3} label="Analysis" delay={0.95} />
        <OutputBubble icon={Zap} label="Automation" delay={1.0} />
        <OutputBubble icon={FileText} label="Reports" delay={1.05} />
        <OutputBubble icon={Lightbulb} label="Insights" delay={1.1} />
        <OutputBubble icon={FileSpreadsheet} label="Workflows" delay={1.15} />
      </motion.div>
    </div>
  );
}

function DataSourceBubble({
  icon: Icon,
  label,
  delay,
}: {
  icon: any;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="group flex items-center gap-2 rounded-lg border border-hl-border bg-hl-surface/80 px-3 py-2 backdrop-blur transition-colors hover:border-hl-cyan/40"
    >
      <Icon className="h-4 w-4 text-hl-muted group-hover:text-hl-cyan" />
      <span className="whitespace-nowrap text-xs font-medium text-foreground">
        {label}
      </span>
    </motion.div>
  );
}

function OutputBubble({
  icon: Icon,
  label,
  delay,
}: {
  icon: any;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="group flex items-center gap-2 rounded-lg border border-hl-cyan/40 bg-hl-cyan/5 px-3 py-2 backdrop-blur transition-colors hover:border-hl-cyan hover:bg-hl-cyan/10"
    >
      <Icon className="h-4 w-4 text-hl-cyan" />
      <span className="whitespace-nowrap text-xs font-medium text-foreground">
        {label}
      </span>
    </motion.div>
  );
}
