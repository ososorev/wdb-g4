//       Вывод ID сессии
      (function() {
          window.addEventListener('load', function(event) {
             fetch ('/renthings/php/getUser.php')
                .then(response=>{
                return response.text();
                })
               .then(text => {
                   if (text != "") {
                       window.location.href='allRequests.html';
//                      document.querySelector(".ch-box").innerHTML=text;
                   }   
               }) 
            
          }, false);
      })();  