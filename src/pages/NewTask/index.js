import Forms from '../../components/Forms';
import styles from './NewTask.module.css';


function NewTask() {
    return(
        <>
            <section className={styles.container}>
                <h2>Preencha as informações da sua nova tarefa</h2>
                <Forms />
            </section>
        </>
    )
}

export default NewTask;