// select element
const sideBar = document.querySelector('.sidebar');
const sideBarBtn = document.querySelector('.open-close-sidebar');

console.log(sideBar);

sideBarBtn.addEventListener('click', (e) => {
    sideBar.classList.toggle('left-full');
    sideBarBtn.innerHTML = sideBar.classList.contains('left-full') ? `<i class='bx bx-menu' ></i>` : `<i class='bx bx-x' ></i>`;
    sideBarBtn.classList.toggle('text-white')
})