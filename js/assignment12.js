const nqbtn = document.querySelector('#js-new-quote');
nqbtn.addEventListener('click', getQuote);

async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json.activity);
    displayQuote(json.activity);

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

const endpoint = "https://www.boredapi.com/api/activity"

//http://quotes.stormconsultancy.co.uk/random.json
