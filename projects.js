import projectData from "./data/projectsData.js";

projectData.forEach((project) => {
  document.getElementById("project-container").insertAdjacentHTML(
    "beforeend",
    `
      <div class="project-box">
        <p class="dark-text project-affiliation">${project.affiliation}</p>
        <h2 class="dark-text bold">${project.name}</h2>
        <div class="dark-text project-desc">
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
                          return '<p class ="project-tool dark-text bold" >' + tool + '&nbsp</p>';
                        })
                        .join("")
                    : ""
                }
            </div>
            <div class="project-links">
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
