let firstCard = 10 // replace with randomCard
let secondCard = 4 // replace with randomcard
let cards = [firstCard, secondCard] // arrays ordered list
let sum = firstCard + secondCard
// we need to cash out when we have blackjack so we gonna use a boolean 
//set to false by default
let hasBlackJack = false
// set a variable isAlive set to true by default
let isAlive = true
let message = ""
// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// alternativly we can use queryselector and we can acces an id , class or any other
// let messageEl = document.querySelector("#message-el")
// Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")


// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {  //declaration function, goes available for any line in the code above or below
    return 5
}



// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame()
}

function renderGame() { // we are replacing startGame with renderGame
    if (sum < 21) {
    //(sum <= 20)
    // console.log("Do you want to draw a new card?")
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    // here in the blackjack statement we gonna set it to true
    hasBlackJack = true
    // console.log("Wohoo! You've got Blackjack!")
    message = "Wohoo! You've got Blackjack!"
} else {
    // console.log("You're out of the game")
    // and assigned to false on the apropriate block of code
    isAlive = false
    message = "You're out of the game"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
}
//CASH OUT!
// console.log(hasBlackJack)
// console.log(isAlive)
//display the message in messageEl using messageEl.textContent
sumEl.textContent = "Sum: " + sum
// Render the cards on the page using this format ->" Cards: 10 4"
//render out firstCard and secondCard
cardsEl.textContent = "Cards: " + firstCard + " " +  secondCard
//render out all cards we have ( we will use arays)
cardsEl.textContent = "Cards: " + cards[0] + " " +  cards[1]


messageEl.textContent = message
}

//Create a function that logs te messsage ""
function newCard() {
    console.log(" Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 6 // replace with randomCard
    // 2. Add the new card to the sum variable
    sum += card
    // 3. Call startGame()
    renderGame()
}

//==

let sentence = ["Hello","my","name","is","Per"] 
let greetingEl = document.getElementById("greeting-el")

// How do you keep the spaces between the words if I remove them from the array?

for (let i = 0; i < sentence.length; i++) { //i++ same thing as i+=1
    greetingEl.textContent += sentence[i]
}

//====

let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalTime = getTotalRaceTime()

console.log(totalTime)

//========================================

let randomNumber = Math.random() // *6 

console.log(randomNumber)


/* 

What does Math.random() do?

Your answer: it generates a random number between 0 and 1 (not inclusive of 1)
Your answer: it generates a random number between 1 and 6 (not inclusive of 6)

*/

//==============================================

let randomNumber = Math.floor( Math.random() * 6 ) // Math.floor removes decimals

console.log(randomNumber)

/* 

Write down all the possible values randomNumber can hold now!

 0,1,2,3,4,5


*/

//==============================================

// Try to modify the expression so that we get a range from 1 to 6
let randomNumber = Math.floor( Math.random() * 6 ) + 1

console.log(randomNumber)


//==============================================
let randomNumber = Math.floor( Math.random() * 6 ) + 1


//Create a function that, rollDice(), that returns a random number between 1 and 6
function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

console.log( rollDice() )
//=============

// Make this function return a random number between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    return randomNumber
}

console.log( getRandomCard() )

// =================================================

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

//=====================================

function startGame() {
    isAlive = true
    // Generate two random numbes
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // Re-assign the cards and sum variables so that the game can start
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}

//================
//LOGICAL OPERATORS
//================
// AND


let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if ( hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}


//==================
//OR

// Create two boolean variables, likesDocumentaries and likesStartups
let likesDocumentaries = true
let likesStartups = false
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}


//===================================
//OBJECTS!!!
//====================================

let playerName = "Daniel"
let playerChips = 160

let playerEl = document.getElementById("player-el")
playerEl.textContent = playerName + ": $ " + playerChips
// now to write this as an object:
let player = {
    name: "Daniel",
    chips: 160
} 

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $ " + player.chips

console.log(player.name) // show an item of the object
console.log(player["name"]) // alternate way to show an item of the object

//========================================

let trip = {
    castleName: "Castle Cantacuzino",
    price: 150,
    points: ["mountain", 1000, "climbing", "hights"],
    visitedBefore: false
}


console.log(trip.castleName)
console.log(trip.points[2])
console.log(trip.points[3])
console.log(trip.visitedBefore)

//====================================

// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Per",
    chips: 200
}
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")
// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips

//=========================
//METHOD = a function inside an object !!!!!!!!!!!!!!
let player = {
    name: "Per",
    chips: 200,
    sayHello: function() {
        console.log("Howdy")
    }
}

player.sayHello()