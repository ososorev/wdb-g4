function viewSessionInfo(){
    fetch('./SOURCES/PHP/GetSessionData.php', {method: "GET"
                      })
        .then(data=>data.text())
        .then(data=>{
                     document.getElementById('sessioninfo').innerHTML=data;
             })            
}