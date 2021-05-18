/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", source: "Nelson Mandela", year: 2010},
  { quote: "The way to get started is to quit talking and begin doing.", source: "Walt Disney"},
  { quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", source: "Steve Jobs", citation: "Apple", year: 2008},
  { quote: "If life were predictable it would cease to be life, and be without flavor.", source: "Eleanor Roosevelt", year: 2011},
  { quote: "Life is what happens when you're busy making other plans.", source: "John Lennon"}
];

var prevIndex;

/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => {
  
  var index;

  // To check if the method does not return the index of current quote
  do{
    index = parseInt(Math.random() * quotes.length)
  } while(prevIndex == index);
  
  // Initialise prevIndex with current index for next time to check it
  prevIndex = index;

  return quotes[index];
}


/***
 * `printQuote` function
***/
const printQuote = () => {
  // 1. Function to get random quote
  let RandomQuote = getRandomQuote();

  // Testing using log 
  console.log(RandomQuote.quote);
  console.log(RandomQuote.source);

  // 2. String with p elements
  let quoteHTML = `<p class="quote">${RandomQuote.quote}</p>`
  let sourceHTML = `<p class="source">${RandomQuote.source}`

  // 3. if statement for citation
  if(RandomQuote.hasOwnProperty('citation')){
    sourceHTML += `<span class="citation">${RandomQuote.citation}</span>`;
  }
  
  // 4. if statement for year
  if(RandomQuote.hasOwnProperty('year')){
    sourceHTML += `<span class="year">${RandomQuote.year}</span>`;
  }

  // 5. Concatenation of closing </p>
  sourceHTML += '</p>';

  // 6. Setting inner 
  document.getElementById("quote-box").innerHTML = quoteHTML + sourceHTML;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);