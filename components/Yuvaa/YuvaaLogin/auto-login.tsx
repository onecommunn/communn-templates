// pages/auto-login.tsx

"use client"

import React, { useState, useContext, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { AuthContext } from '@/app/contexts/Auth.context';

const AutoLogin: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const authContext = useContext(AuthContext);
//   const router = useRouter();
  const [emailId, setEmailId] = useState('');
  const [loader, setLoader] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailId(e.target.value);
  };

  const handleLoginResponse = (response: any) => {
    setLoader(true);
    if (response?.status === 200) {
      const { user, joinedCommunities, notPaidCommunities } = response?.data;

      if (notPaidCommunities) {
        // router.push('/joined-communities');
        enqueueSnackbar('Login Success', { variant: 'success' });
      } else if (joinedCommunities && joinedCommunities.length > 0) {
        // router.push({
        //   pathname: '/home',
        //   query: { id: user?.community },
        // });
        enqueueSnackbar('Login Success', { variant: 'success' });
      } else if (!joinedCommunities || joinedCommunities.length === 0) {
        // router.push({
        //   pathname: '/explore',
        //   query: { id: 2, data: JSON.stringify(user) },
        // });
        enqueueSnackbar('Login Success', { variant: 'success' });
      } else if (user?.community) {
        // router.push({
        //   pathname: '/dashboard',
        //   query: { id: 3, data: JSON.stringify(user) },
        // });
      }
    } else if (response?.status === 403) {
      console.log('Inactive user');
    } else if (response?.status === 404) {
      enqueueSnackbar('User Not Found', { variant: 'error' });
    }
    setLoader(false);
  };

  const autoEmailLogin = async (): Promise<void> => {
    if (!emailId) {
      enqueueSnackbar('Please enter email ID', { variant: 'error' });
      return;
    }

    try {
      const autoLoginResponse = await authContext.autoLogin('', "",emailId);
      handleLoginResponse(autoLoginResponse);
    } catch (error) {
      console.error('Auto Email Login Error:', error);
      enqueueSnackbar('Something went wrong. Please try again.', { variant: 'error' });
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        {/* Left image + text */}
        <div className="hidden md:flex flex-col items-center justify-center w-7/12 bg-gradient-to-br from-blue-400 to-teal-500">
          <img src="/images/registerbckg.png" alt="Background" className="w-3/4" />
          <h2 className="mt-4 text-white text-2xl font-bold">Create or Join Communities</h2>
        </div>

        {/* Right login form */}
        <div className="flex items-center justify-center w-full md:w-5/12">
          <form
            className="w-80 p-6 bg-white rounded-lg shadow"
            onSubmit={(e) => e.preventDefault()}
            // ref={inputRef}
          >
            <img
              src="/images/Communn-new-logo.png"
              alt="Logo"
              className="mx-auto mb-4 w-3/4"
            />

            <p className="text-sm text-gray-700 mb-2 text-center">
              Already user? Enter Email ID Please to Login.
            </p>

            <input
              ref={inputRef}
              type="email"
              value={emailId}
              onChange={handleEmailChange}
              placeholder="Enter Email ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />

            <button
              onClick={autoEmailLogin}
              className="w-full py-2 bg-gradient-to-r from-blue-400 to-green-600 text-white rounded-full hover:opacity-90 transition-all"
              disabled={loader}
            >
              {loader ? 'Loading...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AutoLogin;
