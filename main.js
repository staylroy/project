let menu = document.querySelector(".fixed-menu");

menu.addEventListener('click', function(event){
   let clickTarget = event.target;
   let activeBtn = document.querySelector('.active');
   
   if (clickTarget.classList.contains('nav-link')){
       clickTarget.classList.add('active');
       activeBtn.classList.remove('active');
   }
});

document.querySelector(".mobile-button").addEventListener("click",
function(event)
{
    document.querySelector(".mobile-menu").classList.toggle("hide");
});

menu.addEventListener