<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/io10-0x/React-Simple-Job-Listing-Webpage">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Job Listing Website</h3>

  <p align="center">
    Simple Job Listing Site Using React

    <br />
    <a href="https://github.com/io10-0x/React-Simple-Job-Listing-Webpage"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/io10-0x/React-Simple-Job-Listing-Webpage">View Demo</a>
    ·
    <a href="https://github.com/io10-0x/React-Simple-Job-Listing-Webpage/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/io10-0x/React-Simple-Job-Listing-Webpage/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Home Page Screenshot][HomePage-Image]

## About

This project is a React-based job listing application that demonstrates the core concepts of React and modern front-end development. The application allows users to browse, add, edit, and delete job listings, simulating a job board for React developers. The project leverages key React concepts such as components, props, state management, hooks, and React Router for navigation.

### Key Features:

- **Single Page Application (SPA):** Built using React and Vite, the application provides a seamless user experience without the need for page reloads.
- **Component-Based Architecture:** The UI is broken down into reusable components, such as Navbar, Hero, HomeCards, JobListings, JobPage, and more, facilitating a modular approach to development.
- **State Management with Hooks:** State is managed using React's `useState` and `useEffect` hooks, ensuring dynamic and responsive components.
- **Routing with React Router:** The project uses React Router for navigation, enabling client-side routing and dynamic URL management.
- **Form Handling:** Includes forms for adding and editing jobs, showcasing controlled components and state management in React.
- **Mock Backend with JSON Server:** The project simulates a backend using JSON Server, enabling API calls (GET, POST, PUT, DELETE) to manage job listings.
- **Production Ready:** The project is configured for production deployment, with a build process that optimizes the application for performance.

This project serves as a practical example of building a front-end application with React, providing a solid foundation for further exploration into full-stack web development, especially in the context of Web3 development.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Vite][Vite.js]][Vite-url]
- [![React-Router][React-router.js]][React-router-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

Node.js & npm: Node.js and npm are required to run the project. You can install them from Node.js.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation and Local Usage

1. Clone the repository
   ```sh
   git clone https://github.com/io10-0x/React-Simple-Job-Listing-Webpage.git
   ```
2. Navigate to the project directory
   ```sh
   cd React-Simple-Job-Listing-Webpage
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start JSON Server: To simulate the backend, start the JSON server on port 8000
   ```sh
   npm run server
   ```
5. Run the development server: Start the React development server to view the application locally
   ```sh
   npm run dev
   ```
6. Change git remote URL to avoid accidental pushes to the original repository

   ```sh
    git remote set-url origin https://github.com/your-username/your-repository.git
    git remote -v # confirm the changes

   ```

7. Build the project for production: To create a production build of the project, use:
   ```sh
   npm run build
   ```
8. Preview the production build: You can preview the production build locally using:
   ```sh
   npm run preview
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## WebPage Preview

Sample of what pages should look like after deployment

![Job Page Screenshot][JobsPage-Image]
![AddJob Page Screenshot][AddJobPage-Image]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/io10-0x/React-Simple-Job-Listing-Webpage/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/io10-0x/React-Simple-Job-Listing-Webpage/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=io10-0x/React-Simple-Job-Listing-Webpage" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

Project Link: [https://github.com/io10-0x/React-Simple-Job-Listing-Webpage](https://github.com/io10-0x/React-Simple-Job-Listing-Webpage)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Brad Traversy Github](https://github.com/bradtraversy/react-crash-2024)
- [React Crash Course YT](https://www.youtube.com/watch?v=LDB4uaJ87e0)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/io10-0x/React-Simple-Job-Listing-Webpage.svg?style=for-the-badge
[contributors-url]: https://github.com/io10-0x/React-Simple-Job-Listing-Webpage/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/io10-0x/React-Simple-Job-Listing-Webpage.svg?style=for-the-badge
[forks-url]: https://github.com/io10-0x/React-Simple-Job-Listing-Webpage/network/members
[stars-shield]: https://img.shields.io/github/stars/io10-0x/React-Simple-Job-Listing-Webpage.svg?style=for-the-badge
[stars-url]: https://github.com/io10-0x/React-Simple-Job-Listing-Webpage/stargazers
[issues-shield]: https://img.shields.io/github/issues/io10-0x/React-Simple-Job-Listing-Webpage.svg?style=for-the-badge
[issues-url]: https://github.com/io10-0x/React-Simple-Job-Listing-Webpage/issues
[license-shield]: https://img.shields.io/github/license/io10-0x/React-Simple-Job-Listing-Webpage.svg?style=for-the-badge
[license-url]: https://github.com/io10-0x/React-Simple-Job-Listing-Webpage/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ivan-otono-87a921261
[HomePage-Image]: images/Homepage.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite.js]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=black
[Vite-url]: https://vitejs.dev/
[React-router.js]: https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black
[React-router-url]: https://reactrouter.com/en/main
[JobsPage-Image]: images/JobsPage.png
[AddJobPage-Image]: images/AddJob.png
