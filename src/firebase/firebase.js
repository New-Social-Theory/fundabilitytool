import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6XqPiH_YYwszQoOxwpSv6evj8U1CRR6Y",
  authDomain: "fundability-tool.firebaseapp.com",
  projectId: "fundability-tool",
  storageBucket: "fundability-tool.appspot.com",
  messagingSenderId: "39390750858",
  appId: "1:39390750858:web:34e4915bd8ade01ab6a573",
  databaseURL: 'https://fundability-tool-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);