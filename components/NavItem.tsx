import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
  activeItem: string;
  setActiveItem: Function;
  name: string;
}
const NavItem = ({ activeItem, setActiveItem, name }: Props) => {
  const router = useRouter();
  return activeItem !== name ? (
    <span
      onClick={() => setActiveItem(name)}
      className="hover:text-blue-500 cursor-pointer"
    >
      {name}
    </span>
  ) : null;
};

export default NavItem;
