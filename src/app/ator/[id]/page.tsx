'use client';

import Album from "@/components/ator/Album";
import DetalhesAtor from "@/components/ator/DetalhesAtor";
import ImagemDePerfil from "@/components/ator/ImagemDePerfil";
import Container from "@/components/template/Container";
import Wrap from "@/components/template/Wrap";
import useMovieAPI from "@/hooks/useMovieAPI";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Ator() {
    const [atorDetalhado, setAtorDetalhado] = useState<AtorDetalhado | null>(null);
    const { id } = useParams();
    const { getAtorDetalhado } = useMovieAPI();

    useEffect(() => {
        getAtorDetalhado(String(id)).then(setAtorDetalhado)
    }, []);

    return (
        <Wrap>
            {atorDetalhado &&
                <Container bigPadding className="mt-32 md:mt-44 min-h-96 w-full">
                    <ImagemDePerfil url={atorDetalhado?.imagemPerfil} imgAlt={`Imagem de ${atorDetalhado?.nome}`} />
                    <DetalhesAtor ator={atorDetalhado} />
                </Container>}
            {atorDetalhado && <Album idAtor={atorDetalhado.id} />}
        </Wrap >
    )
}