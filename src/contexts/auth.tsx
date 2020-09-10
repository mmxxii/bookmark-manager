import React, { FC, useState, useCallback, useMemo } from 'react';

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
  const [user, setUser] = useState<IUser | null>(null);

  const login = useCallback(() => setUser({ token: '' }), []);

  const value = useMemo(() => ({ login, user }), [login, user]);

  return <AuthContext.Provider value={value} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
