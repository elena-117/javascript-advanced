window.onload = function () {
   let container = document.getElementById("container");
   let btn = document.getElementById("btn");
   let counter = 0;

   btn.onclick = function () {
      let p = document.createElement("p");
      p.innerHTML = "Some text";
      container.appendChild(p);
      let containerNodes = container.childNodes;
      counter++;
      console.log(containerNodes);
      if (counter == 10) {
         for (let i = 0; i < containerNodes.length; i++) {
            if (containerNodes[i].nodeName == "P") {
               container.removeChild(containerNodes[i]);
               i--;
            }
         }
         counter = 0;
      }
   }
}