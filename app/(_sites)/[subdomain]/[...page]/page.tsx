import { headers } from 'next/headers';
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder';
import { getCommunityData } from '@/app/services/communityService';


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);



export default async function DynamicPage() {
    const headersList = headers();
    const host = (await headersList).get('host') || '';
    const subdomain = host.split('.')[0];
    const pathname = (await headersList).get('x-pathname') || '';
    const builderModelName = 'page';

    console.log('🟡 HOST:', host);
    console.log('🟡 SUBDOMAIN:', subdomain);

    const content = await builder.get(builderModelName, {
        userAttributes: {
            urlPath: pathname || "",
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
