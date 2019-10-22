import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width:360px;
    height:300px;
    box-shadow:rgba(0, 0, 0, 0.15) 0px 10px 37px;
    border: 1px solid rgba(118, 118, 118, 0.28);
    border-radius:12px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    padding:10px;
  `,
};

const SearchModal = ({ children }) => (
  <S.Wrapper>
    {children}
  </S.Wrapper>
);

SearchModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchModal;
