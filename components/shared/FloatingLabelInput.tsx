'use client'
import { DetailedHTMLProps } from "react";

function FloatingLabelInput({ props }: { props: DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> }) {
    return (<>

        <div className={props.className}>
            <div className="relative">
                <label htmlFor={props.name}>
                    {props.name}
                </label>
                <input className="" {...props}></input>
            </div>
        </div>

    </>);
}

export default FloatingLabelInput