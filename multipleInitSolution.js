The solution is to ensure that `initializeApp` is called only once, using a singleton pattern or a dedicated initialization module to manage the Firebase application. 

```javascript
// firebaseInit.js
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
let app; // Singleton app instance

export const initializeFirebase = () => {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  return app;
};

// In other modules:
import { initializeFirebase } from './firebaseInit';
const firebaseApp = initializeFirebase();
// Use firebaseApp
```
This ensures that only one Firebase instance is created, regardless of how many modules try to initialize Firebase.  Any attempts to initialize Firebase after the first call will simply return the existing instance.