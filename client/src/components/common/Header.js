import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {
  Header: styled.header`
    width:100%;
    position: absolute;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    background-color:#333;
  `,
  Title: styled.h1`
    color:#fff;
    font-size:${({ theme }) => theme.typohraphy.pxToRem(18)}
    font-weight:400;
  `,
};

const Header = () => (
  <S.Header>
    <Link to="/">
      <S.Title>Boostcamp bnb</S.Title>
    </Link>
  </S.Header>
);

export default Header;
