import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState("");
    const [Likes, setLikes] = useState([]);
    const [Saved, setSaved] = useState([]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, Likes, setLikes, Saved, setSaved }}>
            {children}
        </AuthContext.Provider>
    );
};