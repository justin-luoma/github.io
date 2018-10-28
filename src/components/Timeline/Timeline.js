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

function ResumeCard(props) {
    const classes = props.classes;
    const data = props.data;
    return (
        <Card className={classes.card}>
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
                onClick={() => props.onClick()}
                title={data.title}
                subheader={data.company}
            />
            <Collapse in={props.expanded}>
            <CardContent className={classes.cardContent}>
                <Typography paragraph variant="body2" className={classes.textRange}>
                    {data.dates}
                </Typography>
                    <ResumeList
                        classes={classes}
                        i={props.i}
                        data={data.info}
                    />
            </CardContent>
            </Collapse>
        </Card>
    );
}

function ResumeList(props) {
    const data = props.data;
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
    card: {
        marginBottom: '1em',
        backgroundColor: '#E4A570',
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
    sectionContainer: {
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
        '& > li:last-child': {
            paddingBottom: '12px',
        }
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
            resumeData: null,
        };
    }

    componentDidMount() {
        fetch("data/resume.json").then(
            response => response.json()
        ).then(
            json => this.setState(
                {resumeData: json}
            )
            // json => console.log(json)
        )
    }

    handleExpandClick(i) {
        for (let j = 0; j < this.state.resumeData.length; j++) {
            (i === j) ? (
            this.setState(state => {
                if (state[`expanded${i}`]) {
                    return ({
                        [`expanded${i}`]: !state[`expanded${i}`],
                    });
                }
                return ({
                    [`expanded${i}`]: !state[`expanded${i}`],
                });
            })
            ) : (
                this.setState(state => (
                    { [`expanded${j}`]: false }
                ))
            )
        }
        
    }    

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sectionContainer} style={this.state.maxWidth ? {width:'100%'}:{}}>
            <Typography variant="display1" className={classes.heading}>
                Working experience
            </Typography>
            {this.state.resumeData === null ? <CircularProgress className={classes.progress} /> : (
                this.state.resumeData.map((item, i) => {
                     return (
                        <ResumeCard
                            key={`card-${i}`}
                            classes={classes}
                            expanded={this.state[`expanded${i}`]}
                            onClick={() => this.handleExpandClick(i)}
                            i={i}
                            data={item}
                        />
                     )
                })
            )}
            </div>
        );
    }
}

TimelineComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(TimelineComponent);
