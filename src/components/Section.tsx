import { Box, Theme } from "@mui/material";

import Card from "@mui/material/Card";
import frameTitle from "../assets/frameTitle.svg";

interface FrameProps {
  width: string;
  height: string;
}

interface SectionProps {
  title: string;
  frameTitle: FrameProps;
  primary: boolean;
  children: any;
  theme: Theme;
}



export function Section(props: SectionProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 0,
        background: props.primary
          ? props.theme.blocks.primary
          : props.theme.blocks.secondary,
        color: props.primary
          ? props.theme.blocks.primaryText
          : props.theme.blocks.secondaryText,
        pb: "20px",
      }}
    >
      <Box
        sx={{
          pt: 5,
          px: {
            xs: 1,
            sm: 10,
            md: 20,
            lg: 30,
            xl: 50,
          },
          pb: 10,
        }}
      >
        <Box
        alignItems="left"

        >
        <Box
        alignItems="left"
          component="img"
          style={{
            display: "flex",
            width: props.frameTitle.width,
            height: props.frameTitle.height,
            marginTop: "40px",
            marginLeft: "0px",
            zIndex: "-1",
          }}
          src={frameTitle}
        />
        </Box>
        <Box
          sx={{
            mt: "-80px",
            pl: "10px",
            pb: "20px",
          }}
        >
          <h2>{props.title}</h2>
        </Box>
        <Box
          sx={{
            px: "3%",
            textAlign: "center",
          }}
        >
          <div>{props.children}</div>
        </Box>
      </Box>
    </Card>
  );
}
