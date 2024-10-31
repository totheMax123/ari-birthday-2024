function validate_password() {
    let x = document.forms["password_input"]["datepick"].value;
    if (x != "2001-11-01") {
        alert("Incorrect password. Try again. ");
        return false;
    }
}