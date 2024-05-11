"use client";
import useTheme from "@/lib/hooks/use-theme";
import { DetailedHTMLProps, useEffect, useState } from "react";

function FloatingLabelInput(
  props: DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    labelBackground?: {
      light: string;
      dark: string;
    };
    labelTextColor?: {
      light: string;
      dark: string;
    };
    inputTextColor?: {
      light: string;
      dark: string;
    }
  },
) {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const labelClass = `dark:bg-inherit dark:text-gray-100 dark:peer-placeholder-shown:bg-inherit absolute left-3 top-0 mb-2 block -translate-y-3 placeholder-shown:font-semibold rounded-full bg-white px-1 text-sm    text-gray-700  transition-transform peer-placeholder-shown:translate-y-3 peer-placeholder-shown:bg-white peer-disabled:bg-gray-300       peer-focus:-translate-y-3 peer-focus:text-blue-500 peer-focus:backdrop-blur-lg dark:backdrop-blur-sm`;
  const inputClass = `disabled:bg-gray-300 disabled:cursor-not-allowed  peer w-full appearance-none rounded-xl border bg-transparent px-4 py-4 leading-tight text-gray-700 shadow-lg   focus:outline-blue-500 /dark:border-gray-200 /dark:text-gray-100`;

  return (
    <>
      <div className={props.className}>
        <div className="relative my-4">
          {isClient ? (
            <input
              key="client"
              {...props}
              placeholder=""
              className={inputClass}
                style={
                  theme === "dark"?
                {color: props.inputTextColor?.dark} :
                {color: props.inputTextColor?.light}
                }
            ></input>
          ) : (
            <input
              key="server"
              value={input}
              onChange={() => {}}
              className={inputClass}

            />
          )}

          <label
            className={labelClass}
            htmlFor={props.name}
            style={
              theme === "dark"
                ? {
                    background: props.labelBackground?.dark,
                    color: props.labelTextColor?.dark,
                  }
                : {
                    background: props.labelBackground?.light,
                    color: props.labelTextColor?.light,
                  }
            }
          >
            {props.placeholder}
          </label>
        </div>
      </div>
    </>
  );
}

export default FloatingLabelInput;
