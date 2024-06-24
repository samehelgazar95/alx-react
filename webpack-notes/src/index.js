import './main.scss';
import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  const content = _.join(['Hello', 'from', 'index'], ' ');

  element.innerHTML = content;
  element.className = 'webpack';
  return element;
}

document.body.appendChild(component());
