const axois = require('axios');

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function search (term) {
  return new Promise((resolve, reject) => {
    const offset = randomNumber(0, 20);
    console.log({ offset });
    axois.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_TOKEN}&q=${term}&limit=1&offset=${offset}`)
      .then(function (response) {
        resolve(response.data.data[0]);
      })
      .catch(error => {
        console.error(error);
      });
  });
}

module.exports = {
  search
};
