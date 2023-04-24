import { Box, Theme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Grid,
  Modal,
  Button,
  CardContent,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface ItemProp {
  item: ItemInstance;
  theme: Theme;
}

interface LineItemProp {
  divisor: number;
  items: ItemInstance[];
  theme: Theme;
}

interface ItemInstance {
  title: string;
  img: string;
  subtitle: string;
  description: string;
  longdescription: string;
}

interface CarouselWidthProps {
  items: ItemInstance[];
  theme: Theme;
}

interface DemostratorProps {
  theme: Theme;
} 

export function CarouselExample(props: DemostratorProps) {
  const items: ItemInstance[] = [
    {
      title: "DIGITS",
      img: "https://raw.githubusercontent.com/Applied-Artificial-Intelligence-Eurecat/applied-artificial-intelligence-eurecat.github.io/main/src/assets/projects/sesame.PNG",
      subtitle: "DIGITAL TWIN OF THE ALUMINUM DIE CASTING PROCESS ",
      description:
        "This platform hosts a Digital Twin of the aluminium die casting process as part of PRIV's DIGITS project, funded by ACCIÓ.",
      longdescription:
        "This platform hosts a Digital Twin of the aluminium die casting process as part of PRIV's DIGITS project, funded by ACCIÓ.\nfFDSAfdasfjs\nfdasf",
    },
  ];
  return (<CarouselWidthChanger items={items} theme={props.theme}/>);
}


export function CarouselWidthChanger(props: CarouselWidthProps) {

  const setWindowWidth = useState(window.innerWidth)[1];
  const [mappedItems, setMappedItems] = useState<ItemInstance[][]>(groupItems(props.items));
  const [divisor, setDivisor] = useState<number>(getDivider());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      const mappedItems = groupItems(props.items);
      setMappedItems(mappedItems);
      setDivisor(getDivider());
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Box
      sx={{
        pb: 5,
      }}
    >
      <Carousel
        indicators={false}
        navButtonsAlwaysVisible={true}
        autoPlay={false}
        duration={1000}
        animation="slide"
        swipe={false}
      >
        {mappedItems.map((items, i) => (
          <LineItemDemostrator divisor={divisor} items={items} theme={props.theme} />
        ))}
      </Carousel>
    </Box>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function getDivider() : number {
  var divider = 2;
  if (window.innerWidth > 1300) {
    divider = 3;
  } else if (window.innerWidth > 898) {
    divider = 2;
  } else {
    divider = 1;
  };
  return divider;
}

function groupItems(items: ItemInstance[]) {
  const divider = getDivider();
  const mappedItems = items.reduce<ItemInstance[][]>((acc, val, index) => {

    const chunkIndex = Math.floor(index / divider);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(val);
    return acc;
  }, []);
  return mappedItems;
}

function CardDemostrador(props: ItemProp) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
<Paper elevation={6}
>
              <CardContent>
                <Typography variant="h5" component="div">
                  {props.item.title}
                </Typography>
                <Box
                  component="img"
                  alt={props.item.title}
                  src={props.item.img}
                  sx={{
                    height: "80%",
                  }}
                />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {props.item.subtitle}
                </Typography>
                <Typography variant="body2">
                  {props.item.description}
                </Typography>
              </CardContent>
              <CardContent>
                <Button
                  variant="contained"
                  startIcon={<KeyboardArrowRightIcon />}
                  onClick={handleOpen}
                >
                  More information & ACCESS
                </Button>
              </CardContent>
              <Modal open={open} onClose={handleClose}>
                <Box sx={{ ...style }}>
                  <h2>{props.item.title}</h2>
                  <p>{props.item.longdescription}</p>
                </Box>
              </Modal>
    </Paper>
  );
}

function LineItemDemostrator(props: LineItemProp) {
  const setWindowWidth = useState(window.innerWidth)[1];
  const [divisor, setDivisor] = useState<number>(getDivider());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setDivisor(getDivider());
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <Grid container spacing={2} justifyContent="center" sx={{
        px: 1
      }}>
        {props.items.map((prop) => 
      (<Grid item xs={Math.floor(12 / divisor)}>
            <React.Fragment>
       <CardDemostrador item={prop} theme={props.theme} />
       </React.Fragment>
       </Grid>))
       }
      </Grid>
  );
}
