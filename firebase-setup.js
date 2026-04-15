// firebase-setup.js
// Dit bestand regelt de verbinding. Beide HTML pagina's gebruiken dit.

// --- CONFIGURATIE (Vul hier je gegevens in) ---
const firebaseConfig = {
  apiKey: "AIzaSyAypJeyJcGQhePR7NX5fVpVXfNmuk836Uk",
  authDomain: "tupperlife-5ee9c.firebaseapp.com",
  projectId: "tupperlife-5ee9c",
  storageBucket: "tupperlife-5ee9c.firebasestorage.app",
  messagingSenderId: "73539007904",
  appId: "1:73539007904:web:df2d2218de559ee45060c5"
};

// Controleren of Firebase al geladen is via de CDN scripts in HTML
if (typeof firebase !== 'undefined') {
    // Initialiseer alleen als het nog niet bestaat
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    
    // Maak deze variabelen beschikbaar voor de hele pagina (window)
    window.auth = firebase.auth();
    window.db = firebase.firestore();
    window.googleProvider = new firebase.auth.GoogleAuthProvider();
    
    // Jouw app ID
    window.appId = 'mijn-tupperware-app';
} else {
    console.error("Firebase scripts zijn niet geladen in de HTML!");
}