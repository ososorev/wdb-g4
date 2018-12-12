document.addEventListener("DOMContentLoaded", function (event) {
    
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms,createFormValidation);
    
    let signUpReference=document.getElementById("signUpReference");
    signUpReference.addEventListener("click" , createFormSignUp);
    
    let forgetPasswordReference=document.getElementById("forgetPasswordReference");
    forgetPasswordReference.addEventListener("click" , function(e){
        e.preventDefault();
        document.location.href="resetPassword.html";
    },false);
});
