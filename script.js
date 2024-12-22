const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');


menuIcon.onclick = () =>{
    navLinks.classList.toggle('active');
}
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_w8cx29b", "template_09yf1zj", parms)
        .then(function(response) {
            alert("Email Sent Successfully!");
            console.log('Success:', response);
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.log('Error:', error);
        });
}
