import Home from '../src/pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewTask from './pages/NewTask';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path='/newtask' element={<NewTask/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;