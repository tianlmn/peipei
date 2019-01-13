import _ from 'lodash';


export function printMe() {
  console.log(_.join(['effee', 'hello'], ' '));
  if (process.env.NODE_ENV === 'production') {
    console.log('Looks like we are in 9999 mode!');
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('Looks like we are in 7777 mode!');
  }
}

export function noUse() {
  console.log("should not been bundled");
}