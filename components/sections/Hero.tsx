"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/common/ParticleBackground";
import SocialLinks from "@/components/common/SocialLinks";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { projects } from "@/data/projects";

function CodeCard() {
    return (
        <div className="relative w-full h-[400px] flex items-center justify-center select-none">
            {/* Ambient glow backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none" />
            
            {/* The Stack Container */}
            <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[380px]">
                {projects.map((project, index) => {
                    // Card offsets based on index (index 0 is Nutri App, 1 is RemoveBG, 2 is Calculator-Lite)
                    // We want index 0 on top, so z-index = 30 - index * 10
                    const zIndex = 30 - index * 10;
                    
                    // Default rotations and offsets
                    const defaultRotate = index === 0 ? 3 : index === 1 ? -4 : 0;
                    const defaultY = index * 12;
                    const defaultX = index === 0 ? 5 : index === 1 ? -5 : 0;
                    
                    // Hover animations: we want the stack to spread out nicely
                    const hoverRotate = index === 0 ? 8 : index === 1 ? -8 : 2;
                    const hoverY = -index * 35; // Spreads them upwards
                    const hoverX = index === 0 ? 30 : index === 1 ? -30 : 0; // Spreads them outwards
                    
                    return (
                        <motion.a
                            key={project.id}
                            href={`#projects`}
                            initial={{ opacity: 0, y: 50, rotate: defaultRotate }}
                            animate={{ opacity: 1, y: defaultY, x: defaultX, rotate: defaultRotate }}
                            whileHover={{ 
                                y: hoverY, 
                                x: hoverX, 
                                rotate: hoverRotate,
                                scale: 1.05,
                                zIndex: 40 // Bring hovered card to very top
                            }}
                            transition={{ type: "spring", stiffness: 260, damping: 25 }}
                            className="absolute inset-0 bg-[#0d0d0e]/95 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col justify-between cursor-pointer group"
                            style={{ zIndex }}
                        >
                            {/* Card Content */}
                            <div className="space-y-3 flex-1 flex flex-col justify-between">
                                {/* Top bar */}
                                <div className="flex items-center justify-between text-[9px] font-mono tracking-wider text-slate-500 uppercase">
                                    <span>Project #{3 - index}</span>
                                    <span className="px-2 py-0.5 rounded border border-amber-500/20 bg-amber-500/5 text-amber-500">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Image Preview Container */}
                                <div className="relative flex-1 rounded-xl overflow-hidden bg-black border border-slate-900 aspect-[16/10] my-2">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                            sizes="(max-w-768px) 100vw, 33vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-secondary text-slate-500 text-xs">
                                            {project.title}
                                        </div>
                                    )}
                                </div>

                                {/* Title & Short Description */}
                                <div className="space-y-1 mt-1 text-left">
                                    <h4 className="text-sm font-bold text-foreground group-hover:text-amber-500 transition-colors leading-tight">
                                        {project.title}
                                    </h4>
                                    <p className="text-[10px] text-muted-foreground line-clamp-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {/* Tech Stack Footer */}
                            <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-slate-900">
                                {project.techStack.slice(0, 3).map((tech) => (
                                    <span 
                                        key={tech} 
                                        className="text-[8px] font-mono text-slate-400 bg-secondary/80 px-1.5 py-0.5 rounded border border-border"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    );
                })}
            </div>
        </div>
    );
}

const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex items-center w-full section-padding overflow-hidden"
        >
            <div className="relative z-10 max-w-5xl mx-auto w-full pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col gap-6"
                    >
                        <motion.div variants={itemVariant}>
                            <span className="inline-flex items-center gap-2 text-[11px] font-mono font-medium rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 uppercase tracking-wider">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                                </span>
                                Status: Developer
                            </span>
                        </motion.div>

                        <div className="space-y-3">
                            <motion.h1
                                variants={itemVariant}
                                className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.2rem] xl:text-[3.6rem] font-bold tracking-tight leading-[1.1]"
                            >
                                Building Scalable <br /> 
                                <span className="text-gradient">Full-Stack</span> Applications.
                            </motion.h1>
                            
                            <motion.p
                                variants={itemVariant}
                                className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-sans"
                            >
                                I&apos;m <span className="text-foreground font-semibold">Ramesh Surada</span>. I build responsive web applications, MERN stack systems, and explore AI-powered integrations. Passionate about designing robust software, solving logical problems, and building tools for the future.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={itemVariant}
                            className="flex flex-row flex-wrap gap-4 items-center"
                        >
                            <Button
                                onClick={scrollToProjects}
                                size="lg"
                                className="bg-amber-500 hover:bg-amber-600 text-black rounded px-8 h-14 text-base font-semibold group font-mono"
                            >
                                Explore Work
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <div className="flex items-center gap-3">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded w-14 h-14 border-border bg-card hover:bg-secondary"
                                    asChild
                                >
                                    <a href="https://github.com/rameshsurada" target="_blank">
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded h-14 border-border bg-card hover:bg-secondary font-mono font-medium"
                                    asChild
                                >
                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                        <Download className="mr-2 w-4 h-4" />
                                        Resume
                                    </a>
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariant}>
                            <SocialLinks iconSize={20} className="opacity-60 hover:opacity-100 transition-opacity" />
                        </motion.div>
                    </motion.div>

                    {/* Right: Code Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative hidden lg:block"
                    >
                        <CodeCard />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}