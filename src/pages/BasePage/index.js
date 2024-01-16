import { Outlet } from 'react-router'
import TasksProvider from '../../context/Tasks'
import {styles} from './BasePage.module.css'
import Navbar from '../../components/Navbar'


function BasePage(){
    return(
        <TasksProvider>
            <Navbar />
            <Outlet />
        </TasksProvider>
    )
}

export default BasePage