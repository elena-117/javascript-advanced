let Module = {};

Module.changeImg = function () {
   let btn = document.getElementsByClassName("btn");
   let img = document.getElementById("img");

   for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", function (e) {
         if (btn[i]) {
            img.src = `img/img-${[i + 1]}.jpg`;
         }
      })
   }
}

window.addEventListener("load", Module.changeImg);