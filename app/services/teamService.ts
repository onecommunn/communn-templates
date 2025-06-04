import axios from "axios";

export const getTeams = async (communityId: string) => {
  try {
    const response = await axios.get(
      `https://communn.io/api/v2.0/builders/community/${communityId}/team`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data;
  } catch (err) {
    console.error("Error fetching teams:", err);
    return { status: 500, data: [] };
  }
};
