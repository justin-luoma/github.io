import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Collapse } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';


function ResumeList(props) {
    const data = props.data[props.i];
    return (
        <List className={props.classes.experienceList}>
            {data.map( (item, i) => (
                <ListItem key={`item-${i}`}>
                    <ListItemText key={`item-${props.i}-${i}`} primary={item} />
                </ListItem>
            ))}
        </List>
    )
}

const styles = theme => ({
    heading: {
        textTransform: 'uppercase',
        fontWeight: 500,
        letterSpacing: '3px',
        fontSize: '.9em',
        opacity: '.8',
        color: '#212121!important',
        fontFamily: "'Roboto' ,sans-serif",
        marginBottom: '1em',
    },
    cardTitle: {
        fontSize: '1em',
    },
    cardAction: {
        alignSelf: 'flex-end',
    },
    cardContent: {
        paddingTop: 0,
        '&:last-child': {
            paddingBottom: '12px',
        },
    },
    noHover: {
        '&:hover': {
            backgroundColor: 'inherit',
        },
    },
    hoverCursor: {
        '&:hover': {
            cursor: 'pointer',
        },
    },
    sectionConainer: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '160px',
        paddingBottom: '160px',
        display: 'flex',
        flexFlow: 'column',
        alignContent: 'center',
    },
    textRange: {
        marginBottom: 0,
    },
    experienceList: {
        padding: 0,
        '& > li': {
            paddingBottom: 0,
        },
    },
    progress: {
        color: '#16151C',
        width: '50px',
        height: '50px',
        marginLeft: 'calc(50% - 25px)'
    }
});

class TimelineComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded0: false,
            expanded1: false,
            resumeData: null,
        };

        fetch("data/resume.json").then(
            response => response.json()
        ).then(
            json => this.state.resumeData = json
            // json => console.log(json)
        )
    }    

    handleExpandClick(i) {
        this.setState(state => (
            { [`expanded${i}`]: !state[`expanded${i}`] }
            ));
    }    

    render() {
        const { classes } = this.props;
        console.log(this.state.resumeData)
        return (
            <div className={classes.sectionConainer}>
            <Typography variant="display1" className={classes.heading}>
                Working experience
            </Typography>
            <Card>
                <CardHeader
                    action={
                        <IconButton className={classes.noHover}>
                            <ExpandMoreIcon />
                        </IconButton>
                    }
                    classes={{
                        title: classes.cardTitle,
                        action: classes.cardAction,
                    }}
                    className={classes.hoverCursor}
                    onClick={() => this.handleExpandClick(0)}
                    title="Senior Systems/Network Administrator"
                    subheader="United States Air Force"
                />
                <Collapse in={this.state.expanded0}>
                <CardContent className={classes.cardContent}>
                    <Typography paragraph variant="body2" className={classes.textRange}>
                        December 2014 - Present.
                    </Typography>
                    {this.state.resumeData === null ? <CircularProgress className={classes.progress} /> : (
                        <ResumeList
                            classes={classes}
                            i={0}
                            data={this.state.resumeData}
                        />
                    )}
                </CardContent>
                </Collapse>
            </Card>
            </div>
        );
    }
}

TimelineComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(TimelineComponent);
