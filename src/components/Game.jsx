import {useEffect, useState} from "react";

function Game() {
    const [cards, setCards] = useState()

    function createCards() {

    }

    useEffect(() => {
        createCards()
    }, []);

    return (
        <div>

        </div>
    )
}

export default Game