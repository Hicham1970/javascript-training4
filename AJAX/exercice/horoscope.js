function getAriesDailyHoroscope() {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
      console.log(this.response);
    }
    document.getElementById('Aries').innerHTML = this.responseText;
  });

  xhr.open(
    'GET',
    'https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=aries&timePeriod=weekly'
  );
  xhr.setRequestHeader(
    'X-RapidAPI-Key',
    '11f6e5e7a3msh00349060339ac64p1d9eb1jsn7d47b5c56b8f'
  );
  xhr.setRequestHeader('X-RapidAPI-Host', 'daily-horoscope-api.p.rapidapi.com');

  xhr.send(data);
}
