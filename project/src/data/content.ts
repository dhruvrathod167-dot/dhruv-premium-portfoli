export const PROFILE = {
  name: 'Dhruv',
  monogram: 'DR',
  role: 'Python Full Stack Developer & AI Application Developer',
  location: 'Ahmedabad, India',
  email: 'dhruvrathod167@gmail.com',
  github: 'https://github.com/dhruv-dev',
  linkedin: 'https://linkedin.com/in/dhruv-dev',
};

export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  stack: string[];
  description: string;
  image: string;
  accent: string;
  challenge: string;
  approach: string;
  solution: string;
  features: string[];
  outcome: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'kairn',
    index: '01',
    name: 'KAIRN',
    tagline: 'Architecture, Interiors & Materiality',
    category: 'Client Project',
    year: '2026',
    role: 'Full Stack Development',
    stack: ['Django', 'React', 'GSAP', 'Lenis'],
    description:
      'A refined digital experience designed around architecture, interiors, materiality, atmosphere and visual storytelling.',
    image:
      '/Hello.png',
    accent: '#C9A97A',
    external: true,
    link: 'https://luxury-architecture-studio.onrender.com/',
  },
  {
    id: 'luxe-atelier',
    index: '02',
    name: 'LUXE ATELIER',
    tagline: 'Luxury Fashion',
    category: 'Client Project',
    year: '2026',
    role: 'E-Commerce Development',
    stack: ['Django', 'React', 'REST API'],
    description:
      'A premium luxury fashion e-commerce platform with sophisticated brand presentation and seamless shopping experience.',
    image: '/Luxury Fashion.png',
    accent: '#E8DCC8',
    external: true,
    link: 'https://luxury-brand-showcase-good.onrender.com/',
  },
  {
    id: 'ai-app',
    index: '03',
    name: 'AI APPLICATION',
    tagline: 'AI-Powered Web Application',
    category: 'AI / Full Stack',
    year: '2024',
    role: 'AI Application Developer',
    stack: ['Python', 'FastAPI', 'OpenAI API', 'Gemini API', 'React'],
    description:
      'An AI-powered web application built around a conversation interface, workflow automation and practical API integration.',
    image:
      'https://images.pexels.com/photos/17194838/pexels-photo-17194838.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: '#FF6338',
    challenge:
      'Integrate modern AI capabilities into a useful application with a clean conversation interface and reliable backend orchestration.',
    approach:
      'A FastAPI backend orchestrating AI API calls with streaming responses, paired with a React frontend built around a focused conversation experience.',
    solution:
      'Built a streaming chat interface, prompt engineering pipeline, context handling and automation workflows — with the backend managing API orchestration and response formatting.',
    features: [
      'Streaming AI conversation interface',
      'Prompt engineering and context management',
      'Multi-provider support (OpenAI / Gemini)',
      'Workflow automation with structured outputs',
      'Response history and session handling',
    ],
    outcome:
      'A working AI application that turns API integration into a usable product with a clean, responsive conversation interface.',
  },
  {
    id: 'apex',
    index: '04',
    name: 'APEX',
    tagline: 'Premium Automotive Experience',
    category: 'Frontend / Motion',
    year: '2025',
    role: 'Frontend Developer',
    stack: ['React', 'Next.js', 'GSAP', 'TypeScript'],
    description:
      'A high-end automotive showcase built around visual storytelling, motion and a premium interface experience.',
    image:
      'https://images.pexels.com/photos/30706152/pexels-photo-30706152.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: '#FF4D24',
    challenge:
      'Create a visually striking automotive experience that uses motion and storytelling without hurting performance or usability.',
    approach:
      'A React and Next.js frontend with GSAP-driven motion, focused on large imagery, scroll choreography and a refined interface.',
    solution:
      'Built a cinematic showcase with scroll-driven reveals, large editorial imagery, smooth transitions and a responsive layout that holds up across devices.',
    features: [
      'Scroll-driven cinematic reveals',
      'Large editorial image compositions',
      'Smooth page transitions',
      'Responsive layout for all viewports',
      'Performance-conscious animation',
    ],
    outcome:
      'A premium automotive experience that demonstrates how motion and storytelling can elevate a frontend without sacrificing usability.',
  },
  {
    id: 'salon',
    index: '05',
    name: 'SALON',
    tagline: 'Modern Business Website',
    category: 'Web / Business',
    year: '2025',
    role: 'Web Developer',
    stack: ['HTML', 'CSS', 'JavaScript', 'Django'],
    description:
      'A modern business website for a salon, focused on responsive design, service presentation and appointment-oriented UX.',
    image:
      'https://images.pexels.com/photos/13068380/pexels-photo-13068380.jpeg?auto=compress&cs=tinysrgb&w=1600',
    accent: '#B89B7A',
    challenge:
      'Build a clean, responsive business website that presents services clearly and guides visitors toward booking an appointment.',
    approach:
      'A Django-backed site with a simple, responsive frontend focused on service presentation, clear calls to action and a smooth booking flow.',
    solution:
      'Implemented a service catalog, team presentation, an appointment inquiry flow and a responsive layout — all manageable through the Django admin.',
    features: [
      'Service catalog with clear presentation',
      'Appointment inquiry flow',
      'Team and about sections',
      'Django admin for content updates',
      'Fully responsive design',
    ],
    outcome:
      'A clean, working business website that gives the salon a professional online presence and a straightforward path to bookings.',
  },
];

