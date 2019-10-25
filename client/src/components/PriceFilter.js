import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from '../hooks';
import { setOption, setReserv } from '../store';
import { SetMenu, SearchModal, PriceSlider } from './common';

const PriceFilter = ({ closeModal }) => {
  const options = useSelector((state) => state.options);
  const reserv = useSelector((state) => state.reserv);
  const dispatch = useDispatch();

  const [min_price, setMin] = useState(options.min_price || 0);
  const [max_price, setMax] = useState(options.max_price || 1000000);
  const [price, setPrice] = useState(reserv.price || null);

  const submitHandler = () => {
    setOption(dispatch, options, { min_price, max_price });
    setReserv(dispatch, reserv, { price });
    closeModal();
  };

  const resetHandler = () => {
    setMin(0);
    setMax(1000000);
    setPrice(null);
  };

  const S = {
    Valid: styled.div`
      margin: 30px;
    `,
    Button: styled.button`
      padding: 10px 20px;
      background: ${({ theme }) => theme.palette.primary};
      color: #fff;
      border-radius: 5px;
      margin-top: 20px;
    `,
  };
  return (
    <SearchModal>
      {!(options.check_in || options.check_out) ? (
        <S.Valid>
          <div>요금을 확인하려면 여행 날짜를 입력하세요</div>
          <S.Button>날짜 입력</S.Button>
        </S.Valid>
      ) : (
        <>
          <PriceSlider
            minPrice={min_price}
            maxPrice={max_price}
            setMin={setMin}
            setMax={setMax}
          />
        </>
      )}
      <SetMenu submitHandler={submitHandler} resetHandler={resetHandler} />
    </SearchModal>
  );
};

PriceFilter.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
export default PriceFilter;
