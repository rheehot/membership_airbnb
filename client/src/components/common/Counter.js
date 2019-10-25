import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin: 30px 20px;
  `,
  Title: styled.div`
    width: 150px;
    flex-shirink: 0;
  `,
  Name: styled.div`
    font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  `,
  Option: styled.div`
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  `,
  Counter: styled.button`
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    flex-shirink: 0;
  `,
  Button: styled.button`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    border: 1px solid ${({ theme }) => theme.palette.primary};
    color: #666;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.palette.primary};
    flex-shirink: 0;
    flex-grow: 0;
  `,
};

const Counter = ({ type }) => {
  const { state, setState } = type;

  return (
    <S.Wrapper>
      <S.Title>
        <S.Name>{type.name}</S.Name>
        <S.Option>{type.option}</S.Option>
      </S.Title>
      <S.Counter>
        <S.Button
          type="button"
          id="sub"
          disabled={!state}
          onClick={() => setState(state - 1)}
        >
          -
        </S.Button>
        <div>{type.state}+</div>
        <S.Button
          type="button"
          id="add"
          disabled={state >= type.limit}
          onClick={() => setState(state + 1)}
        >
          +
        </S.Button>
      </S.Counter>
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
