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
  ytVideoSecVideo.src +='?autoplay=1'; 
})

//section 11

const feedbackData = [
  {
    paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    Name: '-John Doe & Jane Smith',
    place: 'Location A'
  },
  {
    paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    Name: '-Alice Johnson & Bob Brown',
    place: 'Location B'
  },
  {
    paragraph: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio, et feugiat tellus malesuada et. Sed lectus. Praesent elementum hendrerit tortor.',
    Name: '-Charlie White & Dana Green',
    place: 'Location C'
  }
];


const section11 = document.querySelector('#section-11');

let j = 0;
function addData() {
  section11.insertAdjacentHTML('beforeend', `
    <h1 class="text-4xl">some kind words</h1>
    <p class="md:w-3/5 text-sm md:text-2xl py-6 text-justify">${feedbackData[j].paragraph}</p>
    <h4>${feedbackData[j].Name}</h4>
    <h6>${feedbackData[j].place}</h6>
  `);
    j++;
    if(j >= feedbackData.length){
      j = 0;
    }
}

addData();
setInterval(() => {
  section11.innerHTML= '';
  addData();
}, 4000);