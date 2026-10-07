import { siteConfig } from '@/config/site';
import {
  Code2,
  Database,
  FileJson,
  GitBranch,
  Globe,
  Layout,
  MessageSquare,
  Monitor,
  Palette,
  PenTool,
  RefreshCw,
  Server,
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

export const projects: Project[] = [
  {
    name: 'Dersly',
    note: 'I teach my own 48 students on this.',
    description:
      'A learning platform I built for my English students. They sign in for homework and materials and take a placement test that sets their level. I manage students, groups and assignments from one place.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'shadcn/ui'],
    liveUrl: 'https://dersly.pro',
    codeUrl: 'https://github.com/molamikedevs/dersly',
    image: '/dersly.png',
  },
  {
    name: 'Estatly',
    note: 'Roles, approvals and server-side tables.',
    description:
      'An internal property management platform for real estate agencies, with role-based permissions, a property approval workflow, optimistic updates and a dashboard powered by Postgres functions.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Supabase',
      'TanStack Query',
      'Tailwind CSS',
    ],
    liveUrl: 'https://estatly-three.vercel.app',
    codeUrl: 'https://github.com/molamikedevs/estatly',
    image: '/estatly.png',
  },
  {
    name: 'TinyMoviez Dashboard',
    note: 'No framework, on purpose.',
    description:
      'A movie dashboard built from scratch on a custom Vanilla JavaScript MVC architecture: pagination, bookmarks, recent search history and multi-level filtering, all through direct DOM manipulation.',
    stack: ['Vanilla JavaScript', 'OOP', 'MVC Architecture', 'TMDB API'],
    liveUrl: 'https://tiny-moviez-five.vercel.app',
    codeUrl: 'https://github.com/molamikedevs/tiny-moviez',
    image: '/tiny-movie.png',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'Next.js', icon: Globe },
      { name: 'TypeScript', icon: Terminal },
      { name: 'JavaScript', icon: FileJson },
      { name: 'HTML5/CSS3', icon: Layout },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'Responsive Design', icon: Monitor },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'REST APIs', icon: Zap },
      { name: 'Appwrite', icon: Database },
      { name: 'Supabase', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'PostgreSQL', icon: Database },
      { name: 'TanStack Query', icon: RefreshCw },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GitBranch },
      { name: 'Vercel', icon: Triangle },
      { name: 'Figma', icon: PenTool },
      { name: 'VS Code', icon: FileJson },
      { name: 'Postman', icon: MessageSquare },
    ],
  },
];
