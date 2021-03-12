document.querySelector("#menu-btn").addEventListener("click", function () {
    document.querySelector("#nav-wrapper").classList.toggle("menu-closed");
  });
  
let redCat = document.querySelector(".redcat")
let hoverCat = document.querySelector(".redeye")

hoverCat.addEventListener("mouseover", function(){
    redCat.classList.add("active");
    document.body.style.background = "black";
    document.body.style.color= "white";
})

// when users hovers off, it disappers 

hoverCat.addEventListener("mouseout", hideCat)
function hideCat(){
    redCat.classList.remove("active")
    document.body.style.background = "white";
    document.body.style.color= "black";
}