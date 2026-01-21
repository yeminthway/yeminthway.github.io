
import { NavItem, ExperienceItem, SkillCategory } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: 'Mobile Software Repair Technician',
    company: 'Self-Employed / Freelance',
    period: '2021 - Present',
    description: [
      'Specialized in system-level operations including firmware flashing and kernel-level configurations.',
      'Performing advanced device unlocking, FRP bypassing, and bootloader management across multiple Android platforms.',
      'Diagnosing and resolving complex software bricking issues and system-level conflicts.',
    ],
    skills: ['Android Systems', 'Firmware Flashing', 'Security Bypassing', 'Hardware-Software Interfacing'],
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Development',
    skills: ['JavaScript', 'TypeScript', 'React', 'Python', 'PHP', 'Tailwind CSS'],
  },
  {
    title: 'Specialized',
    skills: ['Cybersecurity Basics', 'Android Internals', 'Linux CLI', 'Version Control (Git)'],
  },
  {
    title: 'Interests',
    skills: ['AI/ML Fundamentals', 'Backend Architecture', 'Network Security'],
  },
];
