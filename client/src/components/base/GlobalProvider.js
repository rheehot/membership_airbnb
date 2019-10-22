import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import { DispatchContext, GlobalContext } from '../../contexts';
import { initialState, reducer } from '../../store';

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <GlobalContext.Provider value={state}>
        {children}
      </GlobalContext.Provider>
    </DispatchContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
