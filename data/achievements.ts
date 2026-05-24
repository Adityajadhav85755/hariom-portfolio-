export interface Achievement {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
}

export const achievements: Achievement[] = [
  {
    id: "investors-instinct",
    title: "1st Place - Investors Instinct (100+ teams)",
    icon: "trophy",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "finance-model",
    title: "1st Place - Finance Model Competition (50+ teams)",
    icon: "medal",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "vsearch-research",
    title: "2nd Place - VSearch Research Paper Competition (50+ teams)",
    icon: "award",
    colorClass: "text-green-600 dark:text-green-400",
  },
  {
    id: "bplan-vanguard",
    title: "Top-10 - B-Plan: Vanguard (90+ teams)",
    icon: "trophy",
    colorClass: "text-purple-600 dark:text-purple-400",
  },
  {
  id: "guest-speaker",
  title: "Invited as Guest Speaker - Finance Model Competition (50+ teams)",
  icon: "mic",
  colorClass: "text-blue-600 dark:text-blue-400",
}
];

export const achievementTags = ["Finance Competitions","Research", "Leadership"];
