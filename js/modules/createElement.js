function createElement(book, template) {
    const nodeElement = document.createElement(template.tag); //div
    nodeElement.classList.add(template.tagClass); //div.class

   if (template.href) {
    nodeElement.setAttribute('href', template.href);
   }

   nodeElement.innerHTML = template.setContent(book);

   return nodeElement;
  };

export default createElement;
