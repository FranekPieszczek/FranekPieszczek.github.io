
function validate(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let fname = document.getElementById("first_name").value;
    let lname = document.getElementById("last_name").value;

    let radioButtons = document.querySelectorAll('input[name="costam"]');
    let selectedValue = null;
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            break;
        }
    }

    let checkboxes = document.querySelectorAll('input[name="checkboxy"]');
    let selectedValues = [];
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    }

    const r_username = /^[a-zA-Z0-9]{3,}$/;
    const r_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    const r_names = /^[a-zA-Z]+$/;

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
        document.getElementById("checkbox_err").innerHTML="*<br>Wybierz przynajmniej jedną opcję";
    }

    if(!isValid) return;

    display_results(username, email, password, fname, lname, selectedValue, selectedValues  );

}

function display_results(username, email, password, fname, lname, radioValue, checkboxValues){
    let content = "<dl><dt>Nazwa użytkownika</dt><dd>" + username + "</dd>"
    + "<dt>Email</dt><dd>" + email + "</dd>"
    + "<dt>Hasło</dt><dd>" + password + "</dd>";

    if(fname != "") content += "<dt>Imię</dt><dd>" + fname + "</dd>";
    if(lname != "") content += "<dt>Nazwisko</dt><dd>" + lname + "</dd>";

    content += "<dt>Radio</dt><dd>" + radioValue + "</dd>";

    content += "<dt>Checkboxy</dt>";
    for(let c of checkboxValues){
        content += "<dd>" + c + "</dd>";
    }

    content += "<input type=\"button\" value=\"Zamknij\" id=\"hide\" onclick=\"hide_results()\">"
        
    document.getElementById("form_results").innerHTML = content;
    document.getElementById("results_container").style.display = "flex";
}

function hide_results() {
    document.getElementById("results_container").style.display = "none";
}