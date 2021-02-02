import "./weather.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectLocation } from "../../redux/location/selector";
import { selectWeatherForecasts } from "../../redux/weather/selector";
import { fetchDataByLocation } from "../../redux/weather/action";
import { useEffect } from "react";

function Weather() {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectLocation) || "sydney";
  const forecasts = useSelector(selectWeatherForecasts);
  useEffect(() => {
    const fun = async () => {
      try {
        await dispatch(fetchDataByLocation(selectedLocation));
      } catch (err) {
        console.log(err);
      }
    };
    fun();
  }, [selectedLocation, dispatch]);
  if (forecasts?.length < 1) {
    return <div>....isLoading</div>;
  }
  return (
    <div className="weather-container">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature</th>
            <th>Precis</th>
            <th>Wind Direction</th>
            <th>Wind Speed</th>
          </tr>
        </thead>
        {forecasts.map((forecast, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{forecast.timestamp}</td>
                <td>{forecast.temperature}</td>
                <td>{forecast.precis}</td>
                <td>{forecast.windDirection}</td>
                <td>{forecast.windSpeed}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Weather;
