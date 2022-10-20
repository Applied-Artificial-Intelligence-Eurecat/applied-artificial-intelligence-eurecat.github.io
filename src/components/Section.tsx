import { Box, styled, Theme } from "@mui/material";
import Paper from "@mui/material/Paper";

interface SectionProps {
  title: string;
  primary: boolean;
  children: any;
  theme: Theme;
}

const Item = styled(Paper)(({theme}) => ({
  textAlign: "left",
  backgroundColor: theme.palette.secondary.main,
  square: true,
}));

export function Section(props: SectionProps) {
  return (
    <Item elevation={3} style={{}} square={true} theme={props.theme}>
      <Box
        sx={{
          pt: 2,
          px: 10,
          pb: 2,
        }}
      >
        <h2>{props.title}</h2>
        <div>{props.children}</div>
      </Box>
    </Item>
  );
}
