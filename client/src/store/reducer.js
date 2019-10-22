export const initialState = {
  options: null,
  rooms: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ROOMS_REQUEST':
      return {
        ...state,
        options: action.payload.options,
        loading: true,
      };
    case 'FETCH_ROOMS_SUCCESS':
      return {
        ...state,
        options: action.payload.options,
        rooms: action.payload.rooms,
        loading: false,
      };
    case 'FETCH_ROOMS_FAILURE':
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case 'INIT_ROOMS':
      return {
        ...state,
        rooms: null,
      };
    case 'INIT_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
