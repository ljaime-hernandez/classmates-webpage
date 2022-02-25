import {Routes, Route} from 'react-router-dom';
import { NavBar } from "../components/ui/NavBar";
import { HomeScreen } from "../components/home/HomeScreen";
import { AboutScreen } from '../components/home/AboutScreen';
import { Footer } from '../components/ui/Footer';
import { TeachersScreen } from '../components/home/TeachersScreen';
import { ContactScreen } from '../components/home/ContactScreen';
import { RateScreen } from '../components/home/RateScreen';

export const DashboardRoutes = () => {
    return (
        <>
        <NavBar/>
            <Routes>
                <Route path="home" element={<HomeScreen />} />
                <Route path="about" element={<AboutScreen />} />
                <Route path="teachers" element={<TeachersScreen />} />
                <Route path="contact" element={<ContactScreen />} />
                <Route path="rates" element={<RateScreen />} />
                <Route path="/" element={<HomeScreen />} />
            </Routes>

        <Footer/>
        </>
    )
}