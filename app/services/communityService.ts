export interface Community {
  _id: string;
  name: string;
  category: string;
  zipCode: number;
  fullAddress: string;
  city: string;
  type: string;
  status: string;
  banner: string;
  logo: string;
  description: string;
  directorMessage: string;
  email: string;
  phoneNumber: number;
  vision: string;
  mission: string;
}

export interface CommunityResponse {
  community: Community;
}

export async function getCommunityData(): Promise<CommunityResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
  const response = await fetch(`${baseUrl}/api/community`);
  console.log('Response:', response);
  if (!response.ok) {
    throw new Error('Failed to fetch community data');
  }
  
  return response.json();
} 