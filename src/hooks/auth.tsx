import React, { createContext, useContext, useState } from "react";

type User = {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
}

type AuthContextData = {
    user: User | null;
    isSigningIn: boolean;
    sigIn(): () => Promise<void>;
    sigOut(): () => Promise<void>;

}

type AuthProviderProps = {
    children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    async function signIn() {

    }

    async function signOut() {

    }

    return (
        <AuthContext.Provider value={{
            sigIn,
            sigOut,
            user,
            isSigningIn
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };