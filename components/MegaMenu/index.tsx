import Link from "next/link";
import { ReactNode } from "react";

export type MegamenuProps = {
    groups: ({
        type: "Links"
        title: string,
        links: {
            name: string,
            href: string,
            subTitle:string,
            icon: ReactNode
        }[]
    } | {
        type: "Node",
        node: ReactNode
    })[]
}


function MegaMenu({ groups }: MegamenuProps) {
    return (
        <div className="shadow-lg dark:shadow-2xl rounded-lg dark:bg-slate-900">
            <div className="p-5 my-1">
                {groups.map((group, index) => {

                    if (group.type === 'Links') return (
                        <div key={index} className="p-2 ">
                            <div className="text-gray-500 text-sm">{group.title}</div>
                            <div className="w-96 flex flex-wrap  my-2">
                                {group.links.map((link, index) => (
                                    <div key={index} className="px-5 flex gap-2 w-1/2">
                                        {link.icon}
                                        <Link href={link.href} className="text-xl font-bold w-fit">
                                            {link.name}
                                            <div className="text-sm font-normal text-gray-300 dark:text-gray-200">{link.subTitle}</div>
                                            
                                            </Link>
                                    </div>))}
                            </div>
                        </div>
                    )
                    else return (<div key={index} className="">{group.node}</div>)
                })}
            </div>
        </div>

    );
}

export default MegaMenu;