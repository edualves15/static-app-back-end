
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

### Imagens Docker

**Construir uma imagem a partir de um Dockerfile**
```bash
docker build -t [IMAGE_NAME] .
```

**Listar imagens**
```bash
docker images
```

**Salvar uma imagem Docker em um arquivo tar**
```bash
docker save -o [PATH_TO_SAVE_IMAGE.tar] [IMAGE_ID]
```

**Carregar uma imagem Docker de um arquivo tar**
```bash
docker load -i [PATH_TO_LOAD_IMAGE.tar]
```

**Remover uma imagem Docker**
```bash
docker rmi [IMAGE_ID]
```

**Remover todas as imagens**
```bash
docker rmi $(docker images -q)
```

### Manipulação de contêineres

**Listar todos os contêineres (incluindo os que estão parados)**
```bash
docker ps -a
```

**Listar contêineres em execução**
```bash
docker ps
```

**Iniciar um contêiner existente**
```bash
docker start [CONTAINER_ID]
```

**Executar um Shell dentro de um Contêiner em Execução**
```bash
docker exec -it [CONTAINER_ID] sh
```

**Parar um contêiner em execução**
```bash
docker stop [CONTAINER_ID]
```

**Parar todos os contêineres em execução**
```bash
docker stop $(docker ps -q)
```

**Remover um contêiner**
```bash
docker rm [CONTAINER_ID]
```

**Remover todos os contêineres**
```bash
docker rm $(docker ps -a -q)
```

**Criar e executar um novo contêiner a partir de uma imagem sem especificar um nome**
```bash
docker run -d -p [HOST_PORT]:[CONTAINER_PORT] [IMAGE_NAME]
```

**Criar e executar um novo contêiner a partir de uma imagem, especificando um nome para o contêiner**
```bash
docker run -d -p [HOST_PORT]:[CONTAINER_PORT] --name [CONTAINER_NAME] [IMAGE_NAME]
```

**Criar e executar um novo contêiner a partir de uma imagem, passando variáveis de ambiente**
```bash
docker run -d -p [HOST_PORT]:[CONTAINER_PORT] -e VAR1=valor1 -e VAR2=valor2 [IMAGE_NAME]
```

**Criar e executar um novo contêiner a partir de uma imagem, montando um volume**
```bash
docker run -d -p [HOST_PORT]:[CONTAINER_PORT] -v [HOST_DIRECTORY]:[CONTAINER_DIRECTORY] [IMAGE_NAME]
```
