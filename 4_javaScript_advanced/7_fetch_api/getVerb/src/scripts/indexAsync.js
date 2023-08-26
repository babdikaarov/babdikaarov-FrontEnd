// Information to reach API
const url = "https://api.datamuse.com/words?sl=";
const text = "../assets/texts/text.txt";

// Selects page elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");
// Asynchronous function

const getSuggestions = async () => {
    const wordQuery = inputField.value;
    const endpoint = url + wordQuery;
    try {
        const response = await fetch(endpoint, {
            cache: "no-cache"
        });

        if (response.ok) {
            renderResponse(await response.json());
        }
    } catch (error) {
        console.log(error);
    }
};

// Clears previous results and display results to webpage
const displaySuggestions = event => {
    //prevent default behavior of refreshing the page
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    getSuggestions().catch(networkError => {
        //second promise's native syntax for handling onRejected could be rewritten with chaining .catch()
        console.log(networkError.message);
    });
};

// Trigering event

submit.addEventListener("click", displaySuggestions);
