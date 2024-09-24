// src/stores/StudentTaskStore.js
import { makeAutoObservable } from "mobx";

class StudentTaskStore {
  tasks = JSON.parse(localStorage.getItem("st_tasks")) || [];

  constructor() {
    makeAutoObservable(this);
  }

  setTasks(tasks) {
    this.tasks = tasks;
    localStorage.setItem("st_tasks", JSON.stringify(tasks));
  }

  getTasks() {
    return this.tasks;
  }

  clearTasks() {
    this.task = [];
    localStorage.removeItem("st_tasks");
  }
}

export const studentTaskStore = new StudentTaskStore();
