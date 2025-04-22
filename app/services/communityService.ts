import axios from 'axios';

export type Community = {
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
};

const COMMUNITY_API_BASE = 'https://communn.io/api/v2.0/community';
const DOMAIN_API_BASE = 'https://communn.io/api/v2.0/domain';

export async function getCommunityData(hostOrSubdomain: string): Promise<{ community: Community }> {
  const cleanedHost = hostOrSubdomain.split(':')[0]; // remove port if any
  let endpoint = '';

  // 🧠 Logic to differentiate
  const isCustomDomain =
    cleanedHost.includes('.') &&
    !cleanedHost.includes('localhost') &&
    !cleanedHost.includes('mycommunn.com');

  if (isCustomDomain) {
    // ✅ It's a custom domain (like communn.in)
    endpoint = `${DOMAIN_API_BASE}/${cleanedHost}`;
  } else {
    // ✅ It's a subdomain (like domaincheck.mycommunn.com → domaincheck)
    const subdomain = cleanedHost.split('.')[0];
    endpoint = `${COMMUNITY_API_BASE}/by-subdomain/${subdomain}`;
  }

  console.log('🟡 Axios endpoint:', endpoint);

  try {
    const response = await axios.get(endpoint);
    console.log('✅ Axios response:', response?.data);
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
        description: 'No data found for this domain.',
        directorMessage: '',
        fullAddress: '',
        phoneNumber: '',
        email: '',
        vision: '',
        mission: '',
      },
    };
  }
}
