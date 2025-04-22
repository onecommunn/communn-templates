import { headers } from 'next/headers';
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder';
import { getCommunityData, Community } from '@/app/services/communityService';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function DynamicPage() {
    const headersList = headers();
    const rawHost = (await headersList).get('host') || '';
    const host = rawHost.split(':')[0];

    const pathname = (await headersList).get('x-pathname') || '';
    const builderModelName = 'page';

    console.log('🟡 HOST:', host);

    const response = await getCommunityData(host);
    const community: Community = response.community as Community;


    const content = await builder.get(builderModelName, {
        userAttributes: {
            urlPath: pathname || "",
            subdomain: community?.name,
        },
    }).toPromise();

    return (
        <RenderBuilderContent
            content={content}
            model={builderModelName}
            data={{ community }}
        />
    );
}
