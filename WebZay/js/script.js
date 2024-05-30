const swiper = new Swiper('.swiper_home', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    effect: 'slide',
 
    parallax: true,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   draggable: true,
    // },
  });