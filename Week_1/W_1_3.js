"use strict";
let movieTitle = "Bahubali: The Beginning";
let releaseYear = 2015;
let isBlockbuster = true;
function getMovieStatus(title, year) {
    return `${title} was a massive hit released in ${year}`;
}
let leadActors = ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannah"];
const summary = getMovieStatus(movieTitle, releaseYear);
console.log(summary);
console.log("Starring: " + leadActors.join(", "));
// Fixed line with parentheses:
console.log('Is it a blockbuster? ' + (isBlockbuster ? "Yes, Jai Mahishmati!" : "No"));
