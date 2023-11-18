const emojiDetails = [
    { description: "Smiling face with sunglasses", emoji: "😎" },
    { description: "Thumbs up", emoji: "👍" },
    { description: "Heart eyes", emoji: "😍" },
    { description: "Crying face", emoji: "😢" },
    { description: "Party popper", emoji: "🎉" },
    // Add more emoji descriptions here
  ];

  let currentEmojiIndex = 0;
  let score = 0;



const emojiElem = document.getElementById("display-emojii");
const inputElem = document.getElementById("text-input");
const scoreElem = document.getElementById("score");


//adding event listener to the inputElem for seeing the action
document
.getElementById("text-input")
.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});

//calling display emojii functionality
displayEmojii();


//display emojii functionality
function displayEmojii(){
    emojiElem.textContent = emojiDetails[currentEmojiIndex].emoji;
}
//writing checkguess function
function checkGuess(){
    const userInput = inputElem.value.trim().toLocaleLowerCase();
    const result = emojiDetails[currentEmojiIndex].description.trim().toLocaleLowerCase();
    
    if(userInput==result){
        score++;
    }
    else{
        score = score - 0.25;
    }
    scoreElem.textContent = `Score: ${score}`;
    inputElem.value = "";
    inputElem.focus();
    nextEmoji();
}

//nextEmojii function
function nextEmoji(){
    currentEmojiIndex++;
    if(currentEmojiIndex>=emojiDetails.length){
        emojiElem.textContent = '';
        inputElem.remove();
    }
    displayEmojii();
}
document.addEventListener('DOMContentLoaded',()=>{
    displayEmojii();
})

