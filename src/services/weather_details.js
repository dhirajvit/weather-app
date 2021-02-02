import data from "./testData.json";
import axios from "axios";

const testFun = async () => {
  return new Promise((resolve, reject) => resolve(data));
};
export const fetchData = async (location) => {
  // const data =  await testFun();
  // console.log(data)
  // return data
  return await axios.get(
    `https://ws.weatherzone.com.au/?lt=aploc&lc=${location}&locdet=1&latlon=1&pdf=twc(period=48,detail=2)&u=1&format=json`
  );
};
