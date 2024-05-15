/*=============== SHOW MENU ===============*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/* ======MENU SHOW====== */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/* ======MENU HIDDEN===== */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader =() =>{
    //when the scroll is greater than 50 viewpoint height, add the 
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== DARK LIGHT THEME ===============*/ 
let first_color = getComputedStyle(document.documentElement).getPropertyValue('--first-color');
let shadow_color = getComputedStyle(document.documentElement).getPropertyValue('--shadow-color');
let first_color_alt = getComputedStyle(document.documentElement).getPropertyValue('--first-color-alt');

const themeButton = document.getElementById('theme-button')
const darkTheme ='dark-theme'
const iconTheme ='ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' :'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const selectedColor = localStorage.getItem('selected-color');

const colors = ["#0076cc", "#9457EB", "#A7A944", "#47B16A", "#006262"];
const shadow_col = ['#96D5DB', '#A477EA', '#F3F680', '#23C85A', '#746E80'];
const color_alt = ['#96D5DB', '#A477EA', '#F3F680', '#97C8A7', '#9BB4B5' ];

    function bgcolor(){
        const rncol = (Math.floor(Math.random() * colors.length));
        // localStorage.setItem('color',  colors[rncol]);
        document.documentElement.style.setProperty('--first-color', colors[rncol]);
        document.documentElement.style.setProperty('--shadow-color', shadow_col[rncol]);
        document.documentElement.style.setProperty('--first-color-alt', color_alt[rncol]); 
    }
    window.addEventListener('click', bgcolor)



