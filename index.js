const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// Function to fetch and display a random quote
async function getQuote() {
    try {
        const response = await fetch(api_url);
        const data = await response.json();

        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    } catch (error) {
        quote.innerHTML = "Failed to fetch quote.";
        author.innerHTML = "";
    }
}


// Fetch a quote when the page loads
getQuote();