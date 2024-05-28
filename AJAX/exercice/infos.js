let xhr = new XMLHttpRequest();
xhr.onload = () => {
  //   console.log(xhr.responseText);
  let countries = JSON.parse(xhr.responseText);
  console.log(countries);
  let countriesTableBody = document.getElementById('countries-table-body');
  countries.forEach(country => {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${country.name}</td>
        <td><img src="${country.flag}"</td>
        <td>${(country.population / 1000000).toFixed(2)}</td>
        <td>${country.area}</td>
        <td>${+country.callingCodes}</td>
        <td>${country.capital}</td>
        <td>${country.languages[0].name}</td>
        <td>${country.latlng}</td>
        <td>${country.timezones[0]}</td>
        
      `;
    countriesTableBody.appendChild(row);
  });
};

xhr.open('GET', 'https://restcountries.com/v2/all');
xhr.responseType = 'text';
xhr.send();
