// Facts the assistant may use that are not already on the page.
// It repeats whatever is written here to visitors, so every line must be
// something I can back up in an interview. No phone number, no estimates.
export const knowledge = {
  person: {
    name: 'Lamin Foday',
    alsoKnownAs: 'Molamike',
    role: 'React and Next.js developer',
    lookingFor:
      'A junior developer role, remote or on-site. Open to relocation.',
    developerSince: 'January 2024, through freelance work and his own products',
    approach:
      'Self-taught, with strong fundamentals in JavaScript, object-oriented programming and software architecture. Works through feature branches and pull requests.',
  },
  notes: [
    'Dersly is live at dersly.pro and is used by his own private English students, online and in person.',
    'He built TinyMoviez Dashboard without a framework on purpose, to prove he understands the code beneath the frameworks.',
    'His CV is linked from the About section of this site.',
  ],
  education: [
    'BSc Computer Science, University of the People, 2024 to 2028 (in progress)',
    'NIIT Diploma in System Support and Maintenance, Blue Crest College, 2019 to 2021',
  ],
  certifications: [
    'Next.js App Router Fundamentals, Vercel (November 2025)',
    'The Ultimate React Course, Udemy',
    'The Complete JavaScript Course, Udemy',
    'Next.js Course, JavaScript Mastery',
  ],
  experience: [
    {
      role: 'Freelance Web Developer',
      where: 'Self-employed, remote',
      when: 'January 2024 to present',
      summary:
        'Builds responsive web applications for clients and his own products with React, Next.js and TypeScript. Includes a portfolio and booking site for a professional photographer.',
    },
    {
      role: 'English Teacher (part-time)',
      where: 'Kindergartens and private students',
      when: 'May 2024 to present',
      summary:
        'Teaches English part-time. His private students use Dersly, the platform he built.',
    },
    {
      role: 'English Instructor',
      where: 'BFC English Course',
      when: 'July 2022 to April 2024',
      summary: 'Taught English at a language centre.',
    },
    {
      role: 'Information Technology Assistant',
      where:
        'Transnational SL Limited (MultiChoice / DStv), Freetown, Sierra Leone',
      when: 'February 2018 to July 2022',
      summary:
        'Supported staff with day-to-day technical issues and trained colleagues on the tools they used. Joined the company as a Dispatcher in June 2014.',
    },
  ],
} as const;
