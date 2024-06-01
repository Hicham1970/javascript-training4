const api_key = '5c0ad18372ae890bb87095428fb228f99b1c3615';

const url = 'https://marinetraffic1.p.rapidapi.com/';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd215c33b0dmsh3e6ade8af360a16p108d38jsn58b5dadce9b0',
    'X-RapidAPI-Host': 'marinetraffic1.p.rapidapi.com',
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
