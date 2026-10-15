import { siteConfig } from '@/config/site';
import {
  Boxes,
  Code2,
  Component,
  Database,
  FileJson,
  Gauge,
  GitBranch,
  Globe,
  HardDrive,
  Leaf,
  ListChecks,
  type LucideIcon,
  Package,
  Palette,
  RefreshCw,
  Server,
  ShieldCheck,
  Terminal,
  Triangle,
  Zap,
} from 'lucide-react';

export const links = [
  { label: 'GitHub', href: siteConfig.links.github },
  { label: 'LinkedIn', href: siteConfig.links.linkedin },
  { label: 'Email', href: `mailto:${siteConfig.email}` },
  ...(siteConfig.cv.available
    ? [{ label: 'CV', href: siteConfig.cv.path }]
    : []),
];

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type Project = {
  name: string;
  note: string;
  description: string;
  decision?: string;
  demoNote?: string;
  stack: string[];
  links: ProjectLink[];
  desktop?: ProjectImage;
  phone?: ProjectImage;
};

export const projects: Project[] = [
  {
    name: 'Dersly',
    note: 'I teach my own 48 students on this.',
    description:
      'A learning platform I built for my English students. They sign in for homework and materials and take a placement test that sets their level. I manage students, groups and assignments from one place.',
    demoNote: 'Real students use Dersly, so the demo runs on sample data.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'shadcn/ui'],
    links: [
      {
        label: 'View teacher demo',
        href: 'https://dersly.pro/demo/teacher',
        primary: true,
      },
      {
        label: 'View student demo',
        href: 'https://dersly.pro/demo/student',
        primary: true,
      },
      {
        label: 'Read the code',
        href: 'https://github.com/molamikedevs/dersly',
      },
    ],
    desktop: {
      src: '/dersly.png',
      width: 1440,
      height: 900,
      alt: "Dersly teacher overview: today's lessons, the next lesson card and upcoming classes",
    },
  },
  {
    name: 'Estatly',
    note: 'Roles, approvals and server-side tables.',
    description:
      'An internal property management platform for real estate agencies, with role-based permissions, a property approval workflow, optimistic updates and a dashboard powered by Postgres functions.',
    decision:
      'Every permission lives in Postgres row-level security, and forms are checked with Zod in the browser and again on the server. Hiding a button is never the only guard.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Supabase',
      'TanStack Query',
      'Tailwind CSS',
    ],
    links: [
      {
        label: 'Open the live app',
        href: 'https://estatly-three.vercel.app',
        primary: true,
      },
      {
        label: 'Read the code',
        href: 'https://github.com/molamikedevs/estatly',
      },
    ],
    desktop: {
      src: '/estatly.png',
      width: 1440,
      height: 900,
      alt: 'Estatly agency dashboard: property, client and viewing totals with charts of listings by status and the client pipeline',
    },
  },
  {
    name: 'TinyMoviez Dashboard',
    note: 'No framework, on purpose.',
    description:
      'A movie dashboard built from scratch on a custom Vanilla JavaScript MVC architecture: pagination, bookmarks, recent search history and multi-level filtering, all through direct DOM manipulation.',
    decision:
      'I left out frameworks on purpose to show I can structure an app myself, with object-oriented models, views and controllers and no library doing that work for me.',
    stack: ['Vanilla JavaScript', 'OOP', 'MVC Architecture', 'TMDB API'],
    links: [
      {
        label: 'Open the live app',
        href: 'https://tiny-moviez-five.vercel.app',
        primary: true,
      },
      {
        label: 'Read the code',
        href: 'https://github.com/molamikedevs/tiny-moviez',
      },
    ],
    desktop: {
      src: '/tiny-movie.png',
      width: 1440,
      height: 900,
      alt: 'TinyMoviez home screen: a featured title, trending TV shows and a coming soon list',
    },
  },
];

type Skill = {
  name: string;
  icon: LucideIcon;
};

type SkillGroup = {
  label: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'Next.js', icon: Globe },
      { name: 'TypeScript', icon: Terminal },
      { name: 'JavaScript', icon: FileJson },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'shadcn/ui', icon: Component },
      { name: 'TanStack Query', icon: RefreshCw },
      { name: 'React Hook Form', icon: ListChecks },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'PostgreSQL', icon: Database },
      { name: 'Supabase', icon: Database },
      { name: 'REST APIs', icon: Zap },
      { name: 'Zod', icon: ShieldCheck },
      { name: 'MongoDB', icon: Leaf },
      { name: 'Appwrite', icon: Boxes },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GitBranch },
      { name: 'Vercel', icon: Triangle },
      { name: 'pgAdmin', icon: HardDrive },
      { name: 'Vite', icon: Gauge },
      { name: 'pnpm', icon: Package },
    ],
  },
];
