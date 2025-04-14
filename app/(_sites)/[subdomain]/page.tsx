
import { getCommunityData } from "@/app/services/communityService";
import { RenderBuilderContent } from "@/components/builder";
import { BuilderContent } from "@builder.io/sdk";

export default async function DynamicPage() {


    try {
        const response = await getCommunityData();
        const community = response.community;

        const builderData = {
            community: {
                name: community.name,
                category: community.category,
                banner: community.banner,
                logo: community.logo,
                description: community.description,
                directorMessage: community.directorMessage,
                fullAddress: community.fullAddress,
                city: community.city,
                phoneNumber: community.phoneNumber,
                email: community.email,
                vision: community.vision,
                mission: community.mission
            }
        };

        return (
            <RenderBuilderContent
                content={undefined}
                model="page"
                data={builderData}
            />
        );
    } catch (error) {
        console.error('Error fetching community data:', error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500">Error loading community data</p>
            </div>
        );
    }
}
