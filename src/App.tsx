import React from "react";
import { PrimarySection } from "./components/PrimarySection";
import { MainContent } from "./components/MainContent";
import { DrawerAppBar } from "./components/DrawerAppBar";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import eurecatLogo from "./assets/logo.png";
import { Section } from "./components/Section";

declare module '@mui/material/styles' {
  interface Theme {
    blocks: {
      primary: string;
      secondary: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    blocks: {
      primary: string;
      secondary: string;
    };
  }
}

function App() {
  const theme = createTheme({
    blocks : {
      primary: "ha",
      secondary: "b",
    },
    palette: {
      primary: {
        main: "#8651CA",
      },
      secondary: {
        main: "#ffffff"
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
              component="img"
              style={{
                width: "450px",
              }}
              src={eurecatLogo}
            />
            
            <MainContent />
          </PrimarySection>
          <Section title="Technologies we use" primary={true} theme={theme}>
            Hi
          </Section>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
