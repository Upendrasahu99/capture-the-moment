//=============================

//center animated text

// const txt = 'love · moments · memories';
const txt = 'प्यार · पल · यादें';

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