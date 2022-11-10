'use strict';
console.log('practice.js');

const url = 'https://jsonplaceholder.typicode.com/posts';
const url2 = 'https://dummyjson.com/posts';
const btn1El = document.getElementById('btn1');

btn1El.addEventListener('click', () => getPosts(generateCards));

function getPosts(callback) {
  fetch(url)
    .then((response) => response.json())
    .then((duomenysJavascriptFormatu) => {
      // console.log('duomenysJavascriptFormatu ===', duomenysJavascriptFormatu);
      const first10posts = duomenysJavascriptFormatu.slice(0, 10);
      console.log('first10posts ===', first10posts);
      callback(first10posts);
    })
    .catch((err) => console.warn('klaida gaunant posts', err));
}

/*
  <article class="card">
      <h3>title</h3>
      <p>text</p>
      <p><i>id</i></p>
    </article>
  */
function generateCards(arr) {
  const dest = document.getElementById('postsCards');
  if (!dest) throw 'blogas id';

  const htmlElsArr = arr.map((p) => {
    const articleEl = document.createElement('article');
    articleEl.className = 'card';
    articleEl.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.body}</p>
    <p><i>${p.id}</i></p>
    `;
    return articleEl;
  });
  console.log('htmlElsArr ===', htmlElsArr);
  htmlElsArr.forEach((el) => dest.append(el));
}

// 6. parsiusti postus

// fetch(url2)
//   .then((resp) => resp.json())
//   .then((data) => {
//     // console.log('data ===', data);
//     // data === {posts: Array(30), total: 150, skip: 0, limit: 30}
//     // posts
//     console.log('data.posts ===', data.posts);
//   })
//   .catch((err) => console.warn('klaida gaunant posts2', err));

//

//8. parasyti funkcija kuria iskvietus su fetch
function getProducts() {
  return fetch('https://dummyjson.com/products')
    .then((resp) => resp.json())
    .then((data) => {
      // console.log('data ===', data);
      return data;
    })
    .catch((err) => console.warn('klaida gaunant getProducts', err));
}

const rez = getProducts(); // gryzta promise
console.log('rez ===', rez); // promise

// pasiimti rezultata is funkcijos kuri grazina Promise
getProducts().then((data) => {
  console.log('data after then ===', data);
});
