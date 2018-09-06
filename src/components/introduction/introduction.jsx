import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="data/JustinLuoma5.png" size={150}/>
            <p className="introduction-text">
            Senior Systems Administrator with experience in Windows and Linux server administration,
 Cisco networking and security, and system automation and scripting.
              Currently attending Codeup's full-stack Java course with the intention of transitioning into software development.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
