// navbar ===============
// select element
const sideBar = document.querySelector('.sidebar');
const sideBarBtn = document.querySelector('.open-close-sidebar');

sideBarBtn.addEventListener('click', (e) => {
    sideBar.classList.toggle('left-full');
    sideBarBtn.innerHTML = sideBar.classList.contains('left-full') ? `<i class='bx bx-menu' ></i>` : `<i class='bx bx-x' ></i>`;
})

//=============================

//center animated text

const txt = 'love · moments · memories';

var i = 0;
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector('.center-text').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();