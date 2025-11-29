// Prompt with a message
let userName = prompt("Please enter your name:"); 

// Prompt with a message and a default value
let favoriteColor = prompt("What is your favorite color?", "Blue"); 

if (userName !== null) {
  console.log("Hello, " + userName + "!");
}

if (favoriteColor !== null) {
  console.log("Your favorite color is: " + favoriteColor);
}