import React from "react";
import { Container } from "../../../../sharedComponent";

import { ServiceChoiceItem, ServiceQuality } from "./components";
import { paths, pathsQuality } from "./ServiceChoiceConfig";
import styles from "./styles.module.scss";

export const ServiceChoice = () => {
  return (
    <>
      <div className={styles.serviceChoice}>
        <Container>
          <h1 className={styles.serviceChoice__title}>
            Почему автовладельцы выбирают <span>СТО ЕВРОАВТОСЕРВИС?</span>
          </h1>
          <div className={styles.serviceChoice__about}>
            <div className={styles.serviceChoice__about__img} />
            <div className={styles.serviceChoice__about__text}>
              <span className={styles.description}>
                ЕВРОАВТОСЕРВИС – это постоянно развивающаяся сеть независимых
                СТО по всей Беларуси. В нашу сеть входят также станции PATRON
                Авто, ШАТЕ-М Дизель) Также мы являемся частью международной
                сервисной концепции EUROGARAGE, принадлежащей ассоциации
                поставщиков автозапчастей GROUPAUTO INTERNATIONAL (GAI). Наши
                автосервисы есть по всей Беларуси (как в крупных городах, так и
                в небольших населённых пунктах). Предоставляем услуги по ремонту
                и обслуживанию автомобилей уже более 21 года и за это время
                закрепили репутацию ответственной и надёжного поставщика услуг.
                Мы гарантируем единый высокий уровень профессионализма
                сотрудников во всех автосервисах сети.
              </span>

              <div className={styles.info}>
                <span className={styles.number}>
                  98
                  <span>
                    Автосервисов <br /> в сети
                  </span>
                </span>
                <span className={styles.number}>
                  21
                  <span>Год на рынке автоуслуг</span>
                </span>
                <span className={styles.number}>
                  40
                  <span>
                    Городов <br /> в Беларуси
                  </span>
                </span>
                <span className={styles.number}>
                  40
                  <span>
                    Городов <br /> в Беларуси
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.serviceChoiceItem__wrap}>
            {paths.map((item: any) => (
              <ServiceChoiceItem key={item.id} item={item} />
            ))}
          </div>
        </Container>
        <div className={styles.serviceQuality__wrap}>
          <Container>
            <h1 className="title">
              Мы обеспечиваем высокое качество работ автосервисов
            </h1>
            <div className={styles.serviceQuality}>
              {pathsQuality.map((item: any) => (
                <ServiceQuality key={item.id} item={item} />
              ))}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
