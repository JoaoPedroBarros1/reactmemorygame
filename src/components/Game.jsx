import {useEffect, useState} from "react";
import ReactCardFlip from "react-card-flip";
import Runa from "./Runa";

function Game(props) {
    const [cards, setCards] = useState([])

    function handleCardClick(e) {
        console.log("Clicked", e)
    }

    function generateCards() {
        let localCards = []

        for (let i = 0; i < props.pares; i++) {
            let randomIndex1 = Math.floor(Math.random() * localCards.length)
            localCards.splice(randomIndex1, 0, createCard(i))

            let randomIndex2 = Math.floor(Math.random() * localCards.length)
            localCards.splice(randomIndex2, 0, createCard(i))
        }

        setCards(localCards)
    }

    function createCard(cardId) {
        return (
            <ReactCardFlip data-id={cardId} onClick={(e) => handleCardClick(e)} isFlipped={this.state.isFlipped}>
                <img src="/img/emptyRune.png" alt="" />

                <img src={"/img/cards/runa"+cardId+".png"} alt="" />
            </ReactCardFlip>
        )
    }

    useEffect(() => {
        generateCards()
    }, []);

    return (
        <div>
            {cards}
        </div>
    )
}

export default Game