
let divWelcome=createDiv();
createProfileLink();
createButton(divWelcome);

function createDiv(){
    let divWelcome=document.createElement("div");
    divWelcome.classList.add("welcome");
    document.querySelector(".myClass").append(divWelcome);
    return divWelcome;
}

function createProfileLink(){
    let ProfileLink=document.createElement("a");
    ProfileLink.href="#";
    document.querySelector(".welcome").append(ProfileLink);
    ProfileLink.innerHTML="Ivan";
}

function createButton(divWelcome){
    let but=document.createElement("button");
    divWelcome.append(but);

    let text=document.createTextNode("Войти");
    but.append(text);
}