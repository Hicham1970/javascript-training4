const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open('GET', 'https://imdb-top-100-movies.p.rapidapi.com/');
xhr.setRequestHeader(
  'X-RapidAPI-Key',
  '11f6e5e7a3msh00349060339ac64p1d9eb1jsn7d47b5c56b8f'
);
xhr.setRequestHeader('X-RapidAPI-Host', 'imdb-top-100-movies.p.rapidapi.com');

xhr.send(data);
