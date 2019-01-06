import _ from 'lodash';
import printMe from './print.js';

function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'peppapeipei','happy'], '~');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
  fdsdf
    return element;
  }
  
  document.body.appendChild(component());