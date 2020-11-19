// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDYsdYx6PzgJ7ssBb2zIQFdE50-bEm_GKY",
  authDomain: "chamados-585c3.firebaseapp.com",
  databaseURL: "https://chamados-585c3.firebaseio.com",
  projectId: "chamados-585c3",
  storageBucket: "chamados-585c3.appspot.com",
  messagingSenderId: "1087443892688",
  appId: "1:1087443892688:web:420495f6f6675c0df061d5",
  measurementId: "G-CR9DZEXV2S"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const notification = JSON.parse(payload.data.notification);

  return self.registration.showNotification(notification.title, notification);
});
