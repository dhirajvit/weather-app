export const selectLocationState = (rootState) => rootState.locationState;
export const selectLocation = (rootState) =>
  selectLocationState(rootState).selectedLocation;
