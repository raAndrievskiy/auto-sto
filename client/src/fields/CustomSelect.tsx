import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface SelectProps {
  label: string;
  option: any[];
  selectedItem: string;
  handleChange: (value: string) => void;
}

export const CustomSelect = ({
  label,
  option,
  selectedItem,
  handleChange,
}: SelectProps) => {
  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel sx={{ marginTop: "0px" }} id={`label-${label}`}>
        {label}
      </InputLabel>
      <Select
        id={`label-${label}`}
        value={selectedItem}
        disableUnderline
        style={{
          marginTop: 0,
          background: "transparent",
          paddingLeft: "20px",
        }}
        IconComponent={() => <ExpandMoreIcon sx={{ color: "#8c8c8c" }} />}
        variant={"standard"}
        onChange={(e) => handleChange(e.target.value)}
      >
        {option.map((name: string, index: number) => (
          <MenuItem key={`${name}=${index}`} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
