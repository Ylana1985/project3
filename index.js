
  new Swiper(".image-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });





  function hide_show()
{
  
  let div=document.getElementById("image-slider__slide3").style.display;
  
  let link=document.getElementById("excert__link").innerHTML;
 
  if(div=="")div="block";
  
  if(div=="none")
  {
    div="block";
    link="Скрыть";
  }
 
  else
  {
    div="none";
    link="Показать";
  }
  
  document.getElementById("image-slider__slide3").style.display=div;
  document.getElementById("excert__link").innerHTML=link;
}