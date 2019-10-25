import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from '../hooks';
import { setOption, setReserv } from '../store';
import { Counter, SetMenu, SearchModal } from './common';

const GuestFilter = ({ closeModal }) => {
  const options = useSelector((state) => state.options);
  const reserv = useSelector((state) => state.reserv);

  const dispatch = useDispatch();

  const [adult, setAdult] = useState(reserv.adult || 0);
  const [child, setChild] = useState(reserv.child || 0);
  const [infant, setInfant] = useState(reserv.infant || 0);

  const guestType = [{
    id: 'adult',
    name: '성인',
    limit: 16,
    state: adult,
    setState: setAdult,
  }, {
    id: 'child',
    name: '어린이',
    limit: 16,
    option: '2~12세',
    state: child,
    setState: setChild,
  }, {
    id: 'infant',
    name: '유아',
    limit: 5,
    option: '2세 미만',
    state: infant,
    setState: setInfant,
  }];

  const submitHandler = () => {
    setOption(dispatch, options, { num_guest: adult + child });
    setReserv(dispatch, reserv, { adult, child, infant });
    closeModal();
  };

  const resetHandler = () => {
    setAdult(0);
    setChild(0);
    setInfant(0);
  };

  return (
    <SearchModal>
      {guestType.map((type) => (
        <Counter
          key={type.id}
          type={type}
        />
      ))}
      <SetMenu
        submitHandler={submitHandler}
        resetHandler={resetHandler}
      />
    </SearchModal>
  );
};

GuestFilter.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
export default GuestFilter;
