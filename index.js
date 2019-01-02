'use strict'

const STORE = {
    projects: [
         {
            name: 'The Office Quiz',
            live: 'https://gmtisrad.github.io/the-office-quiz/',
            repo: 'https://github.com/gmtisrad/the-office-quiz',
            technologies: 'HTML5 | CSS3 | JavaScript | JQuery',
            summary: 'This is my first web app built entirely from scratch. It\'s meant to test your knowledge of the office and built with accesibility in mind.',
            image: 'images/Quiz_Preview.png'
        },
        {
            name: 'PyChat',
            live: 'https://github.com/gmtisrad/PyChat/',
            repo: 'https://github.com/gmtisrad/PyChat/',
            technologies: 'Python | Socket | Threads',
            summary: 'PyChat is an asynchronous chat server and client made using python, web sockets and threads.',
            image: 'images/PyChat_Preview.png'
        },
        {
            name: 'Reddit Viewer',
            live: 'https://codepen.io/Gabe_M_Timm/live/rojGyr',
            repo: 'https://codepen.io/Gabe_M_Timm/pen/rojGyr',
            technologies: 'HTML5 | CSS3 | JavaScript | React.js',
            summary: 'This app allows you to enter any subreddit of your choice and then displays all of the newest posts from that subreddit.',
            image: 'images/RedditViewer_Preview(uncompressed).png'
        }
    ]
}

function createNav() {
    const navHtml = `
    <nav role='navigation' class='side-nav'>
        <a href='' data-which='landing-page' class='menu-item menu-name'>Gabriel Timm</a>
        <a href='' data-which='about-page' class='menu-item'>About</a>
        <a href='' data-which='projects-page' class='menu-item'>Portfolio</a>
    </nav>`;
    return (navHtml);
}

function createLandingPage() {
    const landingPageHtml = (createNav() + `
    <main class="hero">
        <section class="intro">
            <h1>
                Gabriel Timm
            </h1>
            <p>
                You can call me Gabe! I'm a Full Stack developer and security enthusiast!
            </p>
            <section class="social-icons">
                <a href='https://github.com/gmtisrad'><i class="fa fa-github" style="color:#F0F0DF;"></i></a>
                <a href='https://codepen.io/Gabe_M_Timm/'><i class="fa fa-codepen" style="color:#F0F0DF;"></i></a>
                <a href='https://www.linkedin.com/in/gabe-m-timm/'><i class="fa fa-linkedin" style="color:#F0F0DF;"></i></a>
                <a href='mailto:gabe.m.timm@gmail.com'><i class="fa fa-envelope" style="color:#F0F0DF;"></i></a>
            </section>
        </section>
    </main>
    `);
    return (landingPageHtml);
}

function createProjectsPage() {
    const projectsPageHtml = (createNav() + createProjects());
    return (projectsPageHtml);
}

function createProjects() {
    let projects = '';

    for (let i = 0; i < STORE.projects.length; i++){
        projects += createProject(i);
    }

    const projectsHtml = (`
        <main role='main' class='hero'>
            <section class='intro projects'>
                ${projects} 
            </section>
        </main>`);

    return projectsHtml;
}

function createProject(numProjects) {
    const projName = STORE.projects[numProjects].name;
    const liveLink = STORE.projects[numProjects].live;
    const repoLink = STORE.projects[numProjects].repo;
    const imageLoc = STORE.projects[numProjects].image;
    const technologies = STORE.projects[numProjects].technologies;
    const summary = STORE.projects[numProjects].summary;

    const projectHtml = (`
        <section class='project'>
            <h3>${projName}</h3>
            <img src='${imageLoc}' alt='${projName} Preview Image'>
            <section class='project-links'>
                <a href='${repoLink}'>repo</a>
                <a href='${liveLink}'>live</a>
            </section>
            <section class='technologies'>
                ${technologies}
            </section>
            <br/>
            <section class='summary'>
                ${summary}
            </section>
        </section>`);
    numProjects++;
    return projectHtml;
}

function createAboutPage() {
    const aboutPageHtml = (`
        <main class="hero">
            <section class="intro about">
                <h1>
                    About Me
                </h1>
                <p>
                    I'm a Full Stack Web Developer, and career student in the PDX area. 
                </p>
                <p>
                    I'm interested in making the web safer and easier to use. Beyond that, I'm fascinated by the IoT space, and how the industry is going to go about securing these emerging technologies and integrating them into our current web environment.
                </p>
                <p>
                    When I'm not developing, I'm probably listening to a boring technical podcast or spending time with my wife and dogs.
                </p>
            </section>
        </main>`);
    return aboutPageHtml;
}

function renderPage(whichPage) {
    switch (whichPage) {
        case 'landing-page':
            $('body').html(createNav() + createLandingPage());
            break;
        case 'projects-page':
            $('body').html(createNav() + createProjectsPage());
            break;
        case 'about-page':
            $('body').html(createNav() + createAboutPage());
            break;
    }
    handleNav();
}

function handleNav() {
    $('nav').on('click', 'a', function(event) {
        event.preventDefault();
        const whichPage = $(this).attr('data-which');
        renderPage(whichPage);
    })
}

$(renderPage('landing-page'));