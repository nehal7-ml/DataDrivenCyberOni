'use client'

import { SyntheticEvent, useEffect, useRef, useState } from "react";


function BlogContent({ content }: { content: string }) {
    const getBlobURL = (code: string, type: string) => {
        return "data:text/html;charset=utf-8," + encodeURI(code)
    }

    const [resizeScript, setResizeScript] = useState('')
    const iframe = useRef<HTMLIFrameElement>(null)
    function resizeIframe() {

    }

    useEffect(() => {
        setResizeScript(`<script id="resizeScript" >

        const fonts = document.createElement('link');
        fonts.rel="stylesheet"
        fonts.href="https://fonts.googleapis.com/css?family=Inter"
        document.head.appendChild(fonts);
        const styles = document.createElement('style');
        styles.textContent=\`
        body {
            font-family: "Inter", sans-serif;
          }
        \`
        
        document.head.appendChild(styles);


        window.document.getElementsByTagName('html')[0].addEventListener('resize',()=> {
            console.log("html resizeing");
            window.parent.postMessage({ type:"resize",size: window.document.getElementsByTagName('html')[0].scrollHeight}, "${window.origin}");
        })
        window.parent.postMessage({ type:"resize", size: window.document.getElementsByTagName('html')[0].scrollHeight}, "${window.origin}");



        </script>`)

        window.addEventListener("message", (event) => {

            console.log("loaded window", event.data);
            if (iframe.current && event.data.type === "resize") iframe.current.style.height = (event.data.size+100).toString() + "px";
        });

    }, []);



    // console.log(content);
    return (<>
        {<iframe ref={iframe} onLoad={resizeIframe} className="w-full h-fit overflow-y-auto z-50" src={getBlobURL(content + resizeScript, "text/html;")}></iframe>}
    </>);
}

export default BlogContent;