import { useEffect, useState } from "react";
import Container from "../template/Container";
import Titulo from "../template/Titulo";
import ListaDeFilmes from "./ListaDeFilmes";
import useMovieAPI from "@/hooks/useMovieAPI";

interface SugestoesFilmesProps {
    idFilme: string;
}

export default function SugestoesFilmes({ idFilme }: SugestoesFilmesProps) {

    const [filmesRecomentados, setFilmesRecomentados] = useState<Filme[]>([]);
    const { getFilmesRecomendados } = useMovieAPI();

    useEffect(() => {
        getFilmesRecomendados(idFilme).then(setFilmesRecomentados);
    }, [idFilme]);

    return (
        <Container className="my-16 bg-neutral-950 rounded-lg lg:pt-10">
            <ListaDeFilmes titulo="Recomendações" filmes={filmesRecomentados} />
        </Container>
    )
}