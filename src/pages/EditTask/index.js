import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './EditTask.module.css';
import { useTasksContext } from '../../context/Tasks';
import { useEffect, useState } from 'react';



function EditTask() {
    const { id } = useParams();
    const {tasks, editTask} = useTasksContext();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(() => {
        const taskToEdit = tasks.find(task => task.id === id);

        if(taskToEdit){
            setTitle(taskToEdit.title)
            setDesc(taskToEdit.desc)
        }
    }, [tasks, id])


    const onSave = (e) => {
        e.preventDefault();

        const updateTask = {title,desc,id}

        editTask(updateTask);
        navigate('/');
    }


    return(
        <section className={styles.container}>
            <Link to='/'>
            <button className={styles.backButton}>Cancelar</button>
            </Link>
            <form onSubmit={onSave}>
                <input
                label='Titulo' 
                value={title}
                onChange={e => setTitle(e.target.value)}/>
                <input 
                label='Decrição' 
                value={desc} 
                onChange={e => setDesc(e.target.value)}/>
                <button>Editar Tarefa</button>
            </form>
        </section>
    )
}

export default EditTask;