import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import reactnativeLogo from './assets/tech_logo/reactnative.png'; // ✅ Fixed name
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import canvaLogo from './assets/tech_logo/canva.png';

// Experience Section Logo's
import NEALogo from './assets/company_logo/NEA_logo.jpg';

// Education Section Logo's
import glaLogo from './assets/education_logo/School_Logo.png';
import bsaLogo from './assets/education_logo/College_Logo.jpg';
import vpsLogo from './assets/education_logo/Nepalaya_logo.png';

// Project Section Logo's
import img1 from './assets/project_logo/Cineworld_Logo.png';
import img2 from './assets/project_logo/NEA_Logo.png';
import img3 from './assets/project_logo/Ping_Logo.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'React Native', logo: reactnativeLogo }, 
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      {name: 'Canva', logo: canvaLogo},
    ],
  },
];


 export const experiences = [
  {
    id: 0,
    img: NEALogo, 
    role: "Software Developer Intern",
    company: "Nepal Electricity Authority (NEA)",
    date: "Feb 2025 - May 2025",
    desc: "Gained hands-on experience in developing and deploying web-based systems, including an MD-Schedule management system and a Ping Monitoring dashboard. Worked with the MERN stack to build secure, user-friendly platforms that improved scheduling efficiency and real-time network monitoring across multiple branches. Strengthened skills in full-stack development, database management, and system optimization for operational needs."
,
    skills: [
      "Leadership",
      "Web Design",
      "Communication",
      "Project Management",
      "Pitch and Presentation",
      "Teamwork",
    ],
  },
  
];


  
  export const education = [
  {
    id: 0,
    img: vpsLogo, 
    school: "Nepalaya College of Information Technology",
    location: "Kalanki, Kathmandu",
    date: "2021 - Present",
    degree: "Bachelor of Science in Computer Science and Information Technology (BSC CSIT)",
    affiliation: "Affiliated to Tribhuvan University",
    grade: "Ongoing",
    desc: "Currently pursuing a Bachelor of Science in Computer Science and Information Technology (BSC CSIT) degree with a focus on software development, data structures, networking, and database management. Actively involved in projects and internships that strengthen practical skills and industry readiness.",
  },
  {
    id: 1,
    img: bsaLogo, 
    school: "The Times International College",
    location: "Dillibazar, Kathmandu",
    date: "Graduated (2017 - 2019)",
    degree: "High School ( Science)",
    grade: "3.07 GPA",
    desc: "Completed high secondary education with a focus on computer science subjects, and IT fundamentals including basic programming, database concepts, and office applications.",
  },
  {
    id: 2,
    img: glaLogo, 
    school: "Sainik Awasiya Mahavidyalaya",
    location: "Sallaghari, Bhaktapur",
    date: "Graduated 2073 BS (2017 AD)",
    degree: "Secondary Education (SEE)",
    grade: "3.45 GPA",
    desc: "Successfully completed Secondary Education Examination (SEE) with strong academic performance. Developed interest in computer science and mathematics during this period, laying the groundwork for future IT studies.",
  },
];

  
 export const projects = [
  {
    id: 0,
    title: "CineWorld - Movie Booking System",
    description:
      "A MERN stack web application that allows users to find and book movies. Features include JWT authentication, 2FA for security, and potentially recommendation algorithms for movie suggestions.",
    image: img1,
    tags: ["MongoDB", "Express.js", "React JS", "Node.js", "REST API"],
    github: "https://github.com/PrabeshThapa3522/CineWorld",
    webapp: "",
  },
  {
    id: 1,
    title: "MD-Schedule- Meeting Management System",
    description:
      "MERN stack web app for managing and viewing appointments at the Nepal Electricity Authority. Admins can add, edit, and delete schedules with details like location, status, date, time, and remarks, while users can view appointments for yesterday, today, and the day after tomorrow.",
    image: img2,
    tags: ["MongoDB","Express.js", "React JS", "Node.js", "REST API"],
    github: "https://github.com/PrabeshThapa3522/NEA.git",
    webapp: "",
  },
  {
    id: 2,
    title: "PingChecker- Server Monitoring Tool",
    description:
      "The Ping Monitoring System is a React and Node.js-based dashboard that tracks the health of servers across multiple branches.It measures ping loss for each server and visually indicates status using green (0–10%), yellow (10–90%), and red (90–100%) signals.This helps quickly identify network issues and maintain branch connectivity.",
    image: img3,
    tags: [ "MongoDB", "React JS", "Node.js"],
    github: "https://github.com/PrabeshThapa3522/PING.git",
    webapp: "",
  },
  
];


