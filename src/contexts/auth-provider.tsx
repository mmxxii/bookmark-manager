import React, { FC, useState, useCallback, useMemo, useContext } from 'react';

interface IUser {
  token: string;
}

interface IAuthContext {
  login?: () => void;
  logout?: () => void;
  register?: () => void;
  user?: IUser | null;
}

const AuthContext = React.createContext<IAuthContext>({});
AuthContext.displayName = 'AuthContext';

const AuthProvider: FC = (props) => {
  // const [user, setUser] = useState<IUser | null>({ token: '' });
  const [user, setUser] = useState<IUser | null>(null);

  const login = useCallback(() => setUser({ token: '' }), []);

  const value = useMemo(() => ({ login, user }), [login, user]);

  return <AuthContext.Provider value={value} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
