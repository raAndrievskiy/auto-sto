import React, { useState } from "react";

import { CustomButton } from "../../../../fields";
import { Container } from "../../../../sharedComponent";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const ServiceStation: React.FC = () => {
  const navigate = useNavigate();
  const handleOpen = () => {
    navigate("/record");
  };

  return (
    <>
      <Container>
        <div className={styles.serviceStation}>
          <div className={styles.serviceStation__text}>
            <h1>Запишитесь в удобное для вас СТО</h1>
            <span>
              У нас 98 автосервисов в 40 городах по всей Беларуси. Гарантия 2
              года действительна по всей сети
            </span>
            <CustomButton color="blue" onClick={handleOpen}>
              <span>Записаться на сто</span>
            </CustomButton>
          </div>
        </div>
      </Container>
    </>
  );
};
