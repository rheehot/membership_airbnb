import * as services from '../../services';

export const fetchRooms = async (dispatch, options) => {
  try {
    dispatch({
      type: 'FETCH_ROOMS_REQUEST',
    });
    const { data } = await services.fetchFilteredRooms(options);
    const rooms = data[0];

    dispatch({
      type: 'FETCH_ROOMS_SUCCESS',
      payload: { rooms },
    });
  } catch (e) {
    dispatch({
      type: 'FETCH_ROOMS_FAILURE',
      payload: { error: e },
    });
  }
};
