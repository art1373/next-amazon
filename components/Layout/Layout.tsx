import * as React from "react";
import Head from "next/head";
import { NextLink } from "../../components";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
  Switch,
  CssBaseline,
} from "@material-ui/core";
import useStyles from "./Layout.styles";
import { Dispatch, Store } from "../../Store/store";
import Cookies from "js-cookie";

type Props = {
  children: any;
  title?: string;
  description?: string;
};
function Layout({ children, title, description }: Props) {
  const classes = useStyles();

  const { state, dispatch } = React.useContext(Store);
  const { darkMode } = state;

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  const darkModeChangeHandler = () => {
    dispatch({
      type: darkMode ? Dispatch.DISABLE_DARK_MODE : Dispatch.ENABLE_DARK_MODE,
    });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazona` : "Next Amazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink path="/" passhref>
              <Link>
                <Typography>Amazona</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow} />
            <div>
              <Switch checked={darkMode} onChange={darkModeChangeHandler} />
              <NextLink path="/" passhref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink path="/" passhref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>All Rights Free Amazona</footer>
      </ThemeProvider>
    </div>
  );
}

export default Layout;
