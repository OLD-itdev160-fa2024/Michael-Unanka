const quotes = [
    "Life is what happens when you're busy making other plans.",
    "The way to get started is to quit talking and begin doing.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "Life itself is the most wonderful fairy tale."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById('random-quote').textContent = randomQuote;

document.getElementById('quote-button').addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('random-quote').textContent = randomQuote;
});