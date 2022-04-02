const mobilMenu=document.querySelector(".header__mobil");
const MobilBox=document.querySelector(".header__menu");
console.log(MobilBox);

mobilMenu.addEventListener("click",function(){
    MobilBox.classList.toggle("is-active");
})