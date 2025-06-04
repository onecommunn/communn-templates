import axios from "axios";

export const getFAQs = async (communityId: string) => {
  try {
    const response = await axios.get(
      `https://communn.io/api/v2.0/builders/community/${communityId}/faq`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data;
  } catch (err) {
    console.error("Error fetching Faqs:", err);
    return { status: 500, data: [] };
  }
};
