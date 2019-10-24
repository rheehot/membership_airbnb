import React, { useState } from 'react';
import styled from 'styled-components';
import {
  DateFilter,
  GuestFilter,
  TypeFilter,
  PriceFilter,
  MoreFilter,
} from '../components';

const S = {
  Background: styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    position: fixed;
    background: rgba(255, 255, 255, 0.6);
  `,
  Wrapper: styled.nav`
    position: relative;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ddd;
    z-index: 999;
  `,
  FilterItem: styled.div``,
  Button: styled.button`
    padding: 8px 16px;
    border: 1px solid #ddd;
  `,
};

const filters = [
  {
    id: 'date-filter',
    name: '날짜',
    Modal: DateFilter,
  },
  {
    id: 'guest-filter',
    name: '인원',
    Modal: GuestFilter,
  },
  {
    id: 'type-filter',
    name: '숙소 유형',
    Modal: TypeFilter,
  },
  {
    id: 'price-filter',
    name: '가격',
    Modal: PriceFilter,
  },
  {
    id: 'more-filter',
    name: '필터 추가하기',
    Modal: MoreFilter,
  },
];

const Filters = () => {
  const [selected, setSelected] = useState(null);

  const clickFilterHandler = (e) => {
    setSelected(null);
    const selectedFilter = e.target.id;
    if (selected !== selectedFilter) setSelected(selectedFilter);
  };
  const closeModal = () => {
    setSelected(null);
  };

  return (
    <>
      {selected && <S.Background onClick={closeModal} />}
      <S.Wrapper>
        {filters.map(({ id, name, Modal }) => (
          <S.FilterItem key={id}>
            <S.Button id={id} type="button" onClick={clickFilterHandler}>
              {name}
            </S.Button>
            {selected === id && <Modal closeModal={closeModal} />}
          </S.FilterItem>
        ))}
      </S.Wrapper>
    </>
  );
};

export default Filters;
