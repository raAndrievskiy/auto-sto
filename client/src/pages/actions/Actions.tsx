import React from "react";
import { MainLayout } from "../../layouts";
import { Brands, Container } from "../../sharedComponent";
import { pathsActions } from "./actionsConfig";
import { ActionsItem } from "./components/index";
import commonStyles from "../../styles/style.module.scss";
import styles from "./styles.module.scss";

export const Actions = () => {
  return (
    <MainLayout>
      <Container>
        <div className={styles.actions}>
          <h1
            className={`${commonStyles.title} ${commonStyles.title__uppercase}`}
          >
            Акции, предложения, скидки
          </h1>
          <span className={commonStyles.description}>
            Плановое техническое обслуживание, текущий и капитальный ремонт,
            установка дополнительного оборудования (тюнинг)
          </span>
          <div className={styles.actionItem__wrap}>
            {pathsActions.map((item: any) => (
              <ActionsItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className={styles.actionsBrands}>
          <Brands title={"Расширенные гарантии бренды"} />
        </div>
      </Container>
    </MainLayout>
  );
};
