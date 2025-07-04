"use client";
import { AuthContext } from "@/app/contexts/Auth.context";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const YuvaaSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    emailId: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    phoneNumber: false,
    emailId: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const mobileFromQuery = searchParams.get("mobile");
    const emailFromQuery = searchParams.get("email");

    if (authContext.isAuthenticated) {
      router.push("/");
    }

    if (mobileFromQuery) {
      setFormData((prev) => ({ ...prev, phoneNumber: mobileFromQuery }));
    } else if (emailFromQuery) {
      setFormData((prev) => ({ ...prev, emailId: emailFromQuery }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    if (name === "phoneNumber") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length > 10) return;
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? e.target.checked : value.trimStart(),
      }));
    }
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleLoginResponse = async (response: any) => {
    if (response.status === 200) {
      toast.success("Account created successfully");
      router.push("/");
    } else if (response.status === 404) {
      toast.error("User not found. Please try again.");
    } else {
      toast.error("Signup failed. Please try again.");
    }
  };

  const handleSignup = async () => {
    setSubmitted(true);

    if (!isFormValid) return;

    const data = JSON.stringify(formData);
    try {
      setIsLoading(true);
      const response: any = await authContext.autoCreate(data);
      await handleLoginResponse(response);
    } catch (err) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isEmailValid = /^\S+@\S+\.\S+$/.test(formData.emailId);
  const isMobileValid = /^[6-9]\d{9}$/.test(formData.phoneNumber);
  const isNameValid = formData.firstName.trim().length >= 2;

  const isFormValid = isNameValid && isEmailValid && isMobileValid;

  const showError = (field: keyof typeof touched, isValid: boolean) =>
    (touched[field] || submitted) && !isValid;

  return (
    <main className="flex-grow flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Create Account</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={() => handleBlur("firstName")}
                placeholder="Enter your full name"
                required
                className={`w-full px-4 py-3 border ${showError("firstName", isNameValid) ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6347]`}
              />
              {showError("firstName", isNameValid) && (
                <p className="text-sm text-red-500 mt-1">Name must be at least 2 characters</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Mobile Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={() => handleBlur("phoneNumber")}
                placeholder="Enter your mobile number"
                required
                className={`w-full px-4 py-3 border ${showError("phoneNumber", isMobileValid) ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6347]`}
              />
              {showError("phoneNumber", isMobileValid) && (
                <p className="text-sm text-red-500 mt-1">Enter valid 10-digit mobile number</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                onBlur={() => handleBlur("emailId")}
                placeholder="Enter your email"
                required
                className={`w-full px-4 py-3 border ${showError("emailId", isEmailValid) ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6347]`}
              />
              {showError("emailId", isEmailValid) && (
                <p className="text-sm text-red-500 mt-1">Enter a valid email</p>
              )}
            </div>

            <div>
              <button
                onClick={handleSignup}
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`${isFormValid && !isLoading
                  ? "bg-[#FF6347] cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
                  } text-white px-6 py-3 rounded-lg font-medium w-full`}
              >
                {isLoading ? "Submitting..." : "Save & Continue"}
              </button>
            </div>
          </form>

          {/* <p className="text-center text-sm text-gray-600 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-[#FF6347] hover:underline">
              Sign in
            </Link>
          </p> */}
        </div>
      </div>
    </main>
  );
};

export default YuvaaSignup;
