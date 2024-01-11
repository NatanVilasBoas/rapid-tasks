import Forms from '../../components/Forms';
import Banner from '../../components/Banner';
import styles from './NewTask.module.css';


function NewTask() {
    return(
        <>
            <Banner />
            <section className={styles.container}>
                <h2>Preencha as informações da sua nova tarefa</h2>
                <Forms />
            </section>
        </>
    )
}

export default NewTask;