import algoSim from "./algo-simulator.png";
import memeGenerator from "./meme-generator.png";
import vrPathwayTool from "./vrpathway.jpeg";

export default [
  {
    title: "VRPathways Tool",
    description: (
      <p style={{ margin: "0" }}>
        A project in collaboration with researchers from the{" "}
        <b>Commonwealth Scientific and Industrial Research Organisation</b> (
        <a href="https://www.csiro.au/en/" target="_blank">
          CSIRO
        </a>
        ) and the University of South Australia. The tool will be used to
        analyse and monitor potential bio-markers for <b>Alzheimer's disease</b>{" "}
        in the human saliva in <b>Virtual Reality (VR)</b>.
      </p>
    ),
    image: vrPathwayTool,
    repo: "https://github.com/caykay/VRPathwayTool",
    url: "",
    techStack: ["C#", "Unity", "VR", "Metabolic-Pathways", "Data", "CSIRO"],
  },
  {
    title: "Algo Simulator",
    description: (
      <>
        <p style={{ margin: 0 }}>
          A web application that simulates the various graph search algorithms
          on a grid. This has always been a project I wanted to work on even
          before getting farmiliar with web development as I am a visual learner
          and so I figured such project would help to give insight in some
          algorithm concepts.
        </p>
        <br></br>
        <span>
          <b>Current Algorithms</b>: Loop Iteration, BFS, DFS, Dijkstra, A*
        </span>
      </>
    ),
    image: algoSim,
    repo: "https://github.com/WebDvProjects/Graph-Search-simulator",
    url: "https://webdvprojects.github.io/Graph-Search-simulator/",
    techStack: ["Javascript", "CSS", "Algorithms"],
  },
  {
    title: "Meme Generator",
    description:
      "A web application that generates memes from an image using a public API and custom text. This was a project I worked on to get more familiar with React and the React ecosystem.",
    image: memeGenerator,
    repo: "https://github.com/WebDvProjects/meme-generator",
    url: "https://webdvprojects.github.io/meme-generator/",
    techStack: ["React", "Javascript", "CSS", "API"],
  },

  //   {
  //     title: "",
  //     description: "",
  //     image: require(""),
  //     repo: "",
  //     url: "",
  //     tech: [],
  //   },
];
