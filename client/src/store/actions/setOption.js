export const setOption = async (dispatch, options, stateObj) => {
  const newOptions = { ...options, ...stateObj };

  dispatch({
    type: 'SET_OPTIONS',
    payload: { options: newOptions },
  });
};
