import React from "react";
import style from './styles.module.scss'
import { paths } from "../../navConfig";
import { NavigationLink } from "./components";

export const Navbar: React.FC = () => {
  return (
    <ul className={style.nav}>
      {paths.map((item: any) => (
        <NavigationLink key={item.id} item={item} />
      ))}
    </ul>
  );
};
