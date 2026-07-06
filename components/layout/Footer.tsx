"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border bg-card dark:bg-[#0d0d0e] py-20 px-6 font-mono transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2 space-y-6">
                        <div className="flex items-center">
                            <span className="text-xl font-bold tracking-tighter text-foreground">
                                Ramesh<span className="text-amber-500">.</span>
                            </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm text-xs leading-relaxed">
                            Full Stack Systems Engineer specializing in robust backend architectures, decoupled microservices, and fluid interface design.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sitemap</h4>
                        <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                            <li><a href="#about" className="hover:text-amber-500 transition-colors">/about</a></li>
                            <li><a href="#skills" className="hover:text-amber-500 transition-colors">/skills</a></li>
                            <li><a href="#projects" className="hover:text-amber-500 transition-colors">/projects</a></li>
                            <li><a href="#education" className="hover:text-amber-500 transition-colors">/education</a></li>
                            <li><a href="#certifications" className="hover:text-amber-500 transition-colors">/certifications</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Resources</h4>
                        <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                            <li>
                                <a 
                                    href="https://www.linkedin.com/in/rameshsurada" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:text-amber-500 transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://github.com/rameshsurada" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:text-amber-500 transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Connect</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Interested in working together or have any questions? Get in touch.
                        </p>
                        <div className="flex items-center gap-2 pt-1 flex-wrap">
                            <a 
                                href="https://github.com/rameshsurada" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="GitHub" 
                                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-[#18181b]/50 text-slate-600 dark:text-slate-400 hover:bg-amber-500/10 hover:text-amber-500 dark:hover:bg-amber-500/10 dark:hover:text-amber-500 border border-slate-200 dark:border-slate-800 transition-colors flex items-center justify-center"
                            >
                                <FaGithub className="w-[18px] h-[18px]" />
                            </a>
                            <a 
                                href="mailto:suradaramesh4@gmail.com" 
                                aria-label="Email" 
                                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-[#18181b]/50 text-slate-600 dark:text-slate-400 hover:bg-amber-500/10 hover:text-amber-500 dark:hover:bg-amber-500/10 dark:hover:text-amber-500 border border-slate-200 dark:border-slate-800 transition-colors flex items-center justify-center"
                            >
                                <FaEnvelope className="w-[18px] h-[18px]" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/rameshsurada" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="LinkedIn" 
                                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-[#18181b]/50 text-slate-600 dark:text-slate-400 hover:bg-amber-500/10 hover:text-amber-500 dark:hover:bg-amber-500/10 dark:hover:text-amber-500 border border-slate-200 dark:border-slate-800 transition-colors flex items-center justify-center"
                            >
                                <FaLinkedin className="w-[18px] h-[18px]" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                        <span>© {currentYear} Ramesh.</span>
                    </div>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                        Stay Curious // Built with passion
                    </p>
                </div>
            </div>
        </footer>
    );
}