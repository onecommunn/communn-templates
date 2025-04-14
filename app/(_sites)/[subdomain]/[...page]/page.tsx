import { headers } from 'next/headers';
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder';
import { getCommunityData } from '@/app/services/communityService';


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function DynamicPage() {
    const headersList = headers();
    const host = (await headersList).get('host') || '';
    const subdomain = host.split('.')[0];

    const builderModelName = 'page';
    const urlPath = '/home';

    const content = await builder.get(builderModelName, {
        userAttributes: {
            urlPath,
            subdomain,
        },
    }).toPromise();

    const response = await getCommunityData(subdomain);
    const community = response.community;

    return (
        <RenderBuilderContent
            content={content}
            model={builderModelName}
            data={{ community }}
        />
    );
}
