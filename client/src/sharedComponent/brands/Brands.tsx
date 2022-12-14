import React from "react";

import { Container } from "..";
import { BrandsItem } from "./BrandsItem";
import { paths } from "./brandsConfig";
import styles from "./styles.module.scss";

export const Brands = ({ title }: any) => {
  return (
    <Container>
      <div className={styles.brands}>
        <h1 className="title">{title}</h1>
        <div className={styles.brands__wrap}>
          {paths.map((item: any) => (
            <BrandsItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};
