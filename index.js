//  explore India javascript______________________________________________

  const covers = document.querySelectorAll('.cover');
  let currentIndex = 0;

  function showNextCover() {
    covers[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % covers.length;
    covers[currentIndex].classList.add('active');
  }
  setInterval(showNextCover, 3000); // Change cover every 3 seconds


  // land page javascript__________________________________________

  TweenMax.from(".phone",1,{
    opacity: 0,
    delay: 1,
    y: -400,
    ease: Expo.easeInOut
})
TweenMax.from(".India",1,{
    opacity:0,
    delay:1,
    y:-400,
    ease: Expo.easeInOut
})
TweenMax.from(".WtY",1,{
    opacity:0,
    delay:0.9,
    y:-400,
    ease: Expo.easeInOut
})
TweenMax.from(".explore",1,{
    opacity:0,
    delay:1.1,
    y:-400,
    ease: Expo.easeInOut
})
TweenMax.from(".scroll-btn",1,{
    opacity:0,
    delay:1.1,
    y:800,
    ease: Expo.easeInOut
})
