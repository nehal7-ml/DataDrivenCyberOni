'use client'
import { Check, Info, X } from "lucide-react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useRef } from 'react';



export type NotificationType = 'success' | 'fail' | 'neutral'
export type NotificationProps = {
  message: string;
  type: NotificationType;
  visible: boolean
}
function useNavigate() {
  const router = useRouter()
  const routerRef = useRef(router)

  routerRef.current = router

  const [{ push, replace }] = useState({
    push: (path: string) => routerRef.current.push(path),
    replace: (path: string) => routerRef.current.replace(path)
  })

  return { push, replace }
}

export function useNotify() {
  const router = useRouter()
  const routerRef = useRef(router)

  routerRef.current = router

  const [{ push, replace }] = useState({
    push: (path: string) => routerRef.current.push(path),
    replace: (path: string) => routerRef.current.replace(path)
  })
  return (message: string,
    type: NotificationType, option?: {
      autoClose: boolean
    }) => replace(`?notify=true&notifyType=${type}&message=${message}&autoClose=${option?.autoClose}`)
}

const Notification = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [message, setMessage] = useState(searchParams.get('message') as string);
  // console.log(searchParams.get('notifyType'));
  const [type, setType] = useState(searchParams.get('notifyType') || "success");
  const [autoClose, setAutoClose] = useState(searchParams.get('autoClose') === 'false' ? false : true);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    setMessage(searchParams.get('message') as string)
    setNotify(searchParams.get('notify') === 'true' ? true : false)
    setAutoClose(searchParams.get('autoClose') === 'false' ? false : true)
    setType(searchParams.get('notifyType') || "success")
  }, [searchParams]);


  useEffect(() => {
    if (notify && autoClose) {

      if (autoClose) {
        setTimeout(() => {
          router.replace('?')
          setNotify(false)
        }, 3000)
      }


    }
  }, [notify, router, autoClose]);


  function close() {
    router.replace('?')
  }

  return <div className={`fixed flex bottom-10 right-10 p-4 rounded ${type === 'success' ? 'bg-green-500 text-white' : type === 'fail' ? 'bg-red-500 text-white' : 'bg-red-700 text-zinc-900'} ${notify ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300  font-semibold z-[10000]`}>
    {type === 'success' ? (
      <Check className="mr-2" />
    ) :
      type === 'fail' ?
        (
          <X className="mr-2" />
        ) :
        <Info className="mr-2" />

    }
    {message}
    {!autoClose && <button onClick={close}>
      <X className="mr-2" />
    </button>}
  </div>
};



export default Notification;
