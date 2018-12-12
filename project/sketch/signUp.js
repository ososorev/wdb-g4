// 'use strict';//h
var signUpReference=document.getElementById("signUpReference");
signUpReference.addEventListener("click" , buildFormSignUp);


function buildFormSignUp(event){
    event.preventDefault();
    // clearForm(); 
    removeForm();
    let main=document.querySelector("main");
    main.append(createForm());
    
    var submit = document.getElementById('submit');
    submit.addEventListener("click",function(event){
        event.preventDefault();
        var formData = new FormData();
        var email = document.getElementById('email').value;
        formData.append('email', email);
        var myInit = {
            method: 'POST',
            body: formData
        }
        fetch('signUp.php', myInit)
            .then(function(response){return response.text();})
            .then(function(result){document.getElementsByTagName('body')[0].innerHTML = result;});
    });
}

//------------------------------------------------------
function removeForm(){
    let oldform=document.getElementsByTagName('form')[0];
    oldform.remove ();
}

function createForm(){
    let form=document.createElement("form");
    form.classList.add("mx-auto","py-4","bg-white","shadow-sm","rounded","needs-validation");
    form.style="max-width: 700px";
    form.novalidate="true";
    let fieldset=createFieldset();
    form.append(fieldset);
    form.append(createSignInOffer());
    return form;
}

function clearForm(){
    let form=document.getElementsByTagName('form')[0];
    removeChildren(form);
//    form.innerHTML='';
}
function removeChildren(elem){
    while (elem.lastChild){
        elem.removeChild(elem.lastChild);
    }
}
//------------------------------------------------------

function createFieldset(){
    let fieldset=document.createElement("fieldset");
    fieldset.classList.add("mb-4","mx-auto","text-center");
    fieldset.style="max-width:300px";
    fieldset.append(createLegend('Регистрация'));
    fieldset.append(createCheckInWithSocialNet());
    fieldset.append(createCheckInTitle());
    fieldset.append(createCheckIn());
    fieldset.append(createFormButton());
    fieldset.append(createPolicies());
    return fieldset;
}

function createLegend(legendName){
    let legend=document.createElement('legend');
    legend.classList.add("mb-5");
    legend.textContent=legendName;
    return legend;
//    fieldset.append(legend);
}

function createCheckInWithSocialNet(){
    let socialNetWrapper=createSocialNetWrapper();
    socialNetWrapper.append(createSocialNetTitle("С ПОМОЩЬЮ"));
    socialNetWrapper.append(createSocialNetReferences());
    socialNetWrapper.append(createSocialNetBottomBoundary())
    return socialNetWrapper;
//    fieldset.append(socialNetWrapper);   
}

function createCheckIn(){
    let checkInEmailWrapper=createCheckInEmailWrapper();
    checkInEmailWrapper.append(createCheckInEmailInput());
    checkInEmailWrapper.append(createCheckInEmailValidate());   
    return checkInEmailWrapper;
//    fieldset.append(checkInEmailWrapper);
}

function createFormButton(){
    let formButton=document.createElement("button");
    formButton.classList.add("btn","btn-block","btn-custom-primary","mb-3");
    formButton.type="submit";
    formButton.id="submit";
    formButton.textContent="Зарегистрироваться";
//    formButton.value="Зарегистрироваться";
//    fieldset.append(formButton);
    return formButton;
}

function createPolicies(){
    let policies=document.createElement("div");
    policies.classList.add("text-left");
    policies.textContent="Регистрируясь, вы подтверждаете, что принимаете ";
    policies.append(createReference("#","Условия пользования"));
    policies.innerHTML+=" и ";
    policies.append(createReference("#"," Политику конфиденциальности"));
    return policies;
//    fieldset.append(policies);
}

function createSignInOffer(){
    let signInOffer=document.createElement("div");
    signInOffer.classList.add("text-center");
    signInOffer.textContent="Уже имеете аккаунт? ";
    signInOffer.append(createReference("signIn.html","Выполните вход"));
    return signInOffer;
}


//------------------------------------------------------
function createReference(href,text){
    let reference=document.createElement("a");
    reference.classList.add("text-custom-primary");
    reference.href=href;
    reference.textContent=text;
    return reference;
}

//------------------------------------------------------
function createCheckInTitle(){
    let title=document.createElement("div");
    title.classList.add("mb-3");
    title.textContent="ИЛИ ИСПОЛЬЗУЯ EMAIL";
    return title;
}

function createCheckInEmailWrapper(){
    let wrapper=document.createElement("div");
    wrapper.classList.add("form-group");
    return wrapper;
}
function createCheckInEmailInput(){
    let emailInput=document.createElement("input");
    emailInput.classList.add("form-control");
    emailInput.type="email";
    emailInput.id="email";
    emailInput.placeholder="Email";
    emailInput.required="true";
    return emailInput;
}
function createCheckInEmailValidate(){
    let emailValidate=document.createElement("div");
    emailValidate.classList.add("invalid-feedback");
    emailValidate.textContent="Введите email";
    return emailValidate;
}
//------------------------------------------------------
function createSocialNetWrapper(){
    let wrapper=document.createElement("div");
    wrapper.classList.add("d-flex","flex-column","align-items-center","mb-5");
    return wrapper;
}

function createSocialNetTitle(titleName){
    let title=document.createElement("span");
    title.classList.add("mb-3");
    title.textContent=titleName;
    return title;
}
function createSocialNetBottomBoundary(){
    let boundary=document.createElement("div");
    boundary.classList.add("mx-auto","w-50","border-bottom");
    return boundary;
}
//------------------------------------------------------
function createSocialNetReferences(){
    let socialNetReferenceWrapper=createSocialNetReferencesWrapper();
    socialNetReferenceWrapper.append(createSocialNetReferenceVK());
    socialNetReferenceWrapper.append(createSocialNetReferenceFacebook());
    socialNetReferenceWrapper.append(createSocialNetReferenceGoogle());
    return socialNetReferenceWrapper;
}
function createSocialNetReferencesWrapper(){
    let wrapper=document.createElement("div");
    wrapper.classList.add("d-flex","flex-wrap","mb-4");    
    return wrapper;
}
//------------------------------------------------------
function createSocialNetReferenceVK(){
    let referenceVK=createSocialNetReference("#");
    let imageVK=createImg("../svg/vk.svg","VK");
    referenceVK.append(imageVK);
    return referenceVK;
}
function createSocialNetReferenceFacebook(){
    let referenceFacebook=createSocialNetReference("#");
    let imageFacebook=createImg("../svg/fb.svg","Facebook");
    referenceFacebook.append(imageFacebook);
    return referenceFacebook;
}
function createSocialNetReferenceGoogle(){
    let referenceGoogle=createSocialNetReference("#");
    let imageGoogle=createImg("../svg/gmail.svg","Google");
    referenceGoogle.append(imageGoogle);
    return referenceGoogle;
}
//------------------------------------------------------

function createSocialNetReference(href){
    let reference=document.createElement("a");
    reference.classList.add("badge","badge-white");
    reference.href=href;
    return reference;
}

function createImg(imgSrc,imgName){
    let image=document.createElement("img");
    image.src=imgSrc;
    image.rel=imgName;//!!!!!dont work
    return image;
}