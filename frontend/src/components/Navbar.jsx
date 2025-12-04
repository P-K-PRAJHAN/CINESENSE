import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    return (
        <nav className="bg-black p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-secondary">CineSense</Link>
                <div className="flex gap-4 items-center">
                    <Link to="/" className="hover:text-secondary">Home</Link>
                    <Link to="/search" className="hover:text-secondary">Search</Link>

                    {user ? (
                        <>
                            <Link to="/profile" className="hover:text-secondary">Profile</Link>
                            <button onClick={handleLogout} className="bg-red-600 px-4 py-1 rounded text-white hover:bg-red-700">
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="bg-secondary px-4 py-1 rounded text-white hover:bg-red-700">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
