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
  let endpoint = '';
  if (hostOrSubdomain.includes('.') && !hostOrSubdomain.includes('localhost')) {
    endpoint = `${DOMAIN_API_BASE}/${hostOrSubdomain}`;
  } else {
    endpoint = `${COMMUNITY_API_BASE}/by-subdomain/${hostOrSubdomain}`;
  }
  try {
    const response = await axios.get(endpoint);
    console.log('✅ Axios response:', response?.data);
    return { community: response.data };
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
