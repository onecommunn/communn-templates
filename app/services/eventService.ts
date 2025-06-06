import axios from "axios";
import { Event } from "../models/event.model";

export const getEvents = async (communityId: string) => {
  try {
    const response = await axios.get<Event>(
      `https://communn.io/api/v2.0/builders/community/${communityId}/event`,
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
