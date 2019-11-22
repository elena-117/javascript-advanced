let div1;
let leftPos = 0;

window.onload = function () {
   div1 = document.getElementById("div1");
   setInterval(animate, 10);
}

function animate() {
   div1.style.left = leftPos + "px";
   leftPos += 1;
   if (leftPos >= window.screenRight) {
      leftPos -= 1;
      if (leftPos == 0) {
         leftPos += 1;
      }
   }
}