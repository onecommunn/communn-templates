import axios from 'axios';

export type Community = {
  community?: any;
  name: string;
  city: string;
  category: string;
  logo: string;
  banner: string;
  description: string;
  directorMessage: string;
  fullAddress: string;
  phoneNumber: string;
  email: string;
  vision: string;
  mission: string;
  template?: string;
};

const COMMUNITY_API_BASE = 'https://communn.io/api/v2.0/community';
const DOMAIN_API_BASE = 'https://communn.io/api/v2.0/domain';

export async function getCommunityData(hostOrSubdomain: string): Promise<{ community: Community }> {
  const cleanedHost = hostOrSubdomain.split(':')[0];
  let endpoint = '';

  const isCustomDomain =
    cleanedHost.includes('.') &&
    !cleanedHost.includes('localhost') &&
    !cleanedHost.includes('mycommunn.com');

  if (isCustomDomain) {
    endpoint = `${DOMAIN_API_BASE}/${cleanedHost}`;
  } else {
    const subdomain = cleanedHost.split('.')[0];
    endpoint = `${COMMUNITY_API_BASE}/by-subdomain/${subdomain}`;
  }

  try {
    const response = await axios.get(endpoint);
    return {
      community: response.data as Community,
    };
  } catch (error) {
    console.error('❌ Axios error fetching community:', error);

    return {
      community: {
        name: 'Unknown Community',
        city: '',
        category: '',
        logo: '',
        banner: '',
        description: '',
        directorMessage: '',
        fullAddress: '',
        phoneNumber: '',
        email: '',
        vision: '',
        mission: '',
        template: 'default',
      },
    };
  }
}
