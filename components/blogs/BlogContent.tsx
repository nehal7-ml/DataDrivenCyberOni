'use client'

import { useEffect, useRef, useState } from "react";

import { getCookie, } from 'cookies-next';
import TextLoaders from "../loaders/TextLoaders";
import { generateRandomArray, getRandomFromArray } from "@/lib/utils";
import sanitize from "xss";
import parser from 'html-react-parser'

function BlogContent({ content, theme , href}: { content: string, theme: 'dark' | 'light', href: string}) {
    const getBlobURL = (code: string, type: string) => {
        return "data:text/html;charset=utf-8," + encodeURI(code)
    }

    const [loaded, setLoaded] = useState(true);
    const body = useRef<HTMLBodyElement>(null);
    let cookie = useRef(getCookie('theme'));
    const [injectScript, setInjectScript] = useState('')

    const [classList, setClassList] = useState<DOMTokenList>();
    const iframe = useRef<HTMLIFrameElement>(null)
    const resizeScript = `<script id="resizeScript" >
    const body= document.querySelector('body')
    window.document.getElementsByTagName('html')[0].addEventListener('resize',()=> {
        console.log("html resizeing");
        window.parent.postMessage({ type:"resize",size: window.document.getElementsByTagName('html')[0].scrollHeight});
    })
    window.parent.postMessage({ type:"resize", size: window.document.getElementsByTagName('html')[0].scrollHeight});

    
    const links = document.getElementsByTagName('a');
      for (let link of links) {
        link.target= "_top"
      }

      window.addEventListener('message', (event)=> {

        if(event.data.type === 'theme' && event.data.theme==='dark') {
            body.classList.add('dark');
        
        } 
        if(event.data.type === 'theme' && event.data.theme==='light') {
            body.classList.remove('dark');
        
        } 

      })

      ${theme=='dark'? ' body.classList.add(\'dark\');': ''}

    </script>`
    const fontScript = ` 
    <script id="FontScript" >
        const fonts = document.createElement('link');
        fonts.rel="stylesheet"
        fonts.href="https://fonts.googleapis.com/css?family=Inter"
        document.head.appendChild(fonts);
        const styles = document.createElement('style');
        styles.textContent=\`
        body {
            font-family: "Inter", sans-serif;
        }
        a {
            color: pink;
        }\`
        document.head.appendChild(styles);
    </script>
`


    const themeScript = `

    <script id="themeScript" >
    const themeStyles = document.createElement('style');
    themeStyles.textContent=\`
    body {
        font-family: "Inter", sans-serif;
        color: black;
      }
      body.dark {
        font-family: "Inter", sans-serif;
        color: white;
      }
    \`
    document.head.appendChild(themeStyles);

    </script>
    `
    const container = `
    
    <!DOCTYPE html>
        <html>
        <head>
        <base href="${typeof window!=='undefined'? window.location.href: href}">
        <link type="text/css" rel="stylesheet" href="https://cdn.tiny.cloud/1/w5nc9aqbzcv7ao6jscyo80kncaq1vbpp63v2wqazfsbjkowp/tinymce/6.8.2-45/skins/ui/oxide/content.min.css" crossorigin="anonymous">
        <link type="text/css" rel="stylesheet" href="https://cdn.tiny.cloud/1/w5nc9aqbzcv7ao6jscyo80kncaq1vbpp63v2wqazfsbjkowp/tinymce/6.8.2-45/skins/content/writer/content.min.css" crossorigin="anonymous">
        ${themeScript}
        ${fontScript}
        </head>
        <body id="tinymce" class="mce-content-body ">
        ${content}
        </body>
        ${resizeScript}

        </html>

    `

    useEffect(() => {
        console.log(cookie);
        cookie.current = getCookie('theme')
        if (cookie.current === 'dark') {
        } else {

        }
    }, [cookie,classList]);

    useEffect(() => {
        
        window.addEventListener("message", (event) => {

           // console.log("loaded window", event.data);
            if (iframe.current && event.data.type === "resize") {
                iframe.current.style.height = (event.data.size).toString() + "px";
                setLoaded(true)

            }
        });

    }, []);

    useEffect(() => {
        window.addEventListener('theme', (event: CustomEventInit) => {
            console.log(event.detail);
            if (event.detail.theme === 'dark') {
                // console.log("sending message to dark theme");
                iframe.current?.contentWindow?.postMessage({theme:'dark', type:'theme'},window.origin)
            }
            else {
                iframe.current?.contentWindow?.postMessage({theme:'light', type:'theme'}, window.origin)

            }
        });
    }, []);
    // console.log(content);
    return (<>
        {<iframe ref={iframe} className={`w-full h-fit overflow-y-auto z-50  ${loaded ? 'opacity-100 transition-opacity duration-700 ease-in-out' : 'opacity-0'}`} sandbox="allow-scripts allow-same-origin" srcDoc={container}></iframe>}
        {!loaded && <div className="w-fu h-full z-50  flex flex-wrap ">
            {generateRandomArray(['w-64', 'w-80', 'w-96', 'w-72', 'w-52', 'w-full'], 30, content.slice(0, 30)).map((value, index) => {

                return (
                    <div key={index} className={`${value}`}>
                        <TextLoaders></TextLoaders>
                    </div>
                )
            })}
        </div>}
    </>);
}

export default BlogContent;