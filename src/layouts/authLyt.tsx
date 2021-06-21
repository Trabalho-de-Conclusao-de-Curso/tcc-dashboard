import React from 'react';

import { Redirect, useHistory } from 'react-router-dom';
import {
    Drawer,
    Divider,
    List,
    ListItem,
    AppBar,
    makeStyles,
    createStyles,
    Theme,
    Toolbar,
    Typography,
    Avatar,
} from '@material-ui/core';

import useAuth from '../contexts/auth/useAuth';
import useUi from '../contexts/ui/useUi';

const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: '100vh',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flex: 1,
            padding: theme.spacing(3),
            backgroundColor: '#f8f8f8',
        },

        logo: {
            width: 40,
            height: 40,
            backgroundColor: 'gray',
            borderRadius: 100,
        },

        lblAppName: {
            fontFamily: 'Roboto Mono',
            fontSize: '24px',
            lineHeight: '140.62%',
            marginLeft: 10,
        },

        drawerHeader: {
            display: 'flex',
            height: 96,
        },
        drawerBackground: {
            top: 0,
            bottom: 0,
            width: drawerWidth,
            position: 'absolute',
            height: 64,
            backgroundColor: '#313131',
        },
        userPhoto: {
            width: 64,
            height: 64,
            marginLeft: 18,
            marginTop: 22,
        },
        photoContainer: {
            position: 'absolute',
            width: 80,
            height: 80,
            left: 10,
            top: 14,
            borderRadius: 100,
            backgroundColor: '#313131',
        },
        lblUserName: {
            fontFamily: 'Roboto Mono',
            fontSize: '16px',
            lineHeight: '140.62%',
            fontWeight: 500,
            color: '#FFFFFF',
            position: 'absolute',
            top: 30,
            left: 96,
        },
        lblUnselectedItem: {
            fontFamily: 'Roboto Mono',
            fontSize: '17px',
            lineHeight: '140.62%',
            marginLeft: 10,
        },
        lblSelectedItem: {
            fontFamily: 'Roboto Mono',
            fontSize: '17px',
            lineHeight: '140.62%',
            marginLeft: 10,
            fontWeight: 'bold',
        },
    })
);

const AuthLayout: React.FC = ({ children }) => {
    const { logged, user, logout } = useAuth();
    const classes = useStyles();
    const { strings } = useUi();
    const history = useHistory();

    const handleNav = (path: string) => {
        if (history.location.pathname !== path) history.push(path);
    };

    const handleItemStyle = (path: string): string => {
        if (history.location.pathname === path) return classes.lblSelectedItem;

        return classes.lblUnselectedItem;
    };

    if (!logged || !user) return <Redirect to="/login" />;

    return (
        <div className={classes.root}>
            <AppBar color="default" position="fixed" className={classes.appBar}>
                <Toolbar>
                    <div className={classes.logo} />
                    <Typography className={classes.lblAppName}>
                        | {strings.appName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                anchor="left"
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <div className={classes.drawerBackground} />
                    <div className={classes.photoContainer} />
                    <Avatar src={user!.logo} className={classes.userPhoto} />
                    <Typography noWrap className={classes.lblUserName}>
                        {user!.name}
                    </Typography>
                </div>
                <List>
                    <ListItem button onClick={() => handleNav('/')}>
                        <Typography className={handleItemStyle('/')}>
                            {strings.opportunities}
                        </Typography>
                    </ListItem>
                    <ListItem button onClick={() => handleNav('/feed')}>
                        <Typography className={handleItemStyle('/feed')}>
                            {strings.feed}
                        </Typography>
                    </ListItem>
                    <ListItem button onClick={() => handleNav('/profile')}>
                        <Typography className={handleItemStyle('/profile')}>
                            {strings.profile}
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={logout}>
                        <Typography className={classes.lblUnselectedItem}>
                            {strings.disconnect}
                        </Typography>
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
};

export default AuthLayout;
