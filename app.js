// get input element
let filterInput = document.querySelector("#filterInput");

// add eventlistern
filterInput.addEventListener("keyup", filterHandle);
function filterHandle() {
  // get value input
  let filterInputValue = document
    .querySelector("#filterInput")
    .value.toUpperCase();

  // get names ul

  let ulEl = document.querySelector(".list-items");
  // get list from ul
  let liEl = ulEl.querySelectorAll(".list-item");

  // lặp qua các item kiểm tra item nào trùng thi hiển thị ra
  for (let i = 0; i < liEl.length; i++) {
    let a = liEl[i].getElementsByTagName("a")[0];

    if (a.innerHTML.toUpperCase().indexOf(filterInputValue) > -1) {
      console.log(a.innerHTML.toUpperCase().indexOf(filterInputValue));
      liEl[i].style.display = "";
    } else {
      liEl[i].style.display = "none";
    }
  }
}
