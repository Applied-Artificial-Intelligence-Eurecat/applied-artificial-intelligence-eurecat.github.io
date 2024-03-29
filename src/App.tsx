import React from "react";
import { PrimarySection } from "./components/PrimarySection";
import { MainContent } from "./components/MainContent";
import { DrawerAppBar } from "./components/DrawerAppBar";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Link from "@mui/material/Link";
import { Publications } from "./components/publications/Publications";
import { Team } from "./components/team/Team";
import { Projects } from "./components/projects/Projects";
import { Blocks } from "./components/blocks/Blocks";
import "./App.css";
import githubLogo from "./assets/githubLogo.png";

import { Section } from "./components/Section";
import {CarouselExample} from "./components/demostrators/Carrousel";

declare module "@mui/material/styles" {
  interface Theme {
    blocks: {
      primary: string;
      primaryText: string;
      secondary: string;
      secondaryText: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    blocks: {
      primary: string;
      primaryText: string;
      secondary: string;
      secondaryText: string;
    };
  }
}

function App() {
  const theme = createTheme({
    blocks: {
      primary: "#355171",
      primaryText: "#ffffff",
      secondary: "#ffffff",
      secondaryText: "#000000",
    },
    palette: {
      primary: {
        main: "#761F89",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <DrawerAppBar />
        <Box
          sx={{
            mt: {
              xs: 8,
              lg: 14,
            },
          }}
        >
          <PrimarySection>
            <MainContent />
          </PrimarySection>
          <Section
            id="Blocks"
            primary={false}
            theme={theme}
            frameTitle={{ width: "200px", height: "30.69px" }}
          >
            <Blocks/>
          </Section>
          <Section
            title="Projects"
            id="Projects"
            primary={true}
            theme={theme}
            frameTitle={{ width: "170px", height: "29.59px" }}
          >
            <Projects />
          </Section>
          <Section
            title="Our public work"
            id="Demostrators"
            primary={false}
            theme={theme}
            frameTitle={{ width: "250px", height: "29.69px" }}
          >
            <Box component="div" sx={{ mt: 3 }}>
            <CarouselExample
              theme={theme}
            />
            
              Check our
              <Link
                href="https://github.com/Applied-Artificial-Intelligence-Eurecat"
                underline="hover"
                sx={{ marginLeft: "5px" }}
              >
                Github
                <Box
                  component="img"
                  alt="Github logo"
                  src={githubLogo}
                  sx={{
                    height: "14px",
                    marginRight: "2px",
                    marginLeft: "5px",
                  }}
                />
              </Link>{" "}
              to see our public repositories!
            </Box>
          </Section>
          <Section
            title="The team"
            id="Team"
            primary={true}
            theme={theme}
            frameTitle={{ width: "180px", height: "29.69px" }}
          >
            <Team />
          </Section>
          <Section
            title="List of publications"
            id="Publications"
            primary={false}
            theme={theme}
            frameTitle={{ width: "250px", height: "29.69px" }}
          >
            <Publications />
          </Section>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
