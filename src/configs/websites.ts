import { WebsitesData } from "../types";

const websites: WebsitesData = {
  favorites: {
    title: "Favourites",
    sites: [
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/Glanfaloth"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/yelan-tao"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:gcevnas@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "duolingo",
        title: "Duolingo",
        img: "img/sites/duolingo.svg",
        link: "https://arxiv.org/"
      },
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "bilibili",
        title: "Bilibili",
        img: "img/sites/bilibili.svg",
        link: "https://www.bilibili.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "huggingface",
        title: "HuggingFace",
        img: "img/sites/huggingface.svg",
        link: "https://huggingface.co/course/chapter0"
      }
    ]
  }
};

export default websites;
