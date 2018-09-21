import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from "@material-ui/core/styles";
import HeaderComponent from './components/Header/Header';
import IntroductionComponent from './components/Introduction/Introduction';
import TimelineComponent from './components/Timeline/Timeline';
import ProgrammingComponent from './components/Programming/Programming';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

const styles = {

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
            <div className="section">
              <div className="section-container">
                <IntroductionComponent />
              </div>
            </div>
            <div className="section">
<<<<<<< HEAD
              <div className="section-container">
                <TimelineComponent />
              </div>
=======
               <TimelineComponent />
            </div>
            <div className="section">
              <ProgrammingComponent />
>>>>>>> Finished timeline and programming components
            </div>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
