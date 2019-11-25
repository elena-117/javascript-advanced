let Module = {};

Module.handler = function() {
  let info = document.getElementById("info");
  let elements = document.querySelectorAll(".elem");

  for (let i = 0; i < elements.length; i++) {
    elem = elements[i];

    function HandlerEv() {
      let objHandleEvent = {
        handleEvent(event) {
          info.innerHTML = `Тип обытия: ${event.type} , текущий элемент: ${event.currentTarget}`;
          switch (event.type) {
            case "click":
              info.style.color = "coral";
              break;
            case "mouseover":
              info.style.color = "limegreen";
              break;
            case "contextmenu":
              info.style.color = "blueviolet";
              break;
          }
        }
      };
      return objHandleEvent;
    }

    let handlerEv = new HandlerEv();
    elem.addEventListener("click", handlerEv);
    elem.addEventListener("mouseover", handlerEv);
    elem.addEventListener("contextmenu", handlerEv);
  }
};

window.addEventListener("load", Module.handler);
