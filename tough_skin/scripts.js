const artButton = document.querySelectorAll('.art button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
function handleArtButtonClick(event) {
    const button = event.currentTarget;
    const art = button.closest('.art');
    const imgSrc = art.querySelector('img').src;
    const desc = art.dataset.description;
    const name = art.querySelector('h4').textContent;
    const description = art.querySelector('p').textContent;
    const size = art.querySelector('p').textContent;
    modalInner.innerHTML = `
     <img src="${imgSrc}"/>
    `;
modalOuter.classList.add('open');
}
    
artButton.forEach(button => button.addEventListener ('click', handleArtButtonClick))

function closeModal() {
    modalOuter.classList.remove('open');
}
modalOuter.addEventListener('click', function(event) {
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
      closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
});