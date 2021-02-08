import apiClient from "./apiClient.js";

export default {
  getTasks(perPage, page) {
    return apiClient.get("/tasks?_limit=" + perPage + "&_page=" + page);
  }
};
