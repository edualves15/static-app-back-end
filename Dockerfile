# Utilize a imagem base do Node.js 18 Alpine
FROM node:18-alpine

# Crie o diretório da aplicação
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json (se disponível) para o container
COPY package*.json ./

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
