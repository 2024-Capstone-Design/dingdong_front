// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// 환경 변수로부터 Firebase 설정 가져오기
const firebaseConfig = {
    apiKey: 'AIzaSyBGM8BJtkGemOdv3tILWxEydCttyMCbSzc',
    authDomain: 'dingdong-fa0ce.firebaseapp.com',
    projectId: 'dingdong-fa0ce',
    storageBucket: 'dingdong-fa0ce.appspot.com',
    messagingSenderId: '233225167111',
    appId: '1:233225167111:web:ec29c085c8de54cb62e5a2'
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

export { storage, database };