import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from "@material-ui/core/styles";
import HeaderComponent from './components/Header/Header';
import IntroductionComponent from './components/Introduction/Introduction';
import TimelineComponent from './components/Timeline/Timeline';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

const styles = {

};

class App extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <div className="section header-section">
              <div className="section-container header-component">
                <HeaderComponent />
              </div>
            </div>
            <div className="section colored">
              <div className="section-container">
                <IntroductionComponent />
              </div>
            </div>
            <div className="section">
                <TimelineComponent />
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
