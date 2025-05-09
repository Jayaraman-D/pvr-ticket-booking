

let displayHtml = ''
moviesArr.forEach((movie) => {
  displayHtml += `<div class ='box'>
 <img src= " ${movie.images}" />
 <h5 class='movie-name'> Movie: ${movie.title} </h5>
 <h5 class='hero'> Hero: ${movie.hero} </h5>
 </div>`
});

let divContainer = document.querySelector('.container');
divContainer.innerHTML = displayHtml



let divBoxes = document.querySelectorAll('.box');
divBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    console.log("this is a box");
    let movieTitle = box.querySelector('.movie-name').textContent;
    let heroName = box.querySelector('.hero').textContent;
    console.log(movieTitle);
    console.log(heroName);

    localStorage.setItem('movieTitle', movieTitle);
    localStorage.setItem('heroName', heroName);

    setTimeout(() => {
      location.href = 'booking.html';
  
    }, 1000);

  });

});