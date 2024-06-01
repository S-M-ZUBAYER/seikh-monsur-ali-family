import TopNavbar from '../TopNavbar/TopNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <TopNavbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;