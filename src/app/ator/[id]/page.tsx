import Album from "@/components/ator/Album";
import DetalhesAtor from "@/components/ator/DetalhesAtor";
import ImagemDePerfil from "@/components/ator/ImagemDePerfil";
import OutrosFilmes from "@/components/ator/OutrosFilmes";
import Container from "@/components/template/Container";
import Wrap from "@/components/template/Wrap";
import useMovieAPI from "@/hooks/useMovieAPI";

export default async function Ator(props: any) {
    const id = props.params.id;
    const { getAtorDetalhado } = useMovieAPI();
    const atorDetalhado = await getAtorDetalhado(id);


    return (
        <Wrap>
            <Container bigPadding className="mt-32 md:mt-44 min-h-96 w-full">
                <ImagemDePerfil url={atorDetalhado?.imagemPerfil} imgAlt={`Imagem de ${atorDetalhado?.nome}`} />
                <DetalhesAtor ator={atorDetalhado} />
            </Container>
            <Album idAtor={atorDetalhado.id} />
            <OutrosFilmes idAtor={atorDetalhado.id} />
        </Wrap >
    )
}