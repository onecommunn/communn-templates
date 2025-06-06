import { useCommunity } from "@/app/hooks/useCommunity";
import { Team } from "@/app/models/team.model";
import { getTeams } from "@/app/services/teamService";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { Skeleton } from "@/components/Ui/skeleton";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface YuvaaTeamSectionProps {
  title: string;
  description: string;
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
          <DialogContent
            className="max-w-lg"
            asChild
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <DialogTitle className="capitalize">{title}</DialogTitle>
              <DialogDescription className="whitespace-pre-wrap text-base text-gray-700">
                {desc}
              </DialogDescription>
            </motion.div>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  const renderSkeletons = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, idx) => (
        <div
          key={idx}
          className="rounded-lg overflow-hidden shadow-md"
          style={{ backgroundColor: cardBackgroundColor }}
        >
          <Skeleton className="w-full h-64" />
          <div className="p-6 space-y-3">
            <div className="grid grid-cols-2 items-center">
              <Skeleton className="h-5 w-24" />
              <div className="text-right">
                <Skeleton className="h-4 w-16 ml-auto" />
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 px-4 lg:px-24" style={{ backgroundColor }}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: titleColor }}>
            {title}
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: lineColor }}
          ></div>
          <p className="max-w-2xl mx-auto" style={{ color: descriptionColor }}>
            {description}
          </p>
        </motion.div>

        {isloading ? (
          renderSkeletons()
        ) : teamsList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamsList.map((member, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden shadow-md"
                style={{ backgroundColor: cardBackgroundColor }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-fill object-center"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3
                    className="text-xl font-semibold mb-1"
                    style={{ color: nameColor }}
                  >
                    {member.name}
                  </h3>
                  <p style={{ color: roleColor }}>{member.designation}</p>
                  {renderDescription(member.description, member.name)}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p
            className="text-center italic mt-8"
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
