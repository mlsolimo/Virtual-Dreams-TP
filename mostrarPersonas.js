const request = require('request-promise');

request('https://reclutamiento-14cf7.firebaseio.com/personas.json')
    .then((html) => console.log(html))
    .catch((err) => console.error(err));