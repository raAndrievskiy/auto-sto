import React, {useState} from 'react';
import {TextField} from "@mui/material";
import {TimePicker} from '@mui/lab';

export const CustomTimePicker = () => {
    const [time, setTime] = useState<Date>(new Date())
    return (
        <>
            <span>Выберите время записи </span>
            <TextField
                id="time"
                type="time"
                defaultValue="07:30"
                variant="outlined"
                InputLabelProps={{
                    shrink: true,

                }}
                inputProps={{
                    step: 300, // 5 min
                }}
                SelectProps={{
                    fullWidth: true
                }}
                sx={{width: 250}}
            />
        </>
    );
};
