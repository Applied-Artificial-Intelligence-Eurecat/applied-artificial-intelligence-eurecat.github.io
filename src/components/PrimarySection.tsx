import { Box, styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Content } from './MainContent';

interface SectionProps {
    children: any
}

const Item = styled(Paper)(() => ({
    textAlign: 'center',
    backgroundColor: '#355171',
    square: true,
  }));


export function PrimarySection(props: SectionProps) {
  return (
    <Item elevation={3} style={{
      color: 'white',
    }} square={true}>
    <Box sx={{
      pt : 6,
      pb : 8
    }}>
      <div>{props.children}</div>
    </Box>
    </Item>
  );
}
