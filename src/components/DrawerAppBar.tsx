import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";
import eurecatLogo from "../assets/logo.png";

const pages = [
  "Intro",
  "Technologies",
  "Projects",
  "Demostrators",
  "Team",
  "Publications",
];

export function DrawerAppBar() {
  const title = "Applied Artificial Intelligence";
  const title_sm = "AAI";

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickScroll = (name: string) => () => {
    const doc : HTMLElement | null = document.getElementById(name);
    if (doc) {
      doc.scrollIntoView({ behavior: 'smooth'});
      handleCloseNavMenu();
    }
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar variant="dense">
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 10,
              my: 2,
              display: { xs: "none", md: "none", lg: "flex" },
              fontFamily: "monospace",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Grid
              container
              spacing={1}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid
                item
                lg={12}
                style={{
                  textAlign: "center",
                }}
              >
                {title}
              </Grid>
              <Grid
                item
                lg={12}
                style={{
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  style={{
                    width: "140px",
                  }}
                  src={eurecatLogo}
                />
              </Grid>
            </Grid>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "block", lg: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleClickScroll(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            sx={{
              display: { xs: "flex", md: "flex", lg: "none" },
              mr: 3,
              my: 2,
              width: "120px",
            }}
            src={eurecatLogo}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex", lg: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            - {title_sm}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "none", lg: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleClickScroll(page)}
                sx={{ my: 2, mx: 4, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
