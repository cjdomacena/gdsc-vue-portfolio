import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.mount('#app')