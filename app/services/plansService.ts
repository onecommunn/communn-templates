// utils/api.ts or services/plans.ts
import axios from 'axios';
import { TrainingPlan } from '../models/plan.model';

type PlansCommunityResponse = {
  myPlans: TrainingPlan[];
  [key: string]: any;
};

export const getPlansCommunity = async (token: string, id: string) => {
  try {
    const response = await axios.get<PlansCommunityResponse>(`https://communn.io/api/v1/plans/community/${id}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    // Optional: Log the response for debugging
    // console.log(response, "response");
    return response?.data?.myPlans;
  } catch (err) {
    console.error('Error fetching plans:', err);
    return { status: 500, data: [] };
  }
};



export const createSubscriptionSequences = async (
  userId: string,
  communityId: string,
  planId: string,
) => {
  try {
    const response = await axios.post(
      `https://communn.io/api/v2.0/subscription/user/${userId}/create-fetch-subscription`,
      {
        communityId,
        planId,
      },
    );
    return response?.data;
  } catch (err) {
    
    return { status: 500, data: [] };
  }
};


export const getSequencesBySubscriptionId = async (
  subscriptionId: string,
  userId: string,
  courseId?:string
) => {
  try {
    const response = await axios.post(
      `https://communn.io/api/v2.0//subscription/${subscriptionId}/user/${userId}/get-all-sequences`,
      {
        courseId:courseId
      }
    );
    return response?.data;
  } catch (err) {
    
    return { status: 500, data: [] };
  }
};


