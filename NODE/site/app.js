const firebaseConfig = {
    apiKey: "AIzaSyCx5mvDYRAJUnf0AwAw5QtYMOM8-j9zeVc",
    authDomain: "projeto3mia-cc96f.firebaseapp.com",
    projectId: "projeto3mia-cc96f",
    storageBucket: "projeto3mia-cc96f.appspot.com",
    messagingSenderId: "368698471143",
    appId: "1:368698471143:web:5ebd45cf3154eeb5ad6842"
  };

  firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
 const email = emailField.value;
 const password = passwordField.value;
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {
 // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);
 })
 .catch((error) => {
 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);
 });
});
