import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import styles from "../styles.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomButton } from "../../../fields";
import { typeButton } from "../../../fields/types";
import { useWindowResize } from "../../../hooks/useWindowResize";

interface ServiceProps {
  title: string;
}

export const ServiceItem = ({ title }: ServiceProps) => {
  const { size } = useWindowResize();

  return (
    <Box sx={{ padding: "9px 0px" }}>
      <Accordion
        className={styles.serviceAccordion__body}
        sx={{ boxShadow: "none", border: "1px solid #F6F6F6" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-body"
          sx={{ background: "#F9F9F9", borderRadius: "4px" }}
        >
          <Typography className={styles.secondaryTitle}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={size <= 768 ? { padding: 0 } : {}}>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={null}
              aria-controls="panel2bh-content"
              id="panel2bh-body"
              sx={{
                background: "#F9F9F9",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <Typography
                sx={
                  size > 768
                    ? {
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        marginBottom: "8px",
                      }
                    : {
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: "8px",
                      }
                }
                flexGrow={1}
              >
                Замена масла в МКПП
                <span style={{ color: "#2998FF", display: "block" }}>
                  от 12BYN
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#F7F7F7" }}>
              <div className={styles.transmissionAccordion}>
                <ol>
                  В услугу входит:
                  <li>Снятие и установка защиты картера двигателя;</li>
                  <li>Слив-залив масла;</li>
                  <li>Выставление уровня масла.</li>
                </ol>

                <span>Цена за данную услугу</span>

                <div className={styles.price}>
                  <span className={styles.price__text}>24 BYN</span>
                  <CustomButton color="blue" type={typeButton.small}>
                    Добавить
                  </CustomButton>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
