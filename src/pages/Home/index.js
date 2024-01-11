import styles from './Home.module.css';
import Task from '../../components/Task';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';


function Home(){    
    return(
        <>
            <Banner />
            <section className={styles.container}>
                <div className={styles.taskList}>
                    <div className={styles.head}>
                        <h2>Lista de tarefas</h2>
                        <Link to='/newtask'>
                            <button>Nova tarefa</button>
                        </Link>
                    </div>
                    <Task title="Teste" text="Testando"/>
                </div>
            </section>
        </>
    )
}

export default Home;