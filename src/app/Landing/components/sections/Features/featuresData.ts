export type Feature = {
  id: number;
  title: string;
  description: string; // Use \n to separate parts
  short: string;
  icon: string;
};

export const features: Feature[] = [
  {
    id: 0,
    title: "AI-Powered Semantic Search",
    short: "Find files using natural language.",
    description: `No more digging through folders or typing exact names.\nSortify's AI understands your queries in plain English.\nWhether you say "my income tax pdf from 2022" or "that image I edited last week", it gets you the right file instantly.\nOur smart engine learns from your habits, constantly refining search precision over time.\nSemantic Search saves you time, reduces frustration, and transforms the way you retrieve information.`,
    icon: "/icons/search.png",
  },
  {
    id: 1,
    title: "Smart AI-Driven Auto Tagging",
    short: "Automatically tag files with precision.",
    description: `Manual tagging is a thing of the past.\nSortify reads your files, understands content and context, and assigns smart, meaningful tags automatically.\nBe it a research paper, invoice, design mockup, or vacation photo—it gets categorized perfectly.\nIt learns your personal file-handling style, adjusting and improving tagging accuracy with time.\nYour digital life just got way more organized—without lifting a finger.`,
    icon: "/icons/search.png",
  },
  {
    id: 2,
    title: "Intelligent Sorting & Organization",
    short: "Your files. Auto-sorted. Always.",
    description: `Files are constantly being added—but your workspace stays effortlessly clean.\nSortify's intelligent system groups your files by project, topic, timeline, or usage.\nIt considers deadlines, frequency of access, and file relevance to decide what you see first.\nFrom chaotic folders to streamlined dashboards, experience next-level productivity.\nLet Sortify do the heavy lifting while you focus on what really matters.`,
    icon: "/icons/search.png",
  },
  {
    id: 3,
    title: "Proactive Smart Notifications",
    short: "Get alerted before you forget.",
    description: `Never miss a deadline again.\nSortify keeps track of your important files and nudges you when it matters most.\nGet alerts for license renewals, contract expirations, or files that need your attention.\nIt’s like having a proactive assistant who knows your schedule better than you.\nStay informed, stay ahead—and stay stress-free with Sortify’s smart reminders.`,
    icon: "/icons/search.png",
  },
];
