import "./main-app.scss";
import Location from "../location";
import Weather from "../weather";

function App() {
  return (
    <div className="app-container"  data-testid="app-container-test-id">
      <div className="app-container__header" data-testid="app-container__header-test-id">Weather App</div>
      <div className="app-container__screen" data-testid="app-container__screen-test-id">
        <div className="screen-container" data-testid="screen-container-test-id">
          <div className="screen-container__sidebar" data-testid="screen-container-test-id">
            <Location />
          </div>
          <div className="screen-container__main" data-testid="screen-container-test-id">
            <Weather />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
