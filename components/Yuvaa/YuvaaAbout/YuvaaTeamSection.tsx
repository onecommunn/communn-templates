import { useCommunity } from "@/app/hooks/useCommunity";
import { Team } from "@/app/models/team.model";
import { getCommunityData } from "@/app/services/communityService";
import { getTeams } from "@/app/services/teamService";
import React, { useEffect, useState } from "react";

interface YuvaaTeamSectionProps {
  title: string;
  description: string;
  // teamMembersList?: teamMembersListProps[];
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  lineColor: string;
  cardBackgroundColor: string;
  nameColor: string;
  roleColor: string;
}

const YuvaaTeamSection = ({
  title,
  description,
  // teamMembersList,
  backgroundColor,
  titleColor,
  descriptionColor,
  lineColor,
  cardBackgroundColor,
  nameColor,
  roleColor,
}: YuvaaTeamSectionProps) => {
  const [teamsList, setTeamsList] = useState<Team[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);

  const { communityId } = useCommunity();

  const fetchTeams = async () => {
    try {
      setIsLoading(true);
      const response: any = await getTeams(communityId);
      setTeamsList(response.teams || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (communityId) {
      fetchTeams();
    }
  }, [communityId]);

  if (isloading) {
    return (
      <div className="col-span-full text-center text-gray-500 text-lg w-full">
        Loading Team Members...
      </div>
    );
  }
  if (!Array.isArray(teamsList) || teamsList.length === 0) return null;

  return (
    <section
      className="py-16 px-4 lg:px-24 bg-white text-black"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: titleColor }}>
            {title}
          </h2>
          <div
            className="w-24 h-1 bg-[#FF6347] mx-auto mb-6"
            style={{ backgroundColor: lineColor }}
          ></div>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ color: descriptionColor }}
          >
            {description}
          </p>
        </div>

        {teamsList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamsList.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                style={{ backgroundColor: cardBackgroundColor }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2">
                    <h3
                      className="text-xl font-semibold mb-1"
                      style={{ color: nameColor }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-[#FF6347] text-right"
                      style={{ color: roleColor }}
                    >
                      {member.designation}
                    </p>
                  </div>

                  <p className="text-gray-500 mb-4">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p
            className="text-center text-gray-500 italic mt-8"
            style={{ color: descriptionColor }}
          >
            No team members available.
          </p>
        )}
      </div>
    </section>
  );
};

export default YuvaaTeamSection;
