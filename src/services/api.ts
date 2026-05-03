import { NextResponse } from 'next/server';

const API_URL = 'https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise';
const API_KEY = '8865cb695d00c83c542790757b5e6ad08d47c3909cc652cc';

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch" }, { status: response.status });
    }

    return NextResponse.json(await response.json());
  } catch (error) {
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}