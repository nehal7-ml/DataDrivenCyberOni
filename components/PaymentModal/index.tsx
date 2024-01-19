'use client '
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "../CheckoutForm";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

function PaymentModal() {

    return (
        <div className="flex items-center justify-center  text-black ">

            <Elements stripe={stripePromise} options={{
                mode: 'setup',
                currency:'usd',
                paymentMethodCreation: 'manual'
                
            }}>
                <CheckoutForm />
            </Elements>
        </div>


    );
}

export default PaymentModal;