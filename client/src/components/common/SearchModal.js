import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    position:absolute;
    margin-top:8px;
    background:${({ theme }) => theme.palette.white};
    color:${({ theme }) => theme.palette.black};
    z-index:999;
    box-shadow:${({ theme }) => theme.palette.shadow};
    border: 1px solid rgba(118, 118, 118, 0.28);
    border-radius:12px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
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
