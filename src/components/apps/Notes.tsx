import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineLink } from "react-icons/ai";
import { IoCloudOfflineOutline } from "react-icons/io5";
import notes from "../../configs/notes";
import type { NotesMdData, RootReduxState } from "../../types";

interface ContentProps {
  contentID: string;
  contentURL: string;
}

interface MiddlebarProps {
  items: NotesMdData[];
  cur: number;
  setContent: (id: string, url: string, index: number) => void;
}

interface SidebarProps {
  cur: number;
  setMidBar: (items: NotesMdData[], index: number) => void;
}

interface NotesState extends ContentProps {
  curSidebar: number;
  curMidbar: number;
  midbarList: NotesMdData[];
}

const Highlighter = (dark: boolean): any => {
  interface codeProps {
    node: any;
    inline: boolean;
    className: string;
    children: any;
  }

  return {
    code({ node, inline, className, children, ...props }: codeProps) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={dark ? dracula : prism}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className}>{children}</code>
      );
    }
  };
};

const Sidebar = ({ cur, setMidBar }: SidebarProps) => {
  return (
    <div className="sidebar w-full h-full overflow-y-scroll">
      <div className="h-10 pl-3 flex flex-row items-center">iCloud</div>
      <ul>
        {notes.map((item, index) => (
          <li
            key={`notes-sidebar-${item.id}`}
            className={`mx-2 px-3 h-8 flex flex-row items-center justify-between cursor-default rounded-md ${
              cur === index ? "bg-blue-500" : "bg-transparent"
            }`}
            onClick={() => setMidBar(item.md, index)}
          >
            <div className="flex flex-row items-center">
              <div
                className={`flex flex-row items-center ${
                  cur === index ? "text-white" : "text-blue-500"
                }`}
              >
                {item.icon}
              </div>

              <span className={`ml-2 ${cur === index ? "text-white" : ""}`}>
                {item.title}
              </span>
            </div>
            {item.md.length}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Middlebar = ({ items, cur, setContent }: MiddlebarProps) => {
  return (
    <div className="midbar w-full h-full bg-gray-50 border-r border-gray-300 overflow-y-scroll">
      <ul>
        {items.map((item: NotesMdData, index: number) => (
          <li
            key={`notes-midbar-${item.id}`}
            className={`h-24 flex flex-col cursor-default border-l-2 ${
              cur === index
                ? "border-red-500 bg-white"
                : "border-transparent bg-transparent"
            } hover:bg-white`}
            onClick={() => setContent(item.id, item.file, index)}
          >
            <div className="h-8 mt-3 flex flex-row flex-none items-center">
              <div className="-mt-1 w-10 text-gray-500 flex flex-none justify-center">
                {item.icon}
              </div>
              <span className="relative text-gray-900 flex-grow font-bold">
                {item.title}
                {item.link && (
                  <a
                    className="absolute top-1 right-4"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="text-gray-500" />
                  </a>
                )}
              </span>
            </div>
            <div className="h-16 ml-10 pb-2 pr-1 border-b border-gray-300 text-sm text-gray-500">
              {item.excerpt}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getRepoURL = (url: string) => {
  return url.slice(0, -10) + "/";
};

const fixImageURL = (text: string, contentURL: string): string => {
  text = text.replace(/&nbsp;/g, "");
  if (contentURL.indexOf("raw.githubusercontent.com") !== -1) {
    const repoURL = getRepoURL(contentURL);

    const imgReg = /!\[(.*?)\]\((.*?)\)/;
    const imgRegGlobal = /!\[(.*?)\]\((.*?)\)/g;

    const imgList = text.match(imgRegGlobal);

    if (imgList) {
      for (let img of imgList) {
        const imgURL = (img.match(imgReg) as Array<string>)[2];
        if (imgURL.indexOf("http") !== -1) continue;
        const newImgURL = repoURL + imgURL;
        text = text.replace(imgURL, newImgURL);
      }
    }
  }
  return text;
};

const Content = ({ contentID, contentURL }: ContentProps) => {
  const [storeMd, setStoreMd] = useState<{ [key: string]: string }>({});
  const dark = useSelector((state: RootReduxState) => state.dark);

  const fetchMarkdown = useCallback(
    (id: string, url: string) => {
      if (!storeMd[id]) {
        fetch(url)
          .then((response) => response.text())
          .then((text) => {
            storeMd[id] = fixImageURL(text, url);
            setStoreMd({ ...storeMd });
          })
          .catch((error) => console.error(error));
      }
    },
    [storeMd]
  );

  useEffect(() => {
    fetchMarkdown(contentID, contentURL);
  }, [contentID, contentURL, fetchMarkdown]);

  return (
    <div className="markdown w-full h-full bg-gray-50 text-gray-700 overflow-scroll py-6">
      <div className="w-2/3 px-2 mx-auto">
        <ReactMarkdown
          linkTarget="_blank"
          remarkPlugins={[gfm]}
          components={Highlighter(dark as boolean)}
        >
          {storeMd[contentID]}
        </ReactMarkdown>
      </div>
    </div>
  );
};

const Notes = () => {
  const [state, setState] = useState<NotesState>({
    curSidebar: 0,
    curMidbar: 0,
    midbarList: notes[0].md,
    contentID: notes[0].md[0].id,
    contentURL: notes[0].md[0].file
  });

  const setMidBar = (items: NotesMdData[], index: number) => {
    setState({
      curSidebar: index,
      curMidbar: 0,
      midbarList: items,
      contentID: items[0].id,
      contentURL: items[0].file
    });
  };

  const setContent = (id: string, url: string, index: number) => {
    setState({
      ...state,
      curMidbar: index,
      contentID: id,
      contentURL: url
    });
  };

  return (
    <div className="notes font-avenir flex flex-row w-full h-full">
      <div className="flex-none w-44">
        <Sidebar cur={state.curSidebar} setMidBar={setMidBar} />
      </div>
      <div className="flex-none w-60">
        <Middlebar
          items={state.midbarList}
          cur={state.curMidbar}
          setContent={setContent}
        />
      </div>
      <div className="flex-grow">
        <Content contentID={state.contentID} contentURL={state.contentURL} />
      </div>
    </div>
  );
};

export default Notes;
