import axios from "axios";

export const getServices = async (communityId: string) => {
  try {
    const response = await axios.get(
      `https://communn.io/api/v2.0/builders/community/${communityId}/service`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data;
  } catch (err) {
    console.error("Error fetching services:", err);
    return { status: 500, data: [] };
  }
};
