let quoteContainer = document.querySelector("#quote-container");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let twitterBtn = document.querySelector("#twitter");
let newQuoteBtn = document.querySelector("#new-quote");
let loader = document.querySelector("#loader");

// Show Loading

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

let quotesArray = []; // Store quotes locally

// Get a random quote from stored array
function getRandomQuote() {
  loading();
  if (quotesArray.length === 0) {
    console.log("Quotes not loaded yet!");
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotesArray.length); // Pick random index
  const randomQuote = quotesArray[randomIndex];

  // If author is unknown, display as "Unknown"

  if (!randomQuote.author) {
    author.innerText = " - Unknown";
  } else {
    author.innerText = `- ${randomQuote.author}`;
  }

  // Dynamically change font size for long quotes
  if (randomQuote.quote.length > 50) {
    quote.classList.add("long-quote");
  } else {
    quote.classList.remove("long-quote");
  }

  // Set quote, Hide loader
  quote.innerText = `${randomQuote.quote}`;

  complete(); // Hide loader
}

// Tweet quote

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} ${author.innerText}`;
  window.open(twitterUrl, "_blank");
}

// Fetch quotes only once and store in the array

async function fetchQuotes() {
  loading();
  try {
    const response = await fetch("https://dummyjson.com/quotes?limit=1454"); // Get all quotes
    const data = await response.json();
    quotesArray = data.quotes; // Store all quotes in array
    getRandomQuote(); // Show first random quote after fetching
  } catch (error) {
    console.log("Error fetching quotes:", error);
  }
}

// Fetch quotes when page loads
fetchQuotes();
