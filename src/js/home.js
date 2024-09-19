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


// section 8 youtube video section 

// const ytVideoSection = document.querySelector('.yt-video-section');
// console.log(ytVideoSection.innerHTML);
const ytVideoSecImage = document.querySelector('.yt-video-section img');
const ytVideoSecVideo = document.querySelector('.yt-video-section iframe');
const ytVideoSecPlayBtn = document.querySelector('.yt-video-section button');
console.log(ytVideoSecVideo.src);
ytVideoSecPlayBtn.addEventListener('click', (e) => {
  ytVideoSecImage.classList.add('hidden');
  ytVideoSecPlayBtn.classList.add('hidden');
  ytVideoSecVideo.classList.remove('hidden');
  ytVideoSecVideo.src = ytVideoSecVideo.src + '?autoplay=1'; 
})










console.log('hello world');