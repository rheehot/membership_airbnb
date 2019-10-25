import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import '../../styles/datepicker.css';
import isInclusivelyAfterDay from '../../utils/isInclusivelyAfterDay';

const DatePicker = ({ date, setStart, setEnd }) => {
  const [focus, setFocus] = useState('startDate');
  const { start, end } = date;
  const startObj = start ? moment(start) : null;
  const endObj = end ? moment(end) : null;

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
      startDate={startObj}
      endDate={endObj}
      onDatesChange={onDatesChange}
      focusedInput={focus}
      onFocusChange={onFocusChange}
      transitionDuration={0}
      hideKeyboardShortcutsPanel
    />
  );
};

DatePicker.propTypes = {
  date: PropTypes.shape({
    start: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({}),
    ]),
    end: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({}),
    ]),
  }).isRequired,
  setStart: PropTypes.func.isRequired,
  setEnd: PropTypes.func.isRequired,
};
export default DatePicker;
