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
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const mobileFromQuery = searchParams.get("mobile");
    const emailFromQuery = searchParams.get("email");

    if (mobileFromQuery) {
      setFormData((prev) => ({ ...prev, phoneNumber: mobileFromQuery }));
    } else if (emailFromQuery) {
      setFormData((prev) => ({ ...prev, emailId: emailFromQuery }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginResponse = async (response: any) => {
    if (response.status === 200) {
      toast.success("Account Created successfully");
      router.push("/");
    } else if (response.status === 404) {
      toast.error("User not found. Please sign up.");
    } else {
      toast.error("Login failed. Please try again.");
    }
  };

  const handleSignup = async () => {
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
  const isFormValid = formData.firstName && isEmailValid && isMobileValid;

  return (
    <main className="flex-grow flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Create Account
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6347]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
                className={`w-full px-4 py-3 border ${
                  isMobileValid ? "border-gray-300" : "border-red-400"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6347]`}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className={`w-full px-4 py-3 border ${
                  isEmailValid ? "border-gray-300" : "border-red-400"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6347]`}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`${
                  isFormValid && !isLoading
                    ? "bg-[#FF6347]"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white px-6 py-3 rounded-lg font-medium w-full`}
              >
                {isLoading ? "Submitting..." : "Save & Continue"}
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-[#FF6347] hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default YuvaaSignup;
