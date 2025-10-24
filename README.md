# 🎬 Kino - Aplicação de Filmes

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.22-pink?style=for-the-badge&logo=framer)

Uma aplicação moderna de descoberta de filmes construída com Next.js 14, TypeScript e Tailwind CSS, integrada com a API do TMDB (The Movie Database).

</div>

## 📋 Índice

- [🚀 Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [📦 Instalação](#-instalação)
- [⚙️ Configuração](#️-configuração)
- [🎯 Uso](#-uso)
- [🏗️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [📱 Páginas](#-páginas)
- [🔧 Componentes](#-componentes)
- [🎨 Design System](#-design-system)
- [📚 API e Hooks](#-api-e-hooks)
- [🚀 Deploy](#-deploy)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)

## 🚀 Funcionalidades

### 🎭 **Descoberta de Filmes**
- **Filmes em Destaque**: Carrossel interativo com os últimos lançamentos
- **Lista de Filmes**: Visualização organizada de filmes populares
- **Detalhes Completos**: Informações detalhadas sobre cada filme
- **Recomendações**: Sistema de sugestões baseado no filme selecionado

### 👥 **Perfis de Atores**
- **Biografias Detalhadas**: Informações completas sobre atores
- **Galeria de Fotos**: Album de imagens dos atores
- **Filmografia**: Lista de filmes em que o ator participou
- **Informações Pessoais**: Data de nascimento, local, gênero

### 🎨 **Interface Moderna**
- **Design Responsivo**: Adaptável a todos os dispositivos
- **Animações Suaves**: Transições fluidas com Framer Motion
- **Tema Personalizado**: Paleta de cores inspirada no Netflix
- **Loading States**: Estados de carregamento elegantes

## 🛠️ Tecnologias

### **Frontend**
- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Phosphor Icons](https://phosphoricons.com/)** - Ícones modernos

### **Utilitários**
- **[clsx](https://github.com/lukeed/clsx)** - Utilitário para classes CSS
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge inteligente de classes Tailwind

### **API Externa**
- **[TMDB API](https://www.themoviedb.org/documentation/api)** - Base de dados de filmes e séries

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/kino.git
cd kino
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

4. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# TMDB API Configuration
NEXT_PUBLIC_URL_BASE=https://api.themoviedb.org/3
NEXT_PUBLIC_BG_FILME_URL=https://image.tmdb.org/t/p/original
NEXT_PUBLIC_TOKEN_DE_LEITURA=seu_token_aqui
```

### Como obter o token da TMDB:

1. Acesse [TMDB](https://www.themoviedb.org/)
2. Crie uma conta e faça login
3. Vá para **Settings** > **API**
4. Solicite uma API Key
5. Use a API Key como valor para `NEXT_PUBLIC_TOKEN_DE_LEITURA`

## 🎯 Uso

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint
```

### Navegação

- **`/`** - Redireciona para `/filmes`
- **`/filmes`** - Página principal com filmes em destaque
- **`/filmes/[id]`** - Detalhes do filme
- **`/ator/[id]`** - Perfil do ator

## 🏗️ Estrutura do Projeto

```
kino/
├── src/
│   ├── app/                    # App Router (Next.js 14)
│   │   ├── ator/[id]/         # Páginas de atores
│   │   ├── filmes/            # Páginas de filmes
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout principal
│   │   ├── loading.tsx        # Componente de loading
│   │   └── not-found.tsx      # Página 404
│   ├── components/            # Componentes reutilizáveis
│   │   ├── ator/             # Componentes específicos de atores
│   │   ├── filmes/           # Componentes específicos de filmes
│   │   └── template/         # Componentes base/template
│   ├── hooks/                # Custom hooks
│   └── utils/                # Utilitários
├── public/                   # Arquivos estáticos
├── types.d.ts               # Definições de tipos TypeScript
└── tailwind.config.ts       # Configuração do Tailwind
```

## 📱 Páginas

### **Página Principal (`/filmes`)**
- Carrossel de filmes em destaque
- Lista de últimos lançamentos
- Interface responsiva e interativa

### **Detalhes do Filme (`/filmes/[id]`)**
- Informações completas do filme
- Elenco principal
- Gêneros
- Nota de avaliação
- Filmes recomendados

### **Perfil do Ator (`/ator/[id]`)**
- Biografia detalhada
- Galeria de fotos
- Filmografia
- Informações pessoais

## 🔧 Componentes

### **Componentes de Filmes**
- `CardFilme` - Card básico de filme
- `CardFilmeDetalhado` - Card com informações completas
- `CardFilmeEmDestaque` - Card para carrossel principal
- `Elenco` - Lista de atores do filme
- `Generos` - Tags de gêneros
- `Nota` - Componente de avaliação
- `PosterDoFilme` - Poster com fallback
- `SugestoesFilmes` - Filmes recomendados

### **Componentes de Atores**
- `Album` - Galeria de fotos
- `DetalhesAtor` - Informações do ator
- `ImagemDePerfil` - Foto do ator com fallback
- `OutrosFilmes` - Filmografia do ator

### **Componentes Template**
- `Botao` - Botão customizado
- `Cabecalho` - Cabeçalho da aplicação
- `Carrossel` - Carrossel interativo
- `Container` - Container responsivo
- `Grid` - Sistema de grid
- `ImagemComFallback` - Imagem com fallback
- `Skeleton` - Loading skeleton

## 🎨 Design System

### **Cores**
- **Primary Red**: `#E50914` (inspirado no Netflix)
- **Background**: Tons de cinza escuro
- **Text**: Branco e cinza claro

### **Tipografia**
- **Font Family**: Inter (Google Fonts)
- **Pesos**: 400, 500, 600, 700

### **Animações**
- Transições suaves entre páginas
- Hover effects nos cards
- Loading animations
- Carrossel com autoplay

## 📚 API e Hooks

### **Hook Principal: `useMovieAPI`**

```typescript
const {
  getUltimosFilmes,
  getFilmeDetalhado,
  getFilmesRecomendados,
  getAtorDetalhado,
  getImagensAtor,
  getFilmesDoAtor
} = useMovieAPI();
```

### **Funcionalidades da API**
- Busca de filmes em cartaz
- Detalhes completos de filmes
- Informações de atores
- Sistema de recomendações
- Gerenciamento de imagens

### **Tipos TypeScript**

```typescript
interface Filme {
  id: string;
  titulo: string;
  descricao: string;
  linkImagemFundo: string;
  linkImagemPoster: string;
  nota: number;
  dataDeLancamento: Date;
}

interface AtorDetalhado {
  id: string;
  nome: string;
  dataDeNascimento: Date;
  biografia: string;
  imagemPerfil: string;
  genero: string;
  localDeNascimento: string;
}
```

## 🚀 Deploy

### **Vercel (Recomendado)**

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### **Outras Plataformas**

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### **Padrões de Código**
- Use TypeScript para tipagem
- Siga as convenções do ESLint
- Mantenha componentes pequenos e focados
- Use Tailwind CSS para estilização
- Adicione comentários quando necessário

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS**

[🔗 Live Demo](https://kino-app.vercel.app) • [📧 Contato](mailto:seu-email@exemplo.com) • [🐛 Reportar Bug](https://github.com/seu-usuario/kino/issues)

</div>