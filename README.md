# nodejs-ts-mysql-nestjs-jest-vite-vitest-reactjs-docker_remaining-students-tracker

![6510ec00-f3a2-4742-90e6-7e8bccb7bfac](https://github.com/user-attachments/assets/6a7d0b11-d3d4-4112-acd5-8a1d10043085)

This is a 24-hour monolith project

# Stack

- Docker 27.3.1
- Postgres 17
- Node.js 20.18:
  - NestJS 10.0:
    - TypeORM 0.3.2
  - Vite 5.4.8:
    - ReactJS 18.3

---

# 🇺🇸 Description (en-us)

Full-stack project developed within 24 hours for the EPA (Etec de Portas Abertas), held on October 23rd, 24th, and 25th, 2024. The application aimed to collect feedback about the event at ETEC Prof. Edson Galvão (NPS) and to identify potential students interested in the courses offered by the institution.

Considering that rural units often face weather-related challenges, a key aspect of this project was ensuring it could operate offline, utilizing the LAN network and an internal server.

  - The application needs to recover the tracking of remaining students, for potentials engagement on schools;
  - The project needs to have a interface who serves as forms to theses students;
  - The application needs to have a offline redundancy.

# 🇧🇷 Descrição (pt-br)

Projeto full-stack desenvolvido em 24 horas para o EPA (Etec de Portas Abertas), realizado nos dias 23, 24 e 25 de outubro de 2024. O aplicativo teve como objetivo coletar feedback sobre o evento na ETEC Prof. Edson Galvão (NPS) e identificar potenciais alunos interessados nos cursos oferecidos pela instituição.

Considerando que as unidades rurais frequentemente enfrentam desafios relacionados ao clima, um aspecto fundamental deste projeto foi garantir que ele pudesse operar offline, utilizando a rede LAN e um servidor interno.

  - O aplicativo precisa recuperar o acompanhamento dos alunos restantes, visando potencial engajamento com as escolas;
  - O projeto deve contar com uma interface que funcione como formulários para esses alunos;
  - O aplicativo precisa ter redundância offline.

---

# Requirements

1.  Setup Container; ✅
- 1.1 Setup a docker-compose environment for mysql and nodejs; ✅
- 1.2 Setup a db (with a volume), backend, frontend service; ✅
- 1.3 Test the communication between theses three services; ✅

2.  Data Modeling (Mysql);
- 2.1 Brainstorm a data model; ✅
- 2.2 Normalize the data model; ❌
- 2.3 Create data model; ✅
- 2.4 Test data model; ❌

3.  Back-end (Nest.js REST API);
- 3.1 Setup Nest.js project; ✅
- 3.2 Setup Endpoints; ✅
- 3.3 Test Endpoints; ❌

4.  Front-end (React.js SPA);
- 4.1 Setup Vite React-ts; ✅
- 4.2 Setup components; ✅
- 4.3 Test the SPA. ❌
