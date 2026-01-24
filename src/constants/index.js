import project2 from "../assets/projects/SPOTBNB.png";
import project1 from "../assets/projects/Website.png";
import project3 from "../assets/projects/Chingus.png";
import project4 from "../assets/projects/VidToScore.png";

export const HERO_CONTENT = `I am a senior pursuing a Master's in Robotics (AI focus) and Bachelor's in Computer Science at the University of Pennsylvania. I'm passionate about the intersection of software engineering and artificial intelligence. Outside work, I play keys, jam with my band, produce music, and travel the world.`;

export const ABOUT_TEXT = `I was born in Seoul, South Korea and lived in Singapore for 4 years, where I learned to appreciate cultural diversity. At Penn, I've been a Teaching Assistant for AI courses, co-founded a startup that won Best AI for Business at Wharton Venture Lab ($10k prize), and contributed to research published at NeurIPS. I've been a part of numerous clubs such as Penn Jazz Combo, Kapacity (rock band), and Wharton Undergraduate Finance Club. I've interned at numerous companies, working on a diverse array of projects from compilers to chatbots.`;

export const EDUCATION = [
  {
    school: "University of Pennsylvania",
    degrees: [
      {
        title: "M.S.E. in Robotics, AI Focus",
        gpa: "4.0/4.0",
        expected: "Dec 2026"
      },
      {
        title: "B.A.S. in Computer Science, Minor in Data Science",
        gpa: "3.95/4.0",
        expected: "May 2026"
      }
    ]
  },
  {
    school: "Korean Minjok Leadership Academy",
    degrees: [
      {
        title: "Youngjae Merit Scholar",
        gpa: "5.0/5.0",
        expected: "Feb 2020"
      }
    ]
  }
];

export const AWARDS = [
  {
    title: "Wharton Venture Lab Startup Challenge",
    award: "Best AI for Business Team Award",
    prize: "$10,000",
    year: "March 2024",
    description: "Co-founded and pitched Walnut Research, an AI evaluation company for LLM developers which standardizes and streamlines evaluation process for foundational and multi-step models."
  }
];



export const EXPERIENCES = [
  {
    year: "May 2025 - August 2025",
    role: "Software Engineer Intern",
    company: "Sigma Computing",
    location: "San Francisco, CA",
    description: `Delivered high-demand compiler features now driving 5k daily active users. Designed pipe-style SQL syntax support for BigQuery and Databricks, reducing runtime and SQL length by 30%. Contributed to browser fetch-management logic, reducing redundant query recalculations by 20%. Built an AI workbook migrator that converts competitor dashboards to Sigma workbooks.`,
    technologies: ["Rust", "TypeScript", "Protobufs", "Docker", "SQL"],
  },
  {
    year: "August 2024 - May 2025",
    role: "Research Assistant",
    company: "Drexel University METLAB",
    location: "Philadelphia, PA",
    description: `Processed 20,000+ audio files for predominant instrument classification. Experimented with pretraining and layer-freezing strategies. Created OpenPIR, an enhanced dataset with improved class balance. Co-authored a paper accepted at NeurIPS 2025 Workshop on AI for Music.`,
    technologies: ["Python", "PyTorch", "Scikit-learn", "Huggingface"],
  },
  {
    year: "June 2024 - August 2024",
    role: "Software Development Intern",
    company: "Weavers Brain",
    location: "Seoul, South Korea",
    description: `Led development of a personalized chatbot assistant for English education app. Architected PostgreSQL database and FastAPI backend deployed on Linux to support 1k+ daily active users. Built personalized reminders, weekly quizzes, and intelligent Q&A, improving engagement by 20%.`,
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "OpenAI"],
  },
  {
    year: "May 2023 - August 2023",
    role: "AI Engineering Intern",
    company: "Riiid",
    location: "Seoul, South Korea",
    description: `Spearheaded quality control framework for Q&A chatbot that garnered 100,000+ responses; improved correlation rate from 30% to 90%. Created answer analyzer to categorize responses. Developed score extractor for 500+ student data using OCR, enhancing business dev speed by 80%.`,
    technologies: ["Python", "Pandas", "NumPy", "OpenAI", "Scikit-learn"],
  },
  {
    year: "May 2021 - November 2022",
    role: "Squad Leader",
    company: "Republic of Korea Army, 55th Division",
    location: "South Korea",
    description: `Managed 2000+ reserve forces; organized military training; aided COVID-19 testing centers and supported construction for flooded areas.`,
    technologies: [],
  },
];

export const LEADERSHIP = [
  {
    year: "January 2025 - Present",
    role: "Teaching Assistant",
    organization: "CIS 5210: Intro to Artificial Intelligence",
    description: "Developed assignments and course materials from scratch; led weekly recitations; organized TA meetings."
  },
  {
    year: "September 2023 - Present",
    role: "Project Leader, Consulting Committee",
    organization: "Wharton Korea Undergraduate Business Society",
    description: "Led a team of 3 to conduct comprehensive research on university MBA programs for liquidMBA."
  }
];

export const PROJECTS = [
  {
    title: "VidToScore",
    image: project4,
    description:
      "Built a full-stack web app that extracts sheet music from YouTube videos into PDF format. Features video cropping, time-range selection, frame extraction at custom intervals, and customizable PDF layouts with A4 formatting.",
    technologies: ["React", "TypeScript", "Flask", "Python", "OpenCV", "yt-dlp", "Docker"],
    github: "https://github.com/Aiden-YH-Lee/vidtoscore",
    demo: null,
  },
  {
    title: "Netschingus",
    image: project3,
    description:
      "Led a team of 4 to build an Instagram-like social media web app with features like hashtag retrieval, user authentication, profile and post creation. Designed database schema and implemented backend routes.",
    technologies: ["Node.js", "Express", "MySQL", "AWS RDS", "AWS S3", "React"],
    github: "https://github.com/Aiden-YH-Lee/chingus",
    demo: null,
  },
  {
    title: "SPOTBNB",
    image: project2,
    description:
      "Directed a team of 4 in developing an interactive data portal integrating 1M+ rows from Airbnb, Spotify, and Ticketmaster. Reduced query runtime from 15s to <1s through restructuring, indexing, and caching.",
    technologies: ["Node.js", "Express", "PostgreSQL", "AWS RDS", "React"],
    github: "https://github.com/Aiden-YH-Lee/cis5500spotify",
    demo: null,
  },
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information with smooth animations.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/Aiden-YH-Lee/my-website",
    demo: "https://aiden-yh-lee.vercel.app",
  },
];

export const SKILLS = [
  "Java", "Python", "Rust", "JavaScript", "TypeScript", "SQL", "OCaml", "Kotlin",
  "React", "Node.js", "FastAPI", "AWS", "Docker", "Git", "Linux", "PostgreSQL", "MongoDB"
];

export const CONTACT = {
  address: "Philadelphia, PA ",
  // phoneNo: "+12 4555 666 00 ",
  email: "aidenlee@sas.upenn.edu",
};
