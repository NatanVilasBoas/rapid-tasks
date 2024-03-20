import styles from './Form.module.css';
import InputField from '../InputField';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTasksContext } from '../../context/Tasks';

function Form() {
    const { addTask } = useTasksContext();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const conclused = false;
    const navigate = useNavigate();

    const onSave = (e) => {
        e.preventDefault();
        addTask({ title, desc, conclused })
        navigate('/');
    }

    return (
        <section className={styles.container}>
            <Link to='/'>
                <button className={styles.backButton}>Voltar</button>
            </Link>
            <form onSubmit={onSave}>
                <InputField
                    label='Titulo'
                    placeholder='Digite um título...'
                    saveInfo={value => setTitle(value)} />
                <InputField
                    label='Decrição'
                    placeholder='Digite a descrição...'
                    saveInfo={value => setDesc(value)} />
                <button>Salvar Tarefa</button>
            </form>
        </section>
    )
}


export default Form;