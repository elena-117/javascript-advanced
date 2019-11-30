let Module = {};

Module.costCalculation = function () {
   let form = document.formOrder;
   let totalCostValue = document.getElementById("totalCostValue");
   let btnSbmit = document.getElementById("submit-btn-id");

   for (let i = 0; i < form.sizesPizza.length; i++) {
      form.sizesPizza[i].addEventListener("click", costCalculation);
   }

   function costCalculation(e) {
      btnSbmit.disabled = false;
      let totalCost = 0;
      let costPizza = e.target.value;
      let costIgredients;
      let images = document.getElementsByClassName("imgCheckbox");

      totalCost += parseInt(costPizza);
      totalCostValue.innerHTML = totalCost;

      let checkboxInputs = document.getElementsByClassName("ingredients");

      for (let i = 0; i < checkboxInputs.length; i++) {
         checkboxInputs[i].checked = false;
         checkboxInputs[i].removeAttribute("disabled");

         for (let j = 0; j < images.length; j++) {
            images[j].classList.remove("visible");
            images[j].classList.add("hidden");
         }
      }

      for (let i = 0; i < form.elements.length; i++) {
         if (form.elements[i].type == "checkbox") {
            form.elements[i].addEventListener("click", function (e) {
               costIgredients = e.target.value;
               if (e.target.checked == true) {
                  for (let j = 0; j < images.length; j++) {
                     if (images[j].dataset.img == e.target.name) {
                        images[j].classList.remove("hidden");
                        images[j].classList.add("visible");
                     }
                  }
                  totalCost += parseInt(costIgredients);
               } else if (e.target.checked == false) {
                  for (let k = 0; k < images.length; k++) {
                     if (images[k].dataset.img == e.target.name) {
                        images[k].classList.remove("visible");
                        images[k].classList.add("hidden");
                     }
                  }
                  totalCost -= parseInt(costIgredients);
               }
               totalCostValue.innerHTML = totalCost;
            });
         }
      }
   }

   let popap = document.getElementById("popap");
   form.onsubmit = function () {
      popap.style.display = "block";
   }

   resetform();
};

function resetform() {
   document.getElementById("formOrder").reset();
   for (
      let i = 0; i < document.getElementsByClassName("ingredients").length; i++
   ) {
      document
         .getElementsByClassName("ingredients")[i].setAttribute("disabled", "");
   }
   document.getElementById("submit-btn-id").disabled = true;
}

window.addEventListener("load", Module.costCalculation);