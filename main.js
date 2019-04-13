// console.log("test");

var fname = document.getElementById("first-name");
var lname = document.getElementById("last-name");
var message = document.getElementById("message");
var radioButtons = document.getElementsByName("gender");

function validateForm(e) {


    if(fname.value.length >= 2){
        console.log(fname.value);
        fname.style.borderColor = "green";
    }
    else{
        console.log("Your First Name must heve a minimum 2 characters!");
        console.log(fname.value);
        fname.style.borderColor = "red";
    }

    if(lname.value.length >= 2){
        console.log(lname.value);
        lname.style.borderColor = "green";
    }
    else{
        console.log("Your Last Name must heve a minimum 2 characters!");
        console.log(lname.value);
        lname.style.borderColor = "red";
    }

    var checked = -1;
    for (var i = 0; i < radioButtons.length; i++) {
        // console.log(i);
        if (radioButtons[i].checked) {
            checked = i;
            console.log(radioButtons[i].value);

        }
    }
    if (checked == -1){
        console.log("YOU MUST SELECT GENDER!");
    }

    if(message.value.length >= 10){
        console.log(message.value);
        message.style.borderColor = "green";
    }
    else{
        console.log("Your message must heve a minimum 10 characters!");
        console.log(message.value);
        message.style.borderColor = "red";
    }

    e.preventDefault();
}

document.getElementById("message-form").addEventListener("submit" , validateForm);
