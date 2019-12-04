let Module = {};

Module.gallery = function () {
   let imgPreview = document.getElementsByClassName("img-preview");
   let imgMain = document.getElementById("img-main");

   for (let i = 0; i < imgPreview.length; i++) {
      imgPreview[i].addEventListener("click", function (e) {

         if (imgPreview[i]) {
            imgMain.src = `img/img-${i + 1}.png`;
         }
      })
   }
}

window.addEventListener("load", Module.gallery);