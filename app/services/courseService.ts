import { Course } from "../models/course.mode";

export const getCourses = async (communityId: string) => {
  try {
    const response = await axios.get<Course>(
      `https://communn.io/api/v1/plans/community/${communityId}/user`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data;
  } catch (err) {
    console.error("Error fetching plans:", err);
    return { status: 500, data: [] };
  }
};
