import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* steps for authentication
----------------------------
Step 1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. enable auth method

----------------------------

Step 2:
1. Create Login Component
2. Create Register Component
3. Create route for Login and Register

----------------------------

Step 3:
1. Setup sign in method
2. Setup sign out method
3. User state
4. Set a special observer
*/