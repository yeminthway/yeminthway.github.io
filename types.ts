
export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
