
class GameTemplate {
  constructor(ele, obj) {
    let oldElement = ele.querySelector(obj.name);
    let newElement = document.createElement(obj.element);

    if (obj.className) {
      newElement.setAttribute('class', obj.className);
    } else {
      newElement.setAttribute('class', oldElement.getAttribute('class'));
    }

    if (obj.html) {
      newElement.innerHTML = obj.html;
    }

    ele.replaceChild(newElement, oldElement);
    this.$ele = newElement;
  }
}

export default GameTemplate;
