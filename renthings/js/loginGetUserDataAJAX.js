//   AJAX, вывод результата "Есть ли пользователь в БД?"
 
      function fetchData(event) {
        event.preventDefault();
        var form = document.querySelector('form');
      
        fetch('/renthings/php/login.php', {
            method: "POST",
            body: new FormData(form),
          }).then(response=>{
            return response.text();
          }).then(text => {
              document.querySelector(".for_fetch_data").innerHTML=text;
        });
         return false;
      }
      
//  Проверка полей с помощью Bootstrap
      
    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
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