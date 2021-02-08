import WeatherService from "@/services/WeatherService.js";

export const namespaced = true;

export const state = {
  weather: null
};

export const mutations = {
  GET_WEATHER(state, weather) {
    state.weather = weather;
  }
};

export const actions = {
  fetchWeather({ commit }) {
    return WeatherService.getWeather()
      .then(response => {
        commit("GET_WEATHER", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
