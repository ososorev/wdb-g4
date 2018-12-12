 // Example starter JavaScript for disabling form submissions if there are invalid fields
//        (function() {
//          'use strict';
//          window.addEventListener('load', function() {
//            // Fetch all the forms we want to apply custom Bootstrap validation styles to
//            var forms = document.getElementsByClassName('needs-validation');
//            // Loop over them and prevent submission
//            var validation = Array.prototype.filter.call(forms, function(form) {
//              form.addEventListener('submit', function(event) {
//                if (form.checkValidity() === false) {
//                  event.preventDefault();
//                  event.stopPropagation();
//                }
//                form.classList.add('was-validated');
//              }, false);
//            });
//          }, false);
//        })();

//------------------------------------------------------
//function createFormSignUp(event){
//    event.preventDefault();
//    removeForm(); 
////    clearForm();
//    let main=document.querySelector("main");
//    main.append(createForm());
//
////    var submit = document.getElementById('submit');
////    submit.addEventListener("click",submitClickHandler);
//    
//    var forms=document.getElementsByClassName('needs-validation');
////    var click=Array.prototype.filter.call(forms,submitClickHandler);//исправить это дерьмо    
//    var validationFetch=Array.prototype.filter.call(forms,submitClickHandler);
//}
//--
//function submitClickHandler(form){
//form.addEventListener('submit', function(event){
////function submitClickHandler(event){
////    setTimeout(function(event){
//    event.preventDefault();
//    if (form.checkValidity() === false) {
//          event.stopPropagation();
//        }
//    else{
//        var formData = new FormData();
//        var email = document.getElementById('email').value;
//        formData.append('email', email);
//        var myInit = {
//            method: 'POST',
//            body: formData
//        }
//        fetch('signUp.php', myInit)
//            .then(function(response){return response.text();})
//            .then(function(result){document.getElementsByTagName('body')[0].innerHTML = result;});
//    }
////    },0);
//}
//)}