import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  const content = _.join(['Hello', 'from', 'another'], ' ');

  element.innerHTML = content;
  return element;
}

document.body.appendChild(component());
