// src/api/index.js
import { setTokens, getAccessToken, logout } from './auth';
import { API_BASE_URL } from '../config';
import { userStore } from "../stores/UserStore";
import { studentTaskStore } from "../stores/StudentTaskStore";
import { teacherTaskStore } from "../stores/TeacherTaskStore";

const api = {
  async fetchWithAuth(url, options = {}) {
    const token = getAccessToken();
    if (token) {
      options.headers = {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
      };
    }

    const response = await fetch(url, options);

    if (response.status === 401 && !options._retry) {
      options._retry = true;
      const refreshResponse = await this.tokenRefresh();
      if (refreshResponse.ok) {
        const data = await refreshResponse.json();
        setTokens(data.accessToken, data.refreshToken);
        options.headers['Authorization'] = `Bearer ${data.accessToken}`;
        return fetch(url, options);
      } else {
        this.logout();
        window.location.href = '/login'; // Redirect to login page
      }
    }

    return response;
  },

  async studentLogin(data) {
    const response = await fetch(`${API_BASE_URL}/api/v1/student/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      setTokens(responseData.data.accessToken, responseData.data.refreshToken);
      // console.log("토큰", getAccessToken());
      const userData = await this.getCurrentUser()
      const taskData = await this.getStudentTasks(userData.data.student.id);
    } else {
      alert(`아이디와 비밀번호를 확인해주세요`);
    }

    return response;
  },

  async teacherLogin(data) {
    const response = await fetch(`${API_BASE_URL}/api/v1/teacher/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("로그인", responseData)
      setTokens(responseData.data.accessToken, responseData.data.refreshToken);
      const userData = await this.getCurrentUser();
      const taskData = await this.getTasksByTeacher(userData.data.teacher.id);
    } else {
      alert(`아이디와 비밀번호를 확인해주세요`);
    }

    return response;
  },

  async updateTeacherProfilePicture(data) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/teacher/update-profile-picture`, {
      method: 'POST',
      body: data,
    });
    return response;
  },

  async teacherSignup(data) {
    const response = await fetch(`${API_BASE_URL}/api/v1/teacher/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-ts)`);
    }

    return response;
  },

  async teacherResetPassword(data) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/teacher/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-trpw)`);
    }

    return response;
  },

  async registerStudents(data) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/teacher/register-students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-rgst)`);
    }

    return response;
  },

  async updateStudentProfilePicture(data) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/student/update-profile-picture`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-uspp)`);
    }

    return response;
  },

  async studentResetPassword(data) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/student/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-srpw)`);
    }

    return response;
  },

  async getCurrentUser() {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/user/current`);

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-gcu)`);
    }

    const data = await response.json();
    userStore.setUser(data.data);
    return data;
  },

  async tokenRefresh() {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/tokenRefresh`);

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-tkrf)`);
    }

    return response;
  },

  async logout() {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/auth/logout`, {
      method: 'POST',
    });

    if(response.ok){
      alert("로그아웃 되었습니다")
      logout();
    }
    else if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-lgot)`);
    }

    return response;
  },

  async getTasksByTeacher(teacherId) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/task/teacher/${teacherId}`);
    if (response.ok){
      const responseData = await response.json();
      teacherTaskStore.setTasks(responseData.data.items);
    }

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-gtbt)`);
    }

    return response;
  },

  async addTask(data) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/task`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-adtk)`);
    }

    return response;
  },

  async getGroupsByTeacher(teacherId) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/group/teacher/${teacherId}`);

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-ggbt)`);
    }

    return response;
  },

  async createGroup(data) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/group`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-crgp)`);
    }

    return response;
  },

  async getFairytales() {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/fairytale`);

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-gtrt)`);
    }

    return response;
  },

  async getFairytaleById(id) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/fairytale/${id}`);

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-gfrtbi  ${id})`);
    }

    return response;
  },

  async addFairytale(data) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/fairytale`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-adft)`);
    }

    return response;
  },

  async getOrganizations() {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/org`);

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-gorg)`);
    }

    return response;
  },

  async getStudentTasks(studentId) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/student-task-progress/student/${studentId}`);
    if (response.ok){
      const responseData = await response.json();
      studentTaskStore.setTasks(responseData.data.items);
    }
    else if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-gsts)`);
    }

    return response;
  },

  async updateStudentTaskProgress(studentTaskId, data) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/student-task-progress/${studentTaskId}/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-ustp)`);
    }

    return response;
  },

  async startStudentTaskProgress(data) {
    const response = await this.fetchWithAuth(`${API_BASE_URL}/api/v1/student-task-progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert(`잠시 후 다시 시도해주세요 (error: ${response.status}-sstp)`);
    }

    return response;
  },
};

export { api };
