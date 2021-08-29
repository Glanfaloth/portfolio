import React, { Component } from "react";

interface MenuItemProps {
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
}

interface MenuItemGroupProps {
  border?: boolean;
}

export class MenuItem extends Component<MenuItemProps, {}> {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        className="px-5 leading-6 text-black cursor-default hover:bg-blue-500 hover:text-white"
      >
        {this.props.children}
      </li>
    );
  }
}

export class MenuItemGroup extends Component<MenuItemGroupProps, {}> {
  render() {
    return (
      <ul className="py-1">
        {this.props.children}
        {this.props.border === true && (
          <hr className="text-gray-500 opacity-50 my-1 mx-2.5" />
        )}
      </ul>
    );
  }
}
