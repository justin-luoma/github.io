import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import './resume.css'

const closeStyle = {
    position: 'fixed',
    top: '.5vh',
    right: '.5vh',
};
const iframePaper = {
    height: '95vh',
    width: '100%',
};

const Resume = (props) => {
    return (
        <div className="grey">
            <Paper className="top" zDepth={1} >
                <NavigationClose style={closeStyle} onClick={(e) => props.onClick(e)}></NavigationClose>
                <div className="row">
                    <div className="col">
                        <RaisedButton label="Download docx"
                            href="https://drive.google.com/uc?export=download&id=1vufcTSuyzs7Cn_nQ8ovdrIJzEV0gtGIN" />
                    </div>
                    <div className="col">
                        <RaisedButton label="Download pdf"
                            href="https://drive.google.com/uc?export=download&id=1IMliCqO4UtLKpwB2kJf5ibJsZ3hyNNFJ" />
                    </div>
                </div>                
                <Paper style={iframePaper} zDepth={5}>
                    <iframe src="https://onedrive.live.com/embed?cid=C9D382F5B5AEF078&resid=C9D382F5B5AEF078%213925&authkey=AICHsJoKE8GUM4M&em=2"
                        width="99.6%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no">
                    </iframe>
                </Paper>
            </Paper>
        </div>
    );
}

class ResumeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          showResume: false,
        };
    }

    displayResume = (e) => {
        this.setState({showResume: !this.state.showResume});
    }

    // let resume = null;

    // this.state.showResume ? resume = (<DisplayResume></DisplayResume>) : 

    render () {
        return (
            <div className="resume">
                <RaisedButton label="My resume" fullWidth={true} onClick={this.displayResume} backgroundColor="#E8E8E8" />
                {this.state.showResume && <Resume onClick={(e) => this.displayResume(e)}></Resume>}
            </div>
        )
    }
}

export default ResumeComponent;
