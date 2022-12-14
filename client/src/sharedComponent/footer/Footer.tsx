import React from "react";
import { Link } from "react-router-dom";

import { LogoIcon } from "../../customIcons";
import { Navbar } from "../header/components/navbar/Navbar";
import { Social } from "../social";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__wrap}>
        <Link to="/">
          <LogoIcon width={180} heigth={75} />
        </Link>
        <Navbar />
        <Social />
      </div>
      <Link to="/privacy-policy" className={styles.privacyPolicy}>
        Политика конфиденциальности
      </Link>
    </div>
  );
};
