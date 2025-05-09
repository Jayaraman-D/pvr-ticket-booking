let bookBtn = document.querySelector('.booking-btn');
bookBtn.addEventListener('click', function(){
    console.log('Button Clicked');

    let date = document.getElementById('datePicker').value;
    console.log(date);
});


let showTime = document.querySelectorAll('.show-time');

showTime.forEach((box)=>{
    box.addEventListener('click', ()=>{
        console.log("box clicked");
        setTimeout(()=>{
            location.href='seats.html'
        },500)
    });
  
});