// firebase-setup.js
// Dit bestand regelt de verbinding. Beide HTML pagina's gebruiken dit.

// --- CONFIGURATIE (Vul hier je gegevens in) ---
const firebaseConfig = {
  apiKey: "AIzaSyBnJ_HaN0_pmvs8gV9g47wJNMAmVp3XY68",
  authDomain: "tupperlife-e90c5.firebaseapp.com",
  projectId: "tupperlife-e90c5",
  storageBucket: "tupperlife-e90c5.firebasestorage.app",
  messagingSenderId: "993548471182",
  appId: "1:993548471182:web:9b846a1da085685981b2df"
};

// Beheerders: deze e-mailadressen komen na het inloggen in de beheer-app (beheer.html).
// Iedereen anders komt in de gewone app (dashboard.html).
window.ADMIN_EMAILS = ['jaiderjannis@gmail.com', 'kaat.tupperware@gmail.com'];

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
