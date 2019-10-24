import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width:100%;
  `,
  Reset: styled.button`
  &:hover {
    text-decoration:underline;
  }
  `,
  Submit: styled.button``,

};

const SetMenu = ({ resetHandler, submitHandler }) => (
  <S.Wrapper>
    <S.Reset type="button" onClick={resetHandler}>지우기</S.Reset>
    <S.Submit type="button" onClick={submitHandler}>저장</S.Submit>
  </S.Wrapper>
);

SetMenu.propTypes = {
  resetHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default SetMenu;
