let Module = {};

Module.validate = function () {
  let myForm = document.getElementById("form-id");
  let address = document.getElementById("email");
  let submit = document.getElementById("submit");
  let newDiv = document.createElement("div");
  let result = document.body.insertBefore(newDiv, myForm);
  console.log(address);

  function validateEmail(email) {
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }

  function validateInput() {
    if (validateEmail(address)) {
      result.innerHTML = `${address.value} is valid`;
    } else {
      result.innerHTML = `${address.value} is not valid`;
    }
    return false;
  }

  submit.addEventListener("click", validateInput);
};

window.addEventListener("load", Module.validate);