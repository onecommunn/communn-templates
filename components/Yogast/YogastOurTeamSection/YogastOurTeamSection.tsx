import { useCommunity } from "@/app/hooks/useCommunity";
import { Team } from "@/app/models/team.model";
import { getTeams } from "@/app/services/teamService";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/CustomUi/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import React, { useEffect, useState } from "react";

const TeamMember = ({
  name,
  role,
  image,
  initials,
}: {
  name: string;
  role: string;
  image: string;
  initials: string;
}) => {
  return (
    <div className="text-center">
      <Avatar className="w-32 h-32 mx-auto mb-4">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="text-xl bg-[#FF5E14] text-white">
          {initials}
        </AvatarFallback>
      </Avatar>
      <h3 className="font-bold text-xl text-gray-800 mb-2">{name}</h3>
      <p className="text-[#FF5E14] font-medium">{role}</p>
    </div>
  );
};

const YogastOurTeamSection = () => {
  const [teamsList, setTeamsList] = useState<Team[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);
  const { communityId } = useCommunity();
  const MAX_PREVIEW_CHARS = 150;

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

  const renderDescription = (event: string, title: string) => {
    const desc = event ?? "";
    const shouldTruncate = desc.length > MAX_PREVIEW_CHARS;

    if (!shouldTruncate) {
      return <p className="text-gray-600 mb-4">{desc}</p>;
    }

    return (
      <div className="mb-2">
        <p className="text-gray-600 line-clamp-3">{desc}</p>
        <Dialog>
          <DialogTrigger className="text-sm font-medium text-blue-600 hover:underline focus:outline-none cursor-pointer">
            Read more
          </DialogTrigger>
          <DialogContent className="max-w-lg" asChild>
            <div>
              <DialogTitle className="capitalize">{title}</DialogTitle>
              <DialogDescription className="whitespace-pre-wrap text-base text-gray-700">
                {desc}
              </DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  console.log(teamsList)

  if (teamsList.length<0) {
    return <></>
  }

  return (
  teamsList.length > 0 && (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#FF5E14]">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Our dedicated team of certified yoga instructors and wellness
            experts are here to guide you on your journey to better health,
            mindfulness, and inner peace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamsList.map((each, index) => (
            <TeamMember
              key={index}
              name={each.name}
              role={each.designation}
              image={each.image}
              initials={each.name[0].toUpperCase()}
            />
          ))}
        </div>
      </div>
    </section>
  )
);

};

export default YogastOurTeamSection;
