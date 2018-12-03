function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  console.log('DOM ready');
});

  const data = {
    books: [
    {
      title: `Латеральная логика`,
      titleLink: ``,
      imgLink: `https://via.placeholder.com/150x210`,
      imgWrap: ``,
      describtion: `Головоломный путь к нестандартному мышлению`,
      price: `500 Р`
    },{
      title: `Путеводитель по лжи`,
      titleLink: ``,
      imgLink: `https://via.placeholder.com/150x210`,
      imgWrap: ``,
      describtion: `Критическое мышление в эпоху постправды`,
      price: `630 Р`
    },{
      title: `Дао физики`,
      titleLink: ``,
      imgLink: `https://via.placeholder.com/150x210`,
      imgWrap: ``,
      describtion: `Исследование параллелей между современной физикой и восточной философией`,
      price: `560 Р`
    },{
      title: `Не очевидно`,
      titleLink: ``,
      imgLink: `https://via.placeholder.com/150x210`,
      imgWrap: ``,
      describtion: `Как выявлять тренды раньше других`,
      price: `365 Р`
    },{
      title: `Латеральная логика`,
      titleLink: ``,
      imgLink: `https://via.placeholder.com/150x210`,
      imgWrap: ``,
      describtion: `Головоломный путь к нестандартному мышлению`,
      price: `500 Р`
    },{
      title: `Путеводитель по лжи`,
      titleLink: ``,
      imgLink: `https://via.placeholder.com/150x210`,
      imgWrap: ``,
      describtion: `Критическое мышление в эпоху постправды`,
      price: `630 Р`
    },{
      title: `Дао физики`,
      titleLink: ``,
      imgLink: `https://via.placeholder.com/150x210`,
      imgWrap: ``,
      describtion: `Исследование параллелей между современной физикой и восточной философией`,
      price: `560 Р`
    },{
      title: `Не очевидно`,
      titleLink: ``,
      imgLink: `https://via.placeholder.com/150x210`,
      imgWrap: ``,
      describtion: `Как выявлять тренды раньше других`,
      price: `365 Р`
    }
   ]
  };


  const cards = document.querySelector('.catalog__list');

  const elements = document.querySelectorAll('.product-card-mini');

  function createCards(data) {
    const bookArr = data.books;
    let cardString = ``;

    bookArr.forEach(function(book) {
      cardString = cardString + `<article class="product-card-mini">
          <h2 class="product-card-mini__title"><a href="${book.titleLink}">${book.title}</a></h2>
          <a href="${book.imgWrap}" class="product-card-mini__img-wrap"><img src="${book.imgLink}" alt="" class="product-card-mini__img"></a>
          <p class="product-card-mini__descr">${book.describtion}</p>
          <div class="product-card-mini__price">${book.price}</div>
        </article>`
    });
    return cardString;
  }

  function insertElements(data, wrap) {
    const html = createCards(data);
    wrap.innerHTML = html;
  }
  insertElements(data, cards);

