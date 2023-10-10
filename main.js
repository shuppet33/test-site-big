

$('.list').slick({
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  variableWidth: true
});

$('#showcase__slider, #showcase__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1
});

$('.commercial__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  dots: true,
});

$('#brands__slider').slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  variableWidth: true
});






// Слайдеры под ширину экрана

// Слайдеры под ширину 980 пикселей 

// Основные слайдеры с товарами
$('#w980-1, #w980-2, #w980-3, #w980-4').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1
});

$('#brands-w980').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1
});

var myprevW980n01 = document.getElementById('button-w980-1__myprev')
var mynextW980n01 = document.getElementById('button-w980-1__mynext')
myprevW980n01.addEventListener('click', (e) => {
  $('#w980-1').slick('slickPrev');
})
mynextW980n01.addEventListener('click', (e) => {
  $('#w980-1').slick('slickNext');
})

var myprevW980n02 = document.getElementById('button-w980-2__myprev')
var mynextW980n02 = document.getElementById('button-w980-2__mynext')
myprevW980n02.addEventListener('click', (e) => {
  $('#w980-2').slick('slickPrev');
})
mynextW980n02.addEventListener('click', (e) => {
  $('#w980-2').slick('slickNext');
})
var myprevW980n03 = document.getElementById('button-w980-3__myprev')
var mynextW980n03 = document.getElementById('button-w980-3__mynext')
myprevW980n03.addEventListener('click', (e) => {
  $('#w980-3').slick('slickPrev');
})
mynextW980n03.addEventListener('click', (e) => {
  $('#w980-3').slick('slickNext');
})
var myprevW980n04 = document.getElementById('button-w980-4__myprev')
var mynextW980n04 = document.getElementById('button-w980-4__mynext')
myprevW980n04.addEventListener('click', (e) => {
  $('#w980-4').slick('slickPrev');
})
mynextW980n04.addEventListener('click', (e) => {
  $('#w980-4').slick('slickNext');
})

var brands980P = document.getElementById('brands__myprev980')
var brands980N = document.getElementById('brands__mynext980')

brands980P.addEventListener('click', (e) => {
  $('#brands-w980').slick('slickPrev');
})
brands980N.addEventListener('click', (e) => {
  $('#brands-w980').slick('slickNext');
})





// Слайдеры под ширину 750 пикселей 

// Оснолвные слайдеры с товарами
$('#w750-1, #w750-2, #w750-3, #w750-4').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

$('#brands-w750').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1
});

var myprevW750n01 = document.getElementById('button-w750-1__myprev')
var mynextW750n01 = document.getElementById('button-w750-1__mynext')
myprevW750n01.addEventListener('click', (e) => {
  $('#w750-1').slick('slickPrev');
})
mynextW750n01.addEventListener('click', (e) => {
  $('#w750-1').slick('slickNext');
})


var myprevW750n02 = document.getElementById('button-w750-2__myprev')
var mynextW750n02 = document.getElementById('button-w750-2__mynext')
myprevW750n02.addEventListener('click', (e) => {
  $('#w750-2').slick('slickPrev');
})
mynextW750n02.addEventListener('click', (e) => {
  $('#w750-2').slick('slickNext');
})


var myprevW750n03 = document.getElementById('button-w750-3__myprev')
var mynextW750n03 = document.getElementById('button-w750-3__mynext')
myprevW750n03.addEventListener('click', (e) => {
  $('#w750-3').slick('slickPrev');
})
mynextW750n03.addEventListener('click', (e) => {
  $('#w750-3').slick('slickNext');
})

var myprevW750n04 = document.getElementById('button-w750-4__myprev')
var mynextW750n04 = document.getElementById('button-w750-4__mynext')
myprevW750n04.addEventListener('click', (e) => {
  $('#w750-4').slick('slickPrev');
})
mynextW750n04.addEventListener('click', (e) => {
  $('#w750-4').slick('slickNext');
})

var brands750P = document.getElementById('brands__myprev750')
var brands750N = document.getElementById('brands__mynext750')

brands750P.addEventListener('click', (e) => {
  $('#brands-w750').slick('slickPrev');
})
brands750N.addEventListener('click', (e) => {
  $('#brands-w750').slick('slickNext');
})


// Слайдер с Цифрами

$('#w750-6').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1
});

var myprevW750n06 = document.getElementById('button-w750-6__myprev')
var mynextW750n06 = document.getElementById('button-w750-6__mynext')
myprevW750n06.addEventListener('click', (e) => {
  $('#w750-6').slick('slickPrev');
})
mynextW750n06.addEventListener('click', (e) => {
  $('#w750-6').slick('slickNext');
})


// Слайдеры под ширину 640 пикселей 

// Основные слайдеры с товарами
$('#w640-1, #w640-2, #w640-3, #w640-4').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
});

$('#brands-w640').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

var myprevW640n01 = document.getElementById('button-w640-1__myprev')
var mynextW640n01 = document.getElementById('button-w640-1__mynext')
myprevW640n01.addEventListener('click', (e) => {
  $('#w640-1').slick('slickPrev');
})
mynextW640n01.addEventListener('click', (e) => {
  $('#w640-1').slick('slickNext');
})


