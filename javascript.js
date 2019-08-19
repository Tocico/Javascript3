var animation = anime.timeline({
    easing: 'linear',
    duration: 500,
    loop: true,
})
animation.add({
    targets: '#pointer1',
    translateY: -150,
    opacity: 1,
})
animation.add({
    targets: '#pointer2',
    translateX: 150,
    translateY: -150,
    opacity: 1,
})
animation.add({
    targets: '#pointer3',
    translateX: 150,
    opacity: 1,
})
animation.add({
    targets: '#pointer4',
    translateY: 150,
    translateX: 150,
    opacity: 1,
})
animation.add({
    targets: '#pointer5',
    translateY: 150,
    opacity: 1,
})
animation.add({
    targets: '#pointer6',
    translateY: 150,
    translateX: -150,
    opacity: 1,
})
animation.add({
    targets: '#pointer7',
    translateX: -150,
    opacity: 1,
})
animation.add({
    targets: '#pointer8',
    translateX: -150,
    translateY: -150,
    opacity: 1,
})


var textWrapper = document.querySelector('.welcome');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.welcome .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
      return 150 * (i+1)
    }
  }).add({
    targets: '.welcome',
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });