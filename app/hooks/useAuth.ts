'use client';


import { useEffect, useRef, useState } from 'react';
import { IAddUser } from '../models/user.model';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import type { AxiosResponse } from 'axios';


const setTokens = ({ accessToken, refreshToken }: any) => {
  if (
    accessToken &&
    accessToken !== null &&
    accessToken !== undefined &&
    accessToken !== ''
  ) {
    localStorage.setItem('access-token', accessToken);
    localStorage.setItem('refresh-token', refreshToken);
  }
};

const setCommunityTols = (communityId: any) => {
  localStorage.setItem('communityId', communityId);
};


const getTokens = () => {
  return {
    accessToken: localStorage.getItem('access-token'),
    refreshToken: localStorage.getItem('refresh-token'),
  };
};


const removeTokens = () => {
  localStorage.removeItem('access-token');
  localStorage.removeItem('refresh-token');
  localStorage.removeItem('community');
};

const purgeStoredState = () => {
  localStorage.clear();
  sessionStorage.clear();
};


const BASE_URL = 'https://communn.io/api/v1';


export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState(null);
  
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [roleType, setRoleType] = useState<boolean>(false);
  // eslint-disable-next-line
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [community] = useState<string | null>(null);
  const intervalId = useRef<any>(null);

 useEffect(() => {
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams(window.location.search);
      const token = params?.get('token');
      const userCommunId = params?.get('communityId');

      if (params && token) {
        localStorage.setItem('access-token', token);
        localStorage.setItem('refresh-token', token);

        interface UserResponseData {
          user?: any;
        }

        const userResponse = await axios.get<UserResponseData>(
          `${BASE_URL}/auth/get-user-by-token`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        
        console.log('user response:', userResponse.data);

        const user = userResponse.data?.user;
        if (user) {
          delete user.token; 
          setUser(user);   
        }
        setTokens(token);
        setIsAuthenticated(true);
        setAccessToken(token);
      }
    } catch (error) {
      console.error('Error processing URL parameters:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  const verifyToken = (token: string) => {
    const decoded: { exp: number } = jwtDecode(token);
    const remainingTime = decoded.exp - ((Date.now() / 1000) | 0);
    if (remainingTime < 100) {
      clearInterval(intervalId.current);
      getNewToken();
    } else {
      if (!isAuthenticated) {
        setIsAuthenticated(true);
        setLoading(false);
      }
    }
  };

  const getNewToken = () => {
    setLoading(false);
  };

  // GET TOKENS FROM LOCAL STORAGE
  useEffect(() => {
    const { accessToken, refreshToken } = getTokens();
    if (accessToken) {
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      verifyToken(accessToken);
    } else {
      getNewToken();
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => {
        verifyToken(accessToken);
      }, 1000 * 60);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  const getAccessToken = () => {
    return accessToken ?? '';
  };

  const getCommunity = () => {
    return community ?? localStorage.getItem('community') ?? '';
  };


  const autoLogin = async (
    phoneNumber: string,
    emailId: string,
  ) => {
    try {
      
      const response = (await axios.post(
        `${BASE_URL}/auth/autoLogin`,
        {
          phoneNumber,
          emailId,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )) as AxiosResponse;
      if (response.status === 200) {
        console.log('response999');
        const { user } = response?.data;
        const tokens = user?.token;
        setTokens(tokens);
        setIsAuthenticated(true);
        setAccessToken(tokens?.accessToken);
        setRefreshToken(tokens?.refreshToken);
         const OnlyUser = user;
        delete OnlyUser['token'];
        setUser(OnlyUser);

      }
      console.log('response', response);
      return response;
    } catch (err: any) {
      setIsAuthenticated(false);
      return err?.response ? err?.response : err;
    }
  };

  const autoCreate = async (formData: IAddUser) => {
    try {
      const response = (await axios.post(
        `${BASE_URL}/auth/autoCreate`,
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      )) as AxiosResponse;
      if (response.status === 200) {
        const { user, adminCommunities } = response?.data;
        const tokens = user?.token;
        setTokens(tokens);
        setCommunityTols(adminCommunities[0]?.community._id);
        setIsAuthenticated(true);
        setAccessToken(tokens.accessToken);
        setRefreshToken(tokens.refreshToken);
        const OnlyUser = user;
        delete OnlyUser['token'];
        setUser(OnlyUser);
      }

      return response;
    } catch (err) {
      setIsAuthenticated(false);
      return err;
    }
  };



  return {
    user,
    isAuthenticated,
    loading,
    getAccessToken,
    getCommunity,
    autoLogin,
    autoCreate,
    roleType,
  };
};


