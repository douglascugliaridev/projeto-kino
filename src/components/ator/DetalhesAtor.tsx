import Titulo from "../template/Titulo";
import Flex from "../template/Flex";
import Descricao from "../template/Descricao";
import { XCircleIcon } from "@phosphor-icons/react";

interface DetalhesAtorProps {
    ator: AtorDetalhado;
}

function SemBiografia() {
    return (
        <Flex className="text-zinc-600">
            <XCircleIcon size={70} />
            <Titulo texto="Biografia não disponível" pequeno className="w-fit text-center m-0 p-0" />
        </Flex>

    )
}


export default function DetalhesAtor({ ator }: DetalhesAtorProps) {
    return (
        <Flex col className={`bg-zinc-900 rounded-lg w-full justify-between items-center pt-16 md:pt-20 lg:pt-26`}>
            <Titulo pequeno texto={ator.nome} alinhar="center" />
            <Flex className="gap-5 flex-wrap font-semibold">
                {ator.genero && (<span>Gênero: {ator.genero}</span>)}
                {ator.dataDeNascimento && (<span>Data de Nascimento: {new Intl.DateTimeFormat("pt-BR").format(ator.dataDeNascimento)}</span>)}
                {ator.localDeNascimento && (<span>Local de Nascimento: {ator.localDeNascimento}</span>)}
            </Flex>
            <Flex col className="p-3 flex-1">
                {ator.biografia ? (
                    <>
                        <Titulo pequeno texto="Biografia" alinhar="center" className="mb-0" />
                        <Descricao texto={ator.biografia} className="text-justify mx-10 mb-5" />
                    </>
                ) : (
                    <SemBiografia />
                )}
            </Flex>
        </Flex>
    )
}
