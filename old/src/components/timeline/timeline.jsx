import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

const style = {
    card: {
      backgroundColor: "#E8E8E8",
    },
};

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expandedMain: false,
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChangeMain = (i) => {
      this.setState({expandedMain: i})
    };

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    render() {
        return (
            <div className="timeline">
              <p className="headline">Working experience</p>
                <div className="timeline-entry">
                  <Card expanded={this.state.expandedMain} style={style.card} onExpandChange={this.handleExpandChangeMain}>
                      <CardHeader title="Senior Systems/Network Administrator" subtitle="United States Air Force"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          December	2014 - Present.
                          <br/><br/>
                            <div className="timeline-entries">
                              <div className="timeline-entry-chip">
                                <Chip>CentOS</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Windows Server 2012R2</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>DISA STIGs</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Cisco Switching</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>VMware</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Exchange 2013/2016</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Windows 10</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Confluence, JIRA</Chip>
                              </div>
                            </div>
                      </CardText>
                  </Card>
                </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} style={style.card} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Systems/Network Administrator" subtitle="United States Air Force"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            August	2011 - August 2014.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>VMware</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Cisco Routing and Switching</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>TACLANE IPSEC</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Windows 7</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Windows Server 2003/2012</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Fiber Channel Storage Networks</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
            </div>
        );
    }
}

export default TimelineComponent;
