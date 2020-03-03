'use strict';
{
  
  const burger = document.querySelector(".burger");
  const menue = document.querySelector(".responsive-menue");


  const doToggle =()=>{
    menue.classList.toggle('toggle');
    burger.classList.toggle("toggle");
  }



  burger.addEventListener('click',doToggle)
    
// scroll Animeition

  AOS.init({
  offset: 120,
  delay: 250,
});
}

