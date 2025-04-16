import { headers } from 'next/headers';
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder';
import { getCommunityData } from '@/app/services/communityService';


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


interface PageProps {
    params: {
        page: string[];
    };
}


export default async function DynamicPage(props: PageProps) {
    const headersList = headers();
    const host = (await headersList).get('host') || '';
    const subdomain = host.split('.')[0];
    const pathname = (await headersList).get('x-pathname') || '';
    // console.log('headersList:', pathname);
    const builderModelName = 'page';

    const content = await builder.get(builderModelName, {
        userAttributes: {
            urlPath: pathname || "",
        },
    }).toPromise();


    // console.log('Builder content:', content);

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
