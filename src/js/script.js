import addPage from './modules/addPage.js';
import booksData from './modules/booksData.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import createElement from './modules/createElement.js';
import sendRequest from './modules/sendRequest.js';
import $ from 'jquery';
import slick from '../../node_modules/slick-carousel/slick/slick.min.js';



function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// Объект, данный для AJAX запроса
const data = {
  page: 1,
  perPage: 8,
  type: ''
};

const wrap = document.querySelector(bookCardTemplate.wrap);

if (wrap) {
  const dataAjax = createDataAjax();

  sendRequest(dataAjax, function(responseObj) {
  if (wrap.children) {
  wrap.innerHTML = '';
  }

  addPage(responseObj.items, bookCardTemplate);
});
}



// Вешаем слушателя на табы
const tabsWrap = document.querySelector('.j-tabs');
const tabsArray = Array.from(tabsWrap.children);

tabsArray.forEach(function(tab) {
  const link = tab.firstElementChild;

  link.addEventListener('click', function(event) {
    event.preventDefault();
    data.type = event.target.dataset.type;

    const dataAjax = createDataAjax();

    sendRequest(dataAjax, function(responseObj) {
      if (wrap.children) {
      wrap.innerHTML = '';
      }

    addPage(responseObj.items, bookCardTemplate);
    });
  });
});

//Функция подготовки URL для GET запроса
function createDataAjax() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    data.perPage = 8;
  } else {
    data.perPage = 3;
  }

  return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`
}


$('.slick-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  arrows: true,
  appendArrows: $('.slider'),
  prevArrow:'<button class="slick-prev" aria-label="Previous" type="button"></button>',
  nextArrow:'<button class="slick-next" aria-label="Next" type="button"></button>',
  adaptiveHeight: true
});



// $('.main-nav__toggle').on('click', function(e) {
//   $(this).toggleClass('.main-nav__toggle--active');
// });

$(document).on("click", ".product__describtion-link button", function(e) {
    e.preventDefault();
    if($(this).text() == "Показать полностью"){
        $(this).text("Скрыть")
        $('div.product__describtion-text--hidden').removeClass('product__describtion-text--hidden')
    } else {
        $(this).text("Показать полностью")
        $('div:not(.product__describtion-text)').addClass('product__describtion-text--hidden')
    };

    $this.text(linkText);
});


