// utils/iconMap.ts
import type { LucideProps } from "lucide-react";
import {
  Search,
  TrendingUp,
  UserCheck,
  FileText,
  Brain,
  Users,
  Clock,
  Image,
  Sparkles,
} from "lucide-react";

import { SiCanva, SiPowers } from "react-icons/si";

export const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  // Financial / Excel - using lucide icon
  excel: Brain,

  // Technical Tools
  microsoft: Brain,
  powerbi: SiPowers,
  canva: SiCanva,

  // AI / Generic
  brain: Brain,
  image: Image,
  sparkles: Sparkles,

  // Soft Skills
  users: Users,
  clock: Clock,

  // Research
  search: Search,
  "trending-up": TrendingUp,
  "user-check": UserCheck,
  "file-text": FileText,
};
