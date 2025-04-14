

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

const mockCommunities: Record<string, Community> = {
  customer1: {
    name: 'Yoga Bliss',
    city: 'Bangalore',
    category: 'Yoga',
    logo: 'https://via.placeholder.com/100x100.png?text=Yoga',
    banner: '',
    description: 'A peaceful yoga center.',
    directorMessage: '',
    fullAddress: 'MG Road, Bangalore',
    phoneNumber: '9999999999',
    email: 'hello@yogabliss.com',
    vision: 'Health & Wellness',
    mission: 'Empower through yoga',
  },
  customer2: {
    name: 'Wellness Studio',
    city: 'Mumbai',
    category: 'Fitness',
    logo: 'https://via.placeholder.com/100x100.png?text=Wellness',
    banner: '',
    description: 'Your daily wellness hub.',
    directorMessage: '',
    fullAddress: 'Andheri West, Mumbai',
    phoneNumber: '8888888888',
    email: 'info@wellness.com',
    vision: 'Balance Life',
    mission: 'Fitness for all',
  },
};

export async function getCommunityData(subdomain: string): Promise<{ community: Community }> {
  const community = mockCommunities[subdomain] || mockCommunities['customer1'];
  return { community };
}
