export const mainProjects: IProject[] = [
  {
    name: "Flink",
    description:
      "Actualmente trabajo como desarrollador semi senior en miflink, una app que busca volver accesible el tener una tarjeta a los jovenes y el trading en mexico",
    image: "flink.png",
    href: "https://miflink.com/",
  },
  {
    name: "QrDurango",
    description:
      "Trabaje como desarrollador en Mmultimedios para crear un sitio que ayudara a promover el turismo local de mi ciudad",
    image: "qrdgo.png",
    href: "http://qrdgo.mx/",
  },
  {
    name: "App de turismo",
    description:
      "Creacion de una app demo de turismo con funciones de tener los trending y comentarios",
    image: "turismo.png",
    github: "https://github.com/iTheia/travel-app",
  },
];

export interface IProject {
  name: string;
  description: string;
  image: string;
  technologies?: technology[];
  categories?: category[];
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
