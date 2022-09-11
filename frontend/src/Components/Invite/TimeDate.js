import React, { useState } from 'react';
import DateMomentUtils from '@date-io/moment';
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
 KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


function TimeDate() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateMomentUtils}>
        <KeyboardDatePicker value={selectedDate} onChange={handleDateChange} />
        <KeyboardTimePicker value={selectedDate} onChange={handleDateChange} />
        <KeyboardDateTimePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default TimeDate;