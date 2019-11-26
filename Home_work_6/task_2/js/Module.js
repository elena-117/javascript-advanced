let Module = {};

Module.changeTextColor = function () {
   let elem1 = document.getElementById("item-1");
   let elem2 = document.getElementById("item-2");
   let elem3 = document.getElementById("item-3");

   document.addEventListener('keypress', changeColor);

   function changeColor(e) {
      switch (String.fromCharCode(e.charCode)) {
         case "r":
            elem1.style.color = "red";
            break;
         case "g":
            elem2.style.color = "green";
            break;
         case "b":
            elem3.style.color = "blue";
            break;
         default:
            elem1.style.color = "black";
            elem2.style.color = "black";
            elem3.style.color = "black";
      }
   }
}

window.addEventListener('load', Module.changeTextColor);