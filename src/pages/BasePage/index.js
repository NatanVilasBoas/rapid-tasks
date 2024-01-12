import { Outlet } from 'react-router'
import TasksProvider from '../../context/Tasks'
import {styles} from './BasePage.module.css'


function BasePage(){
    return(
        <TasksProvider>
            <Outlet />
        </TasksProvider>
    )
}

export default BasePage