const searchBtn = document.querySelector('.btn');
const searchContainer = document.querySelector('.search')
const searchInput = document.querySelector('.input')


searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    searchInput.focus();
})