let moduleBottomLink = {};      

(function(m) {
    m.create=createBottomLink;
  
    function createBottomLink(target) {
      let bottomLink = document.createElement("div");
      bottomLink.classList.add("bottom_link");
      target.append(bottomLink);
      bottomLink.innerHTML = "Уже имеете аккаунт? <a href=''>Войдите</a>";
    } 

}(moduleBottomLink));