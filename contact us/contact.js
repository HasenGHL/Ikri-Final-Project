function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "elghoulhasen@gmail.com",
        Password : "793A86EB18EAB996EFA23C39746C77F465B5",
        To : 'ghoulhasen@hotmail.com',
        From : document.getElementById('email').value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}