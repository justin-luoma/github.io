import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from "@material-ui/core/styles";
import HeaderComponent from './components/Header/Header';
import IntroductionComponent from './components/Introduction/Introduction';
import TimelineComponent from './components/Timeline/Timeline';
import ProgrammingComponent from './components/Programming/Programming';
import ProjectsComponent from './components/Projects/Projects';
import CodeComponent from './components/Code/Code';
import ContactComponent from './components/Contact/Contact';
import FooterComponent from './components/Footer/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

const styles = {
  section: {
    paddingLeft: '5%',
    paddingRight: '5%',
    position: 'relative',
    background: '#E8E8E8',
    '&:nth-child(even)': {
      background: '#E4A570',
    },
    '&:last-child': {
      padding: 0,
    },
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <div className="section header-section">
              <div className="section-container header-component">
                <HeaderComponent />
              </div>
            </div>
            <div className={classes.section}>
              <div className="section-container">
                <IntroductionComponent />
              </div>
            </div>
            <div className={classes.section}>
               <TimelineComponent />
            </div>
            <div className={classes.section}>
              <ProgrammingComponent />
            </div>
            <div className={classes.section}>
              <ProjectsComponent />
            </div>
            <div className={classes.section}>
              <CodeComponent />
            </div>
            <div className={classes.section}>
              <ContactComponent />
            </div>
            <div className={classes.section}>
              <FooterComponent />
            </div>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
