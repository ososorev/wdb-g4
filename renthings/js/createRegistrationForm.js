window.moduleRegForm = {};      

(function(m) {

   m.create=create;

   function createWhiteWrap() { 
      let whiteWrap = document.createElement("div"); 
      whiteWrap.classList.add("white_wrap");
      document.querySelector(".main").append(whiteWrap);
      return whiteWrap;
    }

   function createRegForm(resultWhiteWrap) { 
      let regForm = document.createElement("div");
      regForm.classList.add("reg_form");
      resultWhiteWrap.append(regForm);
      return regForm;
    }
  
   function create () {
     let resultWhiteWrap = createWhiteWrap();
     let finalResult = createRegForm(resultWhiteWrap);
     return finalResult;
   } 
 
}(window.moduleRegForm));


