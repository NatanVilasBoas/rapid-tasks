import styles from './Form.module.css';
import InputField from '../InputField';
import { Link } from 'react-router-dom';

function Form() {
    return(
        <section className={styles.container}>
            <Link to='/'>
            <button className={styles.backButton}>Voltar</button>
            </Link>
            <form>
                <InputField label='Titulo' placeholder='Digite um título...'/>
                <InputField label='Decrição' placeholder='Digite a descrição...'/>
                <button>Salvar Tarefa</button>
            </form>
        </section>
    )
}


export default Form;