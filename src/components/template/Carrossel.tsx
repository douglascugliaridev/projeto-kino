"use client"
import { Children, cloneElement, useEffect, useRef, useState } from "react";
import Container from "./Container";
import Wrap from "./Wrap";
import Flex from "./Flex";
import mergeClasses from "@/utils/mergeClasses";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";


interface CarrosselProps {
    children: JSX.Element[];
    slideAutomatico?: boolean;
}

function BotaoLateral(props: {
    esquerda?: boolean, direita?: boolean, children: React.ReactNode, onClick: () => void,
    onMouseEnter: () => void, onMouseLeave: () => void
}) {
    return (
        <button onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className={mergeClasses(`
            group absolute top-0 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none 
         `, { "left-0": props.esquerda, "right-0": props.direita })}>
            <span className={`
                 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-700/30 group-focus:outline-none 
                 group-focus:ring-4 group-focus:ring-white group-focus:bg-gray-800/60
             `}>
                {props.children}
            </span>
        </button>
    )
}

export function Carrossel({ children, slideAutomatico }: CarrosselProps) {
    const carrosselRef = useRef<HTMLDivElement | null>(null);
    const intervaloRef = useRef<NodeJS.Timeout | null>(null);
    const animacaoRef = useRef<HTMLDivElement | null>(null);
    const [indiceAtual, setIndiceAtual] = useState(0);
    const NUMERO_DE_ITENS = children.length;
    const TEMPO = 5000;

    function inicarSlideAutomatico() {
        if (!slideAutomatico) return;
        if (animacaoRef.current) {
            animacaoRef.current.style.display = 'block';
        }
        intervaloRef.current = global.setInterval(() => {
            if (animacaoRef.current) {
                animacaoRef.current.style.display = 'block';
            }
            proximoSlide();
        }, TEMPO);

    }

    function pararSlideAutomatico() {
        if (animacaoRef.current) {
            animacaoRef.current.style.display = 'none';
        }
        return clearInterval(intervaloRef.current!);
    }

    useEffect(() => {
        inicarSlideAutomatico();
        return () => pararSlideAutomatico();
    }, [NUMERO_DE_ITENS]);

    useEffect(() => {
        if (!carrosselRef.current) return;
        const filhos = Array.from(carrosselRef.current.children);
        const largura = carrosselRef.current.offsetWidth;
        filhos.forEach((filho: any, indice: number) => {
            filho.style.transform = `translateX(${(indice - indiceAtual) * largura}px)`;
        })
    }, [indiceAtual]);

    function proximoSlide() {
        setIndiceAtual((indiceAnterior: number) => {
            return indiceAnterior === NUMERO_DE_ITENS - 1 ? 0 : indiceAnterior + 1
        });
    }

    function slideAnterior() {
        setIndiceAtual((indiceAnterior: number) => {
            return indiceAnterior === 0 ? NUMERO_DE_ITENS - 1 : indiceAnterior - 1
        });
    }

    return (
        <Wrap className="relative">
            <Container className="relative">
                <Wrap>
                    <div className="relative rounded-lg mb-5"
                        ref={carrosselRef}
                        onMouseEnter={pararSlideAutomatico}
                        onMouseLeave={inicarSlideAutomatico}
                    >
                        {Children.map(children, (filho: JSX.Element, i) => {
                            const propsFilho = filho.props;
                            return cloneElement(filho, {
                                ...propsFilho,
                                className: `${i === indiceAtual ? "" : "hidden"}`
                            })
                        })}
                    </div>
                    <Flex className="bottom-5 z-30 gap-2">
                        {Array.from({ length: NUMERO_DE_ITENS }).map((_, i) => {
                            return (<button key={i}
                                className={mergeClasses("h-3 w-3 rounded-full bg-gray-800",
                                    { "bg-gray-500": i === indiceAtual }
                                )}
                                onClick={() => setIndiceAtual(i)}
                            >
                            </button>)
                        })}
                    </Flex>
                </Wrap>
                <Wrap className="absolute h-1 -bottom-0">
                    <div ref={animacaoRef}
                        onAnimationEnd={() => {
                            animacaoRef.current!.style.display = 'none';
                        }}
                        className="rounded-lg h-full animate-[timer_4.8s_ease-in-out] bg-gray-800">
                    </div>
                </Wrap>
            </Container>
            <Wrap>
                <BotaoLateral esquerda onClick={slideAnterior} onMouseEnter={pararSlideAutomatico} onMouseLeave={inicarSlideAutomatico}>
                    <CaretLeftIcon size={20} />
                    <span className="hidden">Anterior</span>
                </BotaoLateral>

                <BotaoLateral direita onClick={proximoSlide} onMouseEnter={pararSlideAutomatico} onMouseLeave={inicarSlideAutomatico}>
                    <CaretRightIcon size={20} />
                    <span className="hidden">Próximo</span>
                </BotaoLateral>
            </Wrap>
        </Wrap>
    )

}