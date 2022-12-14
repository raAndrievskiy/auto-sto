import React from "react";
import {TextField} from "@mui/material";
import {InputProps} from "./types";

export const CustomInput = ({
                                label,
                                style,
                                value,
                                placeholder,
                            }: InputProps) => {
    return (
        <TextField
            label={label}
            variant="outlined"
            fullWidth
            placeholder={placeholder}
            value={value}
            sx={{...style}}
        />
    );
};
