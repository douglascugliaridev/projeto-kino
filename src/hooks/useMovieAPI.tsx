export default function useMovieAPI() {

    const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE;
    const BG_FILME_URL = process.env.NEXT_PUBLIC_BG_FILME_URL;
    const BG_TOKEN = process.env.NEXT_PUBLIC_TOKEN_DE_LEITURA;

    async function get(fragmentoURL: string, params?: string) {
        const fragmento = fragmentoURL.startsWith('/') ? fragmentoURL.substring(1) : fragmentoURL;
        try {
            const resposta = await fetch(`${URL_BASE}/${fragmento}?language=pt-BR&page=1${params ? `&${params}` : ""}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${BG_TOKEN}`,
                },
            }
            );

            const json = await resposta.json();

            return {
                json, status: resposta.status
            }

        } catch (error) {
            console.error("Erro ao buscar dados da API de filmes:", error);
            throw error;
        }
    }

    function formartarImagemURL(url: string) {
        if (!url) return "";
        return `${BG_FILME_URL}${url}`;
    }

    async function getUltimosFilmes(): Promise<Filme[]> {
        const { json, status } = await get('/movie/now_playing');
        if (status !== 200) return [];
        const resultados = Array.isArray(json?.results) ? json.results : [];
        return resultados.map((filme: any) => ({
            id: filme.id,
            titulo: filme.title,
            descricao: filme.overview,
            dataDeLancamento: new Date(filme.release_date),
            nota: filme.vote_average,
            linkImagemFundo: formartarImagemURL(filme.backdrop_path),
            linkImagemPoster: formartarImagemURL(filme.poster_path),
        }));
    }

    async function getGenerosDoFilme(filmeId: string) {
        const { json } = await get(`/movie/${filmeId}`);
        return json.genres.map((genero: any) => {
            return {
                id: genero.id,
                nome: genero.name
            }
        });
    }

    async function getFilmeDetalhado(idFilme: string): Promise<FilmeDetalhado> {
        const { json } = await get(`/movie/${idFilme}`, 'append_to_response=credits');
        return {
            id: json.id,
            titulo: json.title,
            tituloOriginal: json.original_title,
            descricao: json.overview,
            dataDeLancamento: new Date(json.release_date),
            nota: json.vote_average,
            linkImagemFundo: formartarImagemURL(json.backdrop_path),
            linkImagemPoster: formartarImagemURL(json.poster_path),
            generos: json.genres.map((genero: any) => ({
                id: genero.id,
                nome: genero.name
            })),
            atores: json.credits.cast.slice(0, 10).map((ator: any) => ({
                id: ator.id,
                nome: ator.name,
                personagem: ator.character,
                imagemPerfil: formartarImagemURL(ator.profile_path)
            })),
            duracao: json.runtime,
        }
    }

    async function getFilmesRecomendados(idFilme: string): Promise<Filme[]> {
        const { json, status } = await get(`/movie/${idFilme}/recommendations`);
        if (status !== 200) return [];
        const resultados = Array.isArray(json?.results) ? json.results : [];
        return resultados.slice(0, 9).map((filme: any) => ({
            id: filme.id,
            titulo: filme.title,
            descricao: filme.overview,
            dataDeLancamento: new Date(filme.release_date),
            nota: filme.vote_average,
            linkImagemFundo: formartarImagemURL(filme.backdrop_path),
            linkImagemPoster: formartarImagemURL(filme.poster_path),
        }));
    }

    async function getAtorDetalhado(idAtor: string): Promise<AtorDetalhado> {
        const { json } = await get(`/person/${idAtor}`)
        return {
            id: json.id,
            nome: json.name,
            dataDeNascimento: new Date(json.birthday),
            biografia: json.biography,
            imagemPerfil: formartarImagemURL(json.profile_path),
            genero: json.gender === 1 ? "Feminino" : "Masculino",
            localDeNascimento: json.place_of_birth
        }
    }

    async function getImagensAtor(idAtor: string) {
        const { json } = await get(`/person/${idAtor}/images`);
        return json.profiles.map((imagem: any) => formartarImagemURL(imagem.file_path));
    }

    async function getFilmesDoAtor(idAtor: string): Promise<Filme[]> {
        const { json, status } = await get(`/person/${idAtor}/movie_credits`);
        if (status !== 200) return [];
        const resultados = Array.isArray(json?.cast) ? json.cast : [];
        return resultados.slice(0, 9).map((filme: any) => ({
            id: filme.id,
            titulo: filme.title,
            descricao: filme.overview,
            dataDeLancamento: new Date(filme.release_date),
            nota: filme.vote_average,
            linkImagemFundo: formartarImagemURL(filme.backdrop_path),
            linkImagemPoster: formartarImagemURL(filme.poster_path),
        }));
    }

    return {
        getUltimosFilmes,
        getGenerosDoFilme,
        getFilmeDetalhado,
        getFilmesRecomendados,
        getAtorDetalhado,
        getImagensAtor,
        getFilmesDoAtor
    }
}