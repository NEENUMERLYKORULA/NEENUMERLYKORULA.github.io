//Validtion Code For Inputs
let regexp = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


var email = document.forms['form11']['email'];
var pwd = document.forms['form11']['pwd'];
var emailid = document.forms['form1']['emailid'];
var phone = document.forms['form1']['phone'];
var terms = document.forms['form1']['chkbox'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var emailid_error = document.getElementById('emailid_error');
var ph_error = document.getElementById('ph_error');

email.addEventListener('textInput', email_Verify);
pwd.addEventListener('textInput', pass_Verify);
emailid.addEventListener('textInput', emailid_Verify);
phone.addEventListener('textInput', phone_Verify);
terms.addEventListener('textInput', chk_Verify);


function login_validated() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (pwd.value.length < 6) {
        pwd.style.border = "1px solid red";
        pass_error.style.display = "block";
        pwd.focus();
        return false;
    }

}
function email_Verify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function pass_Verify() {
    if (pwd.value.length >= 5) {
        pwd.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}
function validate() {
    if (!(regexp.test(emailid.value))) {
        emailid.style.border = "1px solid red";
        emailid_error.style.display = "block";
        emailid.focus();
        return false;
    }


    if (!(phone.value.match(phoneno))) {
        phone.style.border = "1px solid red";
        ph_error.style.display = "block";
        phone.focus();
        return false;
    }
   
    if (!terms.checked){
        alert( "Please accept the Terms of Service and Privacy Policy");
    return false;
    
}

}

function emailid_Verify() {
    //  /^([\w\.-])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})(.[A-Za-z]{2,3})$/;
    if (regexp.test(emailid.value)) {
        emailid.style.border = "1px solid silver";
        emailid_error.style.display = "none";
        return true;
    }
}

function phone_Verify() {
    if (phone.value.match(phoneno)) {
        phone.style.border = "1px solid silver";
        ph_error.style.display = "none";
        return true;
    }
}
function chk_Verify() {
    if (terms.checked){
        return true;
    }
}




