import styles from './Form.module.css';
import InputField from '../InputField';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Form() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const onSave = (e) =>{
        e.preventDefault();
        
    }

    return(
        <section className={styles.container}>
            <Link to='/'>
            <button className={styles.backButton}>Voltar</button>
            </Link>
            <form onSubmit={onSave}>
                <InputField 
                value={title}
                label='Titulo' 
                placeholder='Digite um título...' 
                saveInfo={value => setTitle(value)}/>
                <InputField 
                value={desc}
                label='Decrição' 
                placeholder='Digite a descrição...' 
                saveInfo={value => setDesc(value)}/>
                <button>Salvar Tarefa</button>
            </form>
        </section>
    )
}


export default Form;