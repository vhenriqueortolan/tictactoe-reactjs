# TicTacToe-ReactJS

Este é um projeto de jogo da velha, feito com ReactJS. O objetivo é criar uma interface simples e interativa para jogar o clássico jogo da velha.

## Indice

- [Tecnologias usadas](#tecnologias-usadas)
- [Instalação e execução](#instalação-e-execução)
- [Funcionalidades](#funcionalidades)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Futuras implementações](#futuras-implementações)
- [Licença](#licença)

## Tecnologias usadas

Este projeto utiliza as seguintes tecnologias:

- [Vite](https://vitejs.dev/): um ferramenta de construção rápida para projetos web modernos
- [React](https://react.dev/): uma biblioteca para criar interfaces de usuário com componentes reutilizáveis
- [Typescript](https://www.typescriptlang.org/): uma linguagem que adiciona tipagem estática ao Javascript
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/): uma linguagem de estilo para definir a aparência dos elementos HTML

## Instalação e execução

Para instalar as dependências do projeto, você precisa ter o ```Node.js``` e o ```npm``` instalados em sua máquina.

Siga os passos abaixo:

1. Clone este repositório para a sua máquina usando o comando:

```bash
git clone https://github.com/vhenriqueortolan/tictactoe-reactjs.git
```

2. Entre na pasta do projeto usando o comando:

```bash
cd tictactoe-reactjs
```

3. Execute o seguinte comando para instalar as dependências:

```bash
npm install
```

4. Para executar o projeto em modo de desenvolvimento, execute o seguinte comando na pasta do projeto:

```bash
npm run dev
```

Isso irá iniciar um servidor local na porta 5173. Você pode acessar o jogo no seu navegador através do endereço ```http://localhost:5173```.

## Funcionalidades

No momento, o projeto possui as seguintes funcionalidades:

- Escolher qual jogador inicia a partida: p1 ou p2
- Jogar o jogo da velha em um tabuleiro de 3x3
- Verificar se há um vencedor, bloqueando os demais espaços do tabuleiro
- Reiniciar o jogo, recarregando a página
- Único modo de jogo disponível é contra outro jogador localmente

## Estrutura do projeto

O projeto possui as seguintes pastas:

- **public**: contém os arquivos estáticos, como o index.html e o favicon
- **src**: contém os arquivos de código fonte do projeto, divididos em subpastas:
    - **context**: contém o arquivo ```GlobalContext.tsx```, que define o contexto, o provider e o gerenciamento de estados da aplicação
    - **components**: contém os componentes da aplicação, como o Board, o Square, o Header e o Footer
    - **handlers**: contém as funções necessárias para a lógica da aplicação, como a ```resultCheck()``` e ```cellClick()```
    - **interfaces**: contém a tipagem necessária para os componentes, os estados e as funções
    - ```App.tsx```: é o componente principal da aplicação, onde reúne todos os demais componentes
    - ```main.tsx```: é o arquivo de entrada da aplicação, onde renderiza o App no elemento root

## Contribuição

Este projeto é de código aberto e está disponível no GitHub. Você pode enviar as suas sugestões, correções ou melhorias através de [issues](https://github.com/vhenriqueortolan/tictactoe-reactjs/issues) ou [pull requests](https://github.com/vhenriqueortolan/tictactoe-reactjs/pulls).

Algumas sugestões de melhorias para o projeto são:

- Desenvolver um design elegante para o jogo, usando cores, fontes e imagens adequadas
- Criar uma tela para ser exibida ao fim da partida, mostrando o resultado e a opção de jogar novamente
- Adicionar um modo de jogo contra o computador, usando algum algoritmo de inteligência artificial

## Futuras implementações

Este projeto tem como objetivo implementar as seguintes funcionalidades no futuro:

- [x] Trocar o jogador que inicia a partida
- [x] Trocar a vez do jogador automaticamente a cada jogada
- [x] Reconhecer um vencedor
- [ ] Reconhecer um empate
- [ ] Tela com o resultado
- [ ] Quadro de pontuação
- [ ] Resetar o jogo
- [ ] Design responsivo

## Licença

Este projeto está licenciado sob a [MIT License](/LICENSE), que permite o uso, a cópia, a modificação e a distribuição do código, desde que os direitos autorais e as permissões sejam mantidos.
