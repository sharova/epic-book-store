import addPage from './modules/addPage.js';
import booksData from './modules/booksData.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import createElement from './modules/createElement.js';

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  if (document.querySelector(bookCardTemplate.wrap)) {
    const wrap = document.querySelector(bookCardTemplate.wrap);

    addPage(booksData.books, bookCardTemplate);
  }
});


