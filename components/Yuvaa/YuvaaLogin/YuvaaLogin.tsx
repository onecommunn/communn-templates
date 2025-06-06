"use client";
import { AuthContext } from "@/app/contexts/Auth.context";
import { useOtp } from "@/app/hooks/useOtp";
import {
  getOtp,
  sendOtpEmailService,
  verifyOtp,
} from "@/app/services/otpService";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/Ui/CustomInputOtp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const YuvaaLogin = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"mobile" | "otp">("mobile");
  const [useEmail, setUseEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext);

  const { verifyEmailOtp } = useOtp();


  const router = useRouter();

  useEffect(() => {
    if (authContext?.isAuthenticated) {
      router.push('/')
    }
  }, [])

  // console.log(authContext?.isAuthenticated, "authContext");

  const handleGetOtp = async () => {
    if (!mobileNumber) {
      toast.error(
        `Please enter a valid ${useEmail ? "email" : "mobile number"}`
      );
      return;
    }

    setLoading(true);
    try {
      let response: any;
      if (useEmail) {
        const token = localStorage.getItem("access-token") || "";
        response = await sendOtpEmailService(mobileNumber);
        console.log(response, "Response from email OTP service");
      } else {
        response = await getOtp(mobileNumber);
      }
      if (response.status === 200) {
        toast.success(
          `OTP sent to your ${useEmail ? "email" : "mobile number"}`
        );
        setStep("otp");
      } else {
        toast.error(response.data?.message || "Failed to send OTP");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginResponse = async (response: any) => {
    if (response.status === 200) {
      toast.success("Login successful!");
      router.push("/");
    } else if (response.status === 404) {
      toast.error("User not found. Please sign up.");
      const encodedValue = encodeURIComponent(mobileNumber);
      const queryKey = useEmail ? "email" : "mobile";
      router.push(`/sign-up?${queryKey}=${encodedValue}`);
    } else {
      toast.error("Login failed. Please try again.");
    }
  };


  const handleLogin = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    setLoading(true);
    try {
      let verifyResponse: any;
      if (useEmail) {
        verifyResponse = await verifyEmailOtp(otp, mobileNumber);
      } else {
        verifyResponse = await verifyOtp(mobileNumber, otp);
      }
      if (verifyResponse.status === 200) {
        const res: any = await authContext.autoLogin(
          useEmail ? "" : mobileNumber,
          useEmail ? mobileNumber : "", null
        );
        handleLoginResponse(res);
        console.log(res, "Response from auto login");
        if (res?.status === 200) {
          toast.success("Login successful!");
          router.push("/");
        } else if (res?.status === 404) {
          toast.error("User not found. Please sign up.");
        } else {
          toast.error("Login failed. Please try again.");
        }
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMethod = () => {
    setUseEmail(!useEmail);
    setMobileNumber("");
    setOtp("");
    setStep("mobile");
  };

  return (
    <main className="flex-grow flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>

          {step === "mobile" ? (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <button
                  onClick={toggleAuthMethod}
                  className="text-[#FF6347] cursor-pointer hover:text-[#FF6347]-dark text-sm font-medium"
                  disabled={loading}
                >
                  {useEmail ? "Use Mobile No" : "Use Email ID"}
                </button>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  {useEmail ? "Enter Email ID" : "Enter Mobile No"}
                </label>
                <div className="flex gap-3">
                  <input
                    type={useEmail ? "email" : "tel"}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder={
                      useEmail ? "Enter your email" : "Enter your mobile number"
                    }
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6347]"
                    disabled={loading}
                  />
                  <button
                    onClick={handleGetOtp}
                    disabled={!mobileNumber || loading}
                    className={`${mobileNumber || loading
                      ? "bg-[#FF6347] cursor-pointer"
                      : "bg-gray-300 cursor-not-allowed"
                      } text-white px-6 py-3  rounded-lg font-medium w-full`}
                  >
                    {loading ? "Sending..." : "Get OTP"}
                  </button>
                </div>
              </div>

              <p className="text-center text-sm text-gray-600 mt-8">
                Don't have an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-medium text-[#FF6347] hover:text-[#FF6347]-dark"
                >
                  Sign up now
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
                    disabled={loading}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot
                        index={0}
                        className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-[#FF6347]"
                      />
                      <InputOTPSlot
                        index={1}
                        className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-[#FF6347]"
                      />
                      <InputOTPSlot
                        index={2}
                        className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-[#FF6347]"
                      />
                      <InputOTPSlot
                        index={3}
                        className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-[#FF6347]"
                      />
                      <InputOTPSlot
                        index={4}
                        className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-[#FF6347]"
                      />
                      <InputOTPSlot
                        index={5}
                        className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-[#FF6347]"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <button
                onClick={handleLogin}
                disabled={otp.length !== 6 || loading}
                className="w-full bg-[#FF6347] cursor-pointer text-white py-3 rounded-lg font-medium"
              >
                {loading ? "Verifying..." : "Login"}
              </button>

              <div className="text-center">
                <button
                  onClick={() => setStep("mobile")}
                  className="text-sm text-gray-600 cursor-pointer hover:text-[#FF6347]"
                  disabled={loading}
                >
                  Change {useEmail ? "email" : "mobile number"}?
                </button>
              </div>

              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-[#FF6347] hover:text-[#FF6347]-dark"
                >
                  Sign up now
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default YuvaaLogin;
