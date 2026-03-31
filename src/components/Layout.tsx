import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="font-sans text-gray-800 min-h-screen">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;