import styles from './Task.module.css';

function Task(props) {
    return(
        <div className={styles.container}>
            <h5 className={styles.title}>{props.title}</h5>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}

export default Task;