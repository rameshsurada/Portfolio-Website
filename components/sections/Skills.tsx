"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Server, Database, LayoutGrid, Cpu, Cloud, Code2 } from "lucide-react";

interface SkillCategory {
    name: string;
    icon: React.ElementType;
    desc: string;
    skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        name: "Frontend Development",
        icon: LayoutGrid,
        desc: "Building clean, responsive, and interactive user interfaces using modern frameworks, component libraries, and CSS frameworks.",
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    },
    {
        name: "Backend & API Tier",
        icon: Server,
        desc: "Developing fast, scalable server-side systems and designing structured RESTful API architectures.",
        skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Google OAuth"],
    },
    {
        name: "Database & Storage",
        icon: Database,
        desc: "Managing relation schemas, document storage, running optimization queries, and database administration.",
        skills: ["MongoDB", "PostgreSQL", "SQL", "MySQL"],
    },
    {
        name: "Cloud & Serverless",
        icon: Cloud,
        desc: "Configuring serverless databases, edge networks, global redirects, and fast cloud hosting platforms.",
        skills: ["Supabase", "Firebase", "Cloudflare", "Vercel", "Netlify"],
    },
    {
        name: "Languages & Scripting",
        icon: Code2,
        desc: "Core programming languages used for application logic, scripting, data queries, and automation.",
        skills: ["Java", "C", "C++", "JavaScript", "Python", "SQL"],
    },
    {
        name: "Tools & Workflow",
        icon: Cpu,
        desc: "Code editors, remote collaboration systems, design interfaces, and branch management.",
        skills: ["Git & GitHub", "VS Code", "IntelliJ IDEA", "Figma", "Postman"],
    },
];

export default function Skills() {
    return (
        <SectionWrapper id="skills" className="relative py-32 overflow-hidden border-t border-border bg-card/30">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    className="mb-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 border border-amber-500/20 rounded">
                        Full-Stack Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tighter">
                        My Technical <span className="text-gradient">Stack</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
                        A structured view of the technologies, frameworks, and tools I use to build robust full-stack web applications.
                    </p>
                </motion.div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILL_CATEGORIES.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="p-6 md:p-8 rounded-xl border border-border bg-background hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-amber-500/5 flex items-center justify-center border border-amber-500/20 text-amber-500 group-hover:bg-amber-500/10 transition-colors">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-amber-500 transition-colors">
                                            {category.name}
                                        </h3>
                                    </div>

                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {category.desc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-0.5 font-mono text-[9px] text-muted-foreground rounded border border-border bg-secondary group-hover:border-amber-500/20 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}