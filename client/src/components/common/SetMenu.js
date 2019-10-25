import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width:100%;
    display:flex;
    border-top:1px solid #ddd;
    justify-content:space-between;
  `,
  Reset: styled.button`
  cursor:pointer;
  margin:10px 20px;
  color:${({ theme }) => theme.palette.back};
  &:hover {
    text-decoration:underline;
  }
  `,
  Submit: styled.button`
  cursor:pointer;
  padding:5px;
  margin:10px 20px;
  color: ${({ theme }) => theme.palette.primary};
  `,

};

const SetMenu = ({ resetHandler, submitHandler }) => (
  <S.Wrapper>
    <S.Reset type="button" onClick={resetHandler}>삭제</S.Reset>
    <S.Submit type="button" onClick={submitHandler}>저장</S.Submit>
  </S.Wrapper>
);

SetMenu.propTypes = {
  resetHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default SetMenu;
