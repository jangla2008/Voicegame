const firebaseConfig = {
  apiKey: "AIzaSyBDVg7UDMwDcmdBbxMPv7ho6-euG4f-UCs",
  authDomain: "voiceballgame-35f3c.firebaseapp.com",
  projectId: "voiceballgame-35f3c",
  storageBucket: "voiceballgame-35f3c.firebasestorage.app",
  messagingSenderId: "239485816623",
  appId: "1:239485816623:web:8d5e2b37c77f50f48b1bda",
  measurementId: "G-QQ96PV75TW"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function signup() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, pass)
    .then(() => alert('Signup done!'))
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
      document.getElementById('auth').style.display = 'none';
      document.getElementById('gameScreen').style.display = 'block';
    })
    .catch(err => alert(err.message));
}