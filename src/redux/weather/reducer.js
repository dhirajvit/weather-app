import { FETCH_DATA } from "./action";
//export
 const initialState = {
  forecasts: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        forecasts: action.payload.forecasts,
      };
    }
    default:
      return state;
  }
};
export default reducer;
