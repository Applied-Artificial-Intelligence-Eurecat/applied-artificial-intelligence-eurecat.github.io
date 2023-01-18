import { Box } from "@mui/system";
import React from "react";
import { selectPrimaryTitle } from "../features/counter/appReducer";
import { useAppSelector } from "../app/hooks";
import { Grid } from "@mui/material";
import environmental from "../assets/mainsection/environmental.png";
import industrial from "../assets/mainsection/industrial.png";
import space from "../assets/mainsection/space.png";
import water from "../assets/mainsection/water.png";

interface ContentProps {
  children: any;
}

export function Content(props: ContentProps) {
  return (
    <Box
      sx={{
        px: {
          xs: 5,
          sm: 10,
          md: 20,
          lg: 40,
          xl: 60,
        },
      }}
    >
      {props.children}
    </Box>
  );
}

export function MainContent() {
  const title = useAppSelector(selectPrimaryTitle);

  return (
    <Content>
      <h1>{title}</h1>

      <Box>
        Eurecat's Applied Artificial Intelligence Unit develops innovative
        solutions (algorithms, methods, platforms) based on the combination of
        artificial intelligence and knowledge management technologies for
        variety of sectors. Even our strong focus is on industrial
        manufacturing, energy and water resources, our projects are spread in
        many other fields as construction, agrifood, environmental and climate
        change.
      </Box>
      <Box
        sx={{
          pt: 5,
        }}
      >
        
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={4}>
              <Box
                component="img"
                alt="Image of environmental"
                src={environmental}
                sx={{
                  width: "100%",
                  pb: 2,
                }}
              />
              <Box
                component="img"
                alt="Image of space"
                src={space}
                sx={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Box
                component="img"
                alt="Image of industrial"
                src={industrial}
                sx={{
                  width: "100%",
                  pb: 2,
                }}
              />
              <Box
                component="img"
                alt="Image of water"
                src={water}
                sx={{
                  width: "100%",
                  height: "45%",
                }}
              />
            </Grid>
          </Grid>
      </Box>
      <Box
        sx={{
          py: 3,
        }}
      >
        We have a broad experience in interoperability, normalization, and
        homogenization of the raw data, transforming it in fruitful and useful
        knowledge. We make used of hybrid architectures that fit the specific
        needs of our clients and projects (big data, IoT, semantics, insight
        platforms) and develop data-based IA models that tackle the real needs
        of the end users.
      </Box>
    </Content>
  );
}
