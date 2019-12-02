let Module = {};
let colorValue;
let fontValue = 0;

Module.setStyle = function () {
   document.body.style.backgroundColor = setCookie("colorValue");
   document.body.style.fontSize = setCookie("fontValue") + "px";

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

Module.getCookie = function (e) {
   if (colorValue && fontValue) {
      document.cookie = "colorValue=" + colorValue + ";";
      document.cookie = "fontValue=" + fontValue + ";";
   } else if (fontValue) {
      document.cookie = "fontValue=" + fontValue + ";";
   } else if (colorValue) {
      document.cookie = "colorValue=" + colorValue + ";";
   } else {
      e.preventDefault();
   }
}

function setCookie(cookieName) {
   let cookies = document.cookie;
   let i = cookies.indexOf(cookieName + "=");

   if (i !== -1) {
      let start = i + cookieName.length + 1;
      let end = cookies.indexOf(";", start);

      if (end == -1) {
         end = cookies.length;
      }

      let res = cookies.substring(start, end);
      return res;
   }
}

window.addEventListener("load", Module.setStyle);
window.addEventListener("beforeunload", Module.getCookie);