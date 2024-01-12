import Home from '../src/pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewTask from './pages/NewTask';
import BasePage from './pages/BasePage';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/newtask" element={<NewTask />}></Route>
                </Route>
            </Routes>   
        </BrowserRouter>
    )
}

export default AppRoutes;