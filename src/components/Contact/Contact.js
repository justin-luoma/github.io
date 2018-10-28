import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import isEmail from 'validator/lib/isEmail';
import LinearProgress from '@material-ui/core/LinearProgress';

const grey = '#E8E8E8';
const orange = '#E4A570';

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
    underline: {
        '&:after': {
            borderBottomColor: '#E8E8E8',
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
            borderBottom: '2px solid #EF5350',
        },
    },
    disabled: {},
    error: {},
    focused: {},
    cssLabel: {
        '&$cssFocused': {
          color: '#E4A570',
            // color: '#E8E8E8',
        },
      },
     cssFocused: {},
     button: {
         backgroundColor: '#E4A570',
        //  backgroundColor: '#E8E8E8',
     },
     to: {
         display: 'none!important',
     },
};

class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          message: '',
          email: '',
          none: null,
          errorMessage: null,
          successMessage: null,
          messageAlreadySent: false,
          loading: false
        };
    }

    validateString(str) {
        if (!str || str < 1)
          return false;
        return true;
    }

    validateForm() {
        if (!this.validateString(this.state.name))
          throw new Error('Please enter your name.');
        if (!isEmail(this.state.email))
          throw new Error('Please enter a valid e-mail address.');
        if (!this.validateString(this.state.message))
          throw new Error('Please enter a message.');
    }

    onUpdateField(field, event) {
        this.setState({[field]: event.target.value});
    }

    onSubmit() {
        this.setState({successMessage: null});
        this.setState({errorMessage: null});
        if (this.state.none !== null) {
          return;
        }
        this.displayLoadingBar();
        try {
          if (this.state.messageAlreadySent)
            throw new Error('Your message has been already sent.');
          this.validateForm();
          this.submitData();
          if(this.state.errorMessage === null && this.state.errorMessage !== "pending") {
            this.setState({successMessage: 'Your message has been sent.'});
            this.setState({messageAlreadySent: true});
          }      
        } catch (err) {
          this.setState({errorMessage: err.toString()});
          this.setState({successMessage: null});
        }
        this.displayLoadingBar(false);
    }

    handleError(response) {
        this.setState({
          errorMessage: `server returned: ${response.statusText}`,
          successMessage: null,
         });
    }
    
    submitData() {
        this.setState({errorMessage: "pending"});
        fetch("https://go-mail.justinluoma.com/mail", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"name":this.state.name, "email":this.state.email, "message":this.state.message, "honeypot":this.state.none,}),
        }).then(
            response => response.ok ? this.setState({errorMessage: null}) : this.handleError(response)
        ).catch(
            error => console.error("Error:", error)
        );
        // let xhttp = new XMLHttpRequest();
        // xhttp.addEventListener("load", resp => {
        //     if (resp.currentTarget.status !== 200) {
        //       this.handleError(resp.currentTarget);
        //     } else {
        //       this.setState({errorMessage: null});
        //     }
        // });
        // xhttp.open("POST", "https://go-mail.justinluoma.com/mail", true);
        // xhttp.send(JSON.stringify({"name":this.state.name, "email":this.state.email, "message":this.state.message, "honeypot":this.state.none,}));
    }

    displayLoadingBar(to = true) {
        this.setState({loading: to});
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.sectionContainer}>
                <Typography variant="display1" className={classes.heading}>
                    Contact
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            helperText="Name"
                            fullWidth
                            autoComplete="name"
                            onChange={e => this.onUpdateField('name', e)}
                            InputProps={{
                                classes:{
                                    underline: classes.underline,
                                },
                            }}
                            InputLabelProps={{
                                FormLabelClasses:{
                                    root:classes.cssLabel,
                                    focused: classes.cssFocused
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                                required
                                id="email"
                                name="email"
                                label="E-Mail"
                                helperText="E-Mail"
                                fullWidth
                                autoComplete="email"
                                onChange={e => this.onUpdateField('email', e)}
                                InputProps={{
                                    classes:{
                                        underline: classes.underline,
                                    },
                                }}
                                InputLabelProps={{
                                    FormLabelClasses:{
                                        root:classes.cssLabel,
                                        focused: classes.cssFocused
                                    }
                                }}
                        />        
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                                    required
                                    id="message"
                                    name="message"
                                    label="Your message"
                                    helperText="Your message"
                                    fullWidth
                                    multiline
                                    rowsMax="10"
                                    onChange={e => this.onUpdateField('message', e)}
                                    InputProps={{
                                        classes:{
                                            underline: classes.underline,
                                        },
                                    }}
                                    InputLabelProps={{
                                        FormLabelClasses:{
                                            root:classes.cssLabel,
                                            focused: classes.cssFocused
                                        }
                                    }}
                        />        
                    </Grid>
                    <Grid item xs={12}>
                        {
                            (this.state.errorMessage !== null && this.state.errorMessage !== "pending") &&
                            <p className="error-message message">{this.state.errorMessage}</p>
                        }

                        {
                            this.state.successMessage != null &&
                            <p className="success-message message">{this.state.successMessage}</p>
                        }

                        {
                            this.state.loading &&
                            <LinearProgress mode="indeterminate" color="#EF5350"/>
                        }
                        <Button variant="contained" className={classes.button} onClick={this.onSubmit.bind(this)}>
                            Send Message
                        </Button>
                    </Grid>
                    <TextField
                        id="to"
                        name="to"
                        label="To"
                        helperText="E-Mail"
                        fullWidth
                        className={classes.to}
                        onChange={e => this.onUpdateField('none', e)}
                        InputProps={{
                            classes:{
                                underline: classes.underline,
                            },
                        }}
                        InputLabelProps={{
                            FormLabelClasses:{
                                root:classes.cssLabel,
                                focused: classes.cssFocused
                            }
                        }}
                        />        
                </Grid>
            </div>
        );
    }
}

ContactComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactComponent);
