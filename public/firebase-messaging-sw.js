importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js')

firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  messagingSenderId: 'xxx'
})
const messaging = firebase.messaging()
// messaging.setBackgroundMessageHandler(function(payload) {
//   const promiseChain = clients
//     .matchAll({
//       type: "window",
//       includeUncontrolled: true
//     })
//     .then(windowClients => {
//       for (let i = 0; i < windowClients.length; i++) {
//         const windowClient = windowClients[i];
//         windowClient.postMessage(payload);
//       }
//     })
//     .then(() => {
//       return registration.showNotification("my notification title");
//     });
//   return promiseChain;
// });

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  // Customize notification here
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/NLogo72x72.png'
  }

  return self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', function (event) {
  // do what you want
  // ...
})

// tokens for localhost: fnSoziJ5ulZo7p31pD2l09:APA91bE551gytxWI9oPhbjiMXd4gaHY2AgAvaorVCNS_DW7sAnP2X5GziF3lzoylvkFLh7dtn_Qwtketp5M5mAKgUPwLwUEcEDjlnoEe6pF1bjOwQfJCRhJV0we-hy0DwzpQYeo8x34e

// live is : dIvH-N_G_cv9v29RtDTlo5:APA91bFo8P1tjwFaRFYdR07cieSrU_34iRAyrfSwHb6z7XEtqqa1nF6-BwCQ7y1dmRoJ2MPt72n6UWv322iVxGIT9bk-VZEcdKQ4kr9l0yGVbZAL-iXRkDmDj43QN2QBTrgmNGo0weSy
