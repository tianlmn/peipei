import _ from 'lodash';
import './style.css';
import './styles.scss';
import icon from './dog.png';
import baseIcon from './smallDog.jpeg';
import {printMe} from './print.js';


function component() {
    let element = document.createElement('div');
    let button = document.createElement('button');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', 'hotDevServer'], ' ');
    element.classList.add('hellosass');
    element.classList.add('hello');
    
    button.innerHTML='click';
    button.onclick=printMe;
    element.appendChild(button);

    let myIcon = new Image();
    myIcon.src = icon;
    myIcon.classList.add('smallbg');
    element.appendChild(myIcon);

    

    return element;
  }
  
  document.body.appendChild(component());
