import {Routes, Route} from 'react-router-dom';
import { NavBar } from "../components/ui/NavBar";
import { HomeScreen } from "../components/home/HomeScreen";

export const DashboardRoutes = () => {
    return (
        <>
        <NavBar/>
        <div className='container'>
            <Routes>
                <Route path="home" element={<HomeScreen />} />
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </div>
        </>
    )
}