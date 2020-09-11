import React, {
  FC,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';

import firebase from '../lib/firebase';

interface IAuthContext {
  logIn?: (email: string, password: string) => Promise<void>;
  signUp?: (email: string, password: string) => Promise<void>;
  signOut?: () => Promise<void>;
  user?: firebase.User | null;
}

const AuthContext = createContext<IAuthContext>({});
AuthContext.displayName = 'AuthContext';

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => firebase.auth().onAuthStateChanged(setUser), []);

  const logIn = async (email: string, password: string) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      alert(error);
    }
  };

  const value = { logIn, signUp, signOut, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
