interface Filme {
    id: string;
    titulo: string;
    descricao: string;
    linkImagemFundo: string;
    linkImagemPoster: string;
    nota: number;
    dataDeLancamento: Date;
}

interface FilmeDetalhado extends Filme {
    tituloOriginal: string;
    generos: Genero[];
    atores: Ator[];
    duracao: number;
}

type Ator = {
    id: string;
    nome: string;
    personagem: string;
    imagemPerfil: string;
}

type Genero = {
    id: string;
    nome: string;
}

type AtorDetalhado = {
    id: string;
    nome: string;
    dataDeNascimento: Date;
    biografia: string;
    imagemPerfil: string;
    genero: string;
    localDeNascimento: string;
}