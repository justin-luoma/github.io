import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const styles = {
    '@global': {
        ul: {
            listStyle: 'none',
            color: '#EFEBE9',
            paddingLeft: '20px',
            paddingRight: '20px',
            marginTop: '20px',
            marginBottom: '20px',
        },
        'ul li ul:first-child': {
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: '10px',
            paddingRight: 0,
        }
    },
    sectionContainer: {
        width: '100%',
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '160px',
        paddingBottom: '160px',
        display: 'flex',
        flexFlow: 'column',
        alignContent: 'center',
    },
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
    paperConsole: {
        width: '100%',
        display: 'inline-block',
        background: '#263238',
    },
    consoleHeader: {
        background: '#CFD8DC',
        height: '20px',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
    },
    consoleButton: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        float: 'left',
        marginLeft: '5px',
        '&:nth-child(1)': {
            background: '#8BC34A',
        },
        '&:nth-child(2)': {
            background: '#FFB74D',
        },
        '&:nth-child(3)': {
            background: '#D32F2F',
        },
    },
    consoleButtons: {
        float: 'right',
        marginRight: '5px',
        marginTop: '5px',
    },
    noPaddingTop: {
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: '10px',
        paddingRight: 0,
    },
    htmlTags: {
        color: '#EF5350',
    },
    htmlText: {
        color: '#FFCC80',
    },
};

class ProgrammingComponent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sectionContainer}>
                <Typography variant="display1" className={classes.heading}>
                    Programming skills
                </Typography>
                <Paper className={classes.paperConsole} elevation={3}>
                    <div className={classes.consoleHeader}>
                        <div className={classes.consoleButtons}>
                            <div className={classes.consoleButton} />
                            <div className={classes.consoleButton} />
                            <div className={classes.consoleButton} />
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>&lt;<span className={classes.htmlTags}>html</span>&gt;</li>
                            <li>
                                <ul>
                                    <li>
                                        &lt;<span className={classes.htmlTags}>head</span>&gt;
                                        &lt;/<span className={classes.htmlTags}>head</span>&gt;
                                    </li>
                                <li>&lt;<span className={classes.htmlTags}>body</span>&gt;</li>
                                <li>
                                    <ul>
                                        <li>&lt;<span className={classes.htmlTags}>ul</span>&gt;</li>
                                        <ul className={classes.noPaddingTop}>
                                            <li>
                                                &lt;<span className={classes.htmlTags}>li</span>&gt;
                                                <span className={classes.htmlText}>JavaScript</span>
                                                &lt;/<span className={classes.htmlTags}>li</span>&gt;
                                            </li>
                                            <li>
                                                &lt;<span className={classes.htmlTags}>li</span>&gt;
                                                <span className={classes.htmlText}>React</span>
                                                &lt;/<span className={classes.htmlTags}>li</span>&gt;
                                            </li>
                                            <li>
                                                &lt;<span className={classes.htmlTags}>li</span>&gt;
                                                <span className={classes.htmlText}>Go</span>
                                                &lt;/<span className={classes.htmlTags}>li</span>&gt;
                                            </li>
                                            <li>
                                                &lt;<span className={classes.htmlTags}>li</span>&gt;
                                                <span className={classes.htmlText}>Java</span>
                                                &lt;/<span className={classes.htmlTags}>li</span>&gt;
                                            </li>
                                            <li>
                                                &lt;<span className={classes.htmlTags}>li</span>&gt;
                                                <span className={classes.htmlText}>Git</span>
                                                &lt;/<span className={classes.htmlTags}>li</span>&gt;
                                            </li>
                                            <li>
                                                &lt;<span className={classes.htmlTags}>li</span>&gt;
                                                <span className={classes.htmlText}>Powershell</span>
                                                &lt;/<span className={classes.htmlTags}>li</span>&gt;
                                            </li>                                    
                                            <li>
                                                &lt;<span className={classes.htmlTags}>li</span>&gt;
                                                <span className={classes.htmlText}>Docker</span>
                                                &lt;/<span className={classes.htmlTags}>li</span>&gt;
                                            </li>
                                            <li>
                                                &lt;<span className={classes.htmlTags}>li</span>&gt;
                                                <span className={classes.htmlText}>Bash</span>
                                                &lt;/<span className={classes.htmlTags}>li</span>&gt;
                                            </li>
                                            <li>
                                                &lt;<span className={classes.htmlTags}>li</span>&gt;
                                                <span className={classes.htmlText}>HTML5, CSS3</span>
                                                &lt;/<span className={classes.htmlTags}>li</span>&gt;
                                            </li>
                                        </ul>
                                        <li>&lt;/<span className={classes.htmlTags}>ul</span>&gt;</li>
                                        </ul>
                                    </li>
                                    <li>&lt;/<span className={classes.htmlTags}>body</span>&gt;</li>
                                </ul>
                            </li>
                            <li>&lt;/<span className={classes.htmlTags}>html</span>&gt;</li>
                        </ul>
                    </div>
                </Paper>
            </div>
        );
    }
}


ProgrammingComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProgrammingComponent);
