import { auth } from "@/firebaseConfig";
import { createContext, useEffect, useState, useContext } from "react";
import { 
    signOut, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup 
} from "firebase/auth";

interface IUserAuthProviderProps {
    children: React.ReactNode;
}

const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
    return signOut(auth)
}

const googleSignIn = () => {
    // Implement Google Sign-In logic here
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
}

type AuthContextData = {
    user: User | null;
    logIn: typeof logIn;  // typeof is an operator that can be used in type contexts to refer to the type of a variable or property.
    signUp: typeof signUp;
    logOut: typeof logOut;
    googleSignIn: typeof googleSignIn;
}

export const userAuthContext = createContext<AuthContextData>({
    user: null,
    logIn,
    signUp,
    logOut,
    googleSignIn,
})

export const UserAuthProvider: React.FunctionComponent<IUserAuthProviderProps> = ({ children }) => {
    
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                console.log("The logged in user is: ", user);
                setUser(user);
            } else {
                setUser(null);
            }

            return () => {
                unsubscribe();
            }
        })
    }, [])

    const value: AuthContextData = {
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
    }

    return (
        <userAuthContext.Provider value={value}>
            {children}
        </userAuthContext.Provider>
    );
}

export const UseUserAuth = () => {
    return useContext(userAuthContext);
}