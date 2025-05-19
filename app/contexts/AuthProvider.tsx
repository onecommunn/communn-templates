

'use client';

// import { createContext, useState } from "react";
import { useAuth } from '../hooks/useAuth';
import { AuthContext } from './Auth.context';

const AuthProvider = ({ children }: any) => {
  const {
    loading,
    user,
    isAuthenticated,
    getAccessToken,
    autoLogin,
    autoCreate,
    roleType
  } = useAuth();

  console.log(user, "user");

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        isAuthenticated,
        getAccessToken,
        autoLogin,
        autoCreate,
        roleType
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
