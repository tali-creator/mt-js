const displayCards = document.getElementById("displayCards");
const imgs = document.querySelectorAll(".imgs");
const masterCard = document.getElementById("masterCard");
const restartBtn = document.querySelector("#restart");
const cardBackUrl = "https://deckofcardsapi.com/static/img/back.png"
const message = document.getElementById("message");
let frontview = [];

// fetch data from api
const fetchCard = async() => {
    try{
        const res = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=4")
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }
        const data = await res.json()


//capture frontview in an array

         frontview = [...data.cards.map(card => card.image)]

        imgs.forEach((img) => {
            img.src = cardBackUrl;
        })


// loggin a random card from front view array

        const num = getRandomNumber(0, 3);
        masterCard.src = frontview[num];
    }
    catch(error){
        console.log(error)
    }
}


//display cards frontview after click

displayCards.addEventListener("click", function(e){

    if(e.target.tagName === "IMG"){
        imgs.forEach(function(img ,i){
            img.src = frontview[i]
        })


//display message according to ypu guess using a setTimeout
        setTimeout(() => {
            message.style.display = "flex";
            if(e.target.src === masterCard.src){
                setMessage("YOU WON", "green", "🎉🎉🎉");
            }else{
                setMessage("YOU LOSE", "red", "😔😔😔");
            }
        }, 500);
        
      
    }

})


// button to restart the fetch api function

restartBtn.addEventListener("click", function(){
    fetchCard()
});


// message top display according to your outcome
function setMessage(status, color, emoji){
    message.innerHTML =  `
    <div id="message" class="w-full h-1/3 bg-stone-100 flex-col justify-between flex">
        <div class="flex flex-col items-center pt-10">
            <span class="text-4xl font-black font-serif text-${color}-500">${status}</span>
            <span class="text-3xl">${emoji}</span>
        </div>
        <div class="flex justify-center py-2">
            <button id="closeBtn" class="text-2xl font-black text-white hover:text-blue-700 hover:bg-white hover:border-2 hover:border-blue-700 bg-blue-700 px-4 rounded-md">
                Close
            </button>
        </div>
    </div>`;


// button to close te message box

    const closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click", function(){
        message.style.display = "none";
    });
}


// function to get a random number between 1 and 3

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
