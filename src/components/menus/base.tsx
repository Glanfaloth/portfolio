import type { ReactNode } from "react";

interface MenuItemProps {
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
  children: ReactNode;
}

interface MenuItemGroupProps {
  border?: boolean;
  children: ReactNode;
}
const MenuItem = (props: MenuItemProps) => {
  return (
    <li
      onClick={props.onClick}
      className="px-5 leading-6 text-black cursor-default hover:bg-blue-500 hover:text-white"
    >
      {props.children}
    </li>
  );
};

const MenuItemGroup = (props: MenuItemGroupProps) => {
  return (
    <ul className="py-1">
      {props.children}
      {props.border === true && (
        <hr className="text-gray-500 opacity-50 my-1 mx-2.5" />
      )}
    </ul>
  );
};

export { MenuItem, MenuItemGroup };
