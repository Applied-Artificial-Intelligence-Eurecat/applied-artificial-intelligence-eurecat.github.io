import { Box, Theme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { FetchAPI } from "../api/CallbackFunction";
import {
  Paper,
  Grid,
  Modal,
  Button,
  CardContent,
  Typography,
  Link,
  Alert,
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
  link: string;
  subtitle: string;
  credentials?: boolean;
  description: string;
  longdescription: string[];
  video?: string;
}

interface CarouselWidthProps {
  theme: Theme;
}

interface DemostratorProps {
  theme: Theme;
}

export function CarouselExample(props: DemostratorProps) {
  return <CarouselWidthChanger theme={props.theme} />;
}

export function CarouselWidthChanger(props: CarouselWidthProps) {
  const setWindowWidth = useState(window.innerWidth)[1];
  const [divisor, setDivisor] = useState<number>(getDivider());
  const [items, setItems] = useState<ItemInstance[]>([]);

  useEffect(() => {
    const fetchApi = FetchAPI(
      "https://raw.githubusercontent.com/Applied-Artificial-Intelligence-Eurecat/applied-artificial-intelligence-eurecat.github.io/main/src/assets/data/demostrators.json",
      (obj) => {
        setItems(obj);
      }
    );
    fetchApi();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setDivisor(getDivider());
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
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
        {groupItems(items).map((groupItem, i) => (
          <LineItemDemostrator
            divisor={divisor}
            items={groupItem}
            theme={props.theme}
          />
        ))}
      </Carousel>
    </Box>
  );
}

function getDivider(): number {
  var divider = 2;
  if (window.innerWidth > 1300) {
    divider = 3;
  } else if (window.innerWidth > 898) {
    divider = 2;
  } else {
    divider = 1;
  }
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
    <Paper elevation={6}>
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
        <Typography variant="body2">{props.item.description}</Typography>
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
        <Box
          sx={{
            position: "absolute",
            transform: {
              xs: "translate(5%, 5%)",
              lg: "translate(50%, 10%)",
            },
            overflowY: "scroll",
            height: {
              xs: "auto",
            },
            maxHeight: "80%",
            width: {
              xs: "80%",
              lg: "50%",
            },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h3" component="div">
                {props.item.title}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3" component="div" align="right">
                <Box
                  component="img"
                  alt={props.item.title}
                  src={props.item.img}
                  sx={{
                    height: "80%",
                  }}
                />
              </Typography>
            </Grid>
            {props.item.longdescription.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
            <Grid item xs={12}>
              <Link
                href={props.item.link}
                underline="hover"
                target="_blank"
                sx={{ mb: "1", pb: "5" }}
              >
                You can see the demonstrator by clicking here.
              </Link>
              <p></p>
            </Grid>
            {props.item.video ? (
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Grid
                    item
                    sx={{
                      width: {
                        xs: "315px",
                        md: "635px",
                        lg: "635px",
                      },
                      height: {
                        lg: "350px",
                        md: "350px",
                        xs: "173px",
                      },
                    }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={props.item.video}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <p></p>
            )}

            <Grid item xs={12}>
              <p></p>{" "}
            </Grid>
            <Grid item xs={12}>
              {props.item.credentials ? (
                <Alert severity="warning" sx={{ mt: "4" }}>
                  This demostrator requires credentials to get its usage basis.{" "}
                  <Link
                    target="blank_"
                    underline="hover"
                    href="mailto:maddi.etxegarai@eurecat.org"
                  >
                    Contact for more information
                  </Link>
                </Alert>
              ) : (
                <p></p>
              )}
            </Grid>
          </Grid>
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

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{
        px: 1,
      }}
    >
      {props.items.map((prop) => (
        <Grid item xs={Math.floor(12 / divisor)}>
          <React.Fragment>
            <CardDemostrador item={prop} theme={props.theme} />
          </React.Fragment>
        </Grid>
      ))}
    </Grid>
  );
}
