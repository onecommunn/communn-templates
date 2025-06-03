import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/Ui/CustomInputOtp";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const YuvaaSignup = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'details' | 'otp'>('details');
  const [useEmail, setUseEmail] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const mobileFromQuery = searchParams.get('mobile');
    if (mobileFromQuery) {
      setMobileNumber(mobileFromQuery);
    }
  }, [searchParams]);

  const handleGetOtp = () => {
    console.log('Getting OTP for signup:', { name, mobileNumber });
    setStep('otp');
    // OTP logic would go here
  };

  const handleSignup = () => {
    console.log('Signup with OTP:', { name, mobileNumber, otp, agreeTerms });
    // Signup verification logic would go here
  };

  const toggleAuthMethod = () => {
    setUseEmail(!useEmail);
    setMobileNumber('');
    setOtp('');
    setStep('details');
  };


  return (
    <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Create Account</h2>
            
            {step === 'details' ? (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <button
                    onClick={toggleAuthMethod}
                    className="text-[#FF6347] hover:text-[#FF6347]-dark text-sm font-medium"
                  >
                    {useEmail ? 'Use Mobile No' : 'Use Email ID'}
                  </button>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6347]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    {useEmail ? 'Enter Email ID' : 'Enter Mobile No'}
                  </label>
                  <div className="flex gap-3">
                    <input
                      type={useEmail ? 'email' : 'tel'}
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder={useEmail ? 'Enter your email' : 'Enter your mobile number'}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6347]"
                    />
                    <button
                      onClick={handleGetOtp}
                      disabled={!mobileNumber || !name}
                      className="bg-[#FF6347] text-white px-6 py-3 rounded-lg font-medium"
                    >
                      Get OTP
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="agree-terms"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="h-4 w-4 text-[#FF6347] focus:ring-[#FF6347] border-gray-300 rounded"
                  />
                  <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the <a href="#" className="text-[#FF6347] hover:text-[#FF6347]-dark">Terms of Service</a> and <a href="#" className="text-[#FF6347] hover:text-[#FF6347]-dark">Privacy Policy</a>
                  </label>
                </div>

                <p className="text-center text-sm text-gray-600 mt-8">
                  Already have an account?{' '}
                  <Link href="/login" className="font-medium text-[#FF6347] hover:text-[#FF6347]-dark">
                    Sign in
                  </Link>
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-4">
                    Enter OTP
                  </label>
                  <div className="flex justify-center">
                    <InputOTP 
                      maxLength={6} 
                      value={otp} 
                      onChange={setOtp}
                      className="gap-2"
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-[#FF6347]" />
                        <InputOTPSlot index={1} className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-[#FF6347]" />
                        <InputOTPSlot index={2} className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-[#FF6347]" />
                        <InputOTPSlot index={3} className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-[#FF6347]" />
                        <InputOTPSlot index={4} className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-[#FF6347]" />
                        <InputOTPSlot index={5} className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-[#FF6347]" />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>

                <button
                  onClick={handleSignup}
                  disabled={otp.length !== 6 || !agreeTerms}
                  className="w-full bg-gradient-to-r from-[#20B2AA]-400 to-green-500 hover:from-[#20B2AA]-500 hover:to-green-600 text-white py-3 rounded-lg font-medium"
                >
                  Create Account
                </button>

                <div className="text-center">
                  <button
                    onClick={() => setStep('details')}
                    className="text-sm text-gray-600 hover:text-[#FF6347]"
                  >
                    Change details?
                  </button>
                </div>

                <p className="text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/login" className="font-medium text-[#FF6347] hover:text-[#FF6347]-dark">
                    Sign in
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
  );
};

export default YuvaaSignup;
