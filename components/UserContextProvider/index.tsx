import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface CurrentUser {
    id?: string;
    email?: string;
    blogLikes: string[];
    blogViews: string[];
    currentSession: number; // in seconds
}

const UserContext = createContext<CurrentUser | null>(null);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<CurrentUser | null>(null);
    const [sessionStart, setSessionStart] = useState<number | null>(null);

    useEffect(() => {
        // Initialize user object
        const initialUser: CurrentUser = {
            id: 'user123',
            email: 'john.doe@example.com',
            blogLikes: [],
            blogViews: [],
            currentSession: 0,
        };
        setUser(initialUser);

        // Set session start timestamp
        setSessionStart(Date.now());

        // Clean up function to clear session start timestamp
        return () => setSessionStart(null);
    }, []);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (sessionStart !== null) {
            timer = setInterval(() => {
                setUser((prevUser) => {
                    if (prevUser) {
                        return {
                            ...prevUser,
                            currentSession: Math.floor((Date.now() - sessionStart) / 1000),
                        };
                    }
                    return prevUser;
                });
            }, 1000);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [sessionStart]);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
