import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "PlayVerse Premium",
            },
            unit_amount: 100,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],

      mode: "subscription",

      success_url:
        "http://localhost:3000/dashboard?success=true",

      cancel_url:
        "http://localhost:3000/dashboard?canceled=true",
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Stripe checkout failed" },
      { status: 500 }
    );
  }
}