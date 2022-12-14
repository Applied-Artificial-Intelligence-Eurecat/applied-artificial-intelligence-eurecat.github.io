import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import projectsJson from "../../assets/data/projects.json";
import { Grid } from "@mui/material";

interface ProjectItemProps {
  title: string;
  img: string;
  project: string;
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
            <Box
              component="img"
              alt={imageFrom(props.project)}
              src={props.img}
              sx={{
                height: "100%"
              }}
            />
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

export function Projects() {
  return (
    <Box>
      {projectsJson.map((project) => (
        <ProjectItem
          title={project.topic}
          img={project.img}
          project={project.project}
        >
          <b>{project.project}</b>: {project.description}
        </ProjectItem>
      ))}
    </Box>
  );
}
