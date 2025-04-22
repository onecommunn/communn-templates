import axios from 'axios';

type Community = {
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

export async function getCommunityData(hostOrSubdomain: string) {
  // 🧠 Normalize for local testing
  const isLocalhost = hostOrSubdomain.includes('localhost');

  const normalizedHost = isLocalhost ? 'communn.in' : hostOrSubdomain;

  const isCustomDomain =
    normalizedHost === 'communn.in' || (normalizedHost.includes('.') && !normalizedHost.includes('mycommunn.com'));

  const endpoint = isCustomDomain
    ? `https://communn.io/api/v2.0/domain/${normalizedHost}`
    : `https://communn.io/api/v2.0/community/by-subdomain/${normalizedHost}`;

  console.log('🟡 Axios endpoint:', endpoint);

  try {
    const response = await axios.get(endpoint);
    console.log('✅ Axios response:', response?.data);
    return { community: response.data || response.data };
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

