import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'roboto-npm-webfont';
import './App.css';

import ProgressComponent from './components/progress/progress';
import HeaderComponent from './components/header/header';
import IntroductionComponent from './components/introduction/introduction';
import TimelineComponent from './components/timeline/timeline';
import ResumeCompenent from './components/resume/resume';
import ProgrammingComponent from './components/programming/programming';
import CodeGithubComponent from './components/code-github/code-github';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <ProgressComponent></ProgressComponent>
          <div className="section header-section">
            <div className="section-container header-component">
              <HeaderComponent></HeaderComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <IntroductionComponent></IntroductionComponent>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <TimelineComponent></TimelineComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <ResumeCompenent />
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <ProgrammingComponent></ProgrammingComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <CodeGithubComponent></CodeGithubComponent>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <ContactComponent></ContactComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container footer-component">
              <FooterComponent></FooterComponent>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
