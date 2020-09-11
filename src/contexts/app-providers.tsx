import React from 'react';
import { AuthProvider } from './';

const AppProviders: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProviders;
