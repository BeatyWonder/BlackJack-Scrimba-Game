
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let cards = []
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")
let drawCard = document.getElementById("newCard")
drawCard.addEventListener("click", newCard)


function getRandomCard()
{
    let randomNumber = Math.floor(Math.random()* 13) + 1
    if(randomNumber > 10)
    {
        return 11
    }
    else if(randomNumber === 1)
    {
        return 1
    }
    else 
    {
        return randomNumber
    }
   
   
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =[firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    for(let i=0; i<cards.length; i++)
    {
    cardsEl. textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard()
{
    if(isAlive === true && hasBlackJack === false){
    let card = 8
    sum += card 
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}