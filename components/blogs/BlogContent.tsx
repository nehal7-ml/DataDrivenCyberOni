'use client'

import { useEffect, useRef, useState } from "react";

import { getCookie } from 'cookies-next';
import TextLoaders from "../loaders/TextLoaders";
import { getRandomFromArray } from "@/lib/utils";

function BlogContent({ content, theme }: { content: string, theme: 'dark' | 'light' }) {
    const getBlobURL = (code: string, type: string) => {
        return "data:text/html;charset=utf-8," + encodeURI(code)
    }

    const [loaded, setLoaded] = useState(false);

    const cookie = getCookie('theme')
    const [injectScript, setInjectScript] = useState('')
    const [resizeScript, setResizeScript] = useState('')

    const iframe = useRef<HTMLIFrameElement>(null)


    const darkTheme = `
    <script id="themeScript" >
    const themeStyles = document.createElement('style');
    themeStyles.textContent=\`
    body {
        font-family: "Inter", sans-serif;
        color: white;
      }

    \`
    document.head.appendChild(themeStyles);

    </script>
    `

    const lightTheme = `
    <script id="themeScript" >
    const themeStyles = document.createElement('style');
    themeStyles.textContent=\`
    body {
        font-family: "Inter", sans-serif;
        color: black;
      }
    \`
    document.head.appendChild(themeStyles);

    </script>
    `


    useEffect(() => {
        console.log(cookie);
        if (cookie === 'dark') {
            setInjectScript(darkTheme);
        } else {
            setInjectScript(lightTheme);

        }
    }, [cookie, darkTheme, lightTheme]);


    useEffect(() => {
        const script = `<script id="resizeScript" >

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
    }
    \`
    
    document.head.appendChild(styles);


    window.document.getElementsByTagName('html')[0].addEventListener('resize',()=> {
        console.log("html resizeing");
        window.parent.postMessage({ type:"resize",size: window.document.getElementsByTagName('html')[0].scrollHeight}, "${window.origin}");
    })
    window.parent.postMessage({ type:"resize", size: window.document.getElementsByTagName('html')[0].scrollHeight}, "${window.origin}");

    
    const links = document.getElementsByTagName('a');
      for (let link of links) {
        link.target= "_top"
      }

    </script>`
        setResizeScript(script)

        if (theme === 'dark') setInjectScript(darkTheme)

        window.addEventListener("message", (event) => {

            console.log("loaded window", event.data);
            if (iframe.current && event.data.type === "resize") {
                iframe.current.style.height = (event.data.size + 100).toString() + "px";
                setLoaded(true)

            }
        });

    }, [darkTheme, theme]);



    // console.log(content);
    return (<>
        {<iframe ref={iframe} className={`w-full h-fit overflow-y-auto z-50  ${loaded ? 'opacity-100 transition-opacity duration-700 ease-in-out' : 'opacity-0'}`} src={getBlobURL(content + resizeScript + injectScript, "text/html;")}></iframe>}
        {!loaded && <div className="w-fu h-full z-50  flex flex-wrap ">
            {new Array(30).fill(1).map((value, index) => {

                return (
                    <div key={index} className={`${getRandomFromArray(['w-64', 'w-80', 'w-96', 'w-72', 'w-52', 'w-full'])}`}>
                        <TextLoaders></TextLoaders>
                    </div>
                )
            })}
        </div>}
    </>);
}

export default BlogContent;