import Terminal from "../components/apps/Terminal";
import Safari from "../components/apps/Safari";
import Notes from "../components/apps/Notes";
import VSCode from "../components/apps/VSCode";

import type { AppsData } from "../types";

const apps: AppsData[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png"
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    show: false,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    img: "img/icons/safari.png",
    content: <Safari />
  },
  {
    id: "notes",
    title: "Notes",
    desktop: true,
    show: true,
    width: 1000,
    height: 600,
    img: "img/icons/notes.png",
    content: <Notes />
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    show: false,
    img: "img/icons/vscode.png",
    content: <VSCode />
  },
  // {
  //   id: "facetime",
  //   title: "FaceTime",
  //   desktop: true,
  //   show: false,
  //   img: "img/icons/facetime.png",
  //   height: 530,
  //   content: <FaceTime />
  // },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    show: false,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  {
    id: "email",
    title: "Mail",
    desktop: false,
    img: "img/icons/mail.png",
    link: "mailto:gcevnas@gmail.com"
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/Glanfaloth"
  }
];

export default apps;
