'use client'
import { CartElement, Elements } from '@stripe/react-stripe-js';
import { getCookie } from "cookies-next";

import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "../CheckoutForm";
import useTheme from "@/lib/hooks/use-theme";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

function PaymentModal({ clientSecret, cartId }: { clientSecret: string, cartId: string }) {
    const { theme } = useTheme();
    return (
        <div className="flex items-center justify-center  text-black ">

            <Elements stripe={stripePromise} options={{
                clientSecret: clientSecret,
                appearance: {
                    theme: theme === 'dark' ? 'night' : 'stripe',
                    labels: "above",
                    variables: {

                    }
                }

            }}>
                <CheckoutForm cartId={cartId} clientSecret={clientSecret} />
            </Elements>
        </div>


    );
}

export default PaymentModal;