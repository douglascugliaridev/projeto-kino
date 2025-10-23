import { useEffect, useState } from "react";
import Titulo from "../template/Titulo";
import Wrap from "../template/Wrap";
import useMovieAPI from "@/hooks/useMovieAPI";
import { Carrossel } from "../template/Carrossel";
import Image from "next/image";
import Flex from "../template/Flex";
import Container from "../template/Container";

interface AlbumProps {
    idAtor: string;
}

export default function Album({ idAtor }: AlbumProps) {
    const [imagens, setImagens] = useState<string[][]>([]);
    const { getImagensAtor } = useMovieAPI();

    useEffect(() => {
        getImagensAtor(idAtor).then((imagens) => {
            const imagensPorSlide = 3;
            let imagensRestantes = imagens;

            const resultado = [];

            while (imagensRestantes.length > 0) {
                resultado.push(imagensRestantes.slice(0, imagensPorSlide));
            }
            setImagens(resultado);
        });
    }, []);

    if (imagens.length <= 0) {
        return;
    }

    return (
        <Wrap className="">
            <Titulo pequeno texto="Fotos do(a) Artista" className="w-full" alinhar="center" />
            <Carrossel slideAutomatico>
                {imagens.map((grupo: string[]) => {
                    return (
                        <Container>
                            <Flex className={`justify-between w-full`}>
                                {grupo.map((linkImage) => {
                                    return (
                                        <Wrap key={linkImage} className={`h-52 md:h-96 lg:min-h-[600px] relative overflow-hidden rounded-lg`}>
                                            <Image
                                                src={linkImage}
                                                alt="Foto do artista"
                                                fill
                                                className="object-contain"
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