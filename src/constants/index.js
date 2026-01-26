import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  nss,
  technovation,
  carrent,
  jobit,
  tripguide,
  threejs,
  diabetes,
  flipsort,
  localmark,
  tufflash,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Prediction and Analysis",
    icon: mobile, // you can change icon if you want
  },
  {
    title: "Mentor",
    icon: backend,
  },
  {
    title: "Data Structures & Algorithms",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Mentor",
    company_name: "Technovation",
    icon: technovation, // replace with relevant icon if you have
    iconBg: "#383E56",
    date: "Jan 2026 - Present",
    points: [
      "Guiding students in ideation and project development.",
      "Mentoring beginner and senior students on AI, web development, and DSA projects.",
      "Helping students implement predictive models for real-world problems.",
      "Providing feedback and support to enhance learning and project quality.",
    ],
  },
  {
    title: "Design Team Member",
    company_name: "NSS",
    icon: nss, // replace with relevant icon if you have
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Worked on social impact projects using design thinking.",
      "Designed solutions for community development and awareness campaigns.",
      "Collaborated with team members to execute initiatives effectively.",
      "Participated in workshops and training sessions to improve design skills.",
    ],
  },
];



const projects = [
  {
    name: "TUF-Flash",
    description:
      "TUF Flash is a personalized DSA revision platform inspired by Striver’s TUF, built to enable efficient and structured learning through topic-wise flashcards, progress tracking, and AI-powered doubt resolution",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "red-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
      {
        name: "gemini",
        color: "yellow-text-gradient",
      },
    ],
    image: tufflash,
    source_code_link: "https://github.com/ananyadwivedi1010/TUF-Flash.git",
  },
  {
    name: "FlipSort",
    description:
      "FlipSort is an AI-powered product integrity and analysis platform for the Flipkart ecosystem that detects fake reviews, flags potential counterfeit products, and analyzes customer sentiment. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "groq-api",
        color: "blue-text-gradient",
      },
    ],
    image: flipsort,
    source_code_link: "https://github.com/ananyadwivedi1010/FlipSortt.git",
  },

  {
    name: "Diabetes Prediction Model",
    description:
      "Web-based system predicting diabetes risk in real-time from patient health parameters. Implemented ML models to give probability, confidence, and risk level",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Regression Models",
        color: "pink-text-gradient",
      },
    ],
    image: diabetes,
    source_code_link: "https://github.com/ananyadwivedi1010/Diabetes-Prediction.git",
  },
  {
    name: "LocalMark",
    description:
      "Framework for secure digital image copyright protection applied to diabetic retinopathy images. Achieved a balance between imperceptibility, payload capacity, and robustness.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pytorch",
        color: "green-text-gradient",
      },

    ],
    image: localmark,
    source_code_link: "https://github.com/ananyadwivedi1010/LocalMark",
  },
];

export { services, technologies, experiences, projects };
