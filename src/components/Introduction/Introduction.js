import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    introduction: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    avatar: {
        height: '150px',
        width: '150px',
        marginBottom: 10,
    },
});

class IntroductionComponent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.introduction}>
                <Avatar src="data/JustinLuoma5.png" className={classes.avatar} />
                <Typography paragraph>
                    Senior Systems Administrator with experience in Windows and Linux server administration,
                    Cisco networking and security, and system automation and scripting.
                    Currently attending Codeup's full-stack Java course with the intention of transitioning into software development.
                </Typography>
            </div>
        );
    }
}

IntroductionComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(IntroductionComponent);
