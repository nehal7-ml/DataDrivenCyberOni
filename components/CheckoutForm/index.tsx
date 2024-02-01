'use client'
import { PaymentElement, AddressElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { LoadingCircle, LoadingDots } from "../shared/icons";
import Image from "next/image";
import { CheckCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { processSubscriptionRequest } from "./submit";
import Loading from "../Loading";
import { PaymentIntent, PaymentIntentResult, StripeElements } from "@stripe/stripe-js";


const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
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

    const { error } = await stripe?.confirmPayment({
      elements: elements as StripeElements,

      confirmParams: {
        return_url: `${window.origin}/orders`,
      },
    }) as PaymentIntentResult;

    setLoading(false);
  }



  useEffect(() => {
    async function fetchData() {
      const { paymentIntent, error } = await stripe?.retrievePaymentIntent(clientSecret) as PaymentIntentResult

      if (!error) {
        setProcuct({
          description: paymentIntent?.description as string,
          price: paymentIntent?.amount ?? 0,
          name: "Service Checkout"
        })
      }

    }
    if (stripe) {
      fetchData()

    }

  }, [clientSecret, stripe])



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
          <div className="z-30 my-10 flex flex-col items-center justify-center  gap-5 lg:flex-row container mx-auto dark:bg-slate-800">
            <div className="z-10 self-start p-4 flex flex-col justify-center items-center gap-2 text-center lg:justify-start lg:items-start lg:text-left lg:w-1/2">
              <h1 className="mb-4 text-4xl font-bold text-gray-800 ">
              </h1>
              <p className="text-center text-base text-gray-600 lg:text-left">

              </p>

              {/* <h1 className="font-bold text-4xl">{90} days free</h1> */}
              <h3>
                {(procuct.price / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}{" "}
              </h3>
              <h3>{procuct.description}</h3>
              <Image
                src={"/images/logo.png"}
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
              className="w-fit rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white p-3 px-6 shadow-lg ">
              <div className="max-h-[400px] min-h-[380px] w-fit overflow-y-auto p-2">
                {stripe ? (
                  <>
                    <PaymentElement
                      className="bg-gray-50 dark:bg-gray-800 dark:text-white "
                      onLoadError={() => console.log("load error")}
                      options={{
                        wallets: {
                          applePay: "auto",
                          googlePay: "auto",
                        },
                        layout: "accordion",
                        fields: {
                          billingDetails: {
                            address: {
                              city: "auto",
                              line1: "auto",
                              postalCode: "auto",
                              state: "auto",
                              country: "auto",
                            },
                            email: 'auto',
                            phone: 'auto',
                            name: 'auto',
                          },

                        },

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
                className="container mx-auto my-5 rounded-lg bg-guru-blue p-3 text-white bg-blue-600"
              >
                Pay
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