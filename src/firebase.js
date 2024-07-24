// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// 환경 변수로부터 Firebase 설정 가져오기
const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };