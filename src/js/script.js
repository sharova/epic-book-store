import addPage from './modules/addPage.js';
import booksData from './modules/booksData.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import createElement from './modules/createElement.js';
import sendRequest from './modules/sendRequest.js';
import $ from 'jquery';
import slick from '../../node_modules/slick-carousel/slick/slick.min.js';
import validate from '../../node_modules/jquery-validation/dist/jquery.validate.js';
import magnificPopup from '../../node_modules/magnific-popup/dist/jquery.magnific-popup.js';



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

if (tabsWrap) {
  const tabsArray = Array.prototype.slice.call(tabsWrap.children);

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
}


//Функция подготовки URL для GET запроса
function createDataAjax() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    data.perPage = 8;
  } else {
    data.perPage = 3;
  }

  return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`
}

const test = $('.slick-slider');
console.log(test);

//Подключение слайдера на главной
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



//Валидация формы контактов
$(function(){
  $('.form').validate( {
    rules: {
      email: {
        required: true,
        minlength: 6,
        email: true
      },
      agreement: {
        required: true,
        checkbox: true
      }
    },
    messages: {
      email: {
        required: "Вы не ввели почту",
        email: "Почта должна быть в формате name@domain.com"
      },
      agreement: {
        required: "Нужно согласиться с условиями, поставив галочку"
      }
    }
  });
});



// $(document).on("click", ".product__describtion-link button", function(e) {
//     e.preventDefault();
//     if($(this).text() == "Показать полностью"){
//         $(this).text("Скрыть")
//         $('div.product__describtion-text--hidden').removeClass('product__describtion-text--hidden')
//     } else {
//         $(this).text("Показать полностью")
//         $('div:not(.product__describtion-text)').addClass('product__describtion-text--hidden')
//     };

//     $this.text(linkText);
// });

//magnific-popup-product preview
$(document).ready(function() {
  $('.product__preview-wrap').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>epic-book-store</small>';
      }
    }
  });
});
