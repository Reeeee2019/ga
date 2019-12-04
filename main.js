// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyBRNW5ofd2d9zRn818pCKHHvfIg_jVwfQA",
    authDomain: "work191204.firebaseapp.com",
    databaseURL: "https://work191204.firebaseio.com",
    projectId: "work191204",
    storageBucket: "work191204.appspot.com",
    messagingSenderId: "1072413791526"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact88');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
    comment: $('.com99').val(),
	
  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});