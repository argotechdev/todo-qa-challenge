# To-Do List – Desafio de QA

Este projeto é uma aplicação React com bugs intencionais, criada para avaliação de testadores de software. A proposta é testar a capacidade do candidato em seguir requisitos, identificar falhas e relatar problemas de forma clara e objetiva.

---

## 🚀 Como rodar o projeto localmente com Docker

Siga os passos abaixo para subir a aplicação usando Docker.

### 1. Pré-requisitos

Você precisa ter instalado na sua máquina:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/) (já vem incluso nas versões atuais do Docker Desktop)

---

### 2. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/todo-qa-test.git
cd todo-qa-test
```

---

### 3. Subir a aplicação

Utilize o seguinte comando:

```bash
docker-compose up --build
```

A aplicação será iniciada e estará disponível em:

```
http://localhost:3000
```

---

### 4. Estrutura do projeto

```
todo-qa-test/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── TodoItem.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── Dockerfile
├── .dockerignore
├── docker-compose.yml
├── README.md
├── package.json
└── .gitignore
```

---

### 5. Funcionalidades da aplicação

A aplicação simula uma lista de tarefas com as seguintes funções:

- Adicionar nova tarefa
- Editar tarefa existente
- Marcar tarefa como concluída
- Excluir tarefa
- Contagem de tarefas pendentes e concluídas
- Armazenamento no localStorage
- Layout responsivo

> Observação: diversos bugs foram inseridos propositalmente para fins de teste e avaliação.

---

### 🌐 Link de acesso online

A aplicação também está disponível no link abaixo:

[https://argo-qa-challenge.vercel.app/](https://argo-qa-challenge.vercel.app/)