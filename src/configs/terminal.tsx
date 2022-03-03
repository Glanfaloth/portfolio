import type { TerminalData } from "../types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi! This is Lanlan, now a master's student at ETH Zurich and a
              robotics engineer intern at Voliro. I'm also working as a web
              interface programming research assistant at Law, Economics, and
              Business Group at ETH.
            </div>
            <div className="mt-1">
              Before that, I got my bachelor's degree in Automotive Engineering
              at Tsinghua University in China.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Web Development, Mobile Development, UI/UX Design, Computer Vision, Machine Learning"
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:gcevnas@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                gcevnas@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Glanfloth"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Glanfloth
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/yelan-tao/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/yelan-tao/
              </a>
            </li>
          </ul>
        )
      }
    ]
  }
];

export default terminal;
