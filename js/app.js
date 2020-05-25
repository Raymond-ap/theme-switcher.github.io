const toogle = document.querySelector('.toogle-container');
const toggleColor = document.querySelector('.bg');

toogle.addEventListener('click', function () {
    const h1 = document.querySelectorAll('h1');
    const paragraphs = document.querySelectorAll('p');
    const cards = document.querySelectorAll('.card')

    const body = document.querySelector('body');
    toogle.classList.toggle('toogle-backgroud');
    toggleColor.classList.toggle('active');

    document.querySelector('h3').classList.toggle('headerColor')
    cards.forEach(card => {
        card.classList.toggle('cardColor');
    });

    
    h1.forEach(headings => {
        headings.classList.toggle('headerColor')
    });

    paragraphs.forEach(para => {
        para.classList.toggle('headerColor');
    });

    body.classList.toggle('dark');
    document.querySelectorAll('.box').forEach(item => {
        item.classList.toggle('cardColor')
    });

    document.querySelectorAll('h5').forEach(item => {
        item.classList.toggle('headerColor')
    });
    document.querySelectorAll('h3').forEach(item => {
        item.classList.toggle('headerColor')
    });

    document.querySelectorAll('.red').forEach(item => {
        item.classList.toggle('arrow-down')
    })


});
