import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://communn.io/api/v1/communities/677e1c869f13316e61af6a6e/home');
    
    if (!response.ok) {
      throw new Error('Failed to fetch community data');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch community data' },
      { status: 500 }
    );
  }
} 