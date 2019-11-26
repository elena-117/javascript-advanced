let Module = {}

Module.moveBlock = function () {
   let block = document.getElementById("block");
   let blockRight = document.getElementById("block-right");
   let widthScreen = window.screen.width;
   let leftPos = 0
   let rightPos = 0;
   console.log(widthScreen);

   function animateFirst() {
      if (leftPos <= widthScreen - 30) {
         block.style.left = leftPos + "px";
         leftPos += 1;
      }
   }

   setInterval(animateFirst, 10);

}

window.addEventListener('load', Module.moveBlock);