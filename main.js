const toggleBtn = document.querySelector('.hamburger')
const links = document.getElementById('links')

toggleBtn.addEventListener('click', ()=> {
    links.classList.toggle('show-mob-nav')
})