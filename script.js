document.querySelectorAll('.carousel').forEach(function(carousel){
  var track = carousel.querySelector('.carousel-track');
  var prev = carousel.querySelector('.prev');
  var next = carousel.querySelector('.next');

  prev.addEventListener('click', function(){
    track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
  });
  next.addEventListener('click', function(){
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
  });
});
