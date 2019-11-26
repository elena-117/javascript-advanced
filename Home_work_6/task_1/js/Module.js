let Module = {};

Module.closeAlert = function () {
   let btn = document.getElementById("btn");
   let textarea = document.getElementById("textarea");

   let text;
   let flag = false;

   btn.addEventListener('click', function () {
      flag = true;
   })

   window.onbeforeunload = function () {
      text = textarea.value.length;
      if (!flag && text != 0) {
         return 'Вы не сохранили данные!';
      }
   }
}


window.addEventListener('load', Module.closeAlert);