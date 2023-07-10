window.onload = function () {
  let userList = document.querySelectorAll(".name-list");
  let listInput = document.querySelector(".list-input");
  let btn = document.querySelector(".addListButtun");
  btn.addEventListener("click", function () {
    const newUser = document.createElement("li");
    const name = document.createTextNode(listInput.value);
    newUser.appendChild(name);
    userList.appendChild(newUser);
    listInput.value = " ";
  });
};
