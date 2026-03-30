import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="font-sans text-gray-800">
            <Navbar />

            <div className="h-[calc(100vh-64px)] w-full flex flex-col justify-center items-center text-center bg-cover bg-center relative">
                <div className="absolute inset-0 bg-[#1A1A2F] bg-opacity-50"></div>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;