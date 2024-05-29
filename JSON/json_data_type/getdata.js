function getJsonTest() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://127.0.0.1:3000/testJSON', true);
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      console.log(xhr.response);
    } else {
      // We reached our target server, but it returned an error
      console.log('error');
    }
  };
}
