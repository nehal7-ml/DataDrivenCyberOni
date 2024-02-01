'use client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "../CheckoutForm";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

function PaymentModal({clientSecret, cartId}: {clientSecret: string, cartId: string}) {
    
    return (
        <div className="flex items-center justify-center  text-black ">

            <Elements stripe={stripePromise} options={{
                clientSecret: clientSecret,
                
            }}>
                <CheckoutForm cartId={cartId} clientSecret={clientSecret} />
            </Elements>
        </div>


    );
}

export default PaymentModal;