import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import {
  Brush,
  PhoneIphone,
  Security,
  Web,
  DesktopMac,
  Storage,
} from "@material-ui/icons";
export interface ISkill {
  description: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
}

export const skills: ISkill[] = [
  {
    description: "Diseños limpios y 100% personales",
    Icon: Brush,
    title: "Diseño",
  },
  {
    description: "Aplicaciones para todos los dispositivos",
    Icon: PhoneIphone,
    title: "Applicaciones Moviles",
  },
  {
    description: "Diseño y creacion de un sitio web",
    Icon: Web,
    title: "Sitios web",
  },
  {
    description: "Un sistema para ser usado en una computadora ",
    Icon: DesktopMac,
    title: "Aplicaciones de escritorio",
  },
];
