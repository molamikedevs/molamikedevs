import { siteConfig } from '@/config/site';

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
