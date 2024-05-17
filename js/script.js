const playButtonEl = document.querySelector('header button#play');
const mainEl = document.querySelector('main');

playButtonEl.addEventListener('click', function(){
    console.log('click');
    mainEl.innerHTML = '<section id="grid" class="flex-centered">';
    const gridEl = document.querySelector('#grid');
    console.log(gridEl);

    // > ciclo for per creare le celle e il loro contenuto
    for(let index = 0; index < 100; index++){
        const articleEl = document.createElement('article');
        articleEl.classList.add('square', 'flex-centered');
        const spanEl = document.createElement('span');
        spanEl.append(index + 1);
        articleEl.appendChild(spanEl)

        // > la cella deve essere cliccabile
        articleEl.addEventListener('click', function(){
            articleEl.classList.toggle('active');
        })

        gridEl.appendChild(articleEl);
    }
    
})




// <section id="grid" class="flex-centered">
// <article class="square flex-centered">