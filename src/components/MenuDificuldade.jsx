import styles from "./MenuDificuldade.module.css"

function MenuDificuldade(){
    return (
        <div className={styles.divdificuldade}>
            <div className={styles.divcomtext}>
               <h2>Aqui voce pode escolher em qual dificuldade seja jogar</h2>
                <h3>Escolha a seguir em qual modo jogar:</h3>
            </div>
            <div className={styles.divcombuttons}>
                <button>Fácil</button>
                <button>Médio</button>
                <button>Dificil</button>
            </div>
        </div>
    )
}
export default MenuDificuldade