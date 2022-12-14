import React from "react";
import { Container } from "../../../../sharedComponent";

import { action } from "./actionConfig";
import { ActionsItem } from "./components";
import styles from "./styles.module.scss";

export const Actions = () => {
  return (
    <Container>
      <h1 className="title">Акции, предложения, скидки</h1>
      <span className="description">
        Плановое техническое обслуживание, текущий и капитальный ремонт,
        установка дополнительного оборудования (тюнинг)
      </span>
      <div className={styles.actionsItem__wrap}>
        {action.map((item: any) => (
          <ActionsItem key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};
