import { useState } from 'react';
import styles from './Task.module.css';
import penIcon from './ferramenta-lapis.png';
import checkIcon from './marca-de-verificacao.png';

function Task(props) {
    const [conclused, setConclused] = useState(false);

    const handleRemoveTask = (task) => {
        setConclused(true);
        setTimeout(() => {
            props.removedTask(task);
          }, 750);
    }

    return(
        <div className={`${styles.container} ${conclused === true ? styles.conclused : ''}`}>
            <div className={styles.containerText}>
                <h5 className={styles.title}>{props.title}</h5>
                <p className={styles.text}>{props.text}</p>
            </div>
            <div className={styles.containerButton}>
                <img src={penIcon}/>
                <img src={checkIcon} onClick={ (task) => handleRemoveTask(task)}/>
            </div>
        </div>
    )
}

export default Task;