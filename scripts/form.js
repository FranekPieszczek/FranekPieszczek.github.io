
function validate(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const radioButtons = document.querySelectorAll('input[name="costam"]');
    let selectedValue = null;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            break;
        }
    }

    const checkboxes = document.querySelectorAll('input[name="checkboxy"]');
    let selectedValues = [];
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    }

    const r_username = /[a-zA-Z0-9]{3,}/g;
    const r_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

    let username_check = r_username.test(username);
    let password_check = r_password.test(password);

    let isValid = true;

    document.getElementById("username_err").innerHTML = "*";
    document.getElementById("password_err").innerHTML = "*";
    document.getElementById("email_err").innerHTML = "*";
    document.getElementById("radio_err").innerHTML = "*";
    document.getElementById("checkbox_err").innerHTML = "*";

    //checking username
    if(username === ""){
        isValid = false;
        document.getElementById("username_err").innerHTML="*<br>Pole nie może być puste";
    }
    else if(!username_check) {
        isValid = false;
        document.getElementById("username_err").innerHTML="*<br>Niepoprawna nazwa użytkownika";
    }
    
    //checking password
    if(password === ""){   
        isValid = false;
        document.getElementById("password_err").innerHTML="*<br>Pole nie może być puste";
    }
    else if(!password_check){
        isValid = false;
        document.getElementById("password_err").innerHTML="*<br>Niepoprawne hasło";
    } 
    
    //checking email
    if(email === ""){  
        isValid = false; 
        document.getElementById("email_err").innerHTML="*<br>Pole nie może być puste";
    }

    //checking radio buttons
    if(!selectedValue){
        isValid = false;
        document.getElementById("radio_err").innerHTML="*<br>Wybierz jedną z opcji";
    }

    //checking checkboxes
    if(selectedValues.length == 0){
        isValid = false;
        document.getElementById("checkbox_err").innerHTML="*<br>Wybierz przyajmniej jedną opcję";
    }

    if(!isValid) return;

}