import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "nutri-check",
        title: "Nutri App",
        description:
            "An offline-first PWA nutrient tracker featuring interactive daily/weekly checklists, macronutrient logs, and visual progress indicators.",
        longDescription: `Nutri App is an offline-capable Progressive Web Application (PWA) designed 
    to track daily dietary intake and log macronutrients. It provides dynamic progress visualizations, 
    local cache synchronization, and real-time category updates, helping users optimize their daily nutrient coverage.`,
        techStack: [
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "PWA / Service Worker",
            "Vercel",
        ],
        category: "fullstack",
        features: [
            "Offline-first support with service worker synchronization",
            "Dynamic daily checklist and weekly average trackers",
            "Macronutrient logger with food-specific sources (Carbs, Fats, etc.)",
            "Visual daily target progress bars (nutrient coverage goal)",
            "Clean, bottom-bar navigation interface optimized for mobile viewports",
        ],
        liveUrl: "https://nutri-check-gamma.vercel.app/",
        githubUrl: "https://github.com/rameshsurada/nutri-check",
        featured: true,
        image: "/images/nutri_check.jpg",
    },
    {
        id: "remove-bg",
        title: "RemoveBG",
        description:
            "An AI-powered image background removal tool that extracts clean transparent backgrounds in seconds with no manual editing needed.",
        longDescription: `RemoveBG is an automated background removal web application. It integrates 
    AI-powered segmentation models to detect foreground boundaries in images, enabling users to 
    upload photos and download clear PNGs with transparent backgrounds instantly.`,
        techStack: [
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "AI Integration",
            "Vercel",
        ],
        category: "tool",
        features: [
            "100% automated background erasure using AI segmentation",
            "Transparent background PNG generation in seconds",
            "Simple image drag-and-drop or upload area",
            "Sleek UI with preview comparisons",
            "Integrated login and sign-up page mockups",
        ],
        liveUrl: "https://remove-bg-w6cn.vercel.app/",
        githubUrl: "https://github.com/rameshsurada/RemoveBG",
        featured: true,
        image: "/images/remove_bg_final.jpg",
    },
    {
        id: "calculator-lite",
        title: "Calculator-Lite",
        description:
            "A gorgeous, high-performance web-based scientific calculator with a clean dark theme, custom mathematical logic, and a responsive grid layout.",
        longDescription: `Calculator-Lite is a sleek, web-based scientific calculator. It features 
    responsive layout structures, stateful operations, and custom mathematical parser logic for 
    scientific actions including trigonometry (sin, cos, tan), logarithmic functions (ln, log), 
    constants (pi, e), power operations, factorials, and square roots.`,
        techStack: [
            "React.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Vercel",
        ],
        category: "frontend",
        features: [
            "Full suite of scientific functions (trigonometry, logs, factorials, power, roots)",
            "Responsive, interactive grid layout built with Tailwind CSS",
            "Real-time input parser with syntax validation",
            "Clean, premium dark mode aesthetics",
            "Instant calculations and clean error state handling",
        ],
        liveUrl: "https://calculator-lite-neon.vercel.app/",
        githubUrl: "https://github.com/rameshsurada/Calculator-Lite",
        featured: true,
        image: "/images/calculator_lite.jpg",
    },
];

export const featuredProjects = projects.filter((p) => p.featured);