import mergeClasses from "@/utils/mergeClasses";
import React from "react";

interface BotaoProps {
    texto: string;
    icone?: React.JSX.Element;
    className?: string;
}

export default function Botao({ texto, icone, className }: BotaoProps) {
    return (
        <button className={mergeClasses(
            `flex gap-1 items-center justify-center 
             px-3 py-2 font-semibold rounded-lg 
             hover:brightness-75 hover:transition-all 
             bg-red-kino`,
            className
        )}>
            {texto}
            {icone}
        </button>
    );
}