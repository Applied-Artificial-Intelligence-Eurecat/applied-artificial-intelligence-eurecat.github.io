import React from "react";
import { PrimarySection } from "./components/PrimarySection";
import { MainContent } from "./components/MainContent";
import { DrawerAppBar } from "./components/DrawerAppBar";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Link from "@mui/material/Link";
import { Publications } from "./components/publications/Publications";
import { Team } from "./components/team/Team";
import Grid from "@mui/material/Grid";
import { Projects } from "./components/projects/Projects";
import "./App.css";
import eurecatLogo from "./assets/logo.png";
import githubLogo from "./assets/githubLogo.png";

import { Section } from "./components/Section";

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
        main: "#8651CA",
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
            <Box
              sx={{
                px: 2,
              }}
            >
              <Grid container>
                <Grid item xs={0} lg={4}></Grid>
                <Grid item xs={12} lg={4}>
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
                <Grid item xs={0} lg={4}></Grid>
              </Grid>
            </Box>

            <MainContent />
          </PrimarySection>
          <Section
            title="Technologies we use"
            primary={false}
            theme={theme}
            frameTitle={{ width: "270px", height: "29.69px" }}
          >
            The current section is in progress! You can contact to us to know which technologies we use.
          </Section>
          <Section
            title="Projects"
            primary={true}
            theme={theme}
            frameTitle={{ width: "250px", height: "29.59px" }}
          >
            <Projects />
          </Section>
          <Section
            title="Our public work"
            primary={false}
            theme={theme}
            frameTitle={{ width: "250px", height: "29.69px" }}
          >
            <Box component="div" sx={{ mt: 3 }}>
              Currently, we do not have demonstrators, but check our
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
            primary={true}
            theme={theme}
            frameTitle={{ width: "250px", height: "29.69px" }}
          >
            <Team />
          </Section>
          <Section
            title="List of publications"
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
