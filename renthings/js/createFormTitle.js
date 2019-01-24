let moduleFormTitle = {};      

(function(m) {
    m.create=create;
  
    function create(target) {
      let resultFormTitle = createFormTitle(target); 
      let finalResult = createFormTitleText(resultFormTitle);
      return finalResult;
    }
  
    function createFormTitle(target) {
      let formTitle = document.createElement("div");
      formTitle.classList.add("form_title");
      target.append(formTitle);
      return formTitle;
    }

    function createFormTitleText(resultFormTitle) {
      let formTitleText = document.createElement("p");
      formTitleText.innerHTML = "Регистрация";
      resultFormTitle.append(formTitleText);
    } 

}(moduleFormTitle));