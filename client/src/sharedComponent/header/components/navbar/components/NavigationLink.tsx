import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles.module.scss";

export const NavigationLink = ({ item }: any) => {
  return (
    <li>
      <NavLink
        to={item.path}
        className={(navData) =>
          navData.isActive ? styles.activeLink : styles.link
        }
      >
        {item.label}
      </NavLink>
    </li>
  );
};
