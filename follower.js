let h5 = document.querySelector(".cardsubtitle");
let check = 0;
let twinbtn = document.querySelector("#twin");
twinbtn.addEventListener("click", function () {
  if (check == 0) {
    twinbtn.innerHTML = "unfollow";
    h5.innerHTML = "You are now friends";
    check = 1;
  } else {
    twinbtn.innerHTML = "follow";
    h5.innerHTML = "Stranger";
    check = 0;
  }
});
