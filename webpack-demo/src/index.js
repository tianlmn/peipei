import _ from 'lodash';
import './style.css';
import './styles.scss';
import icon from './dog.png';
import baseIcon from './smallDog.jpeg';
function component() {
    let element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    
    element.classList.add('hellosass');
    element.classList.add('hello');
    
    let myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());