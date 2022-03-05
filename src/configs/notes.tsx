import type { NotesData } from "../types";
import { BsFolder2 } from "react-icons/bs";
function Emoji(props: any) {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
}

const notes: NotesData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: <BsFolder2 />,
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <Emoji label="waving" symbol="👋" />,
        excerpt: "Hi! This is Lanlan, now a master's student at..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: <BsFolder2 />,
    md: [
      {
        id: "grimmetropolis",
        title: "Grimmetropolis",
        file: "https://raw.githubusercontent.com/Glanfaloth/Grimmetropolis/master/README.md",
        icon: <Emoji label="crown" symbol="👑" />,
        excerpt: "Tower Defense game in the theme of Grimm's fairy tales",
        link: "https://github.com/Glanfaloth/Grimmetropolis"
      },
      {
        id: "fitfit",
        title: "FITFIT",
        file: "https://raw.githubusercontent.com/arcgt/HackZurich2020/master/README.md",
        icon: <Emoji label="superhero" symbol="🦸" />,
        excerpt: "AR App for learning a new language while doing exercise",
        link: "https://github.com/arcgt/HackZurich2020"
      },
      {
        id: "yangtao",
        title: "Yangtao",
        file: "https://raw.githubusercontent.com/jcklie/iccbc-2019/master/README.md",
        icon: <Emoji label="mobile" symbol="📱" />,
        excerpt:
          "AR App for Interactively Learning and Exploring Chinese Characters",
        link: "https://github.com/jcklie/iccbc-2019"
      },
      {
        id: "3dv",
        title: "3D Vision",
        file: "https://raw.githubusercontent.com/Glanfaloth/3D-Tracking-MVS/master/README.md",
        icon: <Emoji label="soccer" symbol="⚽" />,
        excerpt:
          "3D Player Tracking with Multi-View Stream (FIFA)",
        link: "https://github.com/Glanfaloth/3D-Tracking-MVS"
      }
    ]
  }
];

export default notes;
