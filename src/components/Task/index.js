import { useTasksContext } from '../../context/Tasks';
import styles from './Task.module.css';
import penIcon from './ferramenta-lapis.png';
import checkIcon from './marca-de-verificacao.png';

function Task(props) {
    const { tasks, setTasks} = useTasksContext();

    const concluseTask = (task) =>{
        const taskSelected = tasks.find(tasks.title === task.title)
        
    }   

    return(
        <div className={styles.container}>
            <div className={styles.containerText}>
                <h5 className={styles.title}>{props.title}</h5>
                <p className={styles.text}>{props.text}</p>
            </div>
            <div className={styles.containerButton}>
                <img src={penIcon}/>
                <img src={checkIcon} onClick={concluseTask}/>
            </div>
        </div>
    )
}

export default Task;