var myprevW640n02 = document.getElementById('button-w640-2__myprev')
var mynextW640n02 = document.getElementById('button-w640-2__mynext')
myprevW640n02.addEventListener('click', (e) => {
  $('#w640-2').slick('slickPrev');
})
mynextW640n02.addEventListener('click', (e) => {
  $('#w640-2').slick('slickNext');
})


var myprevW640n03 = document.getElementById('button-w640-3__myprev')
var mynextW640n03 = document.getElementById('button-w640-3__mynext')
myprevW640n03.addEventListener('click', (e) => {
  $('#w640-3').slick('slickPrev');
})
mynextW640n03.addEventListener('click', (e) => {
  $('#w640-3').slick('slickNext');
})

var myprevW640n04 = document.getElementById('button-w640-4__myprev')
var mynextW640n04 = document.getElementById('button-w640-4__mynext')
myprevW640n04.addEventListener('click', (e) => {
  $('#w640-4').slick('slickPrev');
})
mynextW640n04.addEventListener('click', (e) => {
  $('#w640-4').slick('slickNext');
})

var brands640P = document.getElementById('brands__myprev640')
var brands640N = document.getElementById('brands__mynext640')

brands640P.addEventListener('click', (e) => {
  $('#brands-w640').slick('slickPrev');
})
brands640N.addEventListener('click', (e) => {
  $('#brands-w640').slick('slickNext');
})


// Слайдер с Цифрами

$('#w640-6').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

var myprevW750n06 = document.getElementById('button-w640-6__myprev')
var mynextW750n06 = document.getElementById('button-w640-6__mynext')
myprevW750n06.addEventListener('click', (e) => {
  $('#w640-6').slick('slickPrev');
})
mynextW750n06.addEventListener('click', (e) => {
  $('#w640-6').slick('slickNext');
})



// Слайдеры под ширину 440 пикселей 

// Основные слайдеры с товарами
$('#w440-1, #w440-2, #w440-3, #w440-4').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

var myprevW440n01 = document.getElementById('button-w440-1__myprev')
var mynextW440n01 = document.getElementById('button-w440-1__mynext')
myprevW440n01.addEventListener('click', (e) => {
  $('#w440-1').slick('slickPrev');
})
mynextW440n01.addEventListener('click', (e) => {
  $('#w640-1').slick('slickNext');
})


var myprevW440n02 = document.getElementById('button-w440-2__myprev')
var mynextW440n02 = document.getElementById('button-w440-2__mynext')
myprevW440n02.addEventListener('click', (e) => {
  $('#w640-2').slick('slickPrev');
})
mynextW440n02.addEventListener('click', (e) => {
  $('#w640-2').slick('slickNext');
})


var myprevW440n03 = document.getElementById('button-w440-3__myprev')
var mynextW440n03 = document.getElementById('button-w440-3__mynext')
myprevW440n03.addEventListener('click', (e) => {
  $('#w640-3').slick('slickPrev');
})
mynextW640n03.addEventListener('click', (e) => {
  $('#w640-3').slick('slickNext');
})

var myprevW440n04 = document.getElementById('button-w440-4__myprev')
var mynextW440n04 = document.getElementById('button-w440-4__mynext')
myprevW440n04.addEventListener('click', (e) => {
  $('#w440-4').slick('slickPrev');
})
mynextW440n04.addEventListener('click', (e) => {
  $('#w440-4').slick('slickNext');
})


// Бургер меню

const popup = document.querySelector("#popup");
const burger = document.querySelector(".burger__header__active");

burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
  e.preventDefault();

  popup.classList.toggle("d-none");
  burger.classList.toggle("d-none");
};

const closeC = document.querySelectorAll("#close");

closeC.forEach((li) => {
  li.addEventListener("click", closeClick);
}) 

function closeClick(e) {
  popup.classList.toggle("d-none");
  burger.classList.toggle("d-none");
}

// /Бургер меню ................



// Сабменю

const navItemCatalog = document.querySelector('#catalog');
const navItemCompany = document.querySelector('#company');

const sMenuCatalog = document.getElementById("sabmenu-catalog");
const sMenuCompany = document.getElementById("sabmenu-company");

const sClose1 = document.querySelectorAll("#sclose1"); 
const sClose2 = document.querySelectorAll("#sclose2");

navItemCatalog.addEventListener('click', navCatalog);
navItemCompany.addEventListener('click', navCompany);


// Каталог
function navCatalog(e) {
  sMenuCatalog.classList.remove('d-none')
}

sClose1.forEach((li1) => {
  li1.addEventListener('click', Close1);
})

function Close1(e) {
  sMenuCatalog.classList.add('d-none')
}
// ................

// О компании
function navCompany(e) {
  sMenuCompany.classList.remove('d-none')
}

sClose2.forEach((li2) => {
  li2.addEventListener('click', Close2);
})

function Close2(e) {
  sMenuCompany.classList.add('d-none')
}

// ................