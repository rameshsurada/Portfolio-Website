"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Briefcase } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";

interface TimelineEntry {
    type: "education" | "experience";
    title: string;
    organization: string;
    period: string;
    location: string;
    bullets?: string[];
    tags: string[];
}

const TIMELINE_ENTRIES: TimelineEntry[] = [
    {
        type: "experience",
        title: "Full-Stack Developer (Freelance)",
        organization: "Freelancer.com",
        period: "Mar 2026 – Present",
        location: "Remote, India",
        bullets: [
            "Building end-to-end web applications using modern full-stack development patterns.",
            "Developing responsive user interfaces and robust RESTful API logic.",
            "Exploring AI-powered automation models and tool integrations.",
            "Deploying and managing live applications on cloud hosting platforms."
        ],
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Integrations", "Vercel"]
    },
    {
        type: "experience",
        title: "MERN Stack Developer Intern",
        organization: "Council for Skills and Competencies (CSC India)",
        period: "Dec 2024 – Apr 2025",
        location: "Visakhapatnam, AP, India",
        bullets: [
            "Completed a virtual internship program focused on full-stack web development.",
            "Designed responsive client-side routing, hooks, and views in React.js.",
            "Wrote secure backend server APIs in Node.js/Express connected to MongoDB.",
            "Strengthened hands-on capabilities in authentication, routing, and remote teamwork."
        ],
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
        type: "experience",
        title: "Web Development Intern",
        organization: "Datavalley Inc",
        period: "May 2024 – Jun 2024",
        location: "Vijayawada, India",
        bullets: [
            "Developed responsive, user-friendly webpages using HTML5, CSS3, and JavaScript.",
            "Utilized Bootstrap and Tailwind CSS to implement consistent layout structures.",
            "Created essential frontend components like dashboards and payment mockups."
        ],
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"]
    },
    {
        type: "education",
        title: "B.Tech in Computer Science and Engineering",
        organization: "JNTU Gurajada Vizianagaram",
        period: "Dec 2021 – Apr 2025",
        location: "Vizianagaram, India",
        bullets: [
            "Formal undergraduate program focusing on computer science foundations, systems programming, and database design."
        ],
        tags: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks"]
    }
];

export default function Education() {
    return (
        <SectionWrapper id="education" className="py-32 border-t border-border bg-card">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 border border-amber-500/20 rounded">
                        Timeline
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tighter">
                        Education & <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
                        My formal academic training and professional software engineering internships.
                    </p>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-border/60">
                    {TIMELINE_ENTRIES.map((entry, i) => {
                        const isEdu = entry.type === "education";
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="relative pl-8 group"
                            >
                                {/* Technical Timeline Connector */}
                                <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full border-2 border-border bg-background group-hover:border-amber-500 group-hover:bg-amber-500 transition-all duration-300 z-10" />
                                
                                <div className="p-6 md:p-8 rounded-xl border border-border bg-background hover:border-amber-500/30 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded bg-amber-500/5 flex items-center justify-center border border-amber-500/20 text-amber-500">
                                                {isEdu ? <GraduationCap className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-foreground group-hover:text-amber-500 transition-colors leading-tight">
                                                    {entry.title}
                                                </h3>
                                                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                                                    {entry.organization}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground font-mono text-[10px] font-bold uppercase tracking-wider md:self-start md:pt-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {entry.period}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1.5 text-xs font-mono">
                                            <MapPin className="w-3.5 h-3.5 text-amber-500" />
                                            {entry.location}
                                        </div>
                                        <span className="px-2 py-0.5 rounded border border-border bg-card font-mono text-[9px] uppercase tracking-wider text-slate-400">
                                            {entry.type}
                                        </span>
                                    </div>

                                    {entry.bullets && (
                                        <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1 mb-6 leading-relaxed">
                                            {entry.bullets.map((bullet, idx) => (
                                                <li key={idx}>{bullet}</li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="flex flex-wrap gap-2">
                                        {entry.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 font-mono text-[10px] text-slate-400 rounded border border-border bg-secondary group-hover:border-amber-500/20 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}