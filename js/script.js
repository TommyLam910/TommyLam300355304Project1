/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

//Create the object for the quotes
const q1 = {quote : "I do not fear computers. I fear lack of them.", 
            source:  "Isaac Asimov"};

const q2 = {quote :  "A computer once beat me at chess, but it was no match for me at kick boxing.", 
            source:  "Emo Philips"};    
            
const q3 = {quote : "Computer Science is no more about computers than astronomy is about telescopes.", 
            source:  "Edsger W. Dijkstra"};

const q4 = {quote : "Face the sunshine, and your shadow will fall behind you.", 
            source:  "Walt Whitman, ",
            citation: "Daily Intelligencer, ",
            year: 1862};

//Group all the objects in the quote variable
var quote = [q1, q2, q3, q4];

/***
 * `getRandomQuote` function
 * Generate a randomNumber
 * get the object in the index(using randomNumber) of array
***/

function getRandomQuote(){

    var randomNumber = Math.floor(Math.random()*10) % quote.length;

    return quote[randomNumber];
}

/***
 * `printQuote` function
***/
function printQuote(){

    var randomQuote = getRandomQuote();
    let quoteString = "<p class='quote'>" + randomQuote.quote + "</p><p class ='source'>" + randomQuote.source;

    if(randomQuote.hasOwnProperty('citation')) {
        quoteString += "<span>" + randomQuote.citation +"</span>";
    }
    if(randomQuote.hasOwnProperty('year')) {
        quoteString += "<span>" + randomQuote.year +"</span>";
    }
    quoteString += "</p>";

    //This is to change the previous quote
    document.getElementById('quote-box').innerHTML = quoteString;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click",printQuote);