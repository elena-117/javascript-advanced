let Module = {};

Module.showMsg = function () {
   let info = document.getElementById("info");

   text.addEventListener('keydown', function (e) {
      if (e.ctrlKey == true && e.shiftKey == false && e.keyCode == 83) {
         info.innerHTML = 'Сохранено';
      } else if (e.ctrlKey == true && e.keyCode == 65) {
         info.innerHTML = 'Выбрано всё';
      } else if (e.ctrlKey == true && e.shiftKey == true && e.keyCode == 83) {
         info.innerHTML = 'Сохранено всё';
      }
   })
}

window.addEventListener('load', Module.showMsg);