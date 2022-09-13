import projectData from "./projectsData.js";

projectData.forEach((project) => {
  document.getElementById("project-container").insertAdjacentHTML(
    "beforeend",
    `
      <div class="project-box">
        <h2 class="dark-text bold">${project.name}</h2>
        <div class="dark-text project-desc">
          <ul class="proj-desc-list">
            ${project.descItems
            .map((item) => {
                return "<li>"+item+"</li>";
            })
            .join("")}
          </ul>
        </div>
        <div class="project-links">
          ${project.github ? '<a class="project-link-btn" href="'+project.github+'"><i class="fab fa-github"></i></a>' : ""}
          <a href=""><i></i></a>
        </div>
      </div>
`
  );
});
