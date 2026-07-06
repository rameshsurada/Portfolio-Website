"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden hover:border-amber-500/30 transition-all duration-500 shadow-lg"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0d0e]">
                {project.image ? (
                    <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                ) : (
                    <>
                        <div className="absolute inset-0 bg-black group-hover:scale-105 transition-transform duration-700 border-b border-border" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-3xl font-black text-amber-500/20 select-none group-hover:text-amber-500/40 transition-colors font-mono">
                                {project.title.toUpperCase()}
                            </h3>
                        </div>
                    </>
                )}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-2 py-0.5 rounded border border-amber-500/30 bg-amber-500/5 text-amber-500 font-mono text-[9px] uppercase tracking-wider">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight group-hover:text-amber-500 transition-colors">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((t) => (
                        <span key={t} className="px-2 py-0.5 font-mono text-[10px] text-muted-foreground rounded border border-border bg-secondary">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3">
                    {project.githubUrl && (
                        <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 rounded border border-border bg-card text-foreground hover:bg-secondary font-mono h-10 text-xs hover:text-amber-500"
                            asChild
                        >
                            <a href={project.githubUrl} target="_blank">
                                <FaGithub className="w-3.5 h-3.5 mr-2" />
                                Code
                            </a>
                        </Button>
                    )}
                    {project.liveUrl && (
                        <Button
                            size="sm"
                            className="flex-1 rounded bg-amber-500 text-black hover:bg-amber-600 font-mono h-10 text-xs font-bold"
                            asChild
                        >
                            <a href={project.liveUrl} target="_blank">
                                <ExternalLink className="w-3.5 h-3.5 mr-2" />
                                Live
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState("All");
    
    // Normalize and group category names for button display
    const getDisplayCategory = (cat: string) => {
        if (cat === "frontend") return "Frontend";
        if (cat === "backend") return "Backend";
        if (cat === "fullstack") return "Full Stack";
        if (cat === "tool") return "Tool";
        return "Other";
    };

    const categories = ["All", ...Array.from(new Set(projects.map(p => getDisplayCategory(p.category))))];

    const filtered = filter === "All" 
        ? projects 
        : projects.filter(p => getDisplayCategory(p.category) === filter);

    return (
        <SectionWrapper id="projects" className="py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="text-muted-foreground max-w-md text-lg">
                            A curated selection of my most impactful projects and experiments.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {categories.map((c) => (
                            <button
                                key={c}
                                onClick={() => setFilter(c)}
                                className={`px-4 py-1.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                    filter === c 
                                        ? "bg-amber-500 text-black border border-amber-500 shadow-lg shadow-amber-500/10" 
                                        : "bg-secondary border border-border text-muted-foreground hover:bg-card hover:text-foreground"
                                }`}
                            >
                                {c}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className={`flex flex-wrap gap-8 ${filter === "All" ? "justify-center" : "justify-start"}`}>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <div key={project.id} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)] flex flex-col">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </AnimatePresence>
                </div>

                <motion.div 
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Button variant="ghost" className="group text-muted-foreground hover:text-foreground text-lg font-bold" asChild>
                        <a href="https://github.com/rameshsurada" target="_blank">
                            View More on GitHub
                            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}