import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export const SocialLink = ({ item }: any) => {
  return (
    <Link to={item.url} target="_blank" className={styles.socialLink}>
      {item.icon}
    </Link>
  );
};