export const EXPERTISE = [
  {
    num: '01',
    title: 'Full Stack Web Applications',
    desc: 'End-to-end web apps with Django or FastAPI backends and React frontends.',
    tech: ['Django', 'FastAPI', 'React', 'MySQL'],
  },
  {
    num: '02',
    title: 'Backend & API Systems',
    desc: 'Robust REST APIs, authentication, data modeling and server architecture.',
    tech: ['Django REST', 'FastAPI', 'JWT', 'PostgreSQL'],
  },
  {
    num: '03',
    title: 'AI-Powered Applications',
    desc: 'Practical AI apps with conversation interfaces, automation and structured outputs.',
    tech: ['OpenAI', 'Gemini', 'LangChain', 'Python'],
  },
  {
    num: '04',
    title: 'Modern Frontend Experiences',
    desc: 'Polished, responsive interfaces with motion and thoughtful interactions.',
    tech: ['React', 'Next.js', 'TypeScript', 'GSAP'],
  },
  {
    num: '05',
    title: 'Automation & API Integrations',
    desc: 'Connecting services, automating workflows and integrating third-party APIs.',
    tech: ['Python', 'REST', 'Webhooks', 'Automation'],
  },
  {
    num: '06',
    title: 'Business / SaaS Platforms',
    desc: 'Complete platforms with admin dashboards, user management and data handling.',
    tech: ['Django', 'React', 'MySQL', 'Admin'],
  },
];

export const SERVICES = [
  {
    num: '01',
    title: 'Full Stack Development',
    desc: 'Complete web applications from backend to interface.',
  },
  {
    num: '02',
    title: 'Django / FastAPI Development',
    desc: 'Robust backend systems and REST APIs.',
  },
  {
    num: '03',
    title: 'REST API Development',
    desc: 'Well-structured, documented and secure APIs.',
  },
  {
    num: '04',
    title: 'AI Application Development',
    desc: 'Apps built around AI capabilities and automation.',
  },
  {
    num: '05',
    title: 'AI API Integration',
    desc: 'OpenAI, Gemini and other AI provider integration.',
  },
  {
    num: '06',
    title: 'React / Next.js Development',
    desc: 'Modern, responsive frontend experiences.',
  },
  {
    num: '07',
    title: 'Database & Backend Systems',
    desc: 'Data modeling, queries and server architecture.',
  },
  {
    num: '08',
    title: 'Web Performance & Bug Fixing',
    desc: 'Optimization, debugging and reliability work.',
  },
];

export const PROCESS = [
  { num: '01', title: 'Discover', desc: 'Understand the problem, goals and constraints.' },
  { num: '02', title: 'Define', desc: 'Scope the work, structure and technical approach.' },
  { num: '03', title: 'Design', desc: 'Plan the interface, data flow and architecture.' },
  { num: '04', title: 'Build', desc: 'Implement the backend, frontend and integrations.' },
  { num: '05', title: 'Refine', desc: 'Test, optimize and polish the experience.' },
  { num: '06', title: 'Launch', desc: 'Deploy, verify and hand off the product.' },
];

export const WHY = [
  {
    num: '01',
    title: 'Practical Engineering',
    desc: 'Build solutions that are functional, maintainable and scalable.',
  },
  {
    num: '02',
    title: 'Full-Stack Perspective',
    desc: 'Understand both backend architecture and frontend experience.',
  },
  {
    num: '03',
    title: 'AI-Ready Development',
    desc: 'Integrate modern AI capabilities into useful applications.',
  },
  {
    num: '04',
    title: 'Detail-Oriented UI',
    desc: 'Focus on clean interfaces and thoughtful interactions.',
  },
];

