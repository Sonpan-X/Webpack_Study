import _ from 'lodash';
import  printMe from './print';

function component(){
  var element  = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _join(['Hello','webpack'],'');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;

  return element;
}

document.body.appendChild(component());
