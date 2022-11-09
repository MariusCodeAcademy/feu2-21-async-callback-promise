'use strict';
console.log('practice.js');

const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
  .then((response) => response.json())
  .then((duomenysJavascriptFormatu) => {
    console.log('duomenysJavascriptFormatu ===', duomenysJavascriptFormatu);
  })
  .catch((err) => console.warn('klaida gaunant posts', err));
