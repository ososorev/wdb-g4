let moduleFormMain = {};      

(function(m) {
    m.create=create;
  
    function create(target) {
      let resultFormMain = createFormMain(target);  
      let finalResult = createForm(resultFormMain); 
      return finalResult;
    }
    function createFormMain(target) {
      let formMain = document.createElement("div");
      formMain.classList.add("form_main");
      target.append(formMain);
      return formMain;
    }
      
    function createForm(resultFormMain) {
      let form = document.createElement("form");
      form.classList.add("needs-validation");
      resultFormMain.append(form);
      form.method='POST';
      form.action='php/regist.php';
      form.setAttribute("novalidate",""); 
      return form;
    } 

}(moduleFormMain));