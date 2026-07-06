"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Code2, Briefcase } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";

interface HighlightCard {
    icon: React.ElementType;
    label: string;
    value: string;
    sub: string;
}

const HIGHLIGHT_CARDS: HighlightCard[] = [
    {
        icon: GraduationCap,
        label: "Education",
        value: "B.Tech CSE — JNTU-GV",
        sub: "2021 – 2025",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Visakhapatnam, AP, India",
        sub: "Open to Relocation",
    },
    {
        icon: Code2,
        label: "Core Stack",
        value: "MERN Stack, Java, JavaScript, Python",
        sub: "Full-Stack Development",
    },
    {
        icon: Briefcase,
        label: "Availability",
        value: "Open to Work",
        sub: "Immediately Available",
    },
];

export default function About() {
    return (
        <SectionWrapper id="about" className="py-32 border-t border-border bg-card">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                                I Build <span className="text-gradient">Products</span> <br /> 
                                That Deliver Seamless Experiences.
                            </h2>
                            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                                <p>
                                    I am a Full-Stack Web Developer specialized in architecting responsive digital solutions using the MERN stack. Bridging the gap between visually rich user interfaces and secure back-end services, I translate complex technical specifications into performant, clean-code web systems.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border mt-6">
                                <div className="space-y-1">
                                    <span className="text-2xl font-extrabold text-foreground tracking-tight">300+</span>
                                    <p className="text-[9px] font-mono font-bold text-amber-500 uppercase tracking-wider">LeetCode Solves</p>
                                    <p className="text-[9px] text-muted-foreground">Problem-solving & algorithm logic</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-2xl font-extrabold text-foreground tracking-tight">10+</span>
                                    <p className="text-[9px] font-mono font-bold text-amber-500 uppercase tracking-wider">Live Projects</p>
                                    <p className="text-[9px] text-muted-foreground">Concept designs to production builds</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-2xl font-extrabold text-foreground tracking-tight">600+</span>
                                    <p className="text-[9px] font-mono font-bold text-amber-500 uppercase tracking-wider">GitHub Commits</p>
                                    <p className="text-[9px] text-muted-foreground">Active repository contributions</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                            {["MERN Stack", "Clean Code", "API Integration", "User-Centric Design"].map((tag) => (
                                <span key={tag} className="px-2.5 py-1 rounded border border-amber-500/20 bg-amber-500/5 text-amber-500 font-mono text-[10px] uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {HIGHLIGHT_CARDS.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={card.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-xl border border-border bg-background hover:border-amber-500/30 transition-all duration-300 group"
                                >
                                    <div className="w-9 h-9 rounded bg-amber-500/5 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 transition-colors border border-amber-500/10">
                                        <Icon className="w-4.5 h-4.5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
                                    </div>
                                    <p className="text-[9px] font-mono font-bold text-muted-foreground uppercase tracking-widest mb-1">
                                        {card.label}
                                    </p>
                                    <p className="text-sm font-bold text-foreground mb-1">
                                        {card.value}
                                    </p>
                                    <p className="text-xs text-muted-foreground italic">
                                        {card.sub}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}