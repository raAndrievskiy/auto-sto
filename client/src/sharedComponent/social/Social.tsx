import React from "react";

import { pathsSocial } from "./socialConfig";
import { SocialLink } from "./SocialItem";
import styles from "./styles.module.scss";

export const Social = () => {
  return (
    <div className={styles.socialItem}>
      {pathsSocial.map((item: any) => (
        <SocialLink key={item.id} item={item} />
      ))}
    </div>
  );
};
