'use strict';
console.log('fetch.js');

const usersListEl = document.getElementById('users');

// norim parsisiusti duomenis is interneto ir su jais sugeneruoti postus
// fetch(url)
// .then((response) => response)

// let title = 'NOT SET';

// fetch anatomy
// fetch('https://jsonplaceholder.typicode111.com/posts/2')
//   .then((response) => {
//     console.log('response ===', response);
//     return response.json();
//   })
//   .then((data) => {
//     // mes turm duomenis kuriu prasem is url, po tiek laiko kiiek truko parsisiusti
//     console.log(data);
//     title = data.title;
//     document.title = title;
//   })
//   .catch((err) => console.warn('klaida gaunant posts', err));

// document.title = title; // NOT SET

// parsisiusti 10 useriu is https://jsonplaceholder.typicode.com/users
// iskonsologinti

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then((response) => response.json()) // .json() => JSON.parse()
  .then((dataInJsFormat) => {
    // gavau duomenis
    console.log('dataInJsFormat ===', dataInJsFormat);

    // iskelti saraso generavimo logika i atskira funkcija generateUsersList()
    dataInJsFormat.forEach((uObj) => {
      // uObj === {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
      const oneEl = makeOneLi(uObj.name, uObj.phone);
      usersListEl.append(oneEl);
    });
  })
  .catch((err) => console.warn('klaida gaunant users', err));

// 1. is gautu duomenu atvaizduoti sarasa su vardais ir tel numeriais

function makeOneLi(name, tel) {
  const liEl = document.createElement('li');
  liEl.textContent = `Name: ${name}, tel: ${tel}`;
  return liEl;
}
