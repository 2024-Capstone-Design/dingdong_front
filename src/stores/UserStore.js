import { makeAutoObservable } from "mobx";
import { studentTaskStore } from "../stores/StudentTaskStore";

class UserStore {
  user = null;

  constructor() {
    this.loadUser();
    makeAutoObservable(this);
  }

  loadUser() {
    try {
      const storedUser = localStorage.getItem("user");
      this.user = storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      this.user = null;
    }
  }

  setUser(user) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return this.user;
  }

  getUserId() {
    if (this.user && this.user.data) {
      return this.user.data.role === "STUDENT" ? this.user.data.student.id : this.user.data.teacher.id;
    }
    return null;
  }

  clearUser() {
    this.user = null;
    localStorage.removeItem("user");
    studentTaskStore.clearTasks();
  }
}

export const userStore = new UserStore();
