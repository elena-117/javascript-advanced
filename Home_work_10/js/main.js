window.addEventListener("load", init, false);

function init() {
   let outputList = document.getElementById("list");

   gettingUserList("GET", "https://gorest.co.in/public-api/users");

   function gettingUserList(method, url) {
      let res;
      let xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.setRequestHeader(
         "Authorization",
         "Bearer RY6PLSkqFxlzfF5wSmLbtMiIs6EBzzZon4jt"
      );
      xhr.send();
      xhr.onreadystatechange = function () {
         if (xhr.readyState == 4 && xhr.status == 200) {
            res = JSON.parse(xhr.response);
            console.log(res);
            manageUserList(res.result);
         }
         if (xhr.status == 401) {
            res = JSON.parse(xhr.response);
            console.log(res);
            manageUserList(res.result);
         }
      };
   }

   function manageUserList(arr) {
      if (arr.status === 401) {
         document.getElementById("output").innerHTML += arr.message + "<br>";
      } else {
         for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            let elementHtml = document.createElement("li");
            elementHtml.innerHTML = `${i + 1}. ${element.first_name} ${
              element.last_name
            }`;
            elementHtml.dataset.id = element.id;
            elementHtml.style.marginBottom = 8 + "px";
            outputList.appendChild(elementHtml);

            let btnDelete = document.createElement("button");
            btnDelete.innerHTML = "Delete";
            btnDelete.style.display = "inline-block";
            btnDelete.style.marginLeft = 8 + "px";
            elementHtml.append(btnDelete);

            btnDelete.addEventListener("click", function (e) {
               if (
                  confirm(
                     `Удалить пользователя ${element.first_name} ${element.last_name} из списка?`
                  )
               ) {
                  elementHtml.remove();
               }
            });
         }
      }
   }
};