'use client';

import React, { useState, useContext, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { AuthContext } from '@/app/contexts/Auth.context';

export default function AutoLogin() {
  const { enqueueSnackbar } = useSnackbar();
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const [emailId, setEmailId] = useState('');
  const [loader, setLoader] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailId(e.target.value);
  };

  const autoEmailLogin = async () => {
    if (!emailId) {
      enqueueSnackbar('Please enter email ID', { variant: 'error' });
      return;
    }
    setLoader(true);
    const response: any = await authContext.autoLogin('', emailId, null);
    setLoader(false);
    if (response?.status === 200) {
      enqueueSnackbar('Login Success', { variant: 'success' });
      router.push('/');
    } else if (response?.status === 404) {
      enqueueSnackbar('User Not Found', { variant: 'error' });
    } else {
      enqueueSnackbar('Login Failed', { variant: 'error' });
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex flex-col items-center justify-center w-7/12 bg-gradient-to-br from-blue-400 to-teal-500">
        <img src="/images/registerbckg.png" className="w-3/4" />
        <h2 className="mt-4 text-white text-2xl font-bold">Join a Community</h2>
      </div>

      <div className="flex items-center justify-center w-full md:w-5/12">
        <form className="w-80 p-6 bg-white rounded-lg shadow" onSubmit={(e) => e.preventDefault()}>
          <img src="/images/Communn-new-logo.png" className="mx-auto mb-4 w-3/4" />
          <p className="text-sm text-gray-700 mb-2 text-center">Enter your email to log in</p>
          <input
            ref={inputRef}
            type="email"
            value={emailId}
            onChange={handleEmailChange}
            placeholder="Email ID"
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          />
          <button
            onClick={autoEmailLogin}
            className="w-full py-2 bg-gradient-to-r from-blue-400 to-green-600 text-white rounded-full"
            disabled={loader}
          >
            {loader ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
