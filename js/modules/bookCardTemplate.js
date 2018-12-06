const bookCardTemplate = {
  wrap: '.catalog__list',
  tag: 'div',
  tagClass: 'product-card-mini',
  setContent: function(book) {
    return `<h2 class="product-card-mini__title"><a href="${book.titleLink}">${book.title}</a></h2>
          <a href="${book.imgWrap}" class="product-card-mini__img-wrap"><img src="${book.imgLink}" alt="" class="product-card-mini__img"></a>
          <p class="product-card-mini__descr">${book.describtion}</p>
          <div class="product-card-mini__price">${book.price}</div>`;
  }
}

export default bookCardTemplate;
