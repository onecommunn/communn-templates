import React from "react";

interface teamMembersListProps {
  name: string;
  role: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}

interface YuvaaTeamSectionProps {
  title: string;
  description: string;
  teamMembersList?: teamMembersListProps[];
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
  teamMembersList,
  backgroundColor,
  titleColor,
  descriptionColor,
  lineColor,
  cardBackgroundColor,
  nameColor,
  roleColor,
}: YuvaaTeamSectionProps) => {
  return (
    <section className="py-16 px-4 lg:px-20 bg-white text-black" style={{ backgroundColor }}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: titleColor }}>{title}</h2>
          <div className="w-24 h-1 bg-[#FF6347] mx-auto mb-6" style={{ backgroundColor: lineColor }}></div>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ color: descriptionColor }}>{description}</p>
        </div>

        {Array.isArray(teamMembersList) && teamMembersList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembersList.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                style={{ backgroundColor: cardBackgroundColor }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{
                      width: member.imageWidth,
                      height: member.imageHeight,
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1" style={{ color: nameColor }}>{member.name}</h3>
                  <p className="text-[#FF6347] mb-4" style={{ color: roleColor }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 italic mt-8" style={{ color: descriptionColor }}>
            No team members available.
          </p>
        )}
      </div>
    </section>
  );
};

export default YuvaaTeamSection;
