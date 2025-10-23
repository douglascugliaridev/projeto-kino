'use client'
import Wrap from "./Wrap";
import Flex from "./Flex";
import Link from "next/link";
import { PopcornIcon } from "@phosphor-icons/react";

export default function Cabecalho() {
    return <Wrap className="bg-neutral-950">
        <header className="p-4 px-32">
            <Flex className="justify-between">
                <Link href="/" className={`font-bold px-4 py-2 bg-red-kino
                    flex gap-1 justify-center rounded-lg
                    `}>
                    <PopcornIcon size={20} />
                    Kino
                </Link>
                <Link className="font-bold px-4 hover:brightness-75"
                    href="https://www.themoviedb.org/" target="_blank">
                    The Movie DB
                </Link>
            </Flex>
        </header>
    </Wrap>
}