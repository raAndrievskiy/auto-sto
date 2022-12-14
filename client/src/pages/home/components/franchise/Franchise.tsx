import React from "react";

import { CustomButton } from "../../../../fields";
import { Container } from "../../../../sharedComponent";
import styles from "./styles.module.scss";

export const Franchise = () => {
  return (
    <div className={styles.wrap}>
      <Container>
        <div className={styles.franchise}>
          <div className={styles.franchise__img} />
          <div className={styles.franchise__wrap}>
            <h2 className={styles.franchise__title}>
              Откройте собственную СТО
              <span>по франшизе ЕВРОАВТОСЕРВИС</span>
            </h2>
            <span className="description">
              У нас самые выгодные условия из всех франшиз автосервисов!
              Предлагаем полностью готовый бизнес в нашей сети СТО и поддержку
              на каждом этапе работы: даём подробный план действий для открытия
              и работы, обучаем и аттестуем персонал, поставляем запчасти с
              наших складов. А также обеспечиваем высокоэффективное управление и
              маркетинг.
            </span>
            <div className={styles.franchiseItem__wrap}>
              <div className={styles.franchiseItem}>
                <span className={styles.franchiseItem__title}>
                  Развивающаяся сеть
                </span>
                <span className={styles.franchiseItem__info}>
                  <span>98</span>
                </span>
                <span className={styles.franchiseItem__description}>
                  ЕВРОАВТОСЕРВИС всегда рядом с домом или местом поломки
                </span>
              </div>

              <div className={styles.franchiseItem}>
                <span className={styles.franchiseItem__title}>
                  Наши автосервисы открыты
                </span>
                <span className={styles.franchiseItem__info}>
                  в <span>40</span> городах
                </span>
                <span className={styles.franchiseItem__description}>
                  По всей территории Беларуси, что повышает лояльность клиентов
                </span>
              </div>

              <div className={styles.franchiseItem}>
                <span className={styles.franchiseItem__title}>Опыт работы</span>
                <span className={styles.franchiseItem__info}>
                  <span>17</span>лет
                </span>
                <span className={styles.franchiseItem__description}>
                  Мы зарекомендовали себя как надёжные поставщики услуг
                </span>
              </div>

              <div className={styles.franchiseItem}>
                <span className={styles.franchiseItem__title}>
                  Бесплатная реклама
                </span>
                <span className={styles.franchiseItem__info}>
                  <span>60</span>дней
                </span>
                <span className={styles.franchiseItem__description}>
                  Стартовая рекламная кампания после открытия
                </span>
              </div>
            </div>
            <CustomButton color="blue">
              <span>Узнать условия франшизы</span>
            </CustomButton>
          </div>
        </div>
      </Container>
    </div>
  );
};
