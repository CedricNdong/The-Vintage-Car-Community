import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBMqmFabr9fD7Zi5xcqjRt2yUvuLec64t4",
//   authDomain: "vintagecar-bfe05.firebaseapp.com",
//   projectId: "vintagecar-bfe05",
//   storageBucket: "vintagecar-bfe05.appspot.com",
//   messagingSenderId: "861719276967",
//   appId: "1:861719276967:web:714b87b56379162da99a82",
//   measurementId: "G-T5TZHDXZW3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);