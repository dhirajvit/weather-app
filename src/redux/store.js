import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import locationReducer from "./location/reducer";
import weatherReducer from "./weather/reducer";

export const rootReducer = combineReducers({
  locationState: locationReducer,
  weatherState: weatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
