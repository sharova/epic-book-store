import addPage from './modules/addPage.js';
import booksData from './modules/booksData.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import createElement from './modules/createElement.js';
import sendRequest from './modules/sendRequest.js';

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

