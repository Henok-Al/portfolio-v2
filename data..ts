import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { Service, ISkill, IProject, Category } from "./type";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b> CSS</b>,<b> Tailwind</b>,<b> Javascript</b>,<b> React.js</b> and <b>Next.js</b>",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about: "I can build a backend using <b> Node</b> and <b>Express</b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      " I can develop robust REST API using <b> </b> and <b> Expressjs</b>",
  },
  {
    Icon: MdDeveloperMode,
    title: "App Development",
    about: "in a process of learning <b>React Native</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about: "stunning user interface designer using <b>Figma</b> ",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "80",
  },

  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "70",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "Nodejs",
    level: "70",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Eco-Mart",
    image_path: "/ecoMart.PNG",
    deployed_url: "http://eco-mart.onrender.com/",
    github_url: "https://github.com/Henok-Al/eco-mart",
    category: ["Node"],
    description: "Ecom-Mart is feature rich ecommerse platform ",
    key_techs: ["react", "Tailwind"],
  },
  {
    id: 2,
    name: "Social Network and Job Portal",
    image_path: "/jobPortal.PNG",
    deployed_url: "https://habesha-net.onrender.com/",
    github_url: "https://github.com/Henok-Al/eco-mart",
    category: ["Fullstack"],
    description: "It's a web app connect job seeker with the recruiter",
    key_techs: ["react", "Node", "Stripe", "Cloudinary", "Redis"],
  },
  {
    id: 3,
    name: "ATC UI/UX Design",
    image_path: "/figma.PNG",
    deployed_url:
      "https://www.figma.com/proto/uzB9AJSHSXOFcLCo5ft55B/Abeni-Henok?node-id=502-1296&node-type=frame&t=wjXVUgKN0I88aPuH-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=502%3A1296",
    github_url: "",
    category: ["Figma"],
    description: "Stunning UI/UX design using Figma",
    key_techs: ["Figma"],
  },
  {
    id: 4,
    name: "AddisBlog",
    image_path: "/addisBlog.PNG",
    deployed_url:
      "https://addis-blog-rlb1-4c0poyx08-henokals-projects.vercel.app/",
    github_url: "https://github.com/Henok-Al/AddisBlog.git",
    category: ["react"],
    description:
      "Its blogging platform where users can add posts and comment on posts",
    key_techs: ["React", "Firebase"],
  },
  {
    id: 5,
    name: "React CRUD app",
    image_path: "/crud.PNG",
    deployed_url: "https://abyssiniablog-4a499.web.app/",
    github_url: "https://github.com/Henok-Al/abyssinia-blog.git",
    category: ["next"],
    description: "A website to add users and implement react CRUD features",
    key_techs: ["React", "Tailwind"],
  },
  {
    id: 6,
    name: "Write It",
    image_path: "/writeIt.PNG",
    deployed_url: "react-firebase-tailwind-seven.vercel.app",
    github_url: "https://github.com/Henok-Al/write-it.git",
    category: ["react"],
    description: "It's is a simple todo app with have authentication and crud",
    key_techs: ["React", "Tailwind"],
  },
];
