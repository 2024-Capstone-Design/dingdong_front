// src/stores/StudentTaskStore.js
import { makeAutoObservable } from "mobx";

class StudentTaskStore {
  tasks = JSON.parse(localStorage.getItem("st_tasks")) || [];
  listeners = [];

  constructor() {
    makeAutoObservable(this);
  }

  setTasks(tasks) {
    this.tasks = tasks;
    localStorage.setItem("st_tasks", JSON.stringify(tasks));
    this.notifyListeners();
  }

  getTasks() {
    return this.tasks;
  }

  clearTasks() {
    this.tasks = [];
    localStorage.removeItem("st_tasks");
    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener());
  }
}

export const studentTaskStore = new StudentTaskStore();