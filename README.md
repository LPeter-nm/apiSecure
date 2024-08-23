# API segura utilizando jwt e bcryptjs

Com propósito para estudos, essa api foi programada com o intuito de dar os primeiros passos com as bibliotecas JsonWebToken e Bcryptjs

## Skills
[![My Skills](https://skillicons.dev/icons?i=typescript,express,nodejs,npm,postgres,prisma,docker)](https://skillicons.dev)

## Instalação de pacotes e inicialização

Instale as depedências: <br> 
`npm install`

*Obs: como foi utilizado docker, terá a maneira de inicializar com docker*<br> 
Instale a imagem do postgres: <br> 
`docker pull postgres`

Inicialize um contâiner: <br> 
`docker run -p 5432:5432 --name name-api -e POSTGRES_PASSWORD=mypassword -d postgres`

Execute o contâiner: <br> 
`docker exec -it name-api psql -U postgres`

Crie a database: <br> 
`create database name-database;`

Depois de sair com `\q` coloque no arquivo .env em DATABASE_URL: <br> 
`DATABASE_URL="postgresql://postgres:mypassword@localhost:5432/name-database?schema=public"`

Conecte: <br> 
`npx prisma migrate dev --name init`

Inicialize e teste: <br>  
`npm run dev`
