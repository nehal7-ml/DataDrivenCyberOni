'use client'
import { PaymentElement, AddressElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { LoadingCircle, LoadingDots } from "../shared/icons";
import Image from "next/image";
import { CheckCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { processSubscriptionRequest } from "./submit";
import Loading from "../Loading";

const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID as string
const customerId = process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_ID as string

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [procuct, setProcuct] = useState({
        price: 0,
        name: '',
        description: ''
    });

    const [subcription, setSubcription] = useState("");
    const searchParams = useSearchParams();

    async function handlePayment() {

        elements?.submit()
        const { paymentMethod } = await stripe?.createPaymentMethod({
            element: elements?.getElement(PaymentElement)!

        })!
        const subscription = await processSubscriptionRequest(priceId, customerId, paymentMethod?.id as string, subcription)
        if (subscription === 'trialing' || subscription === 'active') {
            setShowSuccess(true);
            setTimeout(() => {
                router.push('/')
            }, 2000)
        } else {
            setError(subscription as string)

        }
        setLoading(false);
    }

    useEffect(() => {
        const subscription = searchParams.get('subscription')
        if (subscription) setSubcription(subscription)

    }, [searchParams, stripe, subcription]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/stripe/client-secret', {
                method: 'POST',

                body: JSON.stringify({ id: customerId, priceId })
            })
            const { email, price, description, name } = await response.json();
            setEmail(email);
            setProcuct({ name, description, price })

        }
        fetchData()

    }, [])



    return (
      <>
        {loading && (
          <>
            <div className="fixed inset-0 left-0 top-0  z-50 mx-auto flex h-full items-center justify-center backdrop-blur-lg ">
              <Loading />
            </div>
          </>
        )}

        {error && (
          <>
            <div className="fixed inset-0 left-0 top-0  z-50 mx-auto flex h-full items-center justify-center backdrop-blur-lg ">
              <div className="container mx-auto flex flex-col items-center justify-center py-10">
                <XCircle className="text-rose-600" />
                <div>{error}</div>
              </div>
            </div>
          </>
        )}
        {!showSuccess ? (
          <>
            <div className="z-30 my-10 flex flex-col items-center justify-center  gap-5 lg:flex-row container mx-auto">
              <div className="z-10 self-start p-4 flex flex-col justify-center items-center gap-2 text-center lg:justify-start lg:items-start lg:text-left lg:w-1/2">
                <h1 className="mb-4 text-4xl font-bold text-gray-800 ">
                  Hi TheApartmentGuru, Please add a payment method
                </h1>
                <p className="text-center text-base text-gray-600 lg:text-left">
                  Your CyberOni service for Data Storage , Support , Web Hosting, which began on November 1st, will not
                  be charged until after the end of your 60-day free
                  trial, which is on December 31st.
                </p>

                {/* <h1 className="font-bold text-4xl">{90} days free</h1> */}
                <h3>
                  {(procuct.price / 100).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                  per month
                </h3>
                <h3>{procuct.description}</h3>
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  className="my-10 animate-bounce object-contain"
                  height={100}
                  width={100}
                />
              </div>
              <form
                action={() => {
                  setLoading(true);
                  handlePayment();
                }}
                className="w-fit rounded-lg bg-gray-50 p-3 px-6 shadow-lg "
              >
                <div className="max-h-[400px] min-h-[380px] w-fit overflow-y-auto p-2">
                  <div className="my-5 flex flex-col">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      className="cursor-not-allowed rounded-md bg-zinc-200 outline-none"
                      disabled
                      value={email}
                    />
                  </div>
                  {stripe ? (
                    <>
                      <PaymentElement
                        onLoadError={() => console.log("load error")}
                        options={{
                          wallets: {
                            applePay: "auto",
                            googlePay: "auto",
                          },
                          defaultValues: {
                            billingDetails: {
                              email: "theapparmentguru@yahoo.com",
                            },
                          },
                          layout: "accordion",
                        }}
                      />
                    </>
                  ) : (
                    <div className="flex h-96 w-96 items-center justify-center">
                      <LoadingDots />
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="container mx-auto my-5 rounded-lg bg-guru-blue p-3 text-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="my-24 flex h-full w-full flex-col items-center justify-center gap-5">
              <CheckCircle className="h-40 w-40 text-green-400" />
              <div className="text-3xl font-semibold">Subscription started</div>
            </div>
          </>
        )}
      </>
    );

};

export default CheckoutForm;