export const JOURNEY = [
  { period: '2025 — Present', title: 'Python Full Stack / AI Development', desc: 'Building full stack web apps and AI-powered applications.' },
  { period: '2024 — Present', title: 'Full Stack Web Development', desc: 'Developing complete web applications with Django and React.' },
  { period: '2024', title: 'Selected Web Projects', desc: 'Delivered business and frontend web projects.' },
];

export const TECH = [
  'Python', 'Django', 'FastAPI', 'React', 'Next.js', 'JavaScript',
  'REST API', 'MySQL', 'SQLite', 'Git', 'GitHub', 'OpenAI', 'Gemini', 'LangChain',
];

export const AI_CAPS = [
  'Python', 'Django', 'FastAPI', 'REST APIs', 'OpenAI API', 'Gemini API',
  'AI Chatbots', 'Prompt Engineering', 'AI Automation', 'LangChain',
];

export const CLIENTS = [
  {
    num: '01',
    name: 'KAIRN',
    service: 'Architecture / Interiors / Materiality',
    year: '2026',
    description: 'A refined digital experience designed around architecture, interiors, materiality, atmosphere and visual storytelling',
    link: 'https://luxury-architecture-studio.onrender.com/',
    external: true,
    category: 'Client Project',
    role: 'Full Stack Development',
    challenge: 'Create a sophisticated digital presence for an architecture-focused brand while maintaining performance and intuitive navigation.',
    approach: 'A clean visual hierarchy with cinematic motion, paired with a modular Django architecture and a headless React frontend for full control over the experience.',
    solution: 'Built a headless setup with Django REST Framework powering a React frontend. Projects are managed through a custom admin with rich media handling, and the frontend uses GSAP and Lenis for editorial scrolling.',
    features: [
      'Editorial project archive with filtering',
      'Custom Django admin for content management',
      'Cinematic scroll-driven page transitions',
      'Responsive image pipeline with lazy loading',
      'Contact workflow with inquiry management',
    ],
    outcome: 'A polished, fast studio site that gives the brand a premium online presence and makes project management straightforward from the admin.',
    feedback: 'Client feedback will be added here.',
    collaboration: 'Premium architecture studio collaboration focused on digital excellence and brand representation.'
  },
  {
    num: '02',
    name: 'VELORA',
    service: 'E-Commerce Development',
    year: '2024',
    description: 'Modern e-commerce platform with clean shopping experience',
    link: '#work-velora'
  },
  {
    num: '03',
    name: 'AI APPLICATION',
    service: 'AI Integration',
    year: '2024',
    description: 'AI-powered web application with conversation interface',
    link: '#work-ai-app'
  },
  {
    num: '04',
    name: 'APEX',
    service: 'Frontend Development',
    year: '2025',
    description: 'Premium automotive showcase with scroll-driven motion',
    link: '#work-apex'
  },
  {
    num: '05',
    name: 'SALON',
    service: 'Web Development',
    year: '2025',
    description: 'Modern salon business website with responsive design',
    link: '#work-salon'
  }
];

export const FAQS = [
  {
    q: 'What type of projects do you work on?',
    a: 'Full stack web applications, backend and API systems, AI-powered applications, modern frontend experiences and business websites — primarily with Django, FastAPI and React.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. I work remotely and collaborate with clients across time zones. Communication and delivery are handled through clear, async-friendly workflows.',
  },
  {
    q: 'Can you integrate AI APIs?',
    a: 'Yes. I build AI-powered applications with OpenAI, Gemini and other providers — including conversation interfaces, automation workflows and structured outputs.',
  },
  {
    q: 'Can you build complete full-stack applications?',
    a: 'Yes. From backend and database design to the frontend interface and deployment, I build complete, working applications end to end.',
  },
  {
    q: 'What technologies do you use?',
    a: 'Python, Django, FastAPI, React, Next.js, REST APIs, MySQL, and AI providers like OpenAI and Gemini. I choose the stack based on the project needs.',
  },
  {
    q: 'How does your development process work?',
    a: 'Discover, Define, Design, Build, Refine, Launch. I start by understanding the problem, then scope the work, build it, polish it and hand it off.',
  },
];
