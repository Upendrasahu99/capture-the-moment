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


// image slideshow

const imageArray = ['image-3.jpg', 'image-4.jpg', 'image-5.jpg'];
const slideshowBox = document.querySelector('#section-5 .slide-show-box img');
console.log(slideshowBox.src);
let index = 0;
setInterval(() => {
  slideshowBox.src = './assets/'+imageArray[index];
  if(index === imageArray.length -1){
    index = 0;
    return
  }
  index++;
}, 3000)















console.log('hello world');