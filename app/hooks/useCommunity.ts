import { useState } from "react";
import { getCommunityData } from "../services/communityService";

export const useCommunity = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getSocialLinks = async (hostOrSubdomain: string) => {
    try {
      setIsLoading(true);
      const response = await getCommunityData(hostOrSubdomain);
      return response.community.socialLinks;
    } catch (err) {
      console.log("error in fetching social links");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    getSocialLinks,
  };
};
