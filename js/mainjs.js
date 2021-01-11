'use strict'
{
  const images = [
    'img/IMG_4845.JPG',
    'img/IMG_4835.JPG',
    'img/IMG_4836.JPG',
    'img/IMG_4839.JPG',
    'img/IMG_4865.JPG',
    'img/IMG_4859.JPG',
    'img/IMG_4843.JPG',
    'img/IMG_4837.JPG',
    'img/IMG_4842.JPG',
    'img/IMG_4855.JPG',
    'img/IMG_4844.JPG',
    'img/IMG_4863.JPG',
    'img/IMG_4848.JPG',
    'img/IMG_4850.JPG',
    'img/IMG_4857.JPG',
    'img/IMG_4849.JPG',
    'img/IMG_4851.JPG',
    'img/IMG_4838.JPG',
    'img/IMG_4841.JPG',
    'img/IMG_4854.JPG',
    'img/IMG_4856.JPG',
    'img/IMG_4858.JPG',
    'img/IMG_4860.JPG',
    'img/IMG_4853.JPG',
    'img/IMG_4861.JPG',
    'img/IMG_4862.JPG',
    'img/IMG_4840.JPG',
    'img/IMG_4864.JPG',
    'img/IMG_4852.JPG',
  ];
  
  let currentIndex = 0;

  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

  images.forEach((image,index) =>{
    const img = document.createElement('img');
    img.src = image
    const li = document.createElement('li');
    if (index === currentIndex){
      li.classList.add('current');
    }
    li.addEventListener('click', () =>{
      mainImage.src = image;
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current')
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });

  const next = document.getElementById('next');
  next.addEventListener('click', () =>{
    let target = currentIndex + 1;
    if (target === images.length){
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });
  const prev = document.getElementById('prev');
  prev.addEventListener('click', () =>{
    let target = currentIndex - 1;
    if (target < 0){
      target = images.length - 1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  let timeoutId;

  function slideShow(){
    timeoutId = setTimeout(() => {
      next.click();
      slideShow();
    }, 1000);
  }

  let isPlaying = false;

  const play = document.getElementById('play');
  play.addEventListener('click', () =>{
    if (isPlaying === false){
      slideShow();
      play.textContent = 'Pause';
    } else{
      clearTimeout(timeoutId);
      play.textContent = 'Play';
    }
    isPlaying = !isPlaying;
  });
}