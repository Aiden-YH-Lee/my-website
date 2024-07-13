import project2 from "../assets/projects/SPOTBNB.png";
import project1 from "../assets/projects/Website.png";
import project3 from "../assets/projects/Chingus.png";

export const HERO_CONTENT = `I am a junior at the University of Pennsylvania's School of Engineering and Applied Sciences studying Computer Science and Cognitive Science. I am interested in the intersection of software engineering and artificial intelligence and utilizing these technologies to make a positive impact on our real-world. I'm enthusiastic about backend, database, and large language models. Thinking education is a field with great potential for such breakthroughs, I've previously worked at AI-edutech companies and am looking for other interesting fields to explore. Outside work, I love playing keys, jamming with my band, producing music, going to concerts, and traveling around the world.`


export const ABOUT_TEXT = `I was born in Seoul, South Korea and finished high school there. I also lived in Singapore for 4 years, where I learned to appreciate the diversity of cultures and the importance of global perspectives. With the goal to search for my passion, learn from bright minded individuals, and gain a broader view of the world I live in, I decided to further my education at the University of Pennsylvania. At Penn, I've had the privilege to participate in numerous activities/clubs from jazz ensembles to academic clubs such as Wharton Undergraduate Finance Club. For courses, I've taken a variety of classes, such as Data Structures and Algorithms, Database and Information systems, Scalable and Cloud Computing. `;



export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "AI Engineering Intern",
    company: "Uniquify Inc",
    description: `Developing an ML system to predict equipment failures and schedule maintenance, improving uptime and reducing costs.`,
    technologies: ["Python", "PyTorch", "Pandas", "NumPy"],
  },
  {
    year: "June 2024 - Present",
    role: "Software Development Intern",
    company: "Weavers Brain",
    description: `Led the development of a third-party chatbot assistant for an English learning app, integrating OpenAI API, FastAPI, and PostgreSQL to enhance user engagement with personalized reminders, review notes, and intelligent Q&A capabilities.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "May 2023 - August 2023",
    role: "AI Engineering Intern",
    company: "Riiid",
    description: `Spearheaded quality control framework development of Q&A chatbot service that garnered 20k+ responses through Python, Pandas, Numpy, and OpenAI API; improved correlation rate from 30% to 90%. Initiated creation of answer analyzer using OpenAI API and Python to categorize responses for future feature development. Developed score extractor and validator for 500+ student data through OCR engines Python, OpenAI API, and Google Sheets API to automate manual labor; enhanced work speed for business development employees by 80%.`,
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    year: "May 2021 - November 2022",
    role: "Sergeant",
    company: "Republic of Korea Army, 55th Division",
    description: `Managed 2000+ reserve forces for designated region; organized military training exercises; constructed strongholds for reserve force training; aided 1000+ civilians in COVID-19 testing centers and supported construction for flooded areas`,
    technologies: [],
  },
  {
    year: "June 2020 - July 2020",
    role: "Research Intern",
    company: "Proteina, Seoul National University Bioengineering Labratory",
    description: `Created samples and conducted experiments to see the magnetic tweezing effect on DNA hairpins. Studied protein-protein interaction biomarker technology that allows accurate observation of protein cells for cancer examination.
`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Chingus",
    image: project3,
    description:
      "Worked in a team of 4 to build an Instagram-like social media web app with full-fledged features such as hashtag retrieval. Designed database; implemented backend routes and connected to frontend; integrated user authentication, profile picture upload and post creation functionalities.",
    technologies: ["HTML", "CSS", "React.js", "Node.js", "Express", "Axios", "AWS S3", "AWS RDS"],
  },
  {
    title: "SPOTBNB",
    image: project2,
    description:
      "Collaborated in team of 4 to create a website to display query information from Airbnb, Spotify, Ticketmaster datasets. Optimized queries from > 15s runtime to 1s through restructuring, indexing, and caching.",
    technologies: ["HTML", "CSS", "React.js", "Express", "Node.js", "PostgreSQL", "AWS RDS"],
  },
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React.js", "Tailwind CSS", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "Philadelphia, PA ",
  // phoneNo: "+12 4555 666 00 ",
  email: "aidenlee@sas.upenn.edu",
};
