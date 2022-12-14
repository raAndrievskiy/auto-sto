import React from "react";

import { paths } from "./workIStagestem";
import { WorkStagesItem } from "..";
import styles from "./styles.module.scss";
import { Container } from "../../../../sharedComponent";

export const WorkStages = () => {
  return (
    <Container>
      <div className={styles.workStages__wrap}>
        <h1 className="title">Этапы работ</h1>
        <div className={styles.workStages}>
          <div className={styles.workStages__item}>
            {paths.map((item: any) => (
              <WorkStagesItem key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.workStages__img} />
        </div>
      </div>
    </Container>
  );
};
