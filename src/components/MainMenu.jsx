import  styles from "./MainMenu.module.css"
function MainMenu() {
    return (
        <div className={styles.divmain}>
            <h1>Seja bem-vindo ao Memory Game!</h1>
            <h3>O Memory Game é um jogo interativo, no qual o usuario deve selecionar os pares correspondentes, até que todos os pares sejam encontrados, assim, vencendo o jogo.</h3>
        </div>
    )
}

export default MainMenu