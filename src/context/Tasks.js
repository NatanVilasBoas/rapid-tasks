import { createContext, useContext, useState } from "react"
import {v4 as uuidv4 } from 'uuid'


export const TasksContext = createContext();
TasksContext.displayName = "Tasks";

export default function TasksProvider({children}){
    const [tasks, setTasks] = useState([]);

    return(
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    )
}

export function useTasksContext(){
    const {tasks, setTasks} = useContext(TasksContext);

    function addTask(newTask){
        const taskWithId = { ...newTask, id: uuidv4() };
    
        let newList = [...tasks, taskWithId];
        setTasks(newList);
        console.log(taskWithId);
    }

    function removeTask(taskId) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      }

      function editTask(taskToEdit) {
        let newList = tasks.map((task) => (task.id === taskToEdit.id ? { ...taskToEdit } : task));
        const taskToChange = newList.find((task) => task.id === taskToEdit.id);
        taskToChange.title = taskToEdit.title
        taskToChange.text = taskToEdit.text
        
        setTasks(newList);
      }

    return{
        tasks,
        addTask,
        removeTask
    }
}