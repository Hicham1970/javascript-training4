function getCountriesInfos() {
  axios
    .get('https://restcountries.com/v2/all')
    .then(response => {
      if (response.status == 200) {
        const countries = JSON.stringify(response.data);
        console.log(countries);
        let countriesTableBody = document.getElementById(
          'countries-table-body'
        );
        countries.forEach(country => {
          let row = document.createElement('tr');
          row.innerHTML = `
        <td>${country.name}</td>
        <td><img src="${country.flags.png}"></td>
        <td>${(country.population / 1000000).toFixed(2)}</td>
        <td>${country.area}</td>
        <td>${country.callingCodes}</td>
        <td>${country.capital}</td>
        <td>${country.languages[0].name}</td>
        <td>${country.latlng}</td>
        <td>${country.timezones[0]}</td>
        
      `;
          countriesTableBody.appendChild(row);
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
}

getCountriesInfos();
