const playButtonEl = document.querySelector('header button#play');
const mainEl = document.querySelector('main');

console.log(playButtonEl, mainEl);
playButtonEl.addEventListener('click', function(){
    console.log('click');
    mainEl.innerHTML = '<section id="grid" class="flex-centered">'
})




// <section id="grid" class="flex-centered">
// <article class="square flex-centered">