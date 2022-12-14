import React from "react";

import { Navbar } from "../navbar/Navbar";
import { LeftBar } from "../left-bar/LeftBar";
import styles from "./styles.module.scss";

export const HeaderDesktop: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <LeftBar />
      <Navbar />
    </div>
  );
};
