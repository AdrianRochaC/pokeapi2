import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAnHZMlpRkbUPWVypbU5NcDuHw_c-_bGdU",
    authDomain: "pokeapi2-a1cd1.firebaseapp.com",
    projectId: "pokeapi2-a1cd1",
    storageBucket: "pokeapi2-a1cd1.firebasestorage.app",
    messagingSenderId: "842487617092",
    appId: "1:842487617092:web:b08b3131bcfb3f12944e11"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };