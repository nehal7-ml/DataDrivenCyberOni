import { ReactNode } from "react";

export type MegamenuProps = {
    groups: {
        title: string,
        links: {
            name: string,
            href: string,
            icon: ReactNode
        }
    }[]
}


function MegaMenu() {
    return (
        <div className="shadow-lg dark:shadow-2xl rounded-lg ">
            <div></div>
            <div></div>
        </div>

    );
}

export default MegaMenu;