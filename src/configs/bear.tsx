import type { BearData } from "../types";

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

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: <Emoji label="waving" symbol="👋" />,
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <Emoji label="waving" symbol="👋" />,
        excerpt: "Hi! This is Lanlan, now a master's student at..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: <Emoji label="globe" symbol="🌐" />,
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: <Emoji label="file" symbol="📂" />,
    md: [
      {
        id: "grimmetropolis",
        title: "Grimmetropolis",
        file: "markdown/grimmetropolis.md",
        icon: <Emoji label="crown" symbol="👑" />,
        excerpt: "Tower Defense game in the theme of Grimm's fairy tales",
        link: "https://gitlab.inf.ethz.ch/OU-GTC/gamelab2021-team3"
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
      }
    ]
  }
];

export default bear;
