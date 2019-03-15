//Firebase
let config = {
    apiKey: "AIzaSyB5rHVoMGXjNKpDCsIkw9WKEmXTvkfSqnY",
    authDomain: "contactform-7b4a2.firebaseapp.com",
    databaseURL: "https://contactform-7b4a2.firebaseio.com",
    projectId: "contactform-7b4a2",
    storageBucket: "contactform-7b4a2.appspot.com",
    messagingSenderId: "1003412055703"
  };
  firebase.initializeApp(config);


//Reference till Firebase
let messagesReference = firebase.database().ref('messages');


//Lyssnar efter submit
document.querySelector('#contactForm').addEventListener('submit',submitForm);


//Skicka form
function submitForm(e) {
    e.preventDefault();

    //Fångar upp värden
    let name = inputVal('name');
    let email = inputVal('email');
    let subject = inputVal('subject');
    let phone = inputVal('phone');
    let message = inputVal('message');

    //Sparar allt
    saveMess(name,email,subject,phone,message);

    
    //Visar en alert
    document.querySelector('.response').style.display = 'block';

    //Tar bort responsen
    setTimeout(function () {
        document.querySelector('.response').style.display = 'none';
    },3000);

    //Reset
    document.querySelector('#contactForm').reset();
}

//Samlar upp alla värden och skickar.
function inputVal(id) {
    return document.getElementById(id).value;
}


//Sparar och skickar till firebase
function saveMess(name,email,subject,phone,message) {
    let newMessagesRef = messagesReference.push();
    newMessagesRef.set({
        name: name,
        email: email,
        subject: subject,
        phone: phone,
        message: message,
    });//Skickar ett object till Firebase
}