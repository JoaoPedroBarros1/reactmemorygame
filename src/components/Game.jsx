import {useEffect, useState} from "react";
import ReactCardFlip from "react-card-flip";
import {useParams} from "react-router-dom";
import {Col, Container, Row, Image} from "react-bootstrap";


function Game() {
    const params = useParams()
    const [cardsFlipped, setCardsFlipped] = useState([])
    const [cards, setCards] = useState([])

    function handleCardClick(event) {
        console.log("Clicked", event.target.parentNode.parentNode.parentNode.parentNode)
    }

    function generateCards() {
        let localFlippedCards = []
        let localCards = []

        for (let i = 0; i < params.nPares; i++) {
            let randomIndex1 = Math.floor(Math.random() * localCards.length)
            let card1 = createCard(i, 2 * i)
            localFlippedCards.splice(randomIndex1, 0, false)
            localCards.splice(randomIndex1, 0, card1)

            let randomIndex2 = Math.floor(Math.random() * localCards.length)
            let card2 = createCard(i, 2 * i + 1)
            localFlippedCards.splice(randomIndex2, 0, false)
            localCards.splice(randomIndex2, 0, card2)
        }

        setCardsFlipped(localFlippedCards)
        setCards(localCards)

        console.log(localCards, localFlippedCards)
    }

    function createCard(cardId, key) {
        return (
            <Col key={key} data-id={cardId} >
                <ReactCardFlip isFlipped={false}>
                    <Image style={{cursor: "pointer"}} onClick={(event) => handleCardClick(event)} src="/img/emptyRune.png" />
                    <Image src={"/img/cards/runa"+cardId+".png"} />
                </ReactCardFlip>
            </Col>
        )
    }

    useEffect(() => {
        generateCards()
    }, []);

    return (
        <Container>
            <Row >
                {cards}
            </Row>
        </Container>
    )
}

export default Game