<!--добавляем хедер-->
function addHeader(){
    let header=document.createElement('header');
    document.querySelector("body").append(header);
    addSubscibeText();
    <!--добавляем twitter-->
    addSocialLink('twit.svg');
    <!--добавляем youtube-->
    addSocialLink('YouTube.svg');
    <!--добавляем facebook-->
    addSocialLink('face.svg');
};
<!--добавляем "Подпишись!"-->
function addSubscibeText(){
    let subscibe=document.createElement('div');
    subscibe.classList.add('subscribe');
    subscibe.innerHTML='Подпишись!';
    document.querySelector('header').append(subscibe);
};

function addSocialLink(imagePath){
    let twit=document.createElement('div');
    twit.classList.add('social');
    document.querySelector('header').append(twit);
    let twit_image=document.createElement('img');
    twit_image.src=imagePath;
    twit.append(twit_image);
};


<!--добавляем мейн-->
function addMain(){
    let main=document.createElement('main');
    document.querySelector("body").append(main);
    addTopMenuBlock();
    addContent(main);
};

<!--добавляем верхнее меню-->
function addTopMenuBlock(){
    let top_menu=document.createElement('div');
    top_menu.classList.add('top_menu');
    document.querySelector('main').append(top_menu);

    <!--добавляем лого-->
    let logo=document.createElement('div');
    logo.classList.add('logo');
    top_menu.append(logo);

    let logo_image=document.createElement('img');
    logo_image.src='logo.svg';
    logo.append(logo_image);
    let user_info=document.createElement('div');
    user_info.id='userinfo';
    top_menu.append(user_info);

    let session_info=document.createElement('div');
    session_info.id='sessioninfo';
    top_menu.append(session_info);                
};

<!--добавляем контент-->
function addContent(mainBlock){
    let content=document.createElement('div');
    content.classList.add('content');
    mainBlock.append(content);
    addFields(content);

};

<!--добавляем форму ввода-->
function addFields(contentBlock){
    let fileds=document.createElement('div');
    fileds.classList.add('fields');
    contentBlock.append(fileds);
    addLoginCaption(fileds);
    addForm(fileds);
    addConditions(fileds);
    addLoginLink(fileds);
};

<!--добавляем загловок рекистрации-->
function addLoginCaption(fieldsBlock){
    let login_caption=document.createElement('div');
    login_caption.classList.add('login_caption');
    login_caption.innerHTML='Регистрация';
    fieldsBlock.append(login_caption);
};			

<!--добавляем саму форму-->
function addForm(fieldsBlock){
    let myform=document.createElement('form');
    myform.name='myform';
    myform.classList.add('needs-validation');
    myform.setAttribute('novalidate', '');
    fieldsBlock.append(myform);

    <!--добавляем строку ввода email-->
    addEmailEdit(myform);
    addBtn(myform);
    addRemember(myform);


<!--добавляем блок "ремембер"-->
};

function addConditions(fieldsBlock){
    let cond=document.createElement('div');
    cond.classList.add('condition');
    cond.innerHTML='Регистрируясь, Вы подтверждаете, что принимаете <a href="#">Условия пользования</a> и <a href="#">Политику конфиденциальности</a>';
    fieldsBlock.append(cond);
};

function addLoginLink(fieldsBlock){
    let reg=document.createElement('div');
    reg.classList.add('registration');
    reg.innerHTML='Вы уже имеете аккаунт? ';
    fieldsBlock.append(reg);

    let link2=document.createElement('a');
    link2.classList.add('login');
    link2.href='auth.html';
    link2.innerHTML='Выполнить вход';
    reg.append(link2);
};
<!--добавляем строку ввода email-->
function addEmailEdit(formBlock){
    let txt=document.createElement('div');
    txt.id='txt';
    formBlock.append(txt);

    <!--добавляем строку ввода email-->
    let input=document.createElement('input');
    input.id='email';
    input.name='mail';
    input.type='email';
    input.classList.add('form-control');
    input.placeholder='Email';
    input.style="width: 263px;";
    input.setAttribute('required','');
    txt.append(input);

    <!--добавляем фидбэк-->
    let feedback=document.createElement('div');
    feedback.classList.add('invalid-feedback');
    feedback.innerHTML='Введите Email.';
    txt.append(feedback);
};			
function addBtn(formBlock){
    let div_btn=document.createElement('div');
    div_btn.id='txt';
    formBlock.append(div_btn);

    let btn=document.createElement('input');
    btn.id='btn1';
    btn.type='submit';
    btn.name='btn';
    btn.style='width: 263px;  margin-bottom: 14px;';
    btn.value='Зарегистрироваться';
    btn.setAttribute('required','');
    div_btn.append(btn);
};
function addRemember(formBlock){
    let rem=document.createElement('div');
    rem.classList.add('rememder');
    formBlock.append(rem);

    let rem_input=document.createElement('div');
    rem.append(rem_input);

    let chb_input=document.createElement('input');
    chb_input.id='chb1';
    chb_input.type='checkbox';
    chb_input.name='saveme';	
    rem_input.append(chb_input);

    let rem_label=document.createElement('div');
    rem.append(rem_label);

    let label=document.createElement('label');
    label.id='label';
    label.setAttribute('for','chb1');
    label.innerHTML='Запомнить меня';	
    rem_label.append(label);

    let rec=document.createElement('div');
    rec.classList.add('recovery');
    rem.append(rec);

    let lnk=document.createElement('a');
    lnk.href='#';
    lnk.innerHTML='Забыли пароль?';
    rec.append(lnk);
};

function sendData() {
    var a = document.getElementById('email').value;
    var action = document.getElementById('btn1').value;
    var myform = new FormData();
    myform.append('v1', a);
    myform.append('action', action);
    fetch('./SOURCES/PHP/reg.php', {method: "POST", 
                         body: myform
                      })
//                    .then(data=>data.text())
        .then(data=>data.json())                
        .then(data=>{
               if (data['ID']!=0){
                 document.getElementById('userinfo').innerHTML ='Пользователь с E-mail '+a+' добавлен, ИД= '+data['ID'];
                 }
                 else{
                 document.getElementById('userinfo').innerHTML ='Ошибка добавления пользователя';    
                 }
               viewSessionInfo();
             })                
}


(function() {
  'use strict';
  window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
                  event.preventDefault();
                  event.stopPropagation();

                  if (form.checkValidity() === true) {
                    sendData();
                  }                          
                  form.classList.add('was-validated');
          }, false);
        });
  }, false);
})();