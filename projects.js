const projectData = [
  {
    name: "Centaur Tabs",
    descItems: [
      "Highly customizable tabs plugin for Emacs.",
      "Over 500 GitHub stars and over 50.000 downloads.",
    ],
    github: "https://github.com/ema2159/centaur-tabs",
  },
  {
    name: "Doom Themes",
    descItems: [
      "Doom Emacs's main theme package.",
      "Over 1900 GitHub stars and 500.000 downloads.",
    ],
    github: "https://github.com/doomemacs/themes",
  },
  {
    name: "Three.js robot arm",
    descItems: [
      "Interactive 3D robot arm with 6 degrees of freedom implemented using Three.js.",
      "In the scene, a set of balls is randomly generated and placed on the floor. When a ball is clicked, the robot arm will pick the ball and place it in the trash bin.",
      "Kinematics calculations were done using the Kinematics Javascript library. Animations were created using the Tween.js Javascript library."
    ],
    github: "",
  },
  {
    name: "Global warming visualization dashboard",
    descItems: [
      "Web dashboard with different visualizations of historical world temperature data, and world temperature anomaly.",
      "Built using the D3.js framework."
    ],
    github: "",
  },
];

console.log(projectData);

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
