# Microsserviço de Autenticação com JWT / Node.js

Projeto criado durante Bootcamp da Digital Innovation One tendo como instrutor [Renan Johannsen](https://www.linkedin.com/in/renanjpaula).

O objetivo do projeto é criar um microsserviço e fazer a autenticação através do JWT.

Para criar esse projeto usaremos Typescript, também é necessário ter instalado no computador o Node.js (https://nodejs.org/pt-br/) e o Gerenciador de Pacotes NPM, que já será instalado junto com o Node.js

Para desenvolver o projeto utilizamos o Visual Studio Code (VS Code).

Para o banco de dados foi utilizado o PostgreSQL em nuvem no site [ElephantSQL](https://www.elephantsql.com/).

Criando o projeto

Para criar o projeto crie em seu computador uma pasta com o nome que desejar.

Abra a pasta no VS Code.

Para criar o projeto digite o comando: npm init que irá criar a estrutura do projeto e o arquivo package.json. \
Instale as bibliotecas: \
`npm install -g typescript`

Digite o comando `tsc --init` para criar o arquivo tsconfig.json

Configure o arquivo tsconfig.json: limpe os comentários que não necessita ser configurado(opcional) e configure:
```{
  /* Visit https://aka.ms/tsconfig.json to read more about this file */
  "compilerOptions": {
    "target": "es2019",                                     
    "module": "commonjs",  
    "moduleResolution": "node",  
    "rootDir": "src",   
    "typeRoots": [
      "./src/@types",
      "./node_modules/@types"
    ], 
    "outDir": "./dist",  
    "removeComments": true,                     
    "esModuleInterop": true,                             
    "forceConsistentCasingInFileNames": true,            
    "strict": true,                                      
    "skipLibCheck": true                                 
  }
}
```

Reinstale a biblioteca typescript para as dependências de desenvolvimento e instale os @types para o node \
`npm install --save-dev typescript` \
`npm install --save-dev @types/node`

Em seguida execute no terminal o comando `npm run build`. Será executada o build do projeto e criada a pasta dist.

Para executar a parte do servidor e chamadas HTTP será utilizado como gerenciador de rotas o HTTP Express.

instale as seguintes dependências: \
`npm install --save express` \
`npm install --save-dev @types/express`

Em seguida execute no terminal o comando `npm run build`.

Para automatização de atualização do servidor instale a dependência: \
`npm install ts-node-dev --save-dev`

No projeto foram criadas na pasta src as sub-pastas: \
models(onde ficará a classe de Usuário e a pasta errors para padronização das mensagens de erros). \
routes( onde ficarão as rotas para requisição via HTTP Express e autenticação via JWT). \
repository (vai conter os SQL que serão chamados pelas rotas) \
middlewares (onde ficarão as funções de autenticação) \

Além do arquivo Index.js, na pasta src foi criado o arquivo db.ts que vai fazer a conexão com o banco de dados no site ElephantSQL.

Também foi criada a pasta sql na raíz do projeto a qual vai conter o script de SQL para o banco de dados.

Para utilização do PostgresSQL é necessário instalar as dependências abaixo: \
`npm install --save pg` //instala a dependência node-postgres \
`npm install --save-dev @types/pg`

Para a autenticação via JWT (Json Web Token) instalar as dependências: \
`npm install --save jsonwebtoken` \
`npm install --save-dev @types/jsonwebtoken`

Site ElephantSQL

Crie uma conta para fazer Login

Crie uma nova instância, coloque o nome que desejar para o banco de dados, selecione sempre o \
plano Tiny Turtle (versão Free), escolha a região e depois confirme a criação.

Depois de criado na opção Details você poderá visualizar todos os dados de sua conta, atente-se para os itens Password e URL, \
pois eles serão utilizados no arquivo db.ts para fazer a conexão com o banco.

Na opção browser é possível executar os scripts SQL.

Para testar os endpoints da aplicação pode ser utilizado o Insomina ou Postman.

