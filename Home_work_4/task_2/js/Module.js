let Module = {};

Module.validation = function () {
   let myForm = document.getElementById("my-form");
   let login = document.getElementById("input-login");
   let password = document.getElementById("input-password");
   let submit = document.getElementById("btn-submit");
   let msgAllert = document.getElementById("msg-allert");
   console.log(msgAllert.innerText);

   submit.addEventListener("click", function () {
      if (!login.value || !password.value) {
         msgAllert.innerText = "Вы не заполнили поля логин и/или пароль";
         msgAllert.style.color = "red";
         login.style.backgroundColor = "red";
         login.style.opacity = "0.4";
         password.style.backgroundColor = "red";
         password.style.opacity = "0.4";
      } else if (login.value == "admin" && password.value == "12345") {
         msgAllert.innerText = "Вы авторизированы";
         msgAllert.style.color = "green";
         login.style.backgroundColor = "limegreen";
         password.style.backgroundColor = "limegreen";
      } else {
         login.style.backgroundColor = "limegreen";
         password.style.backgroundColor = "limegreen";
      }
   })
}

window.addEventListener("load", Module.validation);