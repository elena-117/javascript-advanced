let Module = {};

Module.checkNumber = function () {
   let randomNumber = Math.floor(Math.random() * 100);
   let input = document.getElementById("input-id");
   let check = document.getElementById("btn-check");
   let msgGreater = document.getElementById("msg-greater");
   let msgLess = document.getElementById("msg-less");
   let msgBingo = document.getElementById("msg-bingo");
   input.value = " ";

   check.addEventListener("click", function () {
      console.log(randomNumber);
      if (input.value && input.value > randomNumber) {
         msgGreater.classList.remove("hide");
         msgGreater.classList.add("block");
         msgGreater.style.color = "red";
      } else if (input.value && input.value < randomNumber) {
         msgLess.classList.remove("hide");
         msgLess.classList.add("block");
         msgLess.style.color = "yellow";
      } else if (input.value && input.value == randomNumber) {
         msgBingo.classList.remove("hide");
         msgBingo.classList.add("block");
         msgBingo.style.color = "green";
      }
   })
}

window.addEventListener("load", Module.checkNumber);