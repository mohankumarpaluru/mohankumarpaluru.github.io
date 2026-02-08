
export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter: string;
  instagram: string;
  telegram: string;
  whatsapp: string;
}

export interface Contacts {
  email: string;
  phone: string;
  location: string;
  social: SocialLinks;
}

export interface Resume {
  label: string;
  url: string;
}

export interface Bio {
  name: string;
  title: string;
  description: string[];
  contacts: Contacts;
}

export interface TechItem {
  name: string;
  logo: string;
  orbit?: "core" | "logic" | "infra"; // Optional: only for currentTechStack
}

export interface PersonalEndeavor {
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image?: string; // Optional project thumbnail/screenshot
  featured?: boolean; // Featured projects shown larger in Bento Grid
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  url: string;
  excerpt: string;
  image?: string; // Optional blog post image path
  thumbnail?: string; // Optional blog post thumbnail image
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface SectionInfo {
  id: string; // e.g., "01 / SCHEMA"
  title: string;
  subtitle?: string;
  tagline?: string;
  cta?: string;
  // Clarity fields
  label: string;       // Uppercase label e.g. "EXPERIENCE"
  navLabel: string;    // Short label for nav e.g. "Exp"
  clarityHint: string; // Explanatory context
  highlight?: string;  // Word to apply gradient to
}

export interface PortfolioData {
  bio: Bio;
  resume: Resume;
  currentTechStack: TechItem[]; // Current active stack for orbital (12 items)
  completeTechStack: TechItem[]; // Complete tech portfolio for ticker (all items)
  personalEndeavors: PersonalEndeavor[];
  skills: Skill[];
  projects: Project[];
  blogPosts: BlogPost[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  sections: {
    hero: SectionInfo;
    about: SectionInfo;
    experience: SectionInfo;
    projects: SectionInfo;
    knowledge: SectionInfo;
    writing: SectionInfo;
    personal: SectionInfo;
    signal: SectionInfo;
  };
}

export enum PortfolioState {
  HERO = 0,
  ABOUT = 1,
  EXPERIENCE = 2,
  PROJECTS = 3,
  KNOWLEDGE = 4,
  WRITING = 5,
  PERSONAL = 6,
  SIGNAL = 7
}

export const STATE_COUNT = 8;
