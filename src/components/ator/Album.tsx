import { useEffect, useState } from "react";
import Titulo from "../template/Titulo";
import Wrap from "../template/Wrap";
import useMovieAPI from "@/hooks/useMovieAPI";
import { Carrossel } from "../template/Carrossel";
import Image from "next/image";
import Flex from "../template/Flex";
import Container from "../template/Container";
import { image } from "framer-motion/client";

interface AlbumProps {
    idAtor: string;
}

export default async function Album({ idAtor }: AlbumProps) {
    const { getImagensAtor } = useMovieAPI();
    const imagensResposta = await getImagensAtor(idAtor);
    const imagensPorSlide = 3;
    let imagensRestantes = imagensResposta;
    const imagens = [];
    while (imagensRestantes.length > 0) {
        imagens.push(imagensRestantes.splice(0, imagensPorSlide));
    }

    if (imagens.length <= imagensPorSlide) {
        return
    }


    return (
        <Wrap className="">
            <Titulo pequeno texto="Fotos do(a) Artista" className="w-full" alinhar="center" />
            <Carrossel>
                {imagens.map((grupo: string[]) => {
                    return (
                        <Container>
                            <Flex className={`justify-between w-full`}>
                                {grupo.map((linkImage) => {
                                    return (
                                        <Wrap key={linkImage} className={`h-36 sm:h-52 md:h-96 lg:min-h-[600px] relative overflow-hidden rounded-lg`}>
                                            <Image
                                                src={linkImage}
                                                alt="Foto do artista"
                                                fill
                                                className="object-contain object-cover"
                                                sizes="40vw"
                                            />
                                        </Wrap>
                                    )
                                })}
                            </Flex>
                        </Container>
                    )
                })}
            </Carrossel>
        </Wrap>
    )
}