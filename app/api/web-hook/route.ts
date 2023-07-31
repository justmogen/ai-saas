import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

import prismadb from '@/lib/prismadb';
import { stripe } from '@/lib/stripe';

export async function POST(req:Request) {
    const body = await req.text();
    const signature = headers().get('Stripe-Signature') as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )

    }   catch (error:any) {
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
    }
}

const session = event.data.object as Stripe.Checkout.Session;

if (event.type === 'checkout.session.completed') {

}