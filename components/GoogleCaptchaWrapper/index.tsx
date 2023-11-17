'use client'

import { ReactNode } from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

function GoogleCaptchaWrapper({children}: {children: ReactNode| ReactNode[]}) {
    return (  <>
          <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}>
            {children}
          </ReCaptchaProvider>    
    </>);
}

export default GoogleCaptchaWrapper;