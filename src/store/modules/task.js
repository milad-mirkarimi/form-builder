import TaskService from "@/services/TaskService.js";

export const namespaced = true;

export const state = {
  tasks: [],
  tasksTotal: 0,
  task: {},
  perPage: 3
};

export const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  SET_TASKS_TOTAL(state, tasksTotal) {
    state.tasksTotal = tasksTotal;
  }
};

export const actions = {
  fetchTasks({ commit, state }, { page }) {
    return TaskService.getTasks(state.perPage, page)
      .then(response => {
        commit("SET_TASKS_TOTAL", parseInt(response.headers["x-total-count"]));
        commit("SET_TASKS", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
