'use client'
import CardFilmeDetalhado from "@/components/filmes/CardFilmeDetalhado";
import Elenco from "@/components/filmes/Elenco";
import SugestoesFilmes from "@/components/filmes/SugestoesFilmes";
import Titulo from "@/components/template/Titulo";
import Wrap from "@/components/template/Wrap";
import useMovieAPI from "@/hooks/useMovieAPI";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Filme() {
    const { id } = useParams();
    const [detalhesFilme, setDetalhesFilme] = useState<FilmeDetalhado | null>(null);
    const { getFilmeDetalhado } = useMovieAPI();

    useEffect(() => {
        getFilmeDetalhado(String(id)).then(setDetalhesFilme);
    }, [id]);

    return (
        <Wrap>
            {detalhesFilme && <CardFilmeDetalhado filme={detalhesFilme} />}
            {detalhesFilme?.atores && <Elenco elenco={detalhesFilme.atores} />}
            <SugestoesFilmes idFilme={String(id)} />
        </Wrap>
    )
}