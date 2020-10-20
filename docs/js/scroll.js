const scrollDownButton = document.querySelector('.title__scroll__text');
const getStarted = document.querySelector('.getstarted')

scrollDownButton.addEventListener('click', () => {
    event.preventDefault();
    getStarted.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    })
});