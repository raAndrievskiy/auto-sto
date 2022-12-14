import React from "react";

import { paths } from "./servicesConfig";
import { ServicesItem, ServicesRequired } from "./components";
import { Container } from "../../../../sharedComponent";
import styles from "./styles.module.scss";

export const Services: React.FC = () => {
  return (
    <Container>
      <div className={styles.servicesWrap}>
        <h1 className={styles.title}>Предоставляем все виды услуг</h1>
        <span className={styles.text}>
          Ваш автомобиль в надёжных руках: мы предлагаем множество услуг,
          связанных с вашим автомобилем, самого высокого качества и по разумной
          цене. Комплексные цены, которые объединяют стоимости работ и запасных
          частей подойдут каждому автолюбителю, а расширенная гарантия в 2 года
          или 20 000 км пробега - подтверждают наш профессионализм.
        </span>
        <ServicesRequired />
        <div className={styles.servicesItem__wrap}>
          {paths.map((item: any) => (
            <ServicesItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};
