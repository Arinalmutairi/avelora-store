let cart=[]
let fav=[]

function showPrice(price){
document.getElementById("price").style.display="block"
document.getElementById("priceText").innerText=price
}

function closeModal(){
document.querySelectorAll(".modal").forEach(m=>{
m.style.display="none"
})
}

function openLogin(){
document.getElementById("login").style.display="block"
}

function openCart(){
document.getElementById("cart").style.display="block"
}

function openFav(){
document.getElementById("fav").style.display="block"
}

function goHome(){
closeModal()
window.scrollTo({
top:0,
behavior:"smooth"
})
}