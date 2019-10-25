export const initialState = {
  reserv: {},
  options: {},
  rooms: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESERV':
      return {
        ...state,
        reserv: action.payload.reserv,
      };
    case 'SET_OPTIONS':
      return {
        ...state,
        options: action.payload.options,
      };
    case 'FETCH_ROOMS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_ROOMS_SUCCESS':
      return {
        ...state,
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
