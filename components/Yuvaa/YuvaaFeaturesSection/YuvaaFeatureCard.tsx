import React from "react";
import * as LucideIcons from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  size: number;
  description: string;
  cardBackgroundColor: string;
  iconColor: string;
  featureTitleColor: string;
  fertureDescriptionColor: string;
  iconBackgroundColor: string;
}

type LucideIconComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { size?: number | string }
>;

const YuvaaFeatureCard = ({
  icon,
  title,
  description,
  size,
  cardBackgroundColor,
  iconColor,
  featureTitleColor,
  fertureDescriptionColor,
  iconBackgroundColor,
}: FeatureCardProps) => {
  const IconsMap = LucideIcons as unknown as Record<string, LucideIconComponent>;

  const IconComponent = IconsMap[icon] || LucideIcons.Smile;

  return (
    <div
      className="p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
      style={{ backgroundColor: cardBackgroundColor }}
    >
      <div
        className="w-16 h-16 p-4 rounded-md mb-4 flex items-center justify-center"
        style={{ color: iconColor, backgroundColor: iconBackgroundColor }}
      >
        <IconComponent size={size} />
      </div>
      <h3 className="text-xl font-semibold mb-2" style={{ color: featureTitleColor }}>
        {title}
      </h3>
      <p style={{ color: fertureDescriptionColor }}>{description}</p>
    </div>
  );
};

export default YuvaaFeatureCard;
