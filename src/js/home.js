//=============================

//center animated text


// const txt = 'love · moments · memories';
const txt = 'प्यार · पल · यादें';
const centerElement = document.querySelector('.center-text');

let i = 0;

const typeWriter = () => {
  if(i < txt.length){
    centerElement.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();