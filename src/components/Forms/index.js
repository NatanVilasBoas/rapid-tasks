import styles from './Form.module.css';
import InputField from '../InputField';

function Form() {
    return(
        <section className={styles.container}>
            <form>
                <InputField label='Titulo' placeholder='Digite um título...'/>
                <InputField label='Decrição' placeholder='Digite a descrição...'/>
                <button>Salvar</button>
            </form>
        </section>
    )
}


export default Form;