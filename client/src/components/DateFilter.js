import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from '../hooks';
import { setOption } from '../store';
import { SearchModal, SetMenu, DatePicker } from './common';

const DateFilter = ({ closeModal }) => {
  const options = useSelector((state) => state.options);

  const dispatch = useDispatch();

  const [start, setStart] = useState(options.check_in || null);
  const [end, setEnd] = useState(options.check_out || null);

  const submitHandler = () => {
    setOption(dispatch, options, {
      check_in: (start) ? moment(start).format('YYYY-MM-DD') : null,
      check_out: (end) ? moment(end).format('YYYY-MM-DD') : null,
    });
    closeModal();
  };

  const resetHandler = () => {
    setStart(null);
    setEnd(null);
  };

  return (
    <SearchModal>
      <DatePicker
        date={{ start, end }}
        setStart={setStart}
        setEnd={setEnd}
      />
      <SetMenu
        submitHandler={submitHandler}
        resetHandler={resetHandler}
      />
    </SearchModal>
  );
};
DateFilter.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
export default DateFilter;
