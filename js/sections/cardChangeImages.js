var sectionFrontEnd = document.getElementById("s-frontend");
var cards = document.querySelectorAll(".card");


var cardsIds = [];
var cardsImages = [];
var cardsIndexs = [];



// Functions
function runCardChangeImages() {
    function cardsIdsImagesIndexs() {
        for (let i = 0; i < cards.length; i++) {
            elementId = cards[i].id.substring(5);
            // Cards ids
            cardsIds[i] = elementId;
    
            // Cards images
            cardsImages[i] = [
                "../images/s-frontend/" + elementId + "/1.png",
                "../images/s-frontend/" + elementId + "/2.png",
                "../images/s-frontend/" + elementId + "/3.png",
            ];
    
            // Cards indexs
            cardsIndexs[i] = 1;
        }
    }cardsIdsImagesIndexs()

    function cardChangeImagesBegin() {
        cards.forEach(element => {
            for (let i = 0; i < cards.length; i++) {
                if(element.id.substring(5) === cardsIds[i]){
                    element.children[0].style.backgroundImage = `url(${cardsImages[i][0]})`;
                }
            }
        });
    }cardChangeImagesBegin()

    function changeImages() {
        cards.forEach(element => {
            for (let i = 0; i < cards.length; i++) {
                if(element.id.substring(5) === cardsIds[i]){
                    console.log(cardsIndexs[i])
                    if(cardsIndexs[i] === 3){
                        cardsIndexs[i] = 0;
                        cardImage(element.children[0], i)
                    }else{
                        cardImage(element.children[0], i)
                    }
                    console.log(cardsIndexs[i])
                    console.log("========")
                }
            }
        });
    }setInterval(changeImages, 1000);
    
    function cardImage(cardImage, i) {
        cardImage.style.backgroundImage = `url(${cardsImages[i][cardsIndexs[i]]})`
        cardsIndexs[i] += 1;
    }
}