const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4' , 
                   'videos/hero-2.mp4' ,
                   'videos/hero-3.mp4' ,
                   'videos/hero-4.mp4'
]

let index = 0;

nextButton.addEventListener('click' , function() {
    index += 1
    video.src = movieList[index]

    if (index == 3) {
        index = -1;
    }
})

// JS: toggle class based on scroll position
const img = document.querySelector('.scroll-image');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      img.classList.add('expanded');   // expand when entering viewport
    } else {
      img.classList.remove('expanded'); // shrink back when leaving
    }
  });
}, { threshold: 0.5 }); // trigger when 50% of image is visible

observer.observe(img);
