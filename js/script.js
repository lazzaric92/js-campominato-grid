// || SELECTORS
const playButtonEl = document.querySelector('header button#play');
const mainEl = document.querySelector('main');

// || VARIABLES
let cellsNumber;
let gameDifficulty;

// || INIT
setDifficulty(document.querySelector('option').value);

playButtonEl.addEventListener('click', function(){
    mainEl.innerHTML = '<section id="grid" class="flex-centered">';
    const gridEl = document.querySelector('#grid');

    // > ciclo for per creare le celle e il loro contenuto
    for(let index = 0; index < cellsNumber; index++){
        const articleEl = document.createElement('article');
        articleEl.classList.add('cell', 'flex-centered');
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


// || FUNCTIONS

// --> funzione per settare la difficoltà
/** funzione per settare la difficoltà del gioco
 * 
 * @param {*} a option.value
 */
function setDifficulty(a){
    gameDifficulty = a;
    if (gameDifficulty == 'medium'){
        cellsNumber = 81;
    } else if (gameDifficulty == 'hard'){
        cellsNumber = 49;
    } else {
        cellsNumber = 100;
    }
}


// || MEMO
// <section id="grid" class="flex-centered">
// <article class="cell flex-centered">