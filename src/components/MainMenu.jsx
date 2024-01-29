import  styles from "./MainMenu.module.css"
import {Link} from "react-router-dom";


function MainMenu() {
    return (
        <div className={styles.divmain}>
            <h1>Seja bem-vindo ao Memory Game!</h1>
            <h3>O Memory Game é um jogo interativo, no qual o usuario deve selecionar os pares correspondentes, até que
                todos os pares sejam encontrados, assim, vencendo o jogo. O Memory Game utiliza como tema para os cards,
                runas nórdicas como o exemplo a seguir, combine e encontre as runas correspondente!</h3>
            <h4>Exemplos:</h4>
            <div className={styles.divexemplo}>
                <div>
                    <img src="/img/cards/runa1.png"/>
                    <img src="/img/cards/runa1.png"/>
                </div>
                <div>
                    <img src="/img/cards/runa9.png"/>
                    <img src="/img/cards/runa9.png"/>
                </div>
                <div>
                    <img src="/img/cards/runa11.png"/>
                    <img src="/img/cards/runa11.png"/>
                </div>
            </div>
            <div className={styles.divcontinue}>
                <Link to="/Game/6" className={styles.btncontinue}>Continuar</Link>
            </div>


            <div className={styles.divdificuldade}>
                <div className={styles.divcomtext}>
                    <h2>Aqui voce pode escolher em qual dificuldade seja jogar</h2>
                    <h3>Escolha a seguir em qual modo jogar:</h3>
                </div>
                <div className={styles.divcombuttons}>
                    <Link to="/Game/4" className={styles.btn1}>Fácil</Link>
                    <Link to="/Game/8" className={styles.btn1}>Médio</Link>
                    <Link to="/Game/12" className={styles.btn1}>Dificil</Link>
                </div>
            </div>
        </div>
    )
}

export default MainMenu