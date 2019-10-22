import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled('div')`
    width:100%;
  `,
};

const SetMenu = () => (
  <S.Wrapper>
    <span>지우기</span>
    <span>저장</span>
  </S.Wrapper>
);

export default SetMenu;
