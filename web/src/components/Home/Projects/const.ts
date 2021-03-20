export const mainProjects: IProject[] = [
  {
    name: "QrDurango",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat molestias vel dolores corrupti eum minus mollitia ex, enim nobis laudantium nisi corporis quisquam, quasi atque rem sunt vitae natus alias?",
    technologies: ["nextjs", "express", "react", "bootstrap", "node"],
    categories: [],
    image: "test.png",
    href: "asdasd",
    github: "asdsad",
  },
  {
    name: "QrDurango",
    description: "",
    technologies: [],
    categories: [],
    image: "test.png",
  },
  {
    name: "QrDurango",
    description: "",
    technologies: [],
    categories: [],
    image: "test.png",
  },
];

export interface IProject {
  name: string;
  description: string;
  image: string;
  technologies: technology[];
  categories: category[];
  href?: string;
  github?: string;
}

export type category =
  | "full-stack"
  | "frontend"
  | "backend"
  | "mobile"
  | "web"
  | "design";
export type technology =
  | "react"
  | "electron"
  | "nextjs"
  | "node"
  | "express"
  | "flask"
  | "react-native"
  | "angular"
  | "css"
  | "material-ui"
  | "bootstrap";
