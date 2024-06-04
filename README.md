 <!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://checkme.com/">
    <img src="https://checkme.com/logo.svg" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Check Me</h3>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

Our website is Blood Pressure Monitoring System aims to develop an innovative, user-friendly, and reliable device for measuring blood pressure. The project leverages modern technology to provide accurate and real-time blood pressure readings, enhancing the ability of individuals to monitor their blood pressure. The device will be integrated with a Web application, allowing users to track and manage their blood pressure data effectively.<a href="https://www.canva.com/design/DAGHJwfWCdg/N-zFVoLk8Pa_mstrUg5bEQ/edit?utm_content=DAGHJwfWCdg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Check Me</a>!

## Our vision

Change the way companies and internship seekers connect, make it easier and more effective.
<a href="https://www.canva.com/design/DAGGJAb9sDU/FqSE7DVtbMQpw5yNbCbpOA/edit?utm_content=DAGGJAb9sDU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Product vision board</a>

## Our mission

Built a simplify platform that help both companies and seekers that matching requirement and seeker’s skill

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## UI design

- [![Static Badge](https://img.shields.io/badge/Figma-2C2D34?style=for-the-badge&logo=figma&logoColor=fff&color=%232C2D34)](https://www.figma.com/design/Cvvmjfhl1K2c8EkXBRK3OF/Neakhatka?node-id=22-18&t=3YcYKBcPRNFPZCh9-1)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section we lists all library and framework that make this project

- [![Next][Next.js]][Next-url]
- [![Static Badge](https://img.shields.io/badge/Docker%20Desktop-1D63ED?style=for-the-badge&logo=docker&logoColor=fff)](https://www.docker.com/products/docker-desktop/)
- [![Static Badge](https://img.shields.io/badge/Node.js-499442?style=for-the-badge&logo=node.js&logoColor=fff&color=499442)](https://nodejs.org/en)
- [![Static Badge](https://img.shields.io/badge/Tyscript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff&color=3178C6)](https://www.typescriptlang.org/)
- [![Static Badge](https://img.shields.io/badge/Express.js-000?style=for-the-badge&logo=express&logoColor=fff&color=000)](https://expressjs.com/)
- [![Static Badge](https://img.shields.io/badge/Mongodb-%23023430?style=for-the-badge&logo=mongodb&logoColor=fff&color=%23023430)](https://www.mongodb.com/)

### Project Structure

<p>The project follows a microservices architecture within a monorepo setup. Below is an overview of the directory structure and the purpose of each component:</p>

```
NEAKHATKA
├── .github
│   └── workflows
│       ├── main.yml
│       └── semantic-release.yml
├── app
│   ├── .next
│   ├── .storybook
│   ├── .vscode
│   ├── node_modules
│   ├── public
│   └── src
│       ├── .eslintrc.json
│       ├── .gitignore
│       ├── cdk.context.json
│       ├── components.json
│       ├── next-env.d.ts
│       ├── next.config.mjs
│       ├── package-lock.json
│       ├── package.json
│       ├── postcss.config.js
│       ├── README.md
│       ├── sst-env.d.ts
│       ├── sst.config.ts
│       ├── tailwind.config.ts
│       ├── tsconfig.json
│       └── yarn.lock
├── node_modules
├── packages
│   ├── api-gateway
│   ├── auth-service
│   ├── company-service
│   ├── notification
│   ├── profile-service
│   └── volumes
├── .gitignore
├── docker-compose.yaml
├── package.json
├── README.md
└── yarn.lock

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To run the project, ensure you have the following installed on your system:

- [![Static Badge](https://img.shields.io/badge/Docker%20Desktop-1D63ED?style=for-the-badge&logo=docker&logoColor=fff)](https://www.docker.com/products/docker-desktop/)
- [![Static Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=fff)](https://nodejs.org/)
- [![Static Badge](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=fff)](https://yarnpkg.com/)

Then, follow these steps:

<h3>Frondent</h3>

Open your terminal and run the following command to clone the project repository:

```sh
git clone https://github.com/neakhatka/neakhatka.git

```

2. Navigate to the Project Directory:

```sh
cd neakhatka/app
```

3. Install Dependencies:

Navigate to the root directory of the project and run:

```sh
yarn install
```

4. Start the Project:

Use the following command to start all application:

```sh
yarn dev
```

5. Click link in your terminal:

Use the following command to start all application:

<a href="http://localhost:3000/">localhost:3000</a>

<h3>Backend</h3>

1. Clone the Repository:

Open your terminal and run the following command to clone the project repository:

```sh
git clone https://github.com/neakhatka/neakhatka.git

```

2. Navigate to the Project Directory:

```sh
cd neakhatka
```

3. Install Dependencies:

Navigate to the root directory of the project and run:

```sh
yarn install
```

4. Start the Project using Docker:

Use the following command to start all services defined in the docker-compose.yaml file:

```sh
yarn start:docker
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Neakhatka - neakhatka@gmail.com <br/>
Team members - svatmanith76@gmail.com - sanvisal2302@gmail.com - rathna.chh@gmail.com

Project Link: [https://github.com/neakhatka/neakhatka](https://github.com/neakhatka/neakhatka)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
