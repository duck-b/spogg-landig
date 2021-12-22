import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Toolbar, CssBaseline, useScrollTrigger, Grid, Hidden, IconButton, Link, Collapse, Paper } from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import fitdata_logo from 'img/fitdata_logo.png';

const AppBar = withStyles({
    root:{
        backgroundColor: '#FFFFFF',
        color: '#000000',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
})(MuiAppBar);

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = (props) => {
    const handleClickMenu = (page) => {
        props.handleClose();
        props.history.push(page)
    }
    return (
    <>
        <CssBaseline />
        <ElevationScroll {...props}>
            <AppBar>
                <Toolbar style={{padding: '0px'}}>
                    <Grid container justify="center">
                        <Grid item container xs={12} sm={10} lg={8} justify="space-between" alignItems="center">
                            <Grid item xs={4} sm={3} lg={2} className="appbar_logo">
                                <Link onClick={() => props.history.push('/')}><img src={fitdata_logo} style={{width: '75%'}}/></Link>
                            </Grid>
                            <Grid item xs={6} className="appbar_menu">
                                <Hidden mdDown>
                                    <Link onClick={() => props.history.push('/')}>Home</Link>
                                    <Link onClick={() => props.history.push('/aboutus')}>회사 소개</Link>
                                    <Link onClick={() => props.history.push('/history')}>회사 연혁</Link>
                                    <Link href="https://blog.naver.com/fitdata0630" target="_blank">블로그</Link>
                                </Hidden>
                                <Hidden lgUp>
                                    <IconButton aria-label="menu" aria-controls="menu" aria-haspopup="true" onClick={props.handleClick}>
                                        <MenuIcon style={{color: '#5093FF'}}/>
                                    </IconButton>
                                </Hidden>
                            </Grid>
                            <Grid xs={12}>
                                <Hidden lgUp>
                                    <Collapse in={props.menu} className="drop_menu">
                                        <Paper elevation={4} style={{padding: '24px 16px'}}>
                                            <div onClick={() => handleClickMenu('/')}>Home</div><hr/>
                                            <div onClick={() => handleClickMenu('/aboutus')}>회사 소개</div><hr/>
                                            <div onClick={() => handleClickMenu('/history')}>회사 연혁</div><hr/>
                                            <div onClick={() => window.open('https://blog.naver.com/fitdata0630')}>블로그</div>
                                        </Paper>
                                    </Collapse>
                                </Hidden>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <Toolbar />
    </>
  );
}
export default withRouter(Header);