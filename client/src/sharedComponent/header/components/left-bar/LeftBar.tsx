import React from "react";
import { Link } from "react-router-dom";

import { LogoIcon, LocationIcon } from "../../../../customIcons";
import styles from "./styles.module.scss";

export const LeftBar: React.FC = () => {
  return (
    <div className={styles.leftBarLocation}>
      <Link to="/">
        <LogoIcon width={179} heigth={74} />
      </Link>
      <div className={styles.wrapLocation}>
        <LocationIcon width={24} heigth={24} className={styles.locationIcon} />
        <span className={styles.location}>
          Ваш город: <span>Минск</span>
        </span>
        <div className={styles.selectCity}>
          <span className={styles.location}>
            Ваш город: <span>Минск?</span>
          </span>
          <div className={styles.selectCity__buttons}>
            <Link to="/" className={styles.yesLink}>
              Да, верно
            </Link>
            <Link to="/" className={styles.NoLink}>
              Нет, другой
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
