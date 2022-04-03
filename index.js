
const container = document.getElementById('container');
const leftButton=document.getElementById("leftButton");
const rightButton=document.getElementById("rightButton");

leftButton.addEventListener("click", function(){
   
    leftButton.style.opacity = "0.5";
    container.scrollLeft -= 350; 
    setInterval(function(){ leftButton.style.opacity = "1";}, 50);



});
rightButton.addEventListener("click", function(){


    rightButton.style.opacity = "0.5";
    container.scrollLeft += 350; 
    setInterval(function(){ rightButton.style.opacity = "1";}, 50);
});