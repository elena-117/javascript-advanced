let Module = {};

Module.addClass = function () {
   // let container = document.getElementById("container");
   let toggle = document.getElementById("btn-toggle");

   toggle.onclick = function () {
      let div1 = document.getElementsByClassName("div1");
      let newClass = document.getElementById("check").getAttribute("class");

      if (newClass !== "div1 text-color") {
         for (let i = 0; i < div1.length; i++) {
            div1[i] = div1[i].classList.add("text-color");
         }
      } else {
         for (let j = 0; j < div1.length; j++) {
            div1[j] = div1[j].classList.remove("text-color");
         }
      }
   }
}