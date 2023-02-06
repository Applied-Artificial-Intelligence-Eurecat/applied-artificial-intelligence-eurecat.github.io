import * as React from "react";
import { useState, useEffect } from "react";
import { FetchAPI } from "../api/CallbackFunction";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface Block {
  title: string;
  items: string[];
  color: string;
}

interface BlockItemProps {
  title: string;
  items: string[];
  color: string;
}

function BlockItem(props: BlockItemProps) {
  return (
    <Card
      sx={{
        textAlign: "justify",
      }}
    >
      <React.Fragment>
        <CardContent>
          <div style={{
                border:       "30px solid",        /* All borders set */
                borderTopColor: props.color,
                borderRightColor: "transparent",
                borderLeftColor: "currentcolor",
                borderBottomColor: props.color,
                borderLeft:  "0",                      /* Remove left border */
                borderRight: "20px solid transparent", /* Right transparent */
                width:        "200px"  ,
                zIndex: 0,
                margin: 0,
                marginLeft: "-20px"
          }}></div>
          <h2 style={{
            marginTop: "-50px",
            color: "white"
          }}>{props.title}</h2>
          <List dense={true}>
              {(props.items.map((item) => 
              (<ListItem>
                  <ListItemIcon>
                    <ArrowForwardIosIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                  />
                </ListItem>)
              ))}
            </List>
        </CardContent>
      </React.Fragment>
    </Card>
  );
}


export function Blocks() {
  const [blocks, setBlocks] = useState<Block[]>();

  useEffect(() => {
    const fetchApi = FetchAPI(
      "https://raw.githubusercontent.com/Applied-Artificial-Intelligence-Eurecat/applied-artificial-intelligence-eurecat.github.io/main/src/assets/data/blocks.json",
      (obj) => {
        setBlocks(obj);
      }
    );
    fetchApi();
  }, []);

  return (
    <Grid container alignItems="stretch" spacing={6} >
      {!blocks ? (
        <div></div>
      ) : (
        blocks.map((block) => (
          <Grid item lg={6} xs={12} >
            <BlockItem
            title={block.title}
            items={block.items}
            color={block.color}
          />
          </Grid>
        ))
      )}
    </Grid>
  );
}
