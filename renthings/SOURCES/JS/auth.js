function sendData() {
    var a = document.getElementById('email').value;
    var b = document.getElementById('pwd').value;
    var action = document.getElementById('btn1').value;
    var myform = new FormData();
    myform.append('v1', a);
    myform.append('v2', b);
    myform.append('action', action);
    fetch('./SOURCES/PHP/auth.php', {method: "POST", 
                         body: myform
                      })
//                .then(data=>data.text())
        .then(data=>data.json())                
        .then(data=>{
                     if (data.length!=0){
                     document.getElementById('userinfo').innerHTML ='ИД пользователя: '+data['ID']+', Имя пользователя: '+data['USER_NAME'];
                     }
                     else{
                     document.getElementById('userinfo').innerHTML ='Пользователь не найден';    
                     }
                     viewSessionInfo();
//                            alert(data['ID']);
             })
}
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
          event.preventDefault();
          event.stopPropagation();

          if (form.checkValidity() === true) {
            sendData();
          }                          
      form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

