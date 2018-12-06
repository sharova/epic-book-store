import createElement from './createElement.js';
import bookCardTemplate from './bookCardTemplate.js';

function addPage(dataArray, template) {

  dataArray.forEach((item) => {
    const card = createElement(item, template);
    const wrap = document.querySelector(template.wrap);

    wrap.appendChild(card);
  });
}
export default addPage;
