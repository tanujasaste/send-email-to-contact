function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("Email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("msg").value,
    }

    emailjs.send("service_ndmg66b", "template_vfrip2r",parms).then(alert("msg sent!"));
}