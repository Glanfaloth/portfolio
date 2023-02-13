import type { NotesData } from "~/types";
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
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: <Emoji label="coding" symbol="👩🏻‍💻" />,
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: <Emoji label="browser" symbol="🍎" />,
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: <BsFolder2 />,
    md: [
      {
        id: "sptdwait",
        title: "VR Image Synthesis",
        file: "https://raw.githubusercontent.com/Glanfaloth/sptdwait/main/README.md",
        icon: <Emoji label="hand" symbol="✋" />,
        excerpt: "Synthesis of Egocentric View for Dynamic Object Tracking",
        link: "https://github.com/Glanfaloth/sptdwait"
      },
      {
        id: "papillon",
        title: "Papillon",
        file: "https://raw.githubusercontent.com/Glanfaloth/papillon/main/README.md",
        icon: <Emoji label="butterfly" symbol="🦋" />,
        excerpt: "Multiplayer language learning platforms",
        link: "https://github.com/Glanfaloth/papillon"
      },
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
        file: "https://raw.githubusercontent.com/Glanfaloth/FITFIT/master/README.md",
        icon: <Emoji label="superhero" symbol="🦸" />,
        excerpt: "AR App for learning a new language while doing exercise",
        link: "https://github.com/Glanfaloth/FITFIT"
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
    ]
  }
];

export default notes;
