import data from "./testData.json";
import axios from "axios";

export const fetchData = async (location) => {
  return await axios.get(
    `https://ws.weatherzone.com.au/?lt=aploc&lc=${location}&locdet=1&latlon=1&pdf=twc(period=48,detail=2)&u=1&format=json`
  );
};
