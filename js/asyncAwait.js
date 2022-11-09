'use strict';
console.log('asyncAwait.js');

function getPost1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('post1');
      resolve(10);
    }, 3000);
  });
}
function getPost2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('post2');
      resolve(20);
    }, 2000);
  });
}

function getPost3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('post3');
      resolve(15);
    }, 1800);
  });
}

// async ir await - galim naudoti funkcijose, ir turim butinai naudoti su try catch bloku

async function app() {
  // await - palaukt kol ivyks promise.resolve ir tik tada vygdyti tolimesne eilute.
  await getPost1();
  await getPost2();
  await getPost3();
}
app();
