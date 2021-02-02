import { fetchData } from "../../services/weather_details";

export const FETCH_DATA = "FETCH_DATA";

export const fetchDataByLocation = (location) => {
  return async (dispatch) => {
    try {
      const response = await fetchData(location);
      // Only one location appears after filtered by type
      const forecasts = response.data.countries[0].locations[0].part_day_forecasts.forecasts.map(
        (forecast) => {
          const {
            timestamp,
            temperature,
            precis,
            wind_direction,
            wind_speed,
          } = forecast;
          return {
            timestamp: new Date(timestamp).toString(),
            temperature,
            precis,
            windDirection: wind_direction,
            windSpeed: wind_speed,
          };
        }
      );
      dispatch({
        type: FETCH_DATA,
        payload: { forecasts },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
