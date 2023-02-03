// Query Selectors
const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".name"),
quoteBtn = document.querySelector("Button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
facebookBtn = document.querySelector(".facebook");

//API URL
API_URL = "https://api.quotable.io/random"

//random Quote function
async function randomQuote() {
    quoteBtn.classList.add("loading") //Add loading class to button
    quoteBtn.innerText = "Loading Quote..."; //
    const res = await fetch(API_URL); //Fetch API URL
    const { content, author } = await res.json() //Destructure content and author from response
    quoteText.innerText = content; //Set quote text to content
    authorName.innerText = author; //Set author name to author
    quoteBtn.innerText = "New Quote"; //Set button text to New Quote
    quoteBtn.classList.remove("loading") //Remove loading class from button
  }
  
  randomQuote() //Run randomQuote function on page load

//Event Listeners | Button Clicks
  // New Quote
  quoteBtn.addEventListener("click", randomQuote)

// Read Quote Function
soundBtn.addEventListener("click", () => {
  let message = quoteText.innerText;
  let speech = new SpeechSynthesisUtterance(message);
  speech.rate = 0.7;
  speech.pitch = 1;
  speech.volume = 1;
  speech.voice = speechSynthesis.getVoices().find(voice => voice.name === "Joanna");
  window.speechSynthesis.speak(speech);
});

// Copy Quote Function
copyBtn.addEventListener("click", () => {
  let message = quoteText.innerText;
  navigator.clipboard.writeText(message);
  alert("Quote Copied to Clipboard");
});

// Tweet Quote Function
twitterBtn.addEventListener("click", () => {
    let message = quoteText.innerText;
    let author = authorName.innerText;
    let tweet = `https://twitter.com/intent/tweet?text=${message}  ~  ${author}`;
    window.open(tweet, "_blank");
})


// Tippy.js | Tooltip
tippy(".sound", {
    content: "Read Quote",
    arrow: true,
})

tippy(".copy", {
    content: "Copy Quote",
    arrow: true,
})

tippy(".twitter", {
    content: "Tweet Quote",
    arrow: true,
})

tippy(".new-quote", {
    content: "Get New Quote",
    arrow: true,

})


