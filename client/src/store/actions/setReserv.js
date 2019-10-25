export const setReserv = async (dispatch, reserv, stateObj) => {
  const newReserv = { ...reserv, ...stateObj };

  dispatch({
    type: 'SET_RESERV',
    payload: { reserv: newReserv },
  });
};
