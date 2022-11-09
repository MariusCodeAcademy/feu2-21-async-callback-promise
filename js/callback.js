'use strict';
console.log('callback.js');

function getPost1(callBackFunc) {
  setTimeout(() => {
    console.log('post1');
    // cia as noriu kviesti post2
    callBackFunc();
  }, 3000);
}
function getPost2() {
  setTimeout(() => {
    console.log('post2');
  }, 2000);
}
function getPost3() {
  setTimeout(() => {
    console.log('post3');
  }, 1800);
}

getPost1(getPost2);
// getPost2();
// getPost3();
