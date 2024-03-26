
# Projeto Back-end com Node.js, Express e Docker

Este projeto implementa uma solução back-end robusta, desenvolvida com Node.js e Express, servindo tanto conteúdo estático gerado pelo Vite quanto endpoints de API. O uso de Docker facilita a implantação e garante a consistência entre os ambientes de desenvolvimento, teste e produção.

## Tecnologias e Ferramentas

- **Node.js e Express**: Utilizados para criar um servidor HTTP capaz de lidar com requisições e respostas.
- **Vite**: Empregado na geração de conteúdo estático, otimizando o desenvolvimento e a entrega do front-end.
- **Docker**: Permite a containerização da aplicação, facilitando sua implantação e escalabilidade.

## Recursos

- **Endpoints de API**:
  - **Rotas Públicas**:
    - `/api/posts`: Retorna dados em JSON relacionados aos posts.
  - **Rotas Privadas (requer autenticação)**:
    - `/api/users`: Retorna dados em JSON relacionados aos usuários.
    - `/api/products`: Retorna dados em JSON relacionados aos usuários.
    Para acessar rotas privadas, é necessário fornecer um token de autenticação válido no cabeçalho de autorização da requisição. A autenticação pode ser realizada através de um processo de login, onde as credenciais do usuário são verificadas e, se válidas, um token JWT (JSON Web Token) é gerado e enviado de volta ao cliente. Esse token deve então ser incluído nos cabeçalhos de todas as requisições subsequentes para rotas privadas.
  
- **Conteúdo Estático**: Arquivos estáticos gerados pelo Vite, incluindo HTML, CSS e JavaScript, são servidos pelo Express. É necessário copiar os arquivos estáticos gerados no front-end para a pasta `static` do projeto antes de construir o container Docker.

## Configuração e Execução

### Pré-requisitos

Antes de começar, certifique-se de que você tem o Docker instalado e configurado em seu sistema. Se necessário, instale o Docker seguindo as instruções no [site oficial](https://docs.docker.com/get-docker/).

### Clonando o Projeto

Para obter uma cópia do projeto, execute o seguinte comando no terminal:

```bash
git clone https://seu-repositorio-aqui.git
cd nome-do-seu-projeto
```

Substitua `https://seu-repositorio-aqui.git` pelo URL do seu repositório Git e `nome-do-seu-projeto` pelo nome da pasta do projeto.

### Preparando o Conteúdo Estático

Copie os arquivos estáticos gerados pelo front-end (usualmente localizados na pasta `dist` ou `build` do seu projeto front-end) para a pasta `static` deste projeto.


## Configuração das Variáveis de Ambiente

Para configurar as variáveis de ambiente necessárias para o projeto, siga estes passos:

1. Copie o arquivo `.env.example` para um novo arquivo chamado `.env` na raiz do projeto:

    ```bash
    cp .env.example .env
    ```

2. Abra o arquivo `.env` e preencha as variáveis de ambiente com os valores apropriados para seu ambiente de desenvolvimento. Este arquivo contém todas as chaves necessárias, mas com valores falsos ou vazios, que devem ser substituídos pelos valores reais conforme necessário.

Lembre-se de não versionar o arquivo `.env` contendo suas configurações sensíveis ou específicas do ambiente. Apenas o `.env.example` deve ser commitado como um template.


## Comandos Docker Úteis

Aqui estão alguns comandos úteis para gerenciar a imagem e o container Docker da sua aplicação:

### Construir a Imagem Docker
```bash
docker build -t backend .
```

### Listar Imagens Docker
```bash
docker images
```

### Executar Containers Docker
```bash
# Modo simples de execução do container sem especificar um nome
docker run -d -p 3030:3030 backend

# Modo de execução do container especificando um nome
docker run -d -p 3030:3030 --name backend backend

# Modo de execução do container passando variáveis de ambiente
docker run -d -p 3030:3030 -e VAR1=valor1 -e VAR2=valor2 backend
```

### Listar Containers Docker
```bash
docker ps
```

### Ver Logs do Container
```bash
docker logs backend
```

### Parar o Container
```bash
docker stop backend
```

### Iniciar o Container
```bash
docker start backend
```

### Remover o Container
```bash
docker rm backend
```
