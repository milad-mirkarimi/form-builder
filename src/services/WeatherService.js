import apiClient from "./apiClient.js";

export default {
  getWeather() {
    return apiClient.get(
      "http://api.openweathermap.org/data/2.5/forecast?id=2193734&appid=89310d600b15c0f9a7389fb71d1b1091&units=metric"
    );
  }
};
