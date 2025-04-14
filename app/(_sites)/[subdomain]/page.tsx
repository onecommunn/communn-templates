
import { getCommunityData } from "@/app/services/communityService";
import { RenderBuilderContent } from "@/components/builder";
import { builder, BuilderContent } from "@builder.io/sdk";


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
    params: Promise<{
        page: string[];
    }>;
}

export default async function DynamicPage(props: PageProps) {

    const builderModelName = "page";

    const content = await builder
        // Get the page content from Builder with the specified options
        .get(builderModelName, {
            userAttributes: {
                // Use the page path specified in the URL to fetch the content
                urlPath: "/" + ((await props?.params)?.page?.join("/") || ""),
            },
        })
        // Convert the result to a promise
        .toPromise();


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
                content={content}
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
