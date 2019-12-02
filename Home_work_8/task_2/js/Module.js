let Module = {};
let colorValue;
let fontValue = 0;

Module.setStyle = function () {
   document.body.style.backgroundColor = setLocalValue("colorValue");
   document.body.style.fontSize = setLocalValue("fontValue") + "px";

   let colors = document.querySelectorAll(".bgColors");
   let fSize = document.getElementById("fontSize");
   let btn = document.getElementById("btn");
   let colorV, fontV;

   for (let i = 0, l = colors.length; i < l; i++) {
      colors[i].addEventListener("click", function (e) {
         colorV = e.target.value;
      });
   }

   fSize.addEventListener("keypress", function (e) {
      if (e.keyCode === 10 || e.keyCode === 13) {
         event.preventDefault();
      }
   })

   fSize.addEventListener("change", function (e) {
      fontV = parseFloat(fontSize.value);
   })

   btn.addEventListener("click", function (e) {
      colorValue = colorV;
      fontValue = fontV;
      if (colorValue != null && (fontValue != null && fontValue != 0)) {
         document.body.style.backgroundColor = colorValue;
         document.body.style.fontSize = fontValue + 'px';
      } else if (fontValue != null && fontValue != 0) {
         document.body.style.fontSize = fontValue + 'px';
      } else if (colorValue != null) {
         document.body.style.backgroundColor = colorValue;
      } else {
         e.preventDefault();
      }
   })
};

Module.getLocalValue = function (e) {
   if (colorValue != null && (fontValue != null && fontValue != 0)) {
      window.localStorage["colorValue"] = colorValue;
      window.localStorage["fontValue"] = fontValue;
   } else if (fontValue != null && fontValue != 0) {
      window.localStorage["fontValue"] = fontValue;
   } else if (colorValue != null) {
      window.localStorage["colorValue"] = colorValue;
   } else {
      e.preventDefault();
   }
}

function setLocalValue(value) {
   let res = window.localStorage[value];
   return res;
}

window.addEventListener("load", Module.setStyle);
window.addEventListener("beforeunload", Module.getLocalValue);