function myRotate(x) {    
    x.classList.toggle("change");
}   
function toggleNav() {    
    let elements = document.getElementsByClassName('top-nav');
    if(document.getElementById('hamburger').style.marginBottom === "10rem") {
        document.getElementById('hamburger').style.marginBottom="0";
    }
    else {
       document.getElementById('hamburger').style.marginBottom="10rem"; 
    }
    for(let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('show');
    }
}
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 100000,
        disableOnInteraction: false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });