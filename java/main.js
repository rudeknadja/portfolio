
//   /*   const container = document.querySelector('.image-wheel'); */
//     let images = Array.from(container.querySelectorAll('img'));

//     let currentStart = 0;

//     container.addEventListener('mouseenter', () => {
//         // Pokreće rotaciju kada se uđe mišem
//         rotateImages();
//         container.rotationInterval = setInterval(rotateImages, 1500);
//     });

//     container.addEventListener('mouseleave', () => {
//         // Zaustavlja rotaciju kada se miš skloni
//         clearInterval(container.rotationInterval);
//     });

//     function rotateImages() {
//         // Rotiraj niz slika tako da se prikazuju sledeće 3
//         images.push(images.shift()); // pomeri prvi na kraj
//         container.innerHTML = '';
//         images.forEach((img, i) => {
//             if (i < 3) {
//                 img.style.display = 'inline-block';
//             } else {
//                 img.style.display = 'none';
//             }
//             container.appendChild(img);
//         });
//     }

// const container = document.querySelector('.image-wheel');
// const track = container.querySelector('.scroll-track');

// let position = 0;
// let animationId = null;
// let speed = 0.5; // manja vrednost = sporije klizanje

// function animate() {
//   position -= speed;
//   if (Math.abs(position) >= track.scrollWidth / 2) {
//     // resetuj poziciju za seamless loop
//     position = 0;
//   }

//   track.style.transform = `translateX(${position}px)`;
//   animationId = requestAnimationFrame(animate);
// }

// container.addEventListener('mouseenter', () => {
//   if (!animationId) {
//     animate();
//   }
// });

// container.addEventListener('mouseleave', () => {
//   cancelAnimationFrame(animationId);
//   animationId = null;
// });
const carousel = document.querySelector('.carousel');
let scrollInterval = null;

function startScroll(direction) {
  stopScroll(); // zaustavi bilo koji prethodni interval
  scrollInterval = setInterval(() => {
    carousel.scrollLeft += direction;
  }, 10); // glatko pomeranje
}

function stopScroll() {
  clearInterval(scrollInterval);
  scrollInterval = null;
}

// detekcija hover pozicije
carousel.addEventListener('mousemove', (e) => {
  const bounds = carousel.getBoundingClientRect();
  const x = e.clientX - bounds.left; // pozicija misa u okviru carousel-a
  const zoneWidth = bounds.width / 3;

  if (x < zoneWidth) {
    startScroll(-2); // levo
  } else if (x > 2 * zoneWidth) {
    startScroll(2); // desno
  } else {
    stopScroll(); // sredina
  }
});

function updateImageScaling() {
    const images = carousel.querySelectorAll('li img');
    const carouselRect = carousel.getBoundingClientRect();
    const centerX = carouselRect.left + carouselRect.width / 2;
  
    images.forEach((img) => {
      const imgRect = img.getBoundingClientRect();
      const imgCenterX = imgRect.left + imgRect.width / 2;
  
      // tolerancija od npr. ±50px od centra
      if (Math.abs(imgCenterX - centerX) < 50) {
        img.classList.add('enlarged');
      } else {
        img.classList.remove('enlarged');
      }
    });
  }
  
  // pozivaj ovu funkciju kad se pomera carousel
  carousel.addEventListener('scroll', () => {
    updateImageScaling();
  });
  
  // takođe inicijalno pozovi kad se stranica učita
  window.addEventListener('load', () => {
    updateImageScaling();
  });
  
// kad miš izađe iz karusela, stop
carousel.addEventListener('mouseleave', stopScroll);


    
        
