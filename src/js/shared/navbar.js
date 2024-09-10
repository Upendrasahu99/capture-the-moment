// navbar ===============
// select element
const sideBar = document.querySelector('.sidebar');
const sideBarBtn = document.querySelector('.open-close-sidebar');

sideBarBtn.addEventListener('click', (e) => {
    sideBar.classList.toggle('left-full');
    sideBarBtn.innerHTML = sideBar.classList.contains('left-full') ? `<i class='bx bx-menu' ></i>` : `<i class='bx bx-x' ></i>`;
})
