import { SET_LOCATION } from "./action";
// export 
const initialState = {
  // Assumption user location is sydney. In real, we
  // may need to find the default location from user
  // profile
  selectedLocation: 624,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION: {
      return {
        ...state,
        selectedLocation: action.payload.location,
      };
    }
    default:
      return state;
  }
};
export default reducer;
