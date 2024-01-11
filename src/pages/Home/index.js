import styles from './Home.module.css';
import Task from '../../components/Task';
import Banner from '../../components/Banner';


function Home(){    
    return(
        <>
            <Banner />
            <section className={styles.container}>
                <div className={styles.taskList}>
                    <h2>Lista de tarefas</h2>
                    <Task title="Teste" text="Testando"/>
                </div>
            </section>
        </>
    )
}

export default Home;