export const selectWeatherState = (rootState) => rootState.weatherState;
export const selectWeatherForecasts = (rootState) =>
  selectWeatherState(rootState).forecasts;
