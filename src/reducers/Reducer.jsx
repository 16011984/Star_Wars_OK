// reducers/Reducer.js
const initialState = {
  characters: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS_START':
      return { ...state, loading: true };
    case 'FETCH_CHARACTERS_SUCCESS':
      return { ...state, loading: false, characters: action.payload };
    case 'FETCH_CHARACTERS_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
