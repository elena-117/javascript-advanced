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
      // block.classList.add("hidden");

      // function animateSecond() {
      //    blockRight.classList.add("visible");
      // }
   }


   setInterval(animateFirst, 10);

}

window.addEventListener('load', Module.moveBlock);




// let div1;
// let leftPos = 0;

// window.onload = function () {
//    div1 = document.getElementById("div1");
//    setInterval(animate, 10);
// }

// function animate() {
//    div1.style.left = leftPos + "px";
//    leftPos += 1;
//    if (leftPos >= window.screenX) {
//       leftPos -= 1;
//       if (leftPos == 0) {
//          leftPos += 1;
//       }
//    }
// }