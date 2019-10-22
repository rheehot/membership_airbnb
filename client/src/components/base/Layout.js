import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../common/Header';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 32px;
  `,
};

const Layout = ({ children }) => (
  <S.Wrapper>
    <Header />
    {children}
  </S.Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
