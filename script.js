const projectContainer = document.getElementById("project-container");

const projects = [
    {
        name: "1. Quote Generator",
        about: "Generate a random quote with the click of a button.",
        image: "1. Quote Generator/favicon.png",
        github: "https://github.com/hardiksrivastavaa/JavascriptProjects/tree/main/1.%20Quote%20Generator",
        live: "1. Quote Generator/index.html",
    },
    {
        name: "2. Infinite Scroll",
        about: "Infinite scroll through images from Unsplash.",
        image: "2. Infinite Scroll/favicon.png",
        github: "https://github.com/hardiksrivastavaa/JavascriptProjects/tree/main/2.%20Infinite%20Scroll",
        live: "https://scrollinfinity.vercel.app/",
    },

];

projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "projectCard";

    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = project.name;
    projectCard.appendChild(projectImage);

    const projectName = document.createElement("h2");
    projectName.textContent = project.name;
    projectCard.appendChild(projectName);

    const projectAbout = document.createElement("p");
    projectAbout.textContent = project.about;
    projectCard.appendChild(projectAbout);

    const projectLinks = document.createElement("div");
    projectLinks.className = "projectLinks";
    projectCard.appendChild(projectLinks);

    const githubLink = document.createElement("a");
    githubLink.href = project.github;
    projectLinks.appendChild(githubLink);

    const githubIcon = document.createElement("i");
    githubIcon.className = "fab fa-github";
    githubLink.appendChild(githubIcon);

    const liveLink = document.createElement("a");
    liveLink.href = project.live;
    projectLinks.appendChild(liveLink);

    const liveIcon = document.createElement("i");
    liveIcon.className = "fas fa-globe";
    liveLink.appendChild(liveIcon);

    projectContainer.appendChild(projectCard);
});


