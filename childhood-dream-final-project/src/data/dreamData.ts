/*
  Name: Woodna Adrien
  Date: May 2026
  Assignment: Week 7 Final Project
  Description:
  Temporary stored data used by the final project application.
*/

export type DreamSkill = {
  id: number;
  skillName: string;
  category: string;
  importance: string;
};

export const startingSkills: DreamSkill[] = [
  {
    id: 1,
    skillName: "Debugging",
    category: "Technical",
    importance: "Helps identify errors, fix problems, and keep the app running smoothly."
  },
  {
    id: 2,
    skillName: "Creativity",
    category: "Personal",
    importance: "Helps turn ideas into designs, layouts, and user-friendly web pages."
  },
  {
    id: 3,
    skillName: "Leadership",
    category: "Professional",
    importance: "Helps organize work, support others, and keep projects moving forward."
  },
  {
    id: 4,
    skillName: "Communication",
    category: "Professional",
    importance: "Helps explain technical ideas clearly and work well with a team."
  }
];

export const dreamFacts: string[] = [
  "I have always liked work that combines creativity, purpose, and problem-solving.",
  "Software development gives me a way to build tools that can make tasks easier for others.",
  "Learning to code takes patience, consistency, and the confidence to keep trying when something breaks.",
  "My dream has grown into a goal: becoming a software developer who creates useful and thoughtful applications."
];