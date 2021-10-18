import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";
import { initializeApp } from "firebase/app";
import router from "./router/index";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSvZLZ0X5OXVhhsGYV0NvtNmJOYLD_dRU",
  authDomain: "vue-portfolio-34c94.firebaseapp.com",
  projectId: "vue-portfolio-34c94",
  storageBucket: "vue-portfolio-34c94.appspot.com",
  messagingSenderId: "660409853528",
  appId: "1:660409853528:web:4715b0a888d15aff224c2d",
};

// Initialize Firebase
initializeApp(firebaseConfig);

let app;

if (!app) {
  app = createApp(App);
  app.use(router);
  app.mount("#app");
}
