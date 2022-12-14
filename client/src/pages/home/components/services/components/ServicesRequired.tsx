import React from "react";

import {CustomButton, CustomInput} from "../../../../../fields";
import styles from "../styles.module.scss";
import {typeButton} from "../../../../../fields/types";
import {Box} from "@mui/material";

export const ServicesRequired = () => {
    return (
        <div className={styles.servicesRequired}>
            <div className={styles.inputSearch}>
                <CustomInput
                    placeholder={"Введите требуемую услугу"}
                />
            </div>
            <Box sx={{padding: '0 3px'}}>
                <CustomButton type={typeButton.big} color="white" className={styles.btn}>
                    <span>Заправка кондиционера</span>
                </CustomButton>
            </Box>
            <Box sx={{padding: '0 3px'}}>
                <CustomButton type={typeButton.big} color="white" className={styles.btn}>
                    <span>Химчистка салона</span>
                </CustomButton>
            </Box>
            <Box sx={{padding: '0 3px'}}>
                <CustomButton type={typeButton.big} color="white" className={styles.btn}>
                    <span>Сход/Развал</span>
                </CustomButton>
            </Box>
        </div>
    );
};
