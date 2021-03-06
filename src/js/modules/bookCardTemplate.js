const bookCardTemplate = {
  wrap: '.catalog__list',
  tag: 'article',
  tagClass: 'product-card-mini',
  setContent: function(book) {
    return `<div class="product-card-mini__wrap"><h3 class="product-card-mini__title"><a href="${book.titleLink}">${book.name}</a></h2>
          <a href="${book.imgWrap}" class="product-card-mini__img-wrap"><img src="img/books_all/${book.uri}.png" alt="${book.uri}" class="product-card-mini__img"></a>
          <p class="product-card-mini__descr">${book.desc}</p>
          <div class="product-card-mini__price">${book.price} ₽</div></div>`;
  }
}

export default bookCardTemplate;



