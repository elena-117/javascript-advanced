let Module = {};

function $(id) {
  return document.getElementById(id);
}

function $$(cl) {
  return document.getElementsByClassName(cl);
}

Module.costCalculation = function() {
  let form = document.formOrder;
  let totalCostValue = $("totalCostValue");
  let btnSbmit = $("submit-btn-id");
  let popap = $("popap");

  for (let i = 0; i < form.sizesPizza.length; i++) {
    form.sizesPizza[i].addEventListener("click", costCalculation);
  }

  function costCalculation(e) {
    document.forms[0].orderTel.style.boxShadow = "none";
    document.forms[0].orderAddress.style.boxShadow = "none";
    $("info-1").style.display = "none";
    $("info-2").style.display = "none";
    form.orderTel.disabled = false;
    form.orderAddress.disabled = false;
    btnSbmit.disabled = false;
    let totalCost = 0;
    let costPizza = e.target.value;
    let costIgredients;
    let images = $$("imgCheckbox");

    totalCost += parseInt(costPizza);
    totalCostValue.innerHTML = totalCost;

    let checkboxInputs = $$("ingredients");

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
        form.elements[i].addEventListener("click", function(e) {
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

    btnSbmit.addEventListener("click", function(e) {
      let pattern = /\d{3}-\d{3}-\d{4}/;

      if (!form.orderTel.value) {
        form.orderTel.focus();
        form.orderTel.style.boxShadow = "0 0 1.5px 1px red";
        form.orderAddress.style.boxShadow = "none";
        $("info-1").style.display = "block";
        $("info-2").style.display = "none";
      }
      if (!form.orderTel.value.match(pattern) && form.orderTel.value) {
        form.orderTel.focus();
        form.orderTel.style.boxShadow = "0 0 1.5px 1px red";
        // form.orderAddress.style.boxShadow = "none";
        $("info-1").style.display = "none";
        $("info-2").style.display = "block";
      }
      if (
        form.orderTel.value.match(pattern) &&
        form.orderTel.value &&
        !form.orderAddress.value
      ) {
        form.orderAddress.focus();
        $("info-1").style.display = "block";
        $("info-2").style.display = "none";
        form.orderTel.style.boxShadow = "none";
        form.orderAddress.style.boxShadow = "0 0 1.5px 1px red";
      }
      if (form.orderTel.value.match(pattern) && form.orderAddress.value) {
        document.forms[0].orderTel.style.boxShadow = "none";
        document.forms[0].orderAddress.style.boxShadow = "none";
        $("info-1").style.display = "none";
        $("info-2").style.display = "none";
        popap.style.display = "block";
        setTimeout(() => (popap.style.display = "none"), 2000);
        resetform();
      }
    });
  }
  resetform();
};

function resetform() {
  $("formOrder").reset();
  for (let i = 0; i < $$("ingredients").length; i++) {
    $$("ingredients")[i].setAttribute("disabled", "");
  }
  for (let j = 0; j < $$("imgCheckbox").length; j++) {
    $$("imgCheckbox")[j].classList.remove("visible");
    $$("imgCheckbox")[j].classList.add("hidden");
  }
  $("totalCostValue").innerHTML = 0;

  document.forms[0].orderTel.disabled = true;
  document.forms[0].orderAddress.disabled = true;
  document.forms[0].orderTel.style.boxShadow = "none";
  document.forms[0].orderAddress.style.boxShadow = "none";
  $("info-1").style.display = "none";
  $("info-2").style.display = "none";
  $("submit-btn-id").disabled = true;
}

window.addEventListener("load", Module.costCalculation);
