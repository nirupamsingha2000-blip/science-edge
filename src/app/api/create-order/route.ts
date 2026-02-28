import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, receipt, notes } = await request.json();

    const auth = Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64');

    const response = await axios.post(
      'https://api.razorpay.com/v1/orders',
      {
        amount,
        currency,
        receipt,
        notes,
      },
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Order creation error:', error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
