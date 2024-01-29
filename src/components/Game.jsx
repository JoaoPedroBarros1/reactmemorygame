import Nav from "./NavHeader";

import {useEffect, useRef, useState} from "react";
import ReactCardFlip from "react-card-flip";
import {useParams, useNavigate} from "react-router-dom";
import {Col, Row, Image, Container} from "react-bootstrap";


function Game() {
    const params = useParams()
    const navigate = useNavigate()

    const [visualCards, setVisualCards] = useState([])
    const [cards, setCards] = useState([])

    const firstCard = useRef(-1)

    const clickable = useRef(true)

    const cardsSolved = useRef(0)
    const turnos = useRef(0)


    function createCard(index) {
        return (
            <Col className="d-flex justify-content-center" key={cards[index].key} >
                <ReactCardFlip isFlipped={cards[index].flipped}>
                    <Image onClick={() => handleCardClick(cards[index].id, cards[index].key)} src="/img/emptyRune.png" style={{cursor: "pointer"}} />
                    <Image src={"/img/cards/runa"+cards[index].id+".png"} />
                </ReactCardFlip>
            </Col>
        )
    }

    // Função para virar um card, seja para cima ou para baixo
    function turnCard(key, bool) {
        let localCards = []
        cards.forEach((item) => {
            let itemCopy = Object.assign({}, item)
            if (itemCopy.key === key) {
                itemCopy.flipped = bool
            }
            localCards.push(itemCopy)
        })

        return localCards
    }

    // Função que seja executada ao clicar no card
    function handleCardClick(cardId, key) {
        if (clickable.current) {
            let reversedCard = turnCard(key, true)
            setCards(reversedCard)

            if (firstCard.current === -1) {
                firstCard.current = key
                turnos.current += 1

            } else {
                clickable.current = false

                // forEach é utilizado para achar o id do card com essa key
                cards.forEach((item) => {
                    if (item.key === firstCard.current) {
                        // Se o ID do card que já está selecionado for diferente ao ID do card clicado, virar os dois
                        if (!(item.id === cardId)) {
                            setTimeout(() => {
                                let listBothCardsReverted = turnCard(item.key, false)
                                setCards(listBothCardsReverted)
                                clickable.current = true
                            }, 1000)

                        } else {
                            cardsSolved.current += 1

                            if (cardsSolved.current === parseInt(params.nPares)) {
                                winGame()
                            } else {
                                clickable.current = true
                            }
                        }
                    }
                })
                firstCard.current = -1

            }
        }
    }

    // Função para gerar cards aleatóriamente (ela não mostra os cards, apenas coloca um um id pra cada um
    function generateCards() {
        let localCards = []

        for (let i = 0; i < parseInt(params.nPares); i++) {
            let randomIndex1 = Math.round(Math.random() * localCards.length)
            localCards.splice(randomIndex1, 0, {"flipped": false, "id": i, "key": 2 * i})

            let randomIndex2 = Math.round(Math.random() * localCards.length)
            localCards.splice(randomIndex2, 0, {"flipped": false, "id": i, "key": 2 * i + 1})
        }
        setCards(localCards)
    }

    // Função para atualizar as cartas que aparecem para o jogador
    function updateGame() {
        let localVisualCards = []

        for (let i = 0; i < cards.length; i++) {
            localVisualCards.push(createCard(i))
        }
        setVisualCards(localVisualCards)
    }

    // Irá rodar quando o jogador ganhar a partida
    function winGame() {
        setTimeout(() => {
            navigate("/Vitoria/"+turnos.current+"/"+params.nPares)
        }, 1000)
    }

    // Roda apenas uma vez, quando a página carregar
    useEffect(() => {
        generateCards()
    }, []);

    // Roda toda vez que houver alteração nos cards
    useEffect(() => {
        updateGame()
    }, [cards]);

    return (
        <Row sm={parseInt(params.nPares)}>
            {visualCards}
        </Row>
    )
}

export default Game