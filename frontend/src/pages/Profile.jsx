import React from 'react';

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return (
            <div className="container mx-auto p-4 text-center">
                <h1 className="text-2xl font-bold mb-4">Please Login</h1>
                <a href="/login" className="text-secondary underline">Go to Login</a>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">My Profile</h1>
            <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-2xl font-bold">
                        {user.name[0]}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <p className="text-gray-400">{user.email}</p>
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-4">My Preferences</h3>
                <p className="text-gray-400">Watch history and liked genres will appear here.</p>
            </div>
        </div>
    );
};

export default Profile;
