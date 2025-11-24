const newnameel = document.querySelector(".list-input");
const btnnewName = document.querySelector(".addListButton");

btnnewName.addEventListener("click", addfunc);

function addfunc() {
  const newname = newnameel.value; 
  const el = `<li>${newname}</li>`;
  document.querySelector("ul").insertAdjacentHTML("beforeend", el);
  newnameel.value = ""; 
}
