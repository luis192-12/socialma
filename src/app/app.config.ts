import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'epis-e2c16',
        appId: '1:313291988454:web:8e9536238593a911ce4a27',
        storageBucket: 'epis-e2c16.firebasestorage.app',
        apiKey: 'AIzaSyCc5wufsz7HHFXA3k3ItKY7YeChprrc6eg',
        authDomain: 'epis-e2c16.firebaseapp.com',
        messagingSenderId: '313291988454',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
