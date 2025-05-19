// import { createContext, useState } from "react";
import { useAuth } from '../hooks/useAuth';
import { AuthContext } from './Auth.context';

const AuthProvider = ({ children }: any) => {
  const {
    loading,
    user,
    isAuthenticated,
    getAccessToken,
    login,
    logout,
    autoLogin,
    autoCreate,
    roleType
  } = useAuth();
  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        isAuthenticated,
        getAccessToken,
        login,
        logout,
        autoLogin,
        autoCreate,
        roleType
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
