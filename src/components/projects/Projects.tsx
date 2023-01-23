import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid, Link } from "@mui/material";
import { FetchAPI } from "../api/CallbackFunction";
import {useState, useEffect} from "react";

interface ProjectItemProps {
  title: string;
  img: string;
  project: string;
  link: string;
  children: any;
}

function imageFrom(topic: string): string {
  return "Image from " + topic;
}

function ProjectItem(props: ProjectItemProps) {
  return (
    <Card
      sx={{
        textAlign: "justify",
        px: 3,
        pb: 3,
        my: 3,
      }}
    >
      <h3>{props.title}</h3>
      <Grid container>
        <Grid
          item
          xs={12}
          md={3}

        >
          <Box
            sx={{
              width: "100%",
              height: "80px",
              textAlign: "center",
              pb: 2,
            }}
          >
            <Link href={props.link}>
            <Box
              component="img"
              alt={imageFrom(props.project)}
              src={props.img}
              sx={{
                height: "100%",
              }}
            />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
          >
            {props.children}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

interface Project {
  topic: string;
  img: string;
  project: string;
  description: string;
  link: string;
}

export function Projects() {

  
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    const fetchApi = FetchAPI(
      "https://raw.githubusercontent.com/Applied-Artificial-Intelligence-Eurecat/applied-artificial-intelligence-eurecat.github.io/main/src/assets/data/projects.json",
        (obj) => {setProjects(obj);});
    fetchApi();
  }, []);

  return (
    <Box>
      {!projects ? <div></div> : projects.map((project) => (
        <ProjectItem
        key={project.topic}
          title={project.topic}
          img={project.img}
          project={project.project}
          link={project.link}
        >
          <b>{project.project}</b>: {project.description}
        </ProjectItem>
      ))}
    </Box>
  );
}
