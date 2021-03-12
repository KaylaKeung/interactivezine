document.querySelector("#menu-btn").addEventListener("click", function () {
    document.querySelector("#nav-wrapper").classList.toggle("menu-closed");
  });
  
let blackCat = document.querySelector(".black")
let hoverBlack = document.querySelector(".black-show")

hoverBlack.addEventListener("mouseover", function(){
    blackCat.classList.add("active");
    hoverPatch.classList.add("active");
    hoverWhite.classList.add("active");
 
})

// when users hovers off, it disappers 

hoverBlack.addEventListener("mouseout", hide)
function hide(){
    blackCat.classList.remove("active")
    hoverPatch.classList.remove("active");
    hoverWhite.classList.remove("active");
  
}

let patchCat = document.querySelector(".patch")
let hoverPatch = document.querySelector(".patch-show")

hoverPatch.addEventListener("mouseover", function(){
    patchCat.classList.add("active");
    hoverBlack.classList.add("active");
    hoverWhite.classList.add("active");
})

// when users hovers off, it disappers 

hoverPatch.addEventListener("mouseout", hideCat)
function hideCat(){
    patchCat.classList.remove("active")
    hoverBlack.classList.remove("active");
    hoverWhite.classList.remove("active");
}

let whiteCat = document.querySelector(".white")
let hoverWhite = document.querySelector(".white-show")

hoverWhite.addEventListener("mouseover", function(){
    whiteCat.classList.add("active");
    hoverBlack.classList.add("active");
    hoverPatch.classList.add("active");
 
})

// when users hovers off, it disappers 

hoverWhite.addEventListener("mouseout",
function (){
    whiteCat.classList.remove("active");
hoverBlack.classList.remove("active");
hoverPatch.classList.remove("active");
}
  
)