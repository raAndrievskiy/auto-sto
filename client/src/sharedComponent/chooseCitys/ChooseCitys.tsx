import { Grid } from "@mui/material";
import React, { useState } from "react";
import { LocationIcon } from "../../customIcons";
import { CustomSelect } from "../../fields";
import commonStyles from "../../styles/style.module.scss";
import styles from "./style.module.scss";

interface ChooseCitysProps {
  citys: string[];
  handleSelectCity: (city: string) => void;
}

export const ChooseCitys = ({ citys, handleSelectCity }: ChooseCitysProps) => {
  const [city, setCity] = useState<string>("");
  const selectedCity = (value: string) => {
    setCity(value);
    handleSelectCity(value);
  };

  return (
    <div className={commonStyles.flex}>
      <span className={styles.location}>
        <LocationIcon width={24} heigth={24} />
        <span>Ваш город:</span>
      </span>
      <CustomSelect
        label=""
        handleChange={(value) => selectedCity(value)}
        selectedItem={city}
        option={citys}
      />
    </div>
  );
};
