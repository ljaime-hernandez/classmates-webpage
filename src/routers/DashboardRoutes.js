import {Routes, Route} from 'react-router-dom';
import { NavBar } from "../components/ui/NavBar";
import { HomeScreen } from "../components/home/HomeScreen";
import { AboutScreen } from '../components/home/AboutScreen';
import { Footer } from '../components/ui/Footer';
import { ContactScreen } from '../components/home/ContactScreen';

export const DashboardRoutes = () => {
    return (
        <>
        <NavBar/>
            <Routes>
                <Route path="home" element={<HomeScreen />} />
                <Route path="about" element={<AboutScreen />} />
                <Route path="contact" element={<ContactScreen />} />
                <Route path="/" element={<HomeScreen />} />
            </Routes>

        <Footer/>
        </>
    )
}