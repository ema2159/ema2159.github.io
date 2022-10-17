import projectData from "./data/projectsData.js";

const projectContainer = document.getElementById("project-container");
projectData.forEach((project) => {
  projectContainer.insertAdjacentHTML(
    "beforeend",
    `
      <div class="project-box hidden">
        <p class="clear-text project-affiliation">${project.affiliation}</p>
        <h2 class="clear-text bold">${project.name}</h2>
        <div class="clear-text project-desc">
          <ul class="proj-desc-list">
            ${project.descItems
              .map((item) => {
                return "<li>" + item + "</li>";
              })
              .join("")}
          </ul>
        </div>
        <div class="project-bottom flex-center-horizontal">
            <div class="project-tools flex-center-horizontal">
                ${
                  project.tools
                    ? project.tools
                        .map((tool) => {
                          return (
                            '<p class ="project-tool clear-text bold" >' +
                            tool +
                            "&nbsp</p>"
                          );
                        })
                        .join("")
                    : ""
                }
            </div>
            <div class="project-links clear-text">
            ${
              project.demo
                ? '<a class="project-link-btn" href="' +
                  project.demo +
                  '" rel="noopener noreferrer" target="_blank"><i class="fa-solid fa-play"></i></a>'
                : ""
            }
            ${
              project.github
                ? '<a class="project-link-btn" href="' +
                  project.github +
                  '" rel="noopener noreferrer" target="_blank"><i class="fab fa-github"></i></a>'
                : ""
            }
            ${
              project.notebook
                ? '<a class="project-link-btn" href="' +
                  project.notebook +
                  '" rel="noopener noreferrer" target="_blank"><i class="fa-solid fa-book"></i></a>'
                : ""
            }
            </div>
        </div>
      </div>
`
  );
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElems = document.querySelectorAll(".hidden");
hiddenElems.forEach((elem) => observer.observe(elem));
