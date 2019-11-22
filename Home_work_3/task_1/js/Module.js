let Module = {};

Module.stopwatch = function () {

   let s = document.querySelector('.seconds');
   let m = document.querySelector('.minutes');
   let h = document.querySelector('.hours');

   let start = document.querySelector('.start');
   let stop = document.querySelector('.stop');
   let reset = document.querySelector('.reset');

   let counterS = 0;
   let counterM = 1;
   let counterH = 1;
   let intervalHandler;

   function count() {
      if (parseInt(s.innerHTML) < 10) {
         s.innerHTML = "0" + counterS;
         counterS++;
      }

      if (parseInt(s.innerHTML) >= 10) {
         s.innerHTML = counterS - 1;
         counterS++;
      }

      if (parseInt(s.innerHTML) > 59) {
         counterS = 0;
         s.innerHTML = "0" + counterS;
         counterS++;

         if (parseInt(m.innerHTML) < 10) {
            m.innerHTML = "0" + counterM;
            counterM++;
         }

         if (parseInt(m.innerHTML) >= 10) {
            m.innerHTML = counterM - 1;
            counterM++;
         }

         if (parseInt(m.innerHTML) > 59) {
            counterM = 0;
            m.innerHTML = "0" + counterM;
            counterM++;

            if (parseInt(h.innerHTML) < 10) {
               h.innerHTML = "0" + counterH;
               counterH++;
            }

            if (parseInt(h.innerHTML) >= 10) {
               h.innerHTML = counterH - 1;
               counterH++;
            }

            if (parseInt(h.innerHTML) > 23) {
               counterH = 0;
               h.innerHTML = "0" + counterH;
               counterH++;
            }
         }
      }
   }

   start.onclick = function () {
      start.classList.add("hide");
      stop.classList.add("show");
      stop.classList.remove("hide");
      start.classList.remove("show");
      intervalHandler = setInterval(count, 1000);
   }

   stop.onclick = function () {
      stop.classList.remove("show");
      start.classList.remove("hide");
      stop.classList.add("hide");
      start.classList.add("show");
      clearInterval(intervalHandler);
   }

   reset.onclick = function () {
      clearInterval(intervalHandler);
      stop.classList.remove("show");
      start.classList.remove("hide");
      stop.classList.add("hide");
      start.classList.add("show");
      counterS = 0;
      counterM = 1;
      counterH = 1;
      s.innerHTML = "00";
      m.innerHTML = "00";
      h.innerHTML = "00";
   }
}

window.addEventListener('load', Module.stopwatch);