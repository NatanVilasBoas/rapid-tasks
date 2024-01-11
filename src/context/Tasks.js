import { createContext, useContext, useState } from "react"


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
        let newList = [...tasks];

        newList.push(newTask);
        return setTasks(newList);
    }

    return{
        tasks,
        addTask
    }
}