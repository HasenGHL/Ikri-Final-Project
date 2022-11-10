





//dropdown menu:
let subMenu = document.getElementById('subMenu');
let liTwo = document.getElementById('li-menu');
let anchor = document.getElementById('anchor');

    function toggleMenu(){
          subMenu.classList.toggle('open-menu');
         }





//image slides:

const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.image-slide');
const contents = document.querySelectorAll('.content-home');

var sliderNav = function(manual){
    btns.forEach((btn) =>{
        btn.classList.remove('active');
    });

    slides.forEach((slide) =>{
        slide.classList.remove('active');
    });

    contents.forEach((content) =>{
        content.classList.remove('active');
    });



    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    contents[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    }); 
});





//calculator:

let budget = document.getElementById('budget');
let result = document.getElementById('result');
let dateFrom = document.getElementById('date-from');
let dateTo = document.getElementById('date-to');
let btn = document.getElementById('btn');


btn.addEventListener('click', () =>{
    var date1 = new Date(dateFrom.value)
    var date2 = new Date(dateTo.value)
    var oneDay = 24 * 60 * 60 * 1000;
    
    var dateDiff = Math.abs((date1.getTime() - date2.getTime()) / (oneDay)); 
    result.value = budget.value * dateDiff + 5.99 + '$';
})
    


//search bar


function Search(item){
    var car = document.getElementsByClassName("car");
    for (i = 0;i < car.length; i++){
        if (((car[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
            car[i].style.display = "";
            } else {
                car[i].style.display = "none";
                }
    }
}




//toggle menu mobile

const navMenu = document.getElementById('ul-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

