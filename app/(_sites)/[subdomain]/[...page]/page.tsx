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


    // console.log('🟡 HOST:', host);

    const response = await getCommunityData(host);

    console.log('🟡 Community response:', response);

    const community: Community = response?.community;


    const builderModelName = community?.community?.template || 'default';

    // console.log('🟡 Builder model name:', builderModelName);

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
