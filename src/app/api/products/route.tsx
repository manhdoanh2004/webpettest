// app/api/mockapi/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://67cd6ddbdd7651e464ee5912.mockapi.io/petlist/product' // Thay thế bằng URL API của bạn
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error fetching data from MockAPI:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}