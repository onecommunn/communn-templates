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


const BackendUrl = 'https://communn.io/api/v2.0/community/by-subdomain/';

export async function getCommunityData(subdomain: string) {
  try {
    const response = await axios.get(`${BackendUrl}/${subdomain}`);
    console.log('✅ Axios response:', response.data);
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

