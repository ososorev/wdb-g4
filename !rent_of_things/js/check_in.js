
      add_header();
      add_main_block();


//заголовок//
      function add_header(){
        let header=document.createElement("header");
// ссылки на подписки
        let subscr=creat_div("subscription");
          subscr.appendChild(creat_a(" ", null, " ")).appendChild(creat_img("image/like.png", "like"));
          subscr.appendChild(creat_a("https://www.facebook.com", null, "Facebook")).appendChild(creat_img("image/faсebook.png", "Facebook"));
          subscr.appendChild(creat_a("https://www.youtube.com", null, "YouTube")).appendChild(creat_img("image/youtube.png", "YouTube"));
          subscr.appendChild(creat_a("https://twitter.com", null, "Twitter")).appendChild(creat_img("image/twitter.png", "Twitter"));
          subscr.appendChild(creat_div(null, "Подпишись!"));
        header.appendChild(subscr);
//логотип        
        header.appendChild(creat_div("logo")).appendChild(creat_img("image/renthings.png", "renthings"));
//Вставка заголовка
        document.querySelector("body").appendChild(header);
        return;
      }

// Основная форма//
      function add_main_block(){
        let main_content=creat_div("mainform");
        main_content.appendChild(creat_div("headline", "Регистрация"));
//поля и кнопка (форма)				
        let form=creat_form("post");
          form.appendChild(creat_div()).appendChild(creat_input("off", "required", "Email", "text", "email"));
          form.appendChild(creat_div()).appendChild(creat_button("handler.php", "check_in", "button", "submit", "Зарегистрироваться"));
        main_content.appendChild(form);
// условия регистрации
        let content=creat_div(null, "Регистрируясь, вы подтверждаете, что принимаете ");
          content.appendChild(creat_a("recovery.html", " Условия пользования"));
          content.appendChild(creat_text(" и"));
        let conditions=creat_div("conditions", null);
          conditions.appendChild(content);
          conditions.appendChild(creat_a("privacy_policy.html", " Политику конфиденциальности"));
        main_content.appendChild(conditions);
// ссылка на авторизацию
        let link_reg=creat_div("bottom_text", "Уже имеете аккаунт?  ");
          link_reg.appendChild(creat_a("log_in.html", " Выполните вход"));
        main_content.appendChild(link_reg);
//Вставка основной формы
        let main_block=document.createElement("article");
          main_block.appendChild(main_content);
        document.querySelector("body").appendChild(main_block);
        return;
      }

//
//Элементарные функции	
//

//создание div         
        function creat_div(class_,txt_) {
          let creat_div = document.createElement("div");
          if(class_) {
              creat_div.classList.add(class_);
          };
          if(txt_) {
            creat_div.innerHTML = txt_;
          };
          return creat_div;
        }

//создание form          
        function creat_form(method_) {
          let creat_form = document.createElement("form");
          creat_form.method = method_;
          return creat_form;
        }

//создание input          
        function creat_input(autocomplete_, required_, placeholder_, type_, name_, txt_) {
          let creat_input = document.createElement("input");
          if(autocomplete_) {
            creat_input.autocomplete="off";
          };
          if(required_) {
            creat_input.required = required_;
          };
          if(placeholder_) {
            creat_input.placeholder = placeholder_;
          };
          if(type_) {
            creat_input.type = type_;
          };
          if(name_) {
            creat_input.name=name_;
          };
          if(txt_) {
            creat_innerHTML=name_;
          };				
          return creat_input;
        }

//создание button
        function creat_button(formaction_, value_, name_, type_, txt_) {
          let creat_button = document.createElement("button");
          if(formaction_) {
          creat_button.formAction = formaction_;
          };
          if(value_) {
          creat_button.value = value_;
          };
          if(name_) {
          creat_button.name = name_;
          };
          if(type_) {
          creat_button.type = type_;
          };
          if(txt_) {
            creat_button.innerHTML = txt_;
          };
          return creat_button;
        }		

//создание text          
          function creat_text(text_){
          let creat_text = document.createTextNode(text_);
          return creat_text;
        }

//создание a
        function creat_a(href_, text_, title_){
          let creat_a = document.createElement("a");
          creat_a.href=href_;
          if(text_) {
            creat_a.innerHTML = text_;
            };
          if(title_) {
            creat_a.title = title_;
          };
          return creat_a;
        }

//создание img          
        function creat_img(src_, alt_){
          let creat_img = document.createElement("img");
          creat_img.src=src_;
          if(alt_) {
            creat_img. alt = alt_;
            };
          return creat_img;
        }
