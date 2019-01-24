let moduleRegistrationButton = {};      

(function(m) {
    m.create=create;
  
    function create(target) {
      let DivButton = createDivButton(target);
      createButtonReg(DivButton);
    }

    function createDivButton(target) {
      let divButton = document.createElement("div");
      divButton.classList.add("button");
      target.append(divButton);
      return divButton;
    }
      
    function createButtonReg(DivButton) {
      let buttonReg = document.createElement("button");
      buttonReg.classList.add("btn-block");
      buttonReg.type="submit";
      buttonReg.innerHTML="Зарегистрироваться";
      DivButton.append(buttonReg);
    }

}(moduleRegistrationButton));