import styles from './Home.module.css';
import Task from '../../components/Task';
import { Link } from 'react-router-dom';
import { useTasksContext } from '../../context/Tasks';


function Home(){    
    const {tasks, removeTask} = useTasksContext();

    const tasksNotConclused = tasks.filter((task) => !task.conclused);

    const handleRemoveTask = (taskId) => {
        removeTask(taskId);
    };

    return(
        <>
            <section className={styles.container}>
                <div className={styles.taskList}>
                    <div className={styles.head}>
                        <h2>Lista de tarefas</h2>
                        <Link to='/newtask'>
                            <button>Nova tarefa</button>
                        </Link>
                    </div>
                    {
                    tasksNotConclused.map(task => <Task key={task.id} title={task.title} text={task.desc} removedTask={() => handleRemoveTask(task.id)}/>)}
                </div>
            </section>
        </>
    )
}

export default Home;