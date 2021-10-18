import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";
import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSvZLZ0X5OXVhhsGYV0NvtNmJOYLD_dRU",
  authDomain: "vue-portfolio-34c94.firebaseapp.com",
  projectId: "vue-portfolio-34c94",
  storageBucket: "vue-portfolio-34c94.appspot.com",
  messagingSenderId: "660409853528",
  appId: "1:660409853528:web:4715b0a888d15aff224c2d",
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.mount("#app");
