import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import './resume.css'

const style = {
    height: '100vh',
    width: '95vw',
    position: 'fixed',
    top: 0,
    left: '2.5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
};

const closeStyle = {
    position: 'fixed',
    top: '.5vh',
    right: '4vh',
};
const iframePaper = {
    height: '95vh',
    width: '100%',
};

const Resume = (props) => {
    return (
        <div className="grey">
            <Paper className="top" style={style} zDepth={1} >
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
                <iframe 
                    src="https://westerngovernorsuniversity-my.sharepoint.com/personal/jluoma_wgu_edu/_layouts/15/Doc.aspx?sourcedoc={e2437b90-1baf-4d77-b5c7-159c7e098520}&amp;action=embedview&amp;wdStartOn=1&amp;wdEmbedCode=0"
                    width="99.6%" height="100%" frameBorder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by
                    <a target="_blank" href="https://office.com/webapps">Office Online</a>.</iframe>
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
        console.log(e.target)
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
