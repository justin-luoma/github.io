import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    heading: {
        textTransform: 'uppercase',
        fontWeight: 500,
        letterSpacing: '3px',
        fontSize: '.9em',
        opacity: '.8',
        color: '#212121!important',
        fontFamily: "'Roboto' ,sans-serif",
    }
});

class TimelineComponent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Typography variant="display1" className={classes.heading}>
                Working experience
            </Typography>
        );
    }
}

TimelineComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(TimelineComponent);
