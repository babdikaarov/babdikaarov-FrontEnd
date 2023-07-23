// Information to reach API
const apiKey = '84cd1e1a1e2c42378d4423b7f9843e42';
const url = 'https://api.rebrandly.com/v1/links';
// console.log(apiKeytest)
// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'apikey': apiKey
    },
    body: data
  })
  .then(response => {
    if(response.ok){
      return response.json();
    }
    throw new Error ('Request failed!')
  }, networkError => {
    console.log(networkError.message)
  })
  .then(jsonResponse => {
    renderResponse(jsonResponse);
  })
}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
      responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
}


shortenButton.addEventListener('click', displayShortUrl);