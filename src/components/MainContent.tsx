import { Box } from "@mui/system";
import {useEffect, useState} from "react";
import { selectPrimaryTitle } from "../features/counter/appReducer";
import { useAppSelector } from "../app/hooks";
import { Grid } from "@mui/material";
import eurecatLogo from "../assets/logo.png";
import { FetchAPI } from "./api/CallbackFunction";


interface ContentProps {
  children: any;
  id: string;
}

export function Content(props: ContentProps) {
  return (
    <Box
      id={props.id}
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

interface IntContent {
  p1: string;
  images: IntImagesContent;
  p2: string;
}

interface IntImagesContent {
  top: IntImageContent[];
  bottom: IntImageContent[];
}

interface IntImageContent {
  src: string;
  alt: string;
  title: string;
  width: string;
  height: string;
}

export function MainContent() {
  const title = useAppSelector(selectPrimaryTitle);
  const [content, setContent] = useState<IntContent>();

  useEffect(() => {
    const fetchApi = FetchAPI(
      "https://raw.githubusercontent.com/Applied-Artificial-Intelligence-Eurecat/applied-artificial-intelligence-eurecat.github.io/main/src/assets/data/maincontent.json",
        (obj) => {setContent(obj);});
    fetchApi();
  }, []);
  console.log(content);
  return (
    <Content 
    id={"Intro"}
    
    >
      <h1>{title}</h1>
      <Box
        sx={{
          px: 2,
        }}
      >
        <Grid container>
          <Grid item xs={0} lg={3}></Grid>
          <Grid item xs={12} lg={6}>
            <Box
              component="img"
              sx={{
                width: {
                  xs: "95%",
                  sm: "70%",
                  md: "50%",
                  lg: "95%",
                },
              }}
              src={eurecatLogo}
            />
          </Grid>
          <Grid item xs={0} lg={3}></Grid>
        </Grid>
      </Box>
      <Box>
        {!content ? <div/> : content.p1}
      </Box>
      <Box
        sx={{
          pt: 5,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6}>
            {!content ? <div/> : content.images.top.map((el) => <Box
              component="img"
              key={el.alt}
              alt={el.alt}
              src={el.src}
              sx={{
                width: el.width,
                height: el.height,
                pb: 2,
              }}
            />)}
          </Grid>
          <Grid item xs={6}>
          {!content ? <div/> : content.images.bottom.map((el) => <Box
              component="img"
              alt={el.alt}
              key={el.alt}
              src={el.src}
              sx={{
                width: el.width,
                height: el.height,
                pb: 2,
              }}
            />)}
           
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          py: 3,
        }}
      >
        {!content ? <div/> : content.p2}
      </Box>
    </Content>
  );
}
