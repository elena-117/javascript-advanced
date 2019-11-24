let Module = {};

Module.validate = function () {
  let myForm = document.getElementById("form-id");
  let address = document.getElementById("email");
  let submit = document.getElementById("submit");
  let newDiv = document.createElement("div");
  let result = document.body.insertBefore(newDiv, myForm);


  function validateInput() {
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (address.value.match(re)) {
      result.innerText = `${address.value} is valid`;
      console.log(address.value);
    } else {
      result.innerText = `${address.value} is not valid`;
    }
    return false;
  }

  submit.addEventListener("click", validateInput);
};

window.addEventListener("load", Module.validate);