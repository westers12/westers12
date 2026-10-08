// All personal content for the site and the CV lives here.
// Anything left as `undefined` (or marked `tbd`) renders as a yellow "TBD" marker,
// so it's easy to spot what still needs real content.

export const site = {
  partNumber: 'SW-2026',
  revision: 'October 2026',
  domain: 'semwester.nl',
};

export const person = {
  name: 'Sem Wester',
  role: 'Embedded & software engineering student',
  summary:
    'HBO-ICT student at the Amsterdam University of Applied Sciences (HvA), Technical Computing track, focused on robotics and embedded systems. Three years of professional .NET development alongside my studies.',
  email: 'sem514@hotmail.com',
  location: 'Opmeer, Noord-Holland',
  linkedin: undefined as string | undefined, // e.g. 'https://www.linkedin.com/in/...'
  github: undefined as string | undefined, // e.g. 'https://github.com/...'
  photo: undefined as string | undefined, // e.g. '/img/sem.jpg' (put the file in public/img/)
  languages: ['Dutch (native)', 'English (good)'],
  extras: ['Driving licence (B)'],
};

// Section 1, Features: short, factual highlights.
export const features = [
  'Three years as a .NET developer at Het Keukenmagazijn, next to a full-time degree',
  'Gap year spent working full-time (40 hours a week) as a .NET developer',
  'First-year diploma (propedeuse) completed in one year',
  'Internship at Rolan Robotics (2025)',
  'Minor at Queensland University of Technology, Brisbane (2025)',
  'Used to a high workload: 24 hours of work a week alongside full-time study',
];

// Section 2, Applications: what kind of role I'm looking for.
export const lookingFor = {
  roles: undefined as string[] | undefined, // e.g. ['Graduation internship in embedded or robotics', 'Part-time .NET role']
  availableFrom: undefined as string | undefined, // e.g. 'February 2027'
};

// Section 3, Description.
export const description = [
  'I started working young, and it shows in how I work: professionally, reliably and comfortable with responsibility. What began as a summer job in a large warehouse for kitchen appliances turned into a permanent role as weekend shift lead. From there I moved into the IT department, where I build internal .NET applications that support and automate the logistics.',
  'Now I am taking that software experience down to the hardware: microcontrollers, industrial IoT and robotics. I like the whole chain, from the firmware on an ESP32 to the service and the container it reports to.',
  'I work well in a team and get things done on my own. Outside work and study I play football at VVS’46 and head to the mountains for winter sports whenever I can.',
];

// Section 4, Specifications. `where` left undefined renders as TBD.
export type Skill = { name: string; where?: string };
export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Embedded & robotics',
    skills: [
      { name: 'C / C++', where: 'HvA Technical Computing' },
      { name: 'ESP32 (ESP-IDF and Arduino)', where: 'HvA Technical Computing' },
      { name: '(Industrial) IoT', where: 'HvA Technical Computing' },
    ],
  },
  {
    title: 'Software',
    skills: [
      { name: 'C# / .NET', where: 'Het Keukenmagazijn, since 2023: internal logistics applications' },
      { name: 'Java', where: 'HvA Technical Computing' },
      { name: 'Microsoft Power BI' },
    ],
  },
  {
    title: 'Infrastructure',
    skills: [
      { name: 'Docker' },
      { name: 'nginx' },
      { name: 'IIS' },
      { name: 'Linux' },
    ],
  },
];

// Section 6, Revision history. Newest first, like a real datasheet.
export type Entry = { period: string; title: string; org: string; details?: string };

export const work: Entry[] = [
  {
    period: 'Feb 2025 to Jul 2025',
    title: 'Intern',
    org: 'Rolan Robotics',
    details: undefined,
  },
  {
    period: 'Sep 2023 to now',
    title: 'Junior software developer',
    org: 'Het Keukenmagazijn',
    details:
      'Building and maintaining mostly internal .NET applications. Full-time (40 hours a week) from August 2023 to September 2024, now 24 hours a week next to my studies.',
  },
  {
    period: 'Jul 2020 to Aug 2023',
    title: 'Warehouse employee, later weekend shift lead',
    org: 'Het Keukenmagazijn',
    details:
      'Started as a summer job and grew into leading the weekend shift. Moved on to the IT department to support and automate the logistics processes.',
  },
];

export const education: Entry[] = [
  {
    period: 'Jul 2025 to Nov 2025',
    title: 'Minor (semester abroad)',
    org: 'Queensland University of Technology, Brisbane',
  },
  {
    period: '2022 to now',
    title: 'HBO-ICT, Technical Computing',
    org: 'Amsterdam University of Applied Sciences (HvA)',
    details: 'First-year diploma in one year. Mathematics B crash course, August 2022.',
  },
  {
    period: 'Sep 2021 to Aug 2022',
    title: 'Business Administration',
    org: 'Amsterdam University of Applied Sciences (HvA)',
  },
  {
    period: 'Sep 2016 to Jun 2021',
    title: 'HAVO',
    org: 'Oscar Romero, Hoorn',
  },
];
