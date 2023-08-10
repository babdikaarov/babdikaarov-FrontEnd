// Information to reach API
const url = 'https://api.datamuse.com/words?sl=';
const text = '../assets/texts/text.txt';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');
// Asynchronous function

const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url + wordQuery;
  fetch(endpoint, {cache: 'no-cache'})
  // parsing json data if response.ok
  .then( response => {
    if(response.ok){
      return response.json();
    }
    throw new Error('Request failed!')
  }, networkError => { //second argument native syntax for handling onRejected could be rewritten with chaining .catch()
    console.log(networkError.message)
  })
  .then( jsonResponse =>{
    // renderRawResponse(jsonResponse)
    renderResponse(jsonResponse);
  })
  
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  //prevent default behavior of refreshing the page
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

// Trigering event

submit.addEventListener('click', displaySuggestions);
