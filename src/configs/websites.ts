import type { WebsitesData } from "~/types";

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
        id: "duolingo",
        title: "Duolingo",
        img: "img/sites/duolingo.svg",
        link: "https://preview.duolingo.com/profile/glanfaloth"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:gcevnas@gmail.com"
      },
      {
        id: "bilibili",
        title: "Bilibili",
        img: "img/sites/bilibili.svg",
        link: "https://space.bilibili.com/23925437"
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
        link: "https://preview.duolingo.com/learn"
      },
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "hackernews",
        title: "HN",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      },
      {
        id: "notion",
        title: "Notion",
        img: "img/sites/notion.svg",
        link: "https://notion.so"
      },
      {
        id: "adventofcode",
        title: "AOC",
        img: "img/sites/adventofcode.svg",
        link: "https://adventofcode.com/"
      },
      {
        id: "lichess",
        title: "lichess",
        img: "img/sites/lichess.svg",
        link: "https://lichess.org/"
      },
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/"
      },
    ]
  }
};

export default websites;
