import { nanoid } from "nanoid";
import { MdCardTravel } from "react-icons/md";
import { GiHealthCapsule } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import { IoSchool } from "react-icons/io5";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#what", text: "what we do" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#blog", text: "blog" },
];

export const skills = [
  {
    id: nanoid(),
    title: "health",
    icon: <GiHealthCapsule className="h-16 w-16 text-yellow-950" />,
    text: "We understand the importance of health.  This can be as simple as clean water or food hygiene",
  },
  {
    id: nanoid(),
    title: "tourism",
    icon: <MdCardTravel className="h-16 w-16 text-yellow-950" />,
    text: "Over the years we have provided guidance and assistance to those visiting Ethopia",
  },
  {
    id: nanoid(),
    title: "research",
    icon: <GiArchiveResearch className="h-16 w-16 text-yellow-950" />,
    text: "We firmly believe in the importance of research to drive your project forward ",
  },
  {
    id: nanoid(),
    title: "education",
    icon: <IoSchool className="h-16 w-16 text-yellow-950" />,
    text: "Education is vital in any settling and we have supported the education of women for 15 years ",
  },
];

export const projects = [
  {
    id: nanoid(),
    title: "Ketchene Pottery Association",
    text: "A paragraph introducing the project.  Why it is important what it hopes to achieve.  How the person reading could offer to help",
  },
  {
    id: nanoid(),
    title: "Debes",
    text: "A paragraph introducing the project.  Why it is important what it hopes to achieve.  How the person reading could offer to help",
  },
  {
    id: nanoid(),
    title: "Hana School",
    text: "A paragraph introducing the project.  Why it is important what it hopes to achieve.  How the person reading could offer to help",
  },
  {
    id: nanoid(),
    title: "Roman Haven",
    text: "A paragraph introducing the project.  Why it is important what it hopes to achieve.  How the person reading could offer to help",
  },
];
