import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');
import FontIcon from 'material-ui/FontIcon';

const style = {
    btn: {
      color: "rgba(0, 0, 0, 0.65)",
    }
};

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-expo',
      duration: 1000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          {/* <a target="_blank" href="https://github.com/justin-luoma">
            Github
          </a> */}

          <FlatButton
            href="https://github.com/justin-luoma"
            target="_blank"
            label="GitHub"
            labelStyle={style.btn}
            hoverColor="#E8E8E8"
            icon={<FontIcon className="fab fa-github" style={style.btn} />}
          />
          /
          <FlatButton
            href="https://www.linkedin.com/in/justin-luoma/"
            target="_blank"
            label="LinkedIn"
            labelStyle={style.btn}
            hoverColor="#E8E8E8"
            icon={<FontIcon className="fab fa-linkedin" style={style.btn} />}
          />
          {/* <a target="_blank" href="https://www.linkedin.com/in/justin-luoma/">
            LinkedIn
          </a> */}
          
        </div>
        <FlatButton labelStyle={style.btn}
          label="Back to top"
          hoverColor="#E8E8E8"
          onClick={this.onScrollToTop}
        />
      </div>
    );
  }
}

export default FooterComponent;
