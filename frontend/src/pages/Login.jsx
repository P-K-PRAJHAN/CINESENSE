import React from 'react';

const Login = () => {
    const handleLogin = () => {
        // Simulate login
        localStorage.setItem('user', JSON.stringify({ name: 'Demo User', email: 'demo@cinesense.com' }));
        window.location.href = '/';
    };

    return (
        <div className="container mx-auto p-4 flex justify-center items-center h-[80vh]">
            <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <button onClick={handleLogin} className="w-full bg-secondary py-3 rounded font-bold mb-4 hover:bg-red-700 transition">
                    Sign in with Google
                </button>
                <p className="text-center text-gray-400 text-sm">
                    Powered by Firebase Authentication
                </p>
            </div>
        </div>
    );
};

export default Login;
