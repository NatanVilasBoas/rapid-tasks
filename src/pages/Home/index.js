import styles from './Home.module.css';
import Task from '../../components/Task';
import Banner from '../../components/Banner';


function Home(){    
    return(
        <>
            <Banner />
            <section className={styles.container}>
                <div className={styles.taskList}>
                    <div className={styles.head}>
                        <h2>Lista de tarefas</h2>
                        <button>Nova tarefa</button>
                    </div>
                    <Task title="Teste" text="Testando"/>
                </div>
            </section>
        </>
    )
}

export default Home;