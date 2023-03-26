fetch('https://api.weatherapi.com/v1/current.json?key=6ed58b3a105f45a8b2565252232603&q=paris', { mode: 'cors' })
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });
