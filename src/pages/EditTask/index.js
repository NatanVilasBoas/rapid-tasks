import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './EditTask.module.css';
import { useTasksContext } from '../../context/Tasks';
import { useEffect, useState } from 'react';
import InputField from '../../components/InputField';



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
            <div className={styles.content}>
                <div className={styles.head}>
                    <h2>Editando a tarefa '{title}'</h2>
                    <Link to='/'>
                    <button className={styles.backButton}>Cancelar</button>
                    </Link>
                </div>
                <form onSubmit={onSave}>
                    <InputField label="Título" 
                        value={title} 
                        saveInfo={(value) => {setTitle(value)}}/>
                    <InputField label="Descrição" 
                        value={desc} 
                        saveInfo={(value) => {setDesc(value)}}/>
                    <button>Editar Tarefa</button>
                </form>
            </div>
        </section>
    )
}

export default EditTask;