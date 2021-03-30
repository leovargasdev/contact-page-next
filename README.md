<h1 align="center">Formulário com Next.js + Google Planilhas</h1>

<p align="center">
  Armazene os dados de um formulário no Google Planilhas
</p>

<p align="center">
  <img alt="Layout da aplicação" width="100%" src="./.github/screenshot.png" />
</p>

## 💻 Projeto

Esse projeto tem como objetivo apresentar uma forma fácil e gratuita de armazenar os dados de um formulário, sem a necessidade de comprar um servidor com banco de dados.

Uma das alternativas é usar uma planilha do google para armazenar tais informações. No Google existe o [APIs Google Cloud](https://cloud.google.com/apis/docs/overview) onde é fornecido diversos serviços que permite você se conectar com as ferramentas do Google.

Entre esse serviços há o **Google Sheets API** e com ele é possível consumir e enviar dados direto para uma planilha. Ao selecioná-lo é gerado algumas credenciais de acesso como **client_email** e **private_key** que serão usadas para autenticar a conexão.

Para facilitar o uso desse serviço foi utilizado a lib [google-spreadsheet](https://github.com/theoephraim/node-google-spreadsheet) para criar conexão e manipular os dados da planilha.

O layout desse projeto foi baseado em um protótipo encontrado no site [dribbble](https://dribbble.com), [link do protótipo](https://dribbble.com/shots/4327788-Contact-Form-Design).

Você pode visualizar a planilha usada neste projeto através [desse link](https://docs.google.com/spreadsheets/d/1LYRIH1Uh7Fhd0jrpnoFwTnYNHTLkzqBdiwugcrnfKHE/edit?usp=sharing).


<!-- Esse projeto tem como objetivo apresentar uma forma gratuita e rápida para capturar e salvar os dados de um formulário web, sem a necessidade de pagar por um servidor com algum banco de dados ou depender de um serviço gratuito lento.

As [APIs Google Cloud](https://cloud.google.com/apis/docs/overview) são interfaces para serviços do google, neste caso foi cadastrado uma chave para o serviço Google Sheets API. Ao selecionar esse serviço, será fornecido as crendenciais de acesso como **client_email** e **private_key**. Ao obter as credenciais será possível conectar-se a sua planilha google através da lib [google-spreadsheet](https://github.com/theoephraim/node-google-spreadsheet), e através dessa conexão você poderá ler e escrever dados em uma planilha.

O layout desse projeto foi baseado em um protótipo encontrado no site [dribbble](https://dribbble.com), [link do protótipo](https://dribbble.com/shots/4327788-Contact-Form-Design).

Você pode visualizar a planilha usada neste projeto através [desse link](https://docs.google.com/spreadsheets/d/1LYRIH1Uh7Fhd0jrpnoFwTnYNHTLkzqBdiwugcrnfKHE/edit?usp=sharing). -->

### Conceitos abordados

- Uso de flexbox para alinhar e ajustar elementos na página.

- Comunicação com serviços externos.

- Responsividade

- Componentização no React.

- Efeitos/Animações no CSS.

- Uso de variáveis ambientes.

- Máscara com expressão regular

## :rocket: Tecnologias

-  [Next.js](https://nextjs.org/)
-  [TypeScript](https://www.typescriptlang.org/)
-  [Styled-components](https://www.styled-components.com/)
-  [React-Icons](https://react-icons.netlify.com/)
-  [Google SpreadSheet](https://github.com/theoephraim/node-google-spreadsheet/)
-  [Vercel](https://vercel.com/)

## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone git@github.com:LeeonardoVargas/contact-page-next.git && cd contact-page-next
```

Você deve renomear o arquivo `.env.example` para `.env` e colocar as suas crendiais nas seguintes variáveis ambientes:

```bash
# ID da sua planilha
GOOGLE_SHEET_ID=

# Email da sua credencial no Google Sheets API
GOOGLE_API_CLIENT_EMAIL=

# Chave privada da sua credencial no Google Sheets API
GOOGLE_API_PRIVATE_KEY=
```

```bash
# Instalando as dependências
$ yarn

# Executanto aplicação
$ yarn dev

```

## :muscle: Contribuir

Faça o `fork` e clone o projeto a partir do seu usuário.

```bash
# Clonando projeto
$ git clone https://github.com/SEU-NOME-DE-USUARIO/contact-page-next.git

# Criando um branch
$ git branch minha-alteracao

# Acessando o novo branch
$ git checkout -b minha-alteracao

# Adicionando os arquivos alterados
$ git add .

# Criando commit e a mensagem
$ git commit -m "Corrigindo...."

# Enviando alterações para o brach
$ git push origin minha-alteracao
```

Você deve navegar até o seu repositório onde fez o fork e clicar no botão *New pull request* no lado esquerdo da página. Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
