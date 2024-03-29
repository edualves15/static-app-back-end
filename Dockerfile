# Utilize a imagem base do Node.js 18 Alpine
FROM node:18-alpine

# Crie o diretório da aplicação
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copie o arquivo package.json para o container
COPY package.json .

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos para o container
COPY . .

# Defina a porta como uma variável de ambiente
ENV PORT 3030

# Exponha a porta
EXPOSE $PORT

# Comando para iniciar a aplicação
CMD ["npm", "start"]