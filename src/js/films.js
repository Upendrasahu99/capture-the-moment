
const videoDiv = document.querySelectorAll('.video-div');

videoDiv.forEach((element) => {
  const ytVideoSecImage = element.querySelector('img');
  const ytVideoSecVideo = element.querySelector('iframe');
  const ytVideoSecPlayBtn = element.querySelector('button');


  ytVideoSecPlayBtn.addEventListener('click', (e) => {
    videoDiv.forEach((element2) => {
      element2.querySelector('img').classList.remove('hidden');
      element2.querySelector('button').classList.remove('hidden');
      element2.querySelector('iframe').classList.add('hidden');
      element2.querySelector('iframe').src = element2.querySelector('iframe').src.replace('?autoplay=1', '');
    })
    ytVideoSecImage.classList.add('hidden');
    ytVideoSecPlayBtn.classList.add('hidden');
    ytVideoSecVideo.classList.remove('hidden');
    ytVideoSecVideo.src +='?autoplay=1'; 
  })

})

