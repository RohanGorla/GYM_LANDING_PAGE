let joinBtn = document.getElementsByClassName("join-btn")[0];
let contact = document.getElementsByClassName("contact-page")[0];
let closeBtn = document.getElementsByClassName("close-btn")[0];

joinBtn.addEventListener("click", () => {
  contact.classList.remove("not-visible");
});

closeBtn.addEventListener("click", () => {
  contact.classList.add("not-visible");
});

document.addEventListener("scroll", ()=>{
    contact.classList.add("not-visible");
});

closeBtn.addEventListener("mouseover", () => {
  document.getElementsByClassName("line-1")[0].style.backgroundColor = "red";
  document.getElementsByClassName("line-2")[0].style.backgroundColor = "red";
});

closeBtn.addEventListener("mouseout", () => {
  document.getElementsByClassName("line-1")[0].style.backgroundColor = "white";
  document.getElementsByClassName("line-2")[0].style.backgroundColor = "white";
});
