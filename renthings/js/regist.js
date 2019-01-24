import "./createRegistrationForm.js";
import "./createFormTitle.js";
import "./createFormMain.js";
import "./createUserDataForm.js";
import "./createRegistrationButton.js";
import "./createCheckBox.js";
import "./createBottomLink.js";


document.addEventListener("DOMContentLoaded", function (event) {
    let RegForm = moduleRegForm.create();
    moduleFormTitle.create(RegForm);
    let FormMain = moduleFormMain.create(RegForm);
    moduleUserDataForm.create(FormMain);
    moduleRegistrationButton.create(FormMain);
    moduleCheckBox.create(FormMain);
    moduleBottomLink.create(RegForm);
     
    
    
});

function fetchData(event) {
        event.preventDefault();
        var form = document.querySelector('form');
      
        fetch('/renthings/php/regist.php', {
            method: "POST",
            body: new FormData(form),
          }).then(response=>{
            return response.text();
          }).then(text => {
            if (text == "User with the same name already exists") {
              document.querySelector(".for_fetch_data").innerHTML=text;
              
            }
           else {
             goto_email_confirm();
           }
        });
         return false;
      }

function goto_email_confirm() {
       window.location.href='confirm_email.html';
    }

(function() {
      'use strict';
      window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            else {
              fetchData(event);
            }  
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();

