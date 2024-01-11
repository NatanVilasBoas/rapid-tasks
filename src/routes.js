import Home from '../src/pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewTask from './pages/NewTask';
import TasksProvider from './context/Tasks';

function AppRoutes(){
    return(
        <TasksProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path='/newtask' element={<NewTask/>}></Route>
                </Routes>
            </BrowserRouter>
        </TasksProvider>
    )
}

export default AppRoutes;