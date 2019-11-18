let Module = {};

Module.changeText = function () {
   let p = document.getElementsByTagName("p");
   for (let i = 0; i < p.length; i++) {
      p[i].innerHTML = "PARAGRAPH";
   }
}