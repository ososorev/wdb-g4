let moduleCheckBox = {};      

(function(m) {
    m.create=create;
  
    function create(target) {
      let resultChechBoxs = createChechBoxs(target);
      createPolicyLink(resultChechBoxs);
    }

    function createChechBoxs(target) {
      let checkBoxs = document.createElement("div");
      checkBoxs.classList.add("check_boxs");
      target.append(checkBoxs);
      return checkBoxs;
    }  
      
    function createPolicyLink(resultChechBoxs) {
      let policyLink = document.createElement("div");
      policyLink.classList.add("policy");
      policyLink.innerHTML="Регистрируясь, вы подтверждаете, что принимаете <a href=''>Условия пользования</a> и <a href=''>Политику конфиденциальности</a>";
      resultChechBoxs.append(policyLink);
    }  
// изменить гиперссылку на innerHTML++
}(moduleCheckBox));