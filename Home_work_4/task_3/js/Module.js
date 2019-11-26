let Module = {}

Module.moveBlock = function () {
   let block = document.getElementById("block");
   let widthScreen = window.innerWidth;
   let leftPos = 0;
   let direction = "right";

   function animate() {
      block.style.left = leftPos + "px";

      if (leftPos == widthScreen - 30) {
         direction = "left";
      }
      if (leftPos == 0) {
         direction = "right";
      }
      if (direction == "right") {
         leftPos += 1;
      } else {
         leftPos -= 1;
      }
   }
   setInterval(animate, 10);
}

window.addEventListener('load', Module.moveBlock);