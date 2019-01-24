let moduleUserDataForm = {};      

(function(m) {
    m.create=create;
  
    function create(target) {
      let resultUserDataForm = createUserDataForm(target);
      
      let resultEmailDiv = createEmailDiv(resultUserDataForm);
      createEmailLabel(resultEmailDiv); 
      createEmailInput(resultEmailDiv);
      createEmailInvalidFeedback(resultEmailDiv);
      
      let resultPasswordDiv = createPasswordDiv(resultUserDataForm);
      createPasswordLabel(resultPasswordDiv);
      createPasswordInput(resultPasswordDiv);
      createPasswordInvalidFeedback(resultPasswordDiv);
      
      createHiddenDiv(resultUserDataForm);
    }

    function createUserDataForm(target) {
      let userDataForm = document.createElement("div");
      userDataForm.classList.add("user_data");
      target.append(userDataForm);
      return userDataForm;
    }
  
    function createEmailDiv(resultUserDataForm) {
      let EmailDiv = document.createElement("div");
      EmailDiv.classList.add("email");
      resultUserDataForm.append(EmailDiv);
      return EmailDiv;
    }
    
    function createEmailLabel(resultEmailDiv) {
      let emailLabel = document.createElement("label");
      emailLabel.for = "eml";
      emailLabel.innerHTML = "Email";
      emailLabel.style.display = "none";
      resultEmailDiv.append(emailLabel);
    }  
      
    function createEmailInput(resultEmailDiv) {
      let emailInput = document.createElement("input");
      emailInput.classList.add("form-control", "border-top-0", "border-right-0", "border-left-0", "rounded-0");
      emailInput.id="eml";
      emailInput.type="email"; 
      emailInput.name="email";
      emailInput.placeholder="E-Mail";
      emailInput.setAttribute("required","");
      resultEmailDiv.append(emailInput);
    }  
      
    function createEmailInvalidFeedback(resultEmailDiv) {
      let emailInvalidFeedback = document.createElement("div");
      emailInvalidFeedback.classList.add("invalid-feedback");
      emailInvalidFeedback.innerHTML = "Введите адрес электронной почты!";
      resultEmailDiv.append(emailInvalidFeedback);
      }
  
  
  
    function createPasswordDiv(resultUserDataForm) {
      let PassDiv = document.createElement("div");
      PassDiv.classList.add("pass");
      resultUserDataForm.append(PassDiv);
      return PassDiv;
    }
  
    function createPasswordLabel(resultPasswordDiv) {
      let passwordLabel = document.createElement("label");
      passwordLabel.for = "pss";
      passwordLabel.innerHTML = "Пароль";
      passwordLabel.style.display = "none";
      resultPasswordDiv.append(passwordLabel);
    }  
      
    function createPasswordInput(resultPasswordDiv) {
      let passwordInput = document.createElement("input");
      passwordInput.classList.add("form-control", "border-top-0", "border-right-0", "border-left-0", "rounded-0");
      passwordInput.id="pss";
      passwordInput.type="password"; 
      passwordInput.name="pass";
      passwordInput.placeholder="Пароль";
      passwordInput.setAttribute("required","");
      resultPasswordDiv.append(passwordInput);
    }  
      
    function createPasswordInvalidFeedback(resultPasswordDiv) {
      let passwordInvalidFeedback = document.createElement("div");
      passwordInvalidFeedback.classList.add("invalid-feedback");
      passwordInvalidFeedback.innerHTML = "Введите пароль!";
      resultPasswordDiv.append(passwordInvalidFeedback);
      }
  
  
  function createHiddenDiv(resultUserDataForm) {
      let hiddenDiv = document.createElement("div");
      hiddenDiv.classList.add("for_fetch_data");
      resultUserDataForm.append(hiddenDiv);
      }
  

}(moduleUserDataForm));