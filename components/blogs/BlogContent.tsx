'use client'

import { useEffect, useRef, useState } from "react";

import { getCookie } from 'cookies-next';

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

    }, []);



    // console.log(content);
    return (<>
        {<iframe ref={iframe} className={`w-full h-fit overflow-y-auto z-50  ${loaded ? 'opacity-100' : 'opacity-0'}`} src={getBlobURL(content + resizeScript + injectScript, "text/html;")}></iframe>}
    </>);
}

export default BlogContent;