let Module = {};

Module.escapeButton = function () {
   let btn = document.getElementById("btn");

   btn.addEventListener('mouseover', function (e) {
      btn.style.position = 'absolute';
      let x = e.clientX;
      let y = e.clientY;
      btn.style.left = x + 20 + 'px';
      btn.style.top = y + 30 + 'px'
   })

}

window.addEventListener('load', Module.escapeButton);