const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this);
    // console.log(this.responseText);
    let utilisateurs = JSON.parse(this.response);
    console.log(utilisateurs.utilisateurs);
  } else if (this.readyState === 4 && this.status === 404) {
    console.log(' Sorry File Not Found');
  }
});

xhr.open('GET', '../data.json');

xhr.responseType = 'text';
xhr.send(data);
