import styles from './Home.module.css';
import Task from '../../components/Task';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';
import { useTasksContext } from '../../context/Tasks';


function Home(){    
    const {tasks, addTasks} = useTasksContext();

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
                    {tasks.map(task => <Task title={task.title} text={task.desc}/>)}
                </div>
            </section>
        </>
    )
}

export default Home;