const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const reset = document.querySelector('#reset');

let $counter = document.querySelector('#counter');
let counter = 0;

plus.addEventListener('click', () => {
    $counter.innerHTML = ++counter;
})

minus.addEventListener('click', () => { 
    $counter.innerHTML = --counter;
})

reset.addEventListener('click', () => {
    $counter.innerHTML = 0;
    counter = 0;
})