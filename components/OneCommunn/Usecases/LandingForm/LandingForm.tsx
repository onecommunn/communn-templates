"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface IFormData {
  fullName: string;
  phoneNumber: string;
  emailId: string;
}

const LandingForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    phoneNumber: "",
    emailId: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);

    // const apiUrl = 'https://api.kylas.io/v1/leads/';
    // const headers = {
    //   'Content-Type': 'application/json',
    //   'api-key': '5cbd8053-0d0a-4f9e-a5f3-29e9fe222ba8:16740',
    // };

    // const payload = {
    //   firstName: formData.fullName.split(' ')[0] || '',
    //   phoneNumbers: [{ type: 'MOBILE', code: 'IN', value: formData.phoneNumber, dialCode: '+91', primary: true }],
    //   emails: [{ type: 'OFFICE', value: formData.emailId, primary: true }],
    // };

    // try {
    //   await axios.post(apiUrl, payload, { headers });
    //   setFormData({ fullName: '', phoneNumber: '', emailId: '' });
    //   toast.success('Lead submitted successfully!');
    //   setTimeout(() => router.push('/thank-you'), 1000);
    // } catch (error) {
    //   toast.error('Failed to submit lead.');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-100 p-6 rounded-lg w-full max-w-3xl">
        <h2 className="text-blue-700 text-center text-xl font-bold mb-4">
          Book a Demo
        </h2>
        <form onSubmit={sendEmail} className="space-y-4">
          <div className="flex md:flex-row flex-col items-center md:gap-10 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded border-black text-black"
              spellCheck={false}
              data-ms-editor="true"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Mobile"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              pattern="\\d{10}"
              className="w-full p-2 border rounded border-black text-black"
              spellCheck={false}
              data-ms-editor="true"
            />
            <input
              type="email"
              name="emailId"
              placeholder="Email ID"
              value={formData.emailId}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded border-black text-black"
              spellCheck={false}
              data-ms-editor="true"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-900"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingForm;
