const API_Key = "e95a922a84dc02e750e724eec8f2241c";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const getWeather = (infotype, searchparams) => {
  const url = new URL(BASE_URL + infotype);
  url.search = new URLSearchParams({ ...searchparams, appid: API_Key });
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};
export default getWeather;
