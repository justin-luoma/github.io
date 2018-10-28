import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';

const styles = theme => ({
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
        backgroundColor: '#E4A570',
    },
    button: {
        margin: theme.spacing.unit,
      },
    icon: {
        marginRight: theme.spacing.unit,
    },
    svgPaper: {
        marginTop: theme.spacing.unit,
        display: 'flex',
        justifyContent: 'center',
    },
    svg: {
        height: '64px',
        width: '64px',
    },
});

class ProjectsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.sectionContainer}>
                <Typography variant="display1" className={classes.heading}>
                    Development Projects
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="headline" component="h2">Codeup Student Dashboard</Typography>
                                <Typography component="p">
                                    Full-stack Java web application using Spring and Thymeleaf, developed for internal use my Codeup to track students through the application process.
                                </Typography>
                                {/*<Paper elevation={0} className={classes.svgPaper}>*/}


                                    {/*<svg viewBox="0 0 128 128" className={classes.svg}>*/}
                                        {/*<path fill="#0074BD" d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zM50.522 58.402s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"></path><path fill="#EA2D2E" d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"></path><path fill="#0074BD" d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zM54.162 48.647s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"></path><path fill="#EA2D2E" d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"></path><path fill="#0074BD" d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"></path><path fill="#EA2D2E" d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zM53.211 115.037c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zM70.694 119.585h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zM89.982 115.037c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zM37.322 122.931c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701v-22.482h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"></path>*/}
                                    {/*</svg>*/}
                                    {/*<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -100 950 950" className={classes.svg}>*/}
                                        {/*<path fill="#77bc1f" d="M698.3 40c-10.8 25.8-24.5 50.3-41 72.8C585.1 40.6 487.1 0 385 0 173.8 0 0 174 0 385.5 0 491 43.2 592 119.6 664.8l14.2 12.6c69.4 58.5 157.3 90.7 248 90.7 200.8 0 369.6-157.4 383.9-358 10.5-98.2-18.3-222.4-67.4-370.1zm-524 627c-6.2 7.7-15.7 12.2-25.6 12.2-18.1 0-32.9-14.9-32.9-33s14.9-33 32.9-33c7.5 0 14.9 2.6 20.7 7.4 14.1 11.4 16.3 32.3 4.9 46.4zm522.4-115.4c-95 126.7-297.9 84-428 90.1 0 0-23.1 1.4-46.3 5.2 0 0 8.7-3.7 20-8 91.3-31.8 134.5-38 190-66.5 104.5-53.2 207.8-169.6 229.3-290.7C621.9 398.2 501.3 498.3 391.4 539c-75.3 27.8-211.3 54.8-211.3 54.8l-5.5-2.9C82 545.8 79.2 345.1 247.5 280.3c73.7-28.4 144.2-12.8 223.8-31.8 85-20.2 183.3-84 223.3-167.2 44.8 133.1 98.7 341.5 2.1 470.3z"/>*/}
                                    {/*</svg>*/}
                                    {/*<svg viewBox="0 0 128 128" className={classes.svg}>*/}
                                        {/*<path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>*/}
                                    {/*</svg>*/}
                                    {/*<svg viewBox="0 0 128 128" className={classes.svg}>*/}
                                        {/*<path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076h-36.125z"></path><path fill="#EBEBEB" d="M64 66.978h-14.641l-1.01-11.331h15.651v-11.064h-27.743l.264 2.969 2.72 30.489h24.759zM64 95.711l-.049.013-12.321-3.328-.788-8.823h-11.107l1.55 17.372 22.664 6.292.051-.015z"></path><path d="M28.034 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.816 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.855 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.591 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624l-1.284 14.349-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zM63.962 44.583v11.064h26.725l.221-2.487.505-5.608.265-2.969z"></path>*/}
                                    {/*</svg>*/}
                                    {/*<svg viewBox="0 0 128 128" className={classes.svg}>*/}
                                        {/*<path fill="#131313" d="M89.234 5.856h-7.384l7.679 8.333v3.967h-15.816v-4.645h7.678l-7.678-8.333v-3.971h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967h-15.817v-4.645h7.679l-7.679-8.333v-3.971h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839h-13.632v-16.949h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591h-36.365v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405h-15.757v-11.138h27.929000000000002l-.267 2.988-2.737 30.692h-24.925v-11.137z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883h-11.178999999999998l1.561 17.488 22.814 6.333.052-.015v-11.587z"></path><path fill="#fff" d="M77.792 76.886l-1.342 14.916-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647h-11.175z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.136999999999999h-26.903000000000002l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138h-12.247l-.223-2.503-.508-5.647-.267-2.988h13.245z"></path>*/}
                                    {/*</svg>*/}

                                    {/**/}

                                {/*</Paper>*/}
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                        variant="flat"
                                        className={classes.button}
                                        target={"_blank"}
                                        href={"https://github.com/StudentDashboardTeam/StudentDashboard"}>
                                    <Icon className={classNames(classes.icon, 'fab fa-github')} />
                                    View Source
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="headline" component="h2">Java Adlister</Typography>
                                <Typography component="p">
                                    Full-stack Java web application using servlets and JSPs with a MySQL database.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                        variant="flat"
                                        className={classes.button}
                                        target={"_blank"}
                                        href={"https://github.com/justin-luoma/java-adlister"}>
                                    <Icon className={classNames(classes.icon, 'fab fa-github')} />
                                    View Source
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="headline" component="h2">Java Contacts Manager</Typography>
                                <Typography component="p">
                                    Simple Java CLI contacts manager with filesystem persistence.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                        variant="flat"
                                        className={classes.button}
                                        target={"_blank"}
                                        href={"https://github.com/justin-luoma/contacts-manager"}>
                                    <Icon className={classNames(classes.icon, 'fab fa-github')} />
                                    View Source
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="headline" component="h2">CTD Server</Typography>
                                <Typography component="p">
                                    Go RESTful API server. Collects and serves json data from multiple sources with in-memory cache.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                        variant="flat"
                                        className={classes.button}
                                        target={"_blank"}
                                        href={"https://github.com/justin-luoma/ctd_server"}>
                                    <Icon className={classNames(classes.icon, 'fab fa-github')} />
                                    View Source
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="headline" component="h2">Movies Application</Typography>
                                <Typography component="p">
                                    Web application with RESTful backend.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                        variant="flat"
                                        className={classes.button}
                                        target={"_blank"}
                                        href={"https://github.com/justin-luoma/movies-application"}>
                                    <Icon className={classNames(classes.icon, 'fab fa-github')} />
                                    View Source
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="headline" component="h2">Weather Map</Typography>
                                <Typography component="p">
                                    Simple weather map web application that uses multiple APIs to get weather information for a point on a map.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                        variant="flat"
                                        className={classes.button}
                                        target={"_blank"}
                                        href={"https://github.com/justin-luoma/weather_map_api"}>
                                    <Icon className={classNames(classes.icon, 'fab fa-github')} />
                                    View Source
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="headline" component="h2">Go Movies JSON</Typography>
                                <Typography component="p">
                                    RESTful API server backend for Movies Application.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                        variant="flat"
                                        className={classes.button}
                                        target={"_blank"}
                                        href={"https://github.com/justin-luoma/go-movies-json"}>
                                    <Icon className={classNames(classes.icon, 'fab fa-github')} />
                                    View Source
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="headline" component="h2">Go Mail</Typography>
                                <Typography component="p">
                                    RESTful API server backend for this page's contact form.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                        variant="flat"
                                        className={classes.button}
                                        target={"_blank"}
                                        href={"https://github.com/justin-luoma/go-mail"}>
                                    <Icon className={classNames(classes.icon, 'fab fa-github')} />
                                    View Source
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="headline" component="h2">React Tic-Tac-Toe</Typography>
                                <Typography component="p">
                                    ReactJS tutorial with suggested improvements to demonstrate deeper understanding.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                        variant="flat"
                                        className={classes.button}
                                        target={"_blank"}
                                        href={"https://github.com/justin-luoma/react-tic-tac-toe"}>
                                    <Icon className={classNames(classes.icon, 'fab fa-github')} />
                                    View Source
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ProjectsComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectsComponent);
