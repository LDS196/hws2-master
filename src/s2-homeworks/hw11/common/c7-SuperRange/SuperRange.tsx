import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import {red} from "@mui/material/colors";

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider

            sx={{ // стили для слайдера // пишет студент
                 mr:3,
                 ml:3,
                maxWidth: 300


            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
