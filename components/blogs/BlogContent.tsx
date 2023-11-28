'use client'

import { SyntheticEvent } from "react";

function BlogContent({ content }: { content: string }) {

 

    return (<>

        {<iframe sandbox="allow-scripts"  className="w-full h-fit overflow-y-scroll" src={content}></iframe>}
    </>);
}

export default BlogContent;