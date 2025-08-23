"use client";
import weoneit from "../public/images/weoneit.svg";
import diimaak from "../public/images/diimaak.svg";
import izeelogo from "../public/images/izeelogo.svg";
import sellatcom from "../public/images/sellatcom.png";
import lablabee from "../public/images/lablabee.svg";
import ftconsulting from "../public/images/ft-consulting.png";
import wcodoo from "../public/images/wc-odoo.png";
import aidex from "../public/images/aidex.png";
import cloudie from "../public/images/cloudie.png";
import resumai from "../public/images/resumai.png";
import docs from "../public/images/docs.svg";
import awabrows from "../public/images/awabrows.svg";
import ansay from "../public/images/ansay.svg";
import taxibyatassi from "../public/images/taxibyatassi.svg";

import ProjectCard from "./ProjectCard";
import { StaticImageData } from "next/image";

type Project = {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  link?: string;
  github?: string;
  comingSoon?: boolean;
  labels: string[];
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: "cloudie",
      image: cloudie,
      title: "Cloudie - Smart File Management",
      link: "https://cloudie-app.vercel.app/",
      description:
        "Cloudie is a secure cloud-based file storage and sharing platform, similar to Google Drive. It allows users to safely store, access, and collaborate on documents anytime and anywhere.",
      labels: ["Next.js", "TailwindCSS", "Appwrite"],
    },
    {
      id: "aidex",
      image: aidex,
      title: "AIDEX - AI Support Assistant",
      link: "",
      description:
        "AIDEX is a SaaS platform that leverages AI to provide real-time support assistance for businesses and teams. The platform integrates modern tooling for scalability and performance.",
      labels: ["Next.js", "React.js", "Convex", "Turborepo"],
      comingSoon: true,
    },
    {
      id: "lablabee",
      image: lablabee,
      title: "Lablabee - Telco E-learning Platform",
      link: "https://app.lablabee.com/",
      description:
        "Lablabee is an interactive e-learning platform offering hands-on labs in Telco Cloud technologies. I collaborated with the web team on feature implementation and UI enhancements for both the application and the website.",
      labels: ["React.js", "TypeScript", "MUI", "Webflow"],
    },

    {
      id: "resumai",
      image: resumai,
      title: "ResumAI - AI Resume Feedback App",
      link: "https://resumai-app.vercel.app/",
      description:
        "ResumAI helps job seekers improve their applications by uploading resumes and job descriptions to receive instant AI-powered feedback, tailored recommendations, and application ratings.",
      labels: ["React.js", "TailwindCSS", "Puter.js"],
    },
    {
      id: "docs-google-docs-clone",
      image: docs,
      title: "Docs - Collaborative Editor",
      link: "https://docs-clone-app.vercel.app/",
      description:
        "Docs is a collaborative text editor inspired by Google Docs. It includes real-time editing and shared workspaces for seamless team collaboration.",
      labels: ["Next.js", "TypeScript", "TailwindCSS", "Convex", "Clerk"],
    },
    {
      id: "diimaak-shipping-platform",
      image: diimaak,
      title: "Diimaak - Parcel Shipping Platform",
      link: "",
      description:
        "Diimaak is a global shipping platform that connects travelers with people who need to send packages, enabling cost-effective parcel delivery and travel companionship.",
      labels: ["Next.js", "React.js", "TailwindCSS"],
      comingSoon: true,
    },
    {
      id: "taxi-by-attassi",
      image: taxibyatassi,
      title: "Taxi by Attassi - Landing Page",
      link: "https://www.taxibyatassi.fr/",
      description:
        "A professional landing page for a taxi agency in France, designed to showcase services and make it easy for customers to get all the details they need.",
      labels: ["WordPress"],
    },
    {
      id: "awabrows-beauty-center",
      image: awabrows,
      title: "AWABROWS - Beauty Center Website",
      link: "https://awabrows.fr/awabrows-a-petit-prix/",
      description:
        "AWABROWS is a beauty center website offering treatments and professional training. I revamped existing pages and added new pages for services and beauty courses.",
      labels: ["WordPress"],
    },
  ];

  const oldProjects: Project[] = [
    {
      id: "ft-consulting",
      image: ftconsulting,
      title: "FT Consulting - Business Advisory",
      link: "https://cabinet-ftconsulting.com/",
      description:
        "FT Consulting is a showcase website for an accounting and business advisory firm. It highlights the company’s services and provides clear contact options.",
      labels: ["WordPress", "Elementor"],
    },
    {
      id: "ansay-chocolaterie-ecommerce",
      image: ansay,
      title: "Ansay - Chocolaterie E-commerce",
      link: "https://ansay.fr/",
      description:
        "Ansay is an online chocolaterie e-commerce website. I handled the shop integration, payment processing, and custom product pages to enhance the shopping experience.",
      labels: ["WordPress", "WooCommerce"],
    },
    {
      id: "izeelogo-logo-creator",
      image: izeelogo,
      title: "Izeelogo - Online Logo Creator",
      link: "",
      description:
        "Izeelogo is a professional online logo design platform. I contributed to the UI and helped optimize the experience for users creating logos and business cards.",
      labels: ["Next.js", "Bootstrap", "AngularJS"],
      comingSoon: true,
    },
    {
      id: "sellatcom-ecommerce-app",
      image: sellatcom,
      title: "Sellatcom - E-commerce Mobile App",
      link: "https://youtu.be/AlgeNf2FVdc",
      description:
        "Sellatcom is an Algerian e-commerce mobile application. I developed the admin dashboard and the showcase website for suppliers and customers.",
      labels: ["React.js", "TailwindCSS", "WordPress"],
    },
    {
      id: "wiki-weoneit",
      image: weoneit,
      title: "Wiki WeoneIT - Documentation Website",
      link: "https://www.youtube.com/watch?v=C-ak5s_1oWI",
      description:
        "Wiki WeoneIT is a documentation hub that provides detailed resources to help team members understand and use company projects and methods effectively.",
      labels: ["WordPress", "Elementor"],
    },
    {
      id: "wc-odoo-connector",
      image: wcodoo,
      title: "WC Odoo Connector - WordPress Plugin",
      link: "",
      description:
        "WC Odoo Connector is a WordPress plugin that integrates WooCommerce with Odoo ERP, streamlining e-commerce management and back-office operations.",
      labels: ["PHP", "WordPress"],
    },
  ];

  return (
    <div>
      <div
        className="flex flex-col justify-center items-center space-y-5 p-4 my-20"
        id="projects"
      >
        <p className="about-subtitle">My Projects</p>
        <h2 className="about-title">What I’ve Been Building</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full sm:px-10 lg:px-20 mt-5">
          {projects.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })}
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center space-y-5 p-4 my-20"
        id="old-projects"
      >
        <p className="about-subtitle">Old Projects</p>
        <h2 className="about-title">From the Archives</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full sm:px-10 lg:px-20 mt-5">
          {oldProjects.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
