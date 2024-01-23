import  styles from "./MainMenu.module.css"
function MainMenu() {
    return (
        <div className={styles.divmain}>
            <h1>Seja bem-vindo ao Memory Game!</h1>
            <h3>O Memory Game é um jogo interativo, no qual o usuario deve selecionar os pares correspondentes, até que todos os pares sejam encontrados, assim, vencendo o jogo. O Memory Game utiliza como tema para os cards, runas nórdicas como o exemplo a seguir, combine e encontre as runas correspondente!</h3>
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
                <button className={styles.btncontinue}>Continuar</button>
            </div>
        </div>
    )
}

export default MainMenu