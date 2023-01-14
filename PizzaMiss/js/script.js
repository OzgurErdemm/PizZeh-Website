const searchForm = document.querySelector(".search-form");
const cartItemsContainer= document.querySelector(".cart-items-container")
const bars=document.querySelector(".navbar")
console.log(searchForm);

//! buttons


const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)
        ){
            searchForm.classList.remove("active");
        }
    })
})

const barsBtn = document.querySelector("#menu-btn");

barsBtn.addEventListener("click", function(){
    bars.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(barsBtn) && !e.composedPath().includes(bars)
            ){
            bars.classList.remove("active");
        }
    })
})

const cartBtn = document.querySelector("#cart-btn");

cartBtn.addEventListener("click", function(){
    cartItemsContainer.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItemsContainer)
            ){
            cartItemsContainer.classList.remove("active");
        }
    })
})

