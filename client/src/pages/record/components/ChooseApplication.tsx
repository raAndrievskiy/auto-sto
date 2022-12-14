import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DateTimePicker from "react-datetime-picker";
import styles from "../styles.module.scss";
import { CustomButton, CustomInput, CustomTimePicker } from "../../../fields";

export const ChooseApplication = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [time, setTime] = useState<Date>(new Date());

  return (
    <Accordion
      className={styles.applicationAccordion}
      sx={{ boxShadow: "none" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
        sx={{ background: "#F9F9F9", borderRadius: "12px" }}
      >
        <Typography className={styles.styleTitle}>
          3. Оформление заявки
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.inputItems}>
        <div className={styles.wrapInput}>
          <span>Выберите марку машины</span>
          <CustomInput
            placeholder={"Выберите марку машины"}
            style={{ maxWidth: "485px", width: "100%" }}
          />
        </div>
        <div className={styles.wrapInput}>
          <span>Выберите модель машины</span>
          <CustomInput
            placeholder={"Выберите модель машины"}
            style={{ maxWidth: "485px", width: "100%" }}
          />
        </div>
        <div className={styles.wrapInput}>
          <span>Выберите дату записи</span>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ maxWidth: "485px", width: "100%" }}
                />
              )}
            />
          </LocalizationProvider>
        </div>
        <div className={styles.wrapInput}>
          <CustomTimePicker />
        </div>
        <div className={styles.wrapInput}>
          <span>Ваше имя</span>
          <CustomInput
            placeholder={"Ваше имя"}
            style={{ maxWidth: "485px", width: "100%" }}
          />
        </div>
        <div className={styles.wrapInput}>
          <span>Ваш номер телефона</span>
          <CustomInput
            placeholder={"Ваше номер телефона"}
            style={{ maxWidth: "485px", width: "100%" }}
          />
        </div>
        <div className={styles.buttonWrap}>
          <CustomButton color="blue">Оформить заявку</CustomButton>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
