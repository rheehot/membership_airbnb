import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  Wrapper: styled('div')`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  `,
  Button: styled('button')`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    border: 1px solid #ddd;
    color: #666;
    font-size: 1.5rem;
  `,
};

const Counter = ({ type }) => {
  const { state, setState } = type;

  return (
    <S.Wrapper>
      <span>{type.name}</span>
      <span>{type.option}</span>
      <S.Button type="button" id="sub" disabled={!state} onClick={() => setState(state - 1)}>
        -
      </S.Button>
      <div>{type.state}+</div>
      <S.Button type="button" id="add" disabled={state >= type.limit} onClick={() => setState(state + 1)}>
        +
      </S.Button>
    </S.Wrapper>
  );
};

Counter.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string,
    option: PropTypes.string,
    limit: PropTypes.number,
    state: PropTypes.number,
    setState: PropTypes.func,
  }).isRequired,
};

export default Counter;
