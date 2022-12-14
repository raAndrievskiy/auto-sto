import React from "react";
import { Link } from "react-router-dom";

import actionImage from "../../assets/images/action-image.png";
import { CustomButton, CustomInput, TitleH4 } from "../../fields";
import { Container } from "../../sharedComponent";
import styles from "./styles.module.scss";
import { MainLayout } from "../../layouts";

export const Action = () => {
  return (
    <MainLayout>
      <Container>
        <div className={styles.action__wrap}>
          <Link to="/" className={styles.back}>
            Назад
          </Link>
          <div className={styles.action}>
            <div className={styles.action__text}>
              <h1 className="title">
                Полная диагностика автомобиля со скидкой 50%
              </h1>
              <div className={styles.action__imgMob}>
                <img src={actionImage} alt="" />
              </div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
            <div className={styles.action__img}>
              <img src={actionImage} alt="" />
            </div>
          </div>
          <span className={styles.action__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
          <CustomButton color="blue">Записаться</CustomButton>
        </div>
      </Container>

      <div className={styles.actionQuestion}>
        <Container>
          <h3>Остались вопросЫ ИЛИ НЕ НАШЛИ НУЖНУЮ УСЛУГУ?</h3>
          <TitleH4>
            Оставьте заявку – наш консультант перезвонит вам и ответит на
            вопросы
          </TitleH4>
          <div className={styles.input__wrap}>
            <CustomInput
              placeholder={"Введите ваш номер телефона"}
              style={{ width: "560px", marginRight: "20px", height: "100%" }}
            />
            <CustomButton color="blue">Оставить заявку</CustomButton>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};
