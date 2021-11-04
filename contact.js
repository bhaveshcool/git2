const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const con = document.querySelector('.container');

btn1.addEventListener('click', ()=>{
        con.classList.add('open');
});

btn2.addEventListener('click', ()=>{
        con.classList.remove('open');
});

