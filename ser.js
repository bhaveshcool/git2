const btn = document.querySelector('#btnnn');
const txt = document.querySelector('#txt');

btn.addEventListener('click', rand);

function rand() {
    const random = Math.random() * 100001010;    
    txt.value = random;
}