removeForm();
let fieldset=createFieldset();
createLegend('Регистрация');
createCheckInWithSocialNet();
createCheckIn();
createFormButton();
createPolicies();
createSignInOffer();


//------------------------------------------------------
function removeForm(){
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
    document.querySelector("form").append(fieldset);
    return fieldset;
}

function createLegend(legendName){
    let legend=document.createElement('legend');
    legend.classList.add("mb-5");
    fieldset.append(legend);
    legend.textContent=legendName;
}

function createCheckInWithSocialNet(){
    let socialNetWrapper=createSocialNetWrapper();
    socialNetWrapper.append(createSocialNetTitle("С ПОМОЩЬЮ"));
    socialNetWrapper.append(createSocialNetReferences());
    socialNetWrapper.append(createSocialNetBottomBoundary())
    fieldset.append(socialNetWrapper);   
}

function createCheckIn(){
    fieldset.append(createCheckInTitle());
    let checkInEmailWrapper=createCheckInEmailWrapper();
    checkInEmailWrapper.append(createCheckInEmailInput());
    checkInEmailWrapper.append(createCheckInEmailValidate());    
    fieldset.append(checkInEmailWrapper);
}

function createFormButton(){
    let formButton=document.createElement("button");
    formButton.classList.add("btn","btn-block","btn-custom-primary","mb-3");
    formButton.type="submit";
    formButton.id="btnCheckIn";
    formButton.textContent="Зарегистрироваться";
    fieldset.append(formButton);
}

function createPolicies(){
    let policies=document.createElement("div");
    policies.classList.add("text-left");
    policies.textContent="Регистрируясь, вы подтверждаете, что принимаете ";
    policies.append(createReference("#","Условия пользования"));
    policies.innerHTML+=" и ";
    policies.append(createReference("#"," Политику конфиденциальности"));
    fieldset.append(policies);
}

function createSignInOffer(){
    let signInOffer=document.createElement("div");
    signInOffer.classList.add("text-center");
    signInOffer.textContent="Уже имеете аккаунт? ";
    signInOffer.append(createReference("#","Выполните вход"));
    document.querySelector("form").append(signInOffer);
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
    let title=document.createElement("span");
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
    emailInput.classList.add("form-control-plaintext","border-bottom");
    emailInput.type="email";
    emailInput.placeholder="Email";
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

//let divWelcome=createDiv();
//createProfileLink();
//createButton(divWelcome);

//function createDiv(){
//    let divWelcome=document.createElement("div");
//    divWelcome.classList.add("welcome");
//    document.querySelector(".myClass").append(divWelcome);
//    return divWelcome;
//}
//
//function createProfileLink(){
//    let ProfileLink=document.createElement("a");
//    ProfileLink.href="#";
//    document.querySelector(".welcome").append(ProfileLink);
//    ProfileLink.innerHTML="Ivan";
//}
//
//function createButton(divWelcome){
//    let but=document.createElement("button");
//    divWelcome.append(but);
//
//    let text=document.createTextNode("Войти");
//    but.append(text);
//}