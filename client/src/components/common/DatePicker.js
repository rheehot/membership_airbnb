import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import isInclusivelyAfterDay from '../../utils/isInclusivelyAfterDay';

const DatePicker = ({ date, setStart, setEnd }) => {
  const [focus, setFocus] = useState('startDate');

  const onDatesChange = ({ startDate, endDate }) => {
    setStart(startDate);
    setEnd(endDate);
  };
  const onFocusChange = (focusedInput) => {
    const focused = focusedInput || 'startDate';
    setFocus(focused);
  };

  return (
    <DayPickerRangeController
      numberOfMonths={2}
      isOutsideRange={(day) => !isInclusivelyAfterDay(day, moment())}
      startDate={date.start}
      endDate={date.end}
      onDatesChange={onDatesChange}
      focusedInput={focus}
      onFocusChange={onFocusChange}
    />
  );
};

DatePicker.propTypes = {
  date: PropTypes.shape({
    start: PropTypes.shape({}),
    end: PropTypes.shape({}),
  }).isRequired,
  setStart: PropTypes.func.isRequired,
  setEnd: PropTypes.func.isRequired,
};
export default DatePicker;
