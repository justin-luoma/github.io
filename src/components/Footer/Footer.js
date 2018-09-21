import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
const scrollTo = require('scroll-to');

const styles = theme => ({
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
    footer: {
        textAlign: 'center',
        paddingTop: '40px',
        paddingBottom: '40px',
    },
    linkList: {
        paddingBottom: '20px',
        paddingTop: '20px',
    },
    label: {
        fontWeight: 'bold',
        fontSize: '1em',
    },
    icon: {
        marginRight: theme.spacing.unit,
    },
    span: {
        fontWeight: 'bold',
        fontSize: '1.5em',
    },
});

class FooterComponent extends Component {

    onScrollToTop() {
        scrollTo(0, 0, {
          ease: 'out-expo',
          duration: 1500
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classNames(classes.sectionContainer, classes.footer)}>
                    <div className={classes.linkList}>
                        <Button
                            href="https://github.com/justin-luoma"
                            target="_blank"
                            variant="flat"
                            classes={{label: classes.label}}
                        >
                            <Icon className={classNames(classes.icon, 'fab fa-github')} />
                            Github
                        </Button>
                        <span className={classes.span}>
                            /
                        </span>
                        <Button
                            href="https://www.linkedin.com/in/justin-luoma/
                            "target="_blank"
                            variant="flat"
                            classes={{label: classes.label}}
                        >
                            <Icon className={classNames(classes.icon, 'fab fa-linkedin')} />
                            LinkedIn
                        </Button>
                    </div>
                    <div>
                        <Button variant="flat" onClick={this.onScrollToTop} classes={{label: classes.label}}>
                            Back to Top
                        </Button>
                    </div>
            </div>
        );
    }
}

FooterComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterComponent);
