import React from "react";

import { CustomInput, CustomButton } from "../../../../fields";
import { Container } from "../../../../sharedComponent";
import autoServicesImg from "../../../../assets/images/auto-services.png";

import styles from "./styles.module.scss";

export const ServiceSearch = () => {
  return (
    <div className={styles.serviceSearch_wrap}>
      <Container>
        <div className={styles.serviceSearch}>
          <h1 className={styles.serviceSearch__title}>
            Не нашли нужную услугу?
          </h1>
          <span className={styles.serviceSearch__description}>
            Оставьте заявку на звонок? Первый свободный мастер перезвонит вам и
            ответит на все вопросы.
          </span>
          <div className={styles.serviceSearch__input}>
            <CustomInput
              placeholder={"Как вас зовут?"}
              style={{ maxWidth: "298px", width: "100%" }}
            />
            <CustomInput
              placeholder={"Введите ваш номер телефона"}
              style={{ maxWidth: "357px", width: "100%" }}
            />
            <CustomButton color="blue" className={styles.btn}>
              <span>Позвоните мне</span>
            </CustomButton>
          </div>
          <span className={styles.serviceSearch__text}>
            оставляя заявку я даю свое согласие на обработку персональных данных
          </span>
        </div>
      </Container>
      <img src={autoServicesImg} className={styles.autoServicesImg} alt="" />
    </div>
  );
};
