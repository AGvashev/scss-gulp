// Scroll down button variables
const scrollDownButton = document.querySelector('.title__scroll__text');
const getStarted = document.querySelector('.getstarted')

// Progress bar variables
const progressBar = document.querySelector('.scroll__progress')
const progressBarHeight = 10;

// Mobile header variables
const mobileHeader = document.querySelector('.mobile__header');
const headerLogoBars = document.querySelector('.header__logo__bars');
const headerNavMenu = document.querySelectorAll('.nav__menu')[1];
const headerAccount = document.querySelectorAll('.account')[1];

scrollDownButton.addEventListener('click', () => { // Scroll down button
    event.preventDefault();
    getStarted.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    })
});

window.addEventListener('scroll', () => { 
    // Progress bar function
    let windowScroll = document.body.scrollTop || 
    document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - 
    document.documentElement.clientHeight; 
    let height_progress_line = windowScroll / windowHeight * 100;
    progressBar.style.height = height_progress_line + '%';


    // Fixed mobile header
    if (windowScroll > 80) {
        mobileHeader.style.position = "fixed";
        mobileHeader.style.background = "#0b1d26";
    } else {
        mobileHeader.style.position = "relative";
        mobileHeader.style.background = "transparent";
    }
});

// Mobile header menu
headerLogoBars.addEventListener('click', () => {
    headerNavMenu.style.display = headerNavMenu.style.display == 'flex' ? 'none' : 'flex';
    headerAccount.style.display = headerAccount.style.display == 'flex' ? 'none' : 'flex';
})