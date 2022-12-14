import React, { useState } from "react";

import { Navbar } from "../navbar/Navbar";
import { LeftBar } from "../left-bar/LeftBar";
import styles from "./styles.module.scss";
import { CustomButton } from "../../../../fields";
import { Social } from "../../../social";
import { LogoIcon } from "../../../../customIcons";

export const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.wrap}>
      <LeftBar />
      <div
        className={showMenu ? styles.menuToggle : styles.menu}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span />
        <span />
        <span />
      </div>
      {showMenu ? (
        <div className={styles.menu__wrap}>
          <LogoIcon width={180} heigth={65} />
          <Navbar />
          <div className={styles.burger__footer}>
            <CustomButton color={"blue"}>Записаться на сто</CustomButton>
            <Social />
          </div>
        </div>
      ) : null}
    </div>
  );
};
