import { headers } from 'next/headers';
import { builder } from '@builder.io/sdk';
import { getCommunityData } from '@/app/services/communityService';
import { RenderBuilderContent } from '@/components/builder';


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
    params: Promise<{
        page: string[];
    }>;
}

export default async function DynamicPage(props: PageProps) {
    const headersList = headers();
    const host = (await headersList).get('host') || '';
    const subdomain = host.split('.')[0];

    const builderModelName = 'page';

    const content = await builder
        .get(builderModelName, {
            userAttributes: {
                urlPath: '/' + ((await props?.params)?.page?.join('/') || ''),
            },
        })
        .toPromise();

    try {
        const response = await getCommunityData(subdomain);
        const community = response.community;

        console.log('Community Data:', community);

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
                mission: community.mission,
            },
        };

        return (
            // <RenderBuilderContent
            //     content={content}
            //     model="page"
            //     data={builderData}
            // />

            <div style={{ padding: '40px', fontFamily: 'Arial', textAlign: 'center' }}>
                <img src={builderData?.community?.logo} alt="logo" />
                <h1 >Welcome to {builderData?.community?.name}</h1>
                <p>📍 {builderData?.community?.fullAddress}</p>
                <p>This is preview for {subdomain}.yourdomain.com</p>
            </div>
        );
    } catch (error) {
        console.error('❌ Error fetching community data:', error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500">
                    Error loading community data for: <strong>{subdomain}</strong>
                </p>
            </div>
        );
    }
}
