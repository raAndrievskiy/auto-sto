import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import {
  RecordDiagnosticIcon,
  RecordHomeIcon,
  RecordWheeIcon,
  RecordSpareIcon,
  RecordElectroIcon,
  CloseIcon,
} from "../../../customIcons";
import { CustomButton, CustomInput, TitleH2 } from "../../../fields";
import styles from "../styles.module.scss";
import { ServiceItem } from "./ServiceItem";
import { useWindowResize } from "../../../hooks/useWindowResize";

export const ChooseService = () => {
  const { size } = useWindowResize();

  return (
    <Accordion className={styles.serviceAccordion} sx={{ boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
        sx={{
          background: "#F9F9F9",
          borderRadius: "12px",
          marginBottom: "10px",
        }}
      >
        <Typography className={styles.styleTitle}>2. ВЫБОР УСЛУГИ</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <div className={styles.wrap}>
          <div className={styles.serviceAccordion__container}>
            <div>
              <CustomInput
                placeholder={"Введите ваш номер телефона"}
                style={{ width: "100%" }}
              />
            </div>
            <span className={styles.description}>
              Или выберете из каталога:
            </span>
            <div className={styles.servicesItems}>
              <div className={styles.servicesItems__item}>
                <RecordDiagnosticIcon
                  width={size > 768 ? 76 : 38}
                  heigth={size > 768 ? 76 : 38}
                  className={styles.icon}
                />
                <span>ТО и Ремонт</span>
              </div>
              <div className={styles.servicesItems__item}>
                <RecordHomeIcon
                  width={size > 768 ? 76 : 38}
                  heigth={size > 768 ? 76 : 38}
                  className={styles.icon}
                />
                <span>Диагностика</span>
              </div>
              <div className={styles.servicesItems__item}>
                <RecordWheeIcon
                  width={size > 768 ? 76 : 38}
                  heigth={size > 768 ? 76 : 38}
                  className={styles.icon}
                />
                <span>Шиномонтаж</span>
              </div>
              <div className={styles.servicesItems__item}>
                <RecordElectroIcon
                  width={size > 768 ? 76 : 38}
                  heigth={size > 768 ? 76 : 38}
                  className={styles.icon}
                />
                <span>Ходовая часть</span>
              </div>
              <div className={styles.servicesItems__item}>
                <RecordSpareIcon width={76} heigth={76} />
                <span>Купить запчасти</span>
              </div>
            </div>
            <TitleH2>Выберите услугу</TitleH2>
            <ServiceItem title={"Углы установки колес"} />
            <ServiceItem title={"Система кондиционирования"} />
            <ServiceItem title={"Трансмиссия"} />
          </div>
          <div className={styles.totalPrice}>
            <span>Выбранные услуги</span>
            <div className={styles.totalPrice__item}>
              <span>Диагностика ходовой части</span>
              <span className={styles.priceInfo}>
                45 BYN
                <CloseIcon width={13} heigth={13} />
              </span>
            </div>
            <div className={styles.totalPrice__item}>
              <span>Диагностика тормозной системы</span>
              <span className={styles.priceInfo}>
                45 BYN
                <CloseIcon width={13} heigth={13} />
              </span>
            </div>
            <div className={styles.totalPrice__item}>
              <span>Диагностика системы кондиционирования</span>
              <span className={styles.priceInfo}>
                45 BYN
                <CloseIcon width={13} heigth={13} />
              </span>
            </div>
            <div className={styles.result}>
              Итоговая сумма за услуги<span>99 BYN</span>
            </div>
            <CustomButton color="blue">Продолжить оформление</CustomButton>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
