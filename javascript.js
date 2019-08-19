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