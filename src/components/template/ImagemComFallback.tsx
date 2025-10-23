'use client'
import mergeClasses from "@/utils/mergeClasses";
import { useEffect, useState } from "react";
import Flex from "./Flex";
import Image from "next/image";


interface ImagemComFallbackProps {
    url: string;
    imgAlt?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function ImagemComFallback({ url, imgAlt, className, children }: ImagemComFallbackProps) {
    const [imagemPadrao, setImagemPadrao] = useState(false);

    useEffect(() => {
        fetch(url).then((res) => setImagemPadrao(!res.ok))
    }, [])

    if (imagemPadrao || !url) {
        return <Flex className={mergeClasses("w-full h-full absolute -z-30", className)}>{children}</Flex>
    }

    return <Image fill alt={imgAlt} src={url} className={mergeClasses("object-cover", className)} sizes="80vw" />

}