import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';



const styles = {
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
    card: {
        backgroundColor: '#E8E8E8',
        // backgroundColor: '#E4A570',
    },
    cardContent: {
        paddingLeft: '1em',
        paddingRight: '1em',
        paddingTop: 0,
        paddingBottom: 0,
    },
    cardTypography: {
        margin: 0,
    },
};

class CodeComponent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sectionContainer}>
                <Typography variant="display1" className={classes.heading}>
                VIEW THE CODE FOR THIS PAGE
                </Typography>
                <Card className={classes.card}>
                    <CardHeader avatar={
                            <Avatar
                                alt="Github Icon" src="./data/GitHub-Mark-64px.png"
                            />
                        }
                        title="justin-luoma/justin-luoma.github.io"
                        subheader="Github Repository"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.cardTypography} paragraph>
                        This application is made with React and Material UI. Check out the code on Github.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="https://github.com/justin-luoma/justin-luoma.github.io">View on Github</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

CodeComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CodeComponent);