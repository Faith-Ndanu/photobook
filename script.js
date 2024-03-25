
let scrollContainer = document.querySelector(".headshots");
let prev = document.getElementById("prev");
let next= document.getElementById("next");

scrollContainer.addEventListener("wheel",(evt)=> {
    evt.preventDefault();
    scrollContainer.scrollLeft +=evt.deltaY;
    scrollContainer.style.scrollBehaviour = "auto"
})
next.addEventListener("click",()=>{
  scrollContainer.style.scrollBehaviour = "smooth"
  scrollContainer.scrollLeft += 900;
})
prev.addEventListener("click",()=>{
  scrollContainer.style.scrollBehaviour = "smooth"
  scrollContainer.scrollLeft -= 900;
})
