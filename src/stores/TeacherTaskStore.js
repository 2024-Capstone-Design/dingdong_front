// src/stores/TeacherTaskStore.js
import { makeAutoObservable } from "mobx";

class TeacherTaskStore {
  tasks = JSON.parse(localStorage.getItem("t_tasks")) || [];

  constructor() {
    makeAutoObservable(this);
  }

  setTasks(tasks) {
    this.tasks = tasks;
    localStorage.setItem("t_tasks", JSON.stringify(tasks));
  }

  getTasks() {
    return this.tasks;
  }

  clearTasks() {
    this.task = [];
    localStorage.removeItem("t_tasks");
  }
}

export const teacherTaskStore = new TeacherTaskStore();
