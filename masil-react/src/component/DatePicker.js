import React,{useState} from "react";
import '../css/DatePicker.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from "@mui/material";
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return(
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ko}>
      <DateTimePicker
        label="대여 시작 시간"
        value={startDate}
        onChange={setStartDate}
        renderInput={(params) => <TextField {...params} className="startTime"/>}
      />
      <DateTimePicker
        label="대여 종료 시간"
        value={endDate}
        onChange={setEndDate}
        renderInput={(params) => <TextField {...params} className="endTime"/>}
      />
    </LocalizationProvider>
  )
}
export default DatePicker