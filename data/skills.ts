import type { Skill } from "@/types";

export const skills: Skill[] = [
    // ── Languages ──────────────────────────────────────────
    { name: "JavaScript", category: "Languages", proficiency: 85 },
    { name: "TypeScript", category: "Languages", proficiency: 75 },
    { name: "Python", category: "Languages", proficiency: 70 },

    // ── Frontend ───────────────────────────────────────────
    { name: "React.js", category: "Frontend", proficiency: 85 },
    { name: "Bootstrap", category: "Frontend", proficiency: 90 },
    { name: "Tailwind CSS", category: "Frontend", proficiency: 80 },
    { name: "HTML5 & CSS3", category: "Frontend", proficiency: 88 },

    // ── Backend ────────────────────────────────────────────
    { name: "Node.js", category: "Backend", proficiency: 80 },
    { name: "Express.js", category: "Backend", proficiency: 82 },
    { name: "REST APIs", category: "Backend", proficiency: 85 },

    // ── Databases ──────────────────────────────────────────
    { name: "MongoDB", category: "Databases", proficiency: 80 },

    // ── Tools & DevOps ─────────────────────────────────────
    { name: "Git & GitHub", category: "Tools & DevOps", proficiency: 82 },
    { name: "VS Code", category: "Tools & DevOps", proficiency: 90 },
];

export const skillsByCategory = skills.reduce(
    (acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    },
    {} as Record<string, Skill[]>
);

export const skillCategories: Skill["category"][] = [
    "Languages",
    "Frontend",
    "Backend",
    "Databases",
    "Tools & DevOps",
];