const njbtn = document.querySelector('#js-new-quote');
njbtn.addEventListener('click', getQuote;

async function getQuote() {
  console.log("Quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json.quote);
    displayQuote(json.quote);

  }
  catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endpoint = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

//http://quotes.stormconsultancy.co.uk/random.json
