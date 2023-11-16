'use client'
import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from "react";



function ClientInput(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (<>{isClient? <input {...props} /> : <input defaultValue={""} className={props.className} />}</>);
}

export default ClientInput