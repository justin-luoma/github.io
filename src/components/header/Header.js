import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import './Header.css';
const scrollTo = require('scroll-to');

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        backgroundColor: '#bdc8cc',
    },
    wrapper: {
        height: '100vh',
        position: 'relative',
    },
    icon: {
        color: '#16151B',
        fill: '#16151B',
    },
});

class HeaderComponent extends Component {
    state = {
        height: this.props.height,
        scrollTo: this.props.height
    };

    updateDimensions() {
        this.setState({
          height:window.innerHeight+'px',
          scrollTo: window.innerHeight
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    scrollClick() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-expo',
            duration: 1000,
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className="header">
                    <h3>Justin Luoma</h3>
                    <h6>Senior Systems Administrator</h6>
                    <h6>Future Software Developer</h6>
                </div>
                <div className="scroll-down-btn">
                <Button variant="fab" mini={true} className={classes.button}>
                    <KeyboardArrowDown className={classes.icon} onClick={this.scrollClick.bind(this)} />
                </Button>
                </div>
            </div>
        );
    }
}

HeaderComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeaderComponent);
