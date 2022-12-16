const projectData = [
  {
    name: "Centaur Tabs",
    affiliation: "Owner",
    descItems: [
      "Highly customizable tabs plugin for Emacs.",
      "Over 600 GitHub stars and over 50.000 downloads.",
    ],
    github: "https://github.com/ema2159/centaur-tabs",
    tools: [
      "Elisp",
    ],
  },
  {
    name: "Doom Themes",
    affiliation: "Maintainer",
    descItems: [
      "Doom Emacs's main theme package.",
      "Over 1900 GitHub stars and 500.000 downloads.",
    ],
    github: "https://github.com/doomemacs/themes",
    tools: [
      "Elisp",
    ],
  },
  {
    name: "tinyrenderer_rs",
    affiliation: "Owner",
    descItems: [
      "Didactic OpenGL-like renderer implemented in Rust.",
      "Implements a basic rendering pipeline, with Vertex and Fragment shaders support.",
      "Branches show step by step the building process of the renderer.",
    ],
    github: "https://github.com/ema2159/tinyrenderer_rs",
    tools: [
      "Rust",
      "Piston",
      "nalgebra",
    ],
  },
  {
    name: "Three.js robot arm",
    affiliation: "Owner",
    descItems: [
      "Interactive 3D robot arm with 6 degrees of freedom implemented using Three.js.",
      "In the scene, a set of balls is randomly generated and placed on the floor. When a ball is clicked, the robot arm will pick the ball and place it in the trash bin.",
      "Kinematics calculations were done using the Kinematics Javascript library. Animations were created using the Tween.js Javascript library."
    ],
    github: "https://github.com/ema2159/ThreejsPractice",
    demo: "https://ema2159.github.io/ThreejsPractice/src/Exercises/Exercise5/index.html",
    tools: [
      "Javascript",
      "Three.js",
      "Tween.js",
    ],
  },
  {
    name: "Materials, Lights, and Shadows",
    affiliation: "Owner",
    descItems: [
      "Several Cornell Box scenes in which different properties of several elements in the scene such as the different materials, lines, colors, and shadows rendered are showcased.",
      "Properties can be interactively manipulated through a graphical user interface.",
    ],
    github: "https://github.com/ema2159/MaterialsLightShadows",
    demo: "https://ema2159.github.io/MaterialsLightShadows/src/",
    tools: [
      "Javascript",
      "Three.js",
    ],
  },
  {
    name: "Global warming visualization dashboard",
    affiliation: "Owner",
    descItems: [
      "Web dashboard with different visualizations of historical world temperature data, and world temperature anomaly.",
      "Built using the D3.js framework."
    ],
    github: "https://github.com/ema2159/globalWarimingD3Visualization",
    demo: "https://ema2159.github.io/globalWarimingD3Visualization/",
    tools: [
      "Javascript",
      "D3.js",
    ],
  },
  {
    name: "Shader-based image processing",
    affiliation: "Owner",
    descItems: [
      "Several image processing algorithms implemented using Three.js and OpenGL shaders.",
    ],
    github: "https://github.com/ema2159/shaderBasedImageProcessing",
    demo: "https://ema2159.github.io/shaderBasedImageProcessing/Exercise2/index.html",
    tools: [
      "Javascript",
      "Three.js",
      "OpenGL"
    ],
  },
  {
    name: "Shader-based color management",
    affiliation: "Owner",
    descItems: [
      "Implementation of several color management LUT interpolation methods using OpenGL with Three.js",
    ],
    github: "https://github.com/ema2159/ShaderColorManagement",
    demo: "https://ema2159.github.io/ShaderColorManagement/",
    tools: [
      "Javascript",
      "Three.js",
      "OpenGL"
    ],
  },
  {
    name: "Video color cloud and elevation map visualizer",
    affiliation: "Owner",
    descItems: [
      "3D scene in which a monitor screen with a video is displayed alongside its elevation map and color cloud.",
      "The color space and coordinates displayed can be controlled through a 3D GUI placed in the scene.",
    ],
    github: "https://github.com/ema2159/RealTime3DSprint",
    demo: "https://ema2159.github.io/RealTime3DSprint/",
    tools: [
      "Javascript",
      "Three.js",
      "OpenGL"
    ],
  },
  {
    name: "OpenMP/OpenCV/CUDA‐based image processing",
    affiliation: "Owner",
    descItems: [
      "Several image processing algorithms implemented using OpenCV and OpenMP, or OpenCV and CUDA.",
    ],
    github: "https://github.com/ema2159/OpenCVCUDAImageProcessing",
    tools: [
      "C++",
      "OpenCV",
      "OpenMP",
      "CUDA"
    ],
  },
  {
    name: "Equirectangular2CubeMap/CubeMap2Equirectangular",
    affiliation: "Owner",
    descItems: [
      "Tool to transform equirectangular images to cube map images and viceversa.",
      "Two implementations written in C++, accelerated using either OpenMP or CUDA.",
    ],
    github: "https://github.com/ema2159/Equirectangular-CubeMapTransform",
    tools: [
      "C++",
      "OpenCV",
      "OpenMP",
      "CUDA"
    ],
  },
  {
    name: "Eye‐Tracking algorithms",
    affiliation: "Co-owner",
    descItems: [
      "Implementation of Velocity‐Threshold Identification (I‐VT) and Dispersion‐Threshold Identification (I‐DT) eye tracking algorithms written in Python.",
      "Implemented the Data set reader, Utility functions, Velocity‐Threshold Identification (I‐VT), Plotting functions, and Algorithms demo sections.",
      "Written using the NumPy, Pandas, SciPy, and Matplotlib Python libraries.",
    ],
    notebook: "https://colab.research.google.com/github/ema2159/ET_Project/blob/main/ET_project.ipynb",
    tools: [
      "Python",
      "NumPy",
      "SciPy",
      "Pandas",
      "Matplotlib"
    ],
  },
  {
    name: "Eye‐Tracking Gaze Data Generator",
    affiliation: "Owner",
    descItems: [
      "Random eye‐tracking gaze data generator. Written in Python using the NumPy and Matplotlib libraries.",
    ],
    notebook: "https://github.com/ema2159/GazeDataGenerator/blob/main/gaze_data_generator.ipynb",
    tools: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib"
    ],
  },
];

export default projectData;
