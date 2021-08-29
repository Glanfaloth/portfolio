import React, { Component } from "react";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import bear from "../../configs/bear";
import { BearMdData } from "../../types";
import {
  AiOutlineLink,
  AiOutlineSearch,
  AiOutlineClockCircle,
  AiOutlineDoubleLeft,
  AiOutlineMenu
} from "react-icons/ai";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { BsDot } from "react-icons/bs";

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

interface BearRedux {
  dark?: boolean;
}

interface BearState {
  curSidebar: number;
  curMidbar: number;
  contentID: string;
  contentURL: string;
  midbarList: BearMdData[];
  showSidebar: boolean;
}

interface ContentProps extends BearRedux {
  id: string;
  url: string;
}

interface ContentState {
  storeMd: {
    [key: string]: string;
  };
}

interface SidebarProps {
  cur: number; // current parent sidebar
  setMidBar: (items: BearMdData[], index: number) => void;
  items: BearMdData[];
  curr: number; // current child midbar
  setContent: (id: string, url: string, index: number) => void;
  toggleSidebar: () => void;
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
          children={String(children).replace(/\n$/, "")}
          {...props}
        />
      ) : (
        <code className={className}>{children}</code>
      );
    }
  };
};

class Sidebar extends Component<SidebarProps> {
  render() {
    return (
      <div className="sidebar w-full h-full bg-white text-white overflow-y-scroll">
        <div className="flex justify-end">
          <AiOutlineDoubleLeft
            className="cursor-pointer text-gray-500 m-2"
            size={20}
            onClick={this.props.toggleSidebar}
          ></AiOutlineDoubleLeft>
        </div>
        <div className="h-8 pl-3 pr-3 flex flex-row justify-start items-center">
          <Emoji label="peach" symbol="🍑" />
          <p className="text-sm ml-1">Lanlan</p>
        </div>
        <div className="pl-3 pr-3 h-8 flex flex-row justify-start items-center">
          <AiOutlineSearch className="text-gray-500 mr-2" />
          <p className="text-gray-500 text-sm">Quick Find</p>
        </div>
        <div className="pl-3 pr-3 h-8 flex flex-row justify-start items-center">
          <AiOutlineClockCircle className="text-gray-500 mr-2" />
          <p className="text-gray-500 text-sm">All Updates</p>
        </div>
        <div className="pl-3 pr-3 h-8 flex flex-row justify-start items-center">
          <AiOutlineSearch className="text-gray-500 mr-2" />
          <p className="text-gray-500 text-sm">Settings &amp; Members</p>
        </div>
        <div className="pl-3 pr-3 h-8 flex flex-row justify-start items-center">
          <p className="text-gray-400 text-xs">FAVORITES</p>
        </div>
        <ul>
          {bear.map((item, index) => (
            <li
              key={`bear-sidebar-${item.id}`}
              className={`flex flex-col items-left cursor-default ${
                this.props.cur === index ? "bg-gray-500" : "bg-transparent"
              } ${this.props.cur === index ? "" : "hover:bg-gray-200"}`}
            >
              <div
                className="h-8 pl-3 flex flex-row items-center"
                onClick={() => this.props.setMidBar(item.md, index)}
              >
                {this.props.cur === index ? (
                  <GoTriangleDown className="text-gray-800 mr-2" />
                ) : (
                  <GoTriangleRight className="text-gray-800 mr-2" />
                )}
                {item.icon}
                <span className="ml-2 text-sm">{item.title}</span>
              </div>
              {this.props.cur === index && (
                <div className="midbar w-full h-full bg-gray-200">
                  <ul>
                    {this.props.items.map((item: BearMdData, index: number) => (
                      <li
                        key={`bear-midbar-${item.id}`}
                        className={`h-8 flex flex-col cursor-default ${
                          this.props.curr === index
                            ? "bg-gray-400"
                            : "bg-transparent"
                        } ${
                          this.props.curr === index ? "" : "hover:bg-gray-300"
                        }`}
                        onClick={() =>
                          this.props.setContent(item.id, item.file, index)
                        }
                      >
                        <div className="flex flex-row items-center content-between">
                          <div
                            className="mt-1 mr-2 flex flex-row flex-none items-center"
                            style={{ width: "200px" }}
                          >
                            <BsDot className="ml-5 mr-2 text-gray-800" />
                            {item.icon}
                            <div className="text-sm">{item.title}</div>
                          </div>
                          <div style={{ width: "10px" }}>
                            {item.link && (
                              <a
                                className="float-right pr-2"
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <AiOutlineLink className="text-gray-500" />
                              </a>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class Content extends Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = {
      storeMd: {}
    };
  }

  componentDidMount() {
    this.fetchMarkdown(this.props.id, this.props.url);
  }

  componentDidUpdate(prevProps: ContentProps) {
    if (prevProps.url !== this.props.url) {
      this.fetchMarkdown(this.props.id, this.props.url);
    }
  }

  fetchMarkdown(id: string, url: string) {
    let storeMd = this.state.storeMd;
    if (!storeMd[id]) {
      fetch(url)
        .then((response) => response.text())
        .then((text) => {
          text = this.fixImageURL(text, url);
          storeMd[id] = text;
          this.setState({ storeMd });
        })
        .catch((error) => console.error(error));
    }
  }

  getRepoURL(url: string) {
    return url.slice(0, -10) + "/";
  }

  fixImageURL(text: string, mdURL: string): string {
    text = text.replace(/&nbsp;/g, "");
    if (mdURL.indexOf("raw.githubusercontent.com") !== -1) {
      const repoURL = this.getRepoURL(mdURL);

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
  }

  render() {
    return (
      <div className="markdown w-full h-full bg-gray-50 text-gray-700 overflow-scroll py-6">
        <div className="w-2/3 px-2 mx-auto">
          <ReactMarkdown
            children={this.state.storeMd[this.props.id]}
            linkTarget="_blank"
            remarkPlugins={[gfm]}
            components={Highlighter(this.props.dark as boolean)}
          />
        </div>
      </div>
    );
  }
}

class Bear extends Component<BearRedux, BearState> {
  constructor(props: BearRedux) {
    super(props);
    this.state = {
      curSidebar: 0,
      curMidbar: 0,
      midbarList: bear[0].md,
      contentURL: bear[0].md[0].file,
      contentID: bear[0].md[0].id,
      showSidebar: true
    };
  }

  setMidBar = (items: BearMdData[], index: number) => {
    this.setState({
      midbarList: items,
      curSidebar: index,
      contentURL: items[0].file,
      contentID: items[0].id,
      curMidbar: 0
    });
  };

  setContent = (id: string, url: string, index: number) => {
    this.setState({
      contentID: id,
      contentURL: url,
      curMidbar: index
    });
  };

  toggleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar
    });
  };

  render() {
    return (
      <div className="bear font-avenir flex flex-row w-full h-full">
        <div className="flex-none">
          {this.state.showSidebar ? (
            <Sidebar
              cur={this.state.curSidebar}
              setMidBar={this.setMidBar}
              items={this.state.midbarList}
              curr={this.state.curMidbar}
              setContent={this.setContent}
              toggleSidebar={this.toggleSidebar}
            />
          ) : (
            <div>
              <AiOutlineMenu
                className="cursor-pointer text-gray-500 m-2"
                size={20}
                onClick={this.toggleSidebar}
              />
            </div>
          )}
        </div>
        <div className="flex-grow">
          <Content
            id={this.state.contentID}
            url={this.state.contentURL}
            dark={this.props.dark}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: BearRedux): BearRedux => {
  return {
    dark: state.dark
  };
};

export default connect(mapStateToProps, null)(Bear);
