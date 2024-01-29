import {useWindowSize} from "react-use";
import Confetti from 'react-confetti';
import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";

function Vitoria() {
    const params = useParams()
    const {width, height} = useWindowSize()

    return (
        <Container>
            <Confetti width={width} height={height} />
            <h1 className="mt-5">Parabéns! Em {params.turnos} turnos você ganhou um jogo de {params.nPares * 2} cartas</h1>
        </Container>
    )
}

export default Vitoria