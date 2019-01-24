// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/createRegistrationForm.js":[function(require,module,exports) {
window.moduleRegForm = {};

(function (m) {
  m.create = create;

  function createWhiteWrap() {
    var whiteWrap = document.createElement("div");
    whiteWrap.classList.add("white_wrap");
    document.querySelector(".main").append(whiteWrap);
    return whiteWrap;
  }

  function createRegForm(resultWhiteWrap) {
    var regForm = document.createElement("div");
    regForm.classList.add("reg_form");
    resultWhiteWrap.append(regForm);
    return regForm;
  }

  function create() {
    var resultWhiteWrap = createWhiteWrap();
    var finalResult = createRegForm(resultWhiteWrap);
    return finalResult;
  }
})(window.moduleRegForm);
},{}],"js/createFormTitle.js":[function(require,module,exports) {
var moduleFormTitle = {};

(function (m) {
  m.create = create;

  function create(target) {
    var resultFormTitle = createFormTitle(target);
    var finalResult = createFormTitleText(resultFormTitle);
    return finalResult;
  }

  function createFormTitle(target) {
    var formTitle = document.createElement("div");
    formTitle.classList.add("form_title");
    target.append(formTitle);
    return formTitle;
  }

  function createFormTitleText(resultFormTitle) {
    var formTitleText = document.createElement("p");
    formTitleText.innerHTML = "Регистрация";
    resultFormTitle.append(formTitleText);
  }
})(moduleFormTitle);
},{}],"js/createFormMain.js":[function(require,module,exports) {
var moduleFormMain = {};

(function (m) {
  m.create = create;

  function create(target) {
    var resultFormMain = createFormMain(target);
    var finalResult = createForm(resultFormMain);
    return finalResult;
  }

  function createFormMain(target) {
    var formMain = document.createElement("div");
    formMain.classList.add("form_main");
    target.append(formMain);
    return formMain;
  }

  function createForm(resultFormMain) {
    var form = document.createElement("form");
    form.classList.add("needs-validation");
    resultFormMain.append(form);
    form.method = 'POST';
    form.action = 'php/regist.php';
    form.setAttribute("novalidate", "");
    return form;
  }
})(moduleFormMain);
},{}],"js/createUserDataForm.js":[function(require,module,exports) {
var moduleUserDataForm = {};

(function (m) {
  m.create = create;

  function create(target) {
    var resultUserDataForm = createUserDataForm(target);
    var resultEmailDiv = createEmailDiv(resultUserDataForm);
    createEmailLabel(resultEmailDiv);
    createEmailInput(resultEmailDiv);
    createEmailInvalidFeedback(resultEmailDiv);
    var resultPasswordDiv = createPasswordDiv(resultUserDataForm);
    createPasswordLabel(resultPasswordDiv);
    createPasswordInput(resultPasswordDiv);
    createPasswordInvalidFeedback(resultPasswordDiv);
    createHiddenDiv(resultUserDataForm);
  }

  function createUserDataForm(target) {
    var userDataForm = document.createElement("div");
    userDataForm.classList.add("user_data");
    target.append(userDataForm);
    return userDataForm;
  }

  function createEmailDiv(resultUserDataForm) {
    var EmailDiv = document.createElement("div");
    EmailDiv.classList.add("email");
    resultUserDataForm.append(EmailDiv);
    return EmailDiv;
  }

  function createEmailLabel(resultEmailDiv) {
    var emailLabel = document.createElement("label");
    emailLabel.for = "eml";
    emailLabel.innerHTML = "Email";
    emailLabel.style.display = "none";
    resultEmailDiv.append(emailLabel);
  }

  function createEmailInput(resultEmailDiv) {
    var emailInput = document.createElement("input");
    emailInput.classList.add("form-control", "border-top-0", "border-right-0", "border-left-0", "rounded-0");
    emailInput.id = "eml";
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.placeholder = "E-Mail";
    emailInput.setAttribute("required", "");
    resultEmailDiv.append(emailInput);
  }

  function createEmailInvalidFeedback(resultEmailDiv) {
    var emailInvalidFeedback = document.createElement("div");
    emailInvalidFeedback.classList.add("invalid-feedback");
    emailInvalidFeedback.innerHTML = "Введите адрес электронной почты!";
    resultEmailDiv.append(emailInvalidFeedback);
  }

  function createPasswordDiv(resultUserDataForm) {
    var PassDiv = document.createElement("div");
    PassDiv.classList.add("pass");
    resultUserDataForm.append(PassDiv);
    return PassDiv;
  }

  function createPasswordLabel(resultPasswordDiv) {
    var passwordLabel = document.createElement("label");
    passwordLabel.for = "pss";
    passwordLabel.innerHTML = "Пароль";
    passwordLabel.style.display = "none";
    resultPasswordDiv.append(passwordLabel);
  }

  function createPasswordInput(resultPasswordDiv) {
    var passwordInput = document.createElement("input");
    passwordInput.classList.add("form-control", "border-top-0", "border-right-0", "border-left-0", "rounded-0");
    passwordInput.id = "pss";
    passwordInput.type = "password";
    passwordInput.name = "pass";
    passwordInput.placeholder = "Пароль";
    passwordInput.setAttribute("required", "");
    resultPasswordDiv.append(passwordInput);
  }

  function createPasswordInvalidFeedback(resultPasswordDiv) {
    var passwordInvalidFeedback = document.createElement("div");
    passwordInvalidFeedback.classList.add("invalid-feedback");
    passwordInvalidFeedback.innerHTML = "Введите пароль!";
    resultPasswordDiv.append(passwordInvalidFeedback);
  }

  function createHiddenDiv(resultUserDataForm) {
    var hiddenDiv = document.createElement("div");
    hiddenDiv.classList.add("for_fetch_data");
    resultUserDataForm.append(hiddenDiv);
  }
})(moduleUserDataForm);
},{}],"js/createRegistrationButton.js":[function(require,module,exports) {
var moduleRegistrationButton = {};

(function (m) {
  m.create = create;

  function create(target) {
    var DivButton = createDivButton(target);
    createButtonReg(DivButton);
  }

  function createDivButton(target) {
    var divButton = document.createElement("div");
    divButton.classList.add("button");
    target.append(divButton);
    return divButton;
  }

  function createButtonReg(DivButton) {
    var buttonReg = document.createElement("button");
    buttonReg.classList.add("btn-block");
    buttonReg.type = "submit";
    buttonReg.innerHTML = "Зарегистрироваться";
    DivButton.append(buttonReg);
  }
})(moduleRegistrationButton);
},{}],"js/createCheckBox.js":[function(require,module,exports) {
var moduleCheckBox = {};

(function (m) {
  m.create = create;

  function create(target) {
    var resultChechBoxs = createChechBoxs(target);
    createPolicyLink(resultChechBoxs);
  }

  function createChechBoxs(target) {
    var checkBoxs = document.createElement("div");
    checkBoxs.classList.add("check_boxs");
    target.append(checkBoxs);
    return checkBoxs;
  }

  function createPolicyLink(resultChechBoxs) {
    var policyLink = document.createElement("div");
    policyLink.classList.add("policy");
    policyLink.innerHTML = "Регистрируясь, вы подтверждаете, что принимаете <a href=''>Условия пользования</a> и <a href=''>Политику конфиденциальности</a>";
    resultChechBoxs.append(policyLink);
  } // изменить гиперссылку на innerHTML++

})(moduleCheckBox);
},{}],"js/createBottomLink.js":[function(require,module,exports) {
var moduleBottomLink = {};

(function (m) {
  m.create = createBottomLink;

  function createBottomLink(target) {
    var bottomLink = document.createElement("div");
    bottomLink.classList.add("bottom_link");
    target.append(bottomLink);
    bottomLink.innerHTML = "Уже имеете аккаунт? <a href=''>Войдите</a>";
  }
})(moduleBottomLink);
},{}],"js/regist.js":[function(require,module,exports) {
"use strict";

require("./createRegistrationForm.js");

require("./createFormTitle.js");

require("./createFormMain.js");

require("./createUserDataForm.js");

require("./createRegistrationButton.js");

require("./createCheckBox.js");

require("./createBottomLink.js");

document.addEventListener("DOMContentLoaded", function (event) {
  var RegForm = moduleRegForm.create();
  moduleFormTitle.create(RegForm);
  var FormMain = moduleFormMain.create(RegForm);
  moduleUserDataForm.create(FormMain);
  moduleRegistrationButton.create(FormMain);
  moduleCheckBox.create(FormMain);
  moduleBottomLink.create(RegForm);
});

function fetchData(event) {
  event.preventDefault();
  var form = document.querySelector('form');
  fetch('/renthings/php/regist.php', {
    method: "POST",
    body: new FormData(form)
  }).then(function (response) {
    return response.text();
  }).then(function (text) {
    if (text == "User with the same name already exists") {
      document.querySelector(".for_fetch_data").innerHTML = text;
    } else {
      goto_email_confirm();
    }
  });
  return false;
}

function goto_email_confirm() {
  window.location.href = 'confirm_email.html';
}

(function () {
  'use strict';

  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          fetchData(event);
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
},{"./createRegistrationForm.js":"js/createRegistrationForm.js","./createFormTitle.js":"js/createFormTitle.js","./createFormMain.js":"js/createFormMain.js","./createUserDataForm.js":"js/createUserDataForm.js","./createRegistrationButton.js":"js/createRegistrationButton.js","./createCheckBox.js":"js/createCheckBox.js","./createBottomLink.js":"js/createBottomLink.js"}],"../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43193" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/regist.js"], null)
//# sourceMappingURL=/regist.69e80ea2.map