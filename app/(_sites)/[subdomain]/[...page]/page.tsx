import { headers } from 'next/headers';
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder';
import { getCommunityData, Community } from '@/app/services/communityService';

// Initialize Builder API
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function DynamicPage() {
    const headersList = headers();
    const rawHost = (await headersList).get('host') || '';
    const pathname = (await headersList).get('x-pathname') || '';

    const host = rawHost.split(':')[0];

    const response = await getCommunityData(host);
    const community: Community = response.community;

    console.log('🟡 Community response:', community);

    const builderModelName = community?.template || 'default';

    const content = await builder
        .get(builderModelName, {
            userAttributes: {
                urlPath: pathname,
                subdomain: community.name,
            },
        })
        .toPromise();

    return (
        <RenderBuilderContent
            content={content}
            model={builderModelName}
            data={{ community }}
        />
    );
}
