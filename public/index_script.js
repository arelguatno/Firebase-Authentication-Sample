// Initialize Firebase
var config = {
    apiKey: "AIzaSyCaBfW9CaDk1nBhZzVB1xLaGAq2BZkATUA",
    authDomain: "authentication-8933c.firebaseapp.com",
    databaseURL: "https://authentication-8933c.firebaseio.com",
    projectId: "authentication-8933c",
    storageBucket: "authentication-8933c.appspot.com",
    messagingSenderId: "911293149755"
};
firebase.initializeApp(config);


//Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
const btnLogout = document.getElementById('btnLogout');
const btnLogInGoogle = document.getElementById('btnLogInGoogle');
const btnLogInGithub = document.getElementById('btnLogInGithub');
const btnTwitter = document.getElementById('btnLogInTwitter');
const btnAnonymous = document.getElementById('btnAnonymous');
const btnResetPassword = document.getElementById('btnResetPassword');
const btnVerifyEmail = document.getElementById('btnVerifyEmail');
const btnCustomAuth = document.getElementById('btnCustomAuth');
const txtToken = document.getElementById('txtToken');


const txtEmail2 = document.getElementById('txtEmail');
const txtPassword2 = document.getElementById('txtPassword');
const btnLogin2 = document.getElementById('btnLogin');

// Login
btnLogin.addEventListener('click', function () {

});

//Sign up 
btnSignup.addEventListener('click', e => {
});

// Google Login
btnLogInGoogle.addEventListener('click', e => {

});

// Facebook Login
btnLogInFacebook.addEventListener('click', e => {

});

// Github Login
btnLogInGithub.addEventListener('click', e => {

});

// Twitter Login
btnTwitter.addEventListener('click', e => {

});

// Anonymous Login
btnAnonymous.addEventListener('click', e => {

});

// Resetpassword Login
btnResetPassword.addEventListener('click', e => {

});

// btnVerifyEmail Login
btnVerifyEmail.addEventListener('click', e => {

});

// Custom Auth Login
btnCustomAuth.addEventListener('click', e => {
    const customToken = txtToken.value;

    firebase.auth().signInWithCustomToken(customToken).then(function () {
        // Sign-out successful.
        console.log("olright");
    }).catch(function (error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
    });


});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {

        txtEmail.value = "";
        txtPassword.value = "";
        console.log("User: " + firebaseUser.email);

    } else {
        console.log("Nog logged in");
    }
});

