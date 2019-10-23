import * as services from '../../services';

export const fetchRooms = async (dispatch, options) => {
  try {
    dispatch({
      type: 'FETCH_ROOMS_REQUEST',
    });
    const responses = await services.fetchFilteredRooms(options);
    dispatch({
      type: 'FETCH_ROOMS_SUCCESS',
      payload: { rooms: responses.data },
    });
  } catch (e) {
    dispatch({
      type: 'FETCH_ROOMS_FAILURE',
      payload: { error: e },
    });
  }
};
