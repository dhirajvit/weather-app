import "./location.scss";
import { ReactComponent as DropdownLogo } from "../../svg/iconmonstr-angel-down-circle-thin.svg";
import React, {  useState } from "react";
import { setLocation } from "../../redux/location/action";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../redux/location/selector";
const locCode = {
  Adelaide: 12495,
  Brisbane: 9388,
  Canberra: 3928,
  Darwin: 11,
  Hobart: 15465,
  Melbourne: 5594,
  Perth: 13896,
  Sydney: 624,
};
function Location() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  // Assumption: user location is sydney.
  const selectedLocation = useSelector(selectLocation) || "624";
  return (
    <div
      className={
        active
          ? "location-container location-container__active"
          : "location-container"
      }
    >
      <div
        className="location-container__header"
        onClick={() => setActive(!active)}
      >
        <div>Location</div>
        <DropdownLogo />
      </div>
      <div className="location-container__headerlist">
        {active && (
          <ul>
            {Object.keys(locCode).map((location) => (
              <li
                key={location}
                onClick={() => dispatch(setLocation(locCode[location]))}
                className={
                  locCode[location] === selectedLocation
                    ? "location-container__li"
                    : ""
                }
              >
                {location}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Location;
