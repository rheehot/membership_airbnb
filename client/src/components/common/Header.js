import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {
  Header: styled.header`
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    background-color:${({ theme }) => theme.palette.back};
    position: relative;
    z-index:999;
    justify-content:space-between;
  `,
  Title: styled.h1`
    color:#fff;
    font-size:${({ theme }) => theme.typography.pxToRem(21)};
    font-weight:400;
    margin-left:20px;
  `,
  Account: styled.div`
    margin-right:40px;
    color:#fff;
    font-size:${({ theme }) => theme.typography.pxToRem(21)};

  `,
};

const Header = () => (
  <S.Header>
    <Link to="/">
      <S.Title>BOOST BNB</S.Title>
    </Link>
    <Link to="/login">
      <S.Account>LogIn</S.Account>
    </Link>
  </S.Header>
);

export default Header;
