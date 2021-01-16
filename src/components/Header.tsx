import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Theme,
  Typography,
  Hidden,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Hidden smDown>風来のシレン アイテム識別補助ツール</Hidden>
          <Hidden smUp>シレン アイテム識別</Hidden>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export { Header };
