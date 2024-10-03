# Projeto Catalogação de Capivaras

Bem vindo ao **Zoológico de Capivaras**. Este projeto é uma aplicação full-stack para catalogação de capivaras, permitindo a criação, edição, exclusão e pesquisa por habitat desses esses animais. O sistema é dividido em um back-end em Node.js com Express, um banco de dados usando o MySQL e o Docker para armazenar o servidor do mesmo, e um front-end em React.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Configurando o Ambiente](#configurando-o-ambiente)
- [Como Usar](#como-usar)
- [Contribuições](#contribuições)

## Tecnologias Utilizadas

- **Backend:**
  - Node.js
  - Express
  - MySQL
  - Sequelize (ORM)
  - Docker (para contêinerização)
  
- **Frontend:**
  - React
  - Vite.js

## Funcionalidades

- Listar capivaras com informações detalhadas.
- Criar, editar e excluir registros de capivaras.
- Filtrar capivaras por habitat.
- Interface interativa com mensagens de confirmação.

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [MySQL](https://www.mysql.com/) (é preferível utilizar uma imagem do MySQL no container Docker)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/) (para clonar o repositório)

## Configuração do Ambiente

### Clonando o Repositório

```bash
git clone https://github.com/lucasblima-dev/project-modulamais.git
cd project-modulamais
```

```bash
cd project-modulamais
```

### Configurando o Banco de Dados
1. Inicie um container no Docker com a imagem do MySQL:
```bash
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=projectmodulamais -p 3306:3306 -d mysql:latest
```

2. Inicialize o Docker na máquina:
```bash
sudo systemctl start docker
```
3. Inicialize o container do servidor MySQL:
```bash
docker start mysql-container
```

4. Use o script SQL para criar a tabela:
```bash
CREATE DATABASE IF NOT EXISTS `projectmodulamais`;
USE `projectmodulamais`;

CREATE TABLE IF NOT EXISTS `zoologico` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `idade` INT NOT NULL,
  `peso` DECIMAL(5,2) NOT NULL,
  `status_saude` VARCHAR(255) NOT NULL,
  `habitat` VARCHAR(255) NOT NULL,
  `comportamento` TEXT,
  `dieta` TEXT,
  `observacoes` TEXT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHASET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

5. Configure o arquivo **.env**

Na raiz do projeto, crie um arquivo **.env** e adicione as seguintes variáveis:
```bash
APP_DEBUG=true

NODE_APP_HOST=localhost
NODE_LOCAL_PORT=3001

NODE_DOCKER_PORT=3000
MYSQL_HOST=localhost
MYSQL_LOCAL_PORT=3307
MYSQL_DOCKER_PORT=3306
MYSQL_DATABASE=projectmodulamais
MYSQL_USERNAME=root
MYSQL_PASSWORD=root
SECRET_KEY=aqui-tera-uma-chave-aleatoria
```
*Nota*: Certifique-se de que os valores acima estão corretos conforme sua configuração local do MySQL.

## Executando o Back-end:
1. Navegue até o diretório do backend:
```bash
cd ./backend
```

2. Instale as dependências:
```bash
npm install
``` 
2. Inicie o servidor:
```bash
npm run dev
``` 

- O servidor estará rodando em http://localhost:3001.

## Executando o Front-end:
1. Navegue até o diretório do backend:
```bash
cd ./frontend
```

2. Instale as dependências:
```bash
npm install
``` 
2. Inicie o servidor:
```bash
npm run dev
``` 

- O servidor estará rodando em http://localhost:5173.

## Contribuições
Contribuições são bem-vindas! Se você encontrar um bug ou tiver uma ideia para melhorar o aplicativo, siga as etapas abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch (git checkout -b feature/nome-da-feature).
3. Commit suas mudanças (git commit -m 'Adiciona nova feature').
4. Push para a branch (git push origin feature/nome-da-feature).
5. Abra um Pull Request